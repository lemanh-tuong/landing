import storage from './storage';


const storageRef  = storage.ref();

const uploadFile = (path: string, fileName: string, file: File) => {
    var mountainImagesRef = storageRef.child(`images/${path}/${fileName}`);
    mountainImagesRef.put(file);
    // mountainImagesRef.put(file).then(function(snapshot) {
    //     console.log('Uploaded a blob or file!', snapshot);
    // });
    return 1;
};

export default uploadFile;
