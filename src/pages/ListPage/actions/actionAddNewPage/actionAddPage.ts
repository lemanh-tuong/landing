import { PageGeneralData } from 'pages/ListPage/ListPageType/type';
import { createAsyncAction } from 'utils/functions/reduxActions';

export interface ActionAddNewPagePayload {
  pageName: string;
}

const actionAddNewPage = createAsyncAction(['@creatingPage', '@createdPage', '@createFail'])<null, PageGeneralData, string>();

export { actionAddNewPage };

