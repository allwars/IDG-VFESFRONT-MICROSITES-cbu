/**
 * Vodafone Reboot Framework: Version 2.7.1. Generation Date: 2021-01-13T15:57:25.433Z
 */
! function(t) {
    var e = {};
 
    function n(i) {
        if (e[i]) return e[i].exports;
        var o = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) n.d(i, o, function(e) {
                return t[e]
            }.bind(null, o));
        return i
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 4)
 }([function(t, e, n) {
    (function(t) {
        var n, i, o;
 
        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        /*!
         * jQuery JavaScript Library v1.12.0
         * http://jquery.com/
         *
         * Includes Sizzle.js
         * http://sizzlejs.com/
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2016-01-08T19:56Z
         */
        i = "undefined" != typeof window ? window : this, o = function(i, o) {
            var s = [],
                a = i.document,
                l = s.slice,
                c = s.concat,
                u = s.push,
                d = s.indexOf,
                f = {},
                p = f.toString,
                h = f.hasOwnProperty,
                m = {},
                g = function t(e, n) {
                    return new t.fn.init(e, n)
                },
                v = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                y = /^-ms-/,
                b = /-([\da-z])/gi,
                x = function(t, e) {
                    return e.toUpperCase()
                };
 
            function w(t) {
                var e = !!t && "length" in t && t.length,
                    n = g.type(t);
                return "function" !== n && !g.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
            }
            g.fn = g.prototype = {
                jquery: "1.12.0",
                constructor: g,
                selector: "",
                length: 0,
                toArray: function() {
                    return l.call(this)
                },
                get: function(t) {
                    return null != t ? t < 0 ? this[t + this.length] : this[t] : l.call(this)
                },
                pushStack: function(t) {
                    var e = g.merge(this.constructor(), t);
                    return e.prevObject = this, e.context = this.context, e
                },
                each: function(t) {
                    return g.each(this, t)
                },
                map: function(t) {
                    return this.pushStack(g.map(this, (function(e, n) {
                        return t.call(e, n, e)
                    })))
                },
                slice: function() {
                    return this.pushStack(l.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(t) {
                    var e = this.length,
                        n = +t + (t < 0 ? e : 0);
                    return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: u,
                sort: s.sort,
                splice: s.splice
            }, g.extend = g.fn.extend = function() {
                var t, e, n, i, o, s, a = arguments[0] || {},
                    l = 1,
                    c = arguments.length,
                    u = !1;
                for ("boolean" == typeof a && (u = a, a = arguments[l] || {}, l++), "object" === r(a) || g.isFunction(a) || (a = {}), l === c && (a = this, l--); l < c; l++)
                    if (null != (o = arguments[l]))
                        for (i in o) t = a[i], a !== (n = o[i]) && (u && n && (g.isPlainObject(n) || (e = g.isArray(n))) ? (e ? (e = !1, s = t && g.isArray(t) ? t : []) : s = t && g.isPlainObject(t) ? t : {}, a[i] = g.extend(u, s, n)) : void 0 !== n && (a[i] = n));
                return a
            }, g.extend({
                expando: "jQuery" + ("1.12.0" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(t) {
                    throw new Error(t)
                },
                noop: function() {},
                isFunction: function(t) {
                    return "function" === g.type(t)
                },
                isArray: Array.isArray || function(t) {
                    return "array" === g.type(t)
                },
                isWindow: function(t) {
                    return null != t && t == t.window
                },
                isNumeric: function(t) {
                    var e = t && t.toString();
                    return !g.isArray(t) && e - parseFloat(e) + 1 >= 0
                },
                isEmptyObject: function(t) {
                    var e;
                    for (e in t) return !1;
                    return !0
                },
                isPlainObject: function(t) {
                    var e;
                    if (!t || "object" !== g.type(t) || t.nodeType || g.isWindow(t)) return !1;
                    try {
                        if (t.constructor && !h.call(t, "constructor") && !h.call(t.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (t) {
                        return !1
                    }
                    if (!m.ownFirst)
                        for (e in t) return h.call(t, e);
                    for (e in t);
                    return void 0 === e || h.call(t, e)
                },
                type: function(t) {
                    return null == t ? t + "" : "object" === r(t) || "function" == typeof t ? f[p.call(t)] || "object" : r(t)
                },
                globalEval: function(t) {
                    t && g.trim(t) && (i.execScript || function(t) {
                        i.eval.call(i, t)
                    })(t)
                },
                camelCase: function(t) {
                    return t.replace(y, "ms-").replace(b, x)
                },
                nodeName: function(t, e) {
                    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                },
                each: function(t, e) {
                    var n, i = 0;
                    if (w(t))
                        for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
                    else
                        for (i in t)
                            if (!1 === e.call(t[i], i, t[i])) break;
                    return t
                },
                trim: function(t) {
                    return null == t ? "" : (t + "").replace(v, "")
                },
                makeArray: function(t, e) {
                    var n = e || [];
                    return null != t && (w(Object(t)) ? g.merge(n, "string" == typeof t ? [t] : t) : u.call(n, t)), n
                },
                inArray: function(t, e, n) {
                    var i;
                    if (e) {
                        if (d) return d.call(e, t, n);
                        for (i = e.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                            if (n in e && e[n] === t) return n
                    }
                    return -1
                },
                merge: function(t, e) {
                    for (var n = +e.length, i = 0, o = t.length; i < n;) t[o++] = e[i++];
                    if (n != n)
                        for (; void 0 !== e[i];) t[o++] = e[i++];
                    return t.length = o, t
                },
                grep: function(t, e, n) {
                    for (var i = [], o = 0, r = t.length, s = !n; o < r; o++) !e(t[o], o) !== s && i.push(t[o]);
                    return i
                },
                map: function(t, e, n) {
                    var i, o, r = 0,
                        s = [];
                    if (w(t))
                        for (i = t.length; r < i; r++) null != (o = e(t[r], r, n)) && s.push(o);
                    else
                        for (r in t) null != (o = e(t[r], r, n)) && s.push(o);
                    return c.apply([], s)
                },
                guid: 1,
                proxy: function(t, e) {
                    var n, i, o;
                    if ("string" == typeof e && (o = t[e], e = t, t = o), g.isFunction(t)) return n = l.call(arguments, 2), i = function() {
                        return t.apply(e || this, n.concat(l.call(arguments)))
                    }, i.guid = t.guid = t.guid || g.guid++, i
                },
                now: function() {
                    return +new Date
                },
                support: m
            }), "function" == typeof Symbol && (g.fn[Symbol.iterator] = s[Symbol.iterator]), g.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(t, e) {
                f["[object " + e + "]"] = e.toLowerCase()
            }));
            var T =
                /*!
                 * Sizzle CSS Selector Engine v2.2.1
                 * http://sizzlejs.com/
                 *
                 * Copyright jQuery Foundation and other contributors
                 * Released under the MIT license
                 * http://jquery.org/license
                 *
                 * Date: 2015-10-17
                 */
                function(t) {
                    var e, n, i, o, r, s, a, l, c, u, d, f, p, h, m, g, v, y, b, x = "sizzle" + 1 * new Date,
                        w = t.document,
                        T = 0,
                        C = 0,
                        S = ot(),
                        k = ot(),
                        E = ot(),
                        $ = function(t, e) {
                            return t === e && (d = !0), 0
                        },
                        N = {}.hasOwnProperty,
                        A = [],
                        D = A.pop,
                        j = A.push,
                        L = A.push,
                        O = A.slice,
                        I = function(t, e) {
                            for (var n = 0, i = t.length; n < i; n++)
                                if (t[n] === e) return n;
                            return -1
                        },
                        H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        R = "[\\x20\\t\\r\\n\\f]",
                        P = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                        q = "\\[" + R + "*(" + P + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + R + "*\\]",
                        _ = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
                        B = new RegExp(R + "+", "g"),
                        F = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
                        M = new RegExp("^" + R + "*," + R + "*"),
                        W = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
                        G = new RegExp("=" + R + "*([^\\]'\"]*?)" + R + "*\\]", "g"),
                        U = new RegExp(_),
                        z = new RegExp("^" + P + "$"),
                        X = {
                            ID: new RegExp("^#(" + P + ")"),
                            CLASS: new RegExp("^\\.(" + P + ")"),
                            TAG: new RegExp("^(" + P + "|[*])"),
                            ATTR: new RegExp("^" + q),
                            PSEUDO: new RegExp("^" + _),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                            bool: new RegExp("^(?:" + H + ")$", "i"),
                            needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
                        },
                        V = /^(?:input|select|textarea|button)$/i,
                        Q = /^h\d$/i,
                        J = /^[^{]+\{\s*\[native \w/,
                        Y = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        K = /[+~]/,
                        Z = /'|\\/g,
                        tt = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"),
                        et = function(t, e, n) {
                            var i = "0x" + e - 65536;
                            return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                        },
                        nt = function() {
                            f()
                        };
                    try {
                        L.apply(A = O.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
                    } catch (t) {
                        L = {
                            apply: A.length ? function(t, e) {
                                j.apply(t, O.call(e))
                            } : function(t, e) {
                                for (var n = t.length, i = 0; t[n++] = e[i++];);
                                t.length = n - 1
                            }
                        }
                    }
 
                    function it(t, e, i, o) {
                        var r, a, c, u, d, h, v, y, T = e && e.ownerDocument,
                            C = e ? e.nodeType : 9;
                        if (i = i || [], "string" != typeof t || !t || 1 !== C && 9 !== C && 11 !== C) return i;
                        if (!o && ((e ? e.ownerDocument || e : w) !== p && f(e), e = e || p, m)) {
                            if (11 !== C && (h = Y.exec(t)))
                                if (r = h[1]) {
                                    if (9 === C) {
                                        if (!(c = e.getElementById(r))) return i;
                                        if (c.id === r) return i.push(c), i
                                    } else if (T && (c = T.getElementById(r)) && b(e, c) && c.id === r) return i.push(c), i
                                } else {
                                    if (h[2]) return L.apply(i, e.getElementsByTagName(t)), i;
                                    if ((r = h[3]) && n.getElementsByClassName && e.getElementsByClassName) return L.apply(i, e.getElementsByClassName(r)), i
                                } if (n.qsa && !E[t + " "] && (!g || !g.test(t))) {
                                if (1 !== C) T = e, y = t;
                                else if ("object" !== e.nodeName.toLowerCase()) {
                                    for ((u = e.getAttribute("id")) ? u = u.replace(Z, "\\$&") : e.setAttribute("id", u = x), a = (v = s(t)).length, d = z.test(u) ? "#" + u : "[id='" + u + "']"; a--;) v[a] = d + " " + ht(v[a]);
                                    y = v.join(","), T = K.test(t) && ft(e.parentNode) || e
                                }
                                if (y) try {
                                    return L.apply(i, T.querySelectorAll(y)), i
                                } catch (t) {} finally {
                                    u === x && e.removeAttribute("id")
                                }
                            }
                        }
                        return l(t.replace(F, "$1"), e, i, o)
                    }
 
                    function ot() {
                        var t = [];
                        return function e(n, o) {
                            return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = o
                        }
                    }
 
                    function rt(t) {
                        return t[x] = !0, t
                    }
 
                    function st(t) {
                        var e = p.createElement("div");
                        try {
                            return !!t(e)
                        } catch (t) {
                            return !1
                        } finally {
                            e.parentNode && e.parentNode.removeChild(e), e = null
                        }
                    }
 
                    function at(t, e) {
                        for (var n = t.split("|"), o = n.length; o--;) i.attrHandle[n[o]] = e
                    }
 
                    function lt(t, e) {
                        var n = e && t,
                            i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || 1 << 31) - (~t.sourceIndex || 1 << 31);
                        if (i) return i;
                        if (n)
                            for (; n = n.nextSibling;)
                                if (n === e) return -1;
                        return t ? 1 : -1
                    }
 
                    function ct(t) {
                        return function(e) {
                            return "input" === e.nodeName.toLowerCase() && e.type === t
                        }
                    }
 
                    function ut(t) {
                        return function(e) {
                            var n = e.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && e.type === t
                        }
                    }
 
                    function dt(t) {
                        return rt((function(e) {
                            return e = +e, rt((function(n, i) {
                                for (var o, r = t([], n.length, e), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                            }))
                        }))
                    }
 
                    function ft(t) {
                        return t && void 0 !== t.getElementsByTagName && t
                    }
                    for (e in n = it.support = {}, r = it.isXML = function(t) {
                            var e = t && (t.ownerDocument || t).documentElement;
                            return !!e && "HTML" !== e.nodeName
                        }, f = it.setDocument = function(t) {
                            var e, o, s = t ? t.ownerDocument || t : w;
                            return s !== p && 9 === s.nodeType && s.documentElement ? (h = (p = s).documentElement, m = !r(p), (o = p.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", nt, !1) : o.attachEvent && o.attachEvent("onunload", nt)), n.attributes = st((function(t) {
                                return t.className = "i", !t.getAttribute("className")
                            })), n.getElementsByTagName = st((function(t) {
                                return t.appendChild(p.createComment("")), !t.getElementsByTagName("*").length
                            })), n.getElementsByClassName = J.test(p.getElementsByClassName), n.getById = st((function(t) {
                                return h.appendChild(t).id = x, !p.getElementsByName || !p.getElementsByName(x).length
                            })), n.getById ? (i.find.ID = function(t, e) {
                                if (void 0 !== e.getElementById && m) {
                                    var n = e.getElementById(t);
                                    return n ? [n] : []
                                }
                            }, i.filter.ID = function(t) {
                                var e = t.replace(tt, et);
                                return function(t) {
                                    return t.getAttribute("id") === e
                                }
                            }) : (delete i.find.ID, i.filter.ID = function(t) {
                                var e = t.replace(tt, et);
                                return function(t) {
                                    var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                                    return n && n.value === e
                                }
                            }), i.find.TAG = n.getElementsByTagName ? function(t, e) {
                                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
                            } : function(t, e) {
                                var n, i = [],
                                    o = 0,
                                    r = e.getElementsByTagName(t);
                                if ("*" === t) {
                                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                                    return i
                                }
                                return r
                            }, i.find.CLASS = n.getElementsByClassName && function(t, e) {
                                if (void 0 !== e.getElementsByClassName && m) return e.getElementsByClassName(t)
                            }, v = [], g = [], (n.qsa = J.test(p.querySelectorAll)) && (st((function(t) {
                                h.appendChild(t).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + R + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + R + "*(?:value|" + H + ")"), t.querySelectorAll("[id~=" + x + "-]").length || g.push("~="), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + x + "+*").length || g.push(".#.+[+~]")
                            })), st((function(t) {
                                var e = p.createElement("input");
                                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + R + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:")
                            }))), (n.matchesSelector = J.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && st((function(t) {
                                n.disconnectedMatch = y.call(t, "div"), y.call(t, "[s!='']:x"), v.push("!=", _)
                            })), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), e = J.test(h.compareDocumentPosition), b = e || J.test(h.contains) ? function(t, e) {
                                var n = 9 === t.nodeType ? t.documentElement : t,
                                    i = e && e.parentNode;
                                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                            } : function(t, e) {
                                if (e)
                                    for (; e = e.parentNode;)
                                        if (e === t) return !0;
                                return !1
                            }, $ = e ? function(t, e) {
                                if (t === e) return d = !0, 0;
                                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                                return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t === p || t.ownerDocument === w && b(w, t) ? -1 : e === p || e.ownerDocument === w && b(w, e) ? 1 : u ? I(u, t) - I(u, e) : 0 : 4 & i ? -1 : 1)
                            } : function(t, e) {
                                if (t === e) return d = !0, 0;
                                var n, i = 0,
                                    o = t.parentNode,
                                    r = e.parentNode,
                                    s = [t],
                                    a = [e];
                                if (!o || !r) return t === p ? -1 : e === p ? 1 : o ? -1 : r ? 1 : u ? I(u, t) - I(u, e) : 0;
                                if (o === r) return lt(t, e);
                                for (n = t; n = n.parentNode;) s.unshift(n);
                                for (n = e; n = n.parentNode;) a.unshift(n);
                                for (; s[i] === a[i];) i++;
                                return i ? lt(s[i], a[i]) : s[i] === w ? -1 : a[i] === w ? 1 : 0
                            }, p) : p
                        }, it.matches = function(t, e) {
                            return it(t, null, null, e)
                        }, it.matchesSelector = function(t, e) {
                            if ((t.ownerDocument || t) !== p && f(t), e = e.replace(G, "='$1']"), n.matchesSelector && m && !E[e + " "] && (!v || !v.test(e)) && (!g || !g.test(e))) try {
                                var i = y.call(t, e);
                                if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                            } catch (t) {}
                            return it(e, p, null, [t]).length > 0
                        }, it.contains = function(t, e) {
                            return (t.ownerDocument || t) !== p && f(t), b(t, e)
                        }, it.attr = function(t, e) {
                            (t.ownerDocument || t) !== p && f(t);
                            var o = i.attrHandle[e.toLowerCase()],
                                r = o && N.call(i.attrHandle, e.toLowerCase()) ? o(t, e, !m) : void 0;
                            return void 0 !== r ? r : n.attributes || !m ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
                        }, it.error = function(t) {
                            throw new Error("Syntax error, unrecognized expression: " + t)
                        }, it.uniqueSort = function(t) {
                            var e, i = [],
                                o = 0,
                                r = 0;
                            if (d = !n.detectDuplicates, u = !n.sortStable && t.slice(0), t.sort($), d) {
                                for (; e = t[r++];) e === t[r] && (o = i.push(r));
                                for (; o--;) t.splice(i[o], 1)
                            }
                            return u = null, t
                        }, o = it.getText = function(t) {
                            var e, n = "",
                                i = 0,
                                r = t.nodeType;
                            if (r) {
                                if (1 === r || 9 === r || 11 === r) {
                                    if ("string" == typeof t.textContent) return t.textContent;
                                    for (t = t.firstChild; t; t = t.nextSibling) n += o(t)
                                } else if (3 === r || 4 === r) return t.nodeValue
                            } else
                                for (; e = t[i++];) n += o(e);
                            return n
                        }, (i = it.selectors = {
                            cacheLength: 50,
                            createPseudo: rt,
                            match: X,
                            attrHandle: {},
                            find: {},
                            relative: {
                                ">": {
                                    dir: "parentNode",
                                    first: !0
                                },
                                " ": {
                                    dir: "parentNode"
                                },
                                "+": {
                                    dir: "previousSibling",
                                    first: !0
                                },
                                "~": {
                                    dir: "previousSibling"
                                }
                            },
                            preFilter: {
                                ATTR: function(t) {
                                    return t[1] = t[1].replace(tt, et), t[3] = (t[3] || t[4] || t[5] || "").replace(tt, et), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                                },
                                CHILD: function(t) {
                                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || it.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && it.error(t[0]), t
                                },
                                PSEUDO: function(t) {
                                    var e, n = !t[6] && t[2];
                                    return X.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && U.test(n) && (e = s(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                                }
                            },
                            filter: {
                                TAG: function(t) {
                                    var e = t.replace(tt, et).toLowerCase();
                                    return "*" === t ? function() {
                                        return !0
                                    } : function(t) {
                                        return t.nodeName && t.nodeName.toLowerCase() === e
                                    }
                                },
                                CLASS: function(t) {
                                    var e = S[t + " "];
                                    return e || (e = new RegExp("(^|" + R + ")" + t + "(" + R + "|$)")) && S(t, (function(t) {
                                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                                    }))
                                },
                                ATTR: function(t, e, n) {
                                    return function(i) {
                                        var o = it.attr(i, t);
                                        return null == o ? "!=" === e : !e || (o += "", "=" === e ? o === n : "!=" === e ? o !== n : "^=" === e ? n && 0 === o.indexOf(n) : "*=" === e ? n && o.indexOf(n) > -1 : "$=" === e ? n && o.slice(-n.length) === n : "~=" === e ? (" " + o.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === e && (o === n || o.slice(0, n.length + 1) === n + "-"))
                                    }
                                },
                                CHILD: function(t, e, n, i, o) {
                                    var r = "nth" !== t.slice(0, 3),
                                        s = "last" !== t.slice(-4),
                                        a = "of-type" === e;
                                    return 1 === i && 0 === o ? function(t) {
                                        return !!t.parentNode
                                    } : function(e, n, l) {
                                        var c, u, d, f, p, h, m = r !== s ? "nextSibling" : "previousSibling",
                                            g = e.parentNode,
                                            v = a && e.nodeName.toLowerCase(),
                                            y = !l && !a,
                                            b = !1;
                                        if (g) {
                                            if (r) {
                                                for (; m;) {
                                                    for (f = e; f = f[m];)
                                                        if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                                    h = m = "only" === t && !h && "nextSibling"
                                                }
                                                return !0
                                            }
                                            if (h = [s ? g.firstChild : g.lastChild], s && y) {
                                                for (b = (p = (c = (u = (d = (f = g)[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[t] || [])[0] === T && c[1]) && c[2], f = p && g.childNodes[p]; f = ++p && f && f[m] || (b = p = 0) || h.pop();)
                                                    if (1 === f.nodeType && ++b && f === e) {
                                                        u[t] = [T, p, b];
                                                        break
                                                    }
                                            } else if (y && (b = p = (c = (u = (d = (f = e)[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[t] || [])[0] === T && c[1]), !1 === b)
                                                for (;
                                                    (f = ++p && f && f[m] || (b = p = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && ((u = (d = f[x] || (f[x] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[t] = [T, b]), f !== e)););
                                            return (b -= o) === i || b % i == 0 && b / i >= 0
                                        }
                                    }
                                },
                                PSEUDO: function(t, e) {
                                    var n, o = i.pseudos[t] || i.setFilters[t.toLowerCase()] || it.error("unsupported pseudo: " + t);
                                    return o[x] ? o(e) : o.length > 1 ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? rt((function(t, n) {
                                        for (var i, r = o(t, e), s = r.length; s--;) t[i = I(t, r[s])] = !(n[i] = r[s])
                                    })) : function(t) {
                                        return o(t, 0, n)
                                    }) : o
                                }
                            },
                            pseudos: {
                                not: rt((function(t) {
                                    var e = [],
                                        n = [],
                                        i = a(t.replace(F, "$1"));
                                    return i[x] ? rt((function(t, e, n, o) {
                                        for (var r, s = i(t, null, o, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                                    })) : function(t, o, r) {
                                        return e[0] = t, i(e, null, r, n), e[0] = null, !n.pop()
                                    }
                                })),
                                has: rt((function(t) {
                                    return function(e) {
                                        return it(t, e).length > 0
                                    }
                                })),
                                contains: rt((function(t) {
                                    return t = t.replace(tt, et),
                                        function(e) {
                                            return (e.textContent || e.innerText || o(e)).indexOf(t) > -1
                                        }
                                })),
                                lang: rt((function(t) {
                                    return z.test(t || "") || it.error("unsupported lang: " + t), t = t.replace(tt, et).toLowerCase(),
                                        function(e) {
                                            var n;
                                            do {
                                                if (n = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                            } while ((e = e.parentNode) && 1 === e.nodeType);
                                            return !1
                                        }
                                })),
                                target: function(e) {
                                    var n = t.location && t.location.hash;
                                    return n && n.slice(1) === e.id
                                },
                                root: function(t) {
                                    return t === h
                                },
                                focus: function(t) {
                                    return t === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                                },
                                enabled: function(t) {
                                    return !1 === t.disabled
                                },
                                disabled: function(t) {
                                    return !0 === t.disabled
                                },
                                checked: function(t) {
                                    var e = t.nodeName.toLowerCase();
                                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                                },
                                selected: function(t) {
                                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                                },
                                empty: function(t) {
                                    for (t = t.firstChild; t; t = t.nextSibling)
                                        if (t.nodeType < 6) return !1;
                                    return !0
                                },
                                parent: function(t) {
                                    return !i.pseudos.empty(t)
                                },
                                header: function(t) {
                                    return Q.test(t.nodeName)
                                },
                                input: function(t) {
                                    return V.test(t.nodeName)
                                },
                                button: function(t) {
                                    var e = t.nodeName.toLowerCase();
                                    return "input" === e && "button" === t.type || "button" === e
                                },
                                text: function(t) {
                                    var e;
                                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                                },
                                first: dt((function() {
                                    return [0]
                                })),
                                last: dt((function(t, e) {
                                    return [e - 1]
                                })),
                                eq: dt((function(t, e, n) {
                                    return [n < 0 ? n + e : n]
                                })),
                                even: dt((function(t, e) {
                                    for (var n = 0; n < e; n += 2) t.push(n);
                                    return t
                                })),
                                odd: dt((function(t, e) {
                                    for (var n = 1; n < e; n += 2) t.push(n);
                                    return t
                                })),
                                lt: dt((function(t, e, n) {
                                    for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i);
                                    return t
                                })),
                                gt: dt((function(t, e, n) {
                                    for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                                    return t
                                }))
                            }
                        }).pseudos.nth = i.pseudos.eq, {
                            radio: !0,
                            checkbox: !0,
                            file: !0,
                            password: !0,
                            image: !0
                        }) i.pseudos[e] = ct(e);
                    for (e in {
                            submit: !0,
                            reset: !0
                        }) i.pseudos[e] = ut(e);
 
                    function pt() {}
 
                    function ht(t) {
                        for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                        return i
                    }
 
                    function mt(t, e, n) {
                        var i = e.dir,
                            o = n && "parentNode" === i,
                            r = C++;
                        return e.first ? function(e, n, r) {
                            for (; e = e[i];)
                                if (1 === e.nodeType || o) return t(e, n, r)
                        } : function(e, n, s) {
                            var a, l, c, u = [T, r];
                            if (s) {
                                for (; e = e[i];)
                                    if ((1 === e.nodeType || o) && t(e, n, s)) return !0
                            } else
                                for (; e = e[i];)
                                    if (1 === e.nodeType || o) {
                                        if ((a = (l = (c = e[x] || (e[x] = {}))[e.uniqueID] || (c[e.uniqueID] = {}))[i]) && a[0] === T && a[1] === r) return u[2] = a[2];
                                        if (l[i] = u, u[2] = t(e, n, s)) return !0
                                    }
                        }
                    }
 
                    function gt(t) {
                        return t.length > 1 ? function(e, n, i) {
                            for (var o = t.length; o--;)
                                if (!t[o](e, n, i)) return !1;
                            return !0
                        } : t[0]
                    }
 
                    function vt(t, e, n, i, o) {
                        for (var r, s = [], a = 0, l = t.length, c = null != e; a < l; a++)(r = t[a]) && (n && !n(r, i, o) || (s.push(r), c && e.push(a)));
                        return s
                    }
 
                    function yt(t, e, n, i, o, r) {
                        return i && !i[x] && (i = yt(i)), o && !o[x] && (o = yt(o, r)), rt((function(r, s, a, l) {
                            var c, u, d, f = [],
                                p = [],
                                h = s.length,
                                m = r || function(t, e, n) {
                                    for (var i = 0, o = e.length; i < o; i++) it(t, e[i], n);
                                    return n
                                }(e || "*", a.nodeType ? [a] : a, []),
                                g = !t || !r && e ? m : vt(m, f, t, a, l),
                                v = n ? o || (r ? t : h || i) ? [] : s : g;
                            if (n && n(g, v, a, l), i)
                                for (c = vt(v, p), i(c, [], a, l), u = c.length; u--;)(d = c[u]) && (v[p[u]] = !(g[p[u]] = d));
                            if (r) {
                                if (o || t) {
                                    if (o) {
                                        for (c = [], u = v.length; u--;)(d = v[u]) && c.push(g[u] = d);
                                        o(null, v = [], c, l)
                                    }
                                    for (u = v.length; u--;)(d = v[u]) && (c = o ? I(r, d) : f[u]) > -1 && (r[c] = !(s[c] = d))
                                }
                            } else v = vt(v === s ? v.splice(h, v.length) : v), o ? o(null, s, v, l) : L.apply(s, v)
                        }))
                    }
 
                    function bt(t) {
                        for (var e, n, o, r = t.length, s = i.relative[t[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = mt((function(t) {
                                return t === e
                            }), a, !0), d = mt((function(t) {
                                return I(e, t) > -1
                            }), a, !0), f = [function(t, n, i) {
                                var o = !s && (i || n !== c) || ((e = n).nodeType ? u(t, n, i) : d(t, n, i));
                                return e = null, o
                            }]; l < r; l++)
                            if (n = i.relative[t[l].type]) f = [mt(gt(f), n)];
                            else {
                                if ((n = i.filter[t[l].type].apply(null, t[l].matches))[x]) {
                                    for (o = ++l; o < r && !i.relative[t[o].type]; o++);
                                    return yt(l > 1 && gt(f), l > 1 && ht(t.slice(0, l - 1).concat({
                                        value: " " === t[l - 2].type ? "*" : ""
                                    })).replace(F, "$1"), n, l < o && bt(t.slice(l, o)), o < r && bt(t = t.slice(o)), o < r && ht(t))
                                }
                                f.push(n)
                            } return gt(f)
                    }
                    return pt.prototype = i.filters = i.pseudos, i.setFilters = new pt, s = it.tokenize = function(t, e) {
                        var n, o, r, s, a, l, c, u = k[t + " "];
                        if (u) return e ? 0 : u.slice(0);
                        for (a = t, l = [], c = i.preFilter; a;) {
                            for (s in n && !(o = M.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = W.exec(a)) && (n = o.shift(), r.push({
                                    value: n,
                                    type: o[0].replace(F, " ")
                                }), a = a.slice(n.length)), i.filter) !(o = X[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), r.push({
                                value: n,
                                type: s,
                                matches: o
                            }), a = a.slice(n.length));
                            if (!n) break
                        }
                        return e ? a.length : a ? it.error(t) : k(t, l).slice(0)
                    }, a = it.compile = function(t, e) {
                        var n, o = [],
                            r = [],
                            a = E[t + " "];
                        if (!a) {
                            for (e || (e = s(t)), n = e.length; n--;)(a = bt(e[n]))[x] ? o.push(a) : r.push(a);
                            (a = E(t, function(t, e) {
                                var n = e.length > 0,
                                    o = t.length > 0,
                                    r = function(r, s, a, l, u) {
                                        var d, h, g, v = 0,
                                            y = "0",
                                            b = r && [],
                                            x = [],
                                            w = c,
                                            C = r || o && i.find.TAG("*", u),
                                            S = T += null == w ? 1 : Math.random() || .1,
                                            k = C.length;
                                        for (u && (c = s === p || s || u); y !== k && null != (d = C[y]); y++) {
                                            if (o && d) {
                                                for (h = 0, s || d.ownerDocument === p || (f(d), a = !m); g = t[h++];)
                                                    if (g(d, s || p, a)) {
                                                        l.push(d);
                                                        break
                                                    } u && (T = S)
                                            }
                                            n && ((d = !g && d) && v--, r && b.push(d))
                                        }
                                        if (v += y, n && y !== v) {
                                            for (h = 0; g = e[h++];) g(b, x, s, a);
                                            if (r) {
                                                if (v > 0)
                                                    for (; y--;) b[y] || x[y] || (x[y] = D.call(l));
                                                x = vt(x)
                                            }
                                            L.apply(l, x), u && !r && x.length > 0 && v + e.length > 1 && it.uniqueSort(l)
                                        }
                                        return u && (T = S, c = w), b
                                    };
                                return n ? rt(r) : r
                            }(r, o))).selector = t
                        }
                        return a
                    }, l = it.select = function(t, e, o, r) {
                        var l, c, u, d, f, p = "function" == typeof t && t,
                            h = !r && s(t = p.selector || t);
                        if (o = o || [], 1 === h.length) {
                            if ((c = h[0] = h[0].slice(0)).length > 2 && "ID" === (u = c[0]).type && n.getById && 9 === e.nodeType && m && i.relative[c[1].type]) {
                                if (!(e = (i.find.ID(u.matches[0].replace(tt, et), e) || [])[0])) return o;
                                p && (e = e.parentNode), t = t.slice(c.shift().value.length)
                            }
                            for (l = X.needsContext.test(t) ? 0 : c.length; l-- && (u = c[l], !i.relative[d = u.type]);)
                                if ((f = i.find[d]) && (r = f(u.matches[0].replace(tt, et), K.test(c[0].type) && ft(e.parentNode) || e))) {
                                    if (c.splice(l, 1), !(t = r.length && ht(c))) return L.apply(o, r), o;
                                    break
                                }
                        }
                        return (p || a(t, h))(r, e, !m, o, !e || K.test(t) && ft(e.parentNode) || e), o
                    }, n.sortStable = x.split("").sort($).join("") === x, n.detectDuplicates = !!d, f(), n.sortDetached = st((function(t) {
                        return 1 & t.compareDocumentPosition(p.createElement("div"))
                    })), st((function(t) {
                        return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                    })) || at("type|href|height|width", (function(t, e, n) {
                        if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                    })), n.attributes && st((function(t) {
                        return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                    })) || at("value", (function(t, e, n) {
                        if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
                    })), st((function(t) {
                        return null == t.getAttribute("disabled")
                    })) || at(H, (function(t, e, n) {
                        var i;
                        if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                    })), it
                }(i);
            g.find = T, (g.expr = T.selectors)[":"] = g.expr.pseudos, g.uniqueSort = g.unique = T.uniqueSort, g.text = T.getText, g.isXMLDoc = T.isXML, g.contains = T.contains;
            var C = function(t, e, n) {
                    for (var i = [], o = void 0 !== n;
                        (t = t[e]) && 9 !== t.nodeType;)
                        if (1 === t.nodeType) {
                            if (o && g(t).is(n)) break;
                            i.push(t)
                        } return i
                },
                S = function(t, e) {
                    for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                    return n
                },
                k = g.expr.match.needsContext,
                E = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
                $ = /^.[^:#\[\.,]*$/;
 
            function N(t, e, n) {
                if (g.isFunction(e)) return g.grep(t, (function(t, i) {
                    return !!e.call(t, i, t) !== n
                }));
                if (e.nodeType) return g.grep(t, (function(t) {
                    return t === e !== n
                }));
                if ("string" == typeof e) {
                    if ($.test(e)) return g.filter(e, t, n);
                    e = g.filter(e, t)
                }
                return g.grep(t, (function(t) {
                    return g.inArray(t, e) > -1 !== n
                }))
            }
            g.filter = function(t, e, n) {
                var i = e[0];
                return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? g.find.matchesSelector(i, t) ? [i] : [] : g.find.matches(t, g.grep(e, (function(t) {
                    return 1 === t.nodeType
                })))
            }, g.fn.extend({
                find: function(t) {
                    var e, n = [],
                        i = this,
                        o = i.length;
                    if ("string" != typeof t) return this.pushStack(g(t).filter((function() {
                        for (e = 0; e < o; e++)
                            if (g.contains(i[e], this)) return !0
                    })));
                    for (e = 0; e < o; e++) g.find(t, i[e], n);
                    return (n = this.pushStack(o > 1 ? g.unique(n) : n)).selector = this.selector ? this.selector + " " + t : t, n
                },
                filter: function(t) {
                    return this.pushStack(N(this, t || [], !1))
                },
                not: function(t) {
                    return this.pushStack(N(this, t || [], !0))
                },
                is: function(t) {
                    return !!N(this, "string" == typeof t && k.test(t) ? g(t) : t || [], !1).length
                }
            });
            var A, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
            (g.fn.init = function(t, e, n) {
                var i, o;
                if (!t) return this;
                if (n = n || A, "string" == typeof t) {
                    if (!(i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : D.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                    if (i[1]) {
                        if (e = e instanceof g ? e[0] : e, g.merge(this, g.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : a, !0)), E.test(i[1]) && g.isPlainObject(e))
                            for (i in e) g.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                        return this
                    }
                    if ((o = a.getElementById(i[2])) && o.parentNode) {
                        if (o.id !== i[2]) return A.find(t);
                        this.length = 1, this[0] = o
                    }
                    return this.context = a, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : g.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(g) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), g.makeArray(t, this))
            }).prototype = g.fn, A = g(a);
            var j = /^(?:parents|prev(?:Until|All))/,
                L = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
 
            function O(t, e) {
                do {
                    t = t[e]
                } while (t && 1 !== t.nodeType);
                return t
            }
            g.fn.extend({
                has: function(t) {
                    var e, n = g(t, this),
                        i = n.length;
                    return this.filter((function() {
                        for (e = 0; e < i; e++)
                            if (g.contains(this, n[e])) return !0
                    }))
                },
                closest: function(t, e) {
                    for (var n, i = 0, o = this.length, r = [], s = k.test(t) || "string" != typeof t ? g(t, e || this.context) : 0; i < o; i++)
                        for (n = this[i]; n && n !== e; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && g.find.matchesSelector(n, t))) {
                                r.push(n);
                                break
                            } return this.pushStack(r.length > 1 ? g.uniqueSort(r) : r)
                },
                index: function(t) {
                    return t ? "string" == typeof t ? g.inArray(this[0], g(t)) : g.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(t, e) {
                    return this.pushStack(g.uniqueSort(g.merge(this.get(), g(t, e))))
                },
                addBack: function(t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }
            }), g.each({
                parent: function(t) {
                    var e = t.parentNode;
                    return e && 11 !== e.nodeType ? e : null
                },
                parents: function(t) {
                    return C(t, "parentNode")
                },
                parentsUntil: function(t, e, n) {
                    return C(t, "parentNode", n)
                },
                next: function(t) {
                    return O(t, "nextSibling")
                },
                prev: function(t) {
                    return O(t, "previousSibling")
                },
                nextAll: function(t) {
                    return C(t, "nextSibling")
                },
                prevAll: function(t) {
                    return C(t, "previousSibling")
                },
                nextUntil: function(t, e, n) {
                    return C(t, "nextSibling", n)
                },
                prevUntil: function(t, e, n) {
                    return C(t, "previousSibling", n)
                },
                siblings: function(t) {
                    return S((t.parentNode || {}).firstChild, t)
                },
                children: function(t) {
                    return S(t.firstChild)
                },
                contents: function(t) {
                    return g.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : g.merge([], t.childNodes)
                }
            }, (function(t, e) {
                g.fn[t] = function(n, i) {
                    var o = g.map(this, e, n);
                    return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = g.filter(i, o)), this.length > 1 && (L[t] || (o = g.uniqueSort(o)), j.test(t) && (o = o.reverse())), this.pushStack(o)
                }
            }));
            var I, H, R = /\S+/g;
 
            function P() {
                a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q), i.removeEventListener("load", q)) : (a.detachEvent("onreadystatechange", q), i.detachEvent("onload", q))
            }
 
            function q() {
                (a.addEventListener || "load" === i.event.type || "complete" === a.readyState) && (P(), g.ready())
            }
            for (H in g.Callbacks = function(t) {
                    t = "string" == typeof t ? function(t) {
                        var e = {};
                        return g.each(t.match(R) || [], (function(t, n) {
                            e[n] = !0
                        })), e
                    }(t) : g.extend({}, t);
                    var e, n, i, o, r = [],
                        s = [],
                        a = -1,
                        l = function() {
                            for (o = t.once, i = e = !0; s.length; a = -1)
                                for (n = s.shift(); ++a < r.length;) !1 === r[a].apply(n[0], n[1]) && t.stopOnFalse && (a = r.length, n = !1);
                            t.memory || (n = !1), e = !1, o && (r = n ? [] : "")
                        },
                        c = {
                            add: function() {
                                return r && (n && !e && (a = r.length - 1, s.push(n)), function e(n) {
                                    g.each(n, (function(n, i) {
                                        g.isFunction(i) ? t.unique && c.has(i) || r.push(i) : i && i.length && "string" !== g.type(i) && e(i)
                                    }))
                                }(arguments), n && !e && l()), this
                            },
                            remove: function() {
                                return g.each(arguments, (function(t, e) {
                                    for (var n;
                                        (n = g.inArray(e, r, n)) > -1;) r.splice(n, 1), n <= a && a--
                                })), this
                            },
                            has: function(t) {
                                return t ? g.inArray(t, r) > -1 : r.length > 0
                            },
                            empty: function() {
                                return r && (r = []), this
                            },
                            disable: function() {
                                return o = s = [], r = n = "", this
                            },
                            disabled: function() {
                                return !r
                            },
                            lock: function() {
                                return o = !0, n || c.disable(), this
                            },
                            locked: function() {
                                return !!o
                            },
                            fireWith: function(t, n) {
                                return o || (n = [t, (n = n || []).slice ? n.slice() : n], s.push(n), e || l()), this
                            },
                            fire: function() {
                                return c.fireWith(this, arguments), this
                            },
                            fired: function() {
                                return !!i
                            }
                        };
                    return c
                }, g.extend({
                    Deferred: function(t) {
                        var e = [
                                ["resolve", "done", g.Callbacks("once memory"), "resolved"],
                                ["reject", "fail", g.Callbacks("once memory"), "rejected"],
                                ["notify", "progress", g.Callbacks("memory")]
                            ],
                            n = "pending",
                            i = {
                                state: function() {
                                    return n
                                },
                                always: function() {
                                    return o.done(arguments).fail(arguments), this
                                },
                                then: function() {
                                    var t = arguments;
                                    return g.Deferred((function(n) {
                                        g.each(e, (function(e, r) {
                                            var s = g.isFunction(t[e]) && t[e];
                                            o[r[1]]((function() {
                                                var t = s && s.apply(this, arguments);
                                                t && g.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                            }))
                                        })), t = null
                                    })).promise()
                                },
                                promise: function(t) {
                                    return null != t ? g.extend(t, i) : i
                                }
                            },
                            o = {};
                        return i.pipe = i.then, g.each(e, (function(t, r) {
                            var s = r[2],
                                a = r[3];
                            i[r[1]] = s.add, a && s.add((function() {
                                n = a
                            }), e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function() {
                                return o[r[0] + "With"](this === o ? i : this, arguments), this
                            }, o[r[0] + "With"] = s.fireWith
                        })), i.promise(o), t && t.call(o, o), o
                    },
                    when: function(t) {
                        var e, n, i, o = 0,
                            r = l.call(arguments),
                            s = r.length,
                            a = 1 !== s || t && g.isFunction(t.promise) ? s : 0,
                            c = 1 === a ? t : g.Deferred(),
                            u = function(t, n, i) {
                                return function(o) {
                                    n[t] = this, i[t] = arguments.length > 1 ? l.call(arguments) : o, i === e ? c.notifyWith(n, i) : --a || c.resolveWith(n, i)
                                }
                            };
                        if (s > 1)
                            for (e = new Array(s), n = new Array(s), i = new Array(s); o < s; o++) r[o] && g.isFunction(r[o].promise) ? r[o].promise().progress(u(o, n, e)).done(u(o, i, r)).fail(c.reject) : --a;
                        return a || c.resolveWith(i, r), c.promise()
                    }
                }), g.fn.ready = function(t) {
                    return g.ready.promise().done(t), this
                }, g.extend({
                    isReady: !1,
                    readyWait: 1,
                    holdReady: function(t) {
                        t ? g.readyWait++ : g.ready(!0)
                    },
                    ready: function(t) {
                        (!0 === t ? --g.readyWait : g.isReady) || (g.isReady = !0, !0 !== t && --g.readyWait > 0 || (I.resolveWith(a, [g]), g.fn.triggerHandler && (g(a).triggerHandler("ready"), g(a).off("ready"))))
                    }
                }), g.ready.promise = function(t) {
                    if (!I)
                        if (I = g.Deferred(), "complete" === a.readyState) i.setTimeout(g.ready);
                        else if (a.addEventListener) a.addEventListener("DOMContentLoaded", q), i.addEventListener("load", q);
                    else {
                        a.attachEvent("onreadystatechange", q), i.attachEvent("onload", q);
                        var e = !1;
                        try {
                            e = null == i.frameElement && a.documentElement
                        } catch (t) {}
                        e && e.doScroll && function t() {
                            if (!g.isReady) {
                                try {
                                    e.doScroll("left")
                                } catch (e) {
                                    return i.setTimeout(t, 50)
                                }
                                P(), g.ready()
                            }
                        }()
                    }
                    return I.promise(t)
                }, g.ready.promise(), g(m)) break;
            m.ownFirst = "0" === H, m.inlineBlockNeedsLayout = !1, g((function() {
                    var t, e, n, i;
                    (n = a.getElementsByTagName("body")[0]) && n.style && (e = a.createElement("div"), (i = a.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), void 0 !== e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", m.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
                })),
                function() {
                    var t = a.createElement("div");
                    m.deleteExpando = !0;
                    try {
                        delete t.test
                    } catch (t) {
                        m.deleteExpando = !1
                    }
                    t = null
                }();
            var _, B = function(t) {
                    var e = g.noData[(t.nodeName + " ").toLowerCase()],
                        n = +t.nodeType || 1;
                    return (1 === n || 9 === n) && (!e || !0 !== e && t.getAttribute("classid") === e)
                },
                F = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                M = /([A-Z])/g;
 
            function W(t, e, n) {
                if (void 0 === n && 1 === t.nodeType) {
                    var i = "data-" + e.replace(M, "-$1").toLowerCase();
                    if ("string" == typeof(n = t.getAttribute(i))) {
                        try {
                            n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : F.test(n) ? g.parseJSON(n) : n)
                        } catch (t) {}
                        g.data(t, e, n)
                    } else n = void 0
                }
                return n
            }
 
            function G(t) {
                var e;
                for (e in t)
                    if (("data" !== e || !g.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
                return !0
            }
 
            function U(t, e, n, i) {
                if (B(t)) {
                    var o, a, l = g.expando,
                        c = t.nodeType,
                        u = c ? g.cache : t,
                        d = c ? t[l] : t[l] && l;
                    if (d && u[d] && (i || u[d].data) || void 0 !== n || "string" != typeof e) return d || (d = c ? t[l] = s.pop() || g.guid++ : l), u[d] || (u[d] = c ? {} : {
                        toJSON: g.noop
                    }), "object" !== r(e) && "function" != typeof e || (i ? u[d] = g.extend(u[d], e) : u[d].data = g.extend(u[d].data, e)), a = u[d], i || (a.data || (a.data = {}), a = a.data), void 0 !== n && (a[g.camelCase(e)] = n), "string" == typeof e ? null == (o = a[e]) && (o = a[g.camelCase(e)]) : o = a, o
                }
            }
 
            function z(t, e, n) {
                if (B(t)) {
                    var i, o, r = t.nodeType,
                        s = r ? g.cache : t,
                        a = r ? t[g.expando] : g.expando;
                    if (s[a]) {
                        if (e && (i = n ? s[a] : s[a].data)) {
                            o = (e = g.isArray(e) ? e.concat(g.map(e, g.camelCase)) : e in i || (e = g.camelCase(e)) in i ? [e] : e.split(" ")).length;
                            for (; o--;) delete i[e[o]];
                            if (n ? !G(i) : !g.isEmptyObject(i)) return
                        }(n || (delete s[a].data, G(s[a]))) && (r ? g.cleanData([t], !0) : m.deleteExpando || s != s.window ? delete s[a] : s[a] = void 0)
                    }
                }
            }
            g.extend({
                cache: {},
                noData: {
                    "applet ": !0,
                    "embed ": !0,
                    "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                },
                hasData: function(t) {
                    return !!(t = t.nodeType ? g.cache[t[g.expando]] : t[g.expando]) && !G(t)
                },
                data: function(t, e, n) {
                    return U(t, e, n)
                },
                removeData: function(t, e) {
                    return z(t, e)
                },
                _data: function(t, e, n) {
                    return U(t, e, n, !0)
                },
                _removeData: function(t, e) {
                    return z(t, e, !0)
                }
            }), g.fn.extend({
                data: function(t, e) {
                    var n, i, o, s = this[0],
                        a = s && s.attributes;
                    if (void 0 === t) {
                        if (this.length && (o = g.data(s), 1 === s.nodeType && !g._data(s, "parsedAttrs"))) {
                            for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && W(s, i = g.camelCase(i.slice(5)), o[i]);
                            g._data(s, "parsedAttrs", !0)
                        }
                        return o
                    }
                    return "object" === r(t) ? this.each((function() {
                        g.data(this, t)
                    })) : arguments.length > 1 ? this.each((function() {
                        g.data(this, t, e)
                    })) : s ? W(s, t, g.data(s, t)) : void 0
                },
                removeData: function(t) {
                    return this.each((function() {
                        g.removeData(this, t)
                    }))
                }
            }), g.extend({
                queue: function(t, e, n) {
                    var i;
                    if (t) return i = g._data(t, e = (e || "fx") + "queue"), n && (!i || g.isArray(n) ? i = g._data(t, e, g.makeArray(n)) : i.push(n)), i || []
                },
                dequeue: function(t, e) {
                    var n = g.queue(t, e = e || "fx"),
                        i = n.length,
                        o = n.shift(),
                        r = g._queueHooks(t, e);
                    "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, (function() {
                        g.dequeue(t, e)
                    }), r)), !i && r && r.empty.fire()
                },
                _queueHooks: function(t, e) {
                    var n = e + "queueHooks";
                    return g._data(t, n) || g._data(t, n, {
                        empty: g.Callbacks("once memory").add((function() {
                            g._removeData(t, e + "queue"), g._removeData(t, n)
                        }))
                    })
                }
            }), g.fn.extend({
                queue: function(t, e) {
                    var n = 2;
                    return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? g.queue(this[0], t) : void 0 === e ? this : this.each((function() {
                        var n = g.queue(this, t, e);
                        g._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && g.dequeue(this, t)
                    }))
                },
                dequeue: function(t) {
                    return this.each((function() {
                        g.dequeue(this, t)
                    }))
                },
                clearQueue: function(t) {
                    return this.queue(t || "fx", [])
                },
                promise: function(t, e) {
                    var n, i = 1,
                        o = g.Deferred(),
                        r = this,
                        s = this.length,
                        a = function() {
                            --i || o.resolveWith(r, [r])
                        };
                    for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(n = g._data(r[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                    return a(), o.promise(e)
                }
            }), m.shrinkWrapBlocks = function() {
                return null != _ ? _ : (_ = !1, (e = a.getElementsByTagName("body")[0]) && e.style ? (t = a.createElement("div"), (n = a.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", e.appendChild(n).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(a.createElement("div")).style.width = "5px", _ = 3 !== t.offsetWidth), e.removeChild(n), _) : void 0);
                var t, e, n
            };
            var X = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                V = new RegExp("^(?:([+-])=|)(" + X + ")([a-z%]*)$", "i"),
                Q = ["Top", "Right", "Bottom", "Left"],
                J = function(t, e) {
                    return "none" === g.css(t = e || t, "display") || !g.contains(t.ownerDocument, t)
                };
 
            function Y(t, e, n, i) {
                var o, r = 1,
                    s = 20,
                    a = i ? function() {
                        return i.cur()
                    } : function() {
                        return g.css(t, e, "")
                    },
                    l = a(),
                    c = n && n[3] || (g.cssNumber[e] ? "" : "px"),
                    u = (g.cssNumber[e] || "px" !== c && +l) && V.exec(g.css(t, e));
                if (u && u[3] !== c) {
                    c = c || u[3], n = n || [], u = +l || 1;
                    do {
                        g.style(t, e, (u /= r = r || ".5") + c)
                    } while (r !== (r = a() / l) && 1 !== r && --s)
                }
                return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
            }
            var K, Z, tt, et = function t(e, n, i, o, r, s, a) {
                    var l = 0,
                        c = e.length,
                        u = null == i;
                    if ("object" === g.type(i))
                        for (l in r = !0, i) t(e, n, l, i[l], !0, s, a);
                    else if (void 0 !== o && (r = !0, g.isFunction(o) || (a = !0), u && (a ? (n.call(e, o), n = null) : (u = n, n = function(t, e, n) {
                            return u.call(g(t), n)
                        })), n))
                        for (; l < c; l++) n(e[l], i, a ? o : o.call(e[l], l, n(e[l], i)));
                    return r ? e : u ? n.call(e) : c ? n(e[0], i) : s
                },
                nt = /^(?:checkbox|radio)$/i,
                it = /<([\w:-]+)/,
                ot = /^$|\/(?:java|ecma)script/i,
                rt = /^\s+/,
                st = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
 
            function at(t) {
                var e = st.split("|"),
                    n = t.createDocumentFragment();
                if (n.createElement)
                    for (; e.length;) n.createElement(e.pop());
                return n
            }
            K = a.createElement("div"), Z = a.createDocumentFragment(), tt = a.createElement("input"), K.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", m.leadingWhitespace = 3 === K.firstChild.nodeType, m.tbody = !K.getElementsByTagName("tbody").length, m.htmlSerialize = !!K.getElementsByTagName("link").length, m.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, tt.type = "checkbox", tt.checked = !0, Z.appendChild(tt), m.appendChecked = tt.checked, K.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!K.cloneNode(!0).lastChild.defaultValue, Z.appendChild(K), (tt = a.createElement("input")).setAttribute("type", "radio"), tt.setAttribute("checked", "checked"), tt.setAttribute("name", "t"), K.appendChild(tt), m.checkClone = K.cloneNode(!0).cloneNode(!0).lastChild.checked, m.noCloneEvent = !!K.addEventListener, K[g.expando] = 1, m.attributes = !K.getAttribute(g.expando);
            var lt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: m.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            };
 
            function ct(t, e) {
                var n, i, o = 0,
                    r = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : void 0;
                if (!r)
                    for (r = [], n = t.childNodes || t; null != (i = n[o]); o++) !e || g.nodeName(i, e) ? r.push(i) : g.merge(r, ct(i, e));
                return void 0 === e || e && g.nodeName(t, e) ? g.merge([t], r) : r
            }
 
            function ut(t, e) {
                for (var n, i = 0; null != (n = t[i]); i++) g._data(n, "globalEval", !e || g._data(e[i], "globalEval"))
            }
            lt.optgroup = lt.option, lt.tbody = lt.tfoot = lt.colgroup = lt.caption = lt.thead, lt.th = lt.td;
            var dt = /<|&#?\w+;/,
                ft = /<tbody/i;
 
            function pt(t) {
                nt.test(t.type) && (t.defaultChecked = t.checked)
            }
 
            function ht(t, e, n, i, o) {
                for (var r, s, a, l, c, u, d, f = t.length, p = at(e), h = [], v = 0; v < f; v++)
                    if ((s = t[v]) || 0 === s)
                        if ("object" === g.type(s)) g.merge(h, s.nodeType ? [s] : s);
                        else if (dt.test(s)) {
                    for (l = l || p.appendChild(e.createElement("div")), c = (it.exec(s) || ["", ""])[1].toLowerCase(), d = lt[c] || lt._default, l.innerHTML = d[1] + g.htmlPrefilter(s) + d[2], r = d[0]; r--;) l = l.lastChild;
                    if (!m.leadingWhitespace && rt.test(s) && h.push(e.createTextNode(rt.exec(s)[0])), !m.tbody)
                        for (r = (s = "table" !== c || ft.test(s) ? "<table>" !== d[1] || ft.test(s) ? 0 : l : l.firstChild) && s.childNodes.length; r--;) g.nodeName(u = s.childNodes[r], "tbody") && !u.childNodes.length && s.removeChild(u);
                    for (g.merge(h, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
                    l = p.lastChild
                } else h.push(e.createTextNode(s));
                for (l && p.removeChild(l), m.appendChecked || g.grep(ct(h, "input"), pt), v = 0; s = h[v++];)
                    if (i && g.inArray(s, i) > -1) o && o.push(s);
                    else if (a = g.contains(s.ownerDocument, s), l = ct(p.appendChild(s), "script"), a && ut(l), n)
                    for (r = 0; s = l[r++];) ot.test(s.type || "") && n.push(s);
                return l = null, p
            }! function() {
                var t, e, n = a.createElement("div");
                for (t in {
                        submit: !0,
                        change: !0,
                        focusin: !0
                    }) e = "on" + t, (m[t] = e in i) || (n.setAttribute(e, "t"), m[t] = !1 === n.attributes[e].expando);
                n = null
            }();
            var mt = /^(?:input|select|textarea)$/i,
                gt = /^key/,
                vt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                yt = /^(?:focusinfocus|focusoutblur)$/,
                bt = /^([^.]*)(?:\.(.+)|)/;
 
            function xt() {
                return !0
            }
 
            function wt() {
                return !1
            }
 
            function Tt() {
                try {
                    return a.activeElement
                } catch (t) {}
            }
 
            function Ct(t, e, n, i, o, s) {
                var a, l;
                if ("object" === r(e)) {
                    for (l in "string" != typeof n && (i = i || n, n = void 0), e) Ct(t, l, n, i, e[l], s);
                    return t
                }
                if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = wt;
                else if (!o) return t;
                return 1 === s && (a = o, (o = function(t) {
                    return g().off(t), a.apply(this, arguments)
                }).guid = a.guid || (a.guid = g.guid++)), t.each((function() {
                    g.event.add(this, e, o, i, n)
                }))
            }
            g.event = {
                global: {},
                add: function(t, e, n, i, o) {
                    var r, s, a, l, c, u, d, f, p, h, m, v = g._data(t);
                    if (v) {
                        for (n.handler && (n = (l = n).handler, o = l.selector), n.guid || (n.guid = g.guid++), (s = v.events) || (s = v.events = {}), (u = v.handle) || ((u = v.handle = function(t) {
                                return void 0 === g || t && g.event.triggered === t.type ? void 0 : g.event.dispatch.apply(u.elem, arguments)
                            }).elem = t), a = (e = (e || "").match(R) || [""]).length; a--;) p = m = (r = bt.exec(e[a]) || [])[1], h = (r[2] || "").split(".").sort(), p && (c = g.event.special[p] || {}, p = (o ? c.delegateType : c.bindType) || p, c = g.event.special[p] || {}, d = g.extend({
                            type: p,
                            origType: m,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: o,
                            needsContext: o && g.expr.match.needsContext.test(o),
                            namespace: h.join(".")
                        }, l), (f = s[p]) || ((f = s[p] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(t, i, h, u) || (t.addEventListener ? t.addEventListener(p, u, !1) : t.attachEvent && t.attachEvent("on" + p, u))), c.add && (c.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, d) : f.push(d), g.event.global[p] = !0);
                        t = null
                    }
                },
                remove: function(t, e, n, i, o) {
                    var r, s, a, l, c, u, d, f, p, h, m, v = g.hasData(t) && g._data(t);
                    if (v && (u = v.events)) {
                        for (c = (e = (e || "").match(R) || [""]).length; c--;)
                            if (p = m = (a = bt.exec(e[c]) || [])[1], h = (a[2] || "").split(".").sort(), p) {
                                for (d = g.event.special[p] || {}, f = u[p = (i ? d.delegateType : d.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = f.length; r--;) s = f[r], !o && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (f.splice(r, 1), s.selector && f.delegateCount--, d.remove && d.remove.call(t, s));
                                l && !f.length && (d.teardown && !1 !== d.teardown.call(t, h, v.handle) || g.removeEvent(t, p, v.handle), delete u[p])
                            } else
                                for (p in u) g.event.remove(t, p + e[c], n, i, !0);
                        g.isEmptyObject(u) && (delete v.handle, g._removeData(t, "events"))
                    }
                },
                trigger: function(t, e, n, o) {
                    var s, l, c, u, d, f, p, m = [n || a],
                        v = h.call(t, "type") ? t.type : t,
                        y = h.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (c = f = n = n || a, 3 !== n.nodeType && 8 !== n.nodeType && !yt.test(v + g.event.triggered) && (v.indexOf(".") > -1 && (y = v.split("."), v = y.shift(), y.sort()), l = v.indexOf(":") < 0 && "on" + v, (t = t[g.expando] ? t : new g.Event(v, "object" === r(t) && t)).isTrigger = o ? 2 : 3, t.namespace = y.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : g.makeArray(e, [t]), d = g.event.special[v] || {}, o || !d.trigger || !1 !== d.trigger.apply(n, e))) {
                        if (!o && !d.noBubble && !g.isWindow(n)) {
                            for (u = d.delegateType || v, yt.test(u + v) || (c = c.parentNode); c; c = c.parentNode) m.push(c), f = c;
                            f === (n.ownerDocument || a) && m.push(f.defaultView || f.parentWindow || i)
                        }
                        for (p = 0;
                            (c = m[p++]) && !t.isPropagationStopped();) t.type = p > 1 ? u : d.bindType || v, (s = (g._data(c, "events") || {})[t.type] && g._data(c, "handle")) && s.apply(c, e), (s = l && c[l]) && s.apply && B(c) && (t.result = s.apply(c, e), !1 === t.result && t.preventDefault());
                        if (t.type = v, !o && !t.isDefaultPrevented() && (!d._default || !1 === d._default.apply(m.pop(), e)) && B(n) && l && n[v] && !g.isWindow(n)) {
                            (f = n[l]) && (n[l] = null), g.event.triggered = v;
                            try {
                                n[v]()
                            } catch (t) {}
                            g.event.triggered = void 0, f && (n[l] = f)
                        }
                        return t.result
                    }
                },
                dispatch: function(t) {
                    t = g.event.fix(t);
                    var e, n, i, o, r, s = [],
                        a = l.call(arguments),
                        c = (g._data(this, "events") || {})[t.type] || [],
                        u = g.event.special[t.type] || {};
                    if (a[0] = t, t.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, t)) {
                        for (s = g.event.handlers.call(this, t, c), e = 0;
                            (o = s[e++]) && !t.isPropagationStopped();)
                            for (t.currentTarget = o.elem, n = 0;
                                (r = o.handlers[n++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(r.namespace) || (t.handleObj = r, t.data = r.data, void 0 !== (i = ((g.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, t), t.result
                    }
                },
                handlers: function(t, e) {
                    var n, i, o, r, s = [],
                        a = e.delegateCount,
                        l = t.target;
                    if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                        for (; l != this; l = l.parentNode || this)
                            if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                                for (i = [], n = 0; n < a; n++) void 0 === i[o = (r = e[n]).selector + " "] && (i[o] = r.needsContext ? g(o, this).index(l) > -1 : g.find(o, this, null, [l]).length), i[o] && i.push(r);
                                i.length && s.push({
                                    elem: l,
                                    handlers: i
                                })
                            } return a < e.length && s.push({
                        elem: this,
                        handlers: e.slice(a)
                    }), s
                },
                fix: function(t) {
                    if (t[g.expando]) return t;
                    var e, n, i, o = t.type,
                        r = t,
                        s = this.fixHooks[o];
                    for (s || (this.fixHooks[o] = s = vt.test(o) ? this.mouseHooks : gt.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new g.Event(r), e = i.length; e--;) t[n = i[e]] = r[n];
                    return t.target || (t.target = r.srcElement || a), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, r) : t
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(t, e) {
                        return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(t, e) {
                        var n, i, o, r = e.button,
                            s = e.fromElement;
                        return null == t.pageX && null != e.clientX && (o = (i = t.target.ownerDocument || a).documentElement, n = i.body, t.pageX = e.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
                    }
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== Tt() && this.focus) try {
                                return this.focus(), !1
                            } catch (t) {}
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === Tt() && this.blur) return this.blur(), !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            if (g.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                        },
                        _default: function(t) {
                            return g.nodeName(t.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(t) {
                            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                        }
                    }
                },
                simulate: function(t, e, n) {
                    var i = g.extend(new g.Event, n, {
                        type: t,
                        isSimulated: !0
                    });
                    g.event.trigger(i, null, e), i.isDefaultPrevented() && n.preventDefault()
                }
            }, g.removeEvent = a.removeEventListener ? function(t, e, n) {
                t.removeEventListener && t.removeEventListener(e, n)
            } : function(t, e, n) {
                var i = "on" + e;
                t.detachEvent && (void 0 === t[i] && (t[i] = null), t.detachEvent(i, n))
            }, (g.Event = function(t, e) {
                if (!(this instanceof g.Event)) return new g.Event(t, e);
                t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? xt : wt) : this.type = t, e && g.extend(this, e), this.timeStamp = t && t.timeStamp || g.now(), this[g.expando] = !0
            }).prototype = {
                constructor: g.Event,
                isDefaultPrevented: wt,
                isPropagationStopped: wt,
                isImmediatePropagationStopped: wt,
                preventDefault: function() {
                    var t = this.originalEvent;
                    this.isDefaultPrevented = xt, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
                },
                stopPropagation: function() {
                    var t = this.originalEvent;
                    this.isPropagationStopped = xt, t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
                },
                stopImmediatePropagation: function() {
                    var t = this.originalEvent;
                    this.isImmediatePropagationStopped = xt, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
                }
            }, g.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, (function(t, e) {
                g.event.special[t] = {
                    delegateType: e,
                    bindType: e,
                    handle: function(t) {
                        var n, i = this,
                            o = t.relatedTarget,
                            r = t.handleObj;
                        return o && (o === i || g.contains(i, o)) || (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
                    }
                }
            })), m.submit || (g.event.special.submit = {
                setup: function() {
                    if (g.nodeName(this, "form")) return !1;
                    g.event.add(this, "click._submit keypress._submit", (function(t) {
                        var e = t.target,
                            n = g.nodeName(e, "input") || g.nodeName(e, "button") ? g.prop(e, "form") : void 0;
                        n && !g._data(n, "submit") && (g.event.add(n, "submit._submit", (function(t) {
                            t._submitBubble = !0
                        })), g._data(n, "submit", !0))
                    }))
                },
                postDispatch: function(t) {
                    t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && g.event.simulate("submit", this.parentNode, t))
                },
                teardown: function() {
                    if (g.nodeName(this, "form")) return !1;
                    g.event.remove(this, "._submit")
                }
            }), m.change || (g.event.special.change = {
                setup: function() {
                    if (mt.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (g.event.add(this, "propertychange._change", (function(t) {
                        "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
                    })), g.event.add(this, "click._change", (function(t) {
                        this._justChanged && !t.isTrigger && (this._justChanged = !1), g.event.simulate("change", this, t)
                    }))), !1;
                    g.event.add(this, "beforeactivate._change", (function(t) {
                        var e = t.target;
                        mt.test(e.nodeName) && !g._data(e, "change") && (g.event.add(e, "change._change", (function(t) {
                            !this.parentNode || t.isSimulated || t.isTrigger || g.event.simulate("change", this.parentNode, t)
                        })), g._data(e, "change", !0))
                    }))
                },
                handle: function(t) {
                    var e = t.target;
                    if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type) return t.handleObj.handler.apply(this, arguments)
                },
                teardown: function() {
                    return g.event.remove(this, "._change"), !mt.test(this.nodeName)
                }
            }), m.focusin || g.each({
                focus: "focusin",
                blur: "focusout"
            }, (function(t, e) {
                var n = function(t) {
                    g.event.simulate(e, t.target, g.event.fix(t))
                };
                g.event.special[e] = {
                    setup: function() {
                        var i = this.ownerDocument || this,
                            o = g._data(i, e);
                        o || i.addEventListener(t, n, !0), g._data(i, e, (o || 0) + 1)
                    },
                    teardown: function() {
                        var i = this.ownerDocument || this,
                            o = g._data(i, e) - 1;
                        o ? g._data(i, e, o) : (i.removeEventListener(t, n, !0), g._removeData(i, e))
                    }
                }
            })), g.fn.extend({
                on: function(t, e, n, i) {
                    return Ct(this, t, e, n, i)
                },
                one: function(t, e, n, i) {
                    return Ct(this, t, e, n, i, 1)
                },
                off: function(t, e, n) {
                    var i, o;
                    if (t && t.preventDefault && t.handleObj) return i = t.handleObj, g(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if ("object" === r(t)) {
                        for (o in t) this.off(o, e, t[o]);
                        return this
                    }
                    return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = wt), this.each((function() {
                        g.event.remove(this, t, n, e)
                    }))
                },
                trigger: function(t, e) {
                    return this.each((function() {
                        g.event.trigger(t, e, this)
                    }))
                },
                triggerHandler: function(t, e) {
                    var n = this[0];
                    if (n) return g.event.trigger(t, e, n, !0)
                }
            });
            var St = / jQuery\d+="(?:null|\d+)"/g,
                kt = new RegExp("<(?:" + st + ")[\\s/>]", "i"),
                Et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
                $t = /<script|<style|<link/i,
                Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                At = /^true\/(.*)/,
                Dt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                jt = at(a).appendChild(a.createElement("div"));
 
            function Lt(t, e) {
                return g.nodeName(t, "table") && g.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
            }
 
            function Ot(t) {
                return t.type = (null !== g.find.attr(t, "type")) + "/" + t.type, t
            }
 
            function It(t) {
                var e = At.exec(t.type);
                return e ? t.type = e[1] : t.removeAttribute("type"), t
            }
 
            function Ht(t, e) {
                if (1 === e.nodeType && g.hasData(t)) {
                    var n, i, o, r = g._data(t),
                        s = g._data(e, r),
                        a = r.events;
                    if (a)
                        for (n in delete s.handle, s.events = {}, a)
                            for (i = 0, o = a[n].length; i < o; i++) g.event.add(e, n, a[n][i]);
                    s.data && (s.data = g.extend({}, s.data))
                }
            }
 
            function Rt(t, e) {
                var n, i, o;
                if (1 === e.nodeType) {
                    if (n = e.nodeName.toLowerCase(), !m.noCloneEvent && e[g.expando]) {
                        for (i in (o = g._data(e)).events) g.removeEvent(e, i, o.handle);
                        e.removeAttribute(g.expando)
                    }
                    "script" === n && e.text !== t.text ? (Ot(e).text = t.text, It(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), m.html5Clone && t.innerHTML && !g.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && nt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
                }
            }
 
            function Pt(t, e, n, i) {
                e = c.apply([], e);
                var o, r, s, a, l, u, d = 0,
                    f = t.length,
                    p = f - 1,
                    h = e[0],
                    v = g.isFunction(h);
                if (v || f > 1 && "string" == typeof h && !m.checkClone && Nt.test(h)) return t.each((function(o) {
                    var r = t.eq(o);
                    v && (e[0] = h.call(this, o, r.html())), Pt(r, e, n, i)
                }));
                if (f && (o = (u = ht(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === u.childNodes.length && (u = o), o || i)) {
                    for (s = (a = g.map(ct(u, "script"), Ot)).length; d < f; d++) r = u, d !== p && (r = g.clone(r, !0, !0), s && g.merge(a, ct(r, "script"))), n.call(t[d], r, d);
                    if (s)
                        for (l = a[a.length - 1].ownerDocument, g.map(a, It), d = 0; d < s; d++) r = a[d], ot.test(r.type || "") && !g._data(r, "globalEval") && g.contains(l, r) && (r.src ? g._evalUrl && g._evalUrl(r.src) : g.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Dt, "")));
                    u = o = null
                }
                return t
            }
 
            function qt(t, e, n) {
                for (var i, o = e ? g.filter(e, t) : t, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || g.cleanData(ct(i)), i.parentNode && (n && g.contains(i.ownerDocument, i) && ut(ct(i, "script")), i.parentNode.removeChild(i));
                return t
            }
            g.extend({
                htmlPrefilter: function(t) {
                    return t.replace(Et, "<$1></$2>")
                },
                clone: function(t, e, n) {
                    var i, o, r, s, a, l = g.contains(t.ownerDocument, t);
                    if (m.html5Clone || g.isXMLDoc(t) || !kt.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (jt.innerHTML = t.outerHTML, jt.removeChild(r = jt.firstChild)), !(m.noCloneEvent && m.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || g.isXMLDoc(t)))
                        for (i = ct(r), a = ct(t), s = 0; null != (o = a[s]); ++s) i[s] && Rt(o, i[s]);
                    if (e)
                        if (n)
                            for (a = a || ct(t), i = i || ct(r), s = 0; null != (o = a[s]); s++) Ht(o, i[s]);
                        else Ht(t, r);
                    return (i = ct(r, "script")).length > 0 && ut(i, !l && ct(t, "script")), i = a = o = null, r
                },
                cleanData: function(t, e) {
                    for (var n, i, o, r, a = 0, l = g.expando, c = g.cache, u = m.attributes, d = g.event.special; null != (n = t[a]); a++)
                        if ((e || B(n)) && (r = (o = n[l]) && c[o])) {
                            if (r.events)
                                for (i in r.events) d[i] ? g.event.remove(n, i) : g.removeEvent(n, i, r.handle);
                            c[o] && (delete c[o], u || void 0 === n.removeAttribute ? n[l] = void 0 : n.removeAttribute(l), s.push(o))
                        }
                }
            }), g.fn.extend({
                domManip: Pt,
                detach: function(t) {
                    return qt(this, t, !0)
                },
                remove: function(t) {
                    return qt(this, t)
                },
                text: function(t) {
                    return et(this, (function(t) {
                        return void 0 === t ? g.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(t))
                    }), null, t, arguments.length)
                },
                append: function() {
                    return Pt(this, arguments, (function(t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = Lt(this, t);
                            try {
                                e.appendChild && t && e.appendChild(t)
                            } catch (t) {
                                console.log(t)
                            }
                        }
                    }))
                },
                prepend: function() {
                    return Pt(this, arguments, (function(t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = Lt(this, t);
                            e.insertBefore(t, e.firstChild)
                        }
                    }))
                },
                before: function() {
                    return Pt(this, arguments, (function(t) {
                        this.parentNode && this.parentNode.insertBefore(t, this)
                    }))
                },
                after: function() {
                    return Pt(this, arguments, (function(t) {
                        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                    }))
                },
                empty: function() {
                    for (var t, e = 0; null != (t = this[e]); e++) {
                        for (1 === t.nodeType && g.cleanData(ct(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                        t.options && g.nodeName(t, "select") && (t.options.length = 0)
                    }
                    return this
                },
                clone: function(t, e) {
                    return t = null != t && t, e = null == e ? t : e, this.map((function() {
                        return g.clone(this, t, e)
                    }))
                },
                html: function(t) {
                    return et(this, (function(t) {
                        var e = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(St, "") : void 0;
                        if ("string" == typeof t && !$t.test(t) && (m.htmlSerialize || !kt.test(t)) && (m.leadingWhitespace || !rt.test(t)) && !lt[(it.exec(t) || ["", ""])[1].toLowerCase()]) {
                            t = g.htmlPrefilter(t);
                            try {
                                for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (g.cleanData(ct(e, !1)), e.innerHTML = t);
                                e = 0
                            } catch (t) {}
                        }
                        e && this.empty().append(t)
                    }), null, t, arguments.length)
                },
                replaceWith: function() {
                    var t = [];
                    return Pt(this, arguments, (function(e) {
                        var n = this.parentNode;
                        g.inArray(this, t) < 0 && (g.cleanData(ct(this)), n && n.replaceChild(e, this))
                    }), t)
                }
            }), g.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, (function(t, e) {
                g.fn[t] = function(t) {
                    for (var n, i = 0, o = [], r = g(t), s = r.length - 1; i <= s; i++) n = i === s ? this : this.clone(!0), g(r[i])[e](n), u.apply(o, n.get());
                    return this.pushStack(o)
                }
            }));
            var _t, Bt = {
                HTML: "block",
                BODY: "block"
            };
 
            function Ft(t, e) {
                var n = g(e.createElement(t)).appendTo(e.body),
                    i = g.css(n[0], "display");
                return n.detach(), i
            }
 
            function Mt(t) {
                var e = a,
                    n = Bt[t];
                return n || ("none" !== (n = Ft(t, e)) && n || ((e = ((_t = (_t || g("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentWindow || _t[0].contentDocument).document).write(), e.close(), n = Ft(t, e), _t.detach()), Bt[t] = n), n
            }
            var Wt = /^margin/,
                Gt = new RegExp("^(" + X + ")(?!px)[a-z%]+$", "i"),
                Ut = function(t, e, n, i) {
                    var o, r, s = {};
                    for (r in e) s[r] = t.style[r], t.style[r] = e[r];
                    for (r in o = n.apply(t, i || []), e) t.style[r] = s[r];
                    return o
                },
                zt = a.documentElement;
            ! function() {
                var t, e, n, o, r, s, l = a.createElement("div"),
                    c = a.createElement("div");
 
                function u() {
                    var u, d, f = a.documentElement;
                    f.appendChild(l), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", t = n = s = !1, e = r = !0, i.getComputedStyle && (d = i.getComputedStyle(c), t = "1%" !== (d || {}).top, s = "2px" === (d || {}).marginLeft, n = "4px" === (d || {
                        width: "4px"
                    }).width, c.style.marginRight = "50%", e = "4px" === (d || {
                        marginRight: "4px"
                    }).marginRight, (u = c.appendChild(a.createElement("div"))).style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", u.style.marginRight = u.style.width = "0", c.style.width = "1px", r = !parseFloat((i.getComputedStyle(u) || {}).marginRight), c.removeChild(u)), c.style.display = "none", (o = 0 === c.getClientRects().length) && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (u = c.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (o = 0 === u[0].offsetHeight) && (u[0].style.display = "", u[1].style.display = "none", o = 0 === u[0].offsetHeight)), f.removeChild(l)
                }
                c.style && (c.style.cssText = "float:left;opacity:.5", m.opacity = "0.5" === c.style.opacity, m.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === c.style.backgroundClip, (l = a.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", l.appendChild(c), m.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, g.extend(m, {
                    reliableHiddenOffsets: function() {
                        return null == t && u(), o
                    },
                    boxSizingReliable: function() {
                        return null == t && u(), n
                    },
                    pixelMarginRight: function() {
                        return null == t && u(), e
                    },
                    pixelPosition: function() {
                        return null == t && u(), t
                    },
                    reliableMarginRight: function() {
                        return null == t && u(), r
                    },
                    reliableMarginLeft: function() {
                        return null == t && u(), s
                    }
                }))
            }();
            var Xt, Vt, Qt = /^(top|right|bottom|left)$/;
 
            function Jt(t, e) {
                return {
                    get: function() {
                        if (!t()) return (this.get = e).apply(this, arguments);
                        delete this.get
                    }
                }
            }
            i.getComputedStyle ? (Xt = function(t) {
                var e = t.ownerDocument.defaultView;
                return e.opener || (e = i), e.getComputedStyle(t)
            }, Vt = function(t, e, n) {
                var i, o, r, s, a = t.style;
                return s = (n = n || Xt(t)) ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== s || g.contains(t.ownerDocument, t) || (s = g.style(t, e)), !m.pixelMarginRight() && Gt.test(s) && Wt.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 === s ? s : s + ""
            }) : zt.currentStyle && (Xt = function(t) {
                return t.currentStyle
            }, Vt = function(t, e, n) {
                var i, o, r, s, a = t.style;
                return null == (s = (n = n || Xt(t)) ? n[e] : void 0) && a && a[e] && (s = a[e]), Gt.test(s) && !Qt.test(e) && (i = a.left, (r = (o = t.runtimeStyle) && o.left) && (o.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : s, s = a.pixelLeft + "px", a.left = i, r && (o.left = r)), void 0 === s ? s : s + "" || "auto"
            });
            var Yt = /alpha\([^)]*\)/i,
                Kt = /opacity\s*=\s*([^)]*)/i,
                Zt = /^(none|table(?!-c[ea]).+)/,
                te = new RegExp("^(" + X + ")(.*)$", "i"),
                ee = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                ne = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                ie = ["Webkit", "O", "Moz", "ms"],
                oe = a.createElement("div").style;
 
            function re(t) {
                if (t in oe) return t;
                for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = ie.length; n--;)
                    if ((t = ie[n] + e) in oe) return t
            }
 
            function se(t, e) {
                for (var n, i, o, r = [], s = 0, a = t.length; s < a; s++)(i = t[s]).style && (r[s] = g._data(i, "olddisplay"), n = i.style.display, e ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && J(i) && (r[s] = g._data(i, "olddisplay", Mt(i.nodeName)))) : (o = J(i), (n && "none" !== n || !o) && g._data(i, "olddisplay", o ? n : g.css(i, "display"))));
                for (s = 0; s < a; s++)(i = t[s]).style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[s] || "" : "none"));
                return t
            }
 
            function ae(t, e, n) {
                var i = te.exec(e);
                return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
            }
 
            function le(t, e, n, i, o) {
                for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; r < 4; r += 2) "margin" === n && (s += g.css(t, n + Q[r], !0, o)), i ? ("content" === n && (s -= g.css(t, "padding" + Q[r], !0, o)), "margin" !== n && (s -= g.css(t, "border" + Q[r] + "Width", !0, o))) : (s += g.css(t, "padding" + Q[r], !0, o), "padding" !== n && (s += g.css(t, "border" + Q[r] + "Width", !0, o)));
                return s
            }
 
            function ce(t, e, n) {
                var o = !0,
                    r = "width" === e ? t.offsetWidth : t.offsetHeight,
                    s = Xt(t),
                    l = m.boxSizing && "border-box" === g.css(t, "boxSizing", !1, s);
                if (a.msFullscreenElement && i.top !== i && t.getClientRects().length && (r = Math.round(100 * t.getBoundingClientRect()[e])), r <= 0 || null == r) {
                    if (((r = Vt(t, e, s)) < 0 || null == r) && (r = t.style[e]), Gt.test(r)) return r;
                    o = l && (m.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
                }
                return r + le(t, e, n || (l ? "border" : "content"), o, s) + "px"
            }
 
            function ue(t, e, n, i, o) {
                return new ue.prototype.init(t, e, n, i, o)
            }
            g.extend({
                cssHooks: {
                    opacity: {
                        get: function(t, e) {
                            if (e) {
                                var n = Vt(t, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    float: m.cssFloat ? "cssFloat" : "styleFloat"
                },
                style: function(t, e, n, i) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var o, s, a, l = g.camelCase(e),
                            c = t.style;
                        if (e = g.cssProps[l] || (g.cssProps[l] = re(l) || l), a = g.cssHooks[e] || g.cssHooks[l], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(t, !1, i)) ? o : c[e];
                        if ("string" === (s = r(n)) && (o = V.exec(n)) && o[1] && (n = Y(t, e, o), s = "number"), null != n && n == n && ("number" === s && (n += o && o[3] || (g.cssNumber[l] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), !a || !("set" in a) || void 0 !== (n = a.set(t, n, i)))) try {
                            c[e] = n
                        } catch (t) {}
                    }
                },
                css: function(t, e, n, i) {
                    var o, r, s, a = g.camelCase(e);
                    return e = g.cssProps[a] || (g.cssProps[a] = re(a) || a), (s = g.cssHooks[e] || g.cssHooks[a]) && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = Vt(t, e, i)), "normal" === r && e in ne && (r = ne[e]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
                }
            }), g.each(["height", "width"], (function(t, e) {
                g.cssHooks[e] = {
                    get: function(t, n, i) {
                        if (n) return Zt.test(g.css(t, "display")) && 0 === t.offsetWidth ? Ut(t, ee, (function() {
                            return ce(t, e, i)
                        })) : ce(t, e, i)
                    },
                    set: function(t, n, i) {
                        var o = i && Xt(t);
                        return ae(0, n, i ? le(t, e, i, m.boxSizing && "border-box" === g.css(t, "boxSizing", !1, o), o) : 0)
                    }
                }
            })), m.opacity || (g.cssHooks.opacity = {
                get: function(t, e) {
                    return Kt.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
                },
                set: function(t, e) {
                    var n = t.style,
                        i = t.currentStyle,
                        o = g.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                        r = i && i.filter || n.filter || "";
                    n.zoom = 1, (e >= 1 || "" === e) && "" === g.trim(r.replace(Yt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = Yt.test(r) ? r.replace(Yt, o) : r + " " + o)
                }
            }), g.cssHooks.marginRight = Jt(m.reliableMarginRight, (function(t, e) {
                if (e) return Ut(t, {
                    display: "inline-block"
                }, Vt, [t, "marginRight"])
            })), g.cssHooks.marginLeft = Jt(m.reliableMarginLeft, (function(t, e) {
                if (e) return (parseFloat(Vt(t, "marginLeft")) || (g.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - Ut(t, {
                    marginLeft: 0
                }, (function() {
                    return t.getBoundingClientRect().left
                })) : 0)) + "px"
            })), g.each({
                margin: "",
                padding: "",
                border: "Width"
            }, (function(t, e) {
                g.cssHooks[t + e] = {
                    expand: function(n) {
                        for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[t + Q[i] + e] = r[i] || r[i - 2] || r[0];
                        return o
                    }
                }, Wt.test(t) || (g.cssHooks[t + e].set = ae)
            })), g.fn.extend({
                css: function(t, e) {
                    return et(this, (function(t, e, n) {
                        var i, o, r = {},
                            s = 0;
                        if (g.isArray(e)) {
                            for (i = Xt(t), o = e.length; s < o; s++) r[e[s]] = g.css(t, e[s], !1, i);
                            return r
                        }
                        return void 0 !== n ? g.style(t, e, n) : g.css(t, e)
                    }), t, e, arguments.length > 1)
                },
                show: function() {
                    return se(this, !0)
                },
                hide: function() {
                    return se(this)
                },
                toggle: function(t) {
                    return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each((function() {
                        J(this) ? g(this).show() : g(this).hide()
                    }))
                }
            }), g.Tween = ue, ue.prototype = {
                constructor: ue,
                init: function(t, e, n, i, o, r) {
                    this.elem = t, this.prop = n, this.easing = o || g.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (g.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var t = ue.propHooks[this.prop];
                    return t && t.get ? t.get(this) : ue.propHooks._default.get(this)
                },
                run: function(t) {
                    var e, n = ue.propHooks[this.prop];
                    return this.options.duration ? this.pos = e = g.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ue.propHooks._default.set(this), this
                }
            }, ue.prototype.init.prototype = ue.prototype, ue.propHooks = {
                _default: {
                    get: function(t) {
                        var e;
                        return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = g.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                    },
                    set: function(t) {
                        g.fx.step[t.prop] ? g.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[g.cssProps[t.prop]] && !g.cssHooks[t.prop] ? t.elem[t.prop] = t.now : g.style(t.elem, t.prop, t.now + t.unit)
                    }
                }
            }, ue.propHooks.scrollTop = ue.propHooks.scrollLeft = {
                set: function(t) {
                    t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                }
            }, g.easing = {
                linear: function(t) {
                    return t
                },
                swing: function(t) {
                    return .5 - Math.cos(t * Math.PI) / 2
                },
                _default: "swing"
            }, (g.fx = ue.prototype.init).step = {};
            var de, fe, pe = /^(?:toggle|show|hide)$/,
                he = /queueHooks$/;
 
            function me() {
                return i.setTimeout((function() {
                    de = void 0
                })), de = g.now()
            }
 
            function ge(t, e) {
                var n, i = {
                        height: t
                    },
                    o = 0;
                for (e = e ? 1 : 0; o < 4; o += 2 - e) i["margin" + (n = Q[o])] = i["padding" + n] = t;
                return e && (i.opacity = i.width = t), i
            }
 
            function ve(t, e, n) {
                for (var i, o = (ye.tweeners[e] || []).concat(ye.tweeners["*"]), r = 0, s = o.length; r < s; r++)
                    if (i = o[r].call(n, e, t)) return i
            }
 
            function ye(t, e, n) {
                var i, o, r = 0,
                    s = ye.prefilters.length,
                    a = g.Deferred().always((function() {
                        delete l.elem
                    })),
                    l = function() {
                        if (o) return !1;
                        for (var e = de || me(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) c.tweens[r].run(i);
                        return a.notifyWith(t, [c, i, n]), i < 1 && s ? n : (a.resolveWith(t, [c]), !1)
                    },
                    c = a.promise({
                        elem: t,
                        props: g.extend({}, e),
                        opts: g.extend(!0, {
                            specialEasing: {},
                            easing: g.easing._default
                        }, n),
                        originalProperties: e,
                        originalOptions: n,
                        startTime: de || me(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(e, n) {
                            var i = g.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                            return c.tweens.push(i), i
                        },
                        stop: function(e) {
                            var n = 0,
                                i = e ? c.tweens.length : 0;
                            if (o) return this;
                            for (o = !0; n < i; n++) c.tweens[n].run(1);
                            return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                        }
                    }),
                    u = c.props;
                for (function(t, e) {
                        var n, i, o, r, s;
                        for (n in t)
                            if (o = e[i = g.camelCase(n)], r = t[n], g.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (s = g.cssHooks[i]) && "expand" in s)
                                for (n in r = s.expand(r), delete t[i], r) n in t || (t[n] = r[n], e[n] = o);
                            else e[i] = o
                    }(u, c.opts.specialEasing); r < s; r++)
                    if (i = ye.prefilters[r].call(c, t, u, c.opts)) return g.isFunction(i.stop) && (g._queueHooks(c.elem, c.opts.queue).stop = g.proxy(i.stop, i)), i;
                return g.map(u, ve, c), g.isFunction(c.opts.start) && c.opts.start.call(t, c), g.fx.timer(g.extend(l, {
                    elem: t,
                    anim: c,
                    queue: c.opts.queue
                })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
            }
            g.Animation = g.extend(ye, {
                    tweeners: {
                        "*": [function(t, e) {
                            var n = this.createTween(t, e);
                            return Y(n.elem, t, V.exec(e), n), n
                        }]
                    },
                    tweener: function(t, e) {
                        g.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(R);
                        for (var n, i = 0, o = t.length; i < o; i++) n = t[i], ye.tweeners[n] = ye.tweeners[n] || [], ye.tweeners[n].unshift(e)
                    },
                    prefilters: [function(t, e, n) {
                        var i, o, r, s, a, l, c, u = this,
                            d = {},
                            f = t.style,
                            p = t.nodeType && J(t),
                            h = g._data(t, "fxshow");
                        for (i in n.queue || (null == (a = g._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                                a.unqueued || l()
                            }), a.unqueued++, u.always((function() {
                                u.always((function() {
                                    a.unqueued--, g.queue(t, "fx").length || a.empty.fire()
                                }))
                            }))), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ("none" === (c = g.css(t, "display")) ? g._data(t, "olddisplay") || Mt(t.nodeName) : c) && "none" === g.css(t, "float") && (m.inlineBlockNeedsLayout && "inline" !== Mt(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", m.shrinkWrapBlocks() || u.always((function() {
                                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                            }))), e)
                            if (o = e[i], pe.exec(o)) {
                                if (delete e[i], r = r || "toggle" === o, o === (p ? "hide" : "show")) {
                                    if ("show" !== o || !h || void 0 === h[i]) continue;
                                    p = !0
                                }
                                d[i] = h && h[i] || g.style(t, i)
                            } else c = void 0;
                        if (g.isEmptyObject(d)) "inline" === ("none" === c ? Mt(t.nodeName) : c) && (f.display = c);
                        else
                            for (i in h ? "hidden" in h && (p = h.hidden) : h = g._data(t, "fxshow", {}), r && (h.hidden = !p), p ? g(t).show() : u.done((function() {
                                    g(t).hide()
                                })), u.done((function() {
                                    var e;
                                    for (e in g._removeData(t, "fxshow"), d) g.style(t, e, d[e])
                                })), d) s = ve(p ? h[i] : 0, i, u), i in h || (h[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
                    }],
                    prefilter: function(t, e) {
                        e ? ye.prefilters.unshift(t) : ye.prefilters.push(t)
                    }
                }), g.speed = function(t, e, n) {
                    var i = t && "object" === r(t) ? g.extend({}, t) : {
                        complete: n || !n && e || g.isFunction(t) && t,
                        duration: t,
                        easing: n && e || e && !g.isFunction(e) && e
                    };
                    return i.duration = g.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in g.fx.speeds ? g.fx.speeds[i.duration] : g.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                        g.isFunction(i.old) && i.old.call(this), i.queue && g.dequeue(this, i.queue)
                    }, i
                }, g.fn.extend({
                    fadeTo: function(t, e, n, i) {
                        return this.filter(J).css("opacity", 0).show().end().animate({
                            opacity: e
                        }, t, n, i)
                    },
                    animate: function(t, e, n, i) {
                        var o = g.isEmptyObject(t),
                            r = g.speed(e, n, i),
                            s = function() {
                                var e = ye(this, g.extend({}, t), r);
                                (o || g._data(this, "finish")) && e.stop(!0)
                            };
                        return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
                    },
                    stop: function(t, e, n) {
                        var i = function(t) {
                            var e = t.stop;
                            delete t.stop, e(n)
                        };
                        return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each((function() {
                            var e = !0,
                                o = null != t && t + "queueHooks",
                                r = g.timers,
                                s = g._data(this);
                            if (o) s[o] && s[o].stop && i(s[o]);
                            else
                                for (o in s) s[o] && s[o].stop && he.test(o) && i(s[o]);
                            for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                            !e && n || g.dequeue(this, t)
                        }))
                    },
                    finish: function(t) {
                        return !1 !== t && (t = t || "fx"), this.each((function() {
                            var e, n = g._data(this),
                                i = n[t + "queue"],
                                o = n[t + "queueHooks"],
                                r = g.timers,
                                s = i ? i.length : 0;
                            for (n.finish = !0, g.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                            for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this);
                            delete n.finish
                        }))
                    }
                }), g.each(["toggle", "show", "hide"], (function(t, e) {
                    var n = g.fn[e];
                    g.fn[e] = function(t, i, o) {
                        return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(ge(e, !0), t, i, o)
                    }
                })), g.each({
                    slideDown: ge("show"),
                    slideUp: ge("hide"),
                    slideToggle: ge("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, (function(t, e) {
                    g.fn[t] = function(t, n, i) {
                        return this.animate(e, t, n, i)
                    }
                })), g.timers = [], g.fx.tick = function() {
                    var t, e = g.timers,
                        n = 0;
                    for (de = g.now(); n < e.length; n++)(t = e[n])() || e[n] !== t || e.splice(n--, 1);
                    e.length || g.fx.stop(), de = void 0
                }, g.fx.timer = function(t) {
                    g.timers.push(t), t() ? g.fx.start() : g.timers.pop()
                }, g.fx.interval = 13, g.fx.start = function() {
                    fe || (fe = i.setInterval(g.fx.tick, g.fx.interval))
                }, g.fx.stop = function() {
                    i.clearInterval(fe), fe = null
                }, g.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, g.fn.delay = function(t, e) {
                    return t = g.fx && g.fx.speeds[t] || t, e = e || "fx", this.queue(e, (function(e, n) {
                        var o = i.setTimeout(e, t);
                        n.stop = function() {
                            i.clearTimeout(o)
                        }
                    }))
                },
                function() {
                    var t, e = a.createElement("input"),
                        n = a.createElement("div"),
                        i = a.createElement("select"),
                        o = i.appendChild(a.createElement("option"));
                    (n = a.createElement("div")).setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = n.getElementsByTagName("a")[0], e.setAttribute("type", "checkbox"), n.appendChild(e), (t = n.getElementsByTagName("a")[0]).style.cssText = "top:1px", m.getSetAttribute = "t" !== n.className, m.style = /top/.test(t.getAttribute("style")), m.hrefNormalized = "/a" === t.getAttribute("href"), m.checkOn = !!e.value, m.optSelected = o.selected, m.enctype = !!a.createElement("form").enctype, i.disabled = !0, m.optDisabled = !o.disabled, (e = a.createElement("input")).setAttribute("value", ""), m.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), m.radioValue = "t" === e.value
                }();
            var be = /\r/g;
            g.fn.extend({
                val: function(t) {
                    var e, n, i, o = this[0];
                    return arguments.length ? (i = g.isFunction(t), this.each((function(n) {
                        var o;
                        1 === this.nodeType && (null == (o = i ? t.call(this, n, g(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : g.isArray(o) && (o = g.map(o, (function(t) {
                            return null == t ? "" : t + ""
                        }))), (e = g.valHooks[this.type] || g.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                    }))) : o ? (e = g.valHooks[o.type] || g.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(be, "") : null == n ? "" : n : void 0
                }
            }), g.extend({
                valHooks: {
                    option: {
                        get: function(t) {
                            var e = g.find.attr(t, "value");
                            return null != e ? e : g.trim(g.text(t))
                        }
                    },
                    select: {
                        get: function(t) {
                            for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || o < 0, s = r ? null : [], a = r ? o + 1 : i.length, l = o < 0 ? a : r ? o : 0; l < a; l++)
                                if (((n = i[l]).selected || l === o) && (m.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !g.nodeName(n.parentNode, "optgroup"))) {
                                    if (e = g(n).val(), r) return e;
                                    s.push(e)
                                } return s
                        },
                        set: function(t, e) {
                            for (var n, i, o = t.options, r = g.makeArray(e), s = o.length; s--;)
                                if (i = o[s], g.inArray(g.valHooks.option.get(i), r) >= 0) try {
                                    i.selected = n = !0
                                } catch (t) {
                                    i.scrollHeight
                                } else i.selected = !1;
                            return n || (t.selectedIndex = -1), o
                        }
                    }
                }
            }), g.each(["radio", "checkbox"], (function() {
                g.valHooks[this] = {
                    set: function(t, e) {
                        if (g.isArray(e)) return t.checked = g.inArray(g(t).val(), e) > -1
                    }
                }, m.checkOn || (g.valHooks[this].get = function(t) {
                    return null === t.getAttribute("value") ? "on" : t.value
                })
            }));
            var xe, we, Te = g.expr.attrHandle,
                Ce = /^(?:checked|selected)$/i,
                Se = m.getSetAttribute,
                ke = m.input;
            g.fn.extend({
                attr: function(t, e) {
                    return et(this, g.attr, t, e, arguments.length > 1)
                },
                removeAttr: function(t) {
                    return this.each((function() {
                        g.removeAttr(this, t)
                    }))
                }
            }), g.extend({
                attr: function(t, e, n) {
                    var i, o, r = t.nodeType;
                    if (3 !== r && 8 !== r && 2 !== r) return void 0 === t.getAttribute ? g.prop(t, e, n) : (1 === r && g.isXMLDoc(t) || (e = e.toLowerCase(), o = g.attrHooks[e] || (g.expr.match.bool.test(e) ? we : xe)), void 0 !== n ? null === n ? void g.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : null == (i = g.find.attr(t, e)) ? void 0 : i)
                },
                attrHooks: {
                    type: {
                        set: function(t, e) {
                            if (!m.radioValue && "radio" === e && g.nodeName(t, "input")) {
                                var n = t.value;
                                return t.setAttribute("type", e), n && (t.value = n), e
                            }
                        }
                    }
                },
                removeAttr: function(t, e) {
                    var n, i, o = 0,
                        r = e && e.match(R);
                    if (r && 1 === t.nodeType)
                        for (; n = r[o++];) i = g.propFix[n] || n, g.expr.match.bool.test(n) ? ke && Se || !Ce.test(n) ? t[i] = !1 : t[g.camelCase("default-" + n)] = t[i] = !1 : g.attr(t, n, ""), t.removeAttribute(Se ? n : i)
                }
            }), we = {
                set: function(t, e, n) {
                    return !1 === e ? g.removeAttr(t, n) : ke && Se || !Ce.test(n) ? t.setAttribute(!Se && g.propFix[n] || n, n) : t[g.camelCase("default-" + n)] = t[n] = !0, n
                }
            }, g.each(g.expr.match.bool.source.match(/\w+/g), (function(t, e) {
                var n = Te[e] || g.find.attr;
                ke && Se || !Ce.test(e) ? Te[e] = function(t, e, i) {
                    var o, r;
                    return i || (r = Te[e], Te[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, Te[e] = r), o
                } : Te[e] = function(t, e, n) {
                    if (!n) return t[g.camelCase("default-" + e)] ? e.toLowerCase() : null
                }
            })), ke && Se || (g.attrHooks.value = {
                set: function(t, e, n) {
                    if (!g.nodeName(t, "input")) return xe && xe.set(t, e, n);
                    t.defaultValue = e
                }
            }), Se || (xe = {
                set: function(t, e, n) {
                    var i = t.getAttributeNode(n);
                    if (i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n)) return e
                }
            }, Te.id = Te.name = Te.coords = function(t, e, n) {
                var i;
                if (!n) return (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
            }, g.valHooks.button = {
                get: function(t, e) {
                    var n = t.getAttributeNode(e);
                    if (n && n.specified) return n.value
                },
                set: xe.set
            }, g.attrHooks.contenteditable = {
                set: function(t, e, n) {
                    xe.set(t, "" !== e && e, n)
                }
            }, g.each(["width", "height"], (function(t, e) {
                g.attrHooks[e] = {
                    set: function(t, n) {
                        if ("" === n) return t.setAttribute(e, "auto"), n
                    }
                }
            }))), m.style || (g.attrHooks.style = {
                get: function(t) {
                    return t.style.cssText || void 0
                },
                set: function(t, e) {
                    return t.style.cssText = e + ""
                }
            });
            var Ee = /^(?:input|select|textarea|button|object)$/i,
                $e = /^(?:a|area)$/i;
            g.fn.extend({
                prop: function(t, e) {
                    return et(this, g.prop, t, e, arguments.length > 1)
                },
                removeProp: function(t) {
                    return t = g.propFix[t] || t, this.each((function() {
                        try {
                            this[t] = void 0, delete this[t]
                        } catch (t) {}
                    }))
                }
            }), g.extend({
                prop: function(t, e, n) {
                    var i, o, r = t.nodeType;
                    if (3 !== r && 8 !== r && 2 !== r) return 1 === r && g.isXMLDoc(t) || (e = g.propFix[e] || e, o = g.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
                },
                propHooks: {
                    tabIndex: {
                        get: function(t) {
                            var e = g.find.attr(t, "tabindex");
                            return e ? parseInt(e, 10) : Ee.test(t.nodeName) || $e.test(t.nodeName) && t.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), m.hrefNormalized || g.each(["href", "src"], (function(t, e) {
                g.propHooks[e] = {
                    get: function(t) {
                        return t.getAttribute(e, 4)
                    }
                }
            })), m.optSelected || (g.propHooks.selected = {
                get: function(t) {
                    var e = t.parentNode;
                    return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
                }
            }), g.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                g.propFix[this.toLowerCase()] = this
            })), m.enctype || (g.propFix.enctype = "encoding");
            var Ne = /[\t\r\n\f]/g;
 
            function Ae(t) {
                return g.attr(t, "class") || ""
            }
            g.fn.extend({
                addClass: function(t) {
                    var e, n, i, o, r, s, a, l = 0;
                    if (g.isFunction(t)) return this.each((function(e) {
                        g(this).addClass(t.call(this, e, Ae(this)))
                    }));
                    if ("string" == typeof t && t)
                        for (e = t.match(R) || []; n = this[l++];)
                            if (o = Ae(n), i = 1 === n.nodeType && (" " + o + " ").replace(Ne, " ")) {
                                for (s = 0; r = e[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                                o !== (a = g.trim(i)) && g.attr(n, "class", a)
                            } return this
                },
                removeClass: function(t) {
                    var e, n, i, o, r, s, a, l = 0;
                    if (g.isFunction(t)) return this.each((function(e) {
                        g(this).removeClass(t.call(this, e, Ae(this)))
                    }));
                    if (!arguments.length) return this.attr("class", "");
                    if ("string" == typeof t && t)
                        for (e = t.match(R) || []; n = this[l++];)
                            if (o = Ae(n), i = 1 === n.nodeType && (" " + o + " ").replace(Ne, " ")) {
                                for (s = 0; r = e[s++];)
                                    for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                                o !== (a = g.trim(i)) && g.attr(n, "class", a)
                            } return this
                },
                toggleClass: function(t, e) {
                    var n = r(t);
                    return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : g.isFunction(t) ? this.each((function(n) {
                        g(this).toggleClass(t.call(this, n, Ae(this), e), e)
                    })) : this.each((function() {
                        var e, i, o, r;
                        if ("string" === n)
                            for (i = 0, o = g(this), r = t.match(R) || []; e = r[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                        else void 0 !== t && "boolean" !== n || ((e = Ae(this)) && g._data(this, "__className__", e), g.attr(this, "class", e || !1 === t ? "" : g._data(this, "__className__") || ""))
                    }))
                },
                hasClass: function(t) {
                    var e, n, i = 0;
                    for (e = " " + t + " "; n = this[i++];)
                        if (1 === n.nodeType && (" " + Ae(n) + " ").replace(Ne, " ").indexOf(e) > -1) return !0;
                    return !1
                }
            }), g.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), (function(t, e) {
                g.fn[e] = function(t, n) {
                    return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
                }
            })), g.fn.extend({
                hover: function(t, e) {
                    return this.mouseenter(t).mouseleave(e || t)
                }
            });
            var De = i.location,
                je = g.now(),
                Le = /\?/,
                Oe = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
            g.parseJSON = function(t) {
                if (i.JSON && i.JSON.parse) return i.JSON.parse(t + "");
                var e, n = null,
                    o = g.trim(t + "");
                return o && !g.trim(o.replace(Oe, (function(t, i, o, r) {
                    return e && i && (n = 0), 0 === n ? t : (e = o || i, n += !r - !o, "")
                }))) ? Function("return " + o)() : g.error("Invalid JSON: " + t)
            }, g.parseXML = function(t) {
                var e;
                if (!t || "string" != typeof t) return null;
                try {
                    i.DOMParser ? e = (new i.DOMParser).parseFromString(t, "text/xml") : ((e = new i.ActiveXObject("Microsoft.XMLDOM")).async = "false", e.loadXML(t))
                } catch (t) {
                    e = void 0
                }
                return e && e.documentElement && !e.getElementsByTagName("parsererror").length || g.error("Invalid XML: " + t), e
            };
            var Ie = /#.*$/,
                He = /([?&])_=[^&]*/,
                Re = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
                Pe = /^(?:GET|HEAD)$/,
                qe = /^\/\//,
                _e = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
                Be = {},
                Fe = {},
                Me = "*/".concat("*"),
                We = De.href,
                Ge = _e.exec(We.toLowerCase()) || [];
 
            function Ue(t) {
                return function(e, n) {
                    "string" != typeof e && (n = e, e = "*");
                    var i, o = 0,
                        r = e.toLowerCase().match(R) || [];
                    if (g.isFunction(n))
                        for (; i = r[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
                }
            }
 
            function ze(t, e, n, i) {
                var o = {},
                    r = t === Fe;
 
                function s(a) {
                    var l;
                    return o[a] = !0, g.each(t[a] || [], (function(t, a) {
                        var c = a(e, n, i);
                        return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1)
                    })), l
                }
                return s(e.dataTypes[0]) || !o["*"] && s("*")
            }
 
            function Xe(t, e) {
                var n, i, o = g.ajaxSettings.flatOptions || {};
                for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
                return n && g.extend(!0, t, n), t
            }
 
            function Ve(t) {
                return t.style && t.style.display || g.css(t, "display")
            }
            g.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: We,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ge[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Me,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": g.parseJSON,
                        "text xml": g.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(t, e) {
                    return e ? Xe(Xe(t, g.ajaxSettings), e) : Xe(g.ajaxSettings, t)
                },
                ajaxPrefilter: Ue(Be),
                ajaxTransport: Ue(Fe),
                ajax: function(t, e) {
                    "object" === r(t) && (e = t, t = void 0);
                    var n, o, s, a, l, c, u, d, f = g.ajaxSetup({}, e = e || {}),
                        p = f.context || f,
                        h = f.context && (p.nodeType || p.jquery) ? g(p) : g.event,
                        m = g.Deferred(),
                        v = g.Callbacks("once memory"),
                        y = f.statusCode || {},
                        b = {},
                        x = {},
                        w = 0,
                        T = "canceled",
                        C = {
                            readyState: 0,
                            getResponseHeader: function(t) {
                                var e;
                                if (2 === w) {
                                    if (!d)
                                        for (d = {}; e = Re.exec(a);) d[e[1].toLowerCase()] = e[2];
                                    e = d[t.toLowerCase()]
                                }
                                return null == e ? null : e
                            },
                            getAllResponseHeaders: function() {
                                return 2 === w ? a : null
                            },
                            setRequestHeader: function(t, e) {
                                var n = t.toLowerCase();
                                return w || (t = x[n] = x[n] || t, b[t] = e), this
                            },
                            overrideMimeType: function(t) {
                                return w || (f.mimeType = t), this
                            },
                            statusCode: function(t) {
                                var e;
                                if (t)
                                    if (w < 2)
                                        for (e in t) y[e] = [y[e], t[e]];
                                    else C.always(t[C.status]);
                                return this
                            },
                            abort: function(t) {
                                var e = t || T;
                                return u && u.abort(e), S(0, e), this
                            }
                        };
                    if (m.promise(C).complete = v.add, C.success = C.done, C.error = C.fail, f.url = ((t || f.url || We) + "").replace(Ie, "").replace(qe, Ge[1] + "//"), f.type = e.method || e.type || f.method || f.type, f.dataTypes = g.trim(f.dataType || "*").toLowerCase().match(R) || [""], null == f.crossDomain && (n = _e.exec(f.url.toLowerCase()), f.crossDomain = !(!n || n[1] === Ge[1] && n[2] === Ge[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Ge[3] || ("http:" === Ge[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = g.param(f.data, f.traditional)), ze(Be, f, e, C), 2 === w) return C;
                    for (o in (c = g.event && f.global) && 0 == g.active++ && g.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Pe.test(f.type), s = f.url, f.hasContent || (f.data && (s = f.url += (Le.test(s) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = He.test(s) ? s.replace(He, "$1_=" + je++) : s + (Le.test(s) ? "&" : "?") + "_=" + je++)), f.ifModified && (g.lastModified[s] && C.setRequestHeader("If-Modified-Since", g.lastModified[s]), g.etag[s] && C.setRequestHeader("If-None-Match", g.etag[s])), (f.data && f.hasContent && !1 !== f.contentType || e.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Me + "; q=0.01" : "") : f.accepts["*"]), f.headers) C.setRequestHeader(o, f.headers[o]);
                    if (f.beforeSend && (!1 === f.beforeSend.call(p, C, f) || 2 === w)) return C.abort();
                    for (o in T = "abort", {
                            success: 1,
                            error: 1,
                            complete: 1
                        }) C[o](f[o]);
                    if (u = ze(Fe, f, e, C)) {
                        if (C.readyState = 1, c && h.trigger("ajaxSend", [C, f]), 2 === w) return C;
                        f.async && f.timeout > 0 && (l = i.setTimeout((function() {
                            C.abort("timeout")
                        }), f.timeout));
                        try {
                            w = 1, u.send(b, S)
                        } catch (t) {
                            if (!(w < 2)) throw t;
                            S(-1, t)
                        }
                    } else S(-1, "No Transport");
 
                    function S(t, e, n, o) {
                        var r, d, b, x, T, S = e;
                        2 !== w && (w = 2, l && i.clearTimeout(l), u = void 0, a = o || "", C.readyState = t > 0 ? 4 : 0, r = t >= 200 && t < 300 || 304 === t, n && (x = function(t, e, n) {
                            for (var i, o, r, s, a = t.contents, l = t.dataTypes;
                                "*" === l[0];) l.shift(), void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
                            if (o)
                                for (s in a)
                                    if (a[s] && a[s].test(o)) {
                                        l.unshift(s);
                                        break
                                    } if (l[0] in n) r = l[0];
                            else {
                                for (s in n) {
                                    if (!l[0] || t.converters[s + " " + l[0]]) {
                                        r = s;
                                        break
                                    }
                                    i || (i = s)
                                }
                                r = r || i
                            }
                            if (r) return r !== l[0] && l.unshift(r), n[r]
                        }(f, C, n)), x = function(t, e, n, i) {
                            var o, r, s, a, l, c = {},
                                u = t.dataTypes.slice();
                            if (u[1])
                                for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
                            for (r = u.shift(); r;)
                                if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift())
                                    if ("*" === r) r = l;
                                    else if ("*" !== l && l !== r) {
                                if (!(s = c[l + " " + r] || c["* " + r]))
                                    for (o in c)
                                        if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                            !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                                            break
                                        } if (!0 !== s)
                                    if (s && t.throws) e = s(e);
                                    else try {
                                        e = s(e)
                                    } catch (t) {
                                        return {
                                            state: "parsererror",
                                            error: s ? t : "No conversion from " + l + " to " + r
                                        }
                                    }
                            }
                            return {
                                state: "success",
                                data: e
                            }
                        }(f, x, C, r), r ? (f.ifModified && ((T = C.getResponseHeader("Last-Modified")) && (g.lastModified[s] = T), (T = C.getResponseHeader("etag")) && (g.etag[s] = T)), 204 === t || "HEAD" === f.type ? S = "nocontent" : 304 === t ? S = "notmodified" : (S = x.state, d = x.data, r = !(b = x.error))) : (b = S, !t && S || (S = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (e || S) + "", r ? m.resolveWith(p, [d, S, C]) : m.rejectWith(p, [C, S, b]), C.statusCode(y), y = void 0, c && h.trigger(r ? "ajaxSuccess" : "ajaxError", [C, f, r ? d : b]), v.fireWith(p, [C, S]), c && (h.trigger("ajaxComplete", [C, f]), --g.active || g.event.trigger("ajaxStop")))
                    }
                    return C
                },
                getJSON: function(t, e, n) {
                    return g.get(t, e, n, "json")
                },
                getScript: function(t, e) {
                    return g.get(t, void 0, e, "script")
                }
            }), g.each(["get", "post"], (function(t, e) {
                g[e] = function(t, n, i, o) {
                    return g.isFunction(n) && (o = o || i, i = n, n = void 0), g.ajax(g.extend({
                        url: t,
                        type: e,
                        dataType: o,
                        data: n,
                        success: i
                    }, g.isPlainObject(t) && t))
                }
            })), g._evalUrl = function(t) {
                return g.ajax({
                    url: t,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    throws: !0
                })
            }, g.fn.extend({
                wrapAll: function(t) {
                    if (g.isFunction(t)) return this.each((function(e) {
                        g(this).wrapAll(t.call(this, e))
                    }));
                    if (this[0]) {
                        var e = g(t, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && e.insertBefore(this[0]), e.map((function() {
                            for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                            return t
                        })).append(this)
                    }
                    return this
                },
                wrapInner: function(t) {
                    return g.isFunction(t) ? this.each((function(e) {
                        g(this).wrapInner(t.call(this, e))
                    })) : this.each((function() {
                        var e = g(this),
                            n = e.contents();
                        n.length ? n.wrapAll(t) : e.append(t)
                    }))
                },
                wrap: function(t) {
                    var e = g.isFunction(t);
                    return this.each((function(n) {
                        g(this).wrapAll(e ? t.call(this, n) : t)
                    }))
                },
                unwrap: function() {
                    return this.parent().each((function() {
                        g.nodeName(this, "body") || g(this).replaceWith(this.childNodes)
                    })).end()
                }
            }), g.expr.filters.hidden = function(t) {
                return m.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : function(t) {
                    for (; t && 1 === t.nodeType;) {
                        if ("none" === Ve(t) || "hidden" === t.type) return !0;
                        t = t.parentNode
                    }
                    return !1
                }(t)
            }, g.expr.filters.visible = function(t) {
                return !g.expr.filters.hidden(t)
            };
            var Qe = /%20/g,
                Je = /\[\]$/,
                Ye = /\r?\n/g,
                Ke = /^(?:submit|button|image|reset|file)$/i,
                Ze = /^(?:input|select|textarea|keygen)/i;
 
            function tn(t, e, n, i) {
                var o;
                if (g.isArray(e)) g.each(e, (function(e, o) {
                    n || Je.test(t) ? i(t, o) : tn(t + "[" + ("object" === r(o) && null != o ? e : "") + "]", o, n, i)
                }));
                else if (n || "object" !== g.type(e)) i(t, e);
                else
                    for (o in e) tn(t + "[" + o + "]", e[o], n, i)
            }
            g.param = function(t, e) {
                var n, i = [],
                    o = function(t, e) {
                        e = g.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                    };
                if (void 0 === e && (e = g.ajaxSettings && g.ajaxSettings.traditional), g.isArray(t) || t.jquery && !g.isPlainObject(t)) g.each(t, (function() {
                    o(this.name, this.value)
                }));
                else
                    for (n in t) tn(n, t[n], e, o);
                return i.join("&").replace(Qe, "+")
            }, g.fn.extend({
                serialize: function() {
                    return g.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map((function() {
                        var t = g.prop(this, "elements");
                        return t ? g.makeArray(t) : this
                    })).filter((function() {
                        var t = this.type;
                        return this.name && !g(this).is(":disabled") && Ze.test(this.nodeName) && !Ke.test(t) && (this.checked || !nt.test(t))
                    })).map((function(t, e) {
                        var n = g(this).val();
                        return null == n ? null : g.isArray(n) ? g.map(n, (function(t) {
                            return {
                                name: e.name,
                                value: t.replace(Ye, "\r\n")
                            }
                        })) : {
                            name: e.name,
                            value: n.replace(Ye, "\r\n")
                        }
                    })).get()
                }
            }), g.ajaxSettings.xhr = void 0 !== i.ActiveXObject ? function() {
                return this.isLocal ? sn() : a.documentMode > 8 ? rn() : /^(get|post|head|put|delete|options)$/i.test(this.type) && rn() || sn()
            } : rn;
            var en = 0,
                nn = {},
                on = g.ajaxSettings.xhr();
 
            function rn() {
                try {
                    return new i.XMLHttpRequest
                } catch (t) {}
            }
 
            function sn() {
                try {
                    return new i.ActiveXObject("Microsoft.XMLHTTP")
                } catch (t) {}
            }
            i.attachEvent && i.attachEvent("onunload", (function() {
                for (var t in nn) nn[t](void 0, !0)
            })), m.cors = !!on && "withCredentials" in on, (on = m.ajax = !!on) && g.ajaxTransport((function(t) {
                var e;
                if (!t.crossDomain || m.cors) return {
                    send: function(n, o) {
                        var r, s = t.xhr(),
                            a = ++en;
                        if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (r in t.xhrFields) s[r] = t.xhrFields[r];
                        for (r in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"), n) void 0 !== n[r] && s.setRequestHeader(r, n[r] + "");
                        s.send(t.hasContent && t.data || null), e = function(n, i) {
                            var r, l, c;
                            if (e && (i || 4 === s.readyState))
                                if (delete nn[a], e = void 0, s.onreadystatechange = g.noop, i) 4 !== s.readyState && s.abort();
                                else {
                                    c = {}, r = s.status, "string" == typeof s.responseText && (c.text = s.responseText);
                                    try {
                                        l = s.statusText
                                    } catch (t) {
                                        l = ""
                                    }
                                    r || !t.isLocal || t.crossDomain ? 1223 === r && (r = 204) : r = c.text ? 200 : 404
                                } c && o(r, l, c, s.getAllResponseHeaders())
                        }, t.async ? 4 === s.readyState ? i.setTimeout(e) : s.onreadystatechange = nn[a] = e : e()
                    },
                    abort: function() {
                        e && e(void 0, !0)
                    }
                }
            })), g.ajaxPrefilter((function(t) {
                t.crossDomain && (t.contents.script = !1)
            })), g.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(t) {
                        return g.globalEval(t), t
                    }
                }
            }), g.ajaxPrefilter("script", (function(t) {
                void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
            })), g.ajaxTransport("script", (function(t) {
                if (t.crossDomain) {
                    var e, n = a.head || g("head")[0] || a.documentElement;
                    return {
                        send: function(i, o) {
                            (e = a.createElement("script")).async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
                                (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || o(200, "success"))
                            }, n.insertBefore(e, n.firstChild)
                        },
                        abort: function() {
                            e && e.onload(void 0, !0)
                        }
                    }
                }
            }));
            var an = [],
                ln = /(=)\?(?=&|$)|\?\?/;
            g.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var t = an.pop() || g.expando + "_" + je++;
                    return this[t] = !0, t
                }
            }), g.ajaxPrefilter("json jsonp", (function(t, e, n) {
                var o, r, s, a = !1 !== t.jsonp && (ln.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && ln.test(t.data) && "data");
                if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = g.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(ln, "$1" + o) : !1 !== t.jsonp && (t.url += (Le.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
                    return s || g.error(o + " was not called"), s[0]
                }, t.dataTypes[0] = "json", r = i[o], i[o] = function() {
                    s = arguments
                }, n.always((function() {
                    void 0 === r ? g(i).removeProp(o) : i[o] = r, t[o] && (t.jsonpCallback = e.jsonpCallback, an.push(o)), s && g.isFunction(r) && r(s[0]), s = r = void 0
                })), "script"
            })), m.createHTMLDocument = function() {
                if (!a.implementation.createHTMLDocument) return !1;
                var t = a.implementation.createHTMLDocument("");
                return t.body.innerHTML = "<form></form><form></form>", 2 === t.body.childNodes.length
            }(), g.parseHTML = function(t, e, n) {
                if (!t || "string" != typeof t) return null;
                "boolean" == typeof e && (n = e, e = !1), e = e || (m.createHTMLDocument ? a.implementation.createHTMLDocument("") : a);
                var i = E.exec(t),
                    o = !n && [];
                return i ? [e.createElement(i[1])] : (i = ht([t], e, o), o && o.length && g(o).remove(), g.merge([], i.childNodes))
            };
            var cn = g.fn.load;
 
            function un(t) {
                return g.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
            }
            g.fn.load = function(t, e, n) {
                if ("string" != typeof t && cn) return cn.apply(this, arguments);
                var i, o, s, a = this,
                    l = t.indexOf(" ");
                return l > -1 && (i = g.trim(t.slice(l, t.length)), t = t.slice(0, l)), g.isFunction(e) ? (n = e, e = void 0) : e && "object" === r(e) && (o = "POST"), a.length > 0 && g.ajax({
                    url: t,
                    type: o || "GET",
                    dataType: "html",
                    data: e
                }).done((function(t) {
                    s = arguments, a.html(i ? g("<div>").append(g.parseHTML(t)).find(i) : t)
                })).always(n && function(t, e) {
                    a.each((function() {
                        n.apply(a, s || [t.responseText, e, t])
                    }))
                }), this
            }, g.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(t, e) {
                g.fn[e] = function(t) {
                    return this.on(e, t)
                }
            })), g.expr.filters.animated = function(t) {
                return g.grep(g.timers, (function(e) {
                    return t === e.elem
                })).length
            }, g.offset = {
                setOffset: function(t, e, n) {
                    var i, o, r, s, a, l, c = g.css(t, "position"),
                        u = g(t),
                        d = {};
                    "static" === c && (t.style.position = "relative"), a = u.offset(), r = g.css(t, "top"), l = g.css(t, "left"), ("absolute" === c || "fixed" === c) && g.inArray("auto", [r, l]) > -1 ? (s = (i = u.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), g.isFunction(e) && (e = e.call(t, n, g.extend({}, a))), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : u.css(d)
                }
            }, g.fn.extend({
                offset: function(t) {
                    if (arguments.length) return void 0 === t ? this : this.each((function(e) {
                        g.offset.setOffset(this, t, e)
                    }));
                    var e, n, i = {
                            top: 0,
                            left: 0
                        },
                        o = this[0],
                        r = o && o.ownerDocument;
                    return r ? (e = r.documentElement, g.contains(e, o) ? (void 0 !== o.getBoundingClientRect && (i = o.getBoundingClientRect()), n = un(r), {
                        top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                        left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                    }) : i) : void 0
                },
                position: function() {
                    if (this[0]) {
                        var t, e, n = {
                                top: 0,
                                left: 0
                            },
                            i = this[0];
                        return "fixed" === g.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), g.nodeName(t[0], "html") || (n = t.offset()), n.top += g.css(t[0], "borderTopWidth", !0) - t.scrollTop(), n.left += g.css(t[0], "borderLeftWidth", !0) - t.scrollLeft()), {
                            top: e.top - n.top - g.css(i, "marginTop", !0),
                            left: e.left - n.left - g.css(i, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map((function() {
                        for (var t = this.offsetParent; t && !g.nodeName(t, "html") && "static" === g.css(t, "position");) t = t.offsetParent;
                        return t || zt
                    }))
                }
            }), g.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, (function(t, e) {
                var n = /Y/.test(e);
                g.fn[t] = function(i) {
                    return et(this, (function(t, i, o) {
                        var r = un(t);
                        if (void 0 === o) return r ? e in r ? r[e] : r.document.documentElement[i] : t[i];
                        r ? r.scrollTo(n ? g(r).scrollLeft() : o, n ? o : g(r).scrollTop()) : t[i] = o
                    }), t, i, arguments.length, null)
                }
            })), g.each(["top", "left"], (function(t, e) {
                g.cssHooks[e] = Jt(m.pixelPosition, (function(t, n) {
                    if (n) return n = Vt(t, e), Gt.test(n) ? g(t).position()[e] + "px" : n
                }))
            })), g.each({
                Height: "height",
                Width: "width"
            }, (function(t, e) {
                g.each({
                    padding: "inner" + t,
                    content: e,
                    "": "outer" + t
                }, (function(n, i) {
                    g.fn[i] = function(i, o) {
                        var r = arguments.length && (n || "boolean" != typeof i),
                            s = n || (!0 === i || !0 === o ? "margin" : "border");
                        return et(this, (function(e, n, i) {
                            var o;
                            return g.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? g.css(e, n, s) : g.style(e, n, i, s)
                        }), e, r ? i : void 0, r, null)
                    }
                }))
            })), g.fn.extend({
                bind: function(t, e, n) {
                    return this.on(t, null, e, n)
                },
                unbind: function(t, e) {
                    return this.off(t, null, e)
                },
                delegate: function(t, e, n, i) {
                    return this.on(e, t, n, i)
                },
                undelegate: function(t, e, n) {
                    return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
                }
            }), g.fn.size = function() {
                return this.length
            }, g.fn.andSelf = g.fn.addBack, void 0 === (n = function() {
                return g
            }.apply(e, [])) || (t.exports = n);
            var dn = i.jQuery,
                fn = i.$;
            return g.noConflict = function(t) {
                return i.$ === g && (i.$ = fn), t && i.jQuery === g && (i.jQuery = dn), g
            }, o || (i.jQuery = i.$ = g), g
        }, "object" === r(t) && "object" === r(t.exports) ? t.exports = i.document ? o(i, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return o(t)
        } : o(i)
    }).call(this, n(1)(t))
 }, function(t, e) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
 }, function(t, e) {
    function n(t) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    /*!
     * Bootstrap v3.3.7 (http://getbootstrap.com)
     * Copyright 2011-2016 Twitter, Inc.
     * Licensed under the MIT license
     */
    if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
    ! function(t) {
        "use strict";
        var e = jQuery.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
    }(),
    function(t) {
        "use strict";
        t.fn.emulateTransitionEnd = function(e) {
            var n = !1,
                i = this;
            t(this).one("bsTransitionEnd", (function() {
                n = !0
            }));
            return setTimeout((function() {
                n || t(i).trigger(t.support.transition.end)
            }), e), this
        }, t((function() {
            t.support.transition = function() {
                var t = document.createElement("bootstrap"),
                    e = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    };
                for (var n in e)
                    if (void 0 !== t.style[n]) return {
                        end: e[n]
                    };
                return !1
            }(), t.support.transition && (t.event.special.bsTransitionEnd = {
                bindType: t.support.transition.end,
                delegateType: t.support.transition.end,
                handle: function(e) {
                    if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                }
            })
        }))
    }(jQuery),
    function(t) {
        "use strict";
        var e = '[data-dismiss="alert"]',
            n = function(n) {
                t(n).on("click", e, this.close)
            };
        n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.close = function(e) {
            var i = t(this),
                o = i.attr("data-target");
            o || (o = (o = i.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, ""));
            var r = t("#" === o ? [] : o);
 
            function s() {
                r.detach().trigger("closed.bs.alert").remove()
            }
            e && e.preventDefault(), r.length || (r = i.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", s).emulateTransitionEnd(n.TRANSITION_DURATION) : s())
        };
        var i = t.fn.alert;
        t.fn.alert = function(e) {
            return this.each((function() {
                var i = t(this),
                    o = i.data("bs.alert");
                o || i.data("bs.alert", o = new n(this)), "string" == typeof e && o[e].call(i)
            }))
        }, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() {
            return t.fn.alert = i, this
        }, t(document).on("click.bs.alert.data-api", e, n.prototype.close)
    }(jQuery),
    function(t) {
        "use strict";
        var e = function e(n, i) {
            this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, i), this.isLoading = !1
        };
 
        function i(i) {
            return this.each((function() {
                var o = t(this),
                    r = o.data("bs.button"),
                    s = "object" == n(i) && i;
                r || o.data("bs.button", r = new e(this, s)), "toggle" == i ? r.toggle() : i && r.setState(i)
            }))
        }
        e.VERSION = "3.3.7", e.DEFAULTS = {
            loadingText: "loading..."
        }, e.prototype.setState = function(e) {
            var n = "disabled",
                i = this.$element,
                o = i.is("input") ? "val" : "html",
                r = i.data();
            e += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(t.proxy((function() {
                i[o](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1))
            }), this), 0)
        }, e.prototype.toggle = function() {
            var t = !0,
                e = this.$element.closest('[data-toggle="buttons"]');
            if (e.length) {
                var n = this.$element.find("input");
                "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
            } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
        };
        var o = t.fn.button;
        t.fn.button = i, t.fn.button.Constructor = e, t.fn.button.noConflict = function() {
            return t.fn.button = o, this
        }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', (function(e) {
            var n = t(e.target).closest(".btn");
            i.call(n, "toggle"), t(e.target).is('input[type="radio"], input[type="checkbox"]') || (e.preventDefault(), n.is("input,button") ? n.trigger("focus") : n.find("input:visible,button:visible").first().trigger("focus"))
        })).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', (function(e) {
            t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
        }))
    }(jQuery),
    function(t) {
        "use strict";
        var e = function(e, n) {
            this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
        };
 
        function i(i) {
            return this.each((function() {
                var o = t(this),
                    r = o.data("bs.carousel"),
                    s = t.extend({}, e.DEFAULTS, o.data(), "object" == n(i) && i),
                    a = "string" == typeof i ? i : s.slide;
                r || o.data("bs.carousel", r = new e(this, s)), "number" == typeof i ? r.to(i) : a ? r[a]() : s.interval && r.pause().cycle()
            }))
        }
        e.VERSION = "3.3.7", e.TRANSITION_DURATION = 600, e.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0,
            keyboard: !0
        }, e.prototype.keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName)) {
                switch (t.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return
                }
                t.preventDefault()
            }
        }, e.prototype.cycle = function(e) {
            return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
        }, e.prototype.getItemIndex = function(t) {
            return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
        }, e.prototype.getItemForDirection = function(t, e) {
            var n = this.getItemIndex(e);
            if (("prev" == t && 0 === n || "next" == t && n == this.$items.length - 1) && !this.options.wrap) return e;
            var i = (n + ("prev" == t ? -1 : 1)) % this.$items.length;
            return this.$items.eq(i)
        }, e.prototype.to = function(t) {
            var e = this,
                n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", (function() {
                e.to(t)
            })) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
        }, e.prototype.pause = function(e) {
            return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
        }, e.prototype.next = function() {
            if (!this.sliding) return this.slide("next")
        }, e.prototype.prev = function() {
            if (!this.sliding) return this.slide("prev")
        }, e.prototype.slide = function(n, i) {
            var o = this.$element.find(".item.active"),
                r = i || this.getItemForDirection(n, o),
                s = this.interval,
                a = "next" == n ? "left" : "right",
                l = this;
            if (r.hasClass("active")) return this.sliding = !1;
            var c = r[0],
                u = t.Event("slide.bs.carousel", {
                    relatedTarget: c,
                    direction: a
                });
            if (this.$element.trigger(u), !u.isDefaultPrevented()) {
                if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                    this.$indicators.find(".active").removeClass("active");
                    var d = t(this.$indicators.children()[this.getItemIndex(r)]);
                    d && d.addClass("active")
                }
                var f = t.Event("slid.bs.carousel", {
                    relatedTarget: c,
                    direction: a
                });
                return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(n), r[0].offsetWidth, o.addClass(a), r.addClass(a), o.one("bsTransitionEnd", (function() {
                    r.removeClass([n, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout((function() {
                        l.$element.trigger(f)
                    }), 0)
                })).emulateTransitionEnd(e.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(f)), s && this.cycle(), this
            }
        };
        var o = t.fn.carousel;
        t.fn.carousel = i, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function() {
            return t.fn.carousel = o, this
        };
        var r = function(e) {
            var n, o = t(this),
                r = t(o.attr("data-target") || (n = o.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
            if (r.hasClass("carousel")) {
                var s = t.extend({}, r.data(), o.data()),
                    a = o.attr("data-slide-to");
                a && (s.interval = !1), i.call(r, s), a && r.data("bs.carousel").to(a), e.preventDefault()
            }
        };
        t(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r), t(window).on("load", (function() {
            t('[data-ride="carousel"]').each((function() {
                var e = t(this);
                i.call(e, e.data())
            }))
        }))
    }(jQuery),
    function(t) {
        "use strict";
        var e = function e(n, i) {
            this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + n.id + '"],[data-toggle="collapse"][data-target="#' + n.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
        };
 
        function i(e) {
            var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
            return t(i)
        }
 
        function o(i) {
            return this.each((function() {
                var o = t(this),
                    r = o.data("bs.collapse"),
                    s = t.extend({}, e.DEFAULTS, o.data(), "object" == n(i) && i);
                !r && s.toggle && /show|hide/.test(i) && (s.toggle = !1), r || o.data("bs.collapse", r = new e(this, s)), "string" == typeof i && r[i]()
            }))
        }
        e.VERSION = "3.3.7", e.TRANSITION_DURATION = 350, e.DEFAULTS = {
            toggle: !0
        }, e.prototype.dimension = function() {
            return this.$element.hasClass("width") ? "width" : "height"
        }, e.prototype.show = function() {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var n, i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(i && i.length && (n = i.data("bs.collapse")) && n.transitioning)) {
                    var r = t.Event("show.bs.collapse");
                    if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                        i && i.length && (o.call(i, "hide"), n || i.data("bs.collapse", null));
                        var s = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var a = function() {
                            this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                        };
                        if (!t.support.transition) return a.call(this);
                        var l = t.camelCase(["scroll", s].join("-"));
                        this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(e.TRANSITION_DURATION)[s](this.$element[0][l])
                    }
                }
            }
        }, e.prototype.hide = function() {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var n = t.Event("hide.bs.collapse");
                if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                    var i = this.dimension();
                    this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var o = function() {
                        this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    };
                    if (!t.support.transition) return o.call(this);
                    this.$element[i](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(e.TRANSITION_DURATION)
                }
            }
        }, e.prototype.toggle = function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }, e.prototype.getParent = function() {
            return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy((function(e, n) {
                var o = t(n);
                this.addAriaAndCollapsedClass(i(o), o)
            }), this)).end()
        }, e.prototype.addAriaAndCollapsedClass = function(t, e) {
            var n = t.hasClass("in");
            t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
        };
        var r = t.fn.collapse;
        t.fn.collapse = o, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function() {
            return t.fn.collapse = r, this
        }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function(e) {
            var n = t(this);
            n.attr("data-target") || e.preventDefault();
            var r = i(n),
                s = r.data("bs.collapse") ? "toggle" : n.data();
            o.call(r, s)
        }))
    }(jQuery),
    function(t) {
        "use strict";
        var e = '[data-toggle="dropdown"]',
            n = function(e) {
                t(e).on("click.bs.dropdown", this.toggle)
            };
 
        function i(e) {
            var n = e.attr("data-target");
            n || (n = (n = e.attr("href")) && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
            var i = n && t(n);
            return i && i.length ? i : e.parent()
        }
 
        function o(n) {
            n && 3 === n.which || (t(".dropdown-backdrop").remove(), t(e).each((function() {
                var e = t(this),
                    o = i(e),
                    r = {
                        relatedTarget: this
                    };
                o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(o[0], n.target) || (o.trigger(n = t.Event("hide.bs.dropdown", r)), n.isDefaultPrevented() || (e.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", r)))))
            })))
        }
        n.VERSION = "3.3.7", n.prototype.toggle = function(e) {
            var n = t(this);
            if (!n.is(".disabled, :disabled")) {
                var r = i(n),
                    s = r.hasClass("open");
                if (o(), !s) {
                    "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", o);
                    var a = {
                        relatedTarget: this
                    };
                    if (r.trigger(e = t.Event("show.bs.dropdown", a)), e.isDefaultPrevented()) return;
                    n.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
                }
                return !1
            }
        }, n.prototype.keydown = function(n) {
            if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
                var o = t(this);
                if (n.preventDefault(), n.stopPropagation(), !o.is(".disabled, :disabled")) {
                    var r = i(o),
                        s = r.hasClass("open");
                    if (!s && 27 != n.which || s && 27 == n.which) return 27 == n.which && r.find(e).trigger("focus"), o.trigger("click");
                    var a = r.find(".dropdown-menu li:not(.disabled):visible a");
                    if (a.length) {
                        var l = a.index(n.target);
                        38 == n.which && l > 0 && l--, 40 == n.which && l < a.length - 1 && l++, ~l || (l = 0), a.eq(l).trigger("focus")
                    }
                }
            }
        };
        var r = t.fn.dropdown;
        t.fn.dropdown = function(e) {
            return this.each((function() {
                var i = t(this),
                    o = i.data("bs.dropdown");
                o || i.data("bs.dropdown", o = new n(this)), "string" == typeof e && o[e].call(i)
            }))
        }, t.fn.dropdown.Constructor = n, t.fn.dropdown.noConflict = function() {
            return t.fn.dropdown = r, this
        }, t(document).on("click.bs.dropdown.data-api", o).on("click.bs.dropdown.data-api", ".dropdown form", (function(t) {
            t.stopPropagation()
        })).on("click.bs.dropdown.data-api", e, n.prototype.toggle).on("keydown.bs.dropdown.data-api", e, n.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", n.prototype.keydown)
    }(jQuery),
    function(t) {
        "use strict";
        var e = function(e, n) {
            this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy((function() {
                this.$element.trigger("loaded.bs.modal")
            }), this))
        };
 
        function i(i, o) {
            return this.each((function() {
                var r = t(this),
                    s = r.data("bs.modal"),
                    a = t.extend({}, e.DEFAULTS, r.data(), "object" == n(i) && i);
                s || r.data("bs.modal", s = new e(this, a)), "string" == typeof i ? s[i](o) : a.show && s.show(o)
            }))
        }
        e.VERSION = "3.3.7", e.TRANSITION_DURATION = 300, e.BACKDROP_TRANSITION_DURATION = 150, e.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, e.prototype.toggle = function(t) {
            return this.isShown ? this.hide() : this.show(t)
        }, e.prototype.show = function(n) {
            var i = this,
                o = t.Event("show.bs.modal", {
                    relatedTarget: n
                });
            this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", (function() {
                i.$element.one("mouseup.dismiss.bs.modal", (function(e) {
                    t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
                }))
            })), this.backdrop((function() {
                var o = t.support.transition && i.$element.hasClass("fade");
                i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
                var r = t.Event("shown.bs.modal", {
                    relatedTarget: n
                });
                o ? i.$dialog.one("bsTransitionEnd", (function() {
                    i.$element.trigger("focus").trigger(r)
                })).emulateTransitionEnd(e.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
            })))
        }, e.prototype.hide = function(n) {
            n && n.preventDefault(), n = t.Event("hide.bs.modal"), this.$element.trigger(n), this.isShown && !n.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(e.TRANSITION_DURATION) : this.hideModal())
        }, e.prototype.enforceFocus = function() {
            t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy((function(t) {
                document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
            }), this))
        }, e.prototype.escape = function() {
            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy((function(t) {
                27 == t.which && this.hide()
            }), this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
        }, e.prototype.resize = function() {
            this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
        }, e.prototype.hideModal = function() {
            var t = this;
            this.$element.hide(), this.backdrop((function() {
                t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
            }))
        }, e.prototype.removeBackdrop = function() {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, e.prototype.backdrop = function(n) {
            var i = this,
                o = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var r = t.support.transition && o;
                if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy((function(t) {
                        this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                    }), this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !n) return;
                r ? this.$backdrop.one("bsTransitionEnd", n).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : n()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var s = function() {
                    i.removeBackdrop(), n && n()
                };
                t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : s()
            } else n && n()
        }, e.prototype.handleUpdate = function() {
            this.adjustDialog()
        }, e.prototype.adjustDialog = function() {
            var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
            })
        }, e.prototype.resetAdjustments = function() {
            this.$element.css({
                paddingLeft: "",
                paddingRight: ""
            })
        }, e.prototype.checkScrollbar = function() {
            var t = window.innerWidth;
            if (!t) {
                var e = document.documentElement.getBoundingClientRect();
                t = e.right - Math.abs(e.left)
            }
            this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
        }, e.prototype.setScrollbar = function() {
            var t = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
        }, e.prototype.resetScrollbar = function() {
            this.$body.css("padding-right", this.originalBodyPad)
        }, e.prototype.measureScrollbar = function() {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure", this.$body.append(t);
            var e = t.offsetWidth - t.clientWidth;
            return this.$body[0].removeChild(t), e
        };
        var o = t.fn.modal;
        t.fn.modal = i, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function() {
            return t.fn.modal = o, this
        }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function(e) {
            var n = t(this),
                o = n.attr("href"),
                r = t(n.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
                s = r.data("bs.modal") ? "toggle" : t.extend({
                    remote: !/#/.test(o) && o
                }, r.data(), n.data());
            n.is("a") && e.preventDefault(), r.one("show.bs.modal", (function(t) {
                t.isDefaultPrevented() || r.one("hidden.bs.modal", (function() {
                    n.is(":visible") && n.trigger("focus")
                }))
            })), i.call(r, s, this)
        }))
    }(jQuery),
    function(t) {
        "use strict";
        var e = function(t, e) {
            this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
        };
        e.VERSION = "3.3.7", e.TRANSITION_DURATION = 150, e.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {
                selector: "body",
                padding: 0
            }
        }, e.prototype.init = function(e, n, i) {
            if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                    click: !1,
                    hover: !1,
                    focus: !1
                }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
            for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
                var s = o[r];
                if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                else if ("manual" != s) {
                    var a = "hover" == s ? "mouseenter" : "focusin",
                        l = "hover" == s ? "mouseleave" : "focusout";
                    this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = t.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, e.prototype.getDefaults = function() {
            return e.DEFAULTS
        }, e.prototype.getOptions = function(e) {
            return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), e
        }, e.prototype.getDelegateOptions = function() {
            var e = {},
                n = this.getDefaults();
            return this._options && t.each(this._options, (function(t, i) {
                n[t] != i && (e[t] = i)
            })), e
        }, e.prototype.enter = function(e) {
            var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState) n.hoverState = "in";
            else {
                if (clearTimeout(n.timeout), n.hoverState = "in", !n.options.delay || !n.options.delay.show) return n.show();
                n.timeout = setTimeout((function() {
                    "in" == n.hoverState && n.show()
                }), n.options.delay.show)
            }
        }, e.prototype.isInStateTrue = function() {
            for (var t in this.inState)
                if (this.inState[t]) return !0;
            return !1
        }, e.prototype.leave = function(e) {
            var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) {
                if (clearTimeout(n.timeout), n.hoverState = "out", !n.options.delay || !n.options.delay.hide) return n.hide();
                n.timeout = setTimeout((function() {
                    "out" == n.hoverState && n.hide()
                }), n.options.delay.hide)
            }
        }, e.prototype.show = function() {
            var n = t.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(n);
                var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (n.isDefaultPrevented() || !i) return;
                var o = this,
                    r = this.tip(),
                    s = this.getUID(this.type);
                this.setContent(), r.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && r.addClass("fade");
                var a = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                    l = /\s?auto?\s?/i,
                    c = l.test(a);
                c && (a = a.replace(l, "") || "top"), r.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(a).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                var u = this.getPosition(),
                    d = r[0].offsetWidth,
                    f = r[0].offsetHeight;
                if (c) {
                    var p = a,
                        h = this.getPosition(this.$viewport);
                    a = "bottom" == a && u.bottom + f > h.bottom ? "top" : "top" == a && u.top - f < h.top ? "bottom" : "right" == a && u.right + d > h.width ? "left" : "left" == a && u.left - d < h.left ? "right" : a, r.removeClass(p).addClass(a)
                }
                var m = this.getCalculatedOffset(a, u, d, f);
                this.applyPlacement(m, a);
                var g = function() {
                    var t = o.hoverState;
                    o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
                };
                t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", g).emulateTransitionEnd(e.TRANSITION_DURATION) : g()
            }
        }, e.prototype.applyPlacement = function(e, n) {
            var i = this.tip(),
                o = i[0].offsetWidth,
                r = i[0].offsetHeight,
                s = parseInt(i.css("margin-top"), 10),
                a = parseInt(i.css("margin-left"), 10);
            isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(i[0], t.extend({
                using: function(t) {
                    i.css({
                        top: Math.round(t.top),
                        left: Math.round(t.left)
                    })
                }
            }, e), 0), i.addClass("in");
            var l = i[0].offsetWidth,
                c = i[0].offsetHeight;
            "top" == n && c != r && (e.top = e.top + r - c);
            var u = this.getViewportAdjustedDelta(n, e, l, c);
            u.left ? e.left += u.left : e.top += u.top;
            var d = /top|bottom/.test(n),
                f = d ? 2 * u.left - o + l : 2 * u.top - r + c,
                p = d ? "offsetWidth" : "offsetHeight";
            i.offset(e), this.replaceArrow(f, i[0][p], d)
        }, e.prototype.replaceArrow = function(t, e, n) {
            this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
        }, e.prototype.setContent = function() {
            var t = this.tip(),
                e = this.getTitle();
            t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
        }, e.prototype.hide = function(n) {
            var i = this,
                o = t(this.$tip),
                r = t.Event("hide.bs." + this.type);
 
            function s() {
                "in" != i.hoverState && o.detach(), i.$element && i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type), n && n()
            }
            if (this.$element.trigger(r), !r.isDefaultPrevented()) return o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", s).emulateTransitionEnd(e.TRANSITION_DURATION) : s(), this.hoverState = null, this
        }, e.prototype.fixTitle = function() {
            var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
        }, e.prototype.hasContent = function() {
            return this.getTitle()
        }, e.prototype.getPosition = function(e) {
            var n = (e = e || this.$element)[0],
                i = "BODY" == n.tagName,
                o = n.getBoundingClientRect();
            null == o.width && (o = t.extend({}, o, {
                width: o.right - o.left,
                height: o.bottom - o.top
            }));
            var r = window.SVGElement && n instanceof window.SVGElement,
                s = i ? {
                    top: 0,
                    left: 0
                } : r ? null : e.offset(),
                a = {
                    scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
                },
                l = i ? {
                    width: t(window).width(),
                    height: t(window).height()
                } : null;
            return t.extend({}, o, a, l, s)
        }, e.prototype.getCalculatedOffset = function(t, e, n, i) {
            return "bottom" == t ? {
                top: e.top + e.height,
                left: e.left + e.width / 2 - n / 2
            } : "top" == t ? {
                top: e.top - i,
                left: e.left + e.width / 2 - n / 2
            } : "left" == t ? {
                top: e.top + e.height / 2 - i / 2,
                left: e.left - n
            } : {
                top: e.top + e.height / 2 - i / 2,
                left: e.left + e.width
            }
        }, e.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
            var o = {
                top: 0,
                left: 0
            };
            if (!this.$viewport) return o;
            var r = this.options.viewport && this.options.viewport.padding || 0,
                s = this.getPosition(this.$viewport);
            if (/right|left/.test(t)) {
                var a = e.top - r - s.scroll,
                    l = e.top + r - s.scroll + i;
                a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
            } else {
                var c = e.left - r,
                    u = e.left + r + n;
                c < s.left ? o.left = s.left - c : u > s.right && (o.left = s.left + s.width - u)
            }
            return o
        }, e.prototype.getTitle = function() {
            var t = this.$element,
                e = this.options;
            return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
        }, e.prototype.getUID = function(t) {
            do {
                t += ~~(1e6 * Math.random())
            } while (document.getElementById(t));
            return t
        }, e.prototype.tip = function() {
            if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
            return this.$tip
        }, e.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, e.prototype.enable = function() {
            this.enabled = !0
        }, e.prototype.disable = function() {
            this.enabled = !1
        }, e.prototype.toggleEnabled = function() {
            this.enabled = !this.enabled
        }, e.prototype.toggle = function(e) {
            var n = this;
            e && ((n = t(e.currentTarget).data("bs." + this.type)) || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
        }, e.prototype.destroy = function() {
            var t = this;
            clearTimeout(this.timeout), this.hide((function() {
                t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
            }))
        };
        var i = t.fn.tooltip;
        t.fn.tooltip = function(i) {
            return this.each((function() {
                var o = t(this),
                    r = o.data("bs.tooltip"),
                    s = "object" == n(i) && i;
                !r && /destroy|hide/.test(i) || (r || o.data("bs.tooltip", r = new e(this, s)), "string" == typeof i && r[i]())
            }))
        }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function() {
            return t.fn.tooltip = i, this
        }
    }(jQuery),
    function(t) {
        "use strict";
        var e = function(t, e) {
            this.init("popover", t, e)
        };
        if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
        e.VERSION = "3.3.7", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), (e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)).constructor = e, e.prototype.getDefaults = function() {
            return e.DEFAULTS
        }, e.prototype.setContent = function() {
            var t = this.tip(),
                e = this.getTitle(),
                n = this.getContent();
            t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
        }, e.prototype.hasContent = function() {
            return this.getTitle() || this.getContent()
        }, e.prototype.getContent = function() {
            var t = this.$element,
                e = this.options;
            return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        }, e.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        };
        var i = t.fn.popover;
        t.fn.popover = function(i) {
            return this.each((function() {
                var o = t(this),
                    r = o.data("bs.popover"),
                    s = "object" == n(i) && i;
                !r && /destroy|hide/.test(i) || (r || o.data("bs.popover", r = new e(this, s)), "string" == typeof i && r[i]())
            }))
        }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function() {
            return t.fn.popover = i, this
        }
    }(jQuery),
    function(t) {
        "use strict";
 
        function e(n, i) {
            this.$body = t(document.body), this.$scrollElement = t(n).is(document.body) ? t(window) : t(n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
        }
 
        function i(i) {
            return this.each((function() {
                var o = t(this),
                    r = o.data("bs.scrollspy"),
                    s = "object" == n(i) && i;
                r || o.data("bs.scrollspy", r = new e(this, s)), "string" == typeof i && r[i]()
            }))
        }
        e.VERSION = "3.3.7", e.DEFAULTS = {
            offset: 10
        }, e.prototype.getScrollHeight = function() {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        }, e.prototype.refresh = function() {
            var e = this,
                n = "offset",
                i = 0;
            this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map((function() {
                var e = t(this),
                    o = e.data("target") || e.attr("href"),
                    r = /^#./.test(o) && t(o);
                return r && r.length && r.is(":visible") && [
                    [r[n]().top + i, o]
                ] || null
            })).sort((function(t, e) {
                return t[0] - e[0]
            })).each((function() {
                e.offsets.push(this[0]), e.targets.push(this[1])
            }))
        }, e.prototype.process = function() {
            var t, e = this.$scrollElement.scrollTop() + this.options.offset,
                n = this.getScrollHeight(),
                i = this.options.offset + n - this.$scrollElement.height(),
                o = this.offsets,
                r = this.targets,
                s = this.activeTarget;
            if (this.scrollHeight != n && this.refresh(), e >= i) return s != (t = r[r.length - 1]) && this.activate(t);
            if (s && e < o[0]) return this.activeTarget = null, this.clear();
            for (t = o.length; t--;) s != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[t])
        }, e.prototype.activate = function(e) {
            this.activeTarget = e, this.clear();
            var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                i = t(n).parents("li").addClass("active");
            i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
        }, e.prototype.clear = function() {
            t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
        };
        var o = t.fn.scrollspy;
        t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
            return t.fn.scrollspy = o, this
        }, t(window).on("load.bs.scrollspy.data-api", (function() {
            t('[data-spy="scroll"]').each((function() {
                var e = t(this);
                i.call(e, e.data())
            }))
        }))
    }(jQuery),
    function(t) {
        "use strict";
        var e = function(e) {
            this.element = t(e)
        };
 
        function n(n) {
            return this.each((function() {
                var i = t(this),
                    o = i.data("bs.tab");
                o || i.data("bs.tab", o = new e(this)), "string" == typeof n && o[n]()
            }))
        }
        e.VERSION = "3.3.7", e.TRANSITION_DURATION = 150, e.prototype.show = function() {
            var e = this.element,
                n = e.closest("ul:not(.dropdown-menu)"),
                i = e.data("target");
            if (i || (i = (i = e.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
                var o = n.find(".active:last a"),
                    r = t.Event("hide.bs.tab", {
                        relatedTarget: e[0]
                    }),
                    s = t.Event("show.bs.tab", {
                        relatedTarget: o[0]
                    });
                if (o.trigger(r), e.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
                    var a = t(i);
                    this.activate(e.closest("li"), n), this.activate(a, a.parent(), (function() {
                        o.trigger({
                            type: "hidden.bs.tab",
                            relatedTarget: e[0]
                        }), e.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: o[0]
                        })
                    }))
                }
            }
        }, e.prototype.activate = function(n, i, o) {
            var r = i.find("> .active"),
                s = o && t.support.transition && (r.length && r.hasClass("fade") || !!i.find("> .fade").length);
 
            function a() {
                r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), n.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (n[0].offsetWidth, n.addClass("in")) : n.removeClass("fade"), n.parent(".dropdown-menu").length && n.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
            }
            r.length && s ? r.one("bsTransitionEnd", a).emulateTransitionEnd(e.TRANSITION_DURATION) : a(), r.removeClass("in")
        };
        var i = t.fn.tab;
        t.fn.tab = n, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function() {
            return t.fn.tab = i, this
        };
        var o = function(e) {
            e.preventDefault(), n.call(t(this), "show")
        };
        t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
    }(jQuery),
    function(t) {
        "use strict";
        var e = function e(n, i) {
            this.options = t.extend({}, e.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(n), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
        };
 
        function i(i) {
            return this.each((function() {
                var o = t(this),
                    r = o.data("bs.affix"),
                    s = "object" == n(i) && i;
                r || o.data("bs.affix", r = new e(this, s)), "string" == typeof i && r[i]()
            }))
        }
        e.VERSION = "3.3.7", e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = {
            offset: 0,
            target: window
        }, e.prototype.getState = function(t, e, n, i) {
            var o = this.$target.scrollTop(),
                r = this.$element.offset(),
                s = this.$target.height();
            if (null != n && "top" == this.affixed) return o < n && "top";
            if ("bottom" == this.affixed) return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(o + s <= t - i) && "bottom";
            var a = null == this.affixed,
                l = a ? o : r.top;
            return null != n && o <= n ? "top" : null != i && l + (a ? s : e) >= t - i && "bottom"
        }, e.prototype.getPinnedOffset = function() {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(e.RESET).addClass("affix");
            var t = this.$target.scrollTop(),
                n = this.$element.offset();
            return this.pinnedOffset = n.top - t
        }, e.prototype.checkPositionWithEventLoop = function() {
            setTimeout(t.proxy(this.checkPosition, this), 1)
        }, e.prototype.checkPosition = function() {
            if (this.$element.is(":visible")) {
                var i = this.$element.height(),
                    o = this.options.offset,
                    r = o.top,
                    s = o.bottom,
                    a = Math.max(t(document).height(), t(document.body).height());
                "object" != n(o) && (s = r = o), "function" == typeof r && (r = o.top(this.$element)), "function" == typeof s && (s = o.bottom(this.$element));
                var l = this.getState(a, i, r, s);
                if (this.affixed != l) {
                    null != this.unpin && this.$element.css("top", "");
                    var c = "affix" + (l ? "-" + l : ""),
                        u = t.Event(c + ".bs.affix");
                    if (this.$element.trigger(u), u.isDefaultPrevented()) return;
                    this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(e.RESET).addClass(c).trigger(c.replace("affix", "affixed") + ".bs.affix")
                }
                "bottom" == l && this.$element.offset({
                    top: a - i - s
                })
            }
        };
        var o = t.fn.affix;
        t.fn.affix = i, t.fn.affix.Constructor = e, t.fn.affix.noConflict = function() {
            return t.fn.affix = o, this
        }, t(window).on("load", (function() {
            t('[data-spy="affix"]').each((function() {
                var e = t(this),
                    n = e.data();
                n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), i.call(e, n)
            }))
        }))
    }(jQuery)
 }, function(t, e) {
    var n = {
        GS21U: {},
        GS21P: {},
        GS21: {}
    };
    n.GS21U["128GB"] = {}, n.GS21U["256GB"] = {}, n.GS21U["512GB"] = {}, n.GS21P["128GB"] = {}, n.GS21P["256GB"] = {}, n.GS21["128GB"] = {}, n.GS21["256GB"] = {}, n.GS21U["128GB"].black = "none", n.GS21U["128GB"].silver = "none", n.GS21U["256GB"].black = "https://es.wikipedia.org/wiki/3", n.GS21U["256GB"].silver = "https://es.wikipedia.org/wiki/4", n.GS21U["512GB"].black = "none", n.GS21U["512GB"].silver = "none", n.GS21P["128GB"].black = "https://es.wikipedia.org/wiki/5", n.GS21P["128GB"].violet = "https://es.wikipedia.org/wiki/6", n.GS21P["128GB"].silver = "https://es.wikipedia.org/wiki/7", n.GS21P["256GB"].black = "none", n.GS21P["256GB"].violet = "none", n.GS21P["256GB"].silver = "none", n.GS21["128GB"].grey = "https://es.wikipedia.org/wiki/11", n.GS21["128GB"].pink = "https://es.wikipedia.org/wiki/12", n.GS21["128GB"].white = "https://es.wikipedia.org/wiki/13", n.GS21["128GB"].violet = "https://es.wikipedia.org/wiki/14", n.GS21["256GB"].grey = "none", n.GS21["256GB"].pink = "none", n.GS21["256GB"].white = "none", n.GS21["256GB"].violet = "none";
    $(document).ready((function() {
        document.querySelectorAll(".device").forEach((function(t) {
            t.addEventListener("click", (function() {
                document.querySelector("#device-title").innerHTML = t.getAttribute("data-device-name"), document.querySelector("#phone-model").value = t.getAttribute("data-device-name")
            }))
        })), $('.cta-black[data-model="GS21U"]').attr("href", n.GS21U["256GB"].black), $('.cta-black[data-model="GS21P"]').attr("href", n.GS21P["128GB"].violet), $('.cta-black[data-model="GS21"]').attr("href", n.GS21["128GB"].pink)
    })), $(".btn-capacity").on("click", (function() {
        if (!$(this).hasClass("btn-capacity-select")) {
            var t = $(this).attr("data-capacity"),
                e = $(this).closest(".product").attr("data-model"),
                i = $(this).closest(".product").find(".active").attr("data-color");
            $('.cta-black[data-model="' + e + '"]').attr("href", n[e][t][i]), $(this).siblings(".btn-capacity").removeClass("btn-capacity-select"), $(this).addClass("btn-capacity-select"), console.log("hecho" + t + " " + e + " " + i)
        }
    })), $(".btn-color").on("click", (function() {
        var t = $(this).attr("data-color"),
            e = $(this).closest(".product").attr("data-model"),
            i = $(this).closest(".product").find(".btn-capacity-select").attr("data-capacity");
        $('.cta-black[data-model="' + e + '"]').attr("href", n[e][i][t]), $(this).siblings(".active").removeClass("active"), $(this).addClass("active");
        var o = $(this).closest(".product").find(".visible");
        o.removeClass("visible"), o.addClass("oculto");
        var r = $(this).closest(".product").find('img[data-color="' + t + '"]');
        r.removeClass("oculto"), r.addClass("visible"), console.log("hecho" + t + " " + e + " " + i)
    })), $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click((function(t) {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = $(this.hash);
            (e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length && (t.preventDefault(), $("html, body").animate({
                scrollTop: e.offset().top
            }, 1e3, (function() {
                var t = $(e);
                if (t.focus(), t.is(":focus")) return !1;
                t.attr("tabindex", "-1"), t.focus()
            })))
        }
    }))
 }, function(t, e, n) {
    "use strict";
    n.r(e), performance && performance.mark && performance.mark("micro exec");
    var i = "#samsung-galaxy-s21",
        o = document.querySelector("link[data-ws10-microcss]"),
        r = function(t, e, n) {
            var i = null;
            for (; t;) {
                if (t.matches(e)) {
                    i = t;
                    break
                }
                if (n && t.matches(n)) break;
                t = t.parentElement
            }
            return i
        }(document.querySelector(i), "[data-ws10-microsite]"),
        s = r ? r.dataset.pathmicrosite : "",
        a = document.documentElement.clientWidth,
        l = a > 1024,
        c = a <= 1024 && a >= 768,
        u = a < 768;
 
    function d() {
        h.cssLoaded || (document.querySelector(i) && document.querySelector(i).removeAttribute("style"), h.cssLoaded = !0, h.onStylesReady(), performance && performance.mark && performance.mark("micro css ready"))
    }
 
    function f() {
        document.removeEventListener("ws10:frameworkReady", f), window.ws10.utils.init(document.querySelector(i)), h.onFrameworkReady(), performance && performance.mark && (performance.mark("micro js ready"), console.timeEnd("microsite instantiation"))
    }
 
    function p() {
        var t = document.styleSheets,
            e = 0;
        return [].forEach.call(t, (function(t) {
            var n = t.href || ""; - 1 !== n.indexOf(s + "css/ws10") && (console.log("WS10 CSS Loaded"), e++), -1 !== n.indexOf(s + "css/styles.css") && (console.log("MICRO CSS Loaded"), e++)
        })), 2 === e
    }
    p() ? p() && setTimeout(d, 100) : o ? (o.addEventListener("load", d), setTimeout((function() {
        console.warn("Microsite visible by 3s timeout"), d()
    }), 3e3)) : setTimeout(d, 100), window.ws10 ? setTimeout(f, 100) : document.addEventListener("ws10:frameworkReady", f);
    var h = {
            isDesktop: l,
            isTablet: c,
            isMobile: u,
            micrositeId: i,
            micrositePath: s,
            init: function() {},
            cssLoaded: !1,
            onStylesReady: function() {
                return null
            },
            onFrameworkReady: function() {
                return null
            }
        },
        m = h;
    n(0), n(2), n(3);
    m.onStylesReady = function() {
        console.log("Site visually ready"), document.querySelectorAll(".device").forEach((function(t) {
            t.addEventListener("click", (function() {
                document.querySelector("#device-title").innerHTML = t.getAttribute("data-device-name"), document.querySelector("#phone-model").value = t.getAttribute("data-device-name")
            }))
        })), 
        //Galaxy S21 Ultra 5G
	$('#box1_black').on('click', function () {
		$("#device1-btn2").addClass('oculto');
		$("#device1-btn1").removeClass('oculto');
	});
	$('#box1_silver').on('click', function () {
		$("#device1-btn1").addClass('oculto');
		$("#device1-btn2").removeClass('oculto');
	});

	//Galaxy S21+ 5G
	$('#box2_violet').on('click', function () {
		$("#device2-btn1").removeClass('oculto');
		$("#device2-btn2").addClass('oculto');	
		$("#device2-btn3").addClass('oculto');
	});
	$('#box2_silver').on('click', function () {
		$("#device2-btn1").addClass('oculto');
		$("#device2-btn2").removeClass('oculto');
		$("#device2-btn3").addClass('oculto');
	});
	$('#box2_black').on('click', function () {
		$("#device2-btn1").addClass('oculto');
		$("#device2-btn2").addClass('oculto');
		$("#device2-btn3").removeClass('oculto');
	});
	//Galaxy S21 5G
	$('#box3_pink').on('click', function () {
		$("#device3-btn1").removeClass('oculto');
		$("#device3-btn2").addClass('oculto');	
		$("#device3-btn3").addClass('oculto');
		$("#device3-btn4").addClass('oculto');
	});
	$('#box3_grey').on('click', function () {
		$("#device3-btn1").addClass('oculto');
		$("#device3-btn2").removeClass('oculto');
		$("#device3-btn3").addClass('oculto');
		$("#device3-btn4").addClass('oculto');
	});
	$('#box3_white').on('click', function () {
		$("#device3-btn1").addClass('oculto');
		$("#device3-btn2").addClass('oculto');
		$("#device3-btn3").removeClass('oculto');
		$("#device3-btn4").addClass('oculto');
	});
	$('#box3_violet').on('click', function () {
		$("#device3-btn1").addClass('oculto');
		$("#device3-btn2").addClass('oculto');
		$("#device3-btn3").addClass('oculto');
		$("#device3-btn4").removeClass('oculto');
	});
    }, m.onFrameworkReady = function() {
        console.log("Site functionality ready")
    }
 }]);