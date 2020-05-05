import { changeCheckBox } from 'pages/SettingsPage/actions/actionsInFormSection/actionChangeCheckBox/actionChangeCheckBox';
import { createDispatchAction } from 'utils/functions/reduxActions';

export type ThunkChangeCheckBox = ThunkAction<typeof changeCheckBox>;
export interface ThunkChangeCheckBoxArg {
  fieldName: string;
  checked: boolean;
  nowIndexSection: number;
}

const thunkChangeCheckBox = ({fieldName, checked, nowIndexSection}: ThunkChangeCheckBoxArg): ThunkChangeCheckBox => dispatch => {
    dispatch(changeCheckBox({fieldName: fieldName, checked: checked, nowIndexSection: nowIndexSection}));
};

export default createDispatchAction(thunkChangeCheckBox);
