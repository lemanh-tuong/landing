import { createAction } from "utils/functions/reduxActions";

export interface ActionContinueLogPayload {
  token: string;
  refreshToken: string;
}

const actionContinueLog = createAction("CONTINUE_LOG", (payload: ActionContinueLogPayload) => ({...payload}));

export { actionContinueLog };
