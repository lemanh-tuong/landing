import { createAsyncAction } from "utils/functions/reduxActions";

export interface ActionAddImageToGalleryPayload {
  type: 'icon' | 'imgSrc' | 'backgroundImage' | 'sliderImgs';
  imgs: string[];
}

const addImageToGallery = createAsyncAction(['@uploadingFile', '@uploadedFile', '@uploadFileFailure'])<null, ActionAddImageToGalleryPayload, string>();

export { addImageToGallery }
