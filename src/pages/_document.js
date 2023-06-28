import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="google-site-verification"
            content="ILs5xsVp4CFP9OqfmzWejeNMwRFRwTIwQGfNXl5OTpc"
          />
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
          <meta
            name="twitter:description"
            content="DESCRIPTION_FOR_YOUR_PAGE"
          />
          <meta name="twitter:image" content="URL_FOR_YOUR_IMAGE" />
        </Head>
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
