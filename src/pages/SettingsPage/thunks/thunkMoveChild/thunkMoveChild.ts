import { actionMoveChild } from "pages/SettingsPage/actions/actionMoveChild/actionMoveChild"

type ThunkMoveChild = ThunkAction<typeof actionMoveChild>

const thunkMoveChild = (data: any[], nowIndex: number): ThunkMoveChild => (dispatch) => {
    dispatch(actionMoveChild({newChild: data, nowIndex: nowIndex}));

}

export default thunkMoveChild