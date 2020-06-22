export const messageRequestNav = (state: AppState) => state.navReducer.messageRequestNav;
export const messageRequestListPage = (state: AppState) => state.listPageReducers.messageRequestErr;
export const messageRequestProjectName = (state: AppState) => state.projectReducers.messageRequestProject;
export const messageRequestImageGallery = (state: AppState) => state.imageGallery.messageRequestImageGallery;

export const projectFirebaseId = (state: AppState) => state.configAppReducer.firebaseConfig.projectId;
