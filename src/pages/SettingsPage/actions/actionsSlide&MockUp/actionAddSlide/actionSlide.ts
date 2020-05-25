import { createAction } from 'utils/functions/reduxActions';

export interface ActionAddSlidePayload {
  slideProperty: {
    imgSrc: string;
    [key: string]: any;
  };
  nowIndexSlide: number;
  nowIndexSection: number;
}

const actionAddSlide = createAction('ADD_SLIDE', (payload: ActionAddSlidePayload) => ({...payload}));

export { actionAddSlide };

