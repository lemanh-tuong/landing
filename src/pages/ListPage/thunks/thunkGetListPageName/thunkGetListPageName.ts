import readFireBase from 'firebase/database/readFireBase';
import { actionGetListPageName } from 'pages/ListPage/actions/actionGetListPageName/actionGetListPageName';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkGetListPageName = ThunkAction<typeof actionGetListPageName>;

const thunkGetListPageName = (): ThunkGetListPageName => async dispatch => {
  dispatch(actionGetListPageName.request());
  try {
    const data = await readFireBase('/');
    const keysData = Object.keys(data);
    const listPageName = keysData.filter(key => key.includes('Page'));
    dispatch(actionGetListPageName.success(listPageName));
  } catch (err) {
    dispatch(actionGetListPageName.failure(err.message));
  }
};

export default createDispatchAction(thunkGetListPageName);
