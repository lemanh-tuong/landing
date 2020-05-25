import { ComponentPageReducers } from 'pages/ComponentPage/reducers/reducersComponentPage';
import { ImageGalleryReducers } from 'pages/ImageGalleryPage/reducers/reducerImageGallery';
import { SettingMainContentReducers } from 'pages/SettingsPage/reducers/reducerMainContent';

export type RootSettingsPageReducers = SettingMainContentReducers & ImageGalleryReducers & ComponentPageReducers;

export interface AppState {
  rootSettingsPageReducers: RootSettingsPageReducers;
}
