import { actionDeleteNavItem, ActionDeleteNavItemPayload } from 'pages/SettingsPage/actions/actionsNav/actionDeleteNavItem/actionDeleteNavItem';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkDeleteNavItem = ThunkAction<typeof actionDeleteNavItem>;

const thunkDeleteNavItem = ({ indexDelete }: ActionDeleteNavItemPayload): ThunkDeleteNavItem => dispatch => {
  dispatch(actionDeleteNavItem({ indexDelete: indexDelete }));
};

export default createDispatchAction(thunkDeleteNavItem);
