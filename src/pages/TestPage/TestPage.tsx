import appstore from 'assets/img/web_icons/app-store.png';
import chplay from 'assets/img/web_icons/google-play.png';
import Section14 from 'components/Section14/Section14';
import React from 'react';


const TestPage = () => {

  return (
    <div style={{ marginTop: 80 }}>
      <Section14
        sectionId={'111'}
        mainTitle={`
        Convert your Listing Directory site
        into true
        native apps.`}
        alignMainTitle="left"
        colorMainTitle='white'
        text="Build mobile apps quickly and without writing a single line of code using our intuitive Page Builder."
        fontSizeText='md'
        colorText='white'
        alignText='left'
        backgroundColor='linear-gradient(90deg, rgb(249, 120, 95) 0%,rgb(240, 98, 146)  100%)'
        buttons={[
          {
            href: '###',
            imgSrc: appstore
          },
          {
            href: '###',
            imgSrc: chplay
          }
        ]}
        sliderImgs={[]}
      />
    </div>
  );
};


export default TestPage;
