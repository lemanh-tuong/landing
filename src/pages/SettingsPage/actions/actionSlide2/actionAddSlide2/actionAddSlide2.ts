import { Section3Props } from "components/Section3/Section3";
import { createAction } from "utils/functions/reduxActions";

export interface ActionAddSlide2Payload {
  slideProperty: Section3Props;
  nowIndexSection: number;
  nowIndexSlide: number;
}

const actionAddSlide2 = createAction('ADD_SLIDE_2', (payload: ActionAddSlide2Payload) => ({...payload}));

export { actionAddSlide2 };

