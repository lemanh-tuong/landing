import mockUpMacContent3 from 'assets/img/heroslider/1.jpg';
import mockUpMacContent2 from 'assets/img/heroslider/2.jpg';
import mockUpMacContent1 from 'assets/img/heroslider/3.jpg';
import Carousel from 'components/Carousel/Carousel';
import MockUp from 'components/MockUp/MockUp';
import Section1 from 'components/Section1/Section1';
import Section2 from 'components/Section2/Section2';
import Section3 from 'components/Section3/Section3';
import Slide from 'components/Slide/Slide';
import React, { PureComponent } from 'react';
class HomePage extends PureComponent {
  render() {
    return (
      <div className="HomePage">
        <Carousel data={[mockUpMacContent3, mockUpMacContent2, mockUpMacContent1]}
          margin={10}
          responsive={{
            '576px': 2,
            '768px': 3,
            '992px': 4,
            '1200px': 5
          }}
          renderItem={(item) => {
            return <Slide srcImg={item} />;
          }}
          hasDots
          hasNav
        />
        <MockUp
          typeMockUp="Iphone"
          margin={0}
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
        />
        <Section1
          mainTitle="Main Title"
          text="Text"
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
        <Section2
          mainTitle="Section 2"
          alignMainTitle='center'
          data={[
            { titleCard: 'Card 1', textCard: 'Card Text', sizeIcon: 'lg', bgColorIcon: 'gradient-pink-orange' },
            { titleCard: 'Card 2', textCard: 'Card Text2', sizeIcon: 'lg', bgColorIcon: 'gradient-pink-orange' },
            { titleCard: 'Card 3', textCard: 'Card Text3', sizeIcon: 'lg', bgColorIcon: 'gradient-pink-orange' },
            { titleCard: 'Card 4', textCard: 'Card Text4', sizeIcon: 'lg', bgColorIcon: 'gradient-pink-orange' },
          ]}
          slider
          itemShow={3}
          hasDots
          hasNav
        />
        <Section3
          srcImg={mockUpMacContent1}
          type='tagImg'
        />
      </div>
    );
  }
}
export default HomePage;
