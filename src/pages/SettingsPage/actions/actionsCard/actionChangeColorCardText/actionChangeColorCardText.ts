import { createAction } from 'utils/functions/reduxActions';

export interface ActionChangeColorCardTextPayload {
  fieldName: string;
  color: string;
  nowIndexSection: number;
  nowIndexCard: number;
}

const actionChangeColorCardText = createAction('CHANGE_COLOR_CARD_TEXT', (payload: ActionChangeColorCardTextPayload) => ({
  ...payload,
}));

export { actionChangeColorCardText };
