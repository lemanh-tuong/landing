import { changeCheckBox } from "pages/SettingsPage/actions/actionChangeCheckBox/actionChangeCheckBox";

export type ThunkChangeCheckBox = ThunkAction<typeof changeCheckBox>

const thunkChangeCheckBox = (fieldName: string, nowIndex: number): ThunkChangeCheckBox => dispatch => {
    dispatch(changeCheckBox({fieldName: fieldName, nowIndex: nowIndex}));
}

export default thunkChangeCheckBox;