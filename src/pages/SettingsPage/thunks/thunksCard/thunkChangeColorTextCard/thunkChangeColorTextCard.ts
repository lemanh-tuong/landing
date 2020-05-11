import { actionChangeColorCardText, ActionChangeColorCardTextPayload } from 'pages/SettingsPage/actions/actionsCard/actionChangeColorCardText/actionChangeColorCardText';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkChangeColorTextCard = ThunkAction<typeof actionChangeColorCardText>;

const thunkChangeColorTextCard = ({fieldName, color, nowIndexSection, nowIndexCard}: ActionChangeColorCardTextPayload): ThunkChangeColorTextCard => dispatch => {
  dispatch(actionChangeColorCardText({fieldName: fieldName, color: color, nowIndexSection: nowIndexSection, nowIndexCard: nowIndexCard}));
};

export default createDispatchAction(thunkChangeColorTextCard);
