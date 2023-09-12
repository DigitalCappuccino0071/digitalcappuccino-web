import Head from "next/head";
import React from "react";
import Script from "next/script";

const SEO = ({pageTitle, font}) => (
    <>
        <Head>
            <title>
                {/* {pageTitle && `${pageTitle} || Digital Cappuccino - We Are Digital Marketing Advisors`} */}
                Advertising Agency in Delhi - Digital Cappuccino
            </title>
            <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
            <meta name="description"
                  content="Digital Cappuccino is a  Advertising Agency in Delhi agency in Delhi that helps businesses of all sizes grow their online presence. including web design, SEO, PPC."/>
            <meta name="robots" content="index, follow"/>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta property="og:title" content=" Advertising Agency in Delhi - Digital Cappuccino" />
        <meta
          property="og:description"
          content="Digital Cappuccino is a  Advertising Agency in Delhi agency in Delhi that helps businesses of all sizes grow their online presence. including web design, SEO, PPC."/>
            {/* <meta name="google-site-verification" content="U9aKcrxVP2tdcuqCiLv34-jTZaj3CZ7Zew92miNTyIA" /> */}


            {font && <link href={font} rel="stylesheet"/>}
            <link rel="icon" href="/favicon.ico"/>
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
        
    </>
);

export default SEO;
