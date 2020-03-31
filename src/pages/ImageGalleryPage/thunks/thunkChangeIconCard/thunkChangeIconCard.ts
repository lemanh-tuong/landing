import { actionChangeIconCard } from "pages/ImageGalleryPage/actions/actionChangeIconCard/actionChangeIconCard";
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkChangeIconCard = ThunkAction<typeof actionChangeIconCard>

const thunkChangeIconCard = (fieldName: string, imgSrc: string, nowIndexSection: number, nowIndexCard: number): ThunkChangeIconCard => dispatch => {
  dispatch(actionChangeIconCard({ fieldName: fieldName, iconImg: imgSrc, nowIndexSection: nowIndexSection, nowIndexCard: nowIndexCard}))
}

export default createDispatchAction(thunkChangeIconCard)
