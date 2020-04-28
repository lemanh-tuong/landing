import { actionChangeAvatarAuthor, ActionChangeAvatarAuthorPayload } from "pages/ImageGalleryPage/actions/actionChangeAvatarAuthor/actionChangeAvatarAuthor";
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkChangeAvatarAuthor = ThunkAction<typeof actionChangeAvatarAuthor>

export type ThunkChangeAvatarAuthorArg = ActionChangeAvatarAuthorPayload;

const thunkChangeAvatarAuthor = ({avatar, nowIndexRate, nowIndexSection}: ThunkChangeAvatarAuthorArg): ThunkChangeAvatarAuthor => dispatch => {
  dispatch(actionChangeAvatarAuthor({avatar: avatar, nowIndexRate: nowIndexRate, nowIndexSection: nowIndexSection}));
}

export default createDispatchAction(thunkChangeAvatarAuthor);
