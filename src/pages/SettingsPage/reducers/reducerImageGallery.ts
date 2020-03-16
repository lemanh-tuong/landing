import { ActionTypes, createReducer, handleAction } from 'utils/functions/reduxActions';
import { getImageGallery } from '../actions/actionGetDataImageGallery/actionGetDataImageGallery';

export interface ImageGalleryState {
  status: 'loading' | 'success' | 'failure';
  [key: string]: any;
}

const initialState: ImageGalleryState = {
  status: 'loading',
};

const imageGallery = createReducer<ImageGalleryState, ActionTypes<typeof getImageGallery> & any>(initialState, [
  handleAction('@getImageGalleryRequest', (state) => ({
    ...state,
    status: 'loading'
  })),
  handleAction('@getImageGallerySuccess', (state, action) => {
    const { type, imgs } = action.payload;
    return {
      ...state,
      [type]: imgs ? [...imgs] : [...state[type]]
    }
  }),
  handleAction('@getImageGalleryFailure', (state) => ({
    ...state,
    status: 'failure'
  })),
  handleAction('ADD_IMAGE_TO_GALLERY', (state: any, action: any) => {
    const { type, imgs } = action.payload;
    const newIcon = imgs.map((item: string) => ({
      imgSrc: item
    }))
    return {
      ...state,
      status: 'success',
      [type]: newIcon ? [...newIcon] : [...state[type]]
    }
  })
]);

export { imageGallery };

