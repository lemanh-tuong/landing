// import showcase from 'assets/img/client/showcase_01-icare-plus.vn.png';
// import showcase2 from 'assets/img/client/showcase_02-baybusinessgroup.org.png';
// import showcase3 from 'assets/img/client/showcase_03-zoptiks.com.png';
// import { default as heroslider, default as imgContentMockupMac } from 'assets/img/heroslider/1.jpg';
// import heroslider2 from 'assets/img/heroslider/3.jpg';
// import heroslider3 from 'assets/img/heroslider/last.jpg';
// import imgContentMockUpPhone from 'assets/img/screens/1.png';
// import imgContentMockUpPhone2 from 'assets/img/screens/2.png';
// import imgContentMockUpPhone3 from 'assets/img/screens/3.png';
// import imgSection2 from 'assets/img/settings/create-unlimited-directory-types.png';
// import dashboardImg from 'assets/img/settings/dashboard.jpg';
// import imgIcon from 'assets/img/web_icons/feature-icons/1-feature-icon.svg';
// import imgIcon2 from 'assets/img/web_icons/paid-listings.svg';
// import Button from 'components/Button/Button';
// import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
// import Card from 'components/Card/Card';
// import Carousel from 'components/Carousel/Carousel';
// import Divide from 'components/Divide/Divide';
// import Col from 'components/Grid/Column/Column';
// import Row from 'components/Grid/Row/Row';
// import Section from 'components/Grid/Section/Section';
// import Image from 'components/Image/Image';
// import MockUp from 'components/MockUp/MockUp';
// import Rate from 'components/Rate/Rate';
// import SectionTitle from 'components/SectionTitle/SectionTitle';
// import Square from 'components/Square/Square';
// import Text from 'components/Text/Text';
// import React, { PureComponent } from 'react';

// class HomePage extends PureComponent {
//   render() {
//     return (
//       <div className="HomePage">
//         <Section style={{ background: `linear-gradient(90deg,#f06292,#f9785f)` }} >
//           <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
//             <Col cols={[12, 12, 6]} className="order-last order-md-first">
//               <SectionTitle mainTitle="Build any type of directory with the fastest and easiest for wordpress" className="mb-65" color="white" />
//               <Text
//                 text="Create unlimited directory types, our tool also lest you design functionality and features for each of them."
//                 className="mb-30 white"
//               />
//               <Button >Try demo</Button>
//             </Col>
//             <Col cols={[12, 12, 6]} className="order-first order-md-last">
//               <MockUp hasVideo={true} type="Mac" srcImg={imgContentMockupMac} />
//             </Col>
//           </Row>
//         </Section>
//         <Section>
//           <Square />
//           <Row>
//             <Col cols={[12, 12, 6]}>
//               <Image type="tagImg" srcImg={imgSection2} />
//             </Col>
//             <Col cols={[12, 12, 5]} offsets={[0, 0, 1]}>
//               <SectionTitle mainTitle="Create unlimited directory" className="mb-20" />
//               <Divide color="pink" className="mb-45" />
//               <Text text="Comes with power of Wiloke Tools, you can add unlimited directory types to your site. The tool also lets you design functionality and features." className="mb-20" />
//               <Text text="That’s why we give you our promise: Quisque amet consectetur, egestas nulla at nisi cursus, sed iaculis est commodo, nulla lacus aliquet." />
//             </Col>
//           </Row>
//         </Section>
//         <Section>
//           <Row>
//             <Col cols={[12, 12, 5]} className="order-last order-lg-first">
//               <SectionTitle mainTitle="Create unlimited directory" className="mb-20" />
//               <Divide color="pink" className="mb-45" />
//               <Text text="Comes with power of Wiloke Tools, you can add unlimited directory types to your site. The tool also lets you design functionality and features." className="mb-20" />
//               <Text text="That’s why we give you our promise: Quisque amet consectetur, egestas nulla at nisi cursus, sed iaculis est commodo, nulla lacus aliquet." />
//             </Col>
//             <Col cols={[12, 12, 6]} offsets={[0, 0, 1]} className="order-first order-lg-last">
//               <Image type="tagImg" srcImg={imgSection2} />
//             </Col>
//           </Row>
//         </Section>
//         <Section style={{ background: 'rgb(245, 245, 245)' }}>
//           <Row className="justify-content-center">
//             <Col cols={[8]}>
//               <SectionTitle mainTitle="How can you earn money from your website" align='center' className="mb-65" />
//             </Col>
//           </Row>
//           <Row>
//             <Col cols={[12, 12, 4]}>
//               <Card cardTitle="Paid listings"
//                 cardContent="Listing owners will pay to get theirs places listed on your site. In Wilcity, you can create unlimited Pricing Plans, each of which includes different benefits."
//                 srcImg={imgIcon2}
//                 modifierIcon={{ color: 'gradient', align: 'center' }}

//               />
//             </Col>
//             <Col cols={[12, 12, 4]}>
//               <Card cardTitle="Paid listings"
//                 cardContent="Listing owners will pay to get theirs places listed on your site. In Wilcity, you can create unlimited Pricing Plans, each of which includes different benefits."
//                 srcImg={imgIcon2}
//                 modifierIcon={{ color: 'gradient', align: 'center' }}
//               />
//             </Col>
//             <Col cols={[12, 12, 4]}>
//               <Card cardTitle="Paid listings"
//                 cardContent="Listing owners will pay to get theirs places listed on your site. In Wilcity, you can create unlimited Pricing Plans, each of which includes different benefits."
//                 srcImg={imgIcon2}
//                 modifierIcon={{ color: 'gradient', align: 'center' }}
//               />
//             </Col>
//           </Row>
//         </Section>
//         <Section style={{ background: `linear-gradient(90deg,#f06292,#f9785f)` }} >
//           <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
//             <Col cols={[12, 12, 6]}>
//               <SectionTitle mainTitle="Build any type of directory with the fastest and easiest for wordpress" className="mb-20" color="white" />
//               <Divide className="mb-45" />
//               <Text
//                 text="Create unlimited directory types, our tool also lest you design functionality and features for each of them."
//                 className="mb-45 white"
//               />
//               <Button>
//                 Learn more about app
//                 <i className="fas fa-arrow-right" style={{ fontSize: '12px', marginLeft: '8px' }}></i>
//               </Button>
//             </Col>
//             <Col cols={[12, 12, 4]} offsets={[0, 0, 2]}>
//               <MockUp type="Iphone">
//                 <Carousel settings={{ hasNav: false, margin: 0, items: 1 }} images={[imgContentMockUpPhone, imgContentMockUpPhone2, imgContentMockUpPhone3]} />
//               </MockUp>
//             </Col>
//           </Row>
//         </Section>
//         <Section>
//           <Square />
//           <Row>
//             <Col cols={[12, 12, 6]}>
//               <Image type="tagImg" srcImg={imgSection2} />
//             </Col>
//             <Col cols={[12, 12, 5]} offsets={[0, 0, 1]}>
//               <SectionTitle mainTitle="Create unlimited directory" className="mb-20" />
//               <Divide color="pink" className="mb-45" />
//               <Text text="Comes with power of Wiloke Tools, you can add unlimited directory types to your site. The tool also lets you design functionality and features." className="mb-20" />
//               <Text text="That’s why we give you our promise: Quisque amet consectetur, egestas nulla at nisi cursus, sed iaculis est commodo, nulla lacus aliquet." />
//             </Col>
//           </Row>
//         </Section>
//         <Section>
//           <Row>
//             <Col cols={[12, 12, 5]} className="order-last order-lg-first">
//               <SectionTitle mainTitle="Create unlimited directory" className="mb-20 order-first order-lg-last" />
//               <Divide color="pink" className="mb-45" />
//               <Text text="Comes with power of Wiloke Tools, you can add unlimited directory types to your site. The tool also lets you design functionality and features." className="mb-20" />
//               <Text text="That’s why we give you our promise: Quisque amet consectetur, egestas nulla at nisi cursus, sed iaculis est commodo, nulla lacus aliquet." />
//             </Col>
//             <Col cols={[12, 12, 6]} offsets={[0, 0, 1]}>
//               <Image type="tagImg" srcImg={imgSection2} />
//             </Col>
//           </Row>
//         </Section>
//         <Section>
//           <Square />
//           <Row>
//             <Col cols={[12, 12, 6]}>
//               <Image type="tagImg" srcImg={imgSection2} />
//             </Col>
//             <Col cols={[12, 12, 5]} offsets={[0, 0, 1]}>
//               <SectionTitle mainTitle="Create unlimited directory" className="mb-20" />
//               <Divide color="pink" className="mb-45" />
//               <Text text="Comes with power of Wiloke Tools, you can add unlimited directory types to your site. The tool also lets you design functionality and features." className="mb-20" />
//               <Text text="That’s why we give you our promise: Quisque amet consectetur, egestas nulla at nisi cursus, sed iaculis est commodo, nulla lacus aliquet." />
//             </Col>
//           </Row>
//         </Section>
//         <Section>
//           <Row>
//             <Col cols={[12, 12, 5]} className="order-last order-lg-first">
//               <SectionTitle mainTitle="Create unlimited directory" className="mb-20" />
//               <Divide color="pink" className="mb-45" />
//               <Text text="Comes with power of Wiloke Tools, you can add unlimited directory types to your site. The tool also lets you design functionality and features." className="mb-20" />
//               <Text text="That’s why we give you our promise: Quisque amet consectetur, egestas nulla at nisi cursus, sed iaculis est commodo, nulla lacus aliquet." />
//             </Col>
//             <Col cols={[12, 12, 6]} offsets={[0, 0, 1]} className="order-first order-lg-last">
//               <Image type="tagImg" srcImg={imgSection2} />
//             </Col>
//           </Row>
//         </Section>
//         <Section>
//           <Square />
//           <Row>
//             <Col cols={[12, 12, 6]}>
//               <Image type="tagImg" srcImg={imgSection2} />
//             </Col>
//             <Col cols={[12, 12, 5]} offsets={[0, 0, 1]}>
//               <SectionTitle mainTitle="Create unlimited directory" className="mb-20" />
//               <Divide color="pink" className="mb-45" />
//               <Text text="Comes with power of Wiloke Tools, you can add unlimited directory types to your site. The tool also lets you design functionality and features." className="mb-20" />
//               <Text text="That’s why we give you our promise: Quisque amet consectetur, egestas nulla at nisi cursus, sed iaculis est commodo, nulla lacus aliquet." />
//             </Col>
//           </Row>
//         </Section>
//         <Section>
//           <Row>
//             <Col cols={[12, 12, 5]} className="order-last order-lg-first">
//               <SectionTitle mainTitle="Create unlimited directory" className="mb-20" />
//               <Divide color="pink" className="mb-45" />
//               <Text text="Comes with power of Wiloke Tools, you can add unlimited directory types to your site. The tool also lets you design functionality and features." className="mb-20" />
//               <Text text="That’s why we give you our promise: Quisque amet consectetur, egestas nulla at nisi cursus, sed iaculis est commodo, nulla lacus aliquet." />
//             </Col>
//             <Col cols={[12, 12, 6]} offsets={[0, 0, 1]} className="order-first order-lg-last">
//               <Image type="tagImg" srcImg={imgSection2} />
//             </Col>
//           </Row>
//         </Section>
//         <Section>
//           <Square />
//           <Row>
//             <Col cols={[12, 12, 6]}>
//               <Image type="tagImg" srcImg={imgSection2} />
//             </Col>
//             <Col cols={[12, 12, 5]} offsets={[0, 0, 1]}>
//               <SectionTitle mainTitle="Create unlimited directory" className="mb-20" />
//               <Divide color="pink" className="mb-45" />
//               <Text text="Comes with power of Wiloke Tools, you can add unlimited directory types to your site. The tool also lets you design functionality and features." className="mb-20" />
//               <Text text="That’s why we give you our promise: Quisque amet consectetur, egestas nulla at nisi cursus, sed iaculis est commodo, nulla lacus aliquet." />
//             </Col>
//           </Row>
//         </Section>
//         <Section>
//           <Row>
//             <Col cols={[12, 12, 5]} className="order-last order-lg-first">
//               <SectionTitle mainTitle="Create unlimited directory" className="mb-20" />
//               <Divide color="pink" className="mb-45" />
//               <Text text="Comes with power of Wiloke Tools, you can add unlimited directory types to your site. The tool also lets you design functionality and features." className="mb-20" />
//               <Text text="That’s why we give you our promise: Quisque amet consectetur, egestas nulla at nisi cursus, sed iaculis est commodo, nulla lacus aliquet." />
//             </Col>
//             <Col cols={[12, 12, 6]} offsets={[0, 0, 1]} className="order-first order-lg-last">
//               <Image type="tagImg" srcImg={imgSection2} />
//             </Col>
//           </Row>
//         </Section>
//         <Section>
//           <Row>
//             <Col cols={[10]} offsets={[1]}>
//               <SectionTitle align='center' mainTitle='Perfect customer dashboard' fontSize='md' className="mb-20" />
//               <Text align='center' className="mb-50" text="The listing owners can take full control of their business from Customer Dashboard. Here they can upgrade plans, run promotion campains, reply to messages, track the statistics of views, favorites, shares, reviews." />
//             </Col>
//           </Row>
//           <Image type='tagImg' srcImg={dashboardImg} className='mb-30' />
//           <ButtonGroup >
//             <Button color='gradient' >
//               Purchase now 64$
//           </Button>
//           </ButtonGroup>
//         </Section>
//         <Section style={{ background: `linear-gradient(90deg,#f06292,#f9785f)` }} >
//           <SectionTitle mainTitle='Hero styles' className="mb-70" align='center' color='white' />
//           <Carousel settings={{ items: 2, margin: 10, hasNav: true }} images={[heroslider, heroslider2, heroslider3]} />
//         </Section>
//         <Section>
//           <Row className="justify-content-center">
//             <Col cols={[8]}>
//               <SectionTitle mainTitle="How can you earn money from your website" align='center' />
//             </Col>
//           </Row>
//           <Row>
//             <Col cols={[12, 4, 3]}>
//               <Card cardContent="ONE CLICK DEMO INSTALL WORDPRESS" srcImg={imgIcon} />
//             </Col>
//             <Col cols={[12, 4, 3]}>
//               <Card cardContent="ONE CLICK DEMO INSTALL WORDPRESS" srcImg={imgIcon} />
//             </Col>
//             <Col cols={[12, 4, 3]}>
//               <Card cardContent="ONE CLICK DEMO INSTALL WORDPRESS" srcImg={imgIcon} />
//             </Col>
//             <Col cols={[12, 4, 3]}>
//               <Card cardContent="ONE CLICK DEMO INSTALL WORDPRESS" srcImg={imgIcon} />
//             </Col>
//           </Row>
//         </Section>
//         <Section>
//           <Row>
//             <Col cols={[4]} >
//               <Rate stars={5} authorAvatar={imgIcon} authorName="Kalitegroup" purpose="Customer Supporrt" rateContent="Rate Content" />
//             </Col>
//             <Col cols={[4]} >
//               <Rate stars={5} authorAvatar={imgIcon} authorName="Kalitegroup" purpose="Customer Supporrt" rateContent="Rate Content" />
//             </Col>
//             <Col cols={[4]} >
//               <Rate stars={5} authorAvatar={imgIcon} authorName="Kalitegroup" purpose="Customer Supporrt" rateContent="Rate Content" />
//             </Col>
//           </Row>
//         </Section>
//         <Section style={{ background: `linear-gradient(90deg,#f06292,#f9785f)` }} >
//           <SectionTitle mainTitle={`Who's using Wilcity`} className="mb-20" align='center' color='white' />
//           <Text text='We’re honored some of the most talented creatives out there build with Wilcity' className="mb-50 white" align='center' />
//           <Carousel responsive={[1, 2, 3, 4, 4]} settings={{ items: 4, margin: 15, hasNav: false }} images={[showcase, showcase2, showcase3]} />
//         </Section>
//       </div >
//     );
//   }
// }

// export default HomePage;

import React from 'react';

const HomePage = () => <div>H1</div>;

export default HomePage;
