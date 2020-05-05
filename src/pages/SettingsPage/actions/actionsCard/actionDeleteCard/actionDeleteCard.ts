import { createAction } from 'utils/functions/reduxActions';

export interface ActionDeleteCard {
  type: 'DELETE_CARD';
  payload: {
    nowIndexSection: number;
    nowIndexCard: number;
  };
}

const actionDeleteCard = createAction('DELETE_CARD', (payload: ActionDeleteCard['payload']) => ({
  ...payload
}));

export { actionDeleteCard };

