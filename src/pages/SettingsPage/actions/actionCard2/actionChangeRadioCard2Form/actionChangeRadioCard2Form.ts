import { createAction } from 'utils/functions/reduxActions';

export interface ActionChangeRadioCard2Form {
  type: 'CHANGE_RADIO_CARD_2_FORM';
  payload: {
    fieldName: string;
    value: string;
    nowIndexSection: number;
    nowIndexCard: number;
  };
}

const actionChangeRadioCard2Form = createAction('CHANGE_RADIO_CARD_2_FORM', (payload: ActionChangeRadioCard2Form['payload']) => ({
  ...payload,
}));

export { actionChangeRadioCard2Form };
