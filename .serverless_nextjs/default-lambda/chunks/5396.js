"use strict";
exports.id = 5396;
exports.ids = [5396];
exports.modules = {

/***/ 93856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37424);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);


const useCart = ()=>{
    const { 0: quantity , 1: setQuantity  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const { 0: total , 1: setTotal  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const cartItems = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.cart.cart_products);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const cart = cartItems.reduce((cartTotal, cartItem)=>{
            const { price , quantity  } = cartItem;
            if (price !== "free") {
                const itemTotal = price * quantity;
                cartTotal.total += itemTotal;
            }
            cartTotal.quantity += quantity;
            return cartTotal;
        }, {
            total: 0,
            quantity: 0
        });
        setQuantity(cart.quantity);
        setTotal(cart.total);
    }, [
        cartItems
    ]);
    return {
        quantity,
        total,
        cartItems
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCart);


/***/ }),

/***/ 38356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ animationCreate)
/* harmony export */ });
const animationCreate = ()=>{
    if (false) {}
    new WOW.WOW({
        live: false
    }).init();
};


/***/ })

};
;