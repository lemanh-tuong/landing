import { createAction } from "utils/functions/reduxActions";

export interface ActionDeleteSlidePayload {
  nowIndexSection: number;
  nowIndexSlide: number;
}

const actionDeleteSlide = createAction('DELETE_SLIDE', (payload: ActionDeleteSlidePayload) => ({...payload}));

export { actionDeleteSlide };
