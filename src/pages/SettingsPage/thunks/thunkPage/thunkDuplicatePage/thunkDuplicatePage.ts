import { writeFirebase } from 'firebase/database/writeFirebase';
import { PageDetailData, PageGeneralData } from 'pages/ListPage/ListPageType/type';
import { actionDuplicatePage } from 'pages/SettingsPage/actions/actionPage/actionDuplicatePage/actionDuplicatePage';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkDuplicatePage = ThunkAction<typeof actionDuplicatePage>;

export interface ThunkDuplicatePageArg {
  pathName: string;
  pageName: string;
  id: string;
}

const thunkDuplicatePage = ({pathName, pageName, id}: ThunkDuplicatePageArg): ThunkDuplicatePage => async (dispatch, getState) => {
  const { listPageReducers, settingMainContentReducers } = getState();
  const { data } = listPageReducers;
  const { elements } = settingMainContentReducers;
  dispatch(actionDuplicatePage.request());
  try {
    await writeFirebase<PageDetailData>({ref: `PagesDetail/${pageName}`, value: {
      elements,  pathName, pageName, id
    }});
    await writeFirebase<PageGeneralData[]>({ref: 'ListPage', value: data.concat({id, pathName, pageName})});
    dispatch(actionDuplicatePage.success({elements, id, pageName, pathName}));
  } catch (err) {
    dispatch(actionDuplicatePage.failure(err.message));
  }
};

export default createDispatchAction(thunkDuplicatePage);
