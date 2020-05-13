import { createAction } from 'utils/functions/reduxActions';

export interface ActionChangeGeneralDataPagePayload {
  newPathName: string;
  newPageName: string;
  id: string;
}

const actionChangeGeneralDataPage = createAction('CHANGE_GENERAL_DATA_PAGE', (payload: ActionChangeGeneralDataPagePayload) => ({...payload}));

export { actionChangeGeneralDataPage };

