import { Option } from "pages/SettingsPage/SettingsPage";
import { createAction } from "utils/functions/reduxActions";

export type ActionDuplicateSectionPayload = {
  data: Option;
  nowIndexSection: number;
};

const actionDuplicateSection = createAction("DUPLICATE_SECTION", (payload: ActionDuplicateSectionPayload) => ({...payload}));

export default actionDuplicateSection;
