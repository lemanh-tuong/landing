import { PageDetailData } from 'pages/ListPage/ListPageType/type';
import { createAsyncAction } from 'utils/functions/reduxActions';

const actionDuplicatePage = createAsyncAction(['@dulicating', '@duplicated', '@duplicateFail'])<null, PageDetailData, string>();

export { actionDuplicatePage };
