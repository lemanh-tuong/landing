import addToFireBase from 'firebase/database/addToFireBase';
import { actionAddSection } from 'pages/SettingsPage/actions/actionSections/actionAddSection/actionAddSection';
import { createDispatchAction } from 'utils/functions/reduxActions';
import { Option } from '../../../SettingsPage';

type ThunkAddSection = ThunkAction<typeof actionAddSection>;
export interface ThunkAddSectionArg {
  nowSections: Option[];
  arg: Option;
  index?: number;
}
const thunkAddSection = ({nowSections, arg, index}: ThunkAddSectionArg): ThunkAddSection => dispatch => {
  if(typeof index === 'number') {
    addToFireBase({pageName: 'HomePage', elements: nowSections, newSection: arg, indexInsert: index})
    dispatch(actionAddSection({...arg}, index));
  } else {
    addToFireBase({pageName: 'HomePage', elements: nowSections, newSection: arg})
    dispatch(actionAddSection(arg))
  }
};

export default createDispatchAction(thunkAddSection);
