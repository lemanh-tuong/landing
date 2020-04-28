import { actionChangeImgSlide2, ActionChangeImgSlide2Payload } from "pages/SettingsPage/actions/actionSlide2/actionChangeImgSlide2/actionChangeImgSlide2";
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkChangeImgSlide2 = ThunkAction<typeof actionChangeImgSlide2>

const thunkChangeImgSlide2 = ({imgSrc, nowIndexSection, nowIndexSlide}: ActionChangeImgSlide2Payload): ThunkChangeImgSlide2 => dispatch => {
  dispatch(actionChangeImgSlide2({imgSrc: imgSrc, nowIndexSection: nowIndexSection, nowIndexSlide: nowIndexSlide}));
}

export default createDispatchAction(thunkChangeImgSlide2);
