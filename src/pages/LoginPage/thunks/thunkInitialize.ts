import MyFirebase from "firebase/myFirebase";
import { createDispatchAction } from "utils/functions/reduxActions";
import { actionInitialize } from "../actions/actionInitialize";

type ThunkInitialize = ThunkAction<typeof actionInitialize>

const thunkInitialize = (): ThunkInitialize => (dispatch, getState) => {
  dispatch(actionInitialize.request());
  const { configAppReducer } = getState();
  if(configAppReducer.firebaseConfig.apiKey
    && configAppReducer.firebaseConfig.appId
    && configAppReducer.firebaseConfig.authDomain
    && configAppReducer.firebaseConfig.databaseURL
    && configAppReducer.firebaseConfig.measurementId
    && configAppReducer.firebaseConfig.messagingSenderId
    && configAppReducer.firebaseConfig.projectId
    && configAppReducer.firebaseConfig.storageBucket
  ) {
    const myFirebase = new MyFirebase(configAppReducer);
    dispatch(actionInitialize.success(myFirebase))
  } else {
    dispatch(actionInitialize.failure('Create New App'))
  }
}

export default createDispatchAction(thunkInitialize);
