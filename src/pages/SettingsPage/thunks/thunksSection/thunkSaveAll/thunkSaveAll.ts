import addToPage from "firebase/database/addToPage";
import { actionSaveAll } from "pages/SettingsPage/actions/actionSections/actionSaveAll/actionSaveAll";
import { Option } from "pages/SettingsPage/SettingsPage";
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkSaveAll = ThunkAction<typeof actionSaveAll>
export interface ThunkSaveAllArg {
  sections: Option[];
}
const thunkSaveAll = ({sections}: ThunkSaveAllArg): ThunkSaveAll => dispatch => {
    addToPage({pageName: 'HomePage', elements: sections});
    dispatch(actionSaveAll());
}

export default createDispatchAction(thunkSaveAll);
