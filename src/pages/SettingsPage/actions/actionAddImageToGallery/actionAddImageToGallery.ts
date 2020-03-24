import { createAction } from "utils/functions/reduxActions";

export interface ActionAddImageToGalleryPayload {
  type: 'icon' | 'imgSrc' | 'backgroundImage' | 'sliderImgs';
  imgs: string[];
}

const addImageToGallery = createAction('ADD_IMAGE_TO_GALLERY', (payload: ActionAddImageToGalleryPayload) => ({
  ...payload
}))

export { addImageToGallery }
