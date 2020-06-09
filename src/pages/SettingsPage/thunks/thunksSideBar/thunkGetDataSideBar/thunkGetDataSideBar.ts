import { getDataSideBar } from 'pages/SettingsPage/actions/actionsSideBar/actionGetDataSideBar/actionGetDataSideBar';
import { ItemSideBar } from 'pages/SettingsPage/components/SideBar/SideBar';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkGetDataSideBar = ThunkAction<typeof getDataSideBar>;

const thunkGetDataSideBar = (): ThunkGetDataSideBar => async (dispatch, getState) => {
  const { firebaseReducer } = getState();
  dispatch(getDataSideBar.request(null));
  const data: (ItemSideBar & {previewImg: string})[] = await firebaseReducer.readDatabase('SideBar');
  try {
    dispatch(getDataSideBar.success(data));
  } catch(err) {
    dispatch(getDataSideBar.failure(JSON.stringify(err)));
  }
};

export default createDispatchAction(thunkGetDataSideBar);
