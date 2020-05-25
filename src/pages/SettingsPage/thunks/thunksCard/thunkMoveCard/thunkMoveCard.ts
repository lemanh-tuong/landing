import { CardProps } from 'components/Card/Card';
import { actionMoveCard } from 'pages/SettingsPage/actions/actionsCard/actionMoveCard/actionMoveCard';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkMoveCard = ThunkAction<typeof actionMoveCard>;
export interface ThunkMoveCardArg {
  data: CardProps[];
  nowIndexSection: number;
}

const thunkMoveCard = ({data, nowIndexSection}: ThunkMoveCardArg): ThunkMoveCard => dispatch => {
    dispatch(actionMoveCard({newChild: data, nowIndexSection: nowIndexSection}));

};

export default createDispatchAction(thunkMoveCard);
