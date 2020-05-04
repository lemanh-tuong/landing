import { createAction } from "utils/functions/reduxActions";

export type ActionChangeInputNavPayload = {
  fieldName: string;
  value: string;
  nowIndex: number;
}

const actionChangeInputNav = createAction("CHANGE_INPUT_NAV", (payload: ActionChangeInputNavPayload) => ({...payload}));

export { actionChangeInputNav };