import uploadFileFireBase from '../../../../firebase/storage/uploadFile';
import { uploadFile } from '../../actions/actionUploadFile/actionUploadFile';
import { addImageToGallery, ActionAddImageToGalleryPayload } from 'pages/SettingsPage/actions/actionAddImageToGallery/actionAddImageToGallery';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkUpLoadFile = ThunkAction<typeof uploadFile>;

const thunkUploadFile = (path: ActionAddImageToGalleryPayload['type'], fieldName: string, file: File, nowIndexSection: number): ThunkUpLoadFile => async (dispatch: any) => {
  dispatch(addImageToGallery.request(null));
  try {
    const newImgs = await uploadFileFireBase(path, file.name, file);
    if(newImgs) {
      dispatch(addImageToGallery.success({imgs: newImgs, type: path}));
    }
  } catch (err) {
    dispatch(addImageToGallery.failure(JSON.stringify(err)));
  }
};

export default createDispatchAction(thunkUploadFile);


