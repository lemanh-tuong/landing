import { SettingMainContentReducers } from "pages/SettingsPage/reducers/reducerMainContent";
import { ImageGalleryReducers } from "pages/ImageGalleryPage/reducers/reducerImageGallery";

export type RootSettingsPageReducers = SettingMainContentReducers & ImageGalleryReducers;

export interface AppState {
  rootSettingsPageReducers: RootSettingsPageReducers
}
