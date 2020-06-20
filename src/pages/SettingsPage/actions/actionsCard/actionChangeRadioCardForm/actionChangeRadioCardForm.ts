import { createAction } from 'utils/functions/reduxActions';

export interface ActionChangeRadioCardForm {
  type: 'CHANGE_RADIO_CARD_FORM';
  payload: {
    fieldName: string;
    value: string;
    nowIndexSection: number;
    nowIndexCard: number;
  };
}

const actionChangeRadioCardForm = createAction('CHANGE_RADIO_CARD_FORM', (payload: ActionChangeRadioCardForm['payload']) => ({
  ...payload,
}));

export { actionChangeRadioCardForm };
