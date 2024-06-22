import React from 'react';
import BlogMain from '../../components/blog';
import Head from 'next/head';
import { Wrapper } from '../../layout';

const index = () => {
  return (
    <Wrapper>
      {/* <SEO pageTitle={'Blog'} /> */}
      <Head>
        <title>Our Blogs - Digital Cappuccino</title>
        <meta
          name="description"
          content="Read the Digital Cappuccino Blogs to stay up-to-date on the latest trends"
        />
        <link rel="canonical" href="https://www.digitalcappuccino.com/blogs" />
        <meta property="og:title" content="Our Blogs - Digital Cappuccino" />
        <meta
          property="og:description"
          content="Read the Digital Cappuccino Blogs to stay up-to-date on the latest trends"
        />
        <meta
          property="og:url"
          content="https://www.digitalcappuccino.com/blogs"
        />
        <meta
          property="og:image"
          content="https://www.digitalcappuccino.com/assets/img/service/case-studies.png"
        />
      </Head>
      <BlogMain />
    </Wrapper>
  );
};

export default index;
