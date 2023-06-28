import React, {useEffect} from 'react';
import {animationCreate} from '../../utils/utils';
import {FooterFour, Header, Wrapper} from '../../layout';
import Breadcrumb from '../../components/common/breadcrumb/breadcrumb';
import AccordionArea from './accordion-area';
import ServiceDetailsArea from './service-details-area';

const Index = ({service}) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <Breadcrumb title={service?.title ? service?.title : 'seo and Search Engine Marketing'} />
      <ServiceDetailsArea/>
      <AccordionArea/>
      <FooterFour />
    </Wrapper>
  );
};

export default Index;
