import { actionMoveSlide, ActionMoveSlidePayload } from 'pages/SettingsPage/actions/actionsSlide&MockUp/actionMoveSlide/actionMoveSlide';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkMoveSlide = ThunkAction<typeof actionMoveSlide>;

const thunkMoveSlide = ({ nowIndexSection, sliderImgs }: ActionMoveSlidePayload): ThunkMoveSlide => dispatch => {
  dispatch(actionMoveSlide({ sliderImgs: sliderImgs, nowIndexSection: nowIndexSection }));
};

export default createDispatchAction(thunkMoveSlide);
