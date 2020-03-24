import uploadFileFireBase from '../../../../firebase/storage/uploadFile';
import { uploadFile } from '../../actions/actionUploadFile/actionUploadFile';
import { addImageToGallery, ActionAddImageToGalleryPayload } from 'pages/SettingsPage/actions/actionAddImageToGallery/actionAddImageToGallery';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkUpLoadFile = ThunkAction<typeof uploadFile>;

const thunkUploadFile = (path: ActionAddImageToGalleryPayload['type'], fieldName: string, file: File, nowIndexSection: number): ThunkUpLoadFile => async (dispatch: any) => {
  const newImgs = await uploadFileFireBase(path, file.name, file);
  // dispatch(uploadFile({path: path, fieldName: fieldName, newImgs: [...newImgs], nowIndexSection: nowIndexSection}));
  dispatch(addImageToGallery({type: path, imgs: newImgs}))
};

export default createDispatchAction(thunkUploadFile);


