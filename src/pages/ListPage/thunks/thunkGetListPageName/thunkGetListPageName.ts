import { actionGetListPageName } from 'pages/ListPage/actions/actionGetListPageName/actionGetListPageName';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkGetListPageName = ThunkAction<typeof actionGetListPageName>;

const thunkGetListPageName = (): ThunkGetListPageName => async (dispatch, getState) => {
  const { firebaseReducer } = getState();
  dispatch(actionGetListPageName.request());
  try {
    const data = await firebaseReducer.readDatabase('/ListPage');
    dispatch(actionGetListPageName.success(data));
  } catch (err) {
    dispatch(actionGetListPageName.failure(err.message));
  }
};

export default createDispatchAction(thunkGetListPageName);
