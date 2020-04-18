import { Option } from 'pages/SettingsPage/SettingsPage';
import { createAction } from 'utils/functions/reduxActions';

export interface ActionDeleteSection {
  type: 'DELETE_SECTION';
  payload: Option & {
    nowIndexSection: number;
  };
}

const deleteSection = createAction('DELETE_SECTION', (payload: ActionDeleteSection['payload']) => ({
  ...payload,
}));

export { deleteSection };

