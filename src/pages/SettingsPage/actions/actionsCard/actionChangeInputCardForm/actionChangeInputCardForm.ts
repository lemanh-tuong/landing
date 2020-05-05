import { createAction } from 'utils/functions/reduxActions';

export interface ActionChangeInputCardForm {
  type: 'CHANGE_INPUT_CARD_FORM';
  payload: {
    value: string;
    fieldName: string;
    nowIndexSection: number;
    nowIndexCard: number;
  };
}

const actionChangeInputCardForm = createAction('CHANGE_INPUT_CARD_FORM', (payload: ActionChangeInputCardForm['payload']) => ({
  ...payload
}));

export { actionChangeInputCardForm };

