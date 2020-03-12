import { changeCheckBox } from "pages/SettingsPage/actions/actionChangeCheckBox/actionChangeCheckBox";

export type ThunkChangeCheckBox = ThunkAction<typeof changeCheckBox>

const thunkChangeCheckBox = (type: string, nowIndex: number): ThunkChangeCheckBox => dispatch => {
    dispatch(changeCheckBox({type: type, nowIndex: nowIndex}));
}

export default thunkChangeCheckBox;