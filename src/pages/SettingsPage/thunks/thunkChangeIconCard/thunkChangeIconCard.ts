import { actionChangeIconCard } from "pages/SettingsPage/actions/actionChangeIconCard/actionChangeIconCard";

type ThunkChangeIconCard = ThunkAction<typeof actionChangeIconCard>

const thunkChangeIconCard = (imgSrc: string, nowIndexSection: number, nowIndexCard: number): ThunkChangeIconCard => dispatch => {
  dispatch(actionChangeIconCard({imgSrc: imgSrc, nowIndexSection: nowIndexSection, nowIndexCard: nowIndexCard}))
}

export default thunkChangeIconCard
