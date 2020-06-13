import { createAsyncAction } from "utils/functions/reduxActions";

const actionGetProjectName = createAsyncAction(['@getProjectNameRequest', '@getProjectNameSuccess', '@getProjectNameFailure'])<null, string, string>();

export { actionGetProjectName };

