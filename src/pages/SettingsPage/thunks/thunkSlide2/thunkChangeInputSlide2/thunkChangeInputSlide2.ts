import { actionChangeInputSlide2, ActionChangeInputSlide2Payload } from 'pages/SettingsPage/actions/actionSlide2/actionChangeInputSlide2/actionChangeInputSlide2';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkChangeInputSlide2 = ThunkAction<typeof actionChangeInputSlide2>;

const thunkChangeInputSlide2 = ({fieldName, value, nowIndexSection, nowIndexSlide}: ActionChangeInputSlide2Payload): ThunkChangeInputSlide2 => dispatch => {
  dispatch(actionChangeInputSlide2({fieldName: fieldName, value: value, nowIndexSection: nowIndexSection, nowIndexSlide: nowIndexSlide}));
};

export default createDispatchAction(thunkChangeInputSlide2);
