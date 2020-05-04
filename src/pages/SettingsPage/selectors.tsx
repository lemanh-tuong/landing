//settingsReducers
export const sections = (state: AppState) => state.settingMainContentReducers.elements;
export const pageName = (state: AppState) => state.settingMainContentReducers.pageName;
export const statusRequestElements = (state: AppState) => state.settingMainContentReducers.statusRequestElements;
export const messageRequestElements = (state: AppState) => state.settingMainContentReducers.elements;

//NavReducers
export const logoImg = (state: AppState) => state.navReducer.logo;
export const navItems = (state: AppState) => state.navReducer.navItems;
export const statusRequestNav = (state: AppState) => state.navReducer.statusRequestNav;
export const messageRequestNav = (state: AppState) => state.navReducer.message;

//sidebarReducers
export const patternSection = (state: AppState) => state.sidebarReducers.patternSection;
export const statusRequestPatternSection = (state: AppState) => state.sidebarReducers.statusRequestSideBar;
export const messageRequestPatternSection = (state: AppState) => state.sidebarReducers.messageRequestSideBar;
