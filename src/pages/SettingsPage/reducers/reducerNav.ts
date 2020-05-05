import logoImg from 'assets/img/logo.png';
import { NavProps } from 'components/Nav/Nav';
import { ActionTypes, createReducer, handleAction } from 'utils/functions/reduxActions';
import { ActionChangeInputNavPayload } from '../actions/actionsNav/actionChangeInputNav/actionChangeInputNav';
import { actionGetDataNav } from '../actions/actionsNav/actionGetDataNav/actionGetDataNav';

export interface NavReducer {
  readonly statusRequestNav: 'loading' | 'success' | 'failure';
  readonly logo: NavProps['logo'];
  readonly navItems: NavProps['navItems'];
  readonly messageRequestNav: string;
}

const initialState: NavReducer = {
  logo: {
    imgSrc: logoImg
  },
  navItems: [],
  messageRequestNav: '',
  statusRequestNav: 'loading'
};

const navReducer = createReducer<NavReducer, ActionTypes<typeof actionGetDataNav> & any>(initialState, [
  handleAction('@getDataNavRequest', state => ({
    ...state,
    statusRequestNav: 'loading'
  })),
  handleAction('@getDataNavSuccess', (state, action) => ({
    ...state,
    statusRequestNav: 'success',
    logo: {...action.payload.logo} || {...initialState.logo},
    navItems: action.payload.navItems ? [...action.payload.navItems] : [...initialState.navItems],
  })),
  handleAction('@getDataNavFailure', (state, action) => ({
    ...state,
    statusRequestNav: 'failure',
    messageRequestNav: action.payload
  })),
  handleAction('CHANGE_INPUT_NAV', (state, action) => {
    const { fieldName, nowIndex, value} = action.payload as ActionChangeInputNavPayload;
    const nowNav = state.navItems[nowIndex];
    const newNav = {
      ...nowNav,
      [fieldName]: value,
    };
    const newNavItems = [...state.navItems.slice(0, nowIndex), {...newNav}, ...state.navItems.slice(nowIndex + 1, state.navItems.length)];
    return {
      ...state,
      navItems: [...newNavItems]
    };
  }),
  handleAction('CHANGE_COLOR_NAV', (state, action) => {
    console.log('AAAA');
    const { fieldName, nowIndex, color} = action.payload;
    const nowNav = state.navItems[nowIndex];
    const newNav = {
      ...nowNav,
      [fieldName]: color,
    };
    const newNavItems = [...state.navItems.slice(0, nowIndex), {...newNav}, ...state.navItems.slice(nowIndex + 1, state.navItems.length)];
    return {
      ...state,
      navItems: [...newNavItems]
    };
  }),
]);

export { navReducer };

