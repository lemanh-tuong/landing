import { actionChangeColor } from "pages/SettingsPage/actions/actionChangeColor/actionChangeColor";

type ThunkChangeColor = ThunkAction<typeof actionChangeColor>

const thunkChangeColor = (fieldName: string, color: string, nowIndex: number): ThunkChangeColor => dispatch => {
    dispatch(actionChangeColor({fieldName: fieldName, color: color, nowIndex: nowIndex}));
}

export default thunkChangeColor;