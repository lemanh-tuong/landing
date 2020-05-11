import { writeFirebase } from 'firebase/database/writeFirebase';
import { actionAddNewPage } from 'pages/ListPage/actions/actionAddNewPage/actionAddPage';
import { createDispatchAction } from 'utils/functions/reduxActions';

type ThunkAddNewPage =ThunkAction<typeof actionAddNewPage>;

interface ThunkAddNewPageArg {
  pageName: string;
  ref: string;
}

const thunkAddNewPage = ({pageName, ref}: ThunkAddNewPageArg): ThunkAddNewPage => async dispatch => {
  dispatch(actionAddNewPage.request());
  try {
    await writeFirebase({ref: pageName, value: {
      pageName: pageName,
      ref: ref
    }});
    dispatch(actionAddNewPage.success(pageName));
  } catch(err) {
    dispatch(actionAddNewPage.failure(err.message));
  }
};

export default createDispatchAction(thunkAddNewPage);
