import { NavProps } from 'components/Nav/Nav';
import { createAction } from 'utils/functions/reduxActions';

export interface ActionMoveNavItemPayload {
  navData: NavProps['navItems'];
  type: 'navItems' | 'buttons';
}

const actionMoveNavItem = createAction('MOVE_NAV_ITEM', (payload: ActionMoveNavItemPayload) => ({ ...payload }));

export { actionMoveNavItem };
