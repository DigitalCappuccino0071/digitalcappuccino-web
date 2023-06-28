"use strict";
exports.id = 3769;
exports.ids = [3769];
exports.modules = {

/***/ 43769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11358);
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_2__);



const PaginationArea = ({ handlePageClick , pageCount  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_paginate__WEBPACK_IMPORTED_MODULE_2___default()), {
        nextLabel: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: "far fa-angle-right"
            })
        }),
        onPageChange: handlePageClick,
        pageRangeDisplayed: 3,
        marginPagesDisplayed: 2,
        pageCount: pageCount,
        previousLabel: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: "far fa-angle-left"
            })
        }),
        pageClassName: "page-items",
        pageLinkClassName: "page-links",
        previousClassName: "page-items",
        previousLinkClassName: "page-links",
        nextClassName: "page-items",
        nextLinkClassName: "page-links",
        breakLabel: "...",
        breakClassName: "page-items",
        breakLinkClassName: "page-links",
        containerClassName: "paginasstionss",
        activeClassName: "active",
        renderOnZeroPageCount: null
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaginationArea);


/***/ })

};
;