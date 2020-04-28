import { actionMoveRate, ActionMoveRatePayload } from "pages/SettingsPage/actions/actionsRate/actionMoveRate/actionMoveRate";
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkMoveRate = ThunkAction<typeof actionMoveRate>

const thunkMoveRate = ({nowIndexSection, data}:ActionMoveRatePayload):ThunkMoveRate => dispatch => {
  dispatch(actionMoveRate({data: data, nowIndexSection: nowIndexSection}));
}

export default createDispatchAction(thunkMoveRate);
