import { createDispatchAction } from "utils/functions/reduxActions";
import { actionContinueLog, ActionContinueLogPayload } from "../actions/actionContinueLog";

type ThunkContinueLog = ThunkAction<typeof actionContinueLog>

const thunkContinueLog = ({token, refreshToken}: ActionContinueLogPayload): ThunkContinueLog => dispatch => {
  dispatch(actionContinueLog({token: token, refreshToken: refreshToken}))
}

export default createDispatchAction(thunkContinueLog);
