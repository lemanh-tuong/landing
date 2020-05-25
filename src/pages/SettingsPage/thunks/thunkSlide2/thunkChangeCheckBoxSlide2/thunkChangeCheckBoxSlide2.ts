import { actionChangeCheckBoxSlide2, ActionChangeCheckBoxSlide2Payload } from 'pages/SettingsPage/actions/actionSlide2/actionChangeCheckBoxSlide2/actionChangeCheckBoxSlide2';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkChangeCheckBoxSlide2 = ThunkAction<typeof actionChangeCheckBoxSlide2>;

const thunkChangeCheckBoxSlide2 = ({fieldName, checked, nowIndexSection, nowIndexSlide}: ActionChangeCheckBoxSlide2Payload): ThunkChangeCheckBoxSlide2 => dispatch => {
  dispatch(actionChangeCheckBoxSlide2({fieldName: fieldName, checked: checked, nowIndexSection: nowIndexSection, nowIndexSlide: nowIndexSlide}));
};

export default createDispatchAction(thunkChangeCheckBoxSlide2);
