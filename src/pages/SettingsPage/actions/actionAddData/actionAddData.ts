import { Option, PageProps } from 'pages/SettingsPage/SettingsPage';
import { createAction } from 'utils/functions/reduxActions';

export interface ActionAddData {
  type: 'ADD_SECTION';
  payload: PageProps;
}

const addData = createAction('ADD_SECTION', (payload: Option ,index?: number) => {
  if(!!index || index === 0) {
    return {
      ...payload,
      index: index
    };
  }
  return {
    ...payload,
  };
});

export { addData };

