import { getDataSideBar } from 'pages/SettingsPage/actions/actionsSideBar/actionGetDataSideBar/actionGetDataSideBar';
import { ItemSideBar } from 'pages/SettingsPage/components/SideBar/SideBar';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkGetDataSideBar = ThunkAction<typeof getDataSideBar>;

const thunkGetDataSideBar = (): ThunkGetDataSideBar => async (dispatch, getState) => {
  const { firebaseReducer } = getState();
  dispatch(getDataSideBar.request(null));
  if (Object.keys(firebaseReducer.database).length > 0) {
    const data: (ItemSideBar & { previewImg: string })[] = await firebaseReducer.readDatabase('SideBar');
    try {
      dispatch(getDataSideBar.success(data));
    } catch (err) {
      dispatch(getDataSideBar.failure(err.message));
    }
  } else {
    dispatch(getDataSideBar.failure('Firebase not exist'));
  }
};

export default createDispatchAction(thunkGetDataSideBar);
