import { writeFirebase } from 'firebase/database/writeFirebase';
import { actionAddNewPage } from 'pages/ListPage/actions/actionAddNewPage/actionAddPage';
import { PageGeneralData } from 'pages/ListPage/ListPageType/type';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkAddNewPage =ThunkAction<typeof actionAddNewPage>;

const thunkAddNewPage = ({pageName, id, pathName, titlePage}: PageGeneralData): ThunkAddNewPage => async (dispatch, getState) => {
  const  { listPageReducers} = getState();
  const { data } = listPageReducers;
  const newPageProperty = {
    pageName,
    id,
    pathName,
    titlePage
  };
  dispatch(actionAddNewPage.request());
  try {
    await writeFirebase<PageGeneralData>({ref: `PagesDetail/${pageName}`, value: {...newPageProperty}});
    writeFirebase<PageGeneralData[]>({ref: 'ListPage', value: data.concat(newPageProperty)});
    dispatch(actionAddNewPage.success(newPageProperty));
  } catch(err) {
    dispatch(actionAddNewPage.failure(err.message));
  }
};

export default createDispatchAction(thunkAddNewPage);
