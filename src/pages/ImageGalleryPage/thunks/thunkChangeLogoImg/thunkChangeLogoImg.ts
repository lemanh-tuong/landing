import { actionChangeLogoImg } from 'pages/ImageGalleryPage/actions/actionChangeLogoImg/actionChangeLogoImg';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkChangeLogoImg = ThunkAction<typeof actionChangeLogoImg>;

const thunkChangeLogoImg = (data: string): ThunkChangeLogoImg => dispatch => {
  dispatch(actionChangeLogoImg({imgSrc: data}));
};

export default createDispatchAction(thunkChangeLogoImg);
