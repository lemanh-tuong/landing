import deleteSectionInFirebase from 'firebase/database/deleteSectionInFirebase';
import deleteStorage from 'firebase/storage/deleteStorage';
import { deleteSection } from 'pages/SettingsPage/actions/actionDeleteSection/actionDeleteSection';
import { Option } from 'pages/SettingsPage/SettingsPage';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkDeleteSection = ThunkAction<typeof deleteSection>
export interface ThunkDeleteSectionArg {
  arg: Option;
  elements: Option[];
  nowIndexSection: number;
}

const thunkDeleteSection = ({arg, elements, nowIndexSection}: ThunkDeleteSectionArg): ThunkDeleteSection => dispatch => {
  deleteSectionInFirebase({pageName: 'HomePage', elements: elements, indexDelete: nowIndexSection})
  deleteStorage(arg.sectionId);
  dispatch(deleteSection(arg));
};

export default createDispatchAction(thunkDeleteSection);
