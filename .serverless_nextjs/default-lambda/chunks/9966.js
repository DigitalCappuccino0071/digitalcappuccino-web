"use strict";
exports.id = 9966;
exports.ids = [9966];
exports.modules = {

/***/ 19966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ service_4)
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
;// CONCATENATED MODULE: ./src/components/services/service-4/services-items.jsx




const services_items = data/* services_data.filter */.wd.filter((ser)=>ser.service_p_4);
const ServicesItems = ()=>{
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("div", {
            className: "tp-service-area pt-125",
            children: /*#__PURE__*/ _jsx("div", {
                className: "container",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "row gx-17",
                    children: services_items.map((ser, i)=>{
                        return /*#__PURE__*/ _jsx(SingleServiceFour, {
                            service: ser,
                            index: i
                        }, i);
                    })
                })
            })
        })
    });
};
/* harmony default export */ const service_4_services_items = ((/* unused pure expression or super */ null && (ServicesItems)));

;// CONCATENATED MODULE: ./src/components/services/service-4/card-details.jsx


const card_details_data = [
    {
        id: 11,
        image: "/assets/img/breadcrum_1/web_development.png",
        title: "Web Development ",
        peraOne: "Ready to brew up an exceptional website for your business? Our team of skilled " + "web designers are zealously equipped in creating websites that are eye- catching" + " and fascinating at the same time. We are one of the leading Website Development " + "Companies offering professional website " + "design and development for small enterprises to large businesses. At " + "Dgital Cappuccino, we Help You accomplish Your Business Goals " + "Through Stunning, Functional Website Designs. From Custom Layouts " + "and Intuitive Navigation to Seamless Integration with Your Existing " + "Systems, our web design service caters classic blend of form and " + "content. So, why settle for a milk -and- water website when we can" + "deliver to you a rich and frothy cappuccino?"
    },
    {
        id: 12,
        image: "/assets/img/breadcrum_1/social_media.png",
        title: "WordPress Web Development ",
        peraOne: "Make Digital Cappuccino your company of choice for WordPress " + "development. Professional WordPress design and development services " + "are what we offer. Exceptional care is taken to consider the" + "particularities of each web project and deliver well optimised, seo-savvy " + "WordPress solutions within the allotted time frames. To create websites" + "that are safe and adaptable, our WordPress planners practice clear and" + "clean code standards. This enables you to utilise dedicated project" + "managers to delegate your WordPress development services in an" + "efficient manner."
    },
    {
        id: 13,
        image: "/assets/img/breadcrum_1/seo.png",
        title: "E-commerce Website Development",
        peraOne: "With our tailored eCommerce website development services, grow your" + "online business with us. At Digital Cappuccino, we craft aesthetically" + "pleasing eCommerce platforms that improve user satisfaction, boost" + "sales, and optimize conversion rates. Hire an eCommerce developer to" + "handle all of your requirements for constructing a shopping cart portal" + "using the newest advancements"
    },
    {
        id: 14,
        image: "/assets/img/breadcrum_1/email.png",
        title: "CMS Website Development",
        peraOne: "At Digital Cappuccino, we specialize in delivering reliable, scalable, and" + "feature-packed CMS-based web solutions. With multi-layer permissions",
        peraTwo: "we offer you full authority over the platform in order to manage, modify," + "and broadcast products. We offer comprehensive, complete design and" + "development for eCommerce web portals. Serving customers on" + "eCommerce websites for the past 10+ years, we have expertise in" + "creating specialised eCommerce web portals that meet client needs and" + "specifications."
    },
    {
        id: 15,
        image: "/assets/img/breadcrum_1/google_ads.png",
        title: "Google Ads ",
        peraOne: "Looking to elevate your business with Google Ads? At Digital Cappuccino, we have the expertise to create and execute a targeted Google Ads campaign that will drive traffic, generate leads, and boost sales. Our experienced team of digital marketers specializes in every aspect of Google Ads, from conducting thorough keyword research to crafting compelling ad copies that yield results. We pride ourselves on delivering exceptional services that optimize your ads and provide maximum ROI. With detailed analytics and reporting, we'll monitor your campaign's performance and make necessary adjustments to ensure your ongoing success."
    },
    {
        id: 16,
        image: "/assets/img/breadcrum_1/youtube.png",
        title: "Youtube Ads",
        peraOne: "Need help advertising your business on the largest video-sharing platform? Our team of skilled digital marketers can help you create and execute a successful YouTube advertising campaign. We provide various YouTube ad formats, including skippable and non-skippable in-stream ads, bumper ads, and discovery ads, to ensure maximum reach and engagement with your target audience. Our YouTube advertising services also include video production and optimization, ad targeting and placement, and analytics to track ad performance and make necessary adjustments."
    },
    {
        id: 17,
        image: "/assets/img/breadcrum_1/logo_design.png",
        title: "Logo Design ",
        peraOne: "If you're looking for a unique and memorable logo for your brand, you've come to the right place. At Digital Cappuccino, our team of skilled graphic designers can create a custom logo that captures the essence of your business and helps you stand out in a crowded market. We start by getting to know your brand and your goals, and then we work closely with you to develop a logo that is tailored to your vision. Our logo design services include multiple design concepts, revisions, and file formats to ensure that you are completely satisfied with the end result."
    },
    {
        id: 18,
        image: "/assets/img/breadcrum_1/influencer.png",
        title: "Influencer Marketing ",
        peraOne: "Are you seeking to collaborate with industry leaders to enhance your brand's reputation and boost sales? Look no further than Digital Cappuccino! Our influencer marketing services will assist you in identifying the perfect influencer, negotiating partnerships, and managing campaigns for maximum ROI. With our expertise, we can help you achieve your business objectives, whether it's to boost brand recognition, drive website traffic, or increase revenue. Don't wait any longer; let us help you connect with the right influencers to reach your target audience effectively."
    }, 
];
const CardDetails = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: card_details_data.map((item, e)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "ac-about-content-area",
                id: `sectionScroller${item.id}`,
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: `row ac-testimonial-space pb-0 ${e % 2 ? "rowLeft" : "rowRight"}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xl-6 col-lg-6 wow tpfadeLeft",
                                "data-wow-duration": ".3s",
                                "data-wow-delay": ".5s",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "ac-testimonial-info",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "actestimonial",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "actestimonial__position",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                                    className: "ac-client-name fs-2 pb-3",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        href: "#",
                                                        children: item.title
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "text-capitalize",
                                                    style: {},
                                                    children: item.peraOne
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "text-capitalize text-justify",
                                                    children: item.peraTwo
                                                })
                                            ]
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xl-6 col-lg-6 wow tpfadeRight",
                                "data-wow-duration": ".5s",
                                "data-wow-delay": ".7s",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "ac-testimonial-right",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: item.image,
                                        alt: ""
                                    })
                                })
                            })
                        ]
                    })
                })
            }, item.id))
    });
};
/* harmony default export */ const card_details = (CardDetails);

;// CONCATENATED MODULE: ./src/components/services/service-4/index.jsx










const ServiceFour = ()=>{
    (0,react.useEffect)(()=>{
        setTimeout(()=>{
            (0,utils/* animationCreate */.H)();
        }, 500);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(layout/* Wrapper */.im, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(layout/* Header */.h4, {}),
            /*#__PURE__*/ jsx_runtime.jsx(breadcrumb/* default */.Z, {
                title: "Website Development"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(card_details, {}),
            /*#__PURE__*/ jsx_runtime.jsx(cta_2/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(layout/* FooterThree */.yD, {})
        ]
    });
};
/* harmony default export */ const service_4 = (ServiceFour);


/***/ })

};
;