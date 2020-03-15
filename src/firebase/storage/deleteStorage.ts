import storage from './storage';


const storageRef  = storage.ref();

const deleteStorage = (path: string) => {
    var mountainImagesRef = storageRef.child(`images/${path}`);
    mountainImagesRef.delete();
    // mountainImagesRef.put(file).then(function(snapshot) {
    //     console.log('Uploaded a blob or file!', snapshot);
    // });
};

export default deleteStorage;
