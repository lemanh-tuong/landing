import logoImg from 'assets/img/logo.png';
import { NavProps } from "components/Nav/Nav";
import { ActionTypes, createReducer, handleAction } from "utils/functions/reduxActions";
import { actionGetDataNav } from "../actions/actionsNav/actionGetDataNav/actionGetDataNav";

export type NavReducer = {
  readonly statusRequestNav: 'loading' | 'success' | 'failure';
  readonly logo: NavProps['logo'];
  readonly navItems: NavProps['navItems'];
  readonly message: string;
}

const initialState: NavReducer = {
  logo: {
    imgSrc: logoImg
  },
  navItems: [
    {
      href: '/about',
      text: 'About Application'
    },
    {
      href: '/',
      text: 'Support Forum'
    },
    {
      href: '/',
      text: 'Online Docs'
    },
    {
      href: '/',
      text: 'Join Community'
    },
    {
      href: '/',
      text: "Purchase Now",
      type: 'primary',
    },
    {
      href: '/',
      text: 'Try Demo',
      type: 'white'
    }
  ],
  message: '',
  statusRequestNav: 'loading'
}

const navReducer = createReducer<NavReducer,ActionTypes<typeof actionGetDataNav>>(initialState, [
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
    message: action.payload
  })),
]);

export { navReducer };

