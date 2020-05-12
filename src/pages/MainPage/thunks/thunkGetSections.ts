import readFireBase from 'firebase/database/readFireBase';
import { createDispatchAction } from 'utils/functions/reduxActions';
import { getDataSections } from '../actions/actionGetSections';

type ThunkGetSections = ThunkAction<typeof getDataSections>;
export interface ThunkGetSectionsArg {
  pageName: string;
}

const thunkGetSections = ({pageName}: ThunkGetSectionsArg): ThunkGetSections => async dispatch => {
  dispatch(getDataSections.request(null));
  try {
    const data = await readFireBase(`/PagesDetail/${pageName}`);
    dispatch(getDataSections.success(data));
  } catch(err) {
    dispatch(getDataSections.failure('Error'));
  }
};
export default createDispatchAction(thunkGetSections);
