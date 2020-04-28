import { actionChangeColorCard2Text } from "pages/SettingsPage/actions/actionCard2/actionChangeColorCard2Text/actionChangeColorCard2Text";
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkChangeColorTextCard2 = ThunkAction<typeof actionChangeColorCard2Text>
export interface ThunkChangeColorTextCard2Arg {
  fieldName: string;
  color: string;
  nowIndexSection: number;
  nowIndexCard: number
}
const thunkChangeColorTextCard2 = ({fieldName, color, nowIndexSection, nowIndexCard}: ThunkChangeColorTextCard2Arg): ThunkChangeColorTextCard2 => dispatch => {
  dispatch(actionChangeColorCard2Text({fieldName: fieldName, color: color, nowIndexSection: nowIndexSection, nowIndexCard: nowIndexCard}))
}

export default createDispatchAction(thunkChangeColorTextCard2);
