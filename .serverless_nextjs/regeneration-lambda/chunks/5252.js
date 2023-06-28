"use strict";
exports.id = 5252;
exports.ids = [5252];
exports.modules = {

/***/ 95252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ service_6)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/layout/index.jsx + 17 modules
var layout = __webpack_require__(35591);
// EXTERNAL MODULE: ./src/utils/utils.js
var utils = __webpack_require__(38356);
// EXTERNAL MODULE: ./src/components/common/breadcrumb/breadcrumb.jsx
var breadcrumb = __webpack_require__(36740);
// EXTERNAL MODULE: ./src/components/common/cta/cta-2.jsx
var cta_2 = __webpack_require__(61771);
// EXTERNAL MODULE: ./src/components/common/recent-case-studies.jsx
var recent_case_studies = __webpack_require__(17627);
// EXTERNAL MODULE: ./src/components/homes/home-4/testimonial-area.jsx
var testimonial_area = __webpack_require__(32080);
// EXTERNAL MODULE: ./src/data/index.js + 3 modules
var data = __webpack_require__(28787);
// EXTERNAL MODULE: ./src/components/common/single-service-4.jsx
var single_service_4 = __webpack_require__(69519);
// EXTERNAL MODULE: ./src/data/service-data-2.js
var service_data_2 = __webpack_require__(41319);
;// CONCATENATED MODULE: ./src/components/services/service-6/services-web-6.jsx





const services_items = service_data_2/* default.filter */.Z.filter((ser)=>ser.service_p_4);
const ServicesWeb6 = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "tp-service-area pt-125",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row gx-17",
                    children: services_items.map((ser, i)=>{
                        return /*#__PURE__*/ jsx_runtime.jsx(single_service_4/* default */.Z, {
                            service: ser,
                            index: i
                        }, i);
                    })
                })
            })
        })
    });
};
/* harmony default export */ const services_web_6 = (ServicesWeb6);

;// CONCATENATED MODULE: ./src/components/services/service-6/index.jsx









const ServiceWeb6 = ()=>{
    (0,react.useEffect)(()=>{
        setTimeout(()=>{
            (0,utils/* animationCreate */.H)();
        }, 500);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(layout/* Wrapper */.im, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(layout/* Header */.h4, {}),
            /*#__PURE__*/ jsx_runtime.jsx(breadcrumb/* default */.Z, {
                title: "Web Services 6"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(services_web_6, {}),
            /*#__PURE__*/ jsx_runtime.jsx(recent_case_studies/* default */.Z, {
                padd: "pt-130"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(testimonial_area/* default */.Z, {
                style_2: true
            }),
            /*#__PURE__*/ jsx_runtime.jsx(cta_2/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(layout/* FooterThree */.yD, {})
        ]
    });
};
/* harmony default export */ const service_6 = (ServiceWeb6);


/***/ }),

/***/ 41319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94894);


const services_data_2 = [
    {
        id: 1,
        duration: ".5s",
        delay: ".8s",
        img: "/assets/img/service/service-1.png",
        title: "Ideation & Evaluation",
        text_1: "At Digital Cappuccino we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
        text_2: "At Digital Cappuccino we specialize in designing, building, shipping and scaling...",
        home: true,
        service_p_2: true
    },
    {
        id: 2,
        duration: ".7s",
        delay: "1s",
        img: "/assets/img/service/service-2.png",
        title: "Ideation & Evaluation",
        text_1: "At Digital Cappuccino we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
        text_2: "At Digital Cappuccino we specialize in designing, building, shipping and scaling...",
        home: true,
        service_p_2: true
    },
    {
        id: 3,
        duration: ".9s",
        delay: "1.2s",
        img: "/assets/img/service/service-3.png",
        title: "Online Marketing",
        text_1: "At Digital Cappuccino we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
        text_2: "At Digital Cappuccino we specialize in designing, building, shipping and scaling...",
        home: true,
        service_p_2: true
    },
    {
        id: 4,
        duration: ".9s",
        delay: "1.3s",
        img: "/assets/img/service/service-icon-9.1.png",
        title: "Customer Support",
        text_1: "At Digital Cappuccino we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
        text_2: "At Digital Cappuccino we specialize in designing, building, shipping and scaling...",
        service_p_2: true
    },
    // home two
    {
        id: 5,
        duration: ".3s",
        delay: ".6s",
        color: "tp-sv-blue-color",
        img: "/assets/img/service/service-3.png",
        title: "Mobile Design",
        text_1: "At Digital Cappuccino we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
        home_2: true,
        service_p_3: true
    },
    {
        id: 6,
        duration: ".5s",
        delay: ".8s",
        color: "tp-sv-sky-color",
        img: "/assets/img/service/service-1.png",
        title: "Web Development",
        text_1: "At Digital Cappuccino we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
        home_2: true,
        service_p_3: true
    },
    {
        id: 7,
        duration: ".7s",
        delay: "1s",
        color: "tp-sv-pink-color",
        img: "/assets/img/service/service-icon-4.png",
        title: "UI UX Design",
        text_1: "At Digital Cappuccino we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
        home_2: true,
        service_p_3: true
    },
    // home three
    {
        id: 8,
        duration: "1s",
        delay: ".3s",
        img: "/assets/img/service/service-social-media-marketing.png",
        title: "Market",
        color: "service-color-1",
        text_1: "At Digital Cappuccino we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
        home_3: true,
        service_p_4: true
    },
    {
        id: 9,
        duration: "1s",
        delay: ".5s",
        img: "/assets/img/service/service-6.png",
        title: "Web Design",
        color: "service-color-2",
        text_1: "At Digital Cappuccino we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
        home_3: true,
        service_p_4: true
    },
    {
        id: 10,
        duration: "1s",
        delay: ".7s",
        img: "/assets/img/service/service-7.png",
        title: "Branding",
        color: "service-color-3",
        text_1: "At Digital Cappuccino we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
        home_3: true,
        service_p_4: true
    },
    // home four
    {
        id: 11,
        duration: ".3s",
        delay: ".5s",
        img: "/assets/img/service/007-email.png",
        title: "Website Development",
        border_effect: "",
        text_1: "At Digital Cappuccino we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
        home_4: true,
        service_p: true
    },
    {
        id: 12,
        duration: ".5s",
        delay: ".7s",
        img: "/assets/img/service/service4.1.png",
        title: "Social Media Management",
        border_effect: "sv-border-effect-1",
        text_1: "At Digital Cappuccino we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
        home_4: true,
        service_p: true
    },
    {
        id: 13,
        duration: ".7s",
        delay: ".9s",
        img: "/assets/img/service/service4.2.png",
        title: "Search Engine Optimization",
        border_effect: "sv-border-effect-2",
        text_1: "At Digital Cappuccino we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
        home_4: true,
        service_p: true
    },
    {
        id: 14,
        duration: ".9s",
        delay: "1s",
        img: "/assets/img/service/service4.3.png",
        title: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "Email",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                " Marketing"
            ]
        }),
        border_effect: "sv-border-effect-3",
        text_1: "At Digital Cappuccino we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
        home_4: true,
        service_p: true
    },
    {
        id: 15,
        duration: ".9s",
        delay: "1.1s",
        img: "/assets/img/service/service4.4.png",
        title: "Google Ads",
        border_effect: "sv-border-effect-4",
        text_1: "At Digital Cappuccino we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
        home_4: true,
        service_p: true
    },
    {
        id: 16,
        duration: "1s",
        delay: "1.1s",
        img: "/assets/img/service/service4.5.png",
        title: "Youtube Ads",
        border_effect: "Facebook Ads",
        text_1: "At Digital Cappuccino we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
        home_4: true,
        service_p: true
    },
    {
        id: 17,
        duration: "1.1s",
        delay: "1.2s",
        img: "/assets/img/service/service4.6.png",
        title: "Logo Design",
        border_effect: "sv-border-effect-6",
        text_1: "At Digital Cappuccino we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
        home_4: true,
        service_p: true
    },
    // add service item
    {
        id: 18,
        duration: "1.2s",
        delay: "1.3s",
        img: "/assets/img/service/007-email.png",
        title: "Influencer Marketing",
        border_effect: "",
        text_1: "At Digital Cappuccino we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
        service_p: true
    },
    // home five
    {
        id: 19,
        img: "/assets/img/service/service4.1.png",
        top_border: true,
        icon: "flaticon-target",
        title: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "Digital Strategy  ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                "And Planning"
            ]
        }),
        path: "/service-details-one",
        text_1: "At Digital Cappuccino we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
        home_5: true
    },
    {
        id: 20,
        img: "/assets/img/service/service4.2.png",
        icon: "flaticon-statistics",
        title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: "SEO and Search Engine Marketing"
        }),
        path: "/service-details-two",
        text_1: "At Digital Cappuccino we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
        home_5: true
    },
    {
        id: 21,
        img: "/assets/img/service/service4.3.png",
        icon: "flaticon-coding",
        title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: "Web Design & Development"
        }),
        path: "/service-details-three",
        text_1: "At Digital Cappuccino we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
        home_5: true
    },
    {
        id: 22,
        img: "/assets/img/service/service4.4.png",
        icon: "flaticon-team",
        title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: "Video Gifs & Content Marketing"
        }),
        path: "/service-details-four",
        text_1: "At Digital Cappuccino we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
        home_5: true
    },
    // home six
    {
        id: 23,
        img: "/assets/img/service/service-1.png",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg__WEBPACK_IMPORTED_MODULE_1__/* .Bulb */ .YM, {}),
        title: "Digital Cappuccino business solution",
        text_1: "At Digital Cappuccino we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
        duration: ".3s",
        delay: ".5s",
        home_6: true
    },
    {
        id: 24,
        img: "/assets/img/service/service-2.png",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg__WEBPACK_IMPORTED_MODULE_1__/* .Code */ .EK, {}),
        title: "Web, app development",
        text_1: "At Digital Cappuccino we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
        duration: ".5s",
        delay: ".7s",
        active: true,
        home_6: true
    },
    {
        id: 25,
        img: "/assets/img/service/service-3.png",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_svg__WEBPACK_IMPORTED_MODULE_1__/* .Managed */ .aG, {}),
        title: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                "Managed ",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                " service solution"
            ]
        }),
        text_1: "At Digital Cappuccino we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
        duration: ".7s",
        delay: ".9s",
        home_6: true
    },
    // services 3
    {
        id: 26,
        duration: ".9s",
        delay: "1s",
        color: "tp-sv-blue-color",
        img: "/assets/img/service/service-11.png",
        title: "Customer Support",
        text_1: "At Digital Cappuccino we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
        service_p_3: true
    },
    {
        id: 27,
        duration: ".9s",
        delay: "1.1s",
        color: "tp-sv-sky-color",
        img: "/assets/img/service/service-8.png",
        title: "Custom Service",
        text_1: "At Digital Cappuccino we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
        service_p_3: true
    },
    {
        id: 28,
        duration: ".9s",
        delay: "1.2s",
        color: "tp-sv-pink-color",
        img: "/assets/img/service/service-9.png",
        title: "Website Design",
        text_1: "At Digital Cappuccino we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
        service_p_3: true
    },
    // service 4,
    {
        id: 29,
        duration: ".9s",
        delay: "1s",
        img: "/assets/img/service/service-9.png",
        title: "Content Writing",
        color: "sv-four-color",
        text_1: "At Digital Cappuccino we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
        service_p_4: true
    },
    {
        id: 30,
        duration: ".9s",
        delay: "1.1s",
        img: "/assets/img/service/service-10.png",
        title: "Web Design",
        color: "sv-six-color",
        text_1: "At Digital Cappuccino we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
        service_p_4: true
    },
    {
        id: 31,
        duration: ".9s",
        delay: "1.2s",
        img: "/assets/img/service/service-social-media-marketing.png",
        title: "UI Design",
        color: "sv-five-color",
        text_1: "At Digital Cappuccino we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast",
        service_p_4: true
    }, 
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (services_data_2);


/***/ })

};
;