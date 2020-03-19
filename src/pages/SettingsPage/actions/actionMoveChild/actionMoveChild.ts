import { createAction } from "utils/functions/reduxActions";

export interface ActionMoveChild {
  type: "MOVE_CHILD",
  payload: {
    newChild: any[];
    nowIndexSection: number;
  }
}

const actionMoveChild = createAction('MOVE_CHILD', (payload: ActionMoveChild['payload']) => ({
  ...payload
}))

export { actionMoveChild }
