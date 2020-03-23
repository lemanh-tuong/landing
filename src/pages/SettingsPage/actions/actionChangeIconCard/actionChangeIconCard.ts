import { createAction } from "utils/functions/reduxActions";

export interface ActionChangeIconCard {
  type: "CHANGE_ICON_CARD";
  payload: {
    fieldName: string;
    imgSrc: string;
    nowIndexSection: number;
    nowIndexCard: number;
  }
}

const actionChangeIconCard = createAction('CHANGE_ICON_CARD', (payload: ActionChangeIconCard['payload']) => ({
  ...payload
}))

export { actionChangeIconCard }

