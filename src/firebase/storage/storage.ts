import firebase from 'firebase';
import firebaseConfig from '../configFirebase';
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const storage = firebase.storage();

export default storage;
