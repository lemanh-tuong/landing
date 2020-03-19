import { deleteSection } from 'pages/SettingsPage/actions/actionDeleteSection/actionDeleteSection';
import { Option } from 'pages/SettingsPage/SettingsPage';
import deleteStorage from 'firebase/storage/deleteStorage';
import { createDispatchAction } from 'utils/functions/reduxActions';

const thunkDeleteSection = (arg: Option) => (dispatch: any) => {
  dispatch(deleteSection(arg));
  deleteStorage(arg.sectionId)
};

export default createDispatchAction(thunkDeleteSection);
