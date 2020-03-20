import { createAction } from "utils/functions/reduxActions";

export interface ActionChangeInput {
    type: "CHANGE_INPUT";
    payload: {
        value: string;
        fieldName: string;
        nowIndexSection: number;
    }
}

const changeInput = createAction('CHANGE_INPUT', (payload: ActionChangeInput['payload']) => ({
    ...payload
}))


export { changeInput }