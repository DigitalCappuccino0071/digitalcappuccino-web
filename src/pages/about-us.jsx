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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=AW-11192435865`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
           window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11192435865');
        `}
        </Script>
      </Head>
      <AboutMain />
    </Wrapper>
  );
};

export default index;
