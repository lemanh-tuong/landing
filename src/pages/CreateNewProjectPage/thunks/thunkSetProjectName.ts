import { createDispatchAction } from 'utils/functions/reduxActions';
import { actionSetProjectName } from '../actions/actionSetProjectName';

type ThunkSetProjectName = ThunkAction<typeof actionSetProjectName>;

const thunkSetProjectName = (projectName: string): ThunkSetProjectName => async (dispatch, getState) => {
  const { firebaseReducer } = getState();
  dispatch(actionSetProjectName.request());
  if (Object.keys(firebaseReducer.database).length > 0) {
    try {
      await firebaseReducer.writeDatabase({ ref: '/projectName', value: projectName });
      dispatch(actionSetProjectName.success(projectName));
    } catch (err) {
      throw Error(err);
    }
  } else {
    dispatch(actionSetProjectName.failure('Firebase not exist'));
  }
  // try {
  //   await firebaseReducer.writeDatabase({ref: '/projectName', value: projectName})
  //   dispatch(actionSetProjectName());
  //   dispatch(actionGetProjectName.success(projectName));
  // } catch (err) {
  //   dispatch(actionGetProjectName.failure('ERROR'))
  // }
};

export default createDispatchAction(thunkSetProjectName);
