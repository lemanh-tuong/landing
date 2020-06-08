import readFireBase from 'firebase/database/readFireBase';
import { getDataSection } from 'pages/SettingsPage/actions/actionSections/actionGetDataSection/actionGetDataSection';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkGetDataSection = ThunkAction<typeof getDataSection>;
export interface ThunkGetDataSectionArg {
  pathName: string;
}


const thunkGetDataSection = ({pathName}: ThunkGetDataSectionArg): ThunkGetDataSection => async dispatch => {
  dispatch(getDataSection.request(null));
  try {
    const data = await readFireBase(`/PagesDetail/${pathName.slice(1)}`);
    dispatch(getDataSection.success(data));
  } catch(err) {
    dispatch(getDataSection.failure(err.message));
  }
};

export default createDispatchAction(thunkGetDataSection);
