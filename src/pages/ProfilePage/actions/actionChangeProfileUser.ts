import { AuthReducer } from "pages/LoginPage/reducers/authReducer";
import { createAsyncAction } from "utils/functions/reduxActions";

export type ActionChangeProfileUserPayload =  AuthReducer['profile']

const actionChangeProfileUser = createAsyncAction(['@changingProfileUser', '@changedProfileUser', '@changeProfileUserFailure'])<null, ActionChangeProfileUserPayload, string>();

export { actionChangeProfileUser };

