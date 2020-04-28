import deleteSectionInFirebase from 'firebase/database/deleteSectionInFirebase';
import { deleteSection } from 'pages/SettingsPage/actions/actionSections/actionDeleteSection/actionDeleteSection';
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
  dispatch(deleteSection(arg));
};

export default createDispatchAction(thunkDeleteSection);
