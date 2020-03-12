import storage from './storage';


const storageRef  = storage.ref();

const uploadFile = (fileName: string, file: File) => {
    var mountainImagesRef = storageRef.child(`images/${fileName}`);
    mountainImagesRef.put(file);
    // mountainImagesRef.put(file).then(function(snapshot) {
    //     console.log('Uploaded a blob or file!', snapshot);
    // });
};

export default uploadFile;
