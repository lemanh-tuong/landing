import MyFirebase from "firebase/myFirebase";
import { createDispatchAction } from "utils/functions/reduxActions";
import { actionConfigApp, ActionConfigAppPayload } from "../actions/actionConfigApp";
import { actionInitialize } from "../actions/actionInitialize";

type ThunkConfigApp = ThunkAction<typeof actionConfigApp> & any;

const thunkConfigApp = (arg: ActionConfigAppPayload): ThunkConfigApp => (dispatch: any) => {
  dispatch(actionConfigApp(arg));
  const myFirebase = new MyFirebase(arg);
  console.log(myFirebase);
  dispatch(actionInitialize.success(myFirebase));
}

export default createDispatchAction(thunkConfigApp);
