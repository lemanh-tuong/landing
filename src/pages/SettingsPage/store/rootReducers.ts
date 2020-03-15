import { combineReducers } from 'redux';
import { settingsReducers } from '../reducers/reducer';
import { imageGallerySection } from '../reducers/reducerImageGallerySection';

// todolist,
const rootSettingsPageReducers = combineReducers({
  settingsReducers,
  imageGallerySection
});

export default rootSettingsPageReducers;
