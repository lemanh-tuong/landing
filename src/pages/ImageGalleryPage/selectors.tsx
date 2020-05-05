//imageGalleryReducers
//Gallery
export const iconGallery = (state: AppState) => state.imageGallery?.iconImg;
export const iconCard2Gallery = (state: AppState) => state.imageGallery?.iconCard2;
export const sliderImgsGallery = (state: AppState) => state.imageGallery?.sliderImgs;
export const imageSectionCol = (state: AppState) => state.imageGallery?.imageSectionCol;
export const backgroundImageGallery = (state: AppState) => state.imageGallery?.backgroundImage;
export const avatarAuthorGallery = (state: AppState) => state.imageGallery?.avatarAuthor;
export const iconImgInColGallery = (state: AppState) => state.imageGallery?.iconImgInCol;
export const sliderSectionImgGallery = (state: AppState) => state.imageGallery?.sliderSectionImg;
//Request
export const statusRequestImage = (state: AppState) => state.imageGallery.statusRequestImageGallery;
export const messageRequestImageFailure = (state: AppState) => state.imageGallery.messageRequestImageGallery;

//Upload
export const statusUploadFile = (state: AppState) => state.imageGallery.statusUpload;
export const messageUploadFileFailure = (state: AppState) => state.imageGallery.messageUploadAction;
