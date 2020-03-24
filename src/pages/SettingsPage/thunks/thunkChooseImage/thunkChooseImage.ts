import { actionChooseImage } from "pages/SettingsPage/actions/actionChooseImage/actionChooseImage";
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkChooseImage = ThunkAction<typeof actionChooseImage>

const thunkChooseImage = (fieldName: string, src: string | string[], nowIndexSection: number): ThunkChooseImage => dispatch => {
  dispatch(actionChooseImage({fieldName: fieldName, data: src, nowIndexSection: nowIndexSection}));
}

export default createDispatchAction(thunkChooseImage);
