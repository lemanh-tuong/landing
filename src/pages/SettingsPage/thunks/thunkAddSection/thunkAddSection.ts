import addToFireBase from 'firebase/database/addToFireBase';
import { createDispatchAction } from 'utils/functions/reduxActions';
import { actionAddData } from '../../actions/actionAddData/actionAddData';
import { Option } from '../../SettingsPage';

type ThunkAddSection = ThunkAction<typeof actionAddData>;
export interface ThunkAddSectionArg {
  nowSections: Option[];
  arg: Option;
  index?: number;
}
const thunkAddSection = ({nowSections, arg, index}: ThunkAddSectionArg): ThunkAddSection => dispatch => {
  if(typeof index === 'number') {
    addToFireBase({pageName: 'HomePage', elements: nowSections, newSection: arg, indexInsert: index})
    dispatch(actionAddData({...arg}, index));
  } else {
    addToFireBase({pageName: 'HomePage', elements: nowSections, newSection: arg})
    dispatch(actionAddData(arg))
  }
};

export default createDispatchAction(thunkAddSection);
