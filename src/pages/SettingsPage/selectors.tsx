//settingsReducers
export const sections = (state: AppState) => state.rootSettingsPageReducers.settingMainContentReducers.elements;
export const pageName = (state: AppState) => state.rootSettingsPageReducers.settingMainContentReducers.pageName;
export const statusRequestElements = (state: AppState) => state.rootSettingsPageReducers.settingMainContentReducers.statusRequestElements;
export const messageRequestElements = (state: AppState) => state.rootSettingsPageReducers.settingMainContentReducers.elements;

//sidebarReducers
export const patternSection = (state: AppState) => state.rootSettingsPageReducers.sidebarReducers.patternSection;
export const statusRequestPatternSection = (state: AppState) => state.rootSettingsPageReducers.sidebarReducers.statusRequestSideBar;
export const messageRequestPatternSection = (state: AppState) => state.rootSettingsPageReducers.sidebarReducers.messageRequestSideBar;
