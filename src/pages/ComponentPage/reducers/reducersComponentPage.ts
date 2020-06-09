import client4 from 'assets/img/client/showcase_01-icare-plus.vn.png';
import client from 'assets/img/client/showcase_02-baybusinessgroup.org.png';
import client3 from 'assets/img/client/showcase_03-zoptiks.com.png';
import client2 from 'assets/img/client/showcase_04-bodrumguru.com.png';
import mockUpMacContent2 from 'assets/img/heroslider/2.jpg';
import mockUpMacContent1 from 'assets/img/heroslider/3.jpg';
import screen1 from 'assets/img/screens/1.png';
import screen2 from 'assets/img/screens/2.png';
import screen3 from 'assets/img/screens/3.png';
import screen4 from 'assets/img/screens/4.png';
import screen5 from 'assets/img/screens/5.png';
import screen6 from 'assets/img/screens/6.png';
import screen7 from 'assets/img/screens/7.png';
import screen8 from 'assets/img/screens/8.png';
import screen9 from 'assets/img/screens/9.png';
import previewSection1 from 'assets/img/section/section1.png';
import previewSection10 from 'assets/img/section/section10.png';
import previewSection11 from 'assets/img/section/section11.png';
import previewSection12 from 'assets/img/section/section12.png';
import previewSection13 from 'assets/img/section/section13.png';
import previewSection14 from 'assets/img/section/section14.png';
import previewSection2 from 'assets/img/section/section2.png';
import previewSection3 from 'assets/img/section/section3.png';
import previewSection4 from 'assets/img/section/section4.png';
import previewSection5 from 'assets/img/section/section5.png';
import previewSection6 from 'assets/img/section/section6.png';
import previewSection7 from 'assets/img/section/section7.png';
import previewSection8 from 'assets/img/section/section8.png';
import previewSection9 from 'assets/img/section/section9.png';
import img1 from 'assets/img/settings/advanced-rating-and-reviews.png';
import img2 from 'assets/img/settings/advanced-search-filters.png';
import sectionImg1 from 'assets/img/settings/customize-single-listing-page-your-way.png';
import appstore from 'assets/img/web_icons/app-store.png';
import authorAvatar from 'assets/img/web_icons/envato.svg';
import chplay from 'assets/img/web_icons/google-play.png';
import iconNotifycation from 'assets/img/web_icons/notification.svg';
import icon1 from 'assets/img/web_icons/paid-listings.svg';
import icon1Card2 from 'assets/img/web_icons/pentagon.svg';
import { CardProps } from 'components/Card/Card';
import { RateProps } from 'components/Rate/Rate';
import { TypeSlideSection5 } from 'components/Section5/Section5';
import { ActionTypes, createReducer, handleAction } from 'utils/functions/reduxActions';
import { ActionGetComponentSuccess, getDataComponent } from '../actions/actionGetComponent/actionGetComponent';

export interface ComponentPageReducers {
  readonly statusRequestComponentPage: 'loading' | 'success' | 'failure';
  readonly messageRequestComponentPage: string;
  readonly patternComponent: ActionGetComponentSuccess[];
}

const defaultTitle = 'Title is here';
const defaultText = 'Text is here';
const defaultButton = 'Button';
const defaultRate:RateProps ={
  authorAvatar: {
    imgSrc: authorAvatar,
    href: '##'
  },
  authorName: 'Author Name',
  purpose: 'Purpose',
  rateContent: 'Rate Content',
  stars: 5,
};
const defaultCard: CardProps = { titleCard: defaultTitle, textCard: defaultText, iconImg: { imgSrc: icon1 }, hasIcon: true, bgColorIcon: 'gradient-pink-orange' };
const defaultCard2: CardProps = {
  iconImg: {
    imgSrc: icon1Card2
  },
  alignIcon: 'left',
  bgColorIcon: 'transparent',
  sizeIcon: 'xs',
  titleCard: 'Mobile application performance',
  alignTitleCard: 'left',
  textCard: 'Making your mobile app work means that you try to provide as soon as possible, the same users can experience whatever the condition of the network.',
  alignText: 'left',
};

const initialState: ComponentPageReducers =  {
  statusRequestComponentPage: 'loading',
  messageRequestComponentPage: '',
  patternComponent: [
    {
      previewImg: previewSection1,
      backgroundColor: 'linear-gradient(90deg, rgb(249, 120, 95) 0%,rgb(240, 98, 146)  100%)',
      sectionName: 'Section 1',
      mainTitle: defaultTitle,
      alignMainTitle: 'left',
      colorMainTitle: 'white',
      classMainTitle: '',
      fontSizeMainTitle: 'lg',
      styleMainTitle: {},
      text: defaultText,
      alignText: 'left',
      colorText: 'white',
      classText: '',
      styleText: {},
      darkMode: false,
      textButton: defaultButton,
      hrefButton: '##',
      typeButton: 'white',
      animation: false,
      hasDivider: false,
      typeMockUp: 'Mac',
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
      animation: true,
      positionAnimation: 'left',
      sectionName: 'Section 2',
      mainTitle: defaultTitle,
      alignMainTitle: 'center',
      colorMainTitle: 'black-3',
      classMainTitle: '',
      fontSizeMainTitle: 'lg',
      styleMainTitle: {},
      darkMode: false,
      cards: [defaultCard, defaultCard, defaultCard],
    },
    {
      previewImg: previewSection3,
      animation: true,
      positionAnimation: 'left',
      sectionName: 'Section 3',
      mainTitle: defaultTitle,
      alignMainTitle: 'left',
      colorMainTitle: 'black-3',
      classMainTitle: '',
      fontSizeMainTitle: 'lg',
      styleMainTitle: {},
      text: defaultText,
      alignText: 'left',
      colorText: 'black-3',
      classText: '',
      styleText: {},
      imageSectionCol: {
        imgSrc: sectionImg1
      },
      darkMode: false,
      hasDivider: true,
      alignDivider: 'left',
    },
    {
      previewImg: previewSection4,
      sectionName: 'Section 4',
      animation: true,
      positionAnimation: 'left',
      mainTitle: defaultTitle,
      alignMainTitle: 'center',
      colorMainTitle: 'black-3',
      classMainTitle: '',
      styleMainTitle: {},
      text: defaultText,
      alignText: 'center',
      colorText: 'black-3',
      classText: '',
      styleText: {},
      imageSectionCol: {
        imgSrc: sectionImg1
      },
      textButton: defaultButton,
      hrefButton: '##',
      typeButton: 'gradient',
      colorTextButton: '#fff',
      darkMode: false,
    },
    {
      previewImg: previewSection5,
      sectionName: 'Section 5',
      mainTitle: defaultTitle,
      alignMainTitle: 'center',
      colorMainTitle: 'white',
      classMainTitle: '',
      fontSizeMainTitle: 'lg',
      styleMainTitle: {},
      text: defaultText,
      alignText: 'center',
      colorText: 'white',
      classText: '',
      styleText: {},
      backgroundColor: 'linear-gradient(90deg, rgb(250, 111, 152) 0%, rgb(255, 189, 55) 100%)',
      draggable: true,
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
      ] as TypeSlideSection5[],
      darkMode: false,
    },
    {
      previewImg: previewSection6,
      sectionName: 'Section 6',
      animation: true,
      backgroundColor: 'rgba(245, 245, 245)',
      mainTitle: defaultTitle,
      alignMainTitle: 'center',
      colorMainTitle: 'black-3',
      classMainTitle: '',
      fontSizeMainTitle: 'lg',
      styleMainTitle: {},
      hrefButton: '##',
      textButton: defaultButton,
      backgroundButton: `linear-gradient(90deg, rgb(240, 98, 146) 0%, rgb(249, 120, 95) 100%)`,
      colorTextButton: '#fff',
      darkMode: false,
    },
    {
      previewImg: previewSection7,
      sectionName: 'Section 7',
      animation: true,
      backgroundColor: 'rgba(245, 245, 245)',
      mainTitle: defaultTitle,
      alignMainTitle: 'center',
      colorMainTitle: 'black-3',
      classMainTitle: '',
      fontSizeMainTitle: 'lg',
      styleMainTitle: {},
      text: defaultText,
      colorText: 'rgba(0, 0, 0, 0.7)',
      alignText: 'center',
      classText: '',
      fontSizeText: 'sm',
      styleText: {},
      rateList: [defaultRate, defaultRate, defaultRate],
      hrefButton: '##',
      textButton: defaultButton,
      darkMode: false,
    },
    {
      previewImg: previewSection8,
      sectionName: 'Section 8',
      card2s:[defaultCard2, defaultCard2, defaultCard2 ],
      animation: true,
      backgroundColor: 'rgba(245, 245, 245)',
      mainTitle: defaultTitle,
      alignMainTitle: 'left',
      colorMainTitle: 'black-3',
      classMainTitle: '',
      fontSizeMainTitle: 'lg',
      styleMainTitle: {},
      hasDivider: true,
      dividerColor: 'rgb(240, 98, 146)',
      text: defaultText,
      colorText: 'rgba(0, 0, 0, 0.7)',
      alignText: 'left',
      classText: '',
      fontSizeText: 'sm',
      styleText: {},
      hrefButton: '##',
      textButton: 'Purchase now for 64$',
      typeButton: 'gradient',
      darkMode: false,
    },
    {
      previewImg: previewSection9,
      sectionName: 'Section 9',
      animation: false,
      backgroundColor: 'linear-gradient(90deg, rgb(116, 45, 228) 0%, rgb(89, 192, 255) 100%)',
      mainTitle: defaultTitle,
      alignMainTitle: 'left',
      colorMainTitle: '#fff',
      classMainTitle: '',
      fontSizeMainTitle: 'lg',
      styleMainTitle: {},
      hasDivider: true,
      dividerColor: '#fff',
      text: defaultText,
      colorText: '#fff',
      alignText: 'left',
      classText: '',
      fontSizeText: 'sm',
      styleText: {},
      buttons: [
        {
          href: '##',
          imgSrc: appstore,
          target: 'blank'
        },
        {
          href: '##',
          imgSrc: chplay,
          target: 'blank'
        }
      ],
      androidParams:'exp://expo.io/@wiloke/wilcity',
      iphoneParams:'exp://expo.io/@wiloke/wilcity',
      darkMode: false,
    },
    {
      previewImg: previewSection10,
      sectionName: 'Section 10',
      animation: true,
      positionAnimation: 'left',
      mainTitle: defaultTitle,
      alignMainTitle: 'center',
      classMainTitle: '',
      styleMainTitle: {},
      hasDivider: true,
      dividerColor: 'rgb(240, 98, 146)',
      alignDivider: 'center',
      imageSectionCol: {imgSrc: sectionImg1},
      text: defaultText,
      alignText: 'center',
      classText: '',
      fontSizeText: 'sm',
      styleText: {},
      hrefButton: '##',
      textButton: defaultButton,
      backgroundButton: `linear-gradient(90deg, rgb(240, 98, 146) 0%, rgb(249, 120, 95) 100%)`,
      colorTextButton: '#fff',
      darkMode: false,
    },
    {
      previewImg: previewSection11,
      sectionName: 'Section 11',
      animation: true,
      reverse: false,
      mainTitle: defaultTitle,
      alignMainTitle: 'left',
      classMainTitle: '',
      styleMainTitle: {},
      hasDivider: true,
      dividerColor: 'rgb(240, 98, 146)',
      imageSectionCol: {imgSrc: sectionImg1},
      text: defaultText,
      alignText: 'left',
      classText: '',
      styleText: {},
      iconImg: {
        imgSrc: iconNotifycation
      },
      darkMode: false,
    },
    {
      previewImg: previewSection12,
      sectionName: 'Section 12',
      animation: true,
      sliderSection: [
        {
          imageSectionCol: { imgSrc: img1 },
          sectionId: '1',
          mainTitle: 'App Term Boxes Settings',
          alignMainTitle: 'left',
          hasDivider: true,
          dividerColor: '#000',
          reverse: true,
          text: 'Insert Listing Locations and Listing Categories block to your app by using App Term Boxes shortcode.',
        },
        {
          imageSectionCol: { imgSrc: img2 },
          sectionId: '2',
          mainTitle: 'App Event Settings',
          alignMainTitle: 'left',
          hasDivider: true,
          dividerColor: '#000',
          text: 'Insert Listing Locations and Listing Categories block to your app by using App Term Boxes shortcode.',
        },
      ],
      fluid: false,
      itemShow: 1,
      hasDots: true,
      dotClass: '',
      darkMode: false,
    },
    {
      previewImg: previewSection13,
      sectionName: 'Section 13',
      backgroundColor: 'linear-gradient(90deg, rgb(240, 98, 146) 0%, rgb(249, 120, 95) 100%)',
      typeMockUp: 'Iphone',
      sliderImgs: [
        {imgSrc: screen1},
        {imgSrc: screen2},
        {imgSrc: screen3},
        {imgSrc: screen4},
        {imgSrc: screen5},
        {imgSrc: screen6},
        {imgSrc: screen7},
        {imgSrc: screen8},
        {imgSrc: screen9},
      ],
      draggable: true,
      mainTitle: defaultTitle,
      alignMainTitle: 'center',
      colorMainTitle: '#fff',
      text: defaultText,
      alignText: 'center',
      colorText: '#fff',
      fluid: true,
      margin: 30,
      itemShow: 1,
      darkMode: false,
    },
    {
      previewImg: previewSection14,
      backgroundColor: `linear-gradient(90deg, rgb(240, 98, 146) 0%, rgb(249, 120, 95) 100%)`,
      sectionName: 'Section 14',
      mainTitle: defaultTitle,
      alignMainTitle: 'left',
      colorMainTitle: 'white',
      classMainTitle: '',
      fontSizeMainTitle: 'lg',
      styleMainTitle: {},
      text: defaultText,
      alignText: 'left',
      colorText: 'white',
      fontSizeText: 'md',
      classText: '',
      styleText: {},
      buttons: [
        {
          href: '###',
          imgSrc: appstore,
           target: 'blank',
        },
        {
          href: '##',
          imgSrc: chplay,
           target: 'blank'
        }
      ],
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
      ],
      typeMockUp: 'Mac'
    },
  ],
};

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
      };
    }
    return {
      ...state,
      statusRequestComponentPage: 'success'
    };

  }),
  handleAction('@getDataComponentFailure', (state, action) => {
    return {
      ...state,
      statusRequestComponentPage: 'failure',
      messageRequestComponentPage: action.payload
    };
  })
]);

export { componentPageReducers };

