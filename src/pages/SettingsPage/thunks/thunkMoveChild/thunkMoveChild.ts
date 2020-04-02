import { actionMoveChild } from "pages/SettingsPage/actions/actionMoveChild/actionMoveChild"
import { createDispatchAction } from "utils/functions/reduxActions";
import { CardProps } from "components/Card/Card";

type ThunkMoveChild = ThunkAction<typeof actionMoveChild>

const thunkMoveChild = (data: CardProps[], nowIndexSection: number): ThunkMoveChild => dispatch => {
    dispatch(actionMoveChild({newChild: data, nowIndexSection: nowIndexSection}));

}

export default createDispatchAction(thunkMoveChild);
