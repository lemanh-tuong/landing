import client from 'assets/img/client/showcase_02-baybusinessgroup.org.png';
import client2 from 'assets/img/client/showcase_04-bodrumguru.com.png';
import mockUpMacContent2 from 'assets/img/heroslider/2.jpg';
import mockUpMacContent1 from 'assets/img/heroslider/3.jpg';
import imgApp2 from 'assets/img/screens/1.png';
import imgApp3 from 'assets/img/screens/2.png';
import imgApp4 from 'assets/img/screens/3.png';
import imgApp5 from 'assets/img/screens/4.png';
import imgApp from 'assets/img/screens/5.png';
import sectionImg1 from 'assets/img/settings/create-unlimited-directory-types.png';
import sectionImg2 from 'assets/img/settings/customize-single-listing-page-your-way.png';
import avatar from 'assets/img/web_icons/envato.svg';
import icon2 from 'assets/img/web_icons/feature-icons/1-feature-icon.svg';
import icon1 from 'assets/img/web_icons/paid-listings.svg';
import Image from 'components/Image/Image';
import Rate from 'components/Rate/Rate';
import Section1 from 'components/Section1/Section1';
import Section2 from 'components/Section2/Section2';
import Section3 from 'components/Section3/Section3';
import Section4 from 'components/Section4/Section4';
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
        />
        <Section3
          imageSectionCol={{ imgSrc: sectionImg1 }}
          mainTitle='Create unlimited directory'
          text={['Comes with power of Wiloke Tools, you can add unlimited directory types to your site. The tool also lets you design functionality and features.', 'That’s why we give you our promise: Quisque amet consectetur, egestas nulla at nisi cursus, sed iaculis est commodo, nulla lacus aliquet.']}
          hasDivider
          dividerColor='pink'
        />
        <Section3
          imageSectionCol={{ imgSrc: sectionImg2 }}
          mainTitle='Customize single listing page your way'
          text={'The administrator can design What Sections you want to display on the Single Listing Page. Plus, the owner of listing can inherit your design as well as re-design it in his own way.'}
          hasDivider
          dividerColor='pink'
        />
        <Section2
          mainTitle="Section 2"
          alignMainTitle='center'
          cards={[
            { titleCard: 'Paid listings', textCard: 'Listing owners will pay to get theirs places listed on your site. In Wilcity, you can create unlimited Pricing Plans, each of which includes different benefits.', iconImg: { imgSrc: icon1 }, hasIcon: true, bgColorIcon: 'gradient-pink-orange' },
            { titleCard: 'Promoted listing', textCard: 'Choosing a promotion plan, listing owners will have directories appeared at the special spots on your site and at the top of the search result page.', iconImg: { imgSrc: icon1 }, hasIcon: true, bgColorIcon: 'gradient-pink-orange' },
            { titleCard: 'Paid claim listings', textCard: 'Another revenue model to monetize from listing. You can create a listing on your site and allow the listing owner to claim it.', iconImg: { imgSrc: icon1 }, hasIcon: true, bgColorIcon: 'gradient-pink-orange' },
          ]}
        />
        <Section1
          mainTitle='Conver your Listing Directory site into true native apps'
          colorMainTitle='white'
          hasDivider
          dividerColor='white'
          text="Buil mobile apps quickly and without writing a single line of code using our intuitive Page Builder"
          colorText='white'
          slider
          typeMockUp="Iphone"
          margin={0}
          sliderImgs={[
            {
              imgSrc: imgApp,
            },
            {
              imgSrc: imgApp2,
            },
            {
              imgSrc: imgApp3,
            },
            {
              imgSrc: imgApp4,
            },
            {
              imgSrc: imgApp5,
            },
          ]}
          backgroundColor='gradient-pink-orange'
        // backgroundImage={backgroundImage}
        />
        <Section3
          imageSectionCol={{ imgSrc: sectionImg2 }}
          mainTitle="Customize directory functionality"
          hasDivider
          dividerColor='pink'
          text='Design the fields of each directory type like visual way. Choose between 15 pre-made fields and create your own unlimited custom fields.'
        />
        <Section3
          imageSectionCol={{ imgSrc: sectionImg2 }}
          mainTitle="Customize directory functionality"
          hasDivider
          dividerColor='pink'
          text='Design the fields of each directory type like visual way. Choose between 15 pre-made fields and create your own unlimited custom fields.'
          reverse
        />
        <Section3
          imageSectionCol={{ imgSrc: sectionImg2 }}
          mainTitle="Add directories type to your site"
          hasDivider
          dividerColor='pink'
          text='Design the fields of each directory type like visual way. Choose between 15 pre-made fields and create your own unlimited custom fields.'
        />
        <Section3
          imageSectionCol={{ imgSrc: sectionImg2 }}
          mainTitle="Advanced rating and reviews"
          hasDivider
          dividerColor='pink'
          text={`Design the fields of each directory type like visual way. Choose between 15 pre-made fields and create your own unlimited custom fields.`}
          reverse
        />
        <Section3
          imageSectionCol={{ imgSrc: sectionImg2 }}
          mainTitle="Advanced search filters"
          hasDivider
          dividerColor='pink'
          text={['Hotels, near New York? No problem, the "near by" field cares about it. It will query the entered location and return results sorted by the distance.', 'Not only "near by" field, we also added lots of awesome fields to search form such as search autocomplete, radius search.']}
        />
        <Section3
          imageSectionCol={{ imgSrc: sectionImg2 }}
          mainTitle="Map template with awesome features"
          hasDivider
          dividerColor='pink'
          text="'Oh yes, the map template is an indispensable function in the directory website. We added an interested feature to map page: Search as I move the map. If this feature is enabled, the listings will be updated automatically when you move the map."
          reverse
        />
        <Section3
          imageSectionCol={{ imgSrc: sectionImg2 }}
          mainTitle="Schema markup"
          hasDivider
          dividerColor='pink'
          text="Building Schema Markup with Drag Drop builder."
        />
        <Section3
          imageSectionCol={{ imgSrc: sectionImg2 }}
          mainTitle="Dokan multi-vendor"
          hasDivider
          dividerColor='pink'
          text='Customers can add his/her product to your site. You can give a comission to the products (fixed or percentage) and earn money from that.'
          reverse
        />
        <Section3
          imageSectionCol={{ imgSrc: sectionImg2 }}
          mainTitle="Beautiful sub-categories, locations page"
          hasDivider
          dividerColor='pink'
          text="Displaying sub-locations, and sub-categories on a special design page. We also provide lots of options for you such as number of locations / categories per row, order by, maximum taxonomies can be shown."
        />
        <Section3
          imageSectionCol={{ imgSrc: sectionImg2 }}
          mainTitle="Custom anythings in your listing card"
          hasDivider
          dividerColor='pink'
          text='Easily add phone number, google address, email address and any information you want to listing card.'
          reverse
        />
        <Section4
          mainTitle='Perfect customer dashboard'
          alignMainTitle='center'
          text='The listing owners can take full control of their business from Customer Dashboard. Here they can upgrade plans, run promotion campains, reply to messages, track the statistics of views, favorites, shares, reviews.'
          alignText='center'
          imageSectionCol={{ imgSrc: sectionImg2 }}
          type='tagImg'
        />
        <Section2
          mainTitle="Let's see what makes our theme super powerful"
          alignMainTitle='center'
          cards={[
            {
              hasIcon: true,
              iconImg: {
                imgSrc: icon2,
              },
              sizeIcon: 'xs',
              bgColorIcon: 'transparent',
              titleCard: 'ONE CLICK DEMO INSTALL WORDPRESS'
            },
            {
              hasIcon: true,
              iconImg: {
                imgSrc: icon2
              },
              sizeIcon: 'xs',
              bgColorIcon: 'transparent',
              titleCard: 'ONE CLICK DEMO INSTALL WORDPRESS'
            },
            {
              hasIcon: true,
              iconImg: {
                imgSrc: icon2
              },
              sizeIcon: 'xs',
              bgColorIcon: 'transparent',
              titleCard: 'ONE CLICK DEMO INSTALL WORDPRESS'
            },
            {
              hasIcon: true,
              iconImg: {
                imgSrc: icon2
              },
              sizeIcon: 'xs',
              bgColorIcon: 'transparent',
              titleCard: 'ONE CLICK DEMO INSTALL WORDPRESS'
            },
            {
              hasIcon: true,
              iconImg: {
                imgSrc: icon2
              },
              sizeIcon: 'xs',
              bgColorIcon: 'transparent',
              titleCard: 'ONE CLICK DEMO INSTALL WORDPRESS'
            },
            {
              hasIcon: true,
              iconImg: {
                imgSrc: icon2
              },
              sizeIcon: 'xs',
              bgColorIcon: 'transparent',
              titleCard: 'ONE CLICK DEMO INSTALL WORDPRESS'
            },
            {
              hasIcon: true,
              iconImg: {
                imgSrc: icon2
              },
              sizeIcon: 'xs',
              bgColorIcon: 'transparent',
              titleCard: 'ONE CLICK DEMO INSTALL WORDPRESS'
            },
            {
              hasIcon: true,
              iconImg: {
                imgSrc: icon2
              },
              sizeIcon: 'xs',
              bgColorIcon: 'transparent',
              titleCard: 'ONE CLICK DEMO INSTALL WORDPRESS'
            },
          ]}
        />
        <Section4
          mainTitle="Who's using Wilcity"
          colorMainTitle='white'
          alignMainTitle='center'
          text="We’re honored some of the most talented creatives out there build with Wilcity"
          colorText='white'
          alignText='center'
          backgroundColor='gradient-pink-orange'
          slider
          data={[
            {
              imgSrc: client,
            },
            {
              imgSrc: client2,
            },
            {
              imgSrc: client,
            },
            {
              imgSrc: client2,
            },
          ]}
          hasNav
          fluid={true}
          responsive={{
            '576px': 3,
            '768px': 4,
            '992px': 5
          }}
          renderItem={({ imgSrc }) => <Image type='tagImg' imgSrc={imgSrc} />}
        />
        <Section4
          mainTitle='Trusted by over 6600 users'
          alignMainTitle='center'
          text="See what customers're saying about our services"
          alignText='center'
          classText="mb-50"
          margin={10}
          data={[
            {
              authorName: 'SergeyX',
              rateContent: 'Only five stars! and this despite the fact that the topic is still under improvement. I hope future updates will help her become even better. A great team with a great idea of the catalog.',
              purpose: 'Feature availability',
              authorAvatar: avatar,
              stars: 5
            },
            {
              authorName: 'SergeyX',
              rateContent: 'Only five stars! and this despite the fact that the topic is still under improvement. I hope future updates will help her become even better. A great team with a great idea of the catalog.',
              purpose: 'Feature availability',
              authorAvatar: avatar,
              stars: 5
            },
            {
              authorName: 'SergeyX',
              rateContent: 'Only five stars! and this despite the fact that the topic is still under improvement. I hope future updates will help her become even better. A great team with a great idea of the catalog.',
              purpose: 'Feature availability',
              authorAvatar: avatar,
              stars: 5
            },
          ]}
          responsive={{
            '576px': 1,
            '992px': 3
          }}
          renderItem={({ authorAvatar, authorName, purpose, rateContent, stars }) => <Rate stars={stars} authorName={authorName} rateContent={rateContent} authorAvatar={authorAvatar} purpose={purpose} />}
        />
      </div>
    );
  }
}
export default HomePage;
