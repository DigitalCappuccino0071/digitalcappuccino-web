import React, { useEffect } from 'react';
import { FooterFour, FooterThree, Header, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';

import BlogArea from './blog-area';
import BlogHero from '../common/breadcrumb/BlogHero';

const Blog = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <BlogHero
        color={'#fec4c559'}
        title={'Blog'}
        imagePath={'/assets/img/service/case-studies.png'}
      />
      <BlogArea />
      <FooterFour />
    </Wrapper>
  );
};

export default Blog;
