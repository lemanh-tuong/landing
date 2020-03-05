import { createAsyncAction } from 'utils/functions/reduxActions';
import { PageProps } from '../SettingsPage';

const getData = createAsyncAction(['@getDataRequest', '@getDataSuccess', '@getDataFailure'])<null, PageProps, string>();

export { getData };

