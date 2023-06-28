"use strict";
exports.id = 6323;
exports.ids = [6323];
exports.modules = {

/***/ 40002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);


const ErrorMsg = ({ error  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            style: {
                color: "red"
            },
            children: error
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorMsg);


/***/ }),

/***/ 38315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$5": () => (/* binding */ reviewSchema),
/* harmony export */   "OD": () => (/* binding */ contactSchema),
/* harmony export */   "dm": () => (/* binding */ loginSchema),
/* harmony export */   "gT": () => (/* binding */ blogSchema),
/* harmony export */   "gY": () => (/* binding */ registerSchema),
/* harmony export */   "w": () => (/* binding */ aboutSchema)
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53209);

const aboutSchema = yup__WEBPACK_IMPORTED_MODULE_0__/* .object */ .Ry().shape({
    name: yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().required().label("Name"),
    email: yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().required().email().label("Email"),
    msg: yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().required().min(20).label("Message")
});
const reviewSchema = yup__WEBPACK_IMPORTED_MODULE_0__/* .object */ .Ry().shape({
    name: yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().required().label("Name"),
    email: yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().required().email().label("Email"),
    review: yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().required().min(20).label("Review")
});
const registerSchema = yup__WEBPACK_IMPORTED_MODULE_0__/* .object */ .Ry().shape({
    name: yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().required().label("Name"),
    email: yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().required().email().label("Email"),
    password: yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().required().min(6).label("Password")
});
const loginSchema = yup__WEBPACK_IMPORTED_MODULE_0__/* .object */ .Ry().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().required().email().label("Email"),
    password: yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().required().min(6).label("Password")
});
const contactSchema = yup__WEBPACK_IMPORTED_MODULE_0__/* .object */ .Ry().shape({
    name: yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().required().label("Name"),
    email: yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().required().email().label("Email"),
    msg: yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().required().min(20).label("Message")
});
const blogSchema = yup__WEBPACK_IMPORTED_MODULE_0__/* .object */ .Ry().shape({
    name: yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().required().label("Name"),
    email: yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().required().email().label("Email"),
    number: yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().required().min(11).label("Number"),
    msg: yup__WEBPACK_IMPORTED_MODULE_0__/* .string */ .Z_().required().min(20).label("Message"),
    terms: yup__WEBPACK_IMPORTED_MODULE_0__/* .bool */ .Xg().oneOf([
        true,
        "You need to accept the terms and conditions"
    ])
});


/***/ })

};
;