import storage from './storage';
import readStorage from './readStorage';


const storageRef  = storage.ref();

const uploadFile = async (path: string, fileName: string, file: File) => {
    var mountainImagesRef = storageRef.child(`images/${path}/${fileName}`);
    await mountainImagesRef.put(file);
    // mountainImagesRef.put(file).then(function(snapshot) {
    //     console.log('Uploaded a blob or file!', snapshot);
    // });
    const newImgs = await readStorage(path);
    return newImgs
};

export default uploadFile;
