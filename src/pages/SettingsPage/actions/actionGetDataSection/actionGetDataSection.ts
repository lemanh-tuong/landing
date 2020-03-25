import { PageProps } from 'pages/SettingsPage/SettingsPage';
import { createAsyncAction } from 'utils/functions/reduxActions';

const getDataSection = createAsyncAction(['@getDataSectionRequest', '@getDataSectionSuccess', '@getDataSectionFailure'])<null, PageProps, string>();

export { getDataSection };

