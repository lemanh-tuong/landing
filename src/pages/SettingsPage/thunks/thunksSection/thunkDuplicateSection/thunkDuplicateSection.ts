import actionDuplicateSection from "pages/SettingsPage/actions/actionSections/actionDuplicateSection/actionDuplicateSection";
import { Option } from "pages/SettingsPage/SettingsPage";
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkDuplicateSection = ThunkAction<typeof actionDuplicateSection>

export interface ThunkDuplicateSectionArg {
  data: Option,
  nowIndexSection: number
}

const thunkDuplicateSection = ({data, nowIndexSection}: ThunkDuplicateSectionArg):ThunkDuplicateSection => dispatch => {
  dispatch(actionDuplicateSection({data: data, nowIndexSection: nowIndexSection}));
}

export default createDispatchAction(thunkDuplicateSection);
