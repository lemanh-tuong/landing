
import readStorage from 'firebase/storage/readStorage';
import { actionGetImageGallery } from 'pages/ImageGalleryPage/actions/actionGetDataImageGallery/actionGetDataImageGallery';
import { ActionUploadFilePayload } from 'pages/ImageGalleryPage/actions/actionUploadFile/actionUploadFile';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkGetImageGallery = ThunkAction<typeof actionGetImageGallery>;

const thunkGetImageGallery = (type: ActionUploadFilePayload['type']): ThunkGetImageGallery => async dispatch => {
  dispatch(actionGetImageGallery.request(null));
  try {
    const data = await readStorage(type);
    const imgs = data.map(item => ({
      imgSrc: item
    }));
    if(data) {
      dispatch(actionGetImageGallery.success({type, imgs}));
    }
  } catch(err) {
    dispatch(actionGetImageGallery.failure('Error'));
  }
};

export default createDispatchAction(thunkGetImageGallery);
