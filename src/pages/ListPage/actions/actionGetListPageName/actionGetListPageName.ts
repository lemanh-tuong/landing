import { PageGeneralData } from 'pages/ListPage/ListPageType/type';
import { createAsyncAction } from 'utils/functions/reduxActions';

const actionGetListPageName = createAsyncAction(['@getListPageNameRequest', '@getListPageNameSuccess', '@getListPageNameFailure'])<null, PageGeneralData[], string>();

export { actionGetListPageName };

