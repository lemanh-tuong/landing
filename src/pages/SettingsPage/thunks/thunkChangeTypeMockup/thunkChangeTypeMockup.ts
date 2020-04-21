import { MockUpOption } from "components/MockUp/MockUp";
import { actionChangeTypeMockup } from "pages/SettingsPage/actions/actionChangeTypeMockup/actionChangeTypeMockup";
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkChangeTypeMockup = ThunkAction<typeof actionChangeTypeMockup>
export interface ThunkChangeTypeMockupArg {
  typeMockUp: Pick<MockUpOption, 'typeMockUp'>;
  nowIndexSection: number;
}

const thunkChangeTypeMockup = ({typeMockUp, nowIndexSection}: ThunkChangeTypeMockupArg):ThunkChangeTypeMockup => dispatch => {
  dispatch(actionChangeTypeMockup({typeMockUp: typeMockUp, nowIndexSection: nowIndexSection}));
}

export default createDispatchAction(thunkChangeTypeMockup);
