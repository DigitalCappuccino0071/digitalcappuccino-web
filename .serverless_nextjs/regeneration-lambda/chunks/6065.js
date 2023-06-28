"use strict";
exports.id = 6065;
exports.ids = [6065];
exports.modules = {

/***/ 86065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ service_details)
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
;// CONCATENATED MODULE: ./src/components/service-details/accordion-area.jsx


const accordion_items = [
    {
        id: "one",
        show: true,
        title: "How do you determine the best digital marketing channels to use for my business?",
        desc: "We determine the best digital marketing channels to use for your business based on a thorough analysis of your target audience, competitors, and industry trends. We will conduct market research to understand your audience's preferences, behavior, and pain points, and use that information to create a customized digital strategy and plan that utilizes the most effective channels to reach and engage with your audience."
    },
    {
        id: "two",
        title: "How long does it take to develop a digital strategy and plan for my business?",
        desc: " The time it takes to develop a digital strategy and plan for your business varies depending on the complexity of your needs and goals. However, we typically take 4-6 weeks to develop a comprehensive digital strategy and plan that is customized to your business. We believe in taking the time to understand your business needs and goals to create a strategy and plan that will deliver results."
    },
    {
        id: "three",
        title: "How do you measure the success of our digital marketing efforts?",
        desc: "We measure the success of your digital marketing efforts through key performance indicators (KPIs) that are aligned with your business goals. We provide regular analytics and reporting to track the performance of your digital marketing efforts and make necessary adjustments. We also conduct regular reviews with you to ensure that our strategy and plan align with your evolving business needs and goals."
    },
    {
        id: "four",
        title: "Can you work with businesses of all sizes and industries?",
        desc: "Yes, we work with businesses of all sizes and industries. We believe in creating customized digital strategies and plans that are tailored to your specific business needs and goals. Whether you're a small business just starting out or a large enterprise looking to improve your digital marketing efforts, our team of experienced digital marketers can help you achieve your business goals."
    },
    {
        id: "five",
        title: "How will your digital strategy and planning services benefit my business?",
        desc: "Our digital strategy and planning services will benefit your business by providing a customized roadmap for your digital marketing efforts that is tailored to your business needs and goals. We will help you identify your target audience, develop a content strategy, improve your website's visibility in search engines, and create social media and paid advertising strategies to reach and engage with your audience more effectively. Our services are designed to help you drive more traffic, leads, and conversions, and grow your business in the digital world."
    }, 
];
const AccordionArea = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "sd-accordio-area grey-bg pt-130 pb-130",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xl-7",
                            children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                className: "tp-title-sm mb-90",
                                children: "Solutions: all your questions answered"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xl-12",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "tp-custom-accordio",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "accordion",
                                    id: "accordionExample",
                                    children: accordion_items.map((item, i)=>{
                                        const { id , show , title , desc  } = item;
                                        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: `accordion-items ${show ? "faq-accordio-border" : ""}`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                    className: "accordion-header",
                                                    id: `heading-${id}`,
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                        className: `accordion-buttons ${show ? "" : "collapsed"}`,
                                                        type: "button",
                                                        "data-bs-toggle": "collapse",
                                                        "data-bs-target": `#collapse-${id}`,
                                                        "aria-expanded": show ? "true" : "false",
                                                        "aria-controls": `collapse-${id}`,
                                                        children: title
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    id: `collapse-${id}`,
                                                    className: `accordion-collapse collapse ${show ? "show" : ""}`,
                                                    "aria-labelledby": `heading-${id}`,
                                                    "data-bs-parent": "#accordionExample",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "accordion-body",
                                                        children: desc
                                                    })
                                                })
                                            ]
                                        }, id);
                                    })
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const accordion_area = (AccordionArea);

;// CONCATENATED MODULE: ./src/components/service-details/service-details-area.jsx


const ServiceDetailsArea = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "service-details-area",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row service-pt-pb",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xl-6 col-lg-6",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "sd-service-details",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                            className: "tp-title-sm service-details-space",
                                            children: "best solution for every stage of your business"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                "Schedule a free expert session ",
                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: "fal fa-arrow-right"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xl-6 col-lg-6",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "sd-service-details-paragraph",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "pb-15",
                                            children: "Our team of experienced digital marketers will work closely with you to understand your business objectives, target audience, and current digital marketing efforts. We will conduct a thorough analysis of your online presence and develop a customised digital strategy that is tailored to your business needs."
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "pb-10",
                                            children: "We begin by conducting a detailed market analysis to identify your target audience, competitors, and industry trends. From there, we help you define your business goals and set key performance indicators (KPIs) to measure the success of your digital marketing efforts."
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: "We then create a comprehensive content strategy that is aligned with your business goals and target audience. This includes developing a search engine optimization (SEO) strategy that can help improve your websites visibility in search engines, a social media strategy that can help you connect with your target audience and build brand awareness, and a paid advertising strategy that can help you reach your target audience and drive conversions."
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-12",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "sd-big-img",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "/assets/img/service/service-icon-10.1.png",
                                        alt: ""
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xl-6 col-lg-6",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "sd-service-details",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                        className: "tp-title-sm service-details-space",
                                        children: "Design process based on best practices and methodologies that deliver"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xl-6 col-lg-6",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "sd-service-details-paragraph",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "pb-15",
                                            children: "Throughout the entire process, we believe in transparency and collaboration. We provide regular analytics and reporting to track the performance of your digital marketing efforts and make necessary adjustments."
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: "At Digital Cappuccino, we understand that every business is unique, and we strive to create customized digital strategies and plans that are tailored to your specific needs. So, whether you re looking to launch a new digital marketing campaign or improve your existing efforts, our digital strategy and planning services can help you achieve your business goals."
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const service_details_area = (ServiceDetailsArea);

;// CONCATENATED MODULE: ./src/components/service-details/index.jsx







const ServiceDetails = ({ service  })=>{
    (0,react.useEffect)(()=>{
        setTimeout(()=>{
            (0,utils/* animationCreate */.H)();
        }, 500);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(layout/* Wrapper */.im, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(layout/* Header */.h4, {}),
            /*#__PURE__*/ jsx_runtime.jsx(breadcrumb/* default */.Z, {
                title: service?.title ? service?.title : "Service Details"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(service_details_area, {}),
            /*#__PURE__*/ jsx_runtime.jsx(accordion_area, {}),
            /*#__PURE__*/ jsx_runtime.jsx(layout/* FooterThree */.yD, {})
        ]
    });
};
/* harmony default export */ const service_details = (ServiceDetails);


/***/ })

};
;