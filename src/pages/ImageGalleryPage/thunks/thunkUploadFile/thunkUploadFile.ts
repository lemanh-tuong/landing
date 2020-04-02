import uploadFileFireBase from '../../../../firebase/storage/uploadFile';
import { createDispatchAction } from 'utils/functions/reduxActions';
import { actionUploadFile, ActionUploadFilePayload } from 'pages/ImageGalleryPage/actions/actionUploadFile/actionUploadFile';

type ThunkUpLoadFile = ThunkAction<typeof actionUploadFile>;

const thunkUploadFile = (path: ActionUploadFilePayload['type'], files: File[]): ThunkUpLoadFile => async dispatch => {
  dispatch(actionUploadFile.request(null));
  try {
    const newImgs = await uploadFileFireBase(path, files);
    if(newImgs) {
      dispatch(actionUploadFile.success({imgs: newImgs, type: path}));
    }
  } catch (err) {
    dispatch(actionUploadFile.failure(JSON.stringify(err)));
  }
};

export default createDispatchAction(thunkUploadFile);


