import readFireBase from 'firebase/database/readFireBase';
import { removeFirebase } from 'firebase/database/removeFirebase';
import updateFireBase from 'firebase/database/updateFireBase';
import { PageDetailData, PageGeneralData } from 'pages/ListPage/ListPageType/type';
import { actionChangeGeneralDataPage, ActionChangeGeneralDataPagePayload } from 'pages/SettingsPage/actions/actionPage/actionChangeGeneralDataPage/actionChangeGeneralDataPage';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkChangeGeneralDataPage = ThunkAction<typeof actionChangeGeneralDataPage>;

const thunkChangeGeneralDataPage = ({nowIndexPage, newPageName, newPathName, id}: ActionChangeGeneralDataPagePayload): ThunkChangeGeneralDataPage => async (dispatch, getState) => {
  dispatch(actionChangeGeneralDataPage.request());
  const { listPageReducers } = getState();
  const { data } = listPageReducers;
  const newPageData: PageGeneralData = {
    ...data[nowIndexPage],
    pathName: newPathName,
    pageName: newPageName,
  };
  try {
    const res = await readFireBase(`/PagesDetail/${data[nowIndexPage].pageName}`);
    await Promise.all([
      updateFireBase({
        ref: `ListPage/${nowIndexPage}`,
        updateValue: newPageData as PageGeneralData
      }),
      removeFirebase({ref: `/PagesDetail/${data[nowIndexPage].pageName}`}),
      updateFireBase({
        ref: `/PagesDetail/${newPageName}`,
        updateValue: {
          id: res.id || '',
          pageName: newPageName,
          pathName: newPathName,
          elements: res.elements || []
        } as PageDetailData
      })
    ])
    dispatch(actionChangeGeneralDataPage.success(newPageData));
  } catch(err) {
    dispatch(actionChangeGeneralDataPage.failure(err.message));
  }
};

export default createDispatchAction(thunkChangeGeneralDataPage);
