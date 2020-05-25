import { actionChangeInputNav, ActionChangeInputNavPayload } from 'pages/SettingsPage/actions/actionsNav/actionChangeInputNav/actionChangeInputNav';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkChangeInputNav = ThunkAction<typeof actionChangeInputNav>;

const thunkChangeInputNav = ({fieldName, value, nowIndex, type}: ActionChangeInputNavPayload): ThunkChangeInputNav => dispatch => {
  dispatch(actionChangeInputNav({fieldName: fieldName, value: value, nowIndex: nowIndex, type:type}));
};

export default createDispatchAction(thunkChangeInputNav);
