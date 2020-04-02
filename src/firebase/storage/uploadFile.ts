import storage from './storage';
import readStorage from './readStorage';


const storageRef  = storage.ref();

const uploadFile = async (path: string, files: File[]) => {
    files.forEach(async file => {
      const ref = storageRef.child(`images/${path}/${file.name}`);
      await ref.put(file);
    })
    const newImgs = await readStorage(path);
    return newImgs
};

export default uploadFile;
