import { actionAddCard } from "pages/SettingsPage/actions/actionAddCard/actionAddCard";
import { CardProps } from "components/Card/Card";
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkAddCard = ThunkAction<typeof actionAddCard>

const thunkAddCard = (data: CardProps, nowIndexSection: number): ThunkAddCard => dispatch => {
  dispatch(actionAddCard({data: {...data}, nowIndexSection: nowIndexSection}));
}

export default createDispatchAction(thunkAddCard);
