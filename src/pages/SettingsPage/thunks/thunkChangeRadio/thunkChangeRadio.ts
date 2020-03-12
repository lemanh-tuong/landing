import { changeRadio } from "pages/SettingsPage/actions/actionChangeRadio/actionChangeRadio";

export type ThunkChangeRadio = ThunkAction<typeof changeRadio>

const thunkChangeRadio = (type: string, value: string, nowIndex: number):ThunkChangeRadio => dispatch => {
    dispatch(changeRadio({type: type, value: value, nowIndex: nowIndex}))
}

export default thunkChangeRadio;