import { actionChangeVideoUrl } from 'pages/SettingsPage/actions/actionsSlide&MockUp/actionChangeVideoUrl/actionChangeVideoUrl';
import { createDispatchAction } from 'utils/functions/reduxActions';
type ThunkChangeVideoUrl = ThunkAction<typeof actionChangeVideoUrl>;

export interface ThunkChangeVideoUrlArg {
  nowIndexSection: number;
  nowIndexSlide: number;
  newUrl: string;
}

const thunkChangeVideoUrl = ({ nowIndexSection, nowIndexSlide, newUrl }: ThunkChangeVideoUrlArg): ThunkChangeVideoUrl => dispatch => {
  dispatch(actionChangeVideoUrl({ nowIndexSection: nowIndexSection, nowIndexSlide: nowIndexSlide, newUrl: newUrl }));
};

export default createDispatchAction(thunkChangeVideoUrl);
