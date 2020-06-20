import { MockUpOption } from 'components/MockUp/MockUp';
import { createAction } from 'utils/functions/reduxActions';

export interface ActionChangeTypeMockupPayload {
  typeMockUp: Pick<MockUpOption, 'typeMockUp'>;
  nowIndexSection: number;
}

const actionChangeTypeMockup = createAction('CHANGE_TYPE_MOCKUP', (payload: ActionChangeTypeMockupPayload) => ({ ...payload }));

export { actionChangeTypeMockup };
