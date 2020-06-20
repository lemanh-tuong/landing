import { createDispatchAction } from 'utils/functions/reduxActions';
import { actionLogout } from '../actions/actionLogout';

type ThunkLogin = ThunkAction<typeof actionLogout>;

const thunkLogout = (): ThunkLogin => (dispatch, getState) => {
  const { firebaseReducer } = getState();
  dispatch(actionLogout.request());
  firebaseReducer
    .signOutFirebase()
    .then(() => {
      dispatch(actionLogout.success('SIGNED OUT'));
    })
    .catch(err => {
      dispatch(actionLogout.failure(JSON.stringify(err.message)));
    });
};

export default createDispatchAction(thunkLogout);
