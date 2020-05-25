import addToPage from 'firebase/database/addToPage';
import { actionAddSection } from 'pages/SettingsPage/actions/actionSections/actionAddSection/actionAddSection';
import { createDispatchAction } from 'utils/functions/reduxActions';
import { Option } from '../../../SettingsPage';

type ThunkAddSection = ThunkAction<typeof actionAddSection>;

export interface ThunkAddSectionArg {
  newSection: Option;
  index?: number;
}

const thunkAddSection = ({ newSection, index }: ThunkAddSectionArg): ThunkAddSection => (dispatch, getState) => {
  const { settingMainContentReducers } = getState();
  const { id, elements, pathName, pageName } = settingMainContentReducers;
  if(typeof index === 'number') {
    addToPage({pageName: pageName, pathName: pathName, id:id, elements: elements, newSection: newSection, indexInsert: index });
    dispatch(actionAddSection({...newSection}, index));
  } else {
    addToPage({pageName: pageName, pathName: pathName, id:id, elements: elements, newSection: newSection });
    dispatch(actionAddSection(newSection));
  }
};

export default createDispatchAction(thunkAddSection);
