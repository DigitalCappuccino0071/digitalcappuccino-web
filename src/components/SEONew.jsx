import Head from 'next/head';
import React from 'react';
import Script from 'next/script';

const SEONew = ({ metaTitle, font, metaDescription, canonical }) => (
  <>
    <Head>
      <title>{metaTitle ?? 'title not found'}</title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content={metaDescription ?? ''} />
      <meta name="robots" content="index, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta property="og:title" content={metaTitle ?? ''} />
      <meta property="og:description" content={metaDescription ?? ''} />
      <link rel="canonical" href={canonical} key="canonical" />
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

    {/* <Script
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
    /> */}
  </>
);

export default SEONew;
