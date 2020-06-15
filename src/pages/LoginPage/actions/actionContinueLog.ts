import { createAction } from 'utils/functions/reduxActions';
import { AuthReducer } from '../reducers/authReducer';

export type ActionContinueLogPayload = Pick<AuthReducer, 'profile'| 'refreshToken' | 'token'>;

const actionContinueLog = createAction('CONTINUE_LOG', (payload: ActionContinueLogPayload) => ({...payload}));

export { actionContinueLog };

