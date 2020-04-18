import { settingMainContentReducers } from '../reducers/reducerMainContent';
import { sidebarReducers } from '../reducers/reducerSidebar';

// todolist,
const rootSettingsPageReducers = {
  settingMainContentReducers,
  sidebarReducers,
};

export default rootSettingsPageReducers;
