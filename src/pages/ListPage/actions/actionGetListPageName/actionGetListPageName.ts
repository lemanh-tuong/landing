import { createAsyncAction } from 'utils/functions/reduxActions';

const actionGetListPageName = createAsyncAction(['@getListPageNameRequest', '@getListPageNameSuccess', '@getListPageNameFailure'])<null, string[], string>();

export { actionGetListPageName };

