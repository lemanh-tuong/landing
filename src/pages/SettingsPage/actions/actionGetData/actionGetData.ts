import { PageProps } from 'pages/SettingsPage/SettingsPage';
import { createAsyncAction } from 'utils/functions/reduxActions';

const getData = createAsyncAction(['@getDataRequest', '@getDataSuccess', '@getDataFailure'])<null, PageProps, string>();

export { getData };

