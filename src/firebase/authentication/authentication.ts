import firebase from 'firebase';
import app from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from 'firebase/configFirebase';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const authentication = app.auth();
