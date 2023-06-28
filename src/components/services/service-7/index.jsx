import React, { useEffect } from 'react';
import { FooterThree, Header, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import CtaTwo from '../../common/cta/cta-2';
import CaseArea from '../../common/recent-case-studies';
import TestimonialArea from '../../homes/home-4/testimonial-area';
import ServicesWeb7 from "./services-web-6";


const ServiceWeb7 = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <Breadcrumb title={'Web Services 7'} />
      <ServicesWeb7/>
      <CaseArea padd={'pt-130'} />
      <TestimonialArea style_2={true}/>
      <CtaTwo/>
      <FooterThree />
    </Wrapper>
  );
};

export default ServiceWeb7;
