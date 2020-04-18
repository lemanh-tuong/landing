import mockUpMacContent2 from 'assets/img/heroslider/2.jpg';
import mockUpMacContent1 from 'assets/img/heroslider/3.jpg';
import sectionImg1 from 'assets/img/settings/create-unlimited-directory-types.png';
import sectionImg2 from 'assets/img/settings/customize-single-listing-page-your-way.png';
import icon1 from 'assets/img/web_icons/paid-listings.svg';
import React, { PureComponent } from 'react';
import Section1 from '../SettingsPage/components/Section1/Section1';
import Section2 from '../SettingsPage/components/Section2/Section2';
import Section3 from '../SettingsPage/components/Section3/Section3';
import Section4 from '../SettingsPage/components/Section4/Section4';

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
          backgroundColor="gradient-orange-pink"
          slider
          sliderImgs={[
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
          ]}
          margin={0}
          isBuilder={false}
          sectionId='123'
        />
        <Section3
          imageSectionCol={{ imgSrc: sectionImg1 }}
          mainTitle='Create unlimited directory'
          text={['Comes with power of Wiloke Tools, you can add unlimited directory types to your site. The tool also lets you design functionality and features.', 'That’s why we give you our promise: Quisque amet consectetur, egestas nulla at nisi cursus, sed iaculis est commodo, nulla lacus aliquet.']}
          hasDivider
          dividerColor='pink'
          sectionId='123123'
        />
        <Section2
          mainTitle="Section 2"
          alignMainTitle='center'
          cards={[
            { titleCard: 'Paid listings', textCard: 'Listing owners will pay to get theirs places listed on your site. In Wilcity, you can create unlimited Pricing Plans, each of which includes different benefits.', iconImg: { imgSrc: icon1 }, hasIcon: true, bgColorIcon: 'gradient-pink-orange' },
            { titleCard: 'Promoted listing', textCard: 'Choosing a promotion plan, listing owners will have directories appeared at the special spots on your site and at the top of the search result page.', iconImg: { imgSrc: icon1 }, hasIcon: true, bgColorIcon: 'gradient-pink-orange' },
            { titleCard: 'Paid claim listings', textCard: 'Another revenue model to monetize from listing. You can create a listing on your site and allow the listing owner to claim it.', iconImg: { imgSrc: icon1 }, hasIcon: true, bgColorIcon: 'gradient-pink-orange' },
          ]}
          sectionId='123123'
        />
        <Section4
          mainTitle='Perfect customer dashboard'
          alignMainTitle='center'
          text='The listing owners can take full control of their business from Customer Dashboard. Here they can upgrade plans, run promotion campains, reply to messages, track the statistics of views, favorites, shares, reviews.'
          alignText='center'
          imageSectionCol={{ imgSrc: sectionImg2 }}
          type='tagImg'
          sectionId='2222'
        />
      </div>
    );
  }
}
export default HomePage;
