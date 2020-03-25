import { SettingMainContentReducers } from "pages/SettingsPage/reducers/reducerMainContent";
import { ImageGalleryReducers } from "pages/SettingsPage/reducers/reducerImageGallery";

export interface RootSettingsPageReducers {
  settingMainContentReducers: SettingMainContentReducers;
  imageGallery: ImageGalleryReducers;
}

export interface AppState {
  rootSettingsPageReducers: RootSettingsPageReducers
}
