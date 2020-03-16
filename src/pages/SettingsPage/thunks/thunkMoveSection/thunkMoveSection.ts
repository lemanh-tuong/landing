import { moveSection } from '../../actions/actionMove/actionMove';
import { PageProps } from '../../SettingsPage';

type ThunkAddData = ThunkAction<typeof moveSection>;

const thunkMoveSection = (elements: PageProps['elements']): ThunkAddData => (dispatch: any) => {
  dispatch(moveSection(elements));
};

export default thunkMoveSection;
