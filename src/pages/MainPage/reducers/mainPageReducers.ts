import { Option } from 'pages/SettingsPage/SettingsPage';
import { ActionTypes, createReducer, handleAction } from 'utils/functions/reduxActions';
import { getDataSections } from '../actions/actionGetSections';

export interface MainPageReducer {
  readonly sections: Option[];
  readonly pageName: string;
  readonly pathName: string;
  readonly id: string;
  readonly statusRequestSections: 'loading' | 'success' | 'failure';
  readonly messageRequestaSections: string;
}

const initialState: MainPageReducer = {
  sections: [],
  pageName: '',
  pathName: '',
  id: '',
  statusRequestSections: 'loading',
  messageRequestaSections: '',
};

const mainPageReducers = createReducer<MainPageReducer, ActionTypes<typeof getDataSections>>(initialState, [
  handleAction('@getDataSectionsRequest', state => {
    return {
      ...state,
      statusRequestSections: 'loading',
    };
  }),
  handleAction('@getDataSectionsSuccess', (state: any, action) => {
    return {
      ...state,
      statusRequestSections: 'success',
      sections: action.payload.elements ? [...action.payload.elements] : [],
      pathName: action.payload.pathName ? action.payload.pathName : '',
      id: action.payload.id ? action.payload.id : '',
      pageName: action.payload.pageName ? action.payload.pageName : ''
    };
  }),
  handleAction('@getDataSectionsFailure', (state, action) => {
    return {
      ...state,
      messageRequestaSections: action.payload,
      statusRequestSections: 'failure'
    };
  })
]);

export default mainPageReducers;
