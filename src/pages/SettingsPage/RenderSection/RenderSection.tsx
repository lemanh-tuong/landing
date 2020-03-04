import mockUpMacContent2 from 'assets/img/heroslider/2.jpg';
import mockUpMacContent1 from 'assets/img/heroslider/3.jpg';
import sectionImg1 from 'assets/img/settings/create-unlimited-directory-types.png';
import icon1 from 'assets/img/web_icons/paid-listings.svg';
import Button from 'components/Button/Button';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import Section1 from 'components/Section1/Section1';
import Section2 from 'components/Section2/Section2';
import Section3 from 'components/Section3/Section3';
import Section4 from 'components/Section4/Section4';
import React, { Fragment } from 'react';
import { align } from 'types/types';

// const RenderSection = ({ sectionName, mainTitle, alignMainTitle, colorMainTitle, fontSizeMainTitle, classMainTitle, styleMainTitle,
//   text, alignText, colorText, fontSizeText, classText, styleText, darkMode
// }: Option) => {
const RenderSection = ({ sectionName, mainTitle, text, alignMainTitle, alignText, colorText, colorMainTitle, slider }: { sectionName: string; mainTitle: string; text: string; alignMainTitle: align; alignText: align; colorText: string; colorMainTitle: string; slider: boolean }) => {

  const _renderContent = () => {
    switch (sectionName) {
      case 'Section 1':
        return <Section1
          mainTitle={mainTitle}
          alignMainTitle={alignMainTitle}
          colorMainTitle={colorMainTitle}
          text={text}
          alignText={alignText}
          colorText={colorText}
          fontSizeText='sm'
          bgColor="gradient-orange-pink"
          slider={slider}
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
          renderLeft={() => {
            return (
              <ButtonGroup>
                <Button color='white'>
                  Try demo
            </Button>
              </ButtonGroup>
            );
          }}
        />;
      case 'Section 2':
        return <Section2
          mainTitle={mainTitle}
          alignMainTitle={alignMainTitle}
          data={
            [
              { titleCard: 'Paid listings', textCard: 'Listing owners will pay to get theirs places listed on your site. In Wilcity, you can create unlimited Pricing Plans, each of which includes different benefits.', iconImg: icon1, hasIcon: true, bgColorIcon: 'gradient-pink-orange' },
              { titleCard: 'Promoted listing', textCard: 'Choosing a promotion plan, listing owners will have directories appeared at the special spots on your site and at the top of the search result page.', iconImg: icon1, hasIcon: true, bgColorIcon: 'gradient-pink-orange' },
              { titleCard: 'Paid claim listings', textCard: 'Another revenue model to monetize from listing. You can create a listing on your site and allow the listing owner to claim it.', iconImg: icon1, hasIcon: true, bgColorIcon: 'gradient-pink-orange' },
            ]}
        />;
      case 'Section 3':
        return <Section3
          srcImg={sectionImg1}
          mainTitle='Create unlimited directory'
          text={text}
          hasDivider
          dividerColor='pink'
        />;
      case 'Section 4':
        return <Section4
          mainTitle={mainTitle}
          alignMainTitle={alignMainTitle}
          text={text}
          alignText={alignMainTitle}
          srcImg={sectionImg1}
          type='tagImg'
        />;
    }
  };
  return (
    <Fragment>
      {_renderContent()}
    </Fragment>
  );
};

export default RenderSection;
