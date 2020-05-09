import { createAction } from 'utils/functions/reduxActions';

export interface ActionChangeInputNavPayload {
  fieldName: string;
  value: string;
  nowIndex: number;
  type: 'navItems' | 'buttons';
}

const actionChangeInputNav = createAction('CHANGE_INPUT_NAV', (payload: ActionChangeInputNavPayload) => ({...payload}));

export { actionChangeInputNav };

