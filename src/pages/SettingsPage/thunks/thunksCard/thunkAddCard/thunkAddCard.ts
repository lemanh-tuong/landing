import { CardProps } from "components/Card/Card";
import { actionAddCard } from "pages/SettingsPage/actions/actionsCard/actionAddCard/actionAddCard";
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkAddCard = ThunkAction<typeof actionAddCard>
export interface ThunkAddCardArg {
  data: CardProps;
  nowIndexSection: number;
  nowIndexCard?: number;
}
const thunkAddCard = ({data, nowIndexSection, nowIndexCard}: ThunkAddCardArg): ThunkAddCard => dispatch => {
  dispatch(actionAddCard({data: {...data}, nowIndexSection: nowIndexSection, nowIndexCard: nowIndexCard}));
}

export default createDispatchAction(thunkAddCard);
