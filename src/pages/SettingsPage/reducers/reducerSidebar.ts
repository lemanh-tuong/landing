import client4 from 'assets/img/client/showcase_01-icare-plus.vn.png';
import client from 'assets/img/client/showcase_02-baybusinessgroup.org.png';
import client3 from 'assets/img/client/showcase_03-zoptiks.com.png';
import client2 from 'assets/img/client/showcase_04-bodrumguru.com.png';
import mockUpMacContent2 from 'assets/img/heroslider/2.jpg';
import mockUpMacContent1 from 'assets/img/heroslider/3.jpg';
import previewSection1 from 'assets/img/section/section1.png';
import previewSection2 from 'assets/img/section/section2.png';
import previewSection3 from 'assets/img/section/section3.png';
import previewSection4 from 'assets/img/section/section4.png';
import previewSection5 from 'assets/img/section/section5.png';
import sectionImg1 from 'assets/img/settings/customize-single-listing-page-your-way.png';
import icon1 from 'assets/img/web_icons/paid-listings.svg';
import { TypeSlide } from 'components/Section5/Section5';
import { ActionTypes, createReducer, handleAction } from 'utils/functions/reduxActions';
import { getDataSideBar } from '../actions/actionGetDataSideBar/actionGetDataSideBar';
import { ItemSideBar } from '../components/SideBar/SideBar';

export type SideBarReducers = {
  readonly statusRequestSideBar: 'loading' | 'success' | 'failure';
  readonly messageRequestSideBar: string;
  readonly patternSection: (ItemSideBar & {previewImg: string})[];
};

const defaultTitle = 'Build any type of directory with the fastest and easiest for wordpress';
const defaultText = 'Create unlimited directory types, our tool also lest you design functionality and features for each of them.';

const initialState: SideBarReducers =  {
  statusRequestSideBar: 'loading',
  messageRequestSideBar: '',
  patternSection: [
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
      id: 'Btn Section 1',
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
      id: 'Btn Section 2',
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
      imageSectionCol: {
        imgSrc: sectionImg1
      },
      darkMode: false,
      id: 'Btn Section 3',
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
      imageSectionCol: {
        imgSrc: sectionImg1
      },
      darkMode: false,
      id: 'Btn Section 4'
    },
    {
      previewImg: previewSection5,
      sectionName: 'Section 5',
      mainTitle: "Who's using Wilcity",
      alignMainTitle: 'center',
      colorMainTitle: 'white',
      classMainTitle: '',
      fontSizeMainTitle: 'md',
      styleMainTitle: {},
      text: 'We’re honored some of the most talented creatives out there build with Wilcity',
      alignText: 'center',
      colorText: 'white',
      fontSizeText: 'md',
      classText: '',
      styleText: {},
      backgroundColor: 'gradient-pink-orange',
      sliderImgs: [
        {
          imgSrc: client,
          href: ''
        },
        {
          imgSrc: client2,
          href: ''
        },
        {
          imgSrc: client3,
          href: ''
        },
        {
          imgSrc: client4,
          href: ''
        }
      ] as TypeSlide[],
      darkMode: false,
      id: 'Btn Section 5'
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

