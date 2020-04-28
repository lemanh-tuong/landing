import { createAction } from "utils/functions/reduxActions";

export interface ActionChangeCheckBoxSlide2Payload {
  nowIndexSection: number;
  nowIndexSlide: number;
  checked: boolean;
  fieldName: string;
}

const actionChangeCheckBoxSlide2 = createAction("CHANGE_CHECKBOX_SLIDE_2", (payload: ActionChangeCheckBoxSlide2Payload) => ({...payload}));

export { actionChangeCheckBoxSlide2 };

