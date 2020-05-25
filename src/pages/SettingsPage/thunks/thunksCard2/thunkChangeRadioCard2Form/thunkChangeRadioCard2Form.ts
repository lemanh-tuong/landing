import { actionChangeRadioCard2Form } from 'pages/SettingsPage/actions/actionCard2/actionChangeRadioCard2Form/actionChangeRadioCard2Form';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkChangeRadioCard2Form = ThunkAction<typeof actionChangeRadioCard2Form>;
export interface ThunkChangeRadioCard2FormArg {
  fieldName: string;
  value: string;
  nowIndexSection: number;
  nowIndexCard: number;
}

const thunkChangeRadioCard2Form = ({fieldName, value, nowIndexSection, nowIndexCard}: ThunkChangeRadioCard2FormArg): ThunkChangeRadioCard2Form => dispatch => {
  dispatch(actionChangeRadioCard2Form({fieldName: fieldName, value: value, nowIndexSection: nowIndexSection, nowIndexCard: nowIndexCard}));
};

export default createDispatchAction(thunkChangeRadioCard2Form);
