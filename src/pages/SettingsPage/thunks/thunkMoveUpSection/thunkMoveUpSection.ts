import { moveUpSection } from "pages/SettingsPage/actions/actionMoveUpSection/actionMoveUpSection"
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkMoveUpSection = ThunkAction<typeof moveUpSection>;

const thunkMoveUpSection = (nowIndexSection: number): ThunkMoveUpSection => (dispatch: any) => {
    dispatch(moveUpSection({nowIndexSection: nowIndexSection}))
}

export default createDispatchAction(thunkMoveUpSection);
