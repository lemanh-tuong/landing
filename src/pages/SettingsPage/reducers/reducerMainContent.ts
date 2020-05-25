import { ActionChangeAvatarAuthorPayload } from 'pages/ImageGalleryPage/actions/actionChangeAvatarAuthor/actionChangeAvatarAuthor';
import { ActionChangeIconImgInColPayload } from 'pages/ImageGalleryPage/actions/actionChangeIconInCol/actionChangeIconInCol';
import { PageGeneralData } from 'pages/ListPage/ListPageType/type';
import { ActionTypes, createReducer, handleAction } from 'utils/functions/reduxActions';
import { ActionChangeInputButton2Payload } from '../actions/actionButton2/actionChangeInputButton2/actionChangeInputButton2';
import { ActionChangeColorCard2TextPayload } from '../actions/actionCard2/actionChangeColorCard2Text/actionChangeColorCard2Text';
import { ActionChangeInputCard2Form } from '../actions/actionCard2/actionChangeInputCard2Form/actionChangeInputCard2Form';
import { ActionChangeRadioCard2Form } from '../actions/actionCard2/actionChangeRadioCard2Form/actionChangeRadioCard2Form';
import { ActionMoveCard2 } from '../actions/actionCard2/actionMoveCard2/actionMoveCard2';
import { ActionChangeColorCardTextPayload } from '../actions/actionsCard/actionChangeColorCardText/actionChangeColorCardText';
import { ActionChangeInputCardForm } from '../actions/actionsCard/actionChangeInputCardForm/actionChangeInputCardForm';
import { ActionChangeRadioCardForm } from '../actions/actionsCard/actionChangeRadioCardForm/actionChangeRadioCardForm';
import { ActionDeleteCard } from '../actions/actionsCard/actionDeleteCard/actionDeleteCard';
import { ActionMoveCard } from '../actions/actionsCard/actionMoveCard/actionMoveCard';
import { ActionDuplicateSectionPayload } from '../actions/actionSections/actionDuplicateSection/actionDuplicateSection';
import { getDataSection } from '../actions/actionSections/actionGetDataSection/actionGetDataSection';
import { ActionMoveDownSection } from '../actions/actionSections/actionMoveDownSection/actionMoveDownSection';
import { ActionMoveUpSection } from '../actions/actionSections/actionMoveUpSection/actionMoveUpSection';
import { ActionChangeCheckBox } from '../actions/actionsInFormSection/actionChangeCheckBox/actionChangeCheckBox';
import { ActionChangeColor } from '../actions/actionsInFormSection/actionChangeColor/actionChangeColor';
import { ActionChangeInput } from '../actions/actionsInFormSection/actionChangeInput/actionChangeInput';
import { ActionChangeRadio } from '../actions/actionsInFormSection/actionChangeRadio/actionChangeRadio';
import { ActionChangeSelectPayload } from '../actions/actionsInFormSection/actionChangeSelect/actionChangeSelect';
import { ActionAddSlide2Payload } from '../actions/actionSlide2/actionAddSlide2/actionAddSlide2';
import { ActionChangeCheckBoxSlide2Payload } from '../actions/actionSlide2/actionChangeCheckBoxSlide2/actionChangeCheckBoxSlide2';
import { ActionChangeColorSlide2Payload } from '../actions/actionSlide2/actionChangeColorSlide2/actionChangeColorSlide2';
import { ActionChangeImgSlide2Payload } from '../actions/actionSlide2/actionChangeImgSlide2/actionChangeImgSlide2';
import { ActionChangeInputSlide2Payload } from '../actions/actionSlide2/actionChangeInputSlide2/actionChangeInputSlide2';
import { ActionDeleteSlide2Payload } from '../actions/actionSlide2/actionDeleteSlide2/actionDeleteSlide2';
import { ActinChangeInputRateFormPayload } from '../actions/actionsRate/actionChangeInputRateForm/actionChangeInputRateForm';
import { ActionDeleteRatePayload } from '../actions/actionsRate/actionDeleteRate/actionDeleteRate';
import { ActionMoveRatePayload } from '../actions/actionsRate/actionMoveRate/actionMoveRate';
import { ActionAddSlidePayload } from '../actions/actionsSlide&MockUp/actionAddSlide/actionSlide';
import { ActionChangeHasVideoPayload } from '../actions/actionsSlide&MockUp/actionChangeHasVideo/actionChangeHasVideo';
import { ActionChangeHrefPayload } from '../actions/actionsSlide&MockUp/actionChangeHref/actionChangeHref';
import { ActionChangeTypeMockupPayload } from '../actions/actionsSlide&MockUp/actionChangeTypeMockup/actionChangeTypeMockup';
import { ActionChangeVideoUrlPayload } from '../actions/actionsSlide&MockUp/actionChangeVideoUrl/actionChangeVideoUrl';
import { ActionDeleteSlidePayload } from '../actions/actionsSlide&MockUp/actionDeleteSlide/actionDeleteSlide';
import { ActionResponsiveSlidesPayload } from '../actions/actionsSlide&MockUp/actionResponsiveSlides/actionResponsiveSlides';
import { Option } from '../SettingsPage';

export interface SettingMainContentReducers extends PageGeneralData {
  readonly elements: Option[];
  readonly statusRequestElements: 'loading' | 'success' | 'failure';
  readonly messageRequestElements: string;
}


const initialState: SettingMainContentReducers = {
  pageName: '',
  pathName: '',
  id: '',
  elements: [],
  statusRequestElements: 'loading',
  messageRequestElements: '',
};

const settingMainContentReducers = createReducer<SettingMainContentReducers, ActionTypes<typeof getDataSection> & any>(initialState, [
  handleAction('@getDataSectionRequest', (state) => ({
    ...state,
    statusRequestElements: 'loading'
  })),
  handleAction('@getDataSectionSuccess', (state, action) => {
    return {
      ...state,
      statusRequestElements: 'success',
      elements: action.payload && action.payload.elements ? [...action.payload.elements]: [],
      pageName: action.payload && action.payload.pageName ? action.payload.pageName : '',
      id: action.payload && action.payload.id ? action.payload.id : [],
      pathName: action.payload && action.payload.pathName ? action.payload.pathName : '',
    };
  }),
  handleAction('@getDataSectionFailure', (state) => ({
    ...state,
    statusRequestElements: 'failure',
    message: 'Error'
  })),

  // Handle Function In Section
  handleAction('ADD_SECTION', (state, action) => {
    const newElement: Option = Object.assign({}, action.payload);
    const { nowIndexSection } = action.payload;
    if(nowIndexSection === undefined) {
      return {
        ...state,
        elements: [...state.elements].concat(action.payload)
      };
    }
    if(nowIndexSection === 0) {
      return {
        ...state,
        elements: [{ ...newElement }, ...state.elements.slice(0, state.elements.length)]
      };
    } else {
      return {
        ...state,
        elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection, state.elements.length)]
      };
    }
  }),
  handleAction('DELETE_SECTION', (state, action) => {
    const { elements } = state;
    const newElement = elements.filter(element => action.payload.sectionId !== element.sectionId);
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
    const { nowIndexSection } = action.payload as ActionMoveUpSection['payload'];
    if(nowIndexSection > 0) {
      const nowIndex = nowIndexSection;
      const prevIndex = nowIndexSection - 1;
      const nowElement = state.elements[nowIndex];
      const prevElement = state.elements[prevIndex];
      const newElements = [...state.elements.slice(0, prevIndex), nowElement, prevElement, ...state.elements.slice(nowIndex + 1, state.elements.length)];

      return {
        ...state,
        elements: [...newElements]
      };
    }
    return {
      ...state,
    };
  }),
  handleAction('MOVE_DOWN_SECTION', (state, action) => {
    const { nowIndexSection } = action.payload as ActionMoveDownSection['payload'];
    if(nowIndexSection < state.elements.length - 1) {
      const nowIndex = nowIndexSection;
      const nextIndex = nowIndexSection + 1;
      const nowElement = state.elements[nowIndex];
      const nextElement = state.elements[nextIndex];
      const newElements = [...state.elements.slice(0, nowIndex), nextElement, nowElement, ...state.elements.slice(nextIndex + 1, state.elements.length)];

      return {
        ...state,
        elements: [...newElements]
      };
    }
    return {
      ...state,
    };
  }),
  handleAction('DUPLICATE_SECTION', (state, action) => {
    const {data, nowIndexSection} = action.payload as ActionDuplicateSectionPayload;
    const newElements = [...state.elements.slice(0, nowIndexSection + 1), {...data}, ...state.elements.slice(nowIndexSection + 1, state.elements.length)];
    return {
      ...state,
      elements: [...newElements]
    };
  }),

  // Handle Form Section
  handleAction('CHANGE_INPUT', (state, action) => {
    const { nowIndexSection, value, fieldName} = action.payload as ActionChangeInput['payload'];
    const elementChange = Object.assign({}, state.elements[nowIndexSection]);
    const newElement = {
      ...elementChange,
      [fieldName]: value
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),
  handleAction('CHANGE_RADIO', (state, action) => {
    const { nowIndexSection, value, fieldName} = action.payload as ActionChangeRadio['payload'];
    const elementChange = Object.assign({}, state.elements[nowIndexSection]);
    const newElement = {
      ...elementChange,
      [fieldName]: value
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),
  handleAction('CHANGE_CHECKBOX', (state, action) => {
    const { nowIndexSection, checked, fieldName} = action.payload as ActionChangeCheckBox['payload'];
    const elementChange = Object.assign({}, state.elements[nowIndexSection]);
    const newElement = {
      ...elementChange,
      [fieldName]: checked
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),
  handleAction('CHANGE_COLOR', (state, action) => {
    const { fieldName, color, nowIndexSection } = action.payload as ActionChangeColor['payload'];
    const nowElement = state.elements[nowIndexSection];
    const newElement = {
      ...nowElement,
      [fieldName]: color,
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),
  handleAction('CHOOSE_IMAGE', (state, action) => {
    const { fieldName, data, nowIndexSection } = action.payload; // as ActionChooseImagePayload;
    const nowElement = state.elements[nowIndexSection];
    const newElement = {
      ...nowElement,
      [fieldName]: data instanceof Array ? [...data] : {...data}
    };

    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),
  handleAction('CHANGE_SELECT', (state, action) => {
    const { fieldName, value, nowIndexSection } = action.payload as ActionChangeSelectPayload;
    const elementChange = Object.assign({}, state.elements[nowIndexSection]);
    const newElement = {
      ...elementChange,
      [fieldName]: value
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),

  handleAction('SAVE', state => {
    return {
      ...state,
    };
  }),

  // Handle Form Card2
  handleAction('CHANGE_INPUT_CARD_2_FORM', (state: any, action) => {
    const { fieldName, value, nowIndexSection, nowIndexCard } = action.payload as ActionChangeInputCard2Form['payload'];
    const nowElement = Object.assign({}, state.elements[nowIndexSection]);
    const nowCards = nowElement.card2s;
    const nowCard = nowCards?.[nowIndexCard];
    const newCard = nowCard ? {
      ...nowCard,
      [fieldName]: value
    } : {};
    const newElement = {
      ...nowElement,
      card2s: nowCards ? [...nowCards.slice(0, nowIndexCard), {...newCard}, ...nowCards.slice(nowIndexCard+1, nowCards.length)] : undefined
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),
  handleAction('CHANGE_RADIO_CARD_2_FORM', (state: any, action) => {
    const { fieldName, value, nowIndexSection, nowIndexCard } = action.payload as ActionChangeRadioCard2Form['payload'];
    const nowElement = Object.assign({}, state.elements[nowIndexSection]);
    const nowCards = nowElement.card2s;
    const nowCard = nowCards?.[nowIndexCard];
    const newCard = nowCard ? {
      ...nowCard,
      [fieldName]: value
    } : {};
    const newElement = {
      ...nowElement,
      card2s: nowCards ? [...nowCards.slice(0, nowIndexCard), {...newCard}, ...nowCards.slice(nowIndexCard+1, nowCards.length)] : undefined
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),
  handleAction('CHANGE_COLOR_CARD_2_TEXT', (state: any, action) => {
    const { fieldName, color, nowIndexSection, nowIndexCard } = action.payload as ActionChangeColorCard2TextPayload;
    const nowElement = Object.assign({}, state.elements[nowIndexSection]);
    const nowCards = nowElement.card2s;
    const nowCard = nowCards?.[nowIndexCard];
    const newCard = nowCard ? {
      ...nowCard,
      [fieldName]: color
    } : {};
    const newElement = {
      ...nowElement,
      card2s: nowCards ? [...nowCards.slice(0, nowIndexCard), {...newCard}, ...nowCards.slice(nowIndexCard+1, nowCards.length)] : undefined
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),
  handleAction('CHANGE_ICON_CARD_2', (state: any, action) => {
    const { iconImg, nowIndexSection, nowIndexCard } = action.payload; // as ActionChangeIconCard2Payload ;
    const nowElement = Object.assign({}, state.elements[nowIndexSection]);
    const nowCards = nowElement.card2s;
    const nowCard = nowCards?.[nowIndexCard];
    const newCard = nowCard ? {
      ...nowCard,
      iconImg: {...nowCard.iconImg, ...iconImg}
    } : {};
    const newElement = {
      ...nowElement,
      card2s: nowCards ? [...nowCards.slice(0, nowIndexCard), {...newCard}, ...nowCards.slice(nowIndexCard+1, nowCards.length)] : undefined
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),
  handleAction('MOVE_CARD_2', (state: any, action) => {
    const { newChild, nowIndexSection } = action.payload as ActionMoveCard2['payload'];
    const nowElement = state.elements[nowIndexSection];
    const newElement = {
      ...nowElement,
      card2s: [...newChild]
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),

  // Hanle Form Card
  handleAction('CHANGE_INPUT_CARD_FORM', (state, action) => {
    const { fieldName, value, nowIndexSection, nowIndexCard } = action.payload as ActionChangeInputCardForm['payload'];
    const nowElement = Object.assign({}, state.elements[nowIndexSection]);
    const nowCard = Object.assign({}, nowElement.cards instanceof Array ? nowElement.cards[nowIndexCard] : nowElement.cards);
    const newCard = {
      ...nowCard,
      [fieldName]: value
    };
    const newElement = {
      ...nowElement,
      cards: !!nowElement.cards ? [...nowElement.cards.slice(0, nowIndexCard), {...newCard}, ...nowElement.cards.slice(nowIndexCard + 1, nowElement.cards.length)] : []
    };

    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),
  handleAction('CHANGE_RADIO_CARD_FORM', (state, action) => {
    const { fieldName, value, nowIndexSection, nowIndexCard } = action.payload as ActionChangeRadioCardForm['payload'];
    const nowElement = Object.assign({}, state.elements[nowIndexSection]);
    const nowCard = Object.assign({}, nowElement.cards instanceof Array ? nowElement.cards[nowIndexCard] : nowElement.cards);
    const newCard = {
      ...nowCard,
      [fieldName]: value
    };
    const newElement = {
      ...nowElement,
      cards: !!nowElement.cards ? [...nowElement.cards.slice(0, nowIndexCard), {...newCard}, ...nowElement.cards.slice(nowIndexCard + 1, nowElement.cards.length)] : []
    };

    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),
  handleAction('CHANGE_COLOR_CARD_TEXT', (state, action) => {
    const { fieldName, color, nowIndexSection, nowIndexCard } = action.payload as ActionChangeColorCardTextPayload;
    const nowElement = state.elements[nowIndexSection];
    const nowCard = nowElement.cards?.[nowIndexCard];
    const newCard = {
      ...nowCard,
      [fieldName]: color
    };
    const newElement = {
      ...nowElement,
      cards: !!nowElement.cards ? [...nowElement.cards.slice(0, nowIndexCard), {...newCard}, ...nowElement.cards.slice(nowIndexCard + 1, nowElement.cards.length)] : []
    };

    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),
  handleAction('CHANGE_ICON_CARD', (state, action) => {
    const { fieldName, iconImg, nowIndexSection, nowIndexCard} = action.payload; // as ActionChangeIconCard['payload'];
    const nowElement = Object.assign({}, state.elements[nowIndexSection]);
    const nowCard = Object.assign({}, nowElement.cards?.[nowIndexCard]);
    const newCard = {
      ...nowCard,
      [fieldName]: iconImg
    };

    const newElement = {
      ...nowElement,
      cards: !!nowElement.cards ? [...nowElement.cards.slice(0, nowIndexCard), {...newCard}, ...nowElement.cards.slice(nowIndexCard + 1, nowElement.cards.length)] : []
    };

    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),
  handleAction('DELETE_CARD', (state, action) => {
    const { nowIndexSection, nowIndexCard } = action.payload as ActionDeleteCard['payload'];
    const nowElement = Object.assign({}, state.elements[nowIndexSection]);
    const newElement = {
      ...nowElement,
      cards: !!nowElement.cards ? [...nowElement.cards.slice(0, nowIndexCard), ...nowElement.cards.slice(nowIndexCard + 1, nowElement.cards.length)] : []
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),
  handleAction('ADD_CARD', (state, action) => {
    const { data, nowIndexSection, nowIndexCard } = action.payload; //as ActionAddCardPayLoad;
    const nowElement = state.elements[nowIndexSection];
    const newElement = nowIndexCard ? {
      ...nowElement,
      cards: !!nowElement.cards ? [...nowElement.cards.slice(0, nowIndexCard + 1), {...data}, ...nowElement.cards.slice(nowIndexCard + 1, nowElement.cards.length)] : [].concat(data)
    }
    : {
      ...nowElement,
      cards: !!nowElement.cards ? [...nowElement.cards].concat(data) : [].concat(data)
    };

    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),
  handleAction('MOVE_CARD', (state, action) => {
    const { newChild, nowIndexSection } = action.payload as ActionMoveCard['payload'];
    const nowElement = state.elements[nowIndexSection];
    const newElement = {
      ...nowElement,
      cards: [...newChild]
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),
  // MockUp & Slide
  handleAction('CHANGE_TYPE_MOCKUP', (state, action) => {
    const { nowIndexSection, typeMockUp } = action.payload as ActionChangeTypeMockupPayload;
    const elementChange = Object.assign({}, state.elements[nowIndexSection]);
    const newElement = {
      ...elementChange,
      typeMockUp: typeMockUp as 'Mac' | 'Iphone'
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),
  handleAction('CHANGE_VIDEO_URL', (state: any, action) => {
    const { newUrl, nowIndexSection, nowIndexSlide } = action.payload as ActionChangeVideoUrlPayload;
    const { elements } = state;
    const nowElement = elements[nowIndexSection];
    const nowSlide = nowElement.sliderImgs?.[nowIndexSlide];
    const newSlide = {
      ...nowSlide,
      videoUrl: newUrl
    };
    const newElement = {
      ...nowElement,
      sliderImgs: nowElement.sliderImgs
      ? [...nowElement.sliderImgs?.slice(0, nowIndexSlide), {...newSlide}, ...nowElement.sliderImgs?.slice(nowIndexSlide + 1, nowElement.sliderImgs?.length)]
      : null
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),
  handleAction('CHANGE_HAS_VIDEO', (state: any, action) => {
    const { nowIndexSection, nowIndexSlide, hasVideo} = action.payload as ActionChangeHasVideoPayload;
    const { elements } = state;
    const nowElement = elements[nowIndexSection];
    const nowSlide = nowElement.sliderImgs?.[nowIndexSlide];
    const newSlide = {
      ...nowSlide,
      hasVideo: hasVideo
    };
    const newElement = {
      ...nowElement,
      sliderImgs: nowElement.sliderImgs
      ? [...nowElement.sliderImgs?.slice(0, nowIndexSlide), {...newSlide}, ...nowElement.sliderImgs?.slice(nowIndexSlide + 1, nowElement.sliderImgs?.length)]
      : null
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),
  handleAction('CHANGE_IMAGE_SLIDE', (state, action) => {
    const { elements } = state;
    const { data, nowIndexSection, nowIndexSlide } = action.payload; // as ActionChangeImgSlidePayload;
    const nowElement = elements[nowIndexSection];
    if(typeof nowIndexSlide === 'number') {
      const nowSlide = nowElement.sliderImgs ? nowElement.sliderImgs?.[nowIndexSlide] : {};
      const newSlide = {
        ...nowSlide,
        imgSrc: data.imgSrc,
      };
      const newElement = {
        ...nowElement,
        sliderImgs: nowElement.sliderImgs ? [...nowElement.sliderImgs?.slice(0, nowIndexSlide), {...newSlide}, ...nowElement.sliderImgs?.slice(nowIndexSlide + 1, nowElement.sliderImgs.length)] : [{...newSlide}]
      };
      return {
        ...state,
        elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
      };
    }

    const newElement = {
      ...nowElement,
      sliderImgs: [...data]
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };

  }),
  handleAction('CHANGE_HREF', (state: any, action) => {
    const { href, nowIndexSection, nowIndexSlide } = action.payload as ActionChangeHrefPayload;
    const { elements } = state;
    const nowElement = elements[nowIndexSection];
    const nowSlide = nowElement.sliderImgs?.[nowIndexSlide];
    const newSlide = {
      ...nowSlide,
      href: href
    };
    const newElement = {
      ...nowElement,
      sliderImgs: nowElement.sliderImgs
      ? [...nowElement.sliderImgs?.slice(0, nowIndexSlide), {...newSlide}, ...nowElement.sliderImgs?.slice(nowIndexSlide + 1, nowElement.sliderImgs?.length)]
      : null
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),
  handleAction('DELETE_SLIDE', (state, action) => {
    const { nowIndexSection, nowIndexSlide } = action.payload as ActionDeleteSlidePayload;
    const { elements } = state;
    const nowElement = elements[nowIndexSection];
    const newSlides = nowElement.sliderImgs ? nowElement.sliderImgs.filter((_slide: any, index: any) => index !== nowIndexSlide) : [];
    const newElement = {
      ...nowElement,
      sliderImgs: [...newSlides]
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),
  handleAction('ADD_SLIDE', (state, action) => {
    const { nowIndexSection, nowIndexSlide, slideProperty } = action.payload as ActionAddSlidePayload;
    const nowElement = state.elements[nowIndexSection];
    const nowSlides = nowElement.sliderImgs;
    const newSlides = nowSlides ? [...nowSlides.slice(0, nowIndexSlide + 1), {...slideProperty}, ...nowSlides.slice(nowIndexSlide + 1, nowSlides.length)] : [{...slideProperty}];
    const newElement = {
      ...nowElement,
      sliderImgs: [...newSlides],
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),
  handleAction('RESPONSIVE_SLIDES', ( state, action) => {
    const { value, minWidth, nowIndexSection} = action.payload as ActionResponsiveSlidesPayload;
    const nowElement = state.elements[nowIndexSection];
    const nowResponsiveData = nowElement.responsive;
    const newResponsive = nowResponsiveData ? {
      ...nowResponsiveData,
      [minWidth]: value
    } : {
      [minWidth]: value
    };
    const newElement = {
      ...nowElement,
      responsive: {...newResponsive}
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),

  //Rate
  handleAction('ADD_RATE', (state, action) => {
    const { nowIndexSection, nowIndexRate, rateProperty } = action.payload; // as ActionAddRatePayload;
    const nowElement = state.elements[nowIndexSection];
    const nowRateList = nowElement.rateList;
    const newElement = {
      ...nowElement,
      rateList: nowRateList ? [...nowRateList.slice(0, nowIndexRate + 1), {...rateProperty}, ...nowRateList.slice(nowIndexRate + 1, nowRateList.length)] : [].concat(rateProperty)
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),
  handleAction('DELETE_RATE', (state, action) => {
    const { nowIndexSection, nowIndexRate } = action.payload as ActionDeleteRatePayload;
    const nowElement = Object.assign({}, state.elements[nowIndexSection]);
    const nowRateList = nowElement.rateList;
    const newElement = {
      ...nowElement,
      rateList: !!nowRateList ? [...nowRateList.slice(0, nowIndexRate), ...nowRateList.slice(nowIndexRate + 1, nowRateList.length)] : []
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),
  handleAction('CHANGE_INPUT_RATE_FORM', (state: any, action) => {
    const { nowIndexSection, nowIndexRate, fieldName, value} = action.payload as ActinChangeInputRateFormPayload;
    const nowElement = state.elements[nowIndexSection];
    const nowRateList = nowElement.rateList;
    const nowRate = nowRateList?.[nowIndexRate];
    const newRate = nowRate ? {
      ...nowRate,
      [fieldName]: value
    } : {};
    const newElement = {
      ...nowElement,
      rateList: nowRateList ? [...nowRateList.slice(0, nowIndexRate), {...newRate}, ...nowRateList.slice(nowIndexRate + 1, nowRateList.length)] : [],
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),
  handleAction('CHANGE_AVATAR_AUTHOR', (state: any, action) => {
    const { avatar, nowIndexSection, nowIndexRate} = action.payload as ActionChangeAvatarAuthorPayload;
    const nowElement = Object.assign({}, state.elements[nowIndexSection]);
    const nowListRate = nowElement.rateList;
    const nowRate = nowListRate?.[nowIndexRate];
    const nowAuthorAvatar = nowRate.authorAvatar;
    const newAuthorAvatar = {
      ...nowAuthorAvatar,
      imgSrc: avatar,
    };
    const newRate = nowRate ? {
      ...nowRate,
      authorAvatar: {...newAuthorAvatar}
    } : {};
    const newListRate = nowListRate ? [...nowListRate.slice(0, nowIndexRate), {...newRate}, ...nowListRate.slice(nowIndexRate + 1, nowListRate.length)] : [];
    const newElement = {
      ...nowElement,
      rateList: [...newListRate]
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),
  handleAction('MOVE_RATE', (state, action) => {
    const { data, nowIndexSection } = action.payload as ActionMoveRatePayload;
    const nowElement = state.elements[nowIndexSection];
    const newElement = {
      ...nowElement,
      rateList: [...data]
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),

  // Button2
  handleAction('CHANGE_INPUT_BUTTON_2', (state, action) => {
    const { fieldName, value, nowIndexSection, nowIndexButton } = action.payload as ActionChangeInputButton2Payload;
    const nowElement = state.elements[nowIndexSection];
    const nowListButtons = nowElement.buttons;
    const nowButton = nowListButtons?.[nowIndexButton];
    const newButton = nowButton ? {
      ...nowButton,
      [fieldName]: value
    } : {imgSrc: '', href: ''};
    const newListButtons = nowListButtons ? [...nowListButtons.slice(0, nowIndexButton), {...newButton}, ...nowListButtons.slice(nowIndexButton+1, nowListButtons.length)] : [];
    const newElement = {
      ...nowElement,
      buttons: [...newListButtons]
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),

  //IconImg In col
  handleAction('CHANGE_ICON_IN_COL', (state, action) => {
    const {iconImg, nowIndexSection} = action.payload as ActionChangeIconImgInColPayload;
    const nowElement = state.elements[nowIndexSection];
    const newElement = {
      ...nowElement,
      iconImg: {
        ...nowElement.iconImg,
        imgSrc: iconImg
      }
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),

  //Change Slide 2
  handleAction('CHANGE_CHECKBOX_SLIDE_2', (state: any, action) => {
    const { fieldName, checked, nowIndexSection, nowIndexSlide } = action.payload as ActionChangeCheckBoxSlide2Payload;
    const nowElement = state.elements[nowIndexSection];
    const nowSlides = nowElement.sliderSection;
    const nowSlideSection = nowSlides?.[nowIndexSlide];
    const newSlideSection = nowSlideSection ? {
      ...nowSlideSection,
      [fieldName]: checked,
    } : {};
    const newSlides = nowSlides ? [...nowSlides.slice(0, nowIndexSlide), {...newSlideSection}, ...nowSlides.slice(nowIndexSlide+1, nowSlides.length)] : [];
    const newElement = {
      ...nowElement,
      sliderSection: [...newSlides],
    };

    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),
  handleAction('CHANGE_INPUT_SLIDE_2', (state: any, action) => {
    const { fieldName, value, nowIndexSection, nowIndexSlide } = action.payload as ActionChangeInputSlide2Payload;
    const nowElement = state.elements[nowIndexSection];
    const nowSlides = nowElement.sliderSection;
    const nowSlideSection = nowSlides?.[nowIndexSlide];
    const newSlideSection = nowSlideSection ? {
      ...nowSlideSection,
      [fieldName]: value,
    } : {};
    const newSlides = nowSlides ? [...nowSlides.slice(0, nowIndexSlide), {...newSlideSection}, ...nowSlides.slice(nowIndexSlide+1, nowSlides.length)] : [];
    const newElement = {
      ...nowElement,
      sliderSection: [...newSlides],
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),
  handleAction('CHANGE_COLOR_SLIDE_2', (state: any, action) => {
    const { color, fieldName, nowIndexSection, nowIndexSlide } = action.payload as ActionChangeColorSlide2Payload;
    const nowElement = state.elements[nowIndexSection];
    const nowSlides = nowElement.sliderSection;
    const nowSlideSection = nowSlides?.[nowIndexSlide];
    const newSlideSection = nowSlideSection ? {
      ...nowSlideSection,
      [fieldName]: color,
    } : {};
    const newSlides = nowSlides ? [...nowSlides.slice(0, nowIndexSlide), {...newSlideSection}, ...nowSlides.slice(nowIndexSlide+1, nowSlides.length)] : [];
    const newElement = {
      ...nowElement,
      sliderSection: [...newSlides],
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),
  handleAction('CHANGE_IMAGE_SLIDE_2', (state: any, action) => {
    const { imgSrc, nowIndexSection, nowIndexSlide } = action.payload as ActionChangeImgSlide2Payload;
    const nowElement = state.elements[nowIndexSection];
    const nowSlides = nowElement.sliderSection;
    const nowSlide = nowSlides?.[nowIndexSlide];
    const nowImg = nowSlide ? nowSlide.imageSectionCol : {};
    const newImg = {
      ...nowImg,
      imgSrc: imgSrc
    };
    const newSlide = {
      ...nowSlide,
      imageSectionCol: {...newImg}
    };
    const newSlides = nowSlides ? [...nowSlides.slice(0, nowIndexSlide), { ...newSlide}, ...nowSlides.slice(nowIndexSlide + 1, nowSlides.length)] : [];
    const newElement = {
      ...nowElement,
      sliderSection: [...newSlides],
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),
  handleAction('DELETE_SLIDE_2', (state, action) => {
    const { nowIndexSection, nowIndexSlide } = action.payload as ActionDeleteSlide2Payload;
    const { elements } = state;
    const nowElement = elements[nowIndexSection];
    const nowSlides = nowElement.sliderSection;
    const newSlides = nowSlides ? [...nowSlides.slice(0, nowIndexSlide), ...nowSlides.slice(nowIndexSlide + 1, nowSlides.length)] : [];
    const newElement = {
      ...nowElement,
      sliderSection: [...newSlides],
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),
  handleAction('ADD_SLIDE_2', (state: any, action) => {
    const { nowIndexSection, nowIndexSlide, slideProperty } = action.payload as ActionAddSlide2Payload;
    const nowElement = state.elements[nowIndexSection];
    const nowSlides = nowElement.sliderSection;
    const newSlides = nowSlides ? [...nowSlides.slice(0, nowIndexSlide + 1), {...slideProperty}, ...nowSlides.slice(nowIndexSlide + 1, nowSlides.length)] : [{...slideProperty}];
    const newElement = {
      ...nowElement,
      sliderSection: [...newSlides],
    };
    return {
      ...state,
      elements: [...state.elements.slice(0, nowIndexSection), { ...newElement }, ...state.elements.slice(nowIndexSection + 1, state.elements.length)]
    };
  }),
]);


export { settingMainContentReducers };

