import { changeInput } from 'pages/SettingsPage/actions/actionChangeInput/actionChangeInput';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkChangeInput = ThunkAction<typeof changeInput>;

const thunkChangeInput = (fieldName: string, value: string, nowIndexSection: number): ThunkChangeInput => dispatch => {
  dispatch(changeInput({fieldName: fieldName, value: value, nowIndexSection: nowIndexSection}))
};

export default createDispatchAction(thunkChangeInput);
