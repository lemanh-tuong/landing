import writeFireBase from 'firebase/database/writeFireBase';
import { ActionTypes, createReducer, handleAction } from 'utils/functions/reduxActions';
import { getDataSection } from '../actions/actionGetDataSection/actionGetDataSection';
import { Option } from '../SettingsPage';

export interface SettingMainContentReducers {
  readonly pageName: string;
  readonly elements: Option[];
  readonly statusRequestElements: 'loading' | 'success' | 'failure';
  readonly messageRequestElements: string
}


const initialState: SettingMainContentReducers = {
  pageName: '',
  elements: [],
  statusRequestElements: 'loading',
  messageRequestElements: '',
};

const settingMainContentReducers = createReducer<SettingMainContentReducers, ActionTypes<typeof getDataSection> & any>(initialState, [
  handleAction('@getDataSectionRequest', (state) => ({
    ...state,
    statusRequestElements: 'loading'
  })),
  handleAction('@getDataSectionSuccess', (state, action) => ({
    ...state,
    elements: !!action.payload.elements ? [...action.payload.elements] : [],
    pageName: action.payload.pageName,
    statusRequestElements: 'success'
  })),
  handleAction('@getDataSectionFailure', (state) => ({
    ...state,
    statusRequestElements: 'failure',
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
    if(nowIndexSection < state.elements.length - 1) {
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
    const newElement = {
      ...elementChange,
      [fieldName]: value
    }
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    }
  }),
  handleAction('CHANGE_RADIO', (state, action) => {
    const { nowIndexSection, value, fieldName} = action.payload;
    const elementChange = Object.assign({}, state.elements[nowIndexSection]);
    const newElement = {
      ...elementChange,
      [fieldName]: value
    }
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    }
  }),
  handleAction('CHANGE_CHECKBOX', (state, action) => {
    const { nowIndexSection, result, fieldName} = action.payload;
    const elementChange = Object.assign({}, state.elements[nowIndexSection]);
    const newElement = {
      ...elementChange,
      [fieldName]: result
    }
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    }
  }),
  handleAction('CHANGE_COLOR', (state, action) => {
    const { fieldName, color, nowIndexSection } = action.payload;
    const nowElement = state.elements[nowIndexSection];
    const newElement = {
      ...nowElement,
      [fieldName]: color,
    }
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    }
  }),
  handleAction('CHOOSE_IMAGE', (state, action) => {
    const { fieldName, data, nowIndexSection } = action.payload;
    const nowElement = state.elements[nowIndexSection];
    const newElement = {
      ...nowElement,
      [fieldName]: data instanceof Array ? [...data] : {...data}
    }

    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    }
  }),
  // handleAction('UPLOAD_FILE', (state, action) => {
  //   // const { path, fieldName, newImgs, nowIndex } = action.payload;
  //   const { fieldName, newImgs, nowIndexSection } = action.payload;
  //   const item = fieldName === 'imgSrc' ? newImgs.map((imgUrl: string) => imgUrl) : newImgs.map((imgUrl: string) => ({
  //     imgSrc: imgUrl,
  //     hasVideo: true,
  //     videoUrl: 'https://www.youtube.com/watch?v=IG8Naq7Q2Q8&list=RDwfqHeahpNSY&index=13'
  //   }));
  //   const nowElement = Object.assign({}, state.elements[nowIndexSection]);
  //   const newElement = {
  //     ...nowElement,
  //     [fieldName]: item ? [].concat(item) : []
  //   }
  //   writeFireBase({
  //     ...state,
  //     elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
  //   })
  //   return {
  //     ...state,
  //     elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
  //   }
  // }),
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
    const newCard = {
      ...nowCard,
      [fieldName]: value
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
    const newCard = {
      ...nowCard,
      [fieldName]: value
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
  handleAction("CHANGE_COLOR_CARD_TEXT", (state, action) => {
    const { fieldName, color, nowIndexSection, nowIndexCard } = action.payload;
    const nowElement = state.elements[nowIndexSection];
    const nowCard = nowElement.cards?.[nowIndexCard];
    const newCard = {
      ...nowCard,
      [fieldName]: color
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
    const { fieldName, iconImg, nowIndexSection, nowIndexCard} = action.payload;
    const nowElement = Object.assign({}, state.elements[nowIndexSection]);
    const nowCard = Object.assign({}, nowElement.cards?.[nowIndexCard]);
    const newCard = {
      ...nowCard,
      [fieldName]: iconImg
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


export { settingMainContentReducers };

