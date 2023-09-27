import React from "react";
import SEO from "../components/seo";
import { Wrapper } from "../layout";
import ContactMain from "../components/contact";
import Head from "next/head";

const index = () => {
  return (
    <Wrapper>
      {/* <SEO pageTitle={"Contact Us"} /> */}
      <Head>
        <title>Contact - Us - Digital Cappuccino</title>
        <meta
          name="description"
          content="Contact Digital Cappuccino today to learn more."
        />
        <link
          rel="canonical"
          href="https://www.digitalcappuccino.com/contact-us"
        />
        <meta property="og:title" content="Contact - Us - Digital Cappuccino" />
        <meta
          property="og:description"
          content="Contact Digital Cappuccino today to learn more."
        />
        <meta
          property="og:url"
          content="https://www.digitalcappuccino.com/contact-us"
        />
        <meta
          property="og:image"
          content="https://www.digitalcappuccino.com/assets/img/contact/contact-1.jpg"
        />
      </Head>
      <ContactMain />
    </Wrapper>
  );
};

export default index;
