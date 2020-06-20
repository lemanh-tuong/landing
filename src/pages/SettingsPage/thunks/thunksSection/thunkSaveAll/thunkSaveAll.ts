import { NavProps } from 'components/Nav/Nav';
import { actionSaveAll } from 'pages/SettingsPage/actions/actionSections/actionSaveAll/actionSaveAll';
import { Option } from 'pages/SettingsPage/SettingsPage';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkSaveAll = ThunkAction<typeof actionSaveAll>;
export interface ThunkSaveAllArg {
  sections: Option[];
  pageName: string;
  navItems: NavProps['navItems'];
  logo: NavProps['logo'];
}
const thunkSaveAll = (): ThunkSaveAll => async (dispatch, getState) => {
  const { navReducer, settingMainContentReducers, firebaseReducer } = getState();
  const { navItems, logo } = navReducer;
  const { pageName, elements, id, pathName } = settingMainContentReducers;
  await Promise.all([
    await firebaseReducer.addToPage({
      id,
      pathName,
      elements,
      pageName,
    }),
    await firebaseReducer.writeDatabase({ ref: 'nav', value: { logo: logo, navItems: navItems } }),
  ]);
  dispatch(actionSaveAll());
};

export default createDispatchAction(thunkSaveAll);
