import { actionChangeAvatar } from 'pages/ListPage/actions/actionUser/actionChangeAvatar';
import { createDispatchAction } from 'utils/functions/reduxActions';

export type ThunkChangeAvatar = ThunkAction<typeof actionChangeAvatar>;

export interface ThunkChangeAvatarArg {
  uid: string;
  file: File;
}

const thunkChangeAvatar = ({ uid, file }: ThunkChangeAvatarArg): ThunkChangeAvatar => async (dispatch, getState) => {
  const { firebaseReducer, authReducer } = getState();
  dispatch(actionChangeAvatar.request());
  try {
    const user = firebaseReducer.authentication.currentUser;
    const url = (await firebaseReducer.uploadFile({ path: uid, file: file })) as any;
    await user?.updateProfile({
      ...authReducer.profile,
      photoURL: url,
    });
    dispatch(
      actionChangeAvatar.success({
        url: url,
      }),
    );
  } catch (err) {
    dispatch(actionChangeAvatar.failure(err.message));
  }
};

export default createDispatchAction(thunkChangeAvatar);
