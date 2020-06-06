import { actionChangeImageButton, ActionChangeImageButtonPayload } from "pages/ImageGalleryPage/actions/actionChangeImageButton/actionChangeImageButton";
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkChangeImageButton = ThunkAction<typeof actionChangeImageButton>

const thunkChangeImageButton = ({imgSrc, nowIndexSection, nowIndexButton}: ActionChangeImageButtonPayload): ThunkChangeImageButton => dispatch => {
  dispatch(actionChangeImageButton({imgSrc, nowIndexButton, nowIndexSection }))
}

export default createDispatchAction(thunkChangeImageButton);
