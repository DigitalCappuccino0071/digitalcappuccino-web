import React from 'react';
import { Wrapper } from '../layout';
import AboutMain from '../components/about';
import Head from 'next/head';
import Script from 'next/script';

const index = () => {
  return (
    <Wrapper>
      <Head>
        <title>About - US - Digital Cappuccino</title>
        <meta
          name="description"
          content="About Us Digital Cappuccino - Advertising Agency"
        />
        <link
          rel="canonical"
          href="https://www.digitalcappuccino.com/about-us"
        />
        <meta property="og:title" content="About - US - Digital Cappuccino" />
        <meta
          property="og:description"
          content="About Us Digital Cappuccino - Advertising Agency"
        />
        <meta
          property="og:url"
          content="https://www.digitalcappuccino.com/about-us"
        />
        <meta
          property="og:image"
          content="https://www.digitalcappuccino.com/assets/img/service/about-us.png"
        />
      </Head>
      <AboutMain />
    </Wrapper>
  );
};

export default index;
