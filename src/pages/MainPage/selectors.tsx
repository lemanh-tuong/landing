//settingsReducers
export const listSections = (state: AppState) => state.mainPageReducer.sections;
export const statusRequestMainPageSections = (state: AppState) => state.mainPageReducer.statusRequestSections;
export const messageRequestMainPageSections = (state: AppState) => state.mainPageReducer.messageRequestaSections;
export const nowPageName = (state: AppState) => state.mainPageReducer.pageName;
export const nowPageId = (state: AppState) => state.mainPageReducer.id;
export const nowPathName = (state: AppState) => state.mainPageReducer.pathName;

export const listPage = (state: AppState) => state.listPageReducers.data;

export const projectName = (state: AppState) => state.projectReducers.projectName;
