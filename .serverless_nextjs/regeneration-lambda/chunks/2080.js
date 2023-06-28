"use strict";
exports.id = 2080;
exports.ids = [2080];
exports.modules = {

/***/ 32080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88494);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71911);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);





const testimonial_contents = {
    subtitle: "Testimonial",
    title: "Check what",
    highlight_text: "client say",
    btn_text: "More Testimonial",
    testimonial_data: [
        {
            id: 1,
            brand_img: "/assets/img/testimonial/testi-brands-1.png",
            ratings: [
                1,
                2,
                3,
                4,
                5
            ],
            desc: "Wow. What a great experience with this copywriter. Muhammad Noman is a very talented copywriter. yesterday I got his first Email that was amazing... experience with him",
            img: "/assets/img/testimonial/testi-4.2.png",
            name: "Leslie Alexander",
            title: "P. Desiger of (Amazon)"
        },
        {
            id: 2,
            brand_img: "/assets/img/testimonial/testi-brands-2.png",
            ratings: [
                1,
                2,
                3,
                4,
                5
            ],
            desc: "It was great working with Digital Cappuccino. They have a wonderful team, and all of them work so corporately. I loved how they followed a refined workflow and defined their strategic approach initially, which eased things for my team and me.",
            img: "/assets/img/testimonial/testi-4.5.png",
            name: "Manpreet Singh",
            title: "Ux Designer of (Godaddy)"
        },
        {
            id: 3,
            brand_img: "/assets/img/testimonial/testi-brands-3.png",
            ratings: [
                1,
                2,
                3,
                4,
                5
            ],
            desc: "They ran my Youtube ads and monetized my channel within a month. They are " + "doing an amazing job and have some cool digital marketing services in Mumbai. I highly recommend and advise others and my friends.",
            img: "/assets/img/testimonial/testi-4.1.png",
            name: "Pratibha Goyal",
            title: "CEO of (Zlitemes)"
        },
        {
            id: 4,
            brand_img: "/assets/img/testimonial/testi-brands-1.png",
            ratings: [
                1,
                2,
                3,
                4,
                5
            ],
            desc: "Digital marketing consists of many things; frankly speaking, I knew none. Digital Cappuccino made it very specific in the beginning that they are always open to communicating and building a " + "marketing strategy that defines my business which they did.",
            img: "/assets/img/testimonial/testi-4.2.png",
            name: "Sarthak Patel",
            title: "P. Desiger of (Amazon)"
        }
    ]
};
const { btn_text , highlight_text , subtitle , testimonial_data , title  } = testimonial_contents;
const TestimonialArea = ({ home_6 , style_2 =false  })=>{
    const [sliderLoop, setSliderLoop] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>setSliderLoop(true), []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `tp-testimonial-area ${style_2 ? "pb-130" : "pt-130 pb-130"} p-relative`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${home_6 ? "bs-testi-shape-1" : "ce-testi-shape"} d-none d-lg-block`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: home_6 ? "/assets/img/testimonial/testimonial-shape-5.3.png" : "/assets/img/hero/hero-shape-4.png",
                    alt: ""
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-xl-12",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "tp-testi-wrapper d-flex pb-70 justify-content-between align-items-end",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "tp-testimonial-title-box ",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                className: "tp-subtitle",
                                                children: subtitle
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                                className: "tp-title-sm",
                                                children: [
                                                    title,
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: "tp-section-highlight",
                                                        children: [
                                                            highlight_text,
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                width: "212",
                                                                height: "11",
                                                                viewBox: "0 0 212 11",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "M0 0L212 11H0V0Z",
                                                                    fill: "#FFDC60"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "tp-testi-button-right-side",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: "/testimonial",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: `${home_6 || style_2 ? "tp-btn-yellow" : "tp-btn"}`,
                                                children: btn_text
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "tp-testimonial-slider-section-four",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .Swiper */ .tq, {
                            loop: sliderLoop,
                            slidesPerView: 3,
                            spaceBetween: 20,
                            centeredSlides: true,
                            centeredSlidesBounds: true,
                            className: "swiper-container testi-slider-active-five",
                            breakpoints: {
                                "1200": {
                                    slidesPerView: 3
                                },
                                "992": {
                                    slidesPerView: 3
                                },
                                "768": {
                                    slidesPerView: 1
                                },
                                "576": {
                                    slidesPerView: 1
                                },
                                "0": {
                                    slidesPerView: 1
                                }
                            },
                            children: testimonial_data.map((item)=>{
                                const { id , brand_img , desc , img , name , ratings , title  } = item;
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "tp-testimonial-item-four",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "tp-testimonial-item-four__meta d-flex justify-content-between align-items-center mb-60",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "tp-testimonial-item-four__logo",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "#",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: brand_img,
                                                                alt: ""
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "tp-testimonial-item-four__rating",
                                                        children: ratings.map((r)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fas fa-star"
                                                                })
                                                            }, r))
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "tp-testi-paragraph pb-40",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: desc
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "tp-testimonial-item-four__client d-flex align-items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "mr-20",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: img,
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "tp-testimonial-item-four__position",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                className: "m-0",
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
                                }, id);
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestimonialArea);


/***/ })

};
;