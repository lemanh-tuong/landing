//settingsReducers
export const sections = (state: AppState) => state.settingMainContentReducers.elements;
export const pageName = (state: AppState) => state.settingMainContentReducers.pageName;
export const statusRequestElements = (state: AppState) => state.settingMainContentReducers.statusRequestElements;
export const messageRequestElements = (state: AppState) => state.settingMainContentReducers.elements;

//NavReducers
export const logoImg = (state: AppState) => state.navReducer.logo;
export const navItems = (state: AppState) => state.navReducer.navItems;
export const buttons = (state: AppState) => state.navReducer.buttons;
export const statusRequestNav = (state: AppState) => state.navReducer.statusRequestNav;
export const messageRequestNav = (state: AppState) => state.navReducer.messageRequestNav;

//sidebarReducers
export const patternSection = (state: AppState) => state.sidebarReducers.patternSection;
export const statusRequestPatternSection = (state: AppState) => state.sidebarReducers.statusRequestSideBar;
export const messageRequestPatternSection = (state: AppState) => state.sidebarReducers.messageRequestSideBar;

// List Page
export const statusRequestListPage = (state: AppState) => state.listPageReducers.statusRequest;
export const listPage = (state: AppState) => state.listPageReducers.data;
export const messageRequestListPage = (state: AppState) => state.listPageReducers.messageRequestErr;
export const statusDeletePage = (state: AppState) => state.listPageReducers.statusDeletePage;
export const statusCreatePage = (state: AppState) => state.listPageReducers.statusCreatePage;
export const statusChangeGeneralDataPage = (state: AppState) => state.listPageReducers.statusChangeGeneralDataPage;
export const statusDuplicatePage = (state: AppState) => state.listPageReducers.statusDuplicatePage;
