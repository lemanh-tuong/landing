import { createAction } from 'utils/functions/reduxActions';

export interface ActionChangeAvatarAuthorPayload {
  nowIndexSection: number;
  nowIndexRate: number;
  avatar: string;
}

const actionChangeAvatarAuthor = createAction('CHANGE_AVATAR_AUTHOR', (payload: ActionChangeAvatarAuthorPayload) => ({...payload}));

export { actionChangeAvatarAuthor };

