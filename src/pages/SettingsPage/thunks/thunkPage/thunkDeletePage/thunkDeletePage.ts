import { PageGeneralData } from 'pages/ListPage/ListPageType/type';
import { actionDeletePage } from 'pages/SettingsPage/actions/actionPage/actionDeletePage/actionDeletePage';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkDeletePage = ThunkAction<typeof actionDeletePage>;

const thunkDeletePage = (indexDelete: number): ThunkDeletePage => async (dispatch, getState) => {
  const { listPageReducers, firebaseReducer } = getState();
  const { data } = listPageReducers;
  const { pathName } = data[indexDelete];
  const newData = [...data.slice(0, indexDelete), ...data.slice(indexDelete + 1, data.length)];
  dispatch(actionDeletePage.request());
  try {
    await Promise.all([
      firebaseReducer.writeDatabase<PageGeneralData[]>({ref: 'ListPage', value: newData}),
      firebaseReducer.removeDatabase({ref: `PagesDetail/${pathName.slice(1)}`})
    ]);
    dispatch(actionDeletePage.success(indexDelete));
  } catch(err) {
    dispatch(actionDeletePage.failure(err.message));
  }
};

export default createDispatchAction(thunkDeletePage);
