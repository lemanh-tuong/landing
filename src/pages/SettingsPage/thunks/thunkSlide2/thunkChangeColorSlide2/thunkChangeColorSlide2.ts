import { actionChangeColorSlide2, ActionChangeColorSlide2Payload } from 'pages/SettingsPage/actions/actionSlide2/actionChangeColorSlide2/actionChangeColorSlide2';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkChangeColorSlide2 = ThunkAction<typeof actionChangeColorSlide2>;

const thunkChangeColorSlide2 = ({fieldName, color, nowIndexSection, nowIndexSlide}: ActionChangeColorSlide2Payload): ThunkChangeColorSlide2 => dispatch => {
  dispatch(actionChangeColorSlide2({fieldName: fieldName, color: color, nowIndexSection: nowIndexSection, nowIndexSlide: nowIndexSlide}));
};

export default createDispatchAction(thunkChangeColorSlide2);
