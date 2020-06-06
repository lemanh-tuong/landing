import { SlideType } from "components/MockUp/MockUp";
import { TypeSlideSection13 } from "components/Section13/Section13";
import { TypeSlideSection5 } from "components/Section5/Section5";
import { createAction } from "utils/functions/reduxActions";

export interface ActionMoveSlidePayload {
  sliderImgs?: (SlideType & TypeSlideSection5 & TypeSlideSection13)[];
  nowIndexSection: number;
}

const actionMoveSlide = createAction('MOVE_SLIDE', (payload: ActionMoveSlidePayload) => ({...payload}));

export { actionMoveSlide };
