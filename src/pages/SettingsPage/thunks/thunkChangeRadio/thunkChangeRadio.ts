import { changeRadio } from "pages/SettingsPage/actions/actionChangeRadio/actionChangeRadio";
import { createDispatchAction } from "utils/functions/reduxActions";

export type ThunkChangeRadio = ThunkAction<typeof changeRadio>
export interface ThunkChangeRadioArg {
  fieldName: string;
  value: string;
  nowIndexSection: number
}
const thunkChangeRadio = ({fieldName, value, nowIndexSection}: ThunkChangeRadioArg):ThunkChangeRadio => dispatch => {
    dispatch(changeRadio({fieldName: fieldName, value: value, nowIndexSection: nowIndexSection}))
}

export default createDispatchAction(thunkChangeRadio);
