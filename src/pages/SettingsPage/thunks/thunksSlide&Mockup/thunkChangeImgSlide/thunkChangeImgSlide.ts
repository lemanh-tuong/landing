import actionChangeImgSlide, { ActionChangeImgSlidePayload } from 'pages/SettingsPage/actions/actionsSlide&MockUp/actionChangeImgSlide/actionChangeImgSlide';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkChangeImgSlide = ThunkAction<typeof actionChangeImgSlide>;

const thunkChangeImgSlide = ({data, nowIndexSlide, nowIndexSection}: ActionChangeImgSlidePayload): ThunkChangeImgSlide => dispatch => {
  dispatch(actionChangeImgSlide({data: data, nowIndexSection: nowIndexSection, nowIndexSlide: nowIndexSlide}));
};

export default createDispatchAction(thunkChangeImgSlide);
