"use strict";
exports.id = 2780;
exports.ids = [2780];
exports.modules = {

/***/ 2780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88494);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71911);




const brand_images = [
    "/assets/img/brand-logos/adword.png",
    "/assets/img/brand-logos/facebook.png",
    "/assets/img/brand-logos/google.png",
    "/assets/img/brand-logos/instagram.png",
    "/assets/img/brand-logos/pintrust.png",
    "/assets/img/brand-logos/twiter.png",
    "/assets/img/brand-logos/youtube.png",
    "/assets/img/brand-logos/rbpt.png",
    "/assets/img/brand-logos/iksha-labs.png",
    "/assets/img/brand-logos/irim.png", 
];
const Index = ()=>{
    const [sliderLoop, setSliderLoop] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>setSliderLoop(true), []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .Swiper */ .tq, {
        loop: sliderLoop,
        spaceBetween: 30,
        slidesPerView: 2,
        modules: [
            swiper__WEBPACK_IMPORTED_MODULE_3__/* .Autoplay */ .pt
        ],
        autoplay: {
            delay: 2500,
            disableOnInteraction: true
        },
        className: "swiper-wrapper d-flex align-items-center",
        breakpoints: {
            // when window width is >= 1200px
            1200: {
                slidesPerView: 6
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 5
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 4
            },
            // when window width is >= 576px
            576: {
                slidesPerView: 3
            }
        },
        children: brand_images.map((brand, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "tp-brand-icon text-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: brand,
                        alt: ""
                    })
                })
            }, i))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);


/***/ })

};
;