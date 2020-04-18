import { actionChangeColor } from "pages/SettingsPage/actions/actionChangeColor/actionChangeColor";
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkChangeColor = ThunkAction<typeof actionChangeColor>
export interface ThunkChangeColorArg {
  fieldName: string;
  color: string;
  nowIndexSection: number
}

const thunkChangeColor = ({fieldName, color, nowIndexSection}: ThunkChangeColorArg): ThunkChangeColor => dispatch => {
    dispatch(actionChangeColor({fieldName: fieldName, color: color, nowIndexSection: nowIndexSection}));
}

export default createDispatchAction(thunkChangeColor);
