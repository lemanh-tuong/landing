import { ActionTypes, createReducer, handleAction } from 'utils/functions/reduxActions';
import { getImageGallery } from '../../ImageGalleryPage/actions/actionGetDataImageGallery/actionGetDataImageGallery';

export interface ImageGalleryReducers {
  readonly statusRequestImageGallery: 'loading' | 'success' | 'failure';
  readonly messageRequestImageGallery: string;
  readonly statusUpload?: 'uploading' | 'uploaded' | 'uploadFailure';
  readonly messageUploadAction?: string;
  readonly [key: string]: any;
}

const initialState: ImageGalleryReducers = {
  statusRequestImageGallery: 'loading',
  messageRequestImageGallery: ''
};

const imageGallery = createReducer<ImageGalleryReducers, ActionTypes<typeof getImageGallery> & any>(initialState, [
  handleAction('@getImageGalleryRequest', (state) => ({
    ...state,
    statusRequestImageGallery: 'loading'
  })),
  handleAction('@getImageGallerySuccess', (state, action) => {
    const { type, imgs } = action.payload;
    return {
      ...state,
      statusRequestImageGallery: 'success',
      [type]: imgs ? [...imgs] : [],
    }
  }),
  handleAction('@getImageGalleryFailure', (state) => ({
    ...state,
    statusRequestImageGallery: 'failure'
  })),
  handleAction('@uploadingFile', (state, action) => {
    return {
      statusUpload: 'uploading',
      ...state,
    }
  }),
  handleAction('@uploadedFile', (state, action) => {
    const { type, imgs } = action.payload;
    const newIcon = imgs.map((item: string) => ({
      imgSrc: item
    }))
    return {
      ...state,
      statusUpload: 'uploaded',
      [type]: newIcon ? [...newIcon] : [...state[type]]
    }
  }),
  handleAction('@uploadFileFalure', (state, action) => {
    const { message } = action.payload;
    return {
      ...state,
      statusUpload: 'uploadFailure',
      messageUploadAction: message
    }
  })
]);

export { imageGallery };

