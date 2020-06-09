import { deleteSection } from 'pages/SettingsPage/actions/actionSections/actionDeleteSection/actionDeleteSection';
import { Option } from 'pages/SettingsPage/SettingsPage';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkDeleteSection = ThunkAction<typeof deleteSection>;
export interface ThunkDeleteSectionArg {
  arg: Option;
  nowIndexSection: number;
}

const thunkDeleteSection = ({ arg, nowIndexSection }: ThunkDeleteSectionArg): ThunkDeleteSection => (dispatch, getState) => {
  const { settingMainContentReducers, firebaseReducer } = getState();
  const { elements, pathName, pageName, id } = settingMainContentReducers;
  firebaseReducer.deleteSectionInFirebase({
    pageName,
    pathName,
    id,
    elements,
    indexDelete: nowIndexSection
  });
  dispatch(deleteSection(arg));
};

export default createDispatchAction(thunkDeleteSection);
