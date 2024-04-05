import React, { useEffect } from 'react';
import { FooterFour, FooterThree, Header, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import BlogArea from './blog-area';

const Blog = () => {
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
        title={'Blog'}
        imagePath={'/assets/img/service/case-studies.png'}
      />
      {/* <BlogArea /> */}
      <FooterFour />
    </Wrapper>
  );
};

export default Blog;
