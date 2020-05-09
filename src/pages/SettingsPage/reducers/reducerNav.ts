import logoImg from 'assets/img/logo.png';
import { NavProps } from 'components/Nav/Nav';
import { ActionTypes, createReducer, handleAction } from 'utils/functions/reduxActions';
import { ActionAddNavItemPayload } from '../actions/actionsNav/actionAddNavItem/actionAddNavItem';
import { ActionChangeInputNavPayload } from '../actions/actionsNav/actionChangeInputNav/actionChangeInputNav';
import { ActionDeleteNavItemPayload } from '../actions/actionsNav/actionDeleteNavItem/actionDeleteNavItem';
import { actionGetDataNav } from '../actions/actionsNav/actionGetDataNav/actionGetDataNav';
import { ActionMoveNavItemPayload } from '../actions/actionsNav/actionMoveNavItem/actionMoveNavItem';

export interface NavReducer {
  readonly statusRequestNav: 'loading' | 'success' | 'failure';
  readonly logo: NavProps['logo'];
  readonly navItems: NavProps['navItems'];
  readonly buttons: NavProps['buttons'];
  readonly messageRequestNav: string;
}

const initialState: NavReducer = {
  logo: {
    imgSrc: logoImg
  },
  navItems: [],
  buttons: [],
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
    buttons: action.payload.buttons ? [...action.payload.buttons] : [...initialState.buttons]
  })),
  handleAction('@getDataNavFailure', (state, action) => ({
    ...state,
    statusRequestNav: 'failure',
    messageRequestNav: action.payload
  })),
  handleAction('CHANGE_INPUT_NAV', (state, action) => {
    const { fieldName, nowIndex, value, type } = action.payload as ActionChangeInputNavPayload;
    const nowField = state[type][nowIndex];
    const newField = {
      ...nowField,
      [fieldName]: value,
    };
    const newItems = [...state[type].slice(0, nowIndex), {...newField}, ...state[type].slice(nowIndex + 1, state[type].length)];
    return {
      ...state,
      [type]: [...newItems]
    };
  }),
  handleAction('CHANGE_COLOR_NAV', (state) => {
    // const { fieldName, nowIndex, color, type} = action.payload;
    // const nowData = state[type][nowIndex] as any;
    // const newData = {
    //   ...nowData,
    //   [fieldName]: color,
    // };
    // const newNavItems = [...state.navItems.slice(0, nowIndex), {...newData}, ...state.navItems.slice(nowIndex + 1, state.navItems.length)];
    // return {
    //   ...state,
    //   navItems: [...newNavItems]
    // };
    return {...state};
  }),
  handleAction('CHANGE_LOGO_IMG', (state, action) => {
    return {
      ...state,
      logo: {
        imgSrc: action.payload.imgSrc
      }
    };
  }),
  handleAction('MOVE_NAV_ITEM', (state: any, action) => {
    const { navData, type} = action.payload as ActionMoveNavItemPayload;
    return {
      ...state,
      [type]: [...navData]
    };
  }),
  handleAction('ADD_NAV_ITEM', (state: any, action) => {
    const { newItem, indexInsert, type } = action.payload as ActionAddNavItemPayload;
    const nowData = state[type];
    const newData = [...nowData.slice(0, indexInsert + 1), {...newItem}, ...nowData.slice(indexInsert + 1, nowData.length)];
    return {
      ...state,
      [type]: [...newData]
    };
  }),
  handleAction('DELETE_NAV_ITEM', (state, action) => {
    const { indexDelete, type } = action.payload as ActionDeleteNavItemPayload;
    const nowData = state[type];
    const newData = [...nowData.slice(0, indexDelete), ...nowData.slice(indexDelete + 1, nowData.length)];
    return {
      ...state,
      [type]: [...newData]
    };
  })
]);

export { navReducer };

