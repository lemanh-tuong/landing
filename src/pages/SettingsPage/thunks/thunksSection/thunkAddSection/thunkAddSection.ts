import addToPage from 'firebase/database/addToPage';
import { actionAddSection } from 'pages/SettingsPage/actions/actionSections/actionAddSection/actionAddSection';
import { createDispatchAction } from 'utils/functions/reduxActions';
import { Option } from '../../../SettingsPage';

type ThunkAddSection = ThunkAction<typeof actionAddSection>;

export interface ThunkAddSectionArg {
  nowSections: Option[];
  newSection: Option;
  pageName: string;
  index?: number;
}

const thunkAddSection = ({nowSections, newSection, index, pageName}: ThunkAddSectionArg): ThunkAddSection => dispatch => {
  if(typeof index === 'number') {
    addToPage({pageName: pageName, elements: nowSections, newSection: newSection, indexInsert: index});
    dispatch(actionAddSection({...newSection}, index));
  } else {
    addToPage({pageName: pageName, elements: nowSections, newSection: newSection});
    dispatch(actionAddSection(newSection));
  }
};

export default createDispatchAction(thunkAddSection);
