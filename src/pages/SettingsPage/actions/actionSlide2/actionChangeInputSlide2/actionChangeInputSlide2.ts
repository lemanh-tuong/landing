import { createAction } from "utils/functions/reduxActions";

export interface ActionChangeInputSlide2Payload {
  nowIndexSection: number;
  nowIndexSlide: number;
  value: string | number;
  fieldName: string;
}

const actionChangeInputSlide2 = createAction("CHANGE_INPUT_SLIDE_2", (payload: ActionChangeInputSlide2Payload) => ({...payload}))

export { actionChangeInputSlide2 };
