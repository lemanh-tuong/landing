import { createAction } from "utils/functions/reduxActions";

export interface ActionAddImageToGallery {
  type: "ADD_IMAGE_TO_GALLERY";
  payload: {
    type: 'icon';
    imgs: string[];
  }
}

const addImageToGallery = createAction('ADD_IMAGE_TO_GALLERY', (payload: ActionAddImageToGallery['payload']) => ({
  ...payload
}))

export { addImageToGallery }
