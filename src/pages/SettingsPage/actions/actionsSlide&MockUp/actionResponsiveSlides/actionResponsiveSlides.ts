import { createAction } from 'utils/functions/reduxActions';

export interface ActionResponsiveSlidesPayload {
  nowIndexSection: number;
  minWidth: string;
  value: number;
}

const actionResponsiveSlides = createAction('RESPONSIVE_SLIDES', (payload: ActionResponsiveSlidesPayload) => ({ ...payload }));

export { actionResponsiveSlides };

