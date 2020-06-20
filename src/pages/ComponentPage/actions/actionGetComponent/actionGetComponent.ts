import { Option } from 'pages/SettingsPage/SettingsPage';
import { createAsyncAction } from 'utils/functions/reduxActions/createAsyncAction';

export interface ActionGetComponentSuccess extends Omit<Option, 'sectionId'> {
  previewImg: string;
}

const getDataComponent = createAsyncAction(['@getDataComponentRequest', '@getDataComponentSuccess', '@getDataComponentFailure'])<
  null,
  ActionGetComponentSuccess[],
  string
>();

export { getDataComponent };
