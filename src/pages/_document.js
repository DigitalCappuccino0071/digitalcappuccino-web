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
          <title>
            Digital Marketing & Website Development Company | Digital Cappuccino
          </title>

          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="title"
            content="Advertising Agency in Delhi - Digital Cappuccino"
          />
          <meta
            name="description"
            content="Digital Cappuccino is a  Advertising Agency in Delhi agency in Delhi that helps businesses of all sizes grow their online presence. including web design, SEO, PPC."
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
            content="https://www.digitalcappuccino.com/assets/img/logo/new-logo-design-v1-old.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@YOUR_TWITTER_USERNAME" />
          <meta name="twitter:title" content="TITLE_FOR_YOUR_PAGE" />
          <meta
            name="twitter:description"
            content="DESCRIPTION_FOR_YOUR_PAGE"
          />
          <meta name="twitter:image" content="URL_FOR_YOUR_IMAGE" />
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
        </body>
      </Html>
    );
  }
}
