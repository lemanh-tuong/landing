import { createAction } from "utils/functions/reduxActions";

type ActionMoveUpSectionType = 'MOVE_UP_SECTION'
type ActionMoveUpSectionPayload = {
  nowIndexSection: number
};
export interface ActionMoveUpSection {
    type: ActionMoveUpSectionType ,
    payload: ActionMoveUpSectionPayload
}

const moveUpSection = createAction('MOVE_UP_SECTION', (payload: ActionMoveUpSectionPayload) =>  ({
    ...payload,
}))

export { moveUpSection }
