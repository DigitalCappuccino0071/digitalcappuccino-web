"use strict";
exports.id = 4169;
exports.ids = [4169];
exports.modules = {

/***/ 77482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ blog_details)
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
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/blog/blog-sidebar.jsx
var blog_sidebar = __webpack_require__(2854);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./src/utils/validation-schema.js
var validation_schema = __webpack_require__(38315);
// EXTERNAL MODULE: ./src/components/forms/error-msg.jsx
var error_msg = __webpack_require__(40002);
;// CONCATENATED MODULE: ./src/components/forms/blog-details-form.jsx





const BlogDetailsForm = ()=>{
    // use formik
    const { handleChange , handleSubmit , handleBlur , errors , values , touched  } = (0,dist.useFormik)({
        initialValues: {
            name: "",
            email: "",
            number: "",
            msg: "",
            terms: false
        },
        validationSchema: validation_schema/* blogSchema */.gT,
        onSubmit: (values, { resetForm  })=>{
            console.log(values);
            resetForm();
        }
    });
    return /*#__PURE__*/ jsx_runtime.jsx("form", {
        onSubmit: handleSubmit,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "col-xxl-6 col-xl-6 col-lg-6",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "postbox__comment-input",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                value: values.name,
                                onChange: handleChange,
                                onBlur: handleBlur,
                                name: "name",
                                type: "text",
                                placeholder: "Your Name"
                            }),
                            touched.name && /*#__PURE__*/ jsx_runtime.jsx(error_msg/* default */.Z, {
                                error: errors.name
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "col-xxl-6 col-xl-6 col-lg-6",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "postbox__comment-input",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                value: values.email,
                                onChange: handleChange,
                                onBlur: handleBlur,
                                name: "email",
                                type: "email",
                                placeholder: "Your Email"
                            }),
                            touched.email && /*#__PURE__*/ jsx_runtime.jsx(error_msg/* default */.Z, {
                                error: errors.email
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "col-xxl-6 col-xl-6 col-lg-6",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "postbox__comment-input",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                value: values.number,
                                onChange: handleChange,
                                onBlur: handleBlur,
                                name: "number",
                                type: "text",
                                placeholder: "number"
                            }),
                            touched.number && /*#__PURE__*/ jsx_runtime.jsx(error_msg/* default */.Z, {
                                error: errors.number
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "col-xxl-6 col-xl-6 col-lg-6",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "postbox__comment-input",
                        children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                            type: "text",
                            placeholder: "Website"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "col-xxl-12",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "postbox__comment-input",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                value: values.msg,
                                onChange: handleChange,
                                onBlur: handleBlur,
                                name: "msg",
                                placeholder: "Enter your comment ..."
                            }),
                            touched.msg && /*#__PURE__*/ jsx_runtime.jsx(error_msg/* default */.Z, {
                                error: errors.msg
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "col-xxl-12",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "postbox__comment-agree d-flex align-items-start mb-20",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    name: "terms",
                                    value: values.terms,
                                    onChange: handleChange,
                                    onBlur: handleBlur,
                                    className: "e-check-input",
                                    type: "checkbox",
                                    id: "terms"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                    className: "e-check-label",
                                    htmlFor: "e-agree",
                                    children: "Save my name, email, and website in this browser for the next time I comment."
                                })
                            ]
                        }),
                        touched.terms && /*#__PURE__*/ jsx_runtime.jsx(error_msg/* default */.Z, {
                            error: errors.terms?.split("true,")[1]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "col-xxl-12",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "postbox__comment-btn",
                        children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                            type: "submit",
                            className: "tp-btn-yellow",
                            children: "Post comment"
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const blog_details_form = (BlogDetailsForm);

;// CONCATENATED MODULE: ./src/components/blog-details/blog-details-area.jsx





const post_comments = [
    {
        date: "3/05/2022, 3:53:39 PM",
        img: "/assets/img/testimonial/testi-4.2.png",
        name: "Kristin Watson",
        desc: "Patient Comments are a collection of comments submitted by viewers in <br /> response to a question posed by a MedicineNet doctor."
    },
    {
        children: true,
        date: "5/09/2022, 3:59:39 PM",
        img: "/assets/img/testimonial/testi-4.5.png",
        name: "Farhan Firoz",
        desc: "Include anecdotal examples of your experience, or things you took notice of that <br /> you feel others would find useful."
    },
    {
        date: "8/10/2022, 5:59:39 PM",
        img: "/assets/img/testimonial/testi-4.1.png",
        name: "Salim rana",
        desc: "Include anecdotal examples of your experience, or things you took notice of that <br /> you feel others would find useful."
    }, 
];
const BlogDetailsArea = ({ blog  })=>{
    const { img , author , date , comment , views , title  } = blog || {};
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "postbox__area pt-120 pb-120",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xxl-8 col-xl-8 col-lg-8 col-12",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "postbox__wrapper",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("article", {
                                        className: "postbox__item format-image transition-3",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "postbox__content",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        className: "w-100",
                                                        src: img,
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "postbox__meta",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                href: "#",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                        className: "fal fa-user-circle"
                                                                    }),
                                                                    author
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                href: "#",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                        className: "fal fa-clock"
                                                                    }),
                                                                    date
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                href: "#",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                        className: "fal fa-comment-alt-lines"
                                                                    }),
                                                                    "(",
                                                                    comment,
                                                                    ") Coments"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                href: "#",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                        className: "fal fa-eye"
                                                                    }),
                                                                    " ",
                                                                    views,
                                                                    " views"
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    className: "postbox__title",
                                                    children: title
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "postbox__text",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            children: "One in four people in the world will be affected by mental or neurological disorders at some point in their lives, says the World Health Organization. Still, we spend more time brushing our teeth than taking care of our mental health, said Guy Winch in his TED talk."
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            children: "We tend to neglect our mental well-being because of the stigma of mental health care. But as societies become wiser and more self-aware, there is a greater need to redefine the meaning of mental health care. Naomi Hirabayashi and Marah Lidey do exactly that by drawing attention to the aspect of preventing mental health issues. The application they built makes mental self-care easy and accessible. of this year of the best law and his a part of this years."
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            children: "We tend to neglect our mental well-being because of the stigma of mental health care. But as societies become wiser and more self-aware, there is a greater need to redefine the meaning of mental health care. Naomi Hirabayashi and Marah Lidey do exactly that by drawing attention to the aspect of preventing mental health issues. The application they built makes mental self-care easy and accessible. of this year of the best law and his a part of this years."
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "postbox__thumb2",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "row gx-50",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "col-xl-6",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                        src: "/assets/img/blog-details/blog-big-4.jpg",
                                                                        alt: ""
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "col-xl-6",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                        src: "/assets/img/blog-details/blog-sm-5.jpg",
                                                                        alt: ""
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "postbox__social-wrapper",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "row",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "col-xl-6 col-lg-12",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "postbox__tag tagcloud",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                            children: "Tag"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                            href: "/blog-details",
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                                children: "Business"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                            href: "/blog-details",
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                                children: "Design"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                            href: "/blog-details",
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                                children: "apps"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                            href: "/blog-details",
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                                children: "data"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "col-xl-6 col-lg-12",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "postbox__social text-xl-end text-start",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                            children: "Share"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                            href: "https://www.linkedin.com/",
                                                                            target: "_blank",
                                                                            rel: "noreferrer",
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "fab fa-linkedin tp-linkedin"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                            href: "https://www.pinterest.com/",
                                                                            target: "_blank",
                                                                            rel: "noreferrer",
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "fab fa-pinterest tp-pinterest"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                            href: "https://www.facebook.com/",
                                                                            target: "_blank",
                                                                            rel: "noreferrer",
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "fab fa-facebook tp-facebook"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                            href: "https://twitter.com/",
                                                                            target: "_blank",
                                                                            rel: "noreferrer",
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "fab fa-twitter tp-twitter"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "postbox__comment mb-65",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                className: "postbox__comment-title",
                                                children: "(04) Comment"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                children: post_comments.map((comment, i)=>{
                                                    const { date , desc , img , name , children  } = comment;
                                                    return /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        className: `${children ? "children" : ""}`,
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "postbox__comment-box d-flex",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "postbox__comment-info ",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "postbox__comment-avater mr-20",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                            src: img,
                                                                            alt: ""
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "postbox__comment-text",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            className: "postbox__comment-name",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                                                    children: name
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                    className: "post-meta",
                                                                                    children: date
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                            children: desc
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                            className: "postbox__comment-reply",
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                                href: "#",
                                                                                children: "Reply"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }, i);
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "postbox__comment-form",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                className: "postbox__comment-form-title",
                                                children: "Leave a Reply"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(blog_details_form, {})
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xxl-4 col-xl-4 col-lg-4",
                            children: /*#__PURE__*/ jsx_runtime.jsx(blog_sidebar/* default */.Z, {})
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const blog_details_area = (BlogDetailsArea);

;// CONCATENATED MODULE: ./src/components/blog-details/index.jsx






const BlogDetails = ({ blog  })=>{
    (0,react.useEffect)(()=>{
        setTimeout(()=>{
            (0,utils/* animationCreate */.H)();
        }, 500);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(layout/* Wrapper */.im, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(layout/* Header */.h4, {}),
            /*#__PURE__*/ jsx_runtime.jsx(breadcrumb/* default */.Z, {
                title: "Blog Details"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(blog_details_area, {
                blog: blog
            }),
            /*#__PURE__*/ jsx_runtime.jsx(layout/* FooterThree */.yD, {})
        ]
    });
};
/* harmony default export */ const blog_details = (BlogDetails);


/***/ })

};
;