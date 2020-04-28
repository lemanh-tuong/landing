import { createAction } from "utils/functions/reduxActions";

export interface ActionChangeVideoUrlPayload {
  nowIndexSection: number;
  nowIndexSlide: number;
  newUrl: string
}

const actionChangeVideoUrl = createAction('CHANGE_VIDEO_URL', (payload: ActionChangeVideoUrlPayload) => {
  return {
    ...payload
  }
})

export { actionChangeVideoUrl };

