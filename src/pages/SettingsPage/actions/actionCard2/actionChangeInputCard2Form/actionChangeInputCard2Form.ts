import { createAction } from 'utils/functions/reduxActions';

export interface ActionChangeInputCard2Form {
  type: 'CHANGE_INPUT_CARD_2_FORM';
  payload: {
    value: string;
    fieldName: string;
    nowIndexSection: number;
    nowIndexCard: number;
  };
}

const actionChangeInputCard2Form = createAction('CHANGE_INPUT_CARD_2_FORM', (payload: ActionChangeInputCard2Form['payload']) => ({
  ...payload
}));

export { actionChangeInputCard2Form };

