"use strict";
exports.id = 6432;
exports.ids = [6432];
exports.modules = {

/***/ 66432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ about_me)
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
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./src/components/forms/error-msg.jsx
var error_msg = __webpack_require__(40002);
// EXTERNAL MODULE: ./src/utils/validation-schema.js
var validation_schema = __webpack_require__(38315);
;// CONCATENATED MODULE: ./src/components/forms/about-form.jsx





const AboutForm = ()=>{
    // use formik
    const { handleChange , handleSubmit , handleBlur , errors , values , touched  } = (0,dist.useFormik)({
        initialValues: {
            name: "",
            email: "",
            msg: ""
        },
        validationSchema: validation_schema/* aboutSchema */.w,
        onSubmit: (values, { resetForm  })=>{
            console.log(values);
            resetForm();
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-md-6 col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "input",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    value: values.name,
                                    onChange: handleChange,
                                    onBlur: handleBlur,
                                    type: "text",
                                    placeholder: "Enter your name",
                                    id: "name"
                                }),
                                touched.name && /*#__PURE__*/ jsx_runtime.jsx(error_msg/* default */.Z, {
                                    error: errors.name
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-md-6 col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "input",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    value: values.email,
                                    onChange: handleChange,
                                    onBlur: handleBlur,
                                    type: "text",
                                    placeholder: "Enter your Email",
                                    id: "email"
                                }),
                                touched.email && /*#__PURE__*/ jsx_runtime.jsx(error_msg/* default */.Z, {
                                    error: errors.email
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "textarea",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                    value: values.msg,
                                    onChange: handleChange,
                                    id: "msg",
                                    onBlur: handleBlur,
                                    placeholder: "Enter your message"
                                }),
                                touched.msg && /*#__PURE__*/ jsx_runtime.jsx(error_msg/* default */.Z, {
                                    error: errors.msg
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("input", {
                className: "tp-btn-lg-yellow",
                type: "submit",
                value: "Send Message"
            })
        ]
    });
};
/* harmony default export */ const about_form = (AboutForm);

;// CONCATENATED MODULE: ./src/components/about-me/about-contact.jsx



const AboutContact = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "am-contact-area pb-130",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "am-contact-info p-relative",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                        className: "am-contact-title",
                                        children: "Direct massage me!"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "am-border-shape"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "contact-form text-center",
                            children: /*#__PURE__*/ jsx_runtime.jsx(about_form, {})
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const about_contact = (AboutContact);

;// CONCATENATED MODULE: ./src/components/about-me/about-me-area.jsx


const AboutMeArea = ({ team  })=>{
    // console.log(team);
    const { social_links , img , name , title  } = team || {};
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "am-about-me-area pt-110 pb-100",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row align-items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xl-5 col-lg-5 col-12",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "ac-ab-img fix",
                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    className: "w-100",
                                    src: img,
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xl-7 col-lg-7 col-12",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-xl-7 col-lg-8 col-md-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "amaboutinfo",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "amaboutinfo__client-info",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                            children: name
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: title
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            children: "Phasellus in libero et nunc malesuada tincidu Morbi auctor tristique semper. Nunc condimentum dapibus felis"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "amaboutinfo__experience",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("b", {
                                                                    children: "Expertise:"
                                                                }),
                                                                " Genetic Specialist"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("b", {
                                                                    children: "Experience:"
                                                                }),
                                                                " 5 Years"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                href: "mailto:webmail.info@gmail.com",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("b", {
                                                                        children: "E-mail:"
                                                                    }),
                                                                    " webmail.info@gmail.com"
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-xl-5 col-lg-4 col-md-6",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "amaboutsocial text-start text-md-end",
                                            children: social_links?.map((link, i)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "amaboutsocial__icon mb-30",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                        href: link?.link,
                                                        target: link?.target,
                                                        className: "si-btn-link",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "tp-si-wrapper d-flex justify-content-end",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: `tp-si__text tp-si-color-${i + 2}`,
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        children: link?.name
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: `tp-si__icon tp-si-color-${i + 2}`,
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                        className: link?.icon
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }, i))
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const about_me_area = (AboutMeArea);

;// CONCATENATED MODULE: ./src/components/about-me/experience-area.jsx


const contents = {
    title: "Personal Experience",
    text_1: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,",
    text_2: "Must explain to you how all this mistaken idea of denouncing works pleasure and praising uts pain was born and I will gives you a itself completed account of the system, and sed expounds the ut actual teachings of that greater sed explores truth. Denouncing works pleasures and praising pains was us born and I will gives you a completed ut workers accounts of the system. sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    feature_items: [
        {
            title: "Skills",
            desc: "Must explain to you how all praising uts pain was born and I will gives you a itself completed account of the system, and sed expounds the ut actual teachings of that greater",
            lists: [
                "Extramural Funding",
                "Bacteria Markers",
                "Type of system involved",
                "Nam nec mi euismod euismod"
            ]
        },
        {
            title: "Education",
            desc: "Must explain to you how all praising uts pain was born and I will gives you a itself completed account of the system, and sed expounds the ut actual teachings of that greater",
            lists: [
                "Extramural Funding",
                "Bacteria Markers",
                "Type of system involved",
                "Nam nec mi euismod euismod"
            ]
        },
        {
            title: "Awards",
            desc: "Must explain to you how all praising uts pain was born and I will gives you a itself completed account of the system, and sed expounds the ut actual teachings of that greater",
            lists: [
                "Extramural Funding",
                "Bacteria Markers",
                "Type of system involved",
                "Nam nec mi euismod euismod"
            ]
        }, 
    ]
};
const { title , text_1 , text_2 , feature_items  } = contents;
const ExperienceArea = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "tp-skill-area",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xl-12",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "amskill",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "amskill__title",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                            className: "am-skill-title",
                                            children: title
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "pb-10",
                                            children: text_1
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: text_2
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row feature-bottom-space",
                        children: feature_items.map((item, i)=>{
                            const { title , desc , lists  } = item;
                            return /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xl-4 col-lg-4",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "amfeature",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "amfeature__item",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                    className: "am-skill-sm-title",
                                                    children: title
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: `am-p-space-${i + 1}`,
                                                    children: desc
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "amfeature__list",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                children: lists.map((l, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fal fa-check"
                                                            }),
                                                            l
                                                        ]
                                                    }, i))
                                            })
                                        })
                                    ]
                                })
                            }, i);
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const experience_area = (ExperienceArea);

;// CONCATENATED MODULE: ./src/components/about-me/index.jsx








const AboutMe = ({ team  })=>{
    (0,react.useEffect)(()=>{
        setTimeout(()=>{
            (0,utils/* animationCreate */.H)();
        }, 500);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(layout/* Wrapper */.im, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(layout/* Header */.h4, {}),
            /*#__PURE__*/ jsx_runtime.jsx(breadcrumb/* default */.Z, {
                title: team?.name ? team?.name : "Ritarexa Diramen"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(about_me_area, {
                team: team
            }),
            /*#__PURE__*/ jsx_runtime.jsx(experience_area, {}),
            /*#__PURE__*/ jsx_runtime.jsx(about_contact, {}),
            /*#__PURE__*/ jsx_runtime.jsx(layout/* FooterThree */.yD, {})
        ]
    });
};
/* harmony default export */ const about_me = (AboutMe);


/***/ })

};
;