import { createAsyncAction } from 'utils/functions/reduxActions';

const getImageGallery = createAsyncAction(['@getImageGalleryRequest', '@getImageGallerySuccess', '@getImageGalleryFailure'])<null, any, string>();

export { getImageGallery };

