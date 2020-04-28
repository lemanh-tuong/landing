import { actionChangeIconImgInCol, ActionChangeIconImgInColPayload } from "pages/ImageGalleryPage/actions/actionChangeIconInCol/actionChangeIconInCol";
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkChangeIconImgInCol = ThunkAction<typeof actionChangeIconImgInCol>

const thunkChangeIconImgInCol = ({iconImg, nowIndexSection}: ActionChangeIconImgInColPayload): ThunkChangeIconImgInCol => dispatch => {
  dispatch(actionChangeIconImgInCol({iconImg: iconImg, nowIndexSection: nowIndexSection}));
}

export default createDispatchAction(thunkChangeIconImgInCol);
