import { actionChangeSelect } from "pages/SettingsPage/actions/actionsInFormSection/actionChangeSelect/actionChangeSelect";
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkChangeSelect = ThunkAction<typeof actionChangeSelect>
export interface ThunkChangeSelectArg {
  nowIndexSection: number;
  fieldName: string;
  value: string;
}
const thunkChangeSelect = ({nowIndexSection, fieldName, value}: ThunkChangeSelectArg): ThunkChangeSelect => dispatch => {
  dispatch(actionChangeSelect({value: value, fieldName: fieldName, nowIndexSection: nowIndexSection}));
}

export default createDispatchAction(thunkChangeSelect);
