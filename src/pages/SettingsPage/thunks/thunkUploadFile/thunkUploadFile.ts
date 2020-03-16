import uploadFileFireBase from '../../../../firebase/storage/uploadFile';
import { uploadFile } from '../../actions/actionUploadFile/actionUploadFile';
import thunkGetImageGallery from '../thunkGetImageGallery/thunkGetImageGallery';
import { addImageToGallery } from 'pages/SettingsPage/actions/actionAddImageToGallery/actionAddImageToGallery';
import { getImageGallery } from 'pages/SettingsPage/actions/actionGetDataImageGallery/actionGetDataImageGallery';

type ThunkUpLoadFile = ThunkAction<typeof uploadFile>;

const thunkUploadFile = (path: string, file: File, nowIndex: number): ThunkUpLoadFile => async (dispatch: any) => {
  if(path !== 'icon') {
    const newImgs = await uploadFileFireBase(path, file.name, file);
    dispatch(uploadFile({path: path, newImgs: [...newImgs], nowIndex: nowIndex}));
  }
  else {
    const imgs = await uploadFileFireBase(path, file.name, file);
    dispatch(addImageToGallery({type: 'icon', imgs}))

  }

};

export default thunkUploadFile;


