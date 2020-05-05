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

const defaultTitle = 'Build any type of directory with the fastest and easiest for wordpress';
const defaultText = 'Create unlimited directory types, our tool also lest you design functionality and features for each of them.';

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
      fontSizeMainTitle: 'md',
      styleMainTitle: {},
      text: defaultText,
      alignText: 'left',
      colorText: 'white',
      fontSizeText: 'md',
      classText: '',
      styleText: {},
      textButton: 'Try demo',
      colorTextButton: 'rgba(0, 0, 0, 0.8)',
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
      fontSizeMainTitle: 'lg',
      styleMainTitle: {},
      text: 'Comes with power of Wiloke Tools, you can add unlimited directory types to your site. The tool also lets you design functionality and features. That’s why we give you our promise: Quisque amet consectetur, egestas nulla at nisi cursus, sed iaculis est commodo, nulla lacus aliquet.',
      alignText: 'center',
      colorText: 'black-3',
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
      animation: true,
      positionAnimation: 'left',
      mainTitle: 'Perfect customer dashboard',
      alignMainTitle: 'center',
      colorMainTitle: 'black-3',
      classMainTitle: '',
      fontSizeMainTitle: 'md',
      styleMainTitle: {},
      text: 'The listing owners can take full control of their business from Customer Dashboard. Here they can upgrade plans, run promotion campains, reply to messages, track the statistics of views, favorites, shares, reviews.',
      alignText: 'center',
      colorText: 'black-3',
      fontSizeText: 'md',
      classText: '',
      styleText: {},
      imageSectionCol: {
        imgSrc: sectionImg1
      },
      textButton: 'Purchase now for 64$',
      hrefButton: '##',
      typeButton: 'gradient',
      colorTextButton: '#fff',
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
      darkMode: false,
      id: 'Btn Section 5'
    },
    {
      previewImg: previewSection6,
      sectionName: 'Section 6',
      animation: true,
      backgroundColor: 'rgba(245, 245, 245)',
      mainTitle: 'Buil any type of directory with the fastest and easiest fo app',
      alignMainTitle: 'center',
      colorMainTitle: 'black-3',
      classMainTitle: '',
      fontSizeMainTitle: 'md',
      styleMainTitle: {},
      hrefButton: '##',
      textButton: 'Purchase now for 64$',
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
      mainTitle: 'Trusted by over 6600 users',
      alignMainTitle: 'center',
      colorMainTitle: 'black-3',
      classMainTitle: '',
      fontSizeMainTitle: 'md',
      styleMainTitle: {},
      text: "See what customers're saying about our services",
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
      textButton: 'Purchase now for 64$',
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
          titleCard: 'Mobile application performance',
          alignTitleCard: 'left',
          textCard: 'Making your mobile app work means that you try to provide as soon as possible, the same users can experience whatever the condition of the network.',
          alignText: 'left',
        },
        {
          iconImg: {
            imgSrc: icon2Card2
          },
          alignIcon: 'left',
          bgColorIcon: 'transparent',
          sizeIcon: 'xs',
          titleCard: 'React native application',
          alignTitleCard: 'left',
          textCard: 'Publish your app to Apple App Store and Google Play Store using our easy publishing wizard with just a few clicks.',
          alignText: 'left',
        },
        {
          iconImg: {
            imgSrc: icon3Card2
          },
          alignIcon: 'left',
          bgColorIcon: 'transparent',
          sizeIcon: 'xs',
          titleCard: 'Geo listings',
          alignTitleCard: 'left',
          textCard: 'List your listings by location, allowing app users to search for those closest to them.',
          alignText: 'left',
        }
      ],
      animation: true,
      backgroundColor: 'rgba(245, 245, 245)',
      mainTitle: 'Our provided features',
      alignMainTitle: 'left',
      colorMainTitle: 'black-3',
      classMainTitle: '',
      fontSizeMainTitle: 'lg',
      styleMainTitle: {},
      hasDivider: true,
      dividerColor: 'rgb(240, 98, 146)',
      text: 'Easily build hero section with King Composer - Drag Drop Page Builder - right on your website. We also support secondary navigator menu.',
      colorText: 'rgba(0, 0, 0, 0.7)',
      alignText: 'left',
      classText: '',
      styleText: {},
      hrefButton: '##',
      textButton: 'Purchase now for 64$',
      darkMode: false,
      id: 'Btn Section 8'
    },
    {
      previewImg: previewSection9,
      sectionName: 'Section 9',
      animation: false,
      backgroundColor: 'linear-gradient(90deg, rgb(116, 45, 228) 0%, rgb(89, 192, 255) 100%)',
      mainTitle: 'Test Wilcity Application On Simulation',
      alignMainTitle: 'left',
      colorMainTitle: '#fff',
      classMainTitle: '',
      fontSizeMainTitle: 'md',
      styleMainTitle: {},
      hasDivider: true,
      dividerColor: '#fff',
      text: 'You can quickly test Wilcity App by using Simulation beside. Note that when testing with the Simulator, the experience will not smooth like on Real Phone.',
      colorText: '#fff',
      alignText: 'left',
      classText: '',
      fontSizeText: 'sm',
      styleText: {},
      buttons: [
        {
          href: '##',
          imgSrc: appstore
        },
        {
          href: '##',
          imgSrc: chplay
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
      animation: false,
      mainTitle: 'Build your mobile apps in less time',
      alignMainTitle: 'center',
      classMainTitle: '',
      styleMainTitle: {},
      hasDivider: true,
      dividerColor: 'rgb(240, 98, 146)',
      imageSectionCol: {imgSrc: sectionImg1},
      text: 'No coding knowledge and no paid plugins required.',
      alignText: 'center',
      classText: '',
      fontSizeText: 'sm',
      styleText: {},
      hrefButton: '##',
      textButton: 'Purchase now for 64$',
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
      mainTitle: 'Push notification and internal chat system',
      alignMainTitle: 'left',
      classMainTitle: '',
      styleMainTitle: {},
      hasDivider: true,
      dividerColor: 'rgb(240, 98, 146)',
      imageSectionCol: {imgSrc: sectionImg1},
      text: 'Easily build hero section with King Composer - Drag Drop Page Builder - right on your website. We also support secondary navigator menu.',
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
      mainTitle: 'App Screenshot',
      alignMainTitle: 'center',
      colorMainTitle: '#fff',
      text: 'See all awesome app screenshot, it will be your if you buy it',
      alignText: 'center',
      colorText: '#fff',
      fluid: true,
      margin: 30,
      itemShow: 1,
      darkMode: false,
      id: 'Btn Section 13',
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

