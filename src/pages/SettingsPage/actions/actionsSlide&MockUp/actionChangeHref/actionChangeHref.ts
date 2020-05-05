import { createAction } from 'utils/functions/reduxActions';

export interface ActionChangeHrefPayload {
  nowIndexSection: number;
  nowIndexSlide: number;
  href: string;
}

const actionChangeHref = createAction('CHANGE_HREF', (payload: ActionChangeHrefPayload) => ({...payload}));

export { actionChangeHref };

