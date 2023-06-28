"use strict";
exports.id = 725;
exports.ids = [725];
exports.modules = {

/***/ 68178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56898);



const ImageLightBox = ({ images , open , setOpen , photoIndex , setPhotoIndex  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: open && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_image_lightbox__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            mainSrc: images[photoIndex],
            nextSrc: images[(photoIndex + 1) % images.length],
            prevSrc: images[(photoIndex + images.length - 1) % images.length],
            onCloseRequest: ()=>setOpen(false),
            onMovePrevRequest: ()=>setPhotoIndex((photoIndex + images.length - 1) % images.length),
            onMoveNextRequest: ()=>setPhotoIndex((photoIndex + 1) % images.length)
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageLightBox);


/***/ }),

/***/ 60725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ home_5)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/layout/index.jsx + 17 modules
var layout = __webpack_require__(35591);
// EXTERNAL MODULE: ./src/utils/utils.js
var utils = __webpack_require__(38356);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/data/index.js + 3 modules
var data = __webpack_require__(28787);
// EXTERNAL MODULE: ./src/svg/index.js + 20 modules
var svg = __webpack_require__(94894);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./src/utils/validation-schema.js
var validation_schema = __webpack_require__(38315);
// EXTERNAL MODULE: ./src/components/forms/error-msg.jsx
var error_msg = __webpack_require__(40002);
;// CONCATENATED MODULE: ./src/components/forms/blog-form.jsx





const BlogForm = ()=>{
    // use formik
    const { handleChange , handleSubmit , handleBlur , errors , values , touched  } = (0,dist.useFormik)({
        initialValues: {
            name: "",
            email: "",
            msg: ""
        },
        validationSchema: validation_schema/* contactSchema */.OD,
        onSubmit: (values, { resetForm  })=>{
            console.log(values);
            resetForm();
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mb-30",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                        name: "name",
                        value: values.name,
                        onChange: handleChange,
                        onBlur: handleBlur,
                        type: "text",
                        placeholder: "Company name"
                    }),
                    touched.name && /*#__PURE__*/ jsx_runtime.jsx(error_msg/* default */.Z, {
                        error: errors.name
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mb-30",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                        name: "email",
                        value: values.email,
                        onChange: handleChange,
                        onBlur: handleBlur,
                        type: "email",
                        placeholder: "Enter your mail"
                    }),
                    touched.email && /*#__PURE__*/ jsx_runtime.jsx(error_msg/* default */.Z, {
                        error: errors.email
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mb-30",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                        name: "msg",
                        value: values.msg,
                        onChange: handleChange,
                        onBlur: handleBlur,
                        placeholder: "Enter your message"
                    }),
                    touched.msg && /*#__PURE__*/ jsx_runtime.jsx(error_msg/* default */.Z, {
                        error: errors.msg
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("button", {
                className: "tp-btn-sky-similar",
                children: "Send Message"
            })
        ]
    });
};
/* harmony default export */ const blog_form = (BlogForm);

;// CONCATENATED MODULE: ./src/components/homes/home-5/blog-area.jsx






const blog_items = data/* blog_data.filter */._6.filter((blog)=>blog.home_5);
const blog_contents = {
    shapes: [
        "bp-chose-5.2.png",
        "bp-chose-5.3.png",
        "hero-shape-5.2.png"
    ],
    subtitle: "Our Work",
    title: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            "Our ",
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "tp-section-highlight",
                children: " Work "
            })
        ]
    }),
    contact_subtitle: "Fill & Brew",
    contact_title: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "tp-section-highlight",
                children: " Contact us "
            }),
            " "
        ]
    })
};
const { contact_subtitle , contact_title , shapes , subtitle , title  } = blog_contents;
const BlogArea = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        id: "Our-Work",
        className: "tp-blog-area tp-blog-bs-space yellow-bg pt-30 mr-130 ml-130 grey-bg p-relative",
        children: [
            shapes.map((s, i)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: `bp-blog-shape-${i + 1} d-none d-lg-block`,
                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                        src: `/assets/img/blog/${s}`,
                        alt: ""
                    })
                }, i)),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "col-xl-6 col-lg-7 col-12",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "tp-blog-section-box pb-35",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                            className: "tp-subtitle tp-subtitle-before-color",
                                            children: subtitle
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "tp-title-sm",
                                            children: title
                                        })
                                    ]
                                }),
                                blog_items.map((blog)=>{
                                    const { date , id , img , meta_tag , link , title , alt  } = blog;
                                    return /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "tpblog mb-50",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "tpblog__item d-flex align-items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "tpblog__thumb fix",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        target: "_blank",
                                                        href: link,
                                                        rel: "noreferrer",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: img,
                                                            alt: alt
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "tpblog__info",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "tpblog__meta d-flex align-item-center",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                    className: "tp-blg-sm-title mb-0",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                        href: "#",
                                                                        children: meta_tag
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("b", {
                                                                        children: date
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                                className: "tp-blg-lg-title",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                    target: "_blank",
                                                                    href: link,
                                                                    rel: "noreferrer",
                                                                    children: title
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, id);
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xl-6 col-lg-5 tp-contact-space col-12 ",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "tp-border-left",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "tp-blog-section-box pb-35",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                className: "tp-subtitle tp-subtitle-before-color",
                                                children: contact_subtitle
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                className: "tp-title-sm",
                                                children: contact_title
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "tpcontact",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "tpcontact__heading",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h4", {
                                                    className: "tp-contact-title",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(svg/* Document */.BB, {}),
                                                        "Fill the form"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "tpcontact__form",
                                                children: /*#__PURE__*/ jsx_runtime.jsx(blog_form, {})
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const blog_area = (BlogArea);

// EXTERNAL MODULE: ./src/components/common/brands/index.jsx
var brands = __webpack_require__(2780);
;// CONCATENATED MODULE: ./src/components/homes/home-5/brand-area.jsx



const BrandArea = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "tp-brand-area pt-30 pb-50",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "tp-brand-title pb-30 d-flex align-items-center",
                            children: /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                className: "tp-brand-build-title",
                                children: " Our Digital & Affiliates Partners"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "tp-brand-sl",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "swiper-container brand-slider-active",
                        children: /*#__PURE__*/ jsx_runtime.jsx(brands/* default */.Z, {})
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const brand_area = (BrandArea);

// EXTERNAL MODULE: ./src/components/homes/home-5/client-feedback.jsx
var client_feedback = __webpack_require__(47506);
;// CONCATENATED MODULE: ./src/components/homes/home-5/feature-area.jsx



const contents = {
    // shapes: ["bp-chose-5.1.png", "bp-chose-5.2.png", "bp-chose-5.3.png"],
    feature_bg: "/assets/img/feature/fea-2.png",
    subtitle: "Why Brew With Us?",
    title: "Why Digital Cappuccino?",
    text_1: "Like a well-crafted cappuccino, our skilled team produces one-of-a-kind and engaging marketing solutions. We produce successful campaigns that create a lasting impact by capturing audiences with creativity and strategy. At Digital Cappuccino, we work with our clients to develop a customized marketing strategy that balances different approaches." + " to achieve your marketing objectives.",
    // text_2:
    //   "At Digital Cappuccino, we offer a variety of digital marketing solutions," +
    //   " like the different types of coffee, to suit the needs of businesses and their customers." +
    //   " From a Cappuccino to an Americano, we serve it all with pleasure.",
    btn_text: /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: "Let's Connect"
    })
};
const { btn_text , feature_bg , highlight_text , // shapes,
subtitle: feature_area_subtitle , text_1 , text_2 , title: feature_area_title ,  } = contents;
const FeatureArea = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "tp-chose-area pt-100 pb-50 p-relative paddingReduce",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-xl-6 col-lg-7 col-md-12",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "tpchosebox-main p-relative",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "row align-items-center tp-chose-space",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-xl-6 col-lg-6 col-md-6 col-12 wow tpfadeLeft",
                                        "data-wow-duration": ".3s",
                                        "data-wow-delay": ".5s",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "tp-chose-item",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "tpchosebox mb-30",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "tpchosebox__icon mb-30",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                    src: `/assets/img/icon/professional-team.png`,
                                                                    alt: "",
                                                                    height: "35px",
                                                                    width: "35spx"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "tpchosebox__content",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                        href: "#",
                                                                        children: "Professional  Team"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                    children: "15+ Team Member"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "tpchosebox mb-30",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "tpchosebox__icon mb-30",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                    src: `/assets/img/icon/budget.png`,
                                                                    alt: "",
                                                                    height: "35px",
                                                                    width: "35spx"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "tpchosebox__content",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                        href: "#",
                                                                        children: "Budgeting Expert"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                    children: "15+ Cr. Spend"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-xl-6 col-lg-6 col-md-6 col-12 wow tpfadeLeft",
                                        "data-wow-duration": ".3s",
                                        "data-wow-delay": ".5s",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "tp-chose-item",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "tpchosebox mb-30",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "tpchosebox__icon mb-30",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                    src: `/assets/img/icon/google.png`,
                                                                    alt: "",
                                                                    height: "35px",
                                                                    width: "35spx"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "tpchosebox__content",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                        href: "#",
                                                                        children: "Google Certified Team"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                    children: "100% Attention to details"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "tpchosebox mb-30",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "tpchosebox__icon mb-30",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                    src: `/assets/img/icon/competitive.png`,
                                                                    alt: "",
                                                                    height: "35px",
                                                                    width: "35spx"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "tpchosebox__content",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                        href: "#",
                                                                        children: "Competitive Rate"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                    children: "100% Commitment"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-xl-6 col-lg-5 col-md-10 col-12 wow tpfadeRight",
                        "data-wow-duration": ".5s",
                        "data-wow-delay": ".9s",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "tp-feature-section-title-box",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                    className: "tp-subtitle pb-10",
                                    children: feature_area_subtitle
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                    className: "tp-title tp-title-sm",
                                    children: [
                                        feature_area_title,
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            className: "tp-section-highlight",
                                            children: [
                                                highlight_text,
                                                /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                    width: "247",
                                                    height: "12",
                                                    viewBox: "0 0 247 12",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                        d: "M-0.000488281 0L247 12H-0.000488281V0Z",
                                                        fill: "#FFDC60"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "",
                                    children: text_1
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "",
                                    children: text_2
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "tp-fea-button-five",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/contact-us",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            className: "tp-btn-sky",
                                            children: btn_text
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
/* harmony default export */ const feature_area = (FeatureArea);
const ChoseItem = ({ item_num , m , icon , title , text , color  })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: `tpchosebox tpchosebox-${item_num} ${m && "mb-30"} wow tpfadeIn`,
        "data-wow-duration": ".5s",
        "data-wow-delay": ".7s",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: `tpchosebox__icon fea-color-${color} mb-30`,
                children: /*#__PURE__*/ _jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/ _jsx("i", {
                        className: icon
                    })
                })
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "tpchosebox__content",
                children: [
                    /*#__PURE__*/ _jsx("h4", {
                        children: /*#__PURE__*/ _jsx("a", {
                            href: "#",
                            children: title
                        })
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        children: text
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/homes/home-5/hero-area.jsx



const hero_contents = {
    shapes: [],
    subtitle: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            "Offer is going on till friday , ",
            /*#__PURE__*/ jsx_runtime.jsx("b", {
                children: "$84,99"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                children: "/mo"
            })
        ]
    }),
    title: "We Are Digital Marketing Advisors",
    highlight_text: "",
    short_text: /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: "We Specialize in brewing the best Marketing Strategy for your Business."
    }),
    hero_img: "/assets/img/hero/hero-5.1.png",
    social_links: [
        {
            num: 1,
            icon: "/assets/img/SocialIcons/facebook.png",
            title: "Facebook",
            link: "https://www.facebook.com/digitalcappuccino/"
        },
        {
            num: 2,
            icon: "/assets/img/SocialIcons/instagram.png",
            title: "Instagram",
            link: "https://www.instagram.com/digitalcappuccino/"
        },
        {
            num: 3,
            icon: "/assets/img/SocialIcons/linkedin.png",
            title: "Linkedin",
            link: "https://www.linkedin.com/company/digital-cappuccino/"
        },
        {
            num: 4,
            icon: "/assets/img/SocialIcons/youtube.png",
            title: "Youtube",
            link: "https://youtube.com/@Digitalcappuccino_"
        },
        {
            num: 5,
            icon: "/assets/img/SocialIcons/twitter.png",
            title: "Twitter",
            link: "https://twitter.com/Digicappuccino"
        }, 
    ],
    submit_text: "let's Connect"
};
const { hero_img , highlight_text: hero_area_highlight_text , shapes: hero_area_shapes , short_text , subtitle: hero_area_subtitle , title: hero_area_title , social_links , submit_text ,  } = hero_contents;
const HeroArea = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "tp-hero-area tp-hero-border p-relative",
        children: [
            hero_area_shapes.map((s, i)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: `bp-hero-shape-${i + 1} d-none d-xxl-block`,
                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                        src: `/assets/img/hero/${s}`,
                        alt: ""
                    })
                }, i)),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xl-7 col-lg-7",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "tp-hero-section-box-five",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "tp-hero-section-box-five__title pb-45",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                                    className: "tp-hero-bs-title wow tpfadeUp",
                                                    "data-wow-duration": ".5s",
                                                    "data-wow-delay": ".7s",
                                                    children: [
                                                        hero_area_title,
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                            className: "tp-highlight",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                                                    className: "highlight-space",
                                                                    width: "266",
                                                                    height: "12",
                                                                    viewBox: "0 0 266 12",
                                                                    fill: "none",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                            d: "M0 0L266 12H0V0Z",
                                                                            fill: "#FFDC60"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                    children: hero_area_highlight_text
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: short_text
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "tp-hero-section-box-five__input wow tpfadeUp",
                                            "data-wow-duration": ".9s",
                                            "data-wow-delay": "1s",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "tp-header-yellow-button",
                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "/contact-us",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        className: "tp-btn-sky",
                                                        children: "let's connect"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xl-5 col-lg-5 ",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "tp-hero-right-side-five p-relative ",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "tp-yellow-circle-five"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "tp-hero-right-side-five__img wow tpfadeRight",
                                            "data-wow-duration": ".9s",
                                            "data-wow-delay": "1.2s",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: hero_img,
                                                alt: "Digital Marketing Company"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "tp-hero-icon-five",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "tp-hero-social bp-hero-social tp-hero-social-bg-color",
                            children: social_links.map((l, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                    className: `social-icon-${l.num} ${l.title === "Behance" ? "d-md-none" : ""}`,
                                    href: l.link,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    style: {
                                                        width: "15px",
                                                        height: "15px"
                                                    },
                                                    src: l.icon
                                                }),
                                                " "
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "socialName",
                                            children: l.title
                                        })
                                    ]
                                }, i))
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const hero_area = (HeroArea);

;// CONCATENATED MODULE: ./src/components/homes/home-5/mission-area.jsx



const SvgHighlight = ()=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: "201",
        height: "12",
        viewBox: "0 0 201 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            " ",
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                d: "M0 0L201 12H0V0Z",
                fill: "#FFDC60"
            })
        ]
    });
const mission_area_contents = {
    shapes: [
        "mission-shape-5.1.png",
        "mission-shape-5.6.png",
        "mission-shape-5.3.png", 
    ],
    tabs: [
        {
            active: true,
            id: "mission",
            title: "Our Mission"
        },
        {
            id: "vision",
            title: "Our Vision"
        },
        {
            id: "value",
            title: "Our Values"
        }, 
    ],
    tab_contents: [
        {
            show: true,
            id: "mission",
            title: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    "Brewing Success Through Creative Digital Solutions",
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "tp-section-highlight",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(SvgHighlight, {}),
                            " "
                        ]
                    }),
                    " "
                ]
            }),
            text_1: /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                children: "As a digital marketing agency, our goal is to help businesses harness the power of the digital world to achieve success."
            }),
            text_2: /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                children: "We understand the unique challenges facing businesses in today's digital landscape, " + "and we are committed to helping our clients navigate those challenges and achieve " + "their goals. With a focus on creativity, innovation, and quality, we are dedicated " + "to brewing success for our clients. Our mission is to help businesses stay ahead of the curve and succeed in an ever-changing digital world."
            })
        },
        {
            id: "vision",
            title: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    "A World Where Every Business Can Savor Digital Success",
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "tp-section-highlight",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(svg/* HighlightThree */._d, {}),
                            " "
                        ]
                    })
                ]
            }),
            text_1: /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                children: "We envision a world where every business can leverage the power of the digital world to achieve success."
            }),
            text_2: /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                children: "Whether you're a small start-up or a large corporation, we provide best marketing solutions that help you achieve your goals and connect with your customers in meaningful ways. We're working towards a future where every business has the opportunity to achieve digital success. We're passionate about empowering businesses to succeed in the digital world, and we believe that together, we can create a world where every business can thrive."
            })
        },
        {
            id: "value",
            title: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    "Agility, Adaptability, Empowerment: Our Commitment to Your Digital Success",
                    " "
                ]
            }),
            text_1: /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                children: "Our values of agility, adaptability, and empowerment guide everything we do. We always stay on top of the latest trends and technologies, so we can adapt quickly to changes in the industry."
            }),
            text_2: /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                children: "Whether you're looking to increase your online visibility, drive traffic to your website, or improve your social media presence, we're here to help. We collaborate with our clients, giving them the tools and knowledge, they need to succeed in the digital landscape. We're dedicated to delivering measurable results that drive growth and revenue for our clients."
            })
        }, 
    ],
    video: "/assets/video/vision.mp4"
};
const { shapes: mission_area_shapes , tabs , tab_contents , video  } = mission_area_contents;
const MissionArea = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "tp-mission-area pt-60 p-relative",
        children: [
            mission_area_shapes.map((s, i)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: `bp-mission-shape-${i + 1} d-none d-lg-block`
                }, i)),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "col-xl-6 col-lg-7 col-md-11 wow tpfadeLeft",
                            "data-wow-duration": ".5s",
                            "data-wow-delay": ".7s",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "tp-mission-tab-section ",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("nav", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "nav tp-mission-tab",
                                            id: "nav-tab",
                                            role: "tablist",
                                            children: tabs.map((tab)=>/*#__PURE__*/ jsx_runtime.jsx("button", {
                                                    className: `nav-links ${tab.active ? "active" : ""}`,
                                                    id: `nav-${tab.id}-tab`,
                                                    "data-bs-toggle": "tab",
                                                    "data-bs-target": `#${tab.id}`,
                                                    type: "button",
                                                    role: "tab",
                                                    "aria-controls": `nav-${tab.id}-tab`,
                                                    "aria-selected": tab.active ? "true" : "false",
                                                    tabIndex: "-1",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        children: tab.title
                                                    })
                                                }, tab.id))
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "tab-content",
                                    id: "nav-tabContent",
                                    children: tab_contents.map((item)=>{
                                        const { id , text_1 , text_2 , title , show  } = item;
                                        return /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: `tab-pane fade ${show ? "show active" : ""}`,
                                            id: id,
                                            role: "tabpanel",
                                            "aria-labelledby": `nav-${id}-tab`,
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "tpmission",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "tpmission__content",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                            className: "tp-mission-title",
                                                            children: title
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: "",
                                                            children: text_1
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            children: text_2
                                                        })
                                                    ]
                                                })
                                            })
                                        }, id);
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xl-6 col-lg-5 col-md-12 wow tpfadeRight",
                            "data-wow-duration": ".5s",
                            "data-wow-delay": ".7s",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "tp-mission-img",
                                children: /*#__PURE__*/ jsx_runtime.jsx("video", {
                                    autoPlay: true,
                                    loop: true,
                                    style: {
                                        width: "100%",
                                        borderRadius: "16px"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime.jsx("source", {
                                        src: video
                                    })
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const mission_area = (MissionArea);

// EXTERNAL MODULE: ./node_modules/swiper/react/swiper-react.js + 14 modules
var swiper_react = __webpack_require__(88494);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.esm.js + 90 modules
var swiper_esm = __webpack_require__(71911);
// EXTERNAL MODULE: ./src/components/common/modals/image-lightbox.jsx
var image_lightbox = __webpack_require__(68178);
;// CONCATENATED MODULE: ./src/components/homes/home-5/project-area.jsx







const project_area_contents = {
    shapes: [
        "hero/hero-shape-5.2.png",
        "project/bp-pj-shape-5.1.png"
    ],
    subtitle: "Projects",
    title: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            "Our Share In The Industry",
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                className: "tp-section-highlight",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(svg/* HighlightThree */._d, {}),
                    " "
                ]
            })
        ]
    }),
    project_items: [
        {
            subtitle: "Music Industry",
            title: "T-Series",
            img: "/assets/img/project_1/t-series.png",
            alt: "Digital marketing Agency"
        },
        {
            subtitle: "OTT Industry",
            title: "Netflix",
            img: "/assets/img/project_1/netflix.png",
            alt: "Best Digital Marketing Agency"
        },
        {
            subtitle: "Health Care",
            title: "Max Life Insurance",
            img: "/assets/img/project_1/max-life.png",
            alt: "Top Digital Marketing Company"
        },
        {
            subtitle: "Business",
            title: "Business Consulting",
            img: "/assets/img/project_1/net-media.png",
            alt: "Best Digital Marketing Company"
        }, 
    ]
};
const { project_items , shapes: project_area_shapes , subtitle: project_area_subtitle , title: project_area_title  } = project_area_contents;
// images
const project_area_images = project_items.map((img)=>img.img);
const ProjectArea = ()=>{
    const [sliderLoop, setSliderLoop] = react.useState(false);
    react.useEffect(()=>setSliderLoop(true), []);
    // photoIndex
    const [photoIndex, setPhotoIndex] = react.useState(null);
    // image open state
    const [open, setOpen] = react.useState(false);
    // handleImagePopup
    const handleImagePopup = (index)=>{
        setPhotoIndex(index);
        setOpen(true);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "tp-project-area tp-project-bs-space yellow-bg pt-30 pb-30 fix p-relative",
                children: [
                    project_area_shapes.map((s, i)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: `bp-project-shape-${i + 1} d-none d-lg-block`,
                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: `/assets/img/${s}`,
                                alt: ""
                            })
                        }, i)),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "row justify-content-center",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xl-8",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "tp-project-section-box text-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                className: "tp-subtitle tp-subtitle-before-color",
                                                children: project_area_subtitle
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                className: "tp-title-sm pb-30",
                                                children: project_area_title
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "tp-project-slider-section",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(swiper_react/* Swiper */.tq, {
                                            loop: sliderLoop,
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                            modules: [
                                                swiper_esm/* Autoplay */.pt,
                                                swiper_esm/* Pagination */.tl
                                            ],
                                            autoplay: {
                                                delay: 1500,
                                                disableOnInteraction: false
                                            },
                                            className: "swiper-container project-slider-active",
                                            pagination: {
                                                el: ".my-dots",
                                                clickable: true
                                            },
                                            breakpoints: {
                                                1200: {
                                                    slidesPerView: 4
                                                },
                                                992: {
                                                    slidesPerView: 4
                                                },
                                                768: {
                                                    slidesPerView: 2
                                                },
                                                576: {
                                                    slidesPerView: 1
                                                },
                                                0: {
                                                    slidesPerView: 1
                                                }
                                            },
                                            children: project_items.map((item, i)=>{
                                                const { img , subtitle , title , alt  } = item;
                                                return /*#__PURE__*/ jsx_runtime.jsx(swiper_react/* SwiperSlide */.o5, {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "tpproject",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "tpproject__content pl-5",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                        className: "tp-pj-subtitle",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                            className: "text-secondary",
                                                                            children: subtitle
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                                        className: "tp-pj-title fs-5",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("b", {
                                                                            className: "",
                                                                            children: title
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "tpproject__thumb",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "fix radius-20",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                        className: "w-100",
                                                                        src: img,
                                                                        alt: alt
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }, i);
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "my-dots text-center"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(image_lightbox/* default */.Z, {
                images: project_area_images,
                open: open,
                setOpen: setOpen,
                photoIndex: photoIndex,
                setPhotoIndex: setPhotoIndex
            })
        ]
    });
};
/* harmony default export */ const project_area = (ProjectArea);

;// CONCATENATED MODULE: ./src/components/homes/home-5/services-area.jsx





const ser_items = data/* services_data.filter */.wd.filter((ser)=>ser.home_5);
const services_area_contents = {
    shapes: [
        "chose/bp-chose-5.1.png",
        "hero/hero-shape-5.2.png"
    ],
    subtitle: "Our Services",
    title: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            "Caffeinate Your Business with Our High-Performance Marketing Services",
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "tp-section-highlight",
                children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                    width: "170",
                    height: "12",
                    viewBox: "0 0 170 12",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                        d: "M0 0L170 12H0V0Z",
                        fill: "#89CEFB"
                    })
                })
            })
        ]
    }),
    ser_logo: "/assets/img/service/service-logo.png"
};
const { ser_logo , shapes: services_area_shapes , subtitle: services_area_subtitle , title: services_area_title  } = services_area_contents;
const ServicesArea = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "tp-service-area tp-service-bs-space pt-30 pb-30 yellow-bg p-relative",
        children: [
            services_area_shapes.map((s, i)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: `bp-sv-shape-${i + 1} d-none d-lg-block`,
                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                        src: `/assets/img/${s}`,
                        alt: ""
                    })
                }, i)),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xl-6 col-lg-6 col-md-10",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "tp-best-services-title-box",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                        className: "tp-subtitle tp-subtitle-before-color",
                                        children: services_area_subtitle
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                        className: "tp-title tp-title-sm",
                                        children: services_area_title
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xl-6 col-lg-6 col-md-12 col-12",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "tp-sv-space-wrapper",
                                children: ser_items.map((ser, i)=>{
                                    const { imgTwo , title , top_border , path , id  } = ser;
                                    return /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: path,
                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: `bg-white-wrapper ${top_border ? "sv-border-top" : ""} sv-border-bottom service-space`,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "row align-items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "col-xl-3 col-lg-3 col-3",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "tpservices__icon",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                    src: imgTwo,
                                                                    className: "",
                                                                    style: {
                                                                        height: "60px",
                                                                        width: "60px"
                                                                    }
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "col-xl-6 col-lg-6 col-6",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "tpservices",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "tpservices__content",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                                        className: "tp-sv-bs-title",
                                                                        children: title
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "col-xl-3 col-lg-3 col-3",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "tp-services-best-item text-end",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "tpservices__icon",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "angle-right-svg",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                            className: "angle-right",
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx(svg/* AngelRight */.$9, {})
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    }, i);
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const services_area = (ServicesArea);

// EXTERNAL MODULE: ./src/components/common/single-team.jsx
var single_team = __webpack_require__(11061);
;// CONCATENATED MODULE: ./src/components/homes/home-5/team-area.jsx




const teams = data/* team_data.filter */.jr.filter((team)=>team.home_founder_5);
const team_area_contents = {
    subtitle: "Our Team",
    title: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            "Brains Behind The Best Digital Marketing",
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                className: "tp-section-highlight",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                        width: "201",
                        height: "12",
                        viewBox: "0 0 201 12",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            " ",
                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                d: "M0 0L201 12H0V0Z",
                                fill: "#FFDC60"
                            })
                        ]
                    }),
                    " "
                ]
            })
        ]
    })
};
const { subtitle: team_area_subtitle , title: team_area_title  } = team_area_contents;
const TeamArea = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "tp-team-area pt-50 p-relative",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "bp-team-shape-1 d-none d-lg-block",
                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                    src: "/assets/img/team/team-shape-5.3.png",
                    alt: ""
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xl-8",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "tp-project-section-box text-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                        className: "tp-subtitle",
                                        children: team_area_subtitle
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        className: "tp-title-sm pb-30",
                                        children: team_area_title
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row d-flex justify-content-center",
                        children: teams.map((team)=>/*#__PURE__*/ jsx_runtime.jsx(single_team/* default */.Z, {
                                team: team
                            }, team.id))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const team_area = (TeamArea);

;// CONCATENATED MODULE: ./src/components/common/affiliates/index.jsx



const brand_images = (/* unused pure expression or super */ null && ([
    "/assets/img/brand-logos/bvpt.png", 
]));
const Index = ()=>{
    const [sliderLoop, setSliderLoop] = React.useState(false);
    React.useEffect(()=>setSliderLoop(true), []);
    return /*#__PURE__*/ _jsx(Swiper, {
        loop: sliderLoop,
        spaceBetween: 30,
        slidesPerView: 1,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true
        },
        className: "swiper-wrapper d-flex align-items-center",
        breakpoints: {
            // when window width is >= 1200px
            1200: {
                slidesPerView: 1
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 1
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 1
            },
            // when window width is >= 576px
            576: {
                slidesPerView: 1
            }
        },
        children: brand_images.map((brand, i)=>/*#__PURE__*/ _jsx(SwiperSlide, {
                children: /*#__PURE__*/ _jsx("div", {
                    className: "tp-brand-icon text-start",
                    children: /*#__PURE__*/ _jsx("img", {
                        src: brand,
                        alt: ""
                    })
                })
            }, i))
    });
};
/* harmony default export */ const affiliates = ((/* unused pure expression or super */ null && (Index)));

;// CONCATENATED MODULE: ./src/components/homes/home-5/our-affiliates.jsx



const OurAffiliates = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        className: "tp-brand-area pb-130",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "tp-brand-title pb-60 d-flex align-items-center",
                            children: /*#__PURE__*/ _jsx("h4", {
                                className: "tp-brand-build-title",
                                children: " Our Affilates Partners"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "tp-brand-sl",
                    children: /*#__PURE__*/ _jsx("div", {
                        className: "swiper-container brand-slider-active",
                        children: /*#__PURE__*/ _jsx(Affiliates, {})
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const our_affiliates = ((/* unused pure expression or super */ null && (OurAffiliates)));

// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
;// CONCATENATED MODULE: ./src/components/homes/home-5/index.jsx
















const HomeFive = ()=>{
    (0,react.useEffect)(()=>{
        setTimeout(()=>{
            (0,utils/* animationCreate */.H)();
        }, 500);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(layout/* Wrapper */.im, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "Digital Marketing & Website Development Company | Digital Cappuccino"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        httpEquiv: "x-ua-compatible",
                        content: "ie=edge"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: "Digital Cappuccino is a digital marketing Company in India. We provides website Development, Social Media Marketing, PPC Marketing, SEO and Email Marketing Services."
                    }, "desc"),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "robots",
                        content: "index, follow"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "canonical",
                        href: "https://www.digitalcappuccino.com/"
                    }, "canonical"),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:title",
                        content: "Social Title for Cool Page"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:description",
                        content: "And a social description for our cool page"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:image",
                        content: "https://example.com/images/cool-page.jpg"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "twitter:site",
                        content: "@YOUR_TWITTER_USERNAME"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "twitter:title",
                        content: "TITLE_FOR_YOUR_PAGE"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "twitter:description",
                        content: "DESCRIPTION_FOR_YOUR_PAGE"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "twitter:image",
                        content: "URL_FOR_YOUR_IMAGE"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                src: `https://www.googletagmanager.com/gtag/js?id=AW-11192435865`,
                strategy: "afterInteractive"
            }),
            /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                id: "gtag-init",
                strategy: "afterInteractive",
                children: `
           window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11192435865');
        `
            }),
            /*#__PURE__*/ jsx_runtime.jsx(layout/* HeaderFive */.Aj, {}),
            /*#__PURE__*/ jsx_runtime.jsx(hero_area, {}),
            /*#__PURE__*/ jsx_runtime.jsx(feature_area, {}),
            /*#__PURE__*/ jsx_runtime.jsx(services_area, {}),
            /*#__PURE__*/ jsx_runtime.jsx(mission_area, {}),
            /*#__PURE__*/ jsx_runtime.jsx(brand_area, {}),
            /*#__PURE__*/ jsx_runtime.jsx(project_area, {}),
            /*#__PURE__*/ jsx_runtime.jsx(team_area, {}),
            /*#__PURE__*/ jsx_runtime.jsx(client_feedback/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(blog_area, {}),
            /*#__PURE__*/ jsx_runtime.jsx(layout/* FooterFour */.Fd, {})
        ]
    });
};
/* harmony default export */ const home_5 = (HomeFive);


/***/ })

};
;