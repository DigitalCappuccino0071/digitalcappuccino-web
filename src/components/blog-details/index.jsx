import React, { useEffect } from 'react';
import { FooterThree, Header, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import BlogDetailsArea from './blog-details-area';

const BlogDetails = ({ blog }) => {
  console.log(blog);
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      {/* <BlogHero title={"Blog Details"} /> */}
      <div style={{ paddingTop: '90px' }}>
        <BlogDetailsArea blog={blog} />
      </div>
      <FooterThree />
    </Wrapper>
  );
};

export default BlogDetails;
