import deleteStorage from 'firebase/storage/deleteStorage';
import { deleteSection } from 'pages/SettingsPage/actions/actionDeleteSection/actionDeleteSection';
import { Option } from 'pages/SettingsPage/SettingsPage';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkDeleteSection = ThunkAction<typeof deleteSection>;
export interface ThunkDeleteSectionArg {
  arg: Option;
  nowIndexSection: number;
}

const thunkDeleteSection = ({arg, nowIndexSection}: ThunkDeleteSectionArg): ThunkDeleteSection => dispatch => {
  dispatch(deleteSection({...arg, nowIndexSection: nowIndexSection}));
  deleteStorage(arg.sectionId);
};

export default createDispatchAction(thunkDeleteSection);
