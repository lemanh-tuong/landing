import { PageProps } from "pages/SettingsPage/SettingsPage";
import { createAction } from "utils/functions/reduxActions";

type ActionMoveDownSectionType = 'MOVE_DOWN_SECTION'
type ActionMoveDownSectionPayload = PageProps;
export interface ActionMoveDownSection {
    type: ActionMoveDownSectionType ,
    payload: ActionMoveDownSectionPayload
}

const moveDownSection = createAction('MOVE_DOWN_SECTION', (payload: ActionMoveDownSectionPayload, nowIndex: number) =>  ({
    ...payload,
    nowIndex
}))

export { moveDownSection }