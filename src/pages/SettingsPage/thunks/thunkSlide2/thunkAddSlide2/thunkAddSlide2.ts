import { actionAddSlide2, ActionAddSlide2Payload } from 'pages/SettingsPage/actions/actionSlide2/actionAddSlide2/actionAddSlide2';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkAddSlide2 = ThunkAction<typeof actionAddSlide2>;

const thunkAddSlide2 = ({ nowIndexSlide, nowIndexSection, slideProperty }: ActionAddSlide2Payload): ThunkAddSlide2 => dispatch => {
  dispatch(actionAddSlide2({ nowIndexSlide: nowIndexSlide, nowIndexSection: nowIndexSection, slideProperty: slideProperty }));
};

export default createDispatchAction(thunkAddSlide2);
