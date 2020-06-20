import { createAsyncAction } from 'utils/functions/reduxActions';

export interface ActionChangeAvatarPayload {
  url: string;
}

const actionChangeAvatar = createAsyncAction(['@changingAvatar', '@changedAvatar', '@changeAvatarFailure'])<
  null,
  ActionChangeAvatarPayload,
  string
>();

export { actionChangeAvatar };
