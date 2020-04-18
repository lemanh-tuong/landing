import { createDispatchAction } from 'utils/functions/reduxActions';
import { actionAddData } from '../../actions/actionAddData/actionAddData';
import { Option } from '../../SettingsPage';

type ThunkAddSection = ThunkAction<typeof actionAddData>;
export interface ThunkAddSectionArg {
  arg: Option,
  index?: number
}
const thunkAddSection = ({arg, index}: ThunkAddSectionArg): ThunkAddSection => dispatch => {
  if(typeof index === 'number') {
    dispatch(actionAddData({...arg}, index));
  } else {
    dispatch(actionAddData(arg))
  }
};

export default createDispatchAction(thunkAddSection);
