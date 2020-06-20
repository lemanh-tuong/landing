import { actionChangeHasVideo } from 'pages/SettingsPage/actions/actionsSlide&MockUp/actionChangeHasVideo/actionChangeHasVideo';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkChangeHasVideo = ThunkAction<typeof actionChangeHasVideo>;

export interface ThunkChangeHasVideoArg {
  nowIndexSection: number;
  nowIndexSlide: number;
  hasVideo: boolean;
}

const thunkChangeHasVideo = ({ nowIndexSection, nowIndexSlide, hasVideo }: ThunkChangeHasVideoArg): ThunkChangeHasVideo => dispatch => {
  dispatch(actionChangeHasVideo({ nowIndexSection: nowIndexSection, nowIndexSlide: nowIndexSlide, hasVideo: hasVideo }));
};

export default createDispatchAction(thunkChangeHasVideo);
