import { SettingMainContentReducers } from "pages/SettingsPage/reducers/reducerMainContent";
import { ImageGalleryReducers } from "pages/SettingsPage/reducers/reducerImageGallery";

export interface RootSettingsPageReducers {
  readonly settingMainContentReducers: SettingMainContentReducers;
  readonly imageGallery: ImageGalleryReducers;
}

export interface AppState {
  rootSettingsPageReducers: RootSettingsPageReducers
}
