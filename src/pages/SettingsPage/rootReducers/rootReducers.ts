import { combineReducers } from 'redux';
import { settingMainContentReducers } from '../reducers/reducerMainContent';
import { imageGallery } from '../reducers/reducerImageGallery';
import { sidebarReducers } from '../reducers/reducerSidebar';

// todolist,
const rootSettingsPageReducers = combineReducers({
  settingMainContentReducers,
  imageGallery,
  sidebarReducers,
});

export default rootSettingsPageReducers;
