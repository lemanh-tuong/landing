import { createAsyncAction } from 'utils/functions/reduxActions';

const actionRegisterNewUser = createAsyncAction(['@registering', '@registered', '@registerFailure'])<null, null, null>();

export { actionRegisterNewUser };
