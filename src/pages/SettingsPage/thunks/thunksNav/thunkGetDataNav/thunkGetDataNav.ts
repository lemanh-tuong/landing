import readFireBase from 'firebase/database/readFireBase';
import { actionGetDataNav } from 'pages/SettingsPage/actions/actionsNav/actionGetDataNav/actionGetDataNav';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkGetDataNav = ThunkAction<typeof actionGetDataNav>;

const thunkGetDataNav = (): ThunkGetDataNav => async dispatch => {
  dispatch(actionGetDataNav.request());
  try {
    const data = await readFireBase('nav');
    dispatch(actionGetDataNav.success(data));
  } catch(err) {
    dispatch(actionGetDataNav.failure(err.msg));
  }
};

export default createDispatchAction(thunkGetDataNav);
