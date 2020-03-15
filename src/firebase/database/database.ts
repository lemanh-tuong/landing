import firebase from 'firebase';
import firebaseConfig from '../configFirebase';
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const database = firebase.database();
export default database;
