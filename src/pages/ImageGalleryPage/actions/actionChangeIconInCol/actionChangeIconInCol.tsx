import { createAction } from "utils/functions/reduxActions";

export interface ActionChangeIconImgInColPayload {
  nowIndexSection: number;
  iconImg: string;
}

const actionChangeIconImgInCol = createAction("CHANGE_ICON_IN_COL", (payload: ActionChangeIconImgInColPayload) => ({ ...payload }));

export { actionChangeIconImgInCol };

