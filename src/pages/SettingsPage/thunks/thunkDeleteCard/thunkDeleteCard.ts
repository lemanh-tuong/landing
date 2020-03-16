import { actionDeleteCard } from "pages/SettingsPage/actions/actionDeleteCard/actionDeleteCard";

type ThunkDeleteCard = ThunkAction<typeof actionDeleteCard>

const thunkDeleteCard = (indexSection: number, indexCard: number): ThunkDeleteCard => dispatch => {
  dispatch(actionDeleteCard({nowIndexSection: indexSection, nowIndexCard: indexCard}))
}

export default thunkDeleteCard;
