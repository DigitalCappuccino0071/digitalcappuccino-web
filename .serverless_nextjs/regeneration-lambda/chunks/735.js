"use strict";
exports.id = 735;
exports.ids = [735];
exports.modules = {

/***/ 40735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ product_details)
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
// EXTERNAL MODULE: ./node_modules/react-rating/lib/react-rating.cjs.js
var react_rating_cjs = __webpack_require__(35596);
var react_rating_cjs_default = /*#__PURE__*/__webpack_require__.n(react_rating_cjs);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(37424);
// EXTERNAL MODULE: ./src/redux/features/cart-slice.js
var cart_slice = __webpack_require__(8958);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./src/utils/validation-schema.js
var validation_schema = __webpack_require__(38315);
// EXTERNAL MODULE: ./src/components/forms/error-msg.jsx
var error_msg = __webpack_require__(40002);
// EXTERNAL MODULE: ./src/redux/features/product-slice.js
var product_slice = __webpack_require__(66870);
;// CONCATENATED MODULE: ./src/components/forms/review-form.jsx







const ReviewForm = ({ reviewValue  })=>{
    const dispatch = (0,lib.useDispatch)();
    // use formik
    const { handleChange , handleSubmit , handleBlur , errors , values , touched  } = (0,dist.useFormik)({
        initialValues: {
            name: "",
            email: "",
            review: ""
        },
        validationSchema: validation_schema/* reviewSchema */.$5,
        onSubmit: (values, { resetForm  })=>{
            dispatch((0,product_slice/* add_reviews */.VS)({
                img: "/assets/img/product/client-3.png",
                name: values.name,
                email: values.email,
                review: values.review,
                rating: reviewValue,
                date: new Date().toLocaleString()
            }));
            resetForm();
        }
    });
    return /*#__PURE__*/ jsx_runtime.jsx("form", {
        onSubmit: handleSubmit,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "col-xxl-12",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "comment-input",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                name: "review",
                                value: values.review,
                                onChange: handleChange,
                                onBlur: handleBlur,
                                placeholder: "Your review..."
                            }),
                            touched.review && /*#__PURE__*/ jsx_runtime.jsx(error_msg/* default */.Z, {
                                error: errors.review
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "col-xxl-6",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "comment-input",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                name: "name",
                                value: values.name,
                                onChange: handleChange,
                                onBlur: handleBlur,
                                type: "text",
                                placeholder: "Your Name*"
                            }),
                            touched.name && /*#__PURE__*/ jsx_runtime.jsx(error_msg/* default */.Z, {
                                error: errors.name
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "col-xxl-6",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "comment-input",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                value: values.email,
                                name: "email",
                                onChange: handleChange,
                                onBlur: handleBlur,
                                type: "email",
                                placeholder: "Your Email*"
                            }),
                            touched.email && /*#__PURE__*/ jsx_runtime.jsx(error_msg/* default */.Z, {
                                error: errors.email
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "col-xxl-12",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "comment-submit",
                        children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                            type: "submit",
                            className: "tp-btn-yellow",
                            children: "Submit"
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const review_form = (ReviewForm);

// EXTERNAL MODULE: ./node_modules/swiper/react/swiper-react.js + 14 modules
var swiper_react = __webpack_require__(88494);
// EXTERNAL MODULE: ./src/data/index.js + 3 modules
var data = __webpack_require__(28787);
// EXTERNAL MODULE: ./src/redux/features/wishlist-slice.js
var wishlist_slice = __webpack_require__(87891);
;// CONCATENATED MODULE: ./src/components/product-details/related-products.jsx








const RelatedProducts = ({ category , title  })=>{
    const [sliderLoop, setSliderLoop] = react.useState(false);
    react.useEffect(()=>setSliderLoop(true), []);
    const dispatch = (0,lib.useDispatch)();
    const { cart_products  } = (0,lib.useSelector)((state)=>state.cart);
    const { wishlists  } = (0,lib.useSelector)((state)=>state.wishlist);
    (0,react.useEffect)(()=>{
        dispatch((0,cart_slice/* get_cart_products */.N3)());
        dispatch((0,wishlist_slice/* get_wishlist_products */.yR)());
    }, [
        dispatch
    ]);
    // handleAddProduct
    const handleAddProduct = (item)=>{
        dispatch((0,cart_slice/* add_cart_product */.YR)(item));
    };
    // handle wishlist
    const handleWishlist = (item)=>{
        const checkItem = wishlists.findIndex((i)=>i.id === item.id);
        if (checkItem >= 0) {
            dispatch((0,wishlist_slice/* add_wishlist */.xQ)({
                changeType: "remove",
                item
            }));
        } else {
            dispatch((0,wishlist_slice/* add_wishlist */.xQ)({
                changeType: "added",
                item
            }));
        }
    };
    // const words = title.split(' ');
    // const related__products = productsData.filter(data => words.some(s => 
    //  data.title.toLowerCase()
    // .includes(s.toLowerCase())))
    // console.log(related__products);
    const relatedItems = data/* productsData.filter */.Zc.filter((item)=>item.category === category);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "tp-product-slider pb-100",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xl-10",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "tp-product-slider-title",
                                children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    className: "tp-product-slider-title pb-45",
                                    children: "Realated Product"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "col-xl-10",
                            children: [
                                relatedItems.length <= 3 && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "row",
                                    children: relatedItems.map((item)=>{
                                        const { id , img , title , price , rating  } = item;
                                        const isCartSelected = cart_products.find((i)=>i.id === id);
                                        const isWishlistSelected = wishlists.find((w)=>w.id === id);
                                        return /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-xl-4 col-md-6 col-12",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "tpproduct text-center mb-30",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "tpproduct__img",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                className: "w-100",
                                                                src: img,
                                                                alt: ""
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "tp-product-icon",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                        onClick: ()=>handleAddProduct(item),
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                            className: isCartSelected ? "fas fa-check" : "fal fa-shopping-basket"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                        onClick: ()=>handleWishlist(item),
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                            className: isWishlistSelected ? "fas fa-heart" : "fal fa-heart"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "tpproduct__meta",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                className: "tp-product-title",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    href: "#",
                                                                    children: title
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                children: [
                                                                    "$",
                                                                    price
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "product-rating",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx((react_rating_cjs_default()), {
                                                                    fullSymbol: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                        className: "fas fa-star"
                                                                    }),
                                                                    emptySymbol: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                        className: "fal fa-star"
                                                                    }),
                                                                    initialRating: rating,
                                                                    readonly: true
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, id);
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "tp-product-price-slider",
                                    children: relatedItems.length > 3 && /*#__PURE__*/ jsx_runtime.jsx(swiper_react/* Swiper */.tq, {
                                        loop: sliderLoop,
                                        slidesPerView: 1,
                                        spaceBetween: 30,
                                        className: "swiper-container product-slider-active",
                                        breakpoints: {
                                            "1200": {
                                                slidesPerView: 3
                                            },
                                            "992": {
                                                slidesPerView: 3
                                            },
                                            "768": {
                                                slidesPerView: 2
                                            },
                                            "576": {
                                                slidesPerView: 1
                                            },
                                            "0": {
                                                slidesPerView: 1
                                            }
                                        },
                                        children: relatedItems.map((item)=>{
                                            const { id , img , title , price , rating  } = item;
                                            const isCartSelected = cart_products.find((i)=>i.id === id);
                                            const isWishlistSelected = wishlists.find((w)=>w.id === id);
                                            return /*#__PURE__*/ jsx_runtime.jsx(swiper_react/* SwiperSlide */.o5, {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "tpproduct text-center mb-30",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "tpproduct__img",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                    className: "w-100",
                                                                    src: img,
                                                                    alt: ""
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "tp-product-icon",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                            onClick: ()=>handleAddProduct(item),
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: isCartSelected ? "fas fa-check" : "fal fa-shopping-basket"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                            onClick: ()=>handleWishlist(item),
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: isWishlistSelected ? "fas fa-heart" : "fal fa-heart"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "tpproduct__meta",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                    className: "tp-product-title",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                        href: "#",
                                                                        children: title
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                    children: [
                                                                        "$",
                                                                        price
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "product-rating",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx((react_rating_cjs_default()), {
                                                                        fullSymbol: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                            className: "fas fa-star"
                                                                        }),
                                                                        emptySymbol: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                            className: "fal fa-star"
                                                                        }),
                                                                        initialRating: rating,
                                                                        readonly: true
                                                                    })
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
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const related_products = (RelatedProducts);

;// CONCATENATED MODULE: ./src/components/product-details/product-details-area.jsx








const ProductDetailsArea = ({ product  })=>{
    const { img , title , sm_desc , rating , price , customer_reviews , old_price , models , details_text_1 , details_text_2 , additional_info , accordion_items , category  } = product || {};
    const dispatch = (0,lib.useDispatch)();
    const { 0: reviewValue , 1: setReviewValue  } = (0,react.useState)(0);
    // reviews
    const { reviews  } = (0,lib.useSelector)((state)=>state.products);
    // handleReviewChange
    const handleReviewChange = (value)=>{
        setReviewValue(value);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "tp-product-details-area pt-130",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row align-items-center justify-content-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xl-5 col-lg-6 col-12",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "tp-product-img",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            className: "w-100",
                                            src: img,
                                            alt: ""
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xl-5 col-lg-6 col-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "productdetails",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "productdetails__content",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        className: "pd-title",
                                                        children: title
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        children: sm_desc
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "productdetails__ratting",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx((react_rating_cjs_default()), {
                                                        fullSymbol: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            className: "fas fa-star"
                                                        }),
                                                        emptySymbol: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            className: "fal fa-star"
                                                        }),
                                                        initialRating: rating,
                                                        readonly: true
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                        children: [
                                                            "(",
                                                            customer_reviews,
                                                            " customer review)"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("h4", {
                                                        children: [
                                                            "$",
                                                            price,
                                                            " ",
                                                            old_price && /*#__PURE__*/ (0,jsx_runtime.jsxs)("del", {
                                                                children: [
                                                                    "/",
                                                                    old_price
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "productdetails__model",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                        children: "Model"
                                                    }),
                                                    models && models.map((m, i)=>/*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "#",
                                                            children: m
                                                        }, i))
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "productdetails__button",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                        onClick: ()=>dispatch((0,cart_slice/* add_cart_product */.YR)(product)),
                                                        className: "tp-btn-yellow mb-20 mr-20",
                                                        children: "Add to cart"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                        className: "tp-btn-sm-sky",
                                                        children: "Buy now"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "productdetails-tabs",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "row justify-content-center",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-xl-10 col-lg-12 col-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "product-additional-tab",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "pro-details-nav mb-40",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                        className: "nav nav-tabs pro-details-nav-btn",
                                                        id: "myTabs",
                                                        role: "tablist",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                className: "nav-item",
                                                                role: "presentation",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                    className: "nav-links active",
                                                                    id: "home-tab-1",
                                                                    "data-bs-toggle": "tab",
                                                                    "data-bs-target": "#home-1",
                                                                    type: "button",
                                                                    role: "tab",
                                                                    "aria-controls": "home-1",
                                                                    "aria-selected": "true",
                                                                    tabIndex: "-1",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        children: "Product Details"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                className: "nav-item",
                                                                role: "presentation",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                    className: "nav-links",
                                                                    id: "information-tab",
                                                                    "data-bs-toggle": "tab",
                                                                    "data-bs-target": "#additional-information",
                                                                    type: "button",
                                                                    role: "tab",
                                                                    "aria-controls": "additional-information",
                                                                    tabIndex: "-1",
                                                                    "aria-selected": "false",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        children: "Additional Info"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                className: "nav-item",
                                                                role: "presentation",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                    className: "nav-links",
                                                                    id: "reviews-tab",
                                                                    "data-bs-toggle": "tab",
                                                                    "data-bs-target": "#reviews",
                                                                    type: "button",
                                                                    role: "tab",
                                                                    "aria-controls": "reviews",
                                                                    "aria-selected": "false",
                                                                    tabIndex: "-1",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        children: "Review (08)"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                className: "nav-item",
                                                                role: "presentation",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                                    className: "nav-links",
                                                                    id: "size-chart-tab",
                                                                    "data-bs-toggle": "tab",
                                                                    "data-bs-target": "#chart",
                                                                    type: "button",
                                                                    role: "tab",
                                                                    "aria-controls": "chart",
                                                                    "aria-selected": "false",
                                                                    tabIndex: "-1",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        children: "Faq"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "tab-content tp-content-tab",
                                                    id: "myTabContent-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "tab-para tab-pane fade show active",
                                                            id: "home-1",
                                                            role: "tabpanel",
                                                            "aria-labelledby": "home-tab-1",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                    className: "mb-30",
                                                                    children: details_text_1
                                                                }),
                                                                details_text_2 && /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                    children: details_text_2
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "tab-pane fade",
                                                            id: "additional-information",
                                                            role: "tabpanel",
                                                            "aria-labelledby": "information-tab",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "product__details-info table-responsive",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("table", {
                                                                    className: "table table-striped",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("tbody", {
                                                                        children: additional_info && additional_info.map((info, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                        className: "add-info",
                                                                                        children: info.info
                                                                                    }),
                                                                                    Array.isArray(info.list) ? /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                        className: "add-info-list",
                                                                                        children: info.list.join(", ")
                                                                                    }) : /*#__PURE__*/ jsx_runtime.jsx("td", {
                                                                                        className: "add-info-list",
                                                                                        children: info.list
                                                                                    })
                                                                                ]
                                                                            }, i))
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "tab-pane fade",
                                                            id: "reviews",
                                                            role: "tabpanel",
                                                            "aria-labelledby": "reviews-tab",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "product-details-review",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                                        className: "tp-comments-title mb-35",
                                                                        children: "3 reviews for “Wide Cotton Tunic extreme hammer”"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "latest-comments mb-55",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                                            children: reviews.map((review, i)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                        className: "comments-box d-flex",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                className: "comments-avatar mr-25",
                                                                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                                                    src: review.img,
                                                                                                    alt: ""
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                className: "comments-text",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                        className: "comments-top d-sm-flex align-items-start justify-content-between mb-5",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                                className: "avatar-name",
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("b", {
                                                                                                                        children: review.name
                                                                                                                    }),
                                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                                        className: "comments-date mb-20",
                                                                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                                                            children: review.date
                                                                                                                        })
                                                                                                                    })
                                                                                                                ]
                                                                                                            }),
                                                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                                className: "user-rating",
                                                                                                                children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                                                                        children: /*#__PURE__*/ jsx_runtime.jsx((react_rating_cjs_default()), {
                                                                                                                            fullSymbol: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                                                                className: "fas fa-star"
                                                                                                                            }),
                                                                                                                            emptySymbol: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                                                                className: "fal fa-star"
                                                                                                                            }),
                                                                                                                            initialRating: review.rating,
                                                                                                                            readonly: true
                                                                                                                        })
                                                                                                                    })
                                                                                                                })
                                                                                                            })
                                                                                                        ]
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                                                        className: "m-0",
                                                                                                        children: review.review
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                }, i))
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "product-details-comment pb-100",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "comment-title mb-20",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                                                        children: "Add a review"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                                        children: "Your email address will not be published. Required fields are marked*"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "comment-rating mb-20 d-flex",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                        children: "Overall ratings"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                                            children: /*#__PURE__*/ jsx_runtime.jsx((react_rating_cjs_default()), {
                                                                                                fullSymbol: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                                    className: "fas fa-star"
                                                                                                }),
                                                                                                emptySymbol: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                                    className: "fal fa-star"
                                                                                                }),
                                                                                                onChange: handleReviewChange
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                className: "comment-input-box",
                                                                                children: /*#__PURE__*/ jsx_runtime.jsx(review_form, {
                                                                                    reviewValue: reviewValue
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "tab-pane fade",
                                                            id: "chart",
                                                            role: "tabpanel",
                                                            "aria-labelledby": "size-chart-tab",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "tp-custom-accordio faq-accordio-border",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "accordion",
                                                                    id: "accordionExample",
                                                                    children: accordion_items.map((item, i)=>{
                                                                        const { id , show , title , desc  } = item;
                                                                        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            className: "accordion-items",
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
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(related_products, {
                category: category,
                title: title
            })
        ]
    });
};
/* harmony default export */ const product_details_area = (ProductDetailsArea);

;// CONCATENATED MODULE: ./src/components/product-details/index.jsx






const ProductsDetails = ({ product  })=>{
    (0,react.useEffect)(()=>{
        setTimeout(()=>{
            (0,utils/* animationCreate */.H)();
        }, 500);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(layout/* Wrapper */.im, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(layout/* Header */.h4, {}),
            /*#__PURE__*/ jsx_runtime.jsx(breadcrumb/* default */.Z, {
                title: product?.title ? product?.title : "Product Details"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(product_details_area, {
                product: product
            }),
            /*#__PURE__*/ jsx_runtime.jsx(layout/* FooterThree */.yD, {})
        ]
    });
};
/* harmony default export */ const product_details = (ProductsDetails);


/***/ })

};
;