import { actionSaveAll } from "pages/SettingsPage/actions/actionSaveAll/actionSaveAll";

type ThunkSaveAll = ThunkAction<typeof actionSaveAll>

const thunkSaveAll = (): ThunkSaveAll => dispatch => {
    dispatch(actionSaveAll())
}

export default thunkSaveAll;