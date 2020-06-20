import { createAction } from 'utils/functions/reduxActions';

export interface ActionChangeLogoImgPayload {
  imgSrc: string;
}

const actionChangeLogoImg = createAction('CHANGE_LOGO_IMG', (payload: ActionChangeLogoImgPayload) => ({ ...payload }));

export { actionChangeLogoImg };
