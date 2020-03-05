import { ActionTypes, createReducer, handleAction } from 'utils/functions/reduxActions';
import { getData } from '../actions/actionGetData';
import { PageProps } from '../SettingsPage';

const initialState: PageProps & { message: string; status: 'loading' | 'success' | 'failure'} = {
  pageName: '',
  elements: [],
  slider: false,
  status: 'success',
  message: ''
};

const settingsReducers = createReducer<PageProps, ActionTypes<typeof getData>>(initialState, [
  handleAction('@getDataRequest', (state) => ({
    ...state,
    status: 'loading'
  })),
  handleAction('@getDataSuccess', (state, action) => ({
    ...state,
    elements: [...action.payload.elements],
    pageName: action.payload.pageName,
    slider: action.payload.slider,
    status: 'success'
  })),
  handleAction('@getDataFailure', (state) => ({
    ...state,
    status: 'failure',
    message: 'Error'
  }))
]);

export { settingsReducers };

