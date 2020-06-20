import { AppConfig } from 'firebase/myFirebase';
import { createReducer, handleAction } from 'utils/functions/reduxActions';

export interface ConfigAppReducer extends AppConfig {}

const initialState: ConfigAppReducer = {
  firebaseConfig: {
    apiKey: '',
    appId: '',
    authDomain: '',
    databaseURL: '',
    measurementId: '',
    messagingSenderId: '',
    projectId: '',
    storageBucket: '',
  },
};

const configAppReducer = createReducer<ConfigAppReducer, any>(initialState, [
  handleAction('CONFIG_APP', (state, action) => {
    return {
      ...state,
      ...action.payload,
    };
  }),
]);

export default configAppReducer;
