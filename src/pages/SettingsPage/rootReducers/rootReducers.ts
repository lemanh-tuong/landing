import { combineReducers } from 'redux';
import { settingsReducers } from '../reducers/reducer';
import { imageGallery } from '../reducers/reducerImageGallery';

// todolist,
const rootSettingsPageReducers = combineReducers({
  settingsReducers,
  imageGallery
});

export default rootSettingsPageReducers;
