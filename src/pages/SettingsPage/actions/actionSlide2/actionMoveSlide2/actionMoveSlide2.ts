import { Section3Props } from "components/Section3/Section3";
import { createAction } from "utils/functions/reduxActions";


export interface ActionMoveSlide2Payload {
  data: Section3Props[];
  nowIndexSection: number;
}

const actionMoveSlide2 = createAction("MOVE_SLIDE_2", (payload: ActionMoveSlide2Payload) => ({...payload}));

export { actionMoveSlide2 };
