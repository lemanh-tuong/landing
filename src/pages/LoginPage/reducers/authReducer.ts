import { actionChangeProfileUser } from 'pages/ProfilePage/actions/actionChangeProfileUser';
import { ActionTypes, createReducer, handleAction } from 'utils/functions/reduxActions';

export interface AuthReducer {
  readonly statusLogin: 'loging' | 'loged' | 'failure';
  readonly statusChangeAvatar: '' | 'changingAvatar' | 'changedAvatar' | 'changeAvatarFailure';
  readonly statusChangeUserProfile: '' | 'changingUserProfile' | 'changedUserProfile' | 'changeUserProfileFailure';
  readonly token: string;
  readonly refreshToken: string;
  readonly message: string;
  readonly profile: firebase.UserInfo;
}

const initialState: AuthReducer = {
  statusLogin: 'loging',
  statusChangeAvatar: '',
  statusChangeUserProfile: '',
  token: '',
  refreshToken: '',
  message: '',
  profile: {
    displayName: '',
    email: '',
    phoneNumber: '',
    photoURL: '',
    providerId: '',
    uid: '',
  },
};

const authReducer = createReducer<AuthReducer, ActionTypes<typeof actionChangeProfileUser> & any>(initialState, [
  handleAction('@loging', state => {
    return {
      ...state,
      statusLogin: 'loging',
    };
  }),
  handleAction('@loged', (state, action) => {
    const { refreshToken, token, profile } = action.payload;
    return {
      ...state,
      statusLogin: 'loged',
      token: token,
      refreshToken: refreshToken,
      profile: profile,
    };
  }),
  handleAction('@failure', (state, action) => {
    return {
      ...state,
      statusLogin: 'failure',
      token: '',
      refreshToken: '',
      message: action.payload,
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
      ...initialState,
    };
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
      photoURL: action.payload.url,
    },
  })),
  handleAction('@changeAvatarFailure', (state, action) => ({
    ...state,
    statusChangeAvatar: 'changeAvatarFailure',
    message: action.payload,
  })),
  handleAction('@changingProfileUser', state => ({
    ...state,
    statusChangeUserProfile: 'changingUserProfile',
  })),
  handleAction('@changedProfileUser', (state, action) => ({
    ...state,
    profile: action.payload,
    statusChangeUserProfile: 'changedUserProfile',
  })),
  handleAction('@changeProfileUserFailure', (state, action) => ({
    ...state,
    statusChangeUserProfile: 'changeUserProfileFailure',
  })),
]);

export default authReducer;
