import { createAction } from "utils/functions/reduxActions";

export interface ActionChangeVideoUrlPayload {
  nowIndexSection: number;
  nowIndesSlide: number;
  newUrl: string
}

const actionChangeVideoUrl = createAction('CHANGE_VIDEO_URL', (payload: ActionChangeVideoUrlPayload) => ({
  ...payload
}))

export { actionChangeVideoUrl };

