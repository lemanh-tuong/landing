import { createAction } from "utils/functions/reduxActions";

export interface ActionChangeColorSlide2Payload {
  nowIndexSection: number;
  nowIndexSlide: number;
  color: string;
  fieldName: string;
}

const actionChangeColorSlide2 = createAction("CHANGE_COLOR_SLIDE_2", (payload: ActionChangeColorSlide2Payload) => ({...payload}));

export { actionChangeColorSlide2 };

