"use strict";
exports.id = 5477;
exports.ids = [5477];
exports.modules = {

/***/ 45477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ job_details)
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
// EXTERNAL MODULE: ./src/utils/validation-schema.js
var validation_schema = __webpack_require__(38315);
// EXTERNAL MODULE: ./src/components/forms/error-msg.jsx
var error_msg = __webpack_require__(40002);
;// CONCATENATED MODULE: ./src/components/forms/job-details-form.jsx





const JobDetailsForm = ()=>{
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
                        placeholder: "Enter your Name"
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
                        placeholder: "Enter your Mail"
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
                        placeholder: "Enter your Massage*"
                    }),
                    touched.msg && /*#__PURE__*/ jsx_runtime.jsx(error_msg/* default */.Z, {
                        error: errors.msg
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("button", {
                className: "tp-btn-yellow w-100",
                children: "Apply Now"
            })
        ]
    });
};
/* harmony default export */ const job_details_form = (JobDetailsForm);

;// CONCATENATED MODULE: ./src/components/job-details/job-details-area.jsx



const JobDetailsArea = ({ item  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "job-details-info pt-120 pb-100",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xl-6 col-lg-6",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "jobdetails",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "jobdetails__subtitle",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                            className: "jb-subtitle",
                                            children: "Ongoing"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "jobdetails__title",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                className: "job-title pb-10",
                                                children: item?.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: "Product Management"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "jobdetails__paragraph",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                className: "pb-20",
                                                children: [
                                                    "We're",
                                                    " looking for a new Product Manager to join our 14-people Product Management team. Check out our ",
                                                    "Team's",
                                                    " expert blog here. :)"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                className: "pb-30",
                                                children: [
                                                    "Since last year, ",
                                                    "we've",
                                                    " been building a new team of ",
                                                    /*#__PURE__*/ jsx_runtime.jsx("b", {
                                                        children: "Product Managers."
                                                    }),
                                                    " Our goal is to build world-class products, elevate the product strategy and execution support we deliver to our clients."
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "jobdetails__feature",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            className: "fal fa-check"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: "Salary :"
                                                        }),
                                                        " base salary + salary review every 6 months"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            className: "fal fa-check"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: "Perks : "
                                                        }),
                                                        " + 1 000 PLN home office bonus, Multisport card, private health insurance, discounts on Apple products, development budget, and more!"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            className: "fal fa-check"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: "B2B : "
                                                        }),
                                                        " +16 paid days off"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            className: "fal fa-check"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: "Required skills :"
                                                        }),
                                                        " 2-year experience in managing complex digital products; C1+ English; experience in Agile"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            className: "fal fa-check"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: "B2B :"
                                                        }),
                                                        " +16 paid days off"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            className: "fal fa-check"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: "Location : "
                                                        }),
                                                        " Poznań, remotely in Poland, remotely in the EU "
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "jobdetails__img",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: "/assets/img/job/job-1.jpg",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "jobdetails__title",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                            className: "job-title pb-20",
                                            children: "Your responsibilities :"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "jobdetails__paragraph",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "mb-30",
                                            children: "Our mission at Nerox is to help entrepreneurs and innovators shape the world through beautiful software. We care about trust, taking ownership, and transparency. As a Certified B Corporation\xae, we offer a safe, inclusive and productive environment for all team members, and we’re always open to feedback."
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "jobdetails__feature jobdetails__feature-2",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            className: "fal fa-check"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: "Supporting Nerox’s clients in developing a viable vision, strategy, and roadmap for their products."
                                                        }),
                                                        " Working on product discovery and development in order to increase the ",
                                                        "client's",
                                                        " business value."
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            className: "fal fa-check"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: "Gaining a deep understanding of our customers’ needs, requirements, and objectives"
                                                        }),
                                                        " through taking part in market research, experimentation, user testing, implementing continuous feedback systems, and performing data analysis."
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            className: "fal fa-check"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: "Supporting Nerox’s clients in developing a viable vision, strategy, and roadmap for their products."
                                                        }),
                                                        " Working on product discovery and development in order to increase the ",
                                                        "client's",
                                                        " business value."
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            className: "fal fa-check"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: "Required skills :"
                                                        }),
                                                        " 2-year experience in managing complex digital products; C1+ English; experience in Agile"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            className: "fal fa-check"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: "Gaining a deep understanding of our customers’ needs, requirements, and objectives"
                                                        }),
                                                        " through taking part in market research, experimentation, user testing, implementing continuous feedback systems, and performing data analysis."
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            className: "fal fa-check"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: "Location : "
                                                        }),
                                                        " Poznań, remotely in Poland, remotely in the EU "
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "jobdetails__title",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                            className: "job-title pb-15",
                                            children: "All About Digital Cappuccino "
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "jobdetails__paragraph",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: "Our mission at Netguru is to help entrepreneurs and innovators shape the world through beautiful software. We care about trust, taking ownership, and transparency. As a Certified B Corporation\xae, we offer a safe, inclusive and productive environment for all team members, and we’re always open to feedback."
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xl-6 col-lg-6",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "tpcontact",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "tpcontact__form tpcontact__form-2",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(job_details_form, {})
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const job_details_area = (JobDetailsArea);

;// CONCATENATED MODULE: ./src/components/job-details/index.jsx






const JobDetails = ({ job  })=>{
    (0,react.useEffect)(()=>{
        setTimeout(()=>{
            (0,utils/* animationCreate */.H)();
        }, 500);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(layout/* Wrapper */.im, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(layout/* Header */.h4, {}),
            /*#__PURE__*/ jsx_runtime.jsx(breadcrumb/* default */.Z, {
                title: job?.title ? job?.title : "Job Details"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(job_details_area, {
                item: job
            }),
            /*#__PURE__*/ jsx_runtime.jsx(layout/* FooterThree */.yD, {})
        ]
    });
};
/* harmony default export */ const job_details = (JobDetails);


/***/ })

};
;