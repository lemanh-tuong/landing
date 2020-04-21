import mockUpMacContent2 from 'assets/img/heroslider/2.jpg';
import mockUpMacContent1 from 'assets/img/heroslider/3.jpg';
import previewSection1 from 'assets/img/section/section1.png';
import previewSection2 from 'assets/img/section/section2.png';
import previewSection3 from 'assets/img/section/section3.png';
import previewSection4 from 'assets/img/section/section4.png';
import icon1 from 'assets/img/web_icons/paid-listings.svg';
import { ActionTypes, createReducer, handleAction } from 'utils/functions/reduxActions';
import { ActionGetComponentSuccess, getDataComponent } from '../actions/actionGetComponent/actionGetComponent';

export type ComponentPageReducers = {
  readonly statusRequestComponentPage: 'loading' | 'success' | 'failure';
  readonly messageRequestComponentPage: string;
  readonly patternComponent: ActionGetComponentSuccess[];
};

const defaultTitle = 'Build any type of directory with the fastest and easiest for wordpress';
const defaultText = 'Create unlimited directory types, our tool also lest you design functionality and features for each of them.';

const initialState: ComponentPageReducers =  {
  statusRequestComponentPage: 'loading',
  messageRequestComponentPage: '',
  patternComponent: [
    {
      previewImg: previewSection1,
      sectionName: 'Section 1',
      mainTitle: defaultTitle,
      alignMainTitle: 'left',
      colorMainTitle: 'white',
      classMainTitle: '',
      fontSizeMainTitle: 'md',
      styleMainTitle: {},
      text: defaultText,
      alignText: 'left',
      colorText: 'white',
      fontSizeText: 'md',
      classText: '',
      styleText: {},
      darkMode: false,
      sliderImgs: [
        {
          imgSrc: mockUpMacContent1,
          hasVideo: true,
          videoUrl: 'https://www.youtube.com/watch?v=IG8Naq7Q2Q8&list=RDwfqHeahpNSY&index=13'
        },
        {
          imgSrc: mockUpMacContent2,
          hasVideo: true,
          videoUrl: 'https://www.youtube.com/'
        }
      ]
    },
    {
      previewImg: previewSection2,
      sectionName: 'Section 2',
      mainTitle: 'Title 2',
      alignMainTitle: 'center',
      colorMainTitle: 'black-3',
      classMainTitle: '',
      fontSizeMainTitle: 'md',
      styleMainTitle: {},
      text: 'Text',
      alignText: 'left',
      colorText: 'black-3',
      fontSizeText: 'md',
      classText: '',
      styleText: {},
      darkMode: false,
      cards: [
        { titleCard: 'Paid listings', textCard: 'Listing owners will pay to get theirs places listed on your site. In Wilcity, you can create unlimited Pricing Plans, each of which includes different benefits.', iconImg: { imgSrc: icon1 }, hasIcon: true, bgColorIcon: 'gradient-pink-orange' },
        { titleCard: 'Promoted listing', textCard: 'Choosing a promotion plan, listing owners will have directories appeared at the special spots on your site and at the top of the search result page.', iconImg: { imgSrc: icon1 }, hasIcon: true, bgColorIcon: 'gradient-pink-orange' },
        { titleCard: 'Paid claim listings', textCard: 'Another revenue model to monetize from listing. You can create a listing on your site and allow the listing owner to claim it.', iconImg: { imgSrc: icon1 }, hasIcon: true, bgColorIcon: 'gradient-pink-orange' },
      ],
    },
    {
      previewImg: previewSection3,
      sectionName: 'Section 3',
      mainTitle: 'Title 3',
      alignMainTitle: 'left',
      colorMainTitle: 'black-3',
      classMainTitle: '',
      fontSizeMainTitle: 'md',
      styleMainTitle: {},
      text: 'Comes with power of Wiloke Tools, you can add unlimited directory types to your site. The tool also lets you design functionality and features. That’s why we give you our promise: Quisque amet consectetur, egestas nulla at nisi cursus, sed iaculis est commodo, nulla lacus aliquet.',
      alignText: 'center',
      colorText: 'black-3',
      fontSizeText: 'md',
      classText: '',
      styleText: {},
      darkMode: false,
      hasDivider: true,
    },
    {
      previewImg: previewSection4,
      sectionName: 'Section 4',
      mainTitle: 'Perfect customer dashboard',
      alignMainTitle: 'center',
      colorMainTitle: 'black-3',
      classMainTitle: '',
      fontSizeMainTitle: 'md',
      styleMainTitle: {},
      text: 'The listing owners can take full control of their business from Customer Dashboard. Here they can upgrade plans, run promotion campains, reply to messages, track the statistics of views, favorites, shares, reviews.',
      alignText: 'left',
      colorText: 'black-3',
      fontSizeText: 'md',
      classText: '',
      styleText: {},
      darkMode: false,
    },
  ],
}

const componentPageReducers = createReducer<ComponentPageReducers, ActionTypes<typeof getDataComponent>>(initialState, [
  handleAction('@getDataComponentFailure', state => ({
    ...state,
    statusRequestComponentPage: 'loading'
  })),
  handleAction('@getDataComponentSuccess', (state, action) => {
    if(action.payload) {
      return {
        ...state,
        statusRequestComponentPage: 'success',
        patternComponent: state.patternComponent.concat(action.payload)
      }
    }
    return {
      ...state,
      statusRequestComponentPage: 'success'
    }

  }),
  handleAction('@getDataComponentFailure', (state, action) => {
    return {
      ...state,
      statusRequestComponentPage: 'failure',
      messageRequestComponentPage: action.payload
    }
  })
])

export { componentPageReducers };

