import { AppConfig } from 'firebase/myFirebase';
import { createAction } from 'utils/functions/reduxActions';

export interface ActionConfigAppPayload extends AppConfig {}

const actionConfigApp = createAction('CONFIG_APP', (payload: ActionConfigAppPayload) => ({ ...payload }));

export { actionConfigApp };
