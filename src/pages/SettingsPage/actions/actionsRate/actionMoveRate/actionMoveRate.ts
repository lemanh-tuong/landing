import { RateProps } from 'components/Rate/Rate';
import { createAction } from 'utils/functions/reduxActions';

export interface ActionMoveRatePayload {
  nowIndexSection: number;
  data: RateProps[];
}

const actionMoveRate = createAction('MOVE_RATE', (payload: ActionMoveRatePayload) => ({ ...payload }));

export { actionMoveRate };
