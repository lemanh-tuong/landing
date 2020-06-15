import { createDispatchAction } from "utils/functions/reduxActions";
import { actionRegisterNewUser } from "../actions/actionRegisterNewUser";

type ThunkRegisterNewUser = ThunkAction<typeof actionRegisterNewUser>;

export interface ThunkRegisterNewUserArg {
  email: string;
  password: string;
  userName: string;
}

const thunkRegisterNewUser = ({ email, password, userName }: ThunkRegisterNewUserArg): ThunkRegisterNewUser => async (dispatch, getState) => {
  const { firebaseReducer } = getState();
  dispatch(actionRegisterNewUser.request())
  firebaseReducer.authentication.createUserWithEmailAndPassword(email, password).then(async res => {
    const user = firebaseReducer.authentication.currentUser;
    await user?.updateProfile({
      displayName: userName,
      photoURL: 'https://images.pexels.com/photos/4316738/pexels-photo-4316738.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    })
    dispatch(actionRegisterNewUser.success(null));
  }).catch((err) => {
    dispatch(actionRegisterNewUser.failure(err));
  });

}

export default createDispatchAction(thunkRegisterNewUser);
