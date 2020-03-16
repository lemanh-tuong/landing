import { getData } from '../actions/actionGetData/actionGetData';
import readFireBase from 'firebase/database/readFireBase';

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

export default thunkGetData;
