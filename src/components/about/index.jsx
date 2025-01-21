import React, { useEffect } from 'react';
import { FooterFour, Header, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import CtaTwo from '../common/cta/cta-2';
import AboutArea from './about-area';
// import FeatureArea from './feature-area';
// import ServicesArea from './services-area';
// import TeamArea from './team-area';

const About = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);
  return (
    <Wrapper>
      <Header />
      <Breadcrumb
        color={'#fec4c559'}
        imagePath={'/assets/img/service/about-us.png'}
        alt="Top Digital Marketing Services"
        title={'About Us'}
      />
      <AboutArea />
      {/* <ServicesArea/> */}
      {/*<FeatureArea/>*/}
      {/* <TeamArea /> */}
      <CtaTwo />
      {/* <FooterThree /> */}
      <FooterFour />
    </Wrapper>
  );
};

export default About;
