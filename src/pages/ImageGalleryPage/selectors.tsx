//imageGalleryReducers
//Gallery
export const iconGallery = (state: AppState) => state.rootSettingsPageReducers.imageGallery?.iconImg;
export const sliderImgsGallery = (state: AppState) => state.rootSettingsPageReducers.imageGallery?.sliderImgs;
export const imageSectionCol = (state: AppState) => state.rootSettingsPageReducers.imageGallery?.imageSectionCol;
export const backgroundImageGallery = (state: AppState) => state.rootSettingsPageReducers.imageGallery?.backgroundImage;
//Request
export const statusRequestImage = (state: AppState) => state.rootSettingsPageReducers.imageGallery.statusRequestImageGallery;
export const messageRequestImageFailure = (state: AppState) => state.rootSettingsPageReducers.imageGallery.messageRequestImageGallery;
//Upload
export const statusUploadFile = (state: AppState) => state.rootSettingsPageReducers.imageGallery.statusUpload;
export const messageUploadFileFailure = (state: AppState) => state.rootSettingsPageReducers.imageGallery.messageUploadAction;
