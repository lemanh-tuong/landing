import uploadFileFireBase from '../../../../firebase/storage/uploadFile';
import { uploadFile } from '../../actions/actionUploadFile/actionUploadFile';
import { addImageToGallery } from 'pages/SettingsPage/actions/actionAddImageToGallery/actionAddImageToGallery';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkUpLoadFile = ThunkAction<typeof uploadFile>;

const thunkUploadFile = (path: string, file: File, nowIndexSection: number): ThunkUpLoadFile => async (dispatch: any) => {
  if(path !== 'icon') {
    const newImgs = await uploadFileFireBase(path, file.name, file);
    dispatch(uploadFile({path: path, newImgs: [...newImgs], nowIndexSection: nowIndexSection}));
  }
  else {
    const imgs = await uploadFileFireBase(path, file.name, file);
    dispatch(addImageToGallery({type: 'icon', imgs}))

  }

};

export default createDispatchAction(thunkUploadFile);


