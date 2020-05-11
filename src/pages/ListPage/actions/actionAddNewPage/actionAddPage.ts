import { createAsyncAction } from 'utils/functions/reduxActions';

export interface ActionAddNewPagePayload {
  pageName: string;
}

const actionAddNewPage = createAsyncAction(['@creatingPage', '@createdPage', '@createFail'])<null, string, string>();

export { actionAddNewPage };

