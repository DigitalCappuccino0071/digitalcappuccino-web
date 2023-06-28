import React, { useEffect } from "react";
import { FooterFour, HeaderFive, Wrapper } from "../../../layout";
import { animationCreate } from "../../../utils/utils";
import BlogArea from "./blog-area";
import BrandArea from "./brand-area";
import ClientFeedback from "./client-feedback";
import FeatureArea from "./feature-area";
import HeroArea from "./hero-area";
import MissionArea from "./mission-area";
import ProjectArea from "./project-area";
import ServicesArea from "./services-area";
import TeamArea from "./team-area";
import OurAffiliates from "./our-affiliates";
import Head from "next/head";
import Script from "next/script";

const HomeFive = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Head>
        <title>
          Digital Marketing & Website Development Company | Digital Cappuccino
        </title>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="description"
          content="Digital Cappuccino is a digital marketing Company in India. We provides website Development, Social Media Marketing, PPC Marketing, SEO and Email Marketing Services."
          key="desc"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.digitalcappuccino.com/"
          key="canonical"
        />
        <meta property="og:title" content="Social Title for Cool Page" />
        <meta
          property="og:description"
          content="And a social description for our cool page"
        />
        <meta
          property="og:image"
          content="https://example.com/images/cool-page.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YOUR_TWITTER_USERNAME" />
        <meta name="twitter:title" content="TITLE_FOR_YOUR_PAGE" />
        <meta name="twitter:description" content="DESCRIPTION_FOR_YOUR_PAGE" />
        <meta name="twitter:image" content="URL_FOR_YOUR_IMAGE" />
        <meta
          name="google-site-verification"
          content="U9aKcrxVP2tdcuqCiLv34-jTZaj3CZ7Zew92miNTyIA"
        />
      </Head>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
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
      <HeaderFive />
      <HeroArea />
      <FeatureArea />
      <ServicesArea />
      <MissionArea />
      <BrandArea />
      {/*<OurAffiliates/>*/}
      <ProjectArea />
      <TeamArea />
      <ClientFeedback />
      <BlogArea />
      <FooterFour />
    </Wrapper>
  );
};

export default HomeFive;
