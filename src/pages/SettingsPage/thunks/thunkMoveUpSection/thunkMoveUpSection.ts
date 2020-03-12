import { moveUpSection } from "pages/SettingsPage/actions/actionMoveUpSection/actionMoveUpSection"
import { PageProps } from "pages/SettingsPage/SettingsPage"

type ThunkMoveUpSection = ThunkAction<typeof moveUpSection>;

const thunkMoveUpSection = (arg: PageProps, nowIndex: number): ThunkMoveUpSection => (dispatch: any) => {
    dispatch(moveUpSection(arg, nowIndex))
}

export default thunkMoveUpSection;