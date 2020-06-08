import { writeFirebase } from 'firebase/database/writeFirebase';
import { PageDetailData, PageGeneralData } from 'pages/ListPage/ListPageType/type';
import { actionAddNewPage } from 'pages/SettingsPage/actions/actionPage/actionAddNewPage/actionAddNewPage';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkAddNewPage =ThunkAction<typeof actionAddNewPage>;

const thunkAddNewPage = ({pageName, id, pathName, isHome }: PageGeneralData): ThunkAddNewPage => async (dispatch, getState) => {
  const  { listPageReducers} = getState();
  const { data } = listPageReducers;
  const newPageProperty = {
    pageName,
    id,
    pathName,
    isHome
  };
  const newData = isHome ? data.map(page => {
    if(page.isHome) return {...page, isHome: false}
    else return {...page}
  }).concat(newPageProperty) : data.concat(newPageProperty);
  dispatch(actionAddNewPage.request());
  try {
    await writeFirebase<PageDetailData>({ref: `PagesDetail/${pathName.slice(1)}`, value: {id, pathName, pageName, elements: []}});
    writeFirebase<PageGeneralData[]>({ref: 'ListPage', value: newData});
    dispatch(actionAddNewPage.success(newData));
  } catch(err) {
    dispatch(actionAddNewPage.failure(err.message));
  }
};

export default createDispatchAction(thunkAddNewPage);
