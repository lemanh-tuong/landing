import { PageProps } from 'pages/SettingsPage/SettingsPage';
import { createAsyncAction } from 'utils/functions/reduxActions';

const getDataSections = createAsyncAction(['@getDataSectionsRequest', '@getDataSectionsSuccess', '@getDataSectionsFailure'])<
  null,
  PageProps,
  string
>();

export { getDataSections };
