import MyFirebase from "firebase/myFirebase";
import { createDispatchAction } from "utils/functions/reduxActions";
import { actionConfigApp, ActionConfigAppPayload } from "../actions/actionConfigApp";
import { actionInitialize } from "../actions/actionInitialize";

type ThunkConfigApp = ThunkAction<typeof actionConfigApp> & any;

const thunkConfigApp = (arg: ActionConfigAppPayload): ThunkConfigApp => (dispatch: any) => {
  dispatch(actionConfigApp(arg));
  const myFirebase = new MyFirebase(arg);
  if(Object.keys(myFirebase.database).length > 0) {
    dispatch(actionInitialize.success(myFirebase));
  } else {
    dispatch(actionInitialize.failure('Failure Initialize'))
  }
}

export default createDispatchAction(thunkConfigApp);
