import { actionMoveSlide2, ActionMoveSlide2Payload } from "pages/SettingsPage/actions/actionSlide2/actionMoveSlide2/actionMoveSlide2";
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkMoveSlide2 = ThunkAction<typeof actionMoveSlide2>

const thunkMoveSlide2 = ({data, nowIndexSection}: ActionMoveSlide2Payload): ThunkMoveSlide2 => dispatch => {
  dispatch(actionMoveSlide2({data: data, nowIndexSection: nowIndexSection}));
}

export default createDispatchAction(thunkMoveSlide2)
