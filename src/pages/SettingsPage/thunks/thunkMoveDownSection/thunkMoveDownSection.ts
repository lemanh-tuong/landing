import { moveDownSection } from "pages/SettingsPage/actions/actionMoveDownSection/actionMoveDownSection";
import { createDispatchAction } from "utils/functions/reduxActions";

type ThunkMoveDownSection = ThunkAction<typeof moveDownSection>;

const thunkMoveDownSection = (nowIndexSection: number): ThunkMoveDownSection => (dispatch: any) => {
    dispatch(moveDownSection({nowIndexSection: nowIndexSection}))
}

export default createDispatchAction(thunkMoveDownSection);
