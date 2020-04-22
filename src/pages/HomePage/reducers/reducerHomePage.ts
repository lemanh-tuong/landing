import { Option } from 'pages/SettingsPage/SettingsPage';
import { ActionTypes, createReducer, handleAction } from 'utils/functions/reduxActions';
import { getDataSections } from '../actions/actionGetSections';

export interface HomePageReducer {
  readonly sections: Option[];
  readonly statusRequestaSections: 'loading' | 'success' | 'failure';
  readonly messageRequestaSections: string
}

const initialState: HomePageReducer = {
  sections: [],
  statusRequestaSections: 'loading',
  messageRequestaSections: '',
}

const reducerHomePage = createReducer<HomePageReducer, ActionTypes<typeof getDataSections>>(initialState, [
  handleAction('@getDataSectionsRequest', state => {
    return {
      ...state,
      statusRequestaSections: 'loading',
    }
  }),
  handleAction('@getDataSectionsSuccess', (state, action) => {
    const {elements} = action.payload;
    return {
      ...state,
      sections: [...elements] || [],
      statusRequestaSections: 'success',
    }
  }),
  handleAction('@getDataSectionsFailure', (state, action) => {
    return {
      ...state,
      messageRequestaSections: action.payload,
      statusRequestaSections: 'failure'
    }
  })
])

export default reducerHomePage;
