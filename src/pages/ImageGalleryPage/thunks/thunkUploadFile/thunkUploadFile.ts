import { actionUploadFile, ActionUploadFilePayload } from 'pages/ImageGalleryPage/actions/actionUploadFile/actionUploadFile';
import { createDispatchAction } from 'utils/functions/reduxActions';
import uploadFileFireBase from '../../../../firebase/storage/uploadFile';

type ThunkUpLoadFile = ThunkAction<typeof actionUploadFile>;
export interface ThunkUpLoadFileArg {
  path: ActionUploadFilePayload['type'];
  files: File[];
}

const thunkUploadFile = ({files, path}: ThunkUpLoadFileArg): ThunkUpLoadFile => async dispatch => {
  dispatch(actionUploadFile.request(null));
  try {
    const newImgs = await uploadFileFireBase({path: path, files: files});
    if(newImgs) {
      dispatch(actionUploadFile.success({imgs: newImgs, type: path}));
    }
  } catch (err) {
    dispatch(actionUploadFile.failure(JSON.stringify(err)));
  }
};

export default createDispatchAction(thunkUploadFile);


