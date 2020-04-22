import { createAction } from "utils/functions/reduxActions";

export interface AddSlidePayload {
  slideProperty: {
    imgSrc: string;
    [key: string]: any
  };
  nowIndexSlide: number;
  nowIndexSection: number;
}

const actionAddSlide = createAction('ADD_SLIDE', (payload: AddSlidePayload) => ({...payload}));

export { actionAddSlide };

