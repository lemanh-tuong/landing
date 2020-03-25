import { ItemSideBar } from '../components/SideBar/SideBar';
import { createReducer, handleAction, ActionTypes } from 'utils/functions/reduxActions';
import icon1 from 'assets/img/web_icons/paid-listings.svg';
import { getDataSideBar } from '../actions/actionGetDataSideBar/actionGetDataSideBar';

export type SideBarReducers = {
  statusRequestSideBar: 'loading' | 'success' | 'failure';
  messageRequestSideBar: string;
  patternSection: ItemSideBar[];
};

const defaultTitle = 'Build any type of directory with the fastest and easiest for wordpress';
const defaultText = 'Create unlimited directory types, our tool also lest you design functionality and features for each of them.';

const initialState: SideBarReducers =  {
  statusRequestSideBar: 'loading',
  messageRequestSideBar: '',
  patternSection: [
    {
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
      id: 'Btn Section 1',
    },
    {
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
      id: 'Btn Section 2',
      cards: [
        { titleCard: 'Paid listings', textCard: 'Listing owners will pay to get theirs places listed on your site. In Wilcity, you can create unlimited Pricing Plans, each of which includes different benefits.', iconImg: { imgSrc: icon1 }, hasIcon: true, bgColorIcon: 'gradient-pink-orange' },
        { titleCard: 'Promoted listing', textCard: 'Choosing a promotion plan, listing owners will have directories appeared at the special spots on your site and at the top of the search result page.', iconImg: { imgSrc: icon1 }, hasIcon: true, bgColorIcon: 'gradient-pink-orange' },
        { titleCard: 'Paid claim listings', textCard: 'Another revenue model to monetize from listing. You can create a listing on your site and allow the listing owner to claim it.', iconImg: { imgSrc: icon1 }, hasIcon: true, bgColorIcon: 'gradient-pink-orange' },
      ],
    },
    {
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
      id: 'Btn Section 3'
    },
    {
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
      id: 'Btn Section 4'
    },
  ],
}

const sidebarReducers = createReducer<SideBarReducers, ActionTypes<typeof getDataSideBar>>(initialState, [
  handleAction('@getDataSidebarRequest', state => ({
    ...state,
    statusRequestSideBar: 'loading'
  })),
  handleAction('@getDataSidebarSuccess', (state, action) => {
    if(action.payload) {
      return {
        ...state,
        statusRequestSideBar: 'success',
        patternSection: state.patternSection.concat(action.payload)
      }
    }
    return {
      ...state,
      statusRequestSideBar: 'success'
    }

  }),
  handleAction('@getDataSidebarFailure', (state, action) => {
    return {
      ...state,
      statusRequestSideBar: 'failure',
      messageRequestSideBar: action.payload
    }
  })
])

export { sidebarReducers };
