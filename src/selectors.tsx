
export const token = (state: AppState) => state.authReducer.token;
export const refreshToken = (state: AppState) => state.authReducer.refreshToken;
export const statusLog = (state: AppState) => state.authReducer.statusLogin;
export const messageLogin = (state: AppState) => state.authReducer.message;

//NavReducers
export const logoImg = (state: AppState) => state.navReducer.logo;
export const navItems = (state: AppState) => state.navReducer.navItems;
export const statusRequestNav = (state: AppState) => state.navReducer.statusRequestNav;
export const messageRequestNav = (state: AppState) => state.navReducer.messageRequestNav;

// List Page
export const listPage = (state: AppState) => state.listPageReducers.data;
export const statusRequestPage = (state: AppState) => state.listPageReducers.statusRequest;
export const messageRequestPageErr = (state: AppState) => state.listPageReducers.messageRequestErr;
