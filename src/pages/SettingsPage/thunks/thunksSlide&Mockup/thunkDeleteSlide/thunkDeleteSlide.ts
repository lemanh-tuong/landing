import { actionDeleteSlide } from 'pages/SettingsPage/actions/actionsSlide&MockUp/actionDeleteSlide/actionDeleteSlide';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkDeleteSlide = ThunkAction<typeof actionDeleteSlide>;
export interface ThunkDeleteSlideArg {
  nowIndexSection: number;
  nowIndexSlide: number;
}

const thunkDeleteSlide = ({nowIndexSection, nowIndexSlide}: ThunkDeleteSlideArg): ThunkDeleteSlide => dispatch => {
  dispatch(actionDeleteSlide({nowIndexSection: nowIndexSection, nowIndexSlide:nowIndexSlide}));
};

export default createDispatchAction(thunkDeleteSlide);
