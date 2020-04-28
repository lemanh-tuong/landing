import { CardProps } from "components/Card/Card";
import { actionMoveCard2 } from "pages/SettingsPage/actions/actionCard2/actionMoveCard2/actionMoveCard2";
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkMoveCard2 = ThunkAction<typeof actionMoveCard2>
export interface ThunkMoveCard2Arg {
  data: CardProps[];
  nowIndexSection: number
}

const thunkMoveCard2 = ({data, nowIndexSection}: ThunkMoveCard2Arg): ThunkMoveCard2 => dispatch => {
    dispatch(actionMoveCard2({newChild: data, nowIndexSection: nowIndexSection}));

}

export default createDispatchAction(thunkMoveCard2);
