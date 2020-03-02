import { Page, PageAction } from 'api/Page';
import { createReducer, handleAction } from 'utils/functions/reduxActions';

const initialState: Page = {
  status: 'success',
  pageName: '',
  section: [{
    sectionType: '1',
    srcImg: ''
  }]
};


export const page = createReducer<Page, PageAction>(initialState, [
  handleAction('@getPageRequest', (state) => {
    return {
      ...state,
      status: 'loading'
    };
  }),
  handleAction('@getPageRequestSuccess', (state, action) => {
    return {
      ...state,
      status: 'success',
      pageName: action.payload.pageName,
      section: [...action.payload.section]
    };
  }),
  handleAction('@getPageRequestFailure', (state) => {
    return {
      ...state,
      status: 'failure',
      pageName: '',
      section: [],
    };
  })
]);
