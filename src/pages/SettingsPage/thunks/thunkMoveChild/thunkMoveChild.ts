import { CardProps } from "components/Card/Card";
import { actionMoveChild } from "pages/SettingsPage/actions/actionMoveChild/actionMoveChild";
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkMoveChild = ThunkAction<typeof actionMoveChild>
export interface ThunkMoveChildArg {
  data: CardProps[];
  nowIndexSection: number
}

const thunkMoveChild = ({data, nowIndexSection}: ThunkMoveChildArg): ThunkMoveChild => dispatch => {
    dispatch(actionMoveChild({newChild: data, nowIndexSection: nowIndexSection}));

}

export default createDispatchAction(thunkMoveChild);
