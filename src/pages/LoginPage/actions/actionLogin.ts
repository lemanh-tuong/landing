import { createAsyncAction } from 'utils/functions/reduxActions';

const actionLogin = createAsyncAction(['@loging', '@loged', '@failure'])<null, {token: string; refreshToken: string}, string>();

export { actionLogin };

