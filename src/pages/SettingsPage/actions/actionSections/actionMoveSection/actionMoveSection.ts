import { PageProps } from 'pages/SettingsPage/SettingsPage';
import { createAction } from 'utils/functions/reduxActions';

export interface ActionMove {
  type: 'MOVE_SECTION';
  payload: PageProps;
}


const moveSection = createAction('MOVE_SECTION', (payload: PageProps['elements']) => {
  return {
    elements: payload
  };
});

export { moveSection };

