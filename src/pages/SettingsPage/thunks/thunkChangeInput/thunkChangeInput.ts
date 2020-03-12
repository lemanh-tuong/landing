import { addData } from '../../actions/actionAddData/actionAddData';
import { Option } from '../../SettingsPage';
import { changeInput } from 'pages/SettingsPage/actions/actionChangeInput/actionChangeInput';

type ThunkChangeInput = ThunkAction<typeof changeInput>;

const thunkChangeInput = (type: string, value: string, index: number): ThunkChangeInput => (dispatch: any) => {
  dispatch(changeInput({type: type, value: value, nowIndex: index}))
};

export default thunkChangeInput;