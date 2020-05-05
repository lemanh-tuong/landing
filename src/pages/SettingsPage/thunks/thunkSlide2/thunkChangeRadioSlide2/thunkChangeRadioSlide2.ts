import { actionChangeRadioSlide2, ActionChangeRadioSlide2Payload } from 'pages/SettingsPage/actions/actionSlide2/actionChangeRadioSlide2/actionChangeRadioSlide2';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkChangeRadioSlide2 = ThunkAction<typeof actionChangeRadioSlide2>;

const thunkChangeRadioSlide2 = ({fieldName, value, nowIndexSection, nowIndexSlide}: ActionChangeRadioSlide2Payload): ThunkChangeRadioSlide2 => dispatch => {
  dispatch(actionChangeRadioSlide2({fieldName: fieldName, value: value, nowIndexSection: nowIndexSection, nowIndexSlide: nowIndexSlide}));
};

export default createDispatchAction(thunkChangeRadioSlide2);
