import { createAction } from 'utils/functions/reduxActions';

export interface ActionDeleteSlide2Payload {
  nowIndexSection: number;
  nowIndexSlide: number;
}

const actionDeleteSlide2 = createAction('DELETE_SLIDE_2', (payload: ActionDeleteSlide2Payload) => ({ ...payload }));

export { actionDeleteSlide2 };
