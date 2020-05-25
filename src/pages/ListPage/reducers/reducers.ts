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
    data: state.data ? state.data.concat(action.payload) : [].concat(action.payload),
    statusCreatePage: 'created'
  })),
  handleAction('@createFail', (state, action) => ({
    ...state,
    messageRequestErr: action.payload,
    statusCreatePage: 'createFail'
  })),
  handleAction('@deleting', state => ({
    ...state,
    statusDeletePage: 'deleting'
  })),
  handleAction('@deleted', (state, action) => {
    const { data } = state;
    const newData = [...data.slice(0, action.payload), ...data.slice(action.payload + 1, data.length)];
    return {
      ...state,
      data: [...newData],
      statusDeletePage: 'deleted'
    };
  }),
  handleAction('@deleteFail', state => ({
    ...state,
    statusDeletePage: 'deleteFail'
  })),
  handleAction('@dulicating', state => ({
    ...state,
    statusDuplicatePage: 'duplicating'
  })),
  handleAction('@duplicated', (state, action) => {
    const { id, pageName, pathName } = action.payload;
    const { data } = state;
    const newData = data.concat({id, pathName, pageName});
    return {
      ...state,
      data: [...newData],
      statusDuplicatePage: 'duplicated'
    };
  }),
  handleAction('@duplicateFail', (state, action) => ({
    ...state,
    statusDuplicatePage: 'duplicateFail',
    messageRequestErr: action.payload
  })),
  handleAction('@changing', state => ({
    ...state,
    statusChangeGeneralDataPage: 'changing'
  })),
  handleAction('@changed', (state, action) => {
    const { pathName, pageName, id } = action.payload;
    const { data } = state;
    const indexNowPage = data.findIndex(item => item.id === id);
    const newData: PageGeneralData = {
      ...data[indexNowPage],
      pathName: pathName,
      pageName: pageName
    };
    return {
      ...state,
      statusChangeGeneralDataPage: 'changed',
      data: [...data.slice(0, indexNowPage), {...newData}, ...data.slice(indexNowPage+1, data.length)]
    };
  }),
  handleAction('@changeFail', (state, action) => ({
    ...state,
    statusChangeGeneralDataPage: 'changeFail',
    messageRequestErr: action.payload
  }))
]);

export default listPageReducers;
