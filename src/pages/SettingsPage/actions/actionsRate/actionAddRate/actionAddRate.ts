import { RateProps } from 'components/Rate/Rate';
import { createAction } from 'utils/functions/reduxActions';

export interface ActionAddRatePayload {
  nowIndexSection: number;
  nowIndexRate: number;
  rateProperty: RateProps;
}

const actionAddRate = createAction('ADD_RATE', (payload: ActionAddRatePayload) => ({...payload}));

export { actionAddRate };

