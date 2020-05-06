import { NavItemType } from 'components/Nav/Nav';
import { createAction } from 'utils/functions/reduxActions';

export interface ActionAddNavItemPayload {
  newItem: NavItemType;
  indexInsert: number;
}

const actionAddNavItem = createAction('ADD_NAV_ITEM', (payload: ActionAddNavItemPayload) => ({...payload}));

export { actionAddNavItem };

