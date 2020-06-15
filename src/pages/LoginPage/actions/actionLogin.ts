import { createAsyncAction } from 'utils/functions/reduxActions';
import { AuthReducer } from '../reducers/authReducer';

const actionLogin = createAsyncAction(['@loging', '@loged', '@failure'])<null, Pick<AuthReducer, 'profile' | 'refreshToken' | 'token'>, string>();

export { actionLogin };

