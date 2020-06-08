import { writeFirebase } from 'firebase/database/writeFirebase';
import { PageDetailData, PageGeneralData } from 'pages/ListPage/ListPageType/type';
import { actionDuplicatePage } from 'pages/SettingsPage/actions/actionPage/actionDuplicatePage/actionDuplicatePage';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkDuplicatePage = ThunkAction<typeof actionDuplicatePage>;

export interface ThunkDuplicatePageArg {
  pathName: string;
  pageName: string;
  id: string;
  isHome: boolean;
}

const thunkDuplicatePage = ({pathName, pageName, id, isHome}: ThunkDuplicatePageArg): ThunkDuplicatePage => async (dispatch, getState) => {
  const { listPageReducers, settingMainContentReducers } = getState();
  const { data } = listPageReducers;
  const { elements } = settingMainContentReducers;
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
  dispatch(actionDuplicatePage.request());
  try {
    await writeFirebase<PageDetailData>({ref: `PagesDetail/${pathName.slice(1)}`, value: newPageData});
    await writeFirebase<PageGeneralData[]>({ref: 'ListPage', value: newGeneralPageData});
    dispatch(actionDuplicatePage.success(newGeneralPageData));
  } catch (err) {
    dispatch(actionDuplicatePage.failure(err.message));
  }
};

export default createDispatchAction(thunkDuplicatePage);
