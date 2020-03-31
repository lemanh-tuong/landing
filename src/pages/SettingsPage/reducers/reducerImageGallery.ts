import { ActionTypes, createReducer, handleAction } from 'utils/functions/reduxActions';
import { getImageGallery } from '../../ImageGalleryPage/actions/actionGetDataImageGallery/actionGetDataImageGallery';

export interface ImageGalleryReducers {
  readonly statusRequestImageGallery: 'loading' | 'success' | 'failure';
  readonly messageRequestImageGallery: string;
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
  handleAction('ADD_IMAGE_TO_GALLERY', (state: any, action: any) => {
    const { type, imgs } = action.payload;
    const newIcon = imgs.map((item: string) => ({
      imgSrc: item
    }))
    return {
      ...state,
      [type]: newIcon ? [...newIcon] : [...state[type]]
    }
  })
]);

export { imageGallery };

