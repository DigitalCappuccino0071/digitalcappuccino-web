import React from 'react';
import Link from 'next/link';
import useSticky from '../../hooks/use-sticky';
import Sidebar from '../../components/common/off-canvas';
import NavMenus from './nav-menus';
import MobileMenu from './mobile-menu';

const LandingPageHeader = () => {
  const { headerSticky } = useSticky();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  return (
    <React.Fragment>
      <header className="d-none d-lg-block">
        <div
          id="header-sticky"
          className={`tp-header-area header-transparent pl-165 pr-165 pt-35
        ${headerSticky ? 'header-sticky' : ''}`}
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-3">
                <div className="tp-logo">
                  <Link href="/">
                    <a>
                      <img
                        src="/assets/img/logo/new-logo-design-v1-old.png"
                        alt=""
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4"></div>
              <div className="col-xl-5 col-lg-5">
                <div className="justify-content-end align-items-center d-flex gap-4">
                  <div
                    className="tp-news-button wow tpfadeUp"
                    data-wow-duration=".7s"
                    data-wow-delay="1s"
                  >
                    <Link href="/contact-us">
                      <a className="tp-btn-lg-yellow-header">
                        Let&apos;s Connect
                      </a>
                    </Link>
                  </div>
                  <Link
                    href="https://wa.me/9910190071"
                    className="cursor-pointer"
                    target="_blank"
                  >
                    <i
                      className="fab fa-whatsapp fa-2x"
                      style={{ color: '#25D366!important' }}
                    ></i>
                  </Link>
                  <Link href="tel:9910190071">
                    <i
                      className="fas fa-phone fa-2x"
                      style={{ color: '#25D366' }}
                    ></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- mobile-menu-area --> */}
      <MobileMenu logo={'new-logo-design-v1-old.png'} />
      {/* <!-- mobile-menu-area-end --> */}

      {/* off canvas start */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      {/* off canvas end */}
    </React.Fragment>
  );
};

export default LandingPageHeader;
