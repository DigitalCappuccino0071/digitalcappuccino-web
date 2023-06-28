import Head from "next/head";
import React from "react";
import Script from "next/script";

const SEO = ({pageTitle, font}) => (
    <>
        <Head>
            <title>
                {pageTitle && `${pageTitle} || Digital Cappuccino - We Are Digital Marketing Advisors`}
            </title>
            <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
            <meta name="description"
                  content="Digital Cappuccino is the digital marketing partner for all businesses looking forward to playing with online media and growing their businesses with successive results."/>
            <meta name="robots" content="index, follow"/>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
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
