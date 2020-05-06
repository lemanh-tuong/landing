import { actionAddNavItem, ActionAddNavItemPayload } from 'pages/SettingsPage/actions/actionsNav/actionAddNavItem/actionAddNavItem';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkAddNavItem = ThunkAction<typeof actionAddNavItem>;

const thunkAddNavItem = ({indexInsert, newItem}: ActionAddNavItemPayload): ThunkAddNavItem => dispatch => {
  dispatch(actionAddNavItem({indexInsert: indexInsert, newItem: newItem}));
};

export default createDispatchAction(thunkAddNavItem);
