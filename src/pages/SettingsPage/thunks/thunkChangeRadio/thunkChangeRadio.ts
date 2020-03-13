import { changeRadio } from "pages/SettingsPage/actions/actionChangeRadio/actionChangeRadio";

export type ThunkChangeRadio = ThunkAction<typeof changeRadio>

const thunkChangeRadio = (fieldName: string, value: string, nowIndex: number):ThunkChangeRadio => dispatch => {
    dispatch(changeRadio({fieldName: fieldName, value: value, nowIndex: nowIndex}))
}

export default thunkChangeRadio;