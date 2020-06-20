import { createAction } from 'utils/functions/reduxActions';

export interface ActionChangeImgSlidePayload {
  data: {
    imgSrc: string;
  };
  nowIndexSection: number;
  nowIndexSlide: number;
}

const actionChangeImgSlide = createAction('CHANGE_IMAGE_SLIDE', (payload: ActionChangeImgSlidePayload) => ({ ...payload }));

export default actionChangeImgSlide;
