import { actionAddSection } from 'pages/SettingsPage/actions/actionSections/actionAddSection/actionAddSection';
import { createDispatchAction } from 'utils/functions/reduxActions';
import { Option } from '../../../SettingsPage';

type ThunkAddSection = ThunkAction<typeof actionAddSection>;

export interface ThunkAddSectionArg {
  newSection: Option;
  index?: number;
}

const thunkAddSection = ({ newSection, index }: ThunkAddSectionArg): ThunkAddSection => dispatch => {
  // const { id, elements, pathName, pageName } = settingMainContentReducers;
  if(typeof index === 'number') {
    dispatch(actionAddSection({...newSection}, index));
  } else {
    dispatch(actionAddSection(newSection));
  }
};

export default createDispatchAction(thunkAddSection);
