import { PageGeneralData } from 'pages/ListPage/ListPageType/type';
import { createAsyncAction } from 'utils/functions/reduxActions';

const actionAddNewPage = createAsyncAction(['@creatingPage', '@createdPage', '@createFail'])<null, PageGeneralData[], string>();

export { actionAddNewPage };
