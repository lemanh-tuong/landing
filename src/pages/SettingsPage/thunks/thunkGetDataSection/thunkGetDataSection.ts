import readFireBase from 'firebase/database/readFireBase';
import { createDispatchAction } from 'utils/functions/reduxActions';
import { getDataSection } from '../../actions/actionGetDataSection/actionGetDataSection';

type ThunkGetDataSection = ThunkAction<typeof getDataSection>;
export interface ThunkGetDataSectionArg {
  pageName: string
}


const thunkGetDataSection = ({pageName}: ThunkGetDataSectionArg): ThunkGetDataSection => async dispatch => {
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
