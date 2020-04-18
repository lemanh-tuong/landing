import { createAction } from 'utils/functions/reduxActions';

export interface ActionChangeHasVideoPayload {
  nowIndexSection: number;
  nowIndexSlide: number;
  hasVideo: boolean;
}

const actionChangeHasVideo = createAction('CHANGE_HAS_VIDEO', (payload: ActionChangeHasVideoPayload) => ({
  ...payload
}))

export { actionChangeHasVideo };
