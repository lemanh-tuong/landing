import mockUpMacContent2 from 'assets/img/heroslider/2.jpg';
import mockUpMacContent1 from 'assets/img/heroslider/3.jpg';
import imgApp2 from 'assets/img/screens/1.png';
import imgApp3 from 'assets/img/screens/2.png';
import imgApp4 from 'assets/img/screens/3.png';
import imgApp5 from 'assets/img/screens/4.png';
import imgApp from 'assets/img/screens/5.png';
import sectionImg1 from 'assets/img/settings/create-unlimited-directory-types.png';
import sectionImg2 from 'assets/img/settings/customize-single-listing-page-your-way.png';
import icon1 from 'assets/img/web_icons/paid-listings.svg';
import Carousel from 'components/Carousel/Carousel';
import Section1 from 'components/Section1/Section1';
import Section2 from 'components/Section2/Section2';
import Section3, { Section3Props } from 'components/Section3/Section3';
import React, { PureComponent } from 'react';

class HomePage extends PureComponent {
  render() {
    return (
      <div className="HomePage">
        <Section1
          mainTitle="Build any type of directory with the fastest and easiest for wordpress"
          colorMainTitle='white'
          text="Create unlimited directory types, our tool also lest you design functionality and features for each of them."
          colorText='white'
          fontSizeText='sm'
          bgColor="gradient-orange-pink"
          slider
          data={[
            {
              imgMockUpContent: mockUpMacContent1,
              hasVideo: true,
              videoUrl: 'https://www.youtube.com/watch?v=IG8Naq7Q2Q8&list=RDwfqHeahpNSY&index=13'
            },
            {
              imgMockUpContent: mockUpMacContent2,
              hasVideo: true,
              videoUrl: 'https://www.youtube.com/'
            }
          ]}
          margin={0}
        />
        <Section3
          srcImg={sectionImg1}
          mainTitle='Create unlimited directory'
          text={['Comes with power of Wiloke Tools, you can add unlimited directory types to your site. The tool also lets you design functionality and features.', 'That’s why we give you our promise: Quisque amet consectetur, egestas nulla at nisi cursus, sed iaculis est commodo, nulla lacus aliquet.']}
          hasDivider
          dividerColor='pink'
        />
        <Section3
          srcImg={sectionImg2}
          mainTitle='Customize single listing page your way'
          text={'The administrator can design What Sections you want to display on the Single Listing Page. Plus, the owner of listing can inherit your design as well as re-design it in his own way.'}
          hasDivider
          dividerColor='pink'
        />
        <Section2
          mainTitle="Section 2"
          alignMainTitle='center'
          data={[
            { titleCard: 'Paid listings', textCard: 'Listing owners will pay to get theirs places listed on your site. In Wilcity, you can create unlimited Pricing Plans, each of which includes different benefits.', iconImg: icon1, hasIcon: true, bgColorIcon: 'gradient-pink-orange' },
            { titleCard: 'Promoted listing', textCard: 'Choosing a promotion plan, listing owners will have directories appeared at the special spots on your site and at the top of the search result page.', iconImg: icon1, hasIcon: true, bgColorIcon: 'gradient-pink-orange' },
            { titleCard: 'Paid claim listings', textCard: 'Another revenue model to monetize from listing. You can create a listing on your site and allow the listing owner to claim it.', iconImg: icon1, hasIcon: true, bgColorIcon: 'gradient-pink-orange' },
          ]}
        />
        <Section1

          mainTitle='Conver your Listing Directory site into true native apps'
          hasDivider
          dividerColor='white'
          text="Buil mobile apps quickly and without writing a single line of code using our intuitive Page Builder"
          slider
          typeMockUp="Iphone"
          margin={0}
          data={[
            {
              srcImg: imgApp,
              hasVideo: true
            },
            {
              srcImg: imgApp2,
              hasVideo: true
            },
            {
              srcImg: imgApp3,
              hasVideo: true
            },
            {
              srcImg: imgApp4,
              hasVideo: true
            },
            {
              srcImg: imgApp5,
              hasVideo: true
            },
          ]}
        />
        <Section3
          srcImg={mockUpMacContent1}
          type='tagImg'
        />
        <Carousel
          hasNav

          data={[
            {
              srcImg: mockUpMacContent1,
              text: 'Text',
              mainTitle: 'Title',
              hasDivider: true,
              bgColor: 'gradient-orange-pink'
            },
            {
              srcImg: mockUpMacContent1,
              text: 'Text',
              mainTitle: 'Title 2',
              hasDivider: true,
              bgColor: 'gradient-pink-orange'
            },
            {
              srcImg: mockUpMacContent1,
              text: 'Text',
              mainTitle: 'Title 3',
              hasDivider: true,
              bgColor: 'gradient-orange-pink'
            },
          ]}
          renderItem={(item: Section3Props) => <Section3 bgColor={item.bgColor} srcImg={item.srcImg} mainTitle={item.mainTitle} text={item.text} hasDivider={item.hasDivider} />}
        />
      </div>
    );
  }
}
export default HomePage;
