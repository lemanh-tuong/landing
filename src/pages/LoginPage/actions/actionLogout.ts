import { createAsyncAction } from 'utils/functions/reduxActions';

const actionLogout = createAsyncAction(['@signingOut', '@signedOut', '@signOutFailure'])<null, string, string>();

export { actionLogout };
