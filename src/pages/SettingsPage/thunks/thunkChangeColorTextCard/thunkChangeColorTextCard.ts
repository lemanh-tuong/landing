import { actionChangeColorCardText } from "pages/SettingsPage/actions/actionChangeColorCardText/actionChangeColorCardText";
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkChangeColorTextCard = ThunkAction<typeof actionChangeColorCardText>

const thunkChangeColorTextCard = (fieldName: string, color: string, nowIndexSection: number, nowIndexCard: number): ThunkChangeColorTextCard => dispatch => {
  dispatch(actionChangeColorCardText({fieldName: fieldName, color: color, nowIndexSection: nowIndexSection, nowIndexCard: nowIndexCard}))
}

export default createDispatchAction(thunkChangeColorTextCard);
