import { createAction } from "utils/functions/reduxActions";

export interface ActinChangeInputRateFormPayload {
  nowIndexSection: number;
  nowIndexRate: number;
  fieldName: string;
  value: string | number;
}

const actionChangeInputRateForm = createAction('CHANGE_INPUT_RATE_FORM', (payload: ActinChangeInputRateFormPayload) => ({...payload}));

export { actionChangeInputRateForm };

