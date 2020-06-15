
export const statusRequest = (state: AppState) => state.listPageReducers.statusRequest;
export const listPage = (state: AppState) => state.listPageReducers.data;
export const message = (state: AppState) => state.listPageReducers.messageRequestErr;

export const userProfile = (state: AppState) => state.authReducer.profile;


export const statusChangeAvatar = (state: AppState) => state.authReducer.statusChangeAvatar;
