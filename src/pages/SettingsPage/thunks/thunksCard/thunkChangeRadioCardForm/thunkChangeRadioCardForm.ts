import { actionChangeRadioCardForm } from "pages/SettingsPage/actions/actionsCard/actionChangeRadioCardForm/actionChangeRadioCardForm";
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkChangeRadioCardForm = ThunkAction<typeof actionChangeRadioCardForm>
export interface ThunkChangeRadioCardFormArg {
  fieldName: string;
  value: string;
  nowIndexSection: number;
  nowIndexCard: number
}

const thunkChangeRadioCardForm = ({fieldName, value, nowIndexSection, nowIndexCard}: ThunkChangeRadioCardFormArg): ThunkChangeRadioCardForm => dispatch => {
  dispatch(actionChangeRadioCardForm({fieldName: fieldName, value: value, nowIndexSection: nowIndexSection, nowIndexCard: nowIndexCard}))
}

export default createDispatchAction(thunkChangeRadioCardForm)
