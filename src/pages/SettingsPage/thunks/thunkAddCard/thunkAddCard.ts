import { CardProps } from "components/Card/Card";
import { actionAddCard } from "pages/SettingsPage/actions/actionAddCard/actionAddCard";
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkAddCard = ThunkAction<typeof actionAddCard>
export interface ThunkAddCardArg {
  data: CardProps,
  nowIndexSection: number
}
const thunkAddCard = ({data, nowIndexSection}: ThunkAddCardArg): ThunkAddCard => dispatch => {
  dispatch(actionAddCard({data: {...data}, nowIndexSection: nowIndexSection}));
}

export default createDispatchAction(thunkAddCard);
