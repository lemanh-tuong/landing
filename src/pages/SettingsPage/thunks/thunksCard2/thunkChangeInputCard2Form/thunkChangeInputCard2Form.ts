import { actionChangeInputCard2Form } from 'pages/SettingsPage/actions/actionCard2/actionChangeInputCard2Form/actionChangeInputCard2Form';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkChangeInputCard2Form = ThunkAction<typeof actionChangeInputCard2Form>;
export interface ThunkChangeInputCard2FormArg {
  fieldName: string;
  value: string;
  nowIndexSection: number;
  nowIndexCard: number;
}
const thunkChangeInputCard2Form = ({
  fieldName,
  value,
  nowIndexSection,
  nowIndexCard,
}: ThunkChangeInputCard2FormArg): ThunkChangeInputCard2Form => dispatch => {
  dispatch(actionChangeInputCard2Form({ fieldName, value, nowIndexSection, nowIndexCard }));
};

export default createDispatchAction(thunkChangeInputCard2Form);
