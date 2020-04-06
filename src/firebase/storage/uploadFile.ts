import readStorage from './readStorage';
import storage from './storage';

export interface UploadFileArg {
  path: string;
  files: File[]
}
const storageRef  = storage.ref();

const uploadFile = async ({path, files}: UploadFileArg) => {
    files.forEach(async file => {
      const ref = storageRef.child(`images/${path}/${file.name}`);
      await ref.put(file);
    })
    const newImgs = await readStorage(path);
    return newImgs
};

export default uploadFile;
