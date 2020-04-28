import { createAction } from "utils/functions/reduxActions";

export interface ActionChangeIconCard2Payload {
    iconImg: string;
    nowIndexSection: number;
    nowIndexCard: number;
}

const actionChangeIconCard2 = createAction('CHANGE_ICON_CARD_2', (payload: ActionChangeIconCard2Payload) => ({
  ...payload
}))

export { actionChangeIconCard2 };

