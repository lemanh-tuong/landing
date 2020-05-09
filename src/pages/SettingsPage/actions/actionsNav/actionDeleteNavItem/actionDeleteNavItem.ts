import { createAction } from 'utils/functions/reduxActions';

export interface ActionDeleteNavItemPayload {
  indexDelete: number;
  type: 'navItems' | 'buttons';
}

const actionDeleteNavItem = createAction('DELETE_NAV_ITEM', (payload: ActionDeleteNavItemPayload) => ({...payload}));

export { actionDeleteNavItem };

