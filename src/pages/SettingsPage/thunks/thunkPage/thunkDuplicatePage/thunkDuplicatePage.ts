import { PageDetailData, PageGeneralData } from 'pages/ListPage/ListPageType/type';
import { actionDuplicatePage } from 'pages/SettingsPage/actions/actionPage/actionDuplicatePage/actionDuplicatePage';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkDuplicatePage = ThunkAction<typeof actionDuplicatePage>;

export interface ThunkDuplicatePageArg {
  pathName: string;
  pageName: string;
  id: string;
  isHome: boolean;
  pathNameSourcePage?: string;
}

const thunkDuplicatePage = ({pathName, pageName, id, isHome, pathNameSourcePage}: ThunkDuplicatePageArg): ThunkDuplicatePage => async (dispatch, getState) => {
  const { listPageReducers, settingMainContentReducers, firebaseReducer } = getState();
  const { data } = listPageReducers;
  const { elements } = settingMainContentReducers;
  dispatch(actionDuplicatePage.request());
  if(pathNameSourcePage) {
    const res = await firebaseReducer.readDatabase(`PagesDetail/${pathNameSourcePage}`) as PageDetailData;
    const { elements } = res;
    const newPageData = {
      elements,
      id,
      pageName,
      pathName
    }
    const newGeneralPageData = isHome ? data.map(page => {
      if(page.isHome) return {...page, isHome: false}
      return {...page}
    }).concat({id, pathName, pageName, isHome: true }) : data.concat({id, pathName, pageName, isHome: false });
    try {
      await Promise.all([
        firebaseReducer.writeDatabase<PageDetailData>({ref: `PagesDetail/${pathName}`, value: newPageData}),
        firebaseReducer.writeDatabase<PageGeneralData[]>({ref: 'ListPage', value: newGeneralPageData})
      ]);
      dispatch(actionDuplicatePage.success(newGeneralPageData));
    } catch (err) {
      dispatch(actionDuplicatePage.failure(err.message));
    }
  }
  else {
    const newPageData = {
      elements,
      id,
      pageName,
      pathName
    }
    const newGeneralPageData = isHome ? data.map(page => {
      if(page.isHome) return {...page, isHome: false}
      return {...page}
    }).concat({id, pathName, pageName, isHome: true }) : data.concat({id, pathName, pageName, isHome: false });
    try {
      await Promise.all([
        firebaseReducer.writeDatabase<PageDetailData>({ref: `PagesDetail/${pathName}`, value: newPageData}),
        firebaseReducer.writeDatabase<PageGeneralData[]>({ref: 'ListPage', value: newGeneralPageData})
      ]);
      dispatch(actionDuplicatePage.success(newGeneralPageData));
    } catch (err) {
      dispatch(actionDuplicatePage.failure(err.message));
    }
  }
};

export default createDispatchAction(thunkDuplicatePage);
