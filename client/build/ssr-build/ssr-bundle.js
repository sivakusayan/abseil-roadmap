module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "EWOq");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+eyN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "/Mq+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Link */
/* unused harmony export Route */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D; });
/* unused harmony export default */
/* unused harmony export exec */
/* unused harmony export getCurrentUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return $; });
/* unused harmony export useRouter */
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QRet");


var a = {};
function c(n, t) {
  for (var r in t) n[r] = t[r];
  return n;
}
function s(n, t, r) {
  var i,
    o = /(?:\?([^#]*))?(#.*)?$/,
    e = n.match(o),
    u = {};
  if (e && e[1]) for (var f = e[1].split("&"), c = 0; c < f.length; c++) {
    var s = f[c].split("=");
    u[decodeURIComponent(s[0])] = decodeURIComponent(s.slice(1).join("="));
  }
  n = d(n.replace(o, "")), t = d(t || "");
  for (var h = Math.max(n.length, t.length), v = 0; v < h; v++) if (t[v] && ":" === t[v].charAt(0)) {
    var l = t[v].replace(/(^:|[+*?]+$)/g, ""),
      p = (t[v].match(/[+*?]+$/) || a)[0] || "",
      m = ~p.indexOf("+"),
      y = ~p.indexOf("*"),
      U = n[v] || "";
    if (!U && !y && (p.indexOf("?") < 0 || m)) {
      i = !1;
      break;
    }
    if (u[l] = decodeURIComponent(U), m || y) {
      u[l] = n.slice(v).map(decodeURIComponent).join("/");
      break;
    }
  } else if (t[v] !== n[v]) {
    i = !1;
    break;
  }
  return (!0 === r.default || !1 !== i) && u;
}
function h(n, t) {
  return n.rank < t.rank ? 1 : n.rank > t.rank ? -1 : n.index - t.index;
}
function v(n, t) {
  return n.index = t, n.rank = function (n) {
    return n.props.default ? 0 : d(n.props.path).map(l).join("");
  }(n), n.props;
}
function d(n) {
  return n.replace(/(^\/+|\/+$)/g, "").split("/");
}
function l(n) {
  return ":" == n.charAt(0) ? 1 + "*+?".indexOf(n.charAt(n.length - 1)) || 4 : 5;
}
var p = {},
  m = [],
  y = [],
  U = null,
  g = {
    url: R()
  },
  k = Object(preact__WEBPACK_IMPORTED_MODULE_0__["createContext"])(g);
function C() {
  var n = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useContext */ "a"])(k);
  if (n === g) {
    var t = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useState */ "d"])()[1];
    Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useEffect */ "b"])(function () {
      return y.push(t), function () {
        return y.splice(y.indexOf(t), 1);
      };
    }, []);
  }
  return [n, $];
}
function R() {
  var n;
  return "" + ((n = U && U.location ? U.location : U && U.getCurrentLocation ? U.getCurrentLocation() : "undefined" != typeof location ? location : p).pathname || "") + (n.search || "");
}
function $(n, t) {
  return void 0 === t && (t = !1), "string" != typeof n && n.url && (t = n.replace, n = n.url), function (n) {
    for (var t = m.length; t--;) if (m[t].canRoute(n)) return !0;
    return !1;
  }(n) && function (n, t) {
    void 0 === t && (t = "push"), U && U[t] ? U[t](n) : "undefined" != typeof history && history[t + "State"] && history[t + "State"](null, null, n);
  }(n, t ? "replace" : "push"), I(n);
}
function I(n) {
  for (var t = !1, r = 0; r < m.length; r++) m[r].routeTo(n) && (t = !0);
  return t;
}
function M(n) {
  if (n && n.getAttribute) {
    var t = n.getAttribute("href"),
      r = n.getAttribute("target");
    if (t && t.match(/^\//g) && (!r || r.match(/^_?self$/i))) return $(t);
  }
}
function b(n) {
  return n.stopImmediatePropagation && n.stopImmediatePropagation(), n.stopPropagation && n.stopPropagation(), n.preventDefault(), !1;
}
function W(n) {
  if (!(n.ctrlKey || n.metaKey || n.altKey || n.shiftKey || n.button)) {
    var t = n.target;
    do {
      if ("a" === t.localName && t.getAttribute("href")) {
        if (t.hasAttribute("data-native") || t.hasAttribute("native")) return;
        if (M(t)) return b(n);
      }
    } while (t = t.parentNode);
  }
}
var w = !1;
function D(n) {
  n.history && (U = n.history), this.state = {
    url: n.url || R()
  };
}
c(D.prototype = new preact__WEBPACK_IMPORTED_MODULE_0__["Component"](), {
  shouldComponentUpdate: function shouldComponentUpdate(n) {
    return !0 !== n.static || n.url !== this.props.url || n.onChange !== this.props.onChange;
  },
  canRoute: function canRoute(n) {
    var t = Object(preact__WEBPACK_IMPORTED_MODULE_0__["toChildArray"])(this.props.children);
    return void 0 !== this.g(t, n);
  },
  routeTo: function routeTo(n) {
    this.setState({
      url: n
    });
    var t = this.canRoute(n);
    return this.p || this.forceUpdate(), t;
  },
  componentWillMount: function componentWillMount() {
    this.p = !0;
  },
  componentDidMount: function componentDidMount() {
    var n = this;
    w || (w = !0, U || addEventListener("popstate", function () {
      I(R());
    }), addEventListener("click", W)), m.push(this), U && (this.u = U.listen(function (t) {
      var r = t.location || t;
      n.routeTo("" + (r.pathname || "") + (r.search || ""));
    })), this.p = !1;
  },
  componentWillUnmount: function componentWillUnmount() {
    "function" == typeof this.u && this.u(), m.splice(m.indexOf(this), 1);
  },
  componentWillUpdate: function componentWillUpdate() {
    this.p = !0;
  },
  componentDidUpdate: function componentDidUpdate() {
    this.p = !1;
  },
  g: function g(n, t) {
    n = n.filter(v).sort(h);
    for (var r = 0; r < n.length; r++) {
      var i = n[r],
        o = s(t, i.props.path, i.props);
      if (o) return [i, o];
    }
  },
  render: function render(n, t) {
    var e,
      u,
      f = n.onChange,
      a = t.url,
      s = this.c,
      h = this.g(Object(preact__WEBPACK_IMPORTED_MODULE_0__["toChildArray"])(n.children), a);
    if (h && (u = Object(preact__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(h[0], c(c({
      url: a,
      matches: e = h[1]
    }, e), {
      key: void 0,
      ref: void 0
    }))), a !== (s && s.url)) {
      c(g, s = this.c = {
        url: a,
        previous: s && s.url,
        current: u,
        path: u ? u.props.path : null,
        matches: e
      }), s.router = this, s.active = u ? [u] : [];
      for (var v = y.length; v--;) y[v]({});
      "function" == typeof f && f(s);
    }
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(k.Provider, {
      value: s
    }, u);
  }
});
var E = function E(n) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", c({
      onClick: W
    }, n));
  },
  L = function L(n) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(n.component, n);
  };


/***/ }),

/***/ "3/Ag":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostView; });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("QRet");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/Mq+");
/* harmony import */ var _PostView_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("BsDR");
/* harmony import */ var _Loader_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Xb+Z");
/* harmony import */ var _WelcomePost_WelcomePost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("rNaT");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function PostView(_ref) {
  var activePostId = _ref.activePostId,
    isPostRead = _ref.isPostRead,
    updatePostRead = _ref.updatePostRead;
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "d"])(null),
    _useState2 = _slicedToArray(_useState, 2),
    post = _useState2[0],
    setPost = _useState2[1];
  var _useState3 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "d"])(0),
    _useState4 = _slicedToArray(_useState3, 2),
    fetchRequestCount = _useState4[0],
    setFetchRequestCount = _useState4[1];
  var setPostIfExists = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* (postId) {
      setFetchRequestCount(function (prev) {
        return prev + 1;
      });
      return fetch("/api/posts?id=".concat(postId)).then(function (res) {
        return res.json();
      }).then(function (post) {
        if (post !== null && post !== void 0 && post.content_html) {
          setPost(post);
        } else {
          Object(preact_router__WEBPACK_IMPORTED_MODULE_2__[/* route */ "b"])("/");
        }
        setFetchRequestCount(function (prev) {
          return prev - 1;
        });
      });
    });
    return function setPostIfExists(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useEffect */ "b"])(function () {
    window.scrollTo(0, 0);
  }, [post]);
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useEffect */ "b"])(function () {
    if (activePostId) {
      setPostIfExists(activePostId);
    } else {
      setPost(null);
    }
  }, [activePostId]);
  var handleToggleButtonClick = function handleToggleButtonClick() {
    updatePostRead(post.id, !isPostRead);
  };
  return h("main", {
    inert: fetchRequestCount > 0,
    class: _PostView_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]["post-view"]
  }, h(_Loader_Loader__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    isLoading: fetchRequestCount > 0
  }), !post ? h(_WelcomePost_WelcomePost__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null) : h(preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, h("div", null, h("h1", {
    dangerouslySetInnerHTML: {
      __html: post.title_html
    }
  }), h("div", {
    dangerouslySetInnerHTML: {
      __html: post.content_html
    }
  }), h("div", {
    class: _PostView_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]["post-footer"]
  }, h("button", {
    class: "btn" + (isPostRead ? "" : " btn-primary"),
    onClick: handleToggleButtonClick
  }, isPostRead ? "Mark Unread" : "Mark Read"), h("a", {
    rel: "noopener",
    target: "_blank",
    href: post.link
  }, "Original source (opens in new window)")))));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "4P0Q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"loader":"loader__Ryvqc","is-loading":"is-loading__QiBqs"});

/***/ }),

/***/ "BsDR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"post-view":"post-view__-5TS0","post-footer":"post-footer__9ziVx"});

/***/ }),

/***/ "CnPn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"section":"section__ywvNu"});

/***/ }),

/***/ "EWOq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(h) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var preact_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/Mq+");
/* harmony import */ var _styles_typography_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+eyN");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iOjB");
/* harmony import */ var _components_Home_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("km43");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("QRet");





function App() {
  var onRouteChange = function onRouteChange(e) {
    /**
     * We can't overwrite localstorage if this is initial navigation. 
     * If we overwrite here, then we'll change localStorage before
     * the useEffect handler can get to it. It should be okay if the
     * user explicitly specified a post on initial navigation, though.
     */
    if (e.previous || e.matches.postId) {
      localStorage.setItem("lastVisitedPostId", e.matches.postId);
    }
  };
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_4__[/* useEffect */ "b"])(function () {
    var lastVisitedPostId = localStorage.getItem("lastVisitedPostId");
    if (lastVisitedPostId) {
      Object(preact_router__WEBPACK_IMPORTED_MODULE_0__[/* route */ "b"])("/" + lastVisitedPostId);
    }
  }, []);
  return h(preact_router__WEBPACK_IMPORTED_MODULE_0__[/* Router */ "a"], {
    onChange: onRouteChange
  }, h(_components_Home_Home__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    path: "/:postId?"
  }));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "GSJy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"posts":"posts__dCL1X"});

/***/ }),

/***/ "HteQ":
/***/ (function(module, exports) {

module.exports = require("preact");

/***/ }),

/***/ "QRet":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useCallback */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return q; });
/* unused harmony export useDebugValue */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return p; });
/* unused harmony export useErrorBoundary */
/* unused harmony export useId */
/* unused harmony export useImperativeHandle */
/* unused harmony export useLayoutEffect */
/* unused harmony export useMemo */
/* unused harmony export useReducer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return h; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);

var t,
  r,
  u,
  i,
  o = 0,
  f = [],
  c = [],
  e = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b,
  a = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r,
  v = preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed,
  l = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c,
  m = preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount;
function d(t, u) {
  preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h && preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h(r, t, o || u), o = 0;
  var i = r.__H || (r.__H = {
    __: [],
    __h: []
  });
  return t >= i.__.length && i.__.push({
    __V: c
  }), i.__[t];
}
function h(n) {
  return o = 1, s(B, n);
}
function s(n, u, i) {
  var o = d(t++, 2);
  if (o.t = n, !o.__c && (o.__ = [i ? i(u) : B(void 0, u), function (n) {
    var t = o.__N ? o.__N[0] : o.__[0],
      r = o.t(t, n);
    t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
  }], o.__c = r, !r.u)) {
    var f = function f(n, t, r) {
      if (!o.__c.__H) return !0;
      var u = o.__c.__H.__.filter(function (n) {
        return n.__c;
      });
      if (u.every(function (n) {
        return !n.__N;
      })) return !c || c.call(this, n, t, r);
      var i = !1;
      return u.forEach(function (n) {
        if (n.__N) {
          var t = n.__[0];
          n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
        }
      }), !(!i && o.__c.props === n) && (!c || c.call(this, n, t, r));
    };
    r.u = !0;
    var c = r.shouldComponentUpdate,
      e = r.componentWillUpdate;
    r.componentWillUpdate = function (n, t, r) {
      if (this.__e) {
        var u = c;
        c = void 0, f(n, t, r), c = u;
      }
      e && e.call(this, n, t, r);
    }, r.shouldComponentUpdate = f;
  }
  return o.__N || o.__;
}
function p(u, i) {
  var o = d(t++, 3);
  !preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__H.__h.push(o));
}
function y(u, i) {
  var o = d(t++, 4);
  !preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__h.push(o));
}
function _(n) {
  return o = 5, F(function () {
    return {
      current: n
    };
  }, []);
}
function A(n, t, r) {
  o = 6, y(function () {
    return "function" == typeof n ? (n(t()), function () {
      return n(null);
    }) : n ? (n.current = t(), function () {
      return n.current = null;
    }) : void 0;
  }, null == r ? r : r.concat(n));
}
function F(n, r) {
  var u = d(t++, 7);
  return z(u.__H, r) ? (u.__V = n(), u.i = r, u.__h = n, u.__V) : u.__;
}
function T(n, t) {
  return o = 8, F(function () {
    return n;
  }, t);
}
function q(n) {
  var u = r.context[n.__c],
    i = d(t++, 9);
  return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(r)), u.props.value) : n.__;
}
function x(t, r) {
  preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue && preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue(r ? r(t) : t);
}
function P(n) {
  var u = d(t++, 10),
    i = h();
  return u.__ = n, r.componentDidCatch || (r.componentDidCatch = function (n, t) {
    u.__ && u.__(n, t), i[1](n);
  }), [i[0], function () {
    i[1](void 0);
  }];
}
function V() {
  var n = d(t++, 11);
  if (!n.__) {
    for (var u = r.__v; null !== u && !u.__m && null !== u.__;) u = u.__;
    var i = u.__m || (u.__m = [0, 0]);
    n.__ = "P" + i[0] + "-" + i[1]++;
  }
  return n.__;
}
function b() {
  for (var t; t = f.shift();) if (t.__P && t.__H) try {
    t.__H.__h.forEach(k), t.__H.__h.forEach(w), t.__H.__h = [];
  } catch (r) {
    t.__H.__h = [], preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(r, t.__v);
  }
}
preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b = function (n) {
  r = null, e && e(n);
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r = function (n) {
  a && a(n), t = 0;
  var i = (r = n.__c).__H;
  i && (u === r ? (i.__h = [], r.__h = [], i.__.forEach(function (n) {
    n.__N && (n.__ = n.__N), n.__V = c, n.__N = n.i = void 0;
  })) : (i.__h.forEach(k), i.__h.forEach(w), i.__h = [], t = 0)), u = r;
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed = function (t) {
  v && v(t);
  var o = t.__c;
  o && o.__H && (o.__H.__h.length && (1 !== f.push(o) && i === preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame || ((i = preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame) || j)(b)), o.__H.__.forEach(function (n) {
    n.i && (n.__H = n.i), n.__V !== c && (n.__ = n.__V), n.i = void 0, n.__V = c;
  })), u = r = null;
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c = function (t, r) {
  r.some(function (t) {
    try {
      t.__h.forEach(k), t.__h = t.__h.filter(function (n) {
        return !n.__ || w(n);
      });
    } catch (u) {
      r.some(function (n) {
        n.__h && (n.__h = []);
      }), r = [], preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(u, t.__v);
    }
  }), l && l(t, r);
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount = function (t) {
  m && m(t);
  var r,
    u = t.__c;
  u && u.__H && (u.__H.__.forEach(function (n) {
    try {
      k(n);
    } catch (n) {
      r = n;
    }
  }), u.__H = void 0, r && preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(r, u.__v));
};
var g = "function" == typeof requestAnimationFrame;
function j(n) {
  var t,
    r = function r() {
      clearTimeout(u), g && cancelAnimationFrame(t), setTimeout(n);
    },
    u = setTimeout(r, 100);
  g && (t = requestAnimationFrame(r));
}
function k(n) {
  var t = r,
    u = n.__c;
  "function" == typeof u && (n.__c = void 0, u()), r = t;
}
function w(n) {
  var t = r;
  n.__c = n.__(), r = t;
}
function z(n, t) {
  return !n || n.length !== t.length || t.some(function (t, r) {
    return t !== n[r];
  });
}
function B(n, t) {
  return "function" == typeof t ? t(n) : t;
}


/***/ }),

/***/ "Xb+Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Loader; });
/* harmony import */ var _Loader_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4P0Q");

function Loader(_ref) {
  var isLoading = _ref.isLoading;
  return h("div", {
    class: _Loader_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].loader + (isLoading ? " " + _Loader_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]["is-loading"] : "")
  }, h("svg", {
    width: "45",
    height: "45",
    viewBox: "0 0 45 45",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "#fff"
  }, h("g", {
    fill: "none",
    "fill-rule": "evenodd",
    transform: "translate(1 1)",
    "stroke-width": "2"
  }, h("circle", {
    cx: "22",
    cy: "22",
    r: "6",
    "stroke-opacity": "0"
  }, h("animate", {
    attributeName: "r",
    begin: "1.5s",
    dur: "3s",
    values: "6;22",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), h("animate", {
    attributeName: "stroke-opacity",
    begin: "1.5s",
    dur: "3s",
    values: "1;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), h("animate", {
    attributeName: "stroke-width",
    begin: "1.5s",
    dur: "3s",
    values: "2;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), h("circle", {
    cx: "22",
    cy: "22",
    r: "6",
    "stroke-opacity": "0"
  }, h("animate", {
    attributeName: "r",
    begin: "3s",
    dur: "3s",
    values: "6;22",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), h("animate", {
    attributeName: "stroke-opacity",
    begin: "3s",
    dur: "3s",
    values: "1;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), h("animate", {
    attributeName: "stroke-width",
    begin: "3s",
    dur: "3s",
    values: "2;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), h("circle", {
    cx: "22",
    cy: "22",
    r: "8"
  }, h("animate", {
    attributeName: "r",
    begin: "0s",
    dur: "1.5s",
    values: "6;1;2;3;4;5;6",
    calcMode: "linear",
    repeatCount: "indefinite"
  })))));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "Yp8k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostListItem; });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("QRet");
/* harmony import */ var _PostListItem_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("k/CE");


function PostListItem(_ref) {
  var post = _ref.post,
    isActive = _ref.isActive,
    isRead = _ref.isRead;
  var linkRef = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useRef */ "c"])();
  var className = _PostListItem_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]["post-item"];
  var scrollIntoViewIfNeeded = function scrollIntoViewIfNeeded(target) {
    if (target.getBoundingClientRect().bottom > window.innerHeight) {
      target.scrollIntoView(false);
    }
    if (target.getBoundingClientRect().top < 0) {
      target.scrollIntoView();
    }
  };
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useEffect */ "b"])(function () {
    if (isActive) {
      if (linkRef !== null && linkRef !== void 0 && linkRef.current) scrollIntoViewIfNeeded(linkRef === null || linkRef === void 0 ? void 0 : linkRef.current);
    }
  }, [isActive]);
  if (isActive) {
    className += " " + _PostListItem_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]["post-item--active"];
  }
  ;
  if (isRead) className += " " + _PostListItem_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]["post-item--read"];
  return h("li", {
    id: post.id,
    className: className,
    ref: linkRef
  }, h("a", {
    href: "/".concat(post.id || ""),
    dangerouslySetInnerHTML: {
      __html: post.title_html.replace("Tip of the Week ", "Tip ")
    }
  }), h("div", {
    className: _PostListItem_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]["svg-container"]
  }, isRead && h("svg", {
    viewBox: "0 0 101 98.7",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, h("path", {
    class: _PostListItem_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].draw,
    d: "M93.7 66.9H51v87.9h91V66.1h-17.8l-37.4 64.8-19-18.9-2.8 3.6 23.3 22.5L128 69.5h10.4v80.6H55.1V70.5h42V67z",
    "stroke-opacity": "1",
    transform: "translate(-46 -61)"
  }))));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "h1M2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostListBox; });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("QRet");
/* harmony import */ var _PostListBox_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("GSJy");
/* harmony import */ var _PostListItem_PostListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Yp8k");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Loader_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Xb+Z");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function PostListBox(_ref) {
  var activePostId = _ref.activePostId,
    readPosts = _ref.readPosts;
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "d"])([{
      id: 0,
      title_html: "Home"
    }]),
    _useState2 = _slicedToArray(_useState, 2),
    posts = _useState2[0],
    setPosts = _useState2[1];
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useEffect */ "b"])(function () {
    fetch("/api/posts").then(function (res) {
      return res.json();
    }).then(function (fetchedPosts) {
      return setPosts([].concat(_toConsumableArray(posts), _toConsumableArray(fetchedPosts)));
    });
  }, []);
  return h(preact__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, h(_Loader_Loader__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    isLoading: posts.length === 1
  }), h("ul", {
    class: _PostListBox_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].posts
  }, posts.length > 1 && posts.map(function (post) {
    return h(_PostListItem_PostListItem__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
      key: post.id,
      post: post,
      isActive: post.id === activePostId,
      isRead: readPosts[post.id]
    });
  })));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "iOjB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "k/CE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"post-item":"post-item__P+Pus","post-item--active":"post-item--active__YYrm3","svg-container":"svg-container__LBM2P","draw":"draw__UFhOn","dash":"dash__dc5fN"});

/***/ }),

/***/ "km43":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QRet");
/* harmony import */ var _PostListBox_PostListBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h1M2");
/* harmony import */ var _PostView_PostView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("3/Ag");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function Home(_ref) {
  var matches = _ref.matches;
  var activePostId = Number(matches.postId);
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useState */ "d"])(typeof window !== "undefined" && localStorage.getItem("readPosts") ? JSON.parse(localStorage.getItem("readPosts")) : {}),
    _useState2 = _slicedToArray(_useState, 2),
    readPosts = _useState2[0],
    setReadPosts = _useState2[1];
  var updatePostRead = function updatePostRead(postId, isRead) {
    var readPostsCopy = _objectSpread({}, readPosts);
    if (isRead) {
      readPostsCopy[postId] = true;
    } else {
      delete readPostsCopy[postId];
    }
    setReadPosts(readPostsCopy);
    if (typeof window !== "undefined") {
      localStorage.setItem("readPosts", JSON.stringify(readPostsCopy));
    }
  };
  return h(preact__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, h(_PostListBox_PostListBox__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    activePostId: activePostId,
    readPosts: readPosts
  }), h(_PostView_PostView__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    activePostId: activePostId,
    updatePostRead: updatePostRead,
    isPostRead: readPosts[activePostId]
  }));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "rNaT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePost; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WelcomePost_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("CnPn");


function WelcomePost() {
  return h(preact__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, h("h1", null, "Hello! This is a frontend wrapper around ", h("a", {
    href: "https://abseil.io/tips/"
  }, "Abseil's C++ tips of the week"), " that augments its reading experience."), h("span", null, "This isn't an official website affiliated with the Abseil library, just a random side project of mine."), h("div", {
    className: _WelcomePost_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].section
  }, h("h2", null, "This website: "), h("ul", null, h("li", null, "Let's you mark what posts you have or haven't read so you don't waste time finding something new."), h("li", null, "Saves off the post you last had open as well as what posts you've already read in ", h("code", null, "localstorage"), "."), h("li", null, "Marks bad code with explicit \"Bad code\" text instead of just using color to pass ", h("a", {
    href: "https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html"
  }, "WCAG Use of Color"), "."), h("li", null, "Is lighter on bandwidth than the original. Not that the former was bloated, I just like seeing how small I can get a website."))), h("div", {
    className: _WelcomePost_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].section
  }, h("h2", null, "If you want, you can create an account to: "), h("ul", null, h("li", null, "Sync your history across devices."), h("li", null, "Configure email reminders that send you a random post you haven't read yet.")), "I don't sell data, pinkie promise \uD83D\uDE07 (and I'm too lazy to figure out how to do that anyway)."), h("div", {
    className: _WelcomePost_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].section
  }, h("h2", null, "Accessibility Considerations"), h("p", null, "I aim to satisfy WCAG 2.1 Level AA, although I'm not against satisfying Level AAA if someone needs it. Since this is a personal project, full disclaimer: "), h("ul", null, h("li", null, "I'm probably not going to pay to get it professional vouched by a third party."), h("li", null, "I haven't done any user testing. I'm able-bodied in every way, so there goes my input.")), h("p", null, "On the bright side, what I do have going for me is that I've done professional accessibility work before, so hopefully this app isn't a complete trainwreck! I'm going to list my considerations below, but if there's something I haven't considered or if you find an issue please do reach out on the ", h("a", {
    href: "https://github.com/sivakusayan/abseil-roadmap/issues"
  }, "issues page"), "."), h("h3", null, "Keyboard navigation"), h("h3", null, "Screen readers"), h("h3", null, "Voice assistants"), h("p", null, "For sighted voice assistant users, all interactive elements should have the same accessible name as their visual text. In other words, you can speak what you see to activate something. Assuming there isn't some kind of weird interoperability bug, anyway."), h("p", null, "I don't have access to all types of voice assistants, so if you find an issue on my site when using your program, please do ", h("a", {
    href: "https://github.com/sivakusayan/abseil-roadmap/issues"
  }, "let me know"), ".")));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map