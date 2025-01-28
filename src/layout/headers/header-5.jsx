import Link from "next/link";
import React from "react";
import useSticky from "../../hooks/use-sticky";
import Languages from "./component/languages";
import MobileMenu from "./mobile-menu";
import NavMenus from "./nav-menus";

const HeaderFive = () => {
    const { headerSticky } = useSticky();
    return (
        <React.Fragment>
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
                                                src="/assets/img/logo/new-logo-design-v1-old.png"
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
                                            <a className="tp-btn-sky">
                                                {"let's connect"}
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* <!-- mobile-menu-area --> */}
            <MobileMenu
                logo={"new-logo-design-v1-old.png"}
                transparent={false}
            />
            {/* <!-- mobile-menu-area-end --> */}
        </React.Fragment>
    );
};

export default HeaderFive;
