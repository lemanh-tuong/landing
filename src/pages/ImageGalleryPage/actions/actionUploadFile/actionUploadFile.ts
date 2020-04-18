import { createAsyncAction } from "utils/functions/reduxActions";

export interface ActionUploadFilePayload {
  type: 'icon' | 'imgSrc' | 'backgroundImage' | 'sliderImgs';
  imgs: string[];
}

const actionUploadFile = createAsyncAction(['@uploadingFile', '@uploadedFile', '@uploadFileFailure'])<null, ActionUploadFilePayload, string>();

export { actionUploadFile }
