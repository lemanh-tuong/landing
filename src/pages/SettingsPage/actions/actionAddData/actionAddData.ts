import { Option, PageProps } from 'pages/SettingsPage/SettingsPage';
import { createAction } from 'utils/functions/reduxActions';

export interface ActionAddData {
  type: 'ADD_SECTION';
  payload: PageProps;
}

const actionAddData = createAction('ADD_SECTION', (payload: Option ,nowIndexSection?: number) => {
  if(!!nowIndexSection || nowIndexSection === 0) {
    return {
      ...payload,
      nowIndexSection: nowIndexSection
    };
  }
  return {
    ...payload,
  };
});

export { actionAddData };

