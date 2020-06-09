import { getDataComponent } from 'pages/ComponentPage/actions/actionGetComponent/actionGetComponent';
import { ItemSideBar } from 'pages/SettingsPage/components/SideBar/SideBar';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkGetComponent = ThunkAction<typeof getDataComponent>;

const thunkGetComponent = (type: 'section'): ThunkGetComponent => async (dispatch, getState) => {
  const { firebaseReducer } = getState()
  dispatch(getDataComponent.request(null));
  if(type === 'section') {
    const data: (ItemSideBar & {previewImg: string})[] = await firebaseReducer.readDatabase('SideBar');
    try {
      dispatch(getDataComponent.success(data));
    } catch(err) {
      dispatch(getDataComponent.failure(JSON.stringify(err)));
    }
  }
};

export default createDispatchAction(thunkGetComponent);
