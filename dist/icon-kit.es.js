import Z1 from "react";
var r = {}, o2 = {
  get exports() {
    return r;
  },
  set exports(e) {
    r = e;
  }
}, B = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var H1;
function s2() {
  if (H1)
    return B;
  H1 = 1;
  var e = Z1, n = Symbol.for("react.element"), W = Symbol.for("react.fragment"), Z = Object.prototype.hasOwnProperty, T = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(V, d, j) {
    var x, p = {}, H = null, P = null;
    j !== void 0 && (H = "" + j), d.key !== void 0 && (H = "" + d.key), d.ref !== void 0 && (P = d.ref);
    for (x in d)
      Z.call(d, x) && !O.hasOwnProperty(x) && (p[x] = d[x]);
    if (V && V.defaultProps)
      for (x in d = V.defaultProps, d)
        p[x] === void 0 && (p[x] = d[x]);
    return { $$typeof: n, type: V, key: H, ref: P, props: p, _owner: T.current };
  }
  return B.Fragment = W, B.jsx = y, B.jsxs = y, B;
}
var S = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M1;
function i2() {
  return M1 || (M1 = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Z1, n = Symbol.for("react.element"), W = Symbol.for("react.portal"), Z = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), V = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), K = Symbol.iterator, j1 = "@@iterator";
    function m1(C) {
      if (C === null || typeof C != "object")
        return null;
      var t = K && C[K] || C[j1];
      return typeof t == "function" ? t : null;
    }
    var m = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(C) {
      {
        for (var t = arguments.length, l = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          l[o - 1] = arguments[o];
        b1("error", C, l);
      }
    }
    function b1(C, t, l) {
      {
        var o = m.ReactDebugCurrentFrame, a = o.getStackAddendum();
        a !== "" && (t += "%s", l = l.concat([a]));
        var u = l.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + t), Function.prototype.apply.call(console[C], console, u);
      }
    }
    var E1 = !1, y1 = !1, R1 = !1, _1 = !1, B1 = !1, X;
    X = Symbol.for("react.module.reference");
    function S1(C) {
      return !!(typeof C == "string" || typeof C == "function" || C === Z || C === O || B1 || C === T || C === j || C === x || _1 || C === P || E1 || y1 || R1 || typeof C == "object" && C !== null && (C.$$typeof === H || C.$$typeof === p || C.$$typeof === y || C.$$typeof === V || C.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      C.$$typeof === X || C.getModuleId !== void 0));
    }
    function T1(C, t, l) {
      var o = C.displayName;
      if (o)
        return o;
      var a = t.displayName || t.name || "";
      return a !== "" ? l + "(" + a + ")" : l;
    }
    function Q(C) {
      return C.displayName || "Context";
    }
    function L(C) {
      if (C == null)
        return null;
      if (typeof C.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof C == "function")
        return C.displayName || C.name || null;
      if (typeof C == "string")
        return C;
      switch (C) {
        case Z:
          return "Fragment";
        case W:
          return "Portal";
        case O:
          return "Profiler";
        case T:
          return "StrictMode";
        case j:
          return "Suspense";
        case x:
          return "SuspenseList";
      }
      if (typeof C == "object")
        switch (C.$$typeof) {
          case V:
            var t = C;
            return Q(t) + ".Consumer";
          case y:
            var l = C;
            return Q(l._context) + ".Provider";
          case d:
            return T1(C, C.render, "ForwardRef");
          case p:
            var o = C.displayName || null;
            return o !== null ? o : L(C.type) || "Memo";
          case H: {
            var a = C, u = a._payload, i = a._init;
            try {
              return L(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, R = 0, C1, r1, e1, n1, t1, l1, o1;
    function s1() {
    }
    s1.__reactDisabledLog = !0;
    function O1() {
      {
        if (R === 0) {
          C1 = console.log, r1 = console.info, e1 = console.warn, n1 = console.error, t1 = console.group, l1 = console.groupCollapsed, o1 = console.groupEnd;
          var C = {
            configurable: !0,
            enumerable: !0,
            value: s1,
            writable: !0
          };
          Object.defineProperties(console, {
            info: C,
            log: C,
            warn: C,
            error: C,
            group: C,
            groupCollapsed: C,
            groupEnd: C
          });
        }
        R++;
      }
    }
    function P1() {
      {
        if (R--, R === 0) {
          var C = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, C, {
              value: C1
            }),
            info: M({}, C, {
              value: r1
            }),
            warn: M({}, C, {
              value: e1
            }),
            error: M({}, C, {
              value: n1
            }),
            group: M({}, C, {
              value: t1
            }),
            groupCollapsed: M({}, C, {
              value: l1
            }),
            groupEnd: M({}, C, {
              value: o1
            })
          });
        }
        R < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = m.ReactCurrentDispatcher, $;
    function k(C, t, l) {
      {
        if ($ === void 0)
          try {
            throw Error();
          } catch (a) {
            var o = a.stack.trim().match(/\n( *(at )?)/);
            $ = o && o[1] || "";
          }
        return `
` + $ + C;
      }
    }
    var N = !1, F;
    {
      var k1 = typeof WeakMap == "function" ? WeakMap : Map;
      F = new k1();
    }
    function i1(C, t) {
      if (!C || N)
        return "";
      {
        var l = F.get(C);
        if (l !== void 0)
          return l;
      }
      var o;
      N = !0;
      var a = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = Y.current, Y.current = null, O1();
      try {
        if (t) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (g) {
              o = g;
            }
            Reflect.construct(C, [], i);
          } else {
            try {
              i.call();
            } catch (g) {
              o = g;
            }
            C.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (g) {
            o = g;
          }
          C();
        }
      } catch (g) {
        if (g && o && typeof g.stack == "string") {
          for (var s = g.stack.split(`
`), w = o.stack.split(`
`), c = s.length - 1, f = w.length - 1; c >= 1 && f >= 0 && s[c] !== w[f]; )
            f--;
          for (; c >= 1 && f >= 0; c--, f--)
            if (s[c] !== w[f]) {
              if (c !== 1 || f !== 1)
                do
                  if (c--, f--, f < 0 || s[c] !== w[f]) {
                    var h = `
` + s[c].replace(" at new ", " at ");
                    return C.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", C.displayName)), typeof C == "function" && F.set(C, h), h;
                  }
                while (c >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        N = !1, Y.current = u, P1(), Error.prepareStackTrace = a;
      }
      var E = C ? C.displayName || C.name : "", V1 = E ? k(E) : "";
      return typeof C == "function" && F.set(C, V1), V1;
    }
    function F1(C, t, l) {
      return i1(C, !1);
    }
    function D1(C) {
      var t = C.prototype;
      return !!(t && t.isReactComponent);
    }
    function D(C, t, l) {
      if (C == null)
        return "";
      if (typeof C == "function")
        return i1(C, D1(C));
      if (typeof C == "string")
        return k(C);
      switch (C) {
        case j:
          return k("Suspense");
        case x:
          return k("SuspenseList");
      }
      if (typeof C == "object")
        switch (C.$$typeof) {
          case d:
            return F1(C.render);
          case p:
            return D(C.type, t, l);
          case H: {
            var o = C, a = o._payload, u = o._init;
            try {
              return D(u(a), t, l);
            } catch {
            }
          }
        }
      return "";
    }
    var A = Object.prototype.hasOwnProperty, a1 = {}, u1 = m.ReactDebugCurrentFrame;
    function I(C) {
      if (C) {
        var t = C._owner, l = D(C.type, C._source, t ? t.type : null);
        u1.setExtraStackFrame(l);
      } else
        u1.setExtraStackFrame(null);
    }
    function A1(C, t, l, o, a) {
      {
        var u = Function.call.bind(A);
        for (var i in C)
          if (u(C, i)) {
            var s = void 0;
            try {
              if (typeof C[i] != "function") {
                var w = Error((o || "React class") + ": " + l + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof C[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              s = C[i](t, i, o, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              s = c;
            }
            s && !(s instanceof Error) && (I(a), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", l, i, typeof s), I(null)), s instanceof Error && !(s.message in a1) && (a1[s.message] = !0, I(a), v("Failed %s type: %s", l, s.message), I(null));
          }
      }
    }
    var I1 = Array.isArray;
    function U(C) {
      return I1(C);
    }
    function W1(C) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, l = t && C[Symbol.toStringTag] || C.constructor.name || "Object";
        return l;
      }
    }
    function Y1(C) {
      try {
        return c1(C), !1;
      } catch {
        return !0;
      }
    }
    function c1(C) {
      return "" + C;
    }
    function f1(C) {
      if (Y1(C))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", W1(C)), c1(C);
    }
    var _ = m.ReactCurrentOwner, $1 = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, d1, v1, q;
    q = {};
    function N1(C) {
      if (A.call(C, "ref")) {
        var t = Object.getOwnPropertyDescriptor(C, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return C.ref !== void 0;
    }
    function U1(C) {
      if (A.call(C, "key")) {
        var t = Object.getOwnPropertyDescriptor(C, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return C.key !== void 0;
    }
    function q1(C, t) {
      if (typeof C.ref == "string" && _.current && t && _.current.stateNode !== t) {
        var l = L(_.current.type);
        q[l] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(_.current.type), C.ref), q[l] = !0);
      }
    }
    function G1(C, t) {
      {
        var l = function() {
          d1 || (d1 = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        l.isReactWarning = !0, Object.defineProperty(C, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function J1(C, t) {
      {
        var l = function() {
          v1 || (v1 = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        l.isReactWarning = !0, Object.defineProperty(C, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var z1 = function(C, t, l, o, a, u, i) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: C,
        key: t,
        ref: l,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(s, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function K1(C, t, l, o, a) {
      {
        var u, i = {}, s = null, w = null;
        l !== void 0 && (f1(l), s = "" + l), U1(t) && (f1(t.key), s = "" + t.key), N1(t) && (w = t.ref, q1(t, a));
        for (u in t)
          A.call(t, u) && !$1.hasOwnProperty(u) && (i[u] = t[u]);
        if (C && C.defaultProps) {
          var c = C.defaultProps;
          for (u in c)
            i[u] === void 0 && (i[u] = c[u]);
        }
        if (s || w) {
          var f = typeof C == "function" ? C.displayName || C.name || "Unknown" : C;
          s && G1(i, f), w && J1(i, f);
        }
        return z1(C, s, w, a, o, _.current, i);
      }
    }
    var G = m.ReactCurrentOwner, w1 = m.ReactDebugCurrentFrame;
    function b(C) {
      if (C) {
        var t = C._owner, l = D(C.type, C._source, t ? t.type : null);
        w1.setExtraStackFrame(l);
      } else
        w1.setExtraStackFrame(null);
    }
    var J;
    J = !1;
    function z(C) {
      return typeof C == "object" && C !== null && C.$$typeof === n;
    }
    function x1() {
      {
        if (G.current) {
          var C = L(G.current.type);
          if (C)
            return `

Check the render method of \`` + C + "`.";
        }
        return "";
      }
    }
    function X1(C) {
      {
        if (C !== void 0) {
          var t = C.fileName.replace(/^.*[\\\/]/, ""), l = C.lineNumber;
          return `

Check your code at ` + t + ":" + l + ".";
        }
        return "";
      }
    }
    var h1 = {};
    function Q1(C) {
      {
        var t = x1();
        if (!t) {
          var l = typeof C == "string" ? C : C.displayName || C.name;
          l && (t = `

Check the top-level render call using <` + l + ">.");
        }
        return t;
      }
    }
    function p1(C, t) {
      {
        if (!C._store || C._store.validated || C.key != null)
          return;
        C._store.validated = !0;
        var l = Q1(t);
        if (h1[l])
          return;
        h1[l] = !0;
        var o = "";
        C && C._owner && C._owner !== G.current && (o = " It was passed a child from " + L(C._owner.type) + "."), b(C), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, o), b(null);
      }
    }
    function L1(C, t) {
      {
        if (typeof C != "object")
          return;
        if (U(C))
          for (var l = 0; l < C.length; l++) {
            var o = C[l];
            z(o) && p1(o, t);
          }
        else if (z(C))
          C._store && (C._store.validated = !0);
        else if (C) {
          var a = m1(C);
          if (typeof a == "function" && a !== C.entries)
            for (var u = a.call(C), i; !(i = u.next()).done; )
              z(i.value) && p1(i.value, t);
        }
      }
    }
    function C2(C) {
      {
        var t = C.type;
        if (t == null || typeof t == "string")
          return;
        var l;
        if (typeof t == "function")
          l = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === p))
          l = t.propTypes;
        else
          return;
        if (l) {
          var o = L(t);
          A1(l, C.props, "prop", o, C);
        } else if (t.PropTypes !== void 0 && !J) {
          J = !0;
          var a = L(t);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", a || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function r2(C) {
      {
        for (var t = Object.keys(C.props), l = 0; l < t.length; l++) {
          var o = t[l];
          if (o !== "children" && o !== "key") {
            b(C), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), b(null);
            break;
          }
        }
        C.ref !== null && (b(C), v("Invalid attribute `ref` supplied to `React.Fragment`."), b(null));
      }
    }
    function g1(C, t, l, o, a, u) {
      {
        var i = S1(C);
        if (!i) {
          var s = "";
          (C === void 0 || typeof C == "object" && C !== null && Object.keys(C).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = X1(a);
          w ? s += w : s += x1();
          var c;
          C === null ? c = "null" : U(C) ? c = "array" : C !== void 0 && C.$$typeof === n ? (c = "<" + (L(C.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : c = typeof C, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, s);
        }
        var f = K1(C, t, l, a, u);
        if (f == null)
          return f;
        if (i) {
          var h = t.children;
          if (h !== void 0)
            if (o)
              if (U(h)) {
                for (var E = 0; E < h.length; E++)
                  L1(h[E], C);
                Object.freeze && Object.freeze(h);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              L1(h, C);
        }
        return C === Z ? r2(f) : C2(f), f;
      }
    }
    function e2(C, t, l) {
      return g1(C, t, l, !0);
    }
    function n2(C, t, l) {
      return g1(C, t, l, !1);
    }
    var t2 = n2, l2 = e2;
    S.Fragment = Z, S.jsx = t2, S.jsxs = l2;
  }()), S;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = s2() : e.exports = i2();
})(o2);
const u2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M9 19.5V8.5C9 8.35417 8.95312 8.23438 8.85938 8.14062C8.76562 8.04688 8.64583 8 8.5 8H7.5C7.35417 8 7.23438 8.04688 7.14062 8.14062C7.04688 8.23438 7 8.35417 7 8.5V19.5C7 19.6458 7.04688 19.7656 7.14062 19.8594C7.23438 19.9531 7.35417 20 7.5 20H8.5C8.64583 20 8.76562 19.9531 8.85938 19.8594C8.95312 19.7656 9 19.6458 9 19.5ZM13 19.5V8.5C13 8.35417 12.9531 8.23438 12.8594 8.14062C12.7656 8.04688 12.6458 8 12.5 8H11.5C11.3542 8 11.2344 8.04688 11.1406 8.14062C11.0469 8.23438 11 8.35417 11 8.5V19.5C11 19.6458 11.0469 19.7656 11.1406 19.8594C11.2344 19.9531 11.3542 20 11.5 20H12.5C12.6458 20 12.7656 19.9531 12.8594 19.8594C12.9531 19.7656 13 19.6458 13 19.5ZM17 19.5V8.5C17 8.35417 16.9531 8.23438 16.8594 8.14062C16.7656 8.04688 16.6458 8 16.5 8H15.5C15.3542 8 15.2344 8.04688 15.1406 8.14062C15.0469 8.23438 15 8.35417 15 8.5V19.5C15 19.6458 15.0469 19.7656 15.1406 19.8594C15.2344 19.9531 15.3542 20 15.5 20H16.5C16.6458 20 16.7656 19.9531 16.8594 19.8594C16.9531 19.7656 17 19.6458 17 19.5ZM8.5 4H15.5L14.75 2.17188C14.6771 2.07812 14.5885 2.02083 14.4844 2H9.53125C9.42708 2.02083 9.33854 2.07812 9.26562 2.17188L8.5 4ZM23 4.5V5.5C23 5.64583 22.9531 5.76562 22.8594 5.85938C22.7656 5.95312 22.6458 6 22.5 6H21V20.8125C21 21.6771 20.7552 22.4245 20.2656 23.0547C19.776 23.6849 19.1875 24 18.5 24H5.5C4.8125 24 4.22396 23.6953 3.73438 23.0859C3.24479 22.4766 3 21.7396 3 20.875V6H1.5C1.35417 6 1.23438 5.95312 1.14062 5.85938C1.04688 5.76562 1 5.64583 1 5.5V4.5C1 4.35417 1.04688 4.23438 1.14062 4.14062C1.23438 4.04688 1.35417 4 1.5 4H6.32812L7.42188 1.39062C7.57812 1.00521 7.85938 0.677083 8.26562 0.40625C8.67188 0.135417 9.08333 0 9.5 0H14.5C14.9167 0 15.3281 0.135417 15.7344 0.40625C16.1406 0.677083 16.4219 1.00521 16.5781 1.39062L17.6719 4H22.5C22.6458 4 22.7656 4.04688 22.8594 4.14062C22.9531 4.23438 23 4.35417 23 4.5Z",
        fill: "currentColor"
      }
    )
  }
), c2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M9 9.5V18.5C9 18.6458 8.95312 18.7656 8.85938 18.8594C8.76562 18.9531 8.64583 19 8.5 19H7.5C7.35417 19 7.23438 18.9531 7.14062 18.8594C7.04688 18.7656 7 18.6458 7 18.5V9.5C7 9.35417 7.04688 9.23438 7.14062 9.14062C7.23438 9.04688 7.35417 9 7.5 9H8.5C8.64583 9 8.76562 9.04688 8.85938 9.14062C8.95312 9.23438 9 9.35417 9 9.5ZM13 9.5V18.5C13 18.6458 12.9531 18.7656 12.8594 18.8594C12.7656 18.9531 12.6458 19 12.5 19H11.5C11.3542 19 11.2344 18.9531 11.1406 18.8594C11.0469 18.7656 11 18.6458 11 18.5V9.5C11 9.35417 11.0469 9.23438 11.1406 9.14062C11.2344 9.04688 11.3542 9 11.5 9H12.5C12.6458 9 12.7656 9.04688 12.8594 9.14062C12.9531 9.23438 13 9.35417 13 9.5ZM17 9.5V18.5C17 18.6458 16.9531 18.7656 16.8594 18.8594C16.7656 18.9531 16.6458 19 16.5 19H15.5C15.3542 19 15.2344 18.9531 15.1406 18.8594C15.0469 18.7656 15 18.6458 15 18.5V9.5C15 9.35417 15.0469 9.23438 15.1406 9.14062C15.2344 9.04688 15.3542 9 15.5 9H16.5C16.6458 9 16.7656 9.04688 16.8594 9.14062C16.9531 9.23438 17 9.35417 17 9.5ZM19 20.8125V6H5V20.8125C5 21.0417 5.03646 21.2526 5.10938 21.4453C5.18229 21.638 5.25781 21.7786 5.33594 21.8672C5.41406 21.9557 5.46875 22 5.5 22H18.5C18.5312 22 18.5859 21.9557 18.6641 21.8672C18.7422 21.7786 18.8177 21.638 18.8906 21.4453C18.9635 21.2526 19 21.0417 19 20.8125ZM8.5 4H15.5L14.75 2.17188C14.6771 2.07812 14.5885 2.02083 14.4844 2H9.53125C9.42708 2.02083 9.33854 2.07812 9.26562 2.17188L8.5 4ZM23 4.5V5.5C23 5.64583 22.9531 5.76562 22.8594 5.85938C22.7656 5.95312 22.6458 6 22.5 6H21V20.8125C21 21.6771 20.7552 22.4245 20.2656 23.0547C19.776 23.6849 19.1875 24 18.5 24H5.5C4.8125 24 4.22396 23.6953 3.73438 23.0859C3.24479 22.4766 3 21.7396 3 20.875V6H1.5C1.35417 6 1.23438 5.95312 1.14062 5.85938C1.04688 5.76562 1 5.64583 1 5.5V4.5C1 4.35417 1.04688 4.23438 1.14062 4.14062C1.23438 4.04688 1.35417 4 1.5 4H6.32812L7.42188 1.39062C7.57812 1.00521 7.85938 0.677083 8.26562 0.40625C8.67188 0.135417 9.08333 0 9.5 0H14.5C14.9167 0 15.3281 0.135417 15.7344 0.40625C16.1406 0.677083 16.4219 1.00521 16.5781 1.39062L17.6719 4H22.5C22.6458 4 22.7656 4.04688 22.8594 4.14062C22.9531 4.23438 23 4.35417 23 4.5Z",
        fill: "currentColor"
      }
    )
  }
), f2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M12 0C5.37333 0 0 5.37333 0 12C0 18.6267 5.37333 24 12 24C18.6267 24 24 18.6267 24 12C24 11.3867 23.9467 10.7733 23.8667 10.1867C22.56 12.0133 20.4267 13.2 18 13.2C14.0267 13.2 10.8 9.97333 10.8 6C10.8 3.58667 11.9867 1.44 13.8133 0.133333C13.2267 0.0533332 12.6133 0 12 0Z",
        fill: "currentColor"
      }
    )
  }
), d2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M8.49333 3.34667C8.25333 4.2 8.13333 5.09333 8.13333 6C8.13333 11.44 12.56 15.8667 18 15.8667C18.9067 15.8667 19.8 15.7467 20.6533 15.5067C19.2667 18.92 15.9067 21.3333 12 21.3333C6.85333 21.3333 2.66667 17.1467 2.66667 12C2.66667 8.09333 5.08 4.73333 8.49333 3.34667ZM12 0C5.37333 0 0 5.37333 0 12C0 18.6267 5.37333 24 12 24C18.6267 24 24 18.6267 24 12C24 11.3867 23.9467 10.7733 23.8667 10.1867C22.56 12.0133 20.4267 13.2 18 13.2C14.0267 13.2 10.8 9.97333 10.8 6C10.8 3.58667 11.9867 1.44 13.8133 0.133333C13.2267 0.0533332 12.6133 0 12 0Z",
        fill: "currentColor"
      }
    )
  }
), v2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M12 8.72727C13.8 8.72727 15.2727 10.2 15.2727 12C15.2727 13.8 13.8 15.2727 12 15.2727C10.2 15.2727 8.72727 13.8 8.72727 12C8.72727 10.2 10.2 8.72727 12 8.72727ZM12 6.54545C8.98909 6.54545 6.54545 8.98909 6.54545 12C6.54545 15.0109 8.98909 17.4545 12 17.4545C15.0109 17.4545 17.4545 15.0109 17.4545 12C17.4545 8.98909 15.0109 6.54545 12 6.54545ZM1.09091 13.0909H3.27273C3.87273 13.0909 4.36364 12.6 4.36364 12C4.36364 11.4 3.87273 10.9091 3.27273 10.9091H1.09091C0.490909 10.9091 0 11.4 0 12C0 12.6 0.490909 13.0909 1.09091 13.0909ZM20.7273 13.0909H22.9091C23.5091 13.0909 24 12.6 24 12C24 11.4 23.5091 10.9091 22.9091 10.9091H20.7273C20.1273 10.9091 19.6364 11.4 19.6364 12C19.6364 12.6 20.1273 13.0909 20.7273 13.0909ZM10.9091 1.09091V3.27273C10.9091 3.87273 11.4 4.36364 12 4.36364C12.6 4.36364 13.0909 3.87273 13.0909 3.27273V1.09091C13.0909 0.490909 12.6 0 12 0C11.4 0 10.9091 0.490909 10.9091 1.09091ZM10.9091 20.7273V22.9091C10.9091 23.5091 11.4 24 12 24C12.6 24 13.0909 23.5091 13.0909 22.9091V20.7273C13.0909 20.1273 12.6 19.6364 12 19.6364C11.4 19.6364 10.9091 20.1273 10.9091 20.7273ZM5.44364 3.90545C5.01818 3.48 4.32 3.48 3.90545 3.90545C3.48 4.33091 3.48 5.02909 3.90545 5.44364L5.06182 6.6C5.48727 7.02545 6.18545 7.02545 6.6 6.6C7.01455 6.17455 7.02545 5.47636 6.6 5.06182L5.44364 3.90545ZM18.9382 17.4C18.5127 16.9745 17.8145 16.9745 17.4 17.4C16.9745 17.8255 16.9745 18.5236 17.4 18.9382L18.5564 20.0945C18.9818 20.52 19.68 20.52 20.0945 20.0945C20.52 19.6691 20.52 18.9709 20.0945 18.5564L18.9382 17.4ZM20.0945 5.44364C20.52 5.01818 20.52 4.32 20.0945 3.90545C19.6691 3.48 18.9709 3.48 18.5564 3.90545L17.4 5.06182C16.9745 5.48727 16.9745 6.18545 17.4 6.6C17.8255 7.01455 18.5236 7.02545 18.9382 6.6L20.0945 5.44364ZM6.6 18.9382C7.02545 18.5127 7.02545 17.8145 6.6 17.4C6.17455 16.9745 5.47636 16.9745 5.06182 17.4L3.90545 18.5564C3.48 18.9818 3.48 19.68 3.90545 20.0945C4.33091 20.5091 5.02909 20.52 5.44364 20.0945L6.6 18.9382Z",
        fill: "currentColor"
      }
    )
  }
), w2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M12 6.54545C8.98909 6.54545 6.54545 8.98909 6.54545 12C6.54545 15.0109 8.98909 17.4545 12 17.4545C15.0109 17.4545 17.4545 15.0109 17.4545 12C17.4545 8.98909 15.0109 6.54545 12 6.54545ZM1.09091 13.0909H3.27273C3.87273 13.0909 4.36364 12.6 4.36364 12C4.36364 11.4 3.87273 10.9091 3.27273 10.9091H1.09091C0.490909 10.9091 0 11.4 0 12C0 12.6 0.490909 13.0909 1.09091 13.0909ZM20.7273 13.0909H22.9091C23.5091 13.0909 24 12.6 24 12C24 11.4 23.5091 10.9091 22.9091 10.9091H20.7273C20.1273 10.9091 19.6364 11.4 19.6364 12C19.6364 12.6 20.1273 13.0909 20.7273 13.0909ZM10.9091 1.09091V3.27273C10.9091 3.87273 11.4 4.36364 12 4.36364C12.6 4.36364 13.0909 3.87273 13.0909 3.27273V1.09091C13.0909 0.490909 12.6 0 12 0C11.4 0 10.9091 0.490909 10.9091 1.09091ZM10.9091 20.7273V22.9091C10.9091 23.5091 11.4 24 12 24C12.6 24 13.0909 23.5091 13.0909 22.9091V20.7273C13.0909 20.1273 12.6 19.6364 12 19.6364C11.4 19.6364 10.9091 20.1273 10.9091 20.7273ZM5.44364 3.90545C5.01818 3.48 4.32 3.48 3.90545 3.90545C3.48 4.33091 3.48 5.02909 3.90545 5.44364L5.06182 6.6C5.48727 7.02546 6.18546 7.02546 6.6 6.6C7.01455 6.17455 7.02546 5.47636 6.6 5.06182L5.44364 3.90545ZM18.9382 17.4C18.5127 16.9745 17.8145 16.9745 17.4 17.4C16.9745 17.8255 16.9745 18.5236 17.4 18.9382L18.5564 20.0945C18.9818 20.52 19.68 20.52 20.0945 20.0945C20.52 19.6691 20.52 18.9709 20.0945 18.5564L18.9382 17.4ZM20.0945 5.44364C20.52 5.01818 20.52 4.32 20.0945 3.90545C19.6691 3.48 18.9709 3.48 18.5564 3.90545L17.4 5.06182C16.9745 5.48727 16.9745 6.18546 17.4 6.6C17.8255 7.01455 18.5236 7.02546 18.9382 6.6L20.0945 5.44364ZM6.6 18.9382C7.02546 18.5127 7.02546 17.8145 6.6 17.4C6.17455 16.9745 5.47636 16.9745 5.06182 17.4L3.90545 18.5564C3.48 18.9818 3.48 19.68 3.90545 20.0945C4.33091 20.5091 5.02909 20.52 5.44364 20.0945L6.6 18.9382Z",
        fill: "currentColor"
      }
    )
  }
), x2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M12 14.4C11.6537 14.4 11.3632 14.2848 11.1286 14.0544C10.8939 13.824 10.777 13.5392 10.7778 13.2C10.7778 12.86 10.8951 12.5748 11.1298 12.3444C11.3644 12.114 11.6545 11.9992 12 12C12.3463 12 12.6368 12.1152 12.8714 12.3456C13.1061 12.576 13.223 12.8608 13.2222 13.2C13.2222 13.54 13.1049 13.8252 12.8702 14.0556C12.6356 14.286 12.3455 14.4008 12 14.4ZM7.11111 14.4C6.76482 14.4 6.47433 14.2848 6.23967 14.0544C6.005 13.824 5.88808 13.5392 5.88889 13.2C5.88889 12.86 6.00622 12.5748 6.24089 12.3444C6.47556 12.114 6.76563 11.9992 7.11111 12C7.45741 12 7.74789 12.1152 7.98256 12.3456C8.21722 12.576 8.33415 12.8608 8.33333 13.2C8.33333 13.54 8.216 13.8252 7.98133 14.0556C7.74667 14.286 7.45659 14.4008 7.11111 14.4ZM16.8889 14.4C16.5426 14.4 16.2521 14.2848 16.0174 14.0544C15.7828 13.824 15.6659 13.5392 15.6667 13.2C15.6667 12.86 15.784 12.5748 16.0187 12.3444C16.2533 12.114 16.5434 11.9992 16.8889 12C17.2352 12 17.5257 12.1152 17.7603 12.3456C17.995 12.576 18.1119 12.8608 18.1111 13.2C18.1111 13.54 17.9938 13.8252 17.7591 14.0556C17.5244 14.286 17.2344 14.4008 16.8889 14.4ZM12 19.2C11.6537 19.2 11.3632 19.0848 11.1286 18.8544C10.8939 18.624 10.777 18.3392 10.7778 18C10.7778 17.66 10.8951 17.3748 11.1298 17.1444C11.3644 16.914 11.6545 16.7992 12 16.8C12.3463 16.8 12.6368 16.9152 12.8714 17.1456C13.1061 17.376 13.223 17.6608 13.2222 18C13.2222 18.34 13.1049 18.6252 12.8702 18.8556C12.6356 19.086 12.3455 19.2008 12 19.2ZM7.11111 19.2C6.76482 19.2 6.47433 19.0848 6.23967 18.8544C6.005 18.624 5.88808 18.3392 5.88889 18C5.88889 17.66 6.00622 17.3748 6.24089 17.1444C6.47556 16.914 6.76563 16.7992 7.11111 16.8C7.45741 16.8 7.74789 16.9152 7.98256 17.1456C8.21722 17.376 8.33415 17.6608 8.33333 18C8.33333 18.34 8.216 18.6252 7.98133 18.8556C7.74667 19.086 7.45659 19.2008 7.11111 19.2ZM16.8889 19.2C16.5426 19.2 16.2521 19.0848 16.0174 18.8544C15.7828 18.624 15.6659 18.3392 15.6667 18C15.6667 17.66 15.784 17.3748 16.0187 17.1444C16.2533 16.914 16.5434 16.7992 16.8889 16.8C17.2352 16.8 17.5257 16.9152 17.7603 17.1456C17.995 17.376 18.1119 17.6608 18.1111 18C18.1111 18.34 17.9938 18.6252 17.7591 18.8556C17.5244 19.086 17.2344 19.2008 16.8889 19.2ZM3.44445 24C2.77222 24 2.19656 23.7648 1.71745 23.2944C1.23834 22.824 0.999187 22.2592 1 21.6V4.8C1 4.14 1.23956 3.5748 1.71867 3.1044C2.19778 2.634 2.77304 2.3992 3.44445 2.4H4.66667V1.2C4.66667 0.860004 4.784 0.574804 5.01867 0.344404C5.25333 0.114004 5.54341 -0.000795848 5.88889 4.15225e-06C6.23519 4.15225e-06 6.52567 0.115204 6.76033 0.345604C6.995 0.576004 7.11193 0.860804 7.11111 1.2V2.4H16.8889V1.2C16.8889 0.860004 17.0062 0.574804 17.2409 0.344404C17.4756 0.114004 17.7656 -0.000795848 18.1111 4.15225e-06C18.4574 4.15225e-06 18.7479 0.115204 18.9826 0.345604C19.2172 0.576004 19.3341 0.860804 19.3333 1.2V2.4H20.5556C21.2278 2.4 21.8034 2.6352 22.2826 3.1056C22.7617 3.576 23.0008 4.1408 23 4.8V21.6C23 22.26 22.7604 22.8252 22.2813 23.2956C21.8022 23.766 21.227 24.0008 20.5556 24H3.44445ZM3.44445 21.6H20.5556V9.6H3.44445V21.6Z",
        fill: "currentColor"
      }
    )
  }
), h2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M3.65901 0.702944C3.23705 1.15303 3 1.76348 3 2.4V21.6C3 22.86 4.06875 24 5.25 24H18.75C19.9312 24 21 22.86 21 21.6V2.4C21 1.14 19.9312 0 18.75 0H17.625V8.4L14.8125 6.6L12 8.4V0H5.25C4.65326 0 4.08097 0.252856 3.65901 0.702944Z",
        fill: "currntColor"
      }
    )
  }
), p2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M12 0V7.8C12 8.27739 12.1778 8.73523 12.4943 9.07279C12.8107 9.41036 13.2399 9.6 13.6875 9.6H21V21.6C21 22.2365 20.7629 22.847 20.341 23.2971C19.919 23.7471 19.3467 24 18.75 24H5.25C4.65326 24 4.08097 23.7471 3.65901 23.2971C3.23705 22.847 3 22.2365 3 21.6V2.4C3 1.76348 3.23705 1.15303 3.65901 0.702944C4.08097 0.252856 4.65326 0 5.25 0H12ZM15.375 15.6H8.625C8.32663 15.6 8.04048 15.7264 7.82951 15.9515C7.61853 16.1765 7.5 16.4817 7.5 16.8C7.5 17.1183 7.61853 17.4235 7.82951 17.6485C8.04048 17.8736 8.32663 18 8.625 18H15.375C15.6734 18 15.9595 17.8736 16.1705 17.6485C16.3815 17.4235 16.5 17.1183 16.5 16.8C16.5 16.4817 16.3815 16.1765 16.1705 15.9515C15.9595 15.7264 15.6734 15.6 15.375 15.6ZM9.75 10.8H8.625C8.32663 10.8 8.04048 10.9264 7.82951 11.1515C7.61853 11.3765 7.5 11.6817 7.5 12C7.5 12.3183 7.61853 12.6235 7.82951 12.8485C8.04048 13.0736 8.32663 13.2 8.625 13.2H9.75C10.0484 13.2 10.3345 13.0736 10.5455 12.8485C10.7565 12.6235 10.875 12.3183 10.875 12C10.875 11.6817 10.7565 11.3765 10.5455 11.1515C10.3345 10.9264 10.0484 10.8 9.75 10.8ZM13.8947 0C14.3684 0 15.0671 0.37439 15.375 0.7032L20.3408 6C20.649 6.32847 21 7 21 7.5H13.8947V0Z",
        fill: "currentColor"
      }
    )
  }
), L2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M13.7843 0C14.3809 0.00013593 14.9531 0.253081 15.375 0.7032L20.3408 6C20.7627 6.44998 20.9999 7.06033 21 7.6968V21.6C21 22.2365 20.7629 22.847 20.341 23.2971C19.919 23.7471 19.3467 24 18.75 24H5.25C4.65326 24 4.08097 23.7471 3.65901 23.2971C3.23705 22.847 3 22.2365 3 21.6V2.4C3 1.76348 3.23705 1.15303 3.65901 0.702944C4.08097 0.252856 4.65326 0 5.25 0H13.7843ZM12 2H4.89474V22H19.1053V9.6H13.6875C13.2399 9.6 12.8107 9.41036 12.4943 9.07279C12.1778 8.73523 12 8.27739 12 7.8V2ZM15.375 15.6C15.6734 15.6 15.9595 15.7271 16.1705 15.9522C16.3815 16.1772 16.5 16.4817 16.5 16.8C16.5 17.1183 16.3815 17.4187 16.1705 17.6438C15.9595 17.8688 15.6734 18 15.375 18H8.625C8.32663 18 8.04048 17.8688 7.82951 17.6438C7.61853 17.4187 7.5 17.1183 7.5 16.8C7.5 16.4817 7.61853 16.1772 7.82951 15.9522C8.04048 15.7271 8.32663 15.6 8.625 15.6H15.375ZM9.75 10.8C10.0484 10.8 10.3345 10.9265 10.5455 11.1516C10.7565 11.3766 10.875 11.6817 10.875 12C10.875 12.3183 10.7565 12.6007 10.5455 12.8258C10.3345 13.0508 10.0484 13.2 9.75 13.2H8.625C8.32663 13.2 8.04048 13.0508 7.82951 12.8258C7.61853 12.6007 7.5 12.3183 7.5 12C7.5 11.6817 7.61853 11.3766 7.82951 11.1516C8.04048 10.9265 8.32663 10.8 8.625 10.8H9.75ZM13.8947 2.5V7.5H18.6316L13.8947 2.5Z",
        fill: "currentColor"
      }
    )
  }
), g2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M3 24C2.175 24 1.469 23.7065 0.882 23.1195C0.294 22.5315 0 21.825 0 21V15C0 14.175 0.294 13.4685 0.882 12.8805C1.469 12.2935 2.175 12 3 12C3.825 12 4.531 12.2935 5.118 12.8805C5.706 13.4685 6 14.175 6 15V21C6 21.825 5.706 22.5315 5.118 23.1195C4.531 23.7065 3.825 24 3 24ZM12 24C11.175 24 10.469 23.7065 9.882 23.1195C9.294 22.5315 9 21.825 9 21V3C9 2.175 9.294 1.469 9.882 0.882C10.469 0.294 11.175 0 12 0C12.825 0 13.5315 0.294 14.1195 0.882C14.7065 1.469 15 2.175 15 3V21C15 21.825 14.7065 22.5315 14.1195 23.1195C13.5315 23.7065 12.825 24 12 24ZM21 24C20.175 24 19.4685 23.7065 18.8805 23.1195C18.2935 22.5315 18 21.825 18 21V10.5C18 9.675 18.2935 8.9685 18.8805 8.3805C19.4685 7.7935 20.175 7.5 21 7.5C21.825 7.5 22.5315 7.7935 23.1195 8.3805C23.7065 8.9685 24 9.675 24 10.5V21C24 21.825 23.7065 22.5315 23.1195 23.1195C22.5315 23.7065 21.825 24 21 24Z",
        fill: "currentColor"
      }
    )
  }
), V2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsxs(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ r.jsx(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24ZM12 21.6C17.302 21.6 21.6 17.302 21.6 12C21.6 6.69806 17.302 2.4 12 2.4C6.69806 2.4 2.4 6.69806 2.4 12C2.4 17.302 6.69806 21.6 12 21.6ZM17.4967 12.9355C16.8802 12.6926 16.1833 12.9955 15.9404 13.6121C15.3599 15.0858 13.9686 16.2055 12 16.2055C10.0327 16.2055 8.64218 15.0875 8.06053 13.6146C7.81711 12.9982 7.12008 12.6958 6.50366 12.9391C5.88724 13.1826 5.58486 13.8796 5.82828 14.496C6.74766 16.8242 8.96306 18.6055 12 18.6055C15.039 18.6055 17.2555 16.8216 18.1734 14.4919C18.4163 13.8752 18.1134 13.1784 17.4967 12.9355ZM15.9 10.5C16.8941 10.5 17.7 9.69408 17.7 8.7C17.7 7.70588 16.8941 6.9 15.9 6.9C14.9059 6.9 14.1 7.70588 14.1 8.7C14.1 9.69408 14.9059 10.5 15.9 10.5ZM9.9 8.7C9.9 9.69408 9.09412 10.5 8.1 10.5C7.10588 10.5 6.3 9.69408 6.3 8.7C6.3 7.70588 7.10588 6.9 8.1 6.9C9.09412 6.9 9.9 7.70588 9.9 8.7Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M15.9404 13.6121C16.1833 12.9955 16.8802 12.6926 17.4967 12.9355C18.1134 13.1784 18.4163 13.8752 18.1734 14.4919C17.2555 16.8216 15.039 18.6055 12 18.6055C8.96306 18.6055 6.74766 16.8242 5.82828 14.496C5.58486 13.8796 5.88724 13.1826 6.50366 12.9391C7.12008 12.6958 7.81711 12.9982 8.06053 13.6146C8.64218 15.0875 10.0327 16.2055 12 16.2055C13.9686 16.2055 15.3599 15.0858 15.9404 13.6121Z",
          fill: "currentColor"
        }
      )
    ]
  }
), H2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M16 12C16 10.8958 15.6094 9.95312 14.8281 9.17188C14.0469 8.39062 13.1042 8 12 8C10.8958 8 9.95312 8.39062 9.17188 9.17188C8.39062 9.95312 8 10.8958 8 12C8 13.1042 8.39062 14.0469 9.17188 14.8281C9.95312 15.6094 10.8958 16 12 16C13.1042 16 14.0469 15.6094 14.8281 14.8281C15.6094 14.0469 16 13.1042 16 12ZM24 10.2969V13.7656C24 13.8906 23.9583 14.0104 23.875 14.125C23.7917 14.2396 23.6875 14.3073 23.5625 14.3281L20.6719 14.7656C20.474 15.3281 20.2708 15.8021 20.0625 16.1875C20.4271 16.7083 20.9844 17.4271 21.7344 18.3438C21.8385 18.4688 21.8906 18.599 21.8906 18.7344C21.8906 18.8698 21.8438 18.9896 21.75 19.0938C21.4688 19.4792 20.9531 20.0417 20.2031 20.7812C19.4531 21.5208 18.9635 21.8906 18.7344 21.8906C18.6094 21.8906 18.474 21.8438 18.3281 21.75L16.1719 20.0625C15.7135 20.3021 15.2396 20.5 14.75 20.6562C14.5833 22.0729 14.4323 23.0417 14.2969 23.5625C14.224 23.8542 14.0365 24 13.7344 24H10.2656C10.1198 24 9.99219 23.9557 9.88281 23.8672C9.77344 23.7786 9.71354 23.6667 9.70312 23.5312L9.26562 20.6562C8.75521 20.4896 8.28646 20.2969 7.85938 20.0781L5.65625 21.75C5.55208 21.8438 5.42188 21.8906 5.26562 21.8906C5.11979 21.8906 4.98958 21.8333 4.875 21.7188C3.5625 20.5312 2.70312 19.6562 2.29688 19.0938C2.22396 18.9896 2.1875 18.8698 2.1875 18.7344C2.1875 18.6094 2.22917 18.4896 2.3125 18.375C2.46875 18.1562 2.73438 17.8099 3.10938 17.3359C3.48438 16.862 3.76562 16.4948 3.95312 16.2344C3.67188 15.7135 3.45833 15.1979 3.3125 14.6875L0.453125 14.2656C0.317708 14.2448 0.208333 14.1797 0.125 14.0703C0.0416667 13.9609 0 13.8385 0 13.7031V10.2344C0 10.1094 0.0416667 9.98958 0.125 9.875C0.208333 9.76042 0.307292 9.69271 0.421875 9.67188L3.32812 9.23438C3.47396 8.75521 3.67708 8.27604 3.9375 7.79688C3.52083 7.20312 2.96354 6.48438 2.26562 5.64062C2.16146 5.51562 2.10938 5.39062 2.10938 5.26562C2.10938 5.16146 2.15625 5.04167 2.25 4.90625C2.52083 4.53125 3.03385 3.97135 3.78906 3.22656C4.54427 2.48177 5.03646 2.10938 5.26562 2.10938C5.40104 2.10938 5.53646 2.16146 5.67188 2.26562L7.82812 3.9375C8.28646 3.69792 8.76042 3.5 9.25 3.34375C9.41667 1.92708 9.56771 0.958333 9.70312 0.4375C9.77604 0.145833 9.96354 0 10.2656 0H13.7344C13.8802 0 14.0078 0.0442708 14.1172 0.132812C14.2266 0.221354 14.2865 0.333333 14.2969 0.46875L14.7344 3.34375C15.2448 3.51042 15.7135 3.70312 16.1406 3.92188L18.3594 2.25C18.4531 2.15625 18.5781 2.10938 18.7344 2.10938C18.8698 2.10938 19 2.16146 19.125 2.26562C20.4688 3.50521 21.3281 4.39062 21.7031 4.92188C21.776 5.00521 21.8125 5.11979 21.8125 5.26562C21.8125 5.39062 21.7708 5.51042 21.6875 5.625C21.5312 5.84375 21.2656 6.1901 20.8906 6.66406C20.5156 7.13802 20.2344 7.50521 20.0469 7.76562C20.3177 8.28646 20.5312 8.79688 20.6875 9.29688L23.5469 9.73438C23.6823 9.75521 23.7917 9.82031 23.875 9.92969C23.9583 10.0391 24 10.1615 24 10.2969Z",
        fill: "currentColor"
      }
    )
  }
), M2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M12 18C12.34 18 12.6252 17.8848 12.8556 17.6544C13.0852 17.4248 13.2 17.14 13.2 16.8V11.97C13.2 11.63 13.0852 11.35 12.8556 11.13C12.6252 10.91 12.34 10.8 12 10.8C11.66 10.8 11.3752 10.9148 11.1456 11.1444C10.9152 11.3748 10.8 11.66 10.8 12V16.83C10.8 17.17 10.9152 17.45 11.1456 17.67C11.3752 17.89 11.66 18 12 18ZM12 8.4C12.34 8.4 12.6252 8.2848 12.8556 8.0544C13.0852 7.8248 13.2 7.54 13.2 7.2C13.2 6.86 13.0852 6.5748 12.8556 6.3444C12.6252 6.1148 12.34 6 12 6C11.66 6 11.3752 6.1148 11.1456 6.3444C10.9152 6.5748 10.8 6.86 10.8 7.2C10.8 7.54 10.9152 7.8248 11.1456 8.0544C11.3752 8.2848 11.66 8.4 12 8.4ZM12 24C10.34 24 8.78 23.6848 7.32 23.0544C5.86 22.4248 4.59 21.57 3.51 20.49C2.43 19.41 1.5752 18.14 0.9456 16.68C0.3152 15.22 0 13.66 0 12C0 10.34 0.3152 8.78 0.9456 7.32C1.5752 5.86 2.43 4.59 3.51 3.51C4.59 2.43 5.86 1.5748 7.32 0.9444C8.78 0.3148 10.34 0 12 0C13.66 0 15.22 0.3148 16.68 0.9444C18.14 1.5748 19.41 2.43 20.49 3.51C21.57 4.59 22.4248 5.86 23.0544 7.32C23.6848 8.78 24 10.34 24 12C24 13.66 23.6848 15.22 23.0544 16.68C22.4248 18.14 21.57 19.41 20.49 20.49C19.41 21.57 18.14 22.4248 16.68 23.0544C15.22 23.6848 13.66 24 12 24Z",
        fill: "currentColor"
      }
    )
  }
), Z2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M12 23L11.5385 22.7223C11.0662 22.4445 0 15.7729 0 8.63467C0 4.97676 2.89908 2 6.46152 2C8.80884 2 10.8678 3.29216 12 5.2211C13.1322 3.29216 15.1912 2 17.5385 2C21.1009 2 24 4.97676 24 8.63467C24 15.7729 12.9338 22.4445 12.4615 22.7223L12 23Z",
        fill: "#F5523A"
      }
    )
  }
), j2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M9.38843 21.6791V15.0744H14.6058V21.6791C14.6058 22.4056 15.1927 23 15.9101 23H19.8231C20.5405 23 21.1275 22.4056 21.1275 21.6791V12.4326H23.3448C23.9448 12.4326 24.2318 11.6797 23.7753 11.2834L12.871 1.33684C12.3754 0.887721 11.6188 0.887721 11.1232 1.33684L0.218936 11.2834C-0.224539 11.6797 0.0493717 12.4326 0.649367 12.4326H2.86674V21.6791C2.86674 22.4056 3.45369 23 4.17108 23H8.08409C8.80148 23 9.38843 22.4056 9.38843 21.6791Z",
        fill: "currentColor"
      }
    )
  }
), m2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M17.7263 3.51397C16.9388 2.30407 16.0387 1.1764 15.0262 0.166188C14.6325 -0.233197 13.9688 0.142695 14.0813 0.706532C14.295 1.81071 14.52 3.26729 14.52 4.57116C14.52 6.99096 13.0012 8.95265 10.6837 8.95265C8.95125 8.95265 7.53375 7.86021 6.915 6.29792C6.8025 6.06298 6.7575 5.92202 6.69 5.6636C6.56625 5.17024 5.9475 5.01754 5.6775 5.45216C5.475 5.76932 5.28375 6.08648 5.10375 6.42713C3.765 8.82344 3 11.6191 3 14.6027C3 19.7947 7.0275 24 12 24C16.9725 24 21 19.7947 21 14.6027C21 10.5032 19.785 6.6973 17.7263 3.51397ZM11.6738 20.476C9.67125 20.476 8.05125 18.8315 8.05125 16.7876C8.05125 14.8846 9.2325 13.5455 11.2125 13.1226C12.8663 12.7702 14.565 12.0302 15.7462 10.8673C16.0612 10.5619 16.5787 10.7028 16.6687 11.1375C16.9275 12.3356 17.0625 13.5808 17.0625 14.8376C17.0737 17.9505 14.655 20.476 11.6738 20.476Z",
        fill: "#FC9000"
      }
    )
  }
), b2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M20.5556 2.4H15.4467C14.9333 1.008 13.5889 0 12 0C10.4111 0 9.06667 1.008 8.55333 2.4H3.44444C2.1 2.4 1 3.48 1 4.8V21.6C1 22.92 2.1 24 3.44444 24H20.5556C21.9 24 23 22.92 23 21.6V4.8C23 3.48 21.9 2.4 20.5556 2.4ZM12 2.4C12.6722 2.4 13.2222 2.94 13.2222 3.6C13.2222 4.26 12.6722 4.8 12 4.8C11.3278 4.8 10.7778 4.26 10.7778 3.6C10.7778 2.94 11.3278 2.4 12 2.4ZM13.2222 19.2H7.11111C6.43889 19.2 5.88889 18.66 5.88889 18C5.88889 17.34 6.43889 16.8 7.11111 16.8H13.2222C13.8944 16.8 14.4444 17.34 14.4444 18C14.4444 18.66 13.8944 19.2 13.2222 19.2ZM16.8889 14.4H7.11111C6.43889 14.4 5.88889 13.86 5.88889 13.2C5.88889 12.54 6.43889 12 7.11111 12H16.8889C17.5611 12 18.1111 12.54 18.1111 13.2C18.1111 13.86 17.5611 14.4 16.8889 14.4ZM16.8889 9.6H7.11111C6.43889 9.6 5.88889 9.06 5.88889 8.4C5.88889 7.74 6.43889 7.2 7.11111 7.2H16.8889C17.5611 7.2 18.1111 7.74 18.1111 8.4C18.1111 9.06 17.5611 9.6 16.8889 9.6Z",
        fill: "currentColor"
      }
    )
  }
), E2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M21.2758 5.79928C21.5013 5.88582 21.7438 5.9375 22 5.9375C23.1046 5.9375 24 5.05607 24 3.96875C24 2.88143 23.1046 2 22 2C20.8954 2 20 2.88143 20 3.96875C20 4.06842 20.0154 4.16398 20.0296 4.25955L16.0571 7.38781C15.8321 7.30127 15.5892 7.24959 15.3329 7.24959C15.0767 7.24959 14.8342 7.30127 14.6087 7.38781L10.6371 4.25996C10.6517 4.16439 10.6667 4.06842 10.6667 3.96875C10.6667 2.88143 9.77125 2 8.66667 2C7.56208 2 6.66667 2.88143 6.66667 3.96875C6.66667 4.14389 6.6975 4.31082 6.74083 4.47242L2.51167 8.63551C2.3475 8.59285 2.17792 8.5625 2 8.5625C0.895417 8.5625 0 9.44393 0 10.5312C0 11.6186 0.895417 12.5 2 12.5C3.10458 12.5 4 11.6186 4 10.5312C4 10.3561 3.96917 10.1892 3.92583 10.0276L8.155 5.86449C8.31917 5.90715 8.48875 5.9375 8.66667 5.9375C8.92292 5.9375 9.16542 5.88582 9.39083 5.79928L13.3633 8.92754C13.3488 9.02311 13.3338 9.11908 13.3338 9.21875C13.3338 10.3061 14.2292 11.1875 15.3338 11.1875C16.4383 11.1875 17.3338 10.3061 17.3338 9.21875C17.3338 9.11908 17.3183 9.02352 17.3042 8.92795L21.2758 5.79928ZM16.6667 15.125H14C13.6317 15.125 13.3333 15.4187 13.3333 15.7812V22.3438C13.3333 22.7063 13.6317 23 14 23H16.6667C17.035 23 17.3333 22.7063 17.3333 22.3438V15.7812C17.3333 15.4187 17.035 15.125 16.6667 15.125ZM23.3333 9.875H20.6667C20.2983 9.875 20 10.1687 20 10.5312V22.3438C20 22.7063 20.2983 23 20.6667 23H23.3333C23.7017 23 24 22.7063 24 22.3438V10.5312C24 10.1687 23.7017 9.875 23.3333 9.875ZM10 9.875H7.33333C6.965 9.875 6.66667 10.1687 6.66667 10.5312V22.3438C6.66667 22.7063 6.965 23 7.33333 23H10C10.3683 23 10.6667 22.7063 10.6667 22.3438V10.5312C10.6667 10.1687 10.3683 9.875 10 9.875ZM3.33333 16.4375H0.666667C0.298333 16.4375 0 16.7312 0 17.0938V22.3438C0 22.7063 0.298333 23 0.666667 23H3.33333C3.70167 23 4 22.7063 4 22.3438V17.0938C4 16.7312 3.70167 16.4375 3.33333 16.4375Z",
        fill: "currentColor"
      }
    )
  }
), y2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M12 24C18.5646 24 24 18.5529 24 12C24 5.43529 18.5529 0 11.9882 0C5.43529 0 0 5.43529 0 12C0 18.5529 5.44705 24 12 24ZM12 22C6.44705 22 2.01176 17.5529 2.01176 12C2.01176 6.44705 6.43529 1.99999 11.9882 1.99999C17.5411 1.99999 21.9881 6.44705 22 12C22.0118 17.5529 17.5529 22 12 22ZM9.99998 17.8824C10.447 17.8824 10.7529 17.5646 10.7529 17.1058V15.9175H13.5059C13.847 15.9175 14.0706 15.6705 14.0706 15.3294C14.0706 15 13.847 14.753 13.5059 14.753H10.7529V13.6H12.7648C14.9647 13.6 16.3529 12.1412 16.3529 10.1059C16.3529 8.08235 14.9765 6.6 12.7765 6.6H9.98822C9.5294 6.6 9.22352 6.91764 9.22352 7.38822V12.447H8.17645C7.82352 12.447 7.59999 12.6941 7.59999 13.0236C7.59999 13.3529 7.82352 13.6117 8.17645 13.6117H9.22352V14.753H8.18822C7.84705 14.753 7.61175 15 7.61175 15.3294C7.61175 15.6705 7.84705 15.9175 8.18822 15.9175H9.22352V17.1058C9.22352 17.5646 9.55293 17.8824 9.99998 17.8824ZM10.7647 12.2235V8.01176H12.5058C14.0353 8.01176 14.8117 8.82351 14.8117 10.1176C14.8117 11.4235 14.0236 12.247 12.5058 12.247L10.7647 12.2235Z",
        fill: "currentColor"
      }
    )
  }
), R2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsxs(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M6.35715 2.71429H15.8571C17.7571 2.71429 18.7071 2.71429 19.4333 3.08345C20.0715 3.40902 20.5902 3.92827 20.9153 4.5668C21.2858 5.29288 21.2858 6.24289 21.2858 8.14289V17.643C21.2858 18.0029 21.4287 18.348 21.6832 18.6026C21.9378 18.8571 22.2829 19 22.6428 19C23.0027 19 23.348 18.8571 23.6024 18.6026C23.8571 18.348 24 18.0029 24 17.643V8.68575C24 5.64573 24 4.12574 23.4082 2.96401C22.8879 1.94261 22.0573 1.11218 21.036 0.591723C19.8742 -1.82008e-07 18.3544 0 15.3143 0H6.35715C5.9972 0 5.652 0.142989 5.39749 0.397495C5.14299 0.652021 5 0.997219 5 1.35715C5 1.71709 5.14299 2.06229 5.39749 2.31679C5.652 2.57132 5.9972 2.71429 6.35715 2.71429Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M5.36179 5C4.44893 4.99996 3.7531 4.99994 3.19773 5.04672C2.63368 5.09293 2.21784 5.18468 1.85703 5.36686L1.85281 5.36898C1.21384 5.69436 0.694386 6.21382 0.368996 6.85279L0.366858 6.857C0.184845 7.21755 0.0930742 7.63312 0.0455198 8.19746L0.0452548 8.20055C-4.00341e-05 8.75315 -1.9494e-05 9.44798 8.63195e-07 10.3631V18.6383C-1.9494e-05 19.5512 -3.99583e-05 20.247 0.0467409 20.8023C0.0929518 21.3664 0.184702 21.7821 0.366858 22.143L0.368996 22.1473C0.694386 22.7861 1.21384 23.3056 1.85281 23.6309L1.85703 23.6332C2.21757 23.8152 2.63315 23.907 3.19749 23.9544L3.20058 23.9548C3.7532 24 4.44803 24 5.36313 24H13.6383C14.5511 24 15.2468 24 15.8021 23.9534C16.3627 23.9074 16.7839 23.8162 17.1501 23.6283C17.7861 23.3034 18.3032 22.7863 18.6281 22.1504C18.816 21.7845 18.9074 21.3635 18.9546 20.8025L18.9548 20.7995C19.0002 20.2468 19 19.552 19 18.6369V10.4286C19 9.47801 18.9998 8.76577 18.9536 8.19958C18.9076 7.63837 18.8164 7.21692 18.6285 6.85055C18.3038 6.21323 17.7857 5.69489 17.1485 5.36961L17.143 5.36686C16.7825 5.18483 16.367 5.09306 15.8026 5.0455L15.7995 5.04524C15.2469 4.99994 14.5521 4.99996 13.637 5H5.36179ZM3.42431 7.75154C3.85132 7.71546 4.42932 7.71428 5.4286 7.71428H13.5715C14.5689 7.71428 15.1487 7.7154 15.5762 7.75034C15.7956 7.76888 15.902 7.79121 15.94 7.80092C16.0491 7.8626 16.1389 7.95332 16.1996 8.06298C16.2088 8.10001 16.2306 8.20473 16.2482 8.42057C16.2834 8.8505 16.2858 9.43302 16.2858 10.4286V18.5714C16.2858 19.5687 16.2847 20.1484 16.2497 20.5759C16.2313 20.794 16.2092 20.8994 16.1998 20.9365C16.1384 21.047 16.0473 21.138 15.9368 21.1997C15.8995 21.2088 15.7948 21.2306 15.5795 21.2481L15.5758 21.2485C15.1487 21.2846 14.5708 21.2858 13.5715 21.2858H5.4286C4.43142 21.2858 3.85169 21.2846 3.42415 21.2498C3.20398 21.231 3.09753 21.2086 3.05971 21.1991C2.95153 21.1382 2.8621 21.0488 2.80119 20.9405C2.79159 20.9027 2.76962 20.7968 2.75187 20.5794L2.75156 20.5757C2.71549 20.1486 2.71431 19.5707 2.71431 18.5714V10.4286C2.71431 9.43116 2.71541 8.85139 2.75034 8.42383C2.76895 8.20387 2.79136 8.09751 2.80101 8.0597C2.86188 7.9515 2.95127 7.86207 3.05941 7.80117C3.09737 7.79158 3.20315 7.76961 3.42058 7.75186L3.42431 7.75154ZM15.9571 7.80581L15.9525 7.8043C15.9557 7.80526 15.9572 7.80579 15.9571 7.80581ZM16.195 8.04674C16.195 8.04669 16.1954 8.04779 16.1961 8.05015L16.195 8.04674ZM16.1953 20.9525L16.1963 20.9493C16.1957 20.9515 16.1953 20.9525 16.1953 20.9525ZM15.9499 21.196L15.9533 21.195C15.9534 21.195 15.9523 21.1954 15.9499 21.196ZM3.04298 21.1942L3.04758 21.1956C3.04438 21.1948 3.04292 21.1942 3.04298 21.1942ZM2.80606 20.9576C2.80604 20.9578 2.80551 20.9562 2.80455 20.9529L2.80606 20.9576ZM2.80584 8.04297L2.80437 8.04743C2.80529 8.04431 2.8058 8.04291 2.80584 8.04297ZM3.04233 7.80605C3.04231 7.80603 3.04151 7.80632 3.04233 7.80605ZM18.6281 22.1504L18.6271 22.1524L17.4203 21.5313L18.6295 22.1477L18.6281 22.1504ZM17.1501 23.6283L17.1479 23.6293L16.5315 22.4203L17.1524 23.6271L17.1501 23.6283ZM15.8021 23.9534L15.69 22.6009L15.8042 23.9532L15.8021 23.9534Z",
          fill: "currentColor"
        }
      )
    ]
  }
), _2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M12.9231 21.649L22.1538 16.6154V7.44231L12.9231 10.8029V21.649ZM12 9.17308L22.0673 5.50962L12 1.84615L1.93269 5.50962L12 9.17308ZM24 5.53846V16.6154C24 16.9519 23.9135 17.2644 23.7404 17.5529C23.5673 17.8413 23.3317 18.0673 23.0337 18.2308L12.8798 23.7692C12.6106 23.9231 12.3173 24 12 24C11.6827 24 11.3894 23.9231 11.1202 23.7692L0.966346 18.2308C0.668269 18.0673 0.432692 17.8413 0.259615 17.5529C0.0865385 17.2644 0 16.9519 0 16.6154V5.53846C0 5.15385 0.110577 4.80288 0.331731 4.48558C0.552885 4.16827 0.846154 3.94231 1.21154 3.80769L11.3654 0.115385C11.5769 0.0384615 11.7885 0 12 0C12.2115 0 12.4231 0.0384615 12.6346 0.115385L22.7885 3.80769C23.1538 3.94231 23.4471 4.16827 23.6683 4.48558C23.8894 4.80288 24 5.15385 24 5.53846Z",
        fill: "currentColor"
      }
    )
  }
), B2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M7.70003 16.9124L7.68083 16.9089C7.42603 16.8612 7.16361 16.8675 6.91155 16.9274C6.65948 16.9872 6.42375 17.0992 6.2205 17.2557C5.57254 17.756 5.01336 18.1167 4.54418 18.3425C4.74326 17.8788 4.87842 17.3917 4.94617 16.8938C4.98368 16.599 4.95224 16.2998 4.85419 16.0184C4.75614 15.737 4.594 15.4806 4.37979 15.2683L4.189 15.081C2.88946 13.8743 2.1599 12.2907 2.1599 10.6105C2.1599 7.04993 5.45494 4.09444 9.59954 4.09444C13.7441 4.09444 17.0392 7.04993 17.0392 10.6105C17.0392 14.171 13.7441 17.1265 9.59954 17.1265C8.95993 17.1273 8.32242 17.0554 7.70003 16.9124V16.9124ZM2.0519 20.5579C4.2286 20.388 5.94452 19.8516 7.19966 18.9499C7.96762 19.1267 8.77158 19.221 9.59954 19.221C14.9009 19.221 19.1991 15.366 19.1991 10.6105C19.1991 5.85494 14.9009 2 9.59954 2C4.2982 2 0 5.85494 0 10.6105C0 13.0261 1.10875 15.209 2.89546 16.7728C2.7443 17.8268 2.27932 18.8151 1.55753 19.6166C1.48096 19.7023 1.43251 19.8082 1.41835 19.9208C1.4042 20.0334 1.42499 20.1475 1.47806 20.2486C1.53114 20.3496 1.61409 20.433 1.71631 20.4882C1.81853 20.5433 1.93537 20.5676 2.0519 20.5579V20.5579ZM17.8504 19.1593C16.3348 19.9436 14.2145 20.5021 11.1883 20.6021C12.5328 21.342 14.0534 21.7283 15.5993 21.7227C16.9195 21.7259 18.224 21.4449 19.4187 20.9C20.4614 21.5051 21.8018 21.8704 23.4433 21.9984C23.5452 22.0063 23.6472 21.9846 23.7363 21.9361C23.8255 21.8876 23.8978 21.8146 23.9441 21.7262C23.9904 21.6378 24.0085 21.5381 23.9963 21.4397C23.984 21.3413 23.9419 21.2486 23.8753 21.1735C23.1482 20.3633 22.7216 19.3405 22.6633 18.268C23.5308 17.0738 23.9972 15.6492 23.9989 14.1885C23.9989 11.6984 22.6513 9.48996 20.5766 8.11926C21.1334 9.20605 21.503 10.4336 21.6518 11.7927C21.8066 13.1971 21.7658 14.2548 21.5426 15.117C21.4022 15.7011 21.1562 16.269 20.8106 16.8019L20.7782 16.8543C20.6113 17.1302 20.5159 17.4414 20.5002 17.761C20.4845 18.0806 20.5491 18.3991 20.6882 18.6892C20.8238 18.9696 20.9954 19.2489 21.2042 19.527C20.825 19.4455 20.3762 19.2733 19.8627 19.0069C19.6071 18.8748 19.3225 18.8045 19.033 18.8019C18.7435 18.7992 18.4576 18.8644 18.1995 18.9917L18.0879 19.0464C18.0092 19.0849 17.93 19.1225 17.8504 19.1593V19.1593Z",
        fill: "currentColor"
      }
    )
  }
), S2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M23.841 11.3669C21.2318 6.46627 17.2874 4 12 4C6.70978 4 2.76826 6.46627 0.15894 11.3694C0.0542798 11.567 0 11.7828 0 12.0013C0 12.2198 0.0542798 12.4356 0.15894 12.6332C2.76826 17.5338 6.71254 20 12 20C17.2902 20 21.2318 17.5338 23.841 12.6307C24.053 12.2332 24.053 11.7718 23.841 11.3669ZM16 12C16 14.2092 14.2091 16 12 16C9.79086 16 8 14.2092 8 12C8 9.79089 9.79086 8.00002 12 8.00002C14.2091 8.00002 16 9.79089 16 12ZM18 12C18 15.3138 15.3137 18 12 18C8.6863 18 6 15.3138 6 12C6 8.68632 8.6863 6.00001 12 6.00001C15.3137 6.00001 18 8.68632 18 12Z",
        fill: "currentColor"
      }
    )
  }
), T2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M19.963 6.57302L23 3.536L21.464 2L3 20.464L4.536 22L7.30412 19.2318C8.72996 19.7436 10.2952 20 12 20C17.2902 20 21.2318 17.5338 23.841 12.6307C24.053 12.2331 24.053 11.7718 23.841 11.3669C22.7724 9.35989 21.48 7.76121 19.963 6.57302ZM17.3176 9.21835L15.7971 10.7389C15.9287 11.1353 16 11.5593 16 12C16 14.2091 14.2091 16 12 16C11.5594 16 11.1353 15.9287 10.7389 15.7971L9.21836 17.3176C10.0498 17.7534 10.9961 18 12 18C15.3137 18 18 15.3137 18 12C18 10.9961 17.7534 10.0498 17.3176 9.21835ZM12 4C13.5681 4 15.0181 4.21692 16.35 4.64992L14.4697 6.53026C13.7165 6.18962 12.8804 6 12 6C8.6863 6 6 8.68627 6 12C6 12.8804 6.18962 13.7165 6.53026 14.4697L3.78002 17.22C2.37356 16.0554 1.1667 14.5258 0.15894 12.6331C0.0542798 12.4355 0 12.2197 0 12.0012C0 11.7827 0.0542798 11.5669 0.15894 11.3693C2.76826 6.46626 6.70978 4 12 4ZM12 7.99999C12.309 7.99999 12.6098 8.03503 12.8987 8.10133L8.10134 12.8986C8.03504 12.6098 8 12.309 8 12C8 9.79085 9.79086 7.99999 12 7.99999Z",
        fill: "currentColor"
      }
    )
  }
), O2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M24 12C24 18.6276 18.6276 24 12 24C5.3724 24 0 18.6276 0 12C0 5.3724 5.3724 0 12 0C18.6276 0 24 5.3724 24 12ZM10.5 17.0916C10.5 16.224 11.16 15.6 11.9916 15.6C12.8412 15.6 13.5 16.224 13.5 17.0916C13.5 17.958 12.84 18.6 11.9916 18.6C11.7936 18.6025 11.5972 18.5651 11.4139 18.4898C11.2308 18.4147 11.0646 18.3035 10.9254 18.1626C10.7862 18.0218 10.6768 17.8544 10.6037 17.6705C10.5306 17.4864 10.4953 17.2896 10.5 17.0916ZM12.27 5.4C9.6816 5.4 7.74 6.8916 7.74 9.3V9.33C7.74 9.48913 7.80322 9.64176 7.91574 9.75432C8.02826 9.86676 8.18087 9.93 8.34 9.93H9.3036C9.5916 9.93 9.8256 9.696 9.8256 9.408C9.8256 8.0604 10.8672 7.3416 12.27 7.3416C13.6356 7.3416 14.5344 8.0604 14.5344 9.0852C14.5344 10.056 14.0304 10.5048 12.7728 11.0808L12.4128 11.2416C11.3532 11.7096 10.9572 12.4104 10.9572 13.6332V13.8C10.9572 13.9591 11.0204 14.1118 11.1329 14.2243C11.2454 14.3368 11.3981 14.4 11.5572 14.4H12.4428C12.6019 14.4 12.7546 14.3368 12.8671 14.2243C12.9796 14.1118 13.0428 13.9591 13.0428 13.8V13.7592C13.0428 13.2192 13.1868 13.0032 13.6188 12.8064L13.9776 12.6444C15.4872 11.9604 16.62 11.0628 16.62 9.1032V8.9952C16.62 6.9276 14.8224 5.4 12.27 5.4Z",
        fill: "currentColor"
      }
    )
  }
), P2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M24 12C24 18.6276 18.6276 24 12 24C5.3724 24 0 18.6276 0 12C0 5.3724 5.3724 0 12 0C18.6276 0 24 5.3724 24 12ZM21.6 12C21.6 14.546 20.5885 16.9879 18.7883 18.7883C16.9879 20.5885 14.546 21.6 12 21.6C9.45392 21.6 7.01213 20.5885 5.21178 18.7883C3.41142 16.9879 2.4 14.546 2.4 12C2.4 9.45392 3.18282 7.24074 5.21178 5.21178C7.24074 3.18282 9.45392 2.4 12 2.4C14.546 2.4 16.9879 3.41142 18.7883 5.21178C20.5885 7.01213 21.6 9.45392 21.6 12ZM10.5 17.0916C10.5 16.224 11.16 15.6 11.9916 15.6C12.8412 15.6 13.5 16.224 13.5 17.0916C13.5 17.958 12.84 18.6 11.9916 18.6C11.7936 18.6025 11.5972 18.5651 11.4139 18.4898C11.2308 18.4147 11.0646 18.3035 10.9254 18.1626C10.7862 18.0218 10.6768 17.8544 10.6037 17.6705C10.5306 17.4864 10.4953 17.2896 10.5 17.0916ZM12.27 5.4C9.6816 5.4 7.74 6.8916 7.74 9.3V9.33C7.74 9.48913 7.80322 9.64176 7.91574 9.75432C8.02826 9.86676 8.18087 9.93 8.34 9.93H9.3036C9.5916 9.93 9.8256 9.696 9.8256 9.408C9.8256 8.0604 10.8672 7.3416 12.27 7.3416C13.6356 7.3416 14.5344 8.0604 14.5344 9.0852C14.5344 10.056 14.0304 10.5048 12.7728 11.0808L12.4128 11.2416C11.3532 11.7096 10.9572 12.4104 10.9572 13.6332V13.8C10.9572 13.9591 11.0204 14.1118 11.1329 14.2243C11.2454 14.3368 11.3981 14.4 11.5572 14.4H12.4428C12.6019 14.4 12.7546 14.3368 12.8671 14.2243C12.9796 14.1118 13.0428 13.9591 13.0428 13.8V13.7592C13.0428 13.2192 13.1868 13.0032 13.6188 12.8064L13.9776 12.6444C15.4872 11.9604 16.62 11.0628 16.62 9.1032V8.9952C16.62 6.9276 14.8224 5.4 12.27 5.4Z",
        fill: "currentColor"
      }
    )
  }
), k2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsxs(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M19.0244 19.961L4.09556 17.3233C2.71657 17.0797 1.7958 15.7621 2.03894 14.3803C2.13199 13.8515 2.38984 13.3658 2.77546 12.9932L4.5914 11.2377C5.35334 10.5011 5.89273 9.56436 6.14788 8.5349L6.96917 5.22065C7.83839 1.71274 11.2695 -0.522234 14.8219 0.105406C18.3744 0.733059 20.8356 4.00911 20.4552 7.60336L20.0956 10.9991C19.984 12.054 20.1712 13.1191 20.6356 14.0724L21.7429 16.3443C21.978 16.8268 22.0545 17.3715 21.9615 17.9003C21.7184 19.282 20.4034 20.2047 19.0244 19.961Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M14.964 23.5378C15.5114 23.1489 15.8839 22.5554 16 21.8878L11.0383 21C10.9223 21.6677 11.0724 22.3547 11.4555 22.91C11.8388 23.4654 12.4237 23.8434 13.0817 23.9612C13.7397 24.0788 14.4167 23.9266 14.964 23.5378Z",
          fill: "currentColor"
        }
      )
    ]
  }
), F2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M12 0C5.37 0 0 5.50583 0 12.3035C0 17.7478 3.435 22.3463 8.205 23.9765C8.805 24.0842 9.03 23.715 9.03 23.3921C9.03 23.0999 9.015 22.131 9.015 21.1005C6 21.6696 5.22 20.347 4.98 19.6549C4.845 19.3012 4.26 18.2092 3.75 17.917C3.33 17.6863 2.73 17.1173 3.735 17.1019C4.68 17.0865 5.355 17.9939 5.58 18.363C6.66 20.2239 8.385 19.701 9.075 19.3781C9.18 18.5783 9.495 18.04 9.84 17.7325C7.17 17.4249 4.38 16.3637 4.38 11.6576C4.38 10.3196 4.845 9.21226 5.61 8.35102C5.49 8.04343 5.07 6.78232 5.73 5.09058C5.73 5.09058 6.735 4.76762 9.03 6.3517C9.99 6.07487 11.01 5.93645 12.03 5.93645C13.05 5.93645 14.07 6.07487 15.03 6.3517C17.325 4.75224 18.33 5.09058 18.33 5.09058C18.99 6.78232 18.57 8.04343 18.45 8.35102C19.215 9.21226 19.68 10.3042 19.68 11.6576C19.68 16.3791 16.875 17.4249 14.205 17.7325C14.64 18.1169 15.015 18.8552 15.015 20.0086C15.015 21.6542 15 22.9768 15 23.3921C15 23.715 15.225 24.0995 15.825 23.9765C18.2072 23.1519 20.2773 21.5822 21.7438 19.4882C23.2103 17.3942 23.9994 14.8814 24 12.3035C24 5.50583 18.63 0 12 0Z",
        fill: "currentColor"
      }
    )
  }
), D2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M8 10.9091H16V7.63636C16 6.43182 15.6094 5.40341 14.8281 4.55114C14.0469 3.69886 13.1042 3.27273 12 3.27273C10.8958 3.27273 9.95312 3.69886 9.17188 4.55114C8.39062 5.40341 8 6.43182 8 7.63636V10.9091ZM21 12.5455V22.3636C21 22.8182 20.8542 23.2045 20.5625 23.5227C20.2708 23.8409 19.9167 24 19.5 24H4.5C4.08333 24 3.72917 23.8409 3.4375 23.5227C3.14583 23.2045 3 22.8182 3 22.3636V12.5455C3 12.0909 3.14583 11.7045 3.4375 11.3864C3.72917 11.0682 4.08333 10.9091 4.5 10.9091H5V7.63636C5 5.54545 5.6875 3.75 7.0625 2.25C8.4375 0.75 10.0833 0 12 0C13.9167 0 15.5625 0.75 16.9375 2.25C18.3125 3.75 19 5.54545 19 7.63636V10.9091H19.5C19.9167 10.9091 20.2708 11.0682 20.5625 11.3864C20.8542 11.7045 21 12.0909 21 12.5455Z",
        fill: "currentColor"
      }
    )
  }
), A2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M19.5 12C19.9167 12 20.2708 12.1458 20.5625 12.4375C20.8542 12.7292 21 13.0833 21 13.5V22.5C21 22.9167 20.8542 23.2708 20.5625 23.5625C20.2708 23.8542 19.9167 24 19.5 24H4.5C4.08333 24 3.72917 23.8542 3.4375 23.5625C3.14583 23.2708 3 22.9167 3 22.5V13.5C3 13.0833 3.14583 12.7292 3.4375 12.4375C3.72917 12.1458 4.08333 12 4.5 12H5V7C5 5.07292 5.6849 3.42448 7.05469 2.05469C8.42448 0.684896 10.0729 0 12 0C13.9271 0 15.5755 0.684896 16.9453 2.05469C18.3151 3.42448 19 5.07292 19 7C19 7.27083 18.901 7.50521 18.7031 7.70312C18.5052 7.90104 18.2708 8 18 8H17C16.7292 8 16.4948 7.90104 16.2969 7.70312C16.099 7.50521 16 7.27083 16 7C16 5.89583 15.6094 4.95312 14.8281 4.17188C14.0469 3.39062 13.1042 3 12 3C10.8958 3 9.95312 3.39062 9.17188 4.17188C8.39062 4.95312 8 5.89583 8 7V12H19.5Z",
        fill: "currentColor"
      }
    )
  }
), I2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M21.6679 10.6349L11.4589 20.6933C10.9926 21.153 10.439 21.5176 9.82963 21.7664C9.22028 22.0151 8.56715 22.1432 7.90755 22.1432C7.24795 22.1432 6.59482 22.0151 5.98546 21.7664C5.37611 21.5176 4.82248 21.153 4.3562 20.6933C3.88966 20.2339 3.51957 19.6884 3.26707 19.0881C3.01457 18.4877 2.88461 17.8442 2.88461 17.1943C2.88461 16.5445 3.01457 15.901 3.26707 15.3006C3.51957 14.7002 3.88966 14.1548 4.3562 13.6954L15.4541 2.76239C16.0461 2.19904 16.839 1.88733 17.662 1.89437C18.485 1.90142 19.2723 2.22667 19.8543 2.80006C20.4362 3.37345 20.7663 4.14912 20.7735 4.95999C20.7807 5.77086 20.4643 6.55206 19.8925 7.13533L10.5712 16.3204C10.3352 16.5517 10.0158 16.6816 9.68291 16.6816C9.34998 16.6816 9.03059 16.5517 8.7946 16.3204C8.56014 16.0879 8.42854 15.7735 8.42854 15.4458C8.42854 15.1181 8.56014 14.8036 8.7946 14.5712L17.2294 6.26074L15.8986 4.94948L7.46371 13.2587C6.87922 13.8394 6.55203 14.6247 6.55373 15.4425C6.55543 16.2604 6.88588 17.0443 7.47277 17.6227C8.05967 18.2011 8.85521 18.5269 9.68531 18.5288C10.5154 18.5307 11.3125 18.2086 11.9021 17.6329L21.2246 8.44783C21.6912 7.98843 22.0613 7.44296 22.3138 6.8426C22.5663 6.24223 22.6962 5.59873 22.6962 4.94886C22.6962 4.29899 22.5663 3.65549 22.3138 3.05512C22.0613 2.45475 21.6912 1.90929 21.2246 1.44989C20.7584 0.990233 20.2047 0.625601 19.5954 0.376824C18.986 0.128047 18.3329 0 17.6733 0C17.0137 0 16.3606 0.128047 15.7512 0.376824C15.1418 0.625601 14.5882 0.990233 14.1219 1.44989L3.02405 12.3841C2.38239 13.0156 1.87336 13.7656 1.52606 14.5911C1.17876 15.4165 1 16.3014 1 17.1949C1 18.0885 1.17876 18.9734 1.52606 19.7988C1.87336 20.6243 2.38239 21.3743 3.02405 22.0058C3.66504 22.638 4.42621 23.1395 5.26404 23.4817C6.10188 23.8239 6.99995 24 7.90692 24C8.81389 24 9.71196 23.8239 10.5498 23.4817C11.3876 23.1395 12.1488 22.638 12.7898 22.0058L23 11.9462L21.6679 10.6349Z",
        fill: "currentColor"
      }
    )
  }
), W2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M13.6603 1.00407C7.64114 0.84077 2.70987 5.6115 2.70987 11.5021H0.593094C0.0609424 11.5021 -0.19922 12.1319 0.179198 12.4935L3.47854 15.7596C3.71505 15.9928 4.08164 15.9928 4.31815 15.7596L7.61749 12.4935C7.98408 12.1319 7.72392 11.5021 7.19177 11.5021H5.07499C5.07499 6.95291 8.83552 3.27863 13.4711 3.33695C17.8702 3.39527 21.5716 7.04622 21.6308 11.3854C21.6899 15.9462 17.9648 19.6671 13.3528 19.6671C11.4489 19.6671 9.68697 19.0256 8.29155 17.9408C7.81852 17.5792 7.15629 17.6142 6.73057 18.0341C6.2339 18.524 6.26937 19.3522 6.82518 19.7721C8.62266 21.1718 10.8813 22 13.3528 22C19.3248 22 24.1614 17.136 23.9959 11.1988C23.8421 5.72815 19.2065 1.15571 13.6603 1.00407ZM13.0572 6.83626C12.5724 6.83626 12.1703 7.23285 12.1703 7.71109V12.0036C12.1703 12.4119 12.395 12.7968 12.7497 13.0068L16.4393 15.1647C16.865 15.4096 17.409 15.2696 17.6574 14.8614C17.9057 14.4415 17.7638 13.9049 17.3499 13.66L13.9441 11.6654V7.69943C13.9441 7.23285 13.5421 6.83626 13.0572 6.83626Z",
        fill: "currentColor"
      }
    )
  }
), Y2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M22.8068 2.00009C22.9626 1.99805 23.117 2.03152 23.2592 2.09814C23.4013 2.16477 23.5277 2.26295 23.6296 2.3858C23.7476 2.49194 23.8418 2.62365 23.9058 2.77171C23.9697 2.91977 24.0019 3.08059 23.9999 3.24294V8.24291C24.0007 8.41136 23.9683 8.57817 23.9046 8.733C23.8409 8.88782 23.7473 9.02735 23.6296 9.14291C23.5231 9.25772 23.3951 9.34862 23.2536 9.41004C23.1121 9.47145 22.9601 9.50208 22.8068 9.50005H18.0068C17.6854 9.50134 17.3759 9.37341 17.1428 9.14291C16.9215 8.90009 16.7987 8.57771 16.8 8.24291V7.00006H7.20004V8.87148L10.3132 14.5H14.4C14.5558 14.498 14.7102 14.5315 14.8524 14.5981C14.9945 14.6647 15.1209 14.7629 15.2228 14.8857C15.3433 14.9905 15.4401 15.1216 15.5065 15.2698C15.5728 15.4179 15.6071 15.5794 15.6068 15.7429V20.7428C15.6071 20.9063 15.5728 21.0678 15.5065 21.216C15.4401 21.3641 15.3433 21.4952 15.2228 21.6C15.1222 21.7254 14.9964 21.8263 14.8542 21.8954C14.712 21.9646 14.5569 22.0003 14.4 22H9.60002C9.43832 22.0008 9.27817 21.967 9.12954 21.9007C8.98091 21.8343 8.84696 21.7368 8.73603 21.6143C8.62829 21.5021 8.54356 21.3682 8.48698 21.2209C8.4304 21.0736 8.40315 20.9158 8.40689 20.7571V16.0572L4.80006 9.50005H1.19323C0.876565 9.49769 0.572609 9.37002 0.342946 9.14291C0.121669 8.90009 -0.00114308 8.57771 9.12319e-05 8.24291V3.24294C-0.00186129 3.08327 0.0275455 2.92487 0.0865049 2.77747C0.145464 2.63007 0.232732 2.49679 0.342946 2.3858C0.453882 2.26324 0.587828 2.16576 0.73646 2.09941C0.885092 2.03305 1.04523 1.99925 1.20694 2.00009H6.0069C6.16275 1.99805 6.31715 2.03152 6.45928 2.09814C6.60142 2.16477 6.72786 2.26295 6.82976 2.3858C6.9477 2.49194 7.04194 2.62365 7.10591 2.77171C7.16987 2.91977 7.20199 3.08059 7.20004 3.24294V4.50007H16.8V3.24294C16.798 3.08327 16.8274 2.92487 16.8864 2.77747C16.9453 2.63007 17.0326 2.49679 17.1428 2.3858C17.2538 2.26324 17.3877 2.16576 17.5363 2.09941C17.685 2.03305 17.8451 1.99925 18.0068 2.00009H22.8068ZM5.38977 7.62863V3.87151H1.81036V7.64292H5.41719L5.38977 7.62863ZM10.1897 16.3714V20.1286H13.7966V16.3572H10.2172L10.1897 16.3714ZM22.2034 7.62863V3.87151H18.5828V7.64292H22.1896L22.2034 7.62863Z",
        fill: "currentColor"
      }
    )
  }
), $2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M12 0C5.37261 0 0 5.37256 0 12C0 18.6274 5.37261 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37261 18.6274 0 12 0ZM18.2955 5.70445C21.4624 8.87129 21.6826 13.7116 19.296 17.1062L6.89371 4.704C10.2907 2.31581 15.1305 2.5394 18.2955 5.70445ZM5.70445 18.2955C2.53761 15.1287 2.31735 10.2884 4.70395 6.89376L17.1063 19.296C13.7094 21.6842 8.86955 21.4606 5.70445 18.2955Z",
        fill: "currentColor"
      }
    )
  }
), N2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsxs(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ r.jsx("path", { d: "M6.70968 11L6 13.3436H7.41935L6.70968 11Z", fill: "white" }),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M21.6774 1H9.29032V4.78007H12.3871V6.2921H2.32258C1.00645 6.2921 0 7.27491 0 8.56014V16.8763C0 18.1615 1.00645 19.1443 2.32258 19.1443H3.09677V23L7.97419 19.1443H13.1613V13.8522H21.6774C22.9935 13.8522 24 12.8694 24 11.5842V3.26804C24 1.98282 22.9935 1 21.6774 1ZM8.36129 16.0447L7.97419 14.8351H5.57419L5.10968 16.0447H3.25161L5.80645 9.31615H7.66452L10.2194 16.0447H8.36129ZM20.129 10.0722V11.5842C19.1226 11.5842 18.0387 11.2818 17.1097 10.8282C16.1806 11.2818 15.0968 11.5086 14.0129 11.5842L13.9355 10.0722C14.4774 10.0722 15.0194 9.99656 15.5613 9.84536C14.8645 9.16495 14.4 8.33333 14.1677 7.42612H15.7935C16.0258 8.10653 16.4903 8.63574 17.0323 9.08935C17.8839 8.40894 18.4258 7.42612 18.5032 6.2921H13.8581V4.78007H16.1806V3.26804H17.729V4.78007H20.2839L20.3613 5.53608C20.4387 7.12371 19.8194 8.71134 18.6581 9.84536C19.2 9.99656 19.6645 10.0722 20.129 10.0722Z",
          fill: "currentColor"
        }
      )
    ]
  }
), U2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M7.09703 5.06931C7.09703 4.50957 6.89901 4.03168 6.50297 3.63564C6.10693 3.2396 5.62904 3.04158 5.06931 3.04158C4.50957 3.04158 4.03168 3.2396 3.63564 3.63564C3.2396 4.03168 3.04158 4.50957 3.04158 5.06931C3.04158 5.62904 3.2396 6.10693 3.63564 6.50297C4.03168 6.89901 4.50957 7.09703 5.06931 7.09703C5.62904 7.09703 6.10693 6.89901 6.50297 6.50297C6.89901 6.10693 7.09703 5.62904 7.09703 5.06931ZM24 14.1941C24 14.7538 23.8046 15.229 23.4139 15.6198L15.6356 23.4139C15.2238 23.8046 14.7432 24 14.1941 24C13.6343 24 13.1591 23.8046 12.7683 23.4139L1.44158 12.0713C1.04026 11.6805 0.69967 11.1472 0.419802 10.4713C0.139934 9.79538 0 9.17756 0 8.61782V2.02772C0 1.47855 0.20066 1.0033 0.60198 0.60198C1.0033 0.20066 1.47855 0 2.02772 0H8.61782C9.17756 0 9.79538 0.139934 10.4713 0.419802C11.1472 0.69967 11.6858 1.04026 12.0871 1.44158L23.4139 12.7525C23.8046 13.1644 24 13.6449 24 14.1941Z",
        fill: "currentColor"
      }
    )
  }
), q2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M21.6 3H2.4C1.068 3 0.012 4.00125 0.012 5.25L0 18.75C0 19.3467 0.252856 19.919 0.702944 20.341C1.15303 20.7629 1.76348 21 2.4 21H21.6C22.2365 21 22.847 20.7629 23.2971 20.341C23.7471 19.919 24 19.3467 24 18.75V5.25C24 4.65326 23.7471 4.08097 23.2971 3.65901C22.847 3.23705 22.2365 3 21.6 3ZM21.6 18.75H2.4V12H21.6V18.75ZM21.6 7.5H2.4V5.25H21.6V7.5Z",
        fill: "currentColor"
      }
    )
  }
), G2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M21.4051 8.12055L15.824 2.59726L17.6625 0.756164C18.1659 0.252055 18.7844 0 19.518 0C20.2517 0 20.8697 0.252055 21.3722 0.756164L23.2107 2.59726C23.7141 3.10137 23.9767 3.70981 23.9986 4.42258C24.0205 5.13534 23.7798 5.74334 23.2764 6.24658L21.4051 8.12055ZM19.5009 10.0603L5.58108 24H0V18.411L13.9199 4.47123L19.5009 10.0603Z",
        fill: "currentColor"
      }
    )
  }
), J2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M2.62639 21.3699H4.46486L15.7912 10.0274L13.9527 8.1863L2.62639 19.5288V21.3699ZM21.4051 8.12055L15.824 2.59726L17.6625 0.756164C18.1659 0.252055 18.7844 0 19.518 0C20.2517 0 20.8697 0.252055 21.3722 0.756164L23.2107 2.59726C23.7141 3.10137 23.9767 3.70981 23.9986 4.42258C24.0205 5.13534 23.7798 5.74334 23.2764 6.24658L21.4051 8.12055ZM19.5009 10.0603L5.58108 24H0V18.411L13.9199 4.47123L19.5009 10.0603ZM14.8719 9.10685L13.9527 8.1863L15.7912 10.0274L14.8719 9.10685Z",
        fill: "currentColor"
      }
    )
  }
), z2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M22.9091 4.36363H18.6342V1.0909C18.6342 0.49091 18.1409 0 17.538 0C16.9352 0 16.442 0.49091 16.442 1.0909V4.36363H12.167C11.5203 4.36363 11.0161 4.92 11.0709 5.56365L11.2024 6.88364C15.2362 7.81092 18.6342 10.6582 18.6342 15.2728L18.656 24H20.5196C21.4403 24 22.1966 23.291 22.3061 22.3964L23.9942 5.56365C24.06 4.92 23.5557 4.36363 22.9091 4.36363ZM15.3458 21.8182H1.09613C0.493258 21.8182 0 22.3091 0 22.909C0 23.5091 0.493258 24 1.09613 24H15.3458C15.9487 24 16.442 23.5091 16.442 22.909C16.442 22.3091 15.9487 21.8182 15.3458 21.8182ZM1.20574 15.2728H15.2362C15.9158 15.2728 16.4528 14.6618 16.3213 14.0073C15.6088 10.4836 11.9149 8.71636 8.22096 8.71636C4.527 8.71636 0.844013 10.4836 0.120575 14.0073C-0.0109602 14.6618 0.537103 15.2728 1.20574 15.2728ZM15.3458 17.4545H1.09613C0.493258 17.4545 0 17.9454 0 18.5455C0 19.1454 0.493258 19.6363 1.09613 19.6363H15.3458C15.9487 19.6363 16.442 19.1454 16.442 18.5455C16.442 17.9454 15.9487 17.4545 15.3458 17.4545Z",
        fill: "currentColor"
      }
    )
  }
), K2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsxs(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ r.jsx(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M5.55707 6.59116C5.05322 6.90783 4.45695 7.09099 3.81792 7.09099C3.68055 7.09099 3.54516 7.08253 3.41223 7.06609L4.39141 16.7179C4.8802 16.4906 5.42514 16.3637 5.99974 16.3637C6.18747 16.3637 6.37203 16.3772 6.55251 16.4034L5.55707 6.59116ZM6.58397 5.56825L8.33428 5.75112V3.55742L7.06727 3.42505C7.0827 3.55396 7.09065 3.68519 7.09065 3.81827C7.09065 4.46189 6.90485 5.06212 6.58397 5.56825ZM10.4288 3.77626V5.96994L13.5706 6.2982V4.1045L10.4288 3.77626ZM15.6652 4.32334V6.51703L16.4094 6.59478C16.3791 6.40099 16.3634 6.20237 16.3634 6.00009C16.3634 5.44098 16.4836 4.90994 16.6995 4.4314L15.6652 4.32334ZM20.8685 9.75663C20.6456 9.79711 20.4161 9.81827 20.1815 9.81827C19.6557 9.81827 19.1548 9.71197 18.6989 9.5197L18.3961 13.1541C18.6212 13.1126 18.8535 13.091 19.0906 13.091C19.6136 13.091 20.1122 13.1962 20.566 13.3865L20.8685 9.75663ZM15.9364 19.0613C15.5296 18.4663 15.2867 17.7503 15.2731 16.9782L9.40147 18.4462C9.66773 18.9668 9.81792 19.5568 9.81792 20.1819C9.81792 20.322 9.81037 20.4603 9.79566 20.5966L15.9364 19.0613Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M24 6.00001C24 8.10873 22.2906 9.81819 20.1818 9.81819C18.0731 9.81819 16.3636 8.10873 16.3636 6.00001C16.3636 3.89128 18.0731 2.18182 20.1818 2.18182C22.2906 2.18182 24 3.89128 24 6.00001ZM20.1818 7.63637C21.0855 7.63637 21.8182 6.90375 21.8182 6.00001C21.8182 5.09626 21.0855 4.36364 20.1818 4.36364C19.2781 4.36364 18.5455 5.09626 18.5455 6.00001C18.5455 6.90375 19.2781 7.63637 20.1818 7.63637Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M7.63636 3.81818C7.63636 5.92691 5.92691 7.63636 3.81818 7.63636C1.70945 7.63636 0 5.92691 0 3.81818C0 1.70945 1.70945 0 3.81818 0C5.92691 0 7.63636 1.70945 7.63636 3.81818ZM3.81818 5.45455C4.72192 5.45455 5.45455 4.72192 5.45455 3.81818C5.45455 2.91444 4.72192 2.18182 3.81818 2.18182C2.91444 2.18182 2.18182 2.91444 2.18182 3.81818C2.18182 4.72192 2.91444 5.45455 3.81818 5.45455Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M9.81813 20.1818C9.81813 22.2906 8.10867 24 5.99994 24C3.89122 24 2.18176 22.2906 2.18176 20.1818C2.18176 18.0731 3.89122 16.3636 5.99994 16.3636C8.10867 16.3636 9.81813 18.0731 9.81813 20.1818ZM5.99994 21.8182C6.90369 21.8182 7.63631 21.0855 7.63631 20.1818C7.63631 19.2781 6.90369 18.5455 5.99994 18.5455C5.0962 18.5455 4.36358 19.2781 4.36358 20.1818C4.36358 21.0855 5.0962 21.8182 5.99994 21.8182Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M22.9091 16.9091C22.9091 19.0178 21.1996 20.7272 19.0909 20.7272C16.9822 20.7272 15.2727 19.0178 15.2727 16.9091C15.2727 14.8003 16.9822 13.0909 19.0909 13.0909C21.1996 13.0909 22.9091 14.8003 22.9091 16.9091ZM19.0909 18.5454C19.9946 18.5454 20.7273 17.8128 20.7273 16.9091C20.7273 16.0054 19.9946 15.2727 19.0909 15.2727C18.1872 15.2727 17.4545 16.0054 17.4545 16.9091C17.4545 17.8128 18.1872 18.5454 19.0909 18.5454Z",
          fill: "currentColor"
        }
      )
    ]
  }
), X2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsxs(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M11.5041 0.371164L0.0973129 23.4012C-0.150709 23.9018 0.0972449 24.1521 0.593259 23.9018L19.4392 14.3894L12.496 0.371163C12.248 -0.129483 11.7463 -0.117926 11.5041 0.371164Z",
          fill: "#FF5E00"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M12 18.1443L19.4392 14.3894L23.9027 23.4011C24.1507 23.9018 23.9027 24.1521 23.4068 23.9018L12 18.1443Z",
          fill: "#EE1415"
        }
      )
    ]
  }
), Q2 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M21.7477 0H2.25267C0.254014 0 -0.754407 2.42489 0.661685 3.84098L8.24999 11.432V19.5C8.24999 20.2082 8.58341 20.8751 9.14999 21.375L12.15 23.5812C13.6159 24.6057 15.75 23.6533 15.75 21.7812V11.432L23.3387 3.84098C24.7519 2.42775 23.7504 0 21.7477 0ZM13.5 10.5V21.75L10.5 19.5V10.5L2.25 2.25H21.75L13.5 10.5Z",
        fill: "currentColor"
      }
    )
  }
), C3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M18.9665 0.867676L12.0003 7.83415C9.6783 5.51298 7.35559 3.18958 5.03325 0.867676C2.34672 -1.8188 -1.8176 2.34692 0.866691 5.03414C3.1894 7.35455 5.51285 9.67833 7.83295 12.0002C5.51179 14.3232 3.1897 16.6452 0.866691 18.9663C-1.8176 21.652 2.3471 25.8166 5.03325 23.1328C7.35521 20.8102 9.67792 18.4871 11.9999 16.166L18.9661 23.1328C21.6526 25.8184 25.818 21.6524 23.1326 18.9663C20.81 16.6437 18.488 14.3218 16.1646 11.9995C18.4877 9.67683 20.8096 7.35417 23.1326 5.03188C25.8184 2.34692 21.6534 -1.82029 18.9665 0.867676Z",
        fill: "currentColor"
      }
    )
  }
), r3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M12.0003 15.1579C14.1538 15.1579 15.8791 13.4653 15.8791 11.3684L15.8921 3.78947C15.8921 1.69263 14.1538 0 12.0003 0C9.84687 0 8.10855 1.69263 8.10855 3.78947V11.3684C8.10855 13.4653 9.84687 15.1579 12.0003 15.1579ZM19.8876 11.3684C19.3428 11.3684 18.8887 11.7474 18.8109 12.2653C18.3309 15.5621 15.2824 17.8105 12.0003 17.8105C8.71826 17.8105 5.66971 15.5747 5.18973 12.2653C5.14977 12.0152 5.01925 11.7874 4.82177 11.6229C4.62429 11.4584 4.37288 11.3681 4.11301 11.3684C3.43843 11.3684 2.91953 11.9495 3.01034 12.5937C3.60708 16.3453 6.85021 19.2884 10.7031 19.8568V22.7368C10.7031 23.4316 11.2868 24 12.0003 24C12.7138 24 13.2976 23.4316 13.2976 22.7368V19.8568C17.1374 19.3137 20.3936 16.3453 20.9903 12.5937C21.0112 12.4408 20.9983 12.2853 20.9524 12.1376C20.9065 11.9899 20.8288 11.8535 20.7244 11.7375C20.62 11.6215 20.4913 11.5285 20.347 11.4649C20.2027 11.4012 20.0461 11.3683 19.8876 11.3684Z",
        fill: "currentColor"
      }
    )
  }
), e3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsxs(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M11.3693 8.26563L8.26036 11.4341L8.18657 11.5192C8.05388 11.6934 7.98817 11.9109 8.00175 12.1309C8.01534 12.3509 8.10729 12.5583 8.26036 12.7142L8.34393 12.7894C8.51499 12.9245 8.72858 12.9914 8.94463 12.9776C9.16069 12.9637 9.36437 12.8701 9.51745 12.7142L11.1115 11.0892V19.0947L11.1177 19.2006C11.1432 19.4208 11.2471 19.6239 11.4099 19.7712C11.5726 19.9186 11.7828 20 12.0005 20L12.1045 19.9937C12.3208 19.9677 12.5202 19.8619 12.6649 19.6962C12.8096 19.5305 12.8895 19.3164 12.8896 19.0947V11.0919L14.4836 12.7142L14.5672 12.7894C14.7458 12.9301 14.9704 12.9962 15.1953 12.9744C15.4201 12.9526 15.6284 12.8444 15.7778 12.6719C15.9272 12.4994 16.0065 12.2755 15.9996 12.0456C15.9927 11.8157 15.9001 11.5971 15.7407 11.4341L12.6273 8.26563L12.5428 8.18959C12.3717 8.05459 12.158 7.98783 11.942 8.00183C11.7259 8.01583 11.5223 8.10963 11.3693 8.26563Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M19 20.8125V6H5V20.8125C5 21.0417 5.03646 21.2526 5.10938 21.4453C5.18229 21.638 5.25781 21.7786 5.33594 21.8672C5.41406 21.9557 5.46875 22 5.5 22H18.5C18.5312 22 18.5859 21.9557 18.6641 21.8672C18.7422 21.7786 18.8177 21.638 18.8906 21.4453C18.9635 21.2526 19 21.0417 19 20.8125ZM8.5 4H15.5L14.75 2.17188C14.6771 2.07812 14.5885 2.02083 14.4844 2H9.53125C9.42708 2.02083 9.33854 2.07812 9.26562 2.17188L8.5 4ZM23 4.5V5.5C23 5.64583 22.9531 5.76562 22.8594 5.85938C22.7656 5.95312 22.6458 6 22.5 6H21V20.8125C21 21.6771 20.7552 22.4245 20.2656 23.0547C19.776 23.6849 19.1875 24 18.5 24H5.5C4.8125 24 4.22396 23.6953 3.73438 23.0859C3.24479 22.4766 3 21.7396 3 20.875V6H1.5C1.35417 6 1.23438 5.95312 1.14062 5.85938C1.04688 5.76562 1 5.64583 1 5.5V4.5C1 4.35417 1.04688 4.23438 1.14062 4.14062C1.23438 4.04688 1.35417 4 1.5 4H6.32812L7.42188 1.39062C7.57812 1.00521 7.85938 0.677083 8.26562 0.40625C8.67188 0.135417 9.08333 0 9.5 0H14.5C14.9167 0 15.3281 0.135417 15.7344 0.40625C16.1406 0.677083 16.4219 1.00521 16.5781 1.39062L17.6719 4H22.5C22.6458 4 22.7656 4.04688 22.8594 4.14062C22.9531 4.23438 23 4.35417 23 4.5Z",
          fill: "currentColor"
        }
      )
    ]
  }
), n3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M24 16.0909C24 17.446 23.5313 18.603 22.5938 19.5618C21.6563 20.5206 20.525 21 19.2 21H5.6C4.05833 21 2.73958 20.4396 1.64375 19.3189C0.547917 18.1982 0 16.8494 0 15.2727C0 14.1477 0.295833 13.1186 0.8875 12.1854C1.47917 11.2521 2.25833 10.5554 3.225 10.0952C3.20833 9.85653 3.2 9.6733 3.2 9.54545C3.2 7.73864 3.825 6.19602 5.075 4.91761C6.325 3.6392 7.83333 3 9.6 3C10.9167 3 12.1104 3.375 13.1813 4.125C14.2521 4.875 15.0333 5.85511 15.525 7.06534C16.1083 6.53693 16.8 6.27273 17.6 6.27273C18.4833 6.27273 19.2375 6.59233 19.8625 7.23153C20.4875 7.87074 20.8 8.64205 20.8 9.54545C20.8 10.1847 20.6292 10.7727 20.2875 11.3097C21.3625 11.5653 22.25 12.1385 22.95 13.0291C23.65 13.9197 24 14.9403 24 16.0909Z",
        fill: "currentColor"
      }
    )
  }
), t3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M15.5026 16.0784C15.5026 16.8222 16.0804 17.4239 16.7929 17.4239C17.5054 17.4239 18.0834 16.8222 18.0834 16.0784C18.0834 15.3354 17.5054 14.7329 16.7929 14.7329C16.0804 14.7329 15.5026 15.3354 15.5026 16.0784ZM21.6745 6.0077L17.7139 0L8.23394 6.0077H21.6745ZM24 7.85391L2.23928 7.85306C2.27376 4.01426 5.18039 3.96632 5.21486 3.96632H7.33758L10.5274 2.17233H5.21486C3.20789 2.17233 0.0320145 3.71725 0.00328499 7.85306H0V21.309C0 22.7948 1.15576 24 2.58075 24H21.4193C22.8442 24 24 22.7948 24 21.309V19.2153H15.4483C14.4987 19.2153 13.7279 18.4116 13.7279 17.4213V14.7363C13.7279 13.7452 14.4987 12.9423 15.4483 12.9423H24V7.85391Z",
        fill: "currentColor"
      }
    )
  }
), l3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M21.7246 23.6246L14.0494 15.9124L15.9513 14.0014L23.6264 21.7136C23.8755 21.9639 24 22.2824 24 22.6691C24 23.0559 23.8755 23.3744 23.6264 23.6246C23.3774 23.8749 23.0604 24 22.6755 24C22.2906 24 21.9737 23.8749 21.7246 23.6246ZM2.16313 21.2018C0.804689 19.086 0.0860764 16.7942 0.00728704 14.3263C-0.0715023 11.8584 0.488627 9.53202 1.68767 7.34712C1.7556 8.12062 1.94804 8.99103 2.26501 9.95835C2.58198 10.9257 3.01804 11.9435 3.57318 13.0118C4.12743 14.0811 4.78944 15.179 5.55922 16.3056C6.329 17.4321 7.17802 18.541 8.10629 19.632L6.34032 21.4065C5.70638 22.0435 4.96468 22.3452 4.1152 22.3115C3.26572 22.2778 2.61503 21.9079 2.16313 21.2018ZM9.97414 17.7552C8.88739 16.6632 7.93648 15.4743 7.12142 14.1885C6.30636 12.9026 5.66699 11.6573 5.20331 10.4525C4.73872 9.24673 4.47836 8.14883 4.42221 7.15875C4.36606 6.16868 4.57526 5.43523 5.0498 4.95839C5.52526 4.45789 6.25564 4.2304 7.24096 4.2759C8.22628 4.32139 9.32435 4.57756 10.5352 5.04438C11.746 5.5103 12.9912 6.15867 14.2709 6.9895C15.5505 7.82032 16.7333 8.78127 17.8191 9.87235L9.97414 17.7552ZM21.419 6.25513L19.687 7.99549C18.6229 7.06275 17.5307 6.22101 16.4104 5.47026C15.2902 4.71952 14.2034 4.05977 13.1502 3.49103C12.0969 2.92228 11.0894 2.47274 10.1276 2.14242C9.16587 1.81209 8.29964 1.61325 7.52895 1.54592C9.67981 0.431174 11.9778 -0.0806975 14.423 0.0103018C16.8682 0.101301 19.1209 0.795171 21.1812 2.09191C21.8831 2.54691 22.2567 3.19528 22.302 4.03702C22.3472 4.87877 22.0529 5.61814 21.419 6.25513Z",
        fill: "currentColor"
      }
    )
  }
), o3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M21.7127 23.625L13.9972 15.9205L15.909 14.0114L23.6245 21.7159C23.8748 21.9659 24 22.2841 24 22.6705C24 23.0568 23.8748 23.375 23.6245 23.625C23.3741 23.875 23.0555 24 22.6686 24C22.2816 24 21.963 23.875 21.7127 23.625ZM2.0825 21.1705C1.37696 20.0341 0.853485 18.8464 0.512091 17.6073C0.170697 16.3682 0 15.1014 0 13.8068C0 12.0341 0.330014 10.3068 0.990043 8.625C1.65007 6.94318 2.66287 5.42045 4.02845 4.05682C5.39403 2.69318 6.92484 1.67636 8.62088 1.00636C10.3169 0.336364 12.0521 0.000909091 13.8265 0C15.1238 0 16.3928 0.176364 17.6337 0.529091C18.8745 0.881818 20.0521 1.40955 21.1664 2.11227C21.872 2.56682 22.2475 3.21455 22.293 4.05545C22.3385 4.89636 22.0427 5.635 21.4054 6.27136L6.24751 21.4077C5.61024 22.0441 4.86464 22.3395 4.0107 22.2941C3.15676 22.2486 2.51403 21.8741 2.0825 21.1705ZM4.30156 19.4659L6.14509 17.625C5.78094 17.1477 5.43408 16.6591 5.10452 16.1591C4.77496 15.6591 4.47317 15.1591 4.19915 14.6591C3.92603 14.1591 3.68706 13.6591 3.48222 13.1591C3.27738 12.6591 3.09531 12.1705 2.93599 11.6932C2.68563 13.0341 2.66834 14.375 2.8841 15.7159C3.09986 17.0568 3.57235 18.3068 4.30156 19.4659ZM8.12518 15.7159L15.7041 8.07955C14.7255 7.32955 13.7413 6.72136 12.7517 6.255C11.7622 5.78864 10.8345 5.47045 9.96871 5.30045C9.10384 5.13045 8.32455 5.10227 7.63084 5.21591C6.93713 5.32955 6.39636 5.57955 6.00853 5.96591C5.62162 6.375 5.37127 6.92636 5.25747 7.62C5.14367 8.31364 5.17235 9.09727 5.3435 9.97091C5.51374 10.8464 5.83238 11.7727 6.2994 12.75C6.76643 13.7273 7.37502 14.7159 8.12518 15.7159ZM19.5277 4.32955C18.3215 3.60227 17.0469 3.125 15.7041 2.89773C14.3613 2.67045 13.0185 2.69318 11.6757 2.96591C12.1764 3.125 12.6771 3.30682 13.1778 3.51136C13.6785 3.71591 14.1792 3.94909 14.6799 4.21091C15.1807 4.47182 15.6759 4.76727 16.1657 5.09727C16.6555 5.42727 17.1389 5.785 17.6159 6.17045L19.5277 4.32955Z",
        fill: "currentColor"
      }
    )
  }
), s3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M19.6364 8.72727L18.2727 5.72727L15.2727 4.36364L18.2727 3L19.6364 0L21 3L24 4.36364L21 5.72727L19.6364 8.72727ZM19.6364 24L18.2727 21L15.2727 19.6364L18.2727 18.2727L19.6364 15.2727L21 18.2727L24 19.6364L21 21L19.6364 24ZM8.72727 20.7273L6 14.7273L0 12L6 9.27273L8.72727 3.27273L11.4545 9.27273L17.4545 12L11.4545 14.7273L8.72727 20.7273Z",
        fill: "currentColor"
      }
    )
  }
), i3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsxs(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ r.jsx("rect", { width: "24", height: "24", fill: "#FC3F1D" }),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M13.2675 17.4524V20H10.7499V15.7042L6 5H8.62663L12.3278 13.3741C13.041 14.974 13.2675 15.5305 13.2675 17.4524ZM18 5L14.9122 12.2526H12.3534L15.4412 5H18Z",
          fill: "white"
        }
      )
    ]
  }
), a3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsxs(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ r.jsx("rect", { width: "24", height: "24", fill: "#FC3F1D" }),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M13.691 19.212H16.1981V4.81201H12.5515C8.88413 4.81201 6.95723 6.6975 6.95723 9.4739C6.95723 11.6909 8.01393 12.9962 9.89938 14.343L6.62573 19.212H9.33998L12.9866 13.7628L11.7227 12.9133C10.1894 11.8774 9.44353 11.0693 9.44353 9.32885C9.44353 7.7956 10.521 6.75965 12.5722 6.75965H13.691V19.212Z",
          fill: "white"
        }
      )
    ]
  }
), u3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsxs(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M22.1538 13V11C22.1538 10.5 22.6153 10 23.0769 10C23.5384 10 24 10.5 24 11V13C24 13.5 23.5384 14 23.0769 14C22.6153 14 22.1538 13.5 22.1538 13Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M18.4615 19V5C18.4615 4.5 18.9231 4 19.3846 4C19.8462 4 20.3077 4.5 20.3077 5V19C20.3077 19.5 19.8462 20 19.3846 20C18.9231 20 18.4615 19.5 18.4615 19Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M14.7693 15V9.00012C14.7693 8.50012 15.2308 8 15.6924 8C16.1539 8 16.6154 8.50012 16.6154 9.00012V15C16.6154 15.5 16.1539 16 15.6924 16C15.2308 16 14.7693 15.5 14.7693 15Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M11.0769 20V3.99993C11.0769 3.49993 11.5384 3 12 3C12.4615 3 12.9231 3.49993 12.9231 3.99993V20C12.9231 20.5 12.4615 21 12 21C11.5384 21 11.0769 20.5 11.0769 20Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M7.38464 23V0.999893C7.38464 0.499893 7.84618 0 8.30772 0C8.76926 0 9.2308 0.499923 9.2308 0.999923V23C9.2308 23.5 8.76926 24 8.30772 24C7.84618 24 7.38464 23.5 7.38464 23Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M3.69226 17V7C3.69226 6.5 4.1538 6 4.61534 6C5.07688 6 5.53841 6.5 5.53841 7V17C5.53841 17.5 5.07688 18 4.61534 18C4.1538 18 3.69226 17.5 3.69226 17Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M0 13V11C0 10.5 0.461538 10 0.923077 10C1.38462 10 1.84615 10.5 1.84615 11V13C1.84615 13.5 1.38462 14 0.923077 14C0.461538 14 0 13.5 0 13Z",
          fill: "currentColor"
        }
      )
    ]
  }
), c3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M13.3333 13.3333H10.6667V5.33333H13.3333M10.6667 16H13.3333V18.6667H10.6667M16.9733 0H7.02667L0 7.02667V16.9733L7.02667 24H16.9733L24 16.9733V7.02667L16.9733 0Z",
        fill: "currentColor"
      }
    )
  }
), f3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsxs(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M13.3333 8V10.6667H17.3333C18 10.6667 18.6667 11.3333 18.6667 12C18.6667 12.6667 18 13.3333 17.3333 13.3333H12C11.3333 13.3333 10.6667 12.6667 10.6667 12V8C10.6667 7.33333 11.3333 6.66667 12 6.66667C12.6667 6.66667 13.3333 7.33333 13.3333 8Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M21.3333 12C21.3333 11.224 22 10.6667 22.6667 10.6667C23.3333 10.6667 24 11.1667 24 12C24 12.8333 23.3333 13.3333 22.6667 13.3333C22 13.3333 21.3333 12.776 21.3333 12Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M10.6667 1.33333C10.6667 0.666667 11.3333 0 12 0C12.6667 0 13.3333 0.666667 13.3333 1.33333V2.66667C13.3333 3.33333 12.6667 4 12 4C11.3333 4 10.6667 3.33333 10.6667 2.66667V1.33333Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M0 12C0 11.3333 0.666667 10.6667 1.33333 10.6667H6.66667C7.33333 10.6667 8 11.3333 8 12C8 12.6667 7.33333 13.3333 6.66667 13.3333H1.33333C0.666667 13.3333 0 12.6667 0 12Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M14.6667 18.6667H13.3333V22.6667C13.3333 23.3333 12.6667 24 12 24C11.3333 24 10.6667 23.3333 10.6667 22.6667V17.3333C10.6667 16.6667 11.3333 16 12 16H14.6667C15.3333 16 16 16.6667 16 17.3333C16 18 15.3333 18.6667 14.6667 18.6667Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M17.3333 21.3333H22.6667C23.3333 21.3333 24 22 24 22.6667C24 23.3333 23.3333 24 22.6667 24H17.3333C16.6667 24 16 23.3333 16 22.6667C16 22 16.6667 21.3333 17.3333 21.3333Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M24 17.3333C24 18 23.3333 18.6667 22.6667 18.6667H20C19.3333 18.6667 18.6667 18 18.6667 17.3333C18.6667 16.6667 19.3333 16 20 16H22.6667C23.3333 16 24 16.6667 24 17.3333Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M18.6667 0C20 0 20 0 21.3333 0C22.6667 0 24 1.33333 24 2.66667C24 4 24 4 24 5.33333C24 6.66667 22.6667 8 21.3333 8C20 8 20 8 18.6667 8C17.3333 8 16 6.66667 16 5.33333C16 4 16 4.03857 16 2.66667C16 1.29476 17.3333 0 18.6667 0ZM18.6667 2.66667V5.33333H21.3333V2.66667H18.6667Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M2.66667 0C4 0 4 0 5.33333 0C6.66667 0 8 1.33333 8 2.66667C8 4 8 4 8 5.33333C8 6.66667 6.66667 8 5.33333 8C4 8 4 8 2.66667 8C1.33333 8 0 6.66667 0 5.33333C0 4 2.54314e-06 4.03857 0 2.66667C-2.54313e-06 1.29476 1.33333 0 2.66667 0ZM2.66667 2.66667V5.33333H5.33333V2.66667H2.66667Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M2.66667 16C4 16 4 16 5.33333 16C6.66667 16 8 17.3333 8 18.6667C8 20 8 20 8 21.3333C8 22.6667 6.66667 24 5.33333 24C4 24 4 24 2.66667 24C1.33333 24 0 22.6667 0 21.3333C0 20 2.54314e-06 20.0386 0 18.6667C-2.54313e-06 17.2948 1.33333 16 2.66667 16ZM2.66667 18.6667V21.3333H5.33333V18.6667H2.66667Z",
          fill: "currentColor"
        }
      )
    ]
  }
), d3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M11.993 20.7466C11.255 20.7466 10.6311 20.4871 10.1216 19.9682C9.61197 19.45 9.35715 18.8306 9.35715 18.1099C9.35715 17.3717 9.61197 16.7477 10.1216 16.2379C10.6311 15.7281 11.255 15.4733 11.993 15.4733C12.731 15.4733 13.3548 15.7281 13.8644 16.2379C14.374 16.7477 14.6288 17.3717 14.6288 18.1099C14.6288 18.8306 14.374 19.45 13.8644 19.9682C13.3548 20.4871 12.731 20.7466 11.993 20.7466ZM21.2711 9.25078C19.9883 8.2137 18.5607 7.40933 16.9884 6.83774C15.4154 6.26681 13.7502 5.98133 11.993 5.98133C11.624 5.98133 11.2683 5.99433 10.926 6.02037C10.583 6.04707 10.2358 6.08681 9.88433 6.13955L7.1958 3.45016C7.96898 3.23923 8.7555 3.08103 9.55538 2.97556C10.3546 2.8701 11.1671 2.81736 11.993 2.81736C14.1895 2.81736 16.2676 3.18649 18.2272 3.92475C20.1862 4.66301 21.9388 5.68252 23.4852 6.98326C23.819 7.26452 23.9906 7.61607 23.9997 8.03792C24.0081 8.45978 23.8542 8.8377 23.5379 9.1717C23.2392 9.47052 22.8747 9.6287 22.4445 9.64629C22.0137 9.66385 21.6225 9.53204 21.2711 9.25078ZM17.8709 14.1286L17.2783 13.5348L16.6848 12.9421L12.8892 9.14533C14.0489 9.25078 15.1518 9.51444 16.1976 9.93633C17.2428 10.3582 18.1784 10.8943 19.0043 11.5447C19.3557 11.8083 19.5314 12.1511 19.5314 12.573C19.5314 12.9948 19.3733 13.364 19.057 13.6804C18.8988 13.8386 18.7143 13.957 18.5035 14.0358C18.2926 14.1152 18.0817 14.1461 17.8709 14.1286ZM19.426 21.6958L10.2533 12.4675C9.69105 12.5906 9.15964 12.7617 8.6592 12.9811C8.15805 13.2012 7.67903 13.4606 7.22217 13.7594C6.83558 14.0231 6.4314 14.1461 6.00968 14.1286C5.58795 14.111 5.22773 13.9528 4.929 13.654C4.61269 13.3376 4.46333 12.9597 4.48091 12.5202C4.49846 12.0808 4.67419 11.738 5.00805 11.4919C5.41223 11.1756 5.84273 10.8897 6.29963 10.6345C6.75649 10.38 7.23094 10.1473 7.72294 9.93633L5.35073 7.56333C4.87628 7.80941 4.41938 8.07307 3.9801 8.35433C3.54079 8.63555 3.11906 8.93437 2.7149 9.25078C2.36345 9.53204 1.97265 9.66844 1.54248 9.66C1.11161 9.65085 0.746817 9.48807 0.448091 9.1717C0.149363 8.85529 0 8.47737 0 8.03792C0 7.59848 0.166935 7.24692 0.500805 6.98326C0.904965 6.64929 1.31369 6.34167 1.72699 6.06044C2.13959 5.77918 2.57432 5.50674 3.03119 5.24307L1.55513 3.76656C1.36184 3.5732 1.26519 3.32711 1.26519 3.02829C1.26519 2.72947 1.36184 2.48339 1.55513 2.29003C1.74843 2.09668 1.99444 2 2.29316 2C2.59189 2 2.8379 2.09668 3.03119 2.29003L20.9284 20.1929C21.1217 20.3862 21.2184 20.6369 21.2184 20.9448C21.2184 21.2521 21.1217 21.5024 20.9284 21.6958C20.7176 21.9067 20.4627 22.008 20.164 21.9995C19.8653 21.9904 19.6193 21.8891 19.426 21.6958Z",
        fill: "currentColor"
      }
    )
  }
), v3 = ({ width: e = 24, height: n = 14 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M12 9.49215L20.8483 0.546634C21.1947 0.196455 21.6645 -0.000174999 22.1542 1.16871e-07C22.6439 0.000175233 23.1135 0.197141 23.4596 0.547568C23.8058 0.897994 24.0002 1.37318 24 1.86858C23.9998 2.36398 23.8051 2.83903 23.4587 3.1892L13.3052 13.4532C12.959 13.8033 12.4895 14 12 14C11.5105 14 11.041 13.8033 10.6948 13.4532L0.54128 3.1892C0.194877 2.83903 0.000173217 2.36398 1.1552e-07 1.86858C-0.000172986 1.37318 0.194199 0.897994 0.540357 0.547568C0.886515 0.197141 1.3561 0.000175236 1.84582 1.16871e-07C2.33553 -0.000175003 2.80526 0.196455 3.15166 0.546634L12 9.49215Z",
        fill: "currentColor"
      }
    )
  }
), w3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M10.6667 24H2.66667C1.93334 24 1.30534 23.7387 0.782669 23.216C0.260002 22.6933 -0.000886625 22.0658 2.26372e-06 21.3333V2.66667C2.26372e-06 1.93334 0.261336 1.30534 0.784002 0.782669C1.30667 0.260002 1.93422 -0.000886625 2.66667 2.26372e-06H10.6667V24ZM13.3333 10.6667V2.26372e-06H21.3333C22.0667 2.26372e-06 22.6947 0.261336 23.2173 0.784002C23.74 1.30667 24.0009 1.93422 24 2.66667V10.6667H13.3333ZM13.3333 24V13.3333H24V21.3333C24 22.0667 23.7387 22.6947 23.216 23.2173C22.6933 23.74 22.0658 24.0009 21.3333 24H13.3333Z",
        fill: "currentColor"
      }
    )
  }
), x3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M5.72885 19.9913C7.82296 22.3655 10.5974 24 12 24C13.4026 24 16.1771 22.3655 18.2711 19.9913C21.2396 16.6258 23 11.9617 23 5.99949C23 5.50878 22.6957 5.0675 22.2316 4.88528C18.2303 3.31416 15.0438 1.75008 12.678 0.201537C12.2674 -0.067179 11.7326 -0.067179 11.322 0.201537C8.9562 1.75008 5.76977 3.31416 1.76839 4.88528C1.30431 5.0675 1 5.50878 1 5.99949C1 11.9617 2.76032 16.6258 5.72885 19.9913Z",
        fill: "currentColor"
      }
    )
  }
), h3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M5.72885 19.9913C7.82296 22.3655 10.5974 24 12 24C13.4026 24 16.1771 22.3655 18.2711 19.9913C21.2396 16.6258 23 11.9617 23 5.99949C23 5.50878 22.6957 5.0675 22.2316 4.88528C18.2303 3.31416 15.0438 1.75008 12.678 0.201537C12.2674 -0.067179 11.7326 -0.067179 11.322 0.201537C8.9562 1.75008 5.76977 3.31416 1.76839 4.88528C1.30431 5.0675 1 5.50878 1 5.99949C1 11.9617 2.76032 16.6258 5.72885 19.9913ZM12 21.6C11.4268 21.6 9.25066 20.318 7.57671 18.4201C5.12413 15.6396 3.60311 11.7967 3.45617 6.80343C6.89041 5.41967 9.73718 4.0302 12 2.6298C14.2628 4.0302 17.1096 5.41967 20.5438 6.80343C20.3969 11.7967 18.8759 15.6396 16.4233 18.4201C14.7494 20.318 12.5732 21.6 12 21.6Z",
        fill: "currentColor"
      }
    )
  }
), p3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M24 2.08696V9.04348C24 9.30435 23.913 9.56522 23.6957 9.73913C23.4783 9.95652 23.2609 10.0435 23 10.0435H16.0435C15.6087 10.0435 15.3043 9.82609 15.1304 9.43478C14.9565 9.04348 15.0435 8.65217 15.3478 8.34783L17.4783 6.21739C15.9565 4.78261 14.1304 4.08696 12.0435 4.08696C10.9565 4.08696 9.91304 4.30435 8.95652 4.73913C7.95652 5.17391 7.13043 5.73913 6.3913 6.43478C5.69565 7.13043 5.08696 8 4.69565 9C4.26087 10 4.04348 11 4.04348 12.087C4.04348 13.1739 4.26087 14.2174 4.69565 15.1739C5.13044 16.1739 5.69565 17 6.3913 17.7391C7.08696 18.4348 7.95652 19.0435 8.95652 19.4348C9.95652 19.8696 10.9565 20.087 12.0435 20.087C13.2609 20.087 14.4348 19.8261 15.5652 19.2609C16.6522 18.7391 17.6087 17.9565 18.3478 16.9565C18.4348 16.8696 18.5217 16.7826 18.6957 16.7826C18.8261 16.7826 18.9565 16.8261 19.087 16.913L21.2174 19.0435C21.3043 19.1304 21.3478 19.2174 21.3478 19.3478C21.3478 19.4783 21.3043 19.6087 21.2174 19.6957C20.087 21.087 18.6957 22.1304 17.087 22.8696C15.4783 23.6087 13.7826 24 12 24C10.3913 24 8.82609 23.6957 7.34783 23.0435C5.86957 22.3913 4.6087 21.5652 3.52174 20.4783C2.43478 19.3913 1.6087 18.1304 0.956522 16.6522C0.304348 15.1739 0 13.6522 0 12C0 10.3478 0.304348 8.82609 0.956522 7.34783C1.6087 5.86957 2.43478 4.6087 3.52174 3.52174C4.6087 2.43478 5.86957 1.6087 7.34783 0.956522C8.82609 0.304348 10.3478 0 12 0C13.5217 0 15 0.304348 16.4348 0.869565C17.8696 1.43478 19.1304 2.26087 20.2609 3.30435L22.3043 1.30435C22.6087 1 22.9565 0.913043 23.3913 1.08696C23.7826 1.34783 24 1.65217 24 2.08696Z",
        fill: "currentColor"
      }
    )
  }
), L3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M2.66667 24C1.93334 24 1.30534 23.7387 0.782669 23.216C0.260002 22.6933 -0.000886625 22.0658 2.26372e-06 21.3333V16H2.66667V21.3333H8V24H2.66667ZM16 24V21.3333H21.3333V16H24V21.3333C24 22.0667 23.7387 22.6947 23.216 23.2173C22.6933 23.74 22.0658 24.0009 21.3333 24H16ZM2.26372e-06 8V2.66667C2.26372e-06 1.93334 0.261336 1.30534 0.784002 0.782669C1.30667 0.260002 1.93422 -0.000886625 2.66667 2.26372e-06H8V2.66667H2.66667V8H2.26372e-06ZM21.3333 8V2.66667H16V2.26372e-06H21.3333C22.0667 2.26372e-06 22.6947 0.261336 23.2173 0.784002C23.74 1.30667 24.0009 1.93422 24 2.66667V8H21.3333Z",
        fill: "currentColor"
      }
    )
  }
), g3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsxs(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M1.77087 9.29998C1.63464 9.30121 1.50052 9.2667 1.38212 9.19998C1.29527 9.15164 1.21903 9.08663 1.15786 9.00875C1.09669 8.93087 1.05182 8.8417 1.02586 8.74644C0.999914 8.65118 0.993407 8.55176 1.00672 8.45398C1.02004 8.3562 1.05292 8.26203 1.10343 8.17699C2.07682 6.56799 5.03841 2.8125 11.5008 2.8125C14.3013 2.8125 16.7575 3.541 18.7977 4.97699C20.4769 6.15549 21.418 7.48949 21.8664 8.13199C21.9232 8.21297 21.9631 8.30441 21.9838 8.4009C22.0044 8.4974 22.0054 8.59701 21.9866 8.69388C21.9677 8.79074 21.9295 8.8829 21.8742 8.96492C21.8189 9.04694 21.7476 9.11718 21.6644 9.17148C21.4945 9.28273 21.2875 9.32407 21.0873 9.28673C20.8871 9.2494 20.7095 9.13632 20.5921 8.97148C19.7807 7.81599 17.3068 4.3 11.5008 4.3C5.83359 4.3 3.27135 7.53549 2.4368 8.92299C2.36974 9.03885 2.27266 9.13488 2.15559 9.20116C2.03852 9.26743 1.90571 9.30155 1.77087 9.29998Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M14.7566 24C14.6922 24.0007 14.6279 23.9935 14.5653 23.9785C9.8775 22.8285 8.1271 18.1875 8.05591 17.9945L8.04481 17.952C8.00644 17.818 7.06586 14.6355 8.5098 12.7715C9.17168 11.9215 10.1784 11.4855 11.5077 11.4855C12.7437 11.4855 13.6353 11.866 14.2482 12.6535C14.7531 13.2965 14.955 14.0895 15.1504 14.8535C15.5609 16.4445 15.8572 17.28 17.5632 17.366C18.3124 17.4035 18.8047 16.9695 19.0839 16.6C19.8387 15.5925 19.9699 13.95 19.4009 12.5C18.6699 10.6285 16.0753 7.1 11.5007 7.1C9.54782 7.1 7.75349 7.72149 6.3146 8.88949C5.12361 9.85699 4.18 11.223 3.72561 12.627C2.88298 15.241 3.98815 19.35 3.99875 19.3875C4.02455 19.4831 4.03076 19.5829 4.01701 19.6809C4.00326 19.779 3.96982 19.8733 3.91867 19.9583C3.86752 20.0434 3.7997 20.1174 3.7192 20.1761C3.6387 20.2348 3.54715 20.2769 3.44995 20.3C3.25359 20.3517 3.04458 20.3252 2.86773 20.2261C2.69087 20.127 2.56023 19.9633 2.50382 19.77C2.45333 19.5825 1.27294 15.2 2.24633 12.179C3.30657 8.90549 6.57865 5.6055 11.5022 5.6055C13.7776 5.6055 15.9274 6.3715 17.7217 7.81799C19.1111 8.94299 20.2461 10.454 20.8398 11.9645C21.5946 13.893 21.3922 16.0575 20.3254 17.4715C19.6145 18.4145 18.6022 18.9075 17.4809 18.854C14.5597 18.709 14.0346 16.6895 13.6519 15.2165C13.2581 13.7055 13.0062 12.977 11.5022 12.977C10.6762 12.977 10.0961 13.202 9.73512 13.668C9.24287 14.3055 9.2045 15.302 9.25903 16.025C9.29482 16.5287 9.38108 17.0276 9.51651 17.5145C9.63667 17.8145 11.2013 21.6145 14.9485 22.534C15.0453 22.5567 15.1366 22.5982 15.2171 22.6562C15.2976 22.7142 15.3657 22.7874 15.4174 22.8717C15.469 22.9559 15.5033 23.0495 15.5181 23.147C15.533 23.2444 15.5281 23.3439 15.5038 23.4395C15.4581 23.6008 15.3603 23.743 15.2254 23.8442C15.0905 23.9454 14.9258 24.0001 14.7566 24V24Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M8.73964 23.6569C8.63457 23.6571 8.53053 23.6364 8.43373 23.5959C8.33693 23.5555 8.24934 23.4961 8.1762 23.4214C6.30009 21.4714 5.23884 19.2909 4.83949 16.5644V16.5499C4.61533 14.7449 4.94349 12.1895 6.55152 10.4325C7.73847 9.13596 9.40708 8.47696 11.5023 8.47696C13.9802 8.47696 15.9275 9.61796 17.1417 11.7715C18.0228 13.3359 18.1974 14.8949 18.202 14.9589C18.2112 15.0576 18.2007 15.1571 18.1711 15.2518C18.1414 15.3464 18.0932 15.4344 18.0292 15.5105C17.9652 15.5867 17.8866 15.6496 17.798 15.6957C17.7094 15.7417 17.6125 15.77 17.5128 15.7789C17.3117 15.8006 17.1101 15.743 16.9515 15.6187C16.7929 15.4943 16.6901 15.3132 16.6651 15.1144C16.5322 14.179 16.2265 13.2758 15.7634 12.45C14.8224 10.8055 13.3905 9.96946 11.4968 9.96946C9.86096 9.96946 8.58111 10.457 7.70061 11.4195C6.43136 12.8069 6.18599 14.9444 6.36017 16.3584C6.71005 18.7694 7.64558 20.6874 9.29752 22.4014C9.36647 22.4725 9.42029 22.5565 9.45579 22.6485C9.49129 22.7406 9.50774 22.8388 9.50416 22.9372C9.50058 23.0357 9.47704 23.1324 9.43495 23.2217C9.39287 23.311 9.33308 23.391 9.25915 23.4569C9.11679 23.5847 8.93178 23.6559 8.73964 23.6569V23.6569Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M17.3826 21.5089C15.7417 21.5089 14.3468 21.0589 13.2305 20.1645C10.9878 18.375 10.7364 15.4605 10.7253 15.3375C10.7095 15.1356 10.7753 14.9357 10.9083 14.7819C11.0413 14.6281 11.2305 14.5329 11.4344 14.5172C11.6383 14.5016 11.8401 14.5668 11.9954 14.6985C12.1507 14.8302 12.2469 15.0176 12.2627 15.2195C12.2682 15.2625 12.4924 17.6465 14.2211 19.0195C15.2439 19.8285 16.6111 20.1495 18.2959 19.962C18.4972 19.9378 18.7001 19.9935 18.8601 20.117C19.02 20.2405 19.1242 20.4217 19.1496 20.621C19.1607 20.7194 19.1518 20.819 19.1235 20.914C19.0952 21.009 19.0482 21.0975 18.985 21.1743C18.9218 21.2511 18.8439 21.3147 18.7556 21.3613C18.6674 21.408 18.5707 21.4367 18.4711 21.4459C18.1098 21.4877 17.7463 21.5087 17.3826 21.5089V21.5089ZM18.6791 1.6395C18.0389 1.227 15.769 0 11.5008 0C7.02055 0 4.74508 1.3555 4.24172 1.7C4.20848 1.7202 4.17736 1.74365 4.14883 1.77C4.14582 1.77288 4.14189 1.77465 4.13772 1.775C4.05734 1.8445 3.99284 1.93017 3.94853 2.0263C3.90422 2.12244 3.88111 2.22682 3.88074 2.33249C3.88212 2.43155 3.90322 2.52937 3.94284 2.62034C3.98246 2.7113 4.03982 2.79363 4.11162 2.86261C4.18343 2.93158 4.26827 2.98585 4.36129 3.02229C4.45431 3.05874 4.55368 3.07665 4.6537 3.07499C4.81401 3.07489 4.97046 3.02621 5.10203 2.93549C5.12374 2.91949 7.08214 1.4945 11.5023 1.4945C15.9225 1.4945 17.8915 2.91449 17.9127 2.92499C18.0471 3.02371 18.2103 3.07637 18.3777 3.07499C18.4778 3.07651 18.5772 3.05844 18.6702 3.02181C18.7633 2.98518 18.8481 2.93072 18.9198 2.86154C18.9915 2.79237 19.0488 2.70985 19.0882 2.61872C19.1276 2.52758 19.1485 2.42964 19.1496 2.33049C19.1497 2.18199 19.1049 2.03686 19.0211 1.91373C18.9372 1.79061 18.8181 1.69511 18.6791 1.6395V1.6395Z",
          fill: "currentColor"
        }
      )
    ]
  }
), V3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M0 2.66667C0 1.95942 0.280951 1.28115 0.781048 0.781048C1.28115 0.280951 1.95942 0 2.66667 0H6.66667V6.66667H0V2.66667ZM6.66667 9.33333H0V21.3333C0 22.0406 0.280951 22.7189 0.781048 23.219C1.28115 23.719 1.95942 24 2.66667 24H6.66667V9.33333ZM9.33333 24H21.3333C22.0406 24 22.7189 23.719 23.219 23.219C23.719 22.7189 24 22.0406 24 21.3333V9.33333H9.33333V24ZM9.33333 6.66667V0H21.3333C22.0406 0 22.7189 0.280951 23.219 0.781048C23.719 1.28115 24 1.95942 24 2.66667V6.66667H9.33333Z",
        fill: "currentColor"
      }
    )
  }
), H3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M21.5734 11.5157L23.4294 14.698C23.8025 15.3357 23.9993 16.0593 24 16.7961C24.0007 17.5329 23.8054 18.2569 23.4336 18.8953C23.0619 19.5338 22.5268 20.0642 21.8821 20.4332C21.2374 20.8023 20.5059 20.997 19.761 20.9977H17.2573V24L11.187 19.8026L17.2573 15.5979V18.6002H19.7538C20.0735 18.6008 20.3877 18.5181 20.6648 18.3604C20.942 18.2027 21.1722 17.9755 21.3323 17.7018C21.4924 17.4281 21.5768 17.1174 21.577 16.8012C21.5771 16.4849 21.4931 16.1742 21.3332 15.9003L19.4772 12.7181L21.5734 11.5157ZM6.70347 7.95905L7.35125 15.2596L4.72373 13.7548L3.47183 15.9003C3.31197 16.1742 3.22789 16.4849 3.22805 16.8012C3.2282 17.1174 3.3126 17.4281 3.47273 17.7018C3.63286 17.9755 3.86307 18.2027 4.14019 18.3604C4.41731 18.5181 4.73154 18.6008 5.05126 18.6002H8.76328V20.9977H5.05126C4.30579 20.9982 3.57335 20.8045 2.92766 20.4359C2.28197 20.0674 1.74583 19.5371 1.3732 18.8984C1.00057 18.2598 0.804599 17.5353 0.805026 16.7979C0.805454 16.0605 1.00226 15.3362 1.37563 14.698L2.62025 12.5525L0 11.0549L6.70347 7.95905ZM14.5278 0.564952C15.1715 0.932965 15.7061 1.4618 16.0781 2.09849L17.33 4.244L19.9503 2.73926L19.3098 10.0398L12.599 6.94389L15.2266 5.44635L13.9819 3.30084C13.8227 3.02554 13.5928 2.79675 13.3154 2.63762C13.0381 2.4785 12.7231 2.39469 12.4025 2.39469C12.0819 2.39469 11.7669 2.4785 11.4896 2.63762C11.2122 2.79675 10.9823 3.02554 10.8231 3.30084L8.96707 6.48311L6.87088 5.28076L8.72689 2.09849C9.00575 1.62078 9.37707 1.20213 9.81961 0.866475C10.2622 0.53082 10.7673 0.284744 11.306 0.142318C11.8448 -0.000107423 12.4066 -0.0360896 12.9594 0.0364292C13.5123 0.108948 14.0452 0.288545 14.5278 0.564952Z",
        fill: "currentColor"
      }
    )
  }
), M3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M6.66667 22C6.28889 22 5.972 21.874 5.716 21.622C5.46 21.37 5.33245 21.0585 5.33334 20.6875V2.3125C5.33334 1.94063 5.46134 1.62869 5.71734 1.37669C5.97334 1.12469 6.28978 0.99913 6.66667 1H17.3333C17.7111 1 18.028 1.126 18.284 1.378C18.54 1.63 18.6676 1.9415 18.6667 2.3125V20.6875C18.6667 21.0594 18.5387 21.3713 18.2827 21.6233C18.0267 21.8753 17.7102 22.0009 17.3333 22H6.66667ZM4.61361e-06 18.0625V4.90469C4.61361e-06 4.53282 0.128005 4.22657 0.384005 3.98594C0.640004 3.74532 0.956449 3.625 1.33334 3.625C1.71112 3.625 2.028 3.751 2.284 4.003C2.54 4.255 2.66756 4.5665 2.66667 4.9375V18.0953C2.66667 18.4672 2.53867 18.7734 2.28267 19.0141C2.02667 19.2547 1.71023 19.375 1.33334 19.375C0.95556 19.375 0.638671 19.249 0.382671 18.997C0.126671 18.745 -0.000884275 18.4335 4.61361e-06 18.0625ZM21.3333 18.0625V4.90469C21.3333 4.53282 21.4613 4.22657 21.7173 3.98594C21.9733 3.74532 22.2898 3.625 22.6667 3.625C23.0444 3.625 23.3613 3.751 23.6173 4.003C23.8733 4.255 24.0009 4.5665 24 4.9375V18.0953C24 18.4672 23.872 18.7734 23.616 19.0141C23.36 19.2547 23.0436 19.375 22.6667 19.375C22.2889 19.375 21.972 19.249 21.716 18.997C21.46 18.745 21.3324 18.4335 21.3333 18.0625Z",
        fill: "currentColor"
      }
    )
  }
), Z3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsxs(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M23.9946 20.1874L22.484 2.33752C22.4146 1.5159 21.69 0.920029 20.8655 1.00875L19.3726 1.16625C18.5481 1.25393 17.936 1.99102 18.0054 2.81264L19.516 20.6625C19.5854 21.4841 20.31 22.08 21.1345 21.9912L22.6274 21.8337C23.4519 21.7461 24.064 21.009 23.9946 20.1874Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M1.45714 2.90909C0.485714 2.90909 0 3.38636 0 4.34091V20.5682C0 21.5227 0.485714 22 1.45714 22H2.42857C3.4 22 3.88571 21.5227 3.88571 20.5682V4.34091C3.88571 3.38636 3.4 2.90909 2.42857 2.90909H1.45714Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M11.1714 18.6591H4.85714V20.5682C4.85714 21.5227 5.34286 22 6.31429 22H9.71429C10.6857 22 11.1714 21.5227 11.1714 20.5682V18.6591Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M11.1714 17.2273H4.85714V10.5455H11.1714V17.2273Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M11.1714 9.11364H4.85714V7.20455C4.85714 6.25 5.34286 5.77273 6.31429 5.77273H9.71429C10.6857 5.77273 11.1714 6.25 11.1714 7.20455V9.11364Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M13.6 1C12.6286 1 12.1429 1.47727 12.1429 2.43182V20.5682C12.1429 21.5227 12.6286 22 13.6 22H15.5429C16.5143 22 17 21.5227 17 20.5682V2.43182C17 1.47727 16.5143 1 15.5429 1H13.6Z",
          fill: "currentColor"
        }
      )
    ]
  }
), j3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M5.5 17C3.96667 17 2.66667 16.4667 1.6 15.4C0.533333 14.3333 0 13.0333 0 11.5C0 9.96667 0.533333 8.66667 1.6 7.6C2.66667 6.53333 3.96667 6 5.5 6C6.11667 6 6.70833 6.10833 7.275 6.325C7.84167 6.54167 8.35 6.85 8.8 7.25L10.5 8.8L9 10.15L7.45 8.75C7.18333 8.51667 6.88333 8.33333 6.55 8.2C6.21667 8.06667 5.86667 8 5.5 8C4.53333 8 3.70833 8.34167 3.025 9.025C2.34167 9.70833 2 10.5333 2 11.5C2 12.4667 2.34167 13.2917 3.025 13.975C3.70833 14.6583 4.53333 15 5.5 15C5.86667 15 6.21667 14.9333 6.55 14.8C6.88333 14.6667 7.18333 14.4833 7.45 14.25L15.2 7.25C15.65 6.85 16.1583 6.54167 16.725 6.325C17.2917 6.10833 17.8833 6 18.5 6C20.0333 6 21.3333 6.53333 22.4 7.6C23.4667 8.66667 24 9.96667 24 11.5C24 13.0333 23.4667 14.3333 22.4 15.4C21.3333 16.4667 20.0333 17 18.5 17C17.8833 17 17.2917 16.8917 16.725 16.675C16.1583 16.4583 15.65 16.15 15.2 15.75L13.5 14.2L15 12.85L16.55 14.25C16.8167 14.4833 17.1167 14.6667 17.45 14.8C17.7833 14.9333 18.1333 15 18.5 15C19.4667 15 20.2917 14.6583 20.975 13.975C21.6583 13.2917 22 12.4667 22 11.5C22 10.5333 21.6583 9.70833 20.975 9.025C20.2917 8.34167 19.4667 8 18.5 8C18.1333 8 17.7833 8.06667 17.45 8.2C17.1167 8.33333 16.8167 8.51667 16.55 8.75L8.8 15.75C8.35 16.15 7.84167 16.4583 7.275 16.675C6.70833 16.8917 6.11667 17 5.5 17Z",
        fill: "currentColor"
      }
    )
  }
), m3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M12 24V23.9805C11.8525 23.9809 11.7064 23.9522 11.5701 23.8961C11.4337 23.84 11.3097 23.7575 11.2052 23.6534C11.1007 23.5494 11.0178 23.4257 10.9611 23.2896C10.9045 23.1534 10.8752 23.0075 10.875 22.86V19.14C10.875 18.5205 11.3775 18.0195 12 18.0195C12.6195 18.0195 13.125 18.5205 13.125 19.14V21.8205C15.5328 21.5388 17.7536 20.3833 19.3663 18.5732C20.979 16.7632 21.8714 14.4243 21.8745 12C21.8745 9.65999 21.0495 7.49999 19.6785 5.8005C19.3727 5.93862 19.0399 6.00661 18.7044 5.99948C18.369 5.99236 18.0394 5.91029 17.7397 5.7593C17.4401 5.60831 17.178 5.39222 16.9727 5.12684C16.7674 4.86146 16.624 4.55352 16.5531 4.22557C16.4822 3.89762 16.4855 3.55796 16.5628 3.23146C16.6401 2.90496 16.7895 2.59988 17 2.33858C17.2105 2.07727 17.4767 1.86635 17.7793 1.72125C18.0818 1.57615 18.413 1.50056 18.7485 1.5C19.0707 1.49875 19.3894 1.56687 19.683 1.69973C19.9766 1.83258 20.2381 2.02707 20.4499 2.26997C20.6616 2.51287 20.8186 2.7985 20.9101 3.10746C21.0017 3.41641 21.0257 3.74145 20.9805 4.0605C22.9295 6.2454 24.0045 9.07214 24 12C24 18.6195 18.6225 24 12 24ZM2.8185 20.1405C2.8185 19.9995 2.8275 19.8795 2.8485 19.7595C1.00729 17.5935 -0.00252023 14.8428 4.72363e-06 12C4.72363e-06 5.3805 5.3775 0 12 0V0.0195C12.2997 0.0234443 12.5859 0.14529 12.7964 0.358655C13.007 0.572021 13.125 0.859734 13.125 1.1595V4.86C13.125 5.15836 13.0065 5.44451 12.7955 5.65549C12.5845 5.86647 12.2984 5.985 12 5.985C11.7016 5.985 11.4155 5.86647 11.2045 5.65549C10.9935 5.44451 10.875 5.15836 10.875 4.86L10.872 2.1795C8.46416 2.46094 6.24336 3.61634 4.63087 5.42652C3.01837 7.2367 2.12635 9.57576 2.124 12C2.124 14.28 2.898 16.38 4.1985 18.06C4.50585 17.9291 4.8385 17.8682 5.1723 17.8819C5.50609 17.8956 5.83266 17.9834 6.12828 18.139C6.4239 18.2946 6.68116 18.5141 6.88138 18.7815C7.0816 19.0489 7.21976 19.3576 7.28583 19.6851C7.35189 20.0125 7.3442 20.3506 7.26332 20.6748C7.18244 20.9989 7.03039 21.3009 6.81822 21.559C6.60604 21.817 6.33907 22.0246 6.03668 22.1666C5.73429 22.3086 5.40407 22.3815 5.07 22.38C4.77512 22.3808 4.48297 22.3235 4.21023 22.2114C3.93749 22.0992 3.6895 21.9345 3.48043 21.7265C3.27136 21.5186 3.1053 21.2715 2.99172 20.9993C2.87815 20.7272 2.81929 20.4354 2.8185 20.1405ZM8.25 12C8.24129 11.5013 8.33214 11.006 8.51722 10.5429C8.70231 10.0798 8.97791 9.65822 9.32789 9.30292C9.67788 8.94763 10.0952 8.66571 10.5555 8.47368C11.0158 8.28165 11.5097 8.18335 12.0084 8.18455C12.5071 8.18575 13.0006 8.28641 13.46 8.48065C13.9193 8.67489 14.3353 8.95881 14.6836 9.31578C15.0318 9.67275 15.3054 10.0956 15.4883 10.5596C15.6711 11.0236 15.7596 11.5194 15.7485 12.018C15.7266 12.9994 15.3208 13.9331 14.6182 14.6187C13.9155 15.3042 12.9721 15.6869 11.9904 15.6845C11.0088 15.6822 10.0672 15.295 9.36781 14.6061C8.66846 13.9172 8.26713 12.9815 8.25 12Z",
        fill: "currentColor"
      }
    )
  }
), b3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M11.4851 0H3.98834C3.79319 2.22086e-06 3.60571 0.0746711 3.46558 0.208197C3.32545 0.341723 3.24367 0.523624 3.23758 0.715385L3.00228 8.15114C2.94951 9.81785 3.81558 11.3747 5.24218 12.2418L4.98755 21.213C4.97619 21.5731 5.03898 21.9316 5.17216 22.2672C5.30534 22.6028 5.50616 22.9084 5.76254 23.1657C6.01846 23.4261 6.32529 23.6329 6.66459 23.7737C7.00388 23.9145 7.36863 23.9864 7.73691 23.985C8.48749 23.985 9.18849 23.6941 9.7111 23.1657C9.96748 22.9084 10.1683 22.6028 10.3015 22.2672C10.4347 21.9316 10.4974 21.5731 10.4861 21.213L10.2315 12.2418C11.6579 11.3747 12.5239 9.81803 12.4714 8.15114L12.2359 0.715385C12.2298 0.523624 12.148 0.341723 12.0079 0.208197C11.8677 0.0746711 11.6803 2.22695e-06 11.4851 0ZM9.14211 11.1471C9.01148 11.2089 8.90184 11.3065 8.8264 11.4282C8.75096 11.5499 8.71295 11.6905 8.71696 11.8329L8.98437 21.2542C8.98943 21.4168 8.961 21.5788 8.90078 21.7304C8.84056 21.8819 8.74981 22.0199 8.63396 22.1361C8.51762 22.2544 8.37817 22.3483 8.22399 22.4122C8.0698 22.4761 7.90406 22.5088 7.73672 22.5081C7.56938 22.5088 7.40362 22.4762 7.24943 22.4123C7.09523 22.3484 6.95579 22.2544 6.83949 22.1361C6.72363 22.02 6.63286 21.882 6.57265 21.7305C6.51243 21.5789 6.484 21.417 6.48908 21.2544L6.75648 11.8331C6.76053 11.6906 6.72254 11.55 6.6471 11.4283C6.57166 11.3066 6.46199 11.2089 6.33134 11.1471C5.18153 10.6028 4.46419 9.44511 4.50362 8.19711L4.71639 1.47692H5.88422L6.10036 7.6656H6.89038L7.10633 1.47692H8.36712L8.58326 7.6656H9.37327L9.58923 1.47692H10.7569L10.9696 8.19729C11.0091 9.44511 10.2917 10.603 9.14211 11.1471ZM18.4598 0.0166154C16.9115 0.0166154 16.0209 2.21298 14.8386 5.56394C14.7212 5.89662 14.6072 6.22006 14.4962 6.52449C13.8904 8.18843 13.5231 9.88265 13.3581 10.7446C13.2899 11.0991 13.3125 11.4646 13.424 11.8083C13.5355 12.152 13.7322 12.463 13.9965 12.7132L15.9189 14.5394V21.5086C15.9189 22.8823 17.0586 24 18.4595 24C19.8603 24 21 22.8823 21 21.5086V2.508C21.0004 1.13428 19.8607 0.0166154 18.4598 0.0166154ZM19.4981 21.5086C19.4981 22.068 19.0324 22.5231 18.4598 22.5231C17.8873 22.5231 17.4216 22.068 17.4216 21.5086V14.2261C17.4216 14.026 17.3389 13.8342 17.1923 13.6951L15.0406 11.6511C14.9555 11.5706 14.8921 11.4706 14.8561 11.36C14.8202 11.2494 14.8128 11.1318 14.8346 11.0177C14.9914 10.1987 15.3398 8.59052 15.9106 7.02222C16.0231 6.71335 16.1388 6.38529 16.2579 6.04782C16.6314 4.98905 17.0548 3.78886 17.4961 2.87095C18.1145 1.58585 18.466 1.49354 18.4598 1.49354C19.0324 1.49354 19.4981 1.94862 19.4981 2.508V21.5086Z",
        fill: "currentColor"
      }
    )
  }
), E3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsxs(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ r.jsx(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M20.7314 0.00114294C17.7015 0.00118388 14.7956 1.20457 12.6526 3.34676L9.144 6.85469H6.66286C6.3626 6.85446 6.06525 6.91339 5.78777 7.02812C5.5103 7.14285 5.25814 7.31114 5.04571 7.52336L0 12.5698H6.60914L11.4286 17.3899V24L16.4743 18.9536C16.9026 18.5248 17.143 17.9434 17.1429 17.3373V14.8581L20.6491 11.3548C21.7114 10.2933 22.5541 9.03279 23.1291 7.6454C23.704 6.258 24 4.77088 24 3.26904V1.14302C24 0.839873 23.8796 0.549141 23.6653 0.334783C23.4509 0.120425 23.1602 0 22.8571 0L20.7314 0.00114294ZM16 6.28318C16 6.7379 16.1806 7.174 16.5021 7.49554C16.8236 7.81708 17.2596 7.99771 17.7143 7.99771C18.1689 7.99771 18.605 7.81708 18.9265 7.49554C19.248 7.174 19.4286 6.7379 19.4286 6.28318C19.4286 5.82846 19.248 5.39236 18.9265 5.07083C18.605 4.74929 18.1689 4.56865 17.7143 4.56865C17.2596 4.56865 16.8236 4.74929 16.5021 5.07083C16.1806 5.39236 16 5.82846 16 6.28318Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M8.7084 18.8916C7.35826 20.2415 5.52723 20.9999 3.618 21H3V20.3832C3.00004 19.4376 3.18637 18.5012 3.54834 17.6276C3.91031 16.7539 4.44083 15.9602 5.1096 15.2916L5.4 15L9 18.6L8.7084 18.8916Z",
          fill: "currentColor"
        }
      )
    ]
  }
), y3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M24 12C24 18.6276 18.6276 24 12 24C5.3724 24 0 18.6276 0 12C0 5.3724 5.3724 0 12 0C18.6276 0 24 5.3724 24 12ZM10.5 17.0916C10.5 16.224 11.16 15.6 11.9916 15.6C12.8412 15.6 13.5 16.224 13.5 17.0916C13.5 17.958 12.84 18.6 11.9916 18.6C11.7936 18.6025 11.5972 18.5651 11.4139 18.4898C11.2308 18.4147 11.0646 18.3035 10.9254 18.1626C10.7862 18.0218 10.6768 17.8544 10.6037 17.6705C10.5306 17.4864 10.4953 17.2896 10.5 17.0916ZM12.27 5.4C9.6816 5.4 7.74 6.8916 7.74 9.3V9.33C7.74 9.48913 7.80322 9.64176 7.91574 9.75432C8.02826 9.86676 8.18087 9.93 8.34 9.93H9.3036C9.5916 9.93 9.8256 9.696 9.8256 9.408C9.8256 8.0604 10.8672 7.3416 12.27 7.3416C13.6356 7.3416 14.5344 8.0604 14.5344 9.0852C14.5344 10.056 14.0304 10.5048 12.7728 11.0808L12.4128 11.2416C11.3532 11.7096 10.9572 12.4104 10.9572 13.6332V13.8C10.9572 13.9591 11.0204 14.1118 11.1329 14.2243C11.2454 14.3368 11.3981 14.4 11.5572 14.4H12.4428C12.6019 14.4 12.7546 14.3368 12.8671 14.2243C12.9796 14.1118 13.0428 13.9591 13.0428 13.8V13.7592C13.0428 13.2192 13.1868 13.0032 13.6188 12.8064L13.9776 12.6444C15.4872 11.9604 16.62 11.0628 16.62 9.1032V8.9952C16.62 6.9276 14.8224 5.4 12.27 5.4Z",
        fill: "currentColor"
      }
    )
  }
), R3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M12 0C18.6276 0 24 5.3724 24 12C24 18.6276 18.6276 24 12 24C5.3724 24 0 18.6276 0 12C0 5.3724 5.3724 0 12 0ZM11.82 3.54L12.5448 2.4156C10.8077 2.31413 9.07584 2.6888 7.536 3.4992L7.9776 3.8136C8.14342 3.93207 8.27633 4.09082 8.36381 4.27488C8.45129 4.45894 8.49045 4.66225 8.4776 4.86564C8.46476 5.06902 8.40032 5.26579 8.29038 5.43738C8.18044 5.60897 8.02861 5.74973 7.8492 5.8464L5.6064 7.056C5.43128 7.15052 5.2354 7.20001 5.0364 7.2H3.684C3.2491 7.9516 2.91885 8.75905 2.7024 9.6H8.1816C8.634 9.6 9 9.966 9 10.4184C9 10.8696 9.366 11.2368 9.8184 11.2368H12.75C13.0683 11.2368 13.3735 11.3632 13.5985 11.5883C13.8236 11.8133 13.95 12.1185 13.95 12.4368V16.8C13.95 17.1183 13.8236 17.4235 13.5985 17.6485C13.3735 17.8736 13.0683 18 12.75 18H12C11.6817 18 11.3765 18.1264 11.1515 18.3515C10.9264 18.5765 10.8 18.8817 10.8 19.2V21.5208C11.2128 21.5748 11.5728 21.6 12 21.6C13.9127 21.6002 15.782 21.0292 17.3681 19.9602C18.9543 18.8912 20.1851 17.373 20.9028 15.6H19.2C18.8817 15.6 18.5765 15.4736 18.3515 15.2485C18.1264 15.0235 18 14.7183 18 14.4V9.6C18 9.28174 17.8736 8.97652 17.6485 8.75147C17.4235 8.52643 17.1183 8.4 16.8 8.4H15.012C14.8223 8.40008 14.6354 8.3552 14.4664 8.26906C14.2975 8.18291 14.1513 8.05794 14.04 7.9044L11.856 4.896C11.7139 4.69999 11.6344 4.46558 11.628 4.22357C11.6216 3.98157 11.6885 3.74328 11.82 3.54Z",
        fill: "currentColor"
      }
    )
  }
), _3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsxs(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ r.jsx("path", { d: "M13 0H11V13H13V0Z", fill: "white" }),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M1 12.9263C0.999604 10.863 1.5715 8.84053 2.65124 7.08693C3.73097 5.33333 5.27563 3.91827 7.11111 3.00123V5.85543C5.61635 6.90354 4.49277 8.40468 3.90391 10.1404C3.31504 11.8761 3.29162 13.7557 3.83706 15.5057C4.3825 17.2557 5.46832 18.7848 6.9365 19.8703C8.40467 20.9559 10.1786 21.5413 12 21.5413C13.8214 21.5413 15.5953 20.9559 17.0635 19.8703C18.5317 18.7848 19.6175 17.2557 20.1629 15.5057C20.7084 13.7557 20.685 11.8761 20.0961 10.1404C19.5072 8.40468 18.3836 6.90354 16.8889 5.85543V3C18.6448 3.87729 20.1361 5.21114 21.2083 6.86353C22.2806 8.51592 22.8949 10.4268 22.9877 12.3985C23.0805 14.3702 22.6484 16.331 21.7361 18.0781C20.8239 19.8252 19.4646 21.2951 17.7989 22.3357C16.1333 23.3763 14.2217 23.9498 12.2621 23.9969C10.3025 24.0439 8.36602 23.5628 6.65302 22.6033C4.94001 21.6438 3.51273 20.2408 2.51885 18.5394C1.52497 16.8381 1.0006 14.9002 1 12.9263Z",
          fill: "currentColor"
        }
      )
    ]
  }
), B3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M12 2.99468V6.28902C5.6628 6.62748 0.2232 11.6687 0.0660001 17.9356L0 20.5732H1.2864C2.32604 19.3787 3.61427 18.4207 5.06287 17.7648C6.51146 17.1088 8.08619 16.7705 9.6792 16.773H12V20.0032C12 20.8499 13.014 21.3095 13.6752 20.7632L23.6712 12.2127C23.7737 12.1236 23.856 12.014 23.9126 11.8912C23.9693 11.7684 23.9991 11.6351 24 11.5001C23.9993 11.3646 23.9696 11.2307 23.9129 11.1073C23.8563 10.9839 23.7739 10.8737 23.6712 10.784L13.6752 2.237C13.014 1.69072 12 2.14912 12 2.99705V2.99468Z",
        fill: "currentColor"
      }
    )
  }
), S3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M18.0001 22.392C19.8242 21.3388 21.3389 19.8241 22.392 18L12.0003 12V1.16161e-08C10.1596 -8.09725e-05 8.3436 0.423289 6.69273 1.23736C5.04187 2.05142 3.60041 3.23437 2.47985 4.69467C1.3593 6.15497 0.589702 7.85349 0.230592 9.65882C-0.128518 11.4641 -0.0675119 13.3279 0.408892 15.1059C0.885296 16.8838 1.76433 18.5284 2.97798 19.9123C4.19163 21.2962 5.70737 22.3823 7.40794 23.0867C9.1085 23.791 10.9483 24.0947 12.785 23.9743C14.6217 23.8538 16.4061 23.3124 18.0001 22.392ZM14.4002 2.7024V0.24C19.8769 1.3524 24 6.1944 24 12C24 13.3284 23.784 14.6076 23.3856 15.8016L21.2521 14.5704C21.5934 13.3411 21.6864 12.0561 21.5256 10.7905C21.3648 9.52487 20.9535 8.30397 20.3156 7.19909C19.6777 6.09422 18.826 5.12752 17.8104 4.35545C16.7948 3.58338 15.6355 3.02143 14.4002 2.7024Z",
        fill: "currentColor"
      }
    )
  }
), T3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M21.6 21C23.1615 18.9461 24.0041 16.4445 24 13.8743C24 7.31611 18.6276 2 12 2C5.3724 2 0 7.31611 0 13.8743C0 16.5483 0.892799 19.0158 2.4 21H21.6ZM6.7092 8.21855L6.2844 8.6389L10.2924 14.8254C10.448 15.0662 10.6563 15.2694 10.9018 15.42C11.1472 15.5707 11.4238 15.665 11.7109 15.6959C11.9981 15.7268 12.2886 15.6936 12.5611 15.5988C12.8336 15.5039 13.0812 15.3498 13.2855 15.1478C13.4899 14.9457 13.6458 14.7009 13.7419 14.4314C13.838 14.1618 13.8718 13.8744 13.8408 13.5902C13.8098 13.306 13.7148 13.0323 13.5628 12.7892C13.4108 12.5462 13.2056 12.34 12.9624 12.1857L6.708 8.21974L6.7092 8.21855Z",
        fill: "currentColor"
      }
    )
  }
), O3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsxs(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M13.3333 6.66667V10.6667H18.6667V12V13.3333H10.6667V12V6.66667H12H13.3333Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M21.3333 13.3333V10.6667H24V13.3333H21.3333Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M10.6667 9.04004e-06L13.3333 0V2.66667V4H10.6667V9.04004e-06Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx("path", { d: "M0 12V10.6667H8V12V13.3333L0 13.3333V12Z", fill: "currentColor" }),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M16 18.6667H13.3333V24L12 24L10.6667 24V17.3333V16L16 16V17.3333V18.6667Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M16 21.3333H24V22.6667V24H16V22.6667V21.3333Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M24 17.3333V18.6667L18.6667 18.6667V17.3333V16H24V17.3333Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M16 0C16 0 20 0 21.3333 0C22.6667 0 24 0 24 0C24 0 24 4 24 5.33333C24 6.66667 24 8 24 8C24 8 20 8 18.6667 8C17.3333 8 16 8 16 8C16 8 16 4.03857 16 2.66667C16 1.29476 16 0 16 0ZM18.6667 2.66667V5.33333H21.3333V2.66667H18.6667Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M2.66667 0C4 0 8 0 8 0C8 0 8 1.33333 8 2.66667C8 4 8 4 8 5.33333C8 6.66667 8 8 8 8H0C0 8 0 6.66667 0 5.33333C0 4 0 0 0 0C0 0 1.33333 0 2.66667 0ZM2.66667 2.66667V5.33333H5.33333V2.66667H2.66667Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M0 16C0 16 4 16 5.33333 16C6.66667 16 8 16 8 16C8 16 8 20 8 21.3333C8 22.6667 8 24 8 24C8 24 4 24 2.66667 24C1.33333 24 0 24 0 24C0 24 2.54314e-06 20.0386 0 18.6667C-2.54313e-06 17.2948 0 16 0 16ZM2.66667 18.6667V21.3333H5.33333V18.6667H2.66667Z",
          fill: "currentColor"
        }
      )
    ]
  }
), P3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M10.8365 5.99989H13.1635V11.9999H21.8365C22.1451 11.9999 22.441 11.8758 22.6592 11.6547C22.8774 11.4337 23 11.1339 23 10.8213V7.17846C23 6.86589 22.8774 6.56611 22.6592 6.34508C22.441 6.12406 22.1451 5.99989 21.8365 5.99989H18.673C19.1014 5.1061 19.2012 4.08686 18.9544 3.12525C18.7076 2.16365 18.1304 1.32268 17.3266 0.753403C16.5227 0.184129 15.5448 -0.0761442 14.5685 0.0193327C13.5922 0.11481 12.6815 0.55978 12 1.27432C11.3173 0.563697 10.4074 0.122166 9.43288 0.0286417C8.45837 -0.0648822 7.48279 0.195696 6.6805 0.763804C5.87821 1.33191 5.3015 2.17052 5.05346 3.12975C4.80541 4.08897 4.90218 5.10629 5.32649 5.99989H2.16346C1.85489 5.99989 1.55896 6.12406 1.34077 6.34508C1.12258 6.56611 1 6.86589 1 7.17846V10.8213C1 11.1339 1.12258 11.4337 1.34077 11.6547C1.44881 11.7642 1.57707 11.851 1.71822 11.9102C1.85938 11.9694 2.01067 11.9999 2.16346 11.9999H10.8365V5.99989ZM13.1635 4.17844C13.1635 3.8182 13.2689 3.46604 13.4665 3.16651C13.6641 2.86697 13.9449 2.63351 14.2734 2.49565C14.602 2.35779 14.9635 2.32172 15.3123 2.392C15.6611 2.46228 15.9815 2.63576 16.233 2.89049C16.4844 3.14522 16.6557 3.46977 16.7251 3.8231C16.7944 4.17642 16.7588 4.54266 16.6227 4.87548C16.4867 5.2083 16.2562 5.49278 15.9605 5.69292C15.6648 5.89306 15.3172 5.99989 14.9615 5.99989H13.1635V4.17844ZM7.24038 4.17844C7.24038 3.69537 7.42982 3.23208 7.76703 2.89049C8.10423 2.54891 8.56158 2.357 9.03846 2.357C9.51534 2.357 9.97269 2.54891 10.3099 2.89049C10.6471 3.23208 10.8365 3.69537 10.8365 4.17844V5.99989H9.03846C8.56158 5.99989 8.10423 5.80798 7.76703 5.4664C7.42982 5.12481 7.24038 4.66152 7.24038 4.17844ZM13.1635 24H20.1442C20.4528 24 20.7487 23.8758 20.9669 23.6548C21.1851 23.4338 21.3077 23.134 21.3077 22.8214V13.7142H13.1635V24ZM2.69231 22.8214C2.69231 23.134 2.81489 23.4338 3.03308 23.6548C3.25127 23.8758 3.5472 24 3.85577 24H10.8365V13.7142H2.69231V22.8214Z",
        fill: "currentColor"
      }
    )
  }
), k3 = ({ width: e = 24, height: n = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M1.33333 18.6667C0.979711 18.6667 0.640573 18.8071 0.390524 19.0572C0.140476 19.3072 0 19.6464 0 20V22.6667C0 23.0203 0.140476 23.3594 0.390524 23.6095C0.640573 23.8595 0.979711 24 1.33333 24H9.33333C9.68696 24 10.0261 23.8595 10.2761 23.6095C10.5262 23.3594 10.6667 23.0203 10.6667 22.6667V20C10.6667 19.6464 10.5262 19.3072 10.2761 19.0572C10.0261 18.8071 9.68696 18.6667 9.33333 18.6667H1.33333ZM1.33333 0C0.979711 0 0.640573 0.140476 0.390524 0.390524C0.140476 0.640573 0 0.979711 0 1.33333V14.6667C0 15.0203 0.140476 15.3594 0.390524 15.6095C0.640573 15.8595 0.979711 16 1.33333 16H9.33333C9.68696 16 10.0261 15.8595 10.2761 15.6095C10.5262 15.3594 10.6667 15.0203 10.6667 14.6667V1.33333C10.6667 0.979711 10.5262 0.640573 10.2761 0.390524C10.0261 0.140476 9.68696 0 9.33333 0H1.33333ZM13.3333 9.33333C13.3333 9.68696 13.4738 10.0261 13.7239 10.2761C13.9739 10.5262 14.313 10.6667 14.6667 10.6667H22.6667C23.0203 10.6667 23.3594 10.5262 23.6095 10.2761C23.8595 10.0261 24 9.68696 24 9.33333V1.33333C24 0.979711 23.8595 0.640573 23.6095 0.390524C23.3594 0.140476 23.0203 0 22.6667 0H14.6667C14.313 0 13.9739 0.140476 13.7239 0.390524C13.4738 0.640573 13.3333 0.979711 13.3333 1.33333V9.33333ZM14.6667 24C14.313 24 13.9739 23.8595 13.7239 23.6095C13.4738 23.3594 13.3333 23.0203 13.3333 22.6667V14.6667C13.3333 14.313 13.4738 13.9739 13.7239 13.7239C13.9739 13.4738 14.313 13.3333 14.6667 13.3333H22.6667C23.0203 13.3333 23.3594 13.4738 23.6095 13.7239C23.8595 13.9739 24 14.313 24 14.6667V22.6667C24 23.0203 23.8595 23.3594 23.6095 23.6095C23.3594 23.8595 23.0203 24 22.6667 24H14.6667Z",
        fill: "currentColor"
      }
    )
  }
);
export {
  X2 as Adev,
  c3 as Alert,
  E2 as AnalyticsSolid,
  u3 as Audio,
  $2 as Ban,
  k2 as Bell,
  h2 as Book,
  x2 as Calendar,
  q2 as Card,
  v3 as Chevron,
  I2 as Clip,
  n3 as Cloud,
  m3 as Connection,
  R2 as Copy,
  C3 as Cross,
  _2 as Cube,
  S3 as Diagram,
  B2 as Dialog,
  p2 as Document,
  L2 as DocumentStroke,
  s3 as Effects,
  g2 as Equalizer,
  z2 as Fastfood,
  Q2 as Filter,
  g3 as Fingerprint,
  m2 as Fire,
  L3 as Focus,
  B3 as Forward,
  P3 as Gift,
  F2 as Github,
  Z2 as Heart,
  O2 as Help,
  P2 as HelpStroke,
  W2 as History,
  j2 as Home,
  j3 as Infinity,
  M2 as Info,
  T2 as Invisible,
  y3 as Lamp,
  N2 as Language,
  Z3 as Library,
  D2 as Lock,
  b3 as LunchStroke,
  b2 as Menu,
  r3 as Microphone,
  f2 as Moon,
  d2 as MoonStroke,
  w3 as Mosaic,
  d3 as NoConnection,
  G2 as Pen,
  J2 as PenStroke,
  _3 as Power,
  f3 as QrCode,
  O3 as QrCodeV2,
  H3 as Recycle,
  p3 as Repeat,
  E3 as Rocket,
  y2 as RubCircle,
  H2 as Settings,
  x3 as Shield,
  h3 as ShieldStroke,
  k3 as Showcase,
  V2 as Smile,
  T3 as Speed,
  M3 as Stories,
  Y2 as Structure,
  w2 as Sun,
  v2 as SunStroke,
  V3 as Table,
  U2 as Tag,
  u2 as Trash,
  e3 as TrashRecovery,
  c2 as TrashStroke,
  l3 as Umbrella,
  o3 as UmbrellaStroke,
  A2 as Unlock,
  S2 as Visible,
  t3 as Wallet,
  R3 as World,
  i3 as YandexEng,
  a3 as YandexRu,
  K2 as Zone
};
