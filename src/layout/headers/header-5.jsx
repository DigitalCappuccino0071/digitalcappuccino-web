import Link from "next/link";
import React from "react";
import useSticky from "../../hooks/use-sticky";
import Languages from "./component/languages";
import MobileMenu from "./mobile-menu";
import NavMenus from "./nav-menus";
import Head from "next/head";
import Script from "next/script";

const HeaderFive = () => {
  const { headerSticky } = useSticky();
  return (
    <React.Fragment>
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
          content="ILs5xsVp4CFP9OqfmzWejeNMwRFRwTIwQGfNXl5OTpc"
        />
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
      <header className="d-none d-lg-block">
        <div
          id="header-sticky"
          className={`tp-header-area-two tp-header-bs-area header-space-three
         pt-35  ${headerSticky ? "header-sticky" : ""}`}
        >
          <div className="container-fluid">
            <div className="row align-items-center justify-content-between">
              <div className="col-xxl-2 col-xl-2 col-lg-2">
                <div className="tp-logo text-start">
                  <Link href={"/"}>
                    <a>
                      <img
                        src="/assets/img/logo/new-logo-design-v1.png"
                        alt=""
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="tp-main-menu tp-menu-black tp-bs-menu text-center z-index-1 jus">
                  <nav id="mobile-menu">
                    {/* nav menus start */}
                    <NavMenus />
                    {/* nav menus end */}
                  </nav>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-3 col-lg-3">
                <div className="tp-header-left d-flex align-items-center justify-content-end ">
                  <div className="tp-header-yellow-button">
                    <Link href="/contact-us">
                      <a className="tp-btn-sky">{"let's connect"}</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- mobile-menu-area --> */}
      <MobileMenu logo={"new-logo-design-v1.png"} transparent={false} />
      {/* <!-- mobile-menu-area-end --> */}
    </React.Fragment>
  );
};

export default HeaderFive;
