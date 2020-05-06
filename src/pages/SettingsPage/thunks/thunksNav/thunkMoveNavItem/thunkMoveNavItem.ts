import { actionMoveNavItem, ActionMoveNavItemPayload } from 'pages/SettingsPage/actions/actionsNav/actionMoveNavItem/actionMoveNavItem';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkMoveNavItem = ThunkAction<typeof actionMoveNavItem>;

const thunkMoveNavItem = ({navData}: ActionMoveNavItemPayload): ThunkMoveNavItem => dispatch => {
  dispatch(actionMoveNavItem({navData: navData}));
};

export default createDispatchAction(thunkMoveNavItem);
