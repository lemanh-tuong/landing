import MyFirebase from "firebase/myFirebase";
import { createDispatchAction } from "utils/functions/reduxActions";
import { actionInitialize } from "../actions/actionInitialize";

type ThunkInitialize = ThunkAction<typeof actionInitialize>

const thunkInitialize = (): ThunkInitialize => (dispatch, getState) => {
  dispatch(actionInitialize.request());
  const { configAppReducer } = getState();
  const myFirebase = new MyFirebase(configAppReducer);
  if(Object.keys(myFirebase.database).length > 0 && Object.keys(myFirebase.storage).length > 0 && Object.keys(myFirebase.authentication).length > 0) {
    dispatch(actionInitialize.success(myFirebase))
  } else {
    dispatch(actionInitialize.failure('Create New App'))
  }
}

export default createDispatchAction(thunkInitialize);
