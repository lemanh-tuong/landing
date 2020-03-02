import { Page } from 'api/Page';
import { createAsyncAction } from 'utils/functions/reduxActions';



export const getPage = createAsyncAction(['@getPageRequest', '@getPageRequestSuccess', '@getPageRequestFailure'])<null, Page, string>();
