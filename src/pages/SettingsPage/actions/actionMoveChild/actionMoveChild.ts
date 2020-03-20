import { createAction } from "utils/functions/reduxActions";
import { CardProps } from "components/Card/Card";

export interface ActionMoveChild {
  type: "MOVE_CHILD",
  payload: {
    newChild: CardProps[];
    nowIndexSection: number;
  }
}

const actionMoveChild = createAction('MOVE_CHILD', (payload: ActionMoveChild['payload']) => ({
  ...payload
}))

export { actionMoveChild }
