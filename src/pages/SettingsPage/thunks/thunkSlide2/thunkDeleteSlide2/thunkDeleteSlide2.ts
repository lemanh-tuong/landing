import { actionDeleteSlide2, ActionDeleteSlide2Payload } from "pages/SettingsPage/actions/actionSlide2/actionDeleteSlide2/actionDeleteSlide2";
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkDeleteSlide2 = ThunkAction<typeof actionDeleteSlide2>;

const thunkDeleteSlide2 = ({nowIndexSection, nowIndexSlide}: ActionDeleteSlide2Payload): ThunkDeleteSlide2 => dispatch => {
  dispatch(actionDeleteSlide2({nowIndexSection: nowIndexSection, nowIndexSlide:nowIndexSlide}))
}

export default createDispatchAction(thunkDeleteSlide2);
