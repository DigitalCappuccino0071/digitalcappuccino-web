"use strict";
exports.id = 9936;
exports.ids = [9936];
exports.modules = {

/***/ 49936:
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
        title: "What makes a good website design?",
        desc: " A good website design should be visually appealing, user-friendly, and optimized for performance. It should also reflect your brand personality and target your audience effectively."
    },
    {
        id: "two",
        title: "Can you design a website that is mobile-friendly?",
        desc: " Yes, we specialize in creating responsive and scalable websites that provide a seamless user experience across all devices."
    },
    {
        id: "three",
        title: " How long does it take to design and develop a website? ",
        desc: "The timeline for website design and development can vary depending on the complexity of the project. We work closely with our clients to ensure that we meet their specific timelines and deliver exceptional results."
    },
    {
        id: "four",
        title: "  Do you offer website maintenance services?",
        desc: " Yes, we offer website maintenance services to ensure that your website stays up-to-date and secure. This includes regular software" + " updates, security checks, and content updates as needed."
    },
    {
        id: "five",
        title: "  How much does web design and development cost? ",
        desc: "The cost of web design and development can vary depending on the scope of the project. We offer competitive pricing and work with our clients to create a custom solution that fits their budget and business needs."
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
                                children: "Solutions: all your questions answered"
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