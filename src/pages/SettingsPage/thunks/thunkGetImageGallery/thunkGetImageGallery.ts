
import readStorage from 'firebase/storage/readStorage';
import { getImageGallery } from 'pages/SettingsPage/actions/actionGetDataImageGallery/actionGetDataImageGallery';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkGetImageGallery = ThunkAction<typeof getImageGallery>;

const thunkGetImageGallery = (type: 'icon'): ThunkGetImageGallery => async (dispatch: any) => {
  dispatch(getImageGallery.request(null));
  try {
    const data = await readStorage(type);
    const imgs = data.map(item => ({
      imgSrc: item
    }))
    if(data) {
      dispatch(getImageGallery.success({type, imgs}));
    }
  } catch(err) {
    dispatch(getImageGallery.failure('Error'));
  }
};

export default createDispatchAction(thunkGetImageGallery);
