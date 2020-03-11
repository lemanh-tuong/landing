import readFireBase from 'firebase/database/readFireBase';
import { getData } from '../../actions/actionGetData/actionGetData';

type ThunkGetData = ThunkAction<typeof getData>;

const thunkGetData = (): ThunkGetData => async (dispatch: any) => {
  dispatch(getData.request(null));
  try {
    const data = await readFireBase();
    if(data) {
      dispatch(getData.success(data));
    } else {
      dispatch(getData.success({
        elements: [],
        pageName: ''
      }));
    }
  } catch(err) {
    dispatch(getData.failure('Error'));
  }
};

export default thunkGetData;
