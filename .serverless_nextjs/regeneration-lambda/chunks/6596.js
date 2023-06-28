"use strict";
exports.id = 6596;
exports.ids = [6596];
exports.modules = {

/***/ 44672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ use_firebase)
});

// EXTERNAL MODULE: ./node_modules/firebase/auth/dist/index.mjs + 3 modules
var dist = __webpack_require__(87303);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(37424);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs
var react_toastify_esm = __webpack_require__(55678);
// EXTERNAL MODULE: ./node_modules/firebase/app/dist/index.mjs
var app_dist = __webpack_require__(79286);
;// CONCATENATED MODULE: ./src/firebase/firebase.config.js
const firebaseConfig = {
    apiKey: "AIzaSyC6q63VgF5ikfKJCDajmC-aFvzpEh6dBJU",
    authDomain: "collax-cf6be.firebaseapp.com",
    projectId: "collax-cf6be",
    storageBucket: "collax-cf6be.appspot.com",
    messagingSenderId: "266530521253",
    appId: "1:266530521253:web:95c0f3fe64f27eedb20d4c"
};
/* harmony default export */ const firebase_config = (firebaseConfig);

;// CONCATENATED MODULE: ./src/firebase/firebase.init.js


function firebaseInitialization() {
    (0,app_dist/* initializeApp */.ZF)(firebase_config);
}
/* harmony default export */ const firebase_init = (firebaseInitialization);

// EXTERNAL MODULE: ./src/redux/features/auth-slice.js
var auth_slice = __webpack_require__(64249);
;// CONCATENATED MODULE: ./src/hooks/use-firebase.js





// initialize firebase app
firebase_init();
// declare auth
const auth = (0,dist/* getAuth */.v0)();
const useFirebase = ()=>{
    // dispatch
    const dispatch = (0,lib.useDispatch)();
    // register With Email Password
    const registerWithEmailPassword = (email, password, name)=>{
        (0,dist/* createUserWithEmailAndPassword */.Xb)(auth, email, password).then((user)=>{
            (0,dist/* updateProfile */.ck)(auth.currentUser, {
                displayName: name
            }).then(()=>{}).catch((error)=>{});
            dispatch((0,auth_slice/* add_user */.jb)({
                name: name,
                email: user.user.email,
                uid: user.user.uid
            }));
            react_toastify_esm/* toast.success */.Am.success(`${name} register successfully`, {
                position: "top-left"
            });
        }).catch((error)=>{
            const errorMessage = error?.message;
            react_toastify_esm/* toast.error */.Am.error(`${errorMessage}`, {
                position: "top-left"
            });
        });
    };
    // login with email and password
    const loginWithEmailPassword = (email, password)=>{
        (0,dist/* signInWithEmailAndPassword */.e5)(auth, email, password).then((user)=>{
            const { displayName: name , email , uid  } = user.user;
            dispatch((0,auth_slice/* user_info */.bT)({
                name: name,
                email: email,
                uid: uid
            }));
            react_toastify_esm/* toast.success */.Am.success(`${name} login successfully`, {
                position: "top-left"
            });
        }).catch((error)=>{
            const errorMessage = error.message;
            react_toastify_esm/* toast.error */.Am.error(`${errorMessage}`, {
                position: "top-left"
            });
        });
    };
    // password reset email sent
    const resetPassword = (email)=>{
        (0,dist/* sendPasswordResetEmail */.LS)(auth, email).then(()=>{
            react_toastify_esm/* toast.success */.Am.success(`Password reset email sent!`, {
                position: "top-left"
            });
        }).catch((error)=>{
            const errorMessage = error?.message;
            react_toastify_esm/* toast.error */.Am.error(`${errorMessage}`, {
                position: "top-left"
            });
        });
    };
    // logout
    const logout = ()=>{
        (0,dist/* signOut */.w7)(auth).then(()=>{
            dispatch((0,auth_slice/* sign_out */.QA)());
            react_toastify_esm/* toast.success */.Am.success(`Sign-out successful.`, {
                position: "top-left"
            });
        }).catch((error)=>{
        // An error happened.
        });
    };
    return {
        registerWithEmailPassword,
        loginWithEmailPassword,
        resetPassword,
        logout
    };
};
/* harmony default export */ const use_firebase = (useFirebase);


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