"use strict";
exports.id = 1103;
exports.ids = [1103];
exports.modules = {

/***/ 71103:
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
        title: "What is seo and why is it important for my business? ",
        desc: "seo is the process of optimizing your website to improve its visibility in search engine results pages. It is important for your business because it can help you drive more traffic, leads, and conversions, ultimately leading to increased revenue."
    },
    {
        id: "two",
        title: " How long does it take to see results from seo?",
        desc: " It depends on several factors, such as the current state of your website, the level of competition in your industry, and the seo strategies used. Generally, it can take anywhere from a few weeks to several months to see significant improvements in your website's rankings and traffic."
    },
    {
        id: "three",
        title: " What is SEM and how is it different from seo?",
        desc: "SEM stands for Search Engine Marketing and involves using paid advertising to improve your website's visibility in search engine results pages. It is different from seo, which focuses on improving your website's visibility through organic means."
    },
    {
        id: "four",
        title: " How can SEM help my business?",
        desc: "SEM can help your business by driving more targeted traffic to your website, increasing brand awareness, and generating leads and sales. With SEM, you can reach a larger audience and achieve your business goals more quickly."
    },
    {
        id: "five",
        title: "How do you measure the success of seo and SEM campaigns? ",
        desc: "The success of seo and SEM campaigns can be measured through various metrics such as website traffic, keyword rankings, click-through rates, conversion rates, and ROI. At Digital Cappuccino, we use advanced analytics tools to track and measure the success of our clients' seo and SEM campaigns."
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