import { createDispatchAction } from 'utils/functions/reduxActions';
import { actionChangeVideoUrl } from '../../actions/actionChangeVideoUrl/actionChangeVideoUrl';
type ThunkChangeVideoUrl = ThunkAction<typeof actionChangeVideoUrl>

export interface ThunkChangeVideoUrlArg {
  nowIndexSection: number;
  nowIndexSlide: number;
  newUrl: string;
}

const thunkChangeVideoUrl = ({nowIndexSection, nowIndexSlide, newUrl}: ThunkChangeVideoUrlArg): ThunkChangeVideoUrl => dispatch => {
  dispatch(actionChangeVideoUrl({nowIndexSection: nowIndexSection, nowIndesSlide: nowIndexSlide, newUrl: newUrl}))
}

export default createDispatchAction(thunkChangeVideoUrl);
