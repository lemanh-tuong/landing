//settingsReducers
export const homePageSections = (state: AppState) => state.reducerHomePage.sections;
export const statusRequestHomePageSections = (state: AppState) => state.reducerHomePage.statusRequestSections;
export const messageRequestHomePageSections = (state: AppState) => state.reducerHomePage.messageRequestaSections;
export const nav = (state: AppState) => state.navReducer.navItems;
export const logo = (state: AppState) => state.navReducer.logo;
export const buttons = (state: AppState) => state.navReducer.buttons;
export const statusRequestNav = (state: AppState) => state.navReducer.statusRequestNav;
export const messageRequestNav = (state: AppState) => state.navReducer.messageRequestNav;
