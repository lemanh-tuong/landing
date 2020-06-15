import { ActionTypes, createReducer, handleAction } from 'utils/functions/reduxActions';
import { actionLogin } from '../actions/actionLogin';

export interface AuthReducer {
  readonly statusLogin: 'loging' | 'loged' | 'failure';
  readonly statusChangeAvatar: '' | 'changingAvatar' | 'changedAvatar' | 'changeAvatarFailure';
  readonly token: string;
  readonly refreshToken: string;
  readonly message: string;
  readonly profile: firebase.UserInfo
}

const initialState: AuthReducer = {
  statusLogin: 'loging',
  statusChangeAvatar: '',
  token: '',
  refreshToken: '',
  message: '',
  profile: {
    displayName: '',
    email: '',
    phoneNumber: '',
    photoURL: '',
    providerId: '',
    uid: ''
  }
};

const authReducer = createReducer<AuthReducer, ActionTypes<typeof actionLogin> & any>(initialState, [
  handleAction('@loging', state => {
    return {
      ...state,
      statusLogin: 'loging'
    };
  }),
  handleAction('@loged', (state, action) => {
    const { refreshToken, token, profile } = action.payload;
    return {
      ...state,
      statusLogin: 'loged',
      token: token,
      refreshToken: refreshToken,
      profile: profile
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
      profile: action.payload.profile,
      refreshToken: action.payload.refreshToken,
    };
  }),
  handleAction('@signedOut', (state, action) => {
    return {
      ...initialState
    }
  }),
  handleAction('@changingAvatar', (state, action) => ({
    ...state,
    statusChangeAvatar: 'changingAvatar',
  })),
  handleAction('@changedAvatar', (state, action) => ({
    ...state,
    statusChangeAvatar: 'changedAvatar',
    profile: {
      ...state.profile,
      photoURL: action.payload.url
    }
  })),
  handleAction('@changeAvatarFailure', (state, action) => ({
    ...state,
    statusChangeAvatar: 'changeAvatarFailure',
    message: action.payload
  }))

]);

export default authReducer;
