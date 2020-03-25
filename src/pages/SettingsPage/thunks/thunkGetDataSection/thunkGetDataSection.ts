import readFireBase from 'firebase/database/readFireBase';
import { getDataSection } from '../../actions/actionGetDataSection/actionGetDataSection';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkGetDataSection = ThunkAction<typeof getDataSection>;

const thunkGetDataSection = (pageName: string): ThunkGetDataSection => async dispatch => {
  dispatch(getDataSection.request(null));
  try {
    const data = await readFireBase(pageName);
    if(data) {
      dispatch(getDataSection.success(data));
    } else {
      dispatch(getDataSection.success({
        elements: [],
        pageName: ''
      }));
    }
  } catch(err) {
    dispatch(getDataSection.failure('Error'));
  }
};

export default createDispatchAction(thunkGetDataSection);
