import { getData } from '../actions/actionGetData/actionGetData';
import readFireBase from 'firebase/database/readFireBase';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkGetData = ThunkAction<typeof getData>;

const thunkGetData = (): ThunkGetData => async (dispatch: any) => {
  dispatch(getData.request(null));
  try {
    const data = await readFireBase();
    dispatch(getData.success(data));
  } catch(err) {
    dispatch(getData.failure('Error'));
  }
};

export default createDispatchAction(thunkGetData);
