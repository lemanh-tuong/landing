import { CardProps } from "components/Card/Card";
import { createAction } from "utils/functions/reduxActions";

export interface ActionMoveCard {
  type: "MOVE_CARD",
  payload: {
    newChild: CardProps[];
    nowIndexSection: number;
  }
}

const actionMoveCard = createAction('MOVE_CARD', (payload: ActionMoveCard['payload']) => ({
  ...payload
}))

export { actionMoveCard };


