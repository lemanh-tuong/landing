import { actionChangeIconCard } from "pages/ImageGalleryPage/actions/actionChangeIconCard/actionChangeIconCard";
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkChangeIconCard = ThunkAction<typeof actionChangeIconCard>
export interface ThunkChangeIconCardArg {
  fieldName: string;
  imgSrc: string;
  nowIndexSection: number;
  nowIndexCard: number
}

const thunkChangeIconCard = ({fieldName, imgSrc, nowIndexSection, nowIndexCard}: ThunkChangeIconCardArg): ThunkChangeIconCard => dispatch => {
  dispatch(actionChangeIconCard({ fieldName: fieldName, iconImg: imgSrc, nowIndexSection: nowIndexSection, nowIndexCard: nowIndexCard}))
}

export default createDispatchAction(thunkChangeIconCard)
