import { createAction } from "utils/functions/reduxActions";

export interface ActionChangeColorCard2TextPayload {
  fieldName: string;
  color: string;
  nowIndexSection: number;
  nowIndexCard: number;
}

const actionChangeColorCard2Text = createAction('CHANGE_COLOR_CARD_2_TEXT', (payload: ActionChangeColorCard2TextPayload) => ({
  ...payload
}))

export { actionChangeColorCard2Text };

