import { moveSection } from 'pages/SettingsPage/actions/actionSections/actionMoveSection/actionMoveSection';
import { Option } from 'pages/SettingsPage/SettingsPage';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkAddData = ThunkAction<typeof moveSection>;

const thunkMoveSection = (elements: Option[]): ThunkAddData => dispatch => {
  dispatch(moveSection(elements));
};

export default createDispatchAction(thunkMoveSection);
