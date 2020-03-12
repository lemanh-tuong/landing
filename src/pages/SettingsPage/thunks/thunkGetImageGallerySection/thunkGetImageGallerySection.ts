
import readStorage from 'firebase/storage/readStorage';
import { getImageGallery } from 'pages/SettingsPage/actions/actionGetDataImage/actionGetDataImage';

type ThunkGetImageGallerySection = ThunkAction<typeof getImageGallery>;

const thunkGetImageGallerySection = (): ThunkGetImageGallerySection => async (dispatch: any) => {
  dispatch(getImageGallery.request(null));
  try {
    const data = await readStorage();
    if(data) {
      dispatch(getImageGallery.success(data));
    }
  } catch(err) {
    dispatch(getImageGallery.failure('Error'));
  }
};

export default thunkGetImageGallerySection;
