function K0(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in e)) {
                    const s = Object.getOwnPropertyDescriptor(r, i);
                    s && Object.defineProperty(e, i, s.get ? s : {
                        enumerable: !0,
                        get: () => r[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
} (function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver(i => {
        for (const s of i)
            if (s.type === "childList")
                for (const o of s.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(i) {
        const s = {};
        return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
    }

    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const s = n(i);
        fetch(i.href, s)
    }
})();

function G0(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Ff = {
    exports: {}
},
    Ys = {},
    zf = {
        exports: {}
    },
    V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gi = Symbol.for("react.element"),
    Y0 = Symbol.for("react.portal"),
    X0 = Symbol.for("react.fragment"),
    Q0 = Symbol.for("react.strict_mode"),
    Z0 = Symbol.for("react.profiler"),
    q0 = Symbol.for("react.provider"),
    J0 = Symbol.for("react.context"),
    eg = Symbol.for("react.forward_ref"),
    tg = Symbol.for("react.suspense"),
    ng = Symbol.for("react.memo"),
    rg = Symbol.for("react.lazy"),
    Ju = Symbol.iterator;

function ig(e) {
    return e === null || typeof e != "object" ? null : (e = Ju && e[Ju] || e["@@iterator"], typeof e == "function" ? e : null)
}
var _f = {
    isMounted: function () {
        return !1
    },
    enqueueForceUpdate: function () { },
    enqueueReplaceState: function () { },
    enqueueSetState: function () { }
},
    Of = Object.assign,
    If = {};

function cr(e, t, n) {
    this.props = e, this.context = t, this.refs = If, this.updater = n || _f
}
cr.prototype.isReactComponent = {};
cr.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
cr.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Bf() { }
Bf.prototype = cr.prototype;

function wl(e, t, n) {
    this.props = e, this.context = t, this.refs = If, this.updater = n || _f
}
var kl = wl.prototype = new Bf;
kl.constructor = wl;
Of(kl, cr.prototype);
kl.isPureReactComponent = !0;
var ec = Array.isArray,
    Uf = Object.prototype.hasOwnProperty,
    Sl = {
        current: null
    },
    Wf = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Hf(e, t, n) {
    var r, i = {},
        s = null,
        o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (s = "" + t.key), t) Uf.call(t, r) && !Wf.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) i.children = n;
    else if (1 < a) {
        for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
        i.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps, a) i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: gi,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: Sl.current
    }
}

function sg(e, t) {
    return {
        $$typeof: gi,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function bl(e) {
    return typeof e == "object" && e !== null && e.$$typeof === gi
}

function og(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function (n) {
        return t[n]
    })
}
var tc = /\/+/g;

function go(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? og("" + e.key) : t.toString(36)
}

function Yi(e, t, n, r, i) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else switch (s) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case gi:
                case Y0:
                    o = !0
            }
    }
    if (o) return o = e, i = i(o), e = r === "" ? "." + go(o, 0) : r, ec(i) ? (n = "", e != null && (n = e.replace(tc, "$&/") + "/"), Yi(i, t, n, "", function (c) {
        return c
    })) : i != null && (bl(i) && (i = sg(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(tc, "$&/") + "/") + e)), t.push(i)), 1;
    if (o = 0, r = r === "" ? "." : r + ":", ec(e))
        for (var a = 0; a < e.length; a++) {
            s = e[a];
            var l = r + go(s, a);
            o += Yi(s, t, n, l, i)
        } else if (l = ig(e), typeof l == "function")
        for (e = l.call(e), a = 0; !(s = e.next()).done;) s = s.value, l = r + go(s, a++), o += Yi(s, t, n, l, i);
    else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}

function Ti(e, t, n) {
    if (e == null) return e;
    var r = [],
        i = 0;
    return Yi(e, r, "", "", function (s) {
        return t.call(n, s, i++)
    }), r
}

function ag(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function (n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function (n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var be = {
    current: null
},
    Xi = {
        transition: null
    },
    lg = {
        ReactCurrentDispatcher: be,
        ReactCurrentBatchConfig: Xi,
        ReactCurrentOwner: Sl
    };

function Kf() {
    throw Error("act(...) is not supported in production builds of React.")
}
V.Children = {
    map: Ti,
    forEach: function (e, t, n) {
        Ti(e, function () {
            t.apply(this, arguments)
        }, n)
    },
    count: function (e) {
        var t = 0;
        return Ti(e, function () {
            t++
        }), t
    },
    toArray: function (e) {
        return Ti(e, function (t) {
            return t
        }) || []
    },
    only: function (e) {
        if (!bl(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
V.Component = cr;
V.Fragment = X0;
V.Profiler = Z0;
V.PureComponent = wl;
V.StrictMode = Q0;
V.Suspense = tg;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lg;
V.act = Kf;
V.cloneElement = function (e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Of({}, e.props),
        i = e.key,
        s = e.ref,
        o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref, o = Sl.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
        for (l in t) Uf.call(t, l) && !Wf.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
        r.children = a
    }
    return {
        $$typeof: gi,
        type: e.type,
        key: i,
        ref: s,
        props: r,
        _owner: o
    }
};
V.createContext = function (e) {
    return e = {
        $$typeof: J0,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: q0,
        _context: e
    }, e.Consumer = e
};
V.createElement = Hf;
V.createFactory = function (e) {
    var t = Hf.bind(null, e);
    return t.type = e, t
};
V.createRef = function () {
    return {
        current: null
    }
};
V.forwardRef = function (e) {
    return {
        $$typeof: eg,
        render: e
    }
};
V.isValidElement = bl;
V.lazy = function (e) {
    return {
        $$typeof: rg,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: ag
    }
};
V.memo = function (e, t) {
    return {
        $$typeof: ng,
        type: e,
        compare: t === void 0 ? null : t
    }
};
V.startTransition = function (e) {
    var t = Xi.transition;
    Xi.transition = {};
    try {
        e()
    } finally {
        Xi.transition = t
    }
};
V.unstable_act = Kf;
V.useCallback = function (e, t) {
    return be.current.useCallback(e, t)
};
V.useContext = function (e) {
    return be.current.useContext(e)
};
V.useDebugValue = function () { };
V.useDeferredValue = function (e) {
    return be.current.useDeferredValue(e)
};
V.useEffect = function (e, t) {
    return be.current.useEffect(e, t)
};
V.useId = function () {
    return be.current.useId()
};
V.useImperativeHandle = function (e, t, n) {
    return be.current.useImperativeHandle(e, t, n)
};
V.useInsertionEffect = function (e, t) {
    return be.current.useInsertionEffect(e, t)
};
V.useLayoutEffect = function (e, t) {
    return be.current.useLayoutEffect(e, t)
};
V.useMemo = function (e, t) {
    return be.current.useMemo(e, t)
};
V.useReducer = function (e, t, n) {
    return be.current.useReducer(e, t, n)
};
V.useRef = function (e) {
    return be.current.useRef(e)
};
V.useState = function (e) {
    return be.current.useState(e)
};
V.useSyncExternalStore = function (e, t, n) {
    return be.current.useSyncExternalStore(e, t, n)
};
V.useTransition = function () {
    return be.current.useTransition()
};
V.version = "18.3.1";
zf.exports = V;
var k = zf.exports;
const Vt = G0(k),
    ug = K0({
        __proto__: null,
        default: Vt
    }, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cg = k,
    dg = Symbol.for("react.element"),
    fg = Symbol.for("react.fragment"),
    hg = Object.prototype.hasOwnProperty,
    pg = cg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    mg = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Gf(e, t, n) {
    var r, i = {},
        s = null,
        o = null;
    n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (o = t.ref);
    for (r in t) hg.call(t, r) && !mg.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: dg,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: pg.current
    }
}
Ys.Fragment = fg;
Ys.jsx = Gf;
Ys.jsxs = Gf;
Ff.exports = Ys;
var u = Ff.exports,
    Yf = {
        exports: {}
    },
    Fe = {},
    Xf = {
        exports: {}
    },
    Qf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (e) {
    function t(E, L) {
        var A = E.length;
        E.push(L);
        e: for (; 0 < A;) {
            var K = A - 1 >>> 1,
                B = E[K];
            if (0 < i(B, L)) E[K] = L, E[A] = B, A = K;
            else break e
        }
    }

    function n(E) {
        return E.length === 0 ? null : E[0]
    }

    function r(E) {
        if (E.length === 0) return null;
        var L = E[0],
            A = E.pop();
        if (A !== L) {
            E[0] = A;
            e: for (var K = 0, B = E.length, Ye = B >>> 1; K < Ye;) {
                var ft = 2 * (K + 1) - 1,
                    Pn = E[ft],
                    ht = ft + 1,
                    En = E[ht];
                if (0 > i(Pn, A)) ht < B && 0 > i(En, Pn) ? (E[K] = En, E[ht] = A, K = ht) : (E[K] = Pn, E[ft] = A, K = ft);
                else if (ht < B && 0 > i(En, A)) E[K] = En, E[ht] = A, K = ht;
                else break e
            }
        }
        return L
    }

    function i(E, L) {
        var A = E.sortIndex - L.sortIndex;
        return A !== 0 ? A : E.id - L.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function () {
            return s.now()
        }
    } else {
        var o = Date,
            a = o.now();
        e.unstable_now = function () {
            return o.now() - a
        }
    }
    var l = [],
        c = [],
        d = 1,
        f = null,
        h = 3,
        m = !1,
        v = !1,
        w = !1,
        S = typeof setTimeout == "function" ? setTimeout : null,
        g = typeof clearTimeout == "function" ? clearTimeout : null,
        p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function y(E) {
        for (var L = n(c); L !== null;) {
            if (L.callback === null) r(c);
            else if (L.startTime <= E) r(c), L.sortIndex = L.expirationTime, t(l, L);
            else break;
            L = n(c)
        }
    }

    function x(E) {
        if (w = !1, y(E), !v)
            if (n(l) !== null) v = !0, Tn(C);
            else {
                var L = n(c);
                L !== null && te(x, L.startTime - E)
            }
    }

    function C(E, L) {
        v = !1, w && (w = !1, g(j), j = -1), m = !0;
        var A = h;
        try {
            for (y(L), f = n(l); f !== null && (!(f.expirationTime > L) || E && !D());) {
                var K = f.callback;
                if (typeof K == "function") {
                    f.callback = null, h = f.priorityLevel;
                    var B = K(f.expirationTime <= L);
                    L = e.unstable_now(), typeof B == "function" ? f.callback = B : f === n(l) && r(l), y(L)
                } else r(l);
                f = n(l)
            }
            if (f !== null) var Ye = !0;
            else {
                var ft = n(c);
                ft !== null && te(x, ft.startTime - L), Ye = !1
            }
            return Ye
        } finally {
            f = null, h = A, m = !1
        }
    }
    var T = !1,
        b = null,
        j = -1,
        $ = 5,
        N = -1;

    function D() {
        return !(e.unstable_now() - N < $)
    }

    function O() {
        if (b !== null) {
            var E = e.unstable_now();
            N = E;
            var L = !0;
            try {
                L = b(!0, E)
            } finally {
                L ? I() : (T = !1, b = null)
            }
        } else T = !1
    }
    var I;
    if (typeof p == "function") I = function () {
        p(O)
    };
    else if (typeof MessageChannel < "u") {
        var je = new MessageChannel,
            dt = je.port2;
        je.port1.onmessage = O, I = function () {
            dt.postMessage(null)
        }
    } else I = function () {
        S(O, 0)
    };

    function Tn(E) {
        b = E, T || (T = !0, I())
    }

    function te(E, L) {
        j = S(function () {
            E(e.unstable_now())
        }, L)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (E) {
        E.callback = null
    }, e.unstable_continueExecution = function () {
        v || m || (v = !0, Tn(C))
    }, e.unstable_forceFrameRate = function (E) {
        0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $ = 0 < E ? Math.floor(1e3 / E) : 5
    }, e.unstable_getCurrentPriorityLevel = function () {
        return h
    }, e.unstable_getFirstCallbackNode = function () {
        return n(l)
    }, e.unstable_next = function (E) {
        switch (h) {
            case 1:
            case 2:
            case 3:
                var L = 3;
                break;
            default:
                L = h
        }
        var A = h;
        h = L;
        try {
            return E()
        } finally {
            h = A
        }
    }, e.unstable_pauseExecution = function () { }, e.unstable_requestPaint = function () { }, e.unstable_runWithPriority = function (E, L) {
        switch (E) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                E = 3
        }
        var A = h;
        h = E;
        try {
            return L()
        } finally {
            h = A
        }
    }, e.unstable_scheduleCallback = function (E, L, A) {
        var K = e.unstable_now();
        switch (typeof A == "object" && A !== null ? (A = A.delay, A = typeof A == "number" && 0 < A ? K + A : K) : A = K, E) {
            case 1:
                var B = -1;
                break;
            case 2:
                B = 250;
                break;
            case 5:
                B = 1073741823;
                break;
            case 4:
                B = 1e4;
                break;
            default:
                B = 5e3
        }
        return B = A + B, E = {
            id: d++,
            callback: L,
            priorityLevel: E,
            startTime: A,
            expirationTime: B,
            sortIndex: -1
        }, A > K ? (E.sortIndex = A, t(c, E), n(l) === null && E === n(c) && (w ? (g(j), j = -1) : w = !0, te(x, A - K))) : (E.sortIndex = B, t(l, E), v || m || (v = !0, Tn(C))), E
    }, e.unstable_shouldYield = D, e.unstable_wrapCallback = function (E) {
        var L = h;
        return function () {
            var A = h;
            h = L;
            try {
                return E.apply(this, arguments)
            } finally {
                h = A
            }
        }
    }
})(Qf);
Xf.exports = Qf;
var gg = Xf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yg = k,
    Ve = gg;

function P(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Zf = new Set,
    Wr = {};

function wn(e, t) {
    tr(e, t), tr(e + "Capture", t)
}

function tr(e, t) {
    for (Wr[e] = t, e = 0; e < t.length; e++) Zf.add(t[e])
}
var xt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    ra = Object.prototype.hasOwnProperty,
    vg = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    nc = {},
    rc = {};

function xg(e) {
    return ra.call(rc, e) ? !0 : ra.call(nc, e) ? !1 : vg.test(e) ? rc[e] = !0 : (nc[e] = !0, !1)
}

function wg(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function kg(e, t, n, r) {
    if (t === null || typeof t > "u" || wg(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function Ce(e, t, n, r, i, s, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = o
}
var pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    pe[e] = new Ce(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function (e) {
    var t = e[0];
    pe[t] = new Ce(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    pe[e] = new Ce(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    pe[e] = new Ce(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
    pe[e] = new Ce(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    pe[e] = new Ce(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function (e) {
    pe[e] = new Ce(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (e) {
    pe[e] = new Ce(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function (e) {
    pe[e] = new Ce(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Cl = /[\-:]([a-z])/g;

function jl(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
    var t = e.replace(Cl, jl);
    pe[t] = new Ce(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(Cl, jl);
    pe[t] = new Ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Cl, jl);
    pe[t] = new Ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    pe[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
pe.xlinkHref = new Ce("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    pe[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Nl(e, t, n, r) {
    var i = pe.hasOwnProperty(t) ? pe[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (kg(t, n, i, r) && (n = null), r || i === null ? xg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var jt = yg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Pi = Symbol.for("react.element"),
    Rn = Symbol.for("react.portal"),
    $n = Symbol.for("react.fragment"),
    Tl = Symbol.for("react.strict_mode"),
    ia = Symbol.for("react.profiler"),
    qf = Symbol.for("react.provider"),
    Jf = Symbol.for("react.context"),
    Pl = Symbol.for("react.forward_ref"),
    sa = Symbol.for("react.suspense"),
    oa = Symbol.for("react.suspense_list"),
    El = Symbol.for("react.memo"),
    Pt = Symbol.for("react.lazy"),
    eh = Symbol.for("react.offscreen"),
    ic = Symbol.iterator;

function gr(e) {
    return e === null || typeof e != "object" ? null : (e = ic && e[ic] || e["@@iterator"], typeof e == "function" ? e : null)
}
var q = Object.assign,
    yo;

function jr(e) {
    if (yo === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        yo = t && t[1] || ""
    }
    return `
` + yo + e
}
var vo = !1;

function xo(e, t) {
    if (!e || vo) return "";
    vo = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function () {
                throw Error()
            }, Object.defineProperty(t.prototype, "props", {
                set: function () {
                    throw Error()
                }
            }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    r = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var i = c.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, a = s.length - 1; 1 <= o && 0 <= a && i[o] !== s[a];) a--;
            for (; 1 <= o && 0 <= a; o--, a--)
                if (i[o] !== s[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if (o--, a--, 0 > a || i[o] !== s[a]) {
                                var l = `
` + i[o].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
                            } while (1 <= o && 0 <= a);
                    break
                }
        }
    } finally {
        vo = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? jr(e) : ""
}

function Sg(e) {
    switch (e.tag) {
        case 5:
            return jr(e.type);
        case 16:
            return jr("Lazy");
        case 13:
            return jr("Suspense");
        case 19:
            return jr("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = xo(e.type, !1), e;
        case 11:
            return e = xo(e.type.render, !1), e;
        case 1:
            return e = xo(e.type, !0), e;
        default:
            return ""
    }
}

function aa(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case $n:
            return "Fragment";
        case Rn:
            return "Portal";
        case ia:
            return "Profiler";
        case Tl:
            return "StrictMode";
        case sa:
            return "Suspense";
        case oa:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Jf:
            return (e.displayName || "Context") + ".Consumer";
        case qf:
            return (e._context.displayName || "Context") + ".Provider";
        case Pl:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case El:
            return t = e.displayName || null, t !== null ? t : aa(e.type) || "Memo";
        case Pt:
            t = e._payload, e = e._init;
            try {
                return aa(e(t))
            } catch { }
    }
    return null
}

function bg(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return aa(t);
        case 8:
            return t === Tl ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function Gt(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function th(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function Cg(e) {
    var t = th(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get,
            s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
                return i.call(this)
            },
            set: function (o) {
                r = "" + o, s.call(this, o)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function () {
                return r
            },
            setValue: function (o) {
                r = "" + o
            },
            stopTracking: function () {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function Ei(e) {
    e._valueTracker || (e._valueTracker = Cg(e))
}

function nh(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = th(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function fs(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function la(e, t) {
    var n = t.checked;
    return q({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function sc(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = Gt(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function rh(e, t) {
    t = t.checked, t != null && Nl(e, "checked", t, !1)
}

function ua(e, t) {
    rh(e, t);
    var n = Gt(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ca(e, t.type, n) : t.hasOwnProperty("defaultValue") && ca(e, t.type, Gt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function oc(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function ca(e, t, n) {
    (t !== "number" || fs(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Nr = Array.isArray;

function Xn(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Gt(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0, r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}

function da(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
    return q({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function ac(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(P(92));
            if (Nr(n)) {
                if (1 < n.length) throw Error(P(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: Gt(n)
    }
}

function ih(e, t) {
    var n = Gt(t.value),
        r = Gt(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function lc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function sh(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function fa(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? sh(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Mi, oh = function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i)
        })
    } : e
}(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (Mi = Mi || document.createElement("div"), Mi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Mi.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Hr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Mr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
},
    jg = ["Webkit", "ms", "Moz", "O"];
Object.keys(Mr).forEach(function (e) {
    jg.forEach(function (t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Mr[t] = Mr[e]
    })
});

function ah(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Mr.hasOwnProperty(e) && Mr[e] ? ("" + t).trim() : t + "px"
}

function lh(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = ah(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
        }
}
var Ng = q({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function ha(e, t) {
    if (t) {
        if (Ng[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(P(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(P(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(P(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(P(62))
    }
}

function pa(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var ma = null;

function Ml(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var ga = null,
    Qn = null,
    Zn = null;

function uc(e) {
    if (e = xi(e)) {
        if (typeof ga != "function") throw Error(P(280));
        var t = e.stateNode;
        t && (t = Js(t), ga(e.stateNode, e.type, t))
    }
}

function uh(e) {
    Qn ? Zn ? Zn.push(e) : Zn = [e] : Qn = e
}

function ch() {
    if (Qn) {
        var e = Qn,
            t = Zn;
        if (Zn = Qn = null, uc(e), t)
            for (e = 0; e < t.length; e++) uc(t[e])
    }
}

function dh(e, t) {
    return e(t)
}

function fh() { }
var wo = !1;

function hh(e, t, n) {
    if (wo) return e(t, n);
    wo = !0;
    try {
        return dh(e, t, n)
    } finally {
        wo = !1, (Qn !== null || Zn !== null) && (fh(), ch())
    }
}

function Kr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Js(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(P(231, t, typeof n));
    return n
}
var ya = !1;
if (xt) try {
    var yr = {};
    Object.defineProperty(yr, "passive", {
        get: function () {
            ya = !0
        }
    }), window.addEventListener("test", yr, yr), window.removeEventListener("test", yr, yr)
} catch {
    ya = !1
}

function Tg(e, t, n, r, i, s, o, a, l) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (d) {
        this.onError(d)
    }
}
var Lr = !1,
    hs = null,
    ps = !1,
    va = null,
    Pg = {
        onError: function (e) {
            Lr = !0, hs = e
        }
    };

function Eg(e, t, n, r, i, s, o, a, l) {
    Lr = !1, hs = null, Tg.apply(Pg, arguments)
}

function Mg(e, t, n, r, i, s, o, a, l) {
    if (Eg.apply(this, arguments), Lr) {
        if (Lr) {
            var c = hs;
            Lr = !1, hs = null
        } else throw Error(P(198));
        ps || (ps = !0, va = c)
    }
}

function kn(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function ph(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function cc(e) {
    if (kn(e) !== e) throw Error(P(188))
}

function Lg(e) {
    var t = e.alternate;
    if (!t) {
        if (t = kn(e), t === null) throw Error(P(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ;) {
        var i = n.return;
        if (i === null) break;
        var s = i.alternate;
        if (s === null) {
            if (r = i.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === s.child) {
            for (s = i.child; s;) {
                if (s === n) return cc(i), e;
                if (s === r) return cc(i), t;
                s = s.sibling
            }
            throw Error(P(188))
        }
        if (n.return !== r.return) n = i, r = s;
        else {
            for (var o = !1, a = i.child; a;) {
                if (a === n) {
                    o = !0, n = i, r = s;
                    break
                }
                if (a === r) {
                    o = !0, r = i, n = s;
                    break
                }
                a = a.sibling
            }
            if (!o) {
                for (a = s.child; a;) {
                    if (a === n) {
                        o = !0, n = s, r = i;
                        break
                    }
                    if (a === r) {
                        o = !0, r = s, n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!o) throw Error(P(189))
            }
        }
        if (n.alternate !== r) throw Error(P(190))
    }
    if (n.tag !== 3) throw Error(P(188));
    return n.stateNode.current === n ? e : t
}

function mh(e) {
    return e = Lg(e), e !== null ? gh(e) : null
}

function gh(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = gh(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var yh = Ve.unstable_scheduleCallback,
    dc = Ve.unstable_cancelCallback,
    Rg = Ve.unstable_shouldYield,
    $g = Ve.unstable_requestPaint,
    re = Ve.unstable_now,
    Ag = Ve.unstable_getCurrentPriorityLevel,
    Ll = Ve.unstable_ImmediatePriority,
    vh = Ve.unstable_UserBlockingPriority,
    ms = Ve.unstable_NormalPriority,
    Dg = Ve.unstable_LowPriority,
    xh = Ve.unstable_IdlePriority,
    Xs = null,
    ot = null;

function Vg(e) {
    if (ot && typeof ot.onCommitFiberRoot == "function") try {
        ot.onCommitFiberRoot(Xs, e, void 0, (e.current.flags & 128) === 128)
    } catch { }
}
var et = Math.clz32 ? Math.clz32 : _g,
    Fg = Math.log,
    zg = Math.LN2;

function _g(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Fg(e) / zg | 0) | 0
}
var Li = 64,
    Ri = 4194304;

function Tr(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function gs(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = e.suspendedLanes,
        s = e.pingedLanes,
        o = n & 268435455;
    if (o !== 0) {
        var a = o & ~i;
        a !== 0 ? r = Tr(a) : (s &= o, s !== 0 && (r = Tr(s)))
    } else o = n & ~i, o !== 0 ? r = Tr(o) : s !== 0 && (r = Tr(s));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, s = t & -t, i >= s || i === 16 && (s & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - et(t), i = 1 << n, r |= e[n], t &= ~i;
    return r
}

function Og(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function Ig(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s;) {
        var o = 31 - et(s),
            a = 1 << o,
            l = i[o];
        l === -1 ? (!(a & n) || a & r) && (i[o] = Og(a, t)) : l <= t && (e.expiredLanes |= a), s &= ~a
    }
}

function xa(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function wh() {
    var e = Li;
    return Li <<= 1, !(Li & 4194240) && (Li = 64), e
}

function ko(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function yi(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - et(t), e[t] = n
}

function Bg(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var i = 31 - et(n),
            s = 1 << i;
        t[i] = 0, r[i] = -1, e[i] = -1, n &= ~s
    }
}

function Rl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - et(n),
            i = 1 << r;
        i & t | e[r] & t && (e[r] |= t), n &= ~i
    }
}
var _ = 0;

function kh(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Sh, $l, bh, Ch, jh, wa = !1,
    $i = [],
    Ft = null,
    zt = null,
    _t = null,
    Gr = new Map,
    Yr = new Map,
    Mt = [],
    Ug = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function fc(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Ft = null;
            break;
        case "dragenter":
        case "dragleave":
            zt = null;
            break;
        case "mouseover":
        case "mouseout":
            _t = null;
            break;
        case "pointerover":
        case "pointerout":
            Gr.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Yr.delete(t.pointerId)
    }
}

function vr(e, t, n, r, i, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i]
    }, t !== null && (t = xi(t), t !== null && $l(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
}

function Wg(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return Ft = vr(Ft, e, t, n, r, i), !0;
        case "dragenter":
            return zt = vr(zt, e, t, n, r, i), !0;
        case "mouseover":
            return _t = vr(_t, e, t, n, r, i), !0;
        case "pointerover":
            var s = i.pointerId;
            return Gr.set(s, vr(Gr.get(s) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return s = i.pointerId, Yr.set(s, vr(Yr.get(s) || null, e, t, n, r, i)), !0
    }
    return !1
}

function Nh(e) {
    var t = on(e.target);
    if (t !== null) {
        var n = kn(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = ph(n), t !== null) {
                    e.blockedOn = t, jh(e.priority, function () {
                        bh(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Qi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = ka(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            ma = r, n.target.dispatchEvent(r), ma = null
        } else return t = xi(n), t !== null && $l(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function hc(e, t, n) {
    Qi(e) && n.delete(t)
}

function Hg() {
    wa = !1, Ft !== null && Qi(Ft) && (Ft = null), zt !== null && Qi(zt) && (zt = null), _t !== null && Qi(_t) && (_t = null), Gr.forEach(hc), Yr.forEach(hc)
}

function xr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, wa || (wa = !0, Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority, Hg)))
}

function Xr(e) {
    function t(i) {
        return xr(i, e)
    }
    if (0 < $i.length) {
        xr($i[0], e);
        for (var n = 1; n < $i.length; n++) {
            var r = $i[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Ft !== null && xr(Ft, e), zt !== null && xr(zt, e), _t !== null && xr(_t, e), Gr.forEach(t), Yr.forEach(t), n = 0; n < Mt.length; n++) r = Mt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Mt.length && (n = Mt[0], n.blockedOn === null);) Nh(n), n.blockedOn === null && Mt.shift()
}
var qn = jt.ReactCurrentBatchConfig,
    ys = !0;

function Kg(e, t, n, r) {
    var i = _,
        s = qn.transition;
    qn.transition = null;
    try {
        _ = 1, Al(e, t, n, r)
    } finally {
        _ = i, qn.transition = s
    }
}

function Gg(e, t, n, r) {
    var i = _,
        s = qn.transition;
    qn.transition = null;
    try {
        _ = 4, Al(e, t, n, r)
    } finally {
        _ = i, qn.transition = s
    }
}

function Al(e, t, n, r) {
    if (ys) {
        var i = ka(e, t, n, r);
        if (i === null) Lo(e, t, r, vs, n), fc(e, r);
        else if (Wg(i, e, t, n, r)) r.stopPropagation();
        else if (fc(e, r), t & 4 && -1 < Ug.indexOf(e)) {
            for (; i !== null;) {
                var s = xi(i);
                if (s !== null && Sh(s), s = ka(e, t, n, r), s === null && Lo(e, t, r, vs, n), s === i) break;
                i = s
            }
            i !== null && r.stopPropagation()
        } else Lo(e, t, r, null, n)
    }
}
var vs = null;

function ka(e, t, n, r) {
    if (vs = null, e = Ml(r), e = on(e), e !== null)
        if (t = kn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
            if (e = ph(t), e !== null) return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else t !== e && (e = null);
    return vs = e, null
}

function Th(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Ag()) {
                case Ll:
                    return 1;
                case vh:
                    return 4;
                case ms:
                case Dg:
                    return 16;
                case xh:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Rt = null,
    Dl = null,
    Zi = null;

function Ph() {
    if (Zi) return Zi;
    var e, t = Dl,
        n = t.length,
        r, i = "value" in Rt ? Rt.value : Rt.textContent,
        s = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
    return Zi = i.slice(e, 1 < r ? 1 - r : void 0)
}

function qi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Ai() {
    return !0
}

function pc() {
    return !1
}

function ze(e) {
    function t(n, r, i, s, o) {
        this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = s, this.target = o, this.currentTarget = null;
        for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(s) : s[a]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Ai : pc, this.isPropagationStopped = pc, this
    }
    return q(t.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ai)
        },
        stopPropagation: function () {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ai)
        },
        persist: function () { },
        isPersistent: Ai
    }), t
}
var dr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
},
    Vl = ze(dr),
    vi = q({}, dr, {
        view: 0,
        detail: 0
    }),
    Yg = ze(vi),
    So, bo, wr, Qs = q({}, vi, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Fl,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function (e) {
            return "movementX" in e ? e.movementX : (e !== wr && (wr && e.type === "mousemove" ? (So = e.screenX - wr.screenX, bo = e.screenY - wr.screenY) : bo = So = 0, wr = e), So)
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : bo
        }
    }),
    mc = ze(Qs),
    Xg = q({}, Qs, {
        dataTransfer: 0
    }),
    Qg = ze(Xg),
    Zg = q({}, vi, {
        relatedTarget: 0
    }),
    Co = ze(Zg),
    qg = q({}, dr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Jg = ze(qg),
    ey = q({}, dr, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    ty = ze(ey),
    ny = q({}, dr, {
        data: 0
    }),
    gc = ze(ny),
    ry = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    iy = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    sy = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function oy(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = sy[e]) ? !!t[e] : !1
}

function Fl() {
    return oy
}
var ay = q({}, vi, {
    key: function (e) {
        if (e.key) {
            var t = ry[e.key] || e.key;
            if (t !== "Unidentified") return t
        }
        return e.type === "keypress" ? (e = qi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? iy[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Fl,
    charCode: function (e) {
        return e.type === "keypress" ? qi(e) : 0
    },
    keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function (e) {
        return e.type === "keypress" ? qi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
}),
    ly = ze(ay),
    uy = q({}, Qs, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    yc = ze(uy),
    cy = q({}, vi, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Fl
    }),
    dy = ze(cy),
    fy = q({}, dr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    hy = ze(fy),
    py = q({}, Qs, {
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function (e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    my = ze(py),
    gy = [9, 13, 27, 32],
    zl = xt && "CompositionEvent" in window,
    Rr = null;
xt && "documentMode" in document && (Rr = document.documentMode);
var yy = xt && "TextEvent" in window && !Rr,
    Eh = xt && (!zl || Rr && 8 < Rr && 11 >= Rr),
    vc = " ",
    xc = !1;

function Mh(e, t) {
    switch (e) {
        case "keyup":
            return gy.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Lh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var An = !1;

function vy(e, t) {
    switch (e) {
        case "compositionend":
            return Lh(t);
        case "keypress":
            return t.which !== 32 ? null : (xc = !0, vc);
        case "textInput":
            return e = t.data, e === vc && xc ? null : e;
        default:
            return null
    }
}

function xy(e, t) {
    if (An) return e === "compositionend" || !zl && Mh(e, t) ? (e = Ph(), Zi = Dl = Rt = null, An = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Eh && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var wy = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function wc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!wy[e.type] : t === "textarea"
}

function Rh(e, t, n, r) {
    uh(r), t = xs(t, "onChange"), 0 < t.length && (n = new Vl("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var $r = null,
    Qr = null;

function ky(e) {
    Uh(e, 0)
}

function Zs(e) {
    var t = Fn(e);
    if (nh(t)) return e
}

function Sy(e, t) {
    if (e === "change") return t
}
var $h = !1;
if (xt) {
    var jo;
    if (xt) {
        var No = "oninput" in document;
        if (!No) {
            var kc = document.createElement("div");
            kc.setAttribute("oninput", "return;"), No = typeof kc.oninput == "function"
        }
        jo = No
    } else jo = !1;
    $h = jo && (!document.documentMode || 9 < document.documentMode)
}

function Sc() {
    $r && ($r.detachEvent("onpropertychange", Ah), Qr = $r = null)
}

function Ah(e) {
    if (e.propertyName === "value" && Zs(Qr)) {
        var t = [];
        Rh(t, Qr, e, Ml(e)), hh(ky, t)
    }
}

function by(e, t, n) {
    e === "focusin" ? (Sc(), $r = t, Qr = n, $r.attachEvent("onpropertychange", Ah)) : e === "focusout" && Sc()
}

function Cy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Zs(Qr)
}

function jy(e, t) {
    if (e === "click") return Zs(t)
}

function Ny(e, t) {
    if (e === "input" || e === "change") return Zs(t)
}

function Ty(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var nt = typeof Object.is == "function" ? Object.is : Ty;

function Zr(e, t) {
    if (nt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!ra.call(t, i) || !nt(e[i], t[i])) return !1
    }
    return !0
}

function bc(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Cc(e, t) {
    var n = bc(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = bc(n)
    }
}

function Dh(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Dh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Vh() {
    for (var e = window, t = fs(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = fs(e.document)
    }
    return t
}

function _l(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function Py(e) {
    var t = Vh(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Dh(n.ownerDocument.documentElement, n)) {
        if (r !== null && _l(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length,
                    s = Math.min(r.start, i);
                r = r.end === void 0 ? s : Math.min(r.end, i), !e.extend && s > r && (i = r, r = s, s = i), i = Cc(n, s);
                var o = Cc(n, r);
                i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var Ey = xt && "documentMode" in document && 11 >= document.documentMode,
    Dn = null,
    Sa = null,
    Ar = null,
    ba = !1;

function jc(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ba || Dn == null || Dn !== fs(r) || (r = Dn, "selectionStart" in r && _l(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Ar && Zr(Ar, r) || (Ar = r, r = xs(Sa, "onSelect"), 0 < r.length && (t = new Vl("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = Dn)))
}

function Di(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Vn = {
    animationend: Di("Animation", "AnimationEnd"),
    animationiteration: Di("Animation", "AnimationIteration"),
    animationstart: Di("Animation", "AnimationStart"),
    transitionend: Di("Transition", "TransitionEnd")
},
    To = {},
    Fh = {};
xt && (Fh = document.createElement("div").style, "AnimationEvent" in window || (delete Vn.animationend.animation, delete Vn.animationiteration.animation, delete Vn.animationstart.animation), "TransitionEvent" in window || delete Vn.transitionend.transition);

function qs(e) {
    if (To[e]) return To[e];
    if (!Vn[e]) return e;
    var t = Vn[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Fh) return To[e] = t[n];
    return e
}
var zh = qs("animationend"),
    _h = qs("animationiteration"),
    Oh = qs("animationstart"),
    Ih = qs("transitionend"),
    Bh = new Map,
    Nc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Zt(e, t) {
    Bh.set(e, t), wn(t, [e])
}
for (var Po = 0; Po < Nc.length; Po++) {
    var Eo = Nc[Po],
        My = Eo.toLowerCase(),
        Ly = Eo[0].toUpperCase() + Eo.slice(1);
    Zt(My, "on" + Ly)
}
Zt(zh, "onAnimationEnd");
Zt(_h, "onAnimationIteration");
Zt(Oh, "onAnimationStart");
Zt("dblclick", "onDoubleClick");
Zt("focusin", "onFocus");
Zt("focusout", "onBlur");
Zt(Ih, "onTransitionEnd");
tr("onMouseEnter", ["mouseout", "mouseover"]);
tr("onMouseLeave", ["mouseout", "mouseover"]);
tr("onPointerEnter", ["pointerout", "pointerover"]);
tr("onPointerLeave", ["pointerout", "pointerover"]);
wn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
wn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
wn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
wn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
wn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
wn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Pr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Ry = new Set("cancel close invalid load scroll toggle".split(" ").concat(Pr));

function Tc(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Mg(r, t, void 0, e), e.currentTarget = null
}

function Uh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var a = r[o],
                        l = a.instance,
                        c = a.currentTarget;
                    if (a = a.listener, l !== s && i.isPropagationStopped()) break e;
                    Tc(i, a, c), s = l
                } else
                for (o = 0; o < r.length; o++) {
                    if (a = r[o], l = a.instance, c = a.currentTarget, a = a.listener, l !== s && i.isPropagationStopped()) break e;
                    Tc(i, a, c), s = l
                }
        }
    }
    if (ps) throw e = va, ps = !1, va = null, e
}

function W(e, t) {
    var n = t[Pa];
    n === void 0 && (n = t[Pa] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Wh(t, e, 2, !1), n.add(r))
}

function Mo(e, t, n) {
    var r = 0;
    t && (r |= 4), Wh(n, e, r, t)
}
var Vi = "_reactListening" + Math.random().toString(36).slice(2);

function qr(e) {
    if (!e[Vi]) {
        e[Vi] = !0, Zf.forEach(function (n) {
            n !== "selectionchange" && (Ry.has(n) || Mo(n, !1, e), Mo(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Vi] || (t[Vi] = !0, Mo("selectionchange", !1, t))
    }
}

function Wh(e, t, n, r) {
    switch (Th(t)) {
        case 1:
            var i = Kg;
            break;
        case 4:
            i = Gg;
            break;
        default:
            i = Al
    }
    n = i.bind(null, t, n, e), i = void 0, !ya || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}

function Lo(e, t, n, r, i) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (; ;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
            var a = r.stateNode.containerInfo;
            if (a === i || a.nodeType === 8 && a.parentNode === i) break;
            if (o === 4)
                for (o = r.return; o !== null;) {
                    var l = o.tag;
                    if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;
                    o = o.return
                }
            for (; a !== null;) {
                if (o = on(a), o === null) return;
                if (l = o.tag, l === 5 || l === 6) {
                    r = s = o;
                    continue e
                }
                a = a.parentNode
            }
        }
        r = r.return
    }
    hh(function () {
        var c = s,
            d = Ml(n),
            f = [];
        e: {
            var h = Bh.get(e);
            if (h !== void 0) {
                var m = Vl,
                    v = e;
                switch (e) {
                    case "keypress":
                        if (qi(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        m = ly;
                        break;
                    case "focusin":
                        v = "focus", m = Co;
                        break;
                    case "focusout":
                        v = "blur", m = Co;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        m = Co;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        m = mc;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        m = Qg;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        m = dy;
                        break;
                    case zh:
                    case _h:
                    case Oh:
                        m = Jg;
                        break;
                    case Ih:
                        m = hy;
                        break;
                    case "scroll":
                        m = Yg;
                        break;
                    case "wheel":
                        m = my;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        m = ty;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        m = yc
                }
                var w = (t & 4) !== 0,
                    S = !w && e === "scroll",
                    g = w ? h !== null ? h + "Capture" : null : h;
                w = [];
                for (var p = c, y; p !== null;) {
                    y = p;
                    var x = y.stateNode;
                    if (y.tag === 5 && x !== null && (y = x, g !== null && (x = Kr(p, g), x != null && w.push(Jr(p, x, y)))), S) break;
                    p = p.return
                }
                0 < w.length && (h = new m(h, v, null, n, d), f.push({
                    event: h,
                    listeners: w
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover", m = e === "mouseout" || e === "pointerout", h && n !== ma && (v = n.relatedTarget || n.fromElement) && (on(v) || v[wt])) break e;
                if ((m || h) && (h = d.window === d ? d : (h = d.ownerDocument) ? h.defaultView || h.parentWindow : window, m ? (v = n.relatedTarget || n.toElement, m = c, v = v ? on(v) : null, v !== null && (S = kn(v), v !== S || v.tag !== 5 && v.tag !== 6) && (v = null)) : (m = null, v = c), m !== v)) {
                    if (w = mc, x = "onMouseLeave", g = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (w = yc, x = "onPointerLeave", g = "onPointerEnter", p = "pointer"), S = m == null ? h : Fn(m), y = v == null ? h : Fn(v), h = new w(x, p + "leave", m, n, d), h.target = S, h.relatedTarget = y, x = null, on(d) === c && (w = new w(g, p + "enter", v, n, d), w.target = y, w.relatedTarget = S, x = w), S = x, m && v) t: {
                        for (w = m, g = v, p = 0, y = w; y; y = Mn(y)) p++;
                        for (y = 0, x = g; x; x = Mn(x)) y++;
                        for (; 0 < p - y;) w = Mn(w),
                            p--;
                        for (; 0 < y - p;) g = Mn(g),
                            y--;
                        for (; p--;) {
                            if (w === g || g !== null && w === g.alternate) break t;
                            w = Mn(w), g = Mn(g)
                        }
                        w = null
                    }
                    else w = null;
                    m !== null && Pc(f, h, m, w, !1), v !== null && S !== null && Pc(f, S, v, w, !0)
                }
            }
            e: {
                if (h = c ? Fn(c) : window, m = h.nodeName && h.nodeName.toLowerCase(), m === "select" || m === "input" && h.type === "file") var C = Sy;
                else if (wc(h))
                    if ($h) C = Ny;
                    else {
                        C = Cy;
                        var T = by
                    }
                else (m = h.nodeName) && m.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (C = jy);
                if (C && (C = C(e, c))) {
                    Rh(f, C, n, d);
                    break e
                }
                T && T(e, h, c),
                    e === "focusout" && (T = h._wrapperState) && T.controlled && h.type === "number" && ca(h, "number", h.value)
            }
            switch (T = c ? Fn(c) : window, e) {
                case "focusin":
                    (wc(T) || T.contentEditable === "true") && (Dn = T, Sa = c, Ar = null);
                    break;
                case "focusout":
                    Ar = Sa = Dn = null;
                    break;
                case "mousedown":
                    ba = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    ba = !1, jc(f, n, d);
                    break;
                case "selectionchange":
                    if (Ey) break;
                case "keydown":
                case "keyup":
                    jc(f, n, d)
            }
            var b;
            if (zl) e: {
                switch (e) {
                    case "compositionstart":
                        var j = "onCompositionStart";
                        break e;
                    case "compositionend":
                        j = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        j = "onCompositionUpdate";
                        break e
                }
                j = void 0
            }
            else An ? Mh(e, n) && (j = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart"); j && (Eh && n.locale !== "ko" && (An || j !== "onCompositionStart" ? j === "onCompositionEnd" && An && (b = Ph()) : (Rt = d, Dl = "value" in Rt ? Rt.value : Rt.textContent, An = !0)), T = xs(c, j), 0 < T.length && (j = new gc(j, e, null, n, d), f.push({
                event: j,
                listeners: T
            }), b ? j.data = b : (b = Lh(n), b !== null && (j.data = b)))),
                (b = yy ? vy(e, n) : xy(e, n)) && (c = xs(c, "onBeforeInput"), 0 < c.length && (d = new gc("onBeforeInput", "beforeinput", null, n, d), f.push({
                    event: d,
                    listeners: c
                }), d.data = b))
        }
        Uh(f, t)
    })
}

function Jr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function xs(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var i = e,
            s = i.stateNode;
        i.tag === 5 && s !== null && (i = s, s = Kr(e, n), s != null && r.unshift(Jr(e, s, i)), s = Kr(e, t), s != null && r.push(Jr(e, s, i))), e = e.return
    }
    return r
}

function Mn(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Pc(e, t, n, r, i) {
    for (var s = t._reactName, o = []; n !== null && n !== r;) {
        var a = n,
            l = a.alternate,
            c = a.stateNode;
        if (l !== null && l === r) break;
        a.tag === 5 && c !== null && (a = c, i ? (l = Kr(n, s), l != null && o.unshift(Jr(n, l, a))) : i || (l = Kr(n, s), l != null && o.push(Jr(n, l, a)))), n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var $y = /\r\n?/g,
    Ay = /\u0000|\uFFFD/g;

function Ec(e) {
    return (typeof e == "string" ? e : "" + e).replace($y, `
`).replace(Ay, "")
}

function Fi(e, t, n) {
    if (t = Ec(t), Ec(e) !== t && n) throw Error(P(425))
}

function ws() { }
var Ca = null,
    ja = null;

function Na(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Ta = typeof setTimeout == "function" ? setTimeout : void 0,
    Dy = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Mc = typeof Promise == "function" ? Promise : void 0,
    Vy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Mc < "u" ? function (e) {
        return Mc.resolve(null).then(e).catch(Fy)
    } : Ta;

function Fy(e) {
    setTimeout(function () {
        throw e
    })
}

function Ro(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n), i && i.nodeType === 8)
            if (n = i.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(i), Xr(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Xr(t)
}

function Ot(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Lc(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var fr = Math.random().toString(36).slice(2),
    st = "__reactFiber$" + fr,
    ei = "__reactProps$" + fr,
    wt = "__reactContainer$" + fr,
    Pa = "__reactEvents$" + fr,
    zy = "__reactListeners$" + fr,
    _y = "__reactHandles$" + fr;

function on(e) {
    var t = e[st];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[wt] || n[st]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = Lc(e); e !== null;) {
                    if (n = e[st]) return n;
                    e = Lc(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function xi(e) {
    return e = e[st] || e[wt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Fn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(P(33))
}

function Js(e) {
    return e[ei] || null
}
var Ea = [],
    zn = -1;

function qt(e) {
    return {
        current: e
    }
}

function H(e) {
    0 > zn || (e.current = Ea[zn], Ea[zn] = null, zn--)
}

function U(e, t) {
    zn++, Ea[zn] = e.current, e.current = t
}
var Yt = {},
    xe = qt(Yt),
    Ee = qt(!1),
    mn = Yt;

function nr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Yt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        s;
    for (s in n) i[s] = t[s];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
}

function Me(e) {
    return e = e.childContextTypes, e != null
}

function ks() {
    H(Ee), H(xe)
}

function Rc(e, t, n) {
    if (xe.current !== Yt) throw Error(P(168));
    U(xe, t), U(Ee, n)
}

function Hh(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t)) throw Error(P(108, bg(e) || "Unknown", i));
    return q({}, n, r)
}

function Ss(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Yt, mn = xe.current, U(xe, e), U(Ee, Ee.current), !0
}

function $c(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(P(169));
    n ? (e = Hh(e, t, mn), r.__reactInternalMemoizedMergedChildContext = e, H(Ee), H(xe), U(xe, e)) : H(Ee), U(Ee, n)
}
var mt = null,
    eo = !1,
    $o = !1;

function Kh(e) {
    mt === null ? mt = [e] : mt.push(e)
}

function Oy(e) {
    eo = !0, Kh(e)
}

function Jt() {
    if (!$o && mt !== null) {
        $o = !0;
        var e = 0,
            t = _;
        try {
            var n = mt;
            for (_ = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            mt = null, eo = !1
        } catch (i) {
            throw mt !== null && (mt = mt.slice(e + 1)), yh(Ll, Jt), i
        } finally {
            _ = t, $o = !1
        }
    }
    return null
}
var _n = [],
    On = 0,
    bs = null,
    Cs = 0,
    Ie = [],
    Be = 0,
    gn = null,
    gt = 1,
    yt = "";

function nn(e, t) {
    _n[On++] = Cs, _n[On++] = bs, bs = e, Cs = t
}

function Gh(e, t, n) {
    Ie[Be++] = gt, Ie[Be++] = yt, Ie[Be++] = gn, gn = e;
    var r = gt;
    e = yt;
    var i = 32 - et(r) - 1;
    r &= ~(1 << i), n += 1;
    var s = 32 - et(t) + i;
    if (30 < s) {
        var o = i - i % 5;
        s = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, gt = 1 << 32 - et(t) + i | n << i | r, yt = s + e
    } else gt = 1 << s | n << i | r, yt = e
}

function Ol(e) {
    e.return !== null && (nn(e, 1), Gh(e, 1, 0))
}

function Il(e) {
    for (; e === bs;) bs = _n[--On], _n[On] = null, Cs = _n[--On], _n[On] = null;
    for (; e === gn;) gn = Ie[--Be], Ie[Be] = null, yt = Ie[--Be], Ie[Be] = null, gt = Ie[--Be], Ie[Be] = null
}
var De = null,
    Ae = null,
    G = !1,
    Je = null;

function Yh(e, t) {
    var n = Ue(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Ac(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, De = e, Ae = Ot(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, De = e, Ae = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = gn !== null ? {
                id: gt,
                overflow: yt
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = Ue(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, De = e, Ae = null, !0) : !1;
        default:
            return !1
    }
}

function Ma(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function La(e) {
    if (G) {
        var t = Ae;
        if (t) {
            var n = t;
            if (!Ac(e, t)) {
                if (Ma(e)) throw Error(P(418));
                t = Ot(n.nextSibling);
                var r = De;
                t && Ac(e, t) ? Yh(r, n) : (e.flags = e.flags & -4097 | 2, G = !1, De = e)
            }
        } else {
            if (Ma(e)) throw Error(P(418));
            e.flags = e.flags & -4097 | 2, G = !1, De = e
        }
    }
}

function Dc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    De = e
}

function zi(e) {
    if (e !== De) return !1;
    if (!G) return Dc(e), G = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Na(e.type, e.memoizedProps)), t && (t = Ae)) {
        if (Ma(e)) throw Xh(), Error(P(418));
        for (; t;) Yh(e, t), t = Ot(t.nextSibling)
    }
    if (Dc(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(P(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ae = Ot(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ae = null
        }
    } else Ae = De ? Ot(e.stateNode.nextSibling) : null;
    return !0
}

function Xh() {
    for (var e = Ae; e;) e = Ot(e.nextSibling)
}

function rr() {
    Ae = De = null, G = !1
}

function Bl(e) {
    Je === null ? Je = [e] : Je.push(e)
}
var Iy = jt.ReactCurrentBatchConfig;

function kr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(P(309));
                var r = n.stateNode
            }
            if (!r) throw Error(P(147, e));
            var i = r,
                s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function (o) {
                var a = i.refs;
                o === null ? delete a[s] : a[s] = o
            }, t._stringRef = s, t)
        }
        if (typeof e != "string") throw Error(P(284));
        if (!n._owner) throw Error(P(290, e))
    }
    return e
}

function _i(e, t) {
    throw e = Object.prototype.toString.call(t), Error(P(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Vc(e) {
    var t = e._init;
    return t(e._payload)
}

function Qh(e) {
    function t(g, p) {
        if (e) {
            var y = g.deletions;
            y === null ? (g.deletions = [p], g.flags |= 16) : y.push(p)
        }
    }

    function n(g, p) {
        if (!e) return null;
        for (; p !== null;) t(g, p), p = p.sibling;
        return null
    }

    function r(g, p) {
        for (g = new Map; p !== null;) p.key !== null ? g.set(p.key, p) : g.set(p.index, p), p = p.sibling;
        return g
    }

    function i(g, p) {
        return g = Wt(g, p), g.index = 0, g.sibling = null, g
    }

    function s(g, p, y) {
        return g.index = y, e ? (y = g.alternate, y !== null ? (y = y.index, y < p ? (g.flags |= 2, p) : y) : (g.flags |= 2, p)) : (g.flags |= 1048576, p)
    }

    function o(g) {
        return e && g.alternate === null && (g.flags |= 2), g
    }

    function a(g, p, y, x) {
        return p === null || p.tag !== 6 ? (p = Oo(y, g.mode, x), p.return = g, p) : (p = i(p, y), p.return = g, p)
    }

    function l(g, p, y, x) {
        var C = y.type;
        return C === $n ? d(g, p, y.props.children, x, y.key) : p !== null && (p.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Pt && Vc(C) === p.type) ? (x = i(p, y.props), x.ref = kr(g, p, y), x.return = g, x) : (x = ss(y.type, y.key, y.props, null, g.mode, x), x.ref = kr(g, p, y), x.return = g, x)
    }

    function c(g, p, y, x) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== y.containerInfo || p.stateNode.implementation !== y.implementation ? (p = Io(y, g.mode, x), p.return = g, p) : (p = i(p, y.children || []), p.return = g, p)
    }

    function d(g, p, y, x, C) {
        return p === null || p.tag !== 7 ? (p = fn(y, g.mode, x, C), p.return = g, p) : (p = i(p, y), p.return = g, p)
    }

    function f(g, p, y) {
        if (typeof p == "string" && p !== "" || typeof p == "number") return p = Oo("" + p, g.mode, y), p.return = g, p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case Pi:
                    return y = ss(p.type, p.key, p.props, null, g.mode, y), y.ref = kr(g, null, p), y.return = g, y;
                case Rn:
                    return p = Io(p, g.mode, y), p.return = g, p;
                case Pt:
                    var x = p._init;
                    return f(g, x(p._payload), y)
            }
            if (Nr(p) || gr(p)) return p = fn(p, g.mode, y, null), p.return = g, p;
            _i(g, p)
        }
        return null
    }

    function h(g, p, y, x) {
        var C = p !== null ? p.key : null;
        if (typeof y == "string" && y !== "" || typeof y == "number") return C !== null ? null : a(g, p, "" + y, x);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
                case Pi:
                    return y.key === C ? l(g, p, y, x) : null;
                case Rn:
                    return y.key === C ? c(g, p, y, x) : null;
                case Pt:
                    return C = y._init, h(g, p, C(y._payload), x)
            }
            if (Nr(y) || gr(y)) return C !== null ? null : d(g, p, y, x, null);
            _i(g, y)
        }
        return null
    }

    function m(g, p, y, x, C) {
        if (typeof x == "string" && x !== "" || typeof x == "number") return g = g.get(y) || null, a(p, g, "" + x, C);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
                case Pi:
                    return g = g.get(x.key === null ? y : x.key) || null, l(p, g, x, C);
                case Rn:
                    return g = g.get(x.key === null ? y : x.key) || null, c(p, g, x, C);
                case Pt:
                    var T = x._init;
                    return m(g, p, y, T(x._payload), C)
            }
            if (Nr(x) || gr(x)) return g = g.get(y) || null, d(p, g, x, C, null);
            _i(p, x)
        }
        return null
    }

    function v(g, p, y, x) {
        for (var C = null, T = null, b = p, j = p = 0, $ = null; b !== null && j < y.length; j++) {
            b.index > j ? ($ = b, b = null) : $ = b.sibling;
            var N = h(g, b, y[j], x);
            if (N === null) {
                b === null && (b = $);
                break
            }
            e && b && N.alternate === null && t(g, b), p = s(N, p, j), T === null ? C = N : T.sibling = N, T = N, b = $
        }
        if (j === y.length) return n(g, b), G && nn(g, j), C;
        if (b === null) {
            for (; j < y.length; j++) b = f(g, y[j], x), b !== null && (p = s(b, p, j), T === null ? C = b : T.sibling = b, T = b);
            return G && nn(g, j), C
        }
        for (b = r(g, b); j < y.length; j++) $ = m(b, g, j, y[j], x), $ !== null && (e && $.alternate !== null && b.delete($.key === null ? j : $.key), p = s($, p, j), T === null ? C = $ : T.sibling = $, T = $);
        return e && b.forEach(function (D) {
            return t(g, D)
        }), G && nn(g, j), C
    }

    function w(g, p, y, x) {
        var C = gr(y);
        if (typeof C != "function") throw Error(P(150));
        if (y = C.call(y), y == null) throw Error(P(151));
        for (var T = C = null, b = p, j = p = 0, $ = null, N = y.next(); b !== null && !N.done; j++, N = y.next()) {
            b.index > j ? ($ = b, b = null) : $ = b.sibling;
            var D = h(g, b, N.value, x);
            if (D === null) {
                b === null && (b = $);
                break
            }
            e && b && D.alternate === null && t(g, b), p = s(D, p, j), T === null ? C = D : T.sibling = D, T = D, b = $
        }
        if (N.done) return n(g, b), G && nn(g, j), C;
        if (b === null) {
            for (; !N.done; j++, N = y.next()) N = f(g, N.value, x), N !== null && (p = s(N, p, j), T === null ? C = N : T.sibling = N, T = N);
            return G && nn(g, j), C
        }
        for (b = r(g, b); !N.done; j++, N = y.next()) N = m(b, g, j, N.value, x), N !== null && (e && N.alternate !== null && b.delete(N.key === null ? j : N.key), p = s(N, p, j), T === null ? C = N : T.sibling = N, T = N);
        return e && b.forEach(function (O) {
            return t(g, O)
        }), G && nn(g, j), C
    }

    function S(g, p, y, x) {
        if (typeof y == "object" && y !== null && y.type === $n && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
                case Pi:
                    e: {
                        for (var C = y.key, T = p; T !== null;) {
                            if (T.key === C) {
                                if (C = y.type, C === $n) {
                                    if (T.tag === 7) {
                                        n(g, T.sibling), p = i(T, y.props.children), p.return = g, g = p;
                                        break e
                                    }
                                } else if (T.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Pt && Vc(C) === T.type) {
                                    n(g, T.sibling), p = i(T, y.props), p.ref = kr(g, T, y), p.return = g, g = p;
                                    break e
                                }
                                n(g, T);
                                break
                            } else t(g, T);
                            T = T.sibling
                        }
                        y.type === $n ? (p = fn(y.props.children, g.mode, x, y.key), p.return = g, g = p) : (x = ss(y.type, y.key, y.props, null, g.mode, x), x.ref = kr(g, p, y), x.return = g, g = x)
                    }
                    return o(g);
                case Rn:
                    e: {
                        for (T = y.key; p !== null;) {
                            if (p.key === T)
                                if (p.tag === 4 && p.stateNode.containerInfo === y.containerInfo && p.stateNode.implementation === y.implementation) {
                                    n(g, p.sibling), p = i(p, y.children || []), p.return = g, g = p;
                                    break e
                                } else {
                                    n(g, p);
                                    break
                                }
                            else t(g, p);
                            p = p.sibling
                        }
                        p = Io(y, g.mode, x),
                            p.return = g,
                            g = p
                    }
                    return o(g);
                case Pt:
                    return T = y._init, S(g, p, T(y._payload), x)
            }
            if (Nr(y)) return v(g, p, y, x);
            if (gr(y)) return w(g, p, y, x);
            _i(g, y)
        }
        return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, p !== null && p.tag === 6 ? (n(g, p.sibling), p = i(p, y), p.return = g, g = p) : (n(g, p), p = Oo(y, g.mode, x), p.return = g, g = p), o(g)) : n(g, p)
    }
    return S
}
var ir = Qh(!0),
    Zh = Qh(!1),
    js = qt(null),
    Ns = null,
    In = null,
    Ul = null;

function Wl() {
    Ul = In = Ns = null
}

function Hl(e) {
    var t = js.current;
    H(js), e._currentValue = t
}

function Ra(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function Jn(e, t) {
    Ns = e, Ul = In = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Te = !0), e.firstContext = null)
}

function Ke(e) {
    var t = e._currentValue;
    if (Ul !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        }, In === null) {
            if (Ns === null) throw Error(P(308));
            In = e, Ns.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else In = In.next = e;
    return t
}
var an = null;

function Kl(e) {
    an === null ? an = [e] : an.push(e)
}

function qh(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, Kl(t)) : (n.next = i.next, i.next = n), t.interleaved = n, kt(e, r)
}

function kt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Et = !1;

function Gl(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function Jh(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function vt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function It(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, F & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, kt(e, n)
    }
    return i = r.interleaved, i === null ? (t.next = t, Kl(r)) : (t.next = i.next, i.next = t), r.interleaved = t, kt(e, n)
}

function Ji(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Rl(e, n)
    }
}

function Fc(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var i = null,
            s = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? i = s = o : s = s.next = o, n = n.next
            } while (n !== null);
            s === null ? i = s = t : s = s.next = t
        } else i = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Ts(e, t, n, r) {
    var i = e.updateQueue;
    Et = !1;
    var s = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var l = a,
            c = l.next;
        l.next = null, o === null ? s = c : o.next = c, o = l;
        var d = e.alternate;
        d !== null && (d = d.updateQueue, a = d.lastBaseUpdate, a !== o && (a === null ? d.firstBaseUpdate = c : a.next = c, d.lastBaseUpdate = l))
    }
    if (s !== null) {
        var f = i.baseState;
        o = 0, d = c = l = null, a = s;
        do {
            var h = a.lane,
                m = a.eventTime;
            if ((r & h) === h) {
                d !== null && (d = d.next = {
                    eventTime: m,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var v = e,
                        w = a;
                    switch (h = t, m = n, w.tag) {
                        case 1:
                            if (v = w.payload, typeof v == "function") {
                                f = v.call(m, f, h);
                                break e
                            }
                            f = v;
                            break e;
                        case 3:
                            v.flags = v.flags & -65537 | 128;
                        case 0:
                            if (v = w.payload, h = typeof v == "function" ? v.call(m, f, h) : v, h == null) break e;
                            f = q({}, f, h);
                            break e;
                        case 2:
                            Et = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64, h = i.effects, h === null ? i.effects = [a] : h.push(a))
            } else m = {
                eventTime: m,
                lane: h,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, d === null ? (c = d = m, l = f) : d = d.next = m, o |= h;
            if (a = a.next, a === null) {
                if (a = i.shared.pending, a === null) break;
                h = a, a = h.next, h.next = null, i.lastBaseUpdate = h, i.shared.pending = null
            }
        } while (!0);
        if (d === null && (l = f), i.baseState = l, i.firstBaseUpdate = c, i.lastBaseUpdate = d, t = i.shared.interleaved, t !== null) {
            i = t;
            do o |= i.lane, i = i.next; while (i !== t)
        } else s === null && (i.shared.lanes = 0);
        vn |= o, e.lanes = o, e.memoizedState = f
    }
}

function zc(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (i !== null) {
                if (r.callback = null, r = n, typeof i != "function") throw Error(P(191, i));
                i.call(r)
            }
        }
}
var wi = {},
    at = qt(wi),
    ti = qt(wi),
    ni = qt(wi);

function ln(e) {
    if (e === wi) throw Error(P(174));
    return e
}

function Yl(e, t) {
    switch (U(ni, t), U(ti, e), U(at, wi), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : fa(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = fa(t, e)
    }
    H(at), U(at, t)
}

function sr() {
    H(at), H(ti), H(ni)
}

function ep(e) {
    ln(ni.current);
    var t = ln(at.current),
        n = fa(t, e.type);
    t !== n && (U(ti, e), U(at, n))
}

function Xl(e) {
    ti.current === e && (H(at), H(ti))
}
var X = qt(0);

function Ps(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Ao = [];

function Ql() {
    for (var e = 0; e < Ao.length; e++) Ao[e]._workInProgressVersionPrimary = null;
    Ao.length = 0
}
var es = jt.ReactCurrentDispatcher,
    Do = jt.ReactCurrentBatchConfig,
    yn = 0,
    Z = null,
    ae = null,
    ue = null,
    Es = !1,
    Dr = !1,
    ri = 0,
    By = 0;

function me() {
    throw Error(P(321))
}

function Zl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!nt(e[n], t[n])) return !1;
    return !0
}

function ql(e, t, n, r, i, s) {
    if (yn = s, Z = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, es.current = e === null || e.memoizedState === null ? Ky : Gy, e = n(r, i), Dr) {
        s = 0;
        do {
            if (Dr = !1, ri = 0, 25 <= s) throw Error(P(301));
            s += 1, ue = ae = null, t.updateQueue = null, es.current = Yy, e = n(r, i)
        } while (Dr)
    }
    if (es.current = Ms, t = ae !== null && ae.next !== null, yn = 0, ue = ae = Z = null, Es = !1, t) throw Error(P(300));
    return e
}

function Jl() {
    var e = ri !== 0;
    return ri = 0, e
}

function it() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ue === null ? Z.memoizedState = ue = e : ue = ue.next = e, ue
}

function Ge() {
    if (ae === null) {
        var e = Z.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = ae.next;
    var t = ue === null ? Z.memoizedState : ue.next;
    if (t !== null) ue = t, ae = e;
    else {
        if (e === null) throw Error(P(310));
        ae = e, e = {
            memoizedState: ae.memoizedState,
            baseState: ae.baseState,
            baseQueue: ae.baseQueue,
            queue: ae.queue,
            next: null
        }, ue === null ? Z.memoizedState = ue = e : ue = ue.next = e
    }
    return ue
}

function ii(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Vo(e) {
    var t = Ge(),
        n = t.queue;
    if (n === null) throw Error(P(311));
    n.lastRenderedReducer = e;
    var r = ae,
        i = r.baseQueue,
        s = n.pending;
    if (s !== null) {
        if (i !== null) {
            var o = i.next;
            i.next = s.next, s.next = o
        }
        r.baseQueue = i = s, n.pending = null
    }
    if (i !== null) {
        s = i.next, r = r.baseState;
        var a = o = null,
            l = null,
            c = s;
        do {
            var d = c.lane;
            if ((yn & d) === d) l !== null && (l = l.next = {
                lane: 0,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null
            }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var f = {
                    lane: d,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                l === null ? (a = l = f, o = r) : l = l.next = f, Z.lanes |= d, vn |= d
            }
            c = c.next
        } while (c !== null && c !== s);
        l === null ? o = r : l.next = a, nt(r, t.memoizedState) || (Te = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = l, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        i = e;
        do s = i.lane, Z.lanes |= s, vn |= s, i = i.next; while (i !== e)
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function Fo(e) {
    var t = Ge(),
        n = t.queue;
    if (n === null) throw Error(P(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        s = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var o = i = i.next;
        do s = e(s, o.action), o = o.next; while (o !== i);
        nt(s, t.memoizedState) || (Te = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s
    }
    return [s, r]
}

function tp() { }

function np(e, t) {
    var n = Z,
        r = Ge(),
        i = t(),
        s = !nt(r.memoizedState, i);
    if (s && (r.memoizedState = i, Te = !0), r = r.queue, eu(sp.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || ue !== null && ue.memoizedState.tag & 1) {
        if (n.flags |= 2048, si(9, ip.bind(null, n, r, i, t), void 0, null), ce === null) throw Error(P(349));
        yn & 30 || rp(n, t, i)
    }
    return i
}

function rp(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = Z.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, Z.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function ip(e, t, n, r) {
    t.value = n, t.getSnapshot = r, op(t) && ap(e)
}

function sp(e, t, n) {
    return n(function () {
        op(t) && ap(e)
    })
}

function op(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !nt(e, n)
    } catch {
        return !0
    }
}

function ap(e) {
    var t = kt(e, 1);
    t !== null && tt(t, e, 1, -1)
}

function _c(e) {
    var t = it();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ii,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Hy.bind(null, Z, e), [t.memoizedState, e]
}

function si(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = Z.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, Z.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function lp() {
    return Ge().memoizedState
}

function ts(e, t, n, r) {
    var i = it();
    Z.flags |= e, i.memoizedState = si(1 | t, n, void 0, r === void 0 ? null : r)
}

function to(e, t, n, r) {
    var i = Ge();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (ae !== null) {
        var o = ae.memoizedState;
        if (s = o.destroy, r !== null && Zl(r, o.deps)) {
            i.memoizedState = si(t, n, s, r);
            return
        }
    }
    Z.flags |= e, i.memoizedState = si(1 | t, n, s, r)
}

function Oc(e, t) {
    return ts(8390656, 8, e, t)
}

function eu(e, t) {
    return to(2048, 8, e, t)
}

function up(e, t) {
    return to(4, 2, e, t)
}

function cp(e, t) {
    return to(4, 4, e, t)
}

function dp(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function () {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function () {
            t.current = null
        }
}

function fp(e, t, n) {
    return n = n != null ? n.concat([e]) : null, to(4, 4, dp.bind(null, t, e), n)
}

function tu() { }

function hp(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Zl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function pp(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Zl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function mp(e, t, n) {
    return yn & 21 ? (nt(n, t) || (n = wh(), Z.lanes |= n, vn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Te = !0), e.memoizedState = n)
}

function Uy(e, t) {
    var n = _;
    _ = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Do.transition;
    Do.transition = {};
    try {
        e(!1), t()
    } finally {
        _ = n, Do.transition = r
    }
}

function gp() {
    return Ge().memoizedState
}

function Wy(e, t, n) {
    var r = Ut(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    }, yp(e)) vp(t, n);
    else if (n = qh(e, t, n, r), n !== null) {
        var i = Se();
        tt(n, e, r, i), xp(n, t, r)
    }
}

function Hy(e, t, n) {
    var r = Ut(e),
        i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (yp(e)) vp(t, i);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
            var o = t.lastRenderedState,
                a = s(o, n);
            if (i.hasEagerState = !0, i.eagerState = a, nt(a, o)) {
                var l = t.interleaved;
                l === null ? (i.next = i, Kl(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
                return
            }
        } catch { } finally { }
        n = qh(e, t, i, r), n !== null && (i = Se(), tt(n, e, r, i), xp(n, t, r))
    }
}

function yp(e) {
    var t = e.alternate;
    return e === Z || t !== null && t === Z
}

function vp(e, t) {
    Dr = Es = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function xp(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Rl(e, n)
    }
}
var Ms = {
    readContext: Ke,
    useCallback: me,
    useContext: me,
    useEffect: me,
    useImperativeHandle: me,
    useInsertionEffect: me,
    useLayoutEffect: me,
    useMemo: me,
    useReducer: me,
    useRef: me,
    useState: me,
    useDebugValue: me,
    useDeferredValue: me,
    useTransition: me,
    useMutableSource: me,
    useSyncExternalStore: me,
    useId: me,
    unstable_isNewReconciler: !1
},
    Ky = {
        readContext: Ke,
        useCallback: function (e, t) {
            return it().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: Ke,
        useEffect: Oc,
        useImperativeHandle: function (e, t, n) {
            return n = n != null ? n.concat([e]) : null, ts(4194308, 4, dp.bind(null, t, e), n)
        },
        useLayoutEffect: function (e, t) {
            return ts(4194308, 4, e, t)
        },
        useInsertionEffect: function (e, t) {
            return ts(4, 2, e, t)
        },
        useMemo: function (e, t) {
            var n = it();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function (e, t, n) {
            var r = it();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Wy.bind(null, Z, e), [r.memoizedState, e]
        },
        useRef: function (e) {
            var t = it();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: _c,
        useDebugValue: tu,
        useDeferredValue: function (e) {
            return it().memoizedState = e
        },
        useTransition: function () {
            var e = _c(!1),
                t = e[0];
            return e = Uy.bind(null, e[1]), it().memoizedState = e, [t, e]
        },
        useMutableSource: function () { },
        useSyncExternalStore: function (e, t, n) {
            var r = Z,
                i = it();
            if (G) {
                if (n === void 0) throw Error(P(407));
                n = n()
            } else {
                if (n = t(), ce === null) throw Error(P(349));
                yn & 30 || rp(r, t, n)
            }
            i.memoizedState = n;
            var s = {
                value: n,
                getSnapshot: t
            };
            return i.queue = s, Oc(sp.bind(null, r, s, e), [e]), r.flags |= 2048, si(9, ip.bind(null, r, s, n, t), void 0, null), n
        },
        useId: function () {
            var e = it(),
                t = ce.identifierPrefix;
            if (G) {
                var n = yt,
                    r = gt;
                n = (r & ~(1 << 32 - et(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ri++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = By++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    Gy = {
        readContext: Ke,
        useCallback: hp,
        useContext: Ke,
        useEffect: eu,
        useImperativeHandle: fp,
        useInsertionEffect: up,
        useLayoutEffect: cp,
        useMemo: pp,
        useReducer: Vo,
        useRef: lp,
        useState: function () {
            return Vo(ii)
        },
        useDebugValue: tu,
        useDeferredValue: function (e) {
            var t = Ge();
            return mp(t, ae.memoizedState, e)
        },
        useTransition: function () {
            var e = Vo(ii)[0],
                t = Ge().memoizedState;
            return [e, t]
        },
        useMutableSource: tp,
        useSyncExternalStore: np,
        useId: gp,
        unstable_isNewReconciler: !1
    },
    Yy = {
        readContext: Ke,
        useCallback: hp,
        useContext: Ke,
        useEffect: eu,
        useImperativeHandle: fp,
        useInsertionEffect: up,
        useLayoutEffect: cp,
        useMemo: pp,
        useReducer: Fo,
        useRef: lp,
        useState: function () {
            return Fo(ii)
        },
        useDebugValue: tu,
        useDeferredValue: function (e) {
            var t = Ge();
            return ae === null ? t.memoizedState = e : mp(t, ae.memoizedState, e)
        },
        useTransition: function () {
            var e = Fo(ii)[0],
                t = Ge().memoizedState;
            return [e, t]
        },
        useMutableSource: tp,
        useSyncExternalStore: np,
        useId: gp,
        unstable_isNewReconciler: !1
    };

function Ze(e, t) {
    if (e && e.defaultProps) {
        t = q({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function $a(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var no = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? kn(e) === e : !1
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Se(),
            i = Ut(e),
            s = vt(r, i);
        s.payload = t, n != null && (s.callback = n), t = It(e, s, i), t !== null && (tt(t, e, i, r), Ji(t, e, i))
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Se(),
            i = Ut(e),
            s = vt(r, i);
        s.tag = 1, s.payload = t, n != null && (s.callback = n), t = It(e, s, i), t !== null && (tt(t, e, i, r), Ji(t, e, i))
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Se(),
            r = Ut(e),
            i = vt(n, r);
        i.tag = 2, t != null && (i.callback = t), t = It(e, i, r), t !== null && (tt(t, e, r, n), Ji(t, e, r))
    }
};

function Ic(e, t, n, r, i, s, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !Zr(n, r) || !Zr(i, s) : !0
}

function wp(e, t, n) {
    var r = !1,
        i = Yt,
        s = t.contextType;
    return typeof s == "object" && s !== null ? s = Ke(s) : (i = Me(t) ? mn : xe.current, r = t.contextTypes, s = (r = r != null) ? nr(e, i) : Yt), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = no, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = s), t
}

function Bc(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && no.enqueueReplaceState(t, t.state, null)
}

function Aa(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, Gl(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? i.context = Ke(s) : (s = Me(t) ? mn : xe.current, i.context = nr(e, s)), i.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && ($a(e, t, s, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && no.enqueueReplaceState(i, i.state, null), Ts(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}

function or(e, t) {
    try {
        var n = "",
            r = t;
        do n += Sg(r), r = r.return; while (r);
        var i = n
    } catch (s) {
        i = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}

function zo(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}

function Da(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function () {
            throw n
        })
    }
}
var Xy = typeof WeakMap == "function" ? WeakMap : Map;

function kp(e, t, n) {
    n = vt(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function () {
        Rs || (Rs = !0, Ha = r), Da(e, t)
    }, n
}

function Sp(e, t, n) {
    n = vt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function () {
            return r(i)
        }, n.callback = function () {
            Da(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function () {
        Da(e, t), typeof r != "function" && (Bt === null ? Bt = new Set([this]) : Bt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }), n
}

function Uc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Xy;
        var i = new Set;
        r.set(t, i)
    } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
    i.has(n) || (i.add(n), e = u1.bind(null, e, t, n), t.then(e, e))
}

function Wc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Hc(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = vt(-1, 1), t.tag = 2, It(n, t, 1))), n.lanes |= 1), e)
}
var Qy = jt.ReactCurrentOwner,
    Te = !1;

function we(e, t, n, r) {
    t.child = e === null ? Zh(t, null, n, r) : ir(t, e.child, n, r)
}

function Kc(e, t, n, r, i) {
    n = n.render;
    var s = t.ref;
    return Jn(t, i), r = ql(e, t, n, r, s, i), n = Jl(), e !== null && !Te ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, St(e, t, i)) : (G && n && Ol(t), t.flags |= 1, we(e, t, r, i), t.child)
}

function Gc(e, t, n, r, i) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !uu(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, bp(e, t, s, r, i)) : (e = ss(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (s = e.child, !(e.lanes & i)) {
        var o = s.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Zr, n(o, r) && e.ref === t.ref) return St(e, t, i)
    }
    return t.flags |= 1, e = Wt(s, r), e.ref = t.ref, e.return = t, t.child = e
}

function bp(e, t, n, r, i) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (Zr(s, r) && e.ref === t.ref)
            if (Te = !1, t.pendingProps = r = s, (e.lanes & i) !== 0) e.flags & 131072 && (Te = !0);
            else return t.lanes = e.lanes, St(e, t, i)
    }
    return Va(e, t, n, r, i)
}

function Cp(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, U(Un, $e), $e |= n;
        else {
            if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, U(Un, $e), $e |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = s !== null ? s.baseLanes : n, U(Un, $e), $e |= r
        }
    else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, U(Un, $e), $e |= r;
    return we(e, t, i, n), t.child
}

function jp(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Va(e, t, n, r, i) {
    var s = Me(n) ? mn : xe.current;
    return s = nr(t, s), Jn(t, i), n = ql(e, t, n, r, s, i), r = Jl(), e !== null && !Te ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, St(e, t, i)) : (G && r && Ol(t), t.flags |= 1, we(e, t, n, i), t.child)
}

function Yc(e, t, n, r, i) {
    if (Me(n)) {
        var s = !0;
        Ss(t)
    } else s = !1;
    if (Jn(t, i), t.stateNode === null) ns(e, t), wp(t, n, r), Aa(t, n, r, i), r = !0;
    else if (e === null) {
        var o = t.stateNode,
            a = t.memoizedProps;
        o.props = a;
        var l = o.context,
            c = n.contextType;
        typeof c == "object" && c !== null ? c = Ke(c) : (c = Me(n) ? mn : xe.current, c = nr(t, c));
        var d = n.getDerivedStateFromProps,
            f = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        f || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || l !== c) && Bc(t, o, r, c), Et = !1;
        var h = t.memoizedState;
        o.state = h, Ts(t, r, o, i), l = t.memoizedState, a !== r || h !== l || Ee.current || Et ? (typeof d == "function" && ($a(t, n, d, r), l = t.memoizedState), (a = Et || Ic(t, n, a, r, h, l, c)) ? (f || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), o.props = r, o.state = l, o.context = c, r = a) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        o = t.stateNode, Jh(e, t), a = t.memoizedProps, c = t.type === t.elementType ? a : Ze(t.type, a), o.props = c, f = t.pendingProps, h = o.context, l = n.contextType, typeof l == "object" && l !== null ? l = Ke(l) : (l = Me(n) ? mn : xe.current, l = nr(t, l));
        var m = n.getDerivedStateFromProps;
        (d = typeof m == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== f || h !== l) && Bc(t, o, r, l), Et = !1, h = t.memoizedState, o.state = h, Ts(t, r, o, i);
        var v = t.memoizedState;
        a !== f || h !== v || Ee.current || Et ? (typeof m == "function" && ($a(t, n, m, r), v = t.memoizedState), (c = Et || Ic(t, n, c, r, h, v, l) || !1) ? (d || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, v, l), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, v, l)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), o.props = r, o.state = v, o.context = l, r = c) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Fa(e, t, n, r, s, i)
}

function Fa(e, t, n, r, i, s) {
    jp(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return i && $c(t, n, !1), St(e, t, s);
    r = t.stateNode, Qy.current = t;
    var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = ir(t, e.child, null, s), t.child = ir(t, null, a, s)) : we(e, t, a, s), t.memoizedState = r.state, i && $c(t, n, !0), t.child
}

function Np(e) {
    var t = e.stateNode;
    t.pendingContext ? Rc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Rc(e, t.context, !1), Yl(e, t.containerInfo)
}

function Xc(e, t, n, r, i) {
    return rr(), Bl(i), t.flags |= 256, we(e, t, n, r), t.child
}
var za = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function _a(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Tp(e, t, n) {
    var r = t.pendingProps,
        i = X.current,
        s = !1,
        o = (t.flags & 128) !== 0,
        a;
    if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), U(X, i & 1), e === null) return La(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, o = {
        mode: "hidden",
        children: o
    }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = o) : s = so(o, r, 0, null), e = fn(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = _a(n), t.memoizedState = za, e) : nu(t, o));
    if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null)) return Zy(e, t, o, r, a, i, n);
    if (s) {
        s = r.fallback, o = t.mode, i = e.child, a = i.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Wt(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? s = Wt(a, s) : (s = fn(s, o, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, o = e.child.memoizedState, o = o === null ? _a(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        }, s.memoizedState = o, s.childLanes = e.childLanes & ~n, t.memoizedState = za, r
    }
    return s = e.child, e = s.sibling, r = Wt(s, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function nu(e, t) {
    return t = so({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function Oi(e, t, n, r) {
    return r !== null && Bl(r), ir(t, e.child, null, n), e = nu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Zy(e, t, n, r, i, s, o) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = zo(Error(P(422))), Oi(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, i = t.mode, r = so({
        mode: "visible",
        children: r.children
    }, i, 0, null), s = fn(s, i, o, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && ir(t, e.child, null, o), t.child.memoizedState = _a(o), t.memoizedState = za, s);
    if (!(t.mode & 1)) return Oi(e, t, o, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset, r) var a = r.dgst;
        return r = a, s = Error(P(419)), r = zo(s, r, void 0), Oi(e, t, o, r)
    }
    if (a = (o & e.childLanes) !== 0, Te || a) {
        if (r = ce, r !== null) {
            switch (o & -o) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0
            }
            i = i & (r.suspendedLanes | o) ? 0 : i, i !== 0 && i !== s.retryLane && (s.retryLane = i, kt(e, i), tt(r, e, i, -1))
        }
        return lu(), r = zo(Error(P(421))), Oi(e, t, o, r)
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = c1.bind(null, e), i._reactRetry = t, null) : (e = s.treeContext, Ae = Ot(i.nextSibling), De = t, G = !0, Je = null, e !== null && (Ie[Be++] = gt, Ie[Be++] = yt, Ie[Be++] = gn, gt = e.id, yt = e.overflow, gn = t), t = nu(t, r.children), t.flags |= 4096, t)
}

function Qc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ra(e.return, t, n)
}

function _o(e, t, n, r, i) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = i)
}

function Pp(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        s = r.tail;
    if (we(e, t, r.children, n), r = X.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Qc(e, n, t);
            else if (e.tag === 19) Qc(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (U(X, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (i) {
        case "forwards":
            for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && Ps(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), _o(t, !1, i, n, s);
            break;
        case "backwards":
            for (n = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && Ps(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling, i.sibling = n, n = i, i = e
            }
            _o(t, !0, n, null, s);
            break;
        case "together":
            _o(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function ns(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function St(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), vn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(P(153));
    if (t.child !== null) {
        for (e = t.child, n = Wt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Wt(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function qy(e, t, n) {
    switch (t.tag) {
        case 3:
            Np(t), rr();
            break;
        case 5:
            ep(t);
            break;
        case 1:
            Me(t.type) && Ss(t);
            break;
        case 4:
            Yl(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value;
            U(js, r._currentValue), r._currentValue = i;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (U(X, X.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Tp(e, t, n) : (U(X, X.current & 1), e = St(e, t, n), e !== null ? e.sibling : null);
            U(X, X.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return Pp(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), U(X, X.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Cp(e, t, n)
    }
    return St(e, t, n)
}
var Ep, Oa, Mp, Lp;
Ep = function (e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Oa = function () { };
Mp = function (e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode, ln(at.current);
        var s = null;
        switch (n) {
            case "input":
                i = la(e, i), r = la(e, r), s = [];
                break;
            case "select":
                i = q({}, i, {
                    value: void 0
                }), r = q({}, r, {
                    value: void 0
                }), s = [];
                break;
            case "textarea":
                i = da(e, i), r = da(e, r), s = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ws)
        }
        ha(n, r);
        var o;
        n = null;
        for (c in i)
            if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
                if (c === "style") {
                    var a = i[c];
                    for (o in a) a.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
                } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Wr.hasOwnProperty(c) ? s || (s = []) : (s = s || []).push(c, null));
        for (c in r) {
            var l = r[c];
            if (a = i != null ? i[c] : void 0, r.hasOwnProperty(c) && l !== a && (l != null || a != null))
                if (c === "style")
                    if (a) {
                        for (o in a) !a.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
                        for (o in l) l.hasOwnProperty(o) && a[o] !== l[o] && (n || (n = {}), n[o] = l[o])
                    } else n || (s || (s = []), s.push(c, n)), n = l;
                else c === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (s = s || []).push(c, l)) : c === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(c, "" + l) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Wr.hasOwnProperty(c) ? (l != null && c === "onScroll" && W("scroll", e), s || a === l || (s = [])) : (s = s || []).push(c, l))
        }
        n && (s = s || []).push("style", n);
        var c = s;
        (t.updateQueue = c) && (t.flags |= 4)
    }
};
Lp = function (e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function Sr(e, t) {
    if (!G) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function ge(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
        for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function Jy(e, t, n) {
    var r = t.pendingProps;
    switch (Il(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return ge(t), null;
        case 1:
            return Me(t.type) && ks(), ge(t), null;
        case 3:
            return r = t.stateNode, sr(), H(Ee), H(xe), Ql(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (zi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Je !== null && (Ya(Je), Je = null))), Oa(e, t), ge(t), null;
        case 5:
            Xl(t);
            var i = ln(ni.current);
            if (n = t.type, e !== null && t.stateNode != null) Mp(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(P(166));
                    return ge(t), null
                }
                if (e = ln(at.current), zi(t)) {
                    r = t.stateNode, n = t.type;
                    var s = t.memoizedProps;
                    switch (r[st] = t, r[ei] = s, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            W("cancel", r), W("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            W("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < Pr.length; i++) W(Pr[i], r);
                            break;
                        case "source":
                            W("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            W("error", r), W("load", r);
                            break;
                        case "details":
                            W("toggle", r);
                            break;
                        case "input":
                            sc(r, s), W("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!s.multiple
                            }, W("invalid", r);
                            break;
                        case "textarea":
                            ac(r, s), W("invalid", r)
                    }
                    ha(n, s), i = null;
                    for (var o in s)
                        if (s.hasOwnProperty(o)) {
                            var a = s[o];
                            o === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && Fi(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && Fi(r.textContent, a, e), i = ["children", "" + a]) : Wr.hasOwnProperty(o) && a != null && o === "onScroll" && W("scroll", r)
                        } switch (n) {
                            case "input":
                                Ei(r), oc(r, s, !0);
                                break;
                            case "textarea":
                                Ei(r), lc(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof s.onClick == "function" && (r.onclick = ws)
                        }
                    r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    o = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = sh(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                        is: r.is
                    }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[st] = t, e[ei] = r, Ep(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (o = pa(n, r), n) {
                            case "dialog":
                                W("cancel", e), W("close", e), i = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                W("load", e), i = r;
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < Pr.length; i++) W(Pr[i], e);
                                i = r;
                                break;
                            case "source":
                                W("error", e), i = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                W("error", e), W("load", e), i = r;
                                break;
                            case "details":
                                W("toggle", e), i = r;
                                break;
                            case "input":
                                sc(e, r), i = la(e, r), W("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, i = q({}, r, {
                                    value: void 0
                                }), W("invalid", e);
                                break;
                            case "textarea":
                                ac(e, r), i = da(e, r), W("invalid", e);
                                break;
                            default:
                                i = r
                        }
                        ha(n, i),
                            a = i;
                        for (s in a)
                            if (a.hasOwnProperty(s)) {
                                var l = a[s];
                                s === "style" ? lh(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && oh(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Hr(e, l) : typeof l == "number" && Hr(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Wr.hasOwnProperty(s) ? l != null && s === "onScroll" && W("scroll", e) : l != null && Nl(e, s, l, o))
                            } switch (n) {
                                case "input":
                                    Ei(e), oc(e, r, !1);
                                    break;
                                case "textarea":
                                    Ei(e), lc(e);
                                    break;
                                case "option":
                                    r.value != null && e.setAttribute("value", "" + Gt(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, s = r.value, s != null ? Xn(e, !!r.multiple, s, !1) : r.defaultValue != null && Xn(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    typeof i.onClick == "function" && (e.onclick = ws)
                            }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return ge(t), null;
        case 6:
            if (e && t.stateNode != null) Lp(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
                if (n = ln(ni.current), ln(at.current), zi(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[st] = t, (s = r.nodeValue !== n) && (e = De, e !== null)) switch (e.tag) {
                        case 3:
                            Fi(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Fi(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    s && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[st] = t, t.stateNode = r
            }
            return ge(t), null;
        case 13:
            if (H(X), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (G && Ae !== null && t.mode & 1 && !(t.flags & 128)) Xh(), rr(), t.flags |= 98560, s = !1;
                else if (s = zi(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!s) throw Error(P(318));
                        if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(P(317));
                        s[st] = t
                    } else rr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    ge(t), s = !1
                } else Je !== null && (Ya(Je), Je = null), s = !0;
                if (!s) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || X.current & 1 ? le === 0 && (le = 3) : lu())), t.updateQueue !== null && (t.flags |= 4), ge(t), null);
        case 4:
            return sr(), Oa(e, t), e === null && qr(t.stateNode.containerInfo), ge(t), null;
        case 10:
            return Hl(t.type._context), ge(t), null;
        case 17:
            return Me(t.type) && ks(), ge(t), null;
        case 19:
            if (H(X), s = t.memoizedState, s === null) return ge(t), null;
            if (r = (t.flags & 128) !== 0, o = s.rendering, o === null)
                if (r) Sr(s, !1);
                else {
                    if (le !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (o = Ps(e), o !== null) {
                                for (t.flags |= 128, Sr(s, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) s = n, e = r, s.flags &= 14680066, o = s.alternate, o === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = o.childLanes, s.lanes = o.lanes, s.child = o.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = o.memoizedProps, s.memoizedState = o.memoizedState, s.updateQueue = o.updateQueue, s.type = o.type, e = o.dependencies, s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return U(X, X.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    s.tail !== null && re() > ar && (t.flags |= 128, r = !0, Sr(s, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Ps(o), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Sr(s, !0), s.tail === null && s.tailMode === "hidden" && !o.alternate && !G) return ge(t), null
                    } else 2 * re() - s.renderingStartTime > ar && n !== 1073741824 && (t.flags |= 128, r = !0, Sr(s, !1), t.lanes = 4194304);
                s.isBackwards ? (o.sibling = t.child, t.child = o) : (n = s.last, n !== null ? n.sibling = o : t.child = o, s.last = o)
            }
            return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = re(), t.sibling = null, n = X.current, U(X, r ? n & 1 | 2 : n & 1), t) : (ge(t), null);
        case 22:
        case 23:
            return au(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? $e & 1073741824 && (ge(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ge(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(P(156, t.tag))
}

function e1(e, t) {
    switch (Il(t), t.tag) {
        case 1:
            return Me(t.type) && ks(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return sr(), H(Ee), H(xe), Ql(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return Xl(t), null;
        case 13:
            if (H(X), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(P(340));
                rr()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return H(X), null;
        case 4:
            return sr(), null;
        case 10:
            return Hl(t.type._context), null;
        case 22:
        case 23:
            return au(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var Ii = !1,
    ye = !1,
    t1 = typeof WeakSet == "function" ? WeakSet : Set,
    M = null;

function Bn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            ee(e, t, r)
        } else n.current = null
}

function Ia(e, t, n) {
    try {
        n()
    } catch (r) {
        ee(e, t, r)
    }
}
var Zc = !1;

function n1(e, t) {
    if (Ca = ys, e = Vh(), _l(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset,
                    s = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, s.nodeType
                } catch {
                    n = null;
                    break e
                }
                var o = 0,
                    a = -1,
                    l = -1,
                    c = 0,
                    d = 0,
                    f = e,
                    h = null;
                t: for (; ;) {
                    for (var m; f !== n || i !== 0 && f.nodeType !== 3 || (a = o + i), f !== s || r !== 0 && f.nodeType !== 3 || (l = o + r), f.nodeType === 3 && (o += f.nodeValue.length), (m = f.firstChild) !== null;) h = f, f = m;
                    for (; ;) {
                        if (f === e) break t;
                        if (h === n && ++c === i && (a = o), h === s && ++d === r && (l = o), (m = f.nextSibling) !== null) break;
                        f = h, h = f.parentNode
                    }
                    f = m
                }
                n = a === -1 || l === -1 ? null : {
                    start: a,
                    end: l
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (ja = {
        focusedElem: e,
        selectionRange: n
    }, ys = !1, M = t; M !== null;)
        if (t = M, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, M = e;
        else
            for (; M !== null;) {
                t = M;
                try {
                    var v = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (v !== null) {
                                var w = v.memoizedProps,
                                    S = v.memoizedState,
                                    g = t.stateNode,
                                    p = g.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Ze(t.type, w), S);
                                g.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var y = t.stateNode.containerInfo;
                            y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(P(163))
                    }
                } catch (x) {
                    ee(t, t.return, x)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, M = e;
                    break
                }
                M = t.return
            }
    return v = Zc, Zc = !1, v
}

function Vr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var s = i.destroy;
                i.destroy = void 0, s !== void 0 && Ia(t, n, s)
            }
            i = i.next
        } while (i !== r)
    }
}

function ro(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Ba(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function Rp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Rp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[st], delete t[ei], delete t[Pa], delete t[zy], delete t[_y])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function $p(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function qc(e) {
    e: for (; ;) {
        for (; e.sibling === null;) {
            if (e.return === null || $p(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Ua(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ws));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Ua(e, t, n), e = e.sibling; e !== null;) Ua(e, t, n), e = e.sibling
}

function Wa(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (Wa(e, t, n), e = e.sibling; e !== null;) Wa(e, t, n), e = e.sibling
}
var de = null,
    qe = !1;

function Nt(e, t, n) {
    for (n = n.child; n !== null;) Ap(e, t, n), n = n.sibling
}

function Ap(e, t, n) {
    if (ot && typeof ot.onCommitFiberUnmount == "function") try {
        ot.onCommitFiberUnmount(Xs, n)
    } catch { }
    switch (n.tag) {
        case 5:
            ye || Bn(n, t);
        case 6:
            var r = de,
                i = qe;
            de = null, Nt(e, t, n), de = r, qe = i, de !== null && (qe ? (e = de, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : de.removeChild(n.stateNode));
            break;
        case 18:
            de !== null && (qe ? (e = de, n = n.stateNode, e.nodeType === 8 ? Ro(e.parentNode, n) : e.nodeType === 1 && Ro(e, n), Xr(e)) : Ro(de, n.stateNode));
            break;
        case 4:
            r = de, i = qe, de = n.stateNode.containerInfo, qe = !0, Nt(e, t, n), de = r, qe = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!ye && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                i = r = r.next;
                do {
                    var s = i,
                        o = s.destroy;
                    s = s.tag, o !== void 0 && (s & 2 || s & 4) && Ia(n, t, o), i = i.next
                } while (i !== r)
            }
            Nt(e, t, n);
            break;
        case 1:
            if (!ye && (Bn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (a) {
                ee(n, t, a)
            }
            Nt(e, t, n);
            break;
        case 21:
            Nt(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (ye = (r = ye) || n.memoizedState !== null, Nt(e, t, n), ye = r) : Nt(e, t, n);
            break;
        default:
            Nt(e, t, n)
    }
}

function Jc(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new t1), t.forEach(function (r) {
            var i = d1.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(i, i))
        })
    }
}

function Xe(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var s = e,
                    o = t,
                    a = o;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            de = a.stateNode, qe = !1;
                            break e;
                        case 3:
                            de = a.stateNode.containerInfo, qe = !0;
                            break e;
                        case 4:
                            de = a.stateNode.containerInfo, qe = !0;
                            break e
                    }
                    a = a.return
                }
                if (de === null) throw Error(P(160));
                Ap(s, o, i), de = null, qe = !1;
                var l = i.alternate;
                l !== null && (l.return = null), i.return = null
            } catch (c) {
                ee(i, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) Dp(t, e), t = t.sibling
}

function Dp(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Xe(t, e), rt(e), r & 4) {
                try {
                    Vr(3, e, e.return), ro(3, e)
                } catch (w) {
                    ee(e, e.return, w)
                }
                try {
                    Vr(5, e, e.return)
                } catch (w) {
                    ee(e, e.return, w)
                }
            }
            break;
        case 1:
            Xe(t, e), rt(e), r & 512 && n !== null && Bn(n, n.return);
            break;
        case 5:
            if (Xe(t, e), rt(e), r & 512 && n !== null && Bn(n, n.return), e.flags & 32) {
                var i = e.stateNode;
                try {
                    Hr(i, "")
                } catch (w) {
                    ee(e, e.return, w)
                }
            }
            if (r & 4 && (i = e.stateNode, i != null)) {
                var s = e.memoizedProps,
                    o = n !== null ? n.memoizedProps : s,
                    a = e.type,
                    l = e.updateQueue;
                if (e.updateQueue = null, l !== null) try {
                    a === "input" && s.type === "radio" && s.name != null && rh(i, s), pa(a, o);
                    var c = pa(a, s);
                    for (o = 0; o < l.length; o += 2) {
                        var d = l[o],
                            f = l[o + 1];
                        d === "style" ? lh(i, f) : d === "dangerouslySetInnerHTML" ? oh(i, f) : d === "children" ? Hr(i, f) : Nl(i, d, f, c)
                    }
                    switch (a) {
                        case "input":
                            ua(i, s);
                            break;
                        case "textarea":
                            ih(i, s);
                            break;
                        case "select":
                            var h = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!s.multiple;
                            var m = s.value;
                            m != null ? Xn(i, !!s.multiple, m, !1) : h !== !!s.multiple && (s.defaultValue != null ? Xn(i, !!s.multiple, s.defaultValue, !0) : Xn(i, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    i[ei] = s
                } catch (w) {
                    ee(e, e.return, w)
                }
            }
            break;
        case 6:
            if (Xe(t, e), rt(e), r & 4) {
                if (e.stateNode === null) throw Error(P(162));
                i = e.stateNode, s = e.memoizedProps;
                try {
                    i.nodeValue = s
                } catch (w) {
                    ee(e, e.return, w)
                }
            }
            break;
        case 3:
            if (Xe(t, e), rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Xr(t.containerInfo)
            } catch (w) {
                ee(e, e.return, w)
            }
            break;
        case 4:
            Xe(t, e), rt(e);
            break;
        case 13:
            Xe(t, e), rt(e), i = e.child, i.flags & 8192 && (s = i.memoizedState !== null, i.stateNode.isHidden = s, !s || i.alternate !== null && i.alternate.memoizedState !== null || (su = re())), r & 4 && Jc(e);
            break;
        case 22:
            if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (ye = (c = ye) || d, Xe(t, e), ye = c) : Xe(t, e), rt(e), r & 8192) {
                if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !d && e.mode & 1)
                    for (M = e, d = e.child; d !== null;) {
                        for (f = M = d; M !== null;) {
                            switch (h = M, m = h.child, h.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Vr(4, h, h.return);
                                    break;
                                case 1:
                                    Bn(h, h.return);
                                    var v = h.stateNode;
                                    if (typeof v.componentWillUnmount == "function") {
                                        r = h, n = h.return;
                                        try {
                                            t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount()
                                        } catch (w) {
                                            ee(r, n, w)
                                        }
                                    }
                                    break;
                                case 5:
                                    Bn(h, h.return);
                                    break;
                                case 22:
                                    if (h.memoizedState !== null) {
                                        td(f);
                                        continue
                                    }
                            }
                            m !== null ? (m.return = h, M = m) : td(f)
                        }
                        d = d.sibling
                    }
                e: for (d = null, f = e; ;) {
                    if (f.tag === 5) {
                        if (d === null) {
                            d = f;
                            try {
                                i = f.stateNode, c ? (s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = f.stateNode, l = f.memoizedProps.style, o = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = ah("display", o))
                            } catch (w) {
                                ee(e, e.return, w)
                            }
                        }
                    } else if (f.tag === 6) {
                        if (d === null) try {
                            f.stateNode.nodeValue = c ? "" : f.memoizedProps
                        } catch (w) {
                            ee(e, e.return, w)
                        }
                    } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                        f.child.return = f, f = f.child;
                        continue
                    }
                    if (f === e) break e;
                    for (; f.sibling === null;) {
                        if (f.return === null || f.return === e) break e;
                        d === f && (d = null), f = f.return
                    }
                    d === f && (d = null), f.sibling.return = f.return, f = f.sibling
                }
            }
            break;
        case 19:
            Xe(t, e), rt(e), r & 4 && Jc(e);
            break;
        case 21:
            break;
        default:
            Xe(t, e), rt(e)
    }
}

function rt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if ($p(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(P(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (Hr(i, ""), r.flags &= -33);
                    var s = qc(e);
                    Wa(e, s, i);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo,
                        a = qc(e);
                    Ua(e, a, o);
                    break;
                default:
                    throw Error(P(161))
            }
        }
        catch (l) {
            ee(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function r1(e, t, n) {
    M = e, Vp(e)
}

function Vp(e, t, n) {
    for (var r = (e.mode & 1) !== 0; M !== null;) {
        var i = M,
            s = i.child;
        if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || Ii;
            if (!o) {
                var a = i.alternate,
                    l = a !== null && a.memoizedState !== null || ye;
                a = Ii;
                var c = ye;
                if (Ii = o, (ye = l) && !c)
                    for (M = i; M !== null;) o = M, l = o.child, o.tag === 22 && o.memoizedState !== null ? nd(i) : l !== null ? (l.return = o, M = l) : nd(i);
                for (; s !== null;) M = s, Vp(s), s = s.sibling;
                M = i, Ii = a, ye = c
            }
            ed(e)
        } else i.subtreeFlags & 8772 && s !== null ? (s.return = i, M = s) : ed(e)
    }
}

function ed(e) {
    for (; M !== null;) {
        var t = M;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ye || ro(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ye)
                            if (n === null) r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : Ze(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            } var s = t.updateQueue;
                        s !== null && zc(t, s, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            zc(t, o, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    l.autoFocus && n.focus();
                                    break;
                                case "img":
                                    l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var d = c.memoizedState;
                                if (d !== null) {
                                    var f = d.dehydrated;
                                    f !== null && Xr(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(P(163))
                }
                ye || t.flags & 512 && Ba(t)
            } catch (h) {
                ee(t, t.return, h)
            }
        }
        if (t === e) {
            M = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, M = n;
            break
        }
        M = t.return
    }
}

function td(e) {
    for (; M !== null;) {
        var t = M;
        if (t === e) {
            M = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, M = n;
            break
        }
        M = t.return
    }
}

function nd(e) {
    for (; M !== null;) {
        var t = M;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        ro(4, t)
                    } catch (l) {
                        ee(t, n, l)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount()
                        } catch (l) {
                            ee(t, i, l)
                        }
                    }
                    var s = t.return;
                    try {
                        Ba(t)
                    } catch (l) {
                        ee(t, s, l)
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        Ba(t)
                    } catch (l) {
                        ee(t, o, l)
                    }
            }
        } catch (l) {
            ee(t, t.return, l)
        }
        if (t === e) {
            M = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return, M = a;
            break
        }
        M = t.return
    }
}
var i1 = Math.ceil,
    Ls = jt.ReactCurrentDispatcher,
    ru = jt.ReactCurrentOwner,
    We = jt.ReactCurrentBatchConfig,
    F = 0,
    ce = null,
    se = null,
    he = 0,
    $e = 0,
    Un = qt(0),
    le = 0,
    oi = null,
    vn = 0,
    io = 0,
    iu = 0,
    Fr = null,
    Ne = null,
    su = 0,
    ar = 1 / 0,
    pt = null,
    Rs = !1,
    Ha = null,
    Bt = null,
    Bi = !1,
    $t = null,
    $s = 0,
    zr = 0,
    Ka = null,
    rs = -1,
    is = 0;

function Se() {
    return F & 6 ? re() : rs !== -1 ? rs : rs = re()
}

function Ut(e) {
    return e.mode & 1 ? F & 2 && he !== 0 ? he & -he : Iy.transition !== null ? (is === 0 && (is = wh()), is) : (e = _, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Th(e.type)), e) : 1
}

function tt(e, t, n, r) {
    if (50 < zr) throw zr = 0, Ka = null, Error(P(185));
    yi(e, n, r), (!(F & 2) || e !== ce) && (e === ce && (!(F & 2) && (io |= n), le === 4 && Lt(e, he)), Le(e, r), n === 1 && F === 0 && !(t.mode & 1) && (ar = re() + 500, eo && Jt()))
}

function Le(e, t) {
    var n = e.callbackNode;
    Ig(e, t);
    var r = gs(e, e === ce ? he : 0);
    if (r === 0) n !== null && dc(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && dc(n), t === 1) e.tag === 0 ? Oy(rd.bind(null, e)) : Kh(rd.bind(null, e)), Vy(function () {
            !(F & 6) && Jt()
        }), n = null;
        else {
            switch (kh(r)) {
                case 1:
                    n = Ll;
                    break;
                case 4:
                    n = vh;
                    break;
                case 16:
                    n = ms;
                    break;
                case 536870912:
                    n = xh;
                    break;
                default:
                    n = ms
            }
            n = Wp(n, Fp.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function Fp(e, t) {
    if (rs = -1, is = 0, F & 6) throw Error(P(327));
    var n = e.callbackNode;
    if (er() && e.callbackNode !== n) return null;
    var r = gs(e, e === ce ? he : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = As(e, r);
    else {
        t = r;
        var i = F;
        F |= 2;
        var s = _p();
        (ce !== e || he !== t) && (pt = null, ar = re() + 500, dn(e, t));
        do try {
            a1();
            break
        } catch (a) {
            zp(e, a)
        }
        while (!0);
        Wl(), Ls.current = s, F = i, se !== null ? t = 0 : (ce = null, he = 0, t = le)
    }
    if (t !== 0) {
        if (t === 2 && (i = xa(e), i !== 0 && (r = i, t = Ga(e, i))), t === 1) throw n = oi, dn(e, 0), Lt(e, r), Le(e, re()), n;
        if (t === 6) Lt(e, r);
        else {
            if (i = e.current.alternate, !(r & 30) && !s1(i) && (t = As(e, r), t === 2 && (s = xa(e), s !== 0 && (r = s, t = Ga(e, s))), t === 1)) throw n = oi, dn(e, 0), Lt(e, r), Le(e, re()), n;
            switch (e.finishedWork = i, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(P(345));
                case 2:
                    rn(e, Ne, pt);
                    break;
                case 3:
                    if (Lt(e, r), (r & 130023424) === r && (t = su + 500 - re(), 10 < t)) {
                        if (gs(e, 0) !== 0) break;
                        if (i = e.suspendedLanes, (i & r) !== r) {
                            Se(), e.pingedLanes |= e.suspendedLanes & i;
                            break
                        }
                        e.timeoutHandle = Ta(rn.bind(null, e, Ne, pt), t);
                        break
                    }
                    rn(e, Ne, pt);
                    break;
                case 4:
                    if (Lt(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, i = -1; 0 < r;) {
                        var o = 31 - et(r);
                        s = 1 << o, o = t[o], o > i && (i = o), r &= ~s
                    }
                    if (r = i, r = re() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * i1(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = Ta(rn.bind(null, e, Ne, pt), r);
                        break
                    }
                    rn(e, Ne, pt);
                    break;
                case 5:
                    rn(e, Ne, pt);
                    break;
                default:
                    throw Error(P(329))
            }
        }
    }
    return Le(e, re()), e.callbackNode === n ? Fp.bind(null, e) : null
}

function Ga(e, t) {
    var n = Fr;
    return e.current.memoizedState.isDehydrated && (dn(e, t).flags |= 256), e = As(e, t), e !== 2 && (t = Ne, Ne = n, t !== null && Ya(t)), e
}

function Ya(e) {
    Ne === null ? Ne = e : Ne.push.apply(Ne, e)
}

function s1(e) {
    for (var t = e; ;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        s = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!nt(s(), i)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function Lt(e, t) {
    for (t &= ~iu, t &= ~io, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - et(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function rd(e) {
    if (F & 6) throw Error(P(327));
    er();
    var t = gs(e, 0);
    if (!(t & 1)) return Le(e, re()), null;
    var n = As(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = xa(e);
        r !== 0 && (t = r, n = Ga(e, r))
    }
    if (n === 1) throw n = oi, dn(e, 0), Lt(e, t), Le(e, re()), n;
    if (n === 6) throw Error(P(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, rn(e, Ne, pt), Le(e, re()), null
}

function ou(e, t) {
    var n = F;
    F |= 1;
    try {
        return e(t)
    } finally {
        F = n, F === 0 && (ar = re() + 500, eo && Jt())
    }
}

function xn(e) {
    $t !== null && $t.tag === 0 && !(F & 6) && er();
    var t = F;
    F |= 1;
    var n = We.transition,
        r = _;
    try {
        if (We.transition = null, _ = 1, e) return e()
    } finally {
        _ = r, We.transition = n, F = t, !(F & 6) && Jt()
    }
}

function au() {
    $e = Un.current, H(Un)
}

function dn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Dy(n)), se !== null)
        for (n = se.return; n !== null;) {
            var r = n;
            switch (Il(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && ks();
                    break;
                case 3:
                    sr(), H(Ee), H(xe), Ql();
                    break;
                case 5:
                    Xl(r);
                    break;
                case 4:
                    sr();
                    break;
                case 13:
                    H(X);
                    break;
                case 19:
                    H(X);
                    break;
                case 10:
                    Hl(r.type._context);
                    break;
                case 22:
                case 23:
                    au()
            }
            n = n.return
        }
    if (ce = e, se = e = Wt(e.current, null), he = $e = t, le = 0, oi = null, iu = io = vn = 0, Ne = Fr = null, an !== null) {
        for (t = 0; t < an.length; t++)
            if (n = an[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var i = r.next,
                    s = n.pending;
                if (s !== null) {
                    var o = s.next;
                    s.next = i, r.next = o
                }
                n.pending = r
            } an = null
    }
    return e
}

function zp(e, t) {
    do {
        var n = se;
        try {
            if (Wl(), es.current = Ms, Es) {
                for (var r = Z.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null), r = r.next
                }
                Es = !1
            }
            if (yn = 0, ue = ae = Z = null, Dr = !1, ri = 0, ru.current = null, n === null || n.return === null) {
                le = 1, oi = t, se = null;
                break
            }
            e: {
                var s = e,
                    o = n.return,
                    a = n,
                    l = t;
                if (t = he, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                    var c = l,
                        d = a,
                        f = d.tag;
                    if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var h = d.alternate;
                        h ? (d.updateQueue = h.updateQueue, d.memoizedState = h.memoizedState, d.lanes = h.lanes) : (d.updateQueue = null, d.memoizedState = null)
                    }
                    var m = Wc(o);
                    if (m !== null) {
                        m.flags &= -257, Hc(m, o, a, s, t), m.mode & 1 && Uc(s, c, t), t = m, l = c;
                        var v = t.updateQueue;
                        if (v === null) {
                            var w = new Set;
                            w.add(l), t.updateQueue = w
                        } else v.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Uc(s, c, t), lu();
                            break e
                        }
                        l = Error(P(426))
                    }
                } else if (G && a.mode & 1) {
                    var S = Wc(o);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256), Hc(S, o, a, s, t), Bl(or(l, a));
                        break e
                    }
                }
                s = l = or(l, a),
                    le !== 4 && (le = 2),
                    Fr === null ? Fr = [s] : Fr.push(s),
                    s = o; do {
                        switch (s.tag) {
                            case 3:
                                s.flags |= 65536, t &= -t, s.lanes |= t;
                                var g = kp(s, l, t);
                                Fc(s, g);
                                break e;
                            case 1:
                                a = l;
                                var p = s.type,
                                    y = s.stateNode;
                                if (!(s.flags & 128) && (typeof p.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Bt === null || !Bt.has(y)))) {
                                    s.flags |= 65536, t &= -t, s.lanes |= t;
                                    var x = Sp(s, a, t);
                                    Fc(s, x);
                                    break e
                                }
                        }
                        s = s.return
                    } while (s !== null)
            }
            Ip(n)
        } catch (C) {
            t = C, se === n && n !== null && (se = n = n.return);
            continue
        }
        break
    } while (!0)
}

function _p() {
    var e = Ls.current;
    return Ls.current = Ms, e === null ? Ms : e
}

function lu() {
    (le === 0 || le === 3 || le === 2) && (le = 4), ce === null || !(vn & 268435455) && !(io & 268435455) || Lt(ce, he)
}

function As(e, t) {
    var n = F;
    F |= 2;
    var r = _p();
    (ce !== e || he !== t) && (pt = null, dn(e, t));
    do try {
        o1();
        break
    } catch (i) {
        zp(e, i)
    }
    while (!0);
    if (Wl(), F = n, Ls.current = r, se !== null) throw Error(P(261));
    return ce = null, he = 0, le
}

function o1() {
    for (; se !== null;) Op(se)
}

function a1() {
    for (; se !== null && !Rg();) Op(se)
}

function Op(e) {
    var t = Up(e.alternate, e, $e);
    e.memoizedProps = e.pendingProps, t === null ? Ip(e) : se = t, ru.current = null
}

function Ip(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = e1(n, t), n !== null) {
                n.flags &= 32767, se = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                le = 6, se = null;
                return
            }
        } else if (n = Jy(n, t, $e), n !== null) {
            se = n;
            return
        }
        if (t = t.sibling, t !== null) {
            se = t;
            return
        }
        se = t = e
    } while (t !== null);
    le === 0 && (le = 5)
}

function rn(e, t, n) {
    var r = _,
        i = We.transition;
    try {
        We.transition = null, _ = 1, l1(e, t, n, r)
    } finally {
        We.transition = i, _ = r
    }
    return null
}

function l1(e, t, n, r) {
    do er(); while ($t !== null);
    if (F & 6) throw Error(P(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(P(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (Bg(e, s), e === ce && (se = ce = null, he = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Bi || (Bi = !0, Wp(ms, function () {
        return er(), null
    })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
        s = We.transition, We.transition = null;
        var o = _;
        _ = 1;
        var a = F;
        F |= 4, ru.current = null, n1(e, n), Dp(n, e), Py(ja), ys = !!Ca, ja = Ca = null, e.current = n, r1(n), $g(), F = a, _ = o, We.transition = s
    } else e.current = n;
    if (Bi && (Bi = !1, $t = e, $s = i), s = e.pendingLanes, s === 0 && (Bt = null), Vg(n.stateNode), Le(e, re()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
            componentStack: i.stack,
            digest: i.digest
        });
    if (Rs) throw Rs = !1, e = Ha, Ha = null, e;
    return $s & 1 && e.tag !== 0 && er(), s = e.pendingLanes, s & 1 ? e === Ka ? zr++ : (zr = 0, Ka = e) : zr = 0, Jt(), null
}

function er() {
    if ($t !== null) {
        var e = kh($s),
            t = We.transition,
            n = _;
        try {
            if (We.transition = null, _ = 16 > e ? 16 : e, $t === null) var r = !1;
            else {
                if (e = $t, $t = null, $s = 0, F & 6) throw Error(P(331));
                var i = F;
                for (F |= 4, M = e.current; M !== null;) {
                    var s = M,
                        o = s.child;
                    if (M.flags & 16) {
                        var a = s.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var c = a[l];
                                for (M = c; M !== null;) {
                                    var d = M;
                                    switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Vr(8, d, s)
                                    }
                                    var f = d.child;
                                    if (f !== null) f.return = d, M = f;
                                    else
                                        for (; M !== null;) {
                                            d = M;
                                            var h = d.sibling,
                                                m = d.return;
                                            if (Rp(d), d === c) {
                                                M = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = m, M = h;
                                                break
                                            }
                                            M = m
                                        }
                                }
                            }
                            var v = s.alternate;
                            if (v !== null) {
                                var w = v.child;
                                if (w !== null) {
                                    v.child = null;
                                    do {
                                        var S = w.sibling;
                                        w.sibling = null, w = S
                                    } while (w !== null)
                                }
                            }
                            M = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && o !== null) o.return = s, M = o;
                    else e: for (; M !== null;) {
                        if (s = M, s.flags & 2048) switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Vr(9, s, s.return)
                        }
                        var g = s.sibling;
                        if (g !== null) {
                            g.return = s.return, M = g;
                            break e
                        }
                        M = s.return
                    }
                }
                var p = e.current;
                for (M = p; M !== null;) {
                    o = M;
                    var y = o.child;
                    if (o.subtreeFlags & 2064 && y !== null) y.return = o, M = y;
                    else e: for (o = p; M !== null;) {
                        if (a = M, a.flags & 2048) try {
                            switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    ro(9, a)
                            }
                        } catch (C) {
                            ee(a, a.return, C)
                        }
                        if (a === o) {
                            M = null;
                            break e
                        }
                        var x = a.sibling;
                        if (x !== null) {
                            x.return = a.return, M = x;
                            break e
                        }
                        M = a.return
                    }
                }
                if (F = i, Jt(), ot && typeof ot.onPostCommitFiberRoot == "function") try {
                    ot.onPostCommitFiberRoot(Xs, e)
                } catch { }
                r = !0
            }
            return r
        } finally {
            _ = n, We.transition = t
        }
    }
    return !1
}

function id(e, t, n) {
    t = or(n, t), t = kp(e, t, 1), e = It(e, t, 1), t = Se(), e !== null && (yi(e, 1, t), Le(e, t))
}

function ee(e, t, n) {
    if (e.tag === 3) id(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                id(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Bt === null || !Bt.has(r))) {
                    e = or(n, e), e = Sp(t, e, 1), t = It(t, e, 1), e = Se(), t !== null && (yi(t, 1, e), Le(t, e));
                    break
                }
            }
            t = t.return
        }
}

function u1(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Se(), e.pingedLanes |= e.suspendedLanes & n, ce === e && (he & n) === n && (le === 4 || le === 3 && (he & 130023424) === he && 500 > re() - su ? dn(e, 0) : iu |= n), Le(e, t)
}

function Bp(e, t) {
    t === 0 && (e.mode & 1 ? (t = Ri, Ri <<= 1, !(Ri & 130023424) && (Ri = 4194304)) : t = 1);
    var n = Se();
    e = kt(e, t), e !== null && (yi(e, t, n), Le(e, n))
}

function c1(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Bp(e, n)
}

function d1(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(P(314))
    }
    r !== null && r.delete(t), Bp(e, n)
}
var Up;
Up = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ee.current) Te = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Te = !1, qy(e, t, n);
            Te = !!(e.flags & 131072)
        }
    else Te = !1, G && t.flags & 1048576 && Gh(t, Cs, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            ns(e, t), e = t.pendingProps;
            var i = nr(t, xe.current);
            Jn(t, n), i = ql(null, t, r, e, i, n);
            var s = Jl();
            return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Me(r) ? (s = !0, Ss(t)) : s = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Gl(t), i.updater = no, t.stateNode = i, i._reactInternals = t, Aa(t, r, e, n), t = Fa(null, t, r, !0, s, n)) : (t.tag = 0, G && s && Ol(t), we(null, t, i, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (ns(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = h1(r), e = Ze(r, e), i) {
                    case 0:
                        t = Va(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Yc(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Kc(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Gc(null, t, r, Ze(r.type, e), n);
                        break e
                }
                throw Error(P(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ze(r, i), Va(e, t, r, i, n);
        case 1:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ze(r, i), Yc(e, t, r, i, n);
        case 3:
            e: {
                if (Np(t), e === null) throw Error(P(387)); r = t.pendingProps,
                    s = t.memoizedState,
                    i = s.element,
                    Jh(e, t),
                    Ts(t, r, null, n);
                var o = t.memoizedState;
                if (r = o.element, s.isDehydrated)
                    if (s = {
                        element: r,
                        isDehydrated: !1,
                        cache: o.cache,
                        pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                        transitions: o.transitions
                    }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
                        i = or(Error(P(423)), t), t = Xc(e, t, r, n, i);
                        break e
                    } else if (r !== i) {
                        i = or(Error(P(424)), t), t = Xc(e, t, r, n, i);
                        break e
                    } else
                        for (Ae = Ot(t.stateNode.containerInfo.firstChild), De = t, G = !0, Je = null, n = Zh(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (rr(), r === i) {
                        t = St(e, t, n);
                        break e
                    }
                    we(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return ep(t), e === null && La(t), r = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, o = i.children, Na(r, i) ? o = null : s !== null && Na(r, s) && (t.flags |= 32), jp(e, t), we(e, t, o, n), t.child;
        case 6:
            return e === null && La(t), null;
        case 13:
            return Tp(e, t, n);
        case 4:
            return Yl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ir(t, null, r, n) : we(e, t, r, n), t.child;
        case 11:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ze(r, i), Kc(e, t, r, i, n);
        case 7:
            return we(e, t, t.pendingProps, n), t.child;
        case 8:
            return we(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return we(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, i = t.pendingProps, s = t.memoizedProps, o = i.value, U(js, r._currentValue), r._currentValue = o, s !== null)
                    if (nt(s.value, o)) {
                        if (s.children === i.children && !Ee.current) {
                            t = St(e, t, n);
                            break e
                        }
                    } else
                        for (s = t.child, s !== null && (s.return = t); s !== null;) {
                            var a = s.dependencies;
                            if (a !== null) {
                                o = s.child;
                                for (var l = a.firstContext; l !== null;) {
                                    if (l.context === r) {
                                        if (s.tag === 1) {
                                            l = vt(-1, n & -n), l.tag = 2;
                                            var c = s.updateQueue;
                                            if (c !== null) {
                                                c = c.shared;
                                                var d = c.pending;
                                                d === null ? l.next = l : (l.next = d.next, d.next = l), c.pending = l
                                            }
                                        }
                                        s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), Ra(s.return, n, t), a.lanes |= n;
                                        break
                                    }
                                    l = l.next
                                }
                            } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
                            else if (s.tag === 18) {
                                if (o = s.return, o === null) throw Error(P(341));
                                o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), Ra(o, n, t), o = s.sibling
                            } else o = s.child;
                            if (o !== null) o.return = s;
                            else
                                for (o = s; o !== null;) {
                                    if (o === t) {
                                        o = null;
                                        break
                                    }
                                    if (s = o.sibling, s !== null) {
                                        s.return = o.return, o = s;
                                        break
                                    }
                                    o = o.return
                                }
                            s = o
                        }
                we(e, t, i.children, n),
                    t = t.child
            }
            return t;
        case 9:
            return i = t.type, r = t.pendingProps.children, Jn(t, n), i = Ke(i), r = r(i), t.flags |= 1, we(e, t, r, n), t.child;
        case 14:
            return r = t.type, i = Ze(r, t.pendingProps), i = Ze(r.type, i), Gc(e, t, r, i, n);
        case 15:
            return bp(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ze(r, i), ns(e, t), t.tag = 1, Me(r) ? (e = !0, Ss(t)) : e = !1, Jn(t, n), wp(t, r, i), Aa(t, r, i, n), Fa(null, t, r, !0, e, n);
        case 19:
            return Pp(e, t, n);
        case 22:
            return Cp(e, t, n)
    }
    throw Error(P(156, t.tag))
};

function Wp(e, t) {
    return yh(e, t)
}

function f1(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Ue(e, t, n, r) {
    return new f1(e, t, n, r)
}

function uu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function h1(e) {
    if (typeof e == "function") return uu(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Pl) return 11;
        if (e === El) return 14
    }
    return 2
}

function Wt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ue(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function ss(e, t, n, r, i, s) {
    var o = 2;
    if (r = e, typeof e == "function") uu(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
        case $n:
            return fn(n.children, i, s, t);
        case Tl:
            o = 8, i |= 8;
            break;
        case ia:
            return e = Ue(12, n, t, i | 2), e.elementType = ia, e.lanes = s, e;
        case sa:
            return e = Ue(13, n, t, i), e.elementType = sa, e.lanes = s, e;
        case oa:
            return e = Ue(19, n, t, i), e.elementType = oa, e.lanes = s, e;
        case eh:
            return so(n, i, s, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case qf:
                    o = 10;
                    break e;
                case Jf:
                    o = 9;
                    break e;
                case Pl:
                    o = 11;
                    break e;
                case El:
                    o = 14;
                    break e;
                case Pt:
                    o = 16, r = null;
                    break e
            }
            throw Error(P(130, e == null ? e : typeof e, ""))
    }
    return t = Ue(o, n, t, i), t.elementType = e, t.type = r, t.lanes = s, t
}

function fn(e, t, n, r) {
    return e = Ue(7, e, r, t), e.lanes = n, e
}

function so(e, t, n, r) {
    return e = Ue(22, e, r, t), e.elementType = eh, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function Oo(e, t, n) {
    return e = Ue(6, e, null, t), e.lanes = n, e
}

function Io(e, t, n) {
    return t = Ue(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function p1(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ko(0), this.expirationTimes = ko(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ko(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function cu(e, t, n, r, i, s, o, a, l) {
    return e = new p1(e, t, n, a, l), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = Ue(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Gl(s), e
}

function m1(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Rn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function Hp(e) {
    if (!e) return Yt;
    e = e._reactInternals;
    e: {
        if (kn(e) !== e || e.tag !== 1) throw Error(P(170));
        var t = e; do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Me(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(P(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Me(n)) return Hh(e, n, t)
    }
    return t
}

function Kp(e, t, n, r, i, s, o, a, l) {
    return e = cu(n, r, !0, e, i, s, o, a, l), e.context = Hp(null), n = e.current, r = Se(), i = Ut(n), s = vt(r, i), s.callback = t ?? null, It(n, s, i), e.current.lanes = i, yi(e, i, r), Le(e, r), e
}

function oo(e, t, n, r) {
    var i = t.current,
        s = Se(),
        o = Ut(i);
    return n = Hp(n), t.context === null ? t.context = n : t.pendingContext = n, t = vt(s, o), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = It(i, t, o), e !== null && (tt(e, i, o, s), Ji(e, i, o)), o
}

function Ds(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function sd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function du(e, t) {
    sd(e, t), (e = e.alternate) && sd(e, t)
}

function g1() {
    return null
}
var Gp = typeof reportError == "function" ? reportError : function (e) {
    console.error(e)
};

function fu(e) {
    this._internalRoot = e
}
ao.prototype.render = fu.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(P(409));
    oo(e, t, null, null)
};
ao.prototype.unmount = fu.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        xn(function () {
            oo(null, e, null, null)
        }), t[wt] = null
    }
};

function ao(e) {
    this._internalRoot = e
}
ao.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Ch();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Mt.length && t !== 0 && t < Mt[n].priority; n++);
        Mt.splice(n, 0, e), n === 0 && Nh(e)
    }
};

function hu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function lo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function od() { }

function y1(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var s = r;
            r = function () {
                var c = Ds(o);
                s.call(c)
            }
        }
        var o = Kp(t, r, e, 0, null, !1, !1, "", od);
        return e._reactRootContainer = o, e[wt] = o.current, qr(e.nodeType === 8 ? e.parentNode : e), xn(), o
    }
    for (; i = e.lastChild;) e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function () {
            var c = Ds(l);
            a.call(c)
        }
    }
    var l = cu(e, 0, !1, null, null, !1, !1, "", od);
    return e._reactRootContainer = l, e[wt] = l.current, qr(e.nodeType === 8 ? e.parentNode : e), xn(function () {
        oo(t, l, n, r)
    }), l
}

function uo(e, t, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
        var o = s;
        if (typeof i == "function") {
            var a = i;
            i = function () {
                var l = Ds(o);
                a.call(l)
            }
        }
        oo(t, o, e, i)
    } else o = y1(n, t, e, i, r);
    return Ds(o)
}
Sh = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Tr(t.pendingLanes);
                n !== 0 && (Rl(t, n | 1), Le(t, re()), !(F & 6) && (ar = re() + 500, Jt()))
            }
            break;
        case 13:
            xn(function () {
                var r = kt(e, 1);
                if (r !== null) {
                    var i = Se();
                    tt(r, e, 1, i)
                }
            }), du(e, 1)
    }
};
$l = function (e) {
    if (e.tag === 13) {
        var t = kt(e, 134217728);
        if (t !== null) {
            var n = Se();
            tt(t, e, 134217728, n)
        }
        du(e, 134217728)
    }
};
bh = function (e) {
    if (e.tag === 13) {
        var t = Ut(e),
            n = kt(e, t);
        if (n !== null) {
            var r = Se();
            tt(n, e, t, r)
        }
        du(e, t)
    }
};
Ch = function () {
    return _
};
jh = function (e, t) {
    var n = _;
    try {
        return _ = e, t()
    } finally {
        _ = n
    }
};
ga = function (e, t, n) {
    switch (t) {
        case "input":
            if (ua(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = Js(r);
                        if (!i) throw Error(P(90));
                        nh(r), ua(r, i)
                    }
                }
            }
            break;
        case "textarea":
            ih(e, n);
            break;
        case "select":
            t = n.value, t != null && Xn(e, !!n.multiple, t, !1)
    }
};
dh = ou;
fh = xn;
var v1 = {
    usingClientEntryPoint: !1,
    Events: [xi, Fn, Js, uh, ch, ou]
},
    br = {
        findFiberByHostInstance: on,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    x1 = {
        bundleType: br.bundleType,
        version: br.version,
        rendererPackageName: br.rendererPackageName,
        rendererConfig: br.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: jt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return e = mh(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: br.findFiberByHostInstance || g1,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ui = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ui.isDisabled && Ui.supportsFiber) try {
        Xs = Ui.inject(x1), ot = Ui
    } catch { }
}
Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = v1;
Fe.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!hu(t)) throw Error(P(200));
    return m1(e, t, null, n)
};
Fe.createRoot = function (e, t) {
    if (!hu(e)) throw Error(P(299));
    var n = !1,
        r = "",
        i = Gp;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = cu(e, 1, !1, null, null, n, !1, r, i), e[wt] = t.current, qr(e.nodeType === 8 ? e.parentNode : e), new fu(t)
};
Fe.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(P(188)) : (e = Object.keys(e).join(","), Error(P(268, e)));
    return e = mh(t), e = e === null ? null : e.stateNode, e
};
Fe.flushSync = function (e) {
    return xn(e)
};
Fe.hydrate = function (e, t, n) {
    if (!lo(t)) throw Error(P(200));
    return uo(null, e, t, !0, n)
};
Fe.hydrateRoot = function (e, t, n) {
    if (!hu(e)) throw Error(P(405));
    var r = n != null && n.hydratedSources || null,
        i = !1,
        s = "",
        o = Gp;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Kp(t, null, e, 1, n ?? null, i, !1, s, o), e[wt] = t.current, qr(e), r)
        for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new ao(t)
};
Fe.render = function (e, t, n) {
    if (!lo(t)) throw Error(P(200));
    return uo(null, e, t, !1, n)
};
Fe.unmountComponentAtNode = function (e) {
    if (!lo(e)) throw Error(P(40));
    return e._reactRootContainer ? (xn(function () {
        uo(null, null, e, !1, function () {
            e._reactRootContainer = null, e[wt] = null
        })
    }), !0) : !1
};
Fe.unstable_batchedUpdates = ou;
Fe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!lo(n)) throw Error(P(200));
    if (e == null || e._reactInternals === void 0) throw Error(P(38));
    return uo(e, t, n, !1, r)
};
Fe.version = "18.3.1-next-f1338f8080-20240426";

function Yp() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yp)
    } catch (e) {
        console.error(e)
    }
}
Yp(), Yf.exports = Fe;
var w1 = Yf.exports,
    Xp, ad = w1;
Xp = ad.createRoot, ad.hydrateRoot;
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ai() {
    return ai = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, ai.apply(this, arguments)
}
var At;
(function (e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(At || (At = {}));
const ld = "popstate";

function k1(e) {
    e === void 0 && (e = {});

    function t(i, s) {
        let {
            pathname: o = "/",
            search: a = "",
            hash: l = ""
        } = Sn(i.location.hash.substr(1));
        return !o.startsWith("/") && !o.startsWith(".") && (o = "/" + o), Xa("", {
            pathname: o,
            search: a,
            hash: l
        }, s.state && s.state.usr || null, s.state && s.state.key || "default")
    }

    function n(i, s) {
        let o = i.document.querySelector("base"),
            a = "";
        if (o && o.getAttribute("href")) {
            let l = i.location.href,
                c = l.indexOf("#");
            a = c === -1 ? l : l.slice(0, c)
        }
        return a + "#" + (typeof s == "string" ? s : Vs(s))
    }

    function r(i, s) {
        pu(i.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(s) + ")")
    }
    return b1(t, n, r, e)
}

function oe(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function pu(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch { }
    }
}

function S1() {
    return Math.random().toString(36).substr(2, 8)
}

function ud(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function Xa(e, t, n, r) {
    return n === void 0 && (n = null), ai({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Sn(t) : t, {
        state: n,
        key: t && t.key || r || S1()
    })
}

function Vs(e) {
    let {
        pathname: t = "/",
        search: n = "",
        hash: r = ""
    } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function Sn(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function b1(e, t, n, r) {
    r === void 0 && (r = {});
    let {
        window: i = document.defaultView,
        v5Compat: s = !1
    } = r, o = i.history, a = At.Pop, l = null, c = d();
    c == null && (c = 0, o.replaceState(ai({}, o.state, {
        idx: c
    }), ""));

    function d() {
        return (o.state || {
            idx: null
        }).idx
    }

    function f() {
        a = At.Pop;
        let S = d(),
            g = S == null ? null : S - c;
        c = S, l && l({
            action: a,
            location: w.location,
            delta: g
        })
    }

    function h(S, g) {
        a = At.Push;
        let p = Xa(w.location, S, g);
        n && n(p, S), c = d() + 1;
        let y = ud(p, c),
            x = w.createHref(p);
        try {
            o.pushState(y, "", x)
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError") throw C;
            i.location.assign(x)
        }
        s && l && l({
            action: a,
            location: w.location,
            delta: 1
        })
    }

    function m(S, g) {
        a = At.Replace;
        let p = Xa(w.location, S, g);
        n && n(p, S), c = d();
        let y = ud(p, c),
            x = w.createHref(p);
        o.replaceState(y, "", x), s && l && l({
            action: a,
            location: w.location,
            delta: 0
        })
    }

    function v(S) {
        let g = i.location.origin !== "null" ? i.location.origin : i.location.href,
            p = typeof S == "string" ? S : Vs(S);
        return p = p.replace(/ $/, "%20"), oe(g, "No window.location.(origin|href) available to create URL for href: " + p), new URL(p, g)
    }
    let w = {
        get action() {
            return a
        },
        get location() {
            return e(i, o)
        },
        listen(S) {
            if (l) throw new Error("A history only accepts one active listener");
            return i.addEventListener(ld, f), l = S, () => {
                i.removeEventListener(ld, f), l = null
            }
        },
        createHref(S) {
            return t(i, S)
        },
        createURL: v,
        encodeLocation(S) {
            let g = v(S);
            return {
                pathname: g.pathname,
                search: g.search,
                hash: g.hash
            }
        },
        push: h,
        replace: m,
        go(S) {
            return o.go(S)
        }
    };
    return w
}
var cd;
(function (e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(cd || (cd = {}));

function C1(e, t, n) {
    return n === void 0 && (n = "/"), j1(e, t, n, !1)
}

function j1(e, t, n, r) {
    let i = typeof t == "string" ? Sn(t) : t,
        s = mu(i.pathname || "/", n);
    if (s == null) return null;
    let o = Qp(e);
    N1(o);
    let a = null;
    for (let l = 0; a == null && l < o.length; ++l) {
        let c = F1(s);
        a = D1(o[l], c, r)
    }
    return a
}

function Qp(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let i = (s, o, a) => {
        let l = {
            relativePath: a === void 0 ? s.path || "" : a,
            caseSensitive: s.caseSensitive === !0,
            childrenIndex: o,
            route: s
        };
        l.relativePath.startsWith("/") && (oe(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(r.length));
        let c = Ht([r, l.relativePath]),
            d = n.concat(l);
        s.children && s.children.length > 0 && (oe(s.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')), Qp(s.children, t, d, c)), !(s.path == null && !s.index) && t.push({
            path: c,
            score: $1(c, s.index),
            routesMeta: d
        })
    };
    return e.forEach((s, o) => {
        var a;
        if (s.path === "" || !((a = s.path) != null && a.includes("?"))) i(s, o);
        else
            for (let l of Zp(s.path)) i(s, o, l)
    }), t
}

function Zp(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, i = n.endsWith("?"), s = n.replace(/\?$/, "");
    if (r.length === 0) return i ? [s, ""] : [s];
    let o = Zp(r.join("/")),
        a = [];
    return a.push(...o.map(l => l === "" ? s : [s, l].join("/"))), i && a.push(...o), a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}

function N1(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : A1(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const T1 = /^:[\w-]+$/,
    P1 = 3,
    E1 = 2,
    M1 = 1,
    L1 = 10,
    R1 = -2,
    dd = e => e === "*";

function $1(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(dd) && (r += R1), t && (r += E1), n.filter(i => !dd(i)).reduce((i, s) => i + (T1.test(s) ? P1 : s === "" ? M1 : L1), r)
}

function A1(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function D1(e, t, n) {
    let {
        routesMeta: r
    } = e, i = {}, s = "/", o = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a],
            c = a === r.length - 1,
            d = s === "/" ? t : t.slice(s.length) || "/",
            f = fd({
                path: l.relativePath,
                caseSensitive: l.caseSensitive,
                end: c
            }, d),
            h = l.route;
        if (!f && c && n && !r[r.length - 1].route.index && (f = fd({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, d)), !f) return null;
        Object.assign(i, f.params), o.push({
            params: i,
            pathname: Ht([s, f.pathname]),
            pathnameBase: I1(Ht([s, f.pathnameBase])),
            route: h
        }), f.pathnameBase !== "/" && (s = Ht([s, f.pathnameBase]))
    }
    return o
}

function fd(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = V1(e.path, e.caseSensitive, e.end), i = t.match(n);
    if (!i) return null;
    let s = i[0],
        o = s.replace(/(.)\/+$/, "$1"),
        a = i.slice(1);
    return {
        params: r.reduce((c, d, f) => {
            let {
                paramName: h,
                isOptional: m
            } = d;
            if (h === "*") {
                let w = a[f] || "";
                o = s.slice(0, s.length - w.length).replace(/(.)\/+$/, "$1")
            }
            const v = a[f];
            return m && !v ? c[h] = void 0 : c[h] = (v || "").replace(/%2F/g, "/"), c
        }, {}),
        pathname: s,
        pathnameBase: o,
        pattern: e
    }
}

function V1(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), pu(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, a, l) => (r.push({
            paramName: a,
            isOptional: l != null
        }), l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r]
}

function F1(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return pu(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function mu(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}

function z1(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: n,
        search: r = "",
        hash: i = ""
    } = typeof e == "string" ? Sn(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : _1(n, t) : t,
        search: B1(r),
        hash: U1(i)
    }
}

function _1(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(i => {
        i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
    }), n.length > 1 ? n.join("/") : "/"
}

function Bo(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function O1(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function qp(e, t) {
    let n = O1(e);
    return t ? n.map((r, i) => i === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}

function Jp(e, t, n, r) {
    r === void 0 && (r = !1);
    let i;
    typeof e == "string" ? i = Sn(e) : (i = ai({}, e), oe(!i.pathname || !i.pathname.includes("?"), Bo("?", "pathname", "search", i)), oe(!i.pathname || !i.pathname.includes("#"), Bo("#", "pathname", "hash", i)), oe(!i.search || !i.search.includes("#"), Bo("#", "search", "hash", i)));
    let s = e === "" || i.pathname === "",
        o = s ? "/" : i.pathname,
        a;
    if (o == null) a = n;
    else {
        let f = t.length - 1;
        if (!r && o.startsWith("..")) {
            let h = o.split("/");
            for (; h[0] === "..";) h.shift(), f -= 1;
            i.pathname = h.join("/")
        }
        a = f >= 0 ? t[f] : "/"
    }
    let l = z1(i, a),
        c = o && o !== "/" && o.endsWith("/"),
        d = (s || o === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (c || d) && (l.pathname += "/"), l
}
const Ht = e => e.join("/").replace(/\/\/+/g, "/"),
    I1 = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    B1 = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    U1 = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;

function W1(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const em = ["post", "put", "patch", "delete"];
new Set(em);
const H1 = ["get", ...em];
new Set(H1);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function li() {
    return li = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, li.apply(this, arguments)
}
const gu = k.createContext(null),
    K1 = k.createContext(null),
    bn = k.createContext(null),
    co = k.createContext(null),
    Cn = k.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    tm = k.createContext(null);

function G1(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t;
    ki() || oe(!1);
    let {
        basename: r,
        navigator: i
    } = k.useContext(bn), {
        hash: s,
        pathname: o,
        search: a
    } = rm(e, {
        relative: n
    }), l = o;
    return r !== "/" && (l = o === "/" ? r : Ht([r, o])), i.createHref({
        pathname: l,
        search: a,
        hash: s
    })
}

function ki() {
    return k.useContext(co) != null
}

function jn() {
    return ki() || oe(!1), k.useContext(co).location
}

function nm(e) {
    k.useContext(bn).static || k.useLayoutEffect(e)
}

function yu() {
    let {
        isDataRoute: e
    } = k.useContext(Cn);
    return e ? ov() : Y1()
}

function Y1() {
    ki() || oe(!1);
    let e = k.useContext(gu),
        {
            basename: t,
            future: n,
            navigator: r
        } = k.useContext(bn),
        {
            matches: i
        } = k.useContext(Cn),
        {
            pathname: s
        } = jn(),
        o = JSON.stringify(qp(i, n.v7_relativeSplatPath)),
        a = k.useRef(!1);
    return nm(() => {
        a.current = !0
    }), k.useCallback(function (c, d) {
        if (d === void 0 && (d = {}), !a.current) return;
        if (typeof c == "number") {
            r.go(c);
            return
        }
        let f = Jp(c, JSON.parse(o), s, d.relative === "path");
        e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : Ht([t, f.pathname])), (d.replace ? r.replace : r.push)(f, d.state, d)
    }, [t, r, o, s, e])
}

function rm(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t, {
        future: r
    } = k.useContext(bn), {
        matches: i
    } = k.useContext(Cn), {
        pathname: s
    } = jn(), o = JSON.stringify(qp(i, r.v7_relativeSplatPath));
    return k.useMemo(() => Jp(e, JSON.parse(o), s, n === "path"), [e, o, s, n])
}

function X1(e, t) {
    return Q1(e, t)
}

function Q1(e, t, n, r) {
    ki() || oe(!1);
    let {
        navigator: i
    } = k.useContext(bn), {
        matches: s
    } = k.useContext(Cn), o = s[s.length - 1], a = o ? o.params : {};
    o && o.pathname;
    let l = o ? o.pathnameBase : "/";
    o && o.route;
    let c = jn(),
        d;
    if (t) {
        var f;
        let S = typeof t == "string" ? Sn(t) : t;
        l === "/" || (f = S.pathname) != null && f.startsWith(l) || oe(!1), d = S
    } else d = c;
    let h = d.pathname || "/",
        m = h;
    if (l !== "/") {
        let S = l.replace(/^\//, "").split("/");
        m = "/" + h.replace(/^\//, "").split("/").slice(S.length).join("/")
    }
    let v = C1(e, {
        pathname: m
    }),
        w = tv(v && v.map(S => Object.assign({}, S, {
            params: Object.assign({}, a, S.params),
            pathname: Ht([l, i.encodeLocation ? i.encodeLocation(S.pathname).pathname : S.pathname]),
            pathnameBase: S.pathnameBase === "/" ? l : Ht([l, i.encodeLocation ? i.encodeLocation(S.pathnameBase).pathname : S.pathnameBase])
        })), s, n, r);
    return t && w ? k.createElement(co.Provider, {
        value: {
            location: li({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, d),
            navigationType: At.Pop
        }
    }, w) : w
}

function Z1() {
    let e = sv(),
        t = W1(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        i = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return k.createElement(k.Fragment, null, k.createElement("h2", null, "Unexpected Application Error!"), k.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? k.createElement("pre", {
        style: i
    }, n) : null, null)
}
const q1 = k.createElement(Z1, null);
class J1 extends k.Component {
    constructor(t) {
        super(t), this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? k.createElement(Cn.Provider, {
            value: this.props.routeContext
        }, k.createElement(tm.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function ev(e) {
    let {
        routeContext: t,
        match: n,
        children: r
    } = e, i = k.useContext(gu);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), k.createElement(Cn.Provider, {
        value: t
    }, r)
}

function tv(e, t, n, r) {
    var i;
    if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
        var s;
        if (!n) return null;
        if (n.errors) e = n.matches;
        else if ((s = r) != null && s.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
        else return null
    }
    let o = e,
        a = (i = n) == null ? void 0 : i.errors;
    if (a != null) {
        let d = o.findIndex(f => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0);
        d >= 0 || oe(!1), o = o.slice(0, Math.min(o.length, d + 1))
    }
    let l = !1,
        c = -1;
    if (n && r && r.v7_partialHydration)
        for (let d = 0; d < o.length; d++) {
            let f = o[d];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (c = d), f.route.id) {
                let {
                    loaderData: h,
                    errors: m
                } = n, v = f.route.loader && h[f.route.id] === void 0 && (!m || m[f.route.id] === void 0);
                if (f.route.lazy || v) {
                    l = !0, c >= 0 ? o = o.slice(0, c + 1) : o = [o[0]];
                    break
                }
            }
        }
    return o.reduceRight((d, f, h) => {
        let m, v = !1,
            w = null,
            S = null;
        n && (m = a && f.route.id ? a[f.route.id] : void 0, w = f.route.errorElement || q1, l && (c < 0 && h === 0 ? (v = !0, S = null) : c === h && (v = !0, S = f.route.hydrateFallbackElement || null)));
        let g = t.concat(o.slice(0, h + 1)),
            p = () => {
                let y;
                return m ? y = w : v ? y = S : f.route.Component ? y = k.createElement(f.route.Component, null) : f.route.element ? y = f.route.element : y = d, k.createElement(ev, {
                    match: f,
                    routeContext: {
                        outlet: d,
                        matches: g,
                        isDataRoute: n != null
                    },
                    children: y
                })
            };
        return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0) ? k.createElement(J1, {
            location: n.location,
            revalidation: n.revalidation,
            component: w,
            error: m,
            children: p(),
            routeContext: {
                outlet: null,
                matches: g,
                isDataRoute: !0
            }
        }) : p()
    }, null)
}
var im = function (e) {
    return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
}(im || {}),
    Fs = function (e) {
        return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
    }(Fs || {});

function nv(e) {
    let t = k.useContext(gu);
    return t || oe(!1), t
}

function rv(e) {
    let t = k.useContext(K1);
    return t || oe(!1), t
}

function iv(e) {
    let t = k.useContext(Cn);
    return t || oe(!1), t
}

function sm(e) {
    let t = iv(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || oe(!1), n.route.id
}

function sv() {
    var e;
    let t = k.useContext(tm),
        n = rv(Fs.UseRouteError),
        r = sm(Fs.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}

function ov() {
    let {
        router: e
    } = nv(im.UseNavigateStable), t = sm(Fs.UseNavigateStable), n = k.useRef(!1);
    return nm(() => {
        n.current = !0
    }), k.useCallback(function (i, s) {
        s === void 0 && (s = {}), n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, li({
            fromRouteId: t
        }, s)))
    }, [e, t])
}

function av(e, t) {
    e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath
}

function Ln(e) {
    oe(!1)
}

function lv(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: i = At.Pop,
        navigator: s,
        static: o = !1,
        future: a
    } = e;
    ki() && oe(!1);
    let l = t.replace(/^\/*/, "/"),
        c = k.useMemo(() => ({
            basename: l,
            navigator: s,
            static: o,
            future: li({
                v7_relativeSplatPath: !1
            }, a)
        }), [l, a, s, o]);
    typeof r == "string" && (r = Sn(r));
    let {
        pathname: d = "/",
        search: f = "",
        hash: h = "",
        state: m = null,
        key: v = "default"
    } = r, w = k.useMemo(() => {
        let S = mu(d, l);
        return S == null ? null : {
            location: {
                pathname: S,
                search: f,
                hash: h,
                state: m,
                key: v
            },
            navigationType: i
        }
    }, [l, d, f, h, m, v, i]);
    return w == null ? null : k.createElement(bn.Provider, {
        value: c
    }, k.createElement(co.Provider, {
        children: n,
        value: w
    }))
}

function uv(e) {
    let {
        children: t,
        location: n
    } = e;
    return X1(Qa(t), n)
}
new Promise(() => { });

function Qa(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return k.Children.forEach(e, (r, i) => {
        if (!k.isValidElement(r)) return;
        let s = [...t, i];
        if (r.type === k.Fragment) {
            n.push.apply(n, Qa(r.props.children, s));
            return
        }
        r.type !== Ln && oe(!1), !r.props.index || !r.props.children || oe(!1);
        let o = {
            id: r.props.id || s.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (o.children = Qa(r.props.children, s)), n.push(o)
    }), n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Za() {
    return Za = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Za.apply(this, arguments)
}

function cv(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        i, s;
    for (s = 0; s < r.length; s++) i = r[s], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}

function dv(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}

function fv(e, t) {
    return e.button === 0 && (!t || t === "_self") && !dv(e)
}

function qa(e) {
    return e === void 0 && (e = ""), new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((t, n) => {
        let r = e[n];
        return t.concat(Array.isArray(r) ? r.map(i => [n, i]) : [
            [n, r]
        ])
    }, []))
}

function hv(e, t) {
    let n = qa(e);
    return t && t.forEach((r, i) => {
        n.has(i) || t.getAll(i).forEach(s => {
            n.append(i, s)
        })
    }), n
}
const pv = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"],
    mv = "6";
try {
    window.__reactRouterVersion = mv
} catch { }
const gv = "startTransition",
    hd = ug[gv];

function yv(e) {
    let {
        basename: t,
        children: n,
        future: r,
        window: i
    } = e, s = k.useRef();
    s.current == null && (s.current = k1({
        window: i,
        v5Compat: !0
    }));
    let o = s.current,
        [a, l] = k.useState({
            action: o.action,
            location: o.location
        }),
        {
            v7_startTransition: c
        } = r || {},
        d = k.useCallback(f => {
            c && hd ? hd(() => l(f)) : l(f)
        }, [l, c]);
    return k.useLayoutEffect(() => o.listen(d), [o, d]), k.useEffect(() => av(r), [r]), k.createElement(lv, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: o,
        future: r
    })
}
const vv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    xv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    os = k.forwardRef(function (t, n) {
        let {
            onClick: r,
            relative: i,
            reloadDocument: s,
            replace: o,
            state: a,
            target: l,
            to: c,
            preventScrollReset: d,
            viewTransition: f
        } = t, h = cv(t, pv), {
            basename: m
        } = k.useContext(bn), v, w = !1;
        if (typeof c == "string" && xv.test(c) && (v = c, vv)) try {
            let y = new URL(window.location.href),
                x = c.startsWith("//") ? new URL(y.protocol + c) : new URL(c),
                C = mu(x.pathname, m);
            x.origin === y.origin && C != null ? c = C + x.search + x.hash : w = !0
        } catch { }
        let S = G1(c, {
            relative: i
        }),
            g = wv(c, {
                replace: o,
                state: a,
                target: l,
                preventScrollReset: d,
                relative: i,
                viewTransition: f
            });

        function p(y) {
            r && r(y), y.defaultPrevented || g(y)
        }
        return k.createElement("a", Za({}, h, {
            href: v || S,
            onClick: w || s ? r : p,
            ref: n,
            target: l
        }))
    });
var pd;
(function (e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(pd || (pd = {}));
var md;
(function (e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(md || (md = {}));

function wv(e, t) {
    let {
        target: n,
        replace: r,
        state: i,
        preventScrollReset: s,
        relative: o,
        viewTransition: a
    } = t === void 0 ? {} : t, l = yu(), c = jn(), d = rm(e, {
        relative: o
    });
    return k.useCallback(f => {
        if (fv(f, n)) {
            f.preventDefault();
            let h = r !== void 0 ? r : Vs(c) === Vs(d);
            l(e, {
                replace: h,
                state: i,
                preventScrollReset: s,
                relative: o,
                viewTransition: a
            })
        }
    }, [c, l, d, r, i, n, e, s, o, a])
}

function kv(e) {
    let t = k.useRef(qa(e)),
        n = k.useRef(!1),
        r = jn(),
        i = k.useMemo(() => hv(r.search, n.current ? null : t.current), [r.search]),
        s = yu(),
        o = k.useCallback((a, l) => {
            const c = qa(typeof a == "function" ? a(i) : a);
            n.current = !0, s("?" + c, l)
        }, [s, i]);
    return [i, o]
}
const vu = k.createContext({});

function xu(e) {
    const t = k.useRef(null);
    return t.current === null && (t.current = e()), t.current
}
const wu = typeof window < "u",
    om = wu ? k.useLayoutEffect : k.useEffect,
    fo = k.createContext(null);

function ku(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}

function Su(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
const bt = (e, t, n) => n > t ? t : n < e ? e : n;
let zs = () => { };
const Ct = {},
    am = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);

function lm(e) {
    return typeof e == "object" && e !== null
}
const um = e => /^0[^.\s]+$/u.test(e);

function bu(e) {
    let t;
    return () => (t === void 0 && (t = e()), t)
}
const He = e => e,
    Sv = (e, t) => n => t(e(n)),
    Si = (...e) => e.reduce(Sv),
    ui = (e, t, n) => {
        const r = t - e;
        return r === 0 ? 1 : (n - e) / r
    };
class Cu {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return ku(this.subscriptions, t), () => Su(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1) this.subscriptions[0](t, n, r);
            else
                for (let s = 0; s < i; s++) {
                    const o = this.subscriptions[s];
                    o && o(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const lt = e => e * 1e3,
    ut = e => e / 1e3;

function cm(e, t) {
    return t ? e * (1e3 / t) : 0
}
const dm = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
    bv = 1e-7,
    Cv = 12;

function jv(e, t, n, r, i) {
    let s, o, a = 0;
    do o = t + (n - t) / 2, s = dm(o, r, i) - e, s > 0 ? n = o : t = o; while (Math.abs(s) > bv && ++a < Cv);
    return o
}

function bi(e, t, n, r) {
    if (e === t && n === r) return He;
    const i = s => jv(s, 0, 1, e, n);
    return s => s === 0 || s === 1 ? s : dm(i(s), t, r)
}
const fm = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    hm = e => t => 1 - e(1 - t),
    pm = bi(.33, 1.53, .69, .99),
    ju = hm(pm),
    mm = fm(ju),
    gm = e => (e *= 2) < 1 ? .5 * ju(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
    Nu = e => 1 - Math.sin(Math.acos(e)),
    ym = hm(Nu),
    vm = fm(Nu),
    Nv = bi(.42, 0, 1, 1),
    Tv = bi(0, 0, .58, 1),
    xm = bi(.42, 0, .58, 1),
    Pv = e => Array.isArray(e) && typeof e[0] != "number",
    wm = e => Array.isArray(e) && typeof e[0] == "number",
    gd = {
        linear: He,
        easeIn: Nv,
        easeInOut: xm,
        easeOut: Tv,
        circIn: Nu,
        circInOut: vm,
        circOut: ym,
        backIn: ju,
        backInOut: mm,
        backOut: pm,
        anticipate: gm
    },
    Ev = e => typeof e == "string",
    yd = e => {
        if (wm(e)) {
            zs(e.length === 4);
            const [t, n, r, i] = e;
            return bi(t, n, r, i)
        } else if (Ev(e)) return zs(gd[e] !== void 0), gd[e];
        return e
    },
    Wi = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"],
    vd = {
        value: null,
        addProjectionMetrics: null
    };

function Mv(e, t) {
    let n = new Set,
        r = new Set,
        i = !1,
        s = !1;
    const o = new WeakSet;
    let a = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    },
        l = 0;

    function c(f) {
        o.has(f) && (d.schedule(f), e()), l++, f(a)
    }
    const d = {
        schedule: (f, h = !1, m = !1) => {
            const w = m && i ? n : r;
            return h && o.add(f), w.has(f) || w.add(f), f
        },
        cancel: f => {
            r.delete(f), o.delete(f)
        },
        process: f => {
            if (a = f, i) {
                s = !0;
                return
            }
            i = !0, [n, r] = [r, n], n.forEach(c), t && vd.value && vd.value.frameloop[t].push(l), l = 0, n.clear(), i = !1, s && (s = !1, d.process(f))
        }
    };
    return d
}
const Lv = 40;

function km(e, t) {
    let n = !1,
        r = !0;
    const i = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    },
        s = () => n = !0,
        o = Wi.reduce((y, x) => (y[x] = Mv(s, t ? x : void 0), y), {}),
        {
            setup: a,
            read: l,
            resolveKeyframes: c,
            preUpdate: d,
            update: f,
            preRender: h,
            render: m,
            postRender: v
        } = o,
        w = () => {
            const y = Ct.useManualTiming ? i.timestamp : performance.now();
            n = !1, Ct.useManualTiming || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(y - i.timestamp, Lv), 1)), i.timestamp = y, i.isProcessing = !0, a.process(i), l.process(i), c.process(i), d.process(i), f.process(i), h.process(i), m.process(i), v.process(i), i.isProcessing = !1, n && t && (r = !1, e(w))
        },
        S = () => {
            n = !0, r = !0, i.isProcessing || e(w)
        };
    return {
        schedule: Wi.reduce((y, x) => {
            const C = o[x];
            return y[x] = (T, b = !1, j = !1) => (n || S(), C.schedule(T, b, j)), y
        }, {}),
        cancel: y => {
            for (let x = 0; x < Wi.length; x++) o[Wi[x]].cancel(y)
        },
        state: i,
        steps: o
    }
}
const {
    schedule: Y,
    cancel: Xt,
    state: fe,
    steps: Uo
} = km(typeof requestAnimationFrame < "u" ? requestAnimationFrame : He, !0);
let as;

function Rv() {
    as = void 0
}
const Pe = {
    now: () => (as === void 0 && Pe.set(fe.isProcessing || Ct.useManualTiming ? fe.timestamp : performance.now()), as),
    set: e => {
        as = e, queueMicrotask(Rv)
    }
},
    Sm = e => t => typeof t == "string" && t.startsWith(e),
    Tu = Sm("--"),
    $v = Sm("var(--"),
    Pu = e => $v(e) ? Av.test(e.split("/*")[0].trim()) : !1,
    Av = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    hr = {
        test: e => typeof e == "number",
        parse: parseFloat,
        transform: e => e
    },
    ci = {
        ...hr,
        transform: e => bt(0, 1, e)
    },
    Hi = {
        ...hr,
        default: 1
    },
    _r = e => Math.round(e * 1e5) / 1e5,
    Eu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function Dv(e) {
    return e == null
}
const Vv = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    Mu = (e, t) => n => !!(typeof n == "string" && Vv.test(n) && n.startsWith(e) || t && !Dv(n) && Object.prototype.hasOwnProperty.call(n, t)),
    bm = (e, t, n) => r => {
        if (typeof r != "string") return r;
        const [i, s, o, a] = r.match(Eu);
        return {
            [e]: parseFloat(i),
            [t]: parseFloat(s),
            [n]: parseFloat(o),
            alpha: a !== void 0 ? parseFloat(a) : 1
        }
    },
    Fv = e => bt(0, 255, e),
    Wo = {
        ...hr,
        transform: e => Math.round(Fv(e))
    },
    un = {
        test: Mu("rgb", "red"),
        parse: bm("red", "green", "blue"),
        transform: ({
            red: e,
            green: t,
            blue: n,
            alpha: r = 1
        }) => "rgba(" + Wo.transform(e) + ", " + Wo.transform(t) + ", " + Wo.transform(n) + ", " + _r(ci.transform(r)) + ")"
    };

function zv(e) {
    let t = "",
        n = "",
        r = "",
        i = "";
    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const Ja = {
    test: Mu("#"),
    parse: zv,
    transform: un.transform
},
    Ci = e => ({
        test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: t => `${t}${e}`
    }),
    Tt = Ci("deg"),
    ct = Ci("%"),
    R = Ci("px"),
    _v = Ci("vh"),
    Ov = Ci("vw"),
    xd = {
        ...ct,
        parse: e => ct.parse(e) / 100,
        transform: e => ct.transform(e * 100)
    },
    Wn = {
        test: Mu("hsl", "hue"),
        parse: bm("hue", "saturation", "lightness"),
        transform: ({
            hue: e,
            saturation: t,
            lightness: n,
            alpha: r = 1
        }) => "hsla(" + Math.round(e) + ", " + ct.transform(_r(t)) + ", " + ct.transform(_r(n)) + ", " + _r(ci.transform(r)) + ")"
    },
    ie = {
        test: e => un.test(e) || Ja.test(e) || Wn.test(e),
        parse: e => un.test(e) ? un.parse(e) : Wn.test(e) ? Wn.parse(e) : Ja.parse(e),
        transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? un.transform(e) : Wn.transform(e),
        getAnimatableNone: e => {
            const t = ie.parse(e);
            return t.alpha = 0, ie.transform(t)
        }
    },
    Iv = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function Bv(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(Eu)) == null ? void 0 : t.length) || 0) + (((n = e.match(Iv)) == null ? void 0 : n.length) || 0) > 0
}
const Cm = "number",
    jm = "color",
    Uv = "var",
    Wv = "var(",
    wd = "${}",
    Hv = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function di(e) {
    const t = e.toString(),
        n = [],
        r = {
            color: [],
            number: [],
            var: []
        },
        i = [];
    let s = 0;
    const a = t.replace(Hv, l => (ie.test(l) ? (r.color.push(s), i.push(jm), n.push(ie.parse(l))) : l.startsWith(Wv) ? (r.var.push(s), i.push(Uv), n.push(l)) : (r.number.push(s), i.push(Cm), n.push(parseFloat(l))), ++s, wd)).split(wd);
    return {
        values: n,
        split: a,
        indexes: r,
        types: i
    }
}

function Nm(e) {
    return di(e).values
}

function Tm(e) {
    const {
        split: t,
        types: n
    } = di(e), r = t.length;
    return i => {
        let s = "";
        for (let o = 0; o < r; o++)
            if (s += t[o], i[o] !== void 0) {
                const a = n[o];
                a === Cm ? s += _r(i[o]) : a === jm ? s += ie.transform(i[o]) : s += i[o]
            } return s
    }
}
const Kv = e => typeof e == "number" ? 0 : ie.test(e) ? ie.getAnimatableNone(e) : e;

function Gv(e) {
    const t = Nm(e);
    return Tm(e)(t.map(Kv))
}
const Qt = {
    test: Bv,
    parse: Nm,
    createTransformer: Tm,
    getAnimatableNone: Gv
};

function Ho(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function Yv({
    hue: e,
    saturation: t,
    lightness: n,
    alpha: r
}) {
    e /= 360, t /= 100, n /= 100;
    let i = 0,
        s = 0,
        o = 0;
    if (!t) i = s = o = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t,
            l = 2 * n - a;
        i = Ho(l, a, e + 1 / 3), s = Ho(l, a, e), o = Ho(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(s * 255),
        blue: Math.round(o * 255),
        alpha: r
    }
}

function _s(e, t) {
    return n => n > 0 ? t : e
}
const Q = (e, t, n) => e + (t - e) * n,
    Ko = (e, t, n) => {
        const r = e * e,
            i = n * (t * t - r) + r;
        return i < 0 ? 0 : Math.sqrt(i)
    },
    Xv = [Ja, un, Wn],
    Qv = e => Xv.find(t => t.test(e));

function kd(e) {
    const t = Qv(e);
    if (!t) return !1;
    let n = t.parse(e);
    return t === Wn && (n = Yv(n)), n
}
const Sd = (e, t) => {
    const n = kd(e),
        r = kd(t);
    if (!n || !r) return _s(e, t);
    const i = {
        ...n
    };
    return s => (i.red = Ko(n.red, r.red, s), i.green = Ko(n.green, r.green, s), i.blue = Ko(n.blue, r.blue, s), i.alpha = Q(n.alpha, r.alpha, s), un.transform(i))
},
    el = new Set(["none", "hidden"]);

function Zv(e, t) {
    return el.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}

function qv(e, t) {
    return n => Q(e, t, n)
}

function Lu(e) {
    return typeof e == "number" ? qv : typeof e == "string" ? Pu(e) ? _s : ie.test(e) ? Sd : tx : Array.isArray(e) ? Pm : typeof e == "object" ? ie.test(e) ? Sd : Jv : _s
}

function Pm(e, t) {
    const n = [...e],
        r = n.length,
        i = e.map((s, o) => Lu(s)(s, t[o]));
    return s => {
        for (let o = 0; o < r; o++) n[o] = i[o](s);
        return n
    }
}

function Jv(e, t) {
    const n = {
        ...e,
        ...t
    },
        r = {};
    for (const i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Lu(e[i])(e[i], t[i]));
    return i => {
        for (const s in r) n[s] = r[s](i);
        return n
    }
}

function ex(e, t) {
    const n = [],
        r = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let i = 0; i < t.values.length; i++) {
        const s = t.types[i],
            o = e.indexes[s][r[s]],
            a = e.values[o] ?? 0;
        n[i] = a, r[s]++
    }
    return n
}
const tx = (e, t) => {
    const n = Qt.createTransformer(t),
        r = di(e),
        i = di(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? el.has(e) && !i.values.length || el.has(t) && !r.values.length ? Zv(e, t) : Si(Pm(ex(r, i), i.values), n) : _s(e, t)
};

function Em(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? Q(e, t, n) : Lu(e)(e, t)
}
const nx = e => {
    const t = ({
        timestamp: n
    }) => e(n);
    return {
        start: (n = !0) => Y.update(t, n),
        stop: () => Xt(t),
        now: () => fe.isProcessing ? fe.timestamp : Pe.now()
    }
},
    Mm = (e, t, n = 10) => {
        let r = "";
        const i = Math.max(Math.round(t / n), 2);
        for (let s = 0; s < i; s++) r += Math.round(e(s / (i - 1)) * 1e4) / 1e4 + ", ";
        return `linear(${r.substring(0, r.length - 2)})`
    },
    Os = 2e4;

function Ru(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < Os;) t += n, r = e.next(t);
    return t >= Os ? 1 / 0 : t
}

function rx(e, t = 100, n) {
    const r = n({
        ...e,
        keyframes: [0, t]
    }),
        i = Math.min(Ru(r), Os);
    return {
        type: "keyframes",
        ease: s => r.next(i * s).value / t,
        duration: ut(i)
    }
}
const ix = 5;

function Lm(e, t, n) {
    const r = Math.max(t - ix, 0);
    return cm(n - e(r), t - r)
}
const J = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
},
    Go = .001;

function sx({
    duration: e = J.duration,
    bounce: t = J.bounce,
    velocity: n = J.velocity,
    mass: r = J.mass
}) {
    let i, s, o = 1 - t;
    o = bt(J.minDamping, J.maxDamping, o), e = bt(J.minDuration, J.maxDuration, ut(e)), o < 1 ? (i = c => {
        const d = c * o,
            f = d * e,
            h = d - n,
            m = tl(c, o),
            v = Math.exp(-f);
        return Go - h / m * v
    }, s = c => {
        const f = c * o * e,
            h = f * n + n,
            m = Math.pow(o, 2) * Math.pow(c, 2) * e,
            v = Math.exp(-f),
            w = tl(Math.pow(c, 2), o);
        return (-i(c) + Go > 0 ? -1 : 1) * ((h - m) * v) / w
    }) : (i = c => {
        const d = Math.exp(-c * e),
            f = (c - n) * e + 1;
        return -Go + d * f
    }, s = c => {
        const d = Math.exp(-c * e),
            f = (n - c) * (e * e);
        return d * f
    });
    const a = 5 / e,
        l = ax(i, s, a);
    if (e = lt(e), isNaN(l)) return {
        stiffness: J.stiffness,
        damping: J.damping,
        duration: e
    }; {
        const c = Math.pow(l, 2) * r;
        return {
            stiffness: c,
            damping: o * 2 * Math.sqrt(r * c),
            duration: e
        }
    }
}
const ox = 12;

function ax(e, t, n) {
    let r = n;
    for (let i = 1; i < ox; i++) r = r - e(r) / t(r);
    return r
}

function tl(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const lx = ["duration", "bounce"],
    ux = ["stiffness", "damping", "mass"];

function bd(e, t) {
    return t.some(n => e[n] !== void 0)
}

function cx(e) {
    let t = {
        velocity: J.velocity,
        stiffness: J.stiffness,
        damping: J.damping,
        mass: J.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!bd(e, ux) && bd(e, lx))
        if (e.visualDuration) {
            const n = e.visualDuration,
                r = 2 * Math.PI / (n * 1.2),
                i = r * r,
                s = 2 * bt(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
            t = {
                ...t,
                mass: J.mass,
                stiffness: i,
                damping: s
            }
        } else {
            const n = sx(e);
            t = {
                ...t,
                ...n,
                mass: J.mass
            }, t.isResolvedFromDuration = !0
        } return t
}

function Is(e = J.visualDuration, t = J.bounce) {
    const n = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: t
    } : e;
    let {
        restSpeed: r,
        restDelta: i
    } = n;
    const s = n.keyframes[0],
        o = n.keyframes[n.keyframes.length - 1],
        a = {
            done: !1,
            value: s
        },
        {
            stiffness: l,
            damping: c,
            mass: d,
            duration: f,
            velocity: h,
            isResolvedFromDuration: m
        } = cx({
            ...n,
            velocity: -ut(n.velocity || 0)
        }),
        v = h || 0,
        w = c / (2 * Math.sqrt(l * d)),
        S = o - s,
        g = ut(Math.sqrt(l / d)),
        p = Math.abs(S) < 5;
    r || (r = p ? J.restSpeed.granular : J.restSpeed.default), i || (i = p ? J.restDelta.granular : J.restDelta.default);
    let y;
    if (w < 1) {
        const C = tl(g, w);
        y = T => {
            const b = Math.exp(-w * g * T);
            return o - b * ((v + w * g * S) / C * Math.sin(C * T) + S * Math.cos(C * T))
        }
    } else if (w === 1) y = C => o - Math.exp(-g * C) * (S + (v + g * S) * C);
    else {
        const C = g * Math.sqrt(w * w - 1);
        y = T => {
            const b = Math.exp(-w * g * T),
                j = Math.min(C * T, 300);
            return o - b * ((v + w * g * S) * Math.sinh(j) + C * S * Math.cosh(j)) / C
        }
    }
    const x = {
        calculatedDuration: m && f || null,
        next: C => {
            const T = y(C);
            if (m) a.done = C >= f;
            else {
                let b = C === 0 ? v : 0;
                w < 1 && (b = C === 0 ? lt(v) : Lm(y, C, T));
                const j = Math.abs(b) <= r,
                    $ = Math.abs(o - T) <= i;
                a.done = j && $
            }
            return a.value = a.done ? o : T, a
        },
        toString: () => {
            const C = Math.min(Ru(x), Os),
                T = Mm(b => x.next(C * b).value, C, 30);
            return C + "ms " + T
        },
        toTransition: () => { }
    };
    return x
}
Is.applyToOptions = e => {
    const t = rx(e, 100, Is);
    return e.ease = t.ease, e.duration = lt(t.duration), e.type = "keyframes", e
};

function nl({
    keyframes: e,
    velocity: t = 0,
    power: n = .8,
    timeConstant: r = 325,
    bounceDamping: i = 10,
    bounceStiffness: s = 500,
    modifyTarget: o,
    min: a,
    max: l,
    restDelta: c = .5,
    restSpeed: d
}) {
    const f = e[0],
        h = {
            done: !1,
            value: f
        },
        m = j => a !== void 0 && j < a || l !== void 0 && j > l,
        v = j => a === void 0 ? l : l === void 0 || Math.abs(a - j) < Math.abs(l - j) ? a : l;
    let w = n * t;
    const S = f + w,
        g = o === void 0 ? S : o(S);
    g !== S && (w = g - f);
    const p = j => -w * Math.exp(-j / r),
        y = j => g + p(j),
        x = j => {
            const $ = p(j),
                N = y(j);
            h.done = Math.abs($) <= c, h.value = h.done ? g : N
        };
    let C, T;
    const b = j => {
        m(h.value) && (C = j, T = Is({
            keyframes: [h.value, v(h.value)],
            velocity: Lm(y, j, h.value),
            damping: i,
            stiffness: s,
            restDelta: c,
            restSpeed: d
        }))
    };
    return b(0), {
        calculatedDuration: null,
        next: j => {
            let $ = !1;
            return !T && C === void 0 && ($ = !0, x(j), b(j)), C !== void 0 && j >= C ? T.next(j - C) : (!$ && x(j), h)
        }
    }
}

function dx(e, t, n) {
    const r = [],
        i = n || Ct.mix || Em,
        s = e.length - 1;
    for (let o = 0; o < s; o++) {
        let a = i(e[o], e[o + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[o] || He : t;
            a = Si(l, a)
        }
        r.push(a)
    }
    return r
}

function fx(e, t, {
    clamp: n = !0,
    ease: r,
    mixer: i
} = {}) {
    const s = e.length;
    if (zs(s === t.length), s === 1) return () => t[0];
    if (s === 2 && t[0] === t[1]) return () => t[1];
    const o = e[0] === e[1];
    e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
    const a = dx(t, r, i),
        l = a.length,
        c = d => {
            if (o && d < e[0]) return t[0];
            let f = 0;
            if (l > 1)
                for (; f < e.length - 2 && !(d < e[f + 1]); f++);
            const h = ui(e[f], e[f + 1], d);
            return a[f](h)
        };
    return n ? d => c(bt(e[0], e[s - 1], d)) : c
}

function hx(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = ui(0, t, r);
        e.push(Q(n, 1, i))
    }
}

function px(e) {
    const t = [0];
    return hx(t, e.length - 1), t
}

function mx(e, t) {
    return e.map(n => n * t)
}

function gx(e, t) {
    return e.map(() => t || xm).splice(0, e.length - 1)
}

function Or({
    duration: e = 300,
    keyframes: t,
    times: n,
    ease: r = "easeInOut"
}) {
    const i = Pv(r) ? r.map(yd) : yd(r),
        s = {
            done: !1,
            value: t[0]
        },
        o = mx(n && n.length === t.length ? n : px(t), e),
        a = fx(o, t, {
            ease: Array.isArray(i) ? i : gx(t, i)
        });
    return {
        calculatedDuration: e,
        next: l => (s.value = a(l), s.done = l >= e, s)
    }
}
const yx = e => e !== null;

function $u(e, {
    repeat: t,
    repeatType: n = "loop"
}, r, i = 1) {
    const s = e.filter(yx),
        a = i < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
    return !a || r === void 0 ? s[a] : r
}
const vx = {
    decay: nl,
    inertia: nl,
    tween: Or,
    keyframes: Or,
    spring: Is
};

function Rm(e) {
    typeof e.type == "string" && (e.type = vx[e.type])
}
class Au {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(t => {
            this.resolve = t
        })
    }
    notifyFinished() {
        this.resolve()
    }
    then(t, n) {
        return this.finished.then(t, n)
    }
}
const xx = e => e / 100;
class Du extends Au {
    constructor(t) {
        super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
            var r, i;
            const {
                motionValue: n
            } = this.options;
            n && n.updatedAt !== Pe.now() && this.tick(Pe.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (i = (r = this.options).onStop) == null || i.call(r))
        }, this.options = t, this.initAnimation(), this.play(), t.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {
            options: t
        } = this;
        Rm(t);
        const {
            type: n = Or,
            repeat: r = 0,
            repeatDelay: i = 0,
            repeatType: s,
            velocity: o = 0
        } = t;
        let {
            keyframes: a
        } = t;
        const l = n || Or;
        l !== Or && typeof a[0] != "number" && (this.mixKeyframes = Si(xx, Em(a[0], a[1])), a = [0, 100]);
        const c = l({
            ...t,
            keyframes: a
        });
        s === "mirror" && (this.mirroredGenerator = l({
            ...t,
            keyframes: [...a].reverse(),
            velocity: -o
        })), c.calculatedDuration === null && (c.calculatedDuration = Ru(c));
        const {
            calculatedDuration: d
        } = c;
        this.calculatedDuration = d, this.resolvedDuration = d + i, this.totalDuration = this.resolvedDuration * (r + 1) - i, this.generator = c
    }
    updateTime(t) {
        const n = Math.round(t - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n
    }
    tick(t, n = !1) {
        const {
            generator: r,
            totalDuration: i,
            mixKeyframes: s,
            mirroredGenerator: o,
            resolvedDuration: a,
            calculatedDuration: l
        } = this;
        if (this.startTime === null) return r.next(0);
        const {
            delay: c = 0,
            keyframes: d,
            repeat: f,
            repeatType: h,
            repeatDelay: m,
            type: v,
            onUpdate: w,
            finalKeyframe: S
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)), n ? this.currentTime = t : this.updateTime(t);
        const g = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1),
            p = this.playbackSpeed >= 0 ? g < 0 : g > i;
        this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = i);
        let y = this.currentTime,
            x = r;
        if (f) {
            const j = Math.min(this.currentTime, i) / a;
            let $ = Math.floor(j),
                N = j % 1;
            !N && j >= 1 && (N = 1), N === 1 && $--, $ = Math.min($, f + 1), !!($ % 2) && (h === "reverse" ? (N = 1 - N, m && (N -= m / a)) : h === "mirror" && (x = o)), y = bt(0, 1, N) * a
        }
        const C = p ? {
            done: !1,
            value: d[0]
        } : x.next(y);
        s && (C.value = s(C.value));
        let {
            done: T
        } = C;
        !p && l !== null && (T = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
        const b = this.holdTime === null && (this.state === "finished" || this.state === "running" && T);
        return b && v !== nl && (C.value = $u(d, this.options, S, this.speed)), w && w(C.value), b && this.finish(), C
    }
    then(t, n) {
        return this.finished.then(t, n)
    }
    get duration() {
        return ut(this.calculatedDuration)
    }
    get time() {
        return ut(this.currentTime)
    }
    set time(t) {
        var n;
        t = lt(t), this.currentTime = t, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), (n = this.driver) == null || n.start(!1)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        this.updateTime(Pe.now());
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t, n && (this.time = ut(this.currentTime))
    }
    play() {
        var i, s;
        if (this.isStopped) return;
        const {
            driver: t = nx,
            startTime: n
        } = this.options;
        this.driver || (this.driver = t(o => this.tick(o))), (s = (i = this.options).onPlay) == null || s.call(i);
        const r = this.driver.now();
        this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n ?? r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        this.state = "paused", this.updateTime(Pe.now()), this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null
    }
    finish() {
        var t, n;
        this.notifyFinished(), this.teardown(), this.state = "finished", (n = (t = this.options).onComplete) == null || n.call(t)
    }
    cancel() {
        var t, n;
        this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), (n = (t = this.options).onCancel) == null || n.call(t)
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0, this.tick(t, !0)
    }
    attachTimeline(t) {
        var n;
        return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), (n = this.driver) == null || n.stop(), t.observe(this)
    }
}

function wx(e) {
    for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1])
}
const cn = e => e * 180 / Math.PI,
    rl = e => {
        const t = cn(Math.atan2(e[1], e[0]));
        return il(t)
    },
    kx = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
        rotate: rl,
        rotateZ: rl,
        skewX: e => cn(Math.atan(e[1])),
        skewY: e => cn(Math.atan(e[2])),
        skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
    },
    il = e => (e = e % 360, e < 0 && (e += 360), e),
    Cd = rl,
    jd = e => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
    Nd = e => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
    Sx = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: jd,
        scaleY: Nd,
        scale: e => (jd(e) + Nd(e)) / 2,
        rotateX: e => il(cn(Math.atan2(e[6], e[5]))),
        rotateY: e => il(cn(Math.atan2(-e[2], e[0]))),
        rotateZ: Cd,
        rotate: Cd,
        skewX: e => cn(Math.atan(e[4])),
        skewY: e => cn(Math.atan(e[1])),
        skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
    };

function sl(e) {
    return e.includes("scale") ? 1 : 0
}

function ol(e, t) {
    if (!e || e === "none") return sl(t);
    const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let r, i;
    if (n) r = Sx, i = n;
    else {
        const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        r = kx, i = a
    }
    if (!i) return sl(t);
    const s = r[t],
        o = i[1].split(",").map(Cx);
    return typeof s == "function" ? s(o) : o[s]
}
const bx = (e, t) => {
    const {
        transform: n = "none"
    } = getComputedStyle(e);
    return ol(n, t)
};

function Cx(e) {
    return parseFloat(e.trim())
}
const pr = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    mr = new Set(pr),
    Td = e => e === hr || e === R,
    jx = new Set(["x", "y", "z"]),
    Nx = pr.filter(e => !jx.has(e));

function Tx(e) {
    const t = [];
    return Nx.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
    }), t
}
const hn = {
    width: ({
        x: e
    }, {
        paddingLeft: t = "0",
        paddingRight: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({
        y: e
    }, {
        paddingTop: t = "0",
        paddingBottom: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {
        top: t
    }) => parseFloat(t),
    left: (e, {
        left: t
    }) => parseFloat(t),
    bottom: ({
        y: e
    }, {
        top: t
    }) => parseFloat(t) + (e.max - e.min),
    right: ({
        x: e
    }, {
        left: t
    }) => parseFloat(t) + (e.max - e.min),
    x: (e, {
        transform: t
    }) => ol(t, "x"),
    y: (e, {
        transform: t
    }) => ol(t, "y")
};
hn.translateX = hn.x;
hn.translateY = hn.y;
const pn = new Set;
let al = !1,
    ll = !1,
    ul = !1;

function $m() {
    if (ll) {
        const e = Array.from(pn).filter(r => r.needsMeasurement),
            t = new Set(e.map(r => r.element)),
            n = new Map;
        t.forEach(r => {
            const i = Tx(r);
            i.length && (n.set(r, i), r.render())
        }), e.forEach(r => r.measureInitialState()), t.forEach(r => {
            r.render();
            const i = n.get(r);
            i && i.forEach(([s, o]) => {
                var a;
                (a = r.getValue(s)) == null || a.set(o)
            })
        }), e.forEach(r => r.measureEndState()), e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        })
    }
    ll = !1, al = !1, pn.forEach(e => e.complete(ul)), pn.clear()
}

function Am() {
    pn.forEach(e => {
        e.readKeyframes(), e.needsMeasurement && (ll = !0)
    })
}

function Px() {
    ul = !0, Am(), $m(), ul = !1
}
class Vu {
    constructor(t, n, r, i, s, o = !1) {
        this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = s, this.isAsync = o
    }
    scheduleResolve() {
        this.state = "scheduled", this.isAsync ? (pn.add(this), al || (al = !0, Y.read(Am), Y.resolveKeyframes($m))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: n,
            element: r,
            motionValue: i
        } = this;
        if (t[0] === null) {
            const s = i == null ? void 0 : i.get(),
                o = t[t.length - 1];
            if (s !== void 0) t[0] = s;
            else if (r && n) {
                const a = r.readValue(n, o);
                a != null && (t[0] = a)
            }
            t[0] === void 0 && (t[0] = o), i && s === void 0 && i.set(t[0])
        }
        wx(t)
    }
    setFinalKeyframe() { }
    measureInitialState() { }
    renderEndStyles() { }
    measureEndState() { }
    complete(t = !1) {
        this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), pn.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (pn.delete(this), this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const Ex = e => e.startsWith("--");

function Mx(e, t, n) {
    Ex(t) ? e.style.setProperty(t, n) : e.style[t] = n
}
const Lx = bu(() => window.ScrollTimeline !== void 0),
    Rx = {};

function $x(e, t) {
    const n = bu(e);
    return () => Rx[t] ?? n()
}
const Dm = $x(() => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}, "linearEasing"),
    Er = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
    Pd = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: Er([0, .65, .55, 1]),
        circOut: Er([.55, 0, 1, .45]),
        backIn: Er([.31, .01, .66, -.59]),
        backOut: Er([.33, 1.53, .69, .99])
    };

function Vm(e, t) {
    if (e) return typeof e == "function" ? Dm() ? Mm(e, t) : "ease-out" : wm(e) ? Er(e) : Array.isArray(e) ? e.map(n => Vm(n, t) || Pd.easeOut) : Pd[e]
}

function Ax(e, t, n, {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: a = "easeOut",
    times: l
} = {}, c = void 0) {
    const d = {
        [t]: n
    };
    l && (d.offset = l);
    const f = Vm(a, i);
    Array.isArray(f) && (d.easing = f);
    const h = {
        delay: r,
        duration: i,
        easing: Array.isArray(f) ? "linear" : f,
        fill: "both",
        iterations: s + 1,
        direction: o === "reverse" ? "alternate" : "normal"
    };
    return c && (h.pseudoElement = c), e.animate(d, h)
}

function Fm(e) {
    return typeof e == "function" && "applyToOptions" in e
}

function Dx({
    type: e,
    ...t
}) {
    return Fm(e) && Dm() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t)
}
class Vx extends Au {
    constructor(t) {
        if (super(), this.finishedTime = null, this.isStopped = !1, !t) return;
        const {
            element: n,
            name: r,
            keyframes: i,
            pseudoElement: s,
            allowFlatten: o = !1,
            finalKeyframe: a,
            onComplete: l
        } = t;
        this.isPseudoElement = !!s, this.allowFlatten = o, this.options = t, zs(typeof t.type != "string");
        const c = Dx(t);
        this.animation = Ax(n, r, i, c, s), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
            if (this.finishedTime = this.time, !s) {
                const d = $u(i, this.options, a, this.speed);
                this.updateMotionValue ? this.updateMotionValue(d) : Mx(n, r, d), this.animation.cancel()
            }
            l == null || l(), this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        var t, n;
        (n = (t = this.animation).finish) == null || n.call(t)
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch { }
    }
    stop() {
        if (this.isStopped) return;
        this.isStopped = !0;
        const {
            state: t
        } = this;
        t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        var t, n;
        this.isPseudoElement || (n = (t = this.animation).commitStyles) == null || n.call(t)
    }
    get duration() {
        var n, r;
        const t = ((r = (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) == null ? void 0 : r.call(n).duration) || 0;
        return ut(Number(t))
    }
    get time() {
        return ut(Number(this.animation.currentTime) || 0)
    }
    set time(t) {
        this.finishedTime = null, this.animation.currentTime = lt(t)
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(t) {
        t < 0 && (this.finishedTime = null), this.animation.playbackRate = t
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return Number(this.animation.startTime)
    }
    set startTime(t) {
        this.animation.startTime = t
    }
    attachTimeline({
        timeline: t,
        observe: n
    }) {
        var r;
        return this.allowFlatten && ((r = this.animation.effect) == null || r.updateTiming({
            easing: "linear"
        })), this.animation.onfinish = null, t && Lx() ? (this.animation.timeline = t, He) : n(this)
    }
}
const zm = {
    anticipate: gm,
    backInOut: mm,
    circInOut: vm
};

function Fx(e) {
    return e in zm
}

function zx(e) {
    typeof e.ease == "string" && Fx(e.ease) && (e.ease = zm[e.ease])
}
const Ed = 10;
class _x extends Vx {
    constructor(t) {
        zx(t), Rm(t), super(t), t.startTime && (this.startTime = t.startTime), this.options = t
    }
    updateMotionValue(t) {
        const {
            motionValue: n,
            onUpdate: r,
            onComplete: i,
            element: s,
            ...o
        } = this.options;
        if (!n) return;
        if (t !== void 0) {
            n.set(t);
            return
        }
        const a = new Du({
            ...o,
            autoplay: !1
        }),
            l = lt(this.finishedTime ?? this.time);
        n.setWithVelocity(a.sample(l - Ed).value, a.sample(l).value, Ed), a.stop()
    }
}
const Md = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Qt.test(e) || e === "0") && !e.startsWith("url("));

function Ox(e) {
    const t = e[0];
    if (e.length === 1) return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t) return !0
}

function Ix(e, t, n, r) {
    const i = e[0];
    if (i === null) return !1;
    if (t === "display" || t === "visibility") return !0;
    const s = e[e.length - 1],
        o = Md(i, t),
        a = Md(s, t);
    return !o || !a ? !1 : Ox(e) || (n === "spring" || Fm(n)) && r
}

function Fu(e) {
    return lm(e) && "offsetHeight" in e
}
const Bx = new Set(["opacity", "clipPath", "filter", "transform"]),
    Ux = bu(() => Object.hasOwnProperty.call(Element.prototype, "animate"));

function Wx(e) {
    var c;
    const {
        motionValue: t,
        name: n,
        repeatDelay: r,
        repeatType: i,
        damping: s,
        type: o
    } = e;
    if (!Fu((c = t == null ? void 0 : t.owner) == null ? void 0 : c.current)) return !1;
    const {
        onUpdate: a,
        transformTemplate: l
    } = t.owner.getProps();
    return Ux() && n && Bx.has(n) && (n !== "transform" || !l) && !a && !r && i !== "mirror" && s !== 0 && o !== "inertia"
}
const Hx = 40;
class Kx extends Au {
    constructor({
        autoplay: t = !0,
        delay: n = 0,
        type: r = "keyframes",
        repeat: i = 0,
        repeatDelay: s = 0,
        repeatType: o = "loop",
        keyframes: a,
        name: l,
        motionValue: c,
        element: d,
        ...f
    }) {
        var v;
        super(), this.stop = () => {
            var w, S;
            this._animation && (this._animation.stop(), (w = this.stopTimeline) == null || w.call(this)), (S = this.keyframeResolver) == null || S.cancel()
        }, this.createdAt = Pe.now();
        const h = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: i,
            repeatDelay: s,
            repeatType: o,
            name: l,
            motionValue: c,
            element: d,
            ...f
        },
            m = (d == null ? void 0 : d.KeyframeResolver) || Vu;
        this.keyframeResolver = new m(a, (w, S, g) => this.onKeyframesResolved(w, S, h, !g), l, c, d), (v = this.keyframeResolver) == null || v.scheduleResolve()
    }
    onKeyframesResolved(t, n, r, i) {
        this.keyframeResolver = void 0;
        const {
            name: s,
            type: o,
            velocity: a,
            delay: l,
            isHandoff: c,
            onUpdate: d
        } = r;
        this.resolvedAt = Pe.now(), Ix(t, s, o, a) || ((Ct.instantAnimations || !l) && (d == null || d($u(t, r, n))), t[0] = t[t.length - 1], r.duration = 0, r.repeat = 0);
        const h = {
            startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > Hx ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: n,
            ...r,
            keyframes: t
        },
            m = !c && Wx(h) ? new _x({
                ...h,
                element: h.motionValue.owner.current
            }) : new Du(h);
        m.finished.then(() => this.notifyFinished()).catch(He), this.pendingTimeline && (this.stopTimeline = m.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = m
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(t, n) {
        return this.finished.finally(t).then(() => { })
    }
    get animation() {
        var t;
        return this._animation || ((t = this.keyframeResolver) == null || t.resume(), Px()), this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get time() {
        return this.animation.time
    }
    set time(t) {
        this.animation.time = t
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(t) {
        this.animation.speed = t
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(t) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        var t;
        this._animation && this.animation.cancel(), (t = this.keyframeResolver) == null || t.cancel()
    }
}
const Gx = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function Yx(e) {
    const t = Gx.exec(e);
    if (!t) return [,];
    const [, n, r, i] = t;
    return [`--${n ?? r}`, i]
}

function _m(e, t, n = 1) {
    const [r, i] = Yx(e);
    if (!r) return;
    const s = window.getComputedStyle(t).getPropertyValue(r);
    if (s) {
        const o = s.trim();
        return am(o) ? parseFloat(o) : o
    }
    return Pu(i) ? _m(i, t, n + 1) : i
}

function zu(e, t) {
    return (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e
}
const Om = new Set(["width", "height", "top", "left", "right", "bottom", ...pr]),
    Xx = {
        test: e => e === "auto",
        parse: e => e
    },
    Im = e => t => t.test(e),
    Bm = [hr, R, ct, Tt, Ov, _v, Xx],
    Ld = e => Bm.find(Im(e));

function Qx(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || um(e) : !0
}
const Zx = new Set(["brightness", "contrast", "saturate", "opacity"]);

function qx(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow") return e;
    const [r] = n.match(Eu) || [];
    if (!r) return e;
    const i = n.replace(r, "");
    let s = Zx.has(t) ? 1 : 0;
    return r !== n && (s *= 100), t + "(" + s + i + ")"
}
const Jx = /\b([a-z-]*)\(.*?\)/gu,
    cl = {
        ...Qt,
        getAnimatableNone: e => {
            const t = e.match(Jx);
            return t ? t.map(qx).join(" ") : e
        }
    },
    Rd = {
        ...hr,
        transform: Math.round
    },
    e2 = {
        rotate: Tt,
        rotateX: Tt,
        rotateY: Tt,
        rotateZ: Tt,
        scale: Hi,
        scaleX: Hi,
        scaleY: Hi,
        scaleZ: Hi,
        skew: Tt,
        skewX: Tt,
        skewY: Tt,
        distance: R,
        translateX: R,
        translateY: R,
        translateZ: R,
        x: R,
        y: R,
        z: R,
        perspective: R,
        transformPerspective: R,
        opacity: ci,
        originX: xd,
        originY: xd,
        originZ: R
    },
    _u = {
        borderWidth: R,
        borderTopWidth: R,
        borderRightWidth: R,
        borderBottomWidth: R,
        borderLeftWidth: R,
        borderRadius: R,
        radius: R,
        borderTopLeftRadius: R,
        borderTopRightRadius: R,
        borderBottomRightRadius: R,
        borderBottomLeftRadius: R,
        width: R,
        maxWidth: R,
        height: R,
        maxHeight: R,
        top: R,
        right: R,
        bottom: R,
        left: R,
        padding: R,
        paddingTop: R,
        paddingRight: R,
        paddingBottom: R,
        paddingLeft: R,
        margin: R,
        marginTop: R,
        marginRight: R,
        marginBottom: R,
        marginLeft: R,
        backgroundPositionX: R,
        backgroundPositionY: R,
        ...e2,
        zIndex: Rd,
        fillOpacity: ci,
        strokeOpacity: ci,
        numOctaves: Rd
    },
    t2 = {
        ..._u,
        color: ie,
        backgroundColor: ie,
        outlineColor: ie,
        fill: ie,
        stroke: ie,
        borderColor: ie,
        borderTopColor: ie,
        borderRightColor: ie,
        borderBottomColor: ie,
        borderLeftColor: ie,
        filter: cl,
        WebkitFilter: cl
    },
    Um = e => t2[e];

function Wm(e, t) {
    let n = Um(e);
    return n !== cl && (n = Qt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const n2 = new Set(["auto", "none", "0"]);

function r2(e, t, n) {
    let r = 0,
        i;
    for (; r < e.length && !i;) {
        const s = e[r];
        typeof s == "string" && !n2.has(s) && di(s).values.length && (i = e[r]), r++
    }
    if (i && n)
        for (const s of t) e[s] = Wm(n, i)
}
class i2 extends Vu {
    constructor(t, n, r, i, s) {
        super(t, n, r, i, s, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            element: n,
            name: r
        } = this;
        if (!n || !n.current) return;
        super.readKeyframes();
        for (let l = 0; l < t.length; l++) {
            let c = t[l];
            if (typeof c == "string" && (c = c.trim(), Pu(c))) {
                const d = _m(c, n.current);
                d !== void 0 && (t[l] = d), l === t.length - 1 && (this.finalKeyframe = c)
            }
        }
        if (this.resolveNoneKeyframes(), !Om.has(r) || t.length !== 2) return;
        const [i, s] = t, o = Ld(i), a = Ld(s);
        if (o !== a)
            if (Td(o) && Td(a))
                for (let l = 0; l < t.length; l++) {
                    const c = t[l];
                    typeof c == "string" && (t[l] = parseFloat(c))
                } else hn[r] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: n
        } = this, r = [];
        for (let i = 0; i < t.length; i++)(t[i] === null || Qx(t[i])) && r.push(i);
        r.length && r2(t, r, n)
    }
    measureInitialState() {
        const {
            element: t,
            unresolvedKeyframes: n,
            name: r
        } = this;
        if (!t || !t.current) return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = hn[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && t.getValue(r, i).jump(i, !1)
    }
    measureEndState() {
        var a;
        const {
            element: t,
            name: n,
            unresolvedKeyframes: r
        } = this;
        if (!t || !t.current) return;
        const i = t.getValue(n);
        i && i.jump(this.measuredOrigin, !1);
        const s = r.length - 1,
            o = r[s];
        r[s] = hn[n](t.measureViewportBox(), window.getComputedStyle(t.current)), o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o), (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach(([l, c]) => {
            t.getValue(l).set(c)
        }), this.resolveNoneKeyframes()
    }
}

function s2(e, t, n) {
    if (e instanceof EventTarget) return [e];
    if (typeof e == "string") {
        const i = document.querySelectorAll(e);
        return i ? Array.from(i) : []
    }
    return Array.from(e)
}
const Hm = (e, t) => t && typeof e == "number" ? t.transform(e) : e,
    $d = 30,
    o2 = e => !isNaN(parseFloat(e));
class a2 {
    constructor(t, n = {}) {
        this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, i = !0) => {
            var o, a;
            const s = Pe.now();
            if (this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && ((o = this.events.change) == null || o.notify(this.current), this.dependents))
                for (const l of this.dependents) l.dirty();
            i && ((a = this.events.renderRequest) == null || a.notify(this.current))
        }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t, this.updatedAt = Pe.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = o2(this.current))
    }
    setPrevFrameValue(t = this.current) {
        this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new Cu);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(), Y.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : r
    }
    clearListeners() {
        for (const t in this.events) this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t, this.stopPassiveEffect = n
    }
    set(t, n = !0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n = !0) {
        this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        var t;
        (t = this.events.change) == null || t.notify(this.current)
    }
    addDependent(t) {
        this.dependents || (this.dependents = new Set), this.dependents.add(t)
    }
    removeDependent(t) {
        this.dependents && this.dependents.delete(t)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = Pe.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > $d) return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, $d);
        return cm(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(), new Promise(n => {
            this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        var t, n;
        (t = this.dependents) == null || t.clear(), (n = this.events.destroy) == null || n.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function lr(e, t) {
    return new a2(e, t)
}
const {
    schedule: Ou,
    cancel: J5
} = km(queueMicrotask, !1), Qe = {
    x: !1,
    y: !1
};

function Km() {
    return Qe.x || Qe.y
}

function l2(e) {
    return e === "x" || e === "y" ? Qe[e] ? null : (Qe[e] = !0, () => {
        Qe[e] = !1
    }) : Qe.x || Qe.y ? null : (Qe.x = Qe.y = !0, () => {
        Qe.x = Qe.y = !1
    })
}

function Gm(e, t) {
    const n = s2(e),
        r = new AbortController,
        i = {
            passive: !0,
            ...t,
            signal: r.signal
        };
    return [n, i, () => r.abort()]
}

function Ad(e) {
    return !(e.pointerType === "touch" || Km())
}

function u2(e, t, n = {}) {
    const [r, i, s] = Gm(e, n), o = a => {
        if (!Ad(a)) return;
        const {
            target: l
        } = a, c = t(l, a);
        if (typeof c != "function" || !l) return;
        const d = f => {
            Ad(f) && (c(f), l.removeEventListener("pointerleave", d))
        };
        l.addEventListener("pointerleave", d, i)
    };
    return r.forEach(a => {
        a.addEventListener("pointerenter", o, i)
    }), s
}
const Ym = (e, t) => t ? e === t ? !0 : Ym(e, t.parentElement) : !1,
    Iu = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1,
    c2 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function d2(e) {
    return c2.has(e.tagName) || e.tabIndex !== -1
}
const ls = new WeakSet;

function Dd(e) {
    return t => {
        t.key === "Enter" && e(t)
    }
}

function Yo(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t, {
        isPrimary: !0,
        bubbles: !0
    }))
}
const f2 = (e, t) => {
    const n = e.currentTarget;
    if (!n) return;
    const r = Dd(() => {
        if (ls.has(n)) return;
        Yo(n, "down");
        const i = Dd(() => {
            Yo(n, "up")
        }),
            s = () => Yo(n, "cancel");
        n.addEventListener("keyup", i, t), n.addEventListener("blur", s, t)
    });
    n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
};

function Vd(e) {
    return Iu(e) && !Km()
}

function h2(e, t, n = {}) {
    const [r, i, s] = Gm(e, n), o = a => {
        const l = a.currentTarget;
        if (!Vd(a)) return;
        ls.add(l);
        const c = t(l, a),
            d = (m, v) => {
                window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", h), ls.has(l) && ls.delete(l), Vd(m) && typeof c == "function" && c(m, {
                    success: v
                })
            },
            f = m => {
                d(m, l === window || l === document || n.useGlobalTarget || Ym(l, m.target))
            },
            h = m => {
                d(m, !1)
            };
        window.addEventListener("pointerup", f, i), window.addEventListener("pointercancel", h, i)
    };
    return r.forEach(a => {
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, i), Fu(a) && (a.addEventListener("focus", c => f2(c, i)), !d2(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0))
    }), s
}

function Xm(e) {
    return lm(e) && "ownerSVGElement" in e
}

function p2(e) {
    return Xm(e) && e.tagName === "svg"
}
const ve = e => !!(e && e.getVelocity),
    m2 = [...Bm, ie, Qt],
    g2 = e => m2.find(Im(e)),
    Bu = k.createContext({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
    });
class y2 extends k.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = n.offsetParent,
                i = Fu(r) && r.offsetWidth || 0,
                s = this.props.sizeRef.current;
            s.height = n.offsetHeight || 0, s.width = n.offsetWidth || 0, s.top = n.offsetTop, s.left = n.offsetLeft, s.right = i - s.width - s.left
        }
        return null
    }
    componentDidUpdate() { }
    render() {
        return this.props.children
    }
}

function v2({
    children: e,
    isPresent: t,
    anchorX: n,
    root: r
}) {
    const i = k.useId(),
        s = k.useRef(null),
        o = k.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            right: 0
        }),
        {
            nonce: a
        } = k.useContext(Bu);
    return k.useInsertionEffect(() => {
        const {
            width: l,
            height: c,
            top: d,
            left: f,
            right: h
        } = o.current;
        if (t || !s.current || !l || !c) return;
        const m = n === "left" ? `left: ${f}` : `right: ${h}`;
        s.current.dataset.motionPopId = i;
        const v = document.createElement("style");
        a && (v.nonce = a);
        const w = r ?? document.head;
        return w.appendChild(v), v.sheet && v.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${c}px !important;
            ${m}px !important;
            top: ${d}px !important;
          }
        `), () => {
                w.removeChild(v), w.contains(v) && w.removeChild(v)
            }
    }, [t]), u.jsx(y2, {
        isPresent: t,
        childRef: s,
        sizeRef: o,
        children: k.cloneElement(e, {
            ref: s
        })
    })
}
const x2 = ({
    children: e,
    initial: t,
    isPresent: n,
    onExitComplete: r,
    custom: i,
    presenceAffectsLayout: s,
    mode: o,
    anchorX: a,
    root: l
}) => {
    const c = xu(w2),
        d = k.useId();
    let f = !0,
        h = k.useMemo(() => (f = !1, {
            id: d,
            initial: t,
            isPresent: n,
            custom: i,
            onExitComplete: m => {
                c.set(m, !0);
                for (const v of c.values())
                    if (!v) return;
                r && r()
            },
            register: m => (c.set(m, !1), () => c.delete(m))
        }), [n, c, r]);
    return s && f && (h = {
        ...h
    }), k.useMemo(() => {
        c.forEach((m, v) => c.set(v, !1))
    }, [n]), k.useEffect(() => {
        !n && !c.size && r && r()
    }, [n]), o === "popLayout" && (e = u.jsx(v2, {
        isPresent: n,
        anchorX: a,
        root: l,
        children: e
    })), u.jsx(fo.Provider, {
        value: h,
        children: e
    })
};

function w2() {
    return new Map
}

function Qm(e = !0) {
    const t = k.useContext(fo);
    if (t === null) return [!0, null];
    const {
        isPresent: n,
        onExitComplete: r,
        register: i
    } = t, s = k.useId();
    k.useEffect(() => {
        if (e) return i(s)
    }, [e]);
    const o = k.useCallback(() => e && r && r(s), [s, r, e]);
    return !n && r ? [!1, o] : [!0]
}
const Ki = e => e.key || "";

function Fd(e) {
    const t = [];
    return k.Children.forEach(e, n => {
        k.isValidElement(n) && t.push(n)
    }), t
}
const k2 = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: i = !0,
    mode: s = "sync",
    propagate: o = !1,
    anchorX: a = "left",
    root: l
}) => {
    const [c, d] = Qm(o), f = k.useMemo(() => Fd(e), [e]), h = o && !c ? [] : f.map(Ki), m = k.useRef(!0), v = k.useRef(f), w = xu(() => new Map), [S, g] = k.useState(f), [p, y] = k.useState(f);
    om(() => {
        m.current = !1, v.current = f;
        for (let T = 0; T < p.length; T++) {
            const b = Ki(p[T]);
            h.includes(b) ? w.delete(b) : w.get(b) !== !0 && w.set(b, !1)
        }
    }, [p, h.length, h.join("-")]);
    const x = [];
    if (f !== S) {
        let T = [...f];
        for (let b = 0; b < p.length; b++) {
            const j = p[b],
                $ = Ki(j);
            h.includes($) || (T.splice(b, 0, j), x.push(j))
        }
        return s === "wait" && x.length && (T = x), y(Fd(T)), g(f), null
    }
    const {
        forceRender: C
    } = k.useContext(vu);
    return u.jsx(u.Fragment, {
        children: p.map(T => {
            const b = Ki(T),
                j = o && !c ? !1 : f === p || h.includes(b),
                $ = () => {
                    if (w.has(b)) w.set(b, !0);
                    else return;
                    let N = !0;
                    w.forEach(D => {
                        D || (N = !1)
                    }), N && (C == null || C(), y(v.current), o && (d == null || d()), r && r())
                };
            return u.jsx(x2, {
                isPresent: j,
                initial: !m.current || n ? void 0 : !1,
                custom: t,
                presenceAffectsLayout: i,
                mode: s,
                root: l,
                onExitComplete: j ? void 0 : $,
                anchorX: a,
                children: T
            }, b)
        })
    })
},
    Zm = k.createContext({
        strict: !1
    }),
    zd = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    },
    ur = {};
for (const e in zd) ur[e] = {
    isEnabled: t => zd[e].some(n => !!t[n])
};

function S2(e) {
    for (const t in e) ur[t] = {
        ...ur[t],
        ...e[t]
    }
}
const b2 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function Bs(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || b2.has(e)
}
let qm = e => !Bs(e);

function C2(e) {
    typeof e == "function" && (qm = t => t.startsWith("on") ? !Bs(t) : e(t))
}
try {
    C2(require("@emotion/is-prop-valid").default)
} catch { }

function j2(e, t, n) {
    const r = {};
    for (const i in e) i === "values" && typeof e.values == "object" || (qm(i) || n === !0 && Bs(i) || !t && !Bs(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}

function N2(e) {
    if (typeof Proxy > "u") return e;
    const t = new Map,
        n = (...r) => e(...r);
    return new Proxy(n, {
        get: (r, i) => i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i))
    })
}
const ho = k.createContext({});

function po(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}

function fi(e) {
    return typeof e == "string" || Array.isArray(e)
}
const Uu = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    Wu = ["initial", ...Uu];

function mo(e) {
    return po(e.animate) || Wu.some(t => fi(e[t]))
}

function Jm(e) {
    return !!(mo(e) || e.variants)
}

function T2(e, t) {
    if (mo(e)) {
        const {
            initial: n,
            animate: r
        } = e;
        return {
            initial: n === !1 || fi(n) ? n : void 0,
            animate: fi(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}

function P2(e) {
    const {
        initial: t,
        animate: n
    } = T2(e, k.useContext(ho));
    return k.useMemo(() => ({
        initial: t,
        animate: n
    }), [_d(t), _d(n)])
}

function _d(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const E2 = Symbol.for("motionComponentSymbol");

function Hn(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}

function M2(e, t, n) {
    return k.useCallback(r => {
        r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Hn(n) && (n.current = r))
    }, [t])
}
const Hu = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    L2 = "framerAppearId",
    e0 = "data-" + Hu(L2),
    t0 = k.createContext({});

function R2(e, t, n, r, i) {
    var w, S;
    const {
        visualElement: s
    } = k.useContext(ho), o = k.useContext(Zm), a = k.useContext(fo), l = k.useContext(Bu).reducedMotion, c = k.useRef(null);
    r = r || o.renderer, !c.current && r && (c.current = r(e, {
        visualState: t,
        parent: s,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: l
    }));
    const d = c.current,
        f = k.useContext(t0);
    d && !d.projection && i && (d.type === "html" || d.type === "svg") && $2(c.current, n, i, f);
    const h = k.useRef(!1);
    k.useInsertionEffect(() => {
        d && h.current && d.update(n, a)
    });
    const m = n[e0],
        v = k.useRef(!!m && !((w = window.MotionHandoffIsComplete) != null && w.call(window, m)) && ((S = window.MotionHasOptimisedAnimation) == null ? void 0 : S.call(window, m)));
    return om(() => {
        d && (h.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), Ou.render(d.render), v.current && d.animationState && d.animationState.animateChanges())
    }), k.useEffect(() => {
        d && (!v.current && d.animationState && d.animationState.animateChanges(), v.current && (queueMicrotask(() => {
            var g;
            (g = window.MotionHandoffMarkAsComplete) == null || g.call(window, m)
        }), v.current = !1))
    }), d
}

function $2(e, t, n, r) {
    const {
        layoutId: i,
        layout: s,
        drag: o,
        dragConstraints: a,
        layoutScroll: l,
        layoutRoot: c,
        layoutCrossfade: d
    } = t;
    e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : n0(e.parent)), e.projection.setOptions({
        layoutId: i,
        layout: s,
        alwaysMeasureLayout: !!o || a && Hn(a),
        visualElement: e,
        animationType: typeof s == "string" ? s : "both",
        initialPromotionConfig: r,
        crossfade: d,
        layoutScroll: l,
        layoutRoot: c
    })
}

function n0(e) {
    if (e) return e.options.allowProjection !== !1 ? e.projection : n0(e.parent)
}

function A2({
    preloadedFeatures: e,
    createVisualElement: t,
    useRender: n,
    useVisualState: r,
    Component: i
}) {
    e && S2(e);

    function s(a, l) {
        let c;
        const d = {
            ...k.useContext(Bu),
            ...a,
            layoutId: D2(a)
        },
            {
                isStatic: f
            } = d,
            h = P2(a),
            m = r(a, f);
        if (!f && wu) {
            V2();
            const v = F2(d);
            c = v.MeasureLayout, h.visualElement = R2(i, m, d, t, v.ProjectionNode)
        }
        return u.jsxs(ho.Provider, {
            value: h,
            children: [c && h.visualElement ? u.jsx(c, {
                visualElement: h.visualElement,
                ...d
            }) : null, n(i, a, M2(m, h.visualElement, l), m, f, h.visualElement)]
        })
    }
    s.displayName = `motion.${typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`}`;
    const o = k.forwardRef(s);
    return o[E2] = i, o
}

function D2({
    layoutId: e
}) {
    const t = k.useContext(vu).id;
    return t && e !== void 0 ? t + "-" + e : e
}

function V2(e, t) {
    k.useContext(Zm).strict
}

function F2(e) {
    const {
        drag: t,
        layout: n
    } = ur;
    if (!t && !n) return {};
    const r = {
        ...t,
        ...n
    };
    return {
        MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
        ProjectionNode: r.ProjectionNode
    }
}
const hi = {};

function z2(e) {
    for (const t in e) hi[t] = e[t], Tu(t) && (hi[t].isCSSVariable = !0)
}

function r0(e, {
    layout: t,
    layoutId: n
}) {
    return mr.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!hi[e] || e === "opacity")
}
const _2 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
},
    O2 = pr.length;

function I2(e, t, n) {
    let r = "",
        i = !0;
    for (let s = 0; s < O2; s++) {
        const o = pr[s],
            a = e[o];
        if (a === void 0) continue;
        let l = !0;
        if (typeof a == "number" ? l = a === (o.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
            const c = Hm(a, _u[o]);
            if (!l) {
                i = !1;
                const d = _2[o] || o;
                r += `${d}(${c}) `
            }
            n && (t[o] = c)
        }
    }
    return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r
}

function Ku(e, t, n) {
    const {
        style: r,
        vars: i,
        transformOrigin: s
    } = e;
    let o = !1,
        a = !1;
    for (const l in t) {
        const c = t[l];
        if (mr.has(l)) {
            o = !0;
            continue
        } else if (Tu(l)) {
            i[l] = c;
            continue
        } else {
            const d = Hm(c, _u[l]);
            l.startsWith("origin") ? (a = !0, s[l] = d) : r[l] = d
        }
    }
    if (t.transform || (o || n ? r.transform = I2(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
        const {
            originX: l = "50%",
            originY: c = "50%",
            originZ: d = 0
        } = s;
        r.transformOrigin = `${l} ${c} ${d}`
    }
}
const Gu = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});

function i0(e, t, n) {
    for (const r in t) !ve(t[r]) && !r0(r, n) && (e[r] = t[r])
}

function B2({
    transformTemplate: e
}, t) {
    return k.useMemo(() => {
        const n = Gu();
        return Ku(n, t, e), Object.assign({}, n.vars, n.style)
    }, [t])
}

function U2(e, t) {
    const n = e.style || {},
        r = {};
    return i0(r, n, e), Object.assign(r, B2(e, t)), r
}

function W2(e, t) {
    const n = {},
        r = U2(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n
}
const H2 = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
},
    K2 = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function G2(e, t, n = 1, r = 0, i = !0) {
    e.pathLength = 1;
    const s = i ? H2 : K2;
    e[s.offset] = R.transform(-r);
    const o = R.transform(t),
        a = R.transform(n);
    e[s.array] = `${o} ${a}`
}

function s0(e, {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: i,
    pathSpacing: s = 1,
    pathOffset: o = 0,
    ...a
}, l, c, d) {
    if (Ku(e, a, c), l) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style, e.style = {};
    const {
        attrs: f,
        style: h
    } = e;
    f.transform && (h.transform = f.transform, delete f.transform), (h.transform || f.transformOrigin) && (h.transformOrigin = f.transformOrigin ?? "50% 50%", delete f.transformOrigin), h.transform && (h.transformBox = (d == null ? void 0 : d.transformBox) ?? "fill-box", delete f.transformBox), t !== void 0 && (f.x = t), n !== void 0 && (f.y = n), r !== void 0 && (f.scale = r), i !== void 0 && G2(f, i, s, o, !1)
}
const o0 = () => ({
    ...Gu(),
    attrs: {}
}),
    a0 = e => typeof e == "string" && e.toLowerCase() === "svg";

function Y2(e, t, n, r) {
    const i = k.useMemo(() => {
        const s = o0();
        return s0(s, t, a0(r), e.transformTemplate, e.style), {
            ...s.attrs,
            style: {
                ...s.style
            }
        }
    }, [t]);
    if (e.style) {
        const s = {};
        i0(s, e.style, e), i.style = {
            ...s,
            ...i.style
        }
    }
    return i
}
const X2 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Yu(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(X2.indexOf(e) > -1 || /[A-Z]/u.test(e))
}

function Q2(e = !1) {
    return (n, r, i, {
        latestValues: s
    }, o) => {
        const l = (Yu(n) ? Y2 : W2)(r, s, o, n),
            c = j2(r, typeof n == "string", e),
            d = n !== k.Fragment ? {
                ...c,
                ...l,
                ref: i
            } : {},
            {
                children: f
            } = r,
            h = k.useMemo(() => ve(f) ? f.get() : f, [f]);
        return k.createElement(n, {
            ...d,
            children: h
        })
    }
}

function Od(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach((n, r) => {
        t[0][r] = n.get(), t[1][r] = n.getVelocity()
    }), t
}

function Xu(e, t, n, r) {
    if (typeof t == "function") {
        const [i, s] = Od(r);
        t = t(n !== void 0 ? n : e.custom, i, s)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
        const [i, s] = Od(r);
        t = t(n !== void 0 ? n : e.custom, i, s)
    }
    return t
}

function us(e) {
    return ve(e) ? e.get() : e
}

function Z2({
    scrapeMotionValuesFromProps: e,
    createRenderState: t
}, n, r, i) {
    return {
        latestValues: q2(n, r, i, e),
        renderState: t()
    }
}
const l0 = e => (t, n) => {
    const r = k.useContext(ho),
        i = k.useContext(fo),
        s = () => Z2(e, t, r, i);
    return n ? s() : xu(s)
};

function q2(e, t, n, r) {
    const i = {},
        s = r(e, {});
    for (const h in s) i[h] = us(s[h]);
    let {
        initial: o,
        animate: a
    } = e;
    const l = mo(e),
        c = Jm(e);
    t && c && !l && e.inherit !== !1 && (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
    let d = n ? n.initial === !1 : !1;
    d = d || o === !1;
    const f = d ? a : o;
    if (f && typeof f != "boolean" && !po(f)) {
        const h = Array.isArray(f) ? f : [f];
        for (let m = 0; m < h.length; m++) {
            const v = Xu(e, h[m]);
            if (v) {
                const {
                    transitionEnd: w,
                    transition: S,
                    ...g
                } = v;
                for (const p in g) {
                    let y = g[p];
                    if (Array.isArray(y)) {
                        const x = d ? y.length - 1 : 0;
                        y = y[x]
                    }
                    y !== null && (i[p] = y)
                }
                for (const p in w) i[p] = w[p]
            }
        }
    }
    return i
}

function Qu(e, t, n) {
    var s;
    const {
        style: r
    } = e, i = {};
    for (const o in r) (ve(r[o]) || t.style && ve(t.style[o]) || r0(o, e) || ((s = n == null ? void 0 : n.getValue(o)) == null ? void 0 : s.liveStyle) !== void 0) && (i[o] = r[o]);
    return i
}
const J2 = {
    useVisualState: l0({
        scrapeMotionValuesFromProps: Qu,
        createRenderState: Gu
    })
};

function u0(e, t, n) {
    const r = Qu(e, t, n);
    for (const i in e)
        if (ve(e[i]) || ve(t[i])) {
            const s = pr.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            r[s] = e[i]
        } return r
}
const ew = {
    useVisualState: l0({
        scrapeMotionValuesFromProps: u0,
        createRenderState: o0
    })
};

function tw(e, t) {
    return function (r, {
        forwardMotionProps: i
    } = {
            forwardMotionProps: !1
        }) {
        const o = {
            ...Yu(r) ? ew : J2,
            preloadedFeatures: e,
            useRender: Q2(i),
            createVisualElement: t,
            Component: r
        };
        return A2(o)
    }
}

function pi(e, t, n) {
    const r = e.getProps();
    return Xu(r, t, n !== void 0 ? n : r.custom, e)
}
const dl = e => Array.isArray(e);

function nw(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, lr(n))
}

function rw(e) {
    return dl(e) ? e[e.length - 1] || 0 : e
}

function iw(e, t) {
    const n = pi(e, t);
    let {
        transitionEnd: r = {},
        transition: i = {},
        ...s
    } = n || {};
    s = {
        ...s,
        ...r
    };
    for (const o in s) {
        const a = rw(s[o]);
        nw(e, o, a)
    }
}

function sw(e) {
    return !!(ve(e) && e.add)
}

function fl(e, t) {
    const n = e.getValue("willChange");
    if (sw(n)) return n.add(t);
    if (!n && Ct.WillChange) {
        const r = new Ct.WillChange("auto");
        e.addValue("willChange", r), r.add(t)
    }
}

function c0(e) {
    return e.props[e0]
}
const ow = e => e !== null;

function aw(e, {
    repeat: t,
    repeatType: n = "loop"
}, r) {
    const i = e.filter(ow),
        s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !s || r === void 0 ? i[s] : r
}
const lw = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
},
    uw = e => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    cw = {
        type: "keyframes",
        duration: .8
    },
    dw = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    fw = (e, {
        keyframes: t
    }) => t.length > 2 ? cw : mr.has(e) ? e.startsWith("scale") ? uw(t[1]) : lw : dw;

function hw({
    when: e,
    delay: t,
    delayChildren: n,
    staggerChildren: r,
    staggerDirection: i,
    repeat: s,
    repeatType: o,
    repeatDelay: a,
    from: l,
    elapsed: c,
    ...d
}) {
    return !!Object.keys(d).length
}
const Zu = (e, t, n, r = {}, i, s) => o => {
    const a = zu(r, e) || {},
        l = a.delay || r.delay || 0;
    let {
        elapsed: c = 0
    } = r;
    c = c - lt(l);
    const d = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -c,
        onUpdate: h => {
            t.set(h), a.onUpdate && a.onUpdate(h)
        },
        onComplete: () => {
            o(), a.onComplete && a.onComplete()
        },
        name: e,
        motionValue: t,
        element: s ? void 0 : i
    };
    hw(a) || Object.assign(d, fw(e, d)), d.duration && (d.duration = lt(d.duration)), d.repeatDelay && (d.repeatDelay = lt(d.repeatDelay)), d.from !== void 0 && (d.keyframes[0] = d.from);
    let f = !1;
    if ((d.type === !1 || d.duration === 0 && !d.repeatDelay) && (d.duration = 0, d.delay === 0 && (f = !0)), (Ct.instantAnimations || Ct.skipAnimations) && (f = !0, d.duration = 0, d.delay = 0), d.allowFlatten = !a.type && !a.ease, f && !s && t.get() !== void 0) {
        const h = aw(d.keyframes, a);
        if (h !== void 0) {
            Y.update(() => {
                d.onUpdate(h), d.onComplete()
            });
            return
        }
    }
    return a.isSync ? new Du(d) : new Kx(d)
};

function pw({
    protectedKeys: e,
    needsAnimating: t
}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1, r
}

function d0(e, t, {
    delay: n = 0,
    transitionOverride: r,
    type: i
} = {}) {
    let {
        transition: s = e.getDefaultTransition(),
        transitionEnd: o,
        ...a
    } = t;
    r && (s = r);
    const l = [],
        c = i && e.animationState && e.animationState.getState()[i];
    for (const d in a) {
        const f = e.getValue(d, e.latestValues[d] ?? null),
            h = a[d];
        if (h === void 0 || c && pw(c, d)) continue;
        const m = {
            delay: n,
            ...zu(s || {}, d)
        },
            v = f.get();
        if (v !== void 0 && !f.isAnimating && !Array.isArray(h) && h === v && !m.velocity) continue;
        let w = !1;
        if (window.MotionHandoffAnimation) {
            const g = c0(e);
            if (g) {
                const p = window.MotionHandoffAnimation(g, d, Y);
                p !== null && (m.startTime = p, w = !0)
            }
        }
        fl(e, d), f.start(Zu(d, f, h, e.shouldReduceMotion && Om.has(d) ? {
            type: !1
        } : m, e, w));
        const S = f.animation;
        S && l.push(S)
    }
    return o && Promise.all(l).then(() => {
        Y.update(() => {
            o && iw(e, o)
        })
    }), l
}

function hl(e, t, n = {}) {
    var l;
    const r = pi(e, t, n.type === "exit" ? (l = e.presenceContext) == null ? void 0 : l.custom : void 0);
    let {
        transition: i = e.getDefaultTransition() || {}
    } = r || {};
    n.transitionOverride && (i = n.transitionOverride);
    const s = r ? () => Promise.all(d0(e, r, n)) : () => Promise.resolve(),
        o = e.variantChildren && e.variantChildren.size ? (c = 0) => {
            const {
                delayChildren: d = 0,
                staggerChildren: f,
                staggerDirection: h
            } = i;
            return mw(e, t, c, d, f, h, n)
        } : () => Promise.resolve(),
        {
            when: a
        } = i;
    if (a) {
        const [c, d] = a === "beforeChildren" ? [s, o] : [o, s];
        return c().then(() => d())
    } else return Promise.all([s(), o(n.delay)])
}

function mw(e, t, n = 0, r = 0, i = 0, s = 1, o) {
    const a = [],
        l = e.variantChildren.size,
        c = (l - 1) * i,
        d = typeof r == "function",
        f = d ? h => r(h, l) : s === 1 ? (h = 0) => h * i : (h = 0) => c - h * i;
    return Array.from(e.variantChildren).sort(gw).forEach((h, m) => {
        h.notify("AnimationStart", t), a.push(hl(h, t, {
            ...o,
            delay: n + (d ? 0 : r) + f(m)
        }).then(() => h.notify("AnimationComplete", t)))
    }), Promise.all(a)
}

function gw(e, t) {
    return e.sortNodePosition(t)
}

function yw(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(s => hl(e, s, n));
        r = Promise.all(i)
    } else if (typeof t == "string") r = hl(e, t, n);
    else {
        const i = typeof t == "function" ? pi(e, t, n.custom) : t;
        r = Promise.all(d0(e, i, n))
    }
    return r.then(() => {
        e.notify("AnimationComplete", t)
    })
}

function f0(e, t) {
    if (!Array.isArray(t)) return !1;
    const n = t.length;
    if (n !== e.length) return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r]) return !1;
    return !0
}
const vw = Wu.length;

function h0(e) {
    if (!e) return;
    if (!e.isControllingVariants) {
        const n = e.parent ? h0(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial), n
    }
    const t = {};
    for (let n = 0; n < vw; n++) {
        const r = Wu[n],
            i = e.props[r];
        (fi(i) || i === !1) && (t[r] = i)
    }
    return t
}
const xw = [...Uu].reverse(),
    ww = Uu.length;

function kw(e) {
    return t => Promise.all(t.map(({
        animation: n,
        options: r
    }) => yw(e, n, r)))
}

function Sw(e) {
    let t = kw(e),
        n = Id(),
        r = !0;
    const i = l => (c, d) => {
        var h;
        const f = pi(e, d, l === "exit" ? (h = e.presenceContext) == null ? void 0 : h.custom : void 0);
        if (f) {
            const {
                transition: m,
                transitionEnd: v,
                ...w
            } = f;
            c = {
                ...c,
                ...w,
                ...v
            }
        }
        return c
    };

    function s(l) {
        t = l(e)
    }

    function o(l) {
        const {
            props: c
        } = e, d = h0(e.parent) || {}, f = [], h = new Set;
        let m = {},
            v = 1 / 0;
        for (let S = 0; S < ww; S++) {
            const g = xw[S],
                p = n[g],
                y = c[g] !== void 0 ? c[g] : d[g],
                x = fi(y),
                C = g === l ? p.isActive : null;
            C === !1 && (v = S);
            let T = y === d[g] && y !== c[g] && x;
            if (T && r && e.manuallyAnimateOnMount && (T = !1), p.protectedKeys = {
                ...m
            }, !p.isActive && C === null || !y && !p.prevProp || po(y) || typeof y == "boolean") continue;
            const b = bw(p.prevProp, y);
            let j = b || g === l && p.isActive && !T && x || S > v && x,
                $ = !1;
            const N = Array.isArray(y) ? y : [y];
            let D = N.reduce(i(g), {});
            C === !1 && (D = {});
            const {
                prevResolvedValues: O = {}
            } = p, I = {
                ...O,
                ...D
            }, je = te => {
                j = !0, h.has(te) && ($ = !0, h.delete(te)), p.needsAnimating[te] = !0;
                const E = e.getValue(te);
                E && (E.liveStyle = !1)
            };
            for (const te in I) {
                const E = D[te],
                    L = O[te];
                if (m.hasOwnProperty(te)) continue;
                let A = !1;
                dl(E) && dl(L) ? A = !f0(E, L) : A = E !== L, A ? E != null ? je(te) : h.add(te) : E !== void 0 && h.has(te) ? je(te) : p.protectedKeys[te] = !0
            }
            p.prevProp = y, p.prevResolvedValues = D, p.isActive && (m = {
                ...m,
                ...D
            }), r && e.blockInitialAnimation && (j = !1), j && (!(T && b) || $) && f.push(...N.map(te => ({
                animation: te,
                options: {
                    type: g
                }
            })))
        }
        if (h.size) {
            const S = {};
            if (typeof c.initial != "boolean") {
                const g = pi(e, Array.isArray(c.initial) ? c.initial[0] : c.initial);
                g && g.transition && (S.transition = g.transition)
            }
            h.forEach(g => {
                const p = e.getBaseTarget(g),
                    y = e.getValue(g);
                y && (y.liveStyle = !0), S[g] = p ?? null
            }), f.push({
                animation: S
            })
        }
        let w = !!f.length;
        return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (w = !1), r = !1, w ? t(f) : Promise.resolve()
    }

    function a(l, c) {
        var f;
        if (n[l].isActive === c) return Promise.resolve();
        (f = e.variantChildren) == null || f.forEach(h => {
            var m;
            return (m = h.animationState) == null ? void 0 : m.setActive(l, c)
        }), n[l].isActive = c;
        const d = o(l);
        for (const h in n) n[h].protectedKeys = {};
        return d
    }
    return {
        animateChanges: o,
        setActive: a,
        setAnimateFunction: s,
        getState: () => n,
        reset: () => {
            n = Id(), r = !0
        }
    }
}

function bw(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !f0(t, e) : !1
}

function tn(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function Id() {
    return {
        animate: tn(!0),
        whileInView: tn(),
        whileHover: tn(),
        whileTap: tn(),
        whileDrag: tn(),
        whileFocus: tn(),
        exit: tn()
    }
}
class en {
    constructor(t) {
        this.isMounted = !1, this.node = t
    }
    update() { }
}
class Cw extends en {
    constructor(t) {
        super(t), t.animationState || (t.animationState = Sw(t))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: t
        } = this.node.getProps();
        po(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: t
        } = this.node.getProps(), {
            animate: n
        } = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(), (t = this.unmountControls) == null || t.call(this)
    }
}
let jw = 0;
class Nw extends en {
    constructor() {
        super(...arguments), this.id = jw++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: t,
            onExitComplete: n
        } = this.node.presenceContext, {
            isPresent: r
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r) return;
        const i = this.node.animationState.setActive("exit", !t);
        n && !t && i.then(() => {
            n(this.id)
        })
    }
    mount() {
        const {
            register: t,
            onExitComplete: n
        } = this.node.presenceContext || {};
        n && n(this.id), t && (this.unmount = t(this.id))
    }
    unmount() { }
}
const Tw = {
    animation: {
        Feature: Cw
    },
    exit: {
        Feature: Nw
    }
};

function mi(e, t, n, r = {
    passive: !0
}) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}

function ji(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const Pw = e => t => Iu(t) && e(t, ji(t));

function Ir(e, t, n, r) {
    return mi(e, t, Pw(n), r)
}

function p0({
    top: e,
    left: t,
    right: n,
    bottom: r
}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}

function Ew({
    x: e,
    y: t
}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}

function Mw(e, t) {
    if (!t) return e;
    const n = t({
        x: e.left,
        y: e.top
    }),
        r = t({
            x: e.right,
            y: e.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
const m0 = 1e-4,
    Lw = 1 - m0,
    Rw = 1 + m0,
    g0 = .01,
    $w = 0 - g0,
    Aw = 0 + g0;

function ke(e) {
    return e.max - e.min
}

function Dw(e, t, n) {
    return Math.abs(e - t) <= n
}

function Bd(e, t, n, r = .5) {
    e.origin = r, e.originPoint = Q(t.min, t.max, e.origin), e.scale = ke(n) / ke(t), e.translate = Q(n.min, n.max, e.origin) - e.originPoint, (e.scale >= Lw && e.scale <= Rw || isNaN(e.scale)) && (e.scale = 1), (e.translate >= $w && e.translate <= Aw || isNaN(e.translate)) && (e.translate = 0)
}

function Br(e, t, n, r) {
    Bd(e.x, t.x, n.x, r ? r.originX : void 0), Bd(e.y, t.y, n.y, r ? r.originY : void 0)
}

function Ud(e, t, n) {
    e.min = n.min + t.min, e.max = e.min + ke(t)
}

function Vw(e, t, n) {
    Ud(e.x, t.x, n.x), Ud(e.y, t.y, n.y)
}

function Wd(e, t, n) {
    e.min = t.min - n.min, e.max = e.min + ke(t)
}

function Ur(e, t, n) {
    Wd(e.x, t.x, n.x), Wd(e.y, t.y, n.y)
}
const Hd = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
}),
    Kn = () => ({
        x: Hd(),
        y: Hd()
    }),
    Kd = () => ({
        min: 0,
        max: 0
    }),
    ne = () => ({
        x: Kd(),
        y: Kd()
    });

function Oe(e) {
    return [e("x"), e("y")]
}

function Xo(e) {
    return e === void 0 || e === 1
}

function pl({
    scale: e,
    scaleX: t,
    scaleY: n
}) {
    return !Xo(e) || !Xo(t) || !Xo(n)
}

function sn(e) {
    return pl(e) || y0(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}

function y0(e) {
    return Gd(e.x) || Gd(e.y)
}

function Gd(e) {
    return e && e !== "0%"
}

function Us(e, t, n) {
    const r = e - n,
        i = t * r;
    return n + i
}

function Yd(e, t, n, r, i) {
    return i !== void 0 && (e = Us(e, i, r)), Us(e, n, r) + t
}

function ml(e, t = 0, n = 1, r, i) {
    e.min = Yd(e.min, t, n, r, i), e.max = Yd(e.max, t, n, r, i)
}

function v0(e, {
    x: t,
    y: n
}) {
    ml(e.x, t.translate, t.scale, t.originPoint), ml(e.y, n.translate, n.scale, n.originPoint)
}
const Xd = .999999999999,
    Qd = 1.0000000000001;

function Fw(e, t, n, r = !1) {
    const i = n.length;
    if (!i) return;
    t.x = t.y = 1;
    let s, o;
    for (let a = 0; a < i; a++) {
        s = n[a], o = s.projectionDelta;
        const {
            visualElement: l
        } = s.options;
        l && l.props.style && l.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && Yn(e, {
            x: -s.scroll.offset.x,
            y: -s.scroll.offset.y
        }), o && (t.x *= o.x.scale, t.y *= o.y.scale, v0(e, o)), r && sn(s.latestValues) && Yn(e, s.latestValues))
    }
    t.x < Qd && t.x > Xd && (t.x = 1), t.y < Qd && t.y > Xd && (t.y = 1)
}

function Gn(e, t) {
    e.min = e.min + t, e.max = e.max + t
}

function Zd(e, t, n, r, i = .5) {
    const s = Q(e.min, e.max, i);
    ml(e, t, n, s, r)
}

function Yn(e, t) {
    Zd(e.x, t.x, t.scaleX, t.scale, t.originX), Zd(e.y, t.y, t.scaleY, t.scale, t.originY)
}

function x0(e, t) {
    return p0(Mw(e.getBoundingClientRect(), t))
}

function zw(e, t, n) {
    const r = x0(e, n),
        {
            scroll: i
        } = t;
    return i && (Gn(r.x, i.offset.x), Gn(r.y, i.offset.y)), r
}
const w0 = ({
    current: e
}) => e ? e.ownerDocument.defaultView : null,
    qd = (e, t) => Math.abs(e - t);

function _w(e, t) {
    const n = qd(e.x, t.x),
        r = qd(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class k0 {
    constructor(t, n, {
        transformPagePoint: r,
        contextWindow: i = window,
        dragSnapToOrigin: s = !1,
        distanceThreshold: o = 3
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
            const h = Zo(this.lastMoveEventInfo, this.history),
                m = this.startEvent !== null,
                v = _w(h.offset, {
                    x: 0,
                    y: 0
                }) >= this.distanceThreshold;
            if (!m && !v) return;
            const {
                point: w
            } = h, {
                timestamp: S
            } = fe;
            this.history.push({
                ...w,
                timestamp: S
            });
            const {
                onStart: g,
                onMove: p
            } = this.handlers;
            m || (g && g(this.lastMoveEvent, h), this.startEvent = this.lastMoveEvent), p && p(this.lastMoveEvent, h)
        }, this.handlePointerMove = (h, m) => {
            this.lastMoveEvent = h, this.lastMoveEventInfo = Qo(m, this.transformPagePoint), Y.update(this.updatePoint, !0)
        }, this.handlePointerUp = (h, m) => {
            this.end();
            const {
                onEnd: v,
                onSessionEnd: w,
                resumeAnimation: S
            } = this.handlers;
            if (this.dragSnapToOrigin && S && S(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
            const g = Zo(h.type === "pointercancel" ? this.lastMoveEventInfo : Qo(m, this.transformPagePoint), this.history);
            this.startEvent && v && v(h, g), w && w(h, g)
        }, !Iu(t)) return;
        this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.distanceThreshold = o, this.contextWindow = i || window;
        const a = ji(t),
            l = Qo(a, this.transformPagePoint),
            {
                point: c
            } = l,
            {
                timestamp: d
            } = fe;
        this.history = [{
            ...c,
            timestamp: d
        }];
        const {
            onSessionStart: f
        } = n;
        f && f(t, Zo(l, this.history)), this.removeListeners = Si(Ir(this.contextWindow, "pointermove", this.handlePointerMove), Ir(this.contextWindow, "pointerup", this.handlePointerUp), Ir(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(), Xt(this.updatePoint)
    }
}

function Qo(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}

function Jd(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}

function Zo({
    point: e
}, t) {
    return {
        point: e,
        delta: Jd(e, S0(t)),
        offset: Jd(e, Ow(t)),
        velocity: Iw(t, .1)
    }
}

function Ow(e) {
    return e[0]
}

function S0(e) {
    return e[e.length - 1]
}

function Iw(e, t) {
    if (e.length < 2) return {
        x: 0,
        y: 0
    };
    let n = e.length - 1,
        r = null;
    const i = S0(e);
    for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > lt(t)));) n--;
    if (!r) return {
        x: 0,
        y: 0
    };
    const s = ut(i.timestamp - r.timestamp);
    if (s === 0) return {
        x: 0,
        y: 0
    };
    const o = {
        x: (i.x - r.x) / s,
        y: (i.y - r.y) / s
    };
    return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
}

function Bw(e, {
    min: t,
    max: n
}, r) {
    return t !== void 0 && e < t ? e = r ? Q(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? Q(n, e, r.max) : Math.min(e, n)), e
}

function ef(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}

function Uw(e, {
    top: t,
    left: n,
    bottom: r,
    right: i
}) {
    return {
        x: ef(e.x, n, i),
        y: ef(e.y, t, r)
    }
}

function tf(e, t) {
    let n = t.min - e.min,
        r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
        min: n,
        max: r
    }
}

function Ww(e, t) {
    return {
        x: tf(e.x, t.x),
        y: tf(e.y, t.y)
    }
}

function Hw(e, t) {
    let n = .5;
    const r = ke(e),
        i = ke(t);
    return i > r ? n = ui(t.min, t.max - r, e.min) : r > i && (n = ui(e.min, e.max - i, t.min)), bt(0, 1, n)
}

function Kw(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}
const gl = .35;

function Gw(e = gl) {
    return e === !1 ? e = 0 : e === !0 && (e = gl), {
        x: nf(e, "left", "right"),
        y: nf(e, "top", "bottom")
    }
}

function nf(e, t, n) {
    return {
        min: rf(e, t),
        max: rf(e, n)
    }
}

function rf(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const Yw = new WeakMap;
class Xw {
    constructor(t) {
        this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ne(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t
    }
    start(t, {
        snapToCursor: n = !1,
        distanceThreshold: r
    } = {}) {
        const {
            presenceContext: i
        } = this.visualElement;
        if (i && i.isPresent === !1) return;
        const s = f => {
            const {
                dragSnapToOrigin: h
            } = this.getProps();
            h ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(ji(f).point)
        },
            o = (f, h) => {
                const {
                    drag: m,
                    dragPropagation: v,
                    onDragStart: w
                } = this.getProps();
                if (m && !v && (this.openDragLock && this.openDragLock(), this.openDragLock = l2(m), !this.openDragLock)) return;
                this.latestPointerEvent = f, this.latestPanInfo = h, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Oe(g => {
                    let p = this.getAxisMotionValue(g).get() || 0;
                    if (ct.test(p)) {
                        const {
                            projection: y
                        } = this.visualElement;
                        if (y && y.layout) {
                            const x = y.layout.layoutBox[g];
                            x && (p = ke(x) * (parseFloat(p) / 100))
                        }
                    }
                    this.originPoint[g] = p
                }), w && Y.postRender(() => w(f, h)), fl(this.visualElement, "transform");
                const {
                    animationState: S
                } = this.visualElement;
                S && S.setActive("whileDrag", !0)
            },
            a = (f, h) => {
                this.latestPointerEvent = f, this.latestPanInfo = h;
                const {
                    dragPropagation: m,
                    dragDirectionLock: v,
                    onDirectionLock: w,
                    onDrag: S
                } = this.getProps();
                if (!m && !this.openDragLock) return;
                const {
                    offset: g
                } = h;
                if (v && this.currentDirection === null) {
                    this.currentDirection = Qw(g), this.currentDirection !== null && w && w(this.currentDirection);
                    return
                }
                this.updateAxis("x", h.point, g), this.updateAxis("y", h.point, g), this.visualElement.render(), S && S(f, h)
            },
            l = (f, h) => {
                this.latestPointerEvent = f, this.latestPanInfo = h, this.stop(f, h), this.latestPointerEvent = null, this.latestPanInfo = null
            },
            c = () => Oe(f => {
                var h;
                return this.getAnimationState(f) === "paused" && ((h = this.getAxisMotionValue(f).animation) == null ? void 0 : h.play())
            }),
            {
                dragSnapToOrigin: d
            } = this.getProps();
        this.panSession = new k0(t, {
            onSessionStart: s,
            onStart: o,
            onMove: a,
            onSessionEnd: l,
            resumeAnimation: c
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: d,
            distanceThreshold: r,
            contextWindow: w0(this.visualElement)
        })
    }
    stop(t, n) {
        const r = t || this.latestPointerEvent,
            i = n || this.latestPanInfo,
            s = this.isDragging;
        if (this.cancel(), !s || !i || !r) return;
        const {
            velocity: o
        } = i;
        this.startAnimation(o);
        const {
            onDragEnd: a
        } = this.getProps();
        a && Y.postRender(() => a(r, i))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: t,
            animationState: n
        } = this.visualElement;
        t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: r
        } = this.getProps();
        !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {
            drag: i
        } = this.getProps();
        if (!r || !Gi(t, i, this.currentDirection)) return;
        const s = this.getAxisMotionValue(t);
        let o = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (o = Bw(o, this.constraints[t], this.elastic[t])), s.set(o)
    }
    resolveConstraints() {
        var s;
        const {
            dragConstraints: t,
            dragElastic: n
        } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (s = this.visualElement.projection) == null ? void 0 : s.layout, i = this.constraints;
        t && Hn(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = Uw(r.layoutBox, t) : this.constraints = !1, this.elastic = Gw(n), i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && Oe(o => {
            this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = Kw(r.layoutBox[o], this.constraints[o]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: t,
            onMeasureDragConstraints: n
        } = this.getProps();
        if (!t || !Hn(t)) return !1;
        const r = t.current,
            {
                projection: i
            } = this.visualElement;
        if (!i || !i.layout) return !1;
        const s = zw(r, i.root, this.visualElement.getTransformPagePoint());
        let o = Ww(i.layout.layoutBox, s);
        if (n) {
            const a = n(Ew(o));
            this.hasMutatedConstraints = !!a, a && (o = p0(a))
        }
        return o
    }
    startAnimation(t) {
        const {
            drag: n,
            dragMomentum: r,
            dragElastic: i,
            dragTransition: s,
            dragSnapToOrigin: o,
            onDragTransitionEnd: a
        } = this.getProps(), l = this.constraints || {}, c = Oe(d => {
            if (!Gi(d, n, this.currentDirection)) return;
            let f = l && l[d] || {};
            o && (f = {
                min: 0,
                max: 0
            });
            const h = i ? 200 : 1e6,
                m = i ? 40 : 1e7,
                v = {
                    type: "inertia",
                    velocity: r ? t[d] : 0,
                    bounceStiffness: h,
                    bounceDamping: m,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...s,
                    ...f
                };
            return this.startAxisValueAnimation(d, v)
        });
        return Promise.all(c).then(a)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return fl(this.visualElement, t), r.start(Zu(t, r, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        Oe(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        Oe(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) == null ? void 0 : n.pause()
        })
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) == null ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`,
            r = this.visualElement.getProps(),
            i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        Oe(n => {
            const {
                drag: r
            } = this.getProps();
            if (!Gi(n, r, this.currentDirection)) return;
            const {
                projection: i
            } = this.visualElement, s = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {
                    min: o,
                    max: a
                } = i.layout.layoutBox[n];
                s.set(t[n] - Q(o, a, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: t,
            dragConstraints: n
        } = this.getProps(), {
            projection: r
        } = this.visualElement;
        if (!Hn(n) || !r || !this.constraints) return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        Oe(o => {
            const a = this.getAxisMotionValue(o);
            if (a && this.constraints !== !1) {
                const l = a.get();
                i[o] = Hw({
                    min: l,
                    max: l
                }, this.constraints[o])
            }
        });
        const {
            transformTemplate: s
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Oe(o => {
            if (!Gi(o, t, null)) return;
            const a = this.getAxisMotionValue(o),
                {
                    min: l,
                    max: c
                } = this.constraints[o];
            a.set(Q(l, c, i[o]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        Yw.set(this.visualElement, this);
        const t = this.visualElement.current,
            n = Ir(t, "pointerdown", l => {
                const {
                    drag: c,
                    dragListener: d = !0
                } = this.getProps();
                c && d && this.start(l)
            }),
            r = () => {
                const {
                    dragConstraints: l
                } = this.getProps();
                Hn(l) && l.current && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: i
            } = this.visualElement,
            s = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), Y.read(r);
        const o = mi(window, "resize", () => this.scalePositionWithinConstraints()),
            a = i.addEventListener("didUpdate", ({
                delta: l,
                hasLayoutChanged: c
            }) => {
                this.isDragging && c && (Oe(d => {
                    const f = this.getAxisMotionValue(d);
                    f && (this.originPoint[d] += l[d].translate, f.set(f.get() + l[d].translate))
                }), this.visualElement.render())
            });
        return () => {
            o(), n(), s(), a && a()
        }
    }
    getProps() {
        const t = this.visualElement.getProps(),
            {
                drag: n = !1,
                dragDirectionLock: r = !1,
                dragPropagation: i = !1,
                dragConstraints: s = !1,
                dragElastic: o = gl,
                dragMomentum: a = !0
            } = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: s,
            dragElastic: o,
            dragMomentum: a
        }
    }
}

function Gi(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}

function Qw(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
}
class Zw extends en {
    constructor(t) {
        super(t), this.removeGroupControls = He, this.removeListeners = He, this.controls = new Xw(t)
    }
    mount() {
        const {
            dragControls: t
        } = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || He
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const sf = e => (t, n) => {
    e && Y.postRender(() => e(t, n))
};
class qw extends en {
    constructor() {
        super(...arguments), this.removePointerDownListener = He
    }
    onPointerDown(t) {
        this.session = new k0(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: w0(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: t,
            onPanStart: n,
            onPan: r,
            onPanEnd: i
        } = this.node.getProps();
        return {
            onSessionStart: sf(t),
            onStart: sf(n),
            onMove: r,
            onEnd: (s, o) => {
                delete this.session, i && Y.postRender(() => i(s, o))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Ir(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}
const cs = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};

function of(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const Cr = {
    correct: (e, t) => {
        if (!t.target) return e;
        if (typeof e == "string")
            if (R.test(e)) e = parseFloat(e);
            else return e;
        const n = of(e, t.target.x),
            r = of(e, t.target.y);
        return `${n}% ${r}%`
    }
},
    Jw = {
        correct: (e, {
            treeScale: t,
            projectionDelta: n
        }) => {
            const r = e,
                i = Qt.parse(e);
            if (i.length > 5) return r;
            const s = Qt.createTransformer(e),
                o = typeof i[0] != "number" ? 1 : 0,
                a = n.x.scale * t.x,
                l = n.y.scale * t.y;
            i[0 + o] /= a, i[1 + o] /= l;
            const c = Q(a, l, .5);
            return typeof i[2 + o] == "number" && (i[2 + o] /= c), typeof i[3 + o] == "number" && (i[3 + o] /= c), s(i)
        }
    };
let af = !1;
class e3 extends k.Component {
    componentDidMount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r,
            layoutId: i
        } = this.props, {
            projection: s
        } = t;
        z2(t3), s && (n.group && n.group.add(s), r && r.register && i && r.register(s), af && s.root.didUpdate(), s.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), s.setOptions({
            ...s.options,
            onExitComplete: () => this.safeToRemove()
        })), cs.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {
            layoutDependency: n,
            visualElement: r,
            drag: i,
            isPresent: s
        } = this.props, {
            projection: o
        } = r;
        return o && (o.isPresent = s, af = !0, i || t.layoutDependency !== n || n === void 0 || t.isPresent !== s ? o.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? o.promote() : o.relegate() || Y.postRender(() => {
            const a = o.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: t
        } = this.props.visualElement;
        t && (t.root.didUpdate(), Ou.postRender(() => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r
        } = this.props, {
            projection: i
        } = t;
        i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {
            safeToRemove: t
        } = this.props;
        t && t()
    }
    render() {
        return null
    }
}

function b0(e) {
    const [t, n] = Qm(), r = k.useContext(vu);
    return u.jsx(e3, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: k.useContext(t0),
        isPresent: t,
        safeToRemove: n
    })
}
const t3 = {
    borderRadius: {
        ...Cr,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Cr,
    borderTopRightRadius: Cr,
    borderBottomLeftRadius: Cr,
    borderBottomRightRadius: Cr,
    boxShadow: Jw
};

function n3(e, t, n) {
    const r = ve(e) ? e : lr(e);
    return r.start(Zu("", r, t, n)), r.animation
}
const r3 = (e, t) => e.depth - t.depth;
class i3 {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(t) {
        ku(this.children, t), this.isDirty = !0
    }
    remove(t) {
        Su(this.children, t), this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(r3), this.isDirty = !1, this.children.forEach(t)
    }
}

function s3(e, t) {
    const n = Pe.now(),
        r = ({
            timestamp: i
        }) => {
            const s = i - n;
            s >= t && (Xt(r), e(s - t))
        };
    return Y.setup(r, !0), () => Xt(r)
}
const C0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    o3 = C0.length,
    lf = e => typeof e == "string" ? parseFloat(e) : e,
    uf = e => typeof e == "number" || R.test(e);

function a3(e, t, n, r, i, s) {
    i ? (e.opacity = Q(0, n.opacity ?? 1, l3(r)), e.opacityExit = Q(t.opacity ?? 1, 0, u3(r))) : s && (e.opacity = Q(t.opacity ?? 1, n.opacity ?? 1, r));
    for (let o = 0; o < o3; o++) {
        const a = `border${C0[o]}Radius`;
        let l = cf(t, a),
            c = cf(n, a);
        if (l === void 0 && c === void 0) continue;
        l || (l = 0), c || (c = 0), l === 0 || c === 0 || uf(l) === uf(c) ? (e[a] = Math.max(Q(lf(l), lf(c), r), 0), (ct.test(c) || ct.test(l)) && (e[a] += "%")) : e[a] = c
    } (t.rotate || n.rotate) && (e.rotate = Q(t.rotate || 0, n.rotate || 0, r))
}

function cf(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const l3 = j0(0, .5, ym),
    u3 = j0(.5, .95, He);

function j0(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(ui(e, t, r))
}

function df(e, t) {
    e.min = t.min, e.max = t.max
}

function _e(e, t) {
    df(e.x, t.x), df(e.y, t.y)
}

function ff(e, t) {
    e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin
}

function hf(e, t, n, r, i) {
    return e -= t, e = Us(e, 1 / n, r), i !== void 0 && (e = Us(e, 1 / i, r)), e
}

function c3(e, t = 0, n = 1, r = .5, i, s = e, o = e) {
    if (ct.test(t) && (t = parseFloat(t), t = Q(o.min, o.max, t / 100) - o.min), typeof t != "number") return;
    let a = Q(s.min, s.max, r);
    e === s && (a -= t), e.min = hf(e.min, t, n, a, i), e.max = hf(e.max, t, n, a, i)
}

function pf(e, t, [n, r, i], s, o) {
    c3(e, t[n], t[r], t[i], t.scale, s, o)
}
const d3 = ["x", "scaleX", "originX"],
    f3 = ["y", "scaleY", "originY"];

function mf(e, t, n, r) {
    pf(e.x, t, d3, n ? n.x : void 0, r ? r.x : void 0), pf(e.y, t, f3, n ? n.y : void 0, r ? r.y : void 0)
}

function gf(e) {
    return e.translate === 0 && e.scale === 1
}

function N0(e) {
    return gf(e.x) && gf(e.y)
}

function yf(e, t) {
    return e.min === t.min && e.max === t.max
}

function h3(e, t) {
    return yf(e.x, t.x) && yf(e.y, t.y)
}

function vf(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}

function T0(e, t) {
    return vf(e.x, t.x) && vf(e.y, t.y)
}

function xf(e) {
    return ke(e.x) / ke(e.y)
}

function wf(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
class p3 {
    constructor() {
        this.members = []
    }
    add(t) {
        ku(this.members, t), t.scheduleRender()
    }
    remove(t) {
        if (Su(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i => t === i);
        if (n === 0) return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const s = this.members[i];
            if (s.isPresent !== !1) {
                r = s;
                break
            }
        }
        return r ? (this.promote(r), !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
            r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {
                crossfade: i
            } = t.options;
            i === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {
                options: n,
                resumingFrom: r
            } = t;
            n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function m3(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x,
        s = e.y.translate / t.y,
        o = (n == null ? void 0 : n.z) || 0;
    if ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
        const {
            transformPerspective: c,
            rotate: d,
            rotateX: f,
            rotateY: h,
            skewX: m,
            skewY: v
        } = n;
        c && (r = `perspective(${c}px) ${r}`), d && (r += `rotate(${d}deg) `), f && (r += `rotateX(${f}deg) `), h && (r += `rotateY(${h}deg) `), m && (r += `skewX(${m}deg) `), v && (r += `skewY(${v}deg) `)
    }
    const a = e.x.scale * t.x,
        l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none"
}
const qo = ["", "X", "Y", "Z"],
    g3 = 1e3;
let y3 = 0;

function Jo(e, t, n, r) {
    const {
        latestValues: i
    } = t;
    i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0))
}

function P0(e) {
    if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
    const {
        visualElement: t
    } = e.options;
    if (!t) return;
    const n = c0(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {
            layout: i,
            layoutId: s
        } = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", Y, !(i || s))
    }
    const {
        parent: r
    } = e;
    r && !r.hasCheckedOptimisedAppear && P0(r)
}

function E0({
    attachResizeListener: e,
    defaultParent: t,
    measureScroll: n,
    checkIsScrollRoot: r,
    resetTransform: i
}) {
    return class {
        constructor(o = {}, a = t == null ? void 0 : t()) {
            this.id = y3++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, this.nodes.forEach(w3), this.nodes.forEach(C3), this.nodes.forEach(j3), this.nodes.forEach(k3)
            }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = o, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new i3)
        }
        addEventListener(o, a) {
            return this.eventHandlers.has(o) || this.eventHandlers.set(o, new Cu), this.eventHandlers.get(o).add(a)
        }
        notifyListeners(o, ...a) {
            const l = this.eventHandlers.get(o);
            l && l.notify(...a)
        }
        hasListeners(o) {
            return this.eventHandlers.has(o)
        }
        mount(o) {
            if (this.instance) return;
            this.isSVG = Xm(o) && !p2(o), this.instance = o;
            const {
                layoutId: a,
                layout: l,
                visualElement: c
            } = this.options;
            if (c && !c.current && c.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0), e) {
                let d, f = 0;
                const h = () => this.root.updateBlockedByResize = !1;
                Y.read(() => {
                    f = window.innerWidth
                }), e(o, () => {
                    const m = window.innerWidth;
                    m !== f && (f = m, this.root.updateBlockedByResize = !0, d && d(), d = s3(h, 250), cs.hasAnimatedSinceResize && (cs.hasAnimatedSinceResize = !1, this.nodes.forEach(bf)))
                })
            }
            a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && c && (a || l) && this.addEventListener("didUpdate", ({
                delta: d,
                hasLayoutChanged: f,
                hasRelativeLayoutChanged: h,
                layout: m
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const v = this.options.transition || c.getDefaultTransition() || M3,
                    {
                        onLayoutAnimationStart: w,
                        onLayoutAnimationComplete: S
                    } = c.getProps(),
                    g = !this.targetLayout || !T0(this.targetLayout, m),
                    p = !f && h;
                if (this.options.layoutRoot || this.resumeFrom || p || f && (g || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                    const y = {
                        ...zu(v, "layout"),
                        onPlay: w,
                        onComplete: S
                    };
                    (c.shouldReduceMotion || this.options.layoutRoot) && (y.delay = 0, y.type = !1), this.startAnimation(y), this.setAnimationOrigin(d, p)
                } else f || bf(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = m
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const o = this.getStack();
            o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Xt(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(N3), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: o
            } = this.options;
            return o && o.getProps().transformTemplate
        }
        willUpdate(o = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && P0(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let d = 0; d < this.path.length; d++) {
                const f = this.path[d];
                f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1)
            }
            const {
                layoutId: a,
                layout: l
            } = this.options;
            if (a === void 0 && !l) return;
            const c = this.getTransformTemplate();
            this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), o && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(kf);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(Sf);
                return
            }
            this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(b3), this.nodes.forEach(v3), this.nodes.forEach(x3)) : this.nodes.forEach(Sf), this.clearAllSnapshots();
            const a = Pe.now();
            fe.delta = bt(0, 1e3 / 60, a - fe.timestamp), fe.timestamp = a, fe.isProcessing = !0, Uo.update.process(fe), Uo.preRender.process(fe), Uo.render.process(fe), fe.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, Ou.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(S3), this.sharedNodes.forEach(T3)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Y.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Y.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !ke(this.snapshot.measuredBox.x) && !ke(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
            const o = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = ne(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: a
            } = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
        }
        updateScroll(o = "measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1), a && this.instance) {
                const l = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: o,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                }
            }
        }
        resetTransform() {
            if (!i) return;
            const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                a = this.projectionDelta && !N0(this.projectionDelta),
                l = this.getTransformTemplate(),
                c = l ? l(this.latestValues, "") : void 0,
                d = c !== this.prevTransformTemplateValue;
            o && this.instance && (a || sn(this.latestValues) || d) && (i(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(o = !0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return o && (l = this.removeTransform(l)), L3(l), {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var c;
            const {
                visualElement: o
            } = this.options;
            if (!o) return ne();
            const a = o.measureViewportBox();
            if (!(((c = this.scroll) == null ? void 0 : c.wasRoot) || this.path.some(R3))) {
                const {
                    scroll: d
                } = this.root;
                d && (Gn(a.x, d.offset.x), Gn(a.y, d.offset.y))
            }
            return a
        }
        removeElementScroll(o) {
            var l;
            const a = ne();
            if (_e(a, o), (l = this.scroll) != null && l.wasRoot) return a;
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c],
                    {
                        scroll: f,
                        options: h
                    } = d;
                d !== this.root && f && h.layoutScroll && (f.wasRoot && _e(a, o), Gn(a.x, f.offset.x), Gn(a.y, f.offset.y))
            }
            return a
        }
        applyTransform(o, a = !1) {
            const l = ne();
            _e(l, o);
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c];
                !a && d.options.layoutScroll && d.scroll && d !== d.root && Yn(l, {
                    x: -d.scroll.offset.x,
                    y: -d.scroll.offset.y
                }), sn(d.latestValues) && Yn(l, d.latestValues)
            }
            return sn(this.latestValues) && Yn(l, this.latestValues), l
        }
        removeTransform(o) {
            const a = ne();
            _e(a, o);
            for (let l = 0; l < this.path.length; l++) {
                const c = this.path[l];
                if (!c.instance || !sn(c.latestValues)) continue;
                pl(c.latestValues) && c.updateSnapshot();
                const d = ne(),
                    f = c.measurePageBox();
                _e(d, f), mf(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, d)
            }
            return sn(this.latestValues) && mf(a, this.latestValues), a
        }
        setTargetDelta(o) {
            this.targetDelta = o, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(o) {
            this.options = {
                ...this.options,
                ...o,
                crossfade: o.crossfade !== void 0 ? o.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== fe.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(o = !1) {
            var h;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const l = !!this.resumingFrom || this !== a;
            if (!(o || l && this.isSharedProjectionDirty || this.isProjectionDirty || (h = this.parent) != null && h.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: d,
                layoutId: f
            } = this.options;
            if (!(!this.layout || !(d || f))) {
                if (this.resolvedRelativeTargetAt = fe.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const m = this.getClosestProjectingParent();
                    m && m.layout && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ne(), this.relativeTargetOrigin = ne(), Ur(this.relativeTargetOrigin, this.layout.layoutBox, m.layout.layoutBox), _e(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = ne(), this.targetWithTransforms = ne()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Vw(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : _e(this.target, this.layout.layoutBox), v0(this.target, this.targetDelta)) : _e(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                    this.attemptToResolveRelativeTarget = !1;
                    const m = this.getClosestProjectingParent();
                    m && !!m.resumingFrom == !!this.resumingFrom && !m.options.layoutScroll && m.target && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ne(), this.relativeTargetOrigin = ne(), Ur(this.relativeTargetOrigin, this.target, m.target), _e(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || pl(this.parent.latestValues) || y0(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var v;
            const o = this.getLead(),
                a = !!this.resumingFrom || this !== o;
            let l = !0;
            if ((this.isProjectionDirty || (v = this.parent) != null && v.isProjectionDirty) && (l = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === fe.timestamp && (l = !1), l) return;
            const {
                layout: c,
                layoutId: d
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || d)) return;
            _e(this.layoutCorrected, this.layout.layoutBox);
            const f = this.treeScale.x,
                h = this.treeScale.y;
            Fw(this.layoutCorrected, this.treeScale, this.path, a), o.layout && !o.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (o.target = o.layout.layoutBox, o.targetWithTransforms = ne());
            const {
                target: m
            } = o;
            if (!m) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            } !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (ff(this.prevProjectionDelta.x, this.projectionDelta.x), ff(this.prevProjectionDelta.y, this.projectionDelta.y)), Br(this.projectionDelta, this.layoutCorrected, m, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== h || !wf(this.projectionDelta.x, this.prevProjectionDelta.x) || !wf(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(o = !0) {
            var a;
            if ((a = this.options.visualElement) == null || a.scheduleRender(), o) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Kn(), this.projectionDelta = Kn(), this.projectionDeltaWithTransform = Kn()
        }
        setAnimationOrigin(o, a = !1) {
            const l = this.snapshot,
                c = l ? l.latestValues : {},
                d = {
                    ...this.latestValues
                },
                f = Kn();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
            const h = ne(),
                m = l ? l.source : void 0,
                v = this.layout ? this.layout.source : void 0,
                w = m !== v,
                S = this.getStack(),
                g = !S || S.members.length <= 1,
                p = !!(w && !g && this.options.crossfade === !0 && !this.path.some(E3));
            this.animationProgress = 0;
            let y;
            this.mixTargetDelta = x => {
                const C = x / 1e3;
                Cf(f.x, o.x, C), Cf(f.y, o.y, C), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ur(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), P3(this.relativeTarget, this.relativeTargetOrigin, h, C), y && h3(this.relativeTarget, y) && (this.isProjectionDirty = !1), y || (y = ne()), _e(y, this.relativeTarget)), w && (this.animationValues = d, a3(d, c, this.latestValues, C, p, g)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(o) {
            var a, l, c;
            this.notifyListeners("animationStart"), (a = this.currentAnimation) == null || a.stop(), (c = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || c.stop(), this.pendingAnimation && (Xt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Y.update(() => {
                cs.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = lr(0)), this.currentAnimation = n3(this.motionValue, [0, 1e3], {
                    ...o,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: d => {
                        this.mixTargetDelta(d), o.onUpdate && o.onUpdate(d)
                    },
                    onStop: () => { },
                    onComplete: () => {
                        o.onComplete && o.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const o = this.getStack();
            o && o.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(g3), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let {
                targetWithTransforms: a,
                target: l,
                layout: c,
                latestValues: d
            } = o;
            if (!(!a || !l || !c)) {
                if (this !== o && this.layout && c && M0(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
                    l = this.target || ne();
                    const f = ke(this.layout.layoutBox.x);
                    l.x.min = o.target.x.min, l.x.max = l.x.min + f;
                    const h = ke(this.layout.layoutBox.y);
                    l.y.min = o.target.y.min, l.y.max = l.y.min + h
                }
                _e(a, l), Yn(a, d), Br(this.projectionDeltaWithTransform, this.layoutCorrected, a, d)
            }
        }
        registerSharedNode(o, a) {
            this.sharedNodes.has(o) || this.sharedNodes.set(o, new p3), this.sharedNodes.get(o).add(a);
            const c = a.options.initialPromotionConfig;
            a.promote({
                transition: c ? c.transition : void 0,
                preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const o = this.getStack();
            return o ? o.lead === this : !0
        }
        getLead() {
            var a;
            const {
                layoutId: o
            } = this.options;
            return o ? ((a = this.getStack()) == null ? void 0 : a.lead) || this : this
        }
        getPrevLead() {
            var a;
            const {
                layoutId: o
            } = this.options;
            return o ? (a = this.getStack()) == null ? void 0 : a.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: o
            } = this.options;
            if (o) return this.root.sharedNodes.get(o)
        }
        promote({
            needsReset: o,
            transition: a,
            preserveFollowOpacity: l
        } = {}) {
            const c = this.getStack();
            c && c.promote(this, l), o && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const o = this.getStack();
            return o ? o.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: o
            } = this.options;
            if (!o) return;
            let a = !1;
            const {
                latestValues: l
            } = o;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a) return;
            const c = {};
            l.z && Jo("z", o, c, this.animationValues);
            for (let d = 0; d < qo.length; d++) Jo(`rotate${qo[d]}`, o, c, this.animationValues), Jo(`skew${qo[d]}`, o, c, this.animationValues);
            o.render();
            for (const d in c) o.setStaticValue(d, c[d]), this.animationValues && (this.animationValues[d] = c[d]);
            o.scheduleRender()
        }
        applyProjectionStyles(o, a) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) {
                o.visibility = "hidden";
                return
            }
            const l = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1, o.visibility = "", o.opacity = "", o.pointerEvents = us(a == null ? void 0 : a.pointerEvents) || "", o.transform = l ? l(this.latestValues, "") : "none";
                return
            }
            const c = this.getLead();
            if (!this.projectionDelta || !this.layout || !c.target) {
                this.options.layoutId && (o.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, o.pointerEvents = us(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !sn(this.latestValues) && (o.transform = l ? l({}, "") : "none", this.hasProjected = !1);
                return
            }
            o.visibility = "";
            const d = c.animationValues || c.latestValues;
            this.applyTransformsToTarget();
            let f = m3(this.projectionDeltaWithTransform, this.treeScale, d);
            l && (f = l(d, f)), o.transform = f;
            const {
                x: h,
                y: m
            } = this.projectionDelta;
            o.transformOrigin = `${h.origin * 100}% ${m.origin * 100}% 0`, c.animationValues ? o.opacity = c === this ? d.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : o.opacity = c === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
            for (const v in hi) {
                if (d[v] === void 0) continue;
                const {
                    correct: w,
                    applyTo: S,
                    isCSSVariable: g
                } = hi[v], p = f === "none" ? d[v] : w(d[v], c);
                if (S) {
                    const y = S.length;
                    for (let x = 0; x < y; x++) o[S[x]] = p
                } else g ? this.options.visualElement.renderState.vars[v] = p : o[v] = p
            }
            this.options.layoutId && (o.pointerEvents = c === this ? us(a == null ? void 0 : a.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(o => {
                var a;
                return (a = o.currentAnimation) == null ? void 0 : a.stop()
            }), this.root.nodes.forEach(kf), this.root.sharedNodes.clear()
        }
    }
}

function v3(e) {
    e.updateLayout()
}

function x3(e) {
    var n;
    const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
        const {
            layoutBox: r,
            measuredBox: i
        } = e.layout, {
            animationType: s
        } = e.options, o = t.source !== e.layout.source;
        s === "size" ? Oe(f => {
            const h = o ? t.measuredBox[f] : t.layoutBox[f],
                m = ke(h);
            h.min = r[f].min, h.max = h.min + m
        }) : M0(s, t.layoutBox, r) && Oe(f => {
            const h = o ? t.measuredBox[f] : t.layoutBox[f],
                m = ke(r[f]);
            h.max = h.min + m, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + m)
        });
        const a = Kn();
        Br(a, r, t.layoutBox);
        const l = Kn();
        o ? Br(l, e.applyTransform(i, !0), t.measuredBox) : Br(l, r, t.layoutBox);
        const c = !N0(a);
        let d = !1;
        if (!e.resumeFrom) {
            const f = e.getClosestProjectingParent();
            if (f && !f.resumeFrom) {
                const {
                    snapshot: h,
                    layout: m
                } = f;
                if (h && m) {
                    const v = ne();
                    Ur(v, t.layoutBox, h.layoutBox);
                    const w = ne();
                    Ur(w, r, m.layoutBox), T0(v, w) || (d = !0), f.options.layoutRoot && (e.relativeTarget = w, e.relativeTargetOrigin = v, e.relativeParent = f)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: t,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: c,
            hasRelativeLayoutChanged: d
        })
    } else if (e.isLead()) {
        const {
            onExitComplete: r
        } = e.options;
        r && r()
    }
    e.options.transition = void 0
}

function w3(e) {
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}

function k3(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}

function S3(e) {
    e.clearSnapshot()
}

function kf(e) {
    e.clearMeasurements()
}

function Sf(e) {
    e.isLayoutDirty = !1
}

function b3(e) {
    const {
        visualElement: t
    } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
}

function bf(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
}

function C3(e) {
    e.resolveTargetDelta()
}

function j3(e) {
    e.calcProjection()
}

function N3(e) {
    e.resetSkewAndRotation()
}

function T3(e) {
    e.removeLeadSnapshot()
}

function Cf(e, t, n) {
    e.translate = Q(t.translate, 0, n), e.scale = Q(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
}

function jf(e, t, n, r) {
    e.min = Q(t.min, n.min, r), e.max = Q(t.max, n.max, r)
}

function P3(e, t, n, r) {
    jf(e.x, t.x, n.x, r), jf(e.y, t.y, n.y, r)
}

function E3(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const M3 = {
    duration: .45,
    ease: [.4, 0, .1, 1]
},
    Nf = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
    Tf = Nf("applewebkit/") && !Nf("chrome/") ? Math.round : He;

function Pf(e) {
    e.min = Tf(e.min), e.max = Tf(e.max)
}

function L3(e) {
    Pf(e.x), Pf(e.y)
}

function M0(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !Dw(xf(t), xf(n), .2)
}

function R3(e) {
    var t;
    return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot)
}
const $3 = E0({
    attachResizeListener: (e, t) => mi(e, "resize", t),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
}),
    ea = {
        current: void 0
    },
    L0 = E0({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!ea.current) {
                const e = new $3({});
                e.mount(window), e.setOptions({
                    layoutScroll: !0
                }), ea.current = e
            }
            return ea.current
        },
        resetTransform: (e, t) => {
            e.style.transform = t !== void 0 ? t : "none"
        },
        checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
    }),
    A3 = {
        pan: {
            Feature: qw
        },
        drag: {
            Feature: Zw,
            ProjectionNode: L0,
            MeasureLayout: b0
        }
    };

function Ef(e, t, n) {
    const {
        props: r
    } = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
    const i = "onHover" + n,
        s = r[i];
    s && Y.postRender(() => s(t, ji(t)))
}
class D3 extends en {
    mount() {
        const {
            current: t
        } = this.node;
        t && (this.unmount = u2(t, (n, r) => (Ef(this.node, r, "Start"), i => Ef(this.node, i, "End"))))
    }
    unmount() { }
}
class V3 extends en {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        } !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = Si(mi(this.node.current, "focus", () => this.onFocus()), mi(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() { }
}

function Mf(e, t, n) {
    const {
        props: r
    } = e;
    if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
    const i = "onTap" + (n === "End" ? "" : n),
        s = r[i];
    s && Y.postRender(() => s(t, ji(t)))
}
class F3 extends en {
    mount() {
        const {
            current: t
        } = this.node;
        t && (this.unmount = h2(t, (n, r) => (Mf(this.node, r, "Start"), (i, {
            success: s
        }) => Mf(this.node, i, s ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() { }
}
const yl = new WeakMap,
    ta = new WeakMap,
    z3 = e => {
        const t = yl.get(e.target);
        t && t(e)
    },
    _3 = e => {
        e.forEach(z3)
    };

function O3({
    root: e,
    ...t
}) {
    const n = e || document;
    ta.has(n) || ta.set(n, {});
    const r = ta.get(n),
        i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(_3, {
        root: e,
        ...t
    })), r[i]
}

function I3(e, t, n) {
    const r = O3(t);
    return yl.set(e, n), r.observe(e), () => {
        yl.delete(e), r.unobserve(e)
    }
}
const B3 = {
    some: 0,
    all: 1
};
class U3 extends en {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: t = {}
        } = this.node.getProps(), {
            root: n,
            margin: r,
            amount: i = "some",
            once: s
        } = t, o = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : B3[i]
        }, a = l => {
            const {
                isIntersecting: c
            } = l;
            if (this.isInView === c || (this.isInView = c, s && !c && this.hasEnteredView)) return;
            c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
            const {
                onViewportEnter: d,
                onViewportLeave: f
            } = this.node.getProps(), h = c ? d : f;
            h && h(l)
        };
        return I3(this.node.current, o, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: t,
            prevProps: n
        } = this.node;
        ["amount", "margin", "root"].some(W3(t, n)) && this.startObserver()
    }
    unmount() { }
}

function W3({
    viewport: e = {}
}, {
    viewport: t = {}
} = {}) {
    return n => e[n] !== t[n]
}
const H3 = {
    inView: {
        Feature: U3
    },
    tap: {
        Feature: F3
    },
    focus: {
        Feature: V3
    },
    hover: {
        Feature: D3
    }
},
    K3 = {
        layout: {
            ProjectionNode: L0,
            MeasureLayout: b0
        }
    },
    vl = {
        current: null
    },
    R0 = {
        current: !1
    };

function G3() {
    if (R0.current = !0, !!wu)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)"),
                t = () => vl.current = e.matches;
            e.addEventListener("change", t), t()
        } else vl.current = !1
}
const Y3 = new WeakMap;

function X3(e, t, n) {
    for (const r in t) {
        const i = t[r],
            s = n[r];
        if (ve(i)) e.addValue(r, i);
        else if (ve(s)) e.addValue(r, lr(i, {
            owner: e
        }));
        else if (s !== i)
            if (e.hasValue(r)) {
                const o = e.getValue(r);
                o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i)
            } else {
                const o = e.getStaticValue(r);
                e.addValue(r, lr(o !== void 0 ? o : i, {
                    owner: e
                }))
            }
    }
    for (const r in n) t[r] === void 0 && e.removeValue(r);
    return t
}
const Lf = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class Q3 {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({
        parent: t,
        props: n,
        presenceContext: r,
        reducedMotionConfig: i,
        blockInitialAnimation: s,
        visualState: o
    }, a = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = Vu, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const h = Pe.now();
            this.renderScheduledAt < h && (this.renderScheduledAt = h, Y.render(this.render, !1, !0))
        };
        const {
            latestValues: l,
            renderState: c
        } = o;
        this.latestValues = l, this.baseTarget = {
            ...l
        }, this.initialValues = n.initial ? {
            ...l
        } : {}, this.renderState = c, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!s, this.isControllingVariants = mo(n), this.isVariantNode = Jm(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
        const {
            willChange: d,
            ...f
        } = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const h in f) {
            const m = f[h];
            l[h] !== void 0 && ve(m) && m.set(l[h], !1)
        }
    }
    mount(t) {
        this.current = t, Y3.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), R0.current || G3(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : vl.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        this.projection && this.projection.unmount(), Xt(this.notifyUpdate), Xt(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
        for (const t in this.events) this.events[t].clear();
        for (const t in this.features) {
            const n = this.features[t];
            n && (n.unmount(), n.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(t, n) {
        this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
        const r = mr.has(t);
        r && this.onBindTransform && this.onBindTransform();
        const i = n.on("change", a => {
            this.latestValues[t] = a, this.props.onUpdate && Y.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0)
        }),
            s = n.on("renderRequest", this.scheduleRender);
        let o;
        window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
            i(), s(), o && o(), n.owner && n.stop()
        })
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in ur) {
            const n = ur[t];
            if (!n) continue;
            const {
                isEnabled: r,
                Feature: i
            } = n;
            if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)), this.features[t]) {
                const s = this.features[t];
                s.isMounted ? s.update() : (s.mount(), s.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ne()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
        for (let r = 0; r < Lf.length; r++) {
            const i = Lf[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
            const s = "on" + i,
                o = t[s];
            o && (this.propEventSubscriptions[i] = this.on(i, o))
        }
        this.prevMotionValues = X3(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t]) return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = lr(n === null ? void 0 : n, {
            owner: this
        }), this.addValue(t, r)), r
    }
    readValue(t, n) {
        let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
        return r != null && (typeof r == "string" && (am(r) || um(r)) ? r = parseFloat(r) : !g2(r) && Qt.test(n) && (r = Wm(t, n)), this.setBaseTarget(t, ve(r) ? r.get() : r)), ve(r) ? r.get() : r
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var s;
        const {
            initial: n
        } = this.props;
        let r;
        if (typeof n == "string" || typeof n == "object") {
            const o = Xu(this.props, n, (s = this.presenceContext) == null ? void 0 : s.custom);
            o && (r = o[t])
        }
        if (n && r !== void 0) return r;
        const i = this.getBaseTargetFromProps(this.props, t);
        return i !== void 0 && !ve(i) ? i : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new Cu), this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class $0 extends Q3 {
    constructor() {
        super(...arguments), this.KeyframeResolver = i2
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {
        vars: n,
        style: r
    }) {
        delete n[t], delete r[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: t
        } = this.props;
        ve(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }))
    }
}

function A0(e, {
    style: t,
    vars: n
}, r, i) {
    const s = e.style;
    let o;
    for (o in t) s[o] = t[o];
    i == null || i.applyProjectionStyles(s, r);
    for (o in n) s.setProperty(o, n[o])
}

function Z3(e) {
    return window.getComputedStyle(e)
}
class q3 extends $0 {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = A0
    }
    readValueFromInstance(t, n) {
        var r;
        if (mr.has(n)) return (r = this.projection) != null && r.isProjecting ? sl(n) : bx(t, n); {
            const i = Z3(t),
                s = (Tu(n) ? i.getPropertyValue(n) : i[n]) || 0;
            return typeof s == "string" ? s.trim() : s
        }
    }
    measureInstanceViewportBox(t, {
        transformPagePoint: n
    }) {
        return x0(t, n)
    }
    build(t, n, r) {
        Ku(t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return Qu(t, n, r)
    }
}
const D0 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function J3(e, t, n, r) {
    A0(e, t, void 0, r);
    for (const i in t.attrs) e.setAttribute(D0.has(i) ? i : Hu(i), t.attrs[i])
}
class e5 extends $0 {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ne
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (mr.has(n)) {
            const r = Um(n);
            return r && r.default || 0
        }
        return n = D0.has(n) ? n : Hu(n), t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return u0(t, n, r)
    }
    build(t, n, r) {
        s0(t, n, this.isSVGTag, r.transformTemplate, r.style)
    }
    renderInstance(t, n, r, i) {
        J3(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = a0(t.tagName), super.mount(t)
    }
}
const t5 = (e, t) => Yu(e) ? new e5(t) : new q3(t, {
    allowProjection: e !== k.Fragment
}),
    n5 = tw({
        ...Tw,
        ...H3,
        ...A3,
        ...K3
    }, t5),
    r5 = N2(n5);
var V0 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
},
    Rf = Vt.createContext && Vt.createContext(V0),
    i5 = ["attr", "size", "title"];

function s5(e, t) {
    if (e == null) return {};
    var n = o5(e, t),
        r, i;
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (i = 0; i < s.length; i++) r = s[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}

function o5(e, t) {
    if (e == null) return {};
    var n = {};
    for (var r in e)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
            if (t.indexOf(r) >= 0) continue;
            n[r] = e[r]
        } return n
}

function Ws() {
    return Ws = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Ws.apply(this, arguments)
}

function $f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function Hs(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? $f(Object(n), !0).forEach(function (r) {
            a5(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $f(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}

function a5(e, t, n) {
    return t = l5(t), t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function l5(e) {
    var t = u5(e, "string");
    return typeof t == "symbol" ? t : t + ""
}

function u5(e, t) {
    if (typeof e != "object" || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function F0(e) {
    return e && e.map((t, n) => Vt.createElement(t.tag, Hs({
        key: n
    }, t.attr), F0(t.child)))
}

function Nn(e) {
    return t => Vt.createElement(c5, Ws({
        attr: Hs({}, e.attr)
    }, t), F0(e.child))
}

function c5(e) {
    var t = n => {
        var {
            attr: r,
            size: i,
            title: s
        } = e, o = s5(e, i5), a = i || n.size || "1em", l;
        return n.className && (l = n.className), e.className && (l = (l ? l + " " : "") + e.className), Vt.createElement("svg", Ws({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, n.attr, r, o, {
            className: l,
            style: Hs(Hs({
                color: e.color || n.color
            }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg"
        }), s && Vt.createElement("title", null, s), e.children)
    };
    return Rf !== void 0 ? Vt.createElement(Rf.Consumer, null, n => t(n)) : t(V0)
}

function d5(e) {
    return Nn({
        tag: "svg",
        attr: {
            viewBox: "0 0 576 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"
            },
            child: []
        }]
    })(e)
}

function Af(e) {
    return Nn({
        tag: "svg",
        attr: {
            viewBox: "0 0 384 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
            },
            child: []
        }]
    })(e)
}

function f5(e) {
    return Nn({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z"
            },
            child: []
        }]
    })(e)
}

function Ks(e) {
    return Nn({
        tag: "svg",
        attr: {
            viewBox: "0 0 640 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
            },
            child: []
        }]
    })(e)
}

function h5(e) {
    return Nn({
        tag: "svg",
        attr: {
            viewBox: "0 0 384 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4.7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9.7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"
            },
            child: []
        }]
    })(e)
}

function p5(e) {
    return Nn({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"
            },
            child: []
        }]
    })(e)
}

function m5(e) {
    return Nn({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"
            },
            child: []
        }]
    })(e)
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var g5 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y5 = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(),
    z = (e, t) => {
        const n = k.forwardRef(({
            color: r = "currentColor",
            size: i = 24,
            strokeWidth: s = 2,
            absoluteStrokeWidth: o,
            className: a = "",
            children: l,
            ...c
        }, d) => k.createElement("svg", {
            ref: d,
            ...g5,
            width: i,
            height: i,
            stroke: r,
            strokeWidth: o ? Number(s) * 24 / Number(i) : s,
            className: ["lucide", `lucide-${y5(e)}`, a].join(" "),
            ...c
        }, [...t.map(([f, h]) => k.createElement(f, h)), ...Array.isArray(l) ? l : [l]]));
        return n.displayName = `${e}`, n
    };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v5 = z("AlertCircle", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["line", {
        x1: "12",
        x2: "12",
        y1: "8",
        y2: "12",
        key: "1pkeuh"
    }],
    ["line", {
        x1: "12",
        x2: "12.01",
        y1: "16",
        y2: "16",
        key: "4dfq90"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z0 = z("AlertTriangle", [
    ["path", {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
        key: "c3ski4"
    }],
    ["path", {
        d: "M12 9v4",
        key: "juzpu7"
    }],
    ["path", {
        d: "M12 17h.01",
        key: "p32p05"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _0 = z("CheckCircle", [
    ["path", {
        d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
        key: "g774vq"
    }],
    ["path", {
        d: "m9 11 3 3L22 4",
        key: "1pflzl"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Df = z("Check", [
    ["path", {
        d: "M20 6 9 17l-5-5",
        key: "1gmf2c"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x5 = z("ChevronDown", [
    ["path", {
        d: "m6 9 6 6 6-6",
        key: "qrunsl"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O0 = z("Code", [
    ["polyline", {
        points: "16 18 22 12 16 6",
        key: "z7tu5w"
    }],
    ["polyline", {
        points: "8 6 2 12 8 18",
        key: "1eg1df"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xl = z("Copy", [
    ["rect", {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea"
    }],
    ["path", {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w5 = z("Crown", [
    ["path", {
        d: "m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",
        key: "zkxr6b"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k5 = z("DollarSign", [
    ["line", {
        x1: "12",
        x2: "12",
        y1: "2",
        y2: "22",
        key: "7eqyqh"
    }],
    ["path", {
        d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
        key: "1b0p4s"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I0 = z("Download", [
    ["path", {
        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
        key: "ih7n3h"
    }],
    ["polyline", {
        points: "7 10 12 15 17 10",
        key: "2ggqvy"
    }],
    ["line", {
        x1: "12",
        x2: "12",
        y1: "15",
        y2: "3",
        key: "1vk2je"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qu = z("ExternalLink", [
    ["path", {
        d: "M15 3h6v6",
        key: "1q9fwt"
    }],
    ["path", {
        d: "M10 14 21 3",
        key: "gplh6r"
    }],
    ["path", {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        key: "a6xqqp"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S5 = z("Gauge", [
    ["path", {
        d: "m12 14 4-4",
        key: "9kzdfg"
    }],
    ["path", {
        d: "M3.34 19a10 10 0 1 1 17.32 0",
        key: "19p75a"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b5 = z("Gift", [
    ["rect", {
        x: "3",
        y: "8",
        width: "18",
        height: "4",
        rx: "1",
        key: "bkv52"
    }],
    ["path", {
        d: "M12 8v13",
        key: "1c76mn"
    }],
    ["path", {
        d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",
        key: "6wjy6b"
    }],
    ["path", {
        d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
        key: "1ihvrl"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C5 = z("Infinity", [
    ["path", {
        d: "M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z",
        key: "1z0uae"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B0 = z("Key", [
    ["circle", {
        cx: "7.5",
        cy: "15.5",
        r: "5.5",
        key: "yqb3hr"
    }],
    ["path", {
        d: "m21 2-9.6 9.6",
        key: "1j0ho8"
    }],
    ["path", {
        d: "m15.5 7.5 3 3L22 7l-3-3",
        key: "1rn1fs"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vf = z("Lock", [
    ["rect", {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2",
        key: "1w4ew1"
    }],
    ["path", {
        d: "M7 11V7a5 5 0 0 1 10 0v4",
        key: "fwvmzm"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j5 = z("Menu", [
    ["line", {
        x1: "4",
        x2: "20",
        y1: "12",
        y2: "12",
        key: "1e0a9i"
    }],
    ["line", {
        x1: "4",
        x2: "20",
        y1: "6",
        y2: "6",
        key: "1owob3"
    }],
    ["line", {
        x1: "4",
        x2: "20",
        y1: "18",
        y2: "18",
        key: "yk5zj1"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N5 = z("Minus", [
    ["path", {
        d: "M5 12h14",
        key: "1ays0h"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T5 = z("Palette", [
    ["circle", {
        cx: "13.5",
        cy: "6.5",
        r: ".5",
        fill: "currentColor",
        key: "1okk4w"
    }],
    ["circle", {
        cx: "17.5",
        cy: "10.5",
        r: ".5",
        fill: "currentColor",
        key: "f64h9f"
    }],
    ["circle", {
        cx: "8.5",
        cy: "7.5",
        r: ".5",
        fill: "currentColor",
        key: "fotxhn"
    }],
    ["circle", {
        cx: "6.5",
        cy: "12.5",
        r: ".5",
        fill: "currentColor",
        key: "qy21gx"
    }],
    ["path", {
        d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
        key: "12rzf8"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P5 = z("Pause", [
    ["rect", {
        width: "4",
        height: "16",
        x: "6",
        y: "4",
        key: "iffhe4"
    }],
    ["rect", {
        width: "4",
        height: "16",
        x: "14",
        y: "4",
        key: "sjin7j"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E5 = z("Play", [
    ["polygon", {
        points: "5 3 19 12 5 21 5 3",
        key: "191637"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M5 = z("Plus", [
    ["path", {
        d: "M5 12h14",
        key: "1ays0h"
    }],
    ["path", {
        d: "M12 5v14",
        key: "s699le"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dt = z("Shield", [
    ["path", {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U0 = z("Sparkles", [
    ["path", {
        d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
        key: "17u4zn"
    }],
    ["path", {
        d: "M5 3v4",
        key: "bklmnn"
    }],
    ["path", {
        d: "M19 17v4",
        key: "iiml17"
    }],
    ["path", {
        d: "M3 5h4",
        key: "nem4j1"
    }],
    ["path", {
        d: "M17 19h4",
        key: "lbex7p"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ds = z("Star", [
    ["polygon", {
        points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
        key: "8f66p6"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L5 = z("Users", [
    ["path", {
        d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
        key: "1yyitq"
    }],
    ["circle", {
        cx: "9",
        cy: "7",
        r: "4",
        key: "nufk8"
    }],
    ["path", {
        d: "M22 21v-2a4 4 0 0 0-3-3.87",
        key: "kshegd"
    }],
    ["path", {
        d: "M16 3.13a4 4 0 0 1 0 7.75",
        key: "1da9ce"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R5 = z("Volume2", [
    ["polygon", {
        points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
        key: "16drj5"
    }],
    ["path", {
        d: "M15.54 8.46a5 5 0 0 1 0 7.07",
        key: "ltjumu"
    }],
    ["path", {
        d: "M19.07 4.93a10 10 0 0 1 0 14.14",
        key: "1kegas"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $5 = z("VolumeX", [
    ["polygon", {
        points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
        key: "16drj5"
    }],
    ["line", {
        x1: "22",
        x2: "16",
        y1: "9",
        y2: "15",
        key: "1ewh16"
    }],
    ["line", {
        x1: "16",
        x2: "22",
        y1: "9",
        y2: "15",
        key: "5ykzw1"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gs = z("X", [
    ["path", {
        d: "M18 6 6 18",
        key: "1bl5f8"
    }],
    ["path", {
        d: "m6 6 12 12",
        key: "d8bk6v"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kt = z("Zap", [
    ["polygon", {
        points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
        key: "45s27k"
    }]
]),
    W0 = k.createContext(void 0),
    na = {
        purple: {
            primary: "#8B5CF6",
            primaryLight: "#A78BFA",
            primaryDark: "#5B21B6",
            gradient: "from-purple-400 via-purple-500 to-purple-700",
            border: "border-purple-500/30",
            borderHover: "border-purple-500/80",
            glow: "shadow-purple-500/20"
        },
        gray: {
            primary: "#6B7280",
            primaryLight: "#9CA3AF",
            primaryDark: "#374151",
            gradient: "from-gray-400 via-gray-500 to-gray-700",
            border: "border-gray-500/30",
            borderHover: "border-gray-500/80",
            glow: "shadow-gray-500/20"
        },
        green: {
            primary: "#10B981",
            primaryLight: "#34D399",
            primaryDark: "#047857",
            gradient: "from-green-400 via-green-500 to-green-700",
            border: "border-green-500/30",
            borderHover: "border-green-500/80",
            glow: "shadow-green-500/20"
        },
        red: {
            primary: "#EF4444",
            primaryLight: "#F87171",
            primaryDark: "#B91C1C",
            gradient: "from-red-400 via-red-500 to-red-700",
            border: "border-red-500/30",
            borderHover: "border-red-500/80",
            glow: "shadow-red-500/20"
        },
        blue: {
            primary: "#3B82F6",
            primaryLight: "#60A5FA",
            primaryDark: "#1D4ED8",
            gradient: "from-blue-400 via-blue-500 to-blue-700",
            border: "border-blue-500/30",
            borderHover: "border-blue-500/80",
            glow: "shadow-blue-500/20"
        }
    },
    A5 = ({
        children: e
    }) => {
        const [t, n] = k.useState(() => localStorage.getItem("ronix-theme") || "red"), r = o => {
            n(o), localStorage.setItem("ronix-theme", o), i(na[o])
        }, i = o => {
            const a = document.createElement("style");
            a.textContent = `
      :root {
        --scrollbar-thumb-color: ${o.primary}80;
        --scrollbar-thumb-gradient: linear-gradient(135deg, ${o.primary}60, ${o.primaryLight}40);
        --scrollbar-thumb-border: ${o.primary}30;
        --scrollbar-thumb-hover-gradient: linear-gradient(135deg, ${o.primary}80, ${o.primaryLight}60);
        --scrollbar-thumb-glow: ${o.primary}40;
        --global-scrollbar-thumb: ${o.primary}30;
        --global-scrollbar-thumb-hover: ${o.primary}50;
      }
      ::-webkit-scrollbar-thumb {
        background: ${o.primary}50 !important;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: ${o.primary}80 !important;
      }
      ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.1) !important;
      }
    `;
            const l = document.getElementById("scrollbar-theme");
            l && l.remove(), a.id = "scrollbar-theme", document.head.appendChild(a)
        };
        k.useEffect(() => {
            i(na[t])
        }, [t]);
        const s = () => na[t];
        return u.jsx(W0.Provider, {
            value: {
                theme: t,
                setTheme: r,
                getThemeColors: s
            },
            children: e
        })
    },
    Re = () => {
        const e = k.useContext(W0);
        if (e === void 0) throw new Error("useTheme must be used within a ThemeProvider");
        return e
    },
    D5 = () => {
        const [e, t] = k.useState(!1), [n, r] = k.useState(!1), [i, s] = k.useState(!1), {
            theme: o,
            setTheme: a,
            getThemeColors: l
        } = Re();
        jn();
        const c = l();
        k.useEffect(() => {
            const m = () => {
                t(window.scrollY > 20)
            };
            return window.addEventListener("scroll", m), () => window.removeEventListener("scroll", m)
        }, []);
        const d = [{
            name: "Home",
            path: "/"
        }, {
            name: "Download",
            path: "/download"
        }, {
            name: "Script",
            path: "/script"
        }, {
            name: "Get Key",
            path: "/get-key"
        }, {
            name: "Premium",
            path: "/premium"
        }],
            f = [{
                name: "Purple",
                value: "purple",
                color: "#8B5CF6"
            }, {
                name: "Gray",
                value: "gray",
                color: "#6B7280"
            }, {
                name: "Green",
                value: "green",
                color: "#10B981"
            }, {
                name: "Red",
                value: "red",
                color: "#EF4444"
            }, {
                name: "Blue",
                value: "blue",
                color: "#3B82F6"
            }],
            h = m => {
                if (m.includes("#")) {
                    const v = document.querySelector(m.split("#")[1]);
                    v && v.scrollIntoView({
                        behavior: "smooth"
                    })
                }
                s(!1)
            };
        return u.jsxs(u.Fragment, {
            children: [u.jsx("nav", {
                className: `fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${e ? "glass-effect-nav shadow-xl scale-95" : "bg-black/30 border backdrop-blur-md"} rounded-2xl px-8 py-4`,
                style: {
                    borderColor: e ? `${c.primary}40` : `${c.primary}20`,
                    boxShadow: e ? `0 25px 50px ${c.primary}20` : void 0,
                    minWidth: window.innerWidth < 768 ? "320px" : "900px",
                    maxWidth: window.innerWidth < 768 ? "90vw" : "950px"
                },
                children: u.jsxs("div", {
                    className: "flex items-center justify-between gap-8",
                    children: [u.jsx(os, {
                        to: "/",
                        className: "flex items-center",
                        children: u.jsx("h1", {
                            className: "font-orbitron font-black text-xl transition-all duration-200 hover:scale-105 cursor-pointer",
                            style: {
                                color: c.primary,
                                textShadow: `0 0 20px ${c.primary}50`
                            },
                            children: "Vyper"
                        })
                    }), u.jsx("div", {
                        className: "hidden md:flex items-center space-x-6",
                        children: d.map(m => u.jsxs(os, {
                            to: m.path,
                            onClick: () => h(m.path),
                            className: "relative text-gray-300 hover:text-white transition-all duration-300 font-medium text-sm tracking-wide group py-2 font-orbitron",
                            children: [m.name, u.jsx("span", {
                                className: "absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full",
                                style: {
                                    background: `linear-gradient(90deg, transparent, ${c.primaryLight}, ${c.primary}, ${c.primaryLight}, transparent)`,
                                    boxShadow: `0 0 8px ${c.primary}60`
                                }
                            }), u.jsx("span", {
                                className: "absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-0 h-1 transition-all duration-300 group-hover:w-3/4 rounded-full blur-sm opacity-0 group-hover:opacity-100",
                                style: {
                                    background: `linear-gradient(90deg, transparent, ${c.primary}80, transparent)`
                                }
                            })]
                        }, m.name))
                    }), u.jsxs("div", {
                        className: "flex items-center space-x-3",
                        children: [u.jsxs("div", {
                            className: "relative",
                            children: [u.jsx("button", {
                                onClick: () => r(!n),
                                className: "flex items-center justify-center w-10 h-10 bg-black/30 border rounded-xl transition-all duration-200 hover:scale-105",
                                style: {
                                    borderColor: `${c.primary}30`,
                                    backgroundColor: n ? `${c.primary}15` : void 0
                                },
                                children: u.jsx(T5, {
                                    size: 16,
                                    style: {
                                        color: c.primaryLight
                                    }
                                })
                            }), n && u.jsx("div", {
                                className: "absolute top-12 right-0 bg-black/95 backdrop-blur-md border rounded-xl p-3 min-w-[140px] animate-slideDown",
                                style: {
                                    borderColor: `${c.primary}30`
                                },
                                children: f.map(m => u.jsxs("button", {
                                    onClick: () => {
                                        a(m.value), r(!1)
                                    },
                                    className: `w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-all duration-150 font-orbitron ${o === m.value ? "bg-white/10" : "hover:bg-white/5"}`,
                                    children: [u.jsx("div", {
                                        className: "w-3 h-3 rounded-full",
                                        style: {
                                            backgroundColor: m.color
                                        }
                                    }), u.jsx("span", {
                                        className: "text-gray-300",
                                        children: m.name
                                    })]
                                }, m.value))
                            })]
                        }), u.jsx("button", {
                            onClick: () => window.open("https://discord.com/invite/ronix", "_blank"),
                            className: "flex items-center justify-center w-10 h-10 bg-black/30 border rounded-xl transition-all duration-200 hover:scale-105 group",
                            style: {
                                borderColor: `${c.primary}30`
                            },
                            onMouseEnter: m => {
                                m.currentTarget.style.backgroundColor = `${c.primary}15`, m.currentTarget.style.borderColor = `${c.primary}60`
                            },
                            onMouseLeave: m => {
                                m.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.3)", m.currentTarget.style.borderColor = `${c.primary}30`
                            },
                            children: u.jsx(Ks, {
                                className: "text-gray-300 group-hover:text-white transition-colors duration-200",
                                size: 14
                            })
                        }), u.jsx("button", {
                            onClick: () => s(!i),
                            className: "md:hidden flex items-center justify-center w-10 h-10 bg-black/30 border rounded-xl transition-all duration-200",
                            style: {
                                borderColor: `${c.primary}30`
                            },
                            children: i ? u.jsx(Gs, {
                                size: 16,
                                style: {
                                    color: c.primaryLight
                                }
                            }) : u.jsx(j5, {
                                size: 16,
                                style: {
                                    color: c.primaryLight
                                }
                            })
                        })]
                    })]
                })
            }), i && u.jsxs("div", {
                className: "fixed inset-0 z-40 md:hidden",
                children: [u.jsx("div", {
                    className: "absolute inset-0 bg-black/80 backdrop-blur-sm",
                    onClick: () => s(!1)
                }), u.jsxs("div", {
                    className: "absolute top-20 left-4 right-4 bg-black/95 backdrop-blur-md border rounded-2xl p-6 animate-slideDown",
                    style: {
                        borderColor: `${c.primary}40`,
                        boxShadow: `0 25px 50px ${c.primary}30`
                    },
                    children: [u.jsxs("div", {
                        className: "flex items-center justify-between mb-6",
                        children: [u.jsx("h3", {
                            className: "font-orbitron font-bold text-lg",
                            style: {
                                color: c.primary,
                                textShadow: `0 0 15px ${c.primary}50`
                            },
                            children: "Menu"
                        }), u.jsx("button", {
                            onClick: () => s(!1),
                            className: "flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 hover:bg-white/10",
                            children: u.jsx(Gs, {
                                size: 16,
                                style: {
                                    color: c.primaryLight
                                }
                            })
                        })]
                    }), u.jsx("div", {
                        className: "space-y-3 mb-6",
                        children: d.map(m => u.jsxs(os, {
                            to: m.path,
                            onClick: () => h(m.path),
                            className: "flex items-center justify-between p-4 rounded-xl transition-all duration-200 group border font-orbitron",
                            style: {
                                borderColor: `${c.primary}20`,
                                background: `linear-gradient(135deg, ${c.primary}05, transparent)`
                            },
                            onMouseEnter: v => {
                                v.currentTarget.style.borderColor = `${c.primary}60`, v.currentTarget.style.background = `linear-gradient(135deg, ${c.primary}15, ${c.primaryLight}05)`
                            },
                            onMouseLeave: v => {
                                v.currentTarget.style.borderColor = `${c.primary}20`, v.currentTarget.style.background = `linear-gradient(135deg, ${c.primary}05, transparent)`
                            },
                            children: [u.jsx("span", {
                                className: "text-white font-medium text-base",
                                children: m.name
                            }), u.jsx("div", {
                                className: "w-2 h-2 rounded-full transition-all duration-200 group-hover:scale-125",
                                style: {
                                    backgroundColor: c.primary
                                }
                            })]
                        }, m.name))
                    }), u.jsxs("div", {
                        className: "border-t pt-4",
                        style: {
                            borderColor: `${c.primary}20`
                        },
                        children: [u.jsx("h4", {
                            className: "text-gray-300 font-medium mb-3 text-sm font-orbitron",
                            children: "Choose Theme"
                        }), u.jsx("div", {
                            className: "grid grid-cols-5 gap-2",
                            children: f.map(m => u.jsxs("button", {
                                onClick: () => {
                                    a(m.value), s(!1)
                                },
                                className: `flex flex-col items-center p-3 rounded-xl transition-all duration-200 border font-orbitron ${o === m.value ? "border-white/30 bg-white/10" : "border-transparent hover:bg-white/5"}`,
                                children: [u.jsx("div", {
                                    className: "w-4 h-4 rounded-full mb-1",
                                    style: {
                                        backgroundColor: m.color
                                    }
                                }), u.jsx("span", {
                                    className: "text-gray-300 text-xs",
                                    children: m.name
                                })]
                            }, m.value))
                        })]
                    })]
                })]
            })]
        })
    },
    V5 = () => {
        const {
            getThemeColors: e
        } = Re(), t = e();
        return u.jsx("section", {
            id: "home",
            className: "min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-4 sm:px-6",
            children: u.jsxs("div", {
                className: "text-center z-10 max-w-4xl mx-auto w-full",
                children: [u.jsxs("div", {
                    className: "mb-8 animate-float",
                    children: [u.jsxs("h1", {
                        className: "font-orbitron font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 relative",
                        style: {
                            color: t.primary,
                            textShadow: `0 0 30px ${t.primary}50, 0 0 60px ${t.primary}30`
                        },
                        children: [
                            "Vyper",
                            u.jsx("div", {
                                className: "absolute inset-0 font-orbitron font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl opacity-30 blur-sm -z-10",
                                style: { color: t.primary },
                                children: "Vyper"
                            }),
                            u.jsx("div", {
                                className: "block w-full text-xs sm:text-sm md:text-base lg:text-lg font-orbitron font-normal mt-2 text-center",
                                style: { color: t.primaryLight, letterSpacing: 2 },
                                children: "(not real)"
                            })
                        ]
                    }), u.jsx("div", {
                        className: "w-24 sm:w-32 md:w-40 h-1 mx-auto rounded-full animate-pulse",
                        style: {
                            background: `linear-gradient(to right, ${t.primaryLight}, ${t.primary}, ${t.primaryDark})`
                        }
                    })]
                }), u.jsx("h2", {
                    className: "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 animate-fadeInUp leading-tight",
                    children: "The Best Roblox Utility."
                }), u.jsx("p", {
                    className: "text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed animate-fadeInUp",
                    children: "The ultimate solution for undetected, stable, and performant automation"
                }), u.jsx("div", {
                    className: "flex justify-center animate-fadeInUp",
                    children: u.jsxs(os, {
                        to: "/download",
                        className: "group relative flex items-center gap-2 sm:gap-3 text-white px-4 sm:px-6 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 overflow-hidden",
                        style: {
                            background: `linear-gradient(135deg, ${t.primary}90, ${t.primaryDark}80)`,
                            boxShadow: `0 8px 25px ${t.primary}40, inset 0 1px 0 rgba(255,255,255,0.1)`,
                            border: `1px solid ${t.primary}60`
                        },
                        onMouseEnter: n => {
                            window.innerWidth < 768 || (n.currentTarget.style.background = `linear-gradient(135deg, ${t.primaryLight}95, ${t.primary}85)`, n.currentTarget.style.boxShadow = `0 12px 30px ${t.primary}60, inset 0 1px 0 rgba(255,255,255,0.2), 0 0 25px ${t.primary}50`, n.currentTarget.style.transform = "scale(1.05) translateY(-2px)", n.currentTarget.style.border = `1px solid ${t.primaryLight}80`)
                        },
                        onMouseLeave: n => {
                            window.innerWidth < 768 || (n.currentTarget.style.background = `linear-gradient(135deg, ${t.primary}90, ${t.primaryDark}80)`, n.currentTarget.style.boxShadow = `0 8px 25px ${t.primary}40, inset 0 1px 0 rgba(255,255,255,0.1)`, n.currentTarget.style.transform = "scale(1)", n.currentTarget.style.border = `1px solid ${t.primary}60`)
                        },
                        children: [u.jsx("div", {
                            className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                            style: {
                                background: `radial-gradient(circle at 30% 30%, ${t.primaryLight}20, transparent 50%), radial-gradient(circle at 70% 70%, ${t.primary}15, transparent 50%)`
                            }
                        }), window.innerWidth >= 768 && u.jsxs(u.Fragment, {
                            children: [u.jsx("div", {
                                className: "absolute top-1 left-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                children: u.jsx(Kt, {
                                    size: 12,
                                    style: {
                                        color: t.primaryLight
                                    },
                                    className: "animate-pulse"
                                })
                            }), u.jsx("div", {
                                className: "absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                children: u.jsx(U0, {
                                    size: 10,
                                    style: {
                                        color: t.primaryLight
                                    }
                                })
                            })]
                        }), u.jsxs("div", {
                            className: "relative z-10 flex items-center gap-2 sm:gap-3",
                            children: [u.jsx("div", {
                                className: "flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full",
                                style: {
                                    background: "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))",
                                    boxShadow: `0 0 15px ${t.primary}60, inset 0 1px 0 rgba(255,255,255,0.3)`,
                                    border: "1px solid rgba(255,255,255,0.2)"
                                },
                                children: u.jsx(I0, {
                                    size: window.innerWidth < 768 ? 12 : 16,
                                    className: "text-white drop-shadow-lg"
                                })
                            }), u.jsx("span", {
                                className: "font-semibold tracking-wide text-shadow",
                                children: "Download"
                            })]
                        }), window.innerWidth >= 768 && u.jsxs(u.Fragment, {
                            children: [u.jsx("div", {
                                className: "absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                style: {
                                    background: `linear-gradient(to right, transparent, ${t.primaryLight}80, transparent)`
                                }
                            }), u.jsx("div", {
                                className: "absolute -left-1 top-1/2 transform -translate-y-1/2 w-0.5 h-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                style: {
                                    background: `linear-gradient(to bottom, ${t.primaryLight}, ${t.primary})`,
                                    boxShadow: `0 0 8px ${t.primary}`
                                }
                            }), u.jsx("div", {
                                className: "absolute -right-1 top-1/2 transform -translate-y-1/2 w-0.5 h-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                style: {
                                    background: `linear-gradient(to bottom, ${t.primaryLight}, ${t.primary})`,
                                    boxShadow: `0 0 8px ${t.primary}`
                                }
                            })]
                        })]
                    })
                })]
            })
        })
    },
    F5 = () => {
        const {
            getThemeColors: e
        } = Re(), t = e(), n = [{
            icon: u.jsx(Dt, {
                size: 20
            }),
            title: "Undetected",
            description: "Fully undetected by games and the platform itself, giving you a safe experience with our utilities. Thanks to our dedicated developers constantly monitoring for detections and working proactively to maintain security, you can use our tools with confidence and peace of mind."
        }, {
            icon: u.jsx(Kt, {
                size: 20
            }),
            title: "Stable",
            description: "A stable experience is provided by our utilities, with minimal crashes or issues. Our responsive support team actively receives reports of any problems to immediately notify our developers, ensuring quick resolutions and maintaining the highest quality standards for all users."
        }, {
            icon: u.jsx(S5, {
                size: 20
            }),
            title: "Performant",
            description: "Lightning-fast execution with exceptional performance optimization. Our utilities are engineered for speed and efficiency, delivering rapid results while maintaining minimal resource usage, so you can enjoy smooth operation without compromising your devices performance."
        }, {
            icon: u.jsx(O0, {
                size: 20
            }),
            title: "Script Support",
            description: "Amazing script support which allows you to run nearly every script available, with limitations only being the script itself and its current status. Any reports of scripts not working are addressed actively by our development team, ensuring maximum compatibility and functionality."
        }];
        return u.jsx("section", {
            id: "features",
            className: "py-16 px-4 sm:px-6 relative",
            children: u.jsxs("div", {
                className: "max-w-6xl mx-auto",
                children: [u.jsxs("div", {
                    className: "text-center mb-12",
                    children: [u.jsx("h2", {
                        className: "text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-orbitron",
                        style: {
                            color: t.primary,
                            textShadow: `0 0 30px ${t.primary}50`
                        },
                        children: "Why Choose Vyper Hub (not real)?"
                    }), u.jsx("p", {
                        className: "text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto",
                        children: "Here are some features, why you should choose Vyper (not real)."
                    })]
                }), u.jsx("div", {
                    className: "flex justify-center",
                    children: u.jsx("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl",
                        children: n.map((r, i) => u.jsxs("div", {
                            className: "group relative bg-black/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 transition-all duration-300 border overflow-hidden hover:scale-[1.02]",
                            style: {
                                borderColor: `${t.primary}20`,
                                background: "linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2))"
                            },
                            onMouseEnter: s => {
                                window.innerWidth < 768 || (s.currentTarget.style.borderColor = t.primary, s.currentTarget.style.background = `linear-gradient(135deg, ${t.primary}08, rgba(0,0,0,0.3))`, s.currentTarget.style.boxShadow = `0 20px 40px ${t.primary}25`)
                            },
                            onMouseLeave: s => {
                                window.innerWidth < 768 || (s.currentTarget.style.borderColor = `${t.primary}20`, s.currentTarget.style.background = "linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2))", s.currentTarget.style.boxShadow = "none")
                            },
                            children: [u.jsx("div", {
                                className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl",
                                style: {
                                    background: `linear-gradient(135deg, ${t.primary}10, transparent, ${t.primaryLight}10)`,
                                    filter: "blur(1px)"
                                }
                            }), u.jsxs("div", {
                                className: "relative z-10",
                                children: [u.jsx("div", {
                                    className: "relative mb-5",
                                    children: u.jsx("div", {
                                        className: "flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
                                        style: {
                                            backgroundColor: `${t.primary}10`,
                                            borderColor: `${t.primary}30`
                                        },
                                        onMouseEnter: s => {
                                            window.innerWidth < 768 || (s.currentTarget.style.backgroundColor = `${t.primary}20`, s.currentTarget.style.borderColor = t.primary, s.currentTarget.style.boxShadow = `0 0 20px ${t.primary}40`)
                                        },
                                        onMouseLeave: s => {
                                            window.innerWidth < 768 || (s.currentTarget.style.backgroundColor = `${t.primary}10`, s.currentTarget.style.borderColor = `${t.primary}30`, s.currentTarget.style.boxShadow = "none")
                                        },
                                        children: u.jsx("div", {
                                            style: {
                                                color: t.primaryLight
                                            },
                                            className: "group-hover:text-white transition-colors duration-300",
                                            children: r.icon
                                        })
                                    })
                                }), u.jsx("h3", {
                                    className: "text-base sm:text-lg font-bold text-white mb-3 transition-colors duration-300",
                                    children: r.title
                                }), u.jsx("p", {
                                    className: "text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-xs sm:text-sm",
                                    children: r.description
                                })]
                            }), u.jsx("div", {
                                className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none",
                                style: {
                                    boxShadow: `0 25px 50px ${t.primary}20`
                                }
                            })]
                        }, i))
                    })
                })]
            })
        })
    },
    z5 = () => {
        const [e, t] = k.useState(null), {
            getThemeColors: n
        } = Re(), r = n(), i = [{
            question: "Is Vyper Hub (not real) safe to use?",
            answer: "Yes, Vyper Hub (not real) uses advanced anti-detection technology and is regularly updated to ensure maximum safety and security for all users."
        }, {
            question: "Which platforms are supported?",
            answer: "Vyper Hub (not real) supports Windows, macOS, iOS, and Android. Download the appropriate version for your device from the download page."
        }, {
            question: "Do I need to pay for Vyper Hub (not real)?",
            answer: "Vyper Hub (not real) offers both free and premium tiers. The free version includes core functionality, while premium unlocks advanced features and priority support."
        }, {
            question: "How do I get support?",
            answer: "Join our Discord community for instant support, updates, and to connect with other users. Our team is active and ready to help!"
        }], s = o => {
            t(e === o ? null : o)
        };
        return u.jsx("section", {
            id: "faq",
            className: "py-12 px-4 sm:px-6 relative",
            children: u.jsxs("div", {
                className: "max-w-3xl mx-auto",
                children: [u.jsxs("div", {
                    className: "text-center mb-10",
                    children: [u.jsx("h2", {
                        className: "text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-orbitron",
                        style: {
                            color: r.primary,
                            textShadow: `0 0 30px ${r.primary}50`
                        },
                        children: "Frequently Asked Questions"
                    }), u.jsx("p", {
                        className: "text-base sm:text-lg text-gray-300",
                        children: "Got questions? We've got answers. Find everything you need to know about Vyper (not real)."
                    })]
                }), u.jsx("div", {
                    className: "space-y-3",
                    children: i.map((o, a) => u.jsxs("div", {
                        className: `group relative bg-black/30 backdrop-blur-sm rounded-xl border transition-all duration-500 overflow-hidden ${e === a ? "shadow-lg" : ""}`,
                        style: {
                            borderColor: e === a ? r.primary : `${r.primary}20`,
                            boxShadow: e === a ? `0 10px 25px ${r.primary}20` : void 0
                        },
                        children: [u.jsx("div", {
                            className: `absolute inset-0 transition-all duration-500 ${e === a ? "opacity-100" : "opacity-0"}`,
                            style: {
                                background: `linear-gradient(135deg, ${r.primary}03, transparent, ${r.primaryLight}03)`
                            }
                        }), u.jsxs("button", {
                            onClick: () => s(a),
                            className: "relative w-full flex items-center justify-between p-4 text-left transition-all duration-300",
                            children: [u.jsx("h3", {
                                className: "text-sm sm:text-base font-semibold pr-4 text-white",
                                children: o.question
                            }), u.jsx("div", {
                                className: `flex items-center justify-center w-7 h-7 rounded-lg border transition-all duration-500 flex-shrink-0 ${e === a ? "rotate-180" : ""}`,
                                style: {
                                    borderColor: e === a ? r.primary : `${r.primary}30`,
                                    backgroundColor: e === a ? `${r.primary}15` : "transparent"
                                },
                                children: e === a ? u.jsx(N5, {
                                    size: 14,
                                    style: {
                                        color: r.primary
                                    }
                                }) : u.jsx(M5, {
                                    size: 14,
                                    style: {
                                        color: r.primaryLight
                                    }
                                })
                            })]
                        }), u.jsx("div", {
                            className: `transition-all duration-500 ease-in-out overflow-hidden ${e === a ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`,
                            children: u.jsx("div", {
                                className: "px-4 pb-4",
                                children: u.jsx("div", {
                                    className: "border-t pt-3",
                                    style: {
                                        borderColor: `${r.primary}15`
                                    },
                                    children: u.jsx("div", {
                                        className: `transform transition-all duration-500 ${e === a ? "translate-y-0 scale-100" : "translate-y-2 scale-95"}`,
                                        children: u.jsx("p", {
                                            className: "text-gray-300 leading-relaxed text-xs sm:text-sm",
                                            children: o.answer
                                        })
                                    })
                                })
                            })
                        })]
                    }, a))
                })]
            })
        })
    },
    Ni = () => {
        const {
            getThemeColors: e
        } = Re(), t = e(), n = () => {
            window.open("https://discord.com/invite/ronix", "_blank")
        }, r = {
            "Quick Links": ["Features", "Download"]
        };
        return u.jsxs("footer", {
            className: "bg-black/95 border-t py-8 px-4 sm:px-6 relative overflow-hidden",
            style: {
                borderColor: `${t.primary}20`
            },
            children: [u.jsx("div", {
                className: "absolute inset-0 opacity-30",
                style: {
                    background: `linear-gradient(135deg, ${t.primary}05, transparent, ${t.primaryLight}05)`
                }
            }), u.jsxs("div", {
                className: "max-w-6xl mx-auto relative z-10",
                children: [u.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6",
                    children: [u.jsxs("div", {
                        className: "lg:col-span-1",
                        children: [u.jsx("h3", {
                            className: "font-orbitron font-black text-2xl sm:text-3xl mb-3",
                            style: {
                                color: t.primary,
                                textShadow: `0 0 20px ${t.primary}50`
                            },
                            children: "Vyper"
                        }), u.jsx("p", {
                            className: "text-gray-300 mb-4 leading-relaxed text-sm font-orbitron",
                            children: u.jsxs("span", {children: ["(not real)", u.jsx("br", {}), "A Roblox Utility"]})
                        }), u.jsx("div", {
                            className: "flex space-x-3",
                            children: u.jsx("button", {
                                onClick: n,
                                className: "flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 hover:scale-110 border group",
                                style: {
                                    backgroundColor: `${t.primary}15`,
                                    borderColor: `${t.primary}30`
                                },
                                onMouseEnter: i => {
                                    i.currentTarget.style.backgroundColor = t.primary, i.currentTarget.style.borderColor = t.primary, i.currentTarget.style.boxShadow = `0 0 20px ${t.primary}50`
                                },
                                onMouseLeave: i => {
                                    i.currentTarget.style.backgroundColor = `${t.primary}15`, i.currentTarget.style.borderColor = `${t.primary}30`, i.currentTarget.style.boxShadow = "none"
                                },
                                children: u.jsx(Ks, {
                                    className: "text-gray-300 group-hover:text-white transition-colors duration-300",
                                    size: 16
                                })
                            })
                        })]
                    }), Object.entries(r).map(([i, s]) => u.jsxs("div", {
                        children: [u.jsx("h4", {
                            className: "text-white font-semibold mb-3 text-sm uppercase tracking-wide font-orbitron",
                            style: {
                                color: t.primaryLight
                            },
                            children: i
                        }), u.jsx("ul", {
                            className: "space-y-2",
                            children: s.map(o => u.jsx("li", {
                                children: u.jsxs("button", {
                                    onClick: o === "Discord" ? n : void 0,
                                    className: "text-gray-400 hover:text-white transition-all duration-500 text-sm relative group inline-block font-orbitron cursor-pointer",
                                    children: [u.jsx("span", {
                                        className: "relative z-10 transition-all duration-500",
                                        children: o
                                    }), u.jsx("span", {
                                        className: "absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 transition-all duration-500 group-hover:w-full rounded-full",
                                        style: {
                                            background: `linear-gradient(90deg, transparent, ${t.primaryLight}, ${t.primary}, ${t.primaryLight}, transparent)`,
                                            boxShadow: `0 0 8px ${t.primary}80, 0 0 16px ${t.primary}40`
                                        }
                                    }), u.jsx("span", {
                                        className: "absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 transition-all duration-500 group-hover:w-3/4 rounded-full blur-sm opacity-0 group-hover:opacity-100",
                                        style: {
                                            background: `linear-gradient(90deg, transparent, ${t.primary}60, transparent)`
                                        }
                                    })]
                                })
                            }, o))
                        })]
                    }, i))]
                }), u.jsxs("div", {
                    className: "border-t pt-4 flex flex-col lg:flex-row justify-between items-center gap-3",
                    style: {
                        borderColor: `${t.primary}20`
                    },
                    children: [u.jsx("div", {
                        className: "text-gray-400 text-sm font-orbitron text-center lg:text-left",
                        children: "© 2025 Vyper Hub (not real). All rights reserved."
                    }), u.jsxs("div", {
                        className: "flex flex-col sm:flex-row items-center gap-3 sm:gap-4",
                        children: [u.jsxs("div", {
                            className: "text-gray-400 text-sm font-orbitron text-center",
                                    children: ["Designed by", " ", u.jsxs("a", {
                                href: "https://github.com/AdvanceFTeam",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "transition-all duration-300 hover:scale-105 relative group",
                                style: {
                                    color: t.primary
                                },
                                onMouseEnter: i => {
                                    i.currentTarget.style.color = t.primaryLight, i.currentTarget.style.textShadow = `0 0 10px ${t.primary}60`
                                },
                                onMouseLeave: i => {
                                    i.currentTarget.style.color = t.primary, i.currentTarget.style.textShadow = "none"
                                },
                                children: ["AdvanceFalling Team", u.jsx("span", {
                                    className: "absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 transition-all duration-500 group-hover:w-full rounded-full",
                                    style: {
                                        background: `linear-gradient(90deg, transparent, ${t.primaryLight}, ${t.primary}, ${t.primaryLight}, transparent)`,
                                        boxShadow: `0 0 8px ${t.primary}80, 0 0 16px ${t.primary}40`
                                    }
                                })]
                            })]
                        }), u.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [u.jsx("div", {
                                className: "w-2 h-2 rounded-full animate-pulse",
                                style: {
                                    backgroundColor: t.primary
                                }
                            }), u.jsxs("div", {
                                className: "flex items-center space-x-2 text-gray-400 text-sm font-orbitron",
                                children: [u.jsx(p5, {
                                    className: "animate-spin",
                                    style: {
                                        color: t.primaryLight,
                                        animationDuration: "3s"
                                    },
                                    size: 16
                                }), u.jsx("span", {
                                    children: "React"
                                })]
                            })]
                        })]
                    })]
                })]
            })]
        })
    },
    _5 = ({
        message: e,
        isVisible: t,
        onClose: n
    }) => {
        const {
            getThemeColors: r
        } = Re(), i = r();
        return k.useEffect(() => {
            if (t) {
                const s = setTimeout(() => {
                    n()
                }, 3e3);
                return () => clearTimeout(s)
            }
        }, [t, n]), t ? u.jsx("div", {
            className: "fixed top-60 right-4 z-50 animate-slideDown",
            children: u.jsxs("div", {
                className: "flex items-center gap-3 bg-black/90 backdrop-blur-sm border rounded-xl p-4 min-w-[300px] shadow-lg",
                style: {
                    borderColor: `${i.primary}60`,
                    boxShadow: `0 10px 30px ${i.primary}30`
                },
                children: [u.jsx("div", {
                    className: "flex items-center justify-center w-8 h-8 rounded-full",
                    style: {
                        backgroundColor: `${i.primary}20`
                    },
                    children: u.jsx(_0, {
                        size: 18,
                        style: {
                            color: i.primary
                        }
                    })
                }), u.jsx("div", {
                    className: "flex-1",
                    children: u.jsx("p", {
                        className: "text-white font-medium text-sm",
                        children: e
                    })
                }), u.jsx("button", {
                    onClick: n,
                    className: "flex items-center justify-center w-6 h-6 rounded-full transition-all duration-200 hover:bg-white/10",
                    children: u.jsx(Gs, {
                        size: 14,
                        className: "text-gray-400 hover:text-white"
                    })
                })]
            })
        }) : null
    },
    O5 = () => {
        const [e, t] = kv();
        yu();
        const [n, r] = k.useState("android"), [i, s] = k.useState(!1), [o, a] = k.useState(!1), [l, c] = k.useState(null), [d, f] = k.useState(!1), {
            getThemeColors: h
        } = Re(), m = h(), v = [{
            id: "windows",
            name: "not released",
            icon: u.jsx(m5, {
                size: 18
            }),
            version: "not released",
            url: "",
            manualStatus: null
        }, {
            id: "macos",
            name: "not released",
            icon: u.jsx(Af, {
                size: 18
            }),
            version: "not released",
            url: "",
            manualStatus: "Released"
        }, {
            id: "ios",
            name: "not released",
            icon: u.jsx(Af, {
                size: 18
            }),
            version: "v.1.0.0",
            url: "",
            manualStatus: null
        }, {
            id: "android",
            name: "not released",
            icon: u.jsx(d5, {
                size: 18
            }),
            version: "not released",
            url: "",
            manualStatus: null
        }, {
            id: "vietnam",
            name: "not released",
            icon: u.jsx("span", {
                className: "text-lg",
                children: "🇻🇳"
            }),
            version: "v.1.0.0",
            url: "",
            manualStatus: null,
            flag: null
        }], w = b => {
            if (b.manualStatus) {
                const j = {
                    Released: "#10B981",
                    "W.I.P": "#F59E0B",
                    Discontinued: "#EF4444",
                    Beta: "#3B82F6",
                    "Coming Soon": "#8B5CF6"
                };
                return {
                    status: b.manualStatus,
                    statusColor: j[b.manualStatus] || "#6B7280"
                }
            }
            return b.url && b.url.trim() !== "" ? {
                status: "Released",
                statusColor: "#10B981"
            } : {
                status: "W.I.P",
                statusColor: "#F59E0B"
            }
        };
        k.useEffect(() => {
            (async () => {
                try {
                    const $ = await (await fetch("https://ipapi.co/json/")).json();
                    c($.country_code), $.country_code === "VN" && !e.get("platform") && (t({
                        platform: "vietnam"
                    }), r("vietnam"))
                } catch {
                    console.log("Could not detect country")
                }
            })()
        }, []), k.useEffect(() => {
            const b = e.get("platform");
            b && v.some(j => j.id === b) ? r(b) : b || t({
                platform: "android"
            })
        }, [e, t]);
        const S = v.find(b => b.id === n),
            g = S ? w(S) : null,
            p = v.filter(b => b.id !== n),
            y = b => {
                a(!0), t({
                    platform: b
                }), setTimeout(() => {
                    r(b), s(!1), setTimeout(() => {
                        a(!1)
                    }, 150)
                }, 150)
            },
            x = () => {
                !S || !g || !(g.status === "Released") || S != null && S.url && window.open(S.url, "_blank")
            },
            T = (() => {
                switch (n) {
                    case "android":
                        return [{
                            icon: u.jsx(Dt, {
                                size: 16
                            }),
                            text: "100% UNC"
                        }, {
                            icon: u.jsx(Kt, {
                                size: 16
                            }),
                            text: "100% rUNC"
                        }, {
                            icon: u.jsx(ds, {
                                size: 16
                            }),
                            text: "Free with Key"
                        }, {
                            icon: u.jsx(Vf, {
                                size: 16
                            }),
                            text: "Undetected and Stable"
                        }];
                    case "macos":
                        return [{
                            icon: u.jsx(Dt, {
                                size: 16
                            }),
                            text: "98% UNC"
                        }];
                    case "vietnam":
                        return [{
                            icon: u.jsx(Dt, {
                                size: 16
                            }),
                            text: "100% UNC"
                        }, {
                            icon: u.jsx(Kt, {
                                size: 16
                            }),
                            text: "100% rUNC"
                        }, {
                            icon: u.jsx(ds, {
                                size: 16
                            }),
                            text: "Vietnam Optimized"
                        }, {
                            icon: u.jsx(Vf, {
                                size: 16
                            }),
                            text: "Region Specific"
                        }];
                    default:
                        return [{
                            icon: u.jsx(Dt, {
                                size: 16
                            }),
                            text: "N/A"
                        }, {
                            icon: u.jsx(Kt, {
                                size: 16
                            }),
                            text: "N/A"
                        }, {
                            icon: u.jsx(L5, {
                                size: 16
                            }),
                            text: "N/A"
                        }, {
                            icon: u.jsx(ds, {
                                size: 16
                            }),
                            text: "N/A"
                        }]
                }
            })();
        return u.jsxs(u.Fragment, {
            children: [u.jsx(_5, {
                message: "Bash command copied to clipboard!",
                isVisible: d,
                onClose: () => f(!1)
            }), u.jsx("section", {
                className: "min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-12 px-4 sm:px-6",
                children: u.jsxs("div", {
                    className: "text-center z-10 max-w-4xl mx-auto w-full",
                    children: [u.jsxs("div", {
                        className: "mb-8",
                        children: [u.jsx("h1", {
                            className: "font-orbitron font-black text-3xl sm:text-4xl md:text-5xl mb-6",
                            style: {
                                color: m.primary,
                                textShadow: `0 0 30px ${m.primary}50`
                            },
                            children: "Download Ronix"
                        }), u.jsx("p", {
                            className: "text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto",
                            children: "Choose your platform and download the utility you want."
                        })]
                    }), u.jsx("div", {
                        className: "mb-12 animate-float",
                        children: u.jsxs("div", {
                            className: "relative max-w-2xl mx-auto",
                            children: [u.jsx("img", {
                                src: "puvtcw.png",
                                alt: "Ronix Banner",
                                className: "w-full h-auto rounded-2xl shadow-2xl border",
                                style: {
                                    borderColor: `${m.primary}30`,
                                    boxShadow: `0 25px 50px ${m.primary}20, 0 0 100px ${m.primary}10`,
                                    maxHeight: "300px",
                                    objectFit: "contain"
                                }
                            }), u.jsx("div", {
                                className: "absolute inset-0 rounded-2xl blur-2xl opacity-30 -z-10",
                                style: {
                                    background: `linear-gradient(135deg, ${m.primary}40, ${m.primaryLight}30, ${m.primary}40)`,
                                    transform: "scale(1.1)"
                                }
                            })]
                        })
                    }), u.jsx("div", {
                        className: "max-w-lg mx-auto mb-12",
                        children: u.jsxs("div", {
                            className: "bg-black/40 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:border-opacity-60",
                            style: {
                                borderColor: `${m.primary}30`,
                                background: "linear-gradient(135deg, rgba(0,0,0,0.5), rgba(0,0,0,0.3))"
                            },
                            children: [u.jsxs("div", {
                                className: "mb-6",
                                children: [u.jsx("label", {
                                    className: "block text-white font-medium mb-3 text-left text-sm",
                                    children: "Select Platform"
                                }), u.jsxs("div", {
                                    className: "relative",
                                    children: [u.jsxs("button", {
                                        onClick: () => s(!i),
                                        className: "w-full flex items-center justify-between p-3 bg-black/50 border rounded-xl text-left transition-all duration-300",
                                        style: {
                                            borderColor: `${m.primary}30`
                                        },
                                        onMouseEnter: b => {
                                            b.currentTarget.style.borderColor = `${m.primary}60`, b.currentTarget.style.backgroundColor = `${m.primary}05`
                                        },
                                        onMouseLeave: b => {
                                            b.currentTarget.style.borderColor = `${m.primary}30`, b.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
                                        },
                                        children: [u.jsxs("div", {
                                            className: `flex items-center space-x-3 transition-all duration-300 ${o ? "opacity-0 scale-95" : "opacity-100 scale-100"}`,
                                            children: [u.jsx("div", {
                                                className: "flex items-center justify-center w-8 h-8 rounded-lg",
                                                style: {
                                                    color: m.primaryLight,
                                                    backgroundColor: `${m.primary}15`
                                                },
                                                children: S == null ? void 0 : S.icon
                                            }), u.jsxs("div", {
                                                children: [u.jsx("span", {
                                                    className: "text-white font-medium text-sm",
                                                    children: S == null ? void 0 : S.name
                                                }), u.jsx("span", {
                                                    className: "text-xs px-2 py-0.5 rounded-full font-medium",
                                                    style: {
                                                        backgroundColor: `${g == null ? void 0 : g.statusColor}20`,
                                                        color: g == null ? void 0 : g.statusColor
                                                    },
                                                    children: g == null ? void 0 : g.status
                                                })]
                                            }), u.jsx("div", {
                                                className: "text-gray-400 text-xs",
                                                children: S == null ? void 0 : S.version
                                            })]
                                        }), u.jsx(x5, {
                                            className: `transform transition-transform duration-300 ${i ? "rotate-180" : ""}`,
                                            style: {
                                                color: m.primaryLight
                                            },
                                            size: 18
                                        })]
                                    }), i && u.jsx("div", {
                                        className: "absolute bottom-full left-0 right-0 mb-2 bg-black/95 backdrop-blur-sm border rounded-xl overflow-hidden z-20 animate-dropdown",
                                        style: {
                                            borderColor: `${m.primary}30`
                                        },
                                        children: p.map(b => (() => {
                                            const j = w(b);
                                            return u.jsxs("button", {
                                                onClick: () => y(b.id),
                                                className: "w-full flex items-center space-x-3 p-3 text-left transition-all duration-300 hover:bg-white/5",
                                                children: [u.jsx("div", {
                                                    className: "flex items-center justify-center w-7 h-7 rounded-lg",
                                                    style: {
                                                        color: m.primaryLight,
                                                        backgroundColor: `${m.primary}15`
                                                    },
                                                    children: b.icon
                                                }), u.jsxs("div", {
                                                    className: "flex-1",
                                                    children: [u.jsxs("div", {
                                                        className: "flex items-center space-x-2",
                                                        children: [u.jsx("span", {
                                                            className: "text-white font-medium text-sm",
                                                            children: b.name
                                                        }), u.jsx("span", {
                                                            className: "text-xs px-2 py-0.5 rounded-full font-medium",
                                                            style: {
                                                                backgroundColor: `${j.statusColor}20`,
                                                                color: j.statusColor
                                                            },
                                                            children: j.status
                                                        })]
                                                    }), u.jsx("div", {
                                                        className: "text-gray-400 text-xs",
                                                        children: b.version
                                                    })]
                                                })]
                                            }, b.id)
                                        })())
                                    })]
                                })]
                            }), n === "vietnam" && (g == null ? void 0 : g.status) === "Released" && u.jsx("div", {
                                className: `mb-6 p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl transition-all duration-300 ${o ? "opacity-0 scale-95" : "opacity-100 scale-100"}`,
                                children: u.jsxs("div", {
                                    className: "flex items-start gap-3",
                                    children: [u.jsx("div", {
                                        className: "flex items-center justify-center w-8 h-8 rounded-lg mt-0.5",
                                        style: {
                                            backgroundColor: "#F59E0B15",
                                            color: "#F59E0B"
                                        },
                                        children: u.jsx(z0, {
                                            size: 16
                                        })
                                    }), u.jsxs("div", {
                                        className: "flex-1",
                                        children: [u.jsx("h4", {
                                            className: "text-orange-400 font-semibold text-sm mb-2",
                                            children: "Warning"
                                        }), u.jsx("p", {
                                            className: "text-orange-200 text-sm leading-relaxed",
                                            children: '"Roblox VNG" is intended for Vietnam residents only. Downloading this version may permanently change your account localization, limiting or locking access to the global version of Roblox.'
                                        })]
                                    })]
                                })
                            }), n === "macos" && (g == null ? void 0 : g.status) === "Released" && u.jsxs("div", {
                                className: `mb-6 transition-all duration-300 ${o ? "opacity-0 scale-95" : "opacity-100 scale-100"}`,
                                children: [u.jsx("div", {
                                    className: "bg-black/60 p-3 rounded-lg border font-mono text-sm text-gray-300 mb-3 relative group max-h-20 overflow-y-auto custom-scrollbar",
                                    style: {
                                        borderColor: `${m.primary}20`
                                    },
                                    children: u.jsxs("div", {
                                        className: "flex items-start justify-between gap-3",
                                        children: [u.jsx("div", {
                                            className: "flex-1 overflow-x-auto custom-scrollbar py-1",
                                            children: u.jsx("code", {
                                                className: "whitespace-nowrap block leading-relaxed select-text",
                                                children: 'bash -c "$(curl -fsSL https://www.ronixmac.lol/install)"'
                                            })
                                        }), u.jsx("button", {
                                            onClick: () => {
                                                navigator.clipboard.writeText('bash -c "$(curl -fsSL https://www.ronixmac.lol/install)"'), f(!0)
                                            },
                                            className: "flex items-center justify-center w-8 h-8 rounded-lg border transition-all duration-200 hover:scale-110 flex-shrink-0",
                                            style: {
                                                borderColor: `${m.primary}40`,
                                                backgroundColor: `${m.primary}10`,
                                                color: m.primaryLight
                                            },
                                            children: u.jsx(xl, {
                                                size: 14
                                            })
                                        })]
                                    })
                                }), u.jsx("p", {
                                    className: "text-gray-400 text-xs",
                                    children: "Copy and paste this command into your Terminal to install Ronix"
                                })]
                            }), u.jsxs("button", {
                                onClick: x,
                                disabled: !g || g.status !== "Released" || n === "macos",
                                className: "w-full flex items-center justify-center gap-3 text-white px-6 py-3 rounded-xl font-semibold text-base transition-all duration-500 group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed",
                                style: {
                                    background: !g || g.status !== "Released" || n === "macos" ? "#6B7280" : `linear-gradient(135deg, ${m.primary}, ${m.primaryDark})`,
                                    boxShadow: !g || g.status !== "Released" || n === "macos" ? "none" : `0 8px 25px ${m.primary}30`
                                },
                                children: [g && g.status === "Released" && n !== "macos" && u.jsx("div", {
                                    className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500",
                                    style: {
                                        background: `linear-gradient(135deg, ${m.primaryLight}, ${m.primary}, ${m.primaryLight})`
                                    }
                                }), u.jsxs("div", {
                                    className: `relative z-10 flex items-center gap-3 transition-all duration-300 ${o ? "opacity-0 scale-95" : "opacity-100 scale-100"}`,
                                    children: [u.jsx("div", {
                                        className: "flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 group-hover:rotate-12",
                                        style: {
                                            background: "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))",
                                            boxShadow: `0 0 15px ${m.primary}60`
                                        },
                                        children: u.jsx(I0, {
                                            size: 16,
                                            className: "text-white drop-shadow-lg"
                                        })
                                    }), u.jsx("span", {
                                        className: "font-semibold tracking-wide",
                                        children: (g == null ? void 0 : g.status) === "Discontinued" ? "Discontinued" : (g == null ? void 0 : g.status) === "W.I.P" ? "In Development" : n === "macos" ? "Use Terminal Command Above" : `Download for ${S == null ? void 0 : S.name}`
                                    })]
                                })]
                            })]
                        })
                    }), u.jsx("div", {
                        className: "max-w-2xl mx-auto",
                        children: u.jsxs("div", {
                            className: "bg-black/30 backdrop-blur-sm rounded-2xl p-6 border",
                            style: {
                                borderColor: `${m.primary}20`
                            },
                            children: [u.jsx("h3", {
                                className: "font-semibold mb-6 text-lg text-center",
                                style: {
                                    color: m.primary
                                },
                                children: "Features"
                            }), u.jsx("div", {
                                className: `grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-300 ${o ? "opacity-0 scale-95" : "opacity-100 scale-100"}`,
                                children: T.map((b, j) => u.jsxs("div", {
                                    className: "flex items-center space-x-3 group p-3 rounded-xl transition-all duration-300 hover:bg-white/5",
                                    children: [u.jsx("div", {
                                        className: "flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300 group-hover:scale-110",
                                        style: {
                                            backgroundColor: `${m.primary}15`,
                                            color: m.primaryLight
                                        },
                                        children: b.icon
                                    }), u.jsx("span", {
                                        className: "text-gray-300 group-hover:text-white transition-colors duration-300 text-sm font-medium",
                                        children: b.text
                                    })]
                                }, j))
                            })]
                        })
                    })]
                })
            }), u.jsx(Ni, {})]
        })
    },
    I5 = () => {
        const [e, t] = k.useState(!1), {
            getThemeColors: n
        } = Re(), r = n(), i = 'loadstring(game:HttpGet("https://api.luarmor.net/files/v3/loaders/7d8a2a1a9a562a403b52532e58a14065.lua"))()', s = [{
            name: "Dead Rails",
            thumbnail: "https://tr.rbxcdn.com/180DAY-f1fc69ef143ef773afb49f5b9f739e77/500/280/Image/Jpeg/noFilter",
            url: "https://www.roblox.com/games/116495829188952"
        }, {
            name: "Steal a Brainrot",
            thumbnail: "https://tr.rbxcdn.com/180DAY-ed9d6bce77bef487c201322fd2c26812/512/512/Image/Webp/noFilter",
            url: "https://www.roblox.com/games/109983668079237"
        }, {
            name: "Grow a Garden",
            thumbnail: "https://tr.rbxcdn.com/180DAY-c010566cf71816eb7b727ecf935d6e67/768/432/Image/Webp/noFilter",
            url: "https://www.roblox.com/games/126884695634066"
        }, {
            name: "Bloxfruits",
            thumbnail: "https://tr.rbxcdn.com/180DAY-e1ce51abae5188805c3fee78ec7f4d08/768/432/Image/Webp/noFilter",
            url: "https://www.roblox.com/games/2753915549"
        }, {
            name: "DIG",
            thumbnail: "https://static.beebom.com/wp-content/uploads/2025/06/Roblox-Dig-Release-Date-and-Time-event-page-image.jpg?quality=75&strip=all",
            url: "https://www.roblox.com/games/126244816328678"
        }], o = () => {
            navigator.clipboard.writeText(i), t(!0), setTimeout(() => t(!1), 2e3)
        }, a = l => {
            window.open(l, "_blank")
        };
        return u.jsxs(u.Fragment, {
            children: [u.jsx("section", {
                className: "min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-12 px-4 sm:px-6",
                children: u.jsxs("div", {
                    className: "max-w-4xl mx-auto w-full",
                    children: [u.jsxs("div", {
                        className: "text-center mb-12",
                        children: [u.jsx("h1", {
                            className: "font-orbitron font-bold text-2xl sm:text-3xl mb-4",
                            style: {
                                color: r.primary,
                                textShadow: `0 0 20px ${r.primary}50`
                            },
                            children: "Ronix Script"
                        }), u.jsx("p", {
                            className: "text-gray-300 leading-relaxed max-w-xl mx-auto",
                            children: "Copy our script and execute it in your Roblox executor to get started."
                        })]
                    }), u.jsx("div", {
                        className: "mb-12",
                        children: u.jsxs("div", {
                            className: "bg-black/40 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300",
                            style: {
                                borderColor: `${r.primary}30`,
                                background: "linear-gradient(135deg, rgba(0,0,0,0.5), rgba(0,0,0,0.3))"
                            },
                            children: [u.jsxs("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [u.jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [u.jsx("div", {
                                        className: "flex items-center justify-center w-8 h-8 rounded-lg",
                                        style: {
                                            backgroundColor: `${r.primary}15`,
                                            color: r.primary
                                        },
                                        children: u.jsx(O0, {
                                            size: 16
                                        })
                                    }), u.jsx("h3", {
                                        className: "text-white font-semibold",
                                        children: "Ronix Script"
                                    })]
                                }), u.jsxs("div", {
                                    className: "flex items-center gap-2 text-sm text-gray-400",
                                    children: [u.jsx("div", {
                                        className: "w-2 h-2 rounded-full animate-pulse",
                                        style: {
                                            backgroundColor: "#10B981"
                                        }
                                    }), u.jsx("span", {
                                        children: "Ready to Execute"
                                    })]
                                })]
                            }), u.jsxs("div", {
                                className: "bg-black/60 p-4 rounded-lg border font-mono text-sm text-gray-300 mb-4 relative group",
                                style: {
                                    borderColor: `${r.primary}20`
                                },
                                children: [u.jsxs("div", {
                                    className: "flex items-start justify-between gap-3",
                                    children: [u.jsx("div", {
                                        className: "flex-1 overflow-x-auto custom-scrollbar py-1",
                                        children: u.jsx("code", {
                                            className: "whitespace-nowrap block leading-relaxed select-text",
                                            children: i
                                        })
                                    }), u.jsx("button", {
                                        onClick: o,
                                        className: "flex items-center justify-center w-8 h-8 rounded-lg border transition-all duration-200 hover:scale-110 flex-shrink-0",
                                        style: {
                                            borderColor: e ? "#10B981" : `${r.primary}40`,
                                            backgroundColor: e ? "#10B98120" : `${r.primary}10`,
                                            color: e ? "#10B981" : r.primaryLight
                                        },
                                        children: u.jsx(xl, {
                                            size: 14
                                        })
                                    })]
                                }), u.jsxs("div", {
                                    className: "mt-3 flex items-center gap-2 text-xs text-gray-400",
                                    children: [u.jsx("div", {
                                        className: "w-2 h-2 rounded-full",
                                        style: {
                                            backgroundColor: r.primary
                                        }
                                    }), u.jsx("span", {
                                        children: "Click copy button to copy script"
                                    })]
                                })]
                            }), u.jsxs("button", {
                                onClick: o,
                                className: "w-full flex items-center justify-center gap-3 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 group relative overflow-hidden",
                                style: {
                                    background: `linear-gradient(135deg, ${r.primary}, ${r.primaryDark})`,
                                    boxShadow: `0 6px 20px ${r.primary}30`
                                },
                                children: [u.jsx("div", {
                                    className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500",
                                    style: {
                                        background: `linear-gradient(135deg, ${r.primaryLight}, ${r.primary})`
                                    }
                                }), u.jsxs("div", {
                                    className: "relative z-10 flex items-center gap-3",
                                    children: [u.jsx("div", {
                                        className: "flex items-center justify-center w-6 h-6 rounded-full",
                                        style: {
                                            background: "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))"
                                        },
                                        children: u.jsx(xl, {
                                            size: 12,
                                            className: "text-white"
                                        })
                                    }), u.jsx("span", {
                                        children: e ? "Copied!" : "Copy Script"
                                    })]
                                })]
                            })]
                        })
                    }), u.jsx("div", {
                        children: u.jsxs("div", {
                            className: "bg-black/30 backdrop-blur-sm rounded-xl p-6 border",
                            style: {
                                borderColor: `${r.primary}20`
                            },
                            children: [u.jsxs("div", {
                                className: "flex items-center justify-center gap-2 mb-6",
                                children: [u.jsx(ds, {
                                    size: 18,
                                    style: {
                                        color: r.primary
                                    }
                                }), u.jsx("h3", {
                                    className: "font-semibold text-lg text-white text-center",
                                    children: "Supported Games"
                                })]
                            }), u.jsx("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6",
                                children: s.map((l, c) => u.jsxs("div", {
                                    className: "group relative bg-black/40 rounded-lg p-4 border transition-all duration-300 hover:scale-105 overflow-hidden cursor-pointer",
                                    style: {
                                        borderColor: `${r.primary}20`
                                    },
                                    onClick: () => a(l.url),
                                    children: [u.jsx("div", {
                                        className: "w-full h-24 rounded-lg mb-3 flex items-center justify-center border overflow-hidden",
                                        style: {
                                            backgroundColor: "rgba(0, 0, 0, 0.6)",
                                            borderColor: `${r.primary}30`
                                        },
                                        children: l.thumbnail ? u.jsx("img", {
                                            src: l.thumbnail,
                                            alt: l.name,
                                            className: "w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                                        }) : u.jsx("div", {
                                            className: "text-gray-500 text-sm",
                                            children: "No Image"
                                        })
                                    }), u.jsxs("div", {
                                        className: "flex items-center justify-between",
                                        children: [u.jsx("h4", {
                                            className: "text-white font-medium text-sm group-hover:text-gray-100 transition-colors duration-300",
                                            children: l.name
                                        }), u.jsx("div", {
                                            className: "flex items-center justify-center w-5 h-5 rounded-full transition-all duration-300 group-hover:scale-110",
                                            style: {
                                                backgroundColor: `${r.primary}20`
                                            },
                                            children: u.jsx(_0, {
                                                size: 10,
                                                style: {
                                                    color: r.primaryLight
                                                }
                                            })
                                        })]
                                    })]
                                }, c))
                            }), u.jsxs("div", {
                                className: "p-4 bg-black/20 rounded-lg border flex items-center gap-3",
                                style: {
                                    borderColor: `${r.primary}15`
                                },
                                children: [u.jsx(Kt, {
                                    size: 16,
                                    style: {
                                        color: r.primary
                                    }
                                }), u.jsx("p", {
                                    className: "text-gray-300 text-sm",
                                    children: "Copy the script above and paste it into your executor in these support games."
                                })]
                            })]
                        })
                    })]
                })
            }), u.jsx(Ni, {})]
        })
    },
    B5 = ({
        isVisible: e,
        onClose: t,
        onConfirm: n,
        providerName: r
    }) => {
        const {
            getThemeColors: i
        } = Re(), s = i();
        return k.useEffect(() => (e ? (document.body.style.overflow = "hidden", window.scrollTo({
            top: 0,
            behavior: "instant"
        })) : document.body.style.overflow = "", () => {
            document.body.style.overflow = ""
        }), [e]), e ? u.jsxs("div", {
            className: "fixed inset-0 z-[9999] flex items-start justify-center pt-80 p-4 overflow-auto",
            children: [u.jsx("div", {
                className: "absolute inset-0 bg-black/85 backdrop-blur-sm",
                onClick: t
            }), u.jsxs("div", {
                className: "relative bg-black/95 backdrop-blur-md border rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto animate-slideDown shadow-2xl",
                style: {
                    borderColor: `${s.primary}40`,
                    boxShadow: `0 25px 50px ${s.primary}30, 0 0 100px ${s.primary}20`
                },
                children: [u.jsxs("div", {
                    className: "flex items-center justify-between mb-6",
                    children: [u.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [u.jsx("div", {
                            className: "w-10 h-10 rounded-xl border flex items-center justify-center",
                            style: {
                                borderColor: `${s.primary}40`,
                                backgroundColor: `${s.primary}15`
                            },
                            children: u.jsx(v5, {
                                size: 20,
                                style: {
                                    color: s.primary
                                }
                            })
                        }), u.jsxs("div", {
                            children: [u.jsx("h3", {
                                className: "font-orbitron font-bold text-lg",
                                style: {
                                    color: s.primary
                                },
                                children: "Key Information"
                            }), u.jsxs("p", {
                                className: "text-gray-400 text-sm",
                                children: ["Provider: ", r]
                            })]
                        })]
                    }), u.jsx("button", {
                        onClick: t,
                        className: "flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 hover:bg-white/10",
                        children: u.jsx(Gs, {
                            size: 16,
                            style: {
                                color: s.primaryLight
                            }
                        })
                    })]
                }), u.jsxs("div", {
                    className: "mb-6",
                    children: [u.jsxs("div", {
                        className: "bg-black/40 border rounded-xl p-4 mb-4",
                        style: {
                            borderColor: `${s.primary}20`
                        },
                        children: [u.jsxs("div", {
                            className: "flex items-center gap-3 mb-3",
                            children: [u.jsx("div", {
                                className: "w-8 h-8 rounded-lg border flex items-center justify-center",
                                style: {
                                    borderColor: `${s.primary}40`,
                                    backgroundColor: `${s.primary}15`
                                },
                                children: u.jsx(B0, {
                                    size: 16,
                                    style: {
                                        color: s.primary
                                    }
                                })
                            }), u.jsxs("div", {
                                children: [u.jsx("h4", {
                                    className: "text-white font-semibold",
                                    children: "Ronix Hub Access Key"
                                }), u.jsx("p", {
                                    className: "text-gray-400 text-sm",
                                    children: "Secure authentication key"
                                })]
                            })]
                        }), u.jsx("div", {
                            className: "border-t pt-3",
                            style: {
                                borderColor: `${s.primary}15`
                            },
                            children: u.jsxs("p", {
                                className: "text-gray-300 text-sm leading-relaxed",
                                children: ["This key is specifically for ", u.jsx("strong", {
                                    style: {
                                        color: s.primary
                                    },
                                    children: "Ronix Hub."
                                })]
                            })
                        })]
                    }), u.jsx("div", {
                        className: "space-y-3",
                        children: ["Works for Ronix Hub", "Easy & Fast"].map((o, a) => u.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [u.jsx("div", {
                                className: "w-2 h-2 rounded-full",
                                style: {
                                    backgroundColor: "#10B981"
                                }
                            }), u.jsx("span", {
                                className: "text-gray-300 text-sm",
                                children: o
                            })]
                        }, a))
                    })]
                }), u.jsxs("div", {
                    className: "flex gap-3",
                    children: [u.jsx("button", {
                        onClick: t,
                        className: "flex-1 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border",
                        style: {
                            borderColor: `${s.primary}30`,
                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                            color: s.primaryLight
                        },
                        onMouseEnter: o => {
                            o.currentTarget.style.borderColor = `${s.primary}60`, o.currentTarget.style.backgroundColor = `${s.primary}10`
                        },
                        onMouseLeave: o => {
                            o.currentTarget.style.borderColor = `${s.primary}30`, o.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.4)"
                        },
                        children: "Cancel"
                    }), u.jsxs("button", {
                        onClick: n,
                        className: "flex-1 flex items-center justify-center gap-2 text-white px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-500 group relative overflow-hidden",
                        style: {
                            background: `linear-gradient(135deg, ${s.primary}, ${s.primaryDark})`,
                            boxShadow: `0 8px 25px ${s.primary}30`
                        },
                        children: [u.jsx("div", {
                            className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500",
                            style: {
                                background: `linear-gradient(135deg, ${s.primaryLight}, ${s.primary})`
                            }
                        }), u.jsx("div", {
                            className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700",
                            style: {
                                background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
                                transform: "translateX(-100%)",
                                animation: "shimmer 1.5s ease-in-out infinite"
                            }
                        }), u.jsxs("div", {
                            className: "relative z-10 flex items-center gap-2",
                            children: [u.jsx("span", {
                                children: "Continue"
                            }), u.jsx(qu, {
                                size: 14
                            })]
                        })]
                    })]
                }), u.jsx("div", {
                    className: "mt-4 p-3 bg-black/20 rounded-lg border",
                    style: {
                        borderColor: `${s.primary}15`
                    },
                    children: u.jsxs("p", {
                        className: "text-gray-400 text-xs text-center",
                        children: ["You will be redirected to a website and do a ", r, " to get your key."]
                    })
                })]
            })]
        }) : null
    },
    U5 = () => {
        const {
            getThemeColors: e
        } = Re(), t = e(), [n, r] = k.useState(!1), [i, s] = k.useState(""), o = [{
            name: "Lootlab",
            logo: "tpd/logos/65786726ba1241d21ae5bdd3/0x0.png",
            url: "",
            color: "#8B5CF6",
            description: "Fast and reliable",
            features: ["Quick Setup", "High Success Rate", "Mobile Friendly"]
        }, {
            name: "Linkvertise",
            logo: "https://www.stepstone.de/upload_de/logo/E/logoLinkvertise-Inh-Marc-Winter-255864DE-2101131647.gif",
            url: "",
            color: "#F97316",
            description: "Fast and reliable",
            features: ["Easy Process", "Secure Links", "Fast Delivery"]
        }], a = d => {
            s(d.name), r(!0)
        }, l = () => {
            const d = o.find(f => f.name === i);
            d && window.open(d.url, "_blank"), r(!1), s("")
        }, c = () => {
            r(!1), s("")
        };
        return u.jsxs(u.Fragment, {
            children: [u.jsx(B5, {
                isVisible: n,
                onClose: c,
                onConfirm: l,
                providerName: i
            }), u.jsx("section", {
                className: "min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-12 px-4 sm:px-6 page-transition",
                children: u.jsxs("div", {
                    className: "text-center z-10 max-w-5xl mx-auto w-full",
                    children: [u.jsxs("div", {
                        className: "mb-12",
                        children: [u.jsx("h1", {
                            className: "font-orbitron font-black text-3xl sm:text-4xl md:text-5xl mb-6",
                            style: {
                                color: t.primary,
                                textShadow: `0 0 30px ${t.primary}50`
                            },
                            children: "Get Your Key"
                        }), u.jsx("p", {
                            className: "text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto",
                            children: "Choose a key provider below to get your access key for Ronix."
                        })]
                    }), u.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12",
                        children: o.map((d, f) => u.jsxs("div", {
                            className: "relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 overflow-hidden",
                            style: {
                                borderColor: `${d.color}30`,
                                background: "linear-gradient(135deg, rgba(0,0,0,0.5), rgba(0,0,0,0.3))"
                            },
                            children: [u.jsx("div", {
                                className: "mb-6",
                                children: u.jsx("div", {
                                    className: "w-16 h-16 mx-auto rounded-xl border flex items-center justify-center overflow-hidden",
                                    style: {
                                        borderColor: `${d.color}40`,
                                        backgroundColor: `${d.color}10`
                                    },
                                    children: u.jsx("img", {
                                        src: d.logo,
                                        alt: `${d.name} logo`,
                                        className: "w-12 h-12 object-contain"
                                    })
                                })
                            }), u.jsxs("div", {
                                className: "mb-6",
                                children: [u.jsx("h3", {
                                    className: "text-xl font-bold mb-2",
                                    style: {
                                        color: d.color
                                    },
                                    children: d.name
                                }), u.jsx("p", {
                                    className: "text-gray-300 text-sm mb-4",
                                    children: d.description
                                }), u.jsx("div", {
                                    className: "space-y-2",
                                    children: d.features.map((h, m) => u.jsxs("div", {
                                        className: "flex items-center gap-2",
                                        children: [u.jsx("div", {
                                            className: "w-4 h-4 rounded-full flex items-center justify-center",
                                            style: {
                                                backgroundColor: `${d.color}20`
                                            },
                                            children: u.jsx("div", {
                                                className: "w-2 h-2 rounded-full",
                                                style: {
                                                    backgroundColor: d.color
                                                }
                                            })
                                        }), u.jsx("span", {
                                            className: "text-gray-400 text-sm",
                                            children: h
                                        })]
                                    }, m))
                                })]
                            }), u.jsxs("button", {
                                onClick: () => a(d),
                                className: "get-key-button w-full flex items-center justify-center gap-3 text-white px-6 py-3 rounded-xl font-semibold text-base transition-all duration-500 relative overflow-hidden group",
                                style: {
                                    background: `linear-gradient(135deg, ${d.color}, ${d.color}CC)`,
                                    boxShadow: `0 8px 25px ${d.color}30`
                                },
                                children: [u.jsx("div", {
                                    className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500",
                                    style: {
                                        background: `linear-gradient(135deg, ${d.color}DD, ${d.color}AA, ${d.color}DD)`
                                    }
                                }), u.jsx("div", {
                                    className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700",
                                    style: {
                                        background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
                                        transform: "translateX(-100%)",
                                        animation: "shimmer 1.5s ease-in-out infinite"
                                    }
                                }), u.jsx("div", {
                                    className: "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300",
                                    children: u.jsx("div", {
                                        className: "absolute inset-0 rounded-xl animate-ping",
                                        style: {
                                            background: `linear-gradient(135deg, ${d.color}40, transparent)`,
                                            animationDuration: "2s"
                                        }
                                    })
                                }), u.jsxs("div", {
                                    className: "relative z-10 flex items-center gap-3 group-hover:scale-105 transition-transform duration-300",
                                    children: [u.jsx("div", {
                                        className: "flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 group-hover:rotate-12",
                                        style: {
                                            background: "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))",
                                            boxShadow: `0 0 15px ${d.color}60`
                                        },
                                        children: u.jsx(B0, {
                                            size: 16,
                                            className: "text-white drop-shadow-lg"
                                        })
                                    }), u.jsx("span", {
                                        className: "font-semibold tracking-wide",
                                        children: "Get Key"
                                    }), u.jsx("div", {
                                        className: "transition-transform duration-300 group-hover:translate-x-1",
                                        children: u.jsx(qu, {
                                            size: 16
                                        })
                                    })]
                                }), u.jsx("div", {
                                    className: "absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                    style: {
                                        background: `linear-gradient(to right, transparent, ${d.color}, transparent)`,
                                        boxShadow: `0 0 10px ${d.color}`
                                    }
                                })]
                            })]
                        }, f))
                    }), u.jsx("div", {
                        className: "max-w-3xl mx-auto",
                        children: u.jsxs("div", {
                            className: "bg-black/30 backdrop-blur-sm rounded-2xl p-6 border",
                            style: {
                                borderColor: `${t.primary}20`
                            },
                            children: [u.jsxs("h3", {
                                className: "font-semibold mb-4 text-lg text-center flex items-center justify-center gap-2",
                                style: {
                                    color: t.primary
                                },
                                children: [u.jsx(Dt, {
                                    size: 20
                                }), "How to Get Your Key"]
                            }), u.jsxs("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-6 text-left",
                                children: [u.jsxs("div", {
                                    className: "flex flex-col items-center text-center",
                                    children: [u.jsx("div", {
                                        className: "w-12 h-12 rounded-xl border flex items-center justify-center mb-3",
                                        style: {
                                            borderColor: `${t.primary}40`,
                                            backgroundColor: `${t.primary}15`
                                        },
                                        children: u.jsx("span", {
                                            className: "font-bold text-lg",
                                            style: {
                                                color: t.primary
                                            },
                                            children: "1"
                                        })
                                    }), u.jsx("h4", {
                                        className: "text-white font-medium mb-2",
                                        children: "Choose Provider"
                                    }), u.jsx("p", {
                                        className: "text-gray-400 text-sm",
                                        children: "Select either Lootlab or Linkvertise based on your preference."
                                    })]
                                }), u.jsxs("div", {
                                    className: "flex flex-col items-center text-center",
                                    children: [u.jsx("div", {
                                        className: "w-12 h-12 rounded-xl border flex items-center justify-center mb-3",
                                        style: {
                                            borderColor: `${t.primary}40`,
                                            backgroundColor: `${t.primary}15`
                                        },
                                        children: u.jsx("span", {
                                            className: "font-bold text-lg",
                                            style: {
                                                color: t.primary
                                            },
                                            children: "2"
                                        })
                                    }), u.jsx("h4", {
                                        className: "text-white font-medium mb-2",
                                        children: "Complete Tasks"
                                    }), u.jsx("p", {
                                        className: "text-gray-400 text-sm",
                                        children: "Follow the instructions on the key provider's website."
                                    })]
                                }), u.jsxs("div", {
                                    className: "flex flex-col items-center text-center",
                                    children: [u.jsx("div", {
                                        className: "w-12 h-12 rounded-xl border flex items-center justify-center mb-3",
                                        style: {
                                            borderColor: `${t.primary}40`,
                                            backgroundColor: `${t.primary}15`
                                        },
                                        children: u.jsx("span", {
                                            className: "font-bold text-lg",
                                            style: {
                                                color: t.primary
                                            },
                                            children: "3"
                                        })
                                    }), u.jsx("h4", {
                                        className: "text-white font-medium mb-2",
                                        children: "Use Your Key"
                                    }), u.jsx("p", {
                                        className: "text-gray-400 text-sm",
                                        children: "Copy the generated key and use it in for Ronix."
                                    })]
                                })]
                            }), u.jsxs("div", {
                                className: "mt-6 p-4 bg-black/20 rounded-xl border flex items-center gap-3",
                                style: {
                                    borderColor: `${t.primary}15`
                                },
                                children: [u.jsx(Kt, {
                                    size: 16,
                                    style: {
                                        color: t.primary
                                    }
                                }), u.jsxs("p", {
                                    className: "text-gray-300 text-sm",
                                    children: [u.jsx("strong", {
                                        children: "Note:"
                                    }), " Keys help maintain our service for Vyper."]
                                })]
                            })]
                        })
                    })]
                })
            }), u.jsx(Ni, {})]
        })
    },
    W5 = () => {
        const {
            getThemeColors: e
        } = Re(), t = e(), n = () => {
            window.open("https://discord.gg/ronixhub", "_blank")
        }, r = [{
            icon: u.jsx(Dt, {
                size: 18
            }),
            title: "No Key System",
            description: "Skip the key system completely",
            color: "#10B981"
        }, {
            icon: u.jsx(C5, {
                size: 18
            }),
            title: "Unlimited Farming",
            description: "Farm for hours without restrictions",
            color: "#8B5CF6"
        }, {
            icon: u.jsx(Kt, {
                size: 18
            }),
            title: "Future Features",
            description: "Instant access to new features",
            color: "#F59E0B"
        }], i = [{
            name: "PayPal",
            icon: u.jsx(h5, {
                size: 18
            }),
            color: "#0070BA",
            description: "Secure payment processing"
        }, {
            name: "Cryptocurrency",
            icon: u.jsx(f5, {
                size: 18
            }),
            color: "#F7931A",
            description: "Any cryptocurrency accepted"
        }, {
            name: "Server Boosting",
            icon: u.jsx(Ks, {
                size: 18
            }),
            color: "#5865F2",
            description: "2x Basic • 10x Premium"
        }];
        return u.jsxs(u.Fragment, {
            children: [u.jsx("section", {
                className: "min-h-screen relative overflow-hidden pt-32 pb-16 px-4 sm:px-6",
                children: u.jsxs("div", {
                    className: "max-w-6xl mx-auto",
                    children: [u.jsxs("div", {
                        className: "text-center mb-16 animate-fadeInUp",
                        children: [u.jsx("div", {
                            className: "flex items-center justify-center mb-6",
                            children: u.jsxs("div", {
                                className: "relative p-4 rounded-2xl border group",
                                style: {
                                    background: `linear-gradient(135deg, ${t.primary}15, rgba(0,0,0,0.4))`,
                                    borderColor: `${t.primary}40`,
                                    boxShadow: `0 15px 30px ${t.primary}25`
                                },
                                children: [u.jsx(w5, {
                                    size: 32,
                                    className: "text-yellow-400 group-hover:scale-110 transition-transform duration-500"
                                }), u.jsx("div", {
                                    className: "absolute inset-0 rounded-2xl opacity-40 blur-lg animate-pulse",
                                    style: {
                                        background: `radial-gradient(circle, ${t.primary}40, transparent)`
                                    }
                                })]
                            })
                        }), u.jsx("h1", {
                            className: "font-orbitron font-black text-3xl sm:text-4xl md:text-5xl mb-4",
                            style: {
                                color: t.primary,
                                textShadow: `0 0 30px ${t.primary}50`
                            },
                            children: "Ronix Premium"
                        }), u.jsx("p", {
                            className: "text-lg sm:text-xl text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed",
                            children: "Unlock the full potential of Ronix with premium features and unlimited access"
                        }), u.jsxs("div", {
                            className: "inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm",
                            style: {
                                backgroundColor: "#F59E0B10",
                                borderColor: "#F59E0B30",
                                color: "#F59E0B"
                            },
                            children: [u.jsx(z0, {
                                size: 16
                            }), u.jsx("span", {
                                className: "font-medium",
                                children: "Currently Android Only"
                            })]
                        })]
                    }), u.jsxs("div", {
                        className: "mb-16",
                        children: [u.jsx("div", {
                            className: "text-center mb-10",
                            children: u.jsxs("h2", {
                                className: "text-xl sm:text-2xl font-bold mb-4 font-orbitron flex items-center justify-center gap-2",
                                style: {
                                    color: t.primary
                                },
                                children: [u.jsx(U0, {
                                    size: 20
                                }), "Premium Benefits"]
                            })
                        }), u.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto",
                            children: r.map((s, o) => u.jsxs("div", {
                                className: "group relative bg-black/40 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 overflow-hidden",
                                style: {
                                    borderColor: `${t.primary}20`,
                                    background: "linear-gradient(135deg, rgba(0,0,0,0.5), rgba(0,0,0,0.3))"
                                },
                                onMouseEnter: a => {
                                    a.currentTarget.style.borderColor = `${s.color}60`, a.currentTarget.style.background = `linear-gradient(135deg, ${s.color}08, rgba(0,0,0,0.4))`, a.currentTarget.style.boxShadow = `0 20px 40px ${s.color}20`
                                },
                                onMouseLeave: a => {
                                    a.currentTarget.style.borderColor = `${t.primary}20`, a.currentTarget.style.background = "linear-gradient(135deg, rgba(0,0,0,0.5), rgba(0,0,0,0.3))", a.currentTarget.style.boxShadow = "none"
                                },
                                children: [u.jsx("div", {
                                    className: "w-10 h-10 rounded-xl flex items-center justify-center mb-4 mx-auto transition-all duration-300 group-hover:scale-110",
                                    style: {
                                        backgroundColor: `${s.color}15`,
                                        border: `1px solid ${s.color}30`
                                    },
                                    children: u.jsx("div", {
                                        style: {
                                            color: s.color
                                        },
                                        children: s.icon
                                    })
                                }), u.jsx("h3", {
                                    className: "text-white font-semibold mb-2 text-center",
                                    children: s.title
                                }), u.jsx("p", {
                                    className: "text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-center text-sm",
                                    children: s.description
                                })]
                            }, o))
                        })]
                    }), u.jsxs("div", {
                        className: "mb-16",
                        children: [u.jsx("div", {
                            className: "text-center mb-10",
                            children: u.jsxs("h2", {
                                className: "text-xl sm:text-2xl font-bold mb-4 font-orbitron flex items-center justify-center gap-2",
                                style: {
                                    color: t.primary
                                },
                                children: [u.jsx(k5, {
                                    size: 20
                                }), "Choose Your Plan"]
                            })
                        }), u.jsxs("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto",
                            children: [u.jsxs("div", {
                                className: "relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:scale-105",
                                style: {
                                    borderColor: `${t.primary}20`,
                                    background: "linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4))"
                                },
                                children: [u.jsxs("div", {
                                    className: "text-center mb-6",
                                    children: [u.jsxs("div", {
                                        className: "flex items-center justify-center gap-2 mb-3",
                                        children: [u.jsx("div", {
                                            className: "w-3 h-3 rounded-full bg-orange-500"
                                        }), u.jsx("h3", {
                                            className: "text-lg font-bold text-white font-orbitron",
                                            children: "Early Access BASIC"
                                        })]
                                    }), u.jsxs("div", {
                                        className: "flex items-baseline justify-center gap-1 mb-4",
                                        children: [u.jsx("span", {
                                            className: "text-3xl font-black text-white",
                                            children: "$5"
                                        }), u.jsx("span", {
                                            className: "text-gray-400 text-sm",
                                            children: "one-time"
                                        })]
                                    })]
                                }), u.jsx("div", {
                                    className: "space-y-3 mb-6",
                                    children: u.jsxs("div", {
                                        className: "flex items-center gap-3 p-3 rounded-lg bg-black/30",
                                        children: [u.jsx(Df, {
                                            size: 16,
                                            className: "text-green-500 flex-shrink-0"
                                        }), u.jsx("span", {
                                            className: "text-gray-300 text-sm",
                                            children: "Ronix Android No-Key Version"
                                        })]
                                    })
                                })]
                            }), u.jsxs("div", {
                                className: "relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:scale-105",
                                style: {
                                    borderColor: `${t.primary}60`,
                                    background: `linear-gradient(135deg, ${t.primary}10, rgba(0,0,0,0.4))`
                                },
                                children: [u.jsx("div", {
                                    className: "absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold",
                                    style: {
                                        backgroundColor: t.primary,
                                        color: "white"
                                    },
                                    children: "MOST POPULAR"
                                }), u.jsxs("div", {
                                    className: "text-center mb-6",
                                    children: [u.jsxs("div", {
                                        className: "flex items-center justify-center gap-2 mb-3",
                                        children: [u.jsx("div", {
                                            className: "w-3 h-3 rounded-full bg-purple-500"
                                        }), u.jsx("h3", {
                                            className: "text-lg font-bold text-white font-orbitron",
                                            children: "Early Access Premium"
                                        })]
                                    }), u.jsxs("div", {
                                        className: "flex items-baseline justify-center gap-1 mb-4",
                                        children: [u.jsx("span", {
                                            className: "text-3xl font-black text-white",
                                            children: "$30"
                                        }), u.jsx("span", {
                                            className: "text-gray-400 text-sm",
                                            children: "one-time"
                                        })]
                                    })]
                                }), u.jsx("div", {
                                    className: "space-y-3 mb-6",
                                    children: ["Ronix Android No-Key Version", "Includes 8 permanent keys", "Infinite HlWD RESETS!", "Early access to updates"].map((s, o) => u.jsxs("div", {
                                        className: "flex items-center gap-3 p-3 rounded-lg bg-black/30",
                                        children: [u.jsx(Df, {
                                            size: 16,
                                            className: "text-green-500 flex-shrink-0"
                                        }), u.jsx("span", {
                                            className: "text-gray-300 text-sm",
                                            children: s
                                        })]
                                    }, o))
                                })]
                            })]
                        })]
                    }), u.jsxs("div", {
                        className: "mb-16",
                        children: [u.jsx("div", {
                            className: "text-center mb-10",
                            children: u.jsx("h2", {
                                className: "text-xl sm:text-2xl font-bold mb-4 font-orbitron",
                                style: {
                                    color: t.primary
                                },
                                children: "Payment Options"
                            })
                        }), u.jsx("div", {
                            className: "grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-6",
                            children: i.map((s, o) => u.jsxs("div", {
                                className: "bg-black/30 backdrop-blur-sm rounded-xl p-4 border text-center transition-all duration-300 hover:scale-105",
                                style: {
                                    borderColor: `${s.color}30`,
                                    background: `linear-gradient(135deg, ${s.color}05, rgba(0,0,0,0.3))`
                                },
                                children: [u.jsx("div", {
                                    className: "w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3",
                                    style: {
                                        backgroundColor: `${s.color}20`
                                    },
                                    children: u.jsx("div", {
                                        style: {
                                            color: s.color
                                        },
                                        children: s.icon
                                    })
                                }), u.jsx("h4", {
                                    className: "text-white font-semibold text-sm mb-1",
                                    children: s.name
                                }), u.jsx("p", {
                                    className: "text-gray-400 text-xs",
                                    children: s.description
                                })]
                            }, o))
                        }), u.jsxs("div", {
                            className: "bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 max-w-2xl mx-auto",
                            children: [u.jsxs("div", {
                                className: "flex items-center justify-center gap-2 mb-2",
                                children: [u.jsx(b5, {
                                    size: 16,
                                    className: "text-blue-400"
                                }), u.jsx("span", {
                                    className: "text-blue-300 font-semibold",
                                    children: "Ready to upgrade?"
                                })]
                            }), u.jsx("p", {
                                className: "text-blue-200 text-center text-sm",
                                children: "Open a premium ticket in our Discord server to get started"
                            })]
                        })]
                    }), u.jsxs("div", {
                        className: "text-center mb-16",
                        children: [u.jsxs("button", {
                            onClick: n,
                            className: "group relative flex items-center justify-center gap-3 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 hover:scale-105 overflow-hidden mx-auto",
                            style: {
                                background: `linear-gradient(135deg, ${t.primary}, ${t.primaryDark})`,
                                boxShadow: `0 12px 30px ${t.primary}40`
                            },
                            children: [u.jsx("div", {
                                className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700",
                                style: {
                                    background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
                                    transform: "translateX(-100%)",
                                    animation: "shimmer 2s ease-in-out infinite"
                                }
                            }), u.jsxs("div", {
                                className: "relative z-10 flex items-center gap-3",
                                children: [u.jsx(Ks, {
                                    size: 20
                                }), u.jsx("span", {
                                    children: "Open Premium Ticket"
                                }), u.jsx(qu, {
                                    size: 18
                                })]
                            })]
                        }), u.jsx("p", {
                            className: "text-gray-400 mt-3 text-base",
                            children: "Join our Discord and create a ticket to purchase"
                        })]
                    }), u.jsx("div", {
                        className: "max-w-2xl mx-auto",
                        children: u.jsxs("div", {
                            className: "bg-red-500/10 border border-red-500/30 rounded-xl p-6",
                            children: [u.jsxs("div", {
                                className: "flex items-center justify-center gap-2 mb-4",
                                children: [u.jsx(Dt, {
                                    size: 20,
                                    className: "text-red-500"
                                }), u.jsx("h3", {
                                    className: "text-red-400 font-bold text-lg font-orbitron",
                                    children: "IMPORTANT"
                                })]
                            }), u.jsxs("div", {
                                className: "text-center space-y-2",
                                children: [u.jsxs("p", {
                                    className: "text-red-200 text-base",
                                    children: [u.jsx("strong", {
                                        children: "REMEMBER"
                                    }), " If you use any fraudulent money, you will be refunded and reported for fraud."]
                                }), u.jsxs("p", {
                                    className: "text-red-300 text-sm",
                                    children: ["We do ", u.jsx("strong", {
                                        children: "NOT"
                                    }), " allow fraud under any circumstances."]
                                })]
                            })]
                        })
                    })]
                })
            }), u.jsx(Ni, {})]
        })
    },
    H5 = () => {
        const {
            getThemeColors: e
        } = Re(), t = e(), n = window.innerWidth < 768;
        return u.jsxs("div", {
            className: "fixed inset-0 pointer-events-none overflow-hidden",
            children: [
                [...Array(n ? 1 : 2)].map((r, i) => u.jsx("div", {
                    className: "absolute w-1 h-1 rounded-full animate-shooting-star opacity-60",
                    style: {
                        backgroundColor: t.primaryLight,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i * 1.2}s`,
                        animationDuration: `${3 + Math.random() * 2}s`,
                        boxShadow: `0 0 6px ${t.primaryLight}`
                    },
                    children: !n && u.jsx("div", {
                        className: "absolute inset-0 rounded-full blur-sm",
                        style: {
                            backgroundColor: t.primaryLight
                        }
                    })
                }, `regular-${i}`)), [...Array(n ? 1 : 2)].map((r, i) => u.jsx("div", {
                    className: "absolute w-1.5 h-1.5 rounded-full animate-shooting-star opacity-80",
                    style: {
                        backgroundColor: "#FFFFFF",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i * .8 + .5}s`,
                        animationDuration: `${2.5 + Math.random() * 1.5}s`,
                        boxShadow: n ? `0 0 8px ${t.primary}` : `0 0 12px ${t.primary}, 0 0 24px ${t.primaryLight}, 0 0 36px #FFFFFF`,
                        filter: "brightness(1.5)"
                    },
                    children: !n && u.jsxs(u.Fragment, {
                        children: [u.jsx("div", {
                            className: "absolute inset-0 rounded-full blur-sm animate-pulse",
                            style: {
                                backgroundColor: "#FFFFFF",
                                animationDuration: "0.8s"
                            }
                        }), u.jsx("div", {
                            className: "absolute -inset-2 rounded-full blur-md animate-pulse",
                            style: {
                                backgroundColor: t.primaryLight,
                                opacity: .6,
                                animationDuration: "1.2s",
                                animationDelay: "0.3s"
                            }
                        })]
                    })
                }, `bright-${i}`)), !n && [...Array(1)].map((r, i) => u.jsx("div", {
                    className: "absolute w-0.5 h-0.5 rounded-full animate-shooting-star opacity-40",
                    style: {
                        backgroundColor: t.primary,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i * 2 + 1}s`,
                        animationDuration: `${4 + Math.random() * 2}s`,
                        boxShadow: `0 0 4px ${t.primary}`
                    },
                    children: u.jsx("div", {
                        className: "absolute inset-0 rounded-full blur-xs",
                        style: {
                            backgroundColor: t.primary
                        }
                    })
                }, `faint-${i}`))
            ]
        })
    },
    K5 = () => {
        const {
            getThemeColors: e
        } = Re(), t = e();
        return u.jsxs("div", {
            className: "fixed inset-0 pointer-events-none overflow-hidden",
            children: [u.jsx("div", {
                className: "absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-32 rounded-full blur-3xl",
                style: {
                    background: `radial-gradient(ellipse, ${t.primary}25, ${t.primaryLight}15, transparent)`,
                    zIndex: 5
                }
            }), u.jsx("div", {
                className: "absolute -top-40 -left-40 w-80 sm:w-96 h-80 sm:h-96 rounded-full blur-3xl animate-blob",
                style: {
                    background: `radial-gradient(circle, ${t.primary}30, ${t.primary}20, transparent)`
                }
            }), u.jsx("div", {
                className: "absolute -top-20 -right-20 w-60 sm:w-72 h-60 sm:h-72 rounded-full blur-3xl animate-blob animation-delay-2000",
                style: {
                    background: `radial-gradient(circle, ${t.primaryLight}25, ${t.primary}15, transparent)`
                }
            }), u.jsx("div", {
                className: "absolute -bottom-40 -right-40 w-72 sm:w-80 h-72 sm:h-80 rounded-full blur-3xl animate-blob animation-delay-4000",
                style: {
                    background: `radial-gradient(circle, ${t.primaryDark}35, ${t.primary}25, transparent)`
                }
            }), u.jsx("div", {
                className: "absolute -bottom-20 -left-20 w-56 sm:w-64 h-56 sm:h-64 rounded-full blur-3xl animate-blob animation-delay-6000",
                style: {
                    background: `radial-gradient(circle, ${t.primary}20, ${t.primaryLight}15, transparent)`
                }
            }), u.jsx("div", {
                className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 sm:w-48 h-40 sm:h-48 rounded-full blur-2xl animate-float-slow",
                style: {
                    background: `radial-gradient(circle, ${t.primary}10, ${t.primaryLight}10, transparent)`
                }
            }), u.jsx("div", {
                className: "absolute top-1/4 left-1/4 w-32 h-32 rounded-full blur-2xl animate-float animation-delay-2000",
                style: {
                    background: `radial-gradient(circle, ${t.primaryLight}15, transparent)`
                }
            }), u.jsx("div", {
                className: "absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full blur-xl animate-float-slow animation-delay-4000",
                style: {
                    background: `radial-gradient(circle, ${t.primaryDark}20, transparent)`
                }
            }), u.jsx("div", {
                className: "absolute top-1/3 right-1/3 w-16 h-16 rounded-full blur-lg animate-pulse",
                style: {
                    background: `radial-gradient(circle, ${t.primary}25, transparent)`,
                    animationDuration: "3s"
                }
            }), u.jsx("div", {
                className: "absolute bottom-1/3 left-1/3 w-20 h-20 rounded-full blur-lg animate-pulse animation-delay-2000",
                style: {
                    background: `radial-gradient(circle, ${t.primaryLight}20, transparent)`,
                    animationDuration: "4s"
                }
            }), u.jsx("div", {
                className: "absolute top-1/2 -left-10 w-28 h-40 rounded-full blur-2xl animate-drift",
                style: {
                    background: `linear-gradient(45deg, ${t.primary}15, ${t.primaryLight}10, transparent)`
                }
            }), u.jsx("div", {
                className: "absolute top-1/2 -right-10 w-28 h-40 rounded-full blur-2xl animate-drift animation-delay-4000",
                style: {
                    background: `linear-gradient(-45deg, ${t.primary}15, ${t.primaryLight}10, transparent)`
                }
            }), u.jsx("div", {
                className: "absolute top-3/4 left-1/6 w-36 h-36 rounded-full blur-3xl animate-float animation-delay-6000",
                style: {
                    background: `radial-gradient(circle, ${t.primary}12, transparent)`
                }
            }), u.jsx("div", {
                className: "absolute top-1/6 right-1/6 w-44 h-44 rounded-full blur-3xl animate-blob animation-delay-8000",
                style: {
                    background: `radial-gradient(circle, ${t.primaryLight}10, transparent)`
                }
            }), u.jsx("div", {
                className: "absolute top-10 left-10 w-20 h-20 rounded-full blur-xl animate-pulse",
                style: {
                    background: `radial-gradient(circle, ${t.primary}18, transparent)`,
                    animationDuration: "5s"
                }
            }), u.jsx("div", {
                className: "absolute bottom-10 right-10 w-24 h-24 rounded-full blur-xl animate-pulse animation-delay-3000",
                style: {
                    background: `radial-gradient(circle, ${t.primaryLight}15, transparent)`,
                    animationDuration: "6s"
                }
            })]
        })
    },
    G5 = () => {
        const e = k.useRef(null),
            t = k.useRef(null),
            n = k.useRef(null),
            r = k.useRef(null),
            i = k.useRef(null),
            [s, o] = k.useState(!1),
            [a, l] = k.useState(!1),
            [c, d] = k.useState(.15),
            [f, h] = k.useState(0),
            [m, v] = k.useState([]),
            [w, S] = k.useState(!0),
            g = k.useRef(0),
            p = window.innerWidth < 768,
            {
                getThemeColors: y
            } = Re(),
            x = y(),
            C = () => {
                const N = e.current;
                if (!(!N || t.current)) try {
                    const D = new (window.AudioContext || window.webkitAudioContext),
                        O = D.createAnalyser(),
                        I = D.createMediaElementSource(N);
                    O.fftSize = p ? 128 : 256;
                    const je = O.frequencyBinCount,
                        dt = new Uint8Array(je);
                    I.connect(O), O.connect(D.destination), t.current = D, n.current = O, r.current = dt, T()
                } catch {
                    console.log("Audio analysis not supported")
                }
            },
            T = () => {
                const N = () => {
                    const D = performance.now(),
                        O = p ? 33.33 : 16.67;
                    if (D - g.current < O) {
                        s && (i.current = requestAnimationFrame(N));
                        return
                    }
                    if (g.current = D, !n.current || !r.current) return;
                    n.current.getByteFrequencyData(r.current);
                    const I = r.current.slice(0, p ? 3 : 6),
                        je = I.reduce((B, Ye) => B + Ye, 0) / I.length,
                        dt = r.current.slice(p ? 3 : 6, p ? 12 : 24),
                        Tn = dt.reduce((B, Ye) => B + Ye, 0) / dt.length,
                        te = (je + Tn) / 2,
                        E = Math.min(te / 128, 1);
                    h(E);
                    const L = p ? 8 : 16,
                        A = [],
                        K = Math.floor(r.current.length / L);
                    for (let B = 0; B < L; B++) {
                        const Ye = B * K,
                            ft = Ye + K,
                            Pn = r.current.slice(Ye, ft),
                            ht = Pn.reduce((En, H0) => En + H0, 0) / Pn.length;
                        A.push(Math.min(ht / 255, 1))
                    }
                    v(A), s && (i.current = requestAnimationFrame(N))
                };
                s && N()
            };
        k.useEffect(() => {
            s && n.current ? T() : i.current && (cancelAnimationFrame(i.current), h(0), v([]))
        }, [s]), k.useEffect(() => {
            const N = e.current;
            return N ? (N.volume = c, N.loop = !0, N.muted = !1, N.autoplay = !0, (async () => {
                try {
                    await N.play(), o(!0), C()
                } catch {
                    console.log("Autoplay blocked, waiting for user interaction");
                    const I = async () => {
                        try {
                            await N.play(), o(!0), C(), document.removeEventListener("click", I), document.removeEventListener("keydown", I), document.removeEventListener("touchstart", I)
                        } catch {
                            console.log("Failed to play audio after user interaction")
                        }
                    };
                    return document.addEventListener("click", I), document.addEventListener("keydown", I), document.addEventListener("touchstart", I), () => {
                        document.removeEventListener("click", I), document.removeEventListener("keydown", I), document.removeEventListener("touchstart", I)
                    }
                }
            })(), () => {
                N && N.pause()
            }) : void 0
        }, [c]);
        const b = async () => {
            const N = e.current;
            if (N) try {
                s ? (N.pause(), o(!1)) : (await N.play(), o(!0), t.current || C())
            } catch {
                console.log("Audio playback failed")
            }
        }, j = () => {
            const N = e.current;
            N && (a ? (N.volume = c, l(!1)) : (N.volume = 0, l(!0)))
        }, $ = N => {
            const D = parseFloat(N.target.value);
            d(D);
            const O = e.current;
            O && !a && (O.volume = D)
        };
        return u.jsxs(u.Fragment, {
            children: [u.jsx("audio", {
                ref: e,
                src: "79p4r5.mp3",
                preload: "auto",
                crossOrigin: "anonymous"
            }), u.jsx("div", {
                className: "fixed inset-0 pointer-events-none z-0",
                children: w && u.jsxs(u.Fragment, {
                    children: [!p && u.jsx("div", {
                        className: "absolute inset-0 transition-opacity duration-200",
                        style: {
                            background: `radial-gradient(circle at center, ${x.primary}${Math.floor(f * 20).toString(16).padStart(2, "0")}, transparent 60%)`,
                            opacity: f * .3
                        }
                    }), u.jsx("div", {
                        className: "fixed bottom-0 left-0 right-0 flex items-end justify-center gap-1 px-2 sm:px-4 pb-2 sm:pb-4 pointer-events-none z-10",
                        children: m.map((N, D) => {
                            const O = Math.max(p ? 4 : 2, window.innerWidth * (p ? .6 : .8) / m.length - 2),
                                I = Math.max(3, N * (p ? 40 : 80)),
                                je = Math.floor(N * 200).toString(16).padStart(2, "0");
                            return u.jsx("div", {
                                className: p ? "" : "will-change-transform",
                                style: {
                                    width: `${O}px`,
                                    height: `${I}px`,
                                    background: `linear-gradient(to top, ${x.primary}${je}, ${x.primaryLight}${Math.floor(N * 150).toString(16).padStart(2, "0")})`,
                                    borderRadius: "2px 2px 0 0",
                                    boxShadow: !p && N > .3 ? `0 0 ${N * 8}px ${x.primary}60` : "none",
                                    opacity: s ? .9 : .3,
                                    transform: `scaleY(${.3 + N * .7})`,
                                    transformOrigin: "bottom",
                                    transition: p ? "none" : "transform 0.1s ease-out"
                                }
                            }, D)
                        })
                    }), !p && u.jsx("div", {
                        className: "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-5",
                        children: u.jsx("div", {
                            className: "relative w-48 h-48 lg:w-64 lg:h-64",
                            children: m.slice(0, 12).map((N, D) => {
                                const O = D / 12 * 360,
                                    I = window.innerWidth < 1024 ? 50 : 70,
                                    je = N * 35,
                                    dt = Math.floor(N * 180).toString(16).padStart(2, "0");
                                return u.jsx("div", {
                                    className: "absolute will-change-transform",
                                    style: {
                                        width: "3px",
                                        height: `${Math.max(6, je)}px`,
                                        background: `linear-gradient(to top, ${x.primary}${dt}, ${x.primaryLight}${Math.floor(N * 120).toString(16).padStart(2, "0")})`,
                                        transformOrigin: "bottom center",
                                        transform: `rotate(${O}deg) translateY(-${I}px) scaleY(${.4 + N * .6})`,
                                        left: "50%",
                                        bottom: "50%",
                                        marginLeft: "-1.5px",
                                        borderRadius: "2px",
                                        boxShadow: N > .4 ? `0 0 ${N * 6}px ${x.primary}50` : "none",
                                        opacity: s ? .8 : .2,
                                        transition: "transform 0.1s ease-out"
                                    }
                                }, `circular-${D}`)
                            })
                        })
                    }), window.innerWidth >= 1200 && u.jsxs(u.Fragment, {
                        children: [u.jsx("div", {
                            className: "fixed left-2 top-1/2 transform -translate-y-1/2 flex flex-col items-start gap-1 pointer-events-none z-10",
                            children: m.slice(0, 6).map((N, D) => {
                                const O = Math.floor(N * 200).toString(16).padStart(2, "0");
                                return u.jsx("div", {
                                    className: "will-change-transform",
                                    style: {
                                        width: `${Math.max(4, N * 40)}px`,
                                        height: "4px",
                                        background: `linear-gradient(to right, ${x.primary}${O}, ${x.primaryLight}${Math.floor(N * 150).toString(16).padStart(2, "0")})`,
                                        borderRadius: "0 2px 2px 0",
                                        boxShadow: N > .3 ? `0 0 ${N * 4}px ${x.primary}40` : "none",
                                        opacity: s ? .8 : .3,
                                        transform: `scaleX(${.3 + N * .7})`,
                                        transformOrigin: "left",
                                        transition: "transform 0.1s ease-out"
                                    }
                                }, `left-${D}`)
                            })
                        }), u.jsx("div", {
                            className: "fixed right-2 top-1/2 transform -translate-y-1/2 flex flex-col items-end gap-1 pointer-events-none z-10",
                            children: m.slice(6, 12).map((N, D) => {
                                const O = Math.floor(N * 200).toString(16).padStart(2, "0");
                                return u.jsx("div", {
                                    className: "will-change-transform",
                                    style: {
                                        width: `${Math.max(4, N * 40)}px`,
                                        height: "4px",
                                        background: `linear-gradient(to left, ${x.primary}${O}, ${x.primaryLight}${Math.floor(N * 150).toString(16).padStart(2, "0")})`,
                                        borderRadius: "2px 0 0 2px",
                                        boxShadow: N > .3 ? `0 0 ${N * 4}px ${x.primary}40` : "none",
                                        opacity: s ? .8 : .3,
                                        transform: `scaleX(${.3 + N * .7})`,
                                        transformOrigin: "right",
                                        transition: "transform 0.1s ease-out"
                                    }
                                }, `right-${D}`)
                            })
                        })]
                    }), !p && u.jsxs(u.Fragment, {
                        children: [u.jsx("div", {
                            className: "absolute top-4 left-4 w-16 h-16 lg:w-24 lg:h-24 rounded-full blur-xl transition-all duration-200",
                            style: {
                                background: `radial-gradient(circle, ${x.primaryLight}${Math.floor(f * 40).toString(16).padStart(2, "0")}, transparent)`,
                                transform: `scale(${1 + f * .2})`
                            }
                        }), u.jsx("div", {
                            className: "absolute top-4 right-4 w-16 h-16 lg:w-24 lg:h-24 rounded-full blur-xl transition-all duration-200",
                            style: {
                                background: `radial-gradient(circle, ${x.primary}${Math.floor(f * 40).toString(16).padStart(2, "0")}, transparent)`,
                                transform: `scale(${1 + f * .2})`
                            }
                        })]
                    })]
                })
            }), u.jsx("div", {
                className: "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50",
                children: u.jsxs("div", {
                    className: "group bg-black/90 backdrop-blur-xl border rounded-2xl p-2 sm:p-3 transition-all duration-300 hover:scale-105 hover:bg-black/95",
                    style: {
                        borderColor: `${x.primary}40`,
                        boxShadow: `0 8px 32px ${x.primary}20, 0 0 0 1px ${x.primary}10`
                    },
                    children: [u.jsxs("div", {
                        className: "flex items-center gap-1 sm:gap-2",
                        children: [u.jsxs("button", {
                            onClick: b,
                            className: "relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-xl transition-all duration-300 hover:scale-110 overflow-hidden group/btn",
                            style: {
                                background: `linear-gradient(135deg, ${x.primary}20, ${x.primary}10)`,
                                border: `1px solid ${x.primary}30`
                            },
                            children: [u.jsx("div", {
                                className: "absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300",
                                style: {
                                    background: `linear-gradient(135deg, ${x.primary}30, ${x.primary}15)`
                                }
                            }), u.jsx("div", {
                                className: "relative z-10",
                                children: s ? u.jsx(P5, {
                                    size: p ? 10 : 12,
                                    style: {
                                        color: x.primaryLight
                                    }
                                }) : u.jsx(E5, {
                                    size: p ? 10 : 12,
                                    style: {
                                        color: x.primaryLight
                                    }
                                })
                            })]
                        }), u.jsxs("button", {
                            onClick: j,
                            className: "relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-xl transition-all duration-300 hover:scale-110 overflow-hidden group/btn",
                            style: {
                                background: a ? "linear-gradient(135deg, #EF444420, #EF444410)" : `linear-gradient(135deg, ${x.primary}20, ${x.primary}10)`,
                                border: a ? "1px solid #EF444430" : `1px solid ${x.primary}30`
                            },
                            children: [u.jsx("div", {
                                className: "absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300",
                                style: {
                                    background: a ? "linear-gradient(135deg, #EF444430, #EF444415)" : `linear-gradient(135deg, ${x.primary}30, ${x.primary}15)`
                                }
                            }), u.jsx("div", {
                                className: "relative z-10",
                                children: a ? u.jsx($5, {
                                    size: p ? 10 : 12,
                                    className: "text-red-400"
                                }) : u.jsx(R5, {
                                    size: p ? 10 : 12,
                                    style: {
                                        color: x.primaryLight
                                    }
                                })
                            })]
                        }), u.jsxs("button", {
                            onClick: () => S(!w),
                            className: "relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-xl transition-all duration-300 hover:scale-110 overflow-hidden group/btn",
                            style: {
                                background: w ? `linear-gradient(135deg, ${x.primary}20, ${x.primary}10)` : "linear-gradient(135deg, #6B728020, #6B728010)",
                                border: w ? `1px solid ${x.primary}30` : "1px solid #6B728030"
                            },
                            children: [u.jsx("div", {
                                className: "absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300",
                                style: {
                                    background: w ? `linear-gradient(135deg, ${x.primary}30, ${x.primary}15)` : "linear-gradient(135deg, #6B728030, #6B728015)"
                                }
                            }), u.jsx("div", {
                                className: "relative z-10",
                                children: u.jsxs("div", {
                                    className: "flex space-x-0.5",
                                    children: [u.jsx("div", {
                                        className: `w-0.5 h-1.5 sm:h-2 rounded-full ${w ? "bg-current" : "bg-gray-500"}`,
                                        style: {
                                            color: w ? x.primaryLight : "#6B7280"
                                        }
                                    }), u.jsx("div", {
                                        className: `w-0.5 h-2 sm:h-3 rounded-full ${w ? "bg-current" : "bg-gray-500"}`,
                                        style: {
                                            color: w ? x.primaryLight : "#6B7280"
                                        }
                                    }), u.jsx("div", {
                                        className: `w-0.5 h-1.5 sm:h-2 rounded-full ${w ? "bg-current" : "bg-gray-500"}`,
                                        style: {
                                            color: w ? x.primaryLight : "#6B7280"
                                        }
                                    })]
                                })
                            })]
                        }), u.jsx("div", {
                            className: "relative",
                            children: u.jsx("input", {
                                type: "range",
                                min: "0",
                                max: "1",
                                step: "0.05",
                                value: c,
                                onChange: $,
                                className: "w-8 sm:w-12 h-1 rounded-full appearance-none cursor-pointer transition-all duration-300 hover:scale-105",
                                style: {
                                    background: `linear-gradient(to right, ${x.primary} 0%, ${x.primary} ${c * 100}%, rgba(255,255,255,0.15) ${c * 100}%, rgba(255,255,255,0.15) 100%)`
                                }
                            })
                        })]
                    }), u.jsx("div", {
                        className: "mt-1 sm:mt-2 flex items-center justify-center",
                        children: u.jsxs("div", {
                            className: "flex items-center gap-1",
                            children: [u.jsx("div", {
                                className: `w-1 h-1 rounded-full transition-all duration-300 ${s ? "animate-pulse" : ""}`,
                                style: {
                                    backgroundColor: s ? x.primary : "#6B7280"
                                }
                            }), u.jsx("div", {
                                className: `w-1 h-1 rounded-full transition-all duration-300 ${s ? "animate-pulse" : ""}`,
                                style: {
                                    backgroundColor: s ? x.primaryLight : "#6B7280",
                                    animationDelay: "0.2s"
                                }
                            }), u.jsx("div", {
                                className: `w-1 h-1 rounded-full transition-all duration-300 ${s ? "animate-pulse" : ""}`,
                                style: {
                                    backgroundColor: s ? x.primary : "#6B7280",
                                    animationDelay: "0.4s"
                                }
                            })]
                        })
                    })]
                })
            }), u.jsx("style", {
                jsx: !0,
                children: `
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: ${p ? "8px" : "10px"};
          height: ${p ? "8px" : "10px"};
          border-radius: 50%;
          background: ${x.primary};
          cursor: pointer;
          border: 1px solid rgba(255,255,255,0.3);
          box-shadow: 0 0 8px ${x.primary}60, 0 2px 4px rgba(0,0,0,0.3);
          transition: all 0.2s ease;
        }

        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(${p ? "1.1" : "1.2"});
          box-shadow: 0 0 12px ${x.primary}80, 0 4px 8px rgba(0,0,0,0.4);
        }

        input[type="range"]::-moz-range-thumb {
          width: ${p ? "8px" : "10px"};
          height: ${p ? "8px" : "10px"};
          border-radius: 50%;
          background: ${x.primary};
          cursor: pointer;
          border: 1px solid rgba(255,255,255,0.3);
          box-shadow: 0 0 8px ${x.primary}60, 0 2px 4px rgba(0,0,0,0.3);
          transition: all 0.2s ease;
        }

        input[type="range"]::-webkit-slider-track {
          height: 4px;
          border-radius: 2px;
        }

        input[type="range"]::-moz-range-track {
          height: 4px;
          border-radius: 2px;
          background: rgba(255,255,255,0.15);
        }

        @media (max-width: 640px) {
          .fixed.bottom-4.right-4 {
            bottom: 1rem;
            right: 1rem;
          }
        }
      `
            })]
        })
    };

function Y5() {
    return u.jsxs(u.Fragment, {
        children: [u.jsx(V5, {}), u.jsx(F5, {}), u.jsx(z5, {}), u.jsx(Ni, {})]
    })
}
const X5 = {
    initial: {
        opacity: 0,
        y: 30,
        scale: .95
    },
    in: {
        opacity: 1,
        y: 0,
        scale: 1
    },
    out: {
        opacity: 0,
        y: -30,
        scale: 1.05
    }
},
    Q5 = {
        type: "tween",
        ease: [.25, .46, .45, .94],
        duration: .8
    };

function Z5() {
    const e = jn();
    return u.jsx(k2, {
        mode: "wait",
        children: u.jsx(r5.div, {
            initial: "initial",
            animate: "in",
            exit: "out",
            variants: X5,
            transition: Q5,
            className: "will-change-transform",
            children: u.jsxs(uv, {
                location: e,
                children: [u.jsx(Ln, {
                    path: "/",
                    element: u.jsx(Y5, {})
                }), u.jsx(Ln, {
                    path: "/download",
                    element: u.jsx(O5, {})
                }), u.jsx(Ln, {
                    path: "/script",
                    element: u.jsx(I5, {})
                }), u.jsx(Ln, {
                    path: "/get-key",
                    element: u.jsx(U5, {})
                }), u.jsx(Ln, {
                    path: "/premium",
                    element: u.jsx(W5, {})
                })]
            })
        }, e.pathname)
    })
}

function q5() {
    return u.jsx(A5, {
        children: u.jsx(yv, {
            children: u.jsxs("div", {
                className: "min-h-screen bg-black relative overflow-hidden",
                children: [u.jsx(K5, {}), u.jsx(H5, {}), u.jsxs("div", {
                    className: "relative z-10",
                    children: [u.jsx(D5, {}), u.jsx(Z5, {}), u.jsx(G5, {})]
                })]
            })
        })
    })
}
Xp(document.getElementById("root")).render(u.jsx(k.StrictMode, {
    children: u.jsx(q5, {})
}));
