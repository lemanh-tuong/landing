import { createAction } from 'utils/functions/reduxActions';

export interface ActionChangeCheckBox {
    type: 'CHANGE_CHECKBOX';
    payload: {
        fieldName: string;
        checked: boolean;
        nowIndexSection: number;
    };
}

const changeCheckBox = createAction('CHANGE_CHECKBOX', (payload: ActionChangeCheckBox['payload']) => ({
    ...payload
}));

export { changeCheckBox };

