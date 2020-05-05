import { createAction } from 'utils/functions/reduxActions';

export interface ActionDeleteRatePayload {
  nowIndexSection: number;
  nowIndexRate: number;
}

const actionDeleteRate = createAction('DELETE_RATE', (payload: ActionDeleteRatePayload) => ({...payload}));

export { actionDeleteRate };

