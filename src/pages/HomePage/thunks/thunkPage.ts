import { getPageData } from '../actions/actionGetPageData';

type ThunkGetPage = ThunkAction<typeof getPageData>;

const getPageInfo = () => (dispatch: any) => {
  dispatch(getPageData.request());
};
export default getPageInfo;
