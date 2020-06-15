import { createDispatchAction } from 'utils/functions/reduxActions';
import { actionLogin } from '../actions/actionLogin';


type ThunkLogin = ThunkAction<typeof actionLogin>;
interface ThunkLoginArg {
  email: string;
  password: string;
}

const thunkLogin = ({email, password}: ThunkLoginArg): ThunkLogin => async (dispatch, getState) => {
  const { firebaseReducer } = getState();
  dispatch(actionLogin.request());
  try {
    const { user } = await firebaseReducer.signInFirebase({email: email, password: password});
    const { authTime, expirationTime, token } = await user?.getIdTokenResult() as firebase.auth.IdTokenResult;
    if(token && user?.refreshToken && user.providerData) {

      const { displayName, email, photoURL, uid, phoneNumber, providerId } = user.providerData as any // firebase.UserInfo;
      document.cookie = `token=${token}; expires=${expirationTime}; authTime=${authTime}`;
      dispatch(actionLogin.success({
        token: token,
        refreshToken: user.refreshToken,
        profile: {
          displayName,
          email,
          phoneNumber,
          photoURL,
          providerId,
          uid
        }
      }));
    }
  } catch(err) {
    dispatch(actionLogin.failure(err.message));
  }
};

export default createDispatchAction(thunkLogin);
