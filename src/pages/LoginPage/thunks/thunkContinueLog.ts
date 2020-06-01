import { createDispatchAction } from 'utils/functions/reduxActions';
import { actionContinueLog, ActionContinueLogPayload } from '../actions/actionContinueLog';

type ThunkContinueLog = ThunkAction<typeof actionContinueLog>;

const thunkContinueLog = ({token}: ActionContinueLogPayload): ThunkContinueLog => dispatch => {
  dispatch(actionContinueLog({token: token}));
};

export default createDispatchAction(thunkContinueLog);
