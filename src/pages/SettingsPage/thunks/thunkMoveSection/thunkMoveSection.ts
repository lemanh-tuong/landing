import { moveSection } from '../../actions/actionMove/actionMove';
import { PageProps } from '../../SettingsPage';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkAddData = ThunkAction<typeof moveSection>;

const thunkMoveSection = (elements: PageProps['elements']): ThunkAddData => (dispatch: any) => {
  dispatch(moveSection(elements));
};

export default createDispatchAction(thunkMoveSection);
