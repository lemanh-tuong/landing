import { createDispatchAction } from 'utils/functions/reduxActions';
import { moveSection } from '../../actions/actionMove/actionMove';
import { Option } from '../../SettingsPage';

type ThunkAddData = ThunkAction<typeof moveSection>;

const thunkMoveSection = (elements: Option[]): ThunkAddData => dispatch => {
  dispatch(moveSection(elements));
};

export default createDispatchAction(thunkMoveSection);
