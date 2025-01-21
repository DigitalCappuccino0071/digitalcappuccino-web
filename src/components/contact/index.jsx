import React, { useEffect } from 'react';
import { FooterFour, FooterThree, Header, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import ContactArea from './contact-area';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 450);
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <Breadcrumb
        color={'#fec4c559'}
        title={'Contact Us'}
        imagePath={'/assets/img/service/contact-us.png'}
        alt="Best Digital Marketing Company"
      />
      <ContactArea />
      <FooterFour />
    </Wrapper>
  );
};

export default Contact;
