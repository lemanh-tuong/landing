import readFireBase from 'firebase/database/readFireBase';
import { createDispatchAction } from 'utils/functions/reduxActions';
import { getDataSections } from '../actions/actionGetSections';

type ThunkGetSections = ThunkAction<typeof getDataSections>;
export interface ThunkGetSectionsArg {
  pathName: string;
}

const thunkGetSections = ({pathName}: ThunkGetSectionsArg): ThunkGetSections => async dispatch => {
  dispatch(getDataSections.request(null));
  try {
    const data = await readFireBase(`/PagesDetail/${pathName.slice(1)}`);
    dispatch(getDataSections.success(data));
  } catch(err) {
    dispatch(getDataSections.failure(err.message));
  }
};
export default createDispatchAction(thunkGetSections);
