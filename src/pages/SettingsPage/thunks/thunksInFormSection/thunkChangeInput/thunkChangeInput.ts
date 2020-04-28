import { actionChangeInput } from 'pages/SettingsPage/actions/actionsInFormSection/actionChangeInput/actionChangeInput';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkChangeInput = ThunkAction<typeof actionChangeInput>;
export interface ThunkChangeInputArg {
  fieldName: string;
  value: string | number;
  nowIndexSection: number
}
const thunkChangeInput = ({fieldName, value, nowIndexSection}: ThunkChangeInputArg): ThunkChangeInput => dispatch => {
  dispatch(actionChangeInput({fieldName: fieldName, value: value, nowIndexSection: nowIndexSection}))
};

export default createDispatchAction(thunkChangeInput);
