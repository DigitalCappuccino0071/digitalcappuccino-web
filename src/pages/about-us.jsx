import React from "react";
import { Wrapper } from "../layout";
import AboutMain from "../components/about";
import Head from "next/head";
import Script from "next/script";

const index = () => {
  return (
    <Wrapper>
      <Head>
        <title>
          Best Marketing Agency in India | Top Marketing Companies in India
        </title>
        <meta
          name="description"
          content="Digital Cappuccino - offering you the world class Digital Marketing (SEO, SMO, SEM, PPC, Email Marketing) services provider agency."
          key="desc"
        />
        <link
          rel="canonical"
          href="https://www.digitalcappuccino.com/about-us"
          key="canonical"
        />
      </Head>
      <AboutMain />
    </Wrapper>
  );
};

export default index;
