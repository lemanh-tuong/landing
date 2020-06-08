import { PageGeneralData } from 'pages/ListPage/ListPageType/type';
import { createAsyncAction } from 'utils/functions/reduxActions';

const actionDuplicatePage = createAsyncAction(['@dulicating', '@duplicated', '@duplicateFail'])<null, PageGeneralData[], string>();

export { actionDuplicatePage };

