import readFireBase from 'firebase/database/readFireBase';
import { PageGeneralData } from 'pages/ListPage/ListPageType/type';
import { createDispatchAction } from 'utils/functions/reduxActions';
import { getDataSections } from '../actions/actionGetSections';

type ThunkGetSections = ThunkAction<typeof getDataSections>;
export interface ThunkGetSectionsArg {
  pathName: string;
}

const thunkGetSections = ({pathName}: ThunkGetSectionsArg): ThunkGetSections => async (dispatch, getState) => {
  const { listPageReducers } = getState();
  const { data } = listPageReducers;
  const res = data.find(item => item.pathName === pathName) as PageGeneralData;
  console.log(res, pathName);
  dispatch(getDataSections.request(null));
  try {
    const data = await readFireBase(`/PagesDetail/${res.pageName}`);
    dispatch(getDataSections.success(data));
  } catch(err) {
    dispatch(getDataSections.failure('Error'));
  }
};
export default createDispatchAction(thunkGetSections);
