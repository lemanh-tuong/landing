import { actionChangeHref } from "pages/SettingsPage/actions/actionsSlide&MockUp/actionChangeHref/actionChangeHref";
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkChangeHref = ThunkAction<typeof actionChangeHref>
export interface ThunkChangeHrefArg {
  nowIndexSection: number;
  nowIndexSlide: number;
  href: string;
}
const thunkChangeHref = ({href, nowIndexSection, nowIndexSlide}: ThunkChangeHrefArg):ThunkChangeHref => dispatch => {
  dispatch(actionChangeHref({href: href, nowIndexSlide: nowIndexSlide, nowIndexSection: nowIndexSection}))
}

export default createDispatchAction(thunkChangeHref);
