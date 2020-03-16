import { Option } from '../../SettingsPage';
import { changeInput } from 'pages/SettingsPage/actions/actionChangeInput/actionChangeInput';

type ThunkChangeInput = ThunkAction<typeof changeInput>;

const thunkChangeInput = (fieldName: string, value: string, index: number): ThunkChangeInput => (dispatch: any) => {
  dispatch(changeInput({fieldName: fieldName, value: value, nowIndex: index}))
};

export default thunkChangeInput;
