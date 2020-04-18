import { Option } from 'pages/SettingsPage/SettingsPage';
import { createAction } from 'utils/functions/reduxActions';

export interface ActionDeleteSection {
  type: 'DELETE_SECTION';
  payload: Option;
}

const deleteSection = createAction('DELETE_SECTION', (payload: Option) => ({
  ...payload,
}));

export { deleteSection };

