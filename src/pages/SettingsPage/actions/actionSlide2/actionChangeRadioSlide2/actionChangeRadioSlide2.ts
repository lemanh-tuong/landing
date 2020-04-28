import { createAction } from "utils/functions/reduxActions";

export interface ActionChangeRadioSlide2Payload {
  nowIndexSection: number;
  nowIndexSlide: number;
  value: string;
  fieldName: string;
}

const actionChangeRadioSlide2 = createAction("CHANGE_RADIO_SLIDE_2", (payload: ActionChangeRadioSlide2Payload) => ({...payload}));

export { actionChangeRadioSlide2 };

