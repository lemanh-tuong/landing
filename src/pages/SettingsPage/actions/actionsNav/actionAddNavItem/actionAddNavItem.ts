import { ButtonNav, NavItemType } from 'components/Nav/Nav';
import { createAction } from 'utils/functions/reduxActions';

export interface ActionAddNavItemPayload {
  type: 'buttons' | 'navItems';
  newItem: NavItemType | ButtonNav;
  indexInsert: number;
}

const actionAddNavItem = createAction('ADD_NAV_ITEM', (payload: ActionAddNavItemPayload) => ({ ...payload }));

export { actionAddNavItem };
