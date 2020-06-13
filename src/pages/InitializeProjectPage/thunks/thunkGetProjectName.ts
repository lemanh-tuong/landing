import { createDispatchAction } from "utils/functions/reduxActions";
import { actionGetProjectName } from "../actions/actionGetProjectName";

type ThunkGetProjectName = ThunkAction<typeof actionGetProjectName>

const thunkGetProjectName = (): ThunkGetProjectName => async (dispatch, getState) => {
  const { firebaseReducer } = getState();
  dispatch(actionGetProjectName.request());
  try {
    const res = await firebaseReducer.readDatabase('/projectName');
    dispatch(actionGetProjectName.success(res));
  } catch (err) {
    dispatch(actionGetProjectName.failure(JSON.stringify(err.message)));
  }
}

export default createDispatchAction(thunkGetProjectName);
