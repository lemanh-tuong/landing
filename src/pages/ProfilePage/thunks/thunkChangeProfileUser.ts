import { createDispatchAction } from 'utils/functions/reduxActions';
import { actionChangeProfileUser, ActionChangeProfileUserPayload } from '../actions/actionChangeProfileUser';

type ThunkChangeProfileUser = ThunkAction<typeof actionChangeProfileUser>;

const thunkChangeProfileUser = ({
  displayName,
  email,
  photoURL,
  password,
}: Partial<ActionChangeProfileUserPayload & { password: string }>): ThunkChangeProfileUser => async (dispatch, getState) => {
  const { firebaseReducer, authReducer } = getState();
  const user = firebaseReducer.authentication.currentUser;
  dispatch(actionChangeProfileUser.request());
  Promise.all([
    user?.updateProfile({
      displayName: displayName || authReducer.profile.displayName,
      photoURL: photoURL || authReducer.profile.photoURL,
    }),
    email ? user?.updateEmail(email) : null,
    password ? user?.updatePassword(password) : null,
  ])
    .then(() => {
      dispatch(
        actionChangeProfileUser.success({
          displayName: displayName || authReducer.profile.displayName,
          email: email || authReducer.profile.email,
          phoneNumber: authReducer.profile.phoneNumber,
          photoURL: photoURL || authReducer.profile.photoURL,
          providerId: authReducer.profile.providerId,
          uid: authReducer.profile.uid,
        }),
      );
    })
    .catch(err => {
      dispatch(actionChangeProfileUser.failure(err));
    });
};

export default createDispatchAction(thunkChangeProfileUser);
