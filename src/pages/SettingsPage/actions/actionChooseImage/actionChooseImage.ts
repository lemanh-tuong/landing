import { createAction } from "utils/functions/reduxActions";

export type ActionChooseImageDataType = {
  imgSrc: string;
};

export interface ActionChooseImagePayload {
  fieldName: string;
  data: string | string[];
  nowIndexSection: number;
}

const actionChooseImage = createAction("CHOOSE_IMAGE", (payload: ActionChooseImagePayload) => ({
  ...payload
}))

export { actionChooseImage }
