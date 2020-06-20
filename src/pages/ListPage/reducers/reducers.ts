import { createReducer, handleAction } from 'utils/functions/reduxActions';
import { PageGeneralData } from '../ListPageType/type';

export interface ListPageReducers {
  statusRequest: 'loading' | 'success' | 'failure';
  statusDeletePage: 'deleting' | 'deleted' | 'deleteFail';
  statusCreatePage: 'creating' | 'created' | 'createFail';
  statusDuplicatePage: 'duplicating' | 'duplicated' | 'duplicateFail';
  statusChangeGeneralDataPage: 'changing' | 'changed' | 'changeFail';
  data: PageGeneralData[];
  messageRequestErr: string;
}

const initialState: ListPageReducers = {
  data: [],
  statusRequest: 'loading',
  statusChangeGeneralDataPage: 'changed',
  statusCreatePage: 'created',
  statusDeletePage: 'deleted',
  statusDuplicatePage: 'duplicated',
  messageRequestErr: '',
};

const listPageReducers = createReducer<ListPageReducers, any>(initialState, [
  handleAction('@getListPageNameRequest', state => ({
    ...state,
    statusRequest: 'loading',
  })),
  handleAction('@getListPageNameSuccess', (state, action) => ({
    ...state,
    statusRequest: 'success',
    data: action.payload ?? [],
  })),
  handleAction('@getListPageNameFailure', (state, action) => ({
    ...state,
    statusRequest: 'failure',
    messageRequestErr: action.payload,
  })),
  handleAction('@creatingPage', state => ({
    ...state,
    statusCreatePage: 'creating',
  })),
  handleAction('@createdPage', (state, action) => ({
    ...state,
    data: action.payload || [],
    statusCreatePage: 'created',
  })),
  handleAction('@createFail', (state, action) => ({
    ...state,
    messageRequestErr: action.payload,
    statusCreatePage: 'createFail',
  })),
  handleAction('@deleting', state => ({
    ...state,
    statusDeletePage: 'deleting',
  })),
  handleAction('@deleted', (state, action) => {
    const { data } = state;
    const newData = [...data.slice(0, action.payload), ...data.slice(action.payload + 1, data.length)];
    return {
      ...state,
      data: [...newData],
      statusDeletePage: 'deleted',
    };
  }),
  handleAction('@deleteFail', state => ({
    ...state,
    statusDeletePage: 'deleteFail',
  })),
  handleAction('@dulicating', state => ({
    ...state,
    statusDuplicatePage: 'duplicating',
  })),
  handleAction('@duplicated', (state, action) => {
    return {
      ...state,
      data: [...action.payload] || [],
      statusDuplicatePage: 'duplicated',
    };
  }),
  handleAction('@duplicateFail', (state, action) => ({
    ...state,
    statusDuplicatePage: 'duplicateFail',
    messageRequestErr: action.payload,
  })),
  handleAction('@changing', state => ({
    ...state,
    statusChangeGeneralDataPage: 'changing',
  })),
  handleAction('@changed', (state, action) => {
    return {
      ...state,
      statusChangeGeneralDataPage: 'changed',
      data: [...action.payload],
    };
  }),
  handleAction('@changeFail', (state, action) => ({
    ...state,
    statusChangeGeneralDataPage: 'changeFail',
    messageRequestErr: action.payload,
  })),
]);

export default listPageReducers;
