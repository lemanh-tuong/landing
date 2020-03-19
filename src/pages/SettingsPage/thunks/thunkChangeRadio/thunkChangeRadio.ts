import { changeRadio } from "pages/SettingsPage/actions/actionChangeRadio/actionChangeRadio";
import { createDispatchAction } from "utils/functions/reduxActions";

export type ThunkChangeRadio = ThunkAction<typeof changeRadio>

const thunkChangeRadio = (fieldName: string, value: string, nowIndexSection: number):ThunkChangeRadio => dispatch => {
    dispatch(changeRadio({fieldName: fieldName, value: value, nowIndexSection: nowIndexSection}))
}

export default createDispatchAction(thunkChangeRadio);
