import { actionChangeInputButton2, ActionChangeInputButton2Payload } from 'pages/SettingsPage/actions/actionButton2/actionChangeInputButton2/actionChangeInputButton2';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkChangeInputButton2 = ThunkAction<typeof actionChangeInputButton2>;
type ThunkChangeInputButton2Arg = ActionChangeInputButton2Payload;
const thunkChangeInputButton2 = ({ fieldName, value, nowIndexSection, nowIndexButton }: ThunkChangeInputButton2Arg): ThunkChangeInputButton2 => dispatch => {
  dispatch(actionChangeInputButton2({ fieldName: fieldName, value: value, nowIndexSection: nowIndexSection, nowIndexButton: nowIndexButton }));
};

export default createDispatchAction(thunkChangeInputButton2);
