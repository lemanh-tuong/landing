import { settingMainContentReducers } from '../reducers/reducerMainContent';
import { navReducer } from '../reducers/reducerNav';
import { sidebarReducers } from '../reducers/reducerSidebar';
// todolist,
const rootSettingsPageReducers = {
  settingMainContentReducers,
  sidebarReducers,
  navReducer,
};

export default rootSettingsPageReducers;
