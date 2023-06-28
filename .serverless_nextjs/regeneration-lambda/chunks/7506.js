"use strict";
exports.id = 7506;
exports.ids = [7506];
exports.modules = {

/***/ 47506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88494);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71911);




const testimonial_contents = {
    shapes: [
        "testimonial-shape-5.3.png",
        "testimonial-shape-5.4.png"
    ],
    testi_items: [
        {
            ratings: [
                1,
                2,
                3,
                4
            ],
            desc: "Digital Cappuccino helped me take my business to the next level with their exceptional 360 marketing services. They delivered results beyond my expectations and provided a seamless experience throughout the process. Highly recommended!",
            name: "Smitha Ganneri",
            // title: "Content Creator (Amazon)",
            img: "/assets/img/testimonial/soul-sisters.png"
        },
        {
            ratings: [
                1,
                2,
                3,
                4,
                5
            ],
            desc: "Digital Cappuccino is a game-changer for our business. Highly skilled, their team has helped us grow significantly on social media with perfectly aligned brand voice. We highly recommend their services to anyone looking to take their social media game to the next level.",
            name: "Sagar Saroha",
            // title: "Web Developer (Amazon)",
            img: "/assets/img/testimonial/net-media.png"
        }, 
    ]
};
const { img , shapes , testi_items  } = testimonial_contents;
const ClientFeedback = ()=>{
    const [sliderLoop, setSliderLoop] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>setSliderLoop(true), []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "tp-testimonial-area pt-30 pb-30 fix p-relative px-2",
        children: [
            shapes.map((s, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `bp-test-shape-${i + 1} d-none d-lg-block`
                }, i)),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-xl-8",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "tp-project-section-box text-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                    className: "tp-subtitle",
                                    children: "Testimonials"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "testimonial-pd-slider-section",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .Swiper */ .tq, {
                                loop: sliderLoop,
                                slidesPerView: 1,
                                modules: [
                                    swiper__WEBPACK_IMPORTED_MODULE_3__/* .Autoplay */ .pt,
                                    swiper__WEBPACK_IMPORTED_MODULE_3__/* .Pagination */ .tl
                                ],
                                autoplay: {
                                    delay: 2000,
                                    disableOnInteraction: false
                                },
                                className: "swiper-container testi-slider-pd-active p-relative",
                                pagination: {
                                    el: ".project-slider-dots",
                                    clickable: true
                                },
                                children: [
                                    testi_items.map((item, i)=>{
                                        const { desc , name , ratings , img , title  } = item;
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                                            className: "white-bg",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "row",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-xl-5 col-lg-5 col-12",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "tp-testimonial-thumb text-start",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: img,
                                                                alt: "",
                                                                width: 300,
                                                                height: 300
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "tptesttimonial col-xl-7 col-lg-7 col-12",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "tptestimonial__rating-5",
                                                                children: [
                                                                    ratings.map((r)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                className: "fas fa-star"
                                                                            })
                                                                        }, r)),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        children: desc
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "tptestimonial__meta-5",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                        className: "tp-pd-testi-title",
                                                                        children: name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: title
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, i);
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "project-slider-dots project-blue-dots text-start text-md-end z-index-1"
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClientFeedback);


/***/ })

};
;