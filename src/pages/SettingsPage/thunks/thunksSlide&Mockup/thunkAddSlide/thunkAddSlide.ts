import { actionAddSlide } from 'pages/SettingsPage/actions/actionsSlide&MockUp/actionAddSlide/actionSlide';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkAddSlide = ThunkAction<typeof actionAddSlide>;

export interface ThunkAddSlideArg {
  nowIndexSection: number;
  nowIndexSlide: number;
  sliderProperty: {
    imgSrc: string;
    [key: string]: any;
  };
}

const thunkAddSlide = ({nowIndexSlide, nowIndexSection, sliderProperty}: ThunkAddSlideArg): ThunkAddSlide => dispatch => {
  dispatch(actionAddSlide({nowIndexSlide: nowIndexSlide, nowIndexSection: nowIndexSection, slideProperty: sliderProperty}));
};

export default createDispatchAction(thunkAddSlide);
