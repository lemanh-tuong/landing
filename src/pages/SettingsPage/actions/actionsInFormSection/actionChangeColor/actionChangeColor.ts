import { createAction } from "utils/functions/reduxActions";

export interface ActionChangeColor {
  type: 'CHANGE_COLOR';
  payload: {
    fieldName: string;
    color: string;
    nowIndexSection: number;
  }
}

const actionChangeColor = createAction('CHANGE_COLOR', (payload: ActionChangeColor['payload']) => ({
  ...payload
}))

export { actionChangeColor }
