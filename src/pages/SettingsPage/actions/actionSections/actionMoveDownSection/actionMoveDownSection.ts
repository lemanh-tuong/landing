import { createAction } from 'utils/functions/reduxActions';

type ActionMoveDownSectionType = 'MOVE_DOWN_SECTION';
interface ActionMoveDownSectionPayload {
  nowIndexSection: number;
}

export interface ActionMoveDownSection {
  type: ActionMoveDownSectionType;
  payload: ActionMoveDownSectionPayload;
}

const moveDownSection = createAction('MOVE_DOWN_SECTION', (payload: ActionMoveDownSectionPayload) => ({
  ...payload,
}));

export { moveDownSection };
