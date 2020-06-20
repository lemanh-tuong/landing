import { moveUpSection } from 'pages/SettingsPage/actions/actionSections/actionMoveUpSection/actionMoveUpSection';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkMoveUpSection = ThunkAction<typeof moveUpSection>;

const thunkMoveUpSection = (nowIndexSection: number): ThunkMoveUpSection => dispatch => {
  dispatch(moveUpSection({ nowIndexSection: nowIndexSection }));
};

export default createDispatchAction(thunkMoveUpSection);
