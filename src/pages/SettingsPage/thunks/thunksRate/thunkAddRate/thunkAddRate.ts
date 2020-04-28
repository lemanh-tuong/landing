import { RateProps } from "components/Rate/Rate";
import { actionAddRate } from "pages/SettingsPage/actions/actionsRate/actionAddRate/actionAddRate";
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkAddRate = ThunkAction<typeof actionAddRate>

export interface ThunkAddRateArg {
  nowIndexSection: number;
  nowIndexRate: number;
  rateProperty: RateProps;
}

const thunkAddRate = ({nowIndexSection, nowIndexRate, rateProperty}: ThunkAddRateArg): ThunkAddRate => dispatch => {
  dispatch(actionAddRate({nowIndexSection: nowIndexSection, nowIndexRate: nowIndexRate, rateProperty: rateProperty}));
}

export default createDispatchAction(thunkAddRate);
