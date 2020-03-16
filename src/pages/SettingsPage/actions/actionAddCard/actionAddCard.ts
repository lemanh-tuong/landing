import { CardProps } from "components/Card/Card";
import { createAction } from "utils/functions/reduxActions";

export interface ActionAddCard {
  type: "ADD_CARD";
  payload: {
    data: CardProps;
    nowIndexSection: number;
  }
}

const actionAddCard = createAction('ADD_CARD', (payload: ActionAddCard['payload']) => ({
  ...payload
}))

export { actionAddCard }
