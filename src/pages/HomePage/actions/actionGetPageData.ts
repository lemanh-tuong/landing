import { PageState } from 'api/PageType';
import { createAsyncAction } from 'utils/functions/reduxActions';



export const getPageData = createAsyncAction(['@getPageRequest', '@getPageRequestSuccess', '@getPageRequestFailure'])<null, PageState, string>();
