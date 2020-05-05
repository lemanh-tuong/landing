import readStorage from './readStorage';
import storage from './storage';

export interface UploadFileArg {
  path: string;
  files: File[];
}
const storageRef  = storage.ref();

const uploadFile = async ({path, files}: UploadFileArg) => {
  let newImgs;
  await Promise.all(files.map(async file => {
    const ref = storageRef.child(`images/${path}/${file.name}`);
    await ref.put(file);
  })).then(async () => {
    const imgs: any[] = await readStorage(path);
    newImgs = [...imgs];
  });

  return newImgs;
};

export default uploadFile;
