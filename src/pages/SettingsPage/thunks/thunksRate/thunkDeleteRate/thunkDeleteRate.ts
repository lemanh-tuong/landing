import { actionDeleteRate } from "pages/SettingsPage/actions/actionsRate/actionDeleteRate/actionDeleteRate";
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkDeleteRate = ThunkAction<typeof actionDeleteRate>

export interface ThunkDeleteRateArg {
  nowIndexSection: number;
  nowIndexRate: number;
}

const thunkDeleteRate = ({nowIndexSection, nowIndexRate}: ThunkDeleteRateArg): ThunkDeleteRate => dispatch => {
  dispatch(actionDeleteRate({nowIndexSection: nowIndexSection, nowIndexRate: nowIndexRate}));
}

export default createDispatchAction(thunkDeleteRate);
