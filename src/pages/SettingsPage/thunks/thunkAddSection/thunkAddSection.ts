import { addData } from '../../actions/actionAddData/actionAddData';
import { Option } from '../../SettingsPage';

type ThunkAddSection = ThunkAction<typeof addData>;

const thunkAddSection = (arg: Option, index?: number): ThunkAddSection => (dispatch: any) => {
  if(!!index || index === 0) {
    dispatch(addData({...arg}, index));
  } else {
    dispatch(addData(arg))
  }
};

export default thunkAddSection;
