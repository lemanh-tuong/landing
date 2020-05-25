import { PageGeneralData } from 'pages/ListPage/ListPageType/type';
import { createAsyncAction } from 'utils/functions/reduxActions';

export interface ActionChangeGeneralDataPagePayload {
  newPathName: string;
  newPageName: string;
  newTitlePage: string;
  id: string;
}

const actionChangeGeneralDataPage = createAsyncAction(['@changing', '@changed', '@changeFail'])<null, PageGeneralData, string>();

export { actionChangeGeneralDataPage };

