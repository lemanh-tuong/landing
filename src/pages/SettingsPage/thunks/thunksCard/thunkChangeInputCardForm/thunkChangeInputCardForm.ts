import { actionChangeInputCardForm } from 'pages/SettingsPage/actions/actionsCard/actionChangeInputCardForm/actionChangeInputCardForm';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkChangeInputCardForm = ThunkAction<typeof actionChangeInputCardForm>;
export interface ThunkChangeInputCardFormArg {
  fieldName: string;
  value: string;
  nowIndexSection: number;
  nowIndexCard: number;
}
const thunkChangeInputCardForm = ({
  fieldName,
  value,
  nowIndexSection,
  nowIndexCard,
}: ThunkChangeInputCardFormArg): ThunkChangeInputCardForm => dispatch => {
  dispatch(actionChangeInputCardForm({ fieldName, value, nowIndexSection, nowIndexCard }));
};

export default createDispatchAction(thunkChangeInputCardForm);
