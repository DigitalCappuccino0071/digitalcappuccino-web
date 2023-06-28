"use strict";
exports.id = 6893;
exports.ids = [6893];
exports.modules = {

/***/ 96893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);


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
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "sd-accordio-area grey-bg pt-130 pb-130",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-xl-7",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "tp-title-sm mb-90",
                                children: " Solutions: all your questions answered"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-xl-12",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "tp-custom-accordio",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "accordion",
                                    id: "accordionExample",
                                    children: accordion_items.map((item, i)=>{
                                        const { id , show , title , desc  } = item;
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `accordion-items ${show ? "faq-accordio-border" : ""}`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "accordion-header",
                                                    id: `heading-${id}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: `accordion-buttons ${show ? "" : "collapsed"}`,
                                                        type: "button",
                                                        "data-bs-toggle": "collapse",
                                                        "data-bs-target": `#collapse-${id}`,
                                                        "aria-expanded": show ? "true" : "false",
                                                        "aria-controls": `collapse-${id}`,
                                                        children: title
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    id: `collapse-${id}`,
                                                    className: `accordion-collapse collapse ${show ? "show" : ""}`,
                                                    "aria-labelledby": `heading-${id}`,
                                                    "data-bs-parent": "#accordionExample",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccordionArea);


/***/ })

};
;