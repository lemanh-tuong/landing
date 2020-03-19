import { actionChangeColor } from "pages/SettingsPage/actions/actionChangeColor/actionChangeColor";
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkChangeColor = ThunkAction<typeof actionChangeColor>

const thunkChangeColor = (fieldName: string, color: string, nowIndexSection: number): ThunkChangeColor => dispatch => {
    dispatch(actionChangeColor({fieldName: fieldName, color: color, nowIndexSection: nowIndexSection}));
}

export default createDispatchAction(thunkChangeColor);
