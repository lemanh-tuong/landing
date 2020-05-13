import { createReducer, handleAction } from 'utils/functions/reduxActions';
import { PageGeneralData } from '../ListPageType/type';

export interface ListPageReducers {
  statusRequest: 'loading' | 'success' | 'failure';
  data: PageGeneralData[];
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
    data: action.payload ?? [],
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
  })),
  handleAction('@deleting', state => ({
    ...state
  })),
  handleAction('@deleted', (state, action) => {
    const { data } = state;
    const newData = [...data.slice(0, action.payload), ...data.slice(action.payload + 1, data.length)];
    return {
      ...state,
      data: [...newData]
    };
  }),
  handleAction('@deleteFail', state => ({
    ...state
  })),
  handleAction('@dulicating', state => ({
    ...state,
  })),
  handleAction('@duplicated', (state, action) => {
    const { id, pageName, pathName } = action.payload;
    const { data } = state;
    const newData = data.concat({id, pathName, pageName});
    return {
      ...state,
      data: [...newData]
    };
  }),
  handleAction('@duplicateFail', state => ({
    ...state
  }))
]);

export default listPageReducers;
