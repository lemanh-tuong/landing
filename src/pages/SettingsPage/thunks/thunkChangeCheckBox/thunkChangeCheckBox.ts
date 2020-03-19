import { changeCheckBox } from "pages/SettingsPage/actions/actionChangeCheckBox/actionChangeCheckBox";
import { createDispatchAction } from "utils/functions/reduxActions";

export type ThunkChangeCheckBox = ThunkAction<typeof changeCheckBox>

const thunkChangeCheckBox = (fieldName: string, result: boolean, nowIndexSection: number): ThunkChangeCheckBox => dispatch => {
    dispatch(changeCheckBox({fieldName: fieldName, result: result, nowIndexSection: nowIndexSection}));
}

export default createDispatchAction(thunkChangeCheckBox);
