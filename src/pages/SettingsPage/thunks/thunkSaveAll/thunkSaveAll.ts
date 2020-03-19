import { actionSaveAll } from "pages/SettingsPage/actions/actionSaveAll/actionSaveAll";
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkSaveAll = ThunkAction<typeof actionSaveAll>

const thunkSaveAll = (): ThunkSaveAll => dispatch => {
    dispatch(actionSaveAll())
}

export default createDispatchAction(thunkSaveAll);
