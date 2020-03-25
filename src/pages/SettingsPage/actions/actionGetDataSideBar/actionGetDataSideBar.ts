import { createAsyncAction } from "utils/functions/reduxActions/createAsyncAction";
import { ItemSideBar } from "pages/SettingsPage/components/SideBar/SideBar";


const getDataSideBar = createAsyncAction(['@getDataSidebarRequest', '@getDataSidebarSuccess', '@getDataSidebarFailure'])<null, ItemSideBar[], string>()

export { getDataSideBar }
