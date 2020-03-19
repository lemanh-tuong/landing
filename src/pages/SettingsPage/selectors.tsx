//settingsReducers
export const sections = (state: AppState) => state.rootSettingsPageReducers.settingsReducers.elements;
export const pageName = (state: AppState) => state.rootSettingsPageReducers.settingsReducers.pageName;
export const statusRequestElements = (state: AppState) => state.rootSettingsPageReducers.settingsReducers.statusRequestElements;
export const messageRequestElements = (state: AppState) => state.rootSettingsPageReducers.settingsReducers.elements;

//imageGalleryReducers
export const iconGallery = (state: AppState) => state.rootSettingsPageReducers.imageGallery?.icon;
