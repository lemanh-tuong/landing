import { NavProps } from 'components/Nav/Nav';
import addToPage from 'firebase/database/addToPage';
import { writeFirebase } from 'firebase/database/writeFirebase';
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
  const { navReducer, settingMainContentReducers } = getState();
  const  { navItems, logo, buttons } = navReducer;
  const { pageName, elements, id, pathName } = settingMainContentReducers;
  console.log(settingMainContentReducers);
  await addToPage({
    id,
    pathName,
    elements,
    pageName
  });
  await writeFirebase({ref: 'nav', value: {logo: logo, navItems: navItems, buttons: buttons}});
  dispatch(actionSaveAll());
};

export default createDispatchAction(thunkSaveAll);
