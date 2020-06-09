import { createDispatchAction } from 'utils/functions/reduxActions';
import { actionContinueLog, ActionContinueLogPayload } from '../actions/actionContinueLog';

type ThunkContinueLog = ThunkAction<typeof actionContinueLog>;

const thunkContinueLog = ({token}: ActionContinueLogPayload): ThunkContinueLog => async (dispatch, getState) => {
  const { firebaseReducer } = getState();
  console.log(firebaseReducer);
  await firebaseReducer.getAuthentication().onAuthStateChanged(async (user) => {
    try {
      const res = await user?.getIdToken();
      if (res === token) {
        dispatch(actionContinueLog({token: token}));
      } else {
        throw Error("TOKEN EXPIRED");
      }
    } catch(err) {
      console.log(err)
    }
  });
};

export default createDispatchAction(thunkContinueLog);
