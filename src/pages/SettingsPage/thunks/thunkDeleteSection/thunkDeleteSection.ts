import { deleteSection } from 'pages/SettingsPage/actions/actionDeleteSection/actionDeleteSection';
import { Option } from 'pages/SettingsPage/SettingsPage';

const thunkDeleteSection = (arg: Option) => (dispatch: any) => {
  dispatch(deleteSection(arg));
};

export default thunkDeleteSection;
