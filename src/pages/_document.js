import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="google-site-verification"
            content="JWLU4Y0DwH2eo1adty_AJMbmqBRWIKhZbuv_Qo6ZwEg"
          />
          {/* <title>
                        Digital Marketing & Website Development Company |
                        Digital Cappuccino
                    </title> */}

          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          {/* <meta
                        name="title"
                        content="Advertising Agency in Delhi - Digital Cappuccino"
                    /> */}
          {/* <meta
                        name="description"
                        content="Digital Cappuccino is a  Advertising Agency in Delhi agency in Delhi that helps businesses of all sizes grow their online presence. including web design, SEO, PPC."
                        key="desc"
                    /> */}
          <meta name="robots" content="index, follow" />
          {/* <link
            rel="canonical"
            href="https://www.digitalcappuccino.com/"
            key="canonical"
          /> */}
          {/* <meta property="og:title" content="Social Title for Cool Page" /> */}
          {/* <meta
            property="og:description"
            content="And a social description for our cool page"
          /> */}
          <meta
            property="og:image"
            content="https://www.digitalcappuccino.com/assets/img/logo/new-logo-design-v1-old.png"
          />
          {/* <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@YOUR_TWITTER_USERNAME" />
          <meta name="twitter:title" content="TITLE_FOR_YOUR_PAGE" />
          <meta
            name="twitter:description"
            content="DESCRIPTION_FOR_YOUR_PAGE"
          /> */}
          {/* <meta name="twitter:image" content="URL_FOR_YOUR_IMAGE" /> */}
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-KRNGKNZ");`,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-THBJDK3V');`,
            }}
          />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-168806078-1"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
             window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-276J3DSK1M');`,
            }}
          />

          {/* End Google Tag Manager */}
        </Head>

        <body>
          <Main />
          <NextScript />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KRNGKNZ"
height="0" width="0" style="display:none;visibility:hidden"/>`,
            }}
          />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KRNGKNZ"
height="0" width="0" style="display:none;visibility:hidden"/>`,
            }}
          />

          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-THBJDK3V"
              height="0"
              width="0"
              style="display:none;visibility:hidden"
            />`,
            }}
          />
          <Script
            id="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify([
                {
                  '@context': 'http://schema.org',
                  '@type': 'WebPage',
                  '@id':
                    'https://www.digitalcappuccino.com/social-media-marketing-services-gurgaon#webpage',
                  url: 'https://www.digitalcappuccino.com/social-media-marketing-services-gurgaon',
                  inLanguage: 'English',
                  name: 'Social Media Marketing',
                  description:
                    'Digital Cappuccino is the best social media marketing agency in Gurgaon. We offer social media services at the best prices to grow your brand.',
                  isPartOf: {
                    '@id': '#website',
                  },
                  about: [
                    {
                      '@type': 'Thing',
                      name: 'Digital Cappuccino',
                      sameAs: 'https://www.digitalcappuccino.com/',
                    },
                  ],
                  mentions: [
                    {
                      '@type': 'Thing',
                      name: 'Digital Cappuccino',
                      sameAs: 'https://www.digitalcappuccino.com/',
                    },
                  ],
                },
                {
                  '@context': 'https://schema.org',
                  '@type': 'ProfessionalService',
                  name: 'Digital Cappuccino',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress:
                      'Plot No. 136, 3rd Floor, Rider House, Sector 44',
                    addressLocality: 'Gurgaon',
                    addressRegion: 'Haryana',
                    postalCode: '122003',
                    addressCountry: 'India',
                  },
                  image:
                    'https://www.digitalcappuccino.com/assets/img/offcanvas/2.jpeg',
                  telephone: '+91 9910190071',
                  url: 'https://www.digitalcappuccino.com/',
                  logo: 'https://www.digitalcappuccino.com/assets/img/logo/logo-white.png',
                  sameAs: [
                    'https://www.instagram.com/digitalcappuccino/',
                    'https://www.linkedin.com/company/digital-cappuccino/',
                    'https://twitter.com/Digicappuccino',
                    'https://www.facebook.com/digitalcappuccino/',
                  ],
                  description:
                    'Digital Cappuccino is the best marketing agency in Gurgaon. We synthesize marketing programs and merge techniques to reach your goals.',
                  openingHours: 'Mo,Tu,We,Th,Fr,Sat 09:00-18:00',
                  geo: {
                    '@type': 'GeoCoordinates',
                    latitude: '28.45148344478403',
                    longitude: '77.07517561712757',
                  },
                  priceRange: 'Best Price Guaranteed',
                },
              ]),
            }}
          />
        </body>
      </Html>
    );
  }
}
