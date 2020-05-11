import { createReducer, handleAction } from 'utils/functions/reduxActions';

export interface ListPageReducers {
  statusRequest: 'loading' | 'success' | 'failure';
  data: string[];
  messageRequestErr: string;
  statusCreatePage?: 'creating' | 'created' | 'createFail';
}

const initialState: ListPageReducers = {
  data: [],
  statusRequest: 'loading',
  messageRequestErr: ''
};

const listPageReducers = createReducer<ListPageReducers, any>(initialState, [
  handleAction('@getListPageNameRequest', state => ({
    ...state,
    statusRequest: 'loading'
  })),
  handleAction('@getListPageNameSuccess', (state, action) => ({
    ...state,
    statusRequest: 'success',
    data: action.payload,
  })),
  handleAction('@getListPageNameFailure', (state, action) => ({
    ...state,
    statusRequest: 'failure',
    messageRequestErr: action.payload
  })),
  handleAction('@creatingPage', state => ({
    ...state,
    statusCreatePage: 'creating'
  })),
  handleAction('@createdPage', (state, action) => ({
    ...state,
    data: state.data ? state.data.concat(action.payload) : [].concat(action.payload)
  })),
  handleAction('@createFail', (state, action) => ({
    ...state,
    messageRequestErr: action.payload
  }))
]);

export default listPageReducers;
