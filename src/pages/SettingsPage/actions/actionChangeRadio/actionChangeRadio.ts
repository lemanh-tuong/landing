import { createAction } from "utils/functions/reduxActions";

export interface ActionChangeRadio {
    type: "CHANGE_RADIO",
    payload: {
        fieldName: string;
        value: string;
        nowIndex: number;
    }
}

const changeRadio = createAction('CHANGE_RADIO', (payload: ActionChangeRadio['payload']) => ({
    ...payload
}))

export { changeRadio }