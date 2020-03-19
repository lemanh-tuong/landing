import writeFireBase from 'firebase/database/writeFireBase';
import { ActionTypes, createReducer, handleAction } from 'utils/functions/reduxActions';
import { getData } from '../actions/actionGetData/actionGetData';
import { Option } from '../SettingsPage';

export interface SettingsReducers {
  pageName: string;
  elements: Option[];
  statusRequestElements: 'loading' | 'success' | 'failure';
  messageRequestElements: string
}


const initialState: SettingsReducers = {
  pageName: '',
  elements: [],
  statusRequestElements: 'success',
  messageRequestElements: ''
};

const settingsReducers = createReducer<SettingsReducers, ActionTypes<typeof getData> & any>(initialState, [
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

  // Handle Function In Section
  handleAction('ADD_SECTION', (state, action) => {
    const { nowIndexSection } = action.payload;

    if(nowIndexSection === 0 || nowIndexSection) {
      const element: Option = {
        ...action.payload,
      }
      const newElement = [...state.elements.slice(0, nowIndexSection + 1), {...element}, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]

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
    const { nowIndexSection } = action.payload;
    if(nowIndexSection > 0) {
      const nowIndex = nowIndexSection;
      const prevIndex = nowIndexSection - 1;
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
    const { nowIndexSection } = action.payload;
    if(nowIndexSection < state.elements.length) {
      const nowIndex = nowIndexSection;
      const nextIndex = nowIndexSection + 1;
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

  // Handle Form Section
  handleAction('CHANGE_INPUT', (state, action) => {
    const { nowIndexSection, value, fieldName} = action.payload;
    const elementChange = Object.assign({}, state.elements[nowIndexSection]);
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
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    }
  }),
  handleAction('CHANGE_RADIO', (state, action) => {
    const { nowIndexSection, value, fieldName} = action.payload;
    const elementChange = Object.assign({}, state.elements[nowIndexSection]);
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
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    }
  }),
  handleAction('CHANGE_CHECKBOX', (state, action) => {
    const { nowIndexSection, result, fieldName} = action.payload;
    const elementChange = Object.assign({}, state.elements[nowIndexSection]);
    const newElement = fieldName === 'slider' ?
    {
      ...elementChange,
      slider: result
    } :
    {
      ...elementChange,
      hasDivider: result
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    }
  }),
  handleAction('CHANGE_COLOR', (state, action) => {
    const { fieldName, color, nowIndexSection } = action.payload;
    const nowElement = state.elements[nowIndexSection];
    const newElement = fieldName.includes('title') ? {
      ...nowElement,
      colorMainTitle: color,
    } : fieldName === 'divider color' ? {
      ...nowElement,
      dividerColor: color
    } : {
      ...nowElement,
      colorText: color,
    }
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    }
  }),
  handleAction('UPLOAD_FILE', (state, action) => {
    // const { path, newImgs, nowIndex } = action.payload;
    const { newImgs, nowIndexSection } = action.payload;
    const item = newImgs.map((imgUrl: string) => ({
      imgSrc: imgUrl,
      hasVideo: true,
      videoUrl: 'https://www.youtube.com/watch?v=IG8Naq7Q2Q8&list=RDwfqHeahpNSY&index=13'
    }))
    const nowElement = Object.assign({}, state.elements[nowIndexSection]);
    const newElement = {
      ...nowElement,
      data: item ? [].concat(item) : []
    }
    writeFireBase({
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    })
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    }
  }),
  handleAction('MOVE_CHILD', (state, action) => {
    const { newChild , nowIndexSection } = action.payload;
    const nowElement = state.elements[nowIndexSection];
    const newElement = {
      ...nowElement,
      cards: [...newChild]
    }
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    }
  }),
  handleAction("SAVE", (state, action) => {
    writeFireBase(state);
    return {
      ...state,
    }
  }),

  // Handle Form Card
  handleAction("CHANGE_INPUT_CARD_FORM", (state, action) => {
    const { fieldName, value, nowIndexSection, nowIndexCard } = action.payload;
    const nowElement = Object.assign({}, state.elements[nowIndexSection]);
    const nowCard = Object.assign({}, nowElement.cards instanceof Array ? nowElement.cards[nowIndexCard] : nowElement.cards);

    const newCard = fieldName === 'card title' ? {
      ...nowCard,
      titleCard: value
    } : {
      ...nowCard,
      textCard: value
    }

    const newElement = {
      ...nowElement,
      cards: !!nowElement.cards ? [...nowElement.cards.slice(0, nowIndexCard), {...newCard}, ...nowElement.cards.slice(nowIndexCard + 1, nowElement.cards.length)] : []
    }

    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    }
  }),
  handleAction("CHANGE_RADIO_CARD_FORM", (state, action) => {
    const { fieldName, value, nowIndexSection, nowIndexCard } = action.payload;
    const nowElement = Object.assign({}, state.elements[nowIndexSection]);
    const nowCard = Object.assign({}, nowElement.cards instanceof Array ? nowElement.cards[nowIndexCard] : nowElement.cards);

    const newCard = fieldName === 'align card title' ? {
      ...nowCard,
      alignTitleCard: value
    } : {
      ...nowCard,
      alignText: value
    }

    const newElement = {
      ...nowElement,
      cards: !!nowElement.cards ? [...nowElement.cards.slice(0, nowIndexCard), {...newCard}, ...nowElement.cards.slice(nowIndexCard + 1, nowElement.cards.length)] : []
    }

    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    }
  }),
  handleAction('CHANGE_ICON_CARD', (state, action) => {
    const { imgSrc, nowIndexSection, nowIndexCard} = action.payload;
    const nowElement = Object.assign({}, state.elements[nowIndexSection]);
    const nowCard = Object.assign({}, nowElement.cards instanceof Array ? nowElement.cards[nowIndexCard] : nowElement.cards);
    const newCard = {
      ...nowCard,
      iconImg: imgSrc
    }
    const newElement = {
      ...nowElement,
      cards: !!nowElement.cards ? [...nowElement.cards.slice(0, nowIndexCard), {...newCard}, ...nowElement.cards.slice(nowIndexCard + 1, nowElement.cards.length)] : []
    }

    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    }
  }),
  handleAction("DELETE_CARD", (state, action) => {
    const { nowIndexSection, nowIndexCard } = action.payload;
    console.log(nowIndexSection, nowIndexCard);

    const nowElement = Object.assign({}, state.elements[nowIndexSection]);
    const newElement = {
      ...nowElement,
      cards: !!nowElement.cards ? [...nowElement.cards.slice(0, nowIndexCard), ...nowElement.cards.slice(nowIndexCard + 1, nowElement.cards.length)] : []
    }
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    }
  }),
  handleAction('ADD_CARD', (state, action) => {
    const { data, nowIndexSection } = action.payload;

    const nowElement = state.elements[nowIndexSection];

    const newElement = {
      ...nowElement,
      cards: !!nowElement.cards ? [...nowElement.cards].concat(data) : [].concat(data)
    }

    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    }
  })
]);


export { settingsReducers };

