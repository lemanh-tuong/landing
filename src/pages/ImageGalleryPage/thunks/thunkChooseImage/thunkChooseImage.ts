import { actionChooseImage } from 'pages/ImageGalleryPage/actions/actionChooseImage/actionChooseImage';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkChooseImage = ThunkAction<typeof actionChooseImage>;
export interface ThunkChooseImageArg {
  fieldName: string;
  src: string | string[];
  nowIndexSection: number;
}

const thunkChooseImage = ({fieldName, src, nowIndexSection}: ThunkChooseImageArg): ThunkChooseImage => dispatch => {
  dispatch(actionChooseImage({fieldName: fieldName, data: src, nowIndexSection: nowIndexSection}));
};

export default createDispatchAction(thunkChooseImage);
