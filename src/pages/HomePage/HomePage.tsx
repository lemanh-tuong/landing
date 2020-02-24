import mockUpMacContent3 from 'assets/img/heroslider/1.jpg';
import mockUpMacContent2 from 'assets/img/heroslider/2.jpg';
import mockUpMacContent1 from 'assets/img/heroslider/3.jpg';
import Carousel from 'components/Carousel/Carousel';
import React, { PureComponent } from 'react';
class HomePage extends PureComponent {
  render() {
    return (
      <div className="HomePage">
        <Carousel data={[mockUpMacContent3, mockUpMacContent2, mockUpMacContent1]} items={1} margin={0}
        />
      </div>
    );
  }
}
export default HomePage;
