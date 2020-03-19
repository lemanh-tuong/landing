import { actionChangeRadioCardForm } from "pages/SettingsPage/actions/actionChangeRadioCardForm/actionChangeRadioCardForm";
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkChangeRadioCardForm = ThunkAction<typeof actionChangeRadioCardForm>

const thunkChangeRadioCardForm = (fieldName: string, value: string, nowIndexSection: number, nowIndexCard: number): ThunkChangeRadioCardForm => dispatch => {
  dispatch(actionChangeRadioCardForm({fieldName: fieldName, value: value, nowIndexSection: nowIndexSection, nowIndexCard: nowIndexCard}))
}

export default createDispatchAction(thunkChangeRadioCardForm)
