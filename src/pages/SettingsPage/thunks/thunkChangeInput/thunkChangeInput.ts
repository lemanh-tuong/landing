import { changeInput } from 'pages/SettingsPage/actions/actionChangeInput/actionChangeInput';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkChangeInput = ThunkAction<typeof changeInput>;
export interface ThunkChangeInputArg {
  fieldName: string;
  value: string;
  nowIndexSection: number
}
const thunkChangeInput = ({fieldName, value, nowIndexSection}: ThunkChangeInputArg): ThunkChangeInput => dispatch => {
  dispatch(changeInput({fieldName: fieldName, value: value, nowIndexSection: nowIndexSection}))
};

export default createDispatchAction(thunkChangeInput);
