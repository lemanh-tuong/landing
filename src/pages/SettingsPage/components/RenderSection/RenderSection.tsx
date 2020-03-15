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
import { Option } from '../../SettingsPage';

// const RenderSection = ({ sectionName, mainTitle, alignMainTitle, colorMainTitle, fontSizeMainTitle, classMainTitle, styleMainTitle,
//   text, alignText, colorText, fontSizeText, classText, styleText, darkMode
// }: Option) => {
const RenderSection = (option: Option) => {
  const { sectionName, mainTitle, text, alignMainTitle, alignText, colorText, colorMainTitle, cards, slider, data } = option
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
          data={data || [
            {
              imgUrl: mockUpMacContent1,
              hasVideo: true,
              videoUrl: 'https://www.youtube.com/watch?v=IG8Naq7Q2Q8&list=RDwfqHeahpNSY&index=13'
            },
            {
              imgUrl: mockUpMacContent2,
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
          cards={cards ? cards : []}
        />;
      case 'Section 3':
        return <Section3
          srcImg={sectionImg1}
          mainTitle={mainTitle}
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
