import { actionChangeIconCard2, ActionChangeIconCard2Payload } from "pages/ImageGalleryPage/actions/actionChangeIconCard2/actionChangeIconCard2";
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkChangeIconCard2 = ThunkAction<typeof actionChangeIconCard2>
export type ThunkChangeIconCard2Arg = ActionChangeIconCard2Payload;

const thunkChangeIconCard2 = ({ iconImg, nowIndexSection, nowIndexCard}: ThunkChangeIconCard2Arg): ThunkChangeIconCard2 => dispatch => {
  dispatch(actionChangeIconCard2({ iconImg: iconImg, nowIndexSection: nowIndexSection, nowIndexCard: nowIndexCard}))
}

export default createDispatchAction(thunkChangeIconCard2)
