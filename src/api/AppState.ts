import { SettingsReducers } from "pages/SettingsPage/reducers/reducer";
import { ImageGalleryReducers } from "pages/SettingsPage/reducers/reducerImageGallery";

export interface RootSettingsPageReducers {
  settingsReducers: SettingsReducers;
  imageGallery: ImageGalleryReducers;
}

export interface AppState {
  rootSettingsPageReducers: RootSettingsPageReducers
}
