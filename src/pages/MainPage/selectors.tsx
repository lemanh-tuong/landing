//settingsReducers
export const listSections = (state: AppState) => state.mainPageReducer.sections;
export const statusRequestMainPageSections = (state: AppState) => state.mainPageReducer.statusRequestSections;
export const messageRequestMainPageSections = (state: AppState) => state.mainPageReducer.messageRequestaSections;

export const listPage = (state: AppState) => state.listPageReducers.data;
