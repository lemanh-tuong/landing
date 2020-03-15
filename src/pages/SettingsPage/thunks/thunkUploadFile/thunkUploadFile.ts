import uploadFileFireBase from '../../../../firebase/storage/uploadFile';
import { uploadFile } from '../../actions/actionUploadFile/actionUploadFile';
type ThunkUpLoadFile = ThunkAction<typeof uploadFile>;

const thunkUploadFile = (path: string, file: File, nowIndex: number): ThunkUpLoadFile => async (dispatch: any) => {
  const newImgs = await uploadFileFireBase(path, file.name, file);
  dispatch(uploadFile({path: path, newImgs: [...newImgs], nowIndex: nowIndex}));
};

export default thunkUploadFile;


