import Head from 'next/head';
import React from 'react';
import Script from 'next/script';

const SEO = ({ pageTitle, font }) => (
  <>
    <Head>
      <title>Best Marketing Agency in Gurgaon | Digital Cappuccino</title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="description"
        content="Digital Cappuccino is the best marketing agency in Gurgaon. We synthesize marketing programs and merge techniques to reach your goals."
      />
      <meta name="robots" content="index, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        property="og:title"
        content="Best Marketing Agency in Gurgaon | Digital Cappuccino"
      />
      <meta
        property="og:description"
        content="Digital Cappuccino is the best marketing agency in Gurgaon. We synthesize marketing programs and merge techniques to reach your goals."
      />

      {font && <link href={font} rel="stylesheet" />}
      <link rel="icon" href="/favicon.ico" />
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

    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Digital Cappuccino',
            alternateName: 'Advertising Agency',
            url: 'https://www.digitalcappuccino.com/',
            logo: 'https://www.digitalcappuccino.com/',
            sameAs: [
              'https://www.facebook.com/digitalcappuccino/',
              'https://twitter.com/Digicappuccino',
              'https://www.instagram.com/digitalcappuccino/',
              'https://www.youtube.com/@Digitalcappuccino_',
              'https://www.linkedin.com/company/digital-cappuccino/',
              'https://in.pinterest.com/digital_cappuccinoggn/',
            ],
          },
        ]),
      }}
    />
  </>
);

export default SEO;
