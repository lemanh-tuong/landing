import { createAsyncAction } from 'utils/functions/reduxActions';

const actionSetProjectName = createAsyncAction(['@setProjectName', '@settedProjectName', '@setProjectNameFailure'])<null, string, string>();

export { actionSetProjectName };
