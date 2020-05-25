import { createAsyncAction } from 'utils/functions/reduxActions';

const actionDeletePage = createAsyncAction(['@deleting', '@deleted', '@deleteFail'])<null, number, string>();

export { actionDeletePage };
