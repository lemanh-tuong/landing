import { createAction } from 'utils/functions/reduxActions';

export interface ActionChangeSelectPayload {
  nowIndexSection: number;
  fieldName: string;
  value: string;
}

const actionChangeSelect = createAction('CHANGE_SELECT', (payload: ActionChangeSelectPayload) => ({ ...payload }));

export { actionChangeSelect };
