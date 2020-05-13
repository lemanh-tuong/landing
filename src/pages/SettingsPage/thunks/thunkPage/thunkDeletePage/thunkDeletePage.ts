import { removeFirebase } from 'firebase/database/removeFirebase';
import { writeFirebase } from 'firebase/database/writeFirebase';
import { PageGeneralData } from 'pages/ListPage/ListPageType/type';
import { actionDeletePage } from 'pages/SettingsPage/actions/actionPage/actionDeletePage/actionDeletePage';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkDeletePage = ThunkAction<typeof actionDeletePage>;

const thunkDeletePage = (indexDelete: number): ThunkDeletePage => async (dispatch, getState) => {
  const { listPageReducers } = getState();
  const { data } = listPageReducers;
  const { pageName } = data[indexDelete];
  const newData = [...data.slice(0, indexDelete), ...data.slice(indexDelete + 1, data.length)];
  dispatch(actionDeletePage.request());
  try {
    writeFirebase<PageGeneralData[]>({ref: 'ListPage', value: newData});
    removeFirebase({ref: `PagesDetail/${pageName}`});
    dispatch(actionDeletePage.success(indexDelete));
  } catch(err) {
    dispatch(actionDeletePage.failure(err.message));
  }
};

export default createDispatchAction(thunkDeletePage);
