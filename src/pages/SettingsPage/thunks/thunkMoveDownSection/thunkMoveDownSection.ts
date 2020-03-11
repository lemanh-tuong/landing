import { PageProps } from "pages/SettingsPage/SettingsPage"
import { moveDownSection } from "pages/SettingsPage/actions/actionMoveDownSection/actionMoveDownSection";

type ThunkMoveDownSection = ThunkAction<typeof moveDownSection>;

const thunkMoveDownSection = (arg: PageProps, nowIndex: number): ThunkMoveDownSection => (dispatch: any) => {
    dispatch(moveDownSection(arg, nowIndex))
}

export default thunkMoveDownSection;