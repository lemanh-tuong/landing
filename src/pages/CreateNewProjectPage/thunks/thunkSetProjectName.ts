import { createDispatchAction } from "utils/functions/reduxActions";
import { actionSetProjectName } from "../actions/actionSetProjectName";

type ThunkSetProjectName = ThunkAction<typeof actionSetProjectName>;

const thunkSetProjectName = (projectName: string): ThunkSetProjectName => async (dispatch, getState) => {
  const { firebaseReducer } = getState();
  await firebaseReducer.writeDatabase({ref: '/projectName', value: projectName});
  dispatch(actionSetProjectName());
  // try {
  //   await firebaseReducer.writeDatabase({ref: '/projectName', value: projectName})
  //   dispatch(actionSetProjectName());
  //   dispatch(actionGetProjectName.success(projectName));
  // } catch (err) {
  //   dispatch(actionGetProjectName.failure('ERROR'))
  // }
}

export default createDispatchAction(thunkSetProjectName);
