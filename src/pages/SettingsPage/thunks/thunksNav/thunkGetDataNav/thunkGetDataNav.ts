import { actionGetDataNav } from 'pages/SettingsPage/actions/actionsNav/actionGetDataNav/actionGetDataNav';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkGetDataNav = ThunkAction<typeof actionGetDataNav>;

const thunkGetDataNav = (): ThunkGetDataNav => async (dispatch, getState) => {
  const { firebaseReducer } = getState();
  dispatch(actionGetDataNav.request());
  try {
    const data = await firebaseReducer.readDatabase('nav');
    dispatch(actionGetDataNav.success(data));
  } catch (err) {
    dispatch(actionGetDataNav.failure(err.msg));
  }
};

export default createDispatchAction(thunkGetDataNav);
