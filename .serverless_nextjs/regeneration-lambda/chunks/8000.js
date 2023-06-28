"use strict";
exports.id = 8000;
exports.ids = [8000];
exports.modules = {

/***/ 36740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);



const Breadcrumb = ({ title , color , imagePath , back_home , alt =false  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "breadcrumb__area pt-50 pb-5 include-bg p-relative min-vh-50",
        style: {
            background: color
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "ac-about-shape-img",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/assets/img/breadcrum/ab-shape-1.1.jpg",
                    alt: ""
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row d-flex justify-content-center align-items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 tp-hero-section-box-five",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "breadcrumb__content p-relative z-index-1",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "breadcrumb__title",
                                        children: title
                                    }),
                                    !back_home && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/contact-us",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            className: "tp-btn-white-border",
                                            children: [
                                                "let's Connect",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "far fa-arrow-right"
                                                })
                                            ]
                                        })
                                    }),
                                    back_home && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/contact-us",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            className: "tp-btn-white-border",
                                            children: [
                                                "Back to home ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "far fa-arrow-right"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: imagePath,
                                alt: alt,
                                className: "w-100 animationGirl",
                                "data-wow-duration": "2s",
                                "data-wow-delay": ".5s"
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumb);


/***/ }),

/***/ 97569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9008);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_3__);




const SEO = ({ pageTitle , font  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: pageTitle && `${pageTitle} || Digital Cappuccino - We Are Digital Marketing Advisors`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        httpEquiv: "x-ua-compatible",
                        content: "ie=edge"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Digital Cappuccino is the digital marketing partner for all businesses looking forward to playing with online media and growing their businesses with successive results."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "robots",
                        content: "index, follow"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
                    }),
                    font && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        href: font,
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {
                src: `https://www.googletagmanager.com/gtag/js?id=AW-11192435865`,
                strategy: "afterInteractive"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {
                id: "gtag-init",
                strategy: "afterInteractive",
                children: `
           window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11192435865');
        `
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEO);


/***/ }),

/***/ 35591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Hu": () => (/* reexport */ footer_5),
  "Fd": () => (/* reexport */ footer_4),
  "yD": () => (/* reexport */ footer_3),
  "iK": () => (/* reexport */ footer_2),
  "h4": () => (/* reexport */ header),
  "Aj": () => (/* reexport */ header_5),
  "T7": () => (/* reexport */ header_4),
  "Ef": () => (/* reexport */ header_3),
  "jS": () => (/* reexport */ header_2),
  "im": () => (/* reexport */ wrapper/* default */.Z)
});

// UNUSED EXPORTS: Footer, SocialLinks

// EXTERNAL MODULE: ./src/layout/wrapper.jsx
var wrapper = __webpack_require__(14025);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/hooks/use-sticky.js

const useSticky = ()=>{
    const { 0: headerSticky , 1: setHeaderSticky  } = (0,react.useState)(false);
    const stickyHeader = ()=>{
        if (window.scrollY > 80) {
            setHeaderSticky(true);
        } else {
            setHeaderSticky(false);
        }
    };
    (0,react.useEffect)(()=>{
        window.addEventListener("scroll", stickyHeader);
    }, []);
    return {
        headerSticky
    };
};
/* harmony default export */ const use_sticky = (useSticky);

;// CONCATENATED MODULE: ./src/layout/headers/menu-data.js
const menu_data = [
    {
        id: 1,
        mega_menu: false,
        has_dropdown: false,
        title: "Home",
        link: "/"
    },
    {
        id: 2,
        mega_menu: false,
        has_dropdown: true,
        title: "Our Services",
        link: "./website-development-company",
        sub_menus: [
            {
                link: "./website-development-company",
                title: "Website Development"
            },
            {
                link: "/digital-marketing-company",
                title: "digital Marketing"
            },
            {
                link: "./social-media-marketing-services",
                title: "Social Media Marketing"
            },
            {
                link: "./seo-services",
                title: "SEO Services"
            },
            {
                link: "/ppc-marketing-comapny",
                title: "PPC Marketing"
            },
            {
                link: "/email-marketing-services",
                title: "Email Marketing"
            }, 
        ]
    },
    {
        id: 5,
        mega_menu: false,
        has_dropdown: false,
        title: "Blogs",
        link: "/blogs"
    },
    {
        id: 4,
        mega_menu: false,
        has_dropdown: false,
        title: "Contact Us",
        link: "/contact-us"
    },
    {
        id: 3,
        mega_menu: false,
        has_dropdown: false,
        title: "About Us",
        link: "/about-us"
    }, 
];
/* harmony default export */ const headers_menu_data = (menu_data);

;// CONCATENATED MODULE: ./src/components/common/off-canvas/index.jsx




const sidebar_contents = {
    title: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            "We deploy world-class Creative ",
            /*#__PURE__*/ jsx_runtime.jsx("br", {}),
            " on demand."
        ]
    }),
    inst_imgs: [
        "/assets/img/offcanvas/1.jpeg",
        "/assets/img/offcanvas/2.jpeg",
        "/assets/img/offcanvas/4.jpg",
        "/assets/img/offcanvas/4.jpg", 
    ]
};
const { inst_imgs , title  } = sidebar_contents;
const Sidebar = ({ isOpen , setIsOpen  })=>{
    const { 0: navTitle , 1: setNavTitle  } = (0,react.useState)("");
    const openMobileMenu = (menu)=>{
        if (navTitle === menu) {
            setNavTitle("");
        } else {
            setNavTitle(menu);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "tp-offcanvas-area",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: `tpoffcanvas ${isOpen ? "opened" : ""}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "tpoffcanvas__logo",
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "/assets/img/logo/logo-white.png",
                                        alt: ""
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "tpoffcanvas__close-btn",
                            onClick: ()=>setIsOpen(false),
                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: "close-btn",
                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "fal fa-times-hexagon"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "tpoffcanvas__content d-none d-sm-block",
                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                children: title
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mobile-menu d-lg-none",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "mm-menu",
                                children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                    children: headers_menu_data.map((menu, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                            className: !menu.has_dropdown ? "" : navTitle === menu?.title ? "has-droupdown active" : "has-droupdown",
                                            children: [
                                                menu.has_dropdown && /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                    onClick: ()=>openMobileMenu(menu.title),
                                                    children: [
                                                        menu.title,
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                    className: navTitle === menu?.title ? "sub-menu active" : "sub-menu",
                                                    children: menu?.sub_menus?.map((sub, i)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: `${sub.link}`,
                                                                children: sub.title
                                                            })
                                                        }, i))
                                                }),
                                                !menu.has_dropdown && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: menu.link,
                                                    children: menu.title
                                                })
                                            ]
                                        }, i))
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "tpoffcanvas__contact",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: "Contact us"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: "fas fa-star"
                                                }),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "https://www.google.com/maps/place/Rider+House/ @28.4514806,77.0730605,17z/data=!4m7!3m6!1s0x390d18eb0ce0 8cd1:0x2406f413db6895ca!4b1!8m2!3d28.4515566!4d77.07524 37!16s%2Fg%2F11n6snwf9q",
                                                    target: "blank",
                                                    children: "Plot No. 136, 3rd Floor, Rider House, Sector 44, 122003"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: "fas fa-star"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "tel:919910190071",
                                                    children: "+91 9910190071"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: "fas fa-star"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "mailto:(info@digitalcappuccino.com)",
                                                    children: "info@digitalcappuccino.com"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "tpoffcanvas__input d-none d-sm-block",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: "Get UPdate"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                    className: "p-relative",
                                    action: "#",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            type: "text",
                                            placeholder: "Enter mail"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            type: "submit",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                className: "fas fa-paper-plane"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "tpoffcanvas__instagram d-none d-sm-block",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: "Check Instagram POst"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "tp-insta",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-3 col-sm-3",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    target: "_blank",
                                                    href: "https://www.instagram.com/p/CrIyTHnNiZf/",
                                                    rel: "noreferrer",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: "/assets/img/offcanvas/2.jpeg",
                                                        alt: ""
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-3 col-sm-3",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    target: "_blank",
                                                    href: "https://www.instagram.com/p/CsqcmISL8LY/",
                                                    rel: "noreferrer",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: "/assets/img/offcanvas/1.jpeg",
                                                        alt: ""
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-3 col-sm-3",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    target: "_blank",
                                                    href: "https://www.instagram.com/p/Cs3BnWvgnIz/",
                                                    rel: "noreferrer",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: "/assets/img/offcanvas/4.jpg",
                                                        alt: ""
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-3 col-sm-3",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    target: "_blank",
                                                    href: "https://www.instagram.com/p/CstRxFFJYmV/",
                                                    rel: "noreferrer",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: "/assets/img/offcanvas/3.jpg",
                                                        alt: ""
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                onClick: ()=>setIsOpen(false),
                className: `body-overlay ${isOpen ? "apply" : ""}`
            })
        ]
    });
};
/* harmony default export */ const off_canvas = (Sidebar);

;// CONCATENATED MODULE: ./src/layout/headers/nav-menus.jsx




const NavMenus = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("ul", {
        className: "flex  justify-content-center",
        children: headers_menu_data.map((menu, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                className: `${menu.has_dropdown ? "has-dropdown" : ""}
      ${menu.mega_menu ? "has-mega-menu" : ""}`,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: menu.link,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                            children: [
                                menu.title,
                                " ",
                                menu.has_dropdown && /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "fal fa-angle-down"
                                })
                            ]
                        })
                    }),
                    menu.has_dropdown && /*#__PURE__*/ jsx_runtime.jsx("ul", {
                        className: "submenu text-start",
                        children: menu.sub_menus.map((sub_m, i)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: sub_m.link,
                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        children: sub_m.title
                                    })
                                })
                            }, i))
                    })
                ]
            }, i))
    });
};
/* harmony default export */ const nav_menus = (NavMenus);

;// CONCATENATED MODULE: ./src/layout/headers/mobile-menu.jsx





const MobileMenu = ({ logo , bg , transparent =true  })=>{
    const { headerSticky  } = use_sticky();
    const [sidebarOpen, setSidebarOpen] = react.useState(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                id: "header-sticky-mobile",
                className: `tp-md-menu ${transparent ? "header-transparent" : ""} d-lg-none pt-40 pb-40 
    ${bg ? bg : ""} ${headerSticky ? "header-sticky" : ""}`,
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-6",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "tp-logo",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: `/assets/img/logo/${logo}`,
                                            alt: ""
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-6",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "bar text-end",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        className: "tp-menu-bar",
                                        onClick: ()=>setSidebarOpen(true),
                                        type: "button",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: "fal fa-bars"
                                        })
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(off_canvas, {
                isOpen: sidebarOpen,
                setIsOpen: setSidebarOpen
            })
        ]
    });
};
/* harmony default export */ const mobile_menu = (MobileMenu);

;// CONCATENATED MODULE: ./src/layout/headers/header.jsx







const Header = ()=>{
    const { headerSticky  } = use_sticky();
    const [sidebarOpen, setSidebarOpen] = react.useState(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("header", {
                className: "d-none d-lg-block",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    id: "header-sticky",
                    className: `tp-header-area header-transparent pl-165 pr-165 pt-35 
        ${headerSticky ? "header-sticky" : ""}`,
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "container-fluid",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xl-3 col-lg-3",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "tp-logo",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: "/assets/img/logo/new-logo-design-v1.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xl-7 col-lg-7",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "tp-main-menu",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("nav", {
                                            id: "mobile-menu",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(nav_menus, {})
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xl-2 col-lg-2",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "tp-menu-bar text-end",
                                        onClick: ()=>setSidebarOpen(true),
                                        children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                className: "fal fa-bars"
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(mobile_menu, {
                logo: "new-logo-design-v1.png"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(off_canvas, {
                isOpen: sidebarOpen,
                setIsOpen: setSidebarOpen
            })
        ]
    });
};
/* harmony default export */ const header = (Header);

// EXTERNAL MODULE: ./src/svg/index.js + 20 modules
var svg = __webpack_require__(94894);
;// CONCATENATED MODULE: ./src/layout/footers/footer.jsx




const footer_contents = {
    title: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            "More than 10 years in the game and ",
            "we're",
            " ",
            /*#__PURE__*/ jsx_runtime.jsx("br", {}),
            " just getting started.\uD83E\uDD1D"
        ]
    }),
    btn_text: "Available for new Project",
    copyRight_text: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            "\xa9 ",
            new Date().getFullYear(),
            " Creative Agency , All Right Receved."
        ]
    }),
    conditions: [
        "Support",
        "Privacy policy",
        "Terms and conditions"
    ],
    logo: "/assets/img/copyright/copyright-logo.png",
    social_links: [
        "fab fa-linkedin-in",
        "fab fa-facebook-f",
        "fab fa-instagram",
        "fab fa-youtube"
    ]
};
const { btn_text , conditions , copyRight_text , logo , social_links , title: footer_title  } = footer_contents;
const Footer = ()=>{
    return /*#__PURE__*/ _jsxs("footer", {
        className: "p-relative",
        children: [
            /*#__PURE__*/ _jsx("button", {
                className: "scrollTop d-none d-md-block",
                "data-target": "html",
                children: /*#__PURE__*/ _jsx(Link, {
                    href: "/",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "tp-backto-top",
                        children: /*#__PURE__*/ _jsx(UpArrow, {})
                    })
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "footer-clip-shape",
                children: /*#__PURE__*/ _jsx(ClipPath, {})
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "tp-clip-height-one"
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "tp-clip-height-two"
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "tp-footer-area tp-footer-space black-bg p-relative fix pt-0",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "tp-footer-border-shape d-none"
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "tp-footer-border-shape-two"
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "circle-animation footer-animation d-none d-md-block",
                        children: /*#__PURE__*/ _jsx("span", {
                            className: "tp-circle-3"
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "tp-footer-widget wow tpfadeUp",
                            "data-wow-duration": ".5s",
                            "data-wow-delay": ".5s",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "row align-items-center",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "col-xl-7 col-lg-7 col-md-7 col-12",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            className: "tp-footer-top",
                                            children: /*#__PURE__*/ _jsx("h5", {
                                                className: "tp-footer-title",
                                                children: footer_title
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "col-xl-5 col-lg-5 col-md-5 col-12",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            className: "tp-footer-button text-start text-md-end",
                                            children: /*#__PURE__*/ _jsx(Link, {
                                                href: "/contact-us",
                                                children: /*#__PURE__*/ _jsxs("a", {
                                                    className: "tp-btn",
                                                    children: [
                                                        btn_text,
                                                        /*#__PURE__*/ _jsx("i", {
                                                            className: "far fa-arrow-right"
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "tp-copyright-area pb-90 wow tpfadeUp",
                        "data-wow-duration": ".5s",
                        "data-wow-delay": ".7s",
                        children: /*#__PURE__*/ _jsxs("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "tp-copyright-box align-items-center",
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        className: "row align-items-center",
                                        children: [
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "col-xl-5 col-lg-5 col-md-5 col-12",
                                                children: /*#__PURE__*/ _jsx("div", {
                                                    className: "tp-copyright-text z-index-1",
                                                    children: /*#__PURE__*/ _jsx("p", {
                                                        className: "m-0",
                                                        children: copyRight_text
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "col-xl-7 col-lg-7 col-md-7 col-12",
                                                children: /*#__PURE__*/ _jsx("div", {
                                                    className: "tp-copyright-right text-md-end text-start",
                                                    children: conditions.map((c, i)=>/*#__PURE__*/ _jsx("a", {
                                                            href: "#",
                                                            children: c
                                                        }, i))
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "tp-copyright-logo-box",
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        className: "row align-items-center",
                                        children: [
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "col-xl-4 col-lg-4 col-md-4 col-12",
                                                children: /*#__PURE__*/ _jsx("div", {
                                                    className: "tp-copyright-logo mt-35",
                                                    children: /*#__PURE__*/ _jsx(Link, {
                                                        href: "/",
                                                        children: /*#__PURE__*/ _jsx("a", {
                                                            children: /*#__PURE__*/ _jsx("img", {
                                                                src: logo,
                                                                alt: ""
                                                            })
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "col-xl-8 col-lg-8 col-md-8 col-12",
                                                children: /*#__PURE__*/ _jsx("div", {
                                                    className: "tp-copyright-social text-md-end mt-25",
                                                    children: social_links.map((s, i)=>/*#__PURE__*/ _jsx("a", {
                                                            href: "#",
                                                            children: /*#__PURE__*/ _jsx("i", {
                                                                className: s
                                                            })
                                                        }, i))
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const footer = ((/* unused pure expression or super */ null && (Footer)));

;// CONCATENATED MODULE: ./src/layout/headers/header-2.jsx






const HeaderTwo = ()=>{
    const { headerSticky  } = use_sticky();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("header", {
                className: "d-none d-lg-block",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    id: "header-sticky",
                    className: `tp-header-area-two header-transparent header-space-three pl-115 pr-115
         ${headerSticky ? "header-sticky" : ""}`,
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "container-fluid",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row align-items-center header-space-two",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xxl-2 col-xl-2 col-lg-2",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "tp-logo text-start",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: "/assets/img/logo/new-logo-design-v1.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xxl-6 col-xl-6 col-lg-6",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "tp-main-menu text-center",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("nav", {
                                            id: "mobile-menu",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(nav_menus, {})
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xxl-2 col-xl-2 col-lg-2",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "tp-header-button text-end",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/contact-us",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                className: "tp-btn",
                                                children: "Let’s Talk \uD83D\uDC4B"
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(mobile_menu, {
                logo: "logo-blue.png"
            })
        ]
    });
};
/* harmony default export */ const header_2 = (HeaderTwo);

;// CONCATENATED MODULE: ./src/layout/footers/footer-2.jsx



const footer_2_footer_contents = {
    shapes: [
        {
            num: "one",
            img: "/assets/img/creative/creative-hand.png"
        },
        {
            num: "two",
            img: "/assets/img/service/service-1.png"
        }, 
    ],
    title: "Let’s build something together",
    text: "Digital Cappuccino is the digital marketing partner for all businesses looking forward to playing with" + " online media and growing their businesses with successive results.",
    btn_text: "Contact us",
    copy_right_text: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            "\xa9 ",
            new Date().getFullYear(),
            " Personal Portfolio , All Right Received."
        ]
    }),
    copy_right_menu: [
        "Case Studies",
        "Pricing Plan"
    ],
    // social_links: ['fab fa-linkedin-in', 'fab fa-facebook-f', 'fab fa-instagram', 'fab fa-youtube'],
    social_links: [
        {
            icon: "fab fa-instagram",
            link: "https://www.instagram.com/digitalcappuccino/"
        },
        {
            icon: "fab fa-linkedin-in",
            link: "https://www.linkedin.com/company/digital-cappuccino/"
        },
        {
            icon: "fab fa-youtube",
            link: "https://www.youtube.com/channel/UCPo5vk6L7UrnQcJ5faDdT0Q"
        },
        {
            icon: "fab fa-twetter",
            link: "https://twitter.com/Digicappuccino"
        }, 
    ]
};
const { shapes , btn_text: footer_2_btn_text , copy_right_menu , copy_right_text , social_links: footer_2_social_links , text: footer_2_text , title: footer_2_title  } = footer_2_footer_contents;
const FooterTwo = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("footer", {
        className: "p-relative",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "tp-footer-area pt-120 p-relative",
            children: [
                shapes.map((s, i)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: `tp-footer-shape-${s.num}`,
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: s.img,
                            alt: ""
                        })
                    }, i)),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xl-12 wow tpfadeUp",
                                "data-wow-duration": ".3s",
                                "data-wow-delay": ".5s",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "footer-widget-info text-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "tp-footer-title pb-15",
                                            children: footer_2_title
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: footer_2_text
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/contact-us",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                className: "tp-btn mb-50",
                                                children: footer_2_btn_text
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "right-receved",
                                            children: copy_right_text
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "tp-copyright-bottom wow tpfadeUp",
                            "data-wow-duration": ".5s",
                            "data-wow-delay": ".7s",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "row align-items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-xl-4 col-lg-4 col-md-12 col-12",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "tp-copyright-logo-box text-md-center text-center text-lg-start mb-30",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "tp-copyright-logo",
                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: "/assets/img/logo/logo-blue.png",
                                                            alt: ""
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-xl-4 col-lg-4 col-md-6 col-sm-6",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "tp-cpoyright-menu text-md-start text-center text-lg-center mb-30",
                                            children: copy_right_menu.map((m, i)=>/*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "#",
                                                    children: m
                                                }, i))
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-xl-4 col-lg-4 col-md-6 col-sm-6",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "tp-copyright-social tp-copyright-social-two text-center text-lg-end mb-30",
                                            children: footer_2_social_links.map((s, i)=>/*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: s.link,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: s.icon
                                                    })
                                                }, i))
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const footer_2 = (FooterTwo);

;// CONCATENATED MODULE: ./src/layout/headers/header-3.jsx






const HeaderThree = ()=>{
    const { headerSticky  } = use_sticky();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("header", {
                className: "d-none d-lg-block",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    id: "header-sticky",
                    className: `tp-header-area header-transparent hasdropdown-white pl-170 
        pr-170 ${headerSticky ? "header-sticky" : ""}`,
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "container-fluid",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xxl-2 col-xl-2 col-lg-2",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "tp-logo text-start",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: "/assets/img/logo/new-logo-design-v1.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xxl-6 col-xl-6 col-lg-6 tp-menu-white",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "tp-main-menu",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("nav", {
                                            id: "mobile-menu",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(nav_menus, {})
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xxl-2 col-xl-2 col-lg-2",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "tp-header-left d-flex align-items-center justify-content-end",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "tp-header-login tp-login-primary d-lg-none d-xl-block",
                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "/login",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        children: "Login"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "tp-header-yellow-button ml-55",
                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "/contact-us",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        className: "tp-btn-yellow-semilar",
                                                        children: "Get Digital Cappuccino Free"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(mobile_menu, {
                logo: "logo-white.png",
                bg: "tp-green-bg"
            })
        ]
    });
};
/* harmony default export */ const header_3 = (HeaderThree);

// EXTERNAL MODULE: ./src/layout/social-links.jsx
var layout_social_links = __webpack_require__(22797);
;// CONCATENATED MODULE: ./src/layout/footers/component/copyright-area.jsx


const CopyrightArea = ({ copy_right_text ="" , conditions =[] , color =""  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "tp-copyright-area",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "copyright-border pt-30 wow tpfadeUp",
                "data-wow-duration": ".5s",
                "data-wow-delay": ".7s",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xl-6 col-lg-6 col-12",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "tp-copyright-left text-lg-start text-start text-md-center",
                                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: `${color ? "text-black" : ""}`,
                                    children: copy_right_text
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xl-6 col-lg-6 col-12",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: `tp-copyright-right ${color} text-start text-md-center text-lg-end`,
                                children: conditions.map((c, i)=>/*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "#",
                                        children: c.text
                                    }, i))
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const copyright_area = (CopyrightArea);

;// CONCATENATED MODULE: ./src/layout/footers/footer-3.jsx





const footer_3_footer_contents = {
    logo: "/assets/img/logo/logo-white.png",
    widget_desc: "Digital Cappuccino is the digital marketing partner for all businesses looking forward to playing with online media and growing their businesses with successive results.",
    footer_widgets: [
        {
            w_class: "d-flex justify-content-lg-center",
            title: "Useful Links",
            widget_lists: [
                "Contact us",
                "How it Works",
                "Create",
                "Explore",
                "Terms & Services", 
            ]
        },
        {
            padd: "pl-20",
            title: "Community",
            widget_lists: [
                "Help Center",
                "Partners",
                "Suggestions",
                "Blog",
                "Newsletters", 
            ]
        }, 
    ],
    subscribe_title: "Subscribe Newsletter",
    subscribe_text: "By registering or subscribing to our services, The user accepts receiving the subscription email about digitalcappuccino.com " + " service updates or other promotional offers.",
    copy_right_text: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            "\xa9 Copyright \xa9",
            new Date().getFullYear(),
            " Digital Cappuccino. All Rights Reserved Copyright"
        ]
    }),
    conditions: [
        "Terms and conditions",
        "Privacy policy",
        "Login / Signup"
    ]
};
const { conditions: footer_3_conditions , copy_right_text: footer_3_copy_right_text , footer_widgets , logo: footer_3_logo , widget_desc , subscribe_text , subscribe_title ,  } = footer_3_footer_contents;
const FooterThree = ({ home_four =false  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(react.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("footer", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "tp-footer-area black-bg pt-130 pb-30",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row wow tpfadeUp",
                            "data-wow-duration": ".3s",
                            "data-wow-delay": ".5s",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xl-3 col-lg-4 col-md-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "tp-footer-widget",
                                        children: [
                                            !home_four && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "tp-footer-widget__logo mb-30",
                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: footer_3_logo,
                                                            alt: ""
                                                        })
                                                    })
                                                })
                                            }),
                                            home_four && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "tp-footer-widget__title mb-30",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    className: "footer-title",
                                                    children: "About Digital Cappuccino"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "tp-footer-widget__text mb-30",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: widget_desc
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "tp-footer-widget__social-link",
                                                children: /*#__PURE__*/ jsx_runtime.jsx(layout_social_links/* default */.Z, {})
                                            })
                                        ]
                                    })
                                }),
                                footer_widgets.map((w, i)=>{
                                    const { title , widget_lists , w_class , padd  } = w;
                                    return /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: `col-xl-3 col-lg-2 col-md-6 ${w_class ? w_class : ""}`,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: `tp-footer-widget ${padd ? padd : ""}`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "tp-footer-widget__title pb-15",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        className: "footer-title",
                                                        children: title
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "tp-footer-widget__list",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                        children: widget_lists.map((l, i)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    href: "#",
                                                                    children: l
                                                                })
                                                            }, i))
                                                    })
                                                })
                                            ]
                                        })
                                    }, i);
                                }),
                                !home_four && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xl-3 col-lg-4 col-md-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "tp-footer-widget",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "tp-footer-widget__title pb-15",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    className: "footer-title",
                                                    children: subscribe_title
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "tp-footer-widget__text mb-55",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: subscribe_text
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "tp-footer-widget__input",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                                    onSubmit: (e)=>e.preventDefault(),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                            type: "text",
                                                            placeholder: "Enter Mail"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                            type: "submit",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fas fa-paper-plane"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                home_four && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xl-3 col-lg-3 col-md-6 col-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "tp-footer-widget",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "tp-footer-widget__title mb-40",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    className: "footer-title",
                                                    children: "Instagram post"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "row gx-3",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(InstagramItem, {
                                                        img: "1"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx(InstagramItem, {
                                                        img: "2"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx(InstagramItem, {
                                                        img: "3"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx(InstagramItem, {
                                                        img: "4"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx(InstagramItem, {
                                                        img: "5"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx(InstagramItem, {
                                                        img: "6"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(copyright_area, {
                        copy_right_text: footer_3_copy_right_text,
                        conditions: footer_3_conditions
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const footer_3 = (FooterThree);
const InstagramItem = ({ img  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "tp-footer-widget__tp-insta-img mb-15",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("img", {
                    className: "w-100",
                    src: `/assets/img/footer/footer-${img}.jpg`,
                    alt: ""
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "tp-footer-widget__tp-insta-img-icon",
                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: "#",
                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                            className: "fab fa-instagram"
                        })
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/layout/headers/header-4.jsx






const HeaderFour = ()=>{
    const { headerSticky  } = use_sticky();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("header", {
                className: "d-none d-lg-block",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    id: "header-sticky",
                    className: `tp-header-area-two header-transparent header-space-three pl-115 pr-115 pt-35 ${headerSticky ? "header-sticky" : ""}`,
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "container-fluid",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xxl-2 col-xl-2 col-lg-2",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "tp-logo text-start",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: "/assets/img/logo/new-logo-design-v1.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xxl-6 col-xl-6 col-lg-6",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "tp-main-menu tp-menu-black text-center",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("nav", {
                                            id: "mobile-menu",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(nav_menus, {})
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xxl-4 col-xl-3 col-lg-3",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "tp-header-left d-flex align-items-center justify-content-end",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "tp-header-login login-color-black d-none d-xxl-block ",
                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "/login",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fal fa-user"
                                                            }),
                                                            " Login"
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "tp-header-yellow-button tp-yellow-space",
                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "/contact-us",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        className: "tp-btn-black",
                                                        children: "Let’s Talk \uD83D\uDC4B"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(mobile_menu, {
                logo: "logo-blue.png"
            })
        ]
    });
};
/* harmony default export */ const header_4 = (HeaderFour);

;// CONCATENATED MODULE: ./src/layout/headers/component/languages.jsx


const Languages = ()=>{
    return /*#__PURE__*/ _jsxs("ul", {
        children: [
            /*#__PURE__*/ _jsx("li", {
                children: /*#__PURE__*/ _jsx("a", {
                    href: "#",
                    children: "English"
                })
            }),
            /*#__PURE__*/ _jsx("li", {
                children: /*#__PURE__*/ _jsx("a", {
                    href: "#",
                    children: "Arabic"
                })
            }),
            /*#__PURE__*/ _jsx("li", {
                children: /*#__PURE__*/ _jsx("a", {
                    href: "#",
                    children: "Spanish"
                })
            })
        ]
    });
};
/* harmony default export */ const languages = ((/* unused pure expression or super */ null && (Languages)));

;// CONCATENATED MODULE: ./src/layout/headers/header-5.jsx







const HeaderFive = ()=>{
    const { headerSticky  } = use_sticky();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("header", {
                className: "d-none d-lg-block",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    id: "header-sticky",
                    className: `tp-header-area-two tp-header-bs-area header-space-three
         pt-35  ${headerSticky ? "header-sticky" : ""}`,
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "container-fluid",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row align-items-center justify-content-between",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xxl-2 col-xl-2 col-lg-2",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "tp-logo text-start",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: "/assets/img/logo/new-logo-design-v1.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xxl-6 col-xl-6 col-lg-6",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "tp-main-menu tp-menu-black tp-bs-menu text-center z-index-1 jus",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("nav", {
                                            id: "mobile-menu",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(nav_menus, {})
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xxl-4 col-xl-3 col-lg-3",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "tp-header-left d-flex align-items-center justify-content-end ",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "tp-header-yellow-button",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "/contact-us",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    className: "tp-btn-sky",
                                                    children: "let's connect"
                                                })
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(mobile_menu, {
                logo: "new-logo-design-v1.png",
                transparent: false
            })
        ]
    });
};
/* harmony default export */ const header_5 = (HeaderFive);

;// CONCATENATED MODULE: ./src/layout/footers/footer-4.jsx





const footer_4_footer_contents = {
    shapes: [
        "hero-shape-5.1.png",
        "testimonial-shape-5.4.png"
    ],
    logo: "/assets/img/logo/new-logo-design-v1.png",
    widget_desc: "From Strategy to Execution, Digital Cappuccino Delivers Results- Your Digital Marketing Enthusiasts",
    footer_widgets: [
        {
            w_class: "d-flex justify-content-lg-center",
            title: "Useful Links",
            widget_lists: [
                {
                    id: 1,
                    text: "Home",
                    link: "/"
                },
                // {
                //   id: 4,
                //   text: "Case Studies",
                //   link: "/blog",
                // },
                {
                    id: 4,
                    text: "Contact US",
                    link: "/contact-us"
                },
                {
                    id: 2,
                    text: "About Us",
                    link: "/about-us"
                }, 
            ]
        },
        {
            padd: "pl-20",
            title: "Our Services",
            widget_lists: [
                {
                    id: 1,
                    text: "Website Development",
                    link: "./website-development-company"
                },
                {
                    id: 2,
                    text: "Digital Marketing",
                    link: "/digital-marketing-company"
                },
                {
                    id: 3,
                    text: "Social Media Marketing",
                    link: "/social-media-marketing-services"
                },
                {
                    id: 4,
                    text: "SEO Services",
                    link: "/seo-services"
                },
                {
                    id: 4,
                    text: "Pay-Per Click",
                    link: "/ppc-marketing-comapny"
                },
                {
                    id: 5,
                    text: "Email Marketing",
                    link: "/email-marketing-services"
                }, 
            ]
        }, 
    ],
    subscribe_title: "Subscribe to our Newsletter",
    subscribe_text: /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: "To keep up to date with what's advanced and make informed choices about the services we offer, subscribe to our newsletter."
    }),
    copy_right_text: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            "\xa9 Copyright \xa9",
            new Date().getFullYear(),
            " Digital Cappuccino. All Rights Reserved Copyright"
        ]
    }),
    conditions: [
        {
            id: 1,
            text: "Terms and conditions"
        },
        {
            id: 2,
            text: "Privacy policy"
        }, 
    ]
};
const { conditions: footer_4_conditions , copy_right_text: footer_4_copy_right_text , footer_widgets: footer_4_footer_widgets , logo: footer_4_logo , widget_desc: footer_4_widget_desc , subscribe_text: footer_4_subscribe_text , subscribe_title: footer_4_subscribe_title , shapes: footer_4_shapes ,  } = footer_4_footer_contents;
const FooterFour = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("footer", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "tp-footer-area pt-60 pb-15 p-relative",
            children: [
                footer_4_shapes.map((s, i)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: `bp-foooter-shape-${i + 1} d-none d-lg-block`,
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: `/assets/img/footer/${s}`,
                            alt: ""
                        })
                    }, i)),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row wow tpfadeUp",
                        "data-wow-duration": ".3s",
                        "data-wow-delay": ".5s",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xl-3 col-lg-4 col-md-6",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "tp-footer-widget",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "tp-footer-widget__logo mb-30",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: footer_4_logo,
                                                        alt: ""
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "tp-footer-widget__text mb-45",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                children: footer_4_widget_desc
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "tp-footer-widget__social-link tp-footer-widget__social-link-2 text-nowrap",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(layout_social_links/* default */.Z, {})
                                        })
                                    ]
                                })
                            }),
                            footer_4_footer_widgets.map((w, i)=>{
                                const { title , widget_lists , w_class , padd  } = w;
                                return /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: `col-xl-3 col-lg-2 col-md-6 ${w_class ? w_class : ""}`,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: `tp-footer-widget ${padd ? padd : ""}`,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "tp-footer-widget__title pb-15",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    className: "footer-title text-black",
                                                    children: title
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "tp-footer-widget__list",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                    children: widget_lists.map((l, i)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                href: l.link,
                                                                children: l.text
                                                            })
                                                        }, i))
                                                })
                                            })
                                        ]
                                    })
                                }, i);
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xl-3 col-lg-4 col-md-6",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "tp-footer-widget",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "tp-footer-widget__title pb-15",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                className: "footer-title text-black",
                                                children: footer_4_subscribe_title
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "tp-footer-widget__text mb-55",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                children: footer_4_subscribe_text
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "tp-footer-widget__input tp-input-white",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                                onSubmit: (e)=>e.preventDefault(),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                        type: "text",
                                                        placeholder: "Enter Mail"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                        type: "submit",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            className: "fas fa-paper-plane"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx(copyright_area, {
                    copy_right_text: footer_4_copy_right_text,
                    conditions: footer_4_conditions,
                    color: "tp-copyright-color"
                })
            ]
        })
    });
};
/* harmony default export */ const footer_4 = (FooterFour);

;// CONCATENATED MODULE: ./src/layout/footers/footer-5.jsx




const footer_5_footer_contents = {
    shapes: [
        "footer/testimonial-shape-5.4.png",
        "footer/team-shape-5.3.png"
    ],
    title: "Discover our collax inner system",
    sm_text: "Digital Cappuccino is the digital marketing partner for all businesses looking forward to playing with online media and growing " + "their businesses with successive results.",
    btn_text: "Contact us",
    copy_right: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            "\xa9 ",
            new Date().getFullYear(),
            " Personal Portfolio , All Right Receved."
        ]
    }),
    logo: "/assets/img/logo/logo-white.png"
};
const { shapes: footer_5_shapes , title: footer_5_title , sm_text , btn_text: footer_5_btn_text , copy_right , logo: footer_5_logo  } = footer_5_footer_contents;
const FooterFive = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("footer", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "tp-footer-area pt-120 p-relative black-bg p-relative",
            children: [
                footer_5_shapes.map((s, i)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: `bs-footer-shape-${i + 1} d-none d-lg-block`,
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: `/assets/img/${s}`,
                            alt: ""
                        })
                    }, i)),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xl-12 wow tpfadeUp",
                                "data-wow-duration": ".3s",
                                "data-wow-delay": ".5s",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "footer-widget-info bp-footer-widget-color text-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "tp-footer-title text-white pb-15",
                                            children: footer_5_title
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: sm_text
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            className: "tp-btn-sky mb-50",
                                            href: "#",
                                            children: footer_5_btn_text
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "right-receved",
                                            children: copy_right
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "tp-copyright-bottom pb-90 wow tpfadeUp",
                            "data-wow-duration": ".5s",
                            "data-wow-delay": ".7s",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "row align-items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-xl-4 col-lg-4 col-md-12 col-12",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "tp-copyright-logo-box mb-30",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "tp-copyright-logo text-center text-lg-start",
                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: footer_5_logo,
                                                            alt: ""
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-xl-4 col-lg-4 col-md-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "tp-cpoyright-menu bp-cpoyright-menu text-md-start text-center text-lg-center mb-30",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "#",
                                                    children: "Case Studies"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "#",
                                                    children: "Pricing Plan"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-xl-4 col-lg-4 col-md-6",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "tp-copyright-social bp-copyright-social tp-copyright-social-two text-center text-lg-end mb-30",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(layout_social_links/* default */.Z, {})
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const footer_5 = (FooterFive);

;// CONCATENATED MODULE: ./src/layout/index.jsx















/***/ }),

/***/ 22797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ HeroSocials),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);


const social_links = [
    {
        link: "https://www.facebook.com/digitalcappuccino/",
        target: "_blank",
        icon: "fab fa-facebook",
        color: "#4267B2"
    },
    {
        link: "https://www.instagram.com/digitalcappuccino/",
        target: "_blank",
        icon: "fab fa-instagram",
        color: "rgb(228, 64, 95)"
    },
    {
        link: "https://www.linkedin.com/company/digital-cappuccino/",
        target: "_blank",
        icon: "fab fa-linkedin",
        color: "#0072b1"
    },
    {
        link: "https://www.youtube.com/@Digitalcappuccino_",
        target: "_blank",
        icon: "fab fa-youtube",
        color: "#FF0000"
    },
    {
        link: "https://twitter.com/Digicappuccino",
        target: "_blank",
        icon: "fab fa-twitter",
        color: "#1DA1F2"
    }, 
];
const hero_socials = [
    {
        num: 1,
        link: "https://www.facebook.com/digitalcappuccino/",
        target: "_blank",
        icon: "fab fa-facebook-f social-icon-1",
        title: "Facebook"
    },
    {
        num: 3,
        link: "https://youtube.com/@Digitalcappuccino_",
        target: "_blank",
        icon: "fab fa-youtube social-icon-3",
        title: "Youtube"
    },
    {
        num: 2,
        link: "https://twitter.com/Digicappuccino",
        target: "_blank",
        icon: "fab fa-twitter social-icon-2",
        title: "Twitter"
    }, 
];
const HeroSocials = ({ hide_title =false  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: hero_socials.map((l, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                href: l.link,
                className: `social-icon-${l.num}`,
                target: l.target ? l.target : "",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                        className: l.icon
                    }),
                    hide_title ? "" : l.title
                ]
            }, i))
    });
};
const SocialLinks = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: social_links.map((l, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: l.link,
                target: l.target ? l.target : "",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: l.icon,
                    style: {
                        color: `${l.color}`
                    }
                })
            }, i))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialLinks);


/***/ }),

/***/ 14025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);


const Wrapper = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrapper);


/***/ }),

/***/ 56620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _components_common_breadcrumb_breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36740);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97569);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35591);





const ErrorPage = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout__WEBPACK_IMPORTED_MODULE_4__/* .Wrapper */ .im, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                pageTitle: "Not Found"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout__WEBPACK_IMPORTED_MODULE_4__/* .Header */ .h4, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_breadcrumb_breadcrumb__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: "404 Page",
                back_home: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "tp-404-area tp-404-circle sky-bg pt-200 pb-150 fix",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "tp-404-thumb d-flex justify-content-center align-items-center z-index-1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/img/contact/404.png",
                                    alt: ""
                                })
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout__WEBPACK_IMPORTED_MODULE_4__/* .FooterThree */ .yD, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorPage);


/***/ }),

/***/ 71412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(37424);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs
var react_toastify_esm = __webpack_require__(55678);
// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(47389);
// EXTERNAL MODULE: ./src/redux/features/auth-slice.js
var auth_slice = __webpack_require__(64249);
// EXTERNAL MODULE: ./src/redux/features/cart-slice.js
var cart_slice = __webpack_require__(8958);
// EXTERNAL MODULE: ./src/redux/features/product-slice.js
var product_slice = __webpack_require__(66870);
// EXTERNAL MODULE: ./src/redux/features/wishlist-slice.js
var wishlist_slice = __webpack_require__(87891);
;// CONCATENATED MODULE: ./src/redux/store.js





const store = (0,redux_toolkit_cjs_production_min.configureStore)({
    reducer: {
        cart: cart_slice/* default */.ZP,
        wishlist: wishlist_slice/* default */.ZP,
        products: product_slice/* default */.ZP,
        auth: auth_slice/* default */.ZP
    }
});

// EXTERNAL MODULE: ./node_modules/next-hubspot/lib/index.js
var next_hubspot_lib = __webpack_require__(17);
;// CONCATENATED MODULE: ./src/pages/_app.jsx






if (false) {}
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx(next_hubspot_lib/* HubspotProvider */.l0, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(lib.Provider, {
                store: store,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Component, {
                        ...pageProps
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(react_toastify_esm/* ToastContainer */.Ix, {})
                ]
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 74178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyDocument)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56859);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);



class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1__["default"] {
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "google-site-verification",
                            content: "ILs5xsVp4CFP9OqfmzWejeNMwRFRwTIwQGfNXl5OTpc"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                            children: "Digital Marketing & Website Development Company | Digital Cappuccino"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            httpEquiv: "x-ua-compatible",
                            content: "ie=edge"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "description",
                            content: "Digital Cappuccino is a digital marketing Company in India. We provides website Development, Social Media Marketing, PPC Marketing, SEO and Email Marketing Services."
                        }, "desc"),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "robots",
                            content: "index, follow"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "canonical",
                            href: "https://www.digitalcappuccino.com/"
                        }, "canonical"),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            property: "og:title",
                            content: "Social Title for Cool Page"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            property: "og:description",
                            content: "And a social description for our cool page"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            property: "og:image",
                            content: "https://example.com/images/cool-page.jpg"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "twitter:card",
                            content: "summary_large_image"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "twitter:site",
                            content: "@YOUR_TWITTER_USERNAME"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "twitter:title",
                            content: "TITLE_FOR_YOUR_PAGE"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "twitter:description",
                            content: "DESCRIPTION_FOR_YOUR_PAGE"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "twitter:image",
                            content: "URL_FOR_YOUR_IMAGE"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: `https://www.googletagmanager.com/gtag/js?id=AW-11192435865`,
                    strategy: "afterInteractive"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {
                    id: "gtag-init",
                    strategy: "afterInteractive",
                    children: `
           window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11192435865');
        `
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                    ]
                })
            ]
        });
    }
};


/***/ }),

/***/ 64249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QA": () => (/* binding */ sign_out),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "bT": () => (/* binding */ user_info),
/* harmony export */   "jb": () => (/* binding */ add_user)
/* harmony export */ });
/* unused harmony exports authSlice, get_user */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47389);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30677);


const initialState = {
    allUsers: [],
    user: {}
};
const authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "auth",
    initialState,
    reducers: {
        add_user: (state, { payload  })=>{
            state.allUsers.push(payload);
            state.user = payload;
            (0,_utils_localstorage__WEBPACK_IMPORTED_MODULE_1__/* .setLocalStorage */ .q)("user", state.user);
        },
        user_info: (state, { payload  })=>{
            state.user = payload;
            (0,_utils_localstorage__WEBPACK_IMPORTED_MODULE_1__/* .setLocalStorage */ .q)("user", state.user);
        },
        sign_out: (state, { payload  })=>{
            state.user = {};
            (0,_utils_localstorage__WEBPACK_IMPORTED_MODULE_1__/* .setLocalStorage */ .q)("user", state.user);
        },
        get_user: (state, { payload  })=>{
            state.user = (0,_utils_localstorage__WEBPACK_IMPORTED_MODULE_1__/* .getLocalStorage */ .$)("user");
        }
    }
});
const { user_info , add_user , sign_out , get_user  } = authSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);


/***/ }),

/***/ 8958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N3": () => (/* binding */ get_cart_products),
/* harmony export */   "YR": () => (/* binding */ add_cart_product),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "gq": () => (/* binding */ decrease_quantity),
/* harmony export */   "h9": () => (/* binding */ clear_cart),
/* harmony export */   "uZ": () => (/* binding */ remove_cart_product)
/* harmony export */ });
/* unused harmony export cartSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47389);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55678);
/* harmony import */ var _utils_localstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30677);



const initialState = {
    cart_products: []
};
const cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: "cart",
    initialState,
    reducers: {
        add_cart_product: (state, { payload  })=>{
            const index = state.cart_products.findIndex((item)=>Number(item.id) === Number(payload.id));
            if (index >= 0) {
                state.cart_products[index].quantity += 1;
                // msg
                react_toastify__WEBPACK_IMPORTED_MODULE_0__/* .toast.info */ .Am.info(`${payload.title} increase Quantity`, {
                    position: "top-left"
                });
            } else {
                state.cart_products.push({
                    ...payload,
                    quantity: 1
                });
                // msg
                react_toastify__WEBPACK_IMPORTED_MODULE_0__/* .toast.success */ .Am.success(`${payload.title} added to cart`, {
                    position: "top-left"
                });
            }
            (0,_utils_localstorage__WEBPACK_IMPORTED_MODULE_2__/* .setLocalStorage */ .q)("cart_products", state.cart_products);
        },
        decrease_quantity: (state, { payload  })=>{
            const index = state.cart_products.findIndex((item)=>Number(item.id) === Number(payload.id));
            if (state.cart_products[index].quantity > 1) {
                state.cart_products[index].quantity -= 1;
                //  msg
                react_toastify__WEBPACK_IMPORTED_MODULE_0__/* .toast.warning */ .Am.warning(`${payload.title} decrease quantity`, {
                    position: "top-left"
                });
            }
            // set local storage
            (0,_utils_localstorage__WEBPACK_IMPORTED_MODULE_2__/* .setLocalStorage */ .q)("cart_products", state.cart_products);
        },
        remove_cart_product: (state, { payload  })=>{
            state.cart_products = state.cart_products.filter((item)=>Number(item.id) !== Number(payload.id));
            //  msg
            react_toastify__WEBPACK_IMPORTED_MODULE_0__/* .toast.error */ .Am.error(`${payload.title} remove from cart`, {
                position: "top-left"
            });
            // set local storage
            (0,_utils_localstorage__WEBPACK_IMPORTED_MODULE_2__/* .setLocalStorage */ .q)("cart_products", state.cart_products);
        },
        clear_cart: (state, action)=>{
            const confirmMsg = window.confirm("Are you sure deleted your all cart items ?");
            if (confirmMsg) state.cart_products = [];
            // set local storage
            (0,_utils_localstorage__WEBPACK_IMPORTED_MODULE_2__/* .setLocalStorage */ .q)("cart_products", state.cart_products);
        },
        get_cart_products: (state, { payload  })=>{
            // get local storage
            state.cart_products = (0,_utils_localstorage__WEBPACK_IMPORTED_MODULE_2__/* .getLocalStorage */ .$)("cart_products");
        }
    }
});
const { add_cart_product , get_cart_products , decrease_quantity , remove_cart_product , clear_cart  } = cartSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartSlice.reducer);


/***/ }),

/***/ 66870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VS": () => (/* binding */ add_reviews),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export productSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47389);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    reviews: [
        {
            img: "/assets/img/product/client.png",
            name: "SIARHEI DZENISENKA",
            date: "5/15/2022, 2:53:39 PM",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget viverra pretium, dolor tellus aliquet nunc, vitae ultricies erat elit eu lacus. Vestibulum non justo consectetur, cursus ante, tincidunt sapien. Nulla quis diam sit amet turpis interdum accumsan quis nec enim. Vivamus faucibus ex sed nibh egestas elementum. Mauris et bibendum dui. Aenean consequat pulvinar luctus. Suspendisse consectetur tristique tortor",
            rating: 4
        },
        {
            img: "/assets/img/product/client-2.png",
            name: "TOMMY JARVIS",
            date: "3/05/2022, 3:53:39 PM",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget viverra pretium, dolor tellus aliquet nunc, vitae ultricies erat elit eu lacus. Vestibulum non justo consectetur, cursus ante, tincidunt sapien. Nulla quis diam sit amet turpis interdum accumsan quis nec enim. Vivamus faucibus ex sed nibh egestas elementum. Mauris et bibendum dui. Aenean consequat pulvinar luctus. Suspendisse consectetur tristique tortor",
            rating: 5
        },
        {
            img: "/assets/img/product/client-3.png",
            name: "JOHNNY CASH",
            date: "1/09/2022, 5:53:39 PM",
            review: "This is cardigan is a comfortable warm classic piece. Great to layer with a light top and you can dress up or down given the jewel buttons. I'm 5'8” 128lbs a 34A and the Small fit fine.",
            rating: 4
        }, 
    ]
};
const productSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "product",
    initialState,
    reducers: {
        add_reviews: (state, { payload  })=>{
            state.reviews.push(payload);
        }
    }
});
const { add_reviews  } = productSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productSlice.reducer);


/***/ }),

/***/ 87891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "lM": () => (/* binding */ remove_wishlist),
/* harmony export */   "xQ": () => (/* binding */ add_wishlist),
/* harmony export */   "yR": () => (/* binding */ get_wishlist_products)
/* harmony export */ });
/* unused harmony export wishlistSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47389);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55678);
/* harmony import */ var _utils_localstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30677);



const wishlistSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: "wishlist",
    initialState: {
        wishlists: []
    },
    reducers: {
        add_wishlist: (state, { payload  })=>{
            if (payload.changeType === "remove") {
                state.wishlists = state.wishlists.filter((item)=>item.id !== payload.item.id);
                // message
                react_toastify__WEBPACK_IMPORTED_MODULE_0__/* .toast.error */ .Am.error(`${payload.item.title} remove to wishlist`, {
                    position: "top-left"
                });
            } else if (payload.changeType === "added") {
                state.wishlists.push(payload.item);
                // message
                react_toastify__WEBPACK_IMPORTED_MODULE_0__/* .toast.success */ .Am.success(`${payload.item.title} added to wishlist`, {
                    position: "top-left"
                });
            }
            // set local storage
            (0,_utils_localstorage__WEBPACK_IMPORTED_MODULE_2__/* .setLocalStorage */ .q)("wishlist_products", state.wishlists);
        },
        remove_wishlist: (state, { payload  })=>{
            state.wishlists = state.wishlists.filter((item)=>Number(item.id) !== Number(payload.id));
            // message
            react_toastify__WEBPACK_IMPORTED_MODULE_0__/* .toast.error */ .Am.error(`${payload.title} remove to wishlist`, {
                position: "top-left"
            });
            // set local storage
            (0,_utils_localstorage__WEBPACK_IMPORTED_MODULE_2__/* .setLocalStorage */ .q)("wishlist_products", state.wishlists);
        },
        get_wishlist_products: (state, { payload  })=>{
            state.wishlists = (0,_utils_localstorage__WEBPACK_IMPORTED_MODULE_2__/* .getLocalStorage */ .$)("wishlist_products");
        }
    }
});
const { add_wishlist , get_wishlist_products , remove_wishlist  } = wishlistSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wishlistSlice.reducer);


/***/ }),

/***/ 94894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$9": () => (/* reexport */ angel_right),
  "YM": () => (/* reexport */ bulb),
  "EK": () => (/* reexport */ code),
  "BB": () => (/* reexport */ svg_document),
  "wq": () => (/* reexport */ feature_1),
  "NS": () => (/* reexport */ feature_3),
  "kJ": () => (/* reexport */ feature_2),
  "y$": () => (/* reexport */ highlight),
  "lJ": () => (/* reexport */ highlisght_6),
  "_d": () => (/* reexport */ highlight_3),
  "WB": () => (/* reexport */ highlight_2),
  "aG": () => (/* reexport */ managed),
  "kG": () => (/* reexport */ popup_arrow),
  "ex": () => (/* reexport */ popup_arrow_2)
});

// UNUSED EXPORTS: ArrowBig, ArrowRight, ClipPath, HighlightFive, HighlightFour, UpArrow

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/svg/up-arrow.js


const UpArrow = ()=>{
    return /*#__PURE__*/ _jsx("svg", {
        width: "16",
        height: "58",
        viewBox: "0 0 16 58",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M8.70711 0.292892C8.31659 -0.0976295 7.68342 -0.0976296 7.2929 0.292892L0.928934 6.65685C0.53841 7.04738 0.53841 7.68054 0.928934 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41422L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292892ZM9 58L9 1L7 1L7 58L9 58Z",
            fill: "#292930"
        })
    });
};
/* harmony default export */ const up_arrow = ((/* unused pure expression or super */ null && (UpArrow)));

;// CONCATENATED MODULE: ./src/svg/clip-path.js


const ClipPath = ()=>{
    return /*#__PURE__*/ _jsx("svg", {
        width: "1918",
        height: "98",
        viewBox: "0 0 1918 98",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M435.5 54L0 1V0L1917.5 1L1309 75.5C1263 82 1178.75 88.6471 1176.5 89C1116 98.5 958.667 98.3333 885.5 97C874.167 96.5 856.5 95.5 850.5 95.5C793.5 95.5 554.667 69.3333 435.5 54Z",
            fill: "white"
        })
    });
};
/* harmony default export */ const clip_path = ((/* unused pure expression or super */ null && (ClipPath)));

;// CONCATENATED MODULE: ./src/svg/highlight.js


const Highlight = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        width: "244",
        height: "8",
        viewBox: "0 0 244 8",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M0 0L244 8H0V0Z",
            fill: "#FFDC60"
        })
    });
};
/* harmony default export */ const highlight = (Highlight);

;// CONCATENATED MODULE: ./src/svg/highlight-2.js


const HighlightTwo = ({ width ="266" , height ="12" , viewBox ="0 0 266 12"  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        width: width,
        height: height,
        viewBox: viewBox,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M0 0L266 12H0V0Z",
            fill: "#FFDC60"
        })
    });
};
/* harmony default export */ const highlight_2 = (HighlightTwo);

;// CONCATENATED MODULE: ./src/svg/feature-1.js


const FeatureOne = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                clipPath: "url(#clip0_496_130)",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M6.10492 6.4812L4.02565 6.64184C3.44708 6.68656 2.93179 6.98979 2.61182 7.47377L0.213854 11.1006C-0.0288162 11.4676 -0.067394 11.9269 0.110589 12.3293C0.288619 12.7317 0.654475 13.0121 1.08924 13.0794L2.99305 13.3743C3.43841 11.0108 4.50452 8.65323 6.10492 6.4812Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M10.6255 21.0069L10.9204 22.9107C10.9877 23.3455 11.2681 23.7113 11.6705 23.8893C11.8379 23.9634 12.015 23.9999 12.1913 23.9999C12.439 23.9999 12.6849 23.9278 12.8992 23.786L16.5261 21.3881C17.0101 21.0681 17.3133 20.5528 17.358 19.9743L17.5186 17.895C15.3465 19.4955 12.989 20.5616 10.6255 21.0069Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M9.90947 19.6874C9.97557 19.6874 10.042 19.682 10.1084 19.6709C11.0985 19.5054 12.0529 19.2265 12.9633 18.8614L5.13853 11.0366C4.77347 11.947 4.49456 12.9013 4.329 13.8916C4.26375 14.2819 4.39467 14.6795 4.67447 14.9594L9.04056 19.3255C9.27287 19.5577 9.58641 19.6874 9.90947 19.6874Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M22.0865 10.6407C24.0013 6.93881 24.0722 3.02684 23.9721 1.19216C23.9379 0.563527 23.4367 0.0623433 22.808 0.0280779C22.5093 0.0117655 22.1552 0 21.7562 0C19.7047 0 16.4586 0.310732 13.3595 1.9137C10.8966 3.18762 7.66708 5.99264 5.76172 9.67896C5.78422 9.69653 5.8062 9.71519 5.82692 9.73591L14.2644 18.1733C14.2851 18.1941 14.3037 18.216 14.3213 18.2385C18.0076 16.3331 20.8126 13.1036 22.0865 10.6407ZM13.9547 5.07371C15.3254 3.70305 17.5557 3.70291 18.9265 5.07371C19.5905 5.73769 19.9562 6.62057 19.9562 7.55961C19.9562 8.49865 19.5905 9.38154 18.9265 10.0455C18.2412 10.7308 17.3407 11.0735 16.4406 11.0736C15.5402 11.0736 14.6401 10.731 13.9547 10.0455C13.2907 9.38154 12.925 8.49865 12.925 7.55961C12.925 6.62057 13.2907 5.73769 13.9547 5.07371Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M14.9489 9.05108C15.7713 9.8735 17.1096 9.87355 17.932 9.05108C18.3304 8.65264 18.5498 8.12295 18.5498 7.55952C18.5498 6.99608 18.3304 6.46639 17.932 6.068C17.5208 5.65677 16.9806 5.45117 16.4404 5.45117C15.9003 5.45117 15.3601 5.65677 14.9489 6.068C14.5505 6.46639 14.3311 6.99608 14.3311 7.55952C14.3311 8.12295 14.5505 8.65269 14.9489 9.05108Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M0.717309 19.7783C0.897262 19.7783 1.07721 19.7097 1.21446 19.5723L3.51007 17.2767C3.78467 17.0021 3.78467 16.557 3.51007 16.2824C3.23553 16.0078 2.79031 16.0078 2.51571 16.2824L0.220105 18.578C-0.0544883 18.8526 -0.0544883 19.2977 0.220105 19.5723C0.357402 19.7096 0.537355 19.7783 0.717309 19.7783Z",
                        fill: "currentColorF"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M5.61382 18.3861C5.33927 18.1115 4.89405 18.1115 4.61946 18.3861L0.205945 22.7996C-0.0686484 23.0742 -0.0686484 23.5194 0.205945 23.794C0.343242 23.9313 0.523195 23.9999 0.703148 23.9999C0.883102 23.9999 1.06305 23.9313 1.2003 23.7939L5.61377 19.3805C5.88841 19.1059 5.88841 18.6607 5.61382 18.3861Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M6.72319 20.4899L4.42763 22.7855C4.15303 23.0601 4.15303 23.5053 4.42763 23.7799C4.56492 23.9171 4.74488 23.9858 4.92478 23.9858C5.10469 23.9858 5.28469 23.9172 5.42194 23.7799L7.71755 21.4842C7.99214 21.2096 7.99214 20.7645 7.71755 20.4899C7.443 20.2153 6.99778 20.2153 6.72319 20.4899Z",
                        fill: "currentColor"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime.jsx("clipPath", {
                    id: "clip0_496_130",
                    children: /*#__PURE__*/ jsx_runtime.jsx("rect", {
                        width: "24",
                        height: "24",
                        fill: "white"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const feature_1 = (FeatureOne);

;// CONCATENATED MODULE: ./src/svg/feature-2.js


const FeatureTwo = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                clipPath: "url(#clip0_496_139)",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M20.5358 12.812H18.6797C18.8689 13.33 18.9722 13.889 18.9722 14.4716V21.4864C18.9722 21.7293 18.93 21.9625 18.853 22.1793H21.9215C23.0678 22.1793 24.0002 21.2468 24.0002 20.1006V16.2765C24.0003 14.3662 22.4461 12.812 20.5358 12.812Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M5.02806 14.4716C5.02806 13.8889 5.13142 13.33 5.3206 12.812H3.46454C1.55419 12.812 0 14.3662 0 16.2765V20.1007C0 21.2469 0.932486 22.1794 2.07872 22.1794H5.14726C5.07034 21.9625 5.02806 21.7293 5.02806 21.4864V14.4716Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M14.1218 11.0071H9.8786C7.96825 11.0071 6.41406 12.5613 6.41406 14.4716V21.4865C6.41406 21.8691 6.72428 22.1794 7.10697 22.1794H16.8935C17.2761 22.1794 17.5864 21.8692 17.5864 21.4865V14.4716C17.5864 12.5613 16.0322 11.0071 14.1218 11.0071Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M12 1.82056C9.70259 1.82056 7.8335 3.68965 7.8335 5.98714C7.8335 7.5455 8.69361 8.90652 9.96383 9.62109C10.5663 9.95999 11.2609 10.1537 12 10.1537C12.7392 10.1537 13.4338 9.95999 14.0362 9.62109C15.3065 8.90652 16.1666 7.54546 16.1666 5.98714C16.1666 3.6897 14.2975 1.82056 12 1.82056Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M4.68389 5.7041C2.96569 5.7041 1.56787 7.10192 1.56787 8.82012C1.56787 10.5383 2.96569 11.9361 4.68389 11.9361C5.11974 11.9361 5.53477 11.8459 5.91179 11.6836C6.56363 11.4029 7.1011 10.9062 7.43368 10.2839C7.66712 9.84716 7.79992 9.34892 7.79992 8.82012C7.79992 7.10196 6.4021 5.7041 4.68389 5.7041Z",
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M19.3162 5.7041C17.598 5.7041 16.2002 7.10192 16.2002 8.82012C16.2002 9.34897 16.333 9.8472 16.5664 10.2839C16.899 10.9062 17.4365 11.403 18.0883 11.6836C18.4653 11.8459 18.8804 11.9361 19.3162 11.9361C21.0344 11.9361 22.4322 10.5383 22.4322 8.82012C22.4322 7.10192 21.0344 5.7041 19.3162 5.7041Z",
                        fill: "currentColor"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime.jsx("clipPath", {
                    id: "clip0_496_139",
                    children: /*#__PURE__*/ jsx_runtime.jsx("rect", {
                        width: "24",
                        height: "24",
                        fill: "white"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const feature_2 = (FeatureTwo);

;// CONCATENATED MODULE: ./src/svg/feature-3.js


const FeatureThree = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: "28",
        height: "28",
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                d: "M15.7423 0.00474192C15.2913 -0.0425081 14.882 0.268281 14.8267 0.716883C14.7707 1.16707 15.0895 1.57646 15.5388 1.63252C16.6523 1.77109 17.7402 2.16534 18.7728 2.60114C19.1949 2.77647 19.6728 2.57872 19.8479 2.16375C20.0233 1.74561 19.8279 1.26491 19.4105 1.0887C18.2385 0.595203 17.004 0.16175 15.7423 0.00474192V0.00474192Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                d: "M24.9534 6.66668C25.3147 6.39269 25.3852 5.87759 25.1112 5.51709C24.343 4.50532 23.4402 3.60248 22.4284 2.83423C22.0671 2.56189 21.5536 2.62997 21.2788 2.99206C21.0048 3.35256 21.0753 3.86766 21.4366 4.14165C22.3298 4.81939 23.1261 5.61564 23.8038 6.50885C24.0787 6.87088 24.593 6.93935 24.9534 6.66668V6.66668Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                d: "M25.7815 8.09729C25.3642 8.27354 25.1687 8.75419 25.3442 9.17233C25.78 10.2049 26.2271 11.3475 26.3658 12.461C26.4195 12.8961 26.8129 13.2277 27.2814 13.1732C27.7308 13.1171 28.0496 12.7077 27.9935 12.2575C27.8365 10.9958 27.35 9.70663 26.8566 8.53468C26.6804 8.1173 26.1989 7.92426 25.7815 8.09729V8.09729Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                d: "M8.58965 1.08871C8.17227 1.26497 7.97682 1.74562 8.15226 2.16376C8.32769 2.5796 8.80626 2.7761 9.2273 2.60115C10.2599 2.16535 11.3478 1.7711 12.4613 1.63252C12.9107 1.57647 13.2296 1.16708 13.1734 0.716892C13.1174 0.268291 12.7064 -0.0425531 12.2578 0.00475154C10.9961 0.161759 9.76165 0.595213 8.58965 1.08871Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                d: "M14 28C21.0207 28 27.126 22.6989 27.9935 15.7423C28.0496 15.2929 27.7308 14.8827 27.2814 14.8267C26.8296 14.7762 26.4211 15.0895 26.3658 15.5388C25.5999 21.6768 20.1948 26.3593 14 26.3593C7.2148 26.3593 1.64062 20.7852 1.64062 14C1.64062 11.0095 2.82717 8.09921 4.7578 5.87649V6.14807C4.7578 6.60149 5.1247 6.96838 5.57811 6.96838C6.03153 6.96838 6.39842 6.60149 6.39842 6.14807V3.82812C6.39842 3.37471 6.03153 3.00781 5.57811 3.00781H3.2574C2.80399 3.00781 2.43709 3.37471 2.43709 3.82812C2.43709 4.28154 2.80399 4.64789 3.2574 4.64789H3.65246C1.38026 7.1885 0 10.5412 0 14C0 21.6896 6.31038 28 14 28V28Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                d: "M4.10156 14C4.10156 19.4282 8.57183 23.8984 14 23.8984C19.4282 23.8984 23.8984 19.4282 23.8984 14C23.8984 8.57183 19.4282 4.10156 14 4.10156C8.57183 4.10156 4.10156 8.57183 4.10156 14ZM14.8203 10.7188C14.8203 10.2653 15.1872 9.89844 15.6406 9.89844C16.094 9.89844 16.4609 10.2653 16.4609 10.7188V13.1797H18.1016V10.7188C18.1016 10.2653 18.4685 9.89844 18.9219 9.89844C19.3753 9.89844 19.7422 10.2653 19.7422 10.7188V17.2812C19.7422 17.7347 19.3753 18.1016 18.9219 18.1016C18.4685 18.1016 18.1016 17.7347 18.1016 17.2812V14.8203H15.6406C15.1872 14.8203 14.8203 14.4534 14.8203 14V10.7188ZM10.7188 11.5391C10.2662 11.5391 9.89844 11.9068 9.89844 12.3594C9.89844 12.8128 9.53154 13.1797 9.07812 13.1797C8.62471 13.1797 8.25781 12.8128 8.25781 12.3594C8.25781 11.0024 9.36173 9.89844 10.7188 9.89844C12.0758 9.89844 13.1797 11.0024 13.1797 12.3594C13.1797 14 12.0878 14.8187 11.2106 15.4764C10.7247 15.8411 10.3786 16.1328 10.1589 16.4609H12.3594C12.8128 16.4609 13.1797 16.8278 13.1797 17.2812C13.1797 17.7347 12.8128 18.1016 12.3594 18.1016H9.07812C8.62471 18.1016 8.25781 17.7347 8.25781 17.2812C8.25781 15.6406 9.3497 14.8219 10.2269 14.1642C11.0649 13.5354 11.5391 13.1412 11.5391 12.3594C11.5391 11.9067 11.1714 11.5391 10.7188 11.5391Z",
                fill: "currentColor"
            })
        ]
    });
};
/* harmony default export */ const feature_3 = (FeatureThree);

;// CONCATENATED MODULE: ./src/svg/arrow-right.js


const ArrowRight = ()=>{
    return /*#__PURE__*/ _jsx("svg", {
        width: "28",
        height: "12",
        viewBox: "0 0 28 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M27.5303 6.53033C27.8232 6.23744 27.8232 5.76256 27.5303 5.46967L22.7574 0.696699C22.4645 0.403806 21.9896 0.403806 21.6967 0.696699C21.4038 0.989593 21.4038 1.46447 21.6967 1.75736L25.9393 6L21.6967 10.2426C21.4038 10.5355 21.4038 11.0104 21.6967 11.3033C21.9896 11.5962 22.4645 11.5962 22.7574 11.3033L27.5303 6.53033ZM0 6.75H27V5.25H0V6.75Z",
            fill: "#292930"
        })
    });
};
/* harmony default export */ const arrow_right = ((/* unused pure expression or super */ null && (ArrowRight)));

;// CONCATENATED MODULE: ./src/svg/angel-right.js


const AngelRight = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: "18",
        height: "23",
        viewBox: "0 0 18 33",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("line", {
                x1: "0.707107",
                y1: "1.18181",
                x2: "16.7071",
                y2: "17.1818",
                stroke: "black",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("line", {
                x1: "1.07121",
                y1: "31.4041",
                x2: "15.2934",
                y2: "17.1819",
                stroke: "black",
                strokeWidth: "2"
            })
        ]
    });
};
/* harmony default export */ const angel_right = (AngelRight);

;// CONCATENATED MODULE: ./src/svg/arrow-big.js


const ArrowBig = ()=>{
    return /*#__PURE__*/ _jsx("svg", {
        width: "26",
        height: "26",
        viewBox: "0 0 26 26",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M25.3852 0.53084H7.44061V0.532315V0.53418V0.536051V0.537926V0.539806V0.541691V0.543582V0.545477V0.547378V0.549283V0.551194V0.55311V0.555031V0.556957V0.558889V0.560825V0.562767V0.564714V0.566666V0.568623V0.570585V0.572553V0.574526V0.576504V0.578488V0.580477V0.582471V0.58447V0.586475V0.588485V0.5905V0.592521V0.594547V0.596578V0.598615V0.600657V0.602704V0.604757V0.606816V0.60888V0.610949V0.613024V0.615104V0.617189V0.619281V0.621377V0.623479V0.625587V0.6277V0.629819V0.631943V0.634073V0.636209V0.63835V0.640496V0.642648V0.644806V0.64697V4.4597H14.8103C15.4175 4.4597 16.1674 4.76381 16.3875 5.5239C16.7101 6.21923 16.5128 6.91869 16.025 7.40766L16.0235 7.4091L0.654518 22.6873C0.654327 22.6875 0.654137 22.6877 0.653946 22.6879C0.621716 22.7202 0.602236 22.74 0.585537 22.7589C0.570169 22.7764 0.563459 22.7863 0.560467 22.7913C0.558094 22.7952 0.557665 22.7967 0.557318 22.798C0.556917 22.7994 0.55463 22.8078 0.55463 22.827V22.9448L0.53964 22.9749L3.04575 25.4863C3.09814 25.4944 3.17092 25.5 3.25169 25.5C3.33341 25.5 3.40695 25.4943 3.45946 25.486L19.1312 10.1493C19.2831 9.99744 19.4547 9.86374 19.6637 9.77066C19.8759 9.67615 20.1007 9.63497 20.3436 9.63497L20.35 9.63497C20.4113 9.63494 20.5382 9.63487 20.672 9.65721C20.7704 9.67365 20.9236 9.70976 21.0678 9.80558C21.7858 10.0467 22.0732 10.7758 22.0732 11.3672V18.7536H25.5V0.607256L25.4232 0.530238C25.4107 0.530639 25.398 0.53084 25.3852 0.53084ZM0.47172 22.8716L0.471825 22.8718L0.47172 22.8716ZM3.38948 25.5544L3.39381 25.5502L3.38951 25.5545L3.38948 25.5544Z",
            stroke: "#292930"
        })
    });
};
/* harmony default export */ const arrow_big = ((/* unused pure expression or super */ null && (ArrowBig)));

;// CONCATENATED MODULE: ./src/svg/highlight-3.js


const HighlightThree = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        width: "160",
        height: "11",
        viewBox: "0 0 160 11",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M0 0L160 11H0V0Z",
            fill: "#FFDC60"
        })
    });
};
/* harmony default export */ const highlight_3 = (HighlightThree);

;// CONCATENATED MODULE: ./src/svg/document.js


const Document = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        width: "25",
        height: "25",
        viewBox: "0 0 25 25",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M22.9201 9.11169C22.8196 9.00949 22.6998 8.92831 22.5678 8.87286C22.4355 8.81732 22.2936 8.78872 22.1502 8.78872C22.0068 8.78872 21.8649 8.81732 21.7326 8.87286C21.6005 8.92835 21.4806 9.0096 21.38 9.1119C21.3799 9.11199 21.3798 9.11209 21.3797 9.11219L13.2476 17.2717L13.2281 17.2913L13.2214 17.3182L12.7524 19.2026L12.7121 19.3644L12.8738 19.3238L14.7499 18.8526L14.7768 18.8459L14.7964 18.8262L22.9197 10.6577C22.9198 10.6577 22.9198 10.6576 22.9199 10.6575C23.0218 10.5565 23.1027 10.4361 23.1579 10.3035C23.2131 10.1708 23.2415 10.0283 23.2415 9.88451C23.2415 9.74067 23.2131 9.59826 23.1579 9.46552C23.1027 9.33298 23.0219 9.2127 22.9201 9.11169ZM22.9201 9.11169C22.92 9.11154 22.9198 9.11141 22.9197 9.11127L22.8493 9.18228L22.9206 9.11219C22.9204 9.11202 22.9203 9.11186 22.9201 9.11169ZM15.1768 0.100017L15.1774 0.100013C15.2807 0.0994136 15.383 0.11929 15.4786 0.158513C15.5742 0.197727 15.6612 0.255516 15.7345 0.328588C15.7345 0.328604 15.7345 0.328619 15.7346 0.328635L19.2738 3.88363C19.2738 3.88364 19.2738 3.88364 19.2738 3.88365C19.3465 3.95734 19.4041 4.04475 19.4432 4.1409C19.4823 4.23705 19.5021 4.34002 19.5015 4.4439V4.44448V6.22227C19.5015 6.43164 19.4187 6.63234 19.2715 6.78026C19.1242 6.92815 18.9246 7.01116 18.7166 7.01116C18.5086 7.01116 18.309 6.92815 18.1617 6.78026C18.0145 6.63234 17.9317 6.43164 17.9317 6.22227V4.80893V4.76764L17.9025 4.73837L14.8849 1.70725L14.8556 1.6778H14.814H2.78764C2.52627 1.6778 2.2757 1.7821 2.09102 1.9676C1.90636 2.15309 1.8027 2.40457 1.8027 2.66669V22.2223C1.8027 22.4845 1.90636 22.736 2.09102 22.9214C2.2757 23.1069 2.52627 23.2112 2.78764 23.2112H16.9467C17.2081 23.2112 17.4587 23.1069 17.6433 22.9214C17.828 22.736 17.9317 22.4845 17.9317 22.2223V20.4446C17.9317 20.2352 18.0145 20.0345 18.1617 19.8866C18.309 19.7387 18.5086 19.6557 18.7166 19.6557C18.9246 19.6557 19.1242 19.7387 19.2715 19.8866C19.4187 20.0345 19.5015 20.2352 19.5015 20.4446V22.2223C19.5015 22.9032 19.2323 23.5561 18.7531 24.0374C18.2739 24.5187 17.6242 24.789 16.9467 24.789H2.78764C2.1102 24.789 1.46042 24.5187 0.981261 24.0374C0.502089 23.5561 0.232813 22.9032 0.232813 22.2223V2.66669C0.232813 1.98583 0.502089 1.33293 0.981262 0.85162C1.46042 0.370323 2.1102 0.100015 2.78764 0.100015L15.1768 0.100017ZM23.819 11.949H23.8652L15.7349 20.1156C15.7348 20.1157 15.7347 20.1158 15.7346 20.1159C15.6326 20.2166 15.5051 20.2874 15.366 20.3206L15.3649 20.3209L11.8251 21.2098L11.8251 21.2098L11.8222 21.2106C11.6896 21.2481 11.5495 21.2499 11.416 21.2157C11.2825 21.1816 11.1602 21.1127 11.0615 21.016C10.9628 20.9192 10.8912 20.798 10.8539 20.6646C10.8166 20.5311 10.8149 20.3902 10.849 20.2559L10.8492 20.2554L11.7341 16.6998L11.7344 16.6987C11.7675 16.5587 11.8381 16.4306 11.9384 16.3281C11.9384 16.328 11.9385 16.3279 11.9386 16.3278L20.2388 7.99061L20.2389 7.99071L20.2425 7.98667C20.4848 7.7154 20.7795 7.4966 21.1088 7.34361C21.438 7.19062 21.7948 7.10664 22.1574 7.09677C22.52 7.08691 22.8807 7.15137 23.2177 7.28624C23.5547 7.4211 23.8608 7.62355 24.1174 7.88124C24.3739 8.13893 24.5755 8.44646 24.7098 8.78508C24.8441 9.12369 24.9084 9.48626 24.8985 9.85065C24.8887 10.215 24.8051 10.5736 24.6527 10.9044C24.5003 11.2352 24.2825 11.5313 24.0124 11.7747L23.819 11.949ZM4.00264 16.331C4.14988 16.1831 4.34949 16.1001 4.55752 16.1001H8.09729C8.30533 16.1001 8.50494 16.1831 8.65217 16.331C8.79943 16.4789 8.88224 16.6796 8.88224 16.889C8.88224 17.0984 8.79943 17.2991 8.65218 17.447C8.50494 17.5949 8.30533 17.6779 8.09729 17.6779H4.55752C4.34949 17.6779 4.14988 17.5949 4.00264 17.447C3.85539 17.2991 3.77258 17.0984 3.77258 16.889C3.77258 16.6796 3.85539 16.4789 4.00264 16.331ZM4.55752 5.43337H12.522C12.73 5.43337 12.9296 5.51638 13.0769 5.66428C13.2241 5.81219 13.3069 6.0129 13.3069 6.22227C13.3069 6.43164 13.2241 6.63234 13.0769 6.78026C12.9296 6.92815 12.73 7.01116 12.522 7.01116H4.55752C4.34949 7.01116 4.14988 6.92815 4.00264 6.78026C3.85539 6.63234 3.77258 6.43164 3.77258 6.22227C3.77258 6.0129 3.85539 5.81219 4.00264 5.66428C4.14988 5.51638 4.34949 5.43337 4.55752 5.43337ZM13.0769 10.9976C13.2241 11.1455 13.3069 11.3463 13.3069 11.5556C13.3069 11.765 13.2241 11.9657 13.0769 12.1136C12.9296 12.2615 12.73 12.3445 12.522 12.3445H4.55752C4.34949 12.3445 4.14988 12.2615 4.00264 12.1136C3.85539 11.9657 3.77258 11.765 3.77258 11.5556C3.77258 11.3463 3.85539 11.1455 4.00264 10.9976C4.14988 10.8497 4.34949 10.7667 4.55752 10.7667H12.522C12.73 10.7667 12.9296 10.8497 13.0769 10.9976Z",
            fill: "#171717",
            stroke: "#0F0F0F",
            strokeWidth: "0.2"
        })
    });
};
/* harmony default export */ const svg_document = (Document);

;// CONCATENATED MODULE: ./src/svg/highlight-4.js


const HighlightFour = ()=>{
    return /*#__PURE__*/ _jsx("svg", {
        width: "91",
        height: "12",
        viewBox: "0 0 91 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M0 0L91 12H0V0Z",
            fill: "#82CEFD"
        })
    });
};
/* harmony default export */ const highlight_4 = ((/* unused pure expression or super */ null && (HighlightFour)));

;// CONCATENATED MODULE: ./src/svg/highlight-5.js


const HighlightFive = ()=>{
    return /*#__PURE__*/ _jsx("svg", {
        width: "160",
        height: "11",
        viewBox: "0 0 160 11",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M0 0L160 11H0V0Z",
            fill: "#89CEFB"
        })
    });
};
/* harmony default export */ const highlight_5 = ((/* unused pure expression or super */ null && (HighlightFive)));

;// CONCATENATED MODULE: ./src/svg/highlisght-6.js


const HighlightSix = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        width: "530",
        height: "12",
        viewBox: "0 0 530 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M0.000244141 -7.62939e-06L530 12H0.000244141V-7.62939e-06Z",
            fill: "#FFDC60"
        })
    });
};
/* harmony default export */ const highlisght_6 = (HighlightSix);

;// CONCATENATED MODULE: ./src/svg/bulb.js


const Bulb = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        width: "28",
        height: "37",
        viewBox: "0 0 28 37",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M27.4965 14.0709C27.4965 6.62887 21.4419 0.574219 13.9998 0.574219C6.55765 0.574219 0.503174 6.62887 0.503174 14.0709C0.503174 18.6347 2.83329 22.9003 6.63242 25.3809V29.6329C6.63242 33.6952 9.93732 37 13.9996 37C18.0619 37 21.3668 33.6951 21.3668 29.6329V27.2447C21.3668 27.2441 21.3667 25.3811 21.3667 25.3811C25.1663 22.9004 27.4965 18.6349 27.4965 14.0709ZM18.7651 29.633C18.7651 32.2606 16.6274 34.3983 13.9998 34.3983C11.3721 34.3983 9.23444 32.2606 9.23444 29.633V28.5456H18.7651V29.633ZM19.418 23.5252C19.0141 23.7572 18.7651 24.1874 18.7651 24.6533V25.9438H15.3006V19.2167C16.9898 18.6671 18.2146 17.0784 18.2146 15.2082C18.2146 14.4898 17.6321 13.9073 16.9137 13.9073C16.1952 13.9073 15.6127 14.4898 15.6127 15.2082C15.6127 16.0976 14.8891 16.8212 13.9998 16.8212C13.1104 16.8212 12.3867 16.0977 12.3867 15.2082C12.3867 14.4898 11.8042 13.9073 11.0858 13.9073C10.3674 13.9073 9.78487 14.4898 9.78487 15.2082C9.78487 17.0783 11.0096 18.6671 12.6988 19.2167V25.9438H9.23461V24.6532C9.23461 24.1874 8.98565 23.7572 8.58174 23.5252C5.20362 21.5844 3.10519 17.9618 3.10519 14.0709C3.10519 8.06352 7.99256 3.17607 14 3.17607C20.0075 3.17607 24.8949 8.06343 24.8949 14.0709C24.8947 17.9619 22.7961 21.5846 19.418 23.5252Z",
            fill: "white"
        })
    });
};
/* harmony default export */ const bulb = (Bulb);

;// CONCATENATED MODULE: ./src/svg/code.js


const Code = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        width: "34",
        height: "36",
        viewBox: "0 0 34 36",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M23.0471 36H5.04712C2.72076 36 0.828369 34.1076 0.828369 31.7812V4.21875C0.828369 1.8924 2.72076 0 5.04712 0H23.0471C25.3735 0 27.2659 1.8924 27.2659 4.21875V8.23508H24.4534V4.21875C24.4534 3.44339 23.8225 2.8125 23.0471 2.8125H5.04712C4.27176 2.8125 3.64087 3.44339 3.64087 4.21875V31.7812C3.64087 32.5566 4.27176 33.1875 5.04712 33.1875H23.0471C23.8225 33.1875 24.4534 32.5566 24.4534 31.7812V27.6413H27.2659V31.7812C27.2659 34.1076 25.3735 36 23.0471 36ZM16.8596 5.63351H11.2346V8.44601H16.8596V5.63351ZM15.4534 28.9773C15.4534 28.2005 14.8239 27.571 14.0471 27.571C13.2704 27.571 12.6409 28.2005 12.6409 28.9773C12.6409 29.754 13.2704 30.3835 14.0471 30.3835C14.8239 30.3835 15.4534 29.754 15.4534 28.9773ZM20.3695 24.9695L24.3127 10.9773H21.3907L17.4474 24.9695H20.3695ZM16.6451 21.2962L12.7741 18.0085L16.6451 14.7211L14.8244 12.5774L8.42953 18.0085L14.8244 23.4399L16.6451 21.2962ZM33.1647 18.0085L26.7701 12.5774L24.9494 14.7209L28.8202 18.0085L24.9494 21.2962L26.7701 23.4399L33.1647 18.0085Z",
            fill: "white"
        })
    });
};
/* harmony default export */ const code = (Code);

;// CONCATENATED MODULE: ./src/svg/managed.js


const Managed = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: "39",
        height: "36",
        viewBox: "0 0 39 36",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                d: "M37.5377 7.3625C33.5846 7.3625 29.6315 7.3625 25.6784 7.3625C25.3909 7.3625 25.1034 7.3625 24.8159 7.3625V5.6375C24.8159 2.97813 22.6596 0.75 19.9284 0.75C17.269 0.75 15.0409 2.90625 15.0409 5.6375V7.3625C12.2377 7.3625 9.50649 7.3625 6.70337 7.3625C5.26587 7.3625 3.82837 7.3625 2.39087 7.3625C1.60024 7.3625 0.953369 8.00938 0.953369 8.8V30.7938V33.8844C0.953369 34.675 1.60024 35.3219 2.39087 35.3219H14.2502H33.2252H37.5377C38.3284 35.3219 38.9752 34.675 38.9752 33.8844C38.9752 26.5531 38.9752 19.2219 38.9752 11.8906C38.9752 10.8844 38.9752 9.80625 38.9752 8.8C38.9752 8.00938 38.3284 7.3625 37.5377 7.3625ZM17.9877 5.6375C17.9877 4.55938 18.9221 3.625 20.0002 3.625C21.0784 3.625 22.0127 4.55938 22.0127 5.6375V7.3625C20.6471 7.3625 19.3534 7.3625 17.9877 7.3625V5.6375ZM25.7502 32.375C19.4252 32.375 13.1002 32.375 6.77524 32.375C5.84087 32.375 4.83462 32.375 3.90024 32.375C3.90024 25.5469 3.90024 18.7188 3.90024 11.8188C3.90024 11.2438 3.90024 10.7406 3.90024 10.1656H14.3221H33.2971H36.1721V30.7219V32.375C32.6502 32.375 29.2002 32.375 25.7502 32.375Z",
                fill: "white"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                d: "M27.7628 19.8687C27.1878 19.8687 26.6847 19.8687 26.1097 19.8687C25.9659 19.2218 25.6784 18.575 25.319 18C25.6065 17.7125 25.894 17.425 26.1815 17.1375C26.2534 17.0656 26.3253 16.9937 26.469 16.85C26.7565 16.5625 26.9003 16.2031 26.9003 15.8437C26.9003 15.4843 26.7565 15.0531 26.469 14.8375C26.1815 14.6218 25.8222 14.4062 25.4628 14.4062C25.1034 14.4062 24.744 14.55 24.4565 14.8375C24.0972 15.1968 23.6659 15.6281 23.3065 15.9875C22.7315 15.6281 22.0847 15.3406 21.4378 15.1968C21.4378 14.7656 21.4378 14.3343 21.4378 13.9031C21.4378 13.7593 21.4378 13.6875 21.4378 13.5437C21.4378 13.1843 21.294 12.7531 21.0065 12.5375C20.7909 12.3218 20.3597 12.1062 20.0003 12.1062C19.6409 12.1062 19.2097 12.25 18.994 12.5375C18.7065 12.825 18.5628 13.1843 18.5628 13.5437V15.1968C17.9159 15.3406 17.269 15.6281 16.694 15.9875C16.4065 15.7 16.119 15.4125 15.8315 15.125C15.7597 15.0531 15.6878 14.9812 15.544 14.8375C15.2565 14.55 14.8972 14.4062 14.5378 14.4062C14.1784 14.4062 13.7472 14.55 13.5315 14.8375C13.3159 15.125 13.1003 15.4843 13.1003 15.8437C13.1003 16.2031 13.244 16.5625 13.5315 16.85L14.6815 18C14.3222 18.575 14.0347 19.2218 13.8909 19.8687C13.4597 19.8687 13.0284 19.8687 12.5972 19.8687C12.4534 19.8687 12.3815 19.8687 12.2378 19.8687C11.8784 19.8687 11.4472 20.0125 11.2315 20.3C11.0159 20.5156 10.8003 20.9468 10.8003 21.3062C10.8003 21.6656 10.944 22.0968 11.2315 22.3125C11.519 22.6 11.8784 22.7437 12.2378 22.7437H13.8909C14.0347 23.3906 14.3222 24.0375 14.6815 24.6125C14.394 24.9 14.1065 25.1875 13.819 25.475C13.7472 25.5468 13.6753 25.6187 13.5315 25.7625C13.244 26.05 13.1003 26.4093 13.1003 26.7687C13.1003 27.1281 13.244 27.5593 13.5315 27.775C13.819 27.9906 14.1784 28.2062 14.5378 28.2062C14.8972 28.2062 15.2565 28.0625 15.544 27.775C15.9034 27.4156 16.3347 26.9843 16.694 26.625C17.269 26.9843 17.9159 27.2718 18.5628 27.4156V28.7093V29.0687C18.5628 29.4281 18.7065 29.8593 18.994 30.075C19.2097 30.2906 19.6409 30.5062 20.0003 30.5062C20.3597 30.5062 20.7909 30.3625 21.0065 30.075C21.294 29.7875 21.4378 29.4281 21.4378 29.0687C21.4378 28.4937 21.4378 27.9906 21.4378 27.4156C22.0847 27.2718 22.7315 26.9843 23.3065 26.625L24.169 27.4875L24.4565 27.775C24.744 28.0625 25.1034 28.2062 25.4628 28.2062C25.8222 28.2062 26.2534 28.0625 26.469 27.775C26.6847 27.4875 26.9003 27.1281 26.9003 26.7687C26.9003 26.4093 26.7565 26.05 26.469 25.7625C26.1097 25.4031 25.6784 24.9718 25.319 24.6125C25.6784 24.0375 25.9659 23.3906 26.1097 22.7437H27.4034H27.7628C28.1222 22.7437 28.5534 22.6 28.769 22.3125C28.9847 22.0968 29.2003 21.6656 29.2003 21.3062C29.2003 20.9468 29.0565 20.5156 28.769 20.3C28.4815 20.0125 28.194 19.8687 27.7628 19.8687V19.8687ZM20.0003 24.7562C18.1315 24.7562 16.5503 23.2468 16.5503 21.3062C16.5503 19.4375 18.0597 17.8562 20.0003 17.8562C21.9409 17.8562 20.0003 17.8562 20.0003 17.8562C21.869 17.8562 23.4503 19.3656 23.4503 21.3062C23.4503 23.2468 21.869 24.7562 20.0003 24.7562Z",
                fill: "white"
            })
        ]
    });
};
/* harmony default export */ const managed = (Managed);

;// CONCATENATED MODULE: ./src/svg/popup-arrow.js


const PopupArrow = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        width: "107",
        height: "107",
        viewBox: "0 0 107 107",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M0.224823 95.4633L11.3577 106.62C11.8638 107.127 14.9002 107.127 15.406 106.62L80.1796 43.2308C81.1916 42.2165 82.2038 41.7093 83.7219 41.7093C84.228 41.7093 85.2402 41.7093 85.746 42.2165C87.7702 42.7236 88.7822 44.7521 88.7822 46.7805V78.7286V79.2358H104.976C105.988 79.2358 106.494 79.2358 107 79.2358V1.64818C107 1.64818 107 1.64819 105.988 0.633841C104.976 -0.380504 105.482 0.126918 104.47 0.126918H28.5633C28.5633 0.633841 28.5633 1.14101 28.5633 2.66253V18.3826C28.5633 19.3967 28.5633 20.4111 28.5633 20.4111H60.9501C62.9743 20.4111 64.9984 21.4252 65.5043 23.4536C66.5163 25.482 66.0104 27.5105 64.4923 29.032L1.23705 91.9136C0.730947 92.4208 0.224823 92.928 0.224823 93.9421C-0.281034 94.9561 0.224823 94.9562 0.224823 95.4633Z",
            fill: "currentColor"
        })
    });
};
/* harmony default export */ const popup_arrow = (PopupArrow);

;// CONCATENATED MODULE: ./src/svg/popup-arrow-2.js


const PopupArrowTwo = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        width: "40",
        height: "40",
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            d: "M0.0840454 35.6872L4.24586 39.8578C4.43505 40.0474 5.57016 40.0474 5.75926 39.8578L29.9737 16.1611C30.352 15.7819 30.7304 15.5923 31.2979 15.5923C31.4871 15.5923 31.8655 15.5923 32.0546 15.7819C32.8113 15.9715 33.1896 16.7298 33.1896 17.488V29.4313V29.6209H39.2433C39.6216 29.6209 39.8109 29.6209 40 29.6209V0.616144C40 0.616144 40 0.616144 39.6217 0.23695C39.2434 -0.142245 39.4326 0.047446 39.0541 0.047446H10.6779C10.6779 0.23695 10.6779 0.426547 10.6779 0.995338V6.87201C10.6779 7.25111 10.6779 7.6303 10.6779 7.6303H22.7851C23.5418 7.6303 24.2985 8.0094 24.4876 8.7677C24.8659 9.52599 24.6768 10.2843 24.1093 10.8531L0.462448 34.3602C0.273251 34.5498 0.0840454 34.7394 0.0840454 35.1185C-0.105061 35.4976 0.0840454 35.4976 0.0840454 35.6872Z",
            fill: "currentColor"
        })
    });
};
/* harmony default export */ const popup_arrow_2 = (PopupArrowTwo);

;// CONCATENATED MODULE: ./src/svg/index.js























/***/ }),

/***/ 30677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ getLocalStorage),
/* harmony export */   "q": () => (/* binding */ setLocalStorage)
/* harmony export */ });
const setLocalStorage = (name, items)=>{
    localStorage.setItem(name, JSON.stringify(items));
};
const getLocalStorage = (name)=>{
    const data = localStorage.getItem(name);
    if (data) {
        return JSON.parse(data);
    } else {
        localStorage.setItem(name, JSON.stringify([]));
        return [];
    }
};


/***/ }),

/***/ 97020:
/***/ ((module) => {

module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-c67a75d1b6f99dc8.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/BrsoBkr4oiKF8uWo7Ljx9/_buildManifest.js","static/BrsoBkr4oiKF8uWo7Ljx9/_ssgManifest.js"],"rootMainFiles":[],"pages":{"/":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/738-7d4fe0bf969c55ae.js","static/chunks/1141-851901dd7eb13313.js","static/chunks/2879-388f0d387d4f4f04.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/725-415b44ef65684e57.js","static/chunks/pages/index-0e97b29eaa38c466.js"],"/404":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/5591-04c11f747374080a.js","static/chunks/pages/404-b7b1217c689ac4ba.js"],"/_app":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/css/65c22c1824c1b224.css","static/chunks/pages/_app-776ab94dbbba56b9.js"],"/_error":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/pages/_error-e8556249ba232a96.js"],"/about-me":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/1141-851901dd7eb13313.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/4033-9c31de4b81a49e2e.js","static/chunks/pages/about-me-188174a7c6404630.js"],"/about-me/[id]":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/1141-851901dd7eb13313.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/4033-9c31de4b81a49e2e.js","static/chunks/pages/about-me/[id]-e88e752fac4fa237.js"],"/about-us":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/367-3e100bdcb4230d04.js","static/chunks/7221-16f4b059ee9bf51e.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/pages/about-us-be516e02ad60d08e.js"],"/blog-details":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/1141-851901dd7eb13313.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/6050-a7fe3e25b3a09e76.js","static/chunks/pages/blog-details-196ac5dbd56c5f93.js"],"/blog-details/[id]":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/1141-851901dd7eb13313.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/6050-a7fe3e25b3a09e76.js","static/chunks/pages/blog-details/[id]-2822c30b1bc1c6b7.js"],"/blogs":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/738-7d4fe0bf969c55ae.js","static/chunks/367-3e100bdcb4230d04.js","static/chunks/1358-9dc0c4d87106f851.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/pages/blogs-bd81d4183893e8bb.js"],"/cart":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/5591-04c11f747374080a.js","static/chunks/2415-85e4022afa061121.js","static/chunks/pages/cart-46dea68132b02cf3.js"],"/checkout":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/5591-04c11f747374080a.js","static/chunks/2415-85e4022afa061121.js","static/chunks/pages/checkout-cfc31edfe55cbbcd.js"],"/contact-us":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/5591-04c11f747374080a.js","static/chunks/pages/contact-us-a41096a926d87fc9.js"],"/digital-marketing-company":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/738-7d4fe0bf969c55ae.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/pages/digital-marketing-company-bdf900d8f8e21a2d.js"],"/email-marketing-services":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/738-7d4fe0bf969c55ae.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/2513-01e9ebe86abb78c0.js","static/chunks/pages/email-marketing-services-713c91b0aa9aa4ee.js"],"/faq":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/5591-04c11f747374080a.js","static/chunks/5229-ae7e2590e863078b.js","static/chunks/pages/faq-be2358011065c80f.js"],"/home-2":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/738-7d4fe0bf969c55ae.js","static/chunks/2879-388f0d387d4f4f04.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/pages/home-2-2b09525c0c117e51.js"],"/home-3":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/738-7d4fe0bf969c55ae.js","static/chunks/367-3e100bdcb4230d04.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/pages/home-3-0bf780f92257436e.js"],"/home-4":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/738-7d4fe0bf969c55ae.js","static/chunks/367-3e100bdcb4230d04.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/pages/home-4-b02657a94fa9725e.js"],"/home-5":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/738-7d4fe0bf969c55ae.js","static/chunks/1141-851901dd7eb13313.js","static/chunks/2879-388f0d387d4f4f04.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/725-415b44ef65684e57.js","static/chunks/pages/home-5-87d6e23185eb9c41.js"],"/home-6":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/738-7d4fe0bf969c55ae.js","static/chunks/2879-388f0d387d4f4f04.js","static/chunks/367-3e100bdcb4230d04.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/pages/home-6-bfc83d867927166a.js"],"/job":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/5229-ae7e2590e863078b.js","static/chunks/pages/job-aa186281918916f2.js"],"/job-details":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/1141-851901dd7eb13313.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/7605-9881f8c46ee2609c.js","static/chunks/pages/job-details-a401eeeadfe964b9.js"],"/job-details/[id]":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/1141-851901dd7eb13313.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/7605-9881f8c46ee2609c.js","static/chunks/pages/job-details/[id]-a75ce37633317fc2.js"],"/login":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/d6e72859-29514f80cbbf1eef.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/1141-851901dd7eb13313.js","static/chunks/8089-51236b54281a05a5.js","static/chunks/5591-04c11f747374080a.js","static/chunks/pages/login-8a992d59e41c6b2c.js"],"/our-services":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/pages/our-services-74c02b326da38d26.js"],"/portfolio":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/2879-388f0d387d4f4f04.js","static/chunks/5591-04c11f747374080a.js","static/chunks/pages/portfolio-a5cca611f9effa71.js"],"/portfolio-2":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/2879-388f0d387d4f4f04.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/pages/portfolio-2-ccb637716e057817.js"],"/portfolio-3":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/2879-388f0d387d4f4f04.js","static/chunks/5591-04c11f747374080a.js","static/chunks/pages/portfolio-3-8e52bc7f0e4a9ec3.js"],"/portfolio-details":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/5229-ae7e2590e863078b.js","static/chunks/pages/portfolio-details-1399303810fe2e49.js"],"/portfolio-details/[id]":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/5229-ae7e2590e863078b.js","static/chunks/pages/portfolio-details/[id]-9962d006043c9724.js"],"/portfolio-masonry":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/pages/portfolio-masonry-c0b1c1507fd679cf.js"],"/ppc-marketing-comapny":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/738-7d4fe0bf969c55ae.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/pages/ppc-marketing-comapny-68566d4f38371732.js"],"/price":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/5591-04c11f747374080a.js","static/chunks/pages/price-2598eb03f02757e1.js"],"/product":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/1358-9dc0c4d87106f851.js","static/chunks/9783-8ef0dbdad98a857b.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/pages/product-e6a53b169995bf4d.js"],"/product-details":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/738-7d4fe0bf969c55ae.js","static/chunks/1141-851901dd7eb13313.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/6028-388fd180547c8549.js","static/chunks/pages/product-details-82f1d0ef59240966.js"],"/product-details/[id]":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/738-7d4fe0bf969c55ae.js","static/chunks/1141-851901dd7eb13313.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/6028-388fd180547c8549.js","static/chunks/pages/product-details/[id]-7064473385b9b570.js"],"/register":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/d6e72859-29514f80cbbf1eef.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/1141-851901dd7eb13313.js","static/chunks/8089-51236b54281a05a5.js","static/chunks/5591-04c11f747374080a.js","static/chunks/pages/register-dafcbdc188f3c5cc.js"],"/seo-services":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/738-7d4fe0bf969c55ae.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/2513-01e9ebe86abb78c0.js","static/chunks/pages/seo-services-2fd9cc09eded676f.js"],"/service-2":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/738-7d4fe0bf969c55ae.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/pages/service-2-ebb04dd56296f155.js"],"/service-3":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/738-7d4fe0bf969c55ae.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/pages/service-3-813e1c864ef22985.js"],"/service-4":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/738-7d4fe0bf969c55ae.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/3117-558be1c407c3c30f.js","static/chunks/pages/service-4-cba19076a4a65c2a.js"],"/service-details":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/53-e92e87ce150c2be3.js","static/chunks/pages/service-details-ffbea9090ee24275.js"],"/service-details-four":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/5591-04c11f747374080a.js","static/chunks/pages/service-details-four-ce13260a4cccb1ad.js"],"/service-details-four/accordion-area":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/pages/service-details-four/accordion-area-61678a8a04bb12a9.js"],"/service-details-four/service-details-area":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/pages/service-details-four/service-details-area-db3d1d86e604b2dc.js"],"/service-details-one":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/5591-04c11f747374080a.js","static/chunks/pages/service-details-one-a7291adb83cb6c2b.js"],"/service-details-one/accordion-area":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/pages/service-details-one/accordion-area-b172243979dec631.js"],"/service-details-one/service-details-area":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/pages/service-details-one/service-details-area-9224ebd976444e5e.js"],"/service-details-three":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/5591-04c11f747374080a.js","static/chunks/pages/service-details-three-5917cd20310e2a41.js"],"/service-details-three/accordion-area":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/pages/service-details-three/accordion-area-2fb10ec3cfce826b.js"],"/service-details-three/service-details-area":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/pages/service-details-three/service-details-area-a837cd49f72c2494.js"],"/service-details-two":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/5591-04c11f747374080a.js","static/chunks/pages/service-details-two-cf4bbb536322b35b.js"],"/service-details-two/accordion-area":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/pages/service-details-two/accordion-area-1eaadd2794247647.js"],"/service-details-two/service-details-area":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/pages/service-details-two/service-details-area-363385f422cb42cf.js"],"/service-details/[id]":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/53-e92e87ce150c2be3.js","static/chunks/pages/service-details/[id]-daec05ec4ea855e4.js"],"/service-web-1":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/738-7d4fe0bf969c55ae.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/3117-558be1c407c3c30f.js","static/chunks/pages/service-web-1-62240f64650a3d08.js"],"/service-web-2":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/738-7d4fe0bf969c55ae.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/3117-558be1c407c3c30f.js","static/chunks/pages/service-web-2-059440501fc1e76d.js"],"/service-web-3":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/738-7d4fe0bf969c55ae.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/3117-558be1c407c3c30f.js","static/chunks/pages/service-web-3-2557bb5eab45b7d6.js"],"/service-web-4":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/738-7d4fe0bf969c55ae.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/3117-558be1c407c3c30f.js","static/chunks/pages/service-web-4-d690db4dae1c99fe.js"],"/service-web-5":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/738-7d4fe0bf969c55ae.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/3117-558be1c407c3c30f.js","static/chunks/pages/service-web-5-8bfd0a55c92299cd.js"],"/service-web-6":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/738-7d4fe0bf969c55ae.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/3117-558be1c407c3c30f.js","static/chunks/3617-235bf233eff184f2.js","static/chunks/pages/service-web-6-95cfb5f8ad9ada48.js"],"/service-web-7":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/738-7d4fe0bf969c55ae.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/3117-558be1c407c3c30f.js","static/chunks/3617-235bf233eff184f2.js","static/chunks/pages/service-web-7-bf97e84aea7af40f.js"],"/social-media-marketing-services":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/738-7d4fe0bf969c55ae.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/pages/social-media-marketing-services-3e5cc610a7dd2075.js"],"/testimonial":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/5591-04c11f747374080a.js","static/chunks/5229-ae7e2590e863078b.js","static/chunks/pages/testimonial-90a32693300bcbcb.js"],"/website-development-company":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/738-7d4fe0bf969c55ae.js","static/chunks/5591-04c11f747374080a.js","static/chunks/4575-aa7781d11eb0a134.js","static/chunks/2513-01e9ebe86abb78c0.js","static/chunks/pages/website-development-company-54c50f90af73b979.js"],"/wishlist":["static/chunks/webpack-8385467afe502aa7.js","static/chunks/framework-cfc81117475133e7.js","static/chunks/main-7cf985ab43a0137b.js","static/chunks/162-a6387d8c3f1bb8a3.js","static/chunks/5591-04c11f747374080a.js","static/chunks/pages/wishlist-b7326967fd8a67ac.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 73978:
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ 59450:
/***/ ((module) => {

module.exports = {"Dg":[]};

/***/ })

};
;