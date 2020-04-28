import { actionDeleteCard } from "pages/SettingsPage/actions/actionsCard/actionDeleteCard/actionDeleteCard";
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkDeleteCard = ThunkAction<typeof actionDeleteCard>
export interface ThunkDeleteCardArg {
  indexSection: number;
  indexCard: number
}

const thunkDeleteCard = ({indexCard, indexSection}: ThunkDeleteCardArg): ThunkDeleteCard => dispatch => {
  dispatch(actionDeleteCard({nowIndexSection: indexSection, nowIndexCard: indexCard}))
}

export default createDispatchAction(thunkDeleteCard);
