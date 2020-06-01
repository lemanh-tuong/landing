import { ActionTypes, createReducer, handleAction } from 'utils/functions/reduxActions';
import { actionLogin } from '../actions/actionLogin';

export interface AuthReducer {
  readonly statusLogin: 'loging' | 'loged' | 'failure';
  readonly token: string;
  readonly refreshToken: string;
  readonly message: string;
}

const initialState: AuthReducer = {
  statusLogin: 'loging',
  token: '',
  refreshToken: '',
  message: '',
};

const authReducer = createReducer<AuthReducer, ActionTypes<typeof actionLogin> & any>(initialState, [
  handleAction('@loging', state => {
    return {
      ...state,
      statusLogin: 'loging'
    };
  }),
  handleAction('@loged', (state, action) => {
    const { refreshToken, token} = action.payload;
    return {
      ...state,
      statusLogin: 'loged',
      token: token,
      refreshToken: refreshToken
    };
  }),
  handleAction('@failure', (state, action) => {
    return {
      ...state,
      statusLogin: 'failure',
      token: '',
      refreshToken: '',
      message: action.payload
    };
  }),
  handleAction('CONTINUE_LOG', (state, action) => {
    return {
      ...state,
      statusLogin: 'loged',
      token: action.payload.token,
    };
  }),
]);

export default authReducer;
