"use strict";
exports.id = 3470;
exports.ids = [3470];
exports.modules = {

/***/ 43470:
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
        title: "What is video marketing, and how can it benefit my business?",
        desc: " Video marketing is the use of videos to promote and market your business, products, or services. It can help you engage your audience, increase brand awareness, and drive conversions. By incorporating videos into your marketing strategy, you can create more engaging and memorable content that resonates with your target audience."
    },
    {
        id: "two",
        title: "  What is a GIF, and how can it be used for marketing? ",
        desc: "A GIF is a short, animated image that loops continuously. They can be used in various ways for marketing, such as creating eye-catching social media posts, adding personality to email marketing campaigns, or showcasing product features on your website. GIFs can help you grab your audience's attention, communicate a message quickly and effectively, and increase engagement."
    },
    {
        id: "three",
        title: "How can content marketing help my business? ",
        desc: "Content marketing is the creation and distribution of valuable, relevant, and consistent content to attract and retain a clearly defined audience and drive profitable customer action. It can help your business establish credibility, authority, and trust with your target audience. By creating high-qualit content that addresses your audience's pain points and interests, you can position your business as a valuable resource and drive conversions."
    },
    {
        id: "four",
        title: "Can video marketing and content marketing work together?",
        desc: "Absolutely! Video marketing and content marketing can complement each other to create a powerful marketing strategy. For example, you can create video content that aligns with your content marketing strategy, such as creating how-to videos that demonstrate your expertise or sharing customer success stories through video testimonials. By integrating video and content marketing, you can enhance your messaging, increase engagement, and drive results."
    },
    {
        id: "five",
        title: " How can I measure the success of my video and content marketing efforts?",
        desc: "To measure the success of your video and content marketing efforts, you can track various metrics such as views, engagement rates, click-through rates, conversions, and ROI. By analyzing these metrics, you can identify what's working well and what can be improved, and make data-driven decisions to optimize your strategy for better results."
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