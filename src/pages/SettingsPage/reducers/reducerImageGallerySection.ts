import { getImageGallery } from 'pages/SettingsPage/actions/actionGetDataImage/actionGetDataImage';
import { ActionTypes, createReducer, handleAction } from 'utils/functions/reduxActions';

export interface ImageGallerySectionState {
  status: 'loading' | 'success' | 'failure';
  data: string[];
}

const initialState: ImageGallerySectionState = {
  status: 'loading',
  data: []
};

const imageGallerySection = createReducer<ImageGallerySectionState, ActionTypes<typeof getImageGallery> & any>(initialState, [
  handleAction('@getImageGalleryRequest', (state) => ({
    ...state,
    status: 'loading'
  })),
  handleAction('@getImageGallerySuccess', (state, action) => ({
    ...state,
    status: 'success',
    data: action.payload
  })),
  handleAction('@getImageGalleryFailure', (state) => ({
    ...state,
    status: 'failure'
  })),
  handleAction('UPLOAD_FILE', (state, action) => ({
    ...state,
    data: [...state.data].concat(action.payload)
  }))
]);

export { imageGallerySection };

