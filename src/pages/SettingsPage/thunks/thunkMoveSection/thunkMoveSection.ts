import { addData } from '../../actions/actionAddData/actionAddData';
import { moveSection } from '../../actions/actionMove/actionMove';
import { PageProps } from '../../SettingsPage';

type ThunkAddData = ThunkAction<typeof addData>;

const thunkMoveSection = (elements: PageProps['elements']): ThunkAddData => (dispatch: any) => {
  dispatch(moveSection(elements));
};

export default thunkMoveSection;
