import { actionChangeColorCardText } from "pages/SettingsPage/actions/actionChangeColorCardText/actionChangeColorCardText";
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkChangeColorTextCard = ThunkAction<typeof actionChangeColorCardText>
export interface ThunkChangeColorTextCardArg {
  fieldName: string;
  color: string;
  nowIndexSection: number;
  nowIndexCard: number
}
const thunkChangeColorTextCard = ({fieldName, color, nowIndexSection, nowIndexCard}: ThunkChangeColorTextCardArg): ThunkChangeColorTextCard => dispatch => {
  dispatch(actionChangeColorCardText({fieldName: fieldName, color: color, nowIndexSection: nowIndexSection, nowIndexCard: nowIndexCard}))
}

export default createDispatchAction(thunkChangeColorTextCard);
