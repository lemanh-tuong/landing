//imageGalleryReducers
//Gallery
export const iconGallery = (state: AppState) => state.imageGallery?.iconImg;
export const sliderImgsGallery = (state: AppState) => state.imageGallery?.sliderImgs;
export const imageSectionCol = (state: AppState) => state.imageGallery?.imageSectionCol;
export const backgroundImageGallery = (state: AppState) => state.imageGallery?.backgroundImage;
//Request
export const statusRequestImage = (state: AppState) => state.imageGallery.statusRequestImageGallery;
export const messageRequestImageFailure = (state: AppState) => state.imageGallery.messageRequestImageGallery;

//Upload
export const statusUploadFile = (state: AppState) => state.imageGallery.statusUpload;
export const messageUploadFileFailure = (state: AppState) => state.imageGallery.messageUploadAction;
