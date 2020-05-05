import readFireBase from 'firebase/database/readFireBase';
import { createDispatchAction } from 'utils/functions/reduxActions';
import { getDataSections } from '../actions/actionGetSections';

type ThunkGetSections = ThunkAction<typeof getDataSections>;
export interface ThunkGetSectionsArg {
  pageName: 'HomePage';
}
const thunkGetSections = ({pageName}: ThunkGetSectionsArg): ThunkGetSections => async dispatch => {
  dispatch(getDataSections.request(null));
  try {
    const data = await readFireBase(pageName);
    if(data) {
      dispatch(getDataSections.success(data));
    } else {
      dispatch(getDataSections.success({
        elements: [],
        pageName: ''
      }));
    }
  } catch(err) {
    dispatch(getDataSections.failure('Error'));
  }
};
export default createDispatchAction(thunkGetSections);
