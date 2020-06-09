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
import icon3Card2 from 'assets/img/web_icons/quadrilateral.svg';
import icon2Card2 from 'assets/img/web_icons/triangle.svg';
import { TypeSlideSection5 } from 'components/Section5/Section5';
import { ActionTypes, createReducer, handleAction } from 'utils/functions/reduxActions';
import { getDataSideBar } from '../actions/actionsSideBar/actionGetDataSideBar/actionGetDataSideBar';
import { ItemSideBar } from '../components/SideBar/SideBar';

export interface SideBarReducers {
  readonly statusRequestSideBar: 'loading' | 'success' | 'failure';
  readonly messageRequestSideBar: string;
  readonly patternSection: (ItemSideBar & {previewImg: string})[];
}

const defaultTitle = 'Title is here';
const defaultText = 'Text is here';
const defaultButton = 'Button';

const initialState: SideBarReducers =  {
  statusRequestSideBar: 'loading',
  messageRequestSideBar: '',
  patternSection: [
    {
      previewImg: previewSection1,
      backgroundColor: `linear-gradient(90deg, rgb(249, 120, 95) 0%,rgb(240, 98, 146)  100%)`,
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
      textButton: defaultButton,
      typeButton: 'white',
      hrefButton: '##',
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
      ],
      typeMockUp: 'Mac'
    },
    {
      previewImg: previewSection2,
      backgroundColor: `rgba(245, 245, 245)`,
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
      id: 'Btn Section 2',
      cards: [
        { titleCard: defaultTitle, textCard: defaultText, iconImg: { imgSrc: icon1 }, hasIcon: true, bgColorIcon: 'gradient-pink-orange', alignIcon: 'center', alignText: 'center', alignTitleCard: 'center' },
        { titleCard: defaultTitle, textCard: defaultText, iconImg: { imgSrc: icon1 }, hasIcon: true, bgColorIcon: 'gradient-pink-orange', alignIcon: 'center', alignText: 'center', alignTitleCard: 'center' },
        { titleCard: defaultTitle, textCard: defaultText, iconImg: { imgSrc: icon1 }, hasIcon: true, bgColorIcon: 'gradient-pink-orange', alignIcon: 'center', alignText: 'center', alignTitleCard: 'center' },
      ],
    },
    {
      previewImg: previewSection3,
      sectionName: 'Section 3',
      animation: true,
      positionAnimation: 'left',
      mainTitle: defaultTitle,
      alignMainTitle: 'left',
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
      id: 'Btn Section 3',
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
      fontSizeMainTitle: 'lg',
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
      id: 'Btn Section 4'
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
      backgroundColor: 'linear-gradient(90deg, rgb(240, 98, 146) 0%, rgb(249, 120, 95) 100%)',
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
      draggable: true,
      darkMode: false,
      id: 'Btn Section 5'
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
      id: 'Btn Section 6'
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
      rateList: [
        {
          authorAvatar: {
            imgSrc: authorAvatar,
            href: '##'
          },
          authorName: 'SergeyX',
          purpose: 'Feature availability',
          rateContent: 'Only five stars! and this despite the fact that the topic is still under improvement. I hope future updates will help her become even better. A great team with a great idea of the catalog.',
          stars: 5,
        },
        {
          authorAvatar: {
            imgSrc: authorAvatar,
            href: '##'
          },
          authorName: 'Kalitegroup',
          purpose: 'Flexibility',
          rateContent: `Hello there I've used 4-5 directory listing scripts until now. Wilcity gives the impression that they will be the most beautiful in them. I bought a second license for support. I hope they continue without losing their excitement.`,
          stars: 5,
        },
        {
          authorAvatar: {
            imgSrc: authorAvatar,
            href: '##'
          },
          authorName: 'Dodghz',
          purpose: 'Customer support',
          rateContent: `I am very happy not only with the theme, but also with the customer support received from the Wilcity team. Support tickets are responded to quickly and the team work hard to answer questions or fix small problems.`,
          stars: 5,
        }
      ],
      hrefButton: '##',
      textButton: defaultButton,
      darkMode: false,
      id: 'Btn Section 7'
    },
    {
      previewImg: previewSection8,
      sectionName: 'Section 8',
      card2s:[
        {
          iconImg: {
            imgSrc: icon1Card2
          },
          alignIcon: 'left',
          bgColorIcon: 'transparent',
          sizeIcon: 'xs',
          titleCard: defaultTitle,
          alignTitleCard: 'left',
          textCard: defaultText,
          alignText: 'left',
        },
        {
          iconImg: {
            imgSrc: icon2Card2
          },
          alignIcon: 'left',
          bgColorIcon: 'transparent',
          sizeIcon: 'xs',
          titleCard: defaultTitle,
          alignTitleCard: 'left',
          textCard: defaultText,
          alignText: 'left',
        },
        {
          iconImg: {
            imgSrc: icon3Card2
          },
          alignIcon: 'left',
          bgColorIcon: 'transparent',
          sizeIcon: 'xs',
          titleCard: defaultTitle,
          alignTitleCard: 'left',
          textCard: defaultText,
          alignText: 'left',
        }
      ],
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
      styleText: {},
      hrefButton: '##',
      textButton: defaultButton,
      darkMode: false,
      typeButton: 'gradient',
      id: 'Btn Section 8'
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
      id: 'Btn Section 9',
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
      alignDivider: 'center',
      dividerColor: 'rgb(240, 98, 146)',
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
      id: 'Btn Section 10',
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
      id: 'Btn Section 11',
    },
    {
      previewImg: previewSection12,
      sectionName: 'Section 12',
      animation: true,
      sliderSection: [
        {
          imageSectionCol: { imgSrc: img1 },
          sectionId: '1',
          mainTitle: defaultTitle,
          alignMainTitle: 'left',
          hasDivider: true,
          dividerColor: '#000',
          reverse: true,
          text: defaultText,
        },
        {
          imageSectionCol: { imgSrc: img2 },
          sectionId: '2',
          mainTitle: defaultTitle,
          alignMainTitle: 'left',
          hasDivider: true,
          dividerColor: '#000',
          text: defaultText,
        },
      ],
      fluid: false,
      draggable: true,
      itemShow: 1,
      hasDots: true,
      dotClass: '',
      darkMode: false,
      id: 'Btn Section 12',
    },
    {
      previewImg: previewSection13,
      sectionName: 'Section 13',
      backgroundColor: 'linear-gradient(90deg, rgb(240, 98, 146) 0%, rgb(249, 120, 95) 100%)',
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
      typeMockUp: 'Iphone',
      id: 'Btn Section 13',
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
           target: 'blank'
        },
        {
          href: '##',
          imgSrc: chplay,
           target: 'blank'
        }
      ],
      darkMode: false,
      id: 'Btn Section 14',
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
      };
    }
    return {
      ...state,
      statusRequestSideBar: 'success'
    };

  }),
  handleAction('@getDataSidebarFailure', (state, action) => {
    return {
      ...state,
      statusRequestSideBar: 'failure',
      messageRequestSideBar: action.payload
    };
  })
]);

export { sidebarReducers };

