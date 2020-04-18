import { PageAction, PageState } from 'api/PageType';
import { createReducer, handleAction } from 'utils/functions/reduxActions';

const initialState: PageState = {
  status: 'success',
  pageName: '',
  section: [{
    sectionType: '1',
    imgSrc: '',
    text: '',
  }]
};


export const page = createReducer<PageState, PageAction>(initialState, [
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
