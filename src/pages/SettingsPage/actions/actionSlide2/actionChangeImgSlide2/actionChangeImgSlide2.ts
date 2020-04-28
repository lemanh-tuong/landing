import { createAction } from "utils/functions/reduxActions";

export interface ActionChangeImgSlide2Payload {
  nowIndexSection: number;
  nowIndexSlide: number;
  imgSrc: string;
}

const actionChangeImgSlide2 = createAction("CHANGE_IMAGE_SLIDE_2", (payload : ActionChangeImgSlide2Payload) => ({...payload}));

export { actionChangeImgSlide2 };

