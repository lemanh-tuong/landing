import { createAction } from 'utils/functions/reduxActions';

export interface ActionChangeInput {
    type: 'CHANGE_INPUT';
    payload: {
        value: string | number;
        fieldName: string;
        nowIndexSection: number;
    };
}

const actionChangeInput = createAction('CHANGE_INPUT', (payload: ActionChangeInput['payload']) => ({
    ...payload
}));


export { actionChangeInput };

