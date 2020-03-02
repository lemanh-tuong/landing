import { getPage } from '../actions/actionPage';

type ThunkGetPage = ThunkAction<typeof getPage>;

const getPageInfo = () => (dispatch: any) => {
  dispatch(getPage.request());
};
export default getPageInfo;
