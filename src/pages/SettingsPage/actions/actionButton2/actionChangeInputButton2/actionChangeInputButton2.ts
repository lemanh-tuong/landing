import { createAction } from "utils/functions/reduxActions";

export interface ActionChangeInputButton2Payload {
  nowIndexSection: number;
  nowIndexButton: number;
  fieldName: string;
  value: string;
}

const actionChangeInputButton2 = createAction('CHANGE_INPUT_BUTTON_2', (payload: ActionChangeInputButton2Payload) => ({...payload}));

export { actionChangeInputButton2 };

