import { createAction } from 'utils/functions/reduxActions';

export interface ActionDeleteNavItemPayload {
  indexDelete: number;
}

const actionDeleteNavItem = createAction('DELETE_NAV_ITEM', (payload: ActionDeleteNavItemPayload) => ({...payload}));

export { actionDeleteNavItem };

