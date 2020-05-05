import { CardProps } from 'components/Card/Card';
import { createAction } from 'utils/functions/reduxActions';

export interface ActionAddCardPayLoad {
  data: CardProps;
  nowIndexSection: number;
  nowIndexCard?: number;
}

const actionAddCard = createAction('ADD_CARD', (payload: ActionAddCardPayLoad) => ({
  ...payload
}));

export { actionAddCard };

