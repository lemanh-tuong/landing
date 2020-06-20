import { actionAddSection } from 'pages/SettingsPage/actions/actionSections/actionAddSection/actionAddSection';
import { createDispatchAction } from 'utils/functions/reduxActions';
import { Option } from '../../../SettingsPage';

type ThunkAddSection = ThunkAction<typeof actionAddSection>;

export interface ThunkAddSectionArg {
  newSection: Option;
  index?: number;
}

const thunkAddSection = ({ newSection, index }: ThunkAddSectionArg): ThunkAddSection => (dispatch, getState) => {
  const { settingMainContentReducers, firebaseReducer } = getState();
  const { id, elements, pathName, pageName } = settingMainContentReducers;
  if (typeof index === 'number') {
    firebaseReducer.addToPage({ pageName: pageName, pathName: pathName, id: id, elements: elements, newSection: newSection, indexInsert: index });
    dispatch(actionAddSection({ ...newSection }, index));
  } else {
    firebaseReducer.addToPage({ pageName: pageName, pathName: pathName, id: id, elements: elements, newSection: newSection });
    dispatch(actionAddSection(newSection));
  }
};

export default createDispatchAction(thunkAddSection);
