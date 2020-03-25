import { getDataSideBar } from "pages/SettingsPage/actions/actionGetDataSideBar/actionGetDataSideBar";
import readFireBase from "firebase/database/readFireBase";
import { ItemSideBar } from "pages/SettingsPage/components/SideBar/SideBar";
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkGetDataSideBar = ThunkAction<typeof getDataSideBar>

const thunkGetDataSideBar = (): ThunkGetDataSideBar => async dispatch => {
  dispatch(getDataSideBar.request(null));
  const data: ItemSideBar[] = await readFireBase('SideBar');
  console.log(data);
  try {
    dispatch(getDataSideBar.success(data));
  }
  catch(err) {
    dispatch(getDataSideBar.failure(JSON.stringify(err)))
  }
}

export default createDispatchAction(thunkGetDataSideBar);
