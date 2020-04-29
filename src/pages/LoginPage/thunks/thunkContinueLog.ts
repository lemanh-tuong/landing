import { createDispatchAction } from "utils/functions/reduxActions";
import { ActionContinueLogPayload } from "../actions/actionContinueLog";
import { actionLogin } from "../actions/actionLogin";

type ThunkContinueLog = ThunkAction<typeof actionLogin>

const thunkContinueLog = ({token, refreshToken}: ActionContinueLogPayload): ThunkContinueLog => dispatch => {
  dispatch(actionLogin.success({token: token, refreshToken: refreshToken}))
}

export default createDispatchAction(thunkContinueLog);
