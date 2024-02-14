import { Wrapper } from '../layout';
import HomeFiveMain from '../components/homes/home-5';
import SEO from '../components/seo';
import Head from 'next/head';
import Script from 'next/script';

export default function index() {
  return (
    <Wrapper>
      {/* <SEO pageTitle={'Digital Cappuccino'} /> */}
      <Head>
        <title>
          {/* {pageTitle && `${pageTitle} || Digital Cappuccino - We Are Digital Marketing Advisors`} */}
          Best Marketing Agency in Gurgaon | Digital Cappuccino
        </title>
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
        {/* <meta name="google-site-verification" content="U9aKcrxVP2tdcuqCiLv34-jTZaj3CZ7Zew92miNTyIA" /> */}

        <link rel="icon" href="/favicon.ico" />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          src={`https://www.googletagmanager.com/gtag/js?id=AW-11192435865`}
          strategy="afterInteractive"
        />
        <script id="gtag-init" strategy="afterInteractive">
          {`
           window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11192435865');
        `}
        </script>
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
"@type": "Organization",
"name": "Digital Cappuccino",
"alternateName": "Advertising Agency",
"url": "https://www.digitalcappuccino.com/",
"logo": "https://www.digitalcappuccino.com/",
"sameAs": [
  "https://www.facebook.com/digitalcappuccino/",
  "https://twitter.com/Digicappuccino",
  "https://www.instagram.com/digitalcappuccino/",
  "https://www.youtube.com/@Digitalcappuccino_",
  "https://www.linkedin.com/company/digital-cappuccino/",
  "https://in.pinterest.com/digital_cappuccinoggn/"
]
}
`}
        </script>
        <script type="application/ld+json">
          {`
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Digital Cappuccino",
    "image": "https://www.digitalcappuccino.com/assets/img/hero/hero-5.1.png",
    "@id": "",
    "url": "https://www.digitalcappuccino.com/",
    "telephone": "+91 9910190071",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 136, 3rd Floor, Rider House, Sector 44",
      "addressLocality": "Gurgaon",
      "postalCode": "122003",
      "addressCountry": "IN"
    }
  }
  `}
        </script>
      </Head>

      <HomeFiveMain />
    </Wrapper>
  );
}
