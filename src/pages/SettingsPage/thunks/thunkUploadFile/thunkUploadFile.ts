import uploadFileFireBase from '../../../../firebase/storage/uploadFile';
import { uploadFile } from '../../actions/actionUploadFile/actionUploadFile';
type ThunkUpLoadFile = ThunkAction<typeof uploadFile>;

const thunkUploadFile = (path: string, file: File, nowIndex: number): ThunkUpLoadFile => (dispatch: any) => {
  uploadFileFireBase(path, file.name, file);
  dispatch(uploadFile({path: path, file: file, nowIndex: nowIndex}));
};

export default thunkUploadFile;


