import { ItemSideBar } from 'pages/SettingsPage/components/SideBar/SideBar';
import { createAsyncAction } from 'utils/functions/reduxActions/createAsyncAction';

const getDataSideBar = createAsyncAction(['@getDataSidebarRequest', '@getDataSidebarSuccess', '@getDataSidebarFailure'])<
  null,
  (ItemSideBar & { previewImg: string })[],
  string
>();

export { getDataSideBar };
