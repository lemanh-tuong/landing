import { CardProps } from 'components/Card/Card';
import { createAction } from 'utils/functions/reduxActions';

export interface ActionMoveCard2 {
  type: 'MOVE_CARD_2';
  payload: {
    newChild: CardProps[];
    nowIndexSection: number;
  };
}

const actionMoveCard2 = createAction('MOVE_CARD_2', (payload: ActionMoveCard2['payload']) => ({
  ...payload
}));

export { actionMoveCard2 };


