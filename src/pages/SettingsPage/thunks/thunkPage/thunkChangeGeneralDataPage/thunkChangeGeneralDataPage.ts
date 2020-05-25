import { removeFirebase } from 'firebase/database/removeFirebase';
import { writeFirebase } from 'firebase/database/writeFirebase';
import { PageDetailData, PageGeneralData } from 'pages/ListPage/ListPageType/type';
import { actionChangeGeneralDataPage, ActionChangeGeneralDataPagePayload } from 'pages/SettingsPage/actions/actionPage/actionChangeGeneralDataPage/actionChangeGeneralDataPage';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkChangeGeneralDataPage = ThunkAction<typeof actionChangeGeneralDataPage>;

const thunkChangeGeneralDataPage = ({newPageName, newPathName, id}: ActionChangeGeneralDataPagePayload): ThunkChangeGeneralDataPage => async (dispatch, getState) => {
  dispatch(actionChangeGeneralDataPage.request());
  const { listPageReducers, settingMainContentReducers } = getState();
  const { elements, pageName } = settingMainContentReducers;
  const { data } = listPageReducers;
  const indexNowPage = data.findIndex(item => item.id === id);
  const newPageData: PageGeneralData = {
    ...data[indexNowPage],
    pathName: newPathName,
    pageName: newPageName,
  };
  const newData = [...data.slice(0, indexNowPage), {...newPageData}, ...data.slice(indexNowPage+1, data.length)];
  try {
    await writeFirebase({ref: '/ListPage', value: newData});
    await removeFirebase({ref: `/PagesDetail/${pageName}`});
    await writeFirebase({ref: `/PagesDetail/${newPageName}`, value: {
      elements: elements,
      id: id,
      pageName: newPageName,
      pathName: newPathName,
    } as PageDetailData});
    dispatch(actionChangeGeneralDataPage.success(newPageData));
  } catch(err) {
    dispatch(actionChangeGeneralDataPage.failure(err.message));
  }
};

export default createDispatchAction(thunkChangeGeneralDataPage);
