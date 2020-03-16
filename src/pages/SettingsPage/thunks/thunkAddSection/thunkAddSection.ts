import { actionAddData } from '../../actions/actionAddData/actionAddData';
import { Option } from '../../SettingsPage';

type ThunkAddSection = ThunkAction<typeof actionAddData>;

const thunkAddSection = (arg: Option, index?: number): ThunkAddSection => (dispatch: any) => {
  if(!!index || index === 0) {
    dispatch(actionAddData({...arg}, index));
  } else {
    dispatch(actionAddData(arg))
  }
};

export default thunkAddSection;
