import { PageProps } from "pages/SettingsPage/SettingsPage";
import { createAction } from "utils/functions/reduxActions";

type ActionMoveUpSectionType = 'MOVE_UP_SECTION'
type ActionMoveUpSectionPayload = PageProps;
export interface ActionMoveUpSection {
    type: ActionMoveUpSectionType ,
    payload: ActionMoveUpSectionPayload
}

const moveUpSection = createAction('MOVE_UP_SECTION', (payload: ActionMoveUpSectionPayload, nowIndex: number) =>  ({
    ...payload,
    nowIndex
}))

export { moveUpSection }