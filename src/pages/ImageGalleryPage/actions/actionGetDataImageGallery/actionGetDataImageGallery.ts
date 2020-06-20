import { createAsyncAction } from 'utils/functions/reduxActions';

const actionGetImageGallery = createAsyncAction(['@getImageGalleryRequest', '@getImageGallerySuccess', '@getImageGalleryFailure'])<
  null,
  any,
  string
>();

export { actionGetImageGallery };
