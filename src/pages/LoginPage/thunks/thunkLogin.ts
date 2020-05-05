import { signInFirebase } from 'firebase/authentication/signInFirebase';
import { createDispatchAction } from 'utils/functions/reduxActions';
import { actionLogin } from '../actions/actionLogin';

type ThunkLogin = ThunkAction<typeof actionLogin>;
interface ThunkLoginArg {
  email: string;
  password: string;
}

const thunkLogin = ({email, password}: ThunkLoginArg): ThunkLogin => async dispatch => {
  dispatch(actionLogin.request());
  try {
    const { user } = await signInFirebase({email: email, password: password});
    const token = await user?.getIdToken();
    if(token && user?.refreshToken) {
      dispatch(actionLogin.success({token: token, refreshToken: user.refreshToken}));
    }
  } catch(err) {
    dispatch(actionLogin.failure(err.message));
  }
};

export default createDispatchAction(thunkLogin);
