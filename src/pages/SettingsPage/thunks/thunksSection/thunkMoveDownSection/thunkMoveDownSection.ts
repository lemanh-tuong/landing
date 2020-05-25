import { moveDownSection } from 'pages/SettingsPage/actions/actionSections/actionMoveDownSection/actionMoveDownSection';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkMoveDownSection = ThunkAction<typeof moveDownSection>;

const thunkMoveDownSection = (nowIndexSection: number): ThunkMoveDownSection => dispatch => {
    dispatch(moveDownSection({nowIndexSection: nowIndexSection}));
};

export default createDispatchAction(thunkMoveDownSection);
