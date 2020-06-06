import { createAction } from "utils/functions/reduxActions";

export interface ActionChangeImageButtonPayload {
  nowIndexSection: number;
  nowIndexButton: number;
  imgSrc: string;
}

const actionChangeImageButton = createAction('CHANGE_IMAGE_BUTTON', (payload: ActionChangeImageButtonPayload) => ({...payload}));

export { actionChangeImageButton };

