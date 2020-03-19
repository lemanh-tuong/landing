import { actionMoveChild } from "pages/SettingsPage/actions/actionMoveChild/actionMoveChild"
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkMoveChild = ThunkAction<typeof actionMoveChild>

const thunkMoveChild = (data: any[], nowIndexSection: number): ThunkMoveChild => (dispatch) => {
    dispatch(actionMoveChild({newChild: data, nowIndexSection: nowIndexSection}));

}

export default createDispatchAction(thunkMoveChild);
