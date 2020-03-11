import uploadFileFireBase from '../../../../firebase/storage/uploadFile';
import { uploadFile } from '../../actions/actionUploadFile/actionUploadFile';
type ThunkUpLoadFile = ThunkAction<typeof uploadFile>;

const baseUrl = 'https://firebasestorage.googleapis.com/v0/b/my-project-6-264609.appspot.com/o/images%2F';

const thunkUploadFile = (file: File): ThunkUpLoadFile => (dispatch: any) => {
  uploadFileFireBase(file.name, file);
  dispatch(uploadFile(file));
};

export default thunkUploadFile;


