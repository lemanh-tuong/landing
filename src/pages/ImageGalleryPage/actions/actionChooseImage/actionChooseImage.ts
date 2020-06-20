import { createAction } from 'utils/functions/reduxActions';

export interface ActionChooseImageDataType {
  imgSrc: string;
}

export interface ActionChooseImagePayload {
  fieldName: string;
  data: string | string[];
  nowIndexSection: number;
  nowIndexSlide?: number;
}

const actionChooseImage = createAction('CHOOSE_IMAGE', (payload: ActionChooseImagePayload) => ({
  ...payload,
}));

export { actionChooseImage };
