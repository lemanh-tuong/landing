import { actionAddCard, ActionAddCardPayLoad } from 'pages/SettingsPage/actions/actionsCard/actionAddCard/actionAddCard';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkAddCard = ThunkAction<typeof actionAddCard>;

const thunkAddCard = ({data, nowIndexSection, nowIndexCard}: ActionAddCardPayLoad): ThunkAddCard => dispatch => {
  dispatch(actionAddCard({data: {...data}, nowIndexSection: nowIndexSection, nowIndexCard: nowIndexCard}));
};

export default createDispatchAction(thunkAddCard);
