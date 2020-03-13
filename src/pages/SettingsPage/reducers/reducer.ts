import writeFireBase from 'firebase/database/writeFireBase';
import { ActionTypes, createReducer, handleAction } from 'utils/functions/reduxActions';
import { getData } from '../actions/actionGetData/actionGetData';
import { PageProps, Option } from '../SettingsPage';

const initialState: PageProps & { message: string; status: 'loading' | 'success' | 'failure'} = {
  pageName: '',
  elements: [],
  slider: false,
  status: 'success',
  message: ''
};

const settingsReducers = createReducer<PageProps, ActionTypes<typeof getData> & any>(initialState, [
  handleAction('@getDataRequest', (state) => ({
    ...state,
    status: 'loading'
  })),
  handleAction('@getDataSuccess', (state, action) => {
    if(!!action.payload.elements) {
      return {
        ...state,
        elements: [...action.payload.elements],
        pageName: action.payload.pageName,
        slider: action.payload.slider,
        status: 'success'
      }
    }
    return {
      ...state,
      elements: [],
      status: 'success'
    }
  }),
  handleAction('@getDataFailure', (state) => ({
    ...state,
    status: 'failure',
    message: 'Error'
  })),
  handleAction('ADD_SECTION', (state, action) => {
    if(action.payload.index === 0 || action.payload.index) {
      const element: Option = {
        ...action.payload,
      }
      const newElement = [...state.elements.slice(0, action.payload.index + 1), {...element}, ...state.elements.slice(action.payload.index + 1, state.elements.length)]

      writeFireBase({
        ...state,
        elements: [...newElement]
      });
      
      return {
        ...state,
        elements: [...newElement]
      }
    }
    else {
      writeFireBase({
        ...state,
        elements: [...state.elements].concat(action.payload)
      });

      return {
        ...state,
        elements: [...state.elements].concat(action.payload)
      };
    }
  }),
  handleAction('DELETE_SECTION', (state, action) => {
    const { elements } = state;
    const newElement = elements.filter(element => action.payload.sectionId !== element.sectionId);
    writeFireBase({...state, elements: [...newElement]});
    return {
      ...state,
      elements: [...newElement]
    };
  }),
  handleAction('MOVE_SECTION', (state, action) => {
    return {
      ...state,
      elements: [...action.payload.elements]
    };
  }),
  handleAction('MOVE_UP_SECTION', (state, action) => {
    if(action.payload.nowIndex > 0) {
      const nowIndex = action.payload.nowIndex;
      const prevIndex = nowIndex - 1;
      const nowElement = state.elements[nowIndex];
      const prevElement = state.elements[prevIndex];
      const newElements = [...state.elements.slice(0, prevIndex), nowElement, prevElement, ...state.elements.slice(nowIndex + 1, state.elements.length)];

      return {
        ...state,
        elements: [...newElements]
      }
    }
    return {
      ...state,
    }
  }),
  handleAction('MOVE_DOWN_SECTION', (state, action) => {
    if(action.payload.nowIndex < state.elements.length) {
      const nowIndex = action.payload.nowIndex;
      const nextIndex = nowIndex + 1;
      const nowElement = state.elements[nowIndex];
      const nextElement = state.elements[nextIndex];
      const newElements = [...state.elements.slice(0, nowIndex), nextElement, nowElement, ...state.elements.slice(nextIndex + 1, state.elements.length)];
      
      return {
        ...state,
        elements: [...newElements]
      }
    }
    return {
      ...state,
    }
  }),
  handleAction('CHANGE_INPUT', (state, action) => {
    const { nowIndex, value, fieldName} = action.payload;
    const elementChange = Object.assign({}, state.elements[nowIndex]);
    const newElement = fieldName === 'title' ? 
    {
      ...elementChange,
      mainTitle: value
    } : 
    {
      ...elementChange,
      text: value
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndex), { ...newElement }, ...state.elements.slice(nowIndex + 1, state.elements.length)]
    }
  }),
  handleAction('CHANGE_RADIO', (state, action) => {
    const { nowIndex, value, fieldName} = action.payload;
    const elementChange = Object.assign({}, state.elements[nowIndex]);
    const newElement = fieldName === 'align title' ? 
    {
      ...elementChange,
      alignMainTitle: value
    } : 
    {
      ...elementChange,
      alignText: value
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndex), { ...newElement }, ...state.elements.slice(nowIndex + 1, state.elements.length)]
    }
  }),
  handleAction('CHANGE_CHECKBOX', (state, action) => {
    const { nowIndex, value, fieldName} = action.payload;
    const elementChange = Object.assign({}, state.elements[nowIndex]);
    const newElement = fieldName === 'slider' ? 
    {
      ...elementChange,
      slider: !elementChange.slider
    } : 
    {
      ...elementChange,
    };
    
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndex), { ...newElement }, ...state.elements.slice(nowIndex + 1, state.elements.length)]
    }
  })
]);


export { settingsReducers };

