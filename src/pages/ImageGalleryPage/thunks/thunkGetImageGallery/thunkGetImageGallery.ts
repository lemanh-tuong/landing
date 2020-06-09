

import { actionGetImageGallery } from 'pages/ImageGalleryPage/actions/actionGetDataImageGallery/actionGetDataImageGallery';
import { ActionUploadFilePayload } from 'pages/ImageGalleryPage/actions/actionUploadFile/actionUploadFile';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkGetImageGallery = ThunkAction<typeof actionGetImageGallery>;

const thunkGetImageGallery = (type: ActionUploadFilePayload['type']): ThunkGetImageGallery => async (dispatch, getState) => {
  const { firebaseReducer } = getState();
  dispatch(actionGetImageGallery.request(null));
  try {
    const data = await firebaseReducer.readStorage(type);
    const imgs = data.map(item => ({
      imgSrc: item
    }));
    dispatch(actionGetImageGallery.success({type, imgs}));
  } catch(err) {
    dispatch(actionGetImageGallery.failure('Error'));
  }
};

export default createDispatchAction(thunkGetImageGallery);
