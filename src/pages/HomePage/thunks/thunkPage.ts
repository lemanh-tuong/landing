import { getPageData } from '../actions/actionGetPageData';

type ThunkGetPage = ThunkAction<typeof getPageData>;

const getPageInfo = (): ThunkGetPage => dispatch => {
  dispatch(getPageData.request());
};
export default getPageInfo;
