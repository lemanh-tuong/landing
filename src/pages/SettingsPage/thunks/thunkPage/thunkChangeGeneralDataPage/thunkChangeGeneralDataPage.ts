import { PageDetailData, PageGeneralData } from 'pages/ListPage/ListPageType/type';
import { actionChangeGeneralDataPage, ActionChangeGeneralDataPagePayload } from 'pages/SettingsPage/actions/actionPage/actionChangeGeneralDataPage/actionChangeGeneralDataPage';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkChangeGeneralDataPage = ThunkAction<typeof actionChangeGeneralDataPage>;

const thunkChangeGeneralDataPage = ({nowIndexPage, newPageName, newPathName, id, isHome}: ActionChangeGeneralDataPagePayload): ThunkChangeGeneralDataPage => async (dispatch, getState) => {
  const { firebaseReducer } = getState();
  dispatch(actionChangeGeneralDataPage.request());
  const { listPageReducers } = getState();
  const { data } = listPageReducers;
  const newData = isHome ? data.map((page, index) => {
    if(index === nowIndexPage) return {...page, pageName: newPageName, pathName: newPathName, isHome: true, id: id}
    return {...page, isHome: false}
  }) : [...data.slice(0, nowIndexPage), {...data[nowIndexPage], pageName: newPageName, pathName: newPathName, isHome: isHome}, ...data.slice(nowIndexPage + 1, data.length)];
  const newPageData: PageGeneralData = {
    ...data[nowIndexPage],
    pathName: newPathName,
    pageName: newPageName,
    isHome: isHome,
  };
  try {
    const res = await firebaseReducer.readDatabase(`/PagesDetail/${data[nowIndexPage].pathName.slice(1)}`);
    await Promise.all([
      firebaseReducer.updateDatabase({
        ref: `ListPage`,
        updateValue: [...data.slice(0, nowIndexPage), {...newPageData}, ...data.slice(nowIndexPage+1, data.length)] as PageGeneralData[]
      }),
      firebaseReducer.removeDatabase({ref: `/PagesDetail/${data[nowIndexPage].pathName.slice(1)}`}),
      firebaseReducer.updateDatabase({
        ref: `/PagesDetail/${newPathName.slice(1)}`,
        updateValue: {
          id: res.id || '',
          pageName: newPageName,
          pathName: newPathName,
          elements: res.elements || []
        } as PageDetailData
      })
    ])
    dispatch(actionChangeGeneralDataPage.success(newData));
  } catch(err) {
    dispatch(actionChangeGeneralDataPage.failure(err.message));
  }
};

export default createDispatchAction(thunkChangeGeneralDataPage);
