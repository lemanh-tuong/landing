import { actionChangeInputRateForm } from 'pages/SettingsPage/actions/actionsRate/actionChangeInputRateForm/actionChangeInputRateForm';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkChangeInputRateForm = ThunkAction<typeof actionChangeInputRateForm>;

export interface ThunkChangeInputRateFormArg {
  nowIndexSection: number;
  nowIndexRate: number;
  fieldName: string;
  value: string | number;
}

const thunkChangeInputRateForm = ({fieldName, value, nowIndexRate, nowIndexSection}: ThunkChangeInputRateFormArg): ThunkChangeInputRateForm => dispatch => {
  dispatch(actionChangeInputRateForm({value: value, fieldName: fieldName, nowIndexSection: nowIndexSection, nowIndexRate: nowIndexRate}));
};

export default createDispatchAction(thunkChangeInputRateForm);
