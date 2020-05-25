import { actionResponsiveSlides, ActionResponsiveSlidesPayload } from 'pages/SettingsPage/actions/actionsSlide&MockUp/actionResponsiveSlides/actionResponsiveSlides';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkResponsiveSlides = ThunkAction<typeof actionResponsiveSlides>;

const thunkResponsiveSlides = ({minWidth, nowIndexSection, value}: ActionResponsiveSlidesPayload): ThunkResponsiveSlides => dispatch => {
  dispatch(actionResponsiveSlides({minWidth, nowIndexSection, value}));
};

export default createDispatchAction(thunkResponsiveSlides);
