import { createAction } from "utils/functions/reduxActions";

export interface ActionChangeCheckBox {
    type: "CHANGE_CHECKBOX",
    payload: {
        type: string;
        nowIndex: number;
    }
}

const changeCheckBox = createAction('CHANGE_CHECKBOX', (payload: ActionChangeCheckBox['payload']) => ({
    ...payload
}))

export { changeCheckBox }