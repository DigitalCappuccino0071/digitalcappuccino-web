import React, { useEffect } from 'react';

import { FooterFour, Header, Wrapper } from '../layout';
import Breadcrumb from './common/breadcrumb/breadcrumb';
import { animationCreate } from '../utils/utils';

const ChildWrapper = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 450);
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <div className="breadcrumb__area pt-120 pb-5 include-bg p-relative min-vh-50"></div>
      <div className="tp-contact-area pt-30 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">{children}</div>
          </div>
        </div>
      </div>
      <FooterFour />
    </Wrapper>
  );
};

export default ChildWrapper;
