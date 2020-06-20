import { createDispatchAction } from 'utils/functions/reduxActions';
import { actionContinueLog } from '../actions/actionContinueLog';

type ThunkContinueLog = ThunkAction<typeof actionContinueLog>;

const thunkContinueLog = (): ThunkContinueLog => async (dispatch, getState) => {
  const { firebaseReducer } = getState();
  if (Object.keys(firebaseReducer.authentication).length > 0) {
    await firebaseReducer.getAuthentication().onAuthStateChanged(async user => {
      try {
        const res = await user?.getIdToken();
        if (user && res) {
          dispatch(
            actionContinueLog({
              token: res,
              refreshToken: user?.refreshToken as string,
              profile: {
                displayName: user.displayName,
                email: user.email,
                phoneNumber: user.phoneNumber,
                photoURL: user.photoURL,
                providerId: user.providerId,
                uid: user.uid,
              },
            }),
          );
        } else {
          throw Error('TOKEN EXPIRED');
        }
      } catch (err) {}
    });
  }
};

export default createDispatchAction(thunkContinueLog);
