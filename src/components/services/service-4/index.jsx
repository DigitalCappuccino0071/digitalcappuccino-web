import React, { useEffect } from 'react';
import { FooterThree, Header, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import CtaTwo from '../../common/cta/cta-2';
import CaseArea from '../../common/recent-case-studies';
import TestimonialArea from '../../homes/home-4/testimonial-area';
import ServicesItems from './services-items';
import CardDetails from "../service-4/card-details";


const ServiceFour = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <Breadcrumb title={'Website Development'} />
      {/*<ServicesItems/>*/}
        <CardDetails/>
      <CtaTwo/>
      <FooterThree />
    </Wrapper>
  );
};

export default ServiceFour;
