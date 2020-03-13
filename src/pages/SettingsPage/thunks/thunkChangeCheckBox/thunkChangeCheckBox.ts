import { changeCheckBox } from "pages/SettingsPage/actions/actionChangeCheckBox/actionChangeCheckBox";

export type ThunkChangeCheckBox = ThunkAction<typeof changeCheckBox>

const thunkChangeCheckBox = (fieldName: string, result: boolean, nowIndex: number): ThunkChangeCheckBox => dispatch => {
    dispatch(changeCheckBox({fieldName: fieldName, result: result, nowIndex: nowIndex}));
}

export default thunkChangeCheckBox;