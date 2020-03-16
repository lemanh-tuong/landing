import { createAction } from "utils/functions/reduxActions";

export interface ActionSaveAll {
  type: "SAVE",
}

const actionSaveAll = createAction('SAVE', () => {});

export { actionSaveAll }