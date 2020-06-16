import MyFirebase from "firebase/myFirebase";
import { createDispatchAction } from "utils/functions/reduxActions";
import { actionInitialize } from "../actions/actionInitialize";

type ThunkInitialize = ThunkAction<typeof actionInitialize>

const thunkInitialize = (): ThunkInitialize => (dispatch, getState) => {
  dispatch(actionInitialize.request());
  const { configAppReducer } = getState();
  const { apiKey, storageBucket, projectId, messagingSenderId, measurementId, databaseURL, authDomain, appId } = configAppReducer.firebaseConfig
  if(apiKey && storageBucket && projectId && messagingSenderId && messagingSenderId && databaseURL && authDomain && measurementId && appId) {
    const myFirebase = new MyFirebase(configAppReducer);
    console.log(myFirebase);
    if(Object.keys(myFirebase.database).length > 0 && Object.keys(myFirebase.storage).length > 0 && Object.keys(myFirebase.authentication).length > 0) {
      dispatch(actionInitialize.success(myFirebase))
    } else {
      dispatch(actionInitialize.failure('Create New App'))
    }
  } else {
    dispatch(actionInitialize.failure('Error Config'))
  }
}

export default createDispatchAction(thunkInitialize);
