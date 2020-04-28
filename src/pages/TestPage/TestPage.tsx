
import img1 from 'assets/img/screens/1.png';
import img2 from 'assets/img/screens/2.png';
import img3 from 'assets/img/screens/3.png';
import Section13 from 'components/Section13/Section13';
import overWriteFirebase from 'firebase/database/test';
import React from 'react';

const TestPage = () => {
  const test = () => {
    console.log(overWriteFirebase());
  }
  test();
  return (
    <>
      <Section13
        sectionId="1"
        mainTitle="App Screenshot"
        alignMainTitle='center'
        text="See all awesome app screenshot, it will be your if you buy it"
        sliderImgs={[
          {
            imgSrc: img1
          },
          {
            imgSrc: img2
          },
          {
            imgSrc: img3
          },
        ]}
        fluid={true}
        itemShow={1}
      />
    </>
  )
}


export default TestPage;
