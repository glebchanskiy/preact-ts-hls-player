var xa = Object.defineProperty;
var Sa = (n, e, t) => e in n ? xa(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Dt = (n, e, t) => Sa(n, typeof e != "symbol" ? e + "" : e, t);
var Xt, zr;
Xt = { __e: function(n, e, t, s) {
  for (var i, r, a; e = e.__; ) if ((i = e.__c) && !i.__) try {
    if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(n)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(n, s || {}), a = i.__d), a) return i.__E = i;
  } catch (o) {
    n = o;
  }
  throw n;
} }, zr = function(n) {
  return n != null && n.constructor == null;
}, typeof Promise == "function" && Promise.prototype.then.bind(Promise.resolve());
var Qt, Te, ms, Fi, Ms = 0, Xr = [], oe = Xt, Oi = oe.__b, Mi = oe.__r, Ni = oe.diffed, Ui = oe.__c, Bi = oe.unmount, $i = oe.__;
function Qr(n, e) {
  oe.__h && oe.__h(Te, n, Ms || e), Ms = 0;
  var t = Te.__H || (Te.__H = { __: [], __h: [] });
  return n >= t.__.length && t.__.push({}), t.__[n];
}
function Gi(n, e) {
  var t = Qr(Qt++, 3);
  !oe.__s && Jr(t.__H, e) && (t.__ = n, t.i = e, Te.__H.__h.push(t));
}
function va(n) {
  return Ms = 5, ii(function() {
    return { current: n };
  }, []);
}
function ii(n, e) {
  var t = Qr(Qt++, 7);
  return Jr(t.__H, e) && (t.__ = n(), t.__H = e, t.__h = n), t.__;
}
function Aa() {
  for (var n; n = Xr.shift(); ) if (n.__P && n.__H) try {
    n.__H.__h.forEach(Vt), n.__H.__h.forEach(Ns), n.__H.__h = [];
  } catch (e) {
    n.__H.__h = [], oe.__e(e, n.__v);
  }
}
oe.__b = function(n) {
  Te = null, Oi && Oi(n);
}, oe.__ = function(n, e) {
  n && e.__k && e.__k.__m && (n.__m = e.__k.__m), $i && $i(n, e);
}, oe.__r = function(n) {
  Mi && Mi(n), Qt = 0;
  var e = (Te = n.__c).__H;
  e && (ms === Te ? (e.__h = [], Te.__h = [], e.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void 0;
  })) : (e.__h.forEach(Vt), e.__h.forEach(Ns), e.__h = [], Qt = 0)), ms = Te;
}, oe.diffed = function(n) {
  Ni && Ni(n);
  var e = n.__c;
  e && e.__H && (e.__H.__h.length && (Xr.push(e) !== 1 && Fi === oe.requestAnimationFrame || ((Fi = oe.requestAnimationFrame) || La)(Aa)), e.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void 0;
  })), ms = Te = null;
}, oe.__c = function(n, e) {
  e.some(function(t) {
    try {
      t.__h.forEach(Vt), t.__h = t.__h.filter(function(s) {
        return !s.__ || Ns(s);
      });
    } catch (s) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], oe.__e(s, t.__v);
    }
  }), Ui && Ui(n, e);
}, oe.unmount = function(n) {
  Bi && Bi(n);
  var e, t = n.__c;
  t && t.__H && (t.__H.__.forEach(function(s) {
    try {
      Vt(s);
    } catch (i) {
      e = i;
    }
  }), t.__H = void 0, e && oe.__e(e, t.__v));
};
var Ki = typeof requestAnimationFrame == "function";
function La(n) {
  var e, t = function() {
    clearTimeout(s), Ki && cancelAnimationFrame(e), setTimeout(n);
  }, s = setTimeout(t, 100);
  Ki && (e = requestAnimationFrame(t));
}
function Vt(n) {
  var e = Te, t = n.__c;
  typeof t == "function" && (n.__c = void 0, t()), Te = e;
}
function Ns(n) {
  var e = Te;
  n.__c = n.__(), Te = e;
}
function Jr(n, e) {
  return !n || n.length !== e.length || e.some(function(t, s) {
    return t !== n[s];
  });
}
var Ra = Symbol.for("preact-signals");
function ri() {
  if (at > 1)
    at--;
  else {
    for (var n, e = !1; Tt !== void 0; ) {
      var t = Tt;
      for (Tt = void 0, Us++; t !== void 0; ) {
        var s = t.o;
        if (t.o = void 0, t.f &= -3, !(8 & t.f) && tn(t)) try {
          t.c();
        } catch (i) {
          e || (n = i, e = !0);
        }
        t = s;
      }
    }
    if (Us = 0, at--, e) throw n;
  }
}
var ie = void 0, Tt = void 0, at = 0, Us = 0, Jt = 0;
function Zr(n) {
  if (ie !== void 0) {
    var e = n.n;
    if (e === void 0 || e.t !== ie)
      return e = { i: 0, S: n, p: ie.s, n: void 0, t: ie, e: void 0, x: void 0, r: e }, ie.s !== void 0 && (ie.s.n = e), ie.s = e, n.n = e, 32 & ie.f && n.S(e), e;
    if (e.i === -1)
      return e.i = 0, e.n !== void 0 && (e.n.p = e.p, e.p !== void 0 && (e.p.n = e.n), e.p = ie.s, e.n = void 0, ie.s.n = e, ie.s = e), e;
  }
}
function de(n) {
  this.v = n, this.i = 0, this.n = void 0, this.t = void 0;
}
de.prototype.brand = Ra;
de.prototype.h = function() {
  return !0;
};
de.prototype.S = function(n) {
  this.t !== n && n.e === void 0 && (n.x = this.t, this.t !== void 0 && (this.t.e = n), this.t = n);
};
de.prototype.U = function(n) {
  if (this.t !== void 0) {
    var e = n.e, t = n.x;
    e !== void 0 && (e.x = t, n.e = void 0), t !== void 0 && (t.e = e, n.x = void 0), n === this.t && (this.t = t);
  }
};
de.prototype.subscribe = function(n) {
  var e = this;
  return ai(function() {
    var t = e.value, s = ie;
    ie = void 0;
    try {
      n(t);
    } finally {
      ie = s;
    }
  });
};
de.prototype.valueOf = function() {
  return this.value;
};
de.prototype.toString = function() {
  return this.value + "";
};
de.prototype.toJSON = function() {
  return this.value;
};
de.prototype.peek = function() {
  var n = ie;
  ie = void 0;
  try {
    return this.value;
  } finally {
    ie = n;
  }
};
Object.defineProperty(de.prototype, "value", { get: function() {
  var n = Zr(this);
  return n !== void 0 && (n.i = this.i), this.v;
}, set: function(n) {
  if (n !== this.v) {
    if (Us > 100) throw new Error("Cycle detected");
    this.v = n, this.i++, Jt++, at++;
    try {
      for (var e = this.t; e !== void 0; e = e.x) e.t.N();
    } finally {
      ri();
    }
  }
} });
function en(n) {
  return new de(n);
}
function tn(n) {
  for (var e = n.s; e !== void 0; e = e.n) if (e.S.i !== e.i || !e.S.h() || e.S.i !== e.i) return !0;
  return !1;
}
function sn(n) {
  for (var e = n.s; e !== void 0; e = e.n) {
    var t = e.S.n;
    if (t !== void 0 && (e.r = t), e.S.n = e, e.i = -1, e.n === void 0) {
      n.s = e;
      break;
    }
  }
}
function rn(n) {
  for (var e = n.s, t = void 0; e !== void 0; ) {
    var s = e.p;
    e.i === -1 ? (e.S.U(e), s !== void 0 && (s.n = e.n), e.n !== void 0 && (e.n.p = s)) : t = e, e.S.n = e.r, e.r !== void 0 && (e.r = void 0), e = s;
  }
  n.s = t;
}
function gt(n) {
  de.call(this, void 0), this.x = n, this.s = void 0, this.g = Jt - 1, this.f = 4;
}
(gt.prototype = new de()).h = function() {
  if (this.f &= -3, 1 & this.f) return !1;
  if ((36 & this.f) == 32 || (this.f &= -5, this.g === Jt)) return !0;
  if (this.g = Jt, this.f |= 1, this.i > 0 && !tn(this))
    return this.f &= -2, !0;
  var n = ie;
  try {
    sn(this), ie = this;
    var e = this.x();
    (16 & this.f || this.v !== e || this.i === 0) && (this.v = e, this.f &= -17, this.i++);
  } catch (t) {
    this.v = t, this.f |= 16, this.i++;
  }
  return ie = n, rn(this), this.f &= -2, !0;
};
gt.prototype.S = function(n) {
  if (this.t === void 0) {
    this.f |= 36;
    for (var e = this.s; e !== void 0; e = e.n) e.S.S(e);
  }
  de.prototype.S.call(this, n);
};
gt.prototype.U = function(n) {
  if (this.t !== void 0 && (de.prototype.U.call(this, n), this.t === void 0)) {
    this.f &= -33;
    for (var e = this.s; e !== void 0; e = e.n) e.S.U(e);
  }
};
gt.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var n = this.t; n !== void 0; n = n.x) n.t.N();
  }
};
Object.defineProperty(gt.prototype, "value", { get: function() {
  if (1 & this.f) throw new Error("Cycle detected");
  var n = Zr(this);
  if (this.h(), n !== void 0 && (n.i = this.i), 16 & this.f) throw this.v;
  return this.v;
} });
function _a(n) {
  return new gt(n);
}
function nn(n) {
  var e = n.u;
  if (n.u = void 0, typeof e == "function") {
    at++;
    var t = ie;
    ie = void 0;
    try {
      e();
    } catch (s) {
      throw n.f &= -2, n.f |= 8, ni(n), s;
    } finally {
      ie = t, ri();
    }
  }
}
function ni(n) {
  for (var e = n.s; e !== void 0; e = e.n) e.S.U(e);
  n.x = void 0, n.s = void 0, nn(n);
}
function ba(n) {
  if (ie !== this) throw new Error("Out-of-order effect");
  rn(this), ie = n, this.f &= -2, 8 & this.f && ni(this), ri();
}
function bt(n) {
  this.x = n, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32;
}
bt.prototype.c = function() {
  var n = this.S();
  try {
    if (8 & this.f || this.x === void 0) return;
    var e = this.x();
    typeof e == "function" && (this.u = e);
  } finally {
    n();
  }
};
bt.prototype.S = function() {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= 1, this.f &= -9, nn(this), sn(this), at++;
  var n = ie;
  return ie = this, ba.bind(this, n);
};
bt.prototype.N = function() {
  2 & this.f || (this.f |= 2, this.o = Tt, Tt = this);
};
bt.prototype.d = function() {
  this.f |= 8, 1 & this.f || ni(this);
};
function ai(n) {
  var e = new bt(n);
  try {
    e.c();
  } catch (t) {
    throw e.d(), t;
  }
  return e.d.bind(e);
}
var ps;
function mt(n, e) {
  Xt[n] = e.bind(null, Xt[n] || function() {
  });
}
function Zt(n) {
  ps && ps(), ps = n && n.S();
}
function an(n) {
  var e = this, t = n.data, s = Bs(t);
  s.value = t;
  var i = ii(function() {
    for (var r = e.__v; r = r.__; ) if (r.__c) {
      r.__c.__$f |= 4;
      break;
    }
    return e.__$u.c = function() {
      var a;
      !zr(i.peek()) && ((a = e.base) == null ? void 0 : a.nodeType) === 3 ? e.base.data = i.peek() : (e.__$f |= 1, e.setState({}));
    }, _a(function() {
      var a = s.value.value;
      return a === 0 ? 0 : a === !0 ? "" : a || "";
    });
  }, []);
  return i.value;
}
an.displayName = "_st";
Object.defineProperties(de.prototype, { constructor: { configurable: !0, value: void 0 }, type: { configurable: !0, value: an }, props: { configurable: !0, get: function() {
  return { data: this };
} }, __b: { configurable: !0, value: 1 } });
mt("__b", function(n, e) {
  if (typeof e.type == "string") {
    var t, s = e.props;
    for (var i in s) if (i !== "children") {
      var r = s[i];
      r instanceof de && (t || (e.__np = t = {}), t[i] = r, s[i] = r.peek());
    }
  }
  n(e);
});
mt("__r", function(n, e) {
  Zt();
  var t, s = e.__c;
  s && (s.__$f &= -2, (t = s.__$u) === void 0 && (s.__$u = t = function(i) {
    var r;
    return ai(function() {
      r = this;
    }), r.c = function() {
      s.__$f |= 1, s.setState({});
    }, r;
  }())), Zt(t), n(e);
});
mt("__e", function(n, e, t, s) {
  Zt(), n(e, t, s);
});
mt("diffed", function(n, e) {
  Zt();
  var t;
  if (typeof e.type == "string" && (t = e.__e)) {
    var s = e.__np, i = e.props;
    if (s) {
      var r = t.U;
      if (r) for (var a in r) {
        var o = r[a];
        o !== void 0 && !(a in s) && (o.d(), r[a] = void 0);
      }
      else t.U = r = {};
      for (var l in s) {
        var c = r[l], h = s[l];
        c === void 0 ? (c = Ia(t, l, h, i), r[l] = c) : c.o(h, i);
      }
    }
  }
  n(e);
});
function Ia(n, e, t, s) {
  var i = e in n && n.ownerSVGElement === void 0, r = en(t);
  return { o: function(a, o) {
    r.value = a, s = o;
  }, d: ai(function() {
    var a = r.value.value;
    s[e] !== a && (s[e] = a, i ? n[e] = a : a ? n.setAttribute(e, a) : n.removeAttribute(e));
  }) };
}
mt("unmount", function(n, e) {
  if (typeof e.type == "string") {
    var t = e.__e;
    if (t) {
      var s = t.U;
      if (s) {
        t.U = void 0;
        for (var i in s) {
          var r = s[i];
          r && r.d();
        }
      }
    }
  } else {
    var a = e.__c;
    if (a) {
      var o = a.__$u;
      o && (a.__$u = void 0, o.d());
    }
  }
  n(e);
});
mt("__h", function(n, e, t, s) {
  (s < 3 || s === 9) && (e.__$f |= 2), n(e, t, s);
});
function Bs(n) {
  return ii(function() {
    return en(n);
  }, []);
}
function Da(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var on = { exports: {} };
(function(n, e) {
  (function(t) {
    var s = /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/, i = /^(?=([^\/?#]*))\1([^]*)$/, r = /(?:\/|^)\.(?=\/)/g, a = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, o = {
      // If opts.alwaysNormalize is true then the path will always be normalized even when it starts with / or //
      // E.g
      // With opts.alwaysNormalize = false (default, spec compliant)
      // http://a.com/b/cd + /e/f/../g => http://a.com/e/f/../g
      // With opts.alwaysNormalize = true (not spec compliant)
      // http://a.com/b/cd + /e/f/../g => http://a.com/e/g
      buildAbsoluteURL: function(l, c, h) {
        if (h = h || {}, l = l.trim(), c = c.trim(), !c) {
          if (!h.alwaysNormalize)
            return l;
          var u = o.parseURL(l);
          if (!u)
            throw new Error("Error trying to parse base URL.");
          return u.path = o.normalizePath(
            u.path
          ), o.buildURLFromParts(u);
        }
        var d = o.parseURL(c);
        if (!d)
          throw new Error("Error trying to parse relative URL.");
        if (d.scheme)
          return h.alwaysNormalize ? (d.path = o.normalizePath(d.path), o.buildURLFromParts(d)) : c;
        var g = o.parseURL(l);
        if (!g)
          throw new Error("Error trying to parse base URL.");
        if (!g.netLoc && g.path && g.path[0] !== "/") {
          var f = i.exec(g.path);
          g.netLoc = f[1], g.path = f[2];
        }
        g.netLoc && !g.path && (g.path = "/");
        var m = {
          // 2c) Otherwise, the embedded URL inherits the scheme of
          // the base URL.
          scheme: g.scheme,
          netLoc: d.netLoc,
          path: null,
          params: d.params,
          query: d.query,
          fragment: d.fragment
        };
        if (!d.netLoc && (m.netLoc = g.netLoc, d.path[0] !== "/"))
          if (!d.path)
            m.path = g.path, d.params || (m.params = g.params, d.query || (m.query = g.query));
          else {
            var y = g.path, E = y.substring(0, y.lastIndexOf("/") + 1) + d.path;
            m.path = o.normalizePath(E);
          }
        return m.path === null && (m.path = h.alwaysNormalize ? o.normalizePath(d.path) : d.path), o.buildURLFromParts(m);
      },
      parseURL: function(l) {
        var c = s.exec(l);
        return c ? {
          scheme: c[1] || "",
          netLoc: c[2] || "",
          path: c[3] || "",
          params: c[4] || "",
          query: c[5] || "",
          fragment: c[6] || ""
        } : null;
      },
      normalizePath: function(l) {
        for (l = l.split("").reverse().join("").replace(r, ""); l.length !== (l = l.replace(a, "")).length; )
          ;
        return l.split("").reverse().join("");
      },
      buildURLFromParts: function(l) {
        return l.scheme + l.netLoc + l.path + l.params + l.query + l.fragment;
      }
    };
    n.exports = o;
  })();
})(on);
var oi = on.exports;
function Ca(n, e, t) {
  return (e = ka(e)) in n ? Object.defineProperty(n, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[e] = t, n;
}
function ae() {
  return ae = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var s in t) ({}).hasOwnProperty.call(t, s) && (n[s] = t[s]);
    }
    return n;
  }, ae.apply(null, arguments);
}
function Vi(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    e && (s = s.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, s);
  }
  return t;
}
function he(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Vi(Object(t), !0).forEach(function(s) {
      Ca(n, s, t[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Vi(Object(t)).forEach(function(s) {
      Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(t, s));
    });
  }
  return n;
}
function wa(n, e) {
  if (typeof n != "object" || !n) return n;
  var t = n[Symbol.toPrimitive];
  if (t !== void 0) {
    var s = t.call(n, e || "default");
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
function ka(n) {
  var e = wa(n, "string");
  return typeof e == "symbol" ? e : e + "";
}
const O = Number.isFinite || function(n) {
  return typeof n == "number" && isFinite(n);
}, Pa = Number.isSafeInteger || function(n) {
  return typeof n == "number" && Math.abs(n) <= Fa;
}, Fa = Number.MAX_SAFE_INTEGER || 9007199254740991;
let p = /* @__PURE__ */ function(n) {
  return n.MEDIA_ATTACHING = "hlsMediaAttaching", n.MEDIA_ATTACHED = "hlsMediaAttached", n.MEDIA_DETACHING = "hlsMediaDetaching", n.MEDIA_DETACHED = "hlsMediaDetached", n.MEDIA_ENDED = "hlsMediaEnded", n.BUFFER_RESET = "hlsBufferReset", n.BUFFER_CODECS = "hlsBufferCodecs", n.BUFFER_CREATED = "hlsBufferCreated", n.BUFFER_APPENDING = "hlsBufferAppending", n.BUFFER_APPENDED = "hlsBufferAppended", n.BUFFER_EOS = "hlsBufferEos", n.BUFFER_FLUSHING = "hlsBufferFlushing", n.BUFFER_FLUSHED = "hlsBufferFlushed", n.MANIFEST_LOADING = "hlsManifestLoading", n.MANIFEST_LOADED = "hlsManifestLoaded", n.MANIFEST_PARSED = "hlsManifestParsed", n.LEVEL_SWITCHING = "hlsLevelSwitching", n.LEVEL_SWITCHED = "hlsLevelSwitched", n.LEVEL_LOADING = "hlsLevelLoading", n.LEVEL_LOADED = "hlsLevelLoaded", n.LEVEL_UPDATED = "hlsLevelUpdated", n.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", n.LEVELS_UPDATED = "hlsLevelsUpdated", n.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", n.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", n.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", n.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", n.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", n.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", n.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", n.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", n.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", n.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", n.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", n.CUES_PARSED = "hlsCuesParsed", n.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", n.INIT_PTS_FOUND = "hlsInitPtsFound", n.FRAG_LOADING = "hlsFragLoading", n.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", n.FRAG_LOADED = "hlsFragLoaded", n.FRAG_DECRYPTED = "hlsFragDecrypted", n.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", n.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", n.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", n.FRAG_PARSED = "hlsFragParsed", n.FRAG_BUFFERED = "hlsFragBuffered", n.FRAG_CHANGED = "hlsFragChanged", n.FPS_DROP = "hlsFpsDrop", n.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", n.MAX_AUTO_LEVEL_UPDATED = "hlsMaxAutoLevelUpdated", n.ERROR = "hlsError", n.DESTROYING = "hlsDestroying", n.KEY_LOADING = "hlsKeyLoading", n.KEY_LOADED = "hlsKeyLoaded", n.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", n.BACK_BUFFER_REACHED = "hlsBackBufferReached", n.STEERING_MANIFEST_LOADED = "hlsSteeringManifestLoaded", n;
}({}), $ = /* @__PURE__ */ function(n) {
  return n.NETWORK_ERROR = "networkError", n.MEDIA_ERROR = "mediaError", n.KEY_SYSTEM_ERROR = "keySystemError", n.MUX_ERROR = "muxError", n.OTHER_ERROR = "otherError", n;
}({}), L = /* @__PURE__ */ function(n) {
  return n.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", n.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", n.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", n.KEY_SYSTEM_NO_CONFIGURED_LICENSE = "keySystemNoConfiguredLicense", n.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", n.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED = "keySystemServerCertificateRequestFailed", n.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED = "keySystemServerCertificateUpdateFailed", n.KEY_SYSTEM_SESSION_UPDATE_FAILED = "keySystemSessionUpdateFailed", n.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED = "keySystemStatusOutputRestricted", n.KEY_SYSTEM_STATUS_INTERNAL_ERROR = "keySystemStatusInternalError", n.MANIFEST_LOAD_ERROR = "manifestLoadError", n.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", n.MANIFEST_PARSING_ERROR = "manifestParsingError", n.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", n.LEVEL_EMPTY_ERROR = "levelEmptyError", n.LEVEL_LOAD_ERROR = "levelLoadError", n.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", n.LEVEL_PARSING_ERROR = "levelParsingError", n.LEVEL_SWITCH_ERROR = "levelSwitchError", n.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", n.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", n.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", n.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", n.FRAG_LOAD_ERROR = "fragLoadError", n.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", n.FRAG_DECRYPT_ERROR = "fragDecryptError", n.FRAG_PARSING_ERROR = "fragParsingError", n.FRAG_GAP = "fragGap", n.REMUX_ALLOC_ERROR = "remuxAllocError", n.KEY_LOAD_ERROR = "keyLoadError", n.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", n.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", n.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", n.BUFFER_APPEND_ERROR = "bufferAppendError", n.BUFFER_APPENDING_ERROR = "bufferAppendingError", n.BUFFER_STALLED_ERROR = "bufferStalledError", n.BUFFER_FULL_ERROR = "bufferFullError", n.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", n.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", n.INTERNAL_EXCEPTION = "internalException", n.INTERNAL_ABORTED = "aborted", n.ATTACH_MEDIA_ERROR = "attachMediaError", n.UNKNOWN = "unknown", n;
}({});
class qe {
  constructor(e, t) {
    this.trace = void 0, this.debug = void 0, this.log = void 0, this.warn = void 0, this.info = void 0, this.error = void 0;
    const s = `[${e}]:`;
    this.trace = Ke, this.debug = t.debug.bind(null, s), this.log = t.log.bind(null, s), this.warn = t.warn.bind(null, s), this.info = t.info.bind(null, s), this.error = t.error.bind(null, s);
  }
}
const Ke = function() {
}, Oa = {
  trace: Ke,
  debug: Ke,
  log: Ke,
  warn: Ke,
  info: Ke,
  error: Ke
};
function $s() {
  return ae({}, Oa);
}
function Ma(n, e) {
  const t = self.console[n];
  return t ? t.bind(self.console, `[${n}] >`) : Ke;
}
function Hi(n, e, t) {
  return e[n] ? e[n].bind(e) : Ma(n);
}
const Gs = $s();
function Na(n, e, t) {
  const s = $s();
  if (typeof console == "object" && n === !0 || typeof n == "object") {
    const i = [
      // Remove out from list here to hard-disable a log-level
      // 'trace',
      "debug",
      "log",
      "info",
      "warn",
      "error"
    ];
    i.forEach((r) => {
      s[r] = Hi(r, n);
    });
    try {
      s.log(`Debug logs enabled for "${e}" in hls.js version 1.5.14-0.canary.10578`);
    } catch {
      return $s();
    }
    i.forEach((r) => {
      Gs[r] = Hi(r, n);
    });
  } else
    ae(Gs, s);
  return s;
}
const q = Gs, ln = /\{\$([a-zA-Z0-9-_]+)\}/g;
function Wi(n) {
  return ln.test(n);
}
function Ks(n, e) {
  if (n.variableList !== null || n.hasVariableRefs) {
    const t = n.variableList;
    return e.replace(ln, (s) => {
      const i = s.substring(2, s.length - 1), r = t == null ? void 0 : t[i];
      return r === void 0 ? (n.playlistParsingError || (n.playlistParsingError = new Error(`Missing preceding EXT-X-DEFINE tag for Variable Reference: "${i}"`)), s) : r;
    });
  }
  return e;
}
function Yi(n, e, t) {
  let s = n.variableList;
  s || (n.variableList = s = {});
  let i, r;
  if ("QUERYPARAM" in e) {
    i = e.QUERYPARAM;
    try {
      const a = new self.URL(t).searchParams;
      if (a.has(i))
        r = a.get(i);
      else
        throw new Error(`"${i}" does not match any query parameter in URI: "${t}"`);
    } catch (a) {
      n.playlistParsingError || (n.playlistParsingError = new Error(`EXT-X-DEFINE QUERYPARAM: ${a.message}`));
    }
  } else
    i = e.NAME, r = e.VALUE;
  i in s ? n.playlistParsingError || (n.playlistParsingError = new Error(`EXT-X-DEFINE duplicate Variable Name declarations: "${i}"`)) : s[i] = r || "";
}
function Ua(n, e, t) {
  const s = e.IMPORT;
  if (t && s in t) {
    let i = n.variableList;
    i || (n.variableList = i = {}), i[s] = t[s];
  } else
    n.playlistParsingError || (n.playlistParsingError = new Error(`EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "${s}"`));
}
const Ba = /^(\d+)x(\d+)$/, qi = /(.+?)=(".*?"|.*?)(?:,|$)/g;
class ne {
  constructor(e, t) {
    typeof e == "string" && (e = ne.parseAttrList(e, t)), ae(this, e);
  }
  get clientAttrs() {
    return Object.keys(this).filter((e) => e.substring(0, 2) === "X-");
  }
  decimalInteger(e) {
    const t = parseInt(this[e], 10);
    return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t;
  }
  hexadecimalInteger(e) {
    if (this[e]) {
      let t = (this[e] || "0x").slice(2);
      t = (t.length & 1 ? "0" : "") + t;
      const s = new Uint8Array(t.length / 2);
      for (let i = 0; i < t.length / 2; i++)
        s[i] = parseInt(t.slice(i * 2, i * 2 + 2), 16);
      return s;
    } else
      return null;
  }
  hexadecimalIntegerAsNumber(e) {
    const t = parseInt(this[e], 16);
    return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t;
  }
  decimalFloatingPoint(e) {
    return parseFloat(this[e]);
  }
  optionalFloat(e, t) {
    const s = this[e];
    return s ? parseFloat(s) : t;
  }
  enumeratedString(e) {
    return this[e];
  }
  enumeratedStringList(e, t) {
    const s = this[e];
    return (s ? s.split(/[ ,]+/) : []).reduce((i, r) => (i[r.toLowerCase()] = !0, i), t);
  }
  bool(e) {
    return this[e] === "YES";
  }
  decimalResolution(e) {
    const t = Ba.exec(this[e]);
    if (t !== null)
      return {
        width: parseInt(t[1], 10),
        height: parseInt(t[2], 10)
      };
  }
  static parseAttrList(e, t) {
    let s;
    const i = {}, r = '"';
    for (qi.lastIndex = 0; (s = qi.exec(e)) !== null; ) {
      const a = s[1].trim();
      let o = s[2];
      const l = o.indexOf(r) === 0 && o.lastIndexOf(r) === o.length - 1;
      let c = !1;
      if (l)
        o = o.slice(1, -1);
      else
        switch (a) {
          case "IV":
          case "SCTE35-CMD":
          case "SCTE35-IN":
          case "SCTE35-OUT":
            c = !0;
        }
      if (t && (l || c))
        o = Ks(t, o);
      else if (!c && !l)
        switch (a) {
          case "CLOSED-CAPTIONS":
            if (o === "NONE")
              break;
          case "ALLOWED-CPC":
          case "CLASS":
          case "ASSOC-LANGUAGE":
          case "AUDIO":
          case "BYTERANGE":
          case "CHANNELS":
          case "CHARACTERISTICS":
          case "CODECS":
          case "DATA-ID":
          case "END-DATE":
          case "GROUP-ID":
          case "ID":
          case "IMPORT":
          case "INSTREAM-ID":
          case "KEYFORMAT":
          case "KEYFORMATVERSIONS":
          case "LANGUAGE":
          case "NAME":
          case "PATHWAY-ID":
          case "QUERYPARAM":
          case "RECENTLY-REMOVED-DATERANGES":
          case "SERVER-URI":
          case "STABLE-RENDITION-ID":
          case "STABLE-VARIANT-ID":
          case "START-DATE":
          case "SUBTITLES":
          case "SUPPLEMENTAL-CODECS":
          case "URI":
          case "VALUE":
          case "VIDEO":
          case "X-ASSET-LIST":
          case "X-ASSET-URI":
            q.warn(`${e}: attribute ${a} is missing quotes`);
        }
      i[a] = o;
    }
    return i;
  }
}
const $a = "com.apple.hls.interstitial";
function Ga(n) {
  return n !== "ID" && n !== "CLASS" && n !== "CUE" && n !== "START-DATE" && n !== "DURATION" && n !== "END-DATE" && n !== "END-ON-NEXT";
}
function Ka(n) {
  return n === "SCTE35-OUT" || n === "SCTE35-IN" || n === "SCTE35-CMD";
}
class cn {
  constructor(e, t, s = 0) {
    var i;
    if (this.attr = void 0, this.tagAnchor = void 0, this.tagOrder = void 0, this._startDate = void 0, this._endDate = void 0, this._cue = void 0, this._badValueForSameId = void 0, this.tagAnchor = (t == null ? void 0 : t.tagAnchor) || null, this.tagOrder = (i = t == null ? void 0 : t.tagOrder) != null ? i : s, t) {
      const r = t.attr;
      for (const a in r)
        if (Object.prototype.hasOwnProperty.call(e, a) && e[a] !== r[a]) {
          q.warn(`DATERANGE tag attribute: "${a}" does not match for tags with ID: "${e.ID}"`), this._badValueForSameId = a;
          break;
        }
      e = ae(new ne({}), r, e);
    }
    if (this.attr = e, this._startDate = t ? t.startDate : new Date(e["START-DATE"]), "END-DATE" in this.attr) {
      const r = (t == null ? void 0 : t.endDate) || new Date(this.attr["END-DATE"]);
      O(r.getTime()) && (this._endDate = r);
    }
  }
  get id() {
    return this.attr.ID;
  }
  get class() {
    return this.attr.CLASS;
  }
  get cue() {
    const e = this._cue;
    return e === void 0 ? this._cue = this.attr.enumeratedStringList(this.attr.CUE ? "CUE" : "X-CUE", {
      pre: !1,
      post: !1,
      once: !1
    }) : e;
  }
  get startTime() {
    const {
      tagAnchor: e
    } = this;
    return e === null || e.programDateTime === null ? (q.warn(`Expected tagAnchor Fragment with PDT set for DateRange "${this.id}": ${e}`), NaN) : e.start + (this.startDate.getTime() - e.programDateTime) / 1e3;
  }
  get startDate() {
    return this._startDate;
  }
  get endDate() {
    if (this._endDate)
      return this._endDate;
    const e = this.duration;
    return e !== null ? new Date(this._startDate.getTime() + e * 1e3) : null;
  }
  get duration() {
    if ("DURATION" in this.attr) {
      const e = this.attr.decimalFloatingPoint("DURATION");
      if (O(e))
        return e;
    } else if (this._endDate)
      return (this._endDate.getTime() - this._startDate.getTime()) / 1e3;
    return null;
  }
  get plannedDuration() {
    return "PLANNED-DURATION" in this.attr ? this.attr.decimalFloatingPoint("PLANNED-DURATION") : null;
  }
  get endOnNext() {
    return this.attr.bool("END-ON-NEXT");
  }
  get isInterstitial() {
    return this.class === $a;
  }
  get isValid() {
    return !!this.id && !this._badValueForSameId && O(this.startDate.getTime()) && (this.duration === null || this.duration >= 0) && (!this.endOnNext || !!this.class) && (!this.attr.CUE || !this.cue.pre && !this.cue.post || this.cue.pre !== this.cue.post) && (!this.isInterstitial || "X-ASSET-URI" in this.attr || "X-ASSET-LIST" in this.attr);
  }
}
class us {
  constructor() {
    this.aborted = !1, this.loaded = 0, this.retry = 0, this.total = 0, this.chunkCount = 0, this.bwEstimate = 0, this.loading = {
      start: 0,
      first: 0,
      end: 0
    }, this.parsing = {
      start: 0,
      end: 0
    }, this.buffering = {
      start: 0,
      first: 0,
      end: 0
    };
  }
}
var J = {
  AUDIO: "audio",
  VIDEO: "video",
  AUDIOVIDEO: "audiovideo"
};
class hn {
  constructor(e) {
    this._byteRange = null, this._url = null, this.baseurl = void 0, this.relurl = void 0, this.elementaryStreams = {
      [J.AUDIO]: null,
      [J.VIDEO]: null,
      [J.AUDIOVIDEO]: null
    }, this.baseurl = e;
  }
  // setByteRange converts a EXT-X-BYTERANGE attribute into a two element array
  setByteRange(e, t) {
    const s = e.split("@", 2);
    let i;
    s.length === 1 ? i = (t == null ? void 0 : t.byteRangeEndOffset) || 0 : i = parseInt(s[1]), this._byteRange = [i, parseInt(s[0]) + i];
  }
  get byteRange() {
    return this._byteRange ? this._byteRange : [];
  }
  get byteRangeStartOffset() {
    return this.byteRange[0];
  }
  get byteRangeEndOffset() {
    return this.byteRange[1];
  }
  get url() {
    return !this._url && this.baseurl && this.relurl && (this._url = oi.buildAbsoluteURL(this.baseurl, this.relurl, {
      alwaysNormalize: !0
    })), this._url || "";
  }
  set url(e) {
    this._url = e;
  }
}
class ys extends hn {
  constructor(e, t) {
    super(t), this._decryptdata = null, this.rawProgramDateTime = null, this.programDateTime = null, this.tagList = [], this.duration = 0, this.sn = 0, this.levelkeys = void 0, this.type = void 0, this.loader = null, this.keyLoader = null, this.level = -1, this.cc = 0, this.startPTS = void 0, this.endPTS = void 0, this.startDTS = void 0, this.endDTS = void 0, this.start = 0, this.deltaPTS = void 0, this.maxStartPTS = void 0, this.minEndPTS = void 0, this.stats = new us(), this.data = void 0, this.bitrateTest = !1, this.title = null, this.initSegment = null, this.endList = void 0, this.gap = void 0, this.urlId = 0, this.type = e;
  }
  get decryptdata() {
    const {
      levelkeys: e
    } = this;
    if (!e && !this._decryptdata)
      return null;
    if (!this._decryptdata && this.levelkeys && !this.levelkeys.NONE) {
      const t = this.levelkeys.identity;
      if (t)
        this._decryptdata = t.getDecryptData(this.sn);
      else {
        const s = Object.keys(this.levelkeys);
        if (s.length === 1)
          return this._decryptdata = this.levelkeys[s[0]].getDecryptData(this.sn);
      }
    }
    return this._decryptdata;
  }
  get end() {
    return this.start + this.duration;
  }
  get endProgramDateTime() {
    if (this.programDateTime === null || !O(this.programDateTime))
      return null;
    const e = O(this.duration) ? this.duration : 0;
    return this.programDateTime + e * 1e3;
  }
  get encrypted() {
    var e;
    if ((e = this._decryptdata) != null && e.encrypted)
      return !0;
    if (this.levelkeys) {
      const t = Object.keys(this.levelkeys), s = t.length;
      if (s > 1 || s === 1 && this.levelkeys[t[0]].encrypted)
        return !0;
    }
    return !1;
  }
  setKeyFormat(e) {
    if (this.levelkeys) {
      const t = this.levelkeys[e];
      t && !this._decryptdata && (this._decryptdata = t.getDecryptData(this.sn));
    }
  }
  abortRequests() {
    var e, t;
    (e = this.loader) == null || e.abort(), (t = this.keyLoader) == null || t.abort();
  }
  setElementaryStreamInfo(e, t, s, i, r, a = !1) {
    const {
      elementaryStreams: o
    } = this, l = o[e];
    if (!l) {
      o[e] = {
        startPTS: t,
        endPTS: s,
        startDTS: i,
        endDTS: r,
        partial: a
      };
      return;
    }
    l.startPTS = Math.min(l.startPTS, t), l.endPTS = Math.max(l.endPTS, s), l.startDTS = Math.min(l.startDTS, i), l.endDTS = Math.max(l.endDTS, r);
  }
  clearElementaryStreamInfo() {
    const {
      elementaryStreams: e
    } = this;
    e[J.AUDIO] = null, e[J.VIDEO] = null, e[J.AUDIOVIDEO] = null;
  }
}
class Va extends hn {
  constructor(e, t, s, i, r) {
    super(s), this.fragOffset = 0, this.duration = 0, this.gap = !1, this.independent = !1, this.relurl = void 0, this.fragment = void 0, this.index = void 0, this.stats = new us(), this.duration = e.decimalFloatingPoint("DURATION"), this.gap = e.bool("GAP"), this.independent = e.bool("INDEPENDENT"), this.relurl = e.enumeratedString("URI"), this.fragment = t, this.index = i;
    const a = e.enumeratedString("BYTERANGE");
    a && this.setByteRange(a, r), r && (this.fragOffset = r.fragOffset + r.duration);
  }
  get start() {
    return this.fragment.start + this.fragOffset;
  }
  get end() {
    return this.start + this.duration;
  }
  get loaded() {
    const {
      elementaryStreams: e
    } = this;
    return !!(e.audio || e.video || e.audiovideo);
  }
}
const Ha = 10;
class Wa {
  constructor(e) {
    this.PTSKnown = !1, this.alignedSliding = !1, this.averagetargetduration = void 0, this.endCC = 0, this.endSN = 0, this.fragments = void 0, this.fragmentHint = void 0, this.partList = null, this.dateRanges = void 0, this.dateRangeTagCount = 0, this.live = !0, this.ageHeader = 0, this.advancedDateTime = void 0, this.updated = !0, this.advanced = !0, this.availabilityDelay = void 0, this.misses = 0, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = void 0, this.m3u8 = "", this.version = null, this.canBlockReload = !1, this.canSkipUntil = 0, this.canSkipDateRanges = !1, this.skippedSegments = 0, this.recentlyRemovedDateranges = void 0, this.partHoldBack = 0, this.holdBack = 0, this.partTarget = 0, this.preloadHint = void 0, this.renditionReports = void 0, this.tuneInGoal = 0, this.deltaUpdateFailed = void 0, this.driftStartTime = 0, this.driftEndTime = 0, this.driftStart = 0, this.driftEnd = 0, this.encryptedFragments = void 0, this.playlistParsingError = null, this.variableList = null, this.hasVariableRefs = !1, this.fragments = [], this.encryptedFragments = [], this.dateRanges = {}, this.url = e;
  }
  reloaded(e) {
    if (!e) {
      this.advanced = !0, this.updated = !0;
      return;
    }
    const t = this.lastPartSn - e.lastPartSn, s = this.lastPartIndex - e.lastPartIndex;
    this.updated = this.endSN !== e.endSN || !!s || !!t || !this.live, this.advanced = this.endSN > e.endSN || t > 0 || t === 0 && s > 0, this.updated || this.advanced ? this.misses = Math.floor(e.misses * 0.6) : this.misses = e.misses + 1, this.availabilityDelay = e.availabilityDelay;
  }
  get hasProgramDateTime() {
    return this.fragments.length ? O(this.fragments[this.fragments.length - 1].programDateTime) : !1;
  }
  get levelTargetDuration() {
    return this.averagetargetduration || this.targetduration || Ha;
  }
  get drift() {
    const e = this.driftEndTime - this.driftStartTime;
    return e > 0 ? (this.driftEnd - this.driftStart) * 1e3 / e : 1;
  }
  get edge() {
    return this.partEnd || this.fragmentEnd;
  }
  get partEnd() {
    var e;
    return (e = this.partList) != null && e.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd;
  }
  get fragmentEnd() {
    var e;
    return (e = this.fragments) != null && e.length ? this.fragments[this.fragments.length - 1].end : 0;
  }
  get age() {
    return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0;
  }
  get lastPartIndex() {
    var e;
    return (e = this.partList) != null && e.length ? this.partList[this.partList.length - 1].index : -1;
  }
  get lastPartSn() {
    var e;
    return (e = this.partList) != null && e.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN;
  }
}
function li(n) {
  return Uint8Array.from(atob(n), (e) => e.charCodeAt(0));
}
function Vs(n) {
  return Uint8Array.from(unescape(encodeURIComponent(n)), (e) => e.charCodeAt(0));
}
function Ya(n) {
  const e = Vs(n).subarray(0, 16), t = new Uint8Array(16);
  return t.set(e, 16 - e.length), t;
}
function qa(n) {
  const e = function(s, i, r) {
    const a = s[i];
    s[i] = s[r], s[r] = a;
  };
  e(n, 0, 3), e(n, 1, 2), e(n, 4, 5), e(n, 6, 7);
}
function ja(n) {
  const e = n.split(":");
  let t = null;
  if (e[0] === "data" && e.length === 2) {
    const s = e[1].split(";"), i = s[s.length - 1].split(",");
    if (i.length === 2) {
      const r = i[0] === "base64", a = i[1];
      r ? (s.splice(-1, 1), t = li(a)) : t = Ya(a);
    }
  }
  return t;
}
var We = {
  cbc: 0,
  ctr: 1
};
function ot(n) {
  return n === "AES-128" || n === "AES-256" || n === "AES-256-CTR";
}
function ci(n) {
  switch (n) {
    case "AES-128":
    case "AES-256":
      return We.cbc;
    case "AES-256-CTR":
      return We.ctr;
    default:
      throw new Error(`invalid full segment method ${n}`);
  }
}
const es = typeof self < "u" ? self : void 0;
var Q = {
  CLEARKEY: "org.w3.clearkey",
  FAIRPLAY: "com.apple.fps",
  PLAYREADY: "com.microsoft.playready",
  WIDEVINE: "com.widevine.alpha"
}, xe = {
  CLEARKEY: "org.w3.clearkey",
  FAIRPLAY: "com.apple.streamingkeydelivery",
  PLAYREADY: "com.microsoft.playready",
  WIDEVINE: "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"
};
function ji(n) {
  switch (n) {
    case xe.FAIRPLAY:
      return Q.FAIRPLAY;
    case xe.PLAYREADY:
      return Q.PLAYREADY;
    case xe.WIDEVINE:
      return Q.WIDEVINE;
    case xe.CLEARKEY:
      return Q.CLEARKEY;
  }
}
var Ct = {
  CENC: "1077efecc0b24d02ace33c1e52e2fb4b",
  CLEARKEY: "e2719d58a985b3c9781ab030af78d30e",
  FAIRPLAY: "94ce86fb07ff4f43adb893d2fa968ca2",
  PLAYREADY: "9a04f07998404286ab92e65be0885f95",
  WIDEVINE: "edef8ba979d64acea3c827dcd51d21ed"
};
function Es(n) {
  if (n === Ct.WIDEVINE)
    return Q.WIDEVINE;
  if (n === Ct.PLAYREADY)
    return Q.PLAYREADY;
  if (n === Ct.CENC || n === Ct.CLEARKEY)
    return Q.CLEARKEY;
}
function zi(n) {
  switch (n) {
    case Q.FAIRPLAY:
      return xe.FAIRPLAY;
    case Q.PLAYREADY:
      return xe.PLAYREADY;
    case Q.WIDEVINE:
      return xe.WIDEVINE;
    case Q.CLEARKEY:
      return xe.CLEARKEY;
  }
}
function wt(n) {
  const {
    drmSystems: e,
    widevineLicenseUrl: t
  } = n, s = e ? [Q.FAIRPLAY, Q.WIDEVINE, Q.PLAYREADY, Q.CLEARKEY].filter((i) => !!e[i]) : [];
  return !s[Q.WIDEVINE] && t && s.push(Q.WIDEVINE), s;
}
const un = function(n) {
  return es != null && (n = es.navigator) != null && n.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null;
}();
function za(n, e, t, s) {
  let i;
  switch (n) {
    case Q.FAIRPLAY:
      i = ["cenc", "sinf"];
      break;
    case Q.WIDEVINE:
    case Q.PLAYREADY:
      i = ["cenc"];
      break;
    case Q.CLEARKEY:
      i = ["cenc", "keyids"];
      break;
    default:
      throw new Error(`Unknown key-system: ${n}`);
  }
  return Xa(i, e, t, s);
}
function Xa(n, e, t, s) {
  return [{
    initDataTypes: n,
    persistentState: s.persistentState || "optional",
    distinctiveIdentifier: s.distinctiveIdentifier || "optional",
    sessionTypes: s.sessionTypes || [s.sessionType || "temporary"],
    audioCapabilities: e.map((r) => ({
      contentType: `audio/mp4; codecs="${r}"`,
      robustness: s.audioRobustness || "",
      encryptionScheme: s.audioEncryptionScheme || null
    })),
    videoCapabilities: t.map((r) => ({
      contentType: `video/mp4; codecs="${r}"`,
      robustness: s.videoRobustness || "",
      encryptionScheme: s.videoEncryptionScheme || null
    }))
  }];
}
function dn(n) {
  const e = new Uint16Array(n.buffer, n.byteOffset, n.byteLength / 2), t = String.fromCharCode.apply(null, Array.from(e)), s = t.substring(t.indexOf("<"), t.length), a = new DOMParser().parseFromString(s, "text/xml").getElementsByTagName("KID")[0];
  if (a) {
    const o = a.childNodes[0] ? a.childNodes[0].nodeValue : a.getAttribute("VALUE");
    if (o) {
      const l = li(o).subarray(0, 16);
      return qa(l), l;
    }
  }
  return null;
}
function Je(n, e, t) {
  return Uint8Array.prototype.slice ? n.slice(e, t) : new Uint8Array(Array.prototype.slice.call(n, e, t));
}
function Se(n, e = !1) {
  if (typeof TextDecoder < "u") {
    const c = new TextDecoder("utf-8").decode(n);
    if (e) {
      const h = c.indexOf("\0");
      return h !== -1 ? c.substring(0, h) : c;
    }
    return c.replace(/\0/g, "");
  }
  const t = n.length;
  let s, i, r, a = "", o = 0;
  for (; o < t; ) {
    if (s = n[o++], s === 0 && e)
      return a;
    if (s === 0 || s === 3)
      continue;
    switch (s >> 4) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        a += String.fromCharCode(s);
        break;
      case 12:
      case 13:
        i = n[o++], a += String.fromCharCode((s & 31) << 6 | i & 63);
        break;
      case 14:
        i = n[o++], r = n[o++], a += String.fromCharCode((s & 15) << 12 | (i & 63) << 6 | (r & 63) << 0);
        break;
    }
  }
  return a;
}
const ke = {
  hexDump: function(n) {
    let e = "";
    for (let t = 0; t < n.length; t++) {
      let s = n[t].toString(16);
      s.length < 2 && (s = "0" + s), e += s;
    }
    return e;
  }
}, ts = Math.pow(2, 32) - 1, Qa = [].push, fn = {
  video: 1,
  audio: 2,
  id3: 3,
  text: 4
};
function ce(n) {
  return String.fromCharCode.apply(null, n);
}
function gn(n, e) {
  const t = n[e] << 8 | n[e + 1];
  return t < 0 ? 65536 + t : t;
}
function B(n, e) {
  const t = mn(n, e);
  return t < 0 ? 4294967296 + t : t;
}
function Xi(n, e) {
  let t = B(n, e);
  return t *= Math.pow(2, 32), t += B(n, e + 4), t;
}
function mn(n, e) {
  return n[e] << 24 | n[e + 1] << 16 | n[e + 2] << 8 | n[e + 3];
}
function Ts(n, e, t) {
  n[e] = t >> 24, n[e + 1] = t >> 16 & 255, n[e + 2] = t >> 8 & 255, n[e + 3] = t & 255;
}
function Ja(n) {
  const e = n.byteLength;
  for (let t = 0; t < e; ) {
    const s = B(n, t);
    if (s > 8 && n[t + 4] === 109 && n[t + 5] === 111 && n[t + 6] === 111 && n[t + 7] === 102)
      return !0;
    t = s > 1 ? t + s : e;
  }
  return !1;
}
function H(n, e) {
  const t = [];
  if (!e.length)
    return t;
  const s = n.byteLength;
  for (let i = 0; i < s; ) {
    const r = B(n, i), a = ce(n.subarray(i + 4, i + 8)), o = r > 1 ? i + r : s;
    if (a === e[0])
      if (e.length === 1)
        t.push(n.subarray(i + 8, o));
      else {
        const l = H(n.subarray(i + 8, o), e.slice(1));
        l.length && Qa.apply(t, l);
      }
    i = o;
  }
  return t;
}
function Za(n) {
  const e = [], t = n[0];
  let s = 8;
  const i = B(n, s);
  s += 4;
  let r = 0, a = 0;
  t === 0 ? (r = B(n, s), a = B(n, s + 4), s += 8) : (r = Xi(n, s), a = Xi(n, s + 8), s += 16), s += 2;
  let o = n.length + a;
  const l = gn(n, s);
  s += 2;
  for (let c = 0; c < l; c++) {
    let h = s;
    const u = B(n, h);
    h += 4;
    const d = u & 2147483647;
    if ((u & 2147483648) >>> 31 === 1)
      return q.warn("SIDX has hierarchical references (not supported)"), null;
    const f = B(n, h);
    h += 4, e.push({
      referenceSize: d,
      subsegmentDuration: f,
      // unscaled
      info: {
        duration: f / i,
        start: o,
        end: o + d - 1
      }
    }), o += d, h += 4, s = h;
  }
  return {
    earliestPresentationTime: r,
    timescale: i,
    version: t,
    referencesCount: l,
    references: e
  };
}
function pn(n) {
  const e = [], t = H(n, ["moov", "trak"]);
  for (let i = 0; i < t.length; i++) {
    const r = t[i], a = H(r, ["tkhd"])[0];
    if (a) {
      let o = a[0];
      const l = B(a, o === 0 ? 12 : 20), c = H(r, ["mdia", "mdhd"])[0];
      if (c) {
        o = c[0];
        const h = B(c, o === 0 ? 12 : 20), u = H(r, ["mdia", "hdlr"])[0];
        if (u) {
          const d = ce(u.subarray(8, 12)), g = {
            soun: J.AUDIO,
            vide: J.VIDEO
          }[d];
          if (g) {
            const f = H(r, ["mdia", "minf", "stbl", "stsd"])[0], m = eo(f);
            e[l] = {
              timescale: h,
              type: g
            }, e[g] = he({
              timescale: h,
              id: l
            }, m);
          }
        }
      }
    }
  }
  return H(n, ["moov", "mvex", "trex"]).forEach((i) => {
    const r = B(i, 4), a = e[r];
    a && (a.default = {
      duration: B(i, 12),
      flags: B(i, 20)
    });
  }), e;
}
function eo(n) {
  const e = n.subarray(8), t = e.subarray(86), s = ce(e.subarray(4, 8));
  let i = s;
  const r = s === "enca" || s === "encv";
  if (r) {
    const o = H(e, [s])[0].subarray(s === "enca" ? 28 : 78);
    H(o, ["sinf"]).forEach((c) => {
      const h = H(c, ["schm"])[0];
      if (h) {
        const u = ce(h.subarray(4, 8));
        if (u === "cbcs" || u === "cenc") {
          const d = H(c, ["frma"])[0];
          d && (i = ce(d));
        }
      }
    });
  }
  switch (i) {
    case "avc1":
    case "avc2":
    case "avc3":
    case "avc4": {
      const a = H(t, ["avcC"])[0];
      i += "." + kt(a[1]) + kt(a[2]) + kt(a[3]);
      break;
    }
    case "mp4a": {
      const a = H(e, [s])[0], o = H(a.subarray(28), ["esds"])[0];
      if (o && o.length > 7) {
        let l = 4;
        if (o[l++] !== 3)
          break;
        l = xs(o, l), l += 2;
        const c = o[l++];
        if (c & 128 && (l += 2), c & 64 && (l += o[l++]), o[l++] !== 4)
          break;
        l = xs(o, l);
        const h = o[l++];
        if (h === 64)
          i += "." + kt(h);
        else
          break;
        if (l += 12, o[l++] !== 5)
          break;
        l = xs(o, l);
        const u = o[l++];
        let d = (u & 248) >> 3;
        d === 31 && (d += 1 + ((u & 7) << 3) + ((o[l] & 224) >> 5)), i += "." + d;
      }
      break;
    }
    case "hvc1":
    case "hev1": {
      const a = H(t, ["hvcC"])[0], o = a[1], l = ["", "A", "B", "C"][o >> 6], c = o & 31, h = B(a, 2), u = (o & 32) >> 5 ? "H" : "L", d = a[12], g = a.subarray(6, 12);
      i += "." + l + c, i += "." + h.toString(16).toUpperCase(), i += "." + u + d;
      let f = "";
      for (let m = g.length; m--; ) {
        const y = g[m];
        (y || f) && (f = "." + y.toString(16).toUpperCase() + f);
      }
      i += f;
      break;
    }
    case "dvh1":
    case "dvhe": {
      const a = H(t, ["dvcC"])[0], o = a[2] >> 1 & 127, l = a[2] << 5 & 32 | a[3] >> 3 & 31;
      i += "." + De(o) + "." + De(l);
      break;
    }
    case "vp09": {
      const a = H(t, ["vpcC"])[0], o = a[4], l = a[5], c = a[6] >> 4 & 15;
      i += "." + De(o) + "." + De(l) + "." + De(c);
      break;
    }
    case "av01": {
      const a = H(t, ["av1C"])[0], o = a[1] >>> 5, l = a[1] & 31, c = a[2] >>> 7 ? "H" : "M", h = (a[2] & 64) >> 6, u = (a[2] & 32) >> 5, d = o === 2 && h ? u ? 12 : 10 : h ? 10 : 8, g = (a[2] & 16) >> 4, f = (a[2] & 8) >> 3, m = (a[2] & 4) >> 2, y = a[2] & 3;
      i += "." + o + "." + De(l) + c + "." + De(d) + "." + g + "." + f + m + y + "." + De(1) + "." + De(1) + "." + De(1) + "." + 0;
      break;
    }
  }
  return {
    codec: i,
    encrypted: r
  };
}
function xs(n, e) {
  const t = e + 5;
  for (; n[e++] & 128 && e < t; )
    ;
  return e;
}
function kt(n) {
  return ("0" + n.toString(16).toUpperCase()).slice(-2);
}
function De(n) {
  return (n < 10 ? "0" : "") + n;
}
function to(n, e) {
  if (!n || !e)
    return n;
  const t = e.keyId;
  return t && e.isCommonEncryption && H(n, ["moov", "trak"]).forEach((i) => {
    const a = H(i, ["mdia", "minf", "stbl", "stsd"])[0].subarray(8);
    let o = H(a, ["enca"]);
    const l = o.length > 0;
    l || (o = H(a, ["encv"])), o.forEach((c) => {
      const h = l ? c.subarray(28) : c.subarray(78);
      H(h, ["sinf"]).forEach((d) => {
        const g = yn(d);
        if (g) {
          const f = g.subarray(8, 24);
          f.some((m) => m !== 0) || (q.log(`[eme] Patching keyId in 'enc${l ? "a" : "v"}>sinf>>tenc' box: ${ke.hexDump(f)} -> ${ke.hexDump(t)}`), g.set(t, 8));
        }
      });
    });
  }), n;
}
function yn(n) {
  const e = H(n, ["schm"])[0];
  if (e) {
    const t = ce(e.subarray(4, 8));
    if (t === "cbcs" || t === "cenc")
      return H(n, ["schi", "tenc"])[0];
  }
  return null;
}
function so(n, e) {
  return H(e, ["moof", "traf"]).reduce((t, s) => {
    const i = H(s, ["tfdt"])[0], r = i[0], a = H(s, ["tfhd"]).reduce((o, l) => {
      const c = B(l, 4), h = n[c];
      if (h) {
        let u = B(i, 4);
        if (r === 1) {
          if (u === ts)
            return q.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time"), o;
          u *= ts + 1, u += B(i, 8);
        }
        const d = h.timescale || 9e4, g = u / d;
        if (O(g) && (o === null || g < o))
          return g;
      }
      return o;
    }, null);
    return a !== null && O(a) && (t === null || a < t) ? a : t;
  }, null);
}
function io(n, e) {
  let t = 0, s = 0, i = 0;
  const r = H(n, ["moof", "traf"]);
  for (let a = 0; a < r.length; a++) {
    const o = r[a], l = H(o, ["tfhd"])[0], c = B(l, 4), h = e[c];
    if (!h)
      continue;
    const u = h.default, d = B(l, 0) | (u == null ? void 0 : u.flags);
    let g = u == null ? void 0 : u.duration;
    d & 8 && (d & 2 ? g = B(l, 12) : g = B(l, 8));
    const f = h.timescale || 9e4, m = H(o, ["trun"]);
    for (let y = 0; y < m.length; y++) {
      if (t = ro(m[y]), !t && g) {
        const E = B(m[y], 4);
        t = g * E;
      }
      h.type === J.VIDEO ? s += t / f : h.type === J.AUDIO && (i += t / f);
    }
  }
  if (s === 0 && i === 0) {
    let a = 1 / 0, o = 0, l = 0;
    const c = H(n, ["sidx"]);
    for (let h = 0; h < c.length; h++) {
      const u = Za(c[h]);
      if (u != null && u.references) {
        a = Math.min(a, u.earliestPresentationTime / u.timescale);
        const d = u.references.reduce((g, f) => g + f.info.duration || 0, 0);
        o = Math.max(o, d + u.earliestPresentationTime / u.timescale), l = o - a;
      }
    }
    if (l && O(l))
      return l;
  }
  return s || i;
}
function ro(n) {
  const e = B(n, 0);
  let t = 8;
  e & 1 && (t += 4), e & 4 && (t += 4);
  let s = 0;
  const i = B(n, 4);
  for (let r = 0; r < i; r++) {
    if (e & 256) {
      const a = B(n, t);
      s += a, t += 4;
    }
    e & 512 && (t += 4), e & 1024 && (t += 4), e & 2048 && (t += 4);
  }
  return s;
}
function no(n, e, t) {
  H(e, ["moof", "traf"]).forEach((s) => {
    H(s, ["tfhd"]).forEach((i) => {
      const r = B(i, 4), a = n[r];
      if (!a)
        return;
      const o = a.timescale || 9e4;
      H(s, ["tfdt"]).forEach((l) => {
        const c = l[0], h = t * o;
        if (h) {
          let u = B(l, 4);
          if (c === 0)
            u -= h, u = Math.max(u, 0), Ts(l, 4, u);
          else {
            u *= Math.pow(2, 32), u += B(l, 8), u -= h, u = Math.max(u, 0);
            const d = Math.floor(u / (ts + 1)), g = Math.floor(u % (ts + 1));
            Ts(l, 4, d), Ts(l, 8, g);
          }
        }
      });
    });
  });
}
function ao(n) {
  const e = {
    valid: null,
    remainder: null
  }, t = H(n, ["moof"]);
  if (t.length < 2)
    return e.remainder = n, e;
  const s = t[t.length - 1];
  return e.valid = Je(n, 0, s.byteOffset - 8), e.remainder = Je(n, s.byteOffset - 8), e;
}
function Re(n, e) {
  const t = new Uint8Array(n.length + e.length);
  return t.set(n), t.set(e, n.length), t;
}
function Qi(n, e) {
  const t = [], s = e.samples, i = e.timescale, r = e.id;
  let a = !1;
  return H(s, ["moof"]).map((l) => {
    const c = l.byteOffset - 8;
    H(l, ["traf"]).map((u) => {
      const d = H(u, ["tfdt"]).map((g) => {
        const f = g[0];
        let m = B(g, 4);
        return f === 1 && (m *= Math.pow(2, 32), m += B(g, 8)), m / i;
      })[0];
      return d !== void 0 && (n = d), H(u, ["tfhd"]).map((g) => {
        const f = B(g, 4), m = B(g, 0) & 16777215, y = (m & 1) !== 0, E = (m & 2) !== 0, x = (m & 8) !== 0;
        let T = 0;
        const _ = (m & 16) !== 0;
        let A = 0;
        const D = (m & 32) !== 0;
        let v = 8;
        f === r && (y && (v += 8), E && (v += 4), x && (T = B(g, v), v += 4), _ && (A = B(g, v), v += 4), D && (v += 4), e.type === "video" && (a = oo(e.codec)), H(u, ["trun"]).map((b) => {
          const C = b[0], R = B(b, 0) & 16777215, w = (R & 1) !== 0;
          let F = 0;
          const te = (R & 4) !== 0, k = (R & 256) !== 0;
          let K = 0;
          const G = (R & 512) !== 0;
          let U = 0;
          const X = (R & 1024) !== 0, P = (R & 2048) !== 0;
          let M = 0;
          const W = B(b, 4);
          let V = 8;
          w && (F = B(b, V), V += 4), te && (V += 4);
          let Y = F + c;
          for (let Z = 0; Z < W; Z++) {
            if (k ? (K = B(b, V), V += 4) : K = T, G ? (U = B(b, V), V += 4) : U = A, X && (V += 4), P && (C === 0 ? M = B(b, V) : M = mn(b, V), V += 4), e.type === J.VIDEO) {
              let re = 0;
              for (; re < U; ) {
                const se = B(s, Y);
                if (Y += 4, lo(a, s[Y])) {
                  const pe = s.subarray(Y, Y + se);
                  hi(pe, a ? 2 : 1, n + M / i, t);
                }
                Y += se, re += se + 4;
              }
            }
            n += K / i;
          }
        }));
      });
    });
  }), t;
}
function oo(n) {
  if (!n)
    return !1;
  const e = n.indexOf("."), t = e < 0 ? n : n.substring(0, e);
  return t === "hvc1" || t === "hev1" || // Dolby Vision
  t === "dvh1" || t === "dvhe";
}
function lo(n, e) {
  if (n) {
    const t = e >> 1 & 63;
    return t === 39 || t === 40;
  } else
    return (e & 31) === 6;
}
function hi(n, e, t, s) {
  const i = En(n);
  let r = 0;
  r += e;
  let a = 0, o = 0, l = 0;
  for (; r < i.length; ) {
    a = 0;
    do {
      if (r >= i.length)
        break;
      l = i[r++], a += l;
    } while (l === 255);
    o = 0;
    do {
      if (r >= i.length)
        break;
      l = i[r++], o += l;
    } while (l === 255);
    const c = i.length - r;
    let h = r;
    if (o < c)
      r += o;
    else if (o > c) {
      q.error(`Malformed SEI payload. ${o} is too small, only ${c} bytes left to parse.`);
      break;
    }
    if (a === 4) {
      if (i[h++] === 181) {
        const d = gn(i, h);
        if (h += 2, d === 49) {
          const g = B(i, h);
          if (h += 4, g === 1195456820) {
            const f = i[h++];
            if (f === 3) {
              const m = i[h++], y = 31 & m, E = 64 & m, x = E ? 2 + y * 3 : 0, T = new Uint8Array(x);
              if (E) {
                T[0] = m;
                for (let _ = 1; _ < x; _++)
                  T[_] = i[h++];
              }
              s.push({
                type: f,
                payloadType: a,
                pts: t,
                bytes: T
              });
            }
          }
        }
      }
    } else if (a === 5 && o > 16) {
      const u = [];
      for (let f = 0; f < 16; f++) {
        const m = i[h++].toString(16);
        u.push(m.length == 1 ? "0" + m : m), (f === 3 || f === 5 || f === 7 || f === 9) && u.push("-");
      }
      const d = o - 16, g = new Uint8Array(d);
      for (let f = 0; f < d; f++)
        g[f] = i[h++];
      s.push({
        payloadType: a,
        pts: t,
        uuid: u.join(""),
        userData: Se(g),
        userDataBytes: g
      });
    }
  }
}
function En(n) {
  const e = n.byteLength, t = [];
  let s = 1;
  for (; s < e - 2; )
    n[s] === 0 && n[s + 1] === 0 && n[s + 2] === 3 ? (t.push(s + 2), s += 2) : s++;
  if (t.length === 0)
    return n;
  const i = e - t.length, r = new Uint8Array(i);
  let a = 0;
  for (s = 0; s < i; a++, s++)
    a === t[0] && (a++, t.shift()), r[s] = n[a];
  return r;
}
function co(n) {
  const e = n[0];
  let t = "", s = "", i = 0, r = 0, a = 0, o = 0, l = 0, c = 0;
  if (e === 0) {
    for (; ce(n.subarray(c, c + 1)) !== "\0"; )
      t += ce(n.subarray(c, c + 1)), c += 1;
    for (t += ce(n.subarray(c, c + 1)), c += 1; ce(n.subarray(c, c + 1)) !== "\0"; )
      s += ce(n.subarray(c, c + 1)), c += 1;
    s += ce(n.subarray(c, c + 1)), c += 1, i = B(n, 12), r = B(n, 16), o = B(n, 20), l = B(n, 24), c = 28;
  } else if (e === 1) {
    c += 4, i = B(n, c), c += 4;
    const u = B(n, c);
    c += 4;
    const d = B(n, c);
    for (c += 4, a = 2 ** 32 * u + d, Pa(a) || (a = Number.MAX_SAFE_INTEGER, q.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")), o = B(n, c), c += 4, l = B(n, c), c += 4; ce(n.subarray(c, c + 1)) !== "\0"; )
      t += ce(n.subarray(c, c + 1)), c += 1;
    for (t += ce(n.subarray(c, c + 1)), c += 1; ce(n.subarray(c, c + 1)) !== "\0"; )
      s += ce(n.subarray(c, c + 1)), c += 1;
    s += ce(n.subarray(c, c + 1)), c += 1;
  }
  const h = n.subarray(c, n.byteLength);
  return {
    schemeIdUri: t,
    value: s,
    timeScale: i,
    presentationTime: a,
    presentationTimeDelta: r,
    eventDuration: o,
    id: l,
    payload: h
  };
}
function ho(n, ...e) {
  const t = e.length;
  let s = 8, i = t;
  for (; i--; )
    s += e[i].byteLength;
  const r = new Uint8Array(s);
  for (r[0] = s >> 24 & 255, r[1] = s >> 16 & 255, r[2] = s >> 8 & 255, r[3] = s & 255, r.set(n, 4), i = 0, s = 8; i < t; i++)
    r.set(e[i], s), s += e[i].byteLength;
  return r;
}
function uo(n, e, t) {
  if (n.byteLength !== 16)
    throw new RangeError("Invalid system id");
  let s, i;
  s = 0, i = new Uint8Array();
  let r;
  s > 0 ? (r = new Uint8Array(4), e.length > 0 && new DataView(r.buffer).setUint32(0, e.length, !1)) : r = new Uint8Array();
  const a = new Uint8Array(4);
  return t && t.byteLength > 0 && new DataView(a.buffer).setUint32(0, t.byteLength, !1), ho(
    [112, 115, 115, 104],
    new Uint8Array([
      s,
      0,
      0,
      0
      // Flags
    ]),
    n,
    // 16 bytes
    r,
    i,
    a,
    t || new Uint8Array()
  );
}
function fo(n) {
  const e = [];
  if (n instanceof ArrayBuffer) {
    const t = n.byteLength;
    let s = 0;
    for (; s + 32 < t; ) {
      const i = new DataView(n, s), r = go(i);
      e.push(r), s += r.size;
    }
  }
  return e;
}
function go(n) {
  const e = n.getUint32(0), t = n.byteOffset, s = n.byteLength;
  if (s < e)
    return {
      offset: t,
      size: s
    };
  if (n.getUint32(4) !== 1886614376)
    return {
      offset: t,
      size: e
    };
  const r = n.getUint32(8) >>> 24;
  if (r !== 0 && r !== 1)
    return {
      offset: t,
      size: e
    };
  const a = n.buffer, o = ke.hexDump(new Uint8Array(a, t + 12, 16)), l = n.getUint32(28);
  let c = null, h = null;
  if (r === 0) {
    if (e - 32 < l || l < 22)
      return {
        offset: t,
        size: e
      };
    h = new Uint8Array(a, t + 32, l);
  } else if (r === 1) {
    if (!l || s < t + 32 + l * 16 + 16)
      return {
        offset: t,
        size: e
      };
    c = [];
    for (let u = 0; u < l; u++)
      c.push(new Uint8Array(a, t + 32 + u * 16, 16));
  }
  return {
    version: r,
    systemId: o,
    kids: c,
    data: h,
    offset: t,
    size: e
  };
}
let Pt = {};
class vt {
  static clearKeyUriToKeyIdMap() {
    Pt = {};
  }
  constructor(e, t, s, i = [1], r = null) {
    this.uri = void 0, this.method = void 0, this.keyFormat = void 0, this.keyFormatVersions = void 0, this.encrypted = void 0, this.isCommonEncryption = void 0, this.iv = null, this.key = null, this.keyId = null, this.pssh = null, this.method = e, this.uri = t, this.keyFormat = s, this.keyFormatVersions = i, this.iv = r, this.encrypted = e ? e !== "NONE" : !1, this.isCommonEncryption = this.encrypted && !ot(e);
  }
  isSupported() {
    if (this.method) {
      if (ot(this.method) || this.method === "NONE")
        return !0;
      if (this.keyFormat === "identity")
        return this.method === "SAMPLE-AES";
      switch (this.keyFormat) {
        case xe.FAIRPLAY:
        case xe.WIDEVINE:
        case xe.PLAYREADY:
        case xe.CLEARKEY:
          return ["ISO-23001-7", "SAMPLE-AES", "SAMPLE-AES-CENC", "SAMPLE-AES-CTR"].indexOf(this.method) !== -1;
      }
    }
    return !1;
  }
  getDecryptData(e) {
    if (!this.encrypted || !this.uri)
      return null;
    if (ot(this.method) && this.uri && !this.iv) {
      typeof e != "number" && (q.warn(`missing IV for initialization segment with method="${this.method}" - compliance issue`), e = 0);
      const s = mo(e);
      return new vt(this.method, this.uri, "identity", this.keyFormatVersions, s);
    }
    const t = ja(this.uri);
    if (t)
      switch (this.keyFormat) {
        case xe.WIDEVINE:
          this.pssh = t, t.length >= 22 && (this.keyId = t.subarray(t.length - 22, t.length - 6));
          break;
        case xe.PLAYREADY: {
          const s = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);
          this.pssh = uo(s, null, t), this.keyId = dn(t);
          break;
        }
        default: {
          let s = t.subarray(0, 16);
          if (s.length !== 16) {
            const i = new Uint8Array(16);
            i.set(s, 16 - s.length), s = i;
          }
          this.keyId = s;
          break;
        }
      }
    if (!this.keyId || this.keyId.byteLength !== 16) {
      let s = Pt[this.uri];
      if (!s) {
        const i = Object.keys(Pt).length % Number.MAX_SAFE_INTEGER;
        s = new Uint8Array(16), new DataView(s.buffer, 12, 4).setUint32(0, i), Pt[this.uri] = s;
      }
      this.keyId = s;
    }
    return this;
  }
}
function mo(n) {
  const e = new Uint8Array(16);
  for (let t = 12; t < 16; t++)
    e[t] = n >> 8 * (15 - t) & 255;
  return e;
}
function Ye(n = !0) {
  return typeof self > "u" ? void 0 : (n || !self.MediaSource) && self.ManagedMediaSource || self.MediaSource || self.WebKitMediaSource;
}
function po(n) {
  return typeof self < "u" && n === self.ManagedMediaSource;
}
const ss = {
  audio: {
    a3ds: 1,
    "ac-3": 0.95,
    "ac-4": 1,
    alac: 0.9,
    alaw: 1,
    dra1: 1,
    "dts+": 1,
    "dts-": 1,
    dtsc: 1,
    dtse: 1,
    dtsh: 1,
    "ec-3": 0.9,
    enca: 1,
    fLaC: 0.9,
    // MP4-RA listed codec entry for FLAC
    flac: 0.9,
    // legacy browser codec name for FLAC
    FLAC: 0.9,
    // some manifests may list "FLAC" with Apple's tools
    g719: 1,
    g726: 1,
    m4ae: 1,
    mha1: 1,
    mha2: 1,
    mhm1: 1,
    mhm2: 1,
    mlpa: 1,
    mp4a: 1,
    "raw ": 1,
    Opus: 1,
    opus: 1,
    // browsers expect this to be lowercase despite MP4RA says 'Opus'
    samr: 1,
    sawb: 1,
    sawp: 1,
    sevc: 1,
    sqcp: 1,
    ssmv: 1,
    twos: 1,
    ulaw: 1
  },
  video: {
    avc1: 1,
    avc2: 1,
    avc3: 1,
    avc4: 1,
    avcp: 1,
    av01: 0.8,
    drac: 1,
    dva1: 1,
    dvav: 1,
    dvh1: 0.7,
    dvhe: 0.7,
    encv: 1,
    hev1: 0.75,
    hvc1: 0.75,
    mjp2: 1,
    mp4v: 1,
    mvc1: 1,
    mvc2: 1,
    mvc3: 1,
    mvc4: 1,
    resv: 1,
    rv60: 1,
    s263: 1,
    svc1: 1,
    svc2: 1,
    "vc-1": 1,
    vp08: 1,
    vp09: 0.9
  },
  text: {
    stpp: 1,
    wvtt: 1
  }
};
function yo(n, e) {
  const t = ss[e];
  return !!t && !!t[n.slice(0, 4)];
}
function Ss(n, e, t = !0) {
  return !n.split(",").some((s) => !Tn(s, e, t));
}
function Tn(n, e, t = !0) {
  var s;
  const i = Ye(t);
  return (s = i == null ? void 0 : i.isTypeSupported(At(n, e))) != null ? s : !1;
}
function At(n, e) {
  return `${e}/mp4;codecs="${n}"`;
}
function Ji(n) {
  if (n) {
    const e = n.substring(0, 4);
    return ss.video[e];
  }
  return 2;
}
function is(n) {
  return n.split(",").reduce((e, t) => {
    const s = ss.video[t];
    return s ? (s * 2 + e) / (e ? 3 : 2) : (ss.audio[t] + e) / (e ? 2 : 1);
  }, 0);
}
const vs = {};
function Eo(n, e = !0) {
  if (vs[n])
    return vs[n];
  const t = {
    // Idealy fLaC and Opus would be first (spec-compliant) but
    // some browsers will report that fLaC is supported then fail.
    // see: https://bugs.chromium.org/p/chromium/issues/detail?id=1422728
    flac: ["flac", "fLaC", "FLAC"],
    opus: ["opus", "Opus"],
    // Replace audio codec info if browser does not support mp4a.40.34,
    // and demuxer can fallback to 'audio/mpeg' or 'audio/mp4;codecs="mp3"'
    "mp4a.40.34": ["mp3"]
  }[n];
  for (let i = 0; i < t.length; i++) {
    var s;
    if (Tn(t[i], "audio", e))
      return vs[n] = t[i], t[i];
    if (t[i] === "mp3" && (s = Ye(e)) != null && s.isTypeSupported("audio/mpeg"))
      return "";
  }
  return n;
}
const To = /flac|opus|mp4a\.40\.34/i;
function rs(n, e = !0) {
  return n.replace(To, (t) => Eo(t.toLowerCase(), e));
}
function Zi(n, e) {
  return n && n !== "mp4a" ? n : e && e.split(",")[0];
}
function xo(n) {
  const e = n.split(",");
  for (let t = 0; t < e.length; t++) {
    const s = e[t].split(".");
    if (s.length > 2) {
      let i = s.shift() + ".";
      i += parseInt(s.shift()).toString(16), i += ("000" + parseInt(s.shift()).toString(16)).slice(-4), e[t] = i;
    }
  }
  return e.join(",");
}
function er(n) {
  const e = Ye(n) || {
    isTypeSupported: () => !1
  };
  return {
    mpeg: e.isTypeSupported("audio/mpeg"),
    mp3: e.isTypeSupported('audio/mp4; codecs="mp3"'),
    ac3: e.isTypeSupported('audio/mp4; codecs="ac-3"')
  };
}
const tr = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g, sr = /#EXT-X-MEDIA:(.*)/g, So = /^#EXT(?:INF|-X-TARGETDURATION):/m, ir = new RegExp([
  /#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,
  // duration (#EXTINF:<duration>,<title>), group 1 => duration, group 2 => title
  /(?!#) *(\S[^\r\n]*)/.source,
  // segment URI, group 3 => the URI (note newline is not eaten)
  /#EXT-X-BYTERANGE:*(.+)/.source,
  // next segment's byterange, group 4 => range spec (x@y)
  /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,
  // next segment's program date/time group 5 => the datetime spec
  /#.*/.source
  // All other non-segment oriented tags will match with all groups empty
].join("|"), "g"), vo = new RegExp([/#(EXTM3U)/.source, /#EXT-X-(DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source, /#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source, /#EXT-X-(DISCONTINUITY|ENDLIST|GAP|INDEPENDENT-SEGMENTS)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|"));
class Fe {
  static findGroup(e, t) {
    for (let s = 0; s < e.length; s++) {
      const i = e[s];
      if (i.id === t)
        return i;
    }
  }
  static resolve(e, t) {
    return oi.buildAbsoluteURL(t, e, {
      alwaysNormalize: !0
    });
  }
  static isMediaPlaylist(e) {
    return So.test(e);
  }
  static parseMasterPlaylist(e, t) {
    const s = Wi(e), i = {
      contentSteering: null,
      levels: [],
      playlistParsingError: null,
      sessionData: null,
      sessionKeys: null,
      startTimeOffset: null,
      variableList: null,
      hasVariableRefs: s
    }, r = [];
    tr.lastIndex = 0;
    let a;
    for (; (a = tr.exec(e)) != null; )
      if (a[1]) {
        var o;
        const c = new ne(a[1], i), h = Ks(i, a[2]), u = {
          attrs: c,
          bitrate: c.decimalInteger("BANDWIDTH") || c.decimalInteger("AVERAGE-BANDWIDTH"),
          name: c.NAME,
          url: Fe.resolve(h, t)
        }, d = c.decimalResolution("RESOLUTION");
        d && (u.width = d.width, u.height = d.height), Lo(c.CODECS, u), (o = u.unknownCodecs) != null && o.length || r.push(u), i.levels.push(u);
      } else if (a[3]) {
        const c = a[3], h = a[4];
        switch (c) {
          case "SESSION-DATA": {
            const u = new ne(h, i), d = u["DATA-ID"];
            d && (i.sessionData === null && (i.sessionData = {}), i.sessionData[d] = u);
            break;
          }
          case "SESSION-KEY": {
            const u = rr(h, t, i);
            u.encrypted && u.isSupported() ? (i.sessionKeys === null && (i.sessionKeys = []), i.sessionKeys.push(u)) : q.warn(`[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "${h}"`);
            break;
          }
          case "DEFINE": {
            {
              const u = new ne(h, i);
              Yi(i, u, t);
            }
            break;
          }
          case "CONTENT-STEERING": {
            const u = new ne(h, i);
            i.contentSteering = {
              uri: Fe.resolve(u["SERVER-URI"], t),
              pathwayId: u["PATHWAY-ID"] || "."
            };
            break;
          }
          case "START": {
            i.startTimeOffset = nr(h);
            break;
          }
        }
      }
    const l = r.length > 0 && r.length < i.levels.length;
    return i.levels = l ? r : i.levels, i.levels.length === 0 && (i.playlistParsingError = new Error("no levels found in manifest")), i;
  }
  static parseMasterPlaylistMedia(e, t, s) {
    let i;
    const r = {}, a = s.levels, o = {
      AUDIO: a.map((c) => ({
        id: c.attrs.AUDIO,
        audioCodec: c.audioCodec
      })),
      SUBTITLES: a.map((c) => ({
        id: c.attrs.SUBTITLES,
        textCodec: c.textCodec
      })),
      "CLOSED-CAPTIONS": []
    };
    let l = 0;
    for (sr.lastIndex = 0; (i = sr.exec(e)) !== null; ) {
      const c = new ne(i[1], s), h = c.TYPE;
      if (h) {
        const u = o[h], d = r[h] || [];
        r[h] = d;
        const g = c.LANGUAGE, f = c["ASSOC-LANGUAGE"], m = c.CHANNELS, y = c.CHARACTERISTICS, E = c["INSTREAM-ID"], x = {
          attrs: c,
          bitrate: 0,
          id: l++,
          groupId: c["GROUP-ID"] || "",
          name: c.NAME || g || "",
          type: h,
          default: c.bool("DEFAULT"),
          autoselect: c.bool("AUTOSELECT"),
          forced: c.bool("FORCED"),
          lang: g,
          url: c.URI ? Fe.resolve(c.URI, t) : ""
        };
        if (f && (x.assocLang = f), m && (x.channels = m), y && (x.characteristics = y), E && (x.instreamId = E), u != null && u.length) {
          const T = Fe.findGroup(u, x.groupId) || u[0];
          ar(x, T, "audioCodec"), ar(x, T, "textCodec");
        }
        d.push(x);
      }
    }
    return r;
  }
  static parseLevelPlaylist(e, t, s, i, r, a) {
    const o = new Wa(t), l = o.fragments, c = [];
    let h = null, u = 0, d = 0, g = 0, f = 0, m = null, y = new ys(i, t), E, x, T, _ = -1, A = !1, D = null;
    for (ir.lastIndex = 0, o.m3u8 = e, o.hasVariableRefs = Wi(e); (E = ir.exec(e)) !== null; ) {
      A && (A = !1, y = new ys(i, t), y.start = g, y.sn = u, y.cc = f, y.level = s, h && (y.initSegment = h, y.rawProgramDateTime = h.rawProgramDateTime, h.rawProgramDateTime = null, D && (y.setByteRange(D), D = null)));
      const R = E[1];
      if (R) {
        y.duration = parseFloat(R);
        const w = (" " + E[2]).slice(1);
        y.title = w || null, y.tagList.push(w ? ["INF", R, w] : ["INF", R]);
      } else if (E[3]) {
        if (O(y.duration)) {
          y.start = g, T && lr(y, T, o), y.sn = u, y.level = s, y.cc = f, l.push(y);
          const w = (" " + E[3]).slice(1);
          y.relurl = Ks(o, w), Hs(y, m, c), m = y, g += y.duration, u++, d = 0, A = !0;
        }
      } else if (E[4]) {
        const w = (" " + E[4]).slice(1);
        m ? y.setByteRange(w, m) : y.setByteRange(w);
      } else if (E[5])
        y.rawProgramDateTime = (" " + E[5]).slice(1), y.tagList.push(["PROGRAM-DATE-TIME", y.rawProgramDateTime]), _ === -1 && (_ = l.length);
      else {
        if (E = E[0].match(vo), !E) {
          q.warn("No matches on slow regex match for level playlist!");
          continue;
        }
        for (x = 1; x < E.length && !(typeof E[x] < "u"); x++)
          ;
        const w = (" " + E[x]).slice(1), F = (" " + E[x + 1]).slice(1), te = E[x + 2] ? (" " + E[x + 2]).slice(1) : "";
        switch (w) {
          case "PLAYLIST-TYPE":
            o.type = F.toUpperCase();
            break;
          case "MEDIA-SEQUENCE":
            u = o.startSN = parseInt(F);
            break;
          case "SKIP": {
            o.skippedSegments && (o.playlistParsingError = new Error("#EXT-X-SKIP MUST NOT appear more than once in a Playlist"));
            const k = new ne(F, o), K = k.decimalInteger("SKIPPED-SEGMENTS");
            if (O(K)) {
              o.skippedSegments += K;
              for (let U = K; U--; )
                l.push(null);
              u += K;
            }
            const G = k.enumeratedString("RECENTLY-REMOVED-DATERANGES");
            G && (o.recentlyRemovedDateranges = (o.recentlyRemovedDateranges || []).concat(G.split("	")));
            break;
          }
          case "TARGETDURATION":
            o.targetduration = Math.max(parseInt(F), 1);
            break;
          case "VERSION":
            o.version = parseInt(F);
            break;
          case "INDEPENDENT-SEGMENTS":
          case "EXTM3U":
            break;
          case "ENDLIST":
            o.live = !1;
            break;
          case "#":
            (F || te) && y.tagList.push(te ? [F, te] : [F]);
            break;
          case "DISCONTINUITY":
            f++, y.tagList.push(["DIS"]);
            break;
          case "GAP":
            y.gap = !0, y.tagList.push([w]);
            break;
          case "BITRATE":
            y.tagList.push([w, F]);
            break;
          case "DATERANGE": {
            const k = new ne(F, o), K = new cn(k, o.dateRanges[k.ID], o.dateRangeTagCount);
            o.dateRangeTagCount++, K.isValid || o.skippedSegments ? o.dateRanges[K.id] = K : q.warn(`Ignoring invalid DATERANGE tag: "${F}"`), y.tagList.push(["EXT-X-DATERANGE", F]);
            break;
          }
          case "DEFINE": {
            {
              const k = new ne(F, o);
              "IMPORT" in k ? Ua(o, k, a) : Yi(o, k, t);
            }
            break;
          }
          case "DISCONTINUITY-SEQUENCE":
            f = parseInt(F);
            break;
          case "KEY": {
            const k = rr(F, t, o);
            if (k.isSupported()) {
              if (k.method === "NONE") {
                T = void 0;
                break;
              }
              T || (T = {}), T[k.keyFormat] && (T = ae({}, T)), T[k.keyFormat] = k;
            } else
              q.warn(`[Keys] Ignoring invalid EXT-X-KEY tag: "${F}"`);
            break;
          }
          case "START":
            o.startTimeOffset = nr(F);
            break;
          case "MAP": {
            const k = new ne(F, o);
            if (y.duration) {
              const K = new ys(i, t);
              or(K, k, s, T), h = K, y.initSegment = h, h.rawProgramDateTime && !y.rawProgramDateTime && (y.rawProgramDateTime = h.rawProgramDateTime);
            } else {
              const K = y.byteRangeEndOffset;
              if (K) {
                const G = y.byteRangeStartOffset;
                D = `${K - G}@${G}`;
              } else
                D = null;
              or(y, k, s, T), h = y, A = !0;
            }
            h.cc = f;
            break;
          }
          case "SERVER-CONTROL": {
            const k = new ne(F);
            o.canBlockReload = k.bool("CAN-BLOCK-RELOAD"), o.canSkipUntil = k.optionalFloat("CAN-SKIP-UNTIL", 0), o.canSkipDateRanges = o.canSkipUntil > 0 && k.bool("CAN-SKIP-DATERANGES"), o.partHoldBack = k.optionalFloat("PART-HOLD-BACK", 0), o.holdBack = k.optionalFloat("HOLD-BACK", 0);
            break;
          }
          case "PART-INF": {
            const k = new ne(F);
            o.partTarget = k.decimalFloatingPoint("PART-TARGET");
            break;
          }
          case "PART": {
            let k = o.partList;
            k || (k = o.partList = []);
            const K = d > 0 ? k[k.length - 1] : void 0, G = d++, U = new ne(F, o), X = new Va(U, y, t, G, K);
            k.push(X), y.duration += X.duration;
            break;
          }
          case "PRELOAD-HINT": {
            const k = new ne(F, o);
            o.preloadHint = k;
            break;
          }
          case "RENDITION-REPORT": {
            const k = new ne(F, o);
            o.renditionReports = o.renditionReports || [], o.renditionReports.push(k);
            break;
          }
          default:
            q.warn(`line parsed but not handled: ${E}`);
            break;
        }
      }
    }
    m && !m.relurl ? (l.pop(), g -= m.duration, o.partList && (o.fragmentHint = m)) : o.partList && (Hs(y, m, c), y.cc = f, o.fragmentHint = y, T && lr(y, T, o));
    const v = l.length, b = l[0], C = l[v - 1];
    if (g += o.skippedSegments * o.targetduration, g > 0 && v && C) {
      o.averagetargetduration = g / v;
      const R = C.sn;
      o.endSN = R !== "initSegment" ? R : 0, o.live || (C.endList = !0), b && (o.startCC = b.cc), _ > 0 && (Ro(l, _), b && c.unshift(b));
    } else
      o.endSN = 0, o.startCC = 0;
    return o.fragmentHint && (g += o.fragmentHint.duration), o.totalduration = g, c.length && o.dateRangeTagCount && b && xn(c, o), o.endCC = f, o;
  }
}
function xn(n, e) {
  const t = n.length, s = n[t - 1], i = e.live ? 1 / 0 : e.totalduration, r = Object.keys(e.dateRanges);
  for (let a = r.length; a--; ) {
    const o = e.dateRanges[r[a]], l = o.startDate.getTime();
    o.tagAnchor = s;
    for (let c = t; c--; ) {
      const h = Ao(e, l, n, c, i);
      if (h !== -1) {
        o.tagAnchor = e.fragments[h];
        break;
      }
    }
  }
}
function Ao(n, e, t, s, i) {
  const r = t[s];
  if (r) {
    var a;
    const o = (((a = t[s + 1]) == null ? void 0 : a.start) || i) - r.start, l = r.programDateTime;
    if ((e >= l || s === 0) && e <= l + o * 1e3) {
      const c = t[s].sn - n.startSN, h = n.fragments;
      if (h.length > t.length) {
        const d = (t[s + 1] || h[h.length - 1]).sn - n.startSN;
        for (let g = d; g > c; g--) {
          const f = h[g].programDateTime;
          if (e >= f && e < f + h[g].duration * 1e3)
            return g;
        }
      }
      return c;
    }
  }
  return -1;
}
function rr(n, e, t) {
  var s, i;
  const r = new ne(n, t), a = (s = r.METHOD) != null ? s : "", o = r.URI, l = r.hexadecimalInteger("IV"), c = r.KEYFORMATVERSIONS, h = (i = r.KEYFORMAT) != null ? i : "identity";
  o && r.IV && !l && q.error(`Invalid IV: ${r.IV}`);
  const u = o ? Fe.resolve(o, e) : "", d = (c || "1").split("/").map(Number).filter(Number.isFinite);
  return new vt(a, u, h, d, l);
}
function nr(n) {
  const t = new ne(n).decimalFloatingPoint("TIME-OFFSET");
  return O(t) ? t : null;
}
function Lo(n, e) {
  let t = (n || "").split(/[ ,]+/).filter((s) => s);
  ["video", "audio", "text"].forEach((s) => {
    const i = t.filter((r) => yo(r, s));
    i.length && (e[`${s}Codec`] = i.join(","), t = t.filter((r) => i.indexOf(r) === -1));
  }), e.unknownCodecs = t;
}
function ar(n, e, t) {
  const s = e[t];
  s && (n[t] = s);
}
function Ro(n, e) {
  let t = n[e];
  for (let s = e; s--; ) {
    const i = n[s];
    if (!i)
      return;
    i.programDateTime = t.programDateTime - i.duration * 1e3, t = i;
  }
}
function Hs(n, e, t) {
  if (n.rawProgramDateTime) {
    if (n.programDateTime = Date.parse(n.rawProgramDateTime), !O(n.programDateTime)) {
      n.programDateTime = null, n.rawProgramDateTime = null;
      return;
    }
    t.push(n);
  } else e != null && e.programDateTime && (n.programDateTime = e.endProgramDateTime);
}
function or(n, e, t, s) {
  n.relurl = e.URI, e.BYTERANGE && n.setByteRange(e.BYTERANGE), n.level = t, n.sn = "initSegment", s && (n.levelkeys = s), n.initSegment = null;
}
function lr(n, e, t) {
  n.levelkeys = e;
  const {
    encryptedFragments: s
  } = t;
  (!s.length || s[s.length - 1].levelkeys !== e) && Object.keys(e).some((i) => e[i].isCommonEncryption) && s.push(n);
}
var j = {
  MANIFEST: "manifest",
  LEVEL: "level",
  AUDIO_TRACK: "audioTrack",
  SUBTITLE_TRACK: "subtitleTrack"
}, N = {
  MAIN: "main",
  AUDIO: "audio",
  SUBTITLE: "subtitle"
};
function cr(n) {
  const {
    type: e
  } = n;
  switch (e) {
    case j.AUDIO_TRACK:
      return N.AUDIO;
    case j.SUBTITLE_TRACK:
      return N.SUBTITLE;
    default:
      return N.MAIN;
  }
}
function As(n, e) {
  let t = n.url;
  return (t === void 0 || t.indexOf("data:") === 0) && (t = e.url), t;
}
class _o {
  constructor(e) {
    this.hls = void 0, this.loaders = /* @__PURE__ */ Object.create(null), this.variableList = null, this.hls = e, this.registerListeners();
  }
  startLoad(e) {
  }
  stopLoad() {
    this.destroyInternalLoaders();
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(p.MANIFEST_LOADING, this.onManifestLoading, this), e.on(p.LEVEL_LOADING, this.onLevelLoading, this), e.on(p.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), e.on(p.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(p.MANIFEST_LOADING, this.onManifestLoading, this), e.off(p.LEVEL_LOADING, this.onLevelLoading, this), e.off(p.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), e.off(p.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
  }
  /**
   * Returns defaults or configured loader-type overloads (pLoader and loader config params)
   */
  createInternalLoader(e) {
    const t = this.hls.config, s = t.pLoader, i = t.loader, r = s || i, a = new r(t);
    return this.loaders[e.type] = a, a;
  }
  getInternalLoader(e) {
    return this.loaders[e.type];
  }
  resetInternalLoader(e) {
    this.loaders[e] && delete this.loaders[e];
  }
  /**
   * Call `destroy` on all internal loader instances mapped (one per context type)
   */
  destroyInternalLoaders() {
    for (const e in this.loaders) {
      const t = this.loaders[e];
      t && t.destroy(), this.resetInternalLoader(e);
    }
  }
  destroy() {
    this.variableList = null, this.unregisterListeners(), this.destroyInternalLoaders();
  }
  onManifestLoading(e, t) {
    const {
      url: s
    } = t;
    this.variableList = null, this.load({
      id: null,
      level: 0,
      responseType: "text",
      type: j.MANIFEST,
      url: s,
      deliveryDirectives: null
    });
  }
  onLevelLoading(e, t) {
    const {
      id: s,
      level: i,
      pathwayId: r,
      url: a,
      deliveryDirectives: o
    } = t;
    this.load({
      id: s,
      level: i,
      pathwayId: r,
      responseType: "text",
      type: j.LEVEL,
      url: a,
      deliveryDirectives: o
    });
  }
  onAudioTrackLoading(e, t) {
    const {
      id: s,
      groupId: i,
      url: r,
      deliveryDirectives: a
    } = t;
    this.load({
      id: s,
      groupId: i,
      level: null,
      responseType: "text",
      type: j.AUDIO_TRACK,
      url: r,
      deliveryDirectives: a
    });
  }
  onSubtitleTrackLoading(e, t) {
    const {
      id: s,
      groupId: i,
      url: r,
      deliveryDirectives: a
    } = t;
    this.load({
      id: s,
      groupId: i,
      level: null,
      responseType: "text",
      type: j.SUBTITLE_TRACK,
      url: r,
      deliveryDirectives: a
    });
  }
  load(e) {
    var t;
    const s = this.hls.config;
    let i = this.getInternalLoader(e);
    if (i) {
      const c = i.context;
      if (c && c.url === e.url && c.level === e.level) {
        this.hls.logger.trace("[playlist-loader]: playlist request ongoing");
        return;
      }
      this.hls.logger.log(`[playlist-loader]: aborting previous loader for type: ${e.type}`), i.abort();
    }
    let r;
    if (e.type === j.MANIFEST ? r = s.manifestLoadPolicy.default : r = ae({}, s.playlistLoadPolicy.default, {
      timeoutRetry: null,
      errorRetry: null
    }), i = this.createInternalLoader(e), O((t = e.deliveryDirectives) == null ? void 0 : t.part)) {
      let c;
      if (e.type === j.LEVEL && e.level !== null ? c = this.hls.levels[e.level].details : e.type === j.AUDIO_TRACK && e.id !== null ? c = this.hls.audioTracks[e.id].details : e.type === j.SUBTITLE_TRACK && e.id !== null && (c = this.hls.subtitleTracks[e.id].details), c) {
        const h = c.partTarget, u = c.targetduration;
        if (h && u) {
          const d = Math.max(h * 3, u * 0.8) * 1e3;
          r = ae({}, r, {
            maxTimeToFirstByteMs: Math.min(d, r.maxTimeToFirstByteMs),
            maxLoadTimeMs: Math.min(d, r.maxTimeToFirstByteMs)
          });
        }
      }
    }
    const a = r.errorRetry || r.timeoutRetry || {}, o = {
      loadPolicy: r,
      timeout: r.maxLoadTimeMs,
      maxRetry: a.maxNumRetry || 0,
      retryDelay: a.retryDelayMs || 0,
      maxRetryDelay: a.maxRetryDelayMs || 0
    }, l = {
      onSuccess: (c, h, u, d) => {
        const g = this.getInternalLoader(u);
        this.resetInternalLoader(u.type);
        const f = c.data;
        if (f.indexOf("#EXTM3U") !== 0) {
          this.handleManifestParsingError(c, u, new Error("no EXTM3U delimiter"), d || null, h);
          return;
        }
        h.parsing.start = performance.now(), Fe.isMediaPlaylist(f) ? this.handleTrackOrLevelPlaylist(c, h, u, d || null, g) : this.handleMasterPlaylist(c, h, u, d);
      },
      onError: (c, h, u, d) => {
        this.handleNetworkError(h, u, !1, c, d);
      },
      onTimeout: (c, h, u) => {
        this.handleNetworkError(h, u, !0, void 0, c);
      }
    };
    i.load(e, o, l);
  }
  handleMasterPlaylist(e, t, s, i) {
    const r = this.hls, a = e.data, o = As(e, s), l = Fe.parseMasterPlaylist(a, o);
    if (l.playlistParsingError) {
      this.handleManifestParsingError(e, s, l.playlistParsingError, i, t);
      return;
    }
    const {
      contentSteering: c,
      levels: h,
      sessionData: u,
      sessionKeys: d,
      startTimeOffset: g,
      variableList: f
    } = l;
    this.variableList = f;
    const {
      AUDIO: m = [],
      SUBTITLES: y,
      "CLOSED-CAPTIONS": E
    } = Fe.parseMasterPlaylistMedia(a, o, l);
    m.length && !m.some((T) => !T.url) && h[0].audioCodec && !h[0].attrs.AUDIO && (this.hls.logger.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), m.unshift({
      type: "main",
      name: "main",
      groupId: "main",
      default: !1,
      autoselect: !1,
      forced: !1,
      id: -1,
      attrs: new ne({}),
      bitrate: 0,
      url: ""
    })), r.trigger(p.MANIFEST_LOADED, {
      levels: h,
      audioTracks: m,
      subtitles: y,
      captions: E,
      contentSteering: c,
      url: o,
      stats: t,
      networkDetails: i,
      sessionData: u,
      sessionKeys: d,
      startTimeOffset: g,
      variableList: f
    });
  }
  handleTrackOrLevelPlaylist(e, t, s, i, r) {
    const a = this.hls, {
      id: o,
      level: l,
      type: c
    } = s, h = As(e, s), u = O(l) ? l : O(o) ? o : 0, d = cr(s), g = Fe.parseLevelPlaylist(e.data, h, u, d, 0, this.variableList);
    if (c === j.MANIFEST) {
      const f = {
        attrs: new ne({}),
        bitrate: 0,
        details: g,
        name: "",
        url: h
      };
      a.trigger(p.MANIFEST_LOADED, {
        levels: [f],
        audioTracks: [],
        url: h,
        stats: t,
        networkDetails: i,
        sessionData: null,
        sessionKeys: null,
        contentSteering: null,
        startTimeOffset: null,
        variableList: null
      });
    }
    t.parsing.end = performance.now(), s.levelDetails = g, this.handlePlaylistLoaded(g, e, t, s, i, r);
  }
  handleManifestParsingError(e, t, s, i, r) {
    this.hls.trigger(p.ERROR, {
      type: $.NETWORK_ERROR,
      details: L.MANIFEST_PARSING_ERROR,
      fatal: t.type === j.MANIFEST,
      url: e.url,
      err: s,
      error: s,
      reason: s.message,
      response: e,
      context: t,
      networkDetails: i,
      stats: r
    });
  }
  handleNetworkError(e, t, s = !1, i, r) {
    let a = `A network ${s ? "timeout" : "error" + (i ? " (status " + i.code + ")" : "")} occurred while loading ${e.type}`;
    e.type === j.LEVEL ? a += `: ${e.level} id: ${e.id}` : (e.type === j.AUDIO_TRACK || e.type === j.SUBTITLE_TRACK) && (a += ` id: ${e.id} group-id: "${e.groupId}"`);
    const o = new Error(a);
    this.hls.logger.warn(`[playlist-loader]: ${a}`);
    let l = L.UNKNOWN, c = !1;
    const h = this.getInternalLoader(e);
    switch (e.type) {
      case j.MANIFEST:
        l = s ? L.MANIFEST_LOAD_TIMEOUT : L.MANIFEST_LOAD_ERROR, c = !0;
        break;
      case j.LEVEL:
        l = s ? L.LEVEL_LOAD_TIMEOUT : L.LEVEL_LOAD_ERROR, c = !1;
        break;
      case j.AUDIO_TRACK:
        l = s ? L.AUDIO_TRACK_LOAD_TIMEOUT : L.AUDIO_TRACK_LOAD_ERROR, c = !1;
        break;
      case j.SUBTITLE_TRACK:
        l = s ? L.SUBTITLE_TRACK_LOAD_TIMEOUT : L.SUBTITLE_LOAD_ERROR, c = !1;
        break;
    }
    h && this.resetInternalLoader(e.type);
    const u = {
      type: $.NETWORK_ERROR,
      details: l,
      fatal: c,
      url: e.url,
      loader: h,
      context: e,
      error: o,
      networkDetails: t,
      stats: r
    };
    if (i) {
      const d = (t == null ? void 0 : t.url) || e.url;
      u.response = he({
        url: d,
        data: void 0
      }, i);
    }
    this.hls.trigger(p.ERROR, u);
  }
  handlePlaylistLoaded(e, t, s, i, r, a) {
    const o = this.hls, {
      type: l,
      level: c,
      id: h,
      groupId: u,
      deliveryDirectives: d
    } = i, g = As(t, i), f = cr(i), m = typeof i.level == "number" && f === N.MAIN ? c : void 0;
    if (!e.fragments.length) {
      const E = new Error("No Segments found in Playlist");
      o.trigger(p.ERROR, {
        type: $.NETWORK_ERROR,
        details: L.LEVEL_EMPTY_ERROR,
        fatal: !1,
        url: g,
        error: E,
        reason: E.message,
        response: t,
        context: i,
        level: m,
        parent: f,
        networkDetails: r,
        stats: s
      });
      return;
    }
    e.targetduration || (e.playlistParsingError = new Error("Missing Target Duration"));
    const y = e.playlistParsingError;
    if (y) {
      o.trigger(p.ERROR, {
        type: $.NETWORK_ERROR,
        details: L.LEVEL_PARSING_ERROR,
        fatal: !1,
        url: g,
        error: y,
        reason: y.message,
        response: t,
        context: i,
        level: m,
        parent: f,
        networkDetails: r,
        stats: s
      });
      return;
    }
    switch (e.live && a && (a.getCacheAge && (e.ageHeader = a.getCacheAge() || 0), (!a.getCacheAge || isNaN(e.ageHeader)) && (e.ageHeader = 0)), l) {
      case j.MANIFEST:
      case j.LEVEL:
        o.trigger(p.LEVEL_LOADED, {
          details: e,
          level: m || 0,
          id: h || 0,
          stats: s,
          networkDetails: r,
          deliveryDirectives: d
        });
        break;
      case j.AUDIO_TRACK:
        o.trigger(p.AUDIO_TRACK_LOADED, {
          details: e,
          id: h || 0,
          groupId: u || "",
          stats: s,
          networkDetails: r,
          deliveryDirectives: d
        });
        break;
      case j.SUBTITLE_TRACK:
        o.trigger(p.SUBTITLE_TRACK_LOADED, {
          details: e,
          id: h || 0,
          groupId: u || "",
          stats: s,
          networkDetails: r,
          deliveryDirectives: d
        });
        break;
    }
  }
}
function Sn(n, e) {
  let t;
  try {
    t = new Event("addtrack");
  } catch {
    t = document.createEvent("Event"), t.initEvent("addtrack", !1, !1);
  }
  t.track = n, e.dispatchEvent(t);
}
function vn(n, e) {
  const t = n.mode;
  if (t === "disabled" && (n.mode = "hidden"), n.cues && !n.cues.getCueById(e.id))
    try {
      if (n.addCue(e), !n.cues.getCueById(e.id))
        throw new Error(`addCue is failed for: ${e}`);
    } catch (s) {
      q.debug(`[texttrack-utils]: ${s}`);
      try {
        const i = new self.TextTrackCue(e.startTime, e.endTime, e.text);
        i.id = e.id, n.addCue(i);
      } catch (i) {
        q.debug(`[texttrack-utils]: Legacy TextTrackCue fallback failed: ${i}`);
      }
    }
  t === "disabled" && (n.mode = t);
}
function nt(n) {
  const e = n.mode;
  if (e === "disabled" && (n.mode = "hidden"), n.cues)
    for (let t = n.cues.length; t--; )
      n.removeCue(n.cues[t]);
  e === "disabled" && (n.mode = e);
}
function Ws(n, e, t, s) {
  const i = n.mode;
  if (i === "disabled" && (n.mode = "hidden"), n.cues && n.cues.length > 0) {
    const r = Io(n.cues, e, t);
    for (let a = 0; a < r.length; a++)
      (!s || s(r[a])) && n.removeCue(r[a]);
  }
  i === "disabled" && (n.mode = i);
}
function bo(n, e) {
  if (e < n[0].startTime)
    return 0;
  const t = n.length - 1;
  if (e > n[t].endTime)
    return -1;
  let s = 0, i = t;
  for (; s <= i; ) {
    const r = Math.floor((i + s) / 2);
    if (e < n[r].startTime)
      i = r - 1;
    else if (e > n[r].startTime && s < t)
      s = r + 1;
    else
      return r;
  }
  return n[s].startTime - e < e - n[i].startTime ? s : i;
}
function Io(n, e, t) {
  const s = [], i = bo(n, e);
  if (i > -1)
    for (let r = i, a = n.length; r < a; r++) {
      const o = n[r];
      if (o.startTime >= e && o.endTime <= t)
        s.push(o);
      else if (o.startTime > t)
        return s;
    }
  return s;
}
function Ht(n) {
  const e = [];
  for (let t = 0; t < n.length; t++) {
    const s = n[t];
    (s.kind === "subtitles" || s.kind === "captions") && s.label && e.push(n[t]);
  }
  return e;
}
var Ie = {
  audioId3: "org.id3",
  dateRange: "com.apple.quicktime.HLS",
  emsg: "https://aomedia.org/emsg/ID3"
};
function Do(n) {
  if (n.size < 2)
    return;
  const e = Se(n.data, !0), t = new Uint8Array(n.data.subarray(e.length + 1));
  return {
    key: n.type,
    info: e,
    data: t.buffer
  };
}
function Co(n) {
  if (n.size < 2)
    return;
  if (n.type === "TXXX") {
    let t = 1;
    const s = Se(n.data.subarray(t), !0);
    t += s.length + 1;
    const i = Se(n.data.subarray(t));
    return {
      key: n.type,
      info: s,
      data: i
    };
  }
  const e = Se(n.data.subarray(1));
  return {
    key: n.type,
    info: "",
    data: e
  };
}
function wo(n) {
  if (n.type === "WXXX") {
    if (n.size < 2)
      return;
    let t = 1;
    const s = Se(n.data.subarray(t), !0);
    t += s.length + 1;
    const i = Se(n.data.subarray(t));
    return {
      key: n.type,
      info: s,
      data: i
    };
  }
  const e = Se(n.data);
  return {
    key: n.type,
    info: "",
    data: e
  };
}
function Ls(n, e = 0, t = 1 / 0) {
  return ko(n, e, t, Uint8Array);
}
function ko(n, e, t, s) {
  const i = Po(n);
  let r = 1;
  "BYTES_PER_ELEMENT" in s && (r = s.BYTES_PER_ELEMENT);
  const a = Fo(n) ? n.byteOffset : 0, o = (a + n.byteLength) / r, l = (a + e) / r, c = Math.floor(Math.max(0, Math.min(l, o))), h = Math.floor(Math.min(c + Math.max(t, 0), o));
  return new s(i, c, h - c);
}
function Po(n) {
  return n instanceof ArrayBuffer ? n : n.buffer;
}
function Fo(n) {
  return n && n.buffer instanceof ArrayBuffer && n.byteLength !== void 0 && n.byteOffset !== void 0;
}
function Oo(n) {
  return n instanceof ArrayBuffer ? n : n.byteOffset == 0 && n.byteLength == n.buffer.byteLength ? n.buffer : new Uint8Array(n).buffer;
}
function Mo(n) {
  return btoa(String.fromCharCode(...n));
}
function An(n, e) {
  if (n < 0)
    return -An(-n, e);
  const t = Math.pow(10, e);
  if (Math.abs(n * t % 1 - 0.5) < Number.EPSILON) {
    const i = Math.floor(n * t);
    return (i % 2 === 0 ? i : i + 1) / t;
  } else
    return Math.round(n * t) / t;
}
function No(n, e) {
  const t = new URL(n), s = new URL(e);
  if (t.origin !== s.origin)
    return n;
  const i = t.pathname.split("/").slice(1), r = s.pathname.split("/").slice(1, -1);
  for (; i[0] === r[0]; )
    i.shift(), r.shift();
  for (; r.length; )
    r.shift(), i.unshift("..");
  return i.join("/");
}
function Uo() {
  try {
    return crypto.randomUUID();
  } catch {
    try {
      const e = URL.createObjectURL(new Blob()), t = e.toString();
      return URL.revokeObjectURL(e), t.slice(t.lastIndexOf("/") + 1);
    } catch {
      let t = (/* @__PURE__ */ new Date()).getTime();
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (i) => {
        const r = (t + Math.random() * 16) % 16 | 0;
        return t = Math.floor(t / 16), (i == "x" ? r : r & 3 | 8).toString(16);
      });
    }
  }
}
function Bo(n) {
  const e = {
    key: n.type,
    description: "",
    data: "",
    mimeType: null,
    pictureType: null
  }, t = 3;
  if (n.size < 2)
    return;
  if (n.data[0] !== t) {
    console.log("Ignore frame with unrecognized character encoding");
    return;
  }
  const s = n.data.subarray(1).indexOf(0);
  if (s === -1)
    return;
  const i = Se(Ls(n.data, 1, s)), r = n.data[2 + s], a = n.data.subarray(3 + s).indexOf(0);
  if (a === -1)
    return;
  const o = Se(Ls(n.data, 3 + s, a));
  let l;
  return i === "-->" ? l = Se(Ls(n.data, 4 + s + a)) : l = Oo(n.data.subarray(4 + s + a)), e.mimeType = i, e.pictureType = r, e.description = o, e.data = l, e;
}
function $o(n) {
  return n.type === "PRIV" ? Do(n) : n.type[0] === "W" ? wo(n) : n.type === "APIC" ? Bo(n) : Co(n);
}
function ds(n, e) {
  let t = 0;
  return t = (n[e] & 127) << 21, t |= (n[e + 1] & 127) << 14, t |= (n[e + 2] & 127) << 7, t |= n[e + 3] & 127, t;
}
function Go(n) {
  const e = String.fromCharCode(n[0], n[1], n[2], n[3]), t = ds(n, 4), s = 10;
  return {
    type: e,
    size: t,
    data: n.subarray(s, s + t)
  };
}
function Ln(n, e) {
  return e + 10 <= n.length && n[e] === 51 && n[e + 1] === 68 && n[e + 2] === 73 && n[e + 3] < 255 && n[e + 4] < 255 && n[e + 6] < 128 && n[e + 7] < 128 && n[e + 8] < 128 && n[e + 9] < 128;
}
function ui(n, e) {
  return e + 10 <= n.length && n[e] === 73 && n[e + 1] === 68 && n[e + 2] === 51 && n[e + 3] < 255 && n[e + 4] < 255 && n[e + 6] < 128 && n[e + 7] < 128 && n[e + 8] < 128 && n[e + 9] < 128;
}
const Ft = 10, Ko = 10;
function Rn(n) {
  let e = 0;
  const t = [];
  for (; ui(n, e); ) {
    const s = ds(n, e + 6);
    n[e + 5] >> 6 & 1 && (e += Ft), e += Ft;
    const i = e + s;
    for (; e + Ko < i; ) {
      const r = Go(n.subarray(e)), a = $o(r);
      a && t.push(a), e += r.size + Ft;
    }
    Ln(n, e) && (e += Ft);
  }
  return t;
}
function _n(n) {
  return n && n.key === "PRIV" && n.info === "com.apple.streaming.transportStreamTimestamp";
}
const Vo = 0.25;
function Ys() {
  if (!(typeof self > "u"))
    return self.VTTCue || self.TextTrackCue;
}
function hr(n, e, t, s, i) {
  let r = new n(e, t, "");
  try {
    r.value = s, i && (r.type = i);
  } catch {
    r = new n(e, t, JSON.stringify(i ? he({
      type: i
    }, s) : s));
  }
  return r;
}
const Ot = (() => {
  const n = Ys();
  try {
    n && new n(0, Number.POSITIVE_INFINITY, "");
  } catch {
    return Number.MAX_VALUE;
  }
  return Number.POSITIVE_INFINITY;
})();
function Ho(n) {
  return Uint8Array.from(n.replace(/^0x/, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")).buffer;
}
class Wo {
  constructor(e) {
    this.hls = void 0, this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = e, this._registerListeners();
  }
  destroy() {
    this._unregisterListeners(), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = null;
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e.on(p.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(p.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(p.MANIFEST_LOADING, this.onManifestLoading, this), e.on(p.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), e.on(p.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(p.LEVEL_UPDATED, this.onLevelUpdated, this), e.on(p.LEVEL_PTS_UPDATED, this.onLevelPtsUpdated, this);
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(p.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(p.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(p.MANIFEST_LOADING, this.onManifestLoading, this), e.off(p.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), e.off(p.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(p.LEVEL_UPDATED, this.onLevelUpdated, this), e.off(p.LEVEL_PTS_UPDATED, this.onLevelPtsUpdated, this);
  }
  // Add ID3 metatadata text track.
  onMediaAttached(e, t) {
    this.media = t.media;
  }
  onMediaDetaching() {
    this.id3Track && (nt(this.id3Track), this.id3Track = null), this.media = null, this.dateRangeCuesAppended = {};
  }
  onManifestLoading() {
    this.dateRangeCuesAppended = {};
  }
  createTrack(e) {
    const t = this.getID3Track(e.textTracks);
    return t.mode = "hidden", t;
  }
  getID3Track(e) {
    if (this.media) {
      for (let t = 0; t < e.length; t++) {
        const s = e[t];
        if (s.kind === "metadata" && s.label === "id3")
          return Sn(s, this.media), s;
      }
      return this.media.addTextTrack("metadata", "id3");
    }
  }
  onFragParsingMetadata(e, t) {
    if (!this.media)
      return;
    const {
      hls: {
        config: {
          enableEmsgMetadataCues: s,
          enableID3MetadataCues: i
        }
      }
    } = this;
    if (!s && !i)
      return;
    const {
      samples: r
    } = t;
    this.id3Track || (this.id3Track = this.createTrack(this.media));
    const a = Ys();
    if (a)
      for (let o = 0; o < r.length; o++) {
        const l = r[o].type;
        if (l === Ie.emsg && !s || !i)
          continue;
        const c = Rn(r[o].data);
        if (c) {
          const h = r[o].pts;
          let u = h + r[o].duration;
          u > Ot && (u = Ot), u - h <= 0 && (u = h + Vo);
          for (let g = 0; g < c.length; g++) {
            const f = c[g];
            if (!_n(f)) {
              this.updateId3CueEnds(h, l);
              const m = hr(a, h, u, f, l);
              m && this.id3Track.addCue(m);
            }
          }
        }
      }
  }
  updateId3CueEnds(e, t) {
    var s;
    const i = (s = this.id3Track) == null ? void 0 : s.cues;
    if (i)
      for (let r = i.length; r--; ) {
        const a = i[r];
        a.type === t && a.startTime < e && a.endTime === Ot && (a.endTime = e);
      }
  }
  onBufferFlushing(e, {
    startOffset: t,
    endOffset: s,
    type: i
  }) {
    const {
      id3Track: r,
      hls: a
    } = this;
    if (!a)
      return;
    const {
      config: {
        enableEmsgMetadataCues: o,
        enableID3MetadataCues: l
      }
    } = a;
    if (r && (o || l)) {
      let c;
      i === "audio" ? c = (h) => h.type === Ie.audioId3 && l : i === "video" ? c = (h) => h.type === Ie.emsg && o : c = (h) => h.type === Ie.audioId3 && l || h.type === Ie.emsg && o, Ws(r, t, s, c);
    }
  }
  onLevelUpdated(e, {
    details: t
  }) {
    this.updateDateRangeCues(t, !0);
  }
  onLevelPtsUpdated(e, t) {
    Math.abs(t.drift) > 0.01 && this.updateDateRangeCues(t.details);
  }
  updateDateRangeCues(e, t) {
    if (!this.media || !e.hasProgramDateTime || !this.hls.config.enableDateRangeMetadataCues)
      return;
    const {
      dateRangeCuesAppended: s,
      id3Track: i
    } = this, {
      dateRanges: r
    } = e, a = Object.keys(r);
    if (i && t) {
      const c = Object.keys(s).filter((h) => !a.includes(h));
      for (let h = c.length; h--; ) {
        const u = c[h];
        Object.keys(s[u].cues).forEach((d) => {
          i.removeCue(s[u].cues[d]);
        }), delete s[u];
      }
    }
    const o = e.fragments[e.fragments.length - 1];
    if (a.length === 0 || !O(o == null ? void 0 : o.programDateTime))
      return;
    this.id3Track || (this.id3Track = this.createTrack(this.media));
    const l = Ys();
    for (let c = 0; c < a.length; c++) {
      const h = a[c], u = r[h], d = u.startTime, g = s[h], f = (g == null ? void 0 : g.cues) || {};
      let m = (g == null ? void 0 : g.durationKnown) || !1, y = Ot;
      const {
        duration: E,
        endDate: x
      } = u;
      if (x && E !== null)
        y = d + E, m = !0;
      else if (u.endOnNext && !m) {
        const _ = a.reduce((A, D) => {
          if (D !== u.id) {
            const v = r[D];
            if (v.class === u.class && v.startDate > u.startDate && (!A || u.startDate < A.startDate))
              return v;
          }
          return A;
        }, null);
        _ && (y = _.startTime, m = !0);
      }
      const T = Object.keys(u.attr);
      for (let _ = 0; _ < T.length; _++) {
        const A = T[_];
        if (!Ga(A))
          continue;
        const D = f[A];
        if (D)
          m && !g.durationKnown ? D.endTime = y : Math.abs(D.startTime - d) > 0.01 && (D.startTime = d, D.endTime = y);
        else if (l) {
          let v = u.attr[A];
          Ka(A) && (v = Ho(v));
          const b = hr(l, d, y, {
            key: A,
            data: v
          }, Ie.dateRange);
          b && (b.id = h, this.id3Track.addCue(b), f[A] = b);
        }
      }
      s[h] = {
        cues: f,
        dateRange: u,
        durationKnown: m
      };
    }
  }
}
class Yo {
  constructor(e) {
    this.hls = void 0, this.config = void 0, this.media = null, this.levelDetails = null, this.currentTime = 0, this.stallCount = 0, this._latency = null, this._targetLatencyUpdated = !1, this.onTimeupdate = () => {
      const {
        media: t,
        levelDetails: s
      } = this;
      if (!t || !s)
        return;
      this.currentTime = t.currentTime;
      const i = this.computeLatency();
      if (i === null)
        return;
      this._latency = i;
      const {
        lowLatencyMode: r,
        maxLiveSyncPlaybackRate: a
      } = this.config;
      if (!r || a === 1 || !s.live)
        return;
      const o = this.targetLatency;
      if (o === null)
        return;
      const l = i - o, c = Math.min(this.maxLatency, o + s.targetduration);
      if (l < c && l > 0.05 && this.forwardBufferLength > 1) {
        const u = Math.min(2, Math.max(1, a)), d = Math.round(2 / (1 + Math.exp(-0.75 * l - this.edgeStalled)) * 20) / 20;
        t.playbackRate = Math.min(u, Math.max(1, d));
      } else t.playbackRate !== 1 && t.playbackRate !== 0 && (t.playbackRate = 1);
    }, this.hls = e, this.config = e.config, this.registerListeners();
  }
  get latency() {
    return this._latency || 0;
  }
  get maxLatency() {
    const {
      config: e,
      levelDetails: t
    } = this;
    return e.liveMaxLatencyDuration !== void 0 ? e.liveMaxLatencyDuration : t ? e.liveMaxLatencyDurationCount * t.targetduration : 0;
  }
  get targetLatency() {
    const {
      levelDetails: e
    } = this;
    if (e === null)
      return null;
    const {
      holdBack: t,
      partHoldBack: s,
      targetduration: i
    } = e, {
      liveSyncDuration: r,
      liveSyncDurationCount: a,
      lowLatencyMode: o
    } = this.config, l = this.hls.userConfig;
    let c = o && s || t;
    (this._targetLatencyUpdated || l.liveSyncDuration || l.liveSyncDurationCount || c === 0) && (c = r !== void 0 ? r : a * i);
    const h = i;
    return c + Math.min(this.stallCount * this.config.liveSyncOnStallIncrease, h);
  }
  set targetLatency(e) {
    this.stallCount = 0, this.config.liveSyncDuration = e, this._targetLatencyUpdated = !0;
  }
  get liveSyncPosition() {
    const e = this.estimateLiveEdge(), t = this.targetLatency, s = this.levelDetails;
    if (e === null || t === null || s === null)
      return null;
    const i = s.edge, r = e - t - this.edgeStalled, a = i - s.totalduration, o = i - (this.config.lowLatencyMode && s.partTarget || s.targetduration);
    return Math.min(Math.max(a, r), o);
  }
  get drift() {
    const {
      levelDetails: e
    } = this;
    return e === null ? 1 : e.drift;
  }
  get edgeStalled() {
    const {
      levelDetails: e
    } = this;
    if (e === null)
      return 0;
    const t = (this.config.lowLatencyMode && e.partTarget || e.targetduration) * 3;
    return Math.max(e.age - t, 0);
  }
  get forwardBufferLength() {
    const {
      media: e,
      levelDetails: t
    } = this;
    if (!e || !t)
      return 0;
    const s = e.buffered.length;
    return (s ? e.buffered.end(s - 1) : t.edge) - this.currentTime;
  }
  destroy() {
    this.unregisterListeners(), this.onMediaDetaching(), this.levelDetails = null, this.hls = null;
  }
  registerListeners() {
    this.hls.on(p.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(p.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.on(p.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(p.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.on(p.ERROR, this.onError, this);
  }
  unregisterListeners() {
    this.hls.off(p.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(p.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.off(p.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(p.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.off(p.ERROR, this.onError, this);
  }
  onMediaAttached(e, t) {
    this.media = t.media, this.media.addEventListener("timeupdate", this.onTimeupdate);
  }
  onMediaDetaching() {
    this.media && (this.media.removeEventListener("timeupdate", this.onTimeupdate), this.media = null);
  }
  onManifestLoading() {
    this.levelDetails = null, this._latency = null, this.stallCount = 0;
  }
  onLevelUpdated(e, {
    details: t
  }) {
    this.levelDetails = t, t.advanced && this.onTimeupdate(), !t.live && this.media && this.media.removeEventListener("timeupdate", this.onTimeupdate);
  }
  onError(e, t) {
    var s;
    t.details === L.BUFFER_STALLED_ERROR && (this.stallCount++, (s = this.levelDetails) != null && s.live && this.hls.logger.warn("[latency-controller]: Stall detected, adjusting target latency"));
  }
  estimateLiveEdge() {
    const {
      levelDetails: e
    } = this;
    return e === null ? null : e.edge + e.age;
  }
  computeLatency() {
    const e = this.estimateLiveEdge();
    return e === null ? null : e - this.currentTime;
  }
}
const qs = ["NONE", "TYPE-0", "TYPE-1", null];
function qo(n) {
  return qs.indexOf(n) > -1;
}
const ns = ["SDR", "PQ", "HLG"];
function jo(n) {
  return !!n && ns.indexOf(n) > -1;
}
var Wt = {
  No: "",
  Yes: "YES",
  v2: "v2"
};
function ur(n) {
  const {
    canSkipUntil: e,
    canSkipDateRanges: t,
    age: s
  } = n, i = s < e / 2;
  return e && i ? t ? Wt.v2 : Wt.Yes : Wt.No;
}
class dr {
  constructor(e, t, s) {
    this.msn = void 0, this.part = void 0, this.skip = void 0, this.msn = e, this.part = t, this.skip = s;
  }
  addDirectives(e) {
    const t = new self.URL(e);
    return this.msn !== void 0 && t.searchParams.set("_HLS_msn", this.msn.toString()), this.part !== void 0 && t.searchParams.set("_HLS_part", this.part.toString()), this.skip && t.searchParams.set("_HLS_skip", this.skip), t.href;
  }
}
class ht {
  constructor(e) {
    this._attrs = void 0, this.audioCodec = void 0, this.bitrate = void 0, this.codecSet = void 0, this.url = void 0, this.frameRate = void 0, this.height = void 0, this.id = void 0, this.name = void 0, this.videoCodec = void 0, this.width = void 0, this.details = void 0, this.fragmentError = 0, this.loadError = 0, this.loaded = void 0, this.realBitrate = 0, this.supportedPromise = void 0, this.supportedResult = void 0, this._avgBitrate = 0, this._audioGroups = void 0, this._subtitleGroups = void 0, this._urlId = 0, this.url = [e.url], this._attrs = [e.attrs], this.bitrate = e.bitrate, e.details && (this.details = e.details), this.id = e.id || 0, this.name = e.name, this.width = e.width || 0, this.height = e.height || 0, this.frameRate = e.attrs.optionalFloat("FRAME-RATE", 0), this._avgBitrate = e.attrs.decimalInteger("AVERAGE-BANDWIDTH"), this.audioCodec = e.audioCodec, this.videoCodec = e.videoCodec, this.codecSet = [e.videoCodec, e.audioCodec].filter((t) => !!t).map((t) => t.substring(0, 4)).join(","), this.addGroupId("audio", e.attrs.AUDIO), this.addGroupId("text", e.attrs.SUBTITLES);
  }
  get maxBitrate() {
    return Math.max(this.realBitrate, this.bitrate);
  }
  get averageBitrate() {
    return this._avgBitrate || this.realBitrate || this.bitrate;
  }
  get attrs() {
    return this._attrs[0];
  }
  get codecs() {
    return this.attrs.CODECS || "";
  }
  get pathwayId() {
    return this.attrs["PATHWAY-ID"] || ".";
  }
  get videoRange() {
    return this.attrs["VIDEO-RANGE"] || "SDR";
  }
  get score() {
    return this.attrs.optionalFloat("SCORE", 0);
  }
  get uri() {
    return this.url[0] || "";
  }
  hasAudioGroup(e) {
    return fr(this._audioGroups, e);
  }
  hasSubtitleGroup(e) {
    return fr(this._subtitleGroups, e);
  }
  get audioGroups() {
    return this._audioGroups;
  }
  get subtitleGroups() {
    return this._subtitleGroups;
  }
  addGroupId(e, t) {
    if (t) {
      if (e === "audio") {
        let s = this._audioGroups;
        s || (s = this._audioGroups = []), s.indexOf(t) === -1 && s.push(t);
      } else if (e === "text") {
        let s = this._subtitleGroups;
        s || (s = this._subtitleGroups = []), s.indexOf(t) === -1 && s.push(t);
      }
    }
  }
  // Deprecated methods (retained for backwards compatibility)
  get urlId() {
    return 0;
  }
  set urlId(e) {
  }
  get audioGroupIds() {
    return this.audioGroups ? [this.audioGroupId] : void 0;
  }
  get textGroupIds() {
    return this.subtitleGroups ? [this.textGroupId] : void 0;
  }
  get audioGroupId() {
    var e;
    return (e = this.audioGroups) == null ? void 0 : e[0];
  }
  get textGroupId() {
    var e;
    return (e = this.subtitleGroups) == null ? void 0 : e[0];
  }
  addFallback() {
  }
}
function fr(n, e) {
  return !e || !n ? !1 : n.indexOf(e) !== -1;
}
function Rs(n, e) {
  const t = e.startPTS;
  if (O(t)) {
    let s = 0, i;
    e.sn > n.sn ? (s = t - n.start, i = n) : (s = n.start - t, i = e), i.duration !== s && (i.duration = s);
  } else e.sn > n.sn ? n.cc === e.cc && n.minEndPTS ? e.start = n.start + (n.minEndPTS - n.start) : e.start = n.start + n.duration : e.start = Math.max(n.start - e.duration, 0);
}
function bn(n, e, t, s, i, r) {
  s - t <= 0 && (q.warn("Fragment should have a positive duration", e), s = t + e.duration, r = i + e.duration);
  let o = t, l = s;
  const c = e.startPTS, h = e.endPTS;
  if (O(c)) {
    const y = Math.abs(c - t);
    O(e.deltaPTS) ? e.deltaPTS = Math.max(y, e.deltaPTS) : e.deltaPTS = y, o = Math.max(t, c), t = Math.min(t, c), i = Math.min(i, e.startDTS), l = Math.min(s, h), s = Math.max(s, h), r = Math.max(r, e.endDTS);
  }
  const u = t - e.start;
  e.start !== 0 && (e.start = t), e.duration = s - e.start, e.startPTS = t, e.maxStartPTS = o, e.startDTS = i, e.endPTS = s, e.minEndPTS = l, e.endDTS = r;
  const d = e.sn;
  if (!n || d < n.startSN || d > n.endSN)
    return 0;
  let g;
  const f = d - n.startSN, m = n.fragments;
  for (m[f] = e, g = f; g > 0; g--)
    Rs(m[g], m[g - 1]);
  for (g = f; g < m.length - 1; g++)
    Rs(m[g], m[g + 1]);
  return n.fragmentHint && Rs(m[m.length - 1], n.fragmentHint), n.PTSKnown = n.alignedSliding = !0, u;
}
function zo(n, e) {
  let t = null;
  const s = n.fragments;
  for (let c = s.length - 1; c >= 0; c--) {
    const h = s[c].initSegment;
    if (h) {
      t = h;
      break;
    }
  }
  n.fragmentHint && delete n.fragmentHint.endPTS;
  let i = 0, r;
  Jo(n, e, (c, h) => {
    c.relurl && (i = c.cc - h.cc), O(c.startPTS) && O(c.endPTS) && (h.start = h.startPTS = c.startPTS, h.startDTS = c.startDTS, h.maxStartPTS = c.maxStartPTS, h.endPTS = c.endPTS, h.endDTS = c.endDTS, h.minEndPTS = c.minEndPTS, h.duration = c.endPTS - c.startPTS, h.duration && (r = h), e.PTSKnown = e.alignedSliding = !0), h.elementaryStreams = c.elementaryStreams, h.loader = c.loader, h.stats = c.stats, c.initSegment && (h.initSegment = c.initSegment, t = c.initSegment);
  });
  const a = e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments;
  if (t && a.forEach((c) => {
    var h;
    c && (!c.initSegment || c.initSegment.relurl === ((h = t) == null ? void 0 : h.relurl)) && (c.initSegment = t);
  }), e.skippedSegments)
    if (e.deltaUpdateFailed = e.fragments.some((c) => !c), e.deltaUpdateFailed) {
      q.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
      for (let c = e.skippedSegments; c--; )
        e.fragments.shift();
      e.startSN = e.fragments[0].sn, e.startCC = e.fragments[0].cc;
    } else {
      e.canSkipDateRanges && (e.dateRanges = Xo(n.dateRanges, e));
      const c = n.fragments.filter((h) => h.rawProgramDateTime);
      if (n.hasProgramDateTime && !e.hasProgramDateTime)
        for (let h = 1; h < a.length; h++)
          a[h].programDateTime === null && Hs(a[h], a[h - 1], c);
      xn(c, e);
    }
  const o = e.fragments;
  if (i) {
    q.warn("discontinuity sliding from playlist, take drift into account");
    for (let c = 0; c < o.length; c++)
      o[c].cc += i;
  }
  e.skippedSegments && (e.startCC = e.fragments[0].cc), Qo(n.partList, e.partList, (c, h) => {
    h.elementaryStreams = c.elementaryStreams, h.stats = c.stats;
  }), r ? bn(e, r, r.startPTS, r.endPTS, r.startDTS, r.endDTS) : In(n, e), o.length && (e.totalduration = e.edge - o[0].start), e.driftStartTime = n.driftStartTime, e.driftStart = n.driftStart;
  const l = e.advancedDateTime;
  if (e.advanced && l) {
    const c = e.edge;
    e.driftStart || (e.driftStartTime = l, e.driftStart = c), e.driftEndTime = l, e.driftEnd = c;
  } else
    e.driftEndTime = n.driftEndTime, e.driftEnd = n.driftEnd, e.advancedDateTime = n.advancedDateTime;
}
function Xo(n, e) {
  const {
    dateRanges: t,
    recentlyRemovedDateranges: s
  } = e, i = ae({}, n);
  s && s.forEach((o) => {
    delete i[o];
  });
  const a = Object.keys(i).length;
  return a && Object.keys(t).forEach((o) => {
    const l = i[o], c = new cn(t[o].attr, l);
    c.isValid ? (i[o] = c, l || (c.tagOrder += a)) : q.warn(`Ignoring invalid Playlist Delta Update DATERANGE tag: "${JSON.stringify(t[o].attr)}"`);
  }), i;
}
function Qo(n, e, t) {
  if (n && e) {
    let s = 0;
    for (let i = 0, r = n.length; i <= r; i++) {
      const a = n[i], o = e[i + s];
      a && o && a.index === o.index && a.fragment.sn === o.fragment.sn ? t(a, o) : s--;
    }
  }
}
function Jo(n, e, t) {
  const s = e.skippedSegments, i = Math.max(n.startSN, e.startSN) - e.startSN, r = (n.fragmentHint ? 1 : 0) + (s ? e.endSN : Math.min(n.endSN, e.endSN)) - e.startSN, a = e.startSN - n.startSN, o = e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments, l = n.fragmentHint ? n.fragments.concat(n.fragmentHint) : n.fragments;
  for (let c = i; c <= r; c++) {
    const h = l[a + c];
    let u = o[c];
    s && !u && h && (u = e.fragments[c] = h), h && u && t(h, u);
  }
}
function In(n, e) {
  const t = e.startSN + e.skippedSegments - n.startSN, s = n.fragments;
  t < 0 || t >= s.length || js(e, s[t].start);
}
function js(n, e) {
  if (e) {
    const t = n.fragments;
    for (let s = n.skippedSegments; s < t.length; s++)
      t[s].start += e;
    n.fragmentHint && (n.fragmentHint.start += e);
  }
}
function Zo(n, e = 1 / 0) {
  let t = 1e3 * n.targetduration;
  if (n.updated) {
    const s = n.fragments;
    if (s.length && t * 4 > e) {
      const r = s[s.length - 1].duration * 1e3;
      r < t && (t = r);
    }
  } else
    t /= 2;
  return Math.round(t);
}
function el(n, e, t) {
  if (!n)
    return null;
  let s = n.fragments[e - n.startSN];
  return s || (s = n.fragmentHint, s && s.sn === e) ? s : e < n.startSN && t && t.sn === e ? t : null;
}
function gr(n, e, t) {
  return n ? Dn(n.partList, e, t) : null;
}
function Dn(n, e, t) {
  if (n)
    for (let s = n.length; s--; ) {
      const i = n[s];
      if (i.index === t && i.fragment.sn === e)
        return i;
    }
  return null;
}
function Cn(n) {
  n.forEach((e, t) => {
    const {
      details: s
    } = e;
    s != null && s.fragments && s.fragments.forEach((i) => {
      i.level = t;
    });
  });
}
function as(n) {
  switch (n.details) {
    case L.FRAG_LOAD_TIMEOUT:
    case L.KEY_LOAD_TIMEOUT:
    case L.LEVEL_LOAD_TIMEOUT:
    case L.MANIFEST_LOAD_TIMEOUT:
      return !0;
  }
  return !1;
}
function mr(n, e) {
  const t = as(e);
  return n.default[`${t ? "timeout" : "error"}Retry`];
}
function di(n, e) {
  const t = n.backoff === "linear" ? 1 : Math.pow(2, e);
  return Math.min(t * n.retryDelayMs, n.maxRetryDelayMs);
}
function pr(n) {
  return he(he({}, n), {
    errorRetry: null,
    timeoutRetry: null
  });
}
function os(n, e, t, s) {
  if (!n)
    return !1;
  const i = s == null ? void 0 : s.code, r = e < n.maxNumRetry && (tl(i) || !!t);
  return n.shouldRetry ? n.shouldRetry(n, e, t, s, r) : r;
}
function tl(n) {
  return n === 0 && navigator.onLine === !1 || !!n && (n < 400 || n > 499);
}
const fi = {
  /**
   * Searches for an item in an array which matches a certain condition.
   * This requires the condition to only match one item in the array,
   * and for the array to be ordered.
   *
   * @param list The array to search.
   * @param comparisonFn
   *      Called and provided a candidate item as the first argument.
   *      Should return:
   *          > -1 if the item should be located at a lower index than the provided item.
   *          > 1 if the item should be located at a higher index than the provided item.
   *          > 0 if the item is the item you're looking for.
   *
   * @returns the object if found, otherwise returns null
   */
  search: function(n, e) {
    let t = 0, s = n.length - 1, i = null, r = null;
    for (; t <= s; ) {
      i = (t + s) / 2 | 0, r = n[i];
      const a = e(r);
      if (a > 0)
        t = i + 1;
      else if (a < 0)
        s = i - 1;
      else
        return r;
    }
    return null;
  }
};
function sl(n, e, t) {
  if (e === null || !Array.isArray(n) || !n.length || !O(e))
    return null;
  const s = n[0].programDateTime;
  if (e < (s || 0))
    return null;
  const i = n[n.length - 1].endProgramDateTime;
  if (e >= (i || 0))
    return null;
  t = t || 0;
  for (let r = 0; r < n.length; ++r) {
    const a = n[r];
    if (rl(e, t, a))
      return a;
  }
  return null;
}
function Lt(n, e, t = 0, s = 0, i = 5e-3) {
  let r = null;
  if (n) {
    r = e[1 + n.sn - e[0].sn] || null;
    const o = n.endDTS - t;
    o > 0 && o < 15e-7 && (t += 15e-7), r && n.level !== r.level && r.end <= n.end && (r = e[2 + n.sn - e[0].sn] || null);
  } else t === 0 && e[0].start === 0 && (r = e[0]);
  if (r && ((!n || n.level === r.level) && yr(t, s, r) === 0 || il(r, n, Math.min(i, s))))
    return r;
  const a = fi.search(e, yr.bind(null, t, s));
  return a && (a !== n || !r) ? a : r;
}
function il(n, e, t) {
  if (e && e.start === 0 && e.level < n.level && (e.endPTS || 0) > 0) {
    const s = e.tagList.reduce((i, r) => (r[0] === "INF" && (i += parseFloat(r[1])), i), t);
    return n.start <= s;
  }
  return !1;
}
function yr(n = 0, e = 0, t) {
  if (t.start <= n && t.start + t.duration > n)
    return 0;
  const s = Math.min(e, t.duration + (t.deltaPTS ? t.deltaPTS : 0));
  return t.start + t.duration - s <= n ? 1 : t.start - s > n && t.start ? -1 : 0;
}
function rl(n, e, t) {
  const s = Math.min(e, t.duration + (t.deltaPTS ? t.deltaPTS : 0)) * 1e3;
  return (t.endProgramDateTime || 0) - s > n;
}
function wn(n, e) {
  return fi.search(n, (t) => t.cc < e ? 1 : t.cc > e ? -1 : 0);
}
function nl(n, e, t) {
  if (n && n.startCC <= e && n.endCC >= e) {
    const s = t.start, i = t.end;
    return fi.search(n.fragments, (r) => r.cc < e || r.end <= s ? 1 : r.cc > e || r.start >= i ? -1 : 0);
  }
  return null;
}
var me = {
  DoNothing: 0,
  SendEndCallback: 1,
  SendAlternateToPenaltyBox: 2,
  RemoveAlternatePermanently: 3,
  InsertDiscontinuity: 4,
  RetryRequest: 5
}, we = {
  None: 0,
  MoveAllAlternatesMatchingHost: 1,
  MoveAllAlternatesMatchingHDCP: 2,
  SwitchToSDR: 4
};
class al extends qe {
  constructor(e) {
    super("error-controller", e.logger), this.hls = void 0, this.playlistError = 0, this.penalizedRenditions = {}, this.hls = e, this.registerListeners();
  }
  registerListeners() {
    const e = this.hls;
    e.on(p.ERROR, this.onError, this), e.on(p.MANIFEST_LOADING, this.onManifestLoading, this), e.on(p.LEVEL_UPDATED, this.onLevelUpdated, this);
  }
  unregisterListeners() {
    const e = this.hls;
    e && (e.off(p.ERROR, this.onError, this), e.off(p.ERROR, this.onErrorOut, this), e.off(p.MANIFEST_LOADING, this.onManifestLoading, this), e.off(p.LEVEL_UPDATED, this.onLevelUpdated, this));
  }
  destroy() {
    this.unregisterListeners(), this.hls = null, this.penalizedRenditions = {};
  }
  startLoad(e) {
  }
  stopLoad() {
    this.playlistError = 0;
  }
  getVariantLevelIndex(e) {
    return (e == null ? void 0 : e.type) === N.MAIN ? e.level : this.hls.loadLevel;
  }
  onManifestLoading() {
    this.playlistError = 0, this.penalizedRenditions = {};
  }
  onLevelUpdated() {
    this.playlistError = 0;
  }
  onError(e, t) {
    var s;
    if (t.fatal)
      return;
    const i = this.hls, r = t.context;
    switch (t.details) {
      case L.FRAG_LOAD_ERROR:
      case L.FRAG_LOAD_TIMEOUT:
      case L.KEY_LOAD_ERROR:
      case L.KEY_LOAD_TIMEOUT:
        t.errorAction = this.getFragRetryOrSwitchAction(t);
        return;
      case L.FRAG_PARSING_ERROR:
        if ((s = t.frag) != null && s.gap) {
          t.errorAction = Er();
          return;
        }
      case L.FRAG_GAP:
      case L.FRAG_DECRYPT_ERROR: {
        t.errorAction = this.getFragRetryOrSwitchAction(t), t.errorAction.action = me.SendAlternateToPenaltyBox;
        return;
      }
      case L.LEVEL_EMPTY_ERROR:
      case L.LEVEL_PARSING_ERROR:
        {
          var a, o;
          const c = t.parent === N.MAIN ? t.level : i.loadLevel;
          t.details === L.LEVEL_EMPTY_ERROR && ((a = t.context) != null && (o = a.levelDetails) != null && o.live) ? t.errorAction = this.getPlaylistRetryOrSwitchAction(t, c) : (t.levelRetry = !1, t.errorAction = this.getLevelSwitchAction(t, c));
        }
        return;
      case L.LEVEL_LOAD_ERROR:
      case L.LEVEL_LOAD_TIMEOUT:
        typeof (r == null ? void 0 : r.level) == "number" && (t.errorAction = this.getPlaylistRetryOrSwitchAction(t, r.level));
        return;
      case L.AUDIO_TRACK_LOAD_ERROR:
      case L.AUDIO_TRACK_LOAD_TIMEOUT:
      case L.SUBTITLE_LOAD_ERROR:
      case L.SUBTITLE_TRACK_LOAD_TIMEOUT:
        if (r) {
          const c = i.levels[i.loadLevel];
          if (c && (r.type === j.AUDIO_TRACK && c.hasAudioGroup(r.groupId) || r.type === j.SUBTITLE_TRACK && c.hasSubtitleGroup(r.groupId))) {
            t.errorAction = this.getPlaylistRetryOrSwitchAction(t, i.loadLevel), t.errorAction.action = me.SendAlternateToPenaltyBox, t.errorAction.flags = we.MoveAllAlternatesMatchingHost;
            return;
          }
        }
        return;
      case L.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:
        {
          const c = i.levels[i.loadLevel], h = c == null ? void 0 : c.attrs["HDCP-LEVEL"];
          h ? t.errorAction = {
            action: me.SendAlternateToPenaltyBox,
            flags: we.MoveAllAlternatesMatchingHDCP,
            hdcpLevel: h
          } : this.keySystemError(t);
        }
        return;
      case L.BUFFER_ADD_CODEC_ERROR:
      case L.REMUX_ALLOC_ERROR:
      case L.BUFFER_APPEND_ERROR:
        if (!t.errorAction) {
          var l;
          t.errorAction = this.getLevelSwitchAction(t, (l = t.level) != null ? l : i.loadLevel);
        }
        return;
      case L.INTERNAL_EXCEPTION:
      case L.BUFFER_APPENDING_ERROR:
      case L.BUFFER_FULL_ERROR:
      case L.LEVEL_SWITCH_ERROR:
      case L.BUFFER_STALLED_ERROR:
      case L.BUFFER_SEEK_OVER_HOLE:
      case L.BUFFER_NUDGE_ON_STALL:
        t.errorAction = Er();
        return;
    }
    t.type === $.KEY_SYSTEM_ERROR && this.keySystemError(t);
  }
  keySystemError(e) {
    const t = this.getVariantLevelIndex(e.frag);
    e.levelRetry = !1, e.errorAction = this.getLevelSwitchAction(e, t);
  }
  getPlaylistRetryOrSwitchAction(e, t) {
    const s = this.hls, i = mr(s.config.playlistLoadPolicy, e), r = this.playlistError++;
    if (os(i, r, as(e), e.response))
      return {
        action: me.RetryRequest,
        flags: we.None,
        retryConfig: i,
        retryCount: r
      };
    const o = this.getLevelSwitchAction(e, t);
    return i && (o.retryConfig = i, o.retryCount = r), o;
  }
  getFragRetryOrSwitchAction(e) {
    const t = this.hls, s = this.getVariantLevelIndex(e.frag), i = t.levels[s], {
      fragLoadPolicy: r,
      keyLoadPolicy: a
    } = t.config, o = mr(e.details.startsWith("key") ? a : r, e), l = t.levels.reduce((h, u) => h + u.fragmentError, 0);
    if (i && (e.details !== L.FRAG_GAP && i.fragmentError++, os(o, l, as(e), e.response)))
      return {
        action: me.RetryRequest,
        flags: we.None,
        retryConfig: o,
        retryCount: l
      };
    const c = this.getLevelSwitchAction(e, s);
    return o && (c.retryConfig = o, c.retryCount = l), c;
  }
  getLevelSwitchAction(e, t) {
    const s = this.hls;
    t == null && (t = s.loadLevel);
    const i = this.hls.levels[t];
    if (i) {
      var r, a;
      const c = e.details;
      i.loadError++, c === L.BUFFER_APPEND_ERROR && i.fragmentError++;
      let h = -1;
      const {
        levels: u,
        loadLevel: d,
        minAutoLevel: g,
        maxAutoLevel: f
      } = s;
      s.autoLevelEnabled || (s.loadLevel = -1);
      const m = (r = e.frag) == null ? void 0 : r.type, E = (m === N.AUDIO && c === L.FRAG_PARSING_ERROR || e.sourceBufferName === "audio" && (c === L.BUFFER_ADD_CODEC_ERROR || c === L.BUFFER_APPEND_ERROR)) && u.some(({
        audioCodec: D
      }) => i.audioCodec !== D), T = e.sourceBufferName === "video" && (c === L.BUFFER_ADD_CODEC_ERROR || c === L.BUFFER_APPEND_ERROR) && u.some(({
        codecSet: D,
        audioCodec: v
      }) => i.codecSet !== D && i.audioCodec === v), {
        type: _,
        groupId: A
      } = (a = e.context) != null ? a : {};
      for (let D = u.length; D--; ) {
        const v = (D + d) % u.length;
        if (v !== d && v >= g && v <= f && u[v].loadError === 0) {
          var o, l;
          const b = u[v];
          if (c === L.FRAG_GAP && m === N.MAIN && e.frag) {
            const C = u[v].details;
            if (C) {
              const R = Lt(e.frag, C.fragments, e.frag.start);
              if (R != null && R.gap)
                continue;
            }
          } else {
            if (_ === j.AUDIO_TRACK && b.hasAudioGroup(A) || _ === j.SUBTITLE_TRACK && b.hasSubtitleGroup(A))
              continue;
            if (m === N.AUDIO && (o = i.audioGroups) != null && o.some((C) => b.hasAudioGroup(C)) || m === N.SUBTITLE && (l = i.subtitleGroups) != null && l.some((C) => b.hasSubtitleGroup(C)) || E && i.audioCodec === b.audioCodec || !E && i.audioCodec !== b.audioCodec || T && i.codecSet === b.codecSet)
              continue;
          }
          h = v;
          break;
        }
      }
      if (h > -1 && s.loadLevel !== h)
        return e.levelRetry = !0, this.playlistError = 0, {
          action: me.SendAlternateToPenaltyBox,
          flags: we.None,
          nextAutoLevel: h
        };
    }
    return {
      action: me.SendAlternateToPenaltyBox,
      flags: we.MoveAllAlternatesMatchingHost
    };
  }
  onErrorOut(e, t) {
    var s;
    switch ((s = t.errorAction) == null ? void 0 : s.action) {
      case me.DoNothing:
        break;
      case me.SendAlternateToPenaltyBox:
        this.sendAlternateToPenaltyBox(t), !t.errorAction.resolved && t.details !== L.FRAG_GAP ? t.fatal = !0 : /MediaSource readyState: ended/.test(t.error.message) && (this.warn(`MediaSource ended after "${t.sourceBufferName}" sourceBuffer append error. Attempting to recover from media error.`), this.hls.recoverMediaError());
        break;
    }
    if (t.fatal) {
      this.hls.stopLoad();
      return;
    }
  }
  sendAlternateToPenaltyBox(e) {
    const t = this.hls, s = e.errorAction;
    if (!s)
      return;
    const {
      flags: i,
      hdcpLevel: r,
      nextAutoLevel: a
    } = s;
    switch (i) {
      case we.None:
        this.switchLevel(e, a);
        break;
      case we.MoveAllAlternatesMatchingHDCP:
        r && (t.maxHdcpLevel = qs[qs.indexOf(r) - 1], s.resolved = !0), this.warn(`Restricting playback to HDCP-LEVEL of "${t.maxHdcpLevel}" or lower`);
        break;
    }
    s.resolved || this.switchLevel(e, a);
  }
  switchLevel(e, t) {
    t !== void 0 && e.errorAction && (this.warn(`switching to level ${t} after ${e.details}`), this.hls.nextAutoLevel = t, e.errorAction.resolved = !0, this.hls.nextLoadLevel = this.hls.nextAutoLevel);
  }
}
function Er(n) {
  return {
    action: me.DoNothing,
    flags: we.None
  };
}
class gi extends qe {
  constructor(e, t) {
    super(t, e.logger), this.hls = void 0, this.timer = -1, this.requestScheduled = -1, this.canLoad = !1, this.hls = e;
  }
  destroy() {
    this.clearTimer(), this.hls = this.log = this.warn = null;
  }
  clearTimer() {
    this.timer !== -1 && (self.clearTimeout(this.timer), this.timer = -1);
  }
  startLoad() {
    this.canLoad = !0, this.requestScheduled = -1, this.loadPlaylist();
  }
  stopLoad() {
    this.canLoad = !1, this.clearTimer();
  }
  switchParams(e, t, s) {
    const i = t == null ? void 0 : t.renditionReports;
    if (i) {
      let r = -1;
      for (let a = 0; a < i.length; a++) {
        const o = i[a];
        let l;
        try {
          l = new self.URL(o.URI, t.url).href;
        } catch (c) {
          this.warn(`Could not construct new URL for Rendition Report: ${c}`), l = o.URI || "";
        }
        if (l === e) {
          r = a;
          break;
        } else l === e.substring(0, l.length) && (r = a);
      }
      if (r !== -1) {
        const a = i[r], o = parseInt(a["LAST-MSN"]) || (t == null ? void 0 : t.lastPartSn);
        let l = parseInt(a["LAST-PART"]) || (t == null ? void 0 : t.lastPartIndex);
        if (this.hls.config.lowLatencyMode) {
          const h = Math.min(t.age - t.partTarget, t.targetduration);
          l >= 0 && h > t.partTarget && (l += 1);
        }
        const c = s && ur(s);
        return new dr(o, l >= 0 ? l : void 0, c);
      }
    }
  }
  loadPlaylist(e) {
    this.requestScheduled === -1 && (this.requestScheduled = self.performance.now());
  }
  shouldLoadPlaylist(e) {
    return this.canLoad && !!e && !!e.url && (!e.details || e.details.live);
  }
  shouldReloadPlaylist(e) {
    return this.timer === -1 && this.requestScheduled === -1 && this.shouldLoadPlaylist(e);
  }
  playlistLoaded(e, t, s) {
    const {
      details: i,
      stats: r
    } = t, a = self.performance.now(), o = r.loading.first ? Math.max(0, a - r.loading.first) : 0;
    if (i.advancedDateTime = Date.now() - o, i.live || s != null && s.live) {
      if (i.reloaded(s), s && this.log(`live playlist ${e} ${i.advanced ? "REFRESHED " + i.lastPartSn + "-" + i.lastPartIndex : i.updated ? "UPDATED" : "MISSED"}`), s && i.fragments.length > 0 && zo(s, i), !this.canLoad || !i.live)
        return;
      let l, c, h;
      if (i.canBlockReload && i.endSN && i.advanced) {
        const y = this.hls.config.lowLatencyMode, E = i.lastPartSn, x = i.endSN, T = i.lastPartIndex, _ = T !== -1, A = E === x, D = y ? 0 : T;
        _ ? (c = A ? x + 1 : E, h = A ? D : T + 1) : c = x + 1;
        const v = i.age, b = v + i.ageHeader;
        let C = Math.min(b - i.partTarget, i.targetduration * 1.5);
        if (C > 0) {
          if (b > i.targetduration * 3)
            this.log(`Playlist last advanced ${v.toFixed(2)}s ago. Omitting segment and part directives.`), c = void 0, h = void 0;
          else if (s != null && s.tuneInGoal && b - i.partTarget > s.tuneInGoal)
            this.warn(`CDN Tune-in goal increased from: ${s.tuneInGoal} to: ${C} with playlist age: ${i.age}`), C = 0;
          else {
            const R = Math.floor(C / i.targetduration);
            if (c += R, h !== void 0) {
              const w = Math.round(C % i.targetduration / i.partTarget);
              h += w;
            }
            this.log(`CDN Tune-in age: ${i.ageHeader}s last advanced ${v.toFixed(2)}s goal: ${C} skip sn ${R} to part ${h}`);
          }
          i.tuneInGoal = C;
        }
        if (l = this.getDeliveryDirectives(i, t.deliveryDirectives, c, h), y || !A) {
          this.loadPlaylist(l);
          return;
        }
      } else (i.canBlockReload || i.canSkipUntil) && (l = this.getDeliveryDirectives(i, t.deliveryDirectives, c, h));
      const u = this.hls.mainForwardBufferInfo, d = u ? u.end - u.len : 0, g = (i.edge - d) * 1e3, f = Zo(i, g);
      i.updated && a > this.requestScheduled + f && (this.requestScheduled = r.loading.start), c !== void 0 && i.canBlockReload ? this.requestScheduled = r.loading.first + f - (i.partTarget * 1e3 || 1e3) : this.requestScheduled === -1 || this.requestScheduled + f < a ? this.requestScheduled = a : this.requestScheduled - a <= 0 && (this.requestScheduled += f);
      let m = this.requestScheduled - a;
      m = Math.max(0, m), this.log(`reload live playlist ${e} in ${Math.round(m)} ms`), this.timer = self.setTimeout(() => this.loadPlaylist(l), m);
    } else
      this.clearTimer();
  }
  getDeliveryDirectives(e, t, s, i) {
    let r = ur(e);
    return t != null && t.skip && e.deltaUpdateFailed && (s = t.msn, i = t.part, r = Wt.No), new dr(s, i, r);
  }
  checkRetry(e) {
    const t = e.details, s = as(e), i = e.errorAction, {
      action: r,
      retryCount: a = 0,
      retryConfig: o
    } = i || {}, l = !!i && !!o && (r === me.RetryRequest || !i.resolved && r === me.SendAlternateToPenaltyBox);
    if (l) {
      var c;
      if (this.requestScheduled = -1, a >= o.maxNumRetry)
        return !1;
      if (s && (c = e.context) != null && c.deliveryDirectives)
        this.warn(`Retrying playlist loading ${a + 1}/${o.maxNumRetry} after "${t}" without delivery-directives`), this.loadPlaylist();
      else {
        const h = di(o, a);
        this.timer = self.setTimeout(() => this.loadPlaylist(), h), this.warn(`Retrying playlist loading ${a + 1}/${o.maxNumRetry} after "${t}" in ${h}ms`);
      }
      e.levelRetry = !0, i.resolved = !0;
    }
    return l;
  }
}
class et {
  //  About half of the estimated value will be from the last |halfLife| samples by weight.
  constructor(e, t = 0, s = 0) {
    this.halfLife = void 0, this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.halfLife = e, this.alpha_ = e ? Math.exp(Math.log(0.5) / e) : 0, this.estimate_ = t, this.totalWeight_ = s;
  }
  sample(e, t) {
    const s = Math.pow(this.alpha_, e);
    this.estimate_ = t * (1 - s) + s * this.estimate_, this.totalWeight_ += e;
  }
  getTotalWeight() {
    return this.totalWeight_;
  }
  getEstimate() {
    if (this.alpha_) {
      const e = 1 - Math.pow(this.alpha_, this.totalWeight_);
      if (e)
        return this.estimate_ / e;
    }
    return this.estimate_;
  }
}
class ol {
  constructor(e, t, s, i = 100) {
    this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.defaultTTFB_ = void 0, this.ttfb_ = void 0, this.defaultEstimate_ = s, this.minWeight_ = 1e-3, this.minDelayMs_ = 50, this.slow_ = new et(e), this.fast_ = new et(t), this.defaultTTFB_ = i, this.ttfb_ = new et(e);
  }
  update(e, t) {
    const {
      slow_: s,
      fast_: i,
      ttfb_: r
    } = this;
    s.halfLife !== e && (this.slow_ = new et(e, s.getEstimate(), s.getTotalWeight())), i.halfLife !== t && (this.fast_ = new et(t, i.getEstimate(), i.getTotalWeight())), r.halfLife !== e && (this.ttfb_ = new et(e, r.getEstimate(), r.getTotalWeight()));
  }
  sample(e, t) {
    e = Math.max(e, this.minDelayMs_);
    const s = 8 * t, i = e / 1e3, r = s / i;
    this.fast_.sample(i, r), this.slow_.sample(i, r);
  }
  sampleTTFB(e) {
    const t = e / 1e3, s = Math.sqrt(2) * Math.exp(-Math.pow(t, 2) / 2);
    this.ttfb_.sample(s, Math.max(e, 5));
  }
  canEstimate() {
    return this.fast_.getTotalWeight() >= this.minWeight_;
  }
  getEstimate() {
    return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_;
  }
  getEstimateTTFB() {
    return this.ttfb_.getTotalWeight() >= this.minWeight_ ? this.ttfb_.getEstimate() : this.defaultTTFB_;
  }
  destroy() {
  }
}
const kn = {
  supported: !0,
  configurations: [],
  decodingInfoResults: [{
    supported: !0,
    powerEfficient: !0,
    smooth: !0
  }]
}, Tr = {};
function ll(n, e, t, s, i, r) {
  const a = n.audioCodec ? n.audioGroups : null, o = r == null ? void 0 : r.audioCodec, l = r == null ? void 0 : r.channels, c = l ? parseInt(l) : o ? 1 / 0 : 2;
  let h = null;
  if (a != null && a.length)
    try {
      a.length === 1 && a[0] ? h = e.groups[a[0]].channels : h = a.reduce((u, d) => {
        if (d) {
          const g = e.groups[d];
          if (!g)
            throw new Error(`Audio track group ${d} not found`);
          Object.keys(g.channels).forEach((f) => {
            u[f] = (u[f] || 0) + g.channels[f];
          });
        }
        return u;
      }, {
        2: 0
      });
    } catch {
      return !0;
    }
  return n.videoCodec !== void 0 && (n.width > 1920 && n.height > 1088 || n.height > 1920 && n.width > 1088 || n.frameRate > Math.max(s, 30) || n.videoRange !== "SDR" && n.videoRange !== t || n.bitrate > Math.max(i, 8e6)) || !!h && O(c) && Object.keys(h).some((u) => parseInt(u) > c);
}
function cl(n, e, t) {
  const s = n.videoCodec, i = n.audioCodec;
  if (!s || !i || !t)
    return Promise.resolve(kn);
  const r = {
    width: n.width,
    height: n.height,
    bitrate: Math.ceil(Math.max(n.bitrate * 0.9, n.averageBitrate)),
    // Assume a framerate of 30fps since MediaCapabilities will not accept Level default of 0.
    framerate: n.frameRate || 30
  }, a = n.videoRange;
  a !== "SDR" && (r.transferFunction = a.toLowerCase());
  const o = s.split(",").map((l) => ({
    type: "media-source",
    video: he(he({}, r), {}, {
      contentType: At(l, "video")
    })
  }));
  return i && n.audioGroups && n.audioGroups.forEach((l) => {
    var c;
    l && ((c = e.groups[l]) == null || c.tracks.forEach((h) => {
      if (h.groupId === l) {
        const u = h.channels || "", d = parseFloat(u);
        O(d) && d > 2 && o.push.apply(o, i.split(",").map((g) => ({
          type: "media-source",
          audio: {
            contentType: At(g, "audio"),
            channels: "" + d
            // spatialRendering:
            //   audioCodec === 'ec-3' && channels.indexOf('JOC'),
          }
        })));
      }
    }));
  }), Promise.all(o.map((l) => {
    const c = hl(l);
    return Tr[c] || (Tr[c] = t.decodingInfo(l));
  })).then((l) => ({
    supported: !l.some((c) => !c.supported),
    configurations: o,
    decodingInfoResults: l
  })).catch((l) => ({
    supported: !1,
    configurations: o,
    decodingInfoResults: [],
    error: l
  }));
}
function hl(n) {
  const {
    audio: e,
    video: t
  } = n, s = t || e;
  if (s) {
    const i = s.contentType.split('"')[1];
    if (t)
      return `r${t.height}x${t.width}f${Math.ceil(t.framerate)}${t.transferFunction || "sd"}_${i}_${Math.ceil(t.bitrate / 1e5)}`;
    if (e)
      return `c${e.channels}${e.spatialRendering ? "s" : "n"}_${i}`;
  }
  return "";
}
function ul() {
  if (typeof matchMedia == "function") {
    const n = matchMedia("(dynamic-range: high)"), e = matchMedia("bad query");
    if (n.media !== e.media)
      return n.matches === !0;
  }
  return !1;
}
function dl(n, e) {
  let t = !1, s = [];
  if (n && (t = n !== "SDR", s = [n]), e) {
    s = e.allowedVideoRanges || ns.slice(0);
    const i = s.join("") !== "SDR" && !e.videoCodec;
    t = e.preferHDR !== void 0 ? e.preferHDR : i && ul(), t || (s = ["SDR"]);
  }
  return {
    preferHDR: t,
    allowedVideoRanges: s
  };
}
function fl(n, e, t, s, i) {
  const r = Object.keys(n), a = s == null ? void 0 : s.channels, o = s == null ? void 0 : s.audioCodec, l = i == null ? void 0 : i.videoCodec, c = a && parseInt(a) === 2;
  let h = !1, u = !1, d = 1 / 0, g = 1 / 0, f = 1 / 0, m = 1 / 0, y = 0, E = [];
  const {
    preferHDR: x,
    allowedVideoRanges: T
  } = dl(e, i);
  for (let b = r.length; b--; ) {
    const C = n[r[b]];
    h || (h = C.channels[2] > 0), d = Math.min(d, C.minHeight), g = Math.min(g, C.minFramerate), f = Math.min(f, C.minBitrate), T.filter((w) => C.videoRanges[w] > 0).length > 0 && (u = !0);
  }
  d = O(d) ? d : 0, g = O(g) ? g : 0;
  const _ = Math.max(1080, d), A = Math.max(30, g);
  f = O(f) ? f : t, t = Math.max(f, t), u || (e = void 0);
  const D = r.length > 1;
  return {
    codecSet: r.reduce((b, C) => {
      const R = n[C];
      if (C === b)
        return b;
      if (E = u ? T.filter((w) => R.videoRanges[w] > 0) : [], D) {
        if (R.minBitrate > t)
          return Ce(C, `min bitrate of ${R.minBitrate} > current estimate of ${t}`), b;
        if (!R.hasDefaultAudio)
          return Ce(C, "no renditions with default or auto-select sound found"), b;
        if (o && C.indexOf(o.substring(0, 4)) % 5 !== 0)
          return Ce(C, `audio codec preference "${o}" not found`), b;
        if (a && !c) {
          if (!R.channels[a])
            return Ce(C, `no renditions with ${a} channel sound found (channels options: ${Object.keys(R.channels)})`), b;
        } else if ((!o || c) && h && R.channels[2] === 0)
          return Ce(C, "no renditions with stereo sound found"), b;
        if (R.minHeight > _)
          return Ce(C, `min resolution of ${R.minHeight} > maximum of ${_}`), b;
        if (R.minFramerate > A)
          return Ce(C, `min framerate of ${R.minFramerate} > maximum of ${A}`), b;
        if (!E.some((w) => R.videoRanges[w] > 0))
          return Ce(C, `no variants with VIDEO-RANGE of ${JSON.stringify(E)} found`), b;
        if (l && C.indexOf(l.substring(0, 4)) % 5 !== 0)
          return Ce(C, `video codec preference "${l}" not found`), b;
        if (R.maxScore < y)
          return Ce(C, `max score of ${R.maxScore} < selected max of ${y}`), b;
      }
      return b && (is(C) >= is(b) || R.fragmentError > n[b].fragmentError) ? b : (m = R.minIndex, y = R.maxScore, C);
    }, void 0),
    videoRanges: E,
    preferHDR: x,
    minFramerate: g,
    minBitrate: f,
    minIndex: m
  };
}
function Ce(n, e) {
  q.log(`[abr] start candidates with "${n}" ignored because ${e}`);
}
function gl(n) {
  return n.reduce((e, t) => {
    let s = e.groups[t.groupId];
    s || (s = e.groups[t.groupId] = {
      tracks: [],
      channels: {
        2: 0
      },
      hasDefault: !1,
      hasAutoSelect: !1
    }), s.tracks.push(t);
    const i = t.channels || "2";
    return s.channels[i] = (s.channels[i] || 0) + 1, s.hasDefault = s.hasDefault || t.default, s.hasAutoSelect = s.hasAutoSelect || t.autoselect, s.hasDefault && (e.hasDefaultAudio = !0), s.hasAutoSelect && (e.hasAutoSelectAudio = !0), e;
  }, {
    hasDefaultAudio: !1,
    hasAutoSelectAudio: !1,
    groups: {}
  });
}
function ml(n, e, t, s) {
  return n.slice(t, s + 1).reduce((i, r, a) => {
    if (!r.codecSet)
      return i;
    const o = r.audioGroups;
    let l = i[r.codecSet];
    l || (i[r.codecSet] = l = {
      minBitrate: 1 / 0,
      minHeight: 1 / 0,
      minFramerate: 1 / 0,
      minIndex: a,
      maxScore: 0,
      videoRanges: {
        SDR: 0
      },
      channels: {
        2: 0
      },
      hasDefaultAudio: !o,
      fragmentError: 0
    }), l.minBitrate = Math.min(l.minBitrate, r.bitrate);
    const c = Math.min(r.height, r.width);
    return l.minHeight = Math.min(l.minHeight, c), l.minFramerate = Math.min(l.minFramerate, r.frameRate), l.minIndex = Math.min(l.minIndex, a), l.maxScore = Math.max(l.maxScore, r.score), l.fragmentError += r.fragmentError, l.videoRanges[r.videoRange] = (l.videoRanges[r.videoRange] || 0) + 1, o && o.forEach((h) => {
      if (!h)
        return;
      const u = e.groups[h];
      u && (l.hasDefaultAudio = l.hasDefaultAudio || e.hasDefaultAudio ? u.hasDefault : u.hasAutoSelect || !e.hasDefaultAudio && !e.hasAutoSelectAudio, Object.keys(u.channels).forEach((d) => {
        l.channels[d] = (l.channels[d] || 0) + u.channels[d];
      }));
    }), i;
  }, {});
}
function Oe(n, e, t) {
  if ("attrs" in n) {
    const s = e.indexOf(n);
    if (s !== -1)
      return s;
  }
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    if (lt(n, i, t))
      return s;
  }
  return -1;
}
function lt(n, e, t) {
  const {
    groupId: s,
    name: i,
    lang: r,
    assocLang: a,
    characteristics: o,
    default: l
  } = n, c = n.forced;
  return (s === void 0 || e.groupId === s) && (i === void 0 || e.name === i) && (r === void 0 || e.lang === r) && (r === void 0 || e.assocLang === a) && (l === void 0 || e.default === l) && (c === void 0 || e.forced === c) && (o === void 0 || pl(o, e.characteristics)) && (t === void 0 || t(n, e));
}
function pl(n, e = "") {
  const t = n.split(","), s = e.split(",");
  return t.length === s.length && !t.some((i) => s.indexOf(i) === -1);
}
function tt(n, e) {
  const {
    audioCodec: t,
    channels: s
  } = n;
  return (t === void 0 || (e.audioCodec || "").substring(0, 4) === t.substring(0, 4)) && (s === void 0 || s === (e.channels || "2"));
}
function yl(n, e, t, s, i) {
  const r = e[s], o = e.reduce((d, g, f) => {
    const m = g.uri;
    return (d[m] || (d[m] = [])).push(f), d;
  }, {})[r.uri];
  o.length > 1 && (s = Math.max.apply(Math, o));
  const l = r.videoRange, c = r.frameRate, h = r.codecSet.substring(0, 4), u = xr(e, s, (d) => {
    if (d.videoRange !== l || d.frameRate !== c || d.codecSet.substring(0, 4) !== h)
      return !1;
    const g = d.audioGroups, f = t.filter((m) => !g || g.indexOf(m.groupId) !== -1);
    return Oe(n, f, i) > -1;
  });
  return u > -1 ? u : xr(e, s, (d) => {
    const g = d.audioGroups, f = t.filter((m) => !g || g.indexOf(m.groupId) !== -1);
    return Oe(n, f, i) > -1;
  });
}
function xr(n, e, t) {
  for (let s = e; s; s--)
    if (t(n[s]))
      return s;
  for (let s = e + 1; s < n.length; s++)
    if (t(n[s]))
      return s;
  return -1;
}
class El extends qe {
  constructor(e) {
    super("abr", e.logger), this.hls = void 0, this.lastLevelLoadSec = 0, this.lastLoadedFragLevel = -1, this.firstSelection = -1, this._nextAutoLevel = -1, this.nextAutoLevelKey = "", this.audioTracksByGroup = null, this.codecTiers = null, this.timer = -1, this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, this.bwEstimator = void 0, this._abandonRulesCheck = () => {
      const {
        fragCurrent: t,
        partCurrent: s,
        hls: i
      } = this, {
        autoLevelEnabled: r,
        media: a
      } = i;
      if (!t || !a)
        return;
      const o = performance.now(), l = s ? s.stats : t.stats, c = s ? s.duration : t.duration, h = o - l.loading.start, u = i.minAutoLevel;
      if (l.aborted || l.loaded && l.loaded === l.total || t.level <= u) {
        this.clearTimer(), this._nextAutoLevel = -1;
        return;
      }
      if (!r || a.paused || !a.playbackRate || !a.readyState)
        return;
      const d = i.mainForwardBufferInfo;
      if (d === null)
        return;
      const g = this.bwEstimator.getEstimateTTFB(), f = Math.abs(a.playbackRate);
      if (h <= Math.max(g, 1e3 * (c / (f * 2))))
        return;
      const m = d.len / f, y = l.loading.first ? l.loading.first - l.loading.start : -1, E = l.loaded && y > -1, x = this.getBwEstimate(), T = i.levels, _ = T[t.level], A = l.total || Math.max(l.loaded, Math.round(c * _.averageBitrate / 8));
      let D = E ? h - y : h;
      D < 1 && E && (D = Math.min(h, l.loaded * 8 / x));
      const v = E ? l.loaded * 1e3 / D : 0, b = v ? (A - l.loaded) / v : A * 8 / x + g / 1e3;
      if (b <= m)
        return;
      const C = v ? v * 8 : x;
      let R = Number.POSITIVE_INFINITY, w;
      for (w = t.level - 1; w > u; w--) {
        const te = T[w].maxBitrate;
        if (R = this.getTimeToLoadFrag(g / 1e3, C, c * te, !T[w].details), R < m)
          break;
      }
      if (R >= b || R > c * 10)
        return;
      i.nextLoadLevel = i.nextAutoLevel = w, E ? this.bwEstimator.sample(h - Math.min(g, y), l.loaded) : this.bwEstimator.sampleTTFB(h);
      const F = T[w].maxBitrate;
      this.getBwEstimate() * this.hls.config.abrBandWidthUpFactor > F && this.resetEstimator(F), this.clearTimer(), this.warn(`Fragment ${t.sn}${s ? " part " + s.index : ""} of level ${t.level} is loading too slowly;
      Time to underbuffer: ${m.toFixed(3)} s
      Estimated load time for current fragment: ${b.toFixed(3)} s
      Estimated load time for down switch fragment: ${R.toFixed(3)} s
      TTFB estimate: ${y | 0} ms
      Current BW estimate: ${O(x) ? x | 0 : "Unknown"} bps
      New BW estimate: ${this.getBwEstimate() | 0} bps
      Switching to level ${w} @ ${F | 0} bps`), i.trigger(p.FRAG_LOAD_EMERGENCY_ABORTED, {
        frag: t,
        part: s,
        stats: l
      });
    }, this.hls = e, this.bwEstimator = this.initEstimator(), this.registerListeners();
  }
  resetEstimator(e) {
    e && (this.log(`setting initial bwe to ${e}`), this.hls.config.abrEwmaDefaultEstimate = e), this.firstSelection = -1, this.bwEstimator = this.initEstimator();
  }
  initEstimator() {
    const e = this.hls.config;
    return new ol(e.abrEwmaSlowVoD, e.abrEwmaFastVoD, e.abrEwmaDefaultEstimate);
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(p.MANIFEST_LOADING, this.onManifestLoading, this), e.on(p.FRAG_LOADING, this.onFragLoading, this), e.on(p.FRAG_LOADED, this.onFragLoaded, this), e.on(p.FRAG_BUFFERED, this.onFragBuffered, this), e.on(p.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(p.LEVEL_LOADED, this.onLevelLoaded, this), e.on(p.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(p.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this), e.on(p.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e && (e.off(p.MANIFEST_LOADING, this.onManifestLoading, this), e.off(p.FRAG_LOADING, this.onFragLoading, this), e.off(p.FRAG_LOADED, this.onFragLoaded, this), e.off(p.FRAG_BUFFERED, this.onFragBuffered, this), e.off(p.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(p.LEVEL_LOADED, this.onLevelLoaded, this), e.off(p.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(p.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this), e.off(p.ERROR, this.onError, this));
  }
  destroy() {
    this.unregisterListeners(), this.clearTimer(), this.hls = this._abandonRulesCheck = null, this.fragCurrent = this.partCurrent = null;
  }
  onManifestLoading(e, t) {
    this.lastLoadedFragLevel = -1, this.firstSelection = -1, this.lastLevelLoadSec = 0, this.fragCurrent = this.partCurrent = null, this.onLevelsUpdated(), this.clearTimer();
  }
  onLevelsUpdated() {
    this.lastLoadedFragLevel > -1 && this.fragCurrent && (this.lastLoadedFragLevel = this.fragCurrent.level), this._nextAutoLevel = -1, this.onMaxAutoLevelUpdated(), this.codecTiers = null, this.audioTracksByGroup = null;
  }
  onMaxAutoLevelUpdated() {
    this.firstSelection = -1, this.nextAutoLevelKey = "";
  }
  onFragLoading(e, t) {
    const s = t.frag;
    if (!this.ignoreFragment(s)) {
      if (!s.bitrateTest) {
        var i;
        this.fragCurrent = s, this.partCurrent = (i = t.part) != null ? i : null;
      }
      this.clearTimer(), this.timer = self.setInterval(this._abandonRulesCheck, 100);
    }
  }
  onLevelSwitching(e, t) {
    this.clearTimer();
  }
  onError(e, t) {
    if (!t.fatal)
      switch (t.details) {
        case L.BUFFER_ADD_CODEC_ERROR:
        case L.BUFFER_APPEND_ERROR:
          this.lastLoadedFragLevel = -1, this.firstSelection = -1;
          break;
        case L.FRAG_LOAD_TIMEOUT: {
          const s = t.frag, {
            fragCurrent: i,
            partCurrent: r
          } = this;
          if (s && i && s.sn === i.sn && s.level === i.level) {
            const a = performance.now(), o = r ? r.stats : s.stats, l = a - o.loading.start, c = o.loading.first ? o.loading.first - o.loading.start : -1;
            if (o.loaded && c > -1) {
              const u = this.bwEstimator.getEstimateTTFB();
              this.bwEstimator.sample(l - Math.min(u, c), o.loaded);
            } else
              this.bwEstimator.sampleTTFB(l);
          }
          break;
        }
      }
  }
  getTimeToLoadFrag(e, t, s, i) {
    const r = e + s / t, a = i ? this.lastLevelLoadSec : 0;
    return r + a;
  }
  onLevelLoaded(e, t) {
    const s = this.hls.config, {
      loading: i
    } = t.stats, r = i.end - i.start;
    O(r) && (this.lastLevelLoadSec = r / 1e3), t.details.live ? this.bwEstimator.update(s.abrEwmaSlowLive, s.abrEwmaFastLive) : this.bwEstimator.update(s.abrEwmaSlowVoD, s.abrEwmaFastVoD);
  }
  onFragLoaded(e, {
    frag: t,
    part: s
  }) {
    const i = s ? s.stats : t.stats;
    if (t.type === N.MAIN && this.bwEstimator.sampleTTFB(i.loading.first - i.loading.start), !this.ignoreFragment(t)) {
      if (this.clearTimer(), t.level === this._nextAutoLevel && (this._nextAutoLevel = -1), this.firstSelection = -1, this.hls.config.abrMaxWithRealBitrate) {
        const r = s ? s.duration : t.duration, a = this.hls.levels[t.level], o = (a.loaded ? a.loaded.bytes : 0) + i.loaded, l = (a.loaded ? a.loaded.duration : 0) + r;
        a.loaded = {
          bytes: o,
          duration: l
        }, a.realBitrate = Math.round(8 * o / l);
      }
      if (t.bitrateTest) {
        const r = {
          stats: i,
          frag: t,
          part: s,
          id: t.type
        };
        this.onFragBuffered(p.FRAG_BUFFERED, r), t.bitrateTest = !1;
      } else
        this.lastLoadedFragLevel = t.level;
    }
  }
  onFragBuffered(e, t) {
    const {
      frag: s,
      part: i
    } = t, r = i != null && i.stats.loaded ? i.stats : s.stats;
    if (r.aborted || this.ignoreFragment(s))
      return;
    const a = r.parsing.end - r.loading.start - Math.min(r.loading.first - r.loading.start, this.bwEstimator.getEstimateTTFB());
    this.bwEstimator.sample(a, r.loaded), r.bwEstimate = this.getBwEstimate(), s.bitrateTest ? this.bitrateTestDelay = a / 1e3 : this.bitrateTestDelay = 0;
  }
  ignoreFragment(e) {
    return e.type !== N.MAIN || e.sn === "initSegment";
  }
  clearTimer() {
    this.timer > -1 && (self.clearInterval(this.timer), this.timer = -1);
  }
  get firstAutoLevel() {
    const {
      maxAutoLevel: e,
      minAutoLevel: t
    } = this.hls, s = this.getBwEstimate(), i = this.hls.config.maxStarvationDelay, r = this.findBestLevel(s, t, e, 0, i, 1, 1);
    if (r > -1)
      return r;
    const a = this.hls.firstLevel, o = Math.min(Math.max(a, t), e);
    return this.warn(`Could not find best starting auto level. Defaulting to first in playlist ${a} clamped to ${o}`), o;
  }
  get forcedAutoLevel() {
    return this.nextAutoLevelKey ? -1 : this._nextAutoLevel;
  }
  // return next auto level
  get nextAutoLevel() {
    const e = this.forcedAutoLevel, s = this.bwEstimator.canEstimate(), i = this.lastLoadedFragLevel > -1;
    if (e !== -1 && (!s || !i || this.nextAutoLevelKey === this.getAutoLevelKey()))
      return e;
    const r = s && i ? this.getNextABRAutoLevel() : this.firstAutoLevel;
    if (e !== -1) {
      const a = this.hls.levels;
      if (a.length > Math.max(e, r) && a[e].loadError <= a[r].loadError)
        return e;
    }
    return this._nextAutoLevel = r, this.nextAutoLevelKey = this.getAutoLevelKey(), r;
  }
  getAutoLevelKey() {
    return `${this.getBwEstimate()}_${this.getStarvationDelay().toFixed(2)}`;
  }
  getNextABRAutoLevel() {
    const {
      fragCurrent: e,
      partCurrent: t,
      hls: s
    } = this;
    if (s.levels.length <= 1)
      return s.loadLevel;
    const {
      maxAutoLevel: i,
      config: r,
      minAutoLevel: a
    } = s, o = t ? t.duration : e ? e.duration : 0, l = this.getBwEstimate(), c = this.getStarvationDelay();
    let h = r.abrBandWidthFactor, u = r.abrBandWidthUpFactor;
    if (c) {
      const y = this.findBestLevel(l, a, i, c, 0, h, u);
      if (y >= 0)
        return y;
    }
    let d = o ? Math.min(o, r.maxStarvationDelay) : r.maxStarvationDelay;
    if (!c) {
      const y = this.bitrateTestDelay;
      y && (d = (o ? Math.min(o, r.maxLoadingDelay) : r.maxLoadingDelay) - y, this.info(`bitrate test took ${Math.round(1e3 * y)}ms, set first fragment max fetchDuration to ${Math.round(1e3 * d)} ms`), h = u = 1);
    }
    const g = this.findBestLevel(l, a, i, c, d, h, u);
    if (this.info(`${c ? "rebuffering expected" : "buffer is empty"}, optimal quality level ${g}`), g > -1)
      return g;
    const f = s.levels[a], m = s.levels[s.loadLevel];
    return (f == null ? void 0 : f.bitrate) < (m == null ? void 0 : m.bitrate) ? a : s.loadLevel;
  }
  getStarvationDelay() {
    const e = this.hls, t = e.media;
    if (!t)
      return 1 / 0;
    const s = t && t.playbackRate !== 0 ? Math.abs(t.playbackRate) : 1, i = e.mainForwardBufferInfo;
    return (i ? i.len : 0) / s;
  }
  getBwEstimate() {
    return this.bwEstimator.canEstimate() ? this.bwEstimator.getEstimate() : this.hls.config.abrEwmaDefaultEstimate;
  }
  findBestLevel(e, t, s, i, r, a, o) {
    var l;
    const c = i + r, h = this.lastLoadedFragLevel, u = h === -1 ? this.hls.firstLevel : h, {
      fragCurrent: d,
      partCurrent: g
    } = this, {
      levels: f,
      allAudioTracks: m,
      loadLevel: y,
      config: E
    } = this.hls;
    if (f.length === 1)
      return 0;
    const x = f[u], T = !!(x != null && (l = x.details) != null && l.live), _ = y === -1 || h === -1;
    let A, D = "SDR", v = (x == null ? void 0 : x.frameRate) || 0;
    const {
      audioPreference: b,
      videoPreference: C
    } = E, R = this.audioTracksByGroup || (this.audioTracksByGroup = gl(m));
    let w = -1;
    if (_) {
      if (this.firstSelection !== -1)
        return this.firstSelection;
      const G = this.codecTiers || (this.codecTiers = ml(f, R, t, s)), U = fl(G, D, e, b, C), {
        codecSet: X,
        videoRanges: P,
        minFramerate: M,
        minBitrate: W,
        minIndex: V,
        preferHDR: Y
      } = U;
      w = V, A = X, D = Y ? P[P.length - 1] : P[0], v = M, e = Math.max(e, W), this.log(`picked start tier ${JSON.stringify(U)}`);
    } else
      A = x == null ? void 0 : x.codecSet, D = x == null ? void 0 : x.videoRange;
    const F = g ? g.duration : d ? d.duration : 0, te = this.bwEstimator.getEstimateTTFB() / 1e3, k = [];
    for (let G = s; G >= t; G--) {
      var K;
      const U = f[G], X = G > u;
      if (!U)
        continue;
      if (E.useMediaCapabilities && !U.supportedResult && !U.supportedPromise) {
        const re = navigator.mediaCapabilities;
        typeof (re == null ? void 0 : re.decodingInfo) == "function" && ll(U, R, D, v, e, b) ? (U.supportedPromise = cl(U, R, re), U.supportedPromise.then((se) => {
          if (!this.hls)
            return;
          U.supportedResult = se;
          const pe = this.hls.levels, Ee = pe.indexOf(U);
          se.error ? this.warn(`MediaCapabilities decodingInfo error: "${se.error}" for level ${Ee} ${JSON.stringify(se)}`) : se.supported || (this.warn(`Unsupported MediaCapabilities decodingInfo result for level ${Ee} ${JSON.stringify(se)}`), Ee > -1 && pe.length > 1 && (this.log(`Removing unsupported level ${Ee}`), this.hls.removeLevel(Ee)));
        })) : U.supportedResult = kn;
      }
      if ((A && U.codecSet !== A || D && U.videoRange !== D || X && v > U.frameRate || !X && v > 0 && v < U.frameRate || U.supportedResult && !((K = U.supportedResult.decodingInfoResults) != null && K[0].smooth)) && (!_ || G !== w)) {
        k.push(G);
        continue;
      }
      const P = U.details, M = (g ? P == null ? void 0 : P.partTarget : P == null ? void 0 : P.averagetargetduration) || F;
      let W;
      X ? W = o * e : W = a * e;
      const V = F && i >= F * 2 && r === 0 ? f[G].averageBitrate : f[G].maxBitrate, Y = this.getTimeToLoadFrag(te, W, V * M, P === void 0);
      if (
        // if adjusted bw is greater than level bitrate AND
        W >= V && // no level change, or new level has no error history
        (G === h || U.loadError === 0 && U.fragmentError === 0) && // fragment fetchDuration unknown OR live stream OR fragment fetchDuration less than max allowed fetch duration, then this level matches
        // we don't account for max Fetch Duration for live streams, this is to avoid switching down when near the edge of live sliding window ...
        // special case to support startLevel = -1 (bitrateTest) on live streams : in that case we should not exit loop so that findBestLevel will return -1
        (Y <= te || !O(Y) || T && !this.bitrateTestDelay || Y < c)
      ) {
        const re = this.forcedAutoLevel;
        return G !== y && (re === -1 || re !== y) && (k.length && this.trace(`Skipped level(s) ${k.join(",")} of ${s} max with CODECS and VIDEO-RANGE:"${f[k[0]].codecs}" ${f[k[0]].videoRange}; not compatible with "${x.codecs}" ${D}`), this.info(`switch candidate:${u}->${G} adjustedbw(${Math.round(W)})-bitrate=${Math.round(W - V)} ttfb:${te.toFixed(1)} avgDuration:${M.toFixed(1)} maxFetchDuration:${c.toFixed(1)} fetchDuration:${Y.toFixed(1)} firstSelection:${_} codecSet:${U.codecSet} videoRange:${U.videoRange} hls.loadLevel:${y}`)), _ && (this.firstSelection = G), G;
      }
    }
    return -1;
  }
  set nextAutoLevel(e) {
    const {
      maxAutoLevel: t,
      minAutoLevel: s
    } = this.hls, i = Math.min(Math.max(e, s), t);
    this._nextAutoLevel !== i && (this.nextAutoLevelKey = "", this._nextAutoLevel = i);
  }
}
class Tl extends qe {
  constructor(e, t) {
    super(e, t), this._boundTick = void 0, this._tickTimer = null, this._tickInterval = null, this._tickCallCount = 0, this._boundTick = this.tick.bind(this);
  }
  destroy() {
    this.onHandlerDestroying(), this.onHandlerDestroyed();
  }
  onHandlerDestroying() {
    this.clearNextTick(), this.clearInterval();
  }
  onHandlerDestroyed() {
  }
  hasInterval() {
    return !!this._tickInterval;
  }
  hasNextTick() {
    return !!this._tickTimer;
  }
  /**
   * @param millis - Interval time (ms)
   * @eturns True when interval has been scheduled, false when already scheduled (no effect)
   */
  setInterval(e) {
    return this._tickInterval ? !1 : (this._tickCallCount = 0, this._tickInterval = self.setInterval(this._boundTick, e), !0);
  }
  /**
   * @returns True when interval was cleared, false when none was set (no effect)
   */
  clearInterval() {
    return this._tickInterval ? (self.clearInterval(this._tickInterval), this._tickInterval = null, !0) : !1;
  }
  /**
   * @returns True when timeout was cleared, false when none was set (no effect)
   */
  clearNextTick() {
    return this._tickTimer ? (self.clearTimeout(this._tickTimer), this._tickTimer = null, !0) : !1;
  }
  /**
   * Will call the subclass doTick implementation in this main loop tick
   * or in the next one (via setTimeout(,0)) in case it has already been called
   * in this tick (in case this is a re-entrant call).
   */
  tick() {
    this._tickCallCount++, this._tickCallCount === 1 && (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), this._tickCallCount = 0);
  }
  tickImmediate() {
    this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0);
  }
  /**
   * For subclass to implement task logic
   * @abstract
   */
  doTick() {
  }
}
var le = {
  NOT_LOADED: "NOT_LOADED",
  APPENDING: "APPENDING",
  PARTIAL: "PARTIAL",
  OK: "OK"
};
class xl {
  constructor(e) {
    this.activePartLists = /* @__PURE__ */ Object.create(null), this.endListFragments = /* @__PURE__ */ Object.create(null), this.fragments = /* @__PURE__ */ Object.create(null), this.timeRanges = /* @__PURE__ */ Object.create(null), this.bufferPadding = 0.2, this.hls = void 0, this.hasGaps = !1, this.hls = e, this._registerListeners();
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e.on(p.MANIFEST_LOADING, this.onManifestLoading, this), e.on(p.BUFFER_APPENDED, this.onBufferAppended, this), e.on(p.FRAG_BUFFERED, this.onFragBuffered, this), e.on(p.FRAG_LOADED, this.onFragLoaded, this);
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(p.MANIFEST_LOADING, this.onManifestLoading, this), e.off(p.BUFFER_APPENDED, this.onBufferAppended, this), e.off(p.FRAG_BUFFERED, this.onFragBuffered, this), e.off(p.FRAG_LOADED, this.onFragLoaded, this);
  }
  destroy() {
    this._unregisterListeners(), this.fragments = // @ts-ignore
    this.activePartLists = // @ts-ignore
    this.endListFragments = this.timeRanges = null;
  }
  /**
   * Return a Fragment or Part with an appended range that matches the position and levelType
   * Otherwise, return null
   */
  getAppendedFrag(e, t) {
    const s = this.activePartLists[t];
    if (s)
      for (let i = s.length; i--; ) {
        const r = s[i];
        if (!r)
          break;
        const a = r.end;
        if (r.start <= e && a !== null && e <= a)
          return r;
      }
    return this.getBufferedFrag(e, t);
  }
  /**
   * Return a buffered Fragment that matches the position and levelType.
   * A buffered Fragment is one whose loading, parsing and appending is done (completed or "partial" meaning aborted).
   * If not found any Fragment, return null
   */
  getBufferedFrag(e, t) {
    return this.getFragAtPos(e, t, !0);
  }
  getFragAtPos(e, t, s) {
    const {
      fragments: i
    } = this, r = Object.keys(i);
    for (let a = r.length; a--; ) {
      const o = i[r[a]];
      if ((o == null ? void 0 : o.body.type) === t && (!s || o.buffered)) {
        const l = o.body;
        if (l.start <= e && e <= l.end)
          return l;
      }
    }
    return null;
  }
  /**
   * Partial fragments effected by coded frame eviction will be removed
   * The browser will unload parts of the buffer to free up memory for new buffer data
   * Fragments will need to be reloaded when the buffer is freed up, removing partial fragments will allow them to reload(since there might be parts that are still playable)
   */
  detectEvictedFragments(e, t, s, i, r) {
    this.timeRanges && (this.timeRanges[e] = t);
    const a = (i == null ? void 0 : i.fragment.sn) || -1;
    Object.keys(this.fragments).forEach((o) => {
      const l = this.fragments[o];
      if (!l || a >= l.body.sn)
        return;
      if (!l.buffered && (!l.loaded || r)) {
        l.body.type === s && this.removeFragment(l.body);
        return;
      }
      const c = l.range[e];
      if (c) {
        if (c.time.length === 0) {
          this.removeFragment(l.body);
          return;
        }
        c.time.some((h) => {
          const u = !this.isTimeBuffered(h.startPTS, h.endPTS, t);
          return u && this.removeFragment(l.body), u;
        });
      }
    });
  }
  /**
   * Checks if the fragment passed in is loaded in the buffer properly
   * Partially loaded fragments will be registered as a partial fragment
   */
  detectPartialFragments(e) {
    const t = this.timeRanges;
    if (!t || e.frag.sn === "initSegment")
      return;
    const s = e.frag, i = st(s), r = this.fragments[i];
    if (!r || r.buffered && s.gap)
      return;
    const a = !s.relurl;
    Object.keys(t).forEach((o) => {
      const l = s.elementaryStreams[o];
      if (!l)
        return;
      const c = t[o], h = a || l.partial === !0;
      r.range[o] = this.getBufferedTimes(s, e.part, h, c);
    }), r.loaded = null, Object.keys(r.range).length ? (r.buffered = !0, (r.body.endList = s.endList || r.body.endList) && (this.endListFragments[r.body.type] = r), Mt(r) || this.removeParts(s.sn - 1, s.type)) : this.removeFragment(r.body);
  }
  removeParts(e, t) {
    const s = this.activePartLists[t];
    s && (this.activePartLists[t] = s.filter((i) => i.fragment.sn >= e));
  }
  fragBuffered(e, t) {
    const s = st(e);
    let i = this.fragments[s];
    !i && t && (i = this.fragments[s] = {
      body: e,
      appendedPTS: null,
      loaded: null,
      buffered: !1,
      range: /* @__PURE__ */ Object.create(null)
    }, e.gap && (this.hasGaps = !0)), i && (i.loaded = null, i.buffered = !0);
  }
  getBufferedTimes(e, t, s, i) {
    const r = {
      time: [],
      partial: s
    }, a = e.start, o = e.end, l = e.minEndPTS || o, c = e.maxStartPTS || a;
    for (let h = 0; h < i.length; h++) {
      const u = i.start(h) - this.bufferPadding, d = i.end(h) + this.bufferPadding;
      if (c >= u && l <= d) {
        r.time.push({
          startPTS: Math.max(a, i.start(h)),
          endPTS: Math.min(o, i.end(h))
        });
        break;
      } else if (a < d && o > u) {
        const g = Math.max(a, i.start(h)), f = Math.min(o, i.end(h));
        f > g && (r.partial = !0, r.time.push({
          startPTS: g,
          endPTS: f
        }));
      } else if (o <= u)
        break;
    }
    return r;
  }
  /**
   * Gets the partial fragment for a certain time
   */
  getPartialFragment(e) {
    let t = null, s, i, r, a = 0;
    const {
      bufferPadding: o,
      fragments: l
    } = this;
    return Object.keys(l).forEach((c) => {
      const h = l[c];
      h && Mt(h) && (i = h.body.start - o, r = h.body.end + o, e >= i && e <= r && (s = Math.min(e - i, r - e), a <= s && (t = h.body, a = s)));
    }), t;
  }
  isEndListAppended(e) {
    const t = this.endListFragments[e];
    return t !== void 0 && (t.buffered || Mt(t));
  }
  getState(e) {
    const t = st(e), s = this.fragments[t];
    return s ? s.buffered ? Mt(s) ? le.PARTIAL : le.OK : le.APPENDING : le.NOT_LOADED;
  }
  isTimeBuffered(e, t, s) {
    let i, r;
    for (let a = 0; a < s.length; a++) {
      if (i = s.start(a) - this.bufferPadding, r = s.end(a) + this.bufferPadding, e >= i && t <= r)
        return !0;
      if (t <= i)
        return !1;
    }
    return !1;
  }
  onManifestLoading() {
    this.removeAllFragments();
  }
  onFragLoaded(e, t) {
    if (t.frag.sn === "initSegment" || t.frag.bitrateTest)
      return;
    const s = t.frag, i = t.part ? null : t, r = st(s);
    this.fragments[r] = {
      body: s,
      appendedPTS: null,
      loaded: i,
      buffered: !1,
      range: /* @__PURE__ */ Object.create(null)
    };
  }
  onBufferAppended(e, t) {
    const {
      frag: s,
      part: i,
      timeRanges: r,
      type: a
    } = t;
    if (s.sn === "initSegment")
      return;
    const o = s.type;
    if (i) {
      let c = this.activePartLists[o];
      c || (this.activePartLists[o] = c = []), c.push(i);
    }
    this.timeRanges = r;
    const l = r[a];
    this.detectEvictedFragments(a, l, o, i);
  }
  onFragBuffered(e, t) {
    this.detectPartialFragments(t);
  }
  hasFragment(e) {
    const t = st(e);
    return !!this.fragments[t];
  }
  hasFragments(e) {
    const {
      fragments: t
    } = this, s = Object.keys(t);
    if (!e)
      return s.length > 0;
    for (let i = s.length; i--; ) {
      const r = t[s[i]];
      if ((r == null ? void 0 : r.body.type) === e)
        return !0;
    }
    return !1;
  }
  hasParts(e) {
    var t;
    return !!((t = this.activePartLists[e]) != null && t.length);
  }
  removeFragmentsInRange(e, t, s, i, r) {
    i && !this.hasGaps || Object.keys(this.fragments).forEach((a) => {
      const o = this.fragments[a];
      if (!o)
        return;
      const l = o.body;
      l.type !== s || i && !l.gap || l.start < t && l.end > e && (o.buffered || r) && this.removeFragment(l);
    });
  }
  removeFragment(e) {
    const t = st(e);
    e.stats.loaded = 0, e.clearElementaryStreamInfo();
    const s = this.activePartLists[e.type];
    if (s) {
      const i = e.sn;
      this.activePartLists[e.type] = s.filter((r) => r.fragment.sn !== i);
    }
    delete this.fragments[t], e.endList && delete this.endListFragments[e.type];
  }
  removeAllFragments() {
    this.fragments = /* @__PURE__ */ Object.create(null), this.endListFragments = /* @__PURE__ */ Object.create(null), this.activePartLists = /* @__PURE__ */ Object.create(null), this.hasGaps = !1;
  }
}
function Mt(n) {
  var e, t, s;
  return n.buffered && (n.body.gap || ((e = n.range.video) == null ? void 0 : e.partial) || ((t = n.range.audio) == null ? void 0 : t.partial) || ((s = n.range.audiovideo) == null ? void 0 : s.partial));
}
function st(n) {
  return `${n.type}_${n.level}_${n.sn}`;
}
const Sr = {
  length: 0,
  start: () => 0,
  end: () => 0
};
class ee {
  /**
   * Return true if `media`'s buffered include `position`
   */
  static isBuffered(e, t) {
    if (e) {
      const s = ee.getBuffered(e);
      for (let i = s.length; i--; )
        if (t >= s.start(i) && t <= s.end(i))
          return !0;
    }
    return !1;
  }
  static bufferInfo(e, t, s) {
    if (e) {
      const i = ee.getBuffered(e);
      if (i.length) {
        const r = [];
        for (let a = 0; a < i.length; a++)
          r.push({
            start: i.start(a),
            end: i.end(a)
          });
        return ee.bufferedInfo(r, t, s);
      }
    }
    return {
      len: 0,
      start: t,
      end: t,
      nextStart: void 0
    };
  }
  static bufferedInfo(e, t, s) {
    t = Math.max(0, t), e.sort((c, h) => c.start - h.start || h.end - c.end);
    let i = [];
    if (s)
      for (let c = 0; c < e.length; c++) {
        const h = i.length;
        if (h) {
          const u = i[h - 1].end;
          e[c].start - u < s ? e[c].end > u && (i[h - 1].end = e[c].end) : i.push(e[c]);
        } else
          i.push(e[c]);
      }
    else
      i = e;
    let r = 0, a, o = t, l = t;
    for (let c = 0; c < i.length; c++) {
      const h = i[c].start, u = i[c].end;
      if (t + s >= h && t < u)
        o = h, l = u, r = l - t;
      else if (t + s < h) {
        a = h;
        break;
      }
    }
    return {
      len: r,
      start: o || 0,
      end: l || 0,
      nextStart: a
    };
  }
  /**
   * Safe method to get buffered property.
   * SourceBuffer.buffered may throw if SourceBuffer is removed from it's MediaSource
   */
  static getBuffered(e) {
    try {
      return e.buffered || Sr;
    } catch (t) {
      return q.log("failed to get media.buffered", t), Sr;
    }
  }
}
class mi {
  constructor(e, t, s, i = 0, r = -1, a = !1) {
    this.level = void 0, this.sn = void 0, this.part = void 0, this.id = void 0, this.size = void 0, this.partial = void 0, this.transmuxing = Nt(), this.buffering = {
      audio: Nt(),
      video: Nt(),
      audiovideo: Nt()
    }, this.level = e, this.sn = t, this.id = s, this.size = i, this.part = r, this.partial = a;
  }
}
function Nt() {
  return {
    start: 0,
    executeStart: 0,
    executeEnd: 0,
    end: 0
  };
}
function xt(n, e) {
  for (let s = 0, i = n.length; s < i; s++) {
    var t;
    if (((t = n[s]) == null ? void 0 : t.cc) === e)
      return n[s];
  }
  return null;
}
function Sl(n, e) {
  return !!(n && e.startCC < n.endCC && e.endCC > n.startCC);
}
function vr(n, e) {
  if (n) {
    const t = n.start + e;
    n.start = n.startPTS = t, n.endPTS = t + n.duration;
  }
}
function Pn(n, e) {
  const t = e.fragments;
  for (let s = 0, i = t.length; s < i; s++)
    vr(t[s], n);
  e.fragmentHint && vr(e.fragmentHint, n), e.alignedSliding = !0;
}
function vl(n, e, t) {
  e && (Al(t, e), !t.alignedSliding && e && ls(t, e), !t.alignedSliding && e && !t.skippedSegments && In(e, t));
}
function Al(n, e) {
  if (!Sl(e, n))
    return;
  const t = Math.min(e.endCC, n.endCC), s = xt(e.fragments, t), i = xt(n.fragments, t);
  if (!s || !i)
    return;
  q.log(`Aligning playlist at start of dicontinuity sequence ${t}`);
  const r = s.start - i.start;
  Pn(r, n);
}
function ls(n, e) {
  if (!n.hasProgramDateTime || !e.hasProgramDateTime)
    return;
  const t = n.fragments, s = e.fragments;
  if (!t.length || !s.length)
    return;
  let i, r;
  const a = Math.min(e.endCC, n.endCC);
  e.startCC < a && n.startCC < a && (i = xt(s, a), r = xt(t, a)), (!i || !r) && (i = s[Math.floor(s.length / 2)], r = xt(t, i.cc) || t[Math.floor(t.length / 2)]);
  const o = i.programDateTime, l = r.programDateTime;
  if (!o || !l)
    return;
  const c = (l - o) / 1e3 - (r.start - i.start);
  Pn(c, n);
}
const Ar = Math.pow(2, 17);
class Ll {
  constructor(e) {
    this.config = void 0, this.loader = null, this.partLoadTimeout = -1, this.config = e;
  }
  destroy() {
    this.loader && (this.loader.destroy(), this.loader = null);
  }
  abort() {
    this.loader && this.loader.abort();
  }
  load(e, t) {
    const s = e.url;
    if (!s)
      return Promise.reject(new Ue({
        type: $.NETWORK_ERROR,
        details: L.FRAG_LOAD_ERROR,
        fatal: !1,
        frag: e,
        error: new Error(`Fragment does not have a ${s ? "part list" : "url"}`),
        networkDetails: null
      }));
    this.abort();
    const i = this.config, r = i.fLoader, a = i.loader;
    return new Promise((o, l) => {
      if (this.loader && this.loader.destroy(), e.gap)
        if (e.tagList.some((g) => g[0] === "GAP")) {
          l(Rr(e));
          return;
        } else
          e.gap = !1;
      const c = this.loader = r ? new r(i) : new a(i), h = Lr(e);
      e.loader = c;
      const u = pr(i.fragLoadPolicy.default), d = {
        loadPolicy: u,
        timeout: u.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0,
        highWaterMark: e.sn === "initSegment" ? 1 / 0 : Ar
      };
      e.stats = c.stats, c.load(h, d, {
        onSuccess: (g, f, m, y) => {
          this.resetLoader(e, c);
          let E = g.data;
          m.resetIV && e.decryptdata && (e.decryptdata.iv = new Uint8Array(E.slice(0, 16)), E = E.slice(16)), o({
            frag: e,
            part: null,
            payload: E,
            networkDetails: y
          });
        },
        onError: (g, f, m, y) => {
          this.resetLoader(e, c), l(new Ue({
            type: $.NETWORK_ERROR,
            details: L.FRAG_LOAD_ERROR,
            fatal: !1,
            frag: e,
            response: he({
              url: s,
              data: void 0
            }, g),
            error: new Error(`HTTP Error ${g.code} ${g.text}`),
            networkDetails: m,
            stats: y
          }));
        },
        onAbort: (g, f, m) => {
          this.resetLoader(e, c), l(new Ue({
            type: $.NETWORK_ERROR,
            details: L.INTERNAL_ABORTED,
            fatal: !1,
            frag: e,
            error: new Error("Aborted"),
            networkDetails: m,
            stats: g
          }));
        },
        onTimeout: (g, f, m) => {
          this.resetLoader(e, c), l(new Ue({
            type: $.NETWORK_ERROR,
            details: L.FRAG_LOAD_TIMEOUT,
            fatal: !1,
            frag: e,
            error: new Error(`Timeout after ${d.timeout}ms`),
            networkDetails: m,
            stats: g
          }));
        },
        onProgress: (g, f, m, y) => {
          t && t({
            frag: e,
            part: null,
            payload: m,
            networkDetails: y
          });
        }
      });
    });
  }
  loadPart(e, t, s) {
    this.abort();
    const i = this.config, r = i.fLoader, a = i.loader;
    return new Promise((o, l) => {
      if (this.loader && this.loader.destroy(), e.gap || t.gap) {
        l(Rr(e, t));
        return;
      }
      const c = this.loader = r ? new r(i) : new a(i), h = Lr(e, t);
      e.loader = c;
      const u = pr(i.fragLoadPolicy.default), d = {
        loadPolicy: u,
        timeout: u.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0,
        highWaterMark: Ar
      };
      t.stats = c.stats, c.load(h, d, {
        onSuccess: (g, f, m, y) => {
          this.resetLoader(e, c), this.updateStatsFromPart(e, t);
          const E = {
            frag: e,
            part: t,
            payload: g.data,
            networkDetails: y
          };
          s(E), o(E);
        },
        onError: (g, f, m, y) => {
          this.resetLoader(e, c), l(new Ue({
            type: $.NETWORK_ERROR,
            details: L.FRAG_LOAD_ERROR,
            fatal: !1,
            frag: e,
            part: t,
            response: he({
              url: h.url,
              data: void 0
            }, g),
            error: new Error(`HTTP Error ${g.code} ${g.text}`),
            networkDetails: m,
            stats: y
          }));
        },
        onAbort: (g, f, m) => {
          e.stats.aborted = t.stats.aborted, this.resetLoader(e, c), l(new Ue({
            type: $.NETWORK_ERROR,
            details: L.INTERNAL_ABORTED,
            fatal: !1,
            frag: e,
            part: t,
            error: new Error("Aborted"),
            networkDetails: m,
            stats: g
          }));
        },
        onTimeout: (g, f, m) => {
          this.resetLoader(e, c), l(new Ue({
            type: $.NETWORK_ERROR,
            details: L.FRAG_LOAD_TIMEOUT,
            fatal: !1,
            frag: e,
            part: t,
            error: new Error(`Timeout after ${d.timeout}ms`),
            networkDetails: m,
            stats: g
          }));
        }
      });
    });
  }
  updateStatsFromPart(e, t) {
    const s = e.stats, i = t.stats, r = i.total;
    if (s.loaded += i.loaded, r) {
      const l = Math.round(e.duration / t.duration), c = Math.min(Math.round(s.loaded / r), l), u = (l - c) * Math.round(s.loaded / c);
      s.total = s.loaded + u;
    } else
      s.total = Math.max(s.loaded, s.total);
    const a = s.loading, o = i.loading;
    a.start ? a.first += o.first - o.start : (a.start = o.start, a.first = o.first), a.end = o.end;
  }
  resetLoader(e, t) {
    e.loader = null, this.loader === t && (self.clearTimeout(this.partLoadTimeout), this.loader = null), t.destroy();
  }
}
function Lr(n, e = null) {
  const t = e || n, s = {
    frag: n,
    part: e,
    responseType: "arraybuffer",
    url: t.url,
    headers: {},
    rangeStart: 0,
    rangeEnd: 0
  }, i = t.byteRangeStartOffset, r = t.byteRangeEndOffset;
  if (O(i) && O(r)) {
    var a;
    let o = i, l = r;
    if (n.sn === "initSegment" && Rl((a = n.decryptdata) == null ? void 0 : a.method)) {
      const c = r - i;
      c % 16 && (l = r + (16 - c % 16)), i !== 0 && (s.resetIV = !0, o = i - 16);
    }
    s.rangeStart = o, s.rangeEnd = l;
  }
  return s;
}
function Rr(n, e) {
  const t = new Error(`GAP ${n.gap ? "tag" : "attribute"} found`), s = {
    type: $.MEDIA_ERROR,
    details: L.FRAG_GAP,
    fatal: !1,
    frag: n,
    error: t,
    networkDetails: null
  };
  return e && (s.part = e), (e || n).stats.aborted = !0, new Ue(s);
}
function Rl(n) {
  return n === "AES-128" || n === "AES-256";
}
class Ue extends Error {
  constructor(e) {
    super(e.error.message), this.data = void 0, this.data = e;
  }
}
class _l {
  constructor(e, t, s) {
    this.subtle = void 0, this.aesIV = void 0, this.aesMode = void 0, this.subtle = e, this.aesIV = t, this.aesMode = s;
  }
  decrypt(e, t) {
    switch (this.aesMode) {
      case We.cbc:
        return this.subtle.decrypt({
          name: "AES-CBC",
          iv: this.aesIV
        }, t, e);
      case We.ctr:
        return this.subtle.decrypt(
          {
            name: "AES-CTR",
            counter: this.aesIV,
            length: 64
          },
          //64 : NIST SP800-38A standard suggests that the counter should occupy half of the counter block
          t,
          e
        );
      default:
        throw new Error(`[AESCrypto] invalid aes mode ${this.aesMode}`);
    }
  }
}
class bl {
  constructor(e, t, s) {
    this.subtle = void 0, this.key = void 0, this.aesMode = void 0, this.subtle = e, this.key = t, this.aesMode = s;
  }
  expandKey() {
    const e = Il(this.aesMode);
    return this.subtle.importKey("raw", this.key, {
      name: e
    }, !1, ["encrypt", "decrypt"]);
  }
}
function Il(n) {
  switch (n) {
    case We.cbc:
      return "AES-CBC";
    case We.ctr:
      return "AES-CTR";
    default:
      throw new Error(`[FastAESKey] invalid aes mode ${n}`);
  }
}
function Dl(n) {
  const e = n.byteLength, t = e && new DataView(n.buffer).getUint8(e - 1);
  return t ? Je(n, 0, e - t) : n;
}
class Cl {
  constructor() {
    this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.ksRows = 0, this.keySize = 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.initTable();
  }
  // Using view.getUint32() also swaps the byte order.
  uint8ArrayToUint32Array_(e) {
    const t = new DataView(e), s = new Uint32Array(4);
    for (let i = 0; i < 4; i++)
      s[i] = t.getUint32(i * 4);
    return s;
  }
  initTable() {
    const e = this.sBox, t = this.invSBox, s = this.subMix, i = s[0], r = s[1], a = s[2], o = s[3], l = this.invSubMix, c = l[0], h = l[1], u = l[2], d = l[3], g = new Uint32Array(256);
    let f = 0, m = 0, y = 0;
    for (y = 0; y < 256; y++)
      y < 128 ? g[y] = y << 1 : g[y] = y << 1 ^ 283;
    for (y = 0; y < 256; y++) {
      let E = m ^ m << 1 ^ m << 2 ^ m << 3 ^ m << 4;
      E = E >>> 8 ^ E & 255 ^ 99, e[f] = E, t[E] = f;
      const x = g[f], T = g[x], _ = g[T];
      let A = g[E] * 257 ^ E * 16843008;
      i[f] = A << 24 | A >>> 8, r[f] = A << 16 | A >>> 16, a[f] = A << 8 | A >>> 24, o[f] = A, A = _ * 16843009 ^ T * 65537 ^ x * 257 ^ f * 16843008, c[E] = A << 24 | A >>> 8, h[E] = A << 16 | A >>> 16, u[E] = A << 8 | A >>> 24, d[E] = A, f ? (f = x ^ g[g[g[_ ^ x]]], m ^= g[g[m]]) : f = m = 1;
    }
  }
  expandKey(e) {
    const t = this.uint8ArrayToUint32Array_(e);
    let s = !0, i = 0;
    for (; i < t.length && s; )
      s = t[i] === this.key[i], i++;
    if (s)
      return;
    this.key = t;
    const r = this.keySize = t.length;
    if (r !== 4 && r !== 6 && r !== 8)
      throw new Error("Invalid aes key size=" + r);
    const a = this.ksRows = (r + 6 + 1) * 4;
    let o, l;
    const c = this.keySchedule = new Uint32Array(a), h = this.invKeySchedule = new Uint32Array(a), u = this.sBox, d = this.rcon, g = this.invSubMix, f = g[0], m = g[1], y = g[2], E = g[3];
    let x, T;
    for (o = 0; o < a; o++) {
      if (o < r) {
        x = c[o] = t[o];
        continue;
      }
      T = x, o % r === 0 ? (T = T << 8 | T >>> 24, T = u[T >>> 24] << 24 | u[T >>> 16 & 255] << 16 | u[T >>> 8 & 255] << 8 | u[T & 255], T ^= d[o / r | 0] << 24) : r > 6 && o % r === 4 && (T = u[T >>> 24] << 24 | u[T >>> 16 & 255] << 16 | u[T >>> 8 & 255] << 8 | u[T & 255]), c[o] = x = (c[o - r] ^ T) >>> 0;
    }
    for (l = 0; l < a; l++)
      o = a - l, l & 3 ? T = c[o] : T = c[o - 4], l < 4 || o <= 4 ? h[l] = T : h[l] = f[u[T >>> 24]] ^ m[u[T >>> 16 & 255]] ^ y[u[T >>> 8 & 255]] ^ E[u[T & 255]], h[l] = h[l] >>> 0;
  }
  // Adding this as a method greatly improves performance.
  networkToHostOrderSwap(e) {
    return e << 24 | (e & 65280) << 8 | (e & 16711680) >> 8 | e >>> 24;
  }
  decrypt(e, t, s) {
    const i = this.keySize + 6, r = this.invKeySchedule, a = this.invSBox, o = this.invSubMix, l = o[0], c = o[1], h = o[2], u = o[3], d = this.uint8ArrayToUint32Array_(s);
    let g = d[0], f = d[1], m = d[2], y = d[3];
    const E = new Int32Array(e), x = new Int32Array(E.length);
    let T, _, A, D, v, b, C, R, w, F, te, k, K, G;
    const U = this.networkToHostOrderSwap;
    for (; t < E.length; ) {
      for (w = U(E[t]), F = U(E[t + 1]), te = U(E[t + 2]), k = U(E[t + 3]), v = w ^ r[0], b = k ^ r[1], C = te ^ r[2], R = F ^ r[3], K = 4, G = 1; G < i; G++)
        T = l[v >>> 24] ^ c[b >> 16 & 255] ^ h[C >> 8 & 255] ^ u[R & 255] ^ r[K], _ = l[b >>> 24] ^ c[C >> 16 & 255] ^ h[R >> 8 & 255] ^ u[v & 255] ^ r[K + 1], A = l[C >>> 24] ^ c[R >> 16 & 255] ^ h[v >> 8 & 255] ^ u[b & 255] ^ r[K + 2], D = l[R >>> 24] ^ c[v >> 16 & 255] ^ h[b >> 8 & 255] ^ u[C & 255] ^ r[K + 3], v = T, b = _, C = A, R = D, K = K + 4;
      T = a[v >>> 24] << 24 ^ a[b >> 16 & 255] << 16 ^ a[C >> 8 & 255] << 8 ^ a[R & 255] ^ r[K], _ = a[b >>> 24] << 24 ^ a[C >> 16 & 255] << 16 ^ a[R >> 8 & 255] << 8 ^ a[v & 255] ^ r[K + 1], A = a[C >>> 24] << 24 ^ a[R >> 16 & 255] << 16 ^ a[v >> 8 & 255] << 8 ^ a[b & 255] ^ r[K + 2], D = a[R >>> 24] << 24 ^ a[v >> 16 & 255] << 16 ^ a[b >> 8 & 255] << 8 ^ a[C & 255] ^ r[K + 3], x[t] = U(T ^ g), x[t + 1] = U(D ^ f), x[t + 2] = U(A ^ m), x[t + 3] = U(_ ^ y), g = w, f = F, m = te, y = k, t = t + 4;
    }
    return x.buffer;
  }
}
const wl = 16;
class pi {
  constructor(e, {
    removePKCS7Padding: t = !0
  } = {}) {
    if (this.logEnabled = !0, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.useSoftware = void 0, this.enableSoftwareAES = void 0, this.enableSoftwareAES = e.enableSoftwareAES, this.removePKCS7Padding = t, t)
      try {
        const s = self.crypto;
        s && (this.subtle = s.subtle || s.webkitSubtle);
      } catch {
      }
    this.useSoftware = !this.subtle;
  }
  destroy() {
    this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null;
  }
  isSync() {
    return this.useSoftware;
  }
  flush() {
    const {
      currentResult: e,
      remainderData: t
    } = this;
    if (!e || t)
      return this.reset(), null;
    const s = new Uint8Array(e);
    return this.reset(), this.removePKCS7Padding ? Dl(s) : s;
  }
  reset() {
    this.currentResult = null, this.currentIV = null, this.remainderData = null, this.softwareDecrypter && (this.softwareDecrypter = null);
  }
  decrypt(e, t, s, i) {
    return this.useSoftware ? new Promise((r, a) => {
      this.softwareDecrypt(new Uint8Array(e), t, s, i);
      const o = this.flush();
      o ? r(o.buffer) : a(new Error("[softwareDecrypt] Failed to decrypt data"));
    }) : this.webCryptoDecrypt(new Uint8Array(e), t, s, i);
  }
  // Software decryption is progressive. Progressive decryption may not return a result on each call. Any cached
  // data is handled in the flush() call
  softwareDecrypt(e, t, s, i) {
    const {
      currentIV: r,
      currentResult: a,
      remainderData: o
    } = this;
    if (i !== We.cbc || t.byteLength !== 16)
      return q.warn("SoftwareDecrypt: can only handle AES-128-CBC"), null;
    this.logOnce("JS AES decrypt"), o && (e = Re(o, e), this.remainderData = null);
    const l = this.getValidChunk(e);
    if (!l.length)
      return null;
    r && (s = r);
    let c = this.softwareDecrypter;
    c || (c = this.softwareDecrypter = new Cl()), c.expandKey(t);
    const h = a;
    return this.currentResult = c.decrypt(l.buffer, 0, s), this.currentIV = Je(l, -16).buffer, h || null;
  }
  webCryptoDecrypt(e, t, s, i) {
    if (this.key !== t || !this.fastAesKey) {
      if (!this.subtle)
        return Promise.resolve(this.onWebCryptoError(e, t, s, i));
      this.key = t, this.fastAesKey = new bl(this.subtle, t, i);
    }
    return this.fastAesKey.expandKey().then((r) => this.subtle ? (this.logOnce("WebCrypto AES decrypt"), new _l(this.subtle, new Uint8Array(s), i).decrypt(e.buffer, r)) : Promise.reject(new Error("web crypto not initialized"))).catch((r) => (q.warn(`[decrypter]: WebCrypto Error, disable WebCrypto API, ${r.name}: ${r.message}`), this.onWebCryptoError(e, t, s, i)));
  }
  onWebCryptoError(e, t, s, i) {
    const r = this.enableSoftwareAES;
    if (r) {
      this.useSoftware = !0, this.logEnabled = !0, this.softwareDecrypt(e, t, s, i);
      const a = this.flush();
      if (a)
        return a.buffer;
    }
    throw new Error("WebCrypto" + (r ? " and softwareDecrypt" : "") + ": failed to decrypt data");
  }
  getValidChunk(e) {
    let t = e;
    const s = e.length - e.length % wl;
    return s !== e.length && (t = Je(e, 0, s), this.remainderData = Je(e, s)), t;
  }
  logOnce(e) {
    this.logEnabled && (q.log(`[decrypter]: ${e}`), this.logEnabled = !1);
  }
}
const kl = {
  toString: function(n) {
    let e = "";
    const t = n.length;
    for (let s = 0; s < t; s++)
      e += `[${n.start(s).toFixed(3)}-${n.end(s).toFixed(3)}]`;
    return e;
  }
}, I = {
  STOPPED: "STOPPED",
  IDLE: "IDLE",
  KEY_LOADING: "KEY_LOADING",
  FRAG_LOADING: "FRAG_LOADING",
  FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
  WAITING_TRACK: "WAITING_TRACK",
  PARSING: "PARSING",
  PARSED: "PARSED",
  ENDED: "ENDED",
  ERROR: "ERROR",
  WAITING_INIT_PTS: "WAITING_INIT_PTS",
  WAITING_LEVEL: "WAITING_LEVEL"
};
class yi extends Tl {
  constructor(e, t, s, i, r) {
    super(i, e.logger), this.hls = void 0, this.fragPrevious = null, this.fragCurrent = null, this.fragmentTracker = void 0, this.transmuxer = null, this._state = I.STOPPED, this.playlistType = void 0, this.media = null, this.mediaBuffer = null, this.config = void 0, this.bitrateTest = !1, this.lastCurrentTime = 0, this.nextLoadPosition = 0, this.startPosition = 0, this.startTimeOffset = null, this.loadedmetadata = !1, this.retryDate = 0, this.levels = null, this.fragmentLoader = void 0, this.keyLoader = void 0, this.levelLastLoaded = null, this.startFragRequested = !1, this.decrypter = void 0, this.initPTS = [], this.buffering = !0, this.loadingParts = !1, this.loopSn = void 0, this.onMediaSeeking = () => {
      const {
        config: a,
        fragCurrent: o,
        media: l,
        mediaBuffer: c,
        state: h
      } = this, u = l ? l.currentTime : 0, d = ee.bufferInfo(c || l, u, a.maxBufferHole);
      if (this.log(`media seeking to ${O(u) ? u.toFixed(3) : u}, state: ${h}`), this.state === I.ENDED)
        this.resetLoadingState();
      else if (o) {
        const g = a.maxFragLookUpTolerance, f = o.start - g, m = o.start + o.duration + g;
        if (!d.len || m < d.start || f > d.end) {
          const y = u > m;
          (u < f || y) && (y && o.loader && (this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), o.abortRequests(), this.resetLoadingState()), this.fragPrevious = null);
        }
      }
      if (l) {
        this.fragmentTracker.removeFragmentsInRange(u, 1 / 0, this.playlistType, !0);
        const g = this.lastCurrentTime;
        if (u > g && (this.lastCurrentTime = u), !this.loadingParts) {
          const f = Math.max(d.end, u), m = this.shouldLoadParts(this.getLevelDetails(), f);
          m && (this.log(`LL-Part loading ON after seeking to ${u.toFixed(2)} with buffer @${f.toFixed(2)}`), this.loadingParts = m);
        }
      }
      !this.loadedmetadata && !d.len && (this.nextLoadPosition = this.startPosition = u), this.tickImmediate();
    }, this.onMediaEnded = () => {
      this.startPosition = this.lastCurrentTime = 0, this.playlistType === N.MAIN && this.hls.trigger(p.MEDIA_ENDED, {
        stalled: !1
      });
    }, this.playlistType = r, this.hls = e, this.fragmentLoader = new Ll(e.config), this.keyLoader = s, this.fragmentTracker = t, this.config = e.config, this.decrypter = new pi(e.config);
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(p.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(p.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(p.MANIFEST_LOADING, this.onManifestLoading, this), e.on(p.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(p.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(p.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(p.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(p.MANIFEST_LOADING, this.onManifestLoading, this), e.off(p.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(p.ERROR, this.onError, this);
  }
  doTick() {
    this.onTickEnd();
  }
  onTickEnd() {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  startLoad(e) {
  }
  stopLoad() {
    if (this.state === I.STOPPED)
      return;
    this.fragmentLoader.abort(), this.keyLoader.abort(this.playlistType);
    const e = this.fragCurrent;
    e != null && e.loader && (e.abortRequests(), this.fragmentTracker.removeFragment(e)), this.resetTransmuxer(), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = I.STOPPED;
  }
  pauseBuffering() {
    this.buffering = !1;
  }
  resumeBuffering() {
    this.buffering = !0;
  }
  _streamEnded(e, t) {
    if (t.live || e.nextStart || !e.end || !this.media)
      return !1;
    const s = t.partList;
    if (s != null && s.length) {
      const r = s[s.length - 1];
      return ee.isBuffered(this.media, r.start + r.duration / 2);
    }
    const i = t.fragments[t.fragments.length - 1].type;
    return this.fragmentTracker.isEndListAppended(i);
  }
  getLevelDetails() {
    if (this.levels && this.levelLastLoaded !== null) {
      var e;
      return (e = this.levelLastLoaded) == null ? void 0 : e.details;
    }
  }
  onMediaAttached(e, t) {
    const s = this.media = this.mediaBuffer = t.media;
    s.addEventListener("seeking", this.onMediaSeeking), s.addEventListener("ended", this.onMediaEnded);
    const i = this.config;
    this.levels && i.autoStartLoad && this.state === I.STOPPED && this.startLoad(i.startPosition);
  }
  onMediaDetaching() {
    const e = this.media;
    e != null && e.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), e && (e.removeEventListener("seeking", this.onMediaSeeking), e.removeEventListener("ended", this.onMediaEnded)), this.keyLoader && this.keyLoader.detach(), this.media = this.mediaBuffer = null, this.loopSn = void 0, this.startFragRequested = this.loadedmetadata = this.loadingParts = !1, this.fragmentTracker.removeAllFragments(), this.stopLoad();
  }
  onManifestLoading() {
    this.initPTS = [], this.levels = this.levelLastLoaded = this.fragCurrent = null, this.lastCurrentTime = this.startPosition = 0, this.startFragRequested = !1;
  }
  onError(e, t) {
  }
  onManifestLoaded(e, t) {
    this.startTimeOffset = t.startTimeOffset;
  }
  onHandlerDestroying() {
    this.stopLoad(), this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null), super.onHandlerDestroying(), this.hls = this.onMediaSeeking = this.onMediaEnded = null;
  }
  onHandlerDestroyed() {
    this.state = I.STOPPED, this.fragmentLoader && this.fragmentLoader.destroy(), this.keyLoader && this.keyLoader.destroy(), this.decrypter && this.decrypter.destroy(), this.hls = this.log = this.warn = this.decrypter = this.keyLoader = this.fragmentLoader = this.fragmentTracker = null, super.onHandlerDestroyed();
  }
  loadFragment(e, t, s) {
    this.startFragRequested = !0, this._loadFragForPlayback(e, t, s);
  }
  _loadFragForPlayback(e, t, s) {
    const i = (r) => {
      if (this.fragContextChanged(e)) {
        this.warn(`Fragment ${e.sn}${r.part ? " p: " + r.part.index : ""} of level ${e.level} was dropped during download.`), this.fragmentTracker.removeFragment(e);
        return;
      }
      e.stats.chunkCount++, this._handleFragmentLoadProgress(r);
    };
    this._doFragLoad(e, t, s, i).then((r) => {
      if (!r)
        return;
      const a = this.state;
      if (this.fragContextChanged(e)) {
        (a === I.FRAG_LOADING || !this.fragCurrent && a === I.PARSING) && (this.fragmentTracker.removeFragment(e), this.state = I.IDLE);
        return;
      }
      "payload" in r && (this.log(`Loaded ${e.type} sn: ${e.sn} of ${this.playlistLabel()} ${e.level}`), this.hls.trigger(p.FRAG_LOADED, r)), this._handleFragmentLoadComplete(r);
    }).catch((r) => {
      this.state === I.STOPPED || this.state === I.ERROR || (this.warn(`Frag error: ${(r == null ? void 0 : r.message) || r}`), this.resetFragmentLoading(e));
    });
  }
  clearTrackerIfNeeded(e) {
    var t;
    const {
      fragmentTracker: s
    } = this;
    if (s.getState(e) === le.APPENDING) {
      const r = e.type, a = this.getFwdBufferInfo(this.mediaBuffer, r), o = Math.max(e.duration, a ? a.len : this.config.maxBufferLength), l = this.backtrackFragment;
      ((l ? e.sn - l.sn : 0) === 1 || this.reduceMaxBufferLength(o, e.duration)) && s.removeFragment(e);
    } else ((t = this.mediaBuffer) == null ? void 0 : t.buffered.length) === 0 ? s.removeAllFragments() : s.hasParts(e.type) && (s.detectPartialFragments({
      frag: e,
      part: null,
      stats: e.stats,
      id: e.type
    }), s.getState(e) === le.PARTIAL && s.removeFragment(e));
  }
  checkLiveUpdate(e) {
    if (e.updated && !e.live) {
      const t = e.fragments[e.fragments.length - 1];
      this.fragmentTracker.detectPartialFragments({
        frag: t,
        part: null,
        stats: t.stats,
        id: t.type
      });
    }
    e.fragments[0] || (e.deltaUpdateFailed = !0);
  }
  flushMainBuffer(e, t, s = null) {
    if (!(e - t))
      return;
    const i = {
      startOffset: e,
      endOffset: t,
      type: s
    };
    this.hls.trigger(p.BUFFER_FLUSHING, i);
  }
  _loadInitSegment(e, t) {
    this._doFragLoad(e, t).then((s) => {
      if (!s || this.fragContextChanged(e) || !this.levels)
        throw new Error("init load aborted");
      return s;
    }).then((s) => {
      const {
        hls: i
      } = this, {
        payload: r
      } = s, a = e.decryptdata;
      if (r && r.byteLength > 0 && a != null && a.key && a.iv && ot(a.method)) {
        const o = self.performance.now();
        return this.decrypter.decrypt(new Uint8Array(r), a.key.buffer, a.iv.buffer, ci(a.method)).catch((l) => {
          throw i.trigger(p.ERROR, {
            type: $.MEDIA_ERROR,
            details: L.FRAG_DECRYPT_ERROR,
            fatal: !1,
            error: l,
            reason: l.message,
            frag: e
          }), l;
        }).then((l) => {
          const c = self.performance.now();
          return i.trigger(p.FRAG_DECRYPTED, {
            frag: e,
            payload: l,
            stats: {
              tstart: o,
              tdecrypt: c
            }
          }), s.payload = l, this.completeInitSegmentLoad(s);
        });
      }
      return this.completeInitSegmentLoad(s);
    }).catch((s) => {
      this.state === I.STOPPED || this.state === I.ERROR || (this.warn(s), this.resetFragmentLoading(e));
    });
  }
  completeInitSegmentLoad(e) {
    const {
      levels: t
    } = this;
    if (!t)
      throw new Error("init load aborted, missing levels");
    const s = e.frag.stats;
    this.state !== I.STOPPED && (this.state = I.IDLE), e.frag.data = new Uint8Array(e.payload), s.parsing.start = s.buffering.start = self.performance.now(), s.parsing.end = s.buffering.end = self.performance.now(), this.tick();
  }
  fragContextChanged(e) {
    const {
      fragCurrent: t
    } = this;
    return !e || !t || e.sn !== t.sn || e.level !== t.level;
  }
  fragBufferedComplete(e, t) {
    var s, i;
    const r = this.mediaBuffer ? this.mediaBuffer : this.media;
    if (this.log(`Buffered ${e.type} sn: ${e.sn}${t ? " part: " + t.index : ""} of ${this.fragInfo(e)} > buffer:${r ? kl.toString(ee.getBuffered(r)) : "(detached)"})`), e.sn !== "initSegment") {
      var a;
      if (e.type !== N.SUBTITLE) {
        const l = e.elementaryStreams;
        if (!Object.keys(l).some((c) => !!l[c])) {
          this.state = I.IDLE;
          return;
        }
      }
      const o = (a = this.levels) == null ? void 0 : a[e.level];
      o != null && o.fragmentError && (this.log(`Resetting level fragment error count of ${o.fragmentError} on frag buffered`), o.fragmentError = 0);
    }
    this.state = I.IDLE, r && (!this.loadedmetadata && e.type == N.MAIN && r.buffered.length && ((s = this.fragCurrent) == null ? void 0 : s.sn) === ((i = this.fragPrevious) == null ? void 0 : i.sn) && (this.loadedmetadata = !0, this.seekToStartPos()), this.tick());
  }
  seekToStartPos() {
  }
  _handleFragmentLoadComplete(e) {
    const {
      transmuxer: t
    } = this;
    if (!t)
      return;
    const {
      frag: s,
      part: i,
      partsLoaded: r
    } = e, a = !r || r.length === 0 || r.some((l) => !l), o = new mi(s.level, s.sn, s.stats.chunkCount + 1, 0, i ? i.index : -1, !a);
    t.flush(o);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _handleFragmentLoadProgress(e) {
  }
  _doFragLoad(e, t, s = null, i) {
    var r;
    this.fragCurrent = e;
    const a = t == null ? void 0 : t.details;
    if (!this.levels || !a)
      throw new Error(`frag load aborted, missing level${a ? "" : " detail"}s`);
    let o = null;
    e.encrypted && !((r = e.decryptdata) != null && r.key) ? (this.log(`Loading key for ${e.sn} of [${a.startSN}-${a.endSN}], ${this.playlistLabel()} ${e.level}`), this.state = I.KEY_LOADING, this.fragCurrent = e, o = this.keyLoader.load(e).then((u) => {
      if (!this.fragContextChanged(u.frag))
        return this.hls.trigger(p.KEY_LOADED, u), this.state === I.KEY_LOADING && (this.state = I.IDLE), u;
    }), this.hls.trigger(p.KEY_LOADING, {
      frag: e
    }), this.fragCurrent === null && (o = Promise.reject(new Error("frag load aborted, context changed in KEY_LOADING")))) : !e.encrypted && a.encryptedFragments.length && this.keyLoader.loadClear(e, a.encryptedFragments);
    const l = this.fragPrevious;
    if (e.sn !== "initSegment" && (!l || e.sn !== l.sn)) {
      const u = this.shouldLoadParts(t.details, e.end);
      u !== this.loadingParts && (this.log(`LL-Part loading ${u ? "ON" : "OFF"} loading sn ${l == null ? void 0 : l.sn}->${e.sn}`), this.loadingParts = u);
    }
    if (s = Math.max(e.start, s || 0), this.loadingParts && e.sn !== "initSegment") {
      const u = a.partList;
      if (u && i) {
        s > e.end && a.fragmentHint && (e = a.fragmentHint);
        const d = this.getNextPart(u, e, s);
        if (d > -1) {
          const g = u[d];
          this.log(`Loading part sn: ${e.sn} p: ${g.index} cc: ${e.cc} of playlist [${a.startSN}-${a.endSN}] parts [0-${d}-${u.length - 1}] ${this.playlistLabel()}: ${e.level}, target: ${parseFloat(s.toFixed(3))}`), this.nextLoadPosition = g.start + g.duration, this.state = I.FRAG_LOADING;
          let f;
          return o ? f = o.then((m) => !m || this.fragContextChanged(m.frag) ? null : this.doFragPartsLoad(e, g, t, i)).catch((m) => this.handleFragLoadError(m)) : f = this.doFragPartsLoad(e, g, t, i).catch((m) => this.handleFragLoadError(m)), this.hls.trigger(p.FRAG_LOADING, {
            frag: e,
            part: g,
            targetBufferTime: s
          }), this.fragCurrent === null ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING parts")) : f;
        } else if (!e.url || this.loadedEndOfParts(u, s))
          return Promise.resolve(null);
      }
    }
    if (e.sn !== "initSegment" && this.loadingParts)
      this.log(`LL-Part loading OFF after next part miss @${s.toFixed(2)}`), this.loadingParts = !1;
    else if (!e.url)
      return Promise.resolve(null);
    this.log(`Loading ${e.type} sn: ${e.sn} of ${this.fragInfo(e, !1)}) cc: ${e.cc} ${a ? "[" + a.startSN + "-" + a.endSN + "]" : ""}, target: ${parseFloat(s.toFixed(3))}`), O(e.sn) && !this.bitrateTest && (this.nextLoadPosition = e.start + e.duration), this.state = I.FRAG_LOADING;
    const c = this.config.progressive;
    let h;
    return c && o ? h = o.then((u) => !u || this.fragContextChanged(u == null ? void 0 : u.frag) ? null : this.fragmentLoader.load(e, i)).catch((u) => this.handleFragLoadError(u)) : h = Promise.all([this.fragmentLoader.load(e, c ? i : void 0), o]).then(([u]) => (!c && u && i && i(u), u)).catch((u) => this.handleFragLoadError(u)), this.hls.trigger(p.FRAG_LOADING, {
      frag: e,
      targetBufferTime: s
    }), this.fragCurrent === null ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING")) : h;
  }
  doFragPartsLoad(e, t, s, i) {
    return new Promise((r, a) => {
      var o;
      const l = [], c = (o = s.details) == null ? void 0 : o.partList, h = (u) => {
        this.fragmentLoader.loadPart(e, u, i).then((d) => {
          l[u.index] = d;
          const g = d.part;
          this.hls.trigger(p.FRAG_LOADED, d);
          const f = gr(s.details, e.sn, u.index + 1) || Dn(c, e.sn, u.index + 1);
          if (f)
            h(f);
          else
            return r({
              frag: e,
              part: g,
              partsLoaded: l
            });
        }).catch(a);
      };
      h(t);
    });
  }
  handleFragLoadError(e) {
    if ("data" in e) {
      const t = e.data;
      e.data && t.details === L.INTERNAL_ABORTED ? this.handleFragLoadAborted(t.frag, t.part) : this.hls.trigger(p.ERROR, t);
    } else
      this.hls.trigger(p.ERROR, {
        type: $.OTHER_ERROR,
        details: L.INTERNAL_EXCEPTION,
        err: e,
        error: e,
        fatal: !0
      });
    return null;
  }
  _handleTransmuxerFlush(e) {
    const t = this.getCurrentContext(e);
    if (!t || this.state !== I.PARSING) {
      !this.fragCurrent && this.state !== I.STOPPED && this.state !== I.ERROR && (this.state = I.IDLE);
      return;
    }
    const {
      frag: s,
      part: i,
      level: r
    } = t, a = self.performance.now();
    s.stats.parsing.end = a, i && (i.stats.parsing.end = a);
    const o = this.getLevelDetails(), c = o && s.sn > o.endSN || this.shouldLoadParts(o, s.end);
    c !== this.loadingParts && (this.log(`LL-Part loading ${c ? "ON" : "OFF"} after parsing segment ending @${s.end.toFixed(2)}`), this.loadingParts = c), this.updateLevelTiming(s, i, r, e.partial);
  }
  shouldLoadParts(e, t) {
    if (this.config.lowLatencyMode) {
      if (!e)
        return this.loadingParts;
      if (e != null && e.partList) {
        var s;
        const i = e.partList[0], r = i.end + (((s = e.fragmentHint) == null ? void 0 : s.duration) || 0);
        if (t >= r && this.lastCurrentTime > i.start - i.fragment.duration)
          return !0;
      }
    }
    return !1;
  }
  getCurrentContext(e) {
    const {
      levels: t,
      fragCurrent: s
    } = this, {
      level: i,
      sn: r,
      part: a
    } = e;
    if (!(t != null && t[i]))
      return this.warn(`Levels object was unset while buffering fragment ${r} of level ${i}. The current chunk will not be buffered.`), null;
    const o = t[i], l = o.details, c = a > -1 ? gr(l, r, a) : null, h = c ? c.fragment : el(l, r, s);
    return h ? (s && s !== h && (h.stats = s.stats), {
      frag: h,
      part: c,
      level: o
    }) : null;
  }
  bufferFragmentData(e, t, s, i, r) {
    var a;
    if (!e || this.state !== I.PARSING)
      return;
    const {
      data1: o,
      data2: l
    } = e;
    let c = o;
    if (o && l && (c = Re(o, l)), !((a = c) != null && a.length))
      return;
    const h = {
      type: e.type,
      frag: t,
      part: s,
      chunkMeta: i,
      parent: t.type,
      data: c
    };
    if (this.hls.trigger(p.BUFFER_APPENDING, h), e.dropped && e.independent && !s) {
      if (r)
        return;
      this.flushBufferGap(t);
    }
  }
  flushBufferGap(e) {
    const t = this.media;
    if (!t)
      return;
    if (!ee.isBuffered(t, t.currentTime)) {
      this.flushMainBuffer(0, e.start);
      return;
    }
    const s = t.currentTime, i = ee.bufferInfo(t, s, 0), r = e.duration, a = Math.min(this.config.maxFragLookUpTolerance * 2, r * 0.25), o = Math.max(Math.min(e.start - a, i.end - a), s + a);
    e.start - o > a && this.flushMainBuffer(o, e.start);
  }
  getFwdBufferInfo(e, t) {
    var s;
    const i = this.getLoadPosition();
    if (!O(i))
      return null;
    const a = this.lastCurrentTime > i || (s = this.media) != null && s.paused ? 0 : this.config.maxBufferHole;
    return this.getFwdBufferInfoAtPos(e, i, t, a);
  }
  getFwdBufferInfoAtPos(e, t, s, i) {
    const r = ee.bufferInfo(e, t, i);
    if (r.len === 0 && r.nextStart !== void 0) {
      const a = this.fragmentTracker.getBufferedFrag(t, s);
      if (a && (r.nextStart <= a.end || a.gap))
        return ee.bufferInfo(e, t, Math.max(r.nextStart, i));
    }
    return r;
  }
  getMaxBufferLength(e) {
    const {
      config: t
    } = this;
    let s;
    return e ? s = Math.max(8 * t.maxBufferSize / e, t.maxBufferLength) : s = t.maxBufferLength, Math.min(s, t.maxMaxBufferLength);
  }
  reduceMaxBufferLength(e, t) {
    const s = this.config, i = Math.max(Math.min(e - t, s.maxBufferLength), t), r = Math.max(e - t * 3, s.maxMaxBufferLength / 2, i);
    return r >= i ? (s.maxMaxBufferLength = r, this.warn(`Reduce max buffer length to ${r}s`), !0) : !1;
  }
  getAppendedFrag(e, t = N.MAIN) {
    var s;
    const i = (s = this.fragmentTracker) == null ? void 0 : s.getAppendedFrag(e, t);
    return i && "fragment" in i ? i.fragment : i;
  }
  getNextFragment(e, t) {
    const s = t.fragments, i = s.length;
    if (!i)
      return null;
    const {
      config: r
    } = this, a = s[0].start, o = r.lowLatencyMode && !!t.partList;
    let l = null;
    if (t.live) {
      const c = r.initialLiveManifestSize;
      if (i < c)
        return this.warn(`Not enough fragments to start playback (have: ${i}, need: ${c})`), null;
      (!t.PTSKnown && !this.startFragRequested && this.startPosition === -1 || e < a) && (o && !this.loadingParts && (this.log("LL-Part loading ON for initial live fragment"), this.loadingParts = !0), l = this.getInitialLiveFragment(t, s), this.startPosition = this.nextLoadPosition = l ? this.hls.liveSyncPosition || l.start : e);
    } else e <= a && (l = s[0]);
    if (!l) {
      const c = this.loadingParts ? t.partEnd : t.fragmentEnd;
      l = this.getFragmentAtPosition(e, c, t);
    }
    return this.mapToInitFragWhenRequired(l);
  }
  isLoopLoading(e, t) {
    const s = this.fragmentTracker.getState(e);
    return (s === le.OK || s === le.PARTIAL && !!e.gap) && this.nextLoadPosition > t;
  }
  getNextFragmentLoopLoading(e, t, s, i, r) {
    let a = null;
    if (e.gap && (a = this.getNextFragment(this.nextLoadPosition, t), a && !a.gap && s.nextStart)) {
      const o = this.getFwdBufferInfoAtPos(this.mediaBuffer ? this.mediaBuffer : this.media, s.nextStart, i, 0);
      if (o !== null && s.len + o.len >= r) {
        const l = a.sn;
        return this.loopSn !== l && (this.log(`buffer full after gaps in "${i}" playlist starting at sn: ${l}`), this.loopSn = l), null;
      }
    }
    return this.loopSn = void 0, a;
  }
  mapToInitFragWhenRequired(e) {
    return e != null && e.initSegment && !(e != null && e.initSegment.data) && !this.bitrateTest ? e.initSegment : e;
  }
  getNextPart(e, t, s) {
    let i = -1, r = !1, a = !0;
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o];
      if (a = a && !c.independent, i > -1 && s < c.start)
        break;
      const h = c.loaded;
      h ? i = -1 : (r || c.independent || a) && c.fragment === t && (i = o), r = h;
    }
    return i;
  }
  loadedEndOfParts(e, t) {
    const s = e[e.length - 1];
    return s && t > s.start && s.loaded;
  }
  /*
   This method is used find the best matching first fragment for a live playlist. This fragment is used to calculate the
   "sliding" of the playlist, which is its offset from the start of playback. After sliding we can compute the real
   start and end times for each fragment in the playlist (after which this method will not need to be called).
  */
  getInitialLiveFragment(e, t) {
    const s = this.fragPrevious;
    let i = null;
    if (s) {
      if (e.hasProgramDateTime && (this.log(`Live playlist, switching playlist, load frag with same PDT: ${s.programDateTime}`), i = sl(t, s.endProgramDateTime, this.config.maxFragLookUpTolerance)), !i) {
        const r = s.sn + 1;
        if (r >= e.startSN && r <= e.endSN) {
          const a = t[r - e.startSN];
          s.cc === a.cc && (i = a, this.log(`Live playlist, switching playlist, load frag with next SN: ${i.sn}`));
        }
        i || (i = wn(t, s.cc), i && this.log(`Live playlist, switching playlist, load frag with same CC: ${i.sn}`));
      }
    } else {
      const r = this.hls.liveSyncPosition;
      r !== null && (i = this.getFragmentAtPosition(r, this.bitrateTest ? e.fragmentEnd : e.edge, e));
    }
    return i;
  }
  /*
  This method finds the best matching fragment given the provided position.
   */
  getFragmentAtPosition(e, t, s) {
    const {
      config: i
    } = this;
    let {
      fragPrevious: r
    } = this, {
      fragments: a,
      endSN: o
    } = s;
    const {
      fragmentHint: l
    } = s, {
      maxFragLookUpTolerance: c
    } = i, h = s.partList, u = !!(this.loadingParts && h != null && h.length && l);
    u && l && !this.bitrateTest && (a = a.concat(l), o = l.sn);
    let d;
    if (e < t) {
      var g;
      const m = e < this.lastCurrentTime || e > t - c || (g = this.media) != null && g.paused ? 0 : c;
      d = Lt(r, a, e, m);
    } else
      d = a[a.length - 1];
    if (d) {
      const f = d.sn - s.startSN, m = this.fragmentTracker.getState(d);
      if ((m === le.OK || m === le.PARTIAL && d.gap) && (r = d), r && d.sn === r.sn && (!u || h[0].fragment.sn > d.sn) && r && d.level === r.level) {
        const E = a[f + 1];
        d.sn < o && this.fragmentTracker.getState(E) !== le.OK ? d = E : d = null;
      }
    }
    return d;
  }
  synchronizeToLiveEdge(e) {
    const {
      config: t,
      media: s
    } = this;
    if (!s)
      return;
    const i = this.hls.liveSyncPosition, r = s.currentTime, a = e.fragments[0].start, o = e.edge, l = r >= a - t.maxFragLookUpTolerance && r <= o;
    if (i !== null && s.duration > i && (r < i || !l)) {
      const c = t.liveMaxLatencyDuration !== void 0 ? t.liveMaxLatencyDuration : t.liveMaxLatencyDurationCount * e.targetduration;
      (!l && s.readyState < 4 || r < o - c) && (this.loadedmetadata || (this.nextLoadPosition = i), s.readyState && (this.warn(`Playback: ${r.toFixed(3)} is located too far from the end of live sliding playlist: ${o}, reset currentTime to : ${i.toFixed(3)}`), s.currentTime = i));
    }
  }
  alignPlaylists(e, t, s) {
    const i = e.fragments.length;
    if (!i)
      return this.warn("No fragments in live playlist"), 0;
    const r = e.fragments[0].start, a = !t, o = e.alignedSliding && O(r);
    if (a || !o && !r) {
      const {
        fragPrevious: l
      } = this;
      vl(l, s, e);
      const c = e.fragments[0].start;
      return this.log(`Live playlist sliding: ${c.toFixed(2)} start-sn: ${t ? t.startSN : "na"}->${e.startSN} prev-sn: ${l ? l.sn : "na"} fragments: ${i}`), c;
    }
    return r;
  }
  waitForCdnTuneIn(e) {
    return e.live && e.canBlockReload && e.partTarget && e.tuneInGoal > Math.max(e.partHoldBack, e.partTarget * 3);
  }
  setStartPosition(e, t) {
    let s = this.startPosition;
    if (s < t && (s = -1), s === -1 || this.lastCurrentTime === -1) {
      const i = this.startTimeOffset !== null, r = i ? this.startTimeOffset : e.startTimeOffset;
      r !== null && O(r) ? (s = t + r, r < 0 && (s += e.edge), s = Math.min(Math.max(t, s), t + e.totalduration), this.log(`Start time offset ${r} found in ${i ? "multivariant" : "media"} playlist, adjust startPosition to ${s}`), this.startPosition = s) : e.live ? s = this.hls.liveSyncPosition || t : this.startPosition = s = 0, this.lastCurrentTime = s;
    }
    this.nextLoadPosition = s;
  }
  getLoadPosition() {
    const {
      media: e
    } = this;
    let t = 0;
    return this.loadedmetadata && e ? t = e.currentTime : this.nextLoadPosition && (t = this.nextLoadPosition), t;
  }
  handleFragLoadAborted(e, t) {
    this.transmuxer && e.sn !== "initSegment" && e.stats.aborted && (this.warn(`Fragment ${e.sn}${t ? " part " + t.index : ""} of level ${e.level} was aborted`), this.resetFragmentLoading(e));
  }
  resetFragmentLoading(e) {
    (!this.fragCurrent || !this.fragContextChanged(e) && this.state !== I.FRAG_LOADING_WAITING_RETRY) && (this.state = I.IDLE);
  }
  onFragmentOrKeyLoadError(e, t) {
    if (t.chunkMeta && !t.frag) {
      const h = this.getCurrentContext(t.chunkMeta);
      h && (t.frag = h.frag);
    }
    const s = t.frag;
    if (!s || s.type !== e || !this.levels)
      return;
    if (this.fragContextChanged(s)) {
      var i;
      this.warn(`Frag load error must match current frag to retry ${s.url} > ${(i = this.fragCurrent) == null ? void 0 : i.url}`);
      return;
    }
    const r = t.details === L.FRAG_GAP;
    r && this.fragmentTracker.fragBuffered(s, !0);
    const a = t.errorAction, {
      action: o,
      retryCount: l = 0,
      retryConfig: c
    } = a || {};
    if (a && o === me.RetryRequest && c) {
      this.resetStartWhenNotLoaded(this.levelLastLoaded);
      const h = di(c, l);
      this.warn(`Fragment ${s.sn} of ${e} ${s.level} errored with ${t.details}, retrying loading ${l + 1}/${c.maxNumRetry} in ${h}ms`), a.resolved = !0, this.retryDate = self.performance.now() + h, this.state = I.FRAG_LOADING_WAITING_RETRY;
    } else if (c && a)
      if (this.resetFragmentErrors(e), l < c.maxNumRetry)
        !r && o !== me.RemoveAlternatePermanently && (a.resolved = !0);
      else {
        this.warn(`${t.details} reached or exceeded max retry (${l})`);
        return;
      }
    else (a == null ? void 0 : a.action) === me.SendAlternateToPenaltyBox ? this.state = I.WAITING_LEVEL : this.state = I.ERROR;
    this.tickImmediate();
  }
  reduceLengthAndFlushBuffer(e) {
    if (this.state === I.PARSING || this.state === I.PARSED) {
      const t = e.frag, s = e.parent, i = this.getFwdBufferInfo(this.mediaBuffer, s), r = i && i.len > 0.5;
      r && this.reduceMaxBufferLength(i.len, (t == null ? void 0 : t.duration) || 10);
      const a = !r;
      return a && this.warn(`Buffer full error while media.currentTime is not buffered, flush ${s} buffer`), t && (this.fragmentTracker.removeFragment(t), this.nextLoadPosition = t.start), this.resetLoadingState(), a;
    }
    return !1;
  }
  resetFragmentErrors(e) {
    e === N.AUDIO && (this.fragCurrent = null), this.loadedmetadata || (this.startFragRequested = !1), this.state !== I.STOPPED && (this.state = I.IDLE);
  }
  afterBufferFlushed(e, t, s) {
    if (!e)
      return;
    const i = ee.getBuffered(e);
    this.fragmentTracker.detectEvictedFragments(t, i, s), this.state === I.ENDED && this.resetLoadingState();
  }
  resetLoadingState() {
    this.log("Reset loading state"), this.fragCurrent = null, this.fragPrevious = null, this.state !== I.STOPPED && (this.state = I.IDLE);
  }
  resetStartWhenNotLoaded(e) {
    if (!this.loadedmetadata) {
      this.startFragRequested = !1;
      const t = e ? e.details : null;
      t != null && t.live ? (this.startPosition = -1, this.setStartPosition(t, 0), this.resetLoadingState()) : this.nextLoadPosition = this.startPosition;
    }
  }
  resetWhenMissingContext(e) {
    this.warn(`The loading context changed while buffering fragment ${e.sn} of level ${e.level}. This chunk will not be buffered.`), this.removeUnbufferedFrags(), this.resetStartWhenNotLoaded(this.levelLastLoaded), this.resetLoadingState();
  }
  removeUnbufferedFrags(e = 0) {
    this.fragmentTracker.removeFragmentsInRange(e, 1 / 0, this.playlistType, !1, !0);
  }
  updateLevelTiming(e, t, s, i) {
    var r;
    const a = s.details;
    if (!a) {
      this.warn("level.details undefined");
      return;
    }
    if (!Object.keys(e.elementaryStreams).reduce((l, c) => {
      const h = e.elementaryStreams[c];
      if (h) {
        const u = h.endPTS - h.startPTS;
        if (u <= 0)
          return this.warn(`Could not parse fragment ${e.sn} ${c} duration reliably (${u})`), l || !1;
        const d = i ? 0 : bn(a, e, h.startPTS, h.endPTS, h.startDTS, h.endDTS);
        return this.hls.trigger(p.LEVEL_PTS_UPDATED, {
          details: a,
          level: s,
          drift: d,
          type: c,
          frag: e,
          start: h.startPTS,
          end: h.endPTS
        }), !0;
      }
      return l;
    }, !1) && ((r = this.transmuxer) == null ? void 0 : r.error) === null) {
      const l = new Error(`Found no media in fragment ${e.sn} of level ${e.level} resetting transmuxer to fallback to playlist timing`);
      if (s.fragmentError === 0 && (s.fragmentError++, e.gap = !0, this.fragmentTracker.removeFragment(e), this.fragmentTracker.fragBuffered(e, !0)), this.warn(l.message), this.hls.trigger(p.ERROR, {
        type: $.MEDIA_ERROR,
        details: L.FRAG_PARSING_ERROR,
        fatal: !1,
        error: l,
        frag: e,
        reason: `Found no media in msn ${e.sn} of level "${s.url}"`
      }), !this.hls)
        return;
      this.resetTransmuxer();
    }
    this.state = I.PARSED, this.log(`Parsed ${e.type} sn: ${e.sn}${t ? " part: " + t.index : ""} of ${this.fragInfo(e)})`), this.hls.trigger(p.FRAG_PARSED, {
      frag: e,
      part: t
    });
  }
  playlistLabel() {
    return this.playlistType === N.MAIN ? "level" : "track";
  }
  fragInfo(e, t = !0) {
    var s, i;
    return `${this.playlistLabel()} ${e.level} (frag:[${((s = t ? e.startPTS : e.start) != null ? s : NaN).toFixed(3)}-${((i = t ? e.endPTS : e.end) != null ? i : NaN).toFixed(3)}]`;
  }
  resetTransmuxer() {
    var e;
    (e = this.transmuxer) == null || e.reset();
  }
  recoverWorkerError(e) {
    e.event === "demuxerWorker" && (this.fragmentTracker.removeAllFragments(), this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null), this.resetStartWhenNotLoaded(this.levelLastLoaded), this.resetLoadingState());
  }
  set state(e) {
    const t = this._state;
    t !== e && (this._state = e, this.log(`${t}->${e}`));
  }
  get state() {
    return this._state;
  }
}
class Fn {
  constructor() {
    this.chunks = [], this.dataLength = 0;
  }
  push(e) {
    this.chunks.push(e), this.dataLength += e.length;
  }
  flush() {
    const {
      chunks: e,
      dataLength: t
    } = this;
    let s;
    if (e.length)
      e.length === 1 ? s = e[0] : s = Pl(e, t);
    else return new Uint8Array(0);
    return this.reset(), s;
  }
  reset() {
    this.chunks.length = 0, this.dataLength = 0;
  }
}
function Pl(n, e) {
  const t = new Uint8Array(e);
  let s = 0;
  for (let i = 0; i < n.length; i++) {
    const r = n[i];
    t.set(r, s), s += r.length;
  }
  return t;
}
const Rt = "1.5.14-0.canary.10578", ut = {};
function Fl() {
  return typeof __HLS_WORKER_BUNDLE__ == "function";
}
function Ol() {
  const n = ut[Rt];
  if (n)
    return n.clientCount++, n;
  const e = new self.Blob([`var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(${__HLS_WORKER_BUNDLE__.toString()})(true);`], {
    type: "text/javascript"
  }), t = self.URL.createObjectURL(e), i = {
    worker: new self.Worker(t),
    objectURL: t,
    clientCount: 1
  };
  return ut[Rt] = i, i;
}
function Ml(n) {
  const e = ut[n];
  if (e)
    return e.clientCount++, e;
  const t = new self.URL(n, self.location.href).href, i = {
    worker: new self.Worker(t),
    scriptURL: t,
    clientCount: 1
  };
  return ut[n] = i, i;
}
function Nl(n) {
  const e = ut[n || Rt];
  if (e && e.clientCount-- === 1) {
    const {
      worker: s,
      objectURL: i
    } = e;
    delete ut[n || Rt], i && self.URL.revokeObjectURL(i), s.terminate();
  }
}
function Pe(n = "", e = 9e4) {
  return {
    type: n,
    id: -1,
    pid: -1,
    inputTimeScale: e,
    sequenceNumber: -1,
    samples: [],
    dropped: 0
  };
}
function _t(n, e) {
  const t = e;
  let s = 0;
  for (; ui(n, e); ) {
    s += 10;
    const i = ds(n, e + 6);
    s += i, Ln(n, e + 10) && (s += 10), e += s;
  }
  if (s > 0)
    return n.subarray(t, t + s);
}
function Ul(n) {
  if (n.data.byteLength === 8) {
    const e = new Uint8Array(n.data), t = e[3] & 1;
    let s = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7];
    return s /= 45, t && (s += 4772185884e-2), Math.round(s);
  }
}
function Ei(n) {
  const e = Rn(n);
  for (let t = 0; t < e.length; t++) {
    const s = e[t];
    if (_n(s))
      return Ul(s);
  }
}
function Bl(n, e) {
  return ui(n, e) && ds(n, e + 6) + 10 <= n.length - e;
}
class Ti {
  constructor() {
    this._audioTrack = void 0, this._id3Track = void 0, this.frameIndex = 0, this.cachedData = null, this.basePTS = null, this.initPTS = null, this.lastPTS = null;
  }
  resetInitSegment(e, t, s, i) {
    this._id3Track = {
      type: "id3",
      id: 3,
      pid: -1,
      inputTimeScale: 9e4,
      sequenceNumber: 0,
      samples: [],
      dropped: 0
    };
  }
  resetTimeStamp(e) {
    this.initPTS = e, this.resetContiguity();
  }
  resetContiguity() {
    this.basePTS = null, this.lastPTS = null, this.frameIndex = 0;
  }
  canParse(e, t) {
    return !1;
  }
  appendFrame(e, t, s) {
  }
  // feed incoming data to the front of the parsing pipeline
  demux(e, t) {
    this.cachedData && (e = Re(this.cachedData, e), this.cachedData = null);
    let s = _t(e, 0), i = s ? s.length : 0, r;
    const a = this._audioTrack, o = this._id3Track, l = s ? Ei(s) : void 0, c = e.length;
    for ((this.basePTS === null || this.frameIndex === 0 && O(l)) && (this.basePTS = $l(l, t, this.initPTS), this.lastPTS = this.basePTS), this.lastPTS === null && (this.lastPTS = this.basePTS), s && s.length > 0 && o.samples.push({
      pts: this.lastPTS,
      dts: this.lastPTS,
      data: s,
      type: Ie.audioId3,
      duration: Number.POSITIVE_INFINITY
    }); i < c; ) {
      if (this.canParse(e, i)) {
        const h = this.appendFrame(a, e, i);
        h ? (this.frameIndex++, this.lastPTS = h.sample.pts, i += h.length, r = i) : i = c;
      } else Bl(e, i) ? (s = _t(e, i), o.samples.push({
        pts: this.lastPTS,
        dts: this.lastPTS,
        data: s,
        type: Ie.audioId3,
        duration: Number.POSITIVE_INFINITY
      }), i += s.length, r = i) : i++;
      if (i === c && r !== c) {
        const h = Je(e, r);
        this.cachedData ? this.cachedData = Re(this.cachedData, h) : this.cachedData = h;
      }
    }
    return {
      audioTrack: a,
      videoTrack: Pe(),
      id3Track: o,
      textTrack: Pe()
    };
  }
  demuxSampleAes(e, t, s) {
    return Promise.reject(new Error(`[${this}] This demuxer does not support Sample-AES decryption`));
  }
  flush(e) {
    const t = this.cachedData;
    return t && (this.cachedData = null, this.demux(t, 0)), {
      audioTrack: this._audioTrack,
      videoTrack: Pe(),
      id3Track: this._id3Track,
      textTrack: Pe()
    };
  }
  destroy() {
    this.cachedData = null, this._audioTrack = this._id3Track = void 0;
  }
}
const $l = (n, e, t) => {
  if (O(n))
    return n * 90;
  const s = t ? t.baseTime * 9e4 / t.timescale : 0;
  return e * 9e4 + s;
};
function Gl(n, e, t, s) {
  const i = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350], r = e[t + 2], a = r >> 2 & 15;
  if (a > 12) {
    const g = new Error(`invalid ADTS sampling index:${a}`);
    n.emit(p.ERROR, p.ERROR, {
      type: $.MEDIA_ERROR,
      details: L.FRAG_PARSING_ERROR,
      fatal: !0,
      error: g,
      reason: g.message
    });
    return;
  }
  const o = (r >> 6 & 3) + 1, l = e[t + 3] >> 6 & 3 | (r & 1) << 2, c = "mp4a.40." + o, h = i[a];
  let u = a;
  (o === 5 || o === 29) && (u -= 3);
  const d = [o << 3 | (u & 14) >> 1, (u & 1) << 7 | l << 3];
  return q.log(`manifest codec:${s}, parsed codec:${c}, channels:${l}, rate:${h} (ADTS object type:${o} sampling index:${a})`), {
    config: d,
    samplerate: h,
    channelCount: l,
    codec: c,
    parsedCodec: c,
    manifestCodec: s
  };
}
function On(n, e) {
  return n[e] === 255 && (n[e + 1] & 246) === 240;
}
function Mn(n, e) {
  return n[e + 1] & 1 ? 7 : 9;
}
function xi(n, e) {
  return (n[e + 3] & 3) << 11 | n[e + 4] << 3 | (n[e + 5] & 224) >>> 5;
}
function Kl(n, e) {
  return e + 5 < n.length;
}
function cs(n, e) {
  return e + 1 < n.length && On(n, e);
}
function Vl(n, e) {
  return Kl(n, e) && On(n, e) && xi(n, e) <= n.length - e;
}
function Hl(n, e) {
  if (cs(n, e)) {
    const t = Mn(n, e);
    if (e + t >= n.length)
      return !1;
    const s = xi(n, e);
    if (s <= t)
      return !1;
    const i = e + s;
    return i === n.length || cs(n, i);
  }
  return !1;
}
function Nn(n, e, t, s, i) {
  if (!n.samplerate) {
    const r = Gl(e, t, s, i);
    if (!r)
      return;
    ae(n, r);
  }
}
function Un(n) {
  return 1024 * 9e4 / n;
}
function Wl(n, e) {
  const t = Mn(n, e);
  if (e + t <= n.length) {
    const s = xi(n, e) - t;
    if (s > 0)
      return {
        headerLength: t,
        frameLength: s
      };
  }
}
function Bn(n, e, t, s, i) {
  const r = Un(n.samplerate), a = s + i * r, o = Wl(e, t);
  let l;
  if (o) {
    const {
      frameLength: u,
      headerLength: d
    } = o, g = d + u, f = Math.max(0, t + g - e.length);
    f ? (l = new Uint8Array(g - d), l.set(e.subarray(t + d, e.length), 0)) : l = e.subarray(t + d, t + g);
    const m = {
      unit: l,
      pts: a
    };
    return f || n.samples.push(m), {
      sample: m,
      length: g,
      missing: f
    };
  }
  const c = e.length - t;
  return l = new Uint8Array(c), l.set(e.subarray(t, e.length), 0), {
    sample: {
      unit: l,
      pts: a
    },
    length: c,
    missing: -1
  };
}
let Ut = null;
const Yl = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160], ql = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3], jl = [
  // MPEG 2.5
  [
    0,
    // Reserved
    72,
    // Layer3
    144,
    // Layer2
    12
    // Layer1
  ],
  // Reserved
  [
    0,
    // Reserved
    0,
    // Layer3
    0,
    // Layer2
    0
    // Layer1
  ],
  // MPEG 2
  [
    0,
    // Reserved
    72,
    // Layer3
    144,
    // Layer2
    12
    // Layer1
  ],
  // MPEG 1
  [
    0,
    // Reserved
    144,
    // Layer3
    144,
    // Layer2
    12
    // Layer1
  ]
], zl = [
  0,
  // Reserved
  1,
  // Layer3
  1,
  // Layer2
  4
  // Layer1
];
function $n(n, e, t, s, i) {
  if (t + 24 > e.length)
    return;
  const r = Gn(e, t);
  if (r && t + r.frameLength <= e.length) {
    const a = r.samplesPerFrame * 9e4 / r.sampleRate, o = s + i * a, l = {
      unit: e.subarray(t, t + r.frameLength),
      pts: o,
      dts: o
    };
    return n.config = [], n.channelCount = r.channelCount, n.samplerate = r.sampleRate, n.samples.push(l), {
      sample: l,
      length: r.frameLength,
      missing: 0
    };
  }
}
function Gn(n, e) {
  const t = n[e + 1] >> 3 & 3, s = n[e + 1] >> 1 & 3, i = n[e + 2] >> 4 & 15, r = n[e + 2] >> 2 & 3;
  if (t !== 1 && i !== 0 && i !== 15 && r !== 3) {
    const a = n[e + 2] >> 1 & 1, o = n[e + 3] >> 6, l = t === 3 ? 3 - s : s === 3 ? 3 : 4, c = Yl[l * 14 + i - 1] * 1e3, u = ql[(t === 3 ? 0 : t === 2 ? 1 : 2) * 3 + r], d = o === 3 ? 1 : 2, g = jl[t][s], f = zl[s], m = g * 8 * f, y = Math.floor(g * c / u + a) * f;
    if (Ut === null) {
      const T = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
      Ut = T ? parseInt(T[1]) : 0;
    }
    return !!Ut && Ut <= 87 && s === 2 && c >= 224e3 && o === 0 && (n[e + 3] = n[e + 3] | 128), {
      sampleRate: u,
      channelCount: d,
      frameLength: y,
      samplesPerFrame: m
    };
  }
}
function Si(n, e) {
  return n[e] === 255 && (n[e + 1] & 224) === 224 && (n[e + 1] & 6) !== 0;
}
function Kn(n, e) {
  return e + 1 < n.length && Si(n, e);
}
function Xl(n, e) {
  return Si(n, e) && 4 <= n.length - e;
}
function Vn(n, e) {
  if (e + 1 < n.length && Si(n, e)) {
    const s = Gn(n, e);
    let i = 4;
    s != null && s.frameLength && (i = s.frameLength);
    const r = e + i;
    return r === n.length || Kn(n, r);
  }
  return !1;
}
class Ql extends Ti {
  constructor(e, t) {
    super(), this.observer = void 0, this.config = void 0, this.observer = e, this.config = t;
  }
  resetInitSegment(e, t, s, i) {
    super.resetInitSegment(e, t, s, i), this._audioTrack = {
      container: "audio/adts",
      type: "audio",
      id: 2,
      pid: -1,
      sequenceNumber: 0,
      segmentCodec: "aac",
      samples: [],
      manifestCodec: t,
      duration: i,
      inputTimeScale: 9e4,
      dropped: 0
    };
  }
  // Source for probe info - https://wiki.multimedia.cx/index.php?title=ADTS
  static probe(e, t) {
    if (!e)
      return !1;
    const s = _t(e, 0);
    let i = (s == null ? void 0 : s.length) || 0;
    if (Vn(e, i))
      return !1;
    for (let r = e.length; i < r; i++)
      if (Hl(e, i))
        return t.log("ADTS sync word found !"), !0;
    return !1;
  }
  canParse(e, t) {
    return Vl(e, t);
  }
  appendFrame(e, t, s) {
    Nn(e, this.observer, t, s, e.manifestCodec);
    const i = Bn(e, t, s, this.basePTS, this.frameIndex);
    if (i && i.missing === 0)
      return i;
  }
}
const Jl = /\/emsg[-/]ID3/i;
class Zl {
  constructor(e, t) {
    this.remainderData = null, this.timeOffset = 0, this.config = void 0, this.videoTrack = void 0, this.audioTrack = void 0, this.id3Track = void 0, this.txtTrack = void 0, this.config = t;
  }
  resetTimeStamp() {
  }
  resetInitSegment(e, t, s, i) {
    const r = this.videoTrack = Pe("video", 1), a = this.audioTrack = Pe("audio", 1), o = this.txtTrack = Pe("text", 1);
    if (this.id3Track = Pe("id3", 1), this.timeOffset = 0, !(e != null && e.byteLength))
      return;
    const l = pn(e);
    if (l.video) {
      const {
        id: c,
        timescale: h,
        codec: u
      } = l.video;
      r.id = c, r.timescale = o.timescale = h, r.codec = u;
    }
    if (l.audio) {
      const {
        id: c,
        timescale: h,
        codec: u
      } = l.audio;
      a.id = c, a.timescale = h, a.codec = u;
    }
    o.id = fn.text, r.sampleDuration = 0, r.duration = a.duration = i;
  }
  resetContiguity() {
    this.remainderData = null;
  }
  static probe(e) {
    return Ja(e);
  }
  demux(e, t) {
    this.timeOffset = t;
    let s = e;
    const i = this.videoTrack, r = this.txtTrack;
    if (this.config.progressive) {
      this.remainderData && (s = Re(this.remainderData, e));
      const o = ao(s);
      this.remainderData = o.remainder, i.samples = o.valid || new Uint8Array();
    } else
      i.samples = s;
    const a = this.extractID3Track(i, t);
    return r.samples = Qi(t, i), {
      videoTrack: i,
      audioTrack: this.audioTrack,
      id3Track: a,
      textTrack: this.txtTrack
    };
  }
  flush() {
    const e = this.timeOffset, t = this.videoTrack, s = this.txtTrack;
    t.samples = this.remainderData || new Uint8Array(), this.remainderData = null;
    const i = this.extractID3Track(t, this.timeOffset);
    return s.samples = Qi(e, t), {
      videoTrack: t,
      audioTrack: Pe(),
      id3Track: i,
      textTrack: Pe()
    };
  }
  extractID3Track(e, t) {
    const s = this.id3Track;
    if (e.samples.length) {
      const i = H(e.samples, ["emsg"]);
      i && i.forEach((r) => {
        const a = co(r);
        if (Jl.test(a.schemeIdUri)) {
          const o = O(a.presentationTime) ? a.presentationTime / a.timeScale : t + a.presentationTimeDelta / a.timeScale;
          let l = a.eventDuration === 4294967295 ? Number.POSITIVE_INFINITY : a.eventDuration / a.timeScale;
          l <= 1e-3 && (l = Number.POSITIVE_INFINITY);
          const c = a.payload;
          s.samples.push({
            data: c,
            len: c.byteLength,
            dts: o,
            pts: o,
            type: Ie.emsg,
            duration: l
          });
        }
      });
    }
    return s;
  }
  demuxSampleAes(e, t, s) {
    return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"));
  }
  destroy() {
    this.config = null, this.remainderData = null, this.videoTrack = this.audioTrack = this.id3Track = this.txtTrack = void 0;
  }
}
const Hn = (n, e) => {
  let t = 0, s = 5;
  e += s;
  const i = new Uint32Array(1), r = new Uint32Array(1), a = new Uint8Array(1);
  for (; s > 0; ) {
    a[0] = n[e];
    const o = Math.min(s, 8), l = 8 - o;
    r[0] = 4278190080 >>> 24 + l << l, i[0] = (a[0] & r[0]) >> l, t = t ? t << o | i[0] : i[0], e += 1, s -= o;
  }
  return t;
};
class ec extends Ti {
  constructor(e) {
    super(), this.observer = void 0, this.observer = e;
  }
  resetInitSegment(e, t, s, i) {
    super.resetInitSegment(e, t, s, i), this._audioTrack = {
      container: "audio/ac-3",
      type: "audio",
      id: 2,
      pid: -1,
      sequenceNumber: 0,
      segmentCodec: "ac3",
      samples: [],
      manifestCodec: t,
      duration: i,
      inputTimeScale: 9e4,
      dropped: 0
    };
  }
  canParse(e, t) {
    return t + 64 < e.length;
  }
  appendFrame(e, t, s) {
    const i = Wn(e, t, s, this.basePTS, this.frameIndex);
    if (i !== -1)
      return {
        sample: e.samples[e.samples.length - 1],
        length: i,
        missing: 0
      };
  }
  static probe(e) {
    if (!e)
      return !1;
    const t = _t(e, 0);
    if (!t)
      return !1;
    const s = t.length;
    return e[s] === 11 && e[s + 1] === 119 && Ei(t) !== void 0 && // check the bsid to confirm ac-3
    Hn(e, s) < 16;
  }
}
function Wn(n, e, t, s, i) {
  if (t + 8 > e.length || e[t] !== 11 || e[t + 1] !== 119)
    return -1;
  const r = e[t + 4] >> 6;
  if (r >= 3)
    return -1;
  const o = [48e3, 44100, 32e3][r], l = e[t + 4] & 63, h = [64, 69, 96, 64, 70, 96, 80, 87, 120, 80, 88, 120, 96, 104, 144, 96, 105, 144, 112, 121, 168, 112, 122, 168, 128, 139, 192, 128, 140, 192, 160, 174, 240, 160, 175, 240, 192, 208, 288, 192, 209, 288, 224, 243, 336, 224, 244, 336, 256, 278, 384, 256, 279, 384, 320, 348, 480, 320, 349, 480, 384, 417, 576, 384, 418, 576, 448, 487, 672, 448, 488, 672, 512, 557, 768, 512, 558, 768, 640, 696, 960, 640, 697, 960, 768, 835, 1152, 768, 836, 1152, 896, 975, 1344, 896, 976, 1344, 1024, 1114, 1536, 1024, 1115, 1536, 1152, 1253, 1728, 1152, 1254, 1728, 1280, 1393, 1920, 1280, 1394, 1920][l * 3 + r] * 2;
  if (t + h > e.length)
    return -1;
  const u = e[t + 6] >> 5;
  let d = 0;
  u === 2 ? d += 2 : (u & 1 && u !== 1 && (d += 2), u & 4 && (d += 2));
  const g = (e[t + 6] << 8 | e[t + 7]) >> 12 - d & 1, m = [2, 1, 2, 3, 3, 4, 4, 5][u] + g, y = e[t + 5] >> 3, E = e[t + 5] & 7, x = new Uint8Array([r << 6 | y << 1 | E >> 2, (E & 3) << 6 | u << 3 | g << 2 | l >> 4, l << 4 & 224]), T = 1536 / o * 9e4, _ = s + i * T, A = e.subarray(t, t + h);
  return n.config = x, n.channelCount = m, n.samplerate = o, n.samples.push({
    unit: A,
    pts: _
  }), h;
}
class Yn {
  constructor() {
    this.VideoSample = null;
  }
  createVideoSample(e, t, s) {
    return {
      key: e,
      frame: !1,
      pts: t,
      dts: s,
      units: [],
      length: 0
    };
  }
  getLastNalUnit(e) {
    var t;
    let s = this.VideoSample, i;
    if ((!s || s.units.length === 0) && (s = e[e.length - 1]), (t = s) != null && t.units) {
      const r = s.units;
      i = r[r.length - 1];
    }
    return i;
  }
  pushAccessUnit(e, t) {
    if (e.units.length && e.frame) {
      if (e.pts === void 0) {
        const s = t.samples, i = s.length;
        if (i) {
          const r = s[i - 1];
          e.pts = r.pts, e.dts = r.dts;
        } else {
          t.dropped++;
          return;
        }
      }
      t.samples.push(e);
    }
  }
  parseNALu(e, t, s) {
    const i = t.byteLength;
    let r = e.naluState || 0;
    const a = r, o = [];
    let l = 0, c, h, u, d = -1, g = 0;
    for (r === -1 && (d = 0, g = this.getNALuType(t, 0), r = 0, l = 1); l < i; ) {
      if (c = t[l++], !r) {
        r = c ? 0 : 1;
        continue;
      }
      if (r === 1) {
        r = c ? 0 : 2;
        continue;
      }
      if (!c)
        r = 3;
      else if (c === 1) {
        if (h = l - r - 1, d >= 0) {
          const f = {
            data: t.subarray(d, h),
            type: g
          };
          o.push(f);
        } else {
          const f = this.getLastNalUnit(e.samples);
          f && (a && l <= 4 - a && f.state && (f.data = f.data.subarray(0, f.data.byteLength - a)), h > 0 && (f.data = Re(f.data, t.subarray(0, h)), f.state = 0));
        }
        l < i ? (u = this.getNALuType(t, l), d = l, g = u, r = 0) : r = -1;
      } else
        r = 0;
    }
    if (d >= 0 && r >= 0) {
      const f = {
        data: t.subarray(d, i),
        type: g,
        state: r
      };
      o.push(f);
    }
    if (o.length === 0) {
      const f = this.getLastNalUnit(e.samples);
      f && (f.data = Re(f.data, t));
    }
    return e.naluState = r, o;
  }
}
class St {
  constructor(e) {
    this.data = void 0, this.bytesAvailable = void 0, this.word = void 0, this.bitsAvailable = void 0, this.data = e, this.bytesAvailable = e.byteLength, this.word = 0, this.bitsAvailable = 0;
  }
  // ():void
  loadWord() {
    const e = this.data, t = this.bytesAvailable, s = e.byteLength - t, i = new Uint8Array(4), r = Math.min(4, t);
    if (r === 0)
      throw new Error("no bytes available");
    i.set(e.subarray(s, s + r)), this.word = new DataView(i.buffer).getUint32(0), this.bitsAvailable = r * 8, this.bytesAvailable -= r;
  }
  // (count:int):void
  skipBits(e) {
    let t;
    e = Math.min(e, this.bytesAvailable * 8 + this.bitsAvailable), this.bitsAvailable > e ? (this.word <<= e, this.bitsAvailable -= e) : (e -= this.bitsAvailable, t = e >> 3, e -= t << 3, this.bytesAvailable -= t, this.loadWord(), this.word <<= e, this.bitsAvailable -= e);
  }
  // (size:int):uint
  readBits(e) {
    let t = Math.min(this.bitsAvailable, e);
    const s = this.word >>> 32 - t;
    if (e > 32 && q.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= t, this.bitsAvailable > 0)
      this.word <<= t;
    else if (this.bytesAvailable > 0)
      this.loadWord();
    else
      throw new Error("no bits available");
    return t = e - t, t > 0 && this.bitsAvailable ? s << t | this.readBits(t) : s;
  }
  // ():uint
  skipLZ() {
    let e;
    for (e = 0; e < this.bitsAvailable; ++e)
      if (this.word & 2147483648 >>> e)
        return this.word <<= e, this.bitsAvailable -= e, e;
    return this.loadWord(), e + this.skipLZ();
  }
  // ():void
  skipUEG() {
    this.skipBits(1 + this.skipLZ());
  }
  // ():void
  skipEG() {
    this.skipBits(1 + this.skipLZ());
  }
  // ():uint
  readUEG() {
    const e = this.skipLZ();
    return this.readBits(e + 1) - 1;
  }
  // ():int
  readEG() {
    const e = this.readUEG();
    return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1);
  }
  // Some convenience functions
  // :Boolean
  readBoolean() {
    return this.readBits(1) === 1;
  }
  // ():int
  readUByte() {
    return this.readBits(8);
  }
  // ():int
  readUShort() {
    return this.readBits(16);
  }
  // ():int
  readUInt() {
    return this.readBits(32);
  }
}
class _r extends Yn {
  parsePES(e, t, s, i) {
    const r = this.parseNALu(e, s.data, i);
    let a = this.VideoSample, o, l = !1;
    s.data = null, a && r.length && !e.audFound && (this.pushAccessUnit(a, e), a = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts)), r.forEach((c) => {
      var h, u;
      switch (c.type) {
        case 1: {
          let m = !1;
          o = !0;
          const y = c.data;
          if (l && y.length > 4) {
            const E = this.readSliceType(y);
            (E === 2 || E === 4 || E === 7 || E === 9) && (m = !0);
          }
          if (m) {
            var d;
            (d = a) != null && d.frame && !a.key && (this.pushAccessUnit(a, e), a = this.VideoSample = null);
          }
          a || (a = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts)), a.frame = !0, a.key = m;
          break;
        }
        case 5:
          o = !0, (h = a) != null && h.frame && !a.key && (this.pushAccessUnit(a, e), a = this.VideoSample = null), a || (a = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts)), a.key = !0, a.frame = !0;
          break;
        case 6: {
          o = !0, hi(c.data, 1, s.pts, t.samples);
          break;
        }
        case 7: {
          var g, f;
          o = !0, l = !0;
          const m = c.data, y = this.readSPS(m);
          if (!e.sps || e.width !== y.width || e.height !== y.height || ((g = e.pixelRatio) == null ? void 0 : g[0]) !== y.pixelRatio[0] || ((f = e.pixelRatio) == null ? void 0 : f[1]) !== y.pixelRatio[1]) {
            e.width = y.width, e.height = y.height, e.pixelRatio = y.pixelRatio, e.sps = [m];
            const E = m.subarray(1, 4);
            let x = "avc1.";
            for (let T = 0; T < 3; T++) {
              let _ = E[T].toString(16);
              _.length < 2 && (_ = "0" + _), x += _;
            }
            e.codec = x;
          }
          break;
        }
        case 8:
          o = !0, e.pps = [c.data];
          break;
        case 9:
          o = !0, e.audFound = !0, (u = a) != null && u.frame && (this.pushAccessUnit(a, e), a = null), a || (a = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts));
          break;
        case 12:
          o = !0;
          break;
        default:
          o = !1;
          break;
      }
      a && o && a.units.push(c);
    }), i && a && (this.pushAccessUnit(a, e), this.VideoSample = null);
  }
  getNALuType(e, t) {
    return e[t] & 31;
  }
  readSliceType(e) {
    const t = new St(e);
    return t.readUByte(), t.readUEG(), t.readUEG();
  }
  /**
   * The scaling list is optionally transmitted as part of a sequence parameter
   * set and is not relevant to transmuxing.
   * @param count the number of entries in this scaling list
   * @see Recommendation ITU-T H.264, Section 7.3.2.1.1.1
   */
  skipScalingList(e, t) {
    let s = 8, i = 8, r;
    for (let a = 0; a < e; a++)
      i !== 0 && (r = t.readEG(), i = (s + r + 256) % 256), s = i === 0 ? s : i;
  }
  /**
   * Read a sequence parameter set and return some interesting video
   * properties. A sequence parameter set is the H264 metadata that
   * describes the properties of upcoming video frames.
   * @returns an object with configuration parsed from the
   * sequence parameter set, including the dimensions of the
   * associated video frames.
   */
  readSPS(e) {
    const t = new St(e);
    let s = 0, i = 0, r = 0, a = 0, o, l, c;
    const h = t.readUByte.bind(t), u = t.readBits.bind(t), d = t.readUEG.bind(t), g = t.readBoolean.bind(t), f = t.skipBits.bind(t), m = t.skipEG.bind(t), y = t.skipUEG.bind(t), E = this.skipScalingList.bind(this);
    h();
    const x = h();
    if (u(5), f(3), h(), y(), x === 100 || x === 110 || x === 122 || x === 244 || x === 44 || x === 83 || x === 86 || x === 118 || x === 128) {
      const b = d();
      if (b === 3 && f(1), y(), y(), f(1), g())
        for (l = b !== 3 ? 8 : 12, c = 0; c < l; c++)
          g() && (c < 6 ? E(16, t) : E(64, t));
    }
    y();
    const T = d();
    if (T === 0)
      d();
    else if (T === 1)
      for (f(1), m(), m(), o = d(), c = 0; c < o; c++)
        m();
    y(), f(1);
    const _ = d(), A = d(), D = u(1);
    D === 0 && f(1), f(1), g() && (s = d(), i = d(), r = d(), a = d());
    let v = [1, 1];
    if (g() && g())
      switch (h()) {
        case 1:
          v = [1, 1];
          break;
        case 2:
          v = [12, 11];
          break;
        case 3:
          v = [10, 11];
          break;
        case 4:
          v = [16, 11];
          break;
        case 5:
          v = [40, 33];
          break;
        case 6:
          v = [24, 11];
          break;
        case 7:
          v = [20, 11];
          break;
        case 8:
          v = [32, 11];
          break;
        case 9:
          v = [80, 33];
          break;
        case 10:
          v = [18, 11];
          break;
        case 11:
          v = [15, 11];
          break;
        case 12:
          v = [64, 33];
          break;
        case 13:
          v = [160, 99];
          break;
        case 14:
          v = [4, 3];
          break;
        case 15:
          v = [3, 2];
          break;
        case 16:
          v = [2, 1];
          break;
        case 255: {
          v = [h() << 8 | h(), h() << 8 | h()];
          break;
        }
      }
    return {
      width: Math.ceil((_ + 1) * 16 - s * 2 - i * 2),
      height: (2 - D) * (A + 1) * 16 - (D ? 2 : 4) * (r + a),
      pixelRatio: v
    };
  }
}
class br extends Yn {
  constructor(...e) {
    super(...e), this.initVPS = null;
  }
  parsePES(e, t, s, i) {
    const r = this.parseNALu(e, s.data, i);
    let a = this.VideoSample, o, l = !1;
    s.data = null, a && r.length && !e.audFound && (this.pushAccessUnit(a, e), a = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts)), r.forEach((c) => {
      var h, u;
      switch (c.type) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
          a || (a = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts)), a.frame = !0, o = !0;
          break;
        case 16:
        case 17:
        case 18:
        case 21:
          if (o = !0, l) {
            var d;
            (d = a) != null && d.frame && !a.key && (this.pushAccessUnit(a, e), a = this.VideoSample = null);
          }
          a || (a = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts)), a.key = !0, a.frame = !0;
          break;
        case 19:
        case 20:
          o = !0, (h = a) != null && h.frame && !a.key && (this.pushAccessUnit(a, e), a = this.VideoSample = null), a || (a = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts)), a.key = !0, a.frame = !0;
          break;
        case 39:
          o = !0, hi(
            c.data,
            2,
            // NALu header size
            s.pts,
            t.samples
          );
          break;
        case 32:
          if (o = !0, !e.vps) {
            const g = this.readVPS(c.data);
            e.params = he({}, g), this.initVPS = c.data;
          }
          e.vps = [c.data];
          break;
        case 33:
          if (o = !0, l = !0, typeof e.params == "object") {
            if (e.vps !== void 0 && e.vps[0] !== this.initVPS && e.sps !== void 0 && !this.matchSPS(e.sps[0], c.data) && (this.initVPS = e.vps[0], e.sps = e.pps = void 0), !e.sps) {
              const g = this.readSPS(c.data);
              e.width = g.width, e.height = g.height, e.pixelRatio = g.pixelRatio, e.codec = g.codecString, e.sps = [];
              for (const f in g.params)
                e.params[f] = g.params[f];
            }
            e.vps !== void 0 && e.vps[0] === this.initVPS && e.sps.push(c.data);
          }
          a || (a = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts)), a.key = !0;
          break;
        case 34:
          if (o = !0, typeof e.params == "object") {
            if (!e.pps) {
              e.pps = [];
              const g = this.readPPS(c.data);
              for (const f in g)
                e.params[f] = g[f];
            }
            (this.initVPS !== null || e.pps.length === 0) && e.pps.push(c.data);
          }
          break;
        case 35:
          o = !0, e.audFound = !0, (u = a) != null && u.frame && (this.pushAccessUnit(a, e), a = null), a || (a = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts));
          break;
        default:
          o = !1;
          break;
      }
      a && o && a.units.push(c);
    }), i && a && (this.pushAccessUnit(a, e), this.VideoSample = null);
  }
  getNALuType(e, t) {
    return (e[t] & 126) >>> 1;
  }
  ebsp2rbsp(e) {
    const t = new Uint8Array(e.byteLength);
    let s = 0;
    for (let i = 0; i < e.byteLength; i++)
      i >= 2 && e[i] === 3 && e[i - 1] === 0 && e[i - 2] === 0 || (t[s] = e[i], s++);
    return new Uint8Array(t.buffer, 0, s);
  }
  readVPS(e) {
    const t = new St(e);
    t.readUByte(), t.readUByte(), t.readBits(4), t.skipBits(2), t.readBits(6);
    const s = t.readBits(3), i = t.readBoolean();
    return {
      numTemporalLayers: s + 1,
      temporalIdNested: i
    };
  }
  readSPS(e) {
    const t = new St(this.ebsp2rbsp(e));
    t.readUByte(), t.readUByte(), t.readBits(4);
    const s = t.readBits(3);
    t.readBoolean();
    const i = t.readBits(2), r = t.readBoolean(), a = t.readBits(5), o = t.readUByte(), l = t.readUByte(), c = t.readUByte(), h = t.readUByte(), u = t.readUByte(), d = t.readUByte(), g = t.readUByte(), f = t.readUByte(), m = t.readUByte(), y = t.readUByte(), E = t.readUByte(), x = [], T = [];
    for (let z = 0; z < s; z++)
      x.push(t.readBoolean()), T.push(t.readBoolean());
    if (s > 0)
      for (let z = s; z < 8; z++)
        t.readBits(2);
    for (let z = 0; z < s; z++)
      x[z] && (t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte()), T[z] && t.readUByte();
    t.readUEG();
    const _ = t.readUEG();
    _ == 3 && t.skipBits(1);
    const A = t.readUEG(), D = t.readUEG(), v = t.readBoolean();
    let b = 0, C = 0, R = 0, w = 0;
    v && (b += t.readUEG(), C += t.readUEG(), R += t.readUEG(), w += t.readUEG());
    const F = t.readUEG(), te = t.readUEG(), k = t.readUEG(), K = t.readBoolean();
    for (let z = K ? 0 : s; z <= s; z++)
      t.skipUEG(), t.skipUEG(), t.skipUEG();
    if (t.skipUEG(), t.skipUEG(), t.skipUEG(), t.skipUEG(), t.skipUEG(), t.skipUEG(), t.readBoolean() && t.readBoolean())
      for (let fe = 0; fe < 4; fe++)
        for (let ve = 0; ve < (fe === 3 ? 2 : 6); ve++)
          if (!t.readBoolean())
            t.readUEG();
          else {
            const _e = Math.min(64, 1 << 4 + (fe << 1));
            fe > 1 && t.readEG();
            for (let Ze = 0; Ze < _e; Ze++)
              t.readEG();
          }
    t.readBoolean(), t.readBoolean(), t.readBoolean() && (t.readUByte(), t.skipUEG(), t.skipUEG(), t.readBoolean());
    const X = t.readUEG();
    let P = 0;
    for (let z = 0; z < X; z++) {
      let fe = !1;
      if (z !== 0 && (fe = t.readBoolean()), fe) {
        z === X && t.readUEG(), t.readBoolean(), t.readUEG();
        let ve = 0;
        for (let je = 0; je <= P; je++) {
          const _e = t.readBoolean();
          let Ze = !1;
          _e || (Ze = t.readBoolean()), (_e || Ze) && ve++;
        }
        P = ve;
      } else {
        const ve = t.readUEG(), je = t.readUEG();
        P = ve + je;
        for (let _e = 0; _e < ve; _e++)
          t.readUEG(), t.readBoolean();
        for (let _e = 0; _e < je; _e++)
          t.readUEG(), t.readBoolean();
      }
    }
    if (t.readBoolean()) {
      const z = t.readUEG();
      for (let fe = 0; fe < z; fe++) {
        for (let ve = 0; ve < k + 4; ve++)
          t.readBits(1);
        t.readBits(1);
      }
    }
    let W = 0, V = 1, Y = 1, Z = !0, re = 1, se = 0;
    t.readBoolean(), t.readBoolean();
    let pe = !1;
    if (t.readBoolean()) {
      if (t.readBoolean()) {
        const ze = t.readUByte(), Di = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2], It = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1];
        ze > 0 && ze < 16 ? (V = Di[ze - 1], Y = It[ze - 1]) : ze === 255 && (V = t.readBits(16), Y = t.readBits(16));
      }
      if (t.readBoolean() && t.readBoolean(), t.readBoolean() && (t.readBits(3), t.readBoolean(), t.readBoolean() && (t.readUByte(), t.readUByte(), t.readUByte())), t.readBoolean() && (t.readUEG(), t.readUEG()), t.readBoolean(), t.readBoolean(), t.readBoolean(), pe = t.readBoolean(), pe && (b += t.readUEG(), C += t.readUEG(), R += t.readUEG(), w += t.readUEG()), t.readBoolean() && (re = t.readBits(32), se = t.readBits(32), t.readBoolean() && t.readUEG(), t.readBoolean())) {
        const It = t.readBoolean(), Ci = t.readBoolean();
        let pt = !1;
        (It || Ci) && (pt = t.readBoolean(), pt && (t.readUByte(), t.readBits(5), t.readBoolean(), t.readBits(5)), t.readBits(4), t.readBits(4), pt && t.readBits(4), t.readBits(5), t.readBits(5), t.readBits(5));
        for (let wi = 0; wi <= s; wi++) {
          Z = t.readBoolean();
          const Ta = Z || t.readBoolean();
          let ki = !1;
          Ta ? t.readEG() : ki = t.readBoolean();
          const Pi = ki ? 1 : t.readUEG() + 1;
          if (It)
            for (let yt = 0; yt < Pi; yt++)
              t.readUEG(), t.readUEG(), pt && (t.readUEG(), t.readUEG()), t.skipBits(1);
          if (Ci)
            for (let yt = 0; yt < Pi; yt++)
              t.readUEG(), t.readUEG(), pt && (t.readUEG(), t.readUEG()), t.skipBits(1);
        }
      }
      t.readBoolean() && (t.readBoolean(), t.readBoolean(), t.readBoolean(), W = t.readUEG());
    }
    let $e = A, Ii = D;
    if (v || pe) {
      let z = 1, fe = 1;
      _ === 1 ? z = fe = 2 : _ == 2 && (z = 2), $e = A - z * C - z * b, Ii = D - fe * w - fe * R;
    }
    const ya = i ? ["A", "B", "C"][i] : "", Ea = o << 24 | l << 16 | c << 8 | h;
    let fs = 0;
    for (let z = 0; z < 32; z++)
      fs = (fs | (Ea >> z & 1) << 31 - z) >>> 0;
    let gs = fs.toString(16);
    return a === 1 && gs === "2" && (gs = "6"), {
      codecString: `hvc1.${ya}${a}.${gs}.${r ? "H" : "L"}${E}.B0`,
      params: {
        general_tier_flag: r,
        general_profile_idc: a,
        general_profile_space: i,
        general_profile_compatibility_flags: [o, l, c, h],
        general_constraint_indicator_flags: [u, d, g, f, m, y],
        general_level_idc: E,
        bit_depth: F + 8,
        bit_depth_luma_minus8: F,
        bit_depth_chroma_minus8: te,
        min_spatial_segmentation_idc: W,
        chroma_format_idc: _,
        frame_rate: {
          fixed: Z,
          fps: se / re
        }
      },
      width: $e,
      height: Ii,
      pixelRatio: [V, Y]
    };
  }
  readPPS(e) {
    const t = new St(this.ebsp2rbsp(e));
    t.readUByte(), t.readUByte(), t.skipUEG(), t.skipUEG(), t.skipBits(2), t.skipBits(3), t.skipBits(2), t.skipUEG(), t.skipUEG(), t.skipEG(), t.skipBits(2), t.readBoolean() && t.skipUEG(), t.skipEG(), t.skipEG(), t.skipBits(4);
    const i = t.readBoolean(), r = t.readBoolean();
    let a = 1;
    return r && i ? a = 0 : r ? a = 3 : i && (a = 2), {
      parallelismType: a
    };
  }
  matchSPS(e, t) {
    return String.fromCharCode.apply(null, e).substr(3) === String.fromCharCode.apply(null, t).substr(3);
  }
}
class tc {
  constructor(e, t, s) {
    this.keyData = void 0, this.decrypter = void 0, this.keyData = s, this.decrypter = new pi(t, {
      removePKCS7Padding: !1
    });
  }
  decryptBuffer(e) {
    return this.decrypter.decrypt(e, this.keyData.key.buffer, this.keyData.iv.buffer, We.cbc);
  }
  // AAC - encrypt all full 16 bytes blocks starting from offset 16
  decryptAacSample(e, t, s) {
    const i = e[t].unit;
    if (i.length <= 16)
      return;
    const r = i.subarray(16, i.length - i.length % 16), a = r.buffer.slice(r.byteOffset, r.byteOffset + r.length);
    this.decryptBuffer(a).then((o) => {
      const l = new Uint8Array(o);
      i.set(l, 16), this.decrypter.isSync() || this.decryptAacSamples(e, t + 1, s);
    });
  }
  decryptAacSamples(e, t, s) {
    for (; ; t++) {
      if (t >= e.length) {
        s();
        return;
      }
      if (!(e[t].unit.length < 32) && (this.decryptAacSample(e, t, s), !this.decrypter.isSync()))
        return;
    }
  }
  // AVC - encrypt one 16 bytes block out of ten, starting from offset 32
  getAvcEncryptedData(e) {
    const t = Math.floor((e.length - 48) / 160) * 16 + 16, s = new Int8Array(t);
    let i = 0;
    for (let r = 32; r < e.length - 16; r += 160, i += 16)
      s.set(e.subarray(r, r + 16), i);
    return s;
  }
  getAvcDecryptedUnit(e, t) {
    const s = new Uint8Array(t);
    let i = 0;
    for (let r = 32; r < e.length - 16; r += 160, i += 16)
      e.set(s.subarray(i, i + 16), r);
    return e;
  }
  decryptAvcSample(e, t, s, i, r) {
    const a = En(r.data), o = this.getAvcEncryptedData(a);
    this.decryptBuffer(o.buffer).then((l) => {
      r.data = this.getAvcDecryptedUnit(a, l), this.decrypter.isSync() || this.decryptAvcSamples(e, t, s + 1, i);
    });
  }
  decryptAvcSamples(e, t, s, i) {
    if (e instanceof Uint8Array)
      throw new Error("Cannot decrypt samples of type Uint8Array");
    for (; ; t++, s = 0) {
      if (t >= e.length) {
        i();
        return;
      }
      const r = e[t].units;
      for (; !(s >= r.length); s++) {
        const a = r[s];
        if (!(a.data.length <= 48 || a.type !== 1 && a.type !== 5) && (this.decryptAvcSample(e, t, s, i, a), !this.decrypter.isSync()))
          return;
      }
    }
  }
}
const ue = 188;
class Ve {
  constructor(e, t, s, i) {
    this.logger = void 0, this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.sampleAes = null, this.pmtParsed = !1, this.audioCodec = void 0, this.videoCodec = void 0, this._pmtId = -1, this._videoTrack = void 0, this._audioTrack = void 0, this._id3Track = void 0, this._txtTrack = void 0, this.aacOverFlow = null, this.remainderData = null, this.videoParser = void 0, this.observer = e, this.config = t, this.typeSupported = s, this.logger = i, this.videoParser = null;
  }
  static probe(e, t) {
    const s = Ve.syncOffset(e);
    return s > 0 && t.warn(`MPEG2-TS detected but first sync word found @ offset ${s}`), s !== -1;
  }
  static syncOffset(e) {
    const t = e.length;
    let s = Math.min(ue * 5, t - ue) + 1, i = 0;
    for (; i < s; ) {
      let r = !1, a = -1, o = 0;
      for (let l = i; l < t; l += ue)
        if (e[l] === 71 && (t - l === ue || e[l + ue] === 71)) {
          if (o++, a === -1 && (a = l, a !== 0 && (s = Math.min(a + ue * 99, e.length - ue) + 1)), r || (r = zs(e, l) === 0), r && o > 1 && (a === 0 && o > 2 || l + ue > s))
            return a;
        } else {
          if (o)
            return -1;
          break;
        }
      i++;
    }
    return -1;
  }
  /**
   * Creates a track model internal to demuxer used to drive remuxing input
   */
  static createTrack(e, t) {
    return {
      container: e === "video" || e === "audio" ? "video/mp2t" : void 0,
      type: e,
      id: fn[e],
      pid: -1,
      inputTimeScale: 9e4,
      sequenceNumber: 0,
      samples: [],
      dropped: 0,
      duration: e === "audio" ? t : void 0
    };
  }
  /**
   * Initializes a new init segment on the demuxer/remuxer interface. Needed for discontinuities/track-switches (or at stream start)
   * Resets all internal track instances of the demuxer.
   */
  resetInitSegment(e, t, s, i) {
    this.pmtParsed = !1, this._pmtId = -1, this._videoTrack = Ve.createTrack("video"), this._videoTrack.duration = i, this._audioTrack = Ve.createTrack("audio", i), this._id3Track = Ve.createTrack("id3"), this._txtTrack = Ve.createTrack("text"), this._audioTrack.segmentCodec = "aac", this.aacOverFlow = null, this.remainderData = null, this.audioCodec = t, this.videoCodec = s;
  }
  resetTimeStamp() {
  }
  resetContiguity() {
    const {
      _audioTrack: e,
      _videoTrack: t,
      _id3Track: s
    } = this;
    e && (e.pesData = null), t && (t.pesData = null), s && (s.pesData = null), this.aacOverFlow = null, this.remainderData = null;
  }
  demux(e, t, s = !1, i = !1) {
    s || (this.sampleAes = null);
    let r;
    const a = this._videoTrack, o = this._audioTrack, l = this._id3Track, c = this._txtTrack;
    let h = a.pid, u = a.pesData, d = o.pid, g = l.pid, f = o.pesData, m = l.pesData, y = null, E = this.pmtParsed, x = this._pmtId, T = e.length;
    if (this.remainderData && (e = Re(this.remainderData, e), T = e.length, this.remainderData = null), T < ue && !i)
      return this.remainderData = e, {
        audioTrack: o,
        videoTrack: a,
        id3Track: l,
        textTrack: c
      };
    const _ = Math.max(0, Ve.syncOffset(e));
    T -= (T - _) % ue, T < e.byteLength && !i && (this.remainderData = new Uint8Array(e.buffer, T, e.buffer.byteLength - T));
    let A = 0;
    for (let v = _; v < T; v += ue)
      if (e[v] === 71) {
        const b = !!(e[v + 1] & 64), C = zs(e, v), R = (e[v + 3] & 48) >> 4;
        let w;
        if (R > 1) {
          if (w = v + 5 + e[v + 4], w === v + ue)
            continue;
        } else
          w = v + 4;
        switch (C) {
          case h:
            if (b) {
              if (u && (r = it(u, this.logger))) {
                if (this.videoParser === null)
                  switch (a.segmentCodec) {
                    case "avc":
                      this.videoParser = new _r();
                      break;
                    case "hevc":
                      this.videoParser = new br();
                      break;
                  }
                this.videoParser !== null && this.videoParser.parsePES(a, c, r, !1);
              }
              u = {
                data: [],
                size: 0
              };
            }
            u && (u.data.push(e.subarray(w, v + ue)), u.size += v + ue - w);
            break;
          case d:
            if (b) {
              if (f && (r = it(f, this.logger)))
                switch (o.segmentCodec) {
                  case "aac":
                    this.parseAACPES(o, r);
                    break;
                  case "mp3":
                    this.parseMPEGPES(o, r);
                    break;
                  case "ac3":
                    this.parseAC3PES(o, r);
                    break;
                }
              f = {
                data: [],
                size: 0
              };
            }
            f && (f.data.push(e.subarray(w, v + ue)), f.size += v + ue - w);
            break;
          case g:
            b && (m && (r = it(m, this.logger)) && this.parseID3PES(l, r), m = {
              data: [],
              size: 0
            }), m && (m.data.push(e.subarray(w, v + ue)), m.size += v + ue - w);
            break;
          case 0:
            b && (w += e[w] + 1), x = this._pmtId = sc(e, w);
            break;
          case x: {
            b && (w += e[w] + 1);
            const F = ic(e, w, this.typeSupported, s, this.observer, this.logger);
            h = F.videoPid, h > 0 && (a.pid = h, a.segmentCodec = F.segmentVideoCodec), d = F.audioPid, d > 0 && (o.pid = d, o.segmentCodec = F.segmentAudioCodec), g = F.id3Pid, g > 0 && (l.pid = g), y !== null && !E && (this.logger.warn(`MPEG-TS PMT found at ${v} after unknown PID '${y}'. Backtracking to sync byte @${_} to parse all TS packets.`), y = null, v = _ - 188), E = this.pmtParsed = !0;
            break;
          }
          case 17:
          case 8191:
            break;
          default:
            y = C;
            break;
        }
      } else
        A++;
    A > 0 && Xs(this.observer, new Error(`Found ${A} TS packet/s that do not start with 0x47`), void 0, this.logger), a.pesData = u, o.pesData = f, l.pesData = m;
    const D = {
      audioTrack: o,
      videoTrack: a,
      id3Track: l,
      textTrack: c
    };
    return i && this.extractRemainingSamples(D), D;
  }
  flush() {
    const {
      remainderData: e
    } = this;
    this.remainderData = null;
    let t;
    return e ? t = this.demux(e, -1, !1, !0) : t = {
      videoTrack: this._videoTrack,
      audioTrack: this._audioTrack,
      id3Track: this._id3Track,
      textTrack: this._txtTrack
    }, this.extractRemainingSamples(t), this.sampleAes ? this.decrypt(t, this.sampleAes) : t;
  }
  extractRemainingSamples(e) {
    const {
      audioTrack: t,
      videoTrack: s,
      id3Track: i,
      textTrack: r
    } = e, a = s.pesData, o = t.pesData, l = i.pesData;
    let c;
    if (a && (c = it(a, this.logger))) {
      if (this.videoParser === null)
        switch (s.segmentCodec) {
          case "avc":
            this.videoParser = new _r();
            break;
          case "hevc":
            this.videoParser = new br();
            break;
        }
      this.videoParser !== null && (this.videoParser.parsePES(s, r, c, !0), s.pesData = null);
    } else
      s.pesData = a;
    if (o && (c = it(o, this.logger))) {
      switch (t.segmentCodec) {
        case "aac":
          this.parseAACPES(t, c);
          break;
        case "mp3":
          this.parseMPEGPES(t, c);
          break;
        case "ac3":
          this.parseAC3PES(t, c);
          break;
      }
      t.pesData = null;
    } else
      o != null && o.size && this.logger.log("last AAC PES packet truncated,might overlap between fragments"), t.pesData = o;
    l && (c = it(l, this.logger)) ? (this.parseID3PES(i, c), i.pesData = null) : i.pesData = l;
  }
  demuxSampleAes(e, t, s) {
    const i = this.demux(e, s, !0, !this.config.progressive), r = this.sampleAes = new tc(this.observer, this.config, t);
    return this.decrypt(i, r);
  }
  decrypt(e, t) {
    return new Promise((s) => {
      const {
        audioTrack: i,
        videoTrack: r
      } = e;
      i.samples && i.segmentCodec === "aac" ? t.decryptAacSamples(i.samples, 0, () => {
        r.samples ? t.decryptAvcSamples(r.samples, 0, 0, () => {
          s(e);
        }) : s(e);
      }) : r.samples && t.decryptAvcSamples(r.samples, 0, 0, () => {
        s(e);
      });
    });
  }
  destroy() {
    this.observer && this.observer.removeAllListeners(), this.config = this.logger = this.observer = null, this.aacOverFlow = this.videoParser = this.remainderData = this.sampleAes = null, this._videoTrack = this._audioTrack = this._id3Track = this._txtTrack = void 0;
  }
  parseAACPES(e, t) {
    let s = 0;
    const i = this.aacOverFlow;
    let r = t.data;
    if (i) {
      this.aacOverFlow = null;
      const u = i.missing, d = i.sample.unit.byteLength;
      if (u === -1)
        r = Re(i.sample.unit, r);
      else {
        const g = d - u;
        i.sample.unit.set(r.subarray(0, u), g), e.samples.push(i.sample), s = i.missing;
      }
    }
    let a, o;
    for (a = s, o = r.length; a < o - 1 && !cs(r, a); a++)
      ;
    if (a !== s) {
      let u;
      const d = a < o - 1;
      if (d ? u = `AAC PES did not start with ADTS header,offset:${a}` : u = "No ADTS header found in AAC PES", Xs(this.observer, new Error(u), d, this.logger), !d)
        return;
    }
    Nn(e, this.observer, r, a, this.audioCodec);
    let l;
    if (t.pts !== void 0)
      l = t.pts;
    else if (i) {
      const u = Un(e.samplerate);
      l = i.sample.pts + u;
    } else {
      this.logger.warn("[tsdemuxer]: AAC PES unknown PTS");
      return;
    }
    let c = 0, h;
    for (; a < o; )
      if (h = Bn(e, r, a, l, c), a += h.length, h.missing) {
        this.aacOverFlow = h;
        break;
      } else
        for (c++; a < o - 1 && !cs(r, a); a++)
          ;
  }
  parseMPEGPES(e, t) {
    const s = t.data, i = s.length;
    let r = 0, a = 0;
    const o = t.pts;
    if (o === void 0) {
      this.logger.warn("[tsdemuxer]: MPEG PES unknown PTS");
      return;
    }
    for (; a < i; )
      if (Kn(s, a)) {
        const l = $n(e, s, a, o, r);
        if (l)
          a += l.length, r++;
        else
          break;
      } else
        a++;
  }
  parseAC3PES(e, t) {
    {
      const s = t.data, i = t.pts;
      if (i === void 0) {
        this.logger.warn("[tsdemuxer]: AC3 PES unknown PTS");
        return;
      }
      const r = s.length;
      let a = 0, o = 0, l;
      for (; o < r && (l = Wn(e, s, o, i, a++)) > 0; )
        o += l;
    }
  }
  parseID3PES(e, t) {
    if (t.pts === void 0) {
      this.logger.warn("[tsdemuxer]: ID3 PES unknown PTS");
      return;
    }
    const s = ae({}, t, {
      type: this._videoTrack ? Ie.emsg : Ie.audioId3,
      duration: Number.POSITIVE_INFINITY
    });
    e.samples.push(s);
  }
}
function zs(n, e) {
  return ((n[e + 1] & 31) << 8) + n[e + 2];
}
function sc(n, e) {
  return (n[e + 10] & 31) << 8 | n[e + 11];
}
function ic(n, e, t, s, i, r) {
  const a = {
    audioPid: -1,
    videoPid: -1,
    id3Pid: -1,
    segmentVideoCodec: "avc",
    segmentAudioCodec: "aac"
  }, o = (n[e + 1] & 15) << 8 | n[e + 2], l = e + 3 + o - 4, c = (n[e + 10] & 15) << 8 | n[e + 11];
  for (e += 12 + c; e < l; ) {
    const h = zs(n, e), u = (n[e + 3] & 15) << 8 | n[e + 4];
    switch (n[e]) {
      case 207:
        if (!s) {
          _s("ADTS AAC", r);
          break;
        }
      case 15:
        a.audioPid === -1 && (a.audioPid = h);
        break;
      case 21:
        a.id3Pid === -1 && (a.id3Pid = h);
        break;
      case 219:
        if (!s) {
          _s("H.264", r);
          break;
        }
      case 27:
        a.videoPid === -1 && (a.videoPid = h, a.segmentVideoCodec = "avc");
        break;
      case 3:
      case 4:
        !t.mpeg && !t.mp3 ? r.log("MPEG audio found, not supported in this browser") : a.audioPid === -1 && (a.audioPid = h, a.segmentAudioCodec = "mp3");
        break;
      case 193:
        if (!s) {
          _s("AC-3", r);
          break;
        }
      case 129:
        t.ac3 ? a.audioPid === -1 && (a.audioPid = h, a.segmentAudioCodec = "ac3") : r.log("AC-3 audio found, not supported in this browser");
        break;
      case 6:
        if (a.audioPid === -1 && u > 0) {
          let d = e + 5, g = u;
          for (; g > 2; ) {
            switch (n[d]) {
              case 106:
                t.ac3 !== !0 ? r.log("AC-3 audio found, not supported in this browser for now") : (a.audioPid = h, a.segmentAudioCodec = "ac3");
                break;
            }
            const m = n[d + 1] + 2;
            d += m, g -= m;
          }
        }
        break;
      case 194:
      case 135:
        return Xs(i, new Error("Unsupported EC-3 in M2TS found"), void 0, r), a;
      case 36:
        a.videoPid === -1 && (a.videoPid = h, a.segmentVideoCodec = "hevc", r.log("HEVC in M2TS found"));
        break;
    }
    e += u + 5;
  }
  return a;
}
function Xs(n, e, t, s) {
  s.warn(`parsing error: ${e.message}`), n.emit(p.ERROR, p.ERROR, {
    type: $.MEDIA_ERROR,
    details: L.FRAG_PARSING_ERROR,
    fatal: !1,
    levelRetry: t,
    error: e,
    reason: e.message
  });
}
function _s(n, e) {
  e.log(`${n} with AES-128-CBC encryption found in unencrypted stream`);
}
function it(n, e) {
  let t = 0, s, i, r, a, o;
  const l = n.data;
  if (!n || n.size === 0)
    return null;
  for (; l[0].length < 19 && l.length > 1; )
    l[0] = Re(l[0], l[1]), l.splice(1, 1);
  if (s = l[0], (s[0] << 16) + (s[1] << 8) + s[2] === 1) {
    if (i = (s[4] << 8) + s[5], i && i > n.size - 6)
      return null;
    const h = s[7];
    h & 192 && (a = (s[9] & 14) * 536870912 + // 1 << 29
    (s[10] & 255) * 4194304 + // 1 << 22
    (s[11] & 254) * 16384 + // 1 << 14
    (s[12] & 255) * 128 + // 1 << 7
    (s[13] & 254) / 2, h & 64 ? (o = (s[14] & 14) * 536870912 + // 1 << 29
    (s[15] & 255) * 4194304 + // 1 << 22
    (s[16] & 254) * 16384 + // 1 << 14
    (s[17] & 255) * 128 + // 1 << 7
    (s[18] & 254) / 2, a - o > 60 * 9e4 && (e.warn(`${Math.round((a - o) / 9e4)}s delta between PTS and DTS, align them`), a = o)) : o = a), r = s[8];
    let u = r + 9;
    if (n.size <= u)
      return null;
    n.size -= u;
    const d = new Uint8Array(n.size);
    for (let g = 0, f = l.length; g < f; g++) {
      s = l[g];
      let m = s.byteLength;
      if (u)
        if (u > m) {
          u -= m;
          continue;
        } else
          s = s.subarray(u), m -= u, u = 0;
      d.set(s, t), t += m;
    }
    return i && (i -= r + 3), {
      data: d,
      pts: a,
      dts: o,
      len: i
    };
  }
  return null;
}
class rc extends Ti {
  resetInitSegment(e, t, s, i) {
    super.resetInitSegment(e, t, s, i), this._audioTrack = {
      container: "audio/mpeg",
      type: "audio",
      id: 2,
      pid: -1,
      sequenceNumber: 0,
      segmentCodec: "mp3",
      samples: [],
      manifestCodec: t,
      duration: i,
      inputTimeScale: 9e4,
      dropped: 0
    };
  }
  static probe(e) {
    if (!e)
      return !1;
    const t = _t(e, 0);
    let s = (t == null ? void 0 : t.length) || 0;
    if (t && e[s] === 11 && e[s + 1] === 119 && Ei(t) !== void 0 && // check the bsid to confirm ac-3 or ec-3 (not mp3)
    Hn(e, s) <= 16)
      return !1;
    for (let i = e.length; s < i; s++)
      if (Vn(e, s))
        return q.log("MPEG Audio sync word found !"), !0;
    return !1;
  }
  canParse(e, t) {
    return Xl(e, t);
  }
  appendFrame(e, t, s) {
    if (this.basePTS !== null)
      return $n(e, t, s, this.basePTS, this.frameIndex);
  }
}
class nc {
  static getSilentFrame(e, t) {
    switch (e) {
      case "mp4a.40.2":
        if (t === 1)
          return new Uint8Array([0, 200, 0, 128, 35, 128]);
        if (t === 2)
          return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
        if (t === 3)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
        if (t === 4)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
        if (t === 5)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
        if (t === 6)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
        break;
      default:
        if (t === 1)
          return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
        if (t === 2)
          return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
        if (t === 3)
          return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
        break;
    }
  }
}
const Ge = Math.pow(2, 32) - 1;
class S {
  static init() {
    S.types = {
      avc1: [],
      // codingname
      avcC: [],
      hvc1: [],
      hvcC: [],
      btrt: [],
      dinf: [],
      dref: [],
      esds: [],
      ftyp: [],
      hdlr: [],
      mdat: [],
      mdhd: [],
      mdia: [],
      mfhd: [],
      minf: [],
      moof: [],
      moov: [],
      mp4a: [],
      ".mp3": [],
      dac3: [],
      "ac-3": [],
      mvex: [],
      mvhd: [],
      pasp: [],
      sdtp: [],
      stbl: [],
      stco: [],
      stsc: [],
      stsd: [],
      stsz: [],
      stts: [],
      tfdt: [],
      tfhd: [],
      traf: [],
      trak: [],
      trun: [],
      trex: [],
      tkhd: [],
      vmhd: [],
      smhd: []
    };
    let e;
    for (e in S.types)
      S.types.hasOwnProperty(e) && (S.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
    const t = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      // pre_defined
      118,
      105,
      100,
      101,
      // handler_type: 'vide'
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      86,
      105,
      100,
      101,
      111,
      72,
      97,
      110,
      100,
      108,
      101,
      114,
      0
      // name: 'VideoHandler'
    ]), s = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      // pre_defined
      115,
      111,
      117,
      110,
      // handler_type: 'soun'
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      83,
      111,
      117,
      110,
      100,
      72,
      97,
      110,
      100,
      108,
      101,
      114,
      0
      // name: 'SoundHandler'
    ]);
    S.HDLR_TYPES = {
      video: t,
      audio: s
    };
    const i = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      1,
      // entry_count
      0,
      0,
      0,
      12,
      // entry_size
      117,
      114,
      108,
      32,
      // 'url' type
      0,
      // version 0
      0,
      0,
      1
      // entry_flags
    ]), r = new Uint8Array([
      0,
      // version
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0
      // entry_count
    ]);
    S.STTS = S.STSC = S.STCO = r, S.STSZ = new Uint8Array([
      0,
      // version
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      // sample_size
      0,
      0,
      0,
      0
      // sample_count
    ]), S.VMHD = new Uint8Array([
      0,
      // version
      0,
      0,
      1,
      // flags
      0,
      0,
      // graphicsmode
      0,
      0,
      0,
      0,
      0,
      0
      // opcolor
    ]), S.SMHD = new Uint8Array([
      0,
      // version
      0,
      0,
      0,
      // flags
      0,
      0,
      // balance
      0,
      0
      // reserved
    ]), S.STSD = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      1
    ]);
    const a = new Uint8Array([105, 115, 111, 109]), o = new Uint8Array([97, 118, 99, 49]), l = new Uint8Array([0, 0, 0, 1]);
    S.FTYP = S.box(S.types.ftyp, a, l, a, o), S.DINF = S.box(S.types.dinf, S.box(S.types.dref, i));
  }
  static box(e, ...t) {
    let s = 8, i = t.length;
    const r = i;
    for (; i--; )
      s += t[i].byteLength;
    const a = new Uint8Array(s);
    for (a[0] = s >> 24 & 255, a[1] = s >> 16 & 255, a[2] = s >> 8 & 255, a[3] = s & 255, a.set(e, 4), i = 0, s = 8; i < r; i++)
      a.set(t[i], s), s += t[i].byteLength;
    return a;
  }
  static hdlr(e) {
    return S.box(S.types.hdlr, S.HDLR_TYPES[e]);
  }
  static mdat(e) {
    return S.box(S.types.mdat, e);
  }
  static mdhd(e, t) {
    t *= e;
    const s = Math.floor(t / (Ge + 1)), i = Math.floor(t % (Ge + 1));
    return S.box(S.types.mdhd, new Uint8Array([
      1,
      // version 1
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      // creation_time
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      // modification_time
      e >> 24 & 255,
      e >> 16 & 255,
      e >> 8 & 255,
      e & 255,
      // timescale
      s >> 24,
      s >> 16 & 255,
      s >> 8 & 255,
      s & 255,
      i >> 24,
      i >> 16 & 255,
      i >> 8 & 255,
      i & 255,
      85,
      196,
      // 'und' language (undetermined)
      0,
      0
    ]));
  }
  static mdia(e) {
    return S.box(S.types.mdia, S.mdhd(e.timescale, e.duration), S.hdlr(e.type), S.minf(e));
  }
  static mfhd(e) {
    return S.box(S.types.mfhd, new Uint8Array([
      0,
      0,
      0,
      0,
      // flags
      e >> 24,
      e >> 16 & 255,
      e >> 8 & 255,
      e & 255
      // sequence_number
    ]));
  }
  static minf(e) {
    return e.type === "audio" ? S.box(S.types.minf, S.box(S.types.smhd, S.SMHD), S.DINF, S.stbl(e)) : S.box(S.types.minf, S.box(S.types.vmhd, S.VMHD), S.DINF, S.stbl(e));
  }
  static moof(e, t, s) {
    return S.box(S.types.moof, S.mfhd(e), S.traf(s, t));
  }
  static moov(e) {
    let t = e.length;
    const s = [];
    for (; t--; )
      s[t] = S.trak(e[t]);
    return S.box.apply(null, [S.types.moov, S.mvhd(e[0].timescale, e[0].duration)].concat(s).concat(S.mvex(e)));
  }
  static mvex(e) {
    let t = e.length;
    const s = [];
    for (; t--; )
      s[t] = S.trex(e[t]);
    return S.box.apply(null, [S.types.mvex, ...s]);
  }
  static mvhd(e, t) {
    t *= e;
    const s = Math.floor(t / (Ge + 1)), i = Math.floor(t % (Ge + 1)), r = new Uint8Array([
      1,
      // version 1
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      // creation_time
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      // modification_time
      e >> 24 & 255,
      e >> 16 & 255,
      e >> 8 & 255,
      e & 255,
      // timescale
      s >> 24,
      s >> 16 & 255,
      s >> 8 & 255,
      s & 255,
      i >> 24,
      i >> 16 & 255,
      i >> 8 & 255,
      i & 255,
      0,
      1,
      0,
      0,
      // 1.0 rate
      1,
      0,
      // 1.0 volume
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      64,
      0,
      0,
      0,
      // transformation: unity matrix
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // pre_defined
      255,
      255,
      255,
      255
      // next_track_ID
    ]);
    return S.box(S.types.mvhd, r);
  }
  static sdtp(e) {
    const t = e.samples || [], s = new Uint8Array(4 + t.length);
    let i, r;
    for (i = 0; i < t.length; i++)
      r = t[i].flags, s[i + 4] = r.dependsOn << 4 | r.isDependedOn << 2 | r.hasRedundancy;
    return S.box(S.types.sdtp, s);
  }
  static stbl(e) {
    return S.box(S.types.stbl, S.stsd(e), S.box(S.types.stts, S.STTS), S.box(S.types.stsc, S.STSC), S.box(S.types.stsz, S.STSZ), S.box(S.types.stco, S.STCO));
  }
  static avc1(e) {
    let t = [], s = [], i, r, a;
    for (i = 0; i < e.sps.length; i++)
      r = e.sps[i], a = r.byteLength, t.push(a >>> 8 & 255), t.push(a & 255), t = t.concat(Array.prototype.slice.call(r));
    for (i = 0; i < e.pps.length; i++)
      r = e.pps[i], a = r.byteLength, s.push(a >>> 8 & 255), s.push(a & 255), s = s.concat(Array.prototype.slice.call(r));
    const o = S.box(S.types.avcC, new Uint8Array([
      1,
      // version
      t[3],
      // profile
      t[4],
      // profile compat
      t[5],
      // level
      255,
      // lengthSizeMinusOne, hard-coded to 4 bytes
      224 | e.sps.length
      // 3bit reserved (111) + numOfSequenceParameterSets
    ].concat(t).concat([
      e.pps.length
      // numOfPictureParameterSets
    ]).concat(s))), l = e.width, c = e.height, h = e.pixelRatio[0], u = e.pixelRatio[1];
    return S.box(
      S.types.avc1,
      new Uint8Array([
        0,
        0,
        0,
        // reserved
        0,
        0,
        0,
        // reserved
        0,
        1,
        // data_reference_index
        0,
        0,
        // pre_defined
        0,
        0,
        // reserved
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        // pre_defined
        l >> 8 & 255,
        l & 255,
        // width
        c >> 8 & 255,
        c & 255,
        // height
        0,
        72,
        0,
        0,
        // horizresolution
        0,
        72,
        0,
        0,
        // vertresolution
        0,
        0,
        0,
        0,
        // reserved
        0,
        1,
        // frame_count
        18,
        100,
        97,
        105,
        108,
        // dailymotion/hls.js
        121,
        109,
        111,
        116,
        105,
        111,
        110,
        47,
        104,
        108,
        115,
        46,
        106,
        115,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        // compressorname
        0,
        24,
        // depth = 24
        17,
        17
      ]),
      // pre_defined = -1
      o,
      S.box(S.types.btrt, new Uint8Array([
        0,
        28,
        156,
        128,
        // bufferSizeDB
        0,
        45,
        198,
        192,
        // maxBitrate
        0,
        45,
        198,
        192
      ])),
      // avgBitrate
      S.box(S.types.pasp, new Uint8Array([
        h >> 24,
        // hSpacing
        h >> 16 & 255,
        h >> 8 & 255,
        h & 255,
        u >> 24,
        // vSpacing
        u >> 16 & 255,
        u >> 8 & 255,
        u & 255
      ]))
    );
  }
  static esds(e) {
    const t = e.config;
    return new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      3,
      // descriptor_type
      25,
      // length
      0,
      1,
      // es_id
      0,
      // stream_priority
      4,
      // descriptor_type
      17,
      // length
      64,
      // codec : mpeg4_audio
      21,
      // stream_type
      0,
      0,
      0,
      // buffer_size
      0,
      0,
      0,
      0,
      // maxBitrate
      0,
      0,
      0,
      0,
      // avgBitrate
      5,
      // descriptor_type
      2,
      // length
      ...t,
      6,
      1,
      2
      // GASpecificConfig)); // length + audio config descriptor
    ]);
  }
  static audioStsd(e) {
    const t = e.samplerate;
    return new Uint8Array([
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      // reserved
      0,
      1,
      // data_reference_index
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // reserved
      0,
      e.channelCount,
      // channelcount
      0,
      16,
      // sampleSize:16bits
      0,
      0,
      0,
      0,
      // reserved2
      t >> 8 & 255,
      t & 255,
      //
      0,
      0
    ]);
  }
  static mp4a(e) {
    return S.box(S.types.mp4a, S.audioStsd(e), S.box(S.types.esds, S.esds(e)));
  }
  static mp3(e) {
    return S.box(S.types[".mp3"], S.audioStsd(e));
  }
  static ac3(e) {
    return S.box(S.types["ac-3"], S.audioStsd(e), S.box(S.types.dac3, e.config));
  }
  static stsd(e) {
    return e.type === "audio" ? e.segmentCodec === "mp3" && e.codec === "mp3" ? S.box(S.types.stsd, S.STSD, S.mp3(e)) : e.segmentCodec === "ac3" ? S.box(S.types.stsd, S.STSD, S.ac3(e)) : S.box(S.types.stsd, S.STSD, S.mp4a(e)) : e.segmentCodec === "avc" ? S.box(S.types.stsd, S.STSD, S.avc1(e)) : S.box(S.types.stsd, S.STSD, S.hvc1(e));
  }
  static tkhd(e) {
    const t = e.id, s = e.duration * e.timescale, i = e.width, r = e.height, a = Math.floor(s / (Ge + 1)), o = Math.floor(s % (Ge + 1));
    return S.box(S.types.tkhd, new Uint8Array([
      1,
      // version 1
      0,
      0,
      7,
      // flags
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      // creation_time
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      // modification_time
      t >> 24 & 255,
      t >> 16 & 255,
      t >> 8 & 255,
      t & 255,
      // track_ID
      0,
      0,
      0,
      0,
      // reserved
      a >> 24,
      a >> 16 & 255,
      a >> 8 & 255,
      a & 255,
      o >> 24,
      o >> 16 & 255,
      o >> 8 & 255,
      o & 255,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      // layer
      0,
      0,
      // alternate_group
      0,
      0,
      // non-audio track volume
      0,
      0,
      // reserved
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      64,
      0,
      0,
      0,
      // transformation: unity matrix
      i >> 8 & 255,
      i & 255,
      0,
      0,
      // width
      r >> 8 & 255,
      r & 255,
      0,
      0
      // height
    ]));
  }
  static traf(e, t) {
    const s = S.sdtp(e), i = e.id, r = Math.floor(t / (Ge + 1)), a = Math.floor(t % (Ge + 1));
    return S.box(
      S.types.traf,
      S.box(S.types.tfhd, new Uint8Array([
        0,
        // version 0
        0,
        0,
        0,
        // flags
        i >> 24,
        i >> 16 & 255,
        i >> 8 & 255,
        i & 255
        // track_ID
      ])),
      S.box(S.types.tfdt, new Uint8Array([
        1,
        // version 1
        0,
        0,
        0,
        // flags
        r >> 24,
        r >> 16 & 255,
        r >> 8 & 255,
        r & 255,
        a >> 24,
        a >> 16 & 255,
        a >> 8 & 255,
        a & 255
      ])),
      S.trun(e, s.length + 16 + // tfhd
      20 + // tfdt
      8 + // traf header
      16 + // mfhd
      8 + // moof header
      8),
      // mdat header
      s
    );
  }
  /**
   * Generate a track box.
   * @param track a track definition
   */
  static trak(e) {
    return e.duration = e.duration || 4294967295, S.box(S.types.trak, S.tkhd(e), S.mdia(e));
  }
  static trex(e) {
    const t = e.id;
    return S.box(S.types.trex, new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      t >> 24,
      t >> 16 & 255,
      t >> 8 & 255,
      t & 255,
      // track_ID
      0,
      0,
      0,
      1,
      // default_sample_description_index
      0,
      0,
      0,
      0,
      // default_sample_duration
      0,
      0,
      0,
      0,
      // default_sample_size
      0,
      1,
      0,
      1
      // default_sample_flags
    ]));
  }
  static trun(e, t) {
    const s = e.samples || [], i = s.length, r = 12 + 16 * i, a = new Uint8Array(r);
    let o, l, c, h, u, d;
    for (t += 8 + r, a.set([
      e.type === "video" ? 1 : 0,
      // version 1 for video with signed-int sample_composition_time_offset
      0,
      15,
      1,
      // flags
      i >>> 24 & 255,
      i >>> 16 & 255,
      i >>> 8 & 255,
      i & 255,
      // sample_count
      t >>> 24 & 255,
      t >>> 16 & 255,
      t >>> 8 & 255,
      t & 255
      // data_offset
    ], 0), o = 0; o < i; o++)
      l = s[o], c = l.duration, h = l.size, u = l.flags, d = l.cts, a.set([
        c >>> 24 & 255,
        c >>> 16 & 255,
        c >>> 8 & 255,
        c & 255,
        // sample_duration
        h >>> 24 & 255,
        h >>> 16 & 255,
        h >>> 8 & 255,
        h & 255,
        // sample_size
        u.isLeading << 2 | u.dependsOn,
        u.isDependedOn << 6 | u.hasRedundancy << 4 | u.paddingValue << 1 | u.isNonSync,
        u.degradPrio & 61440,
        u.degradPrio & 15,
        // sample_flags
        d >>> 24 & 255,
        d >>> 16 & 255,
        d >>> 8 & 255,
        d & 255
        // sample_composition_time_offset
      ], 12 + 16 * o);
    return S.box(S.types.trun, a);
  }
  static initSegment(e) {
    S.types || S.init();
    const t = S.moov(e);
    return Re(S.FTYP, t);
  }
  static hvc1(e) {
    const t = e.params, s = [e.vps, e.sps, e.pps], i = 4, r = new Uint8Array([1, t.general_profile_space << 6 | (t.general_tier_flag ? 32 : 0) | t.general_profile_idc, t.general_profile_compatibility_flags[0], t.general_profile_compatibility_flags[1], t.general_profile_compatibility_flags[2], t.general_profile_compatibility_flags[3], t.general_constraint_indicator_flags[0], t.general_constraint_indicator_flags[1], t.general_constraint_indicator_flags[2], t.general_constraint_indicator_flags[3], t.general_constraint_indicator_flags[4], t.general_constraint_indicator_flags[5], t.general_level_idc, 240 | t.min_spatial_segmentation_idc >> 8, 255 & t.min_spatial_segmentation_idc, 252 | t.parallelismType, 252 | t.chroma_format_idc, 248 | t.bit_depth_luma_minus8, 248 | t.bit_depth_chroma_minus8, 0, parseInt(t.frame_rate.fps), i - 1 | t.temporal_id_nested << 2 | t.num_temporal_layers << 3 | (t.frame_rate.fixed ? 64 : 0), s.length]);
    let a = r.length;
    for (let f = 0; f < s.length; f += 1) {
      a += 3;
      for (let m = 0; m < s[f].length; m += 1)
        a += 2 + s[f][m].length;
    }
    const o = new Uint8Array(a);
    o.set(r, 0), a = r.length;
    const l = s.length - 1;
    for (let f = 0; f < s.length; f += 1) {
      o.set(new Uint8Array([32 + f | (f === l ? 128 : 0), 0, s[f].length]), a), a += 3;
      for (let m = 0; m < s[f].length; m += 1)
        o.set(new Uint8Array([s[f][m].length >> 8, s[f][m].length & 255]), a), a += 2, o.set(s[f][m], a), a += s[f][m].length;
    }
    const c = S.box(S.types.hvcC, o), h = e.width, u = e.height, d = e.pixelRatio[0], g = e.pixelRatio[1];
    return S.box(
      S.types.hvc1,
      new Uint8Array([
        0,
        0,
        0,
        // reserved
        0,
        0,
        0,
        // reserved
        0,
        1,
        // data_reference_index
        0,
        0,
        // pre_defined
        0,
        0,
        // reserved
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        // pre_defined
        h >> 8 & 255,
        h & 255,
        // width
        u >> 8 & 255,
        u & 255,
        // height
        0,
        72,
        0,
        0,
        // horizresolution
        0,
        72,
        0,
        0,
        // vertresolution
        0,
        0,
        0,
        0,
        // reserved
        0,
        1,
        // frame_count
        18,
        100,
        97,
        105,
        108,
        // dailymotion/hls.js
        121,
        109,
        111,
        116,
        105,
        111,
        110,
        47,
        104,
        108,
        115,
        46,
        106,
        115,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        // compressorname
        0,
        24,
        // depth = 24
        17,
        17
      ]),
      // pre_defined = -1
      c,
      S.box(S.types.btrt, new Uint8Array([
        0,
        28,
        156,
        128,
        // bufferSizeDB
        0,
        45,
        198,
        192,
        // maxBitrate
        0,
        45,
        198,
        192
      ])),
      // avgBitrate
      S.box(S.types.pasp, new Uint8Array([
        d >> 24,
        // hSpacing
        d >> 16 & 255,
        d >> 8 & 255,
        d & 255,
        g >> 24,
        // vSpacing
        g >> 16 & 255,
        g >> 8 & 255,
        g & 255
      ]))
    );
  }
}
S.types = void 0;
S.HDLR_TYPES = void 0;
S.STTS = void 0;
S.STSC = void 0;
S.STCO = void 0;
S.STSZ = void 0;
S.VMHD = void 0;
S.SMHD = void 0;
S.STSD = void 0;
S.FTYP = void 0;
S.DINF = void 0;
const qn = 9e4;
function vi(n, e, t = 1, s = !1) {
  const i = n * e * t;
  return s ? Math.round(i) : i;
}
function ac(n, e, t = 1, s = !1) {
  return vi(n, e, 1 / t, s);
}
function Et(n, e = !1) {
  return vi(n, 1e3, 1 / qn, e);
}
function oc(n, e = 1) {
  return vi(n, qn, 1 / e);
}
const lc = 10 * 1e3, cc = 1024, hc = 1152, uc = 1536;
let rt = null, bs = null;
class Yt {
  constructor(e, t, s, i) {
    if (this.logger = void 0, this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = !1, this._initPTS = null, this._initDTS = null, this.nextAvcDts = null, this.nextAudioPts = null, this.videoSampleDuration = null, this.isAudioContiguous = !1, this.isVideoContiguous = !1, this.videoTrackConfig = void 0, this.observer = e, this.config = t, this.typeSupported = s, this.logger = i, this.ISGenerated = !1, rt === null) {
      const a = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
      rt = a ? parseInt(a[1]) : 0;
    }
    if (bs === null) {
      const r = navigator.userAgent.match(/Safari\/(\d+)/i);
      bs = r ? parseInt(r[1]) : 0;
    }
  }
  destroy() {
    this.config = this.videoTrackConfig = this._initPTS = this._initDTS = null;
  }
  resetTimeStamp(e) {
    this.logger.log("[mp4-remuxer]: initPTS & initDTS reset"), this._initPTS = this._initDTS = e;
  }
  resetNextTimestamp() {
    this.logger.log("[mp4-remuxer]: reset next timestamp"), this.isVideoContiguous = !1, this.isAudioContiguous = !1;
  }
  resetInitSegment() {
    this.logger.log("[mp4-remuxer]: ISGenerated flag reset"), this.ISGenerated = !1, this.videoTrackConfig = void 0;
  }
  getVideoStartPts(e) {
    let t = !1;
    const s = e.reduce((i, r) => {
      const a = r.pts - i;
      return a < -4294967296 ? (t = !0, Le(i, r.pts)) : a > 0 ? i : r.pts;
    }, e[0].pts);
    return t && this.logger.debug("PTS rollover detected"), s;
  }
  remux(e, t, s, i, r, a, o, l) {
    let c, h, u, d, g, f, m = r, y = r;
    const E = e.pid > -1, x = t.pid > -1, T = t.samples.length, _ = e.samples.length > 0, A = o && T > 0 || T > 1;
    if ((!E || _) && (!x || A) || this.ISGenerated || o) {
      if (this.ISGenerated) {
        var v, b, C, R;
        const k = this.videoTrackConfig;
        (k && (t.width !== k.width || t.height !== k.height || ((v = t.pixelRatio) == null ? void 0 : v[0]) !== ((b = k.pixelRatio) == null ? void 0 : b[0]) || ((C = t.pixelRatio) == null ? void 0 : C[1]) !== ((R = k.pixelRatio) == null ? void 0 : R[1])) || !k && A || this.nextAudioPts === null && _) && this.resetInitSegment();
      }
      this.ISGenerated || (u = this.generateIS(e, t, r, a));
      const w = this.isVideoContiguous;
      let F = -1, te;
      if (A && (F = dc(t.samples), !w && this.config.forceKeyFrameOnDiscontinuity))
        if (f = !0, F > 0) {
          this.logger.warn(`[mp4-remuxer]: Dropped ${F} out of ${T} video samples due to a missing keyframe`);
          const k = this.getVideoStartPts(t.samples);
          t.samples = t.samples.slice(F), t.dropped += F, y += (t.samples[0].pts - k) / t.inputTimeScale, te = y;
        } else F === -1 && (this.logger.warn(`[mp4-remuxer]: No keyframe found out of ${T} video samples`), f = !1);
      if (this.ISGenerated) {
        if (_ && A) {
          const k = this.getVideoStartPts(t.samples), G = (Le(e.samples[0].pts, k) - k) / t.inputTimeScale;
          m += Math.max(0, G), y += Math.max(0, -G);
        }
        if (_) {
          if (e.samplerate || (this.logger.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"), u = this.generateIS(e, t, r, a)), h = this.remuxAudio(e, m, this.isAudioContiguous, a, x || A || l === N.AUDIO ? y : void 0), A) {
            const k = h ? h.endPTS - h.startPTS : 0;
            t.inputTimeScale || (this.logger.warn("[mp4-remuxer]: regenerate InitSegment as video detected"), u = this.generateIS(e, t, r, a)), c = this.remuxVideo(t, y, w, k);
          }
        } else A && (c = this.remuxVideo(t, y, w, 0));
        c && (c.firstKeyFrame = F, c.independent = F !== -1, c.firstKeyFramePTS = te);
      }
    }
    return this.ISGenerated && this._initPTS && this._initDTS && (s.samples.length && (g = jn(s, r, this._initPTS, this._initDTS)), i.samples.length && (d = zn(i, r, this._initPTS))), {
      audio: h,
      video: c,
      initSegment: u,
      independent: f,
      text: d,
      id3: g
    };
  }
  generateIS(e, t, s, i) {
    const r = e.samples, a = t.samples, o = this.typeSupported, l = {}, c = this._initPTS;
    let h = !c || i, u = "audio/mp4", d, g, f;
    if (h && (d = g = 1 / 0), e.config && r.length) {
      switch (e.timescale = e.samplerate, e.segmentCodec) {
        case "mp3":
          o.mpeg ? (u = "audio/mpeg", e.codec = "") : o.mp3 && (e.codec = "mp3");
          break;
        case "ac3":
          e.codec = "ac-3";
          break;
      }
      l.audio = {
        id: "audio",
        container: u,
        codec: e.codec,
        initSegment: e.segmentCodec === "mp3" && o.mpeg ? new Uint8Array(0) : S.initSegment([e]),
        metadata: {
          channelCount: e.channelCount
        }
      }, h && (f = e.inputTimeScale, !c || f !== c.timescale ? d = g = r[0].pts - Math.round(f * s) : h = !1);
    }
    if (t.sps && t.pps && a.length) {
      if (t.timescale = t.inputTimeScale, l.video = {
        id: "main",
        container: "video/mp4",
        codec: t.codec,
        initSegment: S.initSegment([t]),
        metadata: {
          width: t.width,
          height: t.height
        }
      }, h)
        if (f = t.inputTimeScale, !c || f !== c.timescale) {
          const m = this.getVideoStartPts(a), y = Math.round(f * s);
          g = Math.min(g, Le(a[0].dts, m) - y), d = Math.min(d, m - y);
        } else
          h = !1;
      this.videoTrackConfig = {
        width: t.width,
        height: t.height,
        pixelRatio: t.pixelRatio
      };
    }
    if (Object.keys(l).length)
      return this.ISGenerated = !0, h ? (this._initPTS = {
        baseTime: d,
        timescale: f
      }, this._initDTS = {
        baseTime: g,
        timescale: f
      }) : d = f = void 0, {
        tracks: l,
        initPTS: d,
        timescale: f
      };
  }
  remuxVideo(e, t, s, i) {
    const r = e.inputTimeScale, a = e.samples, o = [], l = a.length, c = this._initPTS;
    let h = this.nextAvcDts, u = 8, d = this.videoSampleDuration, g, f, m = Number.POSITIVE_INFINITY, y = Number.NEGATIVE_INFINITY, E = !1;
    if (!s || h === null) {
      const P = t * r, M = a[0].pts - Le(a[0].dts, a[0].pts);
      rt && h !== null && Math.abs(P - M - h) < 15e3 ? s = !0 : h = P - M;
    }
    const x = c.baseTime * r / c.timescale;
    for (let P = 0; P < l; P++) {
      const M = a[P];
      M.pts = Le(M.pts - x, h), M.dts = Le(M.dts - x, h), M.dts < a[P > 0 ? P - 1 : P].dts && (E = !0);
    }
    E && a.sort(function(P, M) {
      const W = P.dts - M.dts, V = P.pts - M.pts;
      return W || V;
    }), g = a[0].dts, f = a[a.length - 1].dts;
    const T = f - g, _ = T ? Math.round(T / (l - 1)) : d || e.inputTimeScale / 30;
    if (s) {
      const P = g - h, M = P > _, W = P < -1;
      if ((M || W) && (M ? this.logger.warn(`${(e.segmentCodec || "").toUpperCase()}: ${Et(P, !0)} ms (${P}dts) hole between fragments detected at ${t.toFixed(3)}`) : this.logger.warn(`${(e.segmentCodec || "").toUpperCase()}: ${Et(-P, !0)} ms (${P}dts) overlapping between fragments detected at ${t.toFixed(3)}`), !W || h >= a[0].pts || rt)) {
        g = h;
        const V = a[0].pts - P;
        if (M)
          a[0].dts = g, a[0].pts = V;
        else {
          let Y = !0;
          for (let Z = 0; Z < a.length && !(a[Z].dts > V && Y); Z++) {
            const re = a[Z].pts;
            if (a[Z].dts -= P, a[Z].pts -= P, Z < a.length - 1) {
              const se = a[Z + 1].pts, pe = a[Z].pts, Ee = se <= pe, $e = se <= re;
              Y = Ee == $e;
            }
          }
        }
        this.logger.log(`Video: Initial PTS/DTS adjusted: ${Et(V, !0)}/${Et(g, !0)}, delta: ${Et(P, !0)} ms`);
      }
    }
    g = Math.max(0, g);
    let A = 0, D = 0, v = g;
    for (let P = 0; P < l; P++) {
      const M = a[P], W = M.units, V = W.length;
      let Y = 0;
      for (let Z = 0; Z < V; Z++)
        Y += W[Z].data.length;
      D += Y, A += V, M.length = Y, M.dts < v ? (M.dts = v, v += _ / 4 | 0 || 1) : v = M.dts, m = Math.min(M.pts, m), y = Math.max(M.pts, y);
    }
    f = a[l - 1].dts;
    const b = D + 4 * A + 8;
    let C;
    try {
      C = new Uint8Array(b);
    } catch (P) {
      this.observer.emit(p.ERROR, p.ERROR, {
        type: $.MUX_ERROR,
        details: L.REMUX_ALLOC_ERROR,
        fatal: !1,
        error: P,
        bytes: b,
        reason: `fail allocating video mdat ${b}`
      });
      return;
    }
    const R = new DataView(C.buffer);
    R.setUint32(0, b), C.set(S.types.mdat, 4);
    let w = !1, F = Number.POSITIVE_INFINITY, te = Number.POSITIVE_INFINITY, k = Number.NEGATIVE_INFINITY, K = Number.NEGATIVE_INFINITY;
    for (let P = 0; P < l; P++) {
      const M = a[P], W = M.units;
      let V = 0;
      for (let re = 0, se = W.length; re < se; re++) {
        const pe = W[re], Ee = pe.data, $e = pe.data.byteLength;
        R.setUint32(u, $e), u += 4, C.set(Ee, u), u += $e, V += 4 + $e;
      }
      let Y;
      if (P < l - 1)
        d = a[P + 1].dts - M.dts, Y = a[P + 1].pts - M.pts;
      else {
        const re = this.config, se = P > 0 ? M.dts - a[P - 1].dts : _;
        if (Y = P > 0 ? M.pts - a[P - 1].pts : _, re.stretchShortVideoTrack && this.nextAudioPts !== null) {
          const pe = Math.floor(re.maxBufferHole * r), Ee = (i ? m + i * r : this.nextAudioPts) - M.pts;
          Ee > pe ? (d = Ee - se, d < 0 ? d = se : w = !0, this.logger.log(`[mp4-remuxer]: It is approximately ${Ee / 90} ms to the next segment; using duration ${d / 90} ms for the last video frame.`)) : d = se;
        } else
          d = se;
      }
      const Z = Math.round(M.pts - M.dts);
      F = Math.min(F, d), k = Math.max(k, d), te = Math.min(te, Y), K = Math.max(K, Y), o.push(new Ir(M.key, d, V, Z));
    }
    if (o.length) {
      if (rt) {
        if (rt < 70) {
          const P = o[0].flags;
          P.dependsOn = 2, P.isNonSync = 0;
        }
      } else if (bs && K - te < k - F && _ / k < 0.025 && o[0].cts === 0) {
        this.logger.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");
        let P = g;
        for (let M = 0, W = o.length; M < W; M++) {
          const V = P + o[M].duration, Y = P + o[M].cts;
          if (M < W - 1) {
            const Z = V + o[M + 1].cts;
            o[M].duration = Z - Y;
          } else
            o[M].duration = M ? o[M - 1].duration : _;
          o[M].cts = 0, P = V;
        }
      }
    }
    d = w || !d ? _ : d, this.nextAvcDts = h = f + d, this.videoSampleDuration = d, this.isVideoContiguous = !0;
    const X = {
      data1: S.moof(e.sequenceNumber++, g, ae({}, e, {
        samples: o
      })),
      data2: C,
      startPTS: m / r,
      endPTS: (y + d) / r,
      startDTS: g / r,
      endDTS: h / r,
      type: "video",
      hasAudio: !1,
      hasVideo: !0,
      nb: o.length,
      dropped: e.dropped
    };
    return e.samples = [], e.dropped = 0, X;
  }
  getSamplesPerFrame(e) {
    switch (e.segmentCodec) {
      case "mp3":
        return hc;
      case "ac3":
        return uc;
      default:
        return cc;
    }
  }
  remuxAudio(e, t, s, i, r) {
    const a = e.inputTimeScale, o = e.samplerate ? e.samplerate : a, l = a / o, c = this.getSamplesPerFrame(e), h = c * l, u = this._initPTS, d = e.segmentCodec === "mp3" && this.typeSupported.mpeg, g = [], f = r !== void 0;
    let m = e.samples, y = d ? 0 : 8, E = this.nextAudioPts || -1;
    const x = t * a, T = u.baseTime * a / u.timescale;
    if (this.isAudioContiguous = s = s || m.length && E > 0 && (i && Math.abs(x - E) < 9e3 || Math.abs(Le(m[0].pts - T, x) - E) < 20 * h), m.forEach(function(G) {
      G.pts = Le(G.pts - T, x);
    }), !s || E < 0) {
      if (m = m.filter((G) => G.pts >= 0), !m.length)
        return;
      r === 0 ? E = 0 : i && !f ? E = Math.max(0, x) : E = m[0].pts;
    }
    if (e.segmentCodec === "aac") {
      const G = this.config.maxAudioFramesDrift;
      for (let U = 0, X = E; U < m.length; U++) {
        const P = m[U], M = P.pts, W = M - X, V = Math.abs(1e3 * W / a);
        if (W <= -G * h && f)
          U === 0 && (this.logger.warn(`Audio frame @ ${(M / a).toFixed(3)}s overlaps nextAudioPts by ${Math.round(1e3 * W / a)} ms.`), this.nextAudioPts = E = X = M);
        else if (W >= G * h && V < lc && f) {
          let Y = Math.round(W / h);
          X = M - Y * h, X < 0 && (Y--, X += h), U === 0 && (this.nextAudioPts = E = X), this.logger.warn(`[mp4-remuxer]: Injecting ${Y} audio frame @ ${(X / a).toFixed(3)}s due to ${Math.round(1e3 * W / a)} ms gap.`);
          for (let Z = 0; Z < Y; Z++) {
            const re = Math.max(X, 0);
            let se = nc.getSilentFrame(e.parsedCodec || e.manifestCodec || e.codec, e.channelCount);
            se || (this.logger.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."), se = P.unit.subarray()), m.splice(U, 0, {
              unit: se,
              pts: re
            }), X += h, U++;
          }
        }
        P.pts = X, X += h;
      }
    }
    let _ = null, A = null, D, v = 0, b = m.length;
    for (; b--; )
      v += m[b].unit.byteLength;
    for (let G = 0, U = m.length; G < U; G++) {
      const X = m[G], P = X.unit;
      let M = X.pts;
      if (A !== null) {
        const V = g[G - 1];
        V.duration = Math.round((M - A) / l);
      } else if (s && e.segmentCodec === "aac" && (M = E), _ = M, v > 0) {
        v += y;
        try {
          D = new Uint8Array(v);
        } catch (V) {
          this.observer.emit(p.ERROR, p.ERROR, {
            type: $.MUX_ERROR,
            details: L.REMUX_ALLOC_ERROR,
            fatal: !1,
            error: V,
            bytes: v,
            reason: `fail allocating audio mdat ${v}`
          });
          return;
        }
        d || (new DataView(D.buffer).setUint32(0, v), D.set(S.types.mdat, 4));
      } else
        return;
      D.set(P, y);
      const W = P.byteLength;
      y += W, g.push(new Ir(!0, c, W, 0)), A = M;
    }
    const C = g.length;
    if (!C)
      return;
    const R = g[g.length - 1];
    this.nextAudioPts = E = A + l * R.duration;
    const w = d ? new Uint8Array(0) : S.moof(e.sequenceNumber++, _ / l, ae({}, e, {
      samples: g
    }));
    e.samples = [];
    const F = _ / a, te = E / a, K = {
      data1: w,
      data2: D,
      startPTS: F,
      endPTS: te,
      startDTS: F,
      endDTS: te,
      type: "audio",
      hasAudio: !0,
      hasVideo: !1,
      nb: C
    };
    return this.isAudioContiguous = !0, K;
  }
}
function Le(n, e) {
  let t;
  if (e === null)
    return n;
  for (e < n ? t = -8589934592 : t = 8589934592; Math.abs(n - e) > 4294967296; )
    n += t;
  return n;
}
function dc(n) {
  for (let e = 0; e < n.length; e++)
    if (n[e].key)
      return e;
  return -1;
}
function jn(n, e, t, s) {
  const i = n.samples.length;
  if (!i)
    return;
  const r = n.inputTimeScale;
  for (let o = 0; o < i; o++) {
    const l = n.samples[o];
    l.pts = Le(l.pts - t.baseTime * r / t.timescale, e * r) / r, l.dts = Le(l.dts - s.baseTime * r / s.timescale, e * r) / r;
  }
  const a = n.samples;
  return n.samples = [], {
    samples: a
  };
}
function zn(n, e, t) {
  const s = n.samples.length;
  if (!s)
    return;
  const i = n.inputTimeScale;
  for (let a = 0; a < s; a++) {
    const o = n.samples[a];
    o.pts = Le(o.pts - t.baseTime * i / t.timescale, e * i) / i;
  }
  n.samples.sort((a, o) => a.pts - o.pts);
  const r = n.samples;
  return n.samples = [], {
    samples: r
  };
}
class Ir {
  constructor(e, t, s, i) {
    this.size = void 0, this.duration = void 0, this.cts = void 0, this.flags = void 0, this.duration = t, this.size = s, this.cts = i, this.flags = {
      isLeading: 0,
      isDependedOn: 0,
      hasRedundancy: 0,
      degradPrio: 0,
      dependsOn: e ? 2 : 1,
      isNonSync: e ? 0 : 1
    };
  }
}
class fc {
  constructor(e, t, s, i) {
    this.logger = void 0, this.emitInitSegment = !1, this.audioCodec = void 0, this.videoCodec = void 0, this.initData = void 0, this.initPTS = null, this.initTracks = void 0, this.lastEndTime = null, this.logger = i;
  }
  destroy() {
  }
  resetTimeStamp(e) {
    this.initPTS = e, this.lastEndTime = null;
  }
  resetNextTimestamp() {
    this.lastEndTime = null;
  }
  resetInitSegment(e, t, s, i) {
    this.audioCodec = t, this.videoCodec = s, this.generateInitSegment(to(e, i)), this.emitInitSegment = !0;
  }
  generateInitSegment(e) {
    let {
      audioCodec: t,
      videoCodec: s
    } = this;
    if (!(e != null && e.byteLength)) {
      this.initTracks = void 0, this.initData = void 0;
      return;
    }
    const i = this.initData = pn(e);
    i.audio && (t = Dr(i.audio, J.AUDIO)), i.video && (s = Dr(i.video, J.VIDEO));
    const r = {};
    i.audio && i.video ? r.audiovideo = {
      container: "video/mp4",
      codec: t + "," + s,
      initSegment: e,
      id: "main"
    } : i.audio ? r.audio = {
      container: "audio/mp4",
      codec: t,
      initSegment: e,
      id: "audio"
    } : i.video ? r.video = {
      container: "video/mp4",
      codec: s,
      initSegment: e,
      id: "main"
    } : this.logger.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."), this.initTracks = r;
  }
  remux(e, t, s, i, r, a) {
    var o, l;
    let {
      initPTS: c,
      lastEndTime: h
    } = this;
    const u = {
      audio: void 0,
      video: void 0,
      text: i,
      id3: s,
      initSegment: void 0
    };
    O(h) || (h = this.lastEndTime = r || 0);
    const d = t.samples;
    if (!(d != null && d.length))
      return u;
    const g = {
      initPTS: void 0,
      timescale: 1
    };
    let f = this.initData;
    if ((o = f) != null && o.length || (this.generateInitSegment(d), f = this.initData), !((l = f) != null && l.length))
      return this.logger.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."), u;
    this.emitInitSegment && (g.tracks = this.initTracks, this.emitInitSegment = !1);
    const m = io(d, f), y = so(f, d), E = y === null ? r : y;
    (gc(c, E, r, m) || g.timescale !== c.timescale && a) && (g.initPTS = E - r, c && c.timescale === 1 && this.logger.warn(`Adjusting initPTS @${r} from ${c.baseTime / c.timescale} to ${g.initPTS}`), this.initPTS = c = {
      baseTime: g.initPTS,
      timescale: 1
    });
    const x = e ? E - c.baseTime / c.timescale : h, T = x + m;
    no(f, d, c.baseTime / c.timescale), m > 0 ? this.lastEndTime = T : (this.logger.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
    const _ = !!f.audio, A = !!f.video;
    let D = "";
    _ && (D += "audio"), A && (D += "video");
    const v = {
      data1: d,
      startPTS: x,
      startDTS: x,
      endPTS: T,
      endDTS: T,
      type: D,
      hasAudio: _,
      hasVideo: A,
      nb: 1,
      dropped: 0
    };
    return u.audio = v.type === "audio" ? v : void 0, u.video = v.type !== "audio" ? v : void 0, u.initSegment = g, u.id3 = jn(s, r, c, c), i.samples.length && (u.text = zn(i, r, c)), u;
  }
}
function gc(n, e, t, s) {
  if (n === null)
    return !0;
  const i = Math.max(s, 1), r = e - n.baseTime / n.timescale;
  return Math.abs(r - t) > i;
}
function Dr(n, e) {
  const t = n == null ? void 0 : n.codec;
  if (t && t.length > 4)
    return t;
  if (e === J.AUDIO) {
    if (t === "ec-3" || t === "ac-3" || t === "alac")
      return t;
    if (t === "fLaC" || t === "Opus")
      return rs(t, !1);
    const s = "mp4a.40.5";
    return this.logger.info(`Parsed audio codec "${t}" or audio object type not handled. Using "${s}"`), s;
  }
  return this.logger.warn(`Unhandled video codec "${t}"`), t === "hvc1" || t === "hev1" ? "hvc1.1.6.L120.90" : t === "av01" ? "av01.0.04M.08" : "avc1.42e01e";
}
let Be;
try {
  Be = self.performance.now.bind(self.performance);
} catch {
  Be = Date.now;
}
const qt = [{
  demux: Zl,
  remux: fc
}, {
  demux: Ve,
  remux: Yt
}, {
  demux: Ql,
  remux: Yt
}, {
  demux: rc,
  remux: Yt
}];
qt.splice(2, 0, {
  demux: ec,
  remux: Yt
});
class Cr {
  constructor(e, t, s, i, r, a) {
    this.asyncResult = !1, this.logger = void 0, this.observer = void 0, this.typeSupported = void 0, this.config = void 0, this.id = void 0, this.demuxer = void 0, this.remuxer = void 0, this.decrypter = void 0, this.probe = void 0, this.decryptionPromise = null, this.transmuxConfig = void 0, this.currentTransmuxState = void 0, this.observer = e, this.typeSupported = t, this.config = s, this.id = r, this.logger = a;
  }
  configure(e) {
    this.transmuxConfig = e, this.decrypter && this.decrypter.reset();
  }
  push(e, t, s, i) {
    const r = s.transmuxing;
    r.executeStart = Be();
    let a = new Uint8Array(e);
    const {
      currentTransmuxState: o,
      transmuxConfig: l
    } = this;
    i && (this.currentTransmuxState = i);
    const {
      contiguous: c,
      discontinuity: h,
      trackSwitch: u,
      accurateTimeOffset: d,
      timeOffset: g,
      initSegmentChange: f
    } = i || o, {
      audioCodec: m,
      videoCodec: y,
      defaultInitPts: E,
      duration: x,
      initSegmentData: T
    } = l, _ = mc(a, t);
    if (_ && ot(_.method)) {
      const b = this.getDecrypter(), C = ci(_.method);
      if (b.isSync()) {
        let R = b.softwareDecrypt(a, _.key.buffer, _.iv.buffer, C);
        if (s.part > -1 && (R = b.flush()), !R)
          return r.executeEnd = Be(), Is(s);
        a = new Uint8Array(R);
      } else
        return this.asyncResult = !0, this.decryptionPromise = b.webCryptoDecrypt(a, _.key.buffer, _.iv.buffer, C).then((R) => {
          const w = this.push(R, null, s);
          return this.decryptionPromise = null, w;
        }), this.decryptionPromise;
    }
    const A = this.needsProbing(h, u);
    if (A) {
      const b = this.configureTransmuxer(a);
      if (b)
        return this.logger.warn(`[transmuxer] ${b.message}`), this.observer.emit(p.ERROR, p.ERROR, {
          type: $.MEDIA_ERROR,
          details: L.FRAG_PARSING_ERROR,
          fatal: !1,
          error: b,
          reason: b.message
        }), r.executeEnd = Be(), Is(s);
    }
    (h || u || f || A) && this.resetInitSegment(T, m, y, x, t), (h || f || A) && this.resetInitialTimestamp(E), c || this.resetContiguity();
    const D = this.transmux(a, _, g, d, s);
    this.asyncResult = hs(D);
    const v = this.currentTransmuxState;
    return v.contiguous = !0, v.discontinuity = !1, v.trackSwitch = !1, r.executeEnd = Be(), D;
  }
  // Due to data caching, flush calls can produce more than one TransmuxerResult (hence the Array type)
  flush(e) {
    const t = e.transmuxing;
    t.executeStart = Be();
    const {
      decrypter: s,
      currentTransmuxState: i,
      decryptionPromise: r
    } = this;
    if (r)
      return this.asyncResult = !0, r.then(() => this.flush(e));
    const a = [], {
      timeOffset: o
    } = i;
    if (s) {
      const u = s.flush();
      u && a.push(this.push(u, null, e));
    }
    const {
      demuxer: l,
      remuxer: c
    } = this;
    if (!l || !c) {
      t.executeEnd = Be();
      const u = [Is(e)];
      return this.asyncResult ? Promise.resolve(u) : u;
    }
    const h = l.flush(o);
    return hs(h) ? (this.asyncResult = !0, h.then((u) => (this.flushRemux(a, u, e), a))) : (this.flushRemux(a, h, e), this.asyncResult ? Promise.resolve(a) : a);
  }
  flushRemux(e, t, s) {
    const {
      audioTrack: i,
      videoTrack: r,
      id3Track: a,
      textTrack: o
    } = t, {
      accurateTimeOffset: l,
      timeOffset: c
    } = this.currentTransmuxState;
    this.logger.log(`[transmuxer.ts]: Flushed ${this.id} sn: ${s.sn}${s.part > -1 ? " p: " + s.part : ""} of ${this.id === N.MAIN ? "level" : "track"} ${s.level}`);
    const h = this.remuxer.remux(i, r, a, o, c, l, !0, this.id);
    e.push({
      remuxResult: h,
      chunkMeta: s
    }), s.transmuxing.executeEnd = Be();
  }
  resetInitialTimestamp(e) {
    const {
      demuxer: t,
      remuxer: s
    } = this;
    !t || !s || (t.resetTimeStamp(e), s.resetTimeStamp(e));
  }
  resetContiguity() {
    const {
      demuxer: e,
      remuxer: t
    } = this;
    !e || !t || (e.resetContiguity(), t.resetNextTimestamp());
  }
  resetInitSegment(e, t, s, i, r) {
    const {
      demuxer: a,
      remuxer: o
    } = this;
    !a || !o || (a.resetInitSegment(e, t, s, i), o.resetInitSegment(e, t, s, r));
  }
  destroy() {
    this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0), this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0);
  }
  transmux(e, t, s, i, r) {
    let a;
    return t && t.method === "SAMPLE-AES" ? a = this.transmuxSampleAes(e, t, s, i, r) : a = this.transmuxUnencrypted(e, s, i, r), a;
  }
  transmuxUnencrypted(e, t, s, i) {
    const {
      audioTrack: r,
      videoTrack: a,
      id3Track: o,
      textTrack: l
    } = this.demuxer.demux(e, t, !1, !this.config.progressive);
    return {
      remuxResult: this.remuxer.remux(r, a, o, l, t, s, !1, this.id),
      chunkMeta: i
    };
  }
  transmuxSampleAes(e, t, s, i, r) {
    return this.demuxer.demuxSampleAes(e, t, s).then((a) => ({
      remuxResult: this.remuxer.remux(a.audioTrack, a.videoTrack, a.id3Track, a.textTrack, s, i, !1, this.id),
      chunkMeta: r
    }));
  }
  configureTransmuxer(e) {
    const {
      config: t,
      observer: s,
      typeSupported: i
    } = this;
    let r;
    for (let u = 0, d = qt.length; u < d; u++) {
      var a;
      if ((a = qt[u].demux) != null && a.probe(e, this.logger)) {
        r = qt[u];
        break;
      }
    }
    if (!r)
      return new Error("Failed to find demuxer by probing fragment data");
    const o = this.demuxer, l = this.remuxer, c = r.remux, h = r.demux;
    (!l || !(l instanceof c)) && (this.remuxer = new c(s, t, i, this.logger)), (!o || !(o instanceof h)) && (this.demuxer = new h(s, t, i, this.logger), this.probe = h.probe);
  }
  needsProbing(e, t) {
    return !this.demuxer || !this.remuxer || e || t;
  }
  getDecrypter() {
    let e = this.decrypter;
    return e || (e = this.decrypter = new pi(this.config)), e;
  }
}
function mc(n, e) {
  let t = null;
  return n.byteLength > 0 && (e == null ? void 0 : e.key) != null && e.iv !== null && e.method != null && (t = e), t;
}
const Is = (n) => ({
  remuxResult: {},
  chunkMeta: n
});
function hs(n) {
  return "then" in n && n.then instanceof Function;
}
class pc {
  constructor(e, t, s, i, r) {
    this.audioCodec = void 0, this.videoCodec = void 0, this.initSegmentData = void 0, this.duration = void 0, this.defaultInitPts = void 0, this.audioCodec = e, this.videoCodec = t, this.initSegmentData = s, this.duration = i, this.defaultInitPts = r || null;
  }
}
class yc {
  constructor(e, t, s, i, r, a) {
    this.discontinuity = void 0, this.contiguous = void 0, this.accurateTimeOffset = void 0, this.trackSwitch = void 0, this.timeOffset = void 0, this.initSegmentChange = void 0, this.discontinuity = e, this.contiguous = t, this.accurateTimeOffset = s, this.trackSwitch = i, this.timeOffset = r, this.initSegmentChange = a;
  }
}
var Xn = { exports: {} };
(function(n) {
  var e = Object.prototype.hasOwnProperty, t = "~";
  function s() {
  }
  Object.create && (s.prototype = /* @__PURE__ */ Object.create(null), new s().__proto__ || (t = !1));
  function i(l, c, h) {
    this.fn = l, this.context = c, this.once = h || !1;
  }
  function r(l, c, h, u, d) {
    if (typeof h != "function")
      throw new TypeError("The listener must be a function");
    var g = new i(h, u || l, d), f = t ? t + c : c;
    return l._events[f] ? l._events[f].fn ? l._events[f] = [l._events[f], g] : l._events[f].push(g) : (l._events[f] = g, l._eventsCount++), l;
  }
  function a(l, c) {
    --l._eventsCount === 0 ? l._events = new s() : delete l._events[c];
  }
  function o() {
    this._events = new s(), this._eventsCount = 0;
  }
  o.prototype.eventNames = function() {
    var c = [], h, u;
    if (this._eventsCount === 0) return c;
    for (u in h = this._events)
      e.call(h, u) && c.push(t ? u.slice(1) : u);
    return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(h)) : c;
  }, o.prototype.listeners = function(c) {
    var h = t ? t + c : c, u = this._events[h];
    if (!u) return [];
    if (u.fn) return [u.fn];
    for (var d = 0, g = u.length, f = new Array(g); d < g; d++)
      f[d] = u[d].fn;
    return f;
  }, o.prototype.listenerCount = function(c) {
    var h = t ? t + c : c, u = this._events[h];
    return u ? u.fn ? 1 : u.length : 0;
  }, o.prototype.emit = function(c, h, u, d, g, f) {
    var m = t ? t + c : c;
    if (!this._events[m]) return !1;
    var y = this._events[m], E = arguments.length, x, T;
    if (y.fn) {
      switch (y.once && this.removeListener(c, y.fn, void 0, !0), E) {
        case 1:
          return y.fn.call(y.context), !0;
        case 2:
          return y.fn.call(y.context, h), !0;
        case 3:
          return y.fn.call(y.context, h, u), !0;
        case 4:
          return y.fn.call(y.context, h, u, d), !0;
        case 5:
          return y.fn.call(y.context, h, u, d, g), !0;
        case 6:
          return y.fn.call(y.context, h, u, d, g, f), !0;
      }
      for (T = 1, x = new Array(E - 1); T < E; T++)
        x[T - 1] = arguments[T];
      y.fn.apply(y.context, x);
    } else {
      var _ = y.length, A;
      for (T = 0; T < _; T++)
        switch (y[T].once && this.removeListener(c, y[T].fn, void 0, !0), E) {
          case 1:
            y[T].fn.call(y[T].context);
            break;
          case 2:
            y[T].fn.call(y[T].context, h);
            break;
          case 3:
            y[T].fn.call(y[T].context, h, u);
            break;
          case 4:
            y[T].fn.call(y[T].context, h, u, d);
            break;
          default:
            if (!x) for (A = 1, x = new Array(E - 1); A < E; A++)
              x[A - 1] = arguments[A];
            y[T].fn.apply(y[T].context, x);
        }
    }
    return !0;
  }, o.prototype.on = function(c, h, u) {
    return r(this, c, h, u, !1);
  }, o.prototype.once = function(c, h, u) {
    return r(this, c, h, u, !0);
  }, o.prototype.removeListener = function(c, h, u, d) {
    var g = t ? t + c : c;
    if (!this._events[g]) return this;
    if (!h)
      return a(this, g), this;
    var f = this._events[g];
    if (f.fn)
      f.fn === h && (!d || f.once) && (!u || f.context === u) && a(this, g);
    else {
      for (var m = 0, y = [], E = f.length; m < E; m++)
        (f[m].fn !== h || d && !f[m].once || u && f[m].context !== u) && y.push(f[m]);
      y.length ? this._events[g] = y.length === 1 ? y[0] : y : a(this, g);
    }
    return this;
  }, o.prototype.removeAllListeners = function(c) {
    var h;
    return c ? (h = t ? t + c : c, this._events[h] && a(this, h)) : (this._events = new s(), this._eventsCount = 0), this;
  }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = t, o.EventEmitter = o, n.exports = o;
})(Xn);
var Ec = Xn.exports, Ai = /* @__PURE__ */ Da(Ec);
let wr = 0;
class Qn {
  constructor(e, t, s, i) {
    this.error = null, this.hls = void 0, this.id = void 0, this.instanceNo = wr++, this.observer = void 0, this.frag = null, this.part = null, this.useWorker = void 0, this.workerContext = null, this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0, this.onWorkerMessage = (l) => {
      const c = l.data, h = this.hls;
      if (!(!h || !(c != null && c.event) || c.instanceNo !== this.instanceNo))
        switch (c.event) {
          case "init": {
            var u;
            const d = (u = this.workerContext) == null ? void 0 : u.objectURL;
            d && self.URL.revokeObjectURL(d);
            break;
          }
          case "transmuxComplete": {
            this.handleTransmuxComplete(c.data);
            break;
          }
          case "flush": {
            this.onFlush(c.data);
            break;
          }
          case "workerLog": {
            h.logger[c.data.logType] && h.logger[c.data.logType](c.data.message);
            break;
          }
          default: {
            c.data = c.data || {}, c.data.frag = this.frag, c.data.part = this.part, c.data.id = this.id, h.trigger(c.event, c.data);
            break;
          }
        }
    }, this.onWorkerError = (l) => {
      if (!this.hls)
        return;
      const c = new Error(`${l.message}  (${l.filename}:${l.lineno})`);
      this.hls.config.enableWorker = !1, this.hls.logger.warn(`Error in "${this.id}" Web Worker, fallback to inline`), this.hls.trigger(p.ERROR, {
        type: $.OTHER_ERROR,
        details: L.INTERNAL_EXCEPTION,
        fatal: !1,
        event: "demuxerWorker",
        error: c
      });
    };
    const r = e.config;
    this.hls = e, this.id = t, this.useWorker = !!r.enableWorker, this.onTransmuxComplete = s, this.onFlush = i;
    const a = (l, c) => {
      c = c || {}, c.frag = this.frag || void 0, l === p.ERROR && (c = c, c.parent = this.id, c.part = this.part, this.error = c.error), this.hls.trigger(l, c);
    };
    this.observer = new Ai(), this.observer.on(p.FRAG_DECRYPTED, a), this.observer.on(p.ERROR, a);
    const o = er(r.preferManagedMediaSource);
    if (this.useWorker && typeof Worker < "u") {
      const l = this.hls.logger;
      if (r.workerPath || Fl()) {
        try {
          r.workerPath ? (l.log(`loading Web Worker ${r.workerPath} for "${t}"`), this.workerContext = Ml(r.workerPath)) : (l.log(`injecting Web Worker for "${t}"`), this.workerContext = Ol());
          const {
            worker: h
          } = this.workerContext;
          h.addEventListener("message", this.onWorkerMessage), h.addEventListener("error", this.onWorkerError), h.postMessage({
            instanceNo: this.instanceNo,
            cmd: "init",
            typeSupported: o,
            id: t,
            config: JSON.stringify(r)
          });
        } catch (h) {
          l.warn(`Error setting up "${t}" Web Worker, fallback to inline`, h), this.terminateWorker(), this.error = null, this.transmuxer = new Cr(this.observer, o, r, "", t, e.logger);
        }
        return;
      }
    }
    this.transmuxer = new Cr(this.observer, o, r, "", t, e.logger);
  }
  reset() {
    if (this.frag = null, this.part = null, this.workerContext) {
      const e = this.instanceNo;
      this.instanceNo = wr++;
      const t = this.hls.config, s = er(t.preferManagedMediaSource);
      this.workerContext.worker.postMessage({
        instanceNo: this.instanceNo,
        cmd: "reset",
        resetNo: e,
        typeSupported: s,
        id: this.id,
        config: JSON.stringify(t)
      });
    }
  }
  terminateWorker() {
    if (this.workerContext) {
      const {
        worker: e
      } = this.workerContext;
      this.workerContext = null, e.removeEventListener("message", this.onWorkerMessage), e.removeEventListener("error", this.onWorkerError), Nl(this.hls.config.workerPath);
    }
  }
  destroy() {
    if (this.workerContext)
      this.terminateWorker(), this.onWorkerMessage = this.onWorkerError = null;
    else {
      const t = this.transmuxer;
      t && (t.destroy(), this.transmuxer = null);
    }
    const e = this.observer;
    e && e.removeAllListeners(), this.frag = null, this.part = null, this.observer = null, this.hls = null;
  }
  push(e, t, s, i, r, a, o, l, c, h) {
    var u, d;
    c.transmuxing.start = self.performance.now();
    const {
      instanceNo: g,
      transmuxer: f
    } = this, m = a ? a.start : r.start, y = r.decryptdata, E = this.frag, x = !(E && r.cc === E.cc), T = !(E && c.level === E.level), _ = E ? c.sn - E.sn : -1, A = this.part ? c.part - this.part.index : -1, D = _ === 0 && c.id > 1 && c.id === (E == null ? void 0 : E.stats.chunkCount), v = !T && (_ === 1 || _ === 0 && (A === 1 || D && A <= 0)), b = self.performance.now();
    (T || _ || r.stats.parsing.start === 0) && (r.stats.parsing.start = b), a && (A || !v) && (a.stats.parsing.start = b);
    const C = !(E && ((u = r.initSegment) == null ? void 0 : u.url) === ((d = E.initSegment) == null ? void 0 : d.url)), R = new yc(x, v, l, T, m, C);
    if (!v || x || C) {
      this.hls.logger.log(`[transmuxer-interface, ${r.type}]: Starting new transmux session for sn: ${c.sn} p: ${c.part} level: ${c.level} id: ${c.id}
        discontinuity: ${x}
        trackSwitch: ${T}
        contiguous: ${v}
        accurateTimeOffset: ${l}
        timeOffset: ${m}
        initSegmentChange: ${C}`);
      const w = new pc(s, i, t, o, h);
      this.configureTransmuxer(w);
    }
    if (this.frag = r, this.part = a, this.workerContext)
      this.workerContext.worker.postMessage({
        instanceNo: g,
        cmd: "demux",
        data: e,
        decryptdata: y,
        chunkMeta: c,
        state: R
      }, e instanceof ArrayBuffer ? [e] : []);
    else if (f) {
      const w = f.push(e, y, c, R);
      hs(w) ? w.then((F) => {
        this.handleTransmuxComplete(F);
      }).catch((F) => {
        this.transmuxerError(F, c, "transmuxer-interface push error");
      }) : this.handleTransmuxComplete(w);
    }
  }
  flush(e) {
    e.transmuxing.start = self.performance.now();
    const {
      instanceNo: t,
      transmuxer: s
    } = this;
    if (this.workerContext)
      this.workerContext.worker.postMessage({
        instanceNo: t,
        cmd: "flush",
        chunkMeta: e
      });
    else if (s) {
      const i = s.flush(e);
      hs(i) ? i.then((r) => {
        this.handleFlushResult(r, e);
      }).catch((r) => {
        this.transmuxerError(r, e, "transmuxer-interface flush error");
      }) : this.handleFlushResult(i, e);
    }
  }
  transmuxerError(e, t, s) {
    this.hls && (this.error = e, this.hls.trigger(p.ERROR, {
      type: $.MEDIA_ERROR,
      details: L.FRAG_PARSING_ERROR,
      chunkMeta: t,
      frag: this.frag || void 0,
      part: this.part || void 0,
      fatal: !1,
      error: e,
      err: e,
      reason: s
    }));
  }
  handleFlushResult(e, t) {
    e.forEach((s) => {
      this.handleTransmuxComplete(s);
    }), this.onFlush(t);
  }
  configureTransmuxer(e) {
    const {
      instanceNo: t,
      transmuxer: s
    } = this;
    this.workerContext ? this.workerContext.worker.postMessage({
      instanceNo: t,
      cmd: "configure",
      config: e
    }) : s && s.configure(e);
  }
  handleTransmuxComplete(e) {
    e.chunkMeta.transmuxing.end = self.performance.now(), this.onTransmuxComplete(e);
  }
}
function Jn(n, e) {
  if (n.length !== e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (!dt(n[t].attrs, e[t].attrs))
      return !1;
  return !0;
}
function dt(n, e, t) {
  const s = n["STABLE-RENDITION-ID"];
  return s && !t ? s === e["STABLE-RENDITION-ID"] : !(t || ["LANGUAGE", "NAME", "CHARACTERISTICS", "AUTOSELECT", "DEFAULT", "FORCED", "ASSOC-LANGUAGE"]).some((i) => n[i] !== e[i]);
}
function Qs(n, e) {
  return e.label.toLowerCase() === n.name.toLowerCase() && (!e.language || e.language.toLowerCase() === (n.lang || "").toLowerCase());
}
const kr = 100;
class Tc extends yi {
  constructor(e, t, s) {
    super(e, t, s, "audio-stream-controller", N.AUDIO), this.videoAnchor = null, this.mainFragLoading = null, this.bufferedTrack = null, this.switchingTrack = null, this.trackId = -1, this.waitingData = null, this.mainDetails = null, this.flushing = !1, this.bufferFlushed = !1, this.cachedTrackLoadedData = null, this.registerListeners();
  }
  onHandlerDestroying() {
    this.unregisterListeners(), super.onHandlerDestroying(), this.mainDetails = null, this.bufferedTrack = null, this.switchingTrack = null;
  }
  registerListeners() {
    super.registerListeners();
    const {
      hls: e
    } = this;
    e.on(p.LEVEL_LOADED, this.onLevelLoaded, this), e.on(p.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), e.on(p.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.on(p.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.on(p.BUFFER_RESET, this.onBufferReset, this), e.on(p.BUFFER_CREATED, this.onBufferCreated, this), e.on(p.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(p.BUFFER_FLUSHED, this.onBufferFlushed, this), e.on(p.INIT_PTS_FOUND, this.onInitPtsFound, this), e.on(p.FRAG_LOADING, this.onFragLoading, this), e.on(p.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e && (super.unregisterListeners(), e.off(p.LEVEL_LOADED, this.onLevelLoaded, this), e.off(p.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), e.off(p.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.off(p.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.off(p.BUFFER_RESET, this.onBufferReset, this), e.off(p.BUFFER_CREATED, this.onBufferCreated, this), e.off(p.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(p.BUFFER_FLUSHED, this.onBufferFlushed, this), e.off(p.INIT_PTS_FOUND, this.onInitPtsFound, this), e.on(p.FRAG_LOADING, this.onFragLoading, this), e.off(p.FRAG_BUFFERED, this.onFragBuffered, this));
  }
  // INIT_PTS_FOUND is triggered when the video track parsed in the stream-controller has a new PTS value
  onInitPtsFound(e, {
    frag: t,
    id: s,
    initPTS: i,
    timescale: r
  }) {
    if (s === N.MAIN) {
      const a = t.cc, o = this.fragCurrent;
      if (this.initPTS[a] = {
        baseTime: i,
        timescale: r
      }, this.log(`InitPTS for cc: ${a} found from main: ${i}/${r}`), this.videoAnchor = t, this.state === I.WAITING_INIT_PTS) {
        const l = this.waitingData;
        (!l || l.frag.cc !== a) && (this.nextLoadPosition = this.findSyncFrag(t).start), this.tick();
      } else !this.loadedmetadata && o && o.cc !== a && (this.startFragRequested = !1, this.nextLoadPosition = this.findSyncFrag(t).start, o.abortRequests(), this.resetLoadingState());
    }
  }
  findSyncFrag(e) {
    const t = this.getLevelDetails(), s = e.cc;
    return nl(t, s, e) || t && wn(t.fragments, s) || e;
  }
  startLoad(e) {
    if (!this.levels) {
      this.startPosition = e, this.state = I.STOPPED;
      return;
    }
    const t = this.lastCurrentTime;
    this.stopLoad(), this.setInterval(kr), t > 0 && e === -1 ? (this.log(`Override startPosition with lastCurrentTime @${t.toFixed(3)}`), e = t, this.state = I.IDLE) : (this.loadedmetadata = !1, this.state = I.WAITING_TRACK), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick();
  }
  doTick() {
    switch (this.state) {
      case I.IDLE:
        this.doTickIdle();
        break;
      case I.WAITING_TRACK: {
        var e;
        const {
          levels: s,
          trackId: i
        } = this, r = s == null || (e = s[i]) == null ? void 0 : e.details;
        if (r) {
          if (this.waitForCdnTuneIn(r))
            break;
          this.state = I.WAITING_INIT_PTS;
        }
        break;
      }
      case I.FRAG_LOADING_WAITING_RETRY: {
        var t;
        const s = performance.now(), i = this.retryDate;
        if (!i || s >= i || (t = this.media) != null && t.seeking) {
          const {
            levels: r,
            trackId: a
          } = this;
          this.log("RetryDate reached, switch back to IDLE state"), this.resetStartWhenNotLoaded((r == null ? void 0 : r[a]) || null), this.state = I.IDLE;
        }
        break;
      }
      case I.WAITING_INIT_PTS: {
        const s = this.waitingData;
        if (s) {
          const {
            frag: i,
            part: r,
            cache: a,
            complete: o
          } = s, l = this.videoAnchor;
          if (this.initPTS[i.cc] !== void 0) {
            this.waitingData = null, this.state = I.FRAG_LOADING;
            const c = a.flush(), h = {
              frag: i,
              part: r,
              payload: c,
              networkDetails: null
            };
            this._handleFragmentLoadProgress(h), o && super._handleFragmentLoadComplete(h);
          } else l && l.cc !== s.frag.cc && (this.log(`Waiting fragment cc (${i.cc}) cancelled because video is at cc ${l.cc}`), this.nextLoadPosition = this.findSyncFrag(l).start, this.clearWaitingFragment());
        } else this.state !== I.STOPPED && (this.state = I.IDLE);
      }
    }
    this.onTickEnd();
  }
  clearWaitingFragment() {
    const e = this.waitingData;
    e && (this.loadedmetadata || (this.startFragRequested = !1), this.fragmentTracker.removeFragment(e.frag), this.waitingData = null, this.state !== I.STOPPED && (this.state = I.IDLE));
  }
  resetLoadingState() {
    this.clearWaitingFragment(), super.resetLoadingState();
  }
  onTickEnd() {
    const {
      media: e
    } = this;
    e != null && e.readyState && (this.lastCurrentTime = e.currentTime);
  }
  doTickIdle() {
    var e;
    const {
      hls: t,
      levels: s,
      media: i,
      trackId: r
    } = this, a = t.config;
    if (!this.buffering || !i && (this.startFragRequested || !a.startFragPrefetch) || !(s != null && s[r]))
      return;
    const o = s[r], l = o.details;
    if (!l || l.live && this.levelLastLoaded !== o || this.waitForCdnTuneIn(l)) {
      this.state = I.WAITING_TRACK;
      return;
    }
    const c = this.mediaBuffer ? this.mediaBuffer : this.media;
    this.bufferFlushed && c && (this.bufferFlushed = !1, this.afterBufferFlushed(c, J.AUDIO, N.AUDIO));
    const h = this.getFwdBufferInfo(c, N.AUDIO);
    if (h === null)
      return;
    const {
      bufferedTrack: u,
      switchingTrack: d
    } = this;
    if (!d && this._streamEnded(h, l)) {
      t.trigger(p.BUFFER_EOS, {
        type: "audio"
      }), this.state = I.ENDED;
      return;
    }
    const g = h.len, f = t.maxBufferLength, m = l.fragments, y = m[0].start, E = this.getLoadPosition();
    let x = this.flushing ? E : h.end;
    if (d && i) {
      const A = E;
      u && !dt(d.attrs, u.attrs) && (x = A), l.PTSKnown && A < y && (h.end > y || h.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"), i.currentTime = y + 0.05);
    }
    if (g >= f && !d && x < m[m.length - 1].start)
      return;
    let T = this.getNextFragment(x, l);
    if (T && this.isLoopLoading(T, x) && (T = this.getNextFragmentLoopLoading(T, l, h, N.MAIN, f)), !T) {
      this.bufferFlushed = !0;
      return;
    }
    const _ = (e = this.mainFragLoading) == null ? void 0 : e.frag;
    if (this.startFragRequested && _ && _.sn !== "initSegment" && T.sn !== "initSegment" && !T.endList && (!l.live || !this.loadingParts && x < this.hls.liveSyncPosition)) {
      let A = _;
      if (T.start > A.end) {
        const v = this.fragmentTracker.getFragAtPos(x, N.MAIN);
        v && v.end > _.end && (A = v, this.mainFragLoading = {
          frag: v,
          targetBufferTime: null
        });
      }
      if (T.start > A.end)
        return;
    }
    this.loadFragment(T, o, x);
  }
  onMediaDetaching() {
    this.bufferFlushed = this.flushing = !1, super.onMediaDetaching();
  }
  onAudioTracksUpdated(e, {
    audioTracks: t
  }) {
    this.resetTransmuxer(), this.levels = t.map((s) => new ht(s));
  }
  onAudioTrackSwitching(e, t) {
    const s = !!t.url;
    this.trackId = t.id;
    const {
      fragCurrent: i
    } = this;
    i && (i.abortRequests(), this.removeUnbufferedFrags(i.start)), this.resetLoadingState(), s ? (this.switchingTrack = t, this.flushAudioIfNeeded(t), this.state !== I.STOPPED && (this.setInterval(kr), this.state = I.IDLE, this.tick())) : (this.resetTransmuxer(), this.switchingTrack = null, this.bufferedTrack = t, this.clearInterval());
  }
  onManifestLoading() {
    super.onManifestLoading(), this.bufferFlushed = this.flushing = !1, this.mainDetails = this.waitingData = this.videoAnchor = this.bufferedTrack = this.cachedTrackLoadedData = this.switchingTrack = null, this.trackId = -1;
  }
  onLevelLoaded(e, t) {
    this.mainDetails = t.details, this.cachedTrackLoadedData !== null && (this.hls.trigger(p.AUDIO_TRACK_LOADED, this.cachedTrackLoadedData), this.cachedTrackLoadedData = null);
  }
  onAudioTrackLoaded(e, t) {
    var s;
    if (this.mainDetails == null) {
      this.cachedTrackLoadedData = t;
      return;
    }
    const {
      levels: i
    } = this, {
      details: r,
      id: a
    } = t;
    if (!i) {
      this.warn(`Audio tracks were reset while loading level ${a}`);
      return;
    }
    this.log(`Audio track ${a} loaded [${r.startSN},${r.endSN}]${r.lastPartSn ? `[part-${r.lastPartSn}-${r.lastPartIndex}]` : ""},duration:${r.totalduration}`);
    const o = i[a];
    let l = 0;
    if (r.live || (s = o.details) != null && s.live) {
      this.checkLiveUpdate(r);
      const h = this.mainDetails;
      if (r.deltaUpdateFailed || !h)
        return;
      if (!o.details && r.hasProgramDateTime && h.hasProgramDateTime)
        ls(r, h), l = r.fragments[0].start;
      else {
        var c;
        l = this.alignPlaylists(r, o.details, (c = this.levelLastLoaded) == null ? void 0 : c.details);
      }
    }
    o.details = r, this.levelLastLoaded = o, !this.startFragRequested && (this.mainDetails || !r.live) && this.setStartPosition(this.mainDetails || r, l), this.state === I.WAITING_TRACK && !this.waitForCdnTuneIn(r) && (this.state = I.IDLE), this.tick();
  }
  _handleFragmentLoadProgress(e) {
    var t;
    const s = e.frag, {
      part: i,
      payload: r
    } = e, {
      config: a,
      trackId: o,
      levels: l
    } = this;
    if (!l) {
      this.warn(`Audio tracks were reset while fragment load was in progress. Fragment ${s.sn} of level ${s.level} will not be buffered`);
      return;
    }
    const c = l[o];
    if (!c) {
      this.warn("Audio track is undefined on fragment load progress");
      return;
    }
    const h = c.details;
    if (!h) {
      this.warn("Audio track details undefined on fragment load progress"), this.removeUnbufferedFrags(s.start);
      return;
    }
    const u = a.defaultAudioCodec || c.audioCodec || "mp4a.40.2";
    let d = this.transmuxer;
    d || (d = this.transmuxer = new Qn(this.hls, N.AUDIO, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
    const g = this.initPTS[s.cc], f = (t = s.initSegment) == null ? void 0 : t.data;
    if (g !== void 0) {
      const y = i ? i.index : -1, E = y !== -1, x = new mi(s.level, s.sn, s.stats.chunkCount, r.byteLength, y, E);
      d.push(r, f, u, "", s, i, h.totalduration, !1, x, g);
    } else {
      this.log(`Unknown video PTS for cc ${s.cc}, waiting for video PTS before demuxing audio frag ${s.sn} of [${h.startSN} ,${h.endSN}],track ${o}`);
      const {
        cache: m
      } = this.waitingData = this.waitingData || {
        frag: s,
        part: i,
        cache: new Fn(),
        complete: !1
      };
      m.push(new Uint8Array(r)), this.state = I.WAITING_INIT_PTS;
    }
  }
  _handleFragmentLoadComplete(e) {
    if (this.waitingData) {
      this.waitingData.complete = !0;
      return;
    }
    super._handleFragmentLoadComplete(e);
  }
  onBufferReset() {
    this.mediaBuffer = null, this.loadedmetadata = !1;
  }
  onBufferCreated(e, t) {
    const s = t.tracks.audio;
    s && (this.mediaBuffer = s.buffer || null);
  }
  onFragLoading(e, t) {
    t.frag.type === N.MAIN && t.frag.sn !== "initSegment" && (this.mainFragLoading = t, this.state === I.IDLE && this.tick());
  }
  onFragBuffered(e, t) {
    const {
      frag: s,
      part: i
    } = t;
    if (s.type !== N.AUDIO) {
      if (!this.loadedmetadata && s.type === N.MAIN) {
        const r = this.fragmentTracker.getState(s);
        (r === le.OK || r === le.PARTIAL) && (this.loadedmetadata = !0);
      }
      return;
    }
    if (this.fragContextChanged(s)) {
      this.warn(`Fragment ${s.sn}${i ? " p: " + i.index : ""} of level ${s.level} finished buffering, but was aborted. state: ${this.state}, audioSwitch: ${this.switchingTrack ? this.switchingTrack.name : "false"}`);
      return;
    }
    if (s.sn !== "initSegment") {
      this.fragPrevious = s;
      const r = this.switchingTrack;
      r && (this.bufferedTrack = r, this.switchingTrack = null, this.hls.trigger(p.AUDIO_TRACK_SWITCHED, he({}, r)));
    }
    this.fragBufferedComplete(s, i);
  }
  onError(e, t) {
    var s;
    if (t.fatal) {
      this.state = I.ERROR;
      return;
    }
    switch (t.details) {
      case L.FRAG_GAP:
      case L.FRAG_PARSING_ERROR:
      case L.FRAG_DECRYPT_ERROR:
      case L.FRAG_LOAD_ERROR:
      case L.FRAG_LOAD_TIMEOUT:
      case L.KEY_LOAD_ERROR:
      case L.KEY_LOAD_TIMEOUT:
        this.onFragmentOrKeyLoadError(N.AUDIO, t);
        break;
      case L.AUDIO_TRACK_LOAD_ERROR:
      case L.AUDIO_TRACK_LOAD_TIMEOUT:
      case L.LEVEL_PARSING_ERROR:
        !t.levelRetry && this.state === I.WAITING_TRACK && ((s = t.context) == null ? void 0 : s.type) === j.AUDIO_TRACK && (this.state = I.IDLE);
        break;
      case L.BUFFER_APPEND_ERROR:
      case L.BUFFER_FULL_ERROR:
        if (!t.parent || t.parent !== "audio")
          return;
        if (t.details === L.BUFFER_APPEND_ERROR) {
          this.resetLoadingState();
          return;
        }
        this.reduceLengthAndFlushBuffer(t) && (this.bufferedTrack = null, super.flushMainBuffer(0, Number.POSITIVE_INFINITY, "audio"));
        break;
      case L.INTERNAL_EXCEPTION:
        this.recoverWorkerError(t);
        break;
    }
  }
  onBufferFlushing(e, {
    type: t
  }) {
    t !== J.VIDEO && (this.flushing = !0);
  }
  onBufferFlushed(e, {
    type: t
  }) {
    if (t !== J.VIDEO) {
      this.flushing = !1, this.bufferFlushed = !0, this.state === I.ENDED && (this.state = I.IDLE);
      const s = this.mediaBuffer || this.media;
      s && (this.afterBufferFlushed(s, t, N.AUDIO), this.tick());
    }
  }
  _handleTransmuxComplete(e) {
    var t;
    const s = "audio", {
      hls: i
    } = this, {
      remuxResult: r,
      chunkMeta: a
    } = e, o = this.getCurrentContext(a);
    if (!o) {
      this.resetWhenMissingContext(a);
      return;
    }
    const {
      frag: l,
      part: c,
      level: h
    } = o, {
      details: u
    } = h, {
      audio: d,
      text: g,
      id3: f,
      initSegment: m
    } = r;
    if (this.fragContextChanged(l) || !u) {
      this.fragmentTracker.removeFragment(l);
      return;
    }
    if (this.state = I.PARSING, this.switchingTrack && d && this.completeAudioSwitch(this.switchingTrack), m != null && m.tracks) {
      const y = l.initSegment || l;
      this._bufferInitSegment(h, m.tracks, y, a), i.trigger(p.FRAG_PARSING_INIT_SEGMENT, {
        frag: y,
        id: s,
        tracks: m.tracks
      });
    }
    if (d) {
      const {
        startPTS: y,
        endPTS: E,
        startDTS: x,
        endDTS: T
      } = d;
      c && (c.elementaryStreams[J.AUDIO] = {
        startPTS: y,
        endPTS: E,
        startDTS: x,
        endDTS: T
      }), l.setElementaryStreamInfo(J.AUDIO, y, E, x, T), this.bufferFragmentData(d, l, c, a);
    }
    if (f != null && (t = f.samples) != null && t.length) {
      const y = ae({
        id: s,
        frag: l,
        details: u
      }, f);
      i.trigger(p.FRAG_PARSING_METADATA, y);
    }
    if (g) {
      const y = ae({
        id: s,
        frag: l,
        details: u
      }, g);
      i.trigger(p.FRAG_PARSING_USERDATA, y);
    }
  }
  _bufferInitSegment(e, t, s, i) {
    if (this.state !== I.PARSING || (t.video && delete t.video, t.audiovideo && delete t.audiovideo, !t.audio))
      return;
    const r = t.audio;
    r.id = "audio";
    const a = e.audioCodec;
    this.log(`Init audio buffer, container:${r.container}, codecs[level/parsed]=[${a}/${r.codec}]`), a && a.split(",").length === 1 && (r.levelCodec = a), this.hls.trigger(p.BUFFER_CODECS, t);
    const o = r.initSegment;
    if (o != null && o.byteLength) {
      const l = {
        type: "audio",
        frag: s,
        part: null,
        chunkMeta: i,
        parent: s.type,
        data: o
      };
      this.hls.trigger(p.BUFFER_APPENDING, l);
    }
    this.tickImmediate();
  }
  loadFragment(e, t, s) {
    const i = this.fragmentTracker.getState(e);
    if (this.switchingTrack || i === le.NOT_LOADED || i === le.PARTIAL) {
      var r;
      if (e.sn === "initSegment")
        this._loadInitSegment(e, t);
      else if ((r = t.details) != null && r.live && !this.initPTS[e.cc]) {
        this.log(`Waiting for video PTS in continuity counter ${e.cc} of live stream before loading audio fragment ${e.sn} of level ${this.trackId}`), this.state = I.WAITING_INIT_PTS;
        const a = this.mainDetails;
        a && a.fragments[0].start !== t.details.fragments[0].start && ls(t.details, a);
      } else
        super.loadFragment(e, t, s);
    } else
      this.clearTrackerIfNeeded(e);
  }
  flushAudioIfNeeded(e) {
    const {
      media: t,
      bufferedTrack: s
    } = this, i = s == null ? void 0 : s.attrs, r = e.attrs;
    t && i && (i.CHANNELS !== r.CHANNELS || s.name !== e.name || s.lang !== e.lang) && (this.log("Switching audio track : flushing all audio"), super.flushMainBuffer(0, Number.POSITIVE_INFINITY, "audio"), this.bufferedTrack = null);
  }
  completeAudioSwitch(e) {
    const {
      hls: t
    } = this;
    this.flushAudioIfNeeded(e), this.bufferedTrack = e, this.switchingTrack = null, t.trigger(p.AUDIO_TRACK_SWITCHED, he({}, e));
  }
}
class xc extends gi {
  constructor(e) {
    super(e, "audio-track-controller"), this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0, this.registerListeners();
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(p.MANIFEST_LOADING, this.onManifestLoading, this), e.on(p.MANIFEST_PARSED, this.onManifestParsed, this), e.on(p.LEVEL_LOADING, this.onLevelLoading, this), e.on(p.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(p.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.on(p.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(p.MANIFEST_LOADING, this.onManifestLoading, this), e.off(p.MANIFEST_PARSED, this.onManifestParsed, this), e.off(p.LEVEL_LOADING, this.onLevelLoading, this), e.off(p.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(p.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.off(p.ERROR, this.onError, this);
  }
  destroy() {
    this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.currentTrack = null, super.destroy();
  }
  onManifestLoading() {
    this.tracks = [], this.tracksInGroup = [], this.groupIds = null, this.currentTrack = null, this.trackId = -1, this.selectDefaultTrack = !0;
  }
  onManifestParsed(e, t) {
    this.tracks = t.audioTracks || [];
  }
  onAudioTrackLoaded(e, t) {
    const {
      id: s,
      groupId: i,
      details: r
    } = t, a = this.tracksInGroup[s];
    if (!a || a.groupId !== i) {
      this.warn(`Audio track with id:${s} and group:${i} not found in active group ${a == null ? void 0 : a.groupId}`);
      return;
    }
    const o = a.details;
    a.details = t.details, this.log(`Audio track ${s} "${a.name}" lang:${a.lang} group:${i} loaded [${r.startSN}-${r.endSN}]`), s === this.trackId && this.playlistLoaded(s, t, o);
  }
  onLevelLoading(e, t) {
    this.switchLevel(t.level);
  }
  onLevelSwitching(e, t) {
    this.switchLevel(t.level);
  }
  switchLevel(e) {
    const t = this.hls.levels[e];
    if (!t)
      return;
    const s = t.audioGroups || null, i = this.groupIds;
    let r = this.currentTrack;
    if (!s || (i == null ? void 0 : i.length) !== (s == null ? void 0 : s.length) || s != null && s.some((o) => (i == null ? void 0 : i.indexOf(o)) === -1)) {
      this.groupIds = s, this.trackId = -1, this.currentTrack = null;
      const o = this.tracks.filter((d) => !s || s.indexOf(d.groupId) !== -1);
      if (o.length)
        this.selectDefaultTrack && !o.some((d) => d.default) && (this.selectDefaultTrack = !1), o.forEach((d, g) => {
          d.id = g;
        });
      else if (!r && !this.tracksInGroup.length)
        return;
      this.tracksInGroup = o;
      const l = this.hls.config.audioPreference;
      if (!r && l) {
        const d = Oe(l, o, tt);
        if (d > -1)
          r = o[d];
        else {
          const g = Oe(l, this.tracks);
          r = this.tracks[g];
        }
      }
      let c = this.findTrackId(r);
      c === -1 && r && (c = this.findTrackId(null));
      const h = {
        audioTracks: o
      };
      this.log(`Updating audio tracks, ${o.length} track(s) found in group(s): ${s == null ? void 0 : s.join(",")}`), this.hls.trigger(p.AUDIO_TRACKS_UPDATED, h);
      const u = this.trackId;
      if (c !== -1 && u === -1)
        this.setAudioTrack(c);
      else if (o.length && u === -1) {
        var a;
        const d = new Error(`No audio track selected for current audio group-ID(s): ${(a = this.groupIds) == null ? void 0 : a.join(",")} track count: ${o.length}`);
        this.warn(d.message), this.hls.trigger(p.ERROR, {
          type: $.MEDIA_ERROR,
          details: L.AUDIO_TRACK_LOAD_ERROR,
          fatal: !0,
          error: d
        });
      }
    } else this.shouldReloadPlaylist(r) && this.setAudioTrack(this.trackId);
  }
  onError(e, t) {
    t.fatal || !t.context || t.context.type === j.AUDIO_TRACK && t.context.id === this.trackId && (!this.groupIds || this.groupIds.indexOf(t.context.groupId) !== -1) && (this.requestScheduled = -1, this.checkRetry(t));
  }
  get allAudioTracks() {
    return this.tracks;
  }
  get audioTracks() {
    return this.tracksInGroup;
  }
  get audioTrack() {
    return this.trackId;
  }
  set audioTrack(e) {
    this.selectDefaultTrack = !1, this.setAudioTrack(e);
  }
  setAudioOption(e) {
    const t = this.hls;
    if (t.config.audioPreference = e, e) {
      const s = this.allAudioTracks;
      if (this.selectDefaultTrack = !1, s.length) {
        const i = this.currentTrack;
        if (i && lt(e, i, tt))
          return i;
        const r = Oe(e, this.tracksInGroup, tt);
        if (r > -1) {
          const a = this.tracksInGroup[r];
          return this.setAudioTrack(r), a;
        } else if (i) {
          let a = t.loadLevel;
          a === -1 && (a = t.firstAutoLevel);
          const o = yl(e, t.levels, s, a, tt);
          if (o === -1)
            return null;
          t.nextLoadLevel = o;
        }
        if (e.channels || e.audioCodec) {
          const a = Oe(e, s);
          if (a > -1)
            return s[a];
        }
      }
    }
    return null;
  }
  setAudioTrack(e) {
    const t = this.tracksInGroup;
    if (e < 0 || e >= t.length) {
      this.warn(`Invalid audio track id: ${e}`);
      return;
    }
    this.clearTimer(), this.selectDefaultTrack = !1;
    const s = this.currentTrack, i = t[e], r = i.details && !i.details.live;
    if (e === this.trackId && i === s && r || (this.log(`Switching to audio-track ${e} "${i.name}" lang:${i.lang} group:${i.groupId} channels:${i.channels}`), this.trackId = e, this.currentTrack = i, this.hls.trigger(p.AUDIO_TRACK_SWITCHING, he({}, i)), r))
      return;
    const a = this.switchParams(i.url, s == null ? void 0 : s.details, i.details);
    this.loadPlaylist(a);
  }
  findTrackId(e) {
    const t = this.tracksInGroup;
    for (let s = 0; s < t.length; s++) {
      const i = t[s];
      if (!(this.selectDefaultTrack && !i.default) && (!e || lt(e, i, tt)))
        return s;
    }
    if (e) {
      const {
        name: s,
        lang: i,
        assocLang: r,
        characteristics: a,
        audioCodec: o,
        channels: l
      } = e;
      for (let c = 0; c < t.length; c++) {
        const h = t[c];
        if (lt({
          name: s,
          lang: i,
          assocLang: r,
          characteristics: a,
          audioCodec: o,
          channels: l
        }, h, tt))
          return c;
      }
      for (let c = 0; c < t.length; c++) {
        const h = t[c];
        if (dt(e.attrs, h.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"]))
          return c;
      }
      for (let c = 0; c < t.length; c++) {
        const h = t[c];
        if (dt(e.attrs, h.attrs, ["LANGUAGE"]))
          return c;
      }
    }
    return -1;
  }
  loadPlaylist(e) {
    const t = this.currentTrack;
    if (this.shouldLoadPlaylist(t) && t) {
      super.loadPlaylist();
      const s = t.id, i = t.groupId;
      let r = t.url;
      if (e)
        try {
          r = e.addDirectives(r);
        } catch (a) {
          this.warn(`Could not construct new URL with HLS Delivery Directives: ${a}`);
        }
      this.log(`loading audio-track playlist ${s} "${t.name}" lang:${t.lang} group:${i}`), this.clearTimer(), this.hls.trigger(p.AUDIO_TRACK_LOADING, {
        url: r,
        id: s,
        groupId: i,
        deliveryDirectives: e || null
      });
    }
  }
}
const Pr = 500;
class Sc extends yi {
  constructor(e, t, s) {
    super(e, t, s, "subtitle-stream-controller", N.SUBTITLE), this.currentTrackId = -1, this.tracksBuffered = [], this.mainDetails = null, this.registerListeners();
  }
  onHandlerDestroying() {
    this.unregisterListeners(), super.onHandlerDestroying(), this.mainDetails = null;
  }
  registerListeners() {
    super.registerListeners();
    const {
      hls: e
    } = this;
    e.on(p.LEVEL_LOADED, this.onLevelLoaded, this), e.on(p.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.on(p.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.on(p.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.on(p.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), e.on(p.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(p.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  unregisterListeners() {
    super.unregisterListeners();
    const {
      hls: e
    } = this;
    e.off(p.LEVEL_LOADED, this.onLevelLoaded, this), e.off(p.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.off(p.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.off(p.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.off(p.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), e.off(p.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(p.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  startLoad(e) {
    this.stopLoad(), this.state = I.IDLE, this.setInterval(Pr), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick();
  }
  onManifestLoading() {
    super.onManifestLoading(), this.mainDetails = null;
  }
  onMediaDetaching() {
    this.tracksBuffered = [], super.onMediaDetaching();
  }
  onLevelLoaded(e, t) {
    this.mainDetails = t.details;
  }
  onSubtitleFragProcessed(e, t) {
    const {
      frag: s,
      success: i
    } = t;
    if (s.sn !== "initSegment" && (this.fragPrevious = s), this.state = I.IDLE, !i)
      return;
    const r = this.tracksBuffered[this.currentTrackId];
    if (!r)
      return;
    let a;
    const o = s.start;
    for (let c = 0; c < r.length; c++)
      if (o >= r[c].start && o <= r[c].end) {
        a = r[c];
        break;
      }
    const l = s.start + s.duration;
    a ? a.end = l : (a = {
      start: o,
      end: l
    }, r.push(a)), this.fragmentTracker.fragBuffered(s), this.fragBufferedComplete(s, null);
  }
  onBufferFlushing(e, t) {
    const {
      startOffset: s,
      endOffset: i
    } = t;
    if (s === 0 && i !== Number.POSITIVE_INFINITY) {
      const r = i - 1;
      if (r <= 0)
        return;
      t.endOffsetSubtitles = Math.max(0, r), this.tracksBuffered.forEach((a) => {
        for (let o = 0; o < a.length; ) {
          if (a[o].end <= r) {
            a.shift();
            continue;
          } else if (a[o].start < r)
            a[o].start = r;
          else
            break;
          o++;
        }
      }), this.fragmentTracker.removeFragmentsInRange(s, r, N.SUBTITLE);
    }
  }
  onFragBuffered(e, t) {
    if (!this.loadedmetadata && t.frag.type === N.MAIN) {
      var s;
      (s = this.media) != null && s.buffered.length && (this.loadedmetadata = !0);
    }
  }
  // If something goes wrong, proceed to next frag, if we were processing one.
  onError(e, t) {
    const s = t.frag;
    (s == null ? void 0 : s.type) === N.SUBTITLE && (t.details === L.FRAG_GAP && this.fragmentTracker.fragBuffered(s, !0), this.fragCurrent && this.fragCurrent.abortRequests(), this.state !== I.STOPPED && (this.state = I.IDLE));
  }
  // Got all new subtitle levels.
  onSubtitleTracksUpdated(e, {
    subtitleTracks: t
  }) {
    if (this.levels && Jn(this.levels, t)) {
      this.levels = t.map((s) => new ht(s));
      return;
    }
    this.tracksBuffered = [], this.levels = t.map((s) => {
      const i = new ht(s);
      return this.tracksBuffered[i.id] = [], i;
    }), this.fragmentTracker.removeFragmentsInRange(0, Number.POSITIVE_INFINITY, N.SUBTITLE), this.fragPrevious = null, this.mediaBuffer = null;
  }
  onSubtitleTrackSwitch(e, t) {
    var s;
    if (this.currentTrackId = t.id, !((s = this.levels) != null && s.length) || this.currentTrackId === -1) {
      this.clearInterval();
      return;
    }
    const i = this.levels[this.currentTrackId];
    i != null && i.details ? this.mediaBuffer = this.mediaBufferTimeRanges : this.mediaBuffer = null, i && this.state !== I.STOPPED && this.setInterval(Pr);
  }
  // Got a new set of subtitle fragments.
  onSubtitleTrackLoaded(e, t) {
    var s;
    const {
      currentTrackId: i,
      levels: r
    } = this, {
      details: a,
      id: o
    } = t;
    if (!r) {
      this.warn(`Subtitle tracks were reset while loading level ${o}`);
      return;
    }
    const l = r[o];
    if (o >= r.length || !l)
      return;
    this.log(`Subtitle track ${o} loaded [${a.startSN},${a.endSN}]${a.lastPartSn ? `[part-${a.lastPartSn}-${a.lastPartIndex}]` : ""},duration:${a.totalduration}`), this.mediaBuffer = this.mediaBufferTimeRanges;
    let c = 0;
    if (a.live || (s = l.details) != null && s.live) {
      const u = this.mainDetails;
      if (a.deltaUpdateFailed || !u)
        return;
      const d = u.fragments[0];
      if (!l.details)
        a.hasProgramDateTime && u.hasProgramDateTime ? (ls(a, u), c = a.fragments[0].start) : d && (c = d.start, js(a, c));
      else {
        var h;
        c = this.alignPlaylists(a, l.details, (h = this.levelLastLoaded) == null ? void 0 : h.details), c === 0 && d && (c = d.start, js(a, c));
      }
    }
    l.details = a, this.levelLastLoaded = l, o === i && (!this.startFragRequested && (this.mainDetails || !a.live) && this.setStartPosition(this.mainDetails || a, c), this.tick(), a.live && !this.fragCurrent && this.media && this.state === I.IDLE && (Lt(null, a.fragments, this.media.currentTime, 0) || (this.warn("Subtitle playlist not aligned with playback"), l.details = void 0)));
  }
  _handleFragmentLoadComplete(e) {
    const {
      frag: t,
      payload: s
    } = e, i = t.decryptdata, r = this.hls;
    if (!this.fragContextChanged(t) && s && s.byteLength > 0 && i != null && i.key && i.iv && ot(i.method)) {
      const a = performance.now();
      this.decrypter.decrypt(new Uint8Array(s), i.key.buffer, i.iv.buffer, ci(i.method)).catch((o) => {
        throw r.trigger(p.ERROR, {
          type: $.MEDIA_ERROR,
          details: L.FRAG_DECRYPT_ERROR,
          fatal: !1,
          error: o,
          reason: o.message,
          frag: t
        }), o;
      }).then((o) => {
        const l = performance.now();
        r.trigger(p.FRAG_DECRYPTED, {
          frag: t,
          payload: o,
          stats: {
            tstart: a,
            tdecrypt: l
          }
        });
      }).catch((o) => {
        this.warn(`${o.name}: ${o.message}`), this.state = I.IDLE;
      });
    }
  }
  doTick() {
    if (!this.media) {
      this.state = I.IDLE;
      return;
    }
    if (this.state === I.IDLE) {
      const {
        currentTrackId: e,
        levels: t
      } = this, s = t == null ? void 0 : t[e];
      if (!s || !t.length || !s.details)
        return;
      const {
        config: i
      } = this, r = this.getLoadPosition(), a = ee.bufferedInfo(this.tracksBuffered[this.currentTrackId] || [], r, i.maxBufferHole), {
        end: o,
        len: l
      } = a, c = s.details, h = this.hls.maxBufferLength + c.levelTargetDuration;
      if (l > h)
        return;
      const u = c.fragments, d = u.length, g = c.edge;
      let f = null;
      const m = this.fragPrevious;
      if (o < g) {
        const y = i.maxFragLookUpTolerance, E = o > g - y ? 0 : y;
        f = Lt(m, u, Math.max(u[0].start, o), E), !f && m && m.start < u[0].start && (f = u[0]);
      } else
        f = u[d - 1];
      if (!f)
        return;
      if (f = this.mapToInitFragWhenRequired(f), f.sn !== "initSegment") {
        const y = f.sn - c.startSN, E = u[y - 1];
        E && E.cc === f.cc && this.fragmentTracker.getState(E) === le.NOT_LOADED && (f = E);
      }
      this.fragmentTracker.getState(f) === le.NOT_LOADED && this.loadFragment(f, s, o);
    }
  }
  loadFragment(e, t, s) {
    e.sn === "initSegment" ? this._loadInitSegment(e, t) : super.loadFragment(e, t, s);
  }
  get mediaBufferTimeRanges() {
    return new vc(this.tracksBuffered[this.currentTrackId] || []);
  }
}
class vc {
  constructor(e) {
    this.buffered = void 0;
    const t = (s, i, r) => {
      if (i = i >>> 0, i > r - 1)
        throw new DOMException(`Failed to execute '${s}' on 'TimeRanges': The index provided (${i}) is greater than the maximum bound (${r})`);
      return e[i][s];
    };
    this.buffered = {
      get length() {
        return e.length;
      },
      end(s) {
        return t("end", s, e.length);
      },
      start(s) {
        return t("start", s, e.length);
      }
    };
  }
}
class Ac extends gi {
  constructor(e) {
    super(e, "subtitle-track-controller"), this.media = null, this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0, this.queuedDefaultTrack = -1, this.useTextTrackPolling = !1, this.subtitlePollingInterval = -1, this._subtitleDisplay = !0, this.asyncPollTrackChange = () => this.pollTrackChange(0), this.onTextTracksChanged = () => {
      if (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval), !this.media || !this.hls.config.renderTextTracksNatively)
        return;
      let t = null;
      const s = Ht(this.media.textTracks);
      for (let r = 0; r < s.length; r++)
        if (s[r].mode === "hidden")
          t = s[r];
        else if (s[r].mode === "showing") {
          t = s[r];
          break;
        }
      const i = this.findTrackForTextTrack(t);
      this.subtitleTrack !== i && this.setSubtitleTrack(i);
    }, this.registerListeners();
  }
  destroy() {
    this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.currentTrack = null, this.onTextTracksChanged = this.asyncPollTrackChange = null, super.destroy();
  }
  get subtitleDisplay() {
    return this._subtitleDisplay;
  }
  set subtitleDisplay(e) {
    this._subtitleDisplay = e, this.trackId > -1 && this.toggleTrackModes();
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(p.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(p.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(p.MANIFEST_LOADING, this.onManifestLoading, this), e.on(p.MANIFEST_PARSED, this.onManifestParsed, this), e.on(p.LEVEL_LOADING, this.onLevelLoading, this), e.on(p.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(p.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.on(p.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(p.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(p.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(p.MANIFEST_LOADING, this.onManifestLoading, this), e.off(p.MANIFEST_PARSED, this.onManifestParsed, this), e.off(p.LEVEL_LOADING, this.onLevelLoading, this), e.off(p.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(p.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.off(p.ERROR, this.onError, this);
  }
  // Listen for subtitle track change, then extract the current track ID.
  onMediaAttached(e, t) {
    this.media = t.media, this.media && (this.queuedDefaultTrack > -1 && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = -1), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.pollTrackChange(500) : this.media.textTracks.addEventListener("change", this.asyncPollTrackChange));
  }
  pollTrackChange(e) {
    self.clearInterval(this.subtitlePollingInterval), this.subtitlePollingInterval = self.setInterval(this.onTextTracksChanged, e);
  }
  onMediaDetaching() {
    if (!this.media)
      return;
    self.clearInterval(this.subtitlePollingInterval), this.useTextTrackPolling || this.media.textTracks.removeEventListener("change", this.asyncPollTrackChange), this.trackId > -1 && (this.queuedDefaultTrack = this.trackId), Ht(this.media.textTracks).forEach((t) => {
      nt(t);
    }), this.subtitleTrack = -1, this.media = null;
  }
  onManifestLoading() {
    this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0;
  }
  // Fired whenever a new manifest is loaded.
  onManifestParsed(e, t) {
    this.tracks = t.subtitleTracks;
  }
  onSubtitleTrackLoaded(e, t) {
    const {
      id: s,
      groupId: i,
      details: r
    } = t, a = this.tracksInGroup[s];
    if (!a || a.groupId !== i) {
      this.warn(`Subtitle track with id:${s} and group:${i} not found in active group ${a == null ? void 0 : a.groupId}`);
      return;
    }
    const o = a.details;
    a.details = t.details, this.log(`Subtitle track ${s} "${a.name}" lang:${a.lang} group:${i} loaded [${r.startSN}-${r.endSN}]`), s === this.trackId && this.playlistLoaded(s, t, o);
  }
  onLevelLoading(e, t) {
    this.switchLevel(t.level);
  }
  onLevelSwitching(e, t) {
    this.switchLevel(t.level);
  }
  switchLevel(e) {
    const t = this.hls.levels[e];
    if (!t)
      return;
    const s = t.subtitleGroups || null, i = this.groupIds;
    let r = this.currentTrack;
    if (!s || (i == null ? void 0 : i.length) !== (s == null ? void 0 : s.length) || s != null && s.some((a) => (i == null ? void 0 : i.indexOf(a)) === -1)) {
      this.groupIds = s, this.trackId = -1, this.currentTrack = null;
      const a = this.tracks.filter((h) => !s || s.indexOf(h.groupId) !== -1);
      if (a.length)
        this.selectDefaultTrack && !a.some((h) => h.default) && (this.selectDefaultTrack = !1), a.forEach((h, u) => {
          h.id = u;
        });
      else if (!r && !this.tracksInGroup.length)
        return;
      this.tracksInGroup = a;
      const o = this.hls.config.subtitlePreference;
      if (!r && o) {
        this.selectDefaultTrack = !1;
        const h = Oe(o, a);
        if (h > -1)
          r = a[h];
        else {
          const u = Oe(o, this.tracks);
          r = this.tracks[u];
        }
      }
      let l = this.findTrackId(r);
      l === -1 && r && (l = this.findTrackId(null));
      const c = {
        subtitleTracks: a
      };
      this.log(`Updating subtitle tracks, ${a.length} track(s) found in "${s == null ? void 0 : s.join(",")}" group-id`), this.hls.trigger(p.SUBTITLE_TRACKS_UPDATED, c), l !== -1 && this.trackId === -1 && this.setSubtitleTrack(l);
    } else this.shouldReloadPlaylist(r) && this.setSubtitleTrack(this.trackId);
  }
  findTrackId(e) {
    const t = this.tracksInGroup, s = this.selectDefaultTrack;
    for (let i = 0; i < t.length; i++) {
      const r = t[i];
      if (!(s && !r.default || !s && !e) && (!e || lt(r, e)))
        return i;
    }
    if (e) {
      for (let i = 0; i < t.length; i++) {
        const r = t[i];
        if (dt(e.attrs, r.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"]))
          return i;
      }
      for (let i = 0; i < t.length; i++) {
        const r = t[i];
        if (dt(e.attrs, r.attrs, ["LANGUAGE"]))
          return i;
      }
    }
    return -1;
  }
  findTrackForTextTrack(e) {
    if (e) {
      const t = this.tracksInGroup;
      for (let s = 0; s < t.length; s++) {
        const i = t[s];
        if (Qs(i, e))
          return s;
      }
    }
    return -1;
  }
  onError(e, t) {
    t.fatal || !t.context || t.context.type === j.SUBTITLE_TRACK && t.context.id === this.trackId && (!this.groupIds || this.groupIds.indexOf(t.context.groupId) !== -1) && this.checkRetry(t);
  }
  get allSubtitleTracks() {
    return this.tracks;
  }
  /** get alternate subtitle tracks list from playlist **/
  get subtitleTracks() {
    return this.tracksInGroup;
  }
  /** get/set index of the selected subtitle track (based on index in subtitle track lists) **/
  get subtitleTrack() {
    return this.trackId;
  }
  set subtitleTrack(e) {
    this.selectDefaultTrack = !1, this.setSubtitleTrack(e);
  }
  setSubtitleOption(e) {
    if (this.hls.config.subtitlePreference = e, e) {
      const t = this.allSubtitleTracks;
      if (this.selectDefaultTrack = !1, t.length) {
        const s = this.currentTrack;
        if (s && lt(e, s))
          return s;
        const i = Oe(e, this.tracksInGroup);
        if (i > -1) {
          const r = this.tracksInGroup[i];
          return this.setSubtitleTrack(i), r;
        } else {
          if (s)
            return null;
          {
            const r = Oe(e, t);
            if (r > -1)
              return t[r];
          }
        }
      }
    }
    return null;
  }
  loadPlaylist(e) {
    super.loadPlaylist();
    const t = this.currentTrack;
    if (this.shouldLoadPlaylist(t) && t) {
      const s = t.id, i = t.groupId;
      let r = t.url;
      if (e)
        try {
          r = e.addDirectives(r);
        } catch (a) {
          this.warn(`Could not construct new URL with HLS Delivery Directives: ${a}`);
        }
      this.log(`Loading subtitle playlist for id ${s}`), this.hls.trigger(p.SUBTITLE_TRACK_LOADING, {
        url: r,
        id: s,
        groupId: i,
        deliveryDirectives: e || null
      });
    }
  }
  /**
   * Disables the old subtitleTrack and sets current mode on the next subtitleTrack.
   * This operates on the DOM textTracks.
   * A value of -1 will disable all subtitle tracks.
   */
  toggleTrackModes() {
    const {
      media: e
    } = this;
    if (!e)
      return;
    const t = Ht(e.textTracks), s = this.currentTrack;
    let i;
    if (s && (i = t.filter((r) => Qs(s, r))[0], i || this.warn(`Unable to find subtitle TextTrack with name "${s.name}" and language "${s.lang}"`)), [].slice.call(t).forEach((r) => {
      r.mode !== "disabled" && r !== i && (r.mode = "disabled");
    }), i) {
      const r = this.subtitleDisplay ? "showing" : "hidden";
      i.mode !== r && (i.mode = r);
    }
  }
  /**
   * This method is responsible for validating the subtitle index and periodically reloading if live.
   * Dispatches the SUBTITLE_TRACK_SWITCH event, which instructs the subtitle-stream-controller to load the selected track.
   */
  setSubtitleTrack(e) {
    const t = this.tracksInGroup;
    if (!this.media) {
      this.queuedDefaultTrack = e;
      return;
    }
    if (e < -1 || e >= t.length || !O(e)) {
      this.warn(`Invalid subtitle track id: ${e}`);
      return;
    }
    this.clearTimer(), this.selectDefaultTrack = !1;
    const s = this.currentTrack, i = t[e] || null;
    if (this.trackId = e, this.currentTrack = i, this.toggleTrackModes(), !i) {
      this.hls.trigger(p.SUBTITLE_TRACK_SWITCH, {
        id: e
      });
      return;
    }
    const r = !!i.details && !i.details.live;
    if (e === this.trackId && i === s && r)
      return;
    this.log(`Switching to subtitle-track ${e}` + (i ? ` "${i.name}" lang:${i.lang} group:${i.groupId}` : ""));
    const {
      id: a,
      groupId: o = "",
      name: l,
      type: c,
      url: h
    } = i;
    this.hls.trigger(p.SUBTITLE_TRACK_SWITCH, {
      id: a,
      groupId: o,
      name: l,
      type: c,
      url: h
    });
    const u = this.switchParams(i.url, s == null ? void 0 : s.details, i.details);
    this.loadPlaylist(u);
  }
}
class Lc {
  constructor(e) {
    this.buffers = void 0, this.queues = {
      video: [],
      audio: [],
      audiovideo: []
    }, this.buffers = e;
  }
  append(e, t, s) {
    const i = this.queues[t];
    i.push(e), i.length === 1 && !s && this.executeNext(t);
  }
  appendBlocker(e) {
    return new Promise((t) => {
      const s = {
        execute: t,
        onStart: () => {
        },
        onComplete: () => {
        },
        onError: () => {
        }
      };
      this.append(s, e);
    });
  }
  unblockAudio(e) {
    this.queues.audio[0] === e && this.shiftAndExecuteNext("audio");
  }
  executeNext(e) {
    const t = this.queues[e];
    if (t.length) {
      const s = t[0];
      try {
        s.execute();
      } catch (i) {
        q.warn(`[buffer-operation-queue]: Exception executing "${e}" SourceBuffer operation: ${i}`), s.onError(i);
        const r = this.buffers[e];
        r != null && r.updating || this.shiftAndExecuteNext(e);
      }
    }
  }
  shiftAndExecuteNext(e) {
    this.queues[e].shift(), this.executeNext(e);
  }
  current(e) {
    return this.queues[e][0];
  }
}
const Fr = /(avc[1234]|hvc1|hev1|dvh[1e]|vp09|av01)(?:\.[^.,]+)+/;
class Rc extends qe {
  constructor(e, t) {
    super("buffer-controller", e.logger), this.details = null, this._objectUrl = null, this.operationQueue = void 0, this.listeners = void 0, this.hls = void 0, this.fragmentTracker = void 0, this.bufferCodecEventsExpected = 0, this._bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, this.lastMpegAudioChunk = null, this.blockedAudioAppend = null, this.lastVideoAppendEnd = 0, this.appendSource = void 0, this.appendErrors = {
      audio: 0,
      video: 0,
      audiovideo: 0
    }, this.tracks = {}, this.pendingTracks = {}, this.sourceBuffer = void 0, this._onEndStreaming = (s) => {
      this.hls && this.hls.pauseBuffering();
    }, this._onStartStreaming = (s) => {
      this.hls && this.hls.resumeBuffering();
    }, this._onMediaSourceOpen = () => {
      const {
        media: s,
        mediaSource: i
      } = this;
      if (this.log("Media source opened"), s) {
        s.removeEventListener("emptied", this._onMediaEmptied);
        const r = this.getDurationAndRange();
        r && this.updateMediaSource(r), this.hls.trigger(p.MEDIA_ATTACHED, {
          media: s,
          mediaSource: i
        });
      }
      i && i.removeEventListener("sourceopen", this._onMediaSourceOpen), this.checkPendingTracks();
    }, this._onMediaSourceClose = () => {
      this.log("Media source closed");
    }, this._onMediaSourceEnded = () => {
      this.log("Media source ended");
    }, this._onMediaEmptied = () => {
      const {
        mediaSrc: s,
        _objectUrl: i
      } = this;
      s !== i && this.error(`Media element src was set while attaching MediaSource (${i} > ${s})`);
    }, this.hls = e, this.fragmentTracker = t, this.appendSource = po(Ye(e.config.preferManagedMediaSource)), this._initSourceBuffer(), this.registerListeners();
  }
  hasSourceTypes() {
    return this.getSourceBufferTypes().length > 0 || Object.keys(this.pendingTracks).length > 0;
  }
  destroy() {
    this.unregisterListeners(), this.details = null, this.lastMpegAudioChunk = null, this.hls = this.fragmentTracker = null, this._onMediaSourceOpen = this._onMediaSourceClose = null, this._onMediaSourceEnded = null, this._onStartStreaming = this._onEndStreaming = null;
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(p.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(p.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(p.MANIFEST_LOADING, this.onManifestLoading, this), e.on(p.MANIFEST_PARSED, this.onManifestParsed, this), e.on(p.BUFFER_RESET, this.onBufferReset, this), e.on(p.BUFFER_APPENDING, this.onBufferAppending, this), e.on(p.BUFFER_CODECS, this.onBufferCodecs, this), e.on(p.BUFFER_EOS, this.onBufferEos, this), e.on(p.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(p.LEVEL_UPDATED, this.onLevelUpdated, this), e.on(p.FRAG_PARSED, this.onFragParsed, this), e.on(p.FRAG_CHANGED, this.onFragChanged, this), e.on(p.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(p.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(p.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(p.MANIFEST_LOADING, this.onManifestLoading, this), e.off(p.MANIFEST_PARSED, this.onManifestParsed, this), e.off(p.BUFFER_RESET, this.onBufferReset, this), e.off(p.BUFFER_APPENDING, this.onBufferAppending, this), e.off(p.BUFFER_CODECS, this.onBufferCodecs, this), e.off(p.BUFFER_EOS, this.onBufferEos, this), e.off(p.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(p.LEVEL_UPDATED, this.onLevelUpdated, this), e.off(p.FRAG_PARSED, this.onFragParsed, this), e.off(p.FRAG_CHANGED, this.onFragChanged, this), e.off(p.ERROR, this.onError, this);
  }
  _initSourceBuffer() {
    this.sourceBuffer = {}, this.operationQueue = new Lc(this.sourceBuffer), this.listeners = {
      audio: [],
      video: [],
      audiovideo: []
    }, this.resetAppendErrors(), this.lastMpegAudioChunk = null, this.blockedAudioAppend = null, this.lastVideoAppendEnd = 0;
  }
  onManifestLoading() {
    this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = 0, this.details = null;
  }
  onManifestParsed(e, t) {
    let s = 2;
    (t.audio && !t.video || !t.altAudio) && (s = 1), this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = s, this.log(`${this.bufferCodecEventsExpected} bufferCodec event(s) expected`);
  }
  onMediaAttaching(e, t) {
    const s = this.media = t.media, i = Ye(this.appendSource);
    if (s && i) {
      var r;
      const a = this.mediaSource = new i();
      this.log(`created media source: ${(r = a.constructor) == null ? void 0 : r.name}`), a.addEventListener("sourceopen", this._onMediaSourceOpen), a.addEventListener("sourceended", this._onMediaSourceEnded), a.addEventListener("sourceclose", this._onMediaSourceClose), this.appendSource && (a.addEventListener("startstreaming", this._onStartStreaming), a.addEventListener("endstreaming", this._onEndStreaming));
      const o = this._objectUrl = self.URL.createObjectURL(a);
      if (this.appendSource)
        try {
          s.removeAttribute("src");
          const l = self.ManagedMediaSource;
          s.disableRemotePlayback = s.disableRemotePlayback || l && a instanceof l, Or(s), _c(s, o), s.load();
        } catch {
          s.src = o;
        }
      else
        s.src = o;
      s.addEventListener("emptied", this._onMediaEmptied);
    }
  }
  onMediaDetaching() {
    const {
      media: e,
      mediaSource: t,
      _objectUrl: s
    } = this;
    if (t) {
      if (this.log("media source detaching"), t.readyState === "open")
        try {
          t.endOfStream();
        } catch (i) {
          this.warn(`onMediaDetaching: ${i.message} while calling endOfStream`);
        }
      this.onBufferReset(), t.removeEventListener("sourceopen", this._onMediaSourceOpen), t.removeEventListener("sourceended", this._onMediaSourceEnded), t.removeEventListener("sourceclose", this._onMediaSourceClose), this.appendSource && (t.removeEventListener("startstreaming", this._onStartStreaming), t.removeEventListener("endstreaming", this._onEndStreaming)), this.mediaSource = null, this._objectUrl = null;
    }
    e && (e.removeEventListener("emptied", this._onMediaEmptied), s && self.URL.revokeObjectURL(s), this.mediaSrc === s ? (e.removeAttribute("src"), this.appendSource && Or(e), e.load()) : this.warn("media|source.src was changed by a third party - skip cleanup"), this.media = null), this.bufferCodecEventsExpected = this._bufferCodecEventsTotal, this.pendingTracks = {}, this.tracks = {}, this.hls.trigger(p.MEDIA_DETACHED, void 0);
  }
  onBufferReset() {
    this.getSourceBufferTypes().forEach((e) => {
      this.resetBuffer(e);
    }), this._initSourceBuffer(), this.hls.resumeBuffering();
  }
  resetBuffer(e) {
    const t = this.sourceBuffer[e];
    try {
      if (t) {
        var s;
        this.removeBufferListeners(e), this.sourceBuffer[e] = void 0, (s = this.mediaSource) != null && s.sourceBuffers.length && this.mediaSource.removeSourceBuffer(t);
      }
    } catch (i) {
      this.warn(`onBufferReset ${e}`, i);
    }
  }
  onBufferCodecs(e, t) {
    const s = this.getSourceBufferTypes().length, i = Object.keys(t);
    if (i.forEach((a) => {
      if (s) {
        var o;
        const c = this.tracks[a];
        if (c && typeof ((o = c.buffer) == null ? void 0 : o.changeType) == "function") {
          var l;
          const {
            id: h,
            codec: u,
            levelCodec: d,
            container: g,
            metadata: f
          } = t[a], m = Zi(c.codec, c.levelCodec), y = m == null ? void 0 : m.replace(Fr, "$1");
          let E = Zi(u, d);
          const x = (l = E) == null ? void 0 : l.replace(Fr, "$1");
          if (E && y !== x) {
            a.slice(0, 5) === "audio" && (E = rs(E, this.appendSource));
            const T = `${g};codecs=${E}`;
            this.appendChangeType(a, T), this.log(`switching codec ${m} to ${E}`), this.tracks[a] = {
              buffer: c.buffer,
              codec: u,
              container: g,
              levelCodec: d,
              metadata: f,
              id: h
            };
          }
        }
      } else
        this.pendingTracks[a] = t[a];
    }), s)
      return;
    const r = Math.max(this.bufferCodecEventsExpected - 1, 0);
    this.bufferCodecEventsExpected !== r && (this.log(`${r} bufferCodec event(s) expected ${i.join(",")}`), this.bufferCodecEventsExpected = r), this.mediaSource && this.mediaSource.readyState === "open" && this.checkPendingTracks();
  }
  appendChangeType(e, t) {
    const {
      operationQueue: s
    } = this, i = {
      execute: () => {
        const r = this.sourceBuffer[e];
        r && (this.log(`changing ${e} sourceBuffer type to ${t}`), r.changeType(t)), s.shiftAndExecuteNext(e);
      },
      onStart: () => {
      },
      onComplete: () => {
      },
      onError: (r) => {
        this.warn(`Failed to change ${e} SourceBuffer type`, r);
      }
    };
    s.append(i, e, !!this.pendingTracks[e]);
  }
  blockAudio(e) {
    var t;
    const s = e.start, i = s + e.duration * 0.05;
    if (((t = this.fragmentTracker.getAppendedFrag(s, N.MAIN)) == null ? void 0 : t.gap) === !0)
      return;
    const a = {
      execute: () => {
        var o;
        (this.lastVideoAppendEnd > i || this.sourceBuffer.video && ee.isBuffered(this.sourceBuffer.video, i) || ((o = this.fragmentTracker.getAppendedFrag(i, N.MAIN)) == null ? void 0 : o.gap) === !0) && (this.blockedAudioAppend = null, this.operationQueue.shiftAndExecuteNext("audio"));
      },
      onStart: () => {
      },
      onComplete: () => {
      },
      onError: () => {
      }
    };
    this.blockedAudioAppend = {
      op: a,
      frag: e
    }, this.operationQueue.append(a, "audio", !0);
  }
  unblockAudio() {
    const e = this.blockedAudioAppend;
    e && (this.blockedAudioAppend = null, this.operationQueue.unblockAudio(e.op));
  }
  onBufferAppending(e, t) {
    const {
      operationQueue: s,
      tracks: i
    } = this, {
      data: r,
      type: a,
      parent: o,
      frag: l,
      part: c,
      chunkMeta: h
    } = t, u = h.buffering[a], d = l.sn, g = self.performance.now();
    u.start = g;
    const f = l.stats.buffering, m = c ? c.stats.buffering : null;
    f.start === 0 && (f.start = g), m && m.start === 0 && (m.start = g);
    const y = i.audio;
    let E = !1;
    a === "audio" && (y == null ? void 0 : y.container) === "audio/mpeg" && (E = !this.lastMpegAudioChunk || h.id === 1 || this.lastMpegAudioChunk.sn !== h.sn, this.lastMpegAudioChunk = h);
    const x = this.sourceBuffer.video;
    if (x && d !== "initSegment") {
      const A = c || l, D = this.blockedAudioAppend;
      if (a === "audio" && o !== "main" && !this.blockedAudioAppend) {
        const b = A.start + A.duration * 0.05, C = x.buffered, R = this.operationQueue.current("video");
        !C.length && !R ? this.blockAudio(A) : !R && !ee.isBuffered(x, b) && this.lastVideoAppendEnd < b && this.blockAudio(A);
      } else if (a === "video") {
        const v = A.end;
        if (D) {
          const b = D.frag.start;
          (v > b || v < this.lastVideoAppendEnd || ee.isBuffered(x, b)) && this.unblockAudio();
        }
        this.lastVideoAppendEnd = v;
      }
    }
    const T = (c || l).start, _ = {
      execute: () => {
        if (u.executeStart = self.performance.now(), E) {
          const A = this.sourceBuffer[a];
          if (A) {
            const D = T - A.timestampOffset;
            Math.abs(D) >= 0.1 && (this.log(`Updating audio SourceBuffer timestampOffset to ${T} (delta: ${D}) sn: ${d})`), A.timestampOffset = T);
          }
        }
        this.appendExecutor(r, a);
      },
      onStart: () => {
      },
      onComplete: () => {
        const A = self.performance.now();
        u.executeEnd = u.end = A, f.first === 0 && (f.first = A), m && m.first === 0 && (m.first = A);
        const {
          sourceBuffer: D
        } = this, v = {};
        for (const b in D)
          v[b] = ee.getBuffered(D[b]);
        this.appendErrors[a] = 0, a === "audio" || a === "video" ? this.appendErrors.audiovideo = 0 : (this.appendErrors.audio = 0, this.appendErrors.video = 0), this.hls.trigger(p.BUFFER_APPENDED, {
          type: a,
          frag: l,
          part: c,
          chunkMeta: h,
          parent: l.type,
          timeRanges: v
        });
      },
      onError: (A) => {
        const D = {
          type: $.MEDIA_ERROR,
          parent: l.type,
          details: L.BUFFER_APPEND_ERROR,
          sourceBufferName: a,
          frag: l,
          part: c,
          chunkMeta: h,
          error: A,
          err: A,
          fatal: !1
        };
        if (A.code === DOMException.QUOTA_EXCEEDED_ERR)
          D.details = L.BUFFER_FULL_ERROR;
        else {
          const v = ++this.appendErrors[a];
          D.details = L.BUFFER_APPEND_ERROR, this.warn(`Failed ${v}/${this.hls.config.appendErrorMaxRetry} times to append segment in "${a}" sourceBuffer`), v >= this.hls.config.appendErrorMaxRetry && (D.fatal = !0);
        }
        this.hls.trigger(p.ERROR, D);
      }
    };
    s.append(_, a, !!this.pendingTracks[a]);
  }
  getFlushOp(e, t, s) {
    return {
      execute: () => {
        this.removeExecutor(e, t, s);
      },
      onStart: () => {
      },
      onComplete: () => {
        this.hls.trigger(p.BUFFER_FLUSHED, {
          type: e
        });
      },
      onError: (i) => {
        this.warn(`Failed to remove from ${e} SourceBuffer`, i);
      }
    };
  }
  onBufferFlushing(e, t) {
    const {
      operationQueue: s
    } = this, {
      type: i,
      startOffset: r,
      endOffset: a
    } = t;
    i ? s.append(this.getFlushOp(i, r, a), i) : this.getSourceBufferTypes().forEach((o) => {
      s.append(this.getFlushOp(o, r, a), o);
    });
  }
  onFragParsed(e, t) {
    const {
      frag: s,
      part: i
    } = t, r = [], a = i ? i.elementaryStreams : s.elementaryStreams;
    a[J.AUDIOVIDEO] ? r.push("audiovideo") : (a[J.AUDIO] && r.push("audio"), a[J.VIDEO] && r.push("video"));
    const o = () => {
      const l = self.performance.now();
      s.stats.buffering.end = l, i && (i.stats.buffering.end = l);
      const c = i ? i.stats : s.stats;
      this.hls.trigger(p.FRAG_BUFFERED, {
        frag: s,
        part: i,
        stats: c,
        id: s.type
      });
    };
    r.length === 0 && this.warn(`Fragments must have at least one ElementaryStreamType set. type: ${s.type} level: ${s.level} sn: ${s.sn}`), this.blockBuffers(o, r);
  }
  onFragChanged(e, t) {
    this.trimBuffers();
  }
  // on BUFFER_EOS mark matching sourcebuffer(s) as ended and trigger checkEos()
  // an undefined data.type will mark all buffers as EOS.
  onBufferEos(e, t) {
    t.type === "video" && this.unblockAudio(), this.getSourceBufferTypes().reduce((i, r) => {
      const a = this.sourceBuffer[r];
      return a && (!t.type || t.type === r) && (a.ending = !0, a.ended || (a.ended = !0, this.log(`${r} sourceBuffer now EOS`))), i && !!(!a || a.ended);
    }, !0) && (this.log("Queueing mediaSource.endOfStream()"), this.blockBuffers(() => {
      this.getSourceBufferTypes().forEach((r) => {
        const a = this.sourceBuffer[r];
        a && (a.ending = !1);
      });
      const {
        mediaSource: i
      } = this;
      if (!i || i.readyState !== "open") {
        i && this.log(`Could not call mediaSource.endOfStream(). mediaSource.readyState: ${i.readyState}`);
        return;
      }
      this.log("Calling mediaSource.endOfStream()"), i.endOfStream();
    }));
  }
  onLevelUpdated(e, {
    details: t
  }) {
    if (!t.fragments.length)
      return;
    this.details = t;
    const s = this.getDurationAndRange();
    s && (this.getSourceBufferTypes().length ? this.blockBuffers(() => this.updateMediaSource(s)) : this.updateMediaSource(s));
  }
  onError(e, t) {
    if (t.details === L.BUFFER_APPEND_ERROR && t.frag) {
      var s;
      const i = (s = t.errorAction) == null ? void 0 : s.nextAutoLevel;
      O(i) && i !== t.frag.level && this.resetAppendErrors();
    }
  }
  resetAppendErrors() {
    this.appendErrors = {
      audio: 0,
      video: 0,
      audiovideo: 0
    };
  }
  trimBuffers() {
    const {
      hls: e,
      details: t,
      media: s
    } = this;
    if (!s || t === null || !this.getSourceBufferTypes().length)
      return;
    const r = e.config, a = s.currentTime, o = t.levelTargetDuration, l = t.live && r.liveBackBufferLength !== null ? r.liveBackBufferLength : r.backBufferLength;
    if (O(l) && l > 0) {
      const c = Math.max(l, o), h = Math.floor(a / o) * o - c;
      this.flushBackBuffer(a, o, h);
    }
    if (O(r.frontBufferFlushThreshold) && r.frontBufferFlushThreshold > 0) {
      const c = Math.max(r.maxBufferLength, r.frontBufferFlushThreshold), h = Math.max(c, o), u = Math.floor(a / o) * o + h;
      this.flushFrontBuffer(a, o, u);
    }
  }
  flushBackBuffer(e, t, s) {
    const {
      details: i,
      sourceBuffer: r
    } = this;
    this.getSourceBufferTypes().forEach((o) => {
      const l = r[o];
      if (l) {
        const c = ee.getBuffered(l);
        if (c.length > 0 && s > c.start(0)) {
          if (this.hls.trigger(p.BACK_BUFFER_REACHED, {
            bufferEnd: s
          }), i != null && i.live)
            this.hls.trigger(p.LIVE_BACK_BUFFER_REACHED, {
              bufferEnd: s
            });
          else if (l.ended && c.end(c.length - 1) - e < t * 2) {
            this.log(`Cannot flush ${o} back buffer while SourceBuffer is in ended state`);
            return;
          }
          this.hls.trigger(p.BUFFER_FLUSHING, {
            startOffset: 0,
            endOffset: s,
            type: o
          });
        }
      }
    });
  }
  flushFrontBuffer(e, t, s) {
    const {
      sourceBuffer: i
    } = this;
    this.getSourceBufferTypes().forEach((a) => {
      const o = i[a];
      if (o) {
        const l = ee.getBuffered(o), c = l.length;
        if (c < 2)
          return;
        const h = l.start(c - 1), u = l.end(c - 1);
        if (s > h || e >= h && e <= u)
          return;
        if (o.ended && e - u < 2 * t) {
          this.log(`Cannot flush ${a} front buffer while SourceBuffer is in ended state`);
          return;
        }
        this.hls.trigger(p.BUFFER_FLUSHING, {
          startOffset: h,
          endOffset: 1 / 0,
          type: a
        });
      }
    });
  }
  /**
   * Update Media Source duration to current level duration or override to Infinity if configuration parameter
   * 'liveDurationInfinity` is set to `true`
   * More details: https://github.com/video-dev/hls.js/issues/355
   */
  getDurationAndRange() {
    if (!this.details || !this.media || !this.mediaSource || this.mediaSource.readyState !== "open")
      return null;
    const {
      details: e,
      hls: t,
      media: s,
      mediaSource: i
    } = this, r = e.fragments[0].start + e.totalduration, a = s.duration, o = O(i.duration) ? i.duration : 0;
    if (e.live && t.config.liveDurationInfinity) {
      if (i.duration = 1 / 0, e.fragments.length && e.live && i.setLiveSeekableRange) {
        const c = Math.max(0, e.fragments[0].start), h = Math.max(c, c + e.totalduration);
        return {
          duration: 1 / 0,
          start: c,
          end: h
        };
      }
      return {
        duration: 1 / 0
      };
    } else if (r > o && r > a || !O(a))
      return {
        duration: r
      };
    return null;
  }
  updateMediaSource({
    duration: e,
    start: t,
    end: s
  }) {
    !this.media || !this.mediaSource || this.mediaSource.readyState !== "open" || (O(e) && this.log(`Updating Media Source duration to ${e.toFixed(3)}`), this.mediaSource.duration = e, t !== void 0 && s !== void 0 && (this.log(`Media Source duration is set to ${this.mediaSource.duration}. Setting seekable range to ${t}-${s}.`), this.mediaSource.setLiveSeekableRange(t, s)));
  }
  checkPendingTracks() {
    const {
      bufferCodecEventsExpected: e,
      operationQueue: t,
      pendingTracks: s
    } = this, i = Object.keys(s).length;
    if (i && (!e || i === 2 || "audiovideo" in s)) {
      this.createSourceBuffers(s), this.pendingTracks = {};
      const r = this.getSourceBufferTypes();
      if (r.length)
        this.hls.trigger(p.BUFFER_CREATED, {
          tracks: this.tracks
        }), r.forEach((a) => {
          t.executeNext(a);
        });
      else {
        const a = new Error("could not create source buffer for media codec(s)");
        this.hls.trigger(p.ERROR, {
          type: $.MEDIA_ERROR,
          details: L.BUFFER_INCOMPATIBLE_CODECS_ERROR,
          fatal: !0,
          error: a,
          reason: a.message
        });
      }
    }
  }
  createSourceBuffers(e) {
    const {
      sourceBuffer: t,
      mediaSource: s
    } = this;
    if (!s)
      throw Error("createSourceBuffers called when mediaSource was null");
    for (const r in e)
      if (!t[r]) {
        var i;
        const a = e[r];
        if (!a)
          throw Error(`source buffer exists for track ${r}, however track does not`);
        let o = ((i = a.levelCodec) == null ? void 0 : i.indexOf(",")) === -1 ? a.levelCodec : a.codec;
        o && r.slice(0, 5) === "audio" && (o = rs(o, this.appendSource));
        const l = `${a.container};codecs=${o}`;
        this.log(`creating sourceBuffer(${l})`);
        try {
          const c = t[r] = s.addSourceBuffer(l), h = r;
          this.addBufferListener(h, "updatestart", this._onSBUpdateStart), this.addBufferListener(h, "updateend", this._onSBUpdateEnd), this.addBufferListener(h, "error", this._onSBUpdateError), this.appendSource && this.addBufferListener(h, "bufferedchange", (u, d) => {
            const g = d.removedRanges;
            g != null && g.length && this.hls.trigger(p.BUFFER_FLUSHED, {
              type: r
            });
          }), this.tracks[r] = {
            buffer: c,
            codec: o,
            container: a.container,
            levelCodec: a.levelCodec,
            metadata: a.metadata,
            id: a.id
          };
        } catch (c) {
          this.error(`error while trying to add sourceBuffer: ${c.message}`), this.hls.trigger(p.ERROR, {
            type: $.MEDIA_ERROR,
            details: L.BUFFER_ADD_CODEC_ERROR,
            fatal: !1,
            error: c,
            sourceBufferName: r,
            mimeType: l
          });
        }
      }
  }
  get mediaSrc() {
    var e, t;
    const s = ((e = this.media) == null || (t = e.querySelector) == null ? void 0 : t.call(e, "source")) || this.media;
    return s == null ? void 0 : s.src;
  }
  _onSBUpdateStart(e) {
    const {
      operationQueue: t
    } = this;
    t.current(e).onStart();
  }
  _onSBUpdateEnd(e) {
    var t;
    if (((t = this.mediaSource) == null ? void 0 : t.readyState) === "closed") {
      this.resetBuffer(e);
      return;
    }
    const {
      operationQueue: s
    } = this;
    s.current(e).onComplete(), s.shiftAndExecuteNext(e);
  }
  _onSBUpdateError(e, t) {
    var s;
    const i = new Error(`${e} SourceBuffer error. MediaSource readyState: ${(s = this.mediaSource) == null ? void 0 : s.readyState}`);
    this.error(`${i}`, t), this.hls.trigger(p.ERROR, {
      type: $.MEDIA_ERROR,
      details: L.BUFFER_APPENDING_ERROR,
      sourceBufferName: e,
      error: i,
      fatal: !1
    });
    const r = this.operationQueue.current(e);
    r && r.onError(i);
  }
  // This method must result in an updateend event; if remove is not called, _onSBUpdateEnd must be called manually
  removeExecutor(e, t, s) {
    const {
      media: i,
      mediaSource: r,
      operationQueue: a,
      sourceBuffer: o
    } = this, l = o[e];
    if (!i || !r || !l) {
      this.warn(`Attempting to remove from the ${e} SourceBuffer, but it does not exist`), a.shiftAndExecuteNext(e);
      return;
    }
    const c = O(i.duration) ? i.duration : 1 / 0, h = O(r.duration) ? r.duration : 1 / 0, u = Math.max(0, t), d = Math.min(s, c, h);
    d > u && (!l.ending || l.ended) ? (l.ended = !1, this.log(`Removing [${u},${d}] from the ${e} SourceBuffer`), l.remove(u, d)) : a.shiftAndExecuteNext(e);
  }
  // This method must result in an updateend event; if append is not called, _onSBUpdateEnd must be called manually
  appendExecutor(e, t) {
    const s = this.sourceBuffer[t];
    if (!s) {
      if (!this.pendingTracks[t])
        throw new Error(`Attempting to append to the ${t} SourceBuffer, but it does not exist`);
      return;
    }
    s.ending = !1, s.ended = !1, s.appendBuffer(e);
  }
  // Enqueues an operation to each SourceBuffer queue which, upon execution, resolves a promise. When all promises
  // resolve, the onUnblocked function is executed. Functions calling this method do not need to unblock the queue
  // upon completion, since we already do it here
  blockBuffers(e, t = this.getSourceBufferTypes()) {
    if (!t.length) {
      this.log("Blocking operation requested, but no SourceBuffers exist"), Promise.resolve().then(e);
      return;
    }
    const {
      operationQueue: s
    } = this, i = t.map((a) => s.appendBlocker(a));
    t.length > 1 && !!this.blockedAudioAppend && this.unblockAudio(), Promise.all(i).then((a) => {
      e(), t.forEach((o, l) => {
        const c = this.sourceBuffer[o];
        c != null && c.updating || s.shiftAndExecuteNext(o);
      });
    });
  }
  getSourceBufferTypes() {
    return Object.keys(this.sourceBuffer);
  }
  addBufferListener(e, t, s) {
    const i = this.sourceBuffer[e];
    if (!i)
      return;
    const r = s.bind(this, e);
    this.listeners[e].push({
      event: t,
      listener: r
    }), i.addEventListener(t, r);
  }
  removeBufferListeners(e) {
    const t = this.sourceBuffer[e];
    t && this.listeners[e].forEach((s) => {
      t.removeEventListener(s.event, s.listener);
    });
  }
}
function Or(n) {
  const e = n.querySelectorAll("source");
  [].slice.call(e).forEach((t) => {
    n.removeChild(t);
  });
}
function _c(n, e) {
  const t = self.document.createElement("source");
  t.type = "video/mp4", t.src = e, n.appendChild(t);
}
const bc = {
  42: 225,
  // lowercase a, acute accent
  92: 233,
  // lowercase e, acute accent
  94: 237,
  // lowercase i, acute accent
  95: 243,
  // lowercase o, acute accent
  96: 250,
  // lowercase u, acute accent
  123: 231,
  // lowercase c with cedilla
  124: 247,
  // division symbol
  125: 209,
  // uppercase N tilde
  126: 241,
  // lowercase n tilde
  127: 9608,
  // Full block
  // THIS BLOCK INCLUDES THE 16 EXTENDED (TWO-BYTE) LINE 21 CHARACTERS
  // THAT COME FROM HI BYTE=0x11 AND LOW BETWEEN 0x30 AND 0x3F
  // THIS MEANS THAT \x50 MUST BE ADDED TO THE VALUES
  128: 174,
  // Registered symbol (R)
  129: 176,
  // degree sign
  130: 189,
  // 1/2 symbol
  131: 191,
  // Inverted (open) question mark
  132: 8482,
  // Trademark symbol (TM)
  133: 162,
  // Cents symbol
  134: 163,
  // Pounds sterling
  135: 9834,
  // Music 8'th note
  136: 224,
  // lowercase a, grave accent
  137: 32,
  // transparent space (regular)
  138: 232,
  // lowercase e, grave accent
  139: 226,
  // lowercase a, circumflex accent
  140: 234,
  // lowercase e, circumflex accent
  141: 238,
  // lowercase i, circumflex accent
  142: 244,
  // lowercase o, circumflex accent
  143: 251,
  // lowercase u, circumflex accent
  // THIS BLOCK INCLUDES THE 32 EXTENDED (TWO-BYTE) LINE 21 CHARACTERS
  // THAT COME FROM HI BYTE=0x12 AND LOW BETWEEN 0x20 AND 0x3F
  144: 193,
  // capital letter A with acute
  145: 201,
  // capital letter E with acute
  146: 211,
  // capital letter O with acute
  147: 218,
  // capital letter U with acute
  148: 220,
  // capital letter U with diaresis
  149: 252,
  // lowercase letter U with diaeresis
  150: 8216,
  // opening single quote
  151: 161,
  // inverted exclamation mark
  152: 42,
  // asterisk
  153: 8217,
  // closing single quote
  154: 9473,
  // box drawings heavy horizontal
  155: 169,
  // copyright sign
  156: 8480,
  // Service mark
  157: 8226,
  // (round) bullet
  158: 8220,
  // Left double quotation mark
  159: 8221,
  // Right double quotation mark
  160: 192,
  // uppercase A, grave accent
  161: 194,
  // uppercase A, circumflex
  162: 199,
  // uppercase C with cedilla
  163: 200,
  // uppercase E, grave accent
  164: 202,
  // uppercase E, circumflex
  165: 203,
  // capital letter E with diaresis
  166: 235,
  // lowercase letter e with diaresis
  167: 206,
  // uppercase I, circumflex
  168: 207,
  // uppercase I, with diaresis
  169: 239,
  // lowercase i, with diaresis
  170: 212,
  // uppercase O, circumflex
  171: 217,
  // uppercase U, grave accent
  172: 249,
  // lowercase u, grave accent
  173: 219,
  // uppercase U, circumflex
  174: 171,
  // left-pointing double angle quotation mark
  175: 187,
  // right-pointing double angle quotation mark
  // THIS BLOCK INCLUDES THE 32 EXTENDED (TWO-BYTE) LINE 21 CHARACTERS
  // THAT COME FROM HI BYTE=0x13 AND LOW BETWEEN 0x20 AND 0x3F
  176: 195,
  // Uppercase A, tilde
  177: 227,
  // Lowercase a, tilde
  178: 205,
  // Uppercase I, acute accent
  179: 204,
  // Uppercase I, grave accent
  180: 236,
  // Lowercase i, grave accent
  181: 210,
  // Uppercase O, grave accent
  182: 242,
  // Lowercase o, grave accent
  183: 213,
  // Uppercase O, tilde
  184: 245,
  // Lowercase o, tilde
  185: 123,
  // Open curly brace
  186: 125,
  // Closing curly brace
  187: 92,
  // Backslash
  188: 94,
  // Caret
  189: 95,
  // Underscore
  190: 124,
  // Pipe (vertical line)
  191: 8764,
  // Tilde operator
  192: 196,
  // Uppercase A, umlaut
  193: 228,
  // Lowercase A, umlaut
  194: 214,
  // Uppercase O, umlaut
  195: 246,
  // Lowercase o, umlaut
  196: 223,
  // Esszett (sharp S)
  197: 165,
  // Yen symbol
  198: 164,
  // Generic currency sign
  199: 9475,
  // Box drawings heavy vertical
  200: 197,
  // Uppercase A, ring
  201: 229,
  // Lowercase A, ring
  202: 216,
  // Uppercase O, stroke
  203: 248,
  // Lowercase o, strok
  204: 9487,
  // Box drawings heavy down and right
  205: 9491,
  // Box drawings heavy down and left
  206: 9495,
  // Box drawings heavy up and right
  207: 9499
  // Box drawings heavy up and left
}, Zn = (n) => String.fromCharCode(bc[n] || n), be = 15, Ne = 100, Ic = {
  17: 1,
  18: 3,
  21: 5,
  22: 7,
  23: 9,
  16: 11,
  19: 12,
  20: 14
}, Dc = {
  17: 2,
  18: 4,
  21: 6,
  22: 8,
  23: 10,
  19: 13,
  20: 15
}, Cc = {
  25: 1,
  26: 3,
  29: 5,
  30: 7,
  31: 9,
  24: 11,
  27: 12,
  28: 14
}, wc = {
  25: 2,
  26: 4,
  29: 6,
  30: 8,
  31: 10,
  27: 13,
  28: 15
}, kc = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
class Pc {
  constructor() {
    this.time = null, this.verboseLevel = 0;
  }
  log(e, t) {
    if (this.verboseLevel >= e) {
      const s = typeof t == "function" ? t() : t;
      q.log(`${this.time} [${e}] ${s}`);
    }
  }
}
const Xe = function(e) {
  const t = [];
  for (let s = 0; s < e.length; s++)
    t.push(e[s].toString(16));
  return t;
};
class ea {
  constructor() {
    this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1;
  }
  reset() {
    this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1;
  }
  setStyles(e) {
    const t = ["foreground", "underline", "italics", "background", "flash"];
    for (let s = 0; s < t.length; s++) {
      const i = t[s];
      e.hasOwnProperty(i) && (this[i] = e[i]);
    }
  }
  isDefault() {
    return this.foreground === "white" && !this.underline && !this.italics && this.background === "black" && !this.flash;
  }
  equals(e) {
    return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash;
  }
  copy(e) {
    this.foreground = e.foreground, this.underline = e.underline, this.italics = e.italics, this.background = e.background, this.flash = e.flash;
  }
  toString() {
    return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash;
  }
}
class Fc {
  constructor() {
    this.uchar = " ", this.penState = new ea();
  }
  reset() {
    this.uchar = " ", this.penState.reset();
  }
  setChar(e, t) {
    this.uchar = e, this.penState.copy(t);
  }
  setPenState(e) {
    this.penState.copy(e);
  }
  equals(e) {
    return this.uchar === e.uchar && this.penState.equals(e.penState);
  }
  copy(e) {
    this.uchar = e.uchar, this.penState.copy(e.penState);
  }
  isEmpty() {
    return this.uchar === " " && this.penState.isDefault();
  }
}
class Oc {
  constructor(e) {
    this.chars = [], this.pos = 0, this.currPenState = new ea(), this.cueStartTime = null, this.logger = void 0;
    for (let t = 0; t < Ne; t++)
      this.chars.push(new Fc());
    this.logger = e;
  }
  equals(e) {
    for (let t = 0; t < Ne; t++)
      if (!this.chars[t].equals(e.chars[t]))
        return !1;
    return !0;
  }
  copy(e) {
    for (let t = 0; t < Ne; t++)
      this.chars[t].copy(e.chars[t]);
  }
  isEmpty() {
    let e = !0;
    for (let t = 0; t < Ne; t++)
      if (!this.chars[t].isEmpty()) {
        e = !1;
        break;
      }
    return e;
  }
  /**
   *  Set the cursor to a valid column.
   */
  setCursor(e) {
    this.pos !== e && (this.pos = e), this.pos < 0 ? (this.logger.log(3, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > Ne && (this.logger.log(3, "Too large cursor position " + this.pos), this.pos = Ne);
  }
  /**
   * Move the cursor relative to current position.
   */
  moveCursor(e) {
    const t = this.pos + e;
    if (e > 1)
      for (let s = this.pos + 1; s < t + 1; s++)
        this.chars[s].setPenState(this.currPenState);
    this.setCursor(t);
  }
  /**
   * Backspace, move one step back and clear character.
   */
  backSpace() {
    this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState);
  }
  insertChar(e) {
    e >= 144 && this.backSpace();
    const t = Zn(e);
    if (this.pos >= Ne) {
      this.logger.log(0, () => "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!");
      return;
    }
    this.chars[this.pos].setChar(t, this.currPenState), this.moveCursor(1);
  }
  clearFromPos(e) {
    let t;
    for (t = e; t < Ne; t++)
      this.chars[t].reset();
  }
  clear() {
    this.clearFromPos(0), this.pos = 0, this.currPenState.reset();
  }
  clearToEndOfRow() {
    this.clearFromPos(this.pos);
  }
  getTextString() {
    const e = [];
    let t = !0;
    for (let s = 0; s < Ne; s++) {
      const i = this.chars[s].uchar;
      i !== " " && (t = !1), e.push(i);
    }
    return t ? "" : e.join("");
  }
  setPenStyles(e) {
    this.currPenState.setStyles(e), this.chars[this.pos].setPenState(this.currPenState);
  }
}
class Ds {
  constructor(e) {
    this.rows = [], this.currRow = be - 1, this.nrRollUpRows = null, this.lastOutputScreen = null, this.logger = void 0;
    for (let t = 0; t < be; t++)
      this.rows.push(new Oc(e));
    this.logger = e;
  }
  reset() {
    for (let e = 0; e < be; e++)
      this.rows[e].clear();
    this.currRow = be - 1;
  }
  equals(e) {
    let t = !0;
    for (let s = 0; s < be; s++)
      if (!this.rows[s].equals(e.rows[s])) {
        t = !1;
        break;
      }
    return t;
  }
  copy(e) {
    for (let t = 0; t < be; t++)
      this.rows[t].copy(e.rows[t]);
  }
  isEmpty() {
    let e = !0;
    for (let t = 0; t < be; t++)
      if (!this.rows[t].isEmpty()) {
        e = !1;
        break;
      }
    return e;
  }
  backSpace() {
    this.rows[this.currRow].backSpace();
  }
  clearToEndOfRow() {
    this.rows[this.currRow].clearToEndOfRow();
  }
  /**
   * Insert a character (without styling) in the current row.
   */
  insertChar(e) {
    this.rows[this.currRow].insertChar(e);
  }
  setPen(e) {
    this.rows[this.currRow].setPenStyles(e);
  }
  moveCursor(e) {
    this.rows[this.currRow].moveCursor(e);
  }
  setCursor(e) {
    this.logger.log(2, "setCursor: " + e), this.rows[this.currRow].setCursor(e);
  }
  setPAC(e) {
    this.logger.log(2, () => "pacData = " + JSON.stringify(e));
    let t = e.row - 1;
    if (this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== t) {
      for (let o = 0; o < be; o++)
        this.rows[o].clear();
      const r = this.currRow + 1 - this.nrRollUpRows, a = this.lastOutputScreen;
      if (a) {
        const o = a.rows[r].cueStartTime, l = this.logger.time;
        if (o !== null && l !== null && o < l)
          for (let c = 0; c < this.nrRollUpRows; c++)
            this.rows[t - this.nrRollUpRows + c + 1].copy(a.rows[r + c]);
      }
    }
    this.currRow = t;
    const s = this.rows[this.currRow];
    if (e.indent !== null) {
      const r = e.indent, a = Math.max(r - 1, 0);
      s.setCursor(e.indent), e.color = s.chars[a].penState.foreground;
    }
    const i = {
      foreground: e.color,
      underline: e.underline,
      italics: e.italics,
      background: "black",
      flash: !1
    };
    this.setPen(i);
  }
  /**
   * Set background/extra foreground, but first do back_space, and then insert space (backwards compatibility).
   */
  setBkgData(e) {
    this.logger.log(2, () => "bkgData = " + JSON.stringify(e)), this.backSpace(), this.setPen(e), this.insertChar(32);
  }
  setRollUpRows(e) {
    this.nrRollUpRows = e;
  }
  rollUp() {
    if (this.nrRollUpRows === null) {
      this.logger.log(3, "roll_up but nrRollUpRows not set yet");
      return;
    }
    this.logger.log(1, () => this.getDisplayText());
    const e = this.currRow + 1 - this.nrRollUpRows, t = this.rows.splice(e, 1)[0];
    t.clear(), this.rows.splice(this.currRow, 0, t), this.logger.log(2, "Rolling up");
  }
  /**
   * Get all non-empty rows with as unicode text.
   */
  getDisplayText(e) {
    e = e || !1;
    const t = [];
    let s = "", i = -1;
    for (let r = 0; r < be; r++) {
      const a = this.rows[r].getTextString();
      a && (i = r + 1, e ? t.push("Row " + i + ": '" + a + "'") : t.push(a.trim()));
    }
    return t.length > 0 && (e ? s = "[" + t.join(" | ") + "]" : s = t.join(`
`)), s;
  }
  getTextAndFormat() {
    return this.rows;
  }
}
class Mr {
  constructor(e, t, s) {
    this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chNr = e, this.outputFilter = t, this.mode = null, this.verbose = 0, this.displayedMemory = new Ds(s), this.nonDisplayedMemory = new Ds(s), this.lastOutputScreen = new Ds(s), this.currRollUpRow = this.displayedMemory.rows[be - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.logger = s;
  }
  reset() {
    this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.outputFilter.reset(), this.currRollUpRow = this.displayedMemory.rows[be - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null;
  }
  getHandler() {
    return this.outputFilter;
  }
  setHandler(e) {
    this.outputFilter = e;
  }
  setPAC(e) {
    this.writeScreen.setPAC(e);
  }
  setBkgData(e) {
    this.writeScreen.setBkgData(e);
  }
  setMode(e) {
    e !== this.mode && (this.mode = e, this.logger.log(2, () => "MODE=" + e), this.mode === "MODE_POP-ON" ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), this.mode !== "MODE_ROLL-UP" && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = e);
  }
  insertChars(e) {
    for (let s = 0; s < e.length; s++)
      this.writeScreen.insertChar(e[s]);
    const t = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
    this.logger.log(2, () => t + ": " + this.writeScreen.getDisplayText(!0)), (this.mode === "MODE_PAINT-ON" || this.mode === "MODE_ROLL-UP") && (this.logger.log(1, () => "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate());
  }
  ccRCL() {
    this.logger.log(2, "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON");
  }
  ccBS() {
    this.logger.log(2, "BS - BackSpace"), this.mode !== "MODE_TEXT" && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate());
  }
  ccAOF() {
  }
  ccAON() {
  }
  ccDER() {
    this.logger.log(2, "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate();
  }
  ccRU(e) {
    this.logger.log(2, "RU(" + e + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(e);
  }
  ccFON() {
    this.logger.log(2, "FON - Flash On"), this.writeScreen.setPen({
      flash: !0
    });
  }
  ccRDC() {
    this.logger.log(2, "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON");
  }
  ccTR() {
    this.logger.log(2, "TR"), this.setMode("MODE_TEXT");
  }
  ccRTD() {
    this.logger.log(2, "RTD"), this.setMode("MODE_TEXT");
  }
  ccEDM() {
    this.logger.log(2, "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0);
  }
  ccCR() {
    this.logger.log(2, "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0);
  }
  ccENM() {
    this.logger.log(2, "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset();
  }
  ccEOC() {
    if (this.logger.log(2, "EOC - End Of Caption"), this.mode === "MODE_POP-ON") {
      const e = this.displayedMemory;
      this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = e, this.writeScreen = this.nonDisplayedMemory, this.logger.log(1, () => "DISP: " + this.displayedMemory.getDisplayText());
    }
    this.outputDataUpdate(!0);
  }
  ccTO(e) {
    this.logger.log(2, "TO(" + e + ") - Tab Offset"), this.writeScreen.moveCursor(e);
  }
  ccMIDROW(e) {
    const t = {
      flash: !1
    };
    if (t.underline = e % 2 === 1, t.italics = e >= 46, t.italics)
      t.foreground = "white";
    else {
      const s = Math.floor(e / 2) - 16, i = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"];
      t.foreground = i[s];
    }
    this.logger.log(2, "MIDROW: " + JSON.stringify(t)), this.writeScreen.setPen(t);
  }
  outputDataUpdate(e = !1) {
    const t = this.logger.time;
    t !== null && this.outputFilter && (this.cueStartTime === null && !this.displayedMemory.isEmpty() ? this.cueStartTime = t : this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen), e && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : t), this.lastOutputScreen.copy(this.displayedMemory));
  }
  cueSplitAtTime(e) {
    this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory), this.cueStartTime = e));
  }
}
class Nr {
  constructor(e, t, s) {
    this.channels = void 0, this.currentChannel = 0, this.cmdHistory = Nc(), this.logger = void 0;
    const i = this.logger = new Pc();
    this.channels = [null, new Mr(e, t, i), new Mr(e + 1, s, i)];
  }
  getHandler(e) {
    return this.channels[e].getHandler();
  }
  setHandler(e, t) {
    this.channels[e].setHandler(t);
  }
  /**
   * Add data for time t in forms of list of bytes (unsigned ints). The bytes are treated as pairs.
   */
  addData(e, t) {
    this.logger.time = e;
    for (let s = 0; s < t.length; s += 2) {
      const i = t[s] & 127, r = t[s + 1] & 127;
      let a = !1, o = null;
      if (i === 0 && r === 0)
        continue;
      this.logger.log(3, () => "[" + Xe([t[s], t[s + 1]]) + "] -> (" + Xe([i, r]) + ")");
      const l = this.cmdHistory;
      if (i >= 16 && i <= 31) {
        if (Mc(i, r, l)) {
          Bt(null, null, l), this.logger.log(3, () => "Repeated command (" + Xe([i, r]) + ") is dropped");
          continue;
        }
        Bt(i, r, this.cmdHistory), a = this.parseCmd(i, r), a || (a = this.parseMidrow(i, r)), a || (a = this.parsePAC(i, r)), a || (a = this.parseBackgroundAttributes(i, r));
      } else
        Bt(null, null, l);
      if (!a && (o = this.parseChars(i, r), o)) {
        const h = this.currentChannel;
        h && h > 0 ? this.channels[h].insertChars(o) : this.logger.log(2, "No channel found yet. TEXT-MODE?");
      }
      !a && !o && this.logger.log(2, () => "Couldn't parse cleaned data " + Xe([i, r]) + " orig: " + Xe([t[s], t[s + 1]]));
    }
  }
  /**
   * Parse Command.
   * @returns True if a command was found
   */
  parseCmd(e, t) {
    const s = (e === 20 || e === 28 || e === 21 || e === 29) && t >= 32 && t <= 47, i = (e === 23 || e === 31) && t >= 33 && t <= 35;
    if (!(s || i))
      return !1;
    const r = e === 20 || e === 21 || e === 23 ? 1 : 2, a = this.channels[r];
    return e === 20 || e === 21 || e === 28 || e === 29 ? t === 32 ? a.ccRCL() : t === 33 ? a.ccBS() : t === 34 ? a.ccAOF() : t === 35 ? a.ccAON() : t === 36 ? a.ccDER() : t === 37 ? a.ccRU(2) : t === 38 ? a.ccRU(3) : t === 39 ? a.ccRU(4) : t === 40 ? a.ccFON() : t === 41 ? a.ccRDC() : t === 42 ? a.ccTR() : t === 43 ? a.ccRTD() : t === 44 ? a.ccEDM() : t === 45 ? a.ccCR() : t === 46 ? a.ccENM() : t === 47 && a.ccEOC() : a.ccTO(t - 32), this.currentChannel = r, !0;
  }
  /**
   * Parse midrow styling command
   */
  parseMidrow(e, t) {
    let s = 0;
    if ((e === 17 || e === 25) && t >= 32 && t <= 47) {
      if (e === 17 ? s = 1 : s = 2, s !== this.currentChannel)
        return this.logger.log(0, "Mismatch channel in midrow parsing"), !1;
      const i = this.channels[s];
      return i ? (i.ccMIDROW(t), this.logger.log(3, () => "MIDROW (" + Xe([e, t]) + ")"), !0) : !1;
    }
    return !1;
  }
  /**
   * Parse Preable Access Codes (Table 53).
   * @returns {Boolean} Tells if PAC found
   */
  parsePAC(e, t) {
    let s;
    const i = (e >= 17 && e <= 23 || e >= 25 && e <= 31) && t >= 64 && t <= 127, r = (e === 16 || e === 24) && t >= 64 && t <= 95;
    if (!(i || r))
      return !1;
    const a = e <= 23 ? 1 : 2;
    t >= 64 && t <= 95 ? s = a === 1 ? Ic[e] : Cc[e] : s = a === 1 ? Dc[e] : wc[e];
    const o = this.channels[a];
    return o ? (o.setPAC(this.interpretPAC(s, t)), this.currentChannel = a, !0) : !1;
  }
  /**
   * Interpret the second byte of the pac, and return the information.
   * @returns pacData with style parameters
   */
  interpretPAC(e, t) {
    let s;
    const i = {
      color: null,
      italics: !1,
      indent: null,
      underline: !1,
      row: e
    };
    return t > 95 ? s = t - 96 : s = t - 64, i.underline = (s & 1) === 1, s <= 13 ? i.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(s / 2)] : s <= 15 ? (i.italics = !0, i.color = "white") : i.indent = Math.floor((s - 16) / 2) * 4, i;
  }
  /**
   * Parse characters.
   * @returns An array with 1 to 2 codes corresponding to chars, if found. null otherwise.
   */
  parseChars(e, t) {
    let s, i = null, r = null;
    if (e >= 25 ? (s = 2, r = e - 8) : (s = 1, r = e), r >= 17 && r <= 19) {
      let a;
      r === 17 ? a = t + 80 : r === 18 ? a = t + 112 : a = t + 144, this.logger.log(2, () => "Special char '" + Zn(a) + "' in channel " + s), i = [a];
    } else e >= 32 && e <= 127 && (i = t === 0 ? [e] : [e, t]);
    return i && this.logger.log(3, () => "Char codes =  " + Xe(i).join(",")), i;
  }
  /**
   * Parse extended background attributes as well as new foreground color black.
   * @returns True if background attributes are found
   */
  parseBackgroundAttributes(e, t) {
    const s = (e === 16 || e === 24) && t >= 32 && t <= 47, i = (e === 23 || e === 31) && t >= 45 && t <= 47;
    if (!(s || i))
      return !1;
    let r;
    const a = {};
    e === 16 || e === 24 ? (r = Math.floor((t - 32) / 2), a.background = kc[r], t % 2 === 1 && (a.background = a.background + "_semi")) : t === 45 ? a.background = "transparent" : (a.foreground = "black", t === 47 && (a.underline = !0));
    const o = e <= 23 ? 1 : 2;
    return this.channels[o].setBkgData(a), !0;
  }
  /**
   * Reset state of parser and its channels.
   */
  reset() {
    for (let e = 0; e < Object.keys(this.channels).length; e++) {
      const t = this.channels[e];
      t && t.reset();
    }
    Bt(null, null, this.cmdHistory);
  }
  /**
   * Trigger the generation of a cue, and the start of a new one if displayScreens are not empty.
   */
  cueSplitAtTime(e) {
    for (let t = 0; t < this.channels.length; t++) {
      const s = this.channels[t];
      s && s.cueSplitAtTime(e);
    }
  }
}
function Bt(n, e, t) {
  t.a = n, t.b = e;
}
function Mc(n, e, t) {
  return t.a === n && t.b === e;
}
function Nc() {
  return {
    a: null,
    b: null
  };
}
class $t {
  constructor(e, t) {
    this.timelineController = void 0, this.cueRanges = [], this.trackName = void 0, this.startTime = null, this.endTime = null, this.screen = null, this.timelineController = e, this.trackName = t;
  }
  dispatchCue() {
    this.startTime !== null && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), this.startTime = null);
  }
  newCue(e, t, s) {
    (this.startTime === null || this.startTime > e) && (this.startTime = e), this.endTime = t, this.screen = s, this.timelineController.createCaptionsTrack(this.trackName);
  }
  reset() {
    this.cueRanges = [], this.startTime = null;
  }
}
var Li = function() {
  if (es != null && es.VTTCue)
    return self.VTTCue;
  const n = ["", "lr", "rl"], e = ["start", "middle", "end", "left", "right"];
  function t(o, l) {
    if (typeof l != "string" || !Array.isArray(o))
      return !1;
    const c = l.toLowerCase();
    return ~o.indexOf(c) ? c : !1;
  }
  function s(o) {
    return t(n, o);
  }
  function i(o) {
    return t(e, o);
  }
  function r(o, ...l) {
    let c = 1;
    for (; c < arguments.length; c++) {
      const h = arguments[c];
      for (const u in h)
        o[u] = h[u];
    }
    return o;
  }
  function a(o, l, c) {
    const h = this, u = {
      enumerable: !0
    };
    h.hasBeenReset = !1;
    let d = "", g = !1, f = o, m = l, y = c, E = null, x = "", T = !0, _ = "auto", A = "start", D = 50, v = "middle", b = 50, C = "middle";
    Object.defineProperty(h, "id", r({}, u, {
      get: function() {
        return d;
      },
      set: function(R) {
        d = "" + R;
      }
    })), Object.defineProperty(h, "pauseOnExit", r({}, u, {
      get: function() {
        return g;
      },
      set: function(R) {
        g = !!R;
      }
    })), Object.defineProperty(h, "startTime", r({}, u, {
      get: function() {
        return f;
      },
      set: function(R) {
        if (typeof R != "number")
          throw new TypeError("Start time must be set to a number.");
        f = R, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(h, "endTime", r({}, u, {
      get: function() {
        return m;
      },
      set: function(R) {
        if (typeof R != "number")
          throw new TypeError("End time must be set to a number.");
        m = R, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(h, "text", r({}, u, {
      get: function() {
        return y;
      },
      set: function(R) {
        y = "" + R, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(h, "region", r({}, u, {
      get: function() {
        return E;
      },
      set: function(R) {
        E = R, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(h, "vertical", r({}, u, {
      get: function() {
        return x;
      },
      set: function(R) {
        const w = s(R);
        if (w === !1)
          throw new SyntaxError("An invalid or illegal string was specified.");
        x = w, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(h, "snapToLines", r({}, u, {
      get: function() {
        return T;
      },
      set: function(R) {
        T = !!R, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(h, "line", r({}, u, {
      get: function() {
        return _;
      },
      set: function(R) {
        if (typeof R != "number" && R !== "auto")
          throw new SyntaxError("An invalid number or illegal string was specified.");
        _ = R, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(h, "lineAlign", r({}, u, {
      get: function() {
        return A;
      },
      set: function(R) {
        const w = i(R);
        if (!w)
          throw new SyntaxError("An invalid or illegal string was specified.");
        A = w, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(h, "position", r({}, u, {
      get: function() {
        return D;
      },
      set: function(R) {
        if (R < 0 || R > 100)
          throw new Error("Position must be between 0 and 100.");
        D = R, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(h, "positionAlign", r({}, u, {
      get: function() {
        return v;
      },
      set: function(R) {
        const w = i(R);
        if (!w)
          throw new SyntaxError("An invalid or illegal string was specified.");
        v = w, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(h, "size", r({}, u, {
      get: function() {
        return b;
      },
      set: function(R) {
        if (R < 0 || R > 100)
          throw new Error("Size must be between 0 and 100.");
        b = R, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(h, "align", r({}, u, {
      get: function() {
        return C;
      },
      set: function(R) {
        const w = i(R);
        if (!w)
          throw new SyntaxError("An invalid or illegal string was specified.");
        C = w, this.hasBeenReset = !0;
      }
    })), h.displayState = void 0;
  }
  return a.prototype.getCueAsHTML = function() {
    return self.WebVTT.convertCueToDOMTree(self, this.text);
  }, a;
}();
class Uc {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  decode(e, t) {
    if (!e)
      return "";
    if (typeof e != "string")
      throw new Error("Error - expected string data.");
    return decodeURIComponent(encodeURIComponent(e));
  }
}
function ta(n) {
  function e(s, i, r, a) {
    return (s | 0) * 3600 + (i | 0) * 60 + (r | 0) + parseFloat(a || 0);
  }
  const t = n.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
  return t ? parseFloat(t[2]) > 59 ? e(t[2], t[3], 0, t[4]) : e(t[1], t[2], t[3], t[4]) : null;
}
class Bc {
  constructor() {
    this.values = /* @__PURE__ */ Object.create(null);
  }
  // Only accept the first assignment to any key.
  set(e, t) {
    !this.get(e) && t !== "" && (this.values[e] = t);
  }
  // Return the value for a key, or a default value.
  // If 'defaultKey' is passed then 'dflt' is assumed to be an object with
  // a number of possible default values as properties where 'defaultKey' is
  // the key of the property that will be chosen; otherwise it's assumed to be
  // a single value.
  get(e, t, s) {
    return s ? this.has(e) ? this.values[e] : t[s] : this.has(e) ? this.values[e] : t;
  }
  // Check whether we have a value for a key.
  has(e) {
    return e in this.values;
  }
  // Accept a setting if its one of the given alternatives.
  alt(e, t, s) {
    for (let i = 0; i < s.length; ++i)
      if (t === s[i]) {
        this.set(e, t);
        break;
      }
  }
  // Accept a setting if its a valid (signed) integer.
  integer(e, t) {
    /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10));
  }
  // Accept a setting if its a valid percentage.
  percent(e, t) {
    if (/^([\d]{1,3})(\.[\d]*)?%$/.test(t)) {
      const s = parseFloat(t);
      if (s >= 0 && s <= 100)
        return this.set(e, s), !0;
    }
    return !1;
  }
}
function sa(n, e, t, s) {
  const i = s ? n.split(s) : [n];
  for (const r in i) {
    if (typeof i[r] != "string")
      continue;
    const a = i[r].split(t);
    if (a.length !== 2)
      continue;
    const o = a[0], l = a[1];
    e(o, l);
  }
}
const Js = new Li(0, 0, ""), Gt = Js.align === "middle" ? "middle" : "center";
function $c(n, e, t) {
  const s = n;
  function i() {
    const o = ta(n);
    if (o === null)
      throw new Error("Malformed timestamp: " + s);
    return n = n.replace(/^[^\sa-zA-Z-]+/, ""), o;
  }
  function r(o, l) {
    const c = new Bc();
    sa(o, function(d, g) {
      let f;
      switch (d) {
        case "region":
          for (let m = t.length - 1; m >= 0; m--)
            if (t[m].id === g) {
              c.set(d, t[m].region);
              break;
            }
          break;
        case "vertical":
          c.alt(d, g, ["rl", "lr"]);
          break;
        case "line":
          f = g.split(","), c.integer(d, f[0]), c.percent(d, f[0]) && c.set("snapToLines", !1), c.alt(d, f[0], ["auto"]), f.length === 2 && c.alt("lineAlign", f[1], ["start", Gt, "end"]);
          break;
        case "position":
          f = g.split(","), c.percent(d, f[0]), f.length === 2 && c.alt("positionAlign", f[1], ["start", Gt, "end", "line-left", "line-right", "auto"]);
          break;
        case "size":
          c.percent(d, g);
          break;
        case "align":
          c.alt(d, g, ["start", Gt, "end", "left", "right"]);
          break;
      }
    }, /:/, /\s/), l.region = c.get("region", null), l.vertical = c.get("vertical", "");
    let h = c.get("line", "auto");
    h === "auto" && Js.line === -1 && (h = -1), l.line = h, l.lineAlign = c.get("lineAlign", "start"), l.snapToLines = c.get("snapToLines", !0), l.size = c.get("size", 100), l.align = c.get("align", Gt);
    let u = c.get("position", "auto");
    u === "auto" && Js.position === 50 && (u = l.align === "start" || l.align === "left" ? 0 : l.align === "end" || l.align === "right" ? 100 : 50), l.position = u;
  }
  function a() {
    n = n.replace(/^\s+/, "");
  }
  if (a(), e.startTime = i(), a(), n.slice(0, 3) !== "-->")
    throw new Error("Malformed time stamp (time stamps must be separated by '-->'): " + s);
  n = n.slice(3), a(), e.endTime = i(), a(), r(n, e);
}
function ia(n) {
  return n.replace(/<br(?: \/)?>/gi, `
`);
}
class Gc {
  constructor() {
    this.state = "INITIAL", this.buffer = "", this.decoder = new Uc(), this.regionList = [], this.cue = null, this.oncue = void 0, this.onparsingerror = void 0, this.onflush = void 0;
  }
  parse(e) {
    const t = this;
    e && (t.buffer += t.decoder.decode(e, {
      stream: !0
    }));
    function s() {
      let r = t.buffer, a = 0;
      for (r = ia(r); a < r.length && r[a] !== "\r" && r[a] !== `
`; )
        ++a;
      const o = r.slice(0, a);
      return r[a] === "\r" && ++a, r[a] === `
` && ++a, t.buffer = r.slice(a), o;
    }
    function i(r) {
      sa(r, function(a, o) {
      }, /:/);
    }
    try {
      let r = "";
      if (t.state === "INITIAL") {
        if (!/\r\n|\n/.test(t.buffer))
          return this;
        r = s();
        const o = r.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
        if (!(o != null && o[0]))
          throw new Error("Malformed WebVTT signature.");
        t.state = "HEADER";
      }
      let a = !1;
      for (; t.buffer; ) {
        if (!/\r\n|\n/.test(t.buffer))
          return this;
        switch (a ? a = !1 : r = s(), t.state) {
          case "HEADER":
            /:/.test(r) ? i(r) : r || (t.state = "ID");
            continue;
          case "NOTE":
            r || (t.state = "ID");
            continue;
          case "ID":
            if (/^NOTE($|[ \t])/.test(r)) {
              t.state = "NOTE";
              break;
            }
            if (!r)
              continue;
            if (t.cue = new Li(0, 0, ""), t.state = "CUE", r.indexOf("-->") === -1) {
              t.cue.id = r;
              continue;
            }
          case "CUE":
            if (!t.cue) {
              t.state = "BADCUE";
              continue;
            }
            try {
              $c(r, t.cue, t.regionList);
            } catch {
              t.cue = null, t.state = "BADCUE";
              continue;
            }
            t.state = "CUETEXT";
            continue;
          case "CUETEXT":
            {
              const o = r.indexOf("-->") !== -1;
              if (!r || o && (a = !0)) {
                t.oncue && t.cue && t.oncue(t.cue), t.cue = null, t.state = "ID";
                continue;
              }
              if (t.cue === null)
                continue;
              t.cue.text && (t.cue.text += `
`), t.cue.text += r;
            }
            continue;
          case "BADCUE":
            r || (t.state = "ID");
        }
      }
    } catch {
      t.state === "CUETEXT" && t.cue && t.oncue && t.oncue(t.cue), t.cue = null, t.state = t.state === "INITIAL" ? "BADWEBVTT" : "BADCUE";
    }
    return this;
  }
  flush() {
    const e = this;
    try {
      if ((e.cue || e.state === "HEADER") && (e.buffer += `

`, e.parse()), e.state === "INITIAL" || e.state === "BADWEBVTT")
        throw new Error("Malformed WebVTT signature.");
    } catch (t) {
      e.onparsingerror && e.onparsingerror(t);
    }
    return e.onflush && e.onflush(), this;
  }
}
function Cs(n) {
  let e = 5381, t = n.length;
  for (; t; )
    e = e * 33 ^ n.charCodeAt(--t);
  return (e >>> 0).toString();
}
const Kc = /\r\n|\n\r|\n|\r/g, ws = function(e, t, s = 0) {
  return e.slice(s, s + t.length) === t;
}, Vc = function(e) {
  let t = parseInt(e.slice(-3));
  const s = parseInt(e.slice(-6, -4)), i = parseInt(e.slice(-9, -7)), r = e.length > 9 ? parseInt(e.substring(0, e.indexOf(":"))) : 0;
  if (!O(t) || !O(s) || !O(i) || !O(r))
    throw Error(`Malformed X-TIMESTAMP-MAP: Local:${e}`);
  return t += 1e3 * s, t += 60 * 1e3 * i, t += 60 * 60 * 1e3 * r, t;
};
function Ri(n, e, t) {
  return Cs(n.toString()) + Cs(e.toString()) + Cs(t);
}
const Hc = function(e, t, s) {
  let i = e[t], r = e[i.prevCC];
  if (!r || !r.new && i.new) {
    e.ccOffset = e.presentationOffset = i.start, i.new = !1;
    return;
  }
  for (; (a = r) != null && a.new; ) {
    var a;
    e.ccOffset += i.start - r.start, i.new = !1, i = r, r = e[i.prevCC];
  }
  e.presentationOffset = s;
};
function Wc(n, e, t, s, i, r, a) {
  const o = new Gc(), l = Se(new Uint8Array(n)).trim().replace(Kc, `
`).split(`
`), c = [], h = e ? oc(e.baseTime, e.timescale) : 0;
  let u = "00:00.000", d = 0, g = 0, f, m = !0;
  o.oncue = function(y) {
    const E = t[s];
    let x = t.ccOffset;
    const T = (d - h) / 9e4;
    if (E != null && E.new && (g !== void 0 ? x = t.ccOffset = E.start : Hc(t, s, T)), T) {
      if (!e) {
        f = new Error("Missing initPTS for VTT MPEGTS");
        return;
      }
      x = T - t.presentationOffset;
    }
    const _ = y.endTime - y.startTime, A = Le((y.startTime + x - g) * 9e4, i * 9e4) / 9e4;
    y.startTime = Math.max(A, 0), y.endTime = Math.max(A + _, 0);
    const D = y.text.trim();
    y.text = decodeURIComponent(encodeURIComponent(D)), y.id || (y.id = Ri(y.startTime, y.endTime, D)), y.endTime > 0 && c.push(y);
  }, o.onparsingerror = function(y) {
    f = y;
  }, o.onflush = function() {
    if (f) {
      a(f);
      return;
    }
    r(c);
  }, l.forEach((y) => {
    if (m)
      if (ws(y, "X-TIMESTAMP-MAP=")) {
        m = !1, y.slice(16).split(",").forEach((E) => {
          ws(E, "LOCAL:") ? u = E.slice(6) : ws(E, "MPEGTS:") && (d = parseInt(E.slice(7)));
        });
        try {
          g = Vc(u) / 1e3;
        } catch (E) {
          f = E;
        }
        return;
      } else y === "" && (m = !1);
    o.parse(y + `
`);
  }), o.flush();
}
const ks = "stpp.ttml.im1t", ra = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/, na = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/, Yc = {
  left: "start",
  center: "center",
  right: "end",
  start: "start",
  end: "end"
};
function Ur(n, e, t, s) {
  const i = H(new Uint8Array(n), ["mdat"]);
  if (i.length === 0) {
    s(new Error("Could not parse IMSC1 mdat"));
    return;
  }
  const r = i.map((o) => Se(o)), a = ac(e.baseTime, 1, e.timescale);
  try {
    r.forEach((o) => t(qc(o, a)));
  } catch (o) {
    s(o);
  }
}
function qc(n, e) {
  const i = new DOMParser().parseFromString(n, "text/xml").getElementsByTagName("tt")[0];
  if (!i)
    throw new Error("Invalid ttml");
  const r = {
    frameRate: 30,
    subFrameRate: 1,
    frameRateMultiplier: 0,
    tickRate: 0
  }, a = Object.keys(r).reduce((u, d) => (u[d] = i.getAttribute(`ttp:${d}`) || r[d], u), {}), o = i.getAttribute("xml:space") !== "preserve", l = Br(Ps(i, "styling", "style")), c = Br(Ps(i, "layout", "region")), h = Ps(i, "body", "[begin]");
  return [].map.call(h, (u) => {
    const d = aa(u, o);
    if (!d || !u.hasAttribute("begin"))
      return null;
    const g = Os(u.getAttribute("begin"), a), f = Os(u.getAttribute("dur"), a);
    let m = Os(u.getAttribute("end"), a);
    if (g === null)
      throw $r(u);
    if (m === null) {
      if (f === null)
        throw $r(u);
      m = g + f;
    }
    const y = new Li(g - e, m - e, d);
    y.id = Ri(y.startTime, y.endTime, y.text);
    const E = c[u.getAttribute("region")], x = l[u.getAttribute("style")], T = jc(E, x, l), {
      textAlign: _
    } = T;
    if (_) {
      const A = Yc[_];
      A && (y.lineAlign = A), y.align = _;
    }
    return ae(y, T), y;
  }).filter((u) => u !== null);
}
function Ps(n, e, t) {
  const s = n.getElementsByTagName(e)[0];
  return s ? [].slice.call(s.querySelectorAll(t)) : [];
}
function Br(n) {
  return n.reduce((e, t) => {
    const s = t.getAttribute("xml:id");
    return s && (e[s] = t), e;
  }, {});
}
function aa(n, e) {
  return [].slice.call(n.childNodes).reduce((t, s, i) => {
    var r;
    return s.nodeName === "br" && i ? t + `
` : (r = s.childNodes) != null && r.length ? aa(s, e) : e ? t + s.textContent.trim().replace(/\s+/g, " ") : t + s.textContent;
  }, "");
}
function jc(n, e, t) {
  const s = "http://www.w3.org/ns/ttml#styling";
  let i = null;
  const r = [
    "displayAlign",
    "textAlign",
    "color",
    "backgroundColor",
    "fontSize",
    "fontFamily"
    // 'fontWeight',
    // 'lineHeight',
    // 'wrapOption',
    // 'fontStyle',
    // 'direction',
    // 'writingMode'
  ], a = n != null && n.hasAttribute("style") ? n.getAttribute("style") : null;
  return a && t.hasOwnProperty(a) && (i = t[a]), r.reduce((o, l) => {
    const c = Fs(e, s, l) || Fs(n, s, l) || Fs(i, s, l);
    return c && (o[l] = c), o;
  }, {});
}
function Fs(n, e, t) {
  return n && n.hasAttributeNS(e, t) ? n.getAttributeNS(e, t) : null;
}
function $r(n) {
  return new Error(`Could not parse ttml timestamp ${n}`);
}
function Os(n, e) {
  if (!n)
    return null;
  let t = ta(n);
  return t === null && (ra.test(n) ? t = zc(n, e) : na.test(n) && (t = Xc(n, e))), t;
}
function zc(n, e) {
  const t = ra.exec(n), s = (t[4] | 0) + (t[5] | 0) / e.subFrameRate;
  return (t[1] | 0) * 3600 + (t[2] | 0) * 60 + (t[3] | 0) + s / e.frameRate;
}
function Xc(n, e) {
  const t = na.exec(n), s = Number(t[1]);
  switch (t[2]) {
    case "h":
      return s * 3600;
    case "m":
      return s * 60;
    case "ms":
      return s * 1e3;
    case "f":
      return s / e.frameRate;
    case "t":
      return s / e.tickRate;
  }
  return s;
}
class Qc {
  constructor(e) {
    this.hls = void 0, this.media = null, this.config = void 0, this.enabled = !0, this.Cues = void 0, this.textTracks = [], this.tracks = [], this.initPTS = [], this.unparsedVttFrags = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.cea608Parser1 = void 0, this.cea608Parser2 = void 0, this.lastCc = -1, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = Kr(), this.captionsProperties = void 0, this.hls = e, this.config = e.config, this.Cues = e.config.cueHandler, this.captionsProperties = {
      textTrack1: {
        label: this.config.captionsTextTrack1Label,
        languageCode: this.config.captionsTextTrack1LanguageCode
      },
      textTrack2: {
        label: this.config.captionsTextTrack2Label,
        languageCode: this.config.captionsTextTrack2LanguageCode
      },
      textTrack3: {
        label: this.config.captionsTextTrack3Label,
        languageCode: this.config.captionsTextTrack3LanguageCode
      },
      textTrack4: {
        label: this.config.captionsTextTrack4Label,
        languageCode: this.config.captionsTextTrack4LanguageCode
      }
    }, e.on(p.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(p.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(p.MANIFEST_LOADING, this.onManifestLoading, this), e.on(p.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(p.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.on(p.FRAG_LOADING, this.onFragLoading, this), e.on(p.FRAG_LOADED, this.onFragLoaded, this), e.on(p.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), e.on(p.FRAG_DECRYPTED, this.onFragDecrypted, this), e.on(p.INIT_PTS_FOUND, this.onInitPtsFound, this), e.on(p.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), e.on(p.BUFFER_FLUSHING, this.onBufferFlushing, this);
  }
  destroy() {
    const {
      hls: e
    } = this;
    e.off(p.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(p.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(p.MANIFEST_LOADING, this.onManifestLoading, this), e.off(p.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(p.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.off(p.FRAG_LOADING, this.onFragLoading, this), e.off(p.FRAG_LOADED, this.onFragLoaded, this), e.off(p.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), e.off(p.FRAG_DECRYPTED, this.onFragDecrypted, this), e.off(p.INIT_PTS_FOUND, this.onInitPtsFound, this), e.off(p.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), e.off(p.BUFFER_FLUSHING, this.onBufferFlushing, this), this.hls = this.config = this.media = null, this.cea608Parser1 = this.cea608Parser2 = void 0;
  }
  initCea608Parsers() {
    const e = new $t(this, "textTrack1"), t = new $t(this, "textTrack2"), s = new $t(this, "textTrack3"), i = new $t(this, "textTrack4");
    this.cea608Parser1 = new Nr(1, e, t), this.cea608Parser2 = new Nr(3, s, i);
  }
  addCues(e, t, s, i, r) {
    let a = !1;
    for (let o = r.length; o--; ) {
      const l = r[o], c = Jc(l[0], l[1], t, s);
      if (c >= 0 && (l[0] = Math.min(l[0], t), l[1] = Math.max(l[1], s), a = !0, c / (s - t) > 0.5))
        return;
    }
    if (a || r.push([t, s]), this.config.renderTextTracksNatively) {
      const o = this.captionsTracks[e];
      this.Cues.newCue(o, t, s, i);
    } else {
      const o = this.Cues.newCue(null, t, s, i);
      this.hls.trigger(p.CUES_PARSED, {
        type: "captions",
        cues: o,
        track: e
      });
    }
  }
  // Triggered when an initial PTS is found; used for synchronisation of WebVTT.
  onInitPtsFound(e, {
    frag: t,
    id: s,
    initPTS: i,
    timescale: r
  }) {
    const {
      unparsedVttFrags: a
    } = this;
    s === N.MAIN && (this.initPTS[t.cc] = {
      baseTime: i,
      timescale: r
    }), a.length && (this.unparsedVttFrags = [], a.forEach((o) => {
      this.onFragLoaded(p.FRAG_LOADED, o);
    }));
  }
  getExistingTrack(e, t) {
    const {
      media: s
    } = this;
    if (s)
      for (let i = 0; i < s.textTracks.length; i++) {
        const r = s.textTracks[i];
        if (Gr(r, {
          name: e,
          lang: t,
          characteristics: "transcribes-spoken-dialog,describes-music-and-sound",
          attrs: {}
        }))
          return r;
      }
    return null;
  }
  createCaptionsTrack(e) {
    this.config.renderTextTracksNatively ? this.createNativeTrack(e) : this.createNonNativeTrack(e);
  }
  createNativeTrack(e) {
    if (this.captionsTracks[e])
      return;
    const {
      captionsProperties: t,
      captionsTracks: s,
      media: i
    } = this, {
      label: r,
      languageCode: a
    } = t[e], o = this.getExistingTrack(r, a);
    if (o)
      s[e] = o, nt(s[e]), Sn(s[e], i);
    else {
      const l = this.createTextTrack("captions", r, a);
      l && (l[e] = !0, s[e] = l);
    }
  }
  createNonNativeTrack(e) {
    if (this.nonNativeCaptionsTracks[e])
      return;
    const t = this.captionsProperties[e];
    if (!t)
      return;
    const s = t.label, i = {
      _id: e,
      label: s,
      kind: "captions",
      default: t.media ? !!t.media.default : !1,
      closedCaptions: t.media
    };
    this.nonNativeCaptionsTracks[e] = i, this.hls.trigger(p.NON_NATIVE_TEXT_TRACKS_FOUND, {
      tracks: [i]
    });
  }
  createTextTrack(e, t, s) {
    const i = this.media;
    if (i)
      return i.addTextTrack(e, t, s);
  }
  onMediaAttaching(e, t) {
    this.media = t.media, this._cleanTracks();
  }
  onMediaDetaching() {
    const {
      captionsTracks: e
    } = this;
    Object.keys(e).forEach((t) => {
      nt(e[t]), delete e[t];
    }), this.nonNativeCaptionsTracks = {}, this.media = null;
  }
  onManifestLoading() {
    this.lastCc = -1, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = Kr(), this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.textTracks = [], this.unparsedVttFrags = [], this.initPTS = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset());
  }
  _cleanTracks() {
    const {
      media: e
    } = this;
    if (!e)
      return;
    const t = e.textTracks;
    if (t)
      for (let s = 0; s < t.length; s++)
        nt(t[s]);
  }
  onSubtitleTracksUpdated(e, t) {
    const s = t.subtitleTracks || [], i = s.some((r) => r.textCodec === ks);
    if (this.config.enableWebVTT || i && this.config.enableIMSC1) {
      if (Jn(this.tracks, s)) {
        this.tracks = s;
        return;
      }
      if (this.textTracks = [], this.tracks = s, this.config.renderTextTracksNatively) {
        const a = this.media, o = a ? Ht(a.textTracks) : null;
        if (this.tracks.forEach((l, c) => {
          let h;
          if (o) {
            let u = null;
            for (let d = 0; d < o.length; d++)
              if (o[d] && Gr(o[d], l)) {
                u = o[d], o[d] = null;
                break;
              }
            u && (h = u);
          }
          if (h)
            nt(h);
          else {
            const u = oa(l);
            h = this.createTextTrack(u, l.name, l.lang), h && (h.mode = "disabled");
          }
          h && this.textTracks.push(h);
        }), o != null && o.length) {
          const l = o.filter((c) => c !== null).map((c) => c.label);
          l.length && this.hls.logger.warn(`Media element contains unused subtitle tracks: ${l.join(", ")}. Replace media element for each source to clear TextTracks and captions menu.`);
        }
      } else if (this.tracks.length) {
        const a = this.tracks.map((o) => ({
          label: o.name,
          kind: o.type.toLowerCase(),
          default: o.default,
          subtitleTrack: o
        }));
        this.hls.trigger(p.NON_NATIVE_TEXT_TRACKS_FOUND, {
          tracks: a
        });
      }
    }
  }
  onManifestLoaded(e, t) {
    this.config.enableCEA708Captions && t.captions && t.captions.forEach((s) => {
      const i = /(?:CC|SERVICE)([1-4])/.exec(s.instreamId);
      if (!i)
        return;
      const r = `textTrack${i[1]}`, a = this.captionsProperties[r];
      a && (a.label = s.name, s.lang && (a.languageCode = s.lang), a.media = s);
    });
  }
  closedCaptionsForLevel(e) {
    const t = this.hls.levels[e.level];
    return t == null ? void 0 : t.attrs["CLOSED-CAPTIONS"];
  }
  onFragLoading(e, t) {
    if (this.enabled && t.frag.type === N.MAIN) {
      var s, i;
      const {
        cea608Parser1: r,
        cea608Parser2: a,
        lastSn: o
      } = this, {
        cc: l,
        sn: c
      } = t.frag, h = (s = (i = t.part) == null ? void 0 : i.index) != null ? s : -1;
      r && a && (c !== o + 1 || c === o && h !== this.lastPartIndex + 1 || l !== this.lastCc) && (r.reset(), a.reset()), this.lastCc = l, this.lastSn = c, this.lastPartIndex = h;
    }
  }
  onFragLoaded(e, t) {
    const {
      frag: s,
      payload: i
    } = t;
    if (s.type === N.SUBTITLE)
      if (i.byteLength) {
        const r = s.decryptdata, a = "stats" in t;
        if (r == null || !r.encrypted || a) {
          const o = this.tracks[s.level], l = this.vttCCs;
          l[s.cc] || (l[s.cc] = {
            start: s.start,
            prevCC: this.prevCC,
            new: !0
          }, this.prevCC = s.cc), o && o.textCodec === ks ? this._parseIMSC1(s, i) : this._parseVTTs(t);
        }
      } else
        this.hls.trigger(p.SUBTITLE_FRAG_PROCESSED, {
          success: !1,
          frag: s,
          error: new Error("Empty subtitle payload")
        });
  }
  _parseIMSC1(e, t) {
    const s = this.hls;
    Ur(t, this.initPTS[e.cc], (i) => {
      this._appendCues(i, e.level), s.trigger(p.SUBTITLE_FRAG_PROCESSED, {
        success: !0,
        frag: e
      });
    }, (i) => {
      s.logger.log(`Failed to parse IMSC1: ${i}`), s.trigger(p.SUBTITLE_FRAG_PROCESSED, {
        success: !1,
        frag: e,
        error: i
      });
    });
  }
  _parseVTTs(e) {
    var t;
    const {
      frag: s,
      payload: i
    } = e, {
      initPTS: r,
      unparsedVttFrags: a
    } = this, o = r.length - 1;
    if (!r[s.cc] && o === -1) {
      a.push(e);
      return;
    }
    const l = this.hls, c = (t = s.initSegment) != null && t.data ? Re(s.initSegment.data, new Uint8Array(i)) : i;
    Wc(c, this.initPTS[s.cc], this.vttCCs, s.cc, s.start, (h) => {
      this._appendCues(h, s.level), l.trigger(p.SUBTITLE_FRAG_PROCESSED, {
        success: !0,
        frag: s
      });
    }, (h) => {
      const u = h.message === "Missing initPTS for VTT MPEGTS";
      u ? a.push(e) : this._fallbackToIMSC1(s, i), l.logger.log(`Failed to parse VTT cue: ${h}`), !(u && o > s.cc) && l.trigger(p.SUBTITLE_FRAG_PROCESSED, {
        success: !1,
        frag: s,
        error: h
      });
    });
  }
  _fallbackToIMSC1(e, t) {
    const s = this.tracks[e.level];
    s.textCodec || Ur(t, this.initPTS[e.cc], () => {
      s.textCodec = ks, this._parseIMSC1(e, t);
    }, () => {
      s.textCodec = "wvtt";
    });
  }
  _appendCues(e, t) {
    const s = this.hls;
    if (this.config.renderTextTracksNatively) {
      const i = this.textTracks[t];
      if (!i || i.mode === "disabled")
        return;
      e.forEach((r) => vn(i, r));
    } else {
      const i = this.tracks[t];
      if (!i)
        return;
      const r = i.default ? "default" : "subtitles" + t;
      s.trigger(p.CUES_PARSED, {
        type: "subtitles",
        cues: e,
        track: r
      });
    }
  }
  onFragDecrypted(e, t) {
    const {
      frag: s
    } = t;
    s.type === N.SUBTITLE && this.onFragLoaded(p.FRAG_LOADED, t);
  }
  onSubtitleTracksCleared() {
    this.tracks = [], this.captionsTracks = {};
  }
  onFragParsingUserdata(e, t) {
    if (!this.enabled || !this.config.enableCEA708Captions)
      return;
    const {
      frag: s,
      samples: i
    } = t;
    if (!(s.type === N.MAIN && this.closedCaptionsForLevel(s) === "NONE"))
      for (let r = 0; r < i.length; r++) {
        const a = i[r].bytes;
        if (a) {
          this.cea608Parser1 || this.initCea608Parsers();
          const o = this.extractCea608Data(a);
          this.cea608Parser1.addData(i[r].pts, o[0]), this.cea608Parser2.addData(i[r].pts, o[1]);
        }
      }
  }
  onBufferFlushing(e, {
    startOffset: t,
    endOffset: s,
    endOffsetSubtitles: i,
    type: r
  }) {
    const {
      media: a
    } = this;
    if (!(!a || a.currentTime < s)) {
      if (!r || r === "video") {
        const {
          captionsTracks: o
        } = this;
        Object.keys(o).forEach((l) => Ws(o[l], t, s));
      }
      if (this.config.renderTextTracksNatively && t === 0 && i !== void 0) {
        const {
          textTracks: o
        } = this;
        Object.keys(o).forEach((l) => Ws(o[l], t, i));
      }
    }
  }
  extractCea608Data(e) {
    const t = [[], []], s = e[0] & 31;
    let i = 2;
    for (let r = 0; r < s; r++) {
      const a = e[i++], o = 127 & e[i++], l = 127 & e[i++];
      if (o === 0 && l === 0)
        continue;
      if ((4 & a) !== 0) {
        const h = 3 & a;
        (h === 0 || h === 1) && (t[h].push(o), t[h].push(l));
      }
    }
    return t;
  }
}
function oa(n) {
  return n.characteristics && /transcribes-spoken-dialog/gi.test(n.characteristics) && /describes-music-and-sound/gi.test(n.characteristics) ? "captions" : "subtitles";
}
function Gr(n, e) {
  return !!n && n.kind === oa(e) && Qs(e, n);
}
function Jc(n, e, t, s) {
  return Math.min(e, s) - Math.max(n, t);
}
function Kr() {
  return {
    ccOffset: 0,
    presentationOffset: 0,
    0: {
      start: 0,
      prevCC: -1,
      new: !0
    }
  };
}
class _i {
  constructor(e) {
    this.hls = void 0, this.autoLevelCapping = void 0, this.firstLevel = void 0, this.media = void 0, this.restrictedLevels = void 0, this.timer = void 0, this.clientRect = void 0, this.streamController = void 0, this.hls = e, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.firstLevel = -1, this.media = null, this.restrictedLevels = [], this.timer = void 0, this.clientRect = null, this.registerListeners();
  }
  setStreamController(e) {
    this.streamController = e;
  }
  destroy() {
    this.hls && this.unregisterListener(), this.timer && this.stopCapping(), this.media = null, this.clientRect = null, this.hls = this.streamController = null;
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(p.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), e.on(p.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(p.MANIFEST_PARSED, this.onManifestParsed, this), e.on(p.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(p.BUFFER_CODECS, this.onBufferCodecs, this), e.on(p.MEDIA_DETACHING, this.onMediaDetaching, this);
  }
  unregisterListener() {
    const {
      hls: e
    } = this;
    e.off(p.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), e.off(p.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(p.MANIFEST_PARSED, this.onManifestParsed, this), e.off(p.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(p.BUFFER_CODECS, this.onBufferCodecs, this), e.off(p.MEDIA_DETACHING, this.onMediaDetaching, this);
  }
  onFpsDropLevelCapping(e, t) {
    const s = this.hls.levels[t.droppedLevel];
    this.isLevelAllowed(s) && this.restrictedLevels.push({
      bitrate: s.bitrate,
      height: s.height,
      width: s.width
    });
  }
  onMediaAttaching(e, t) {
    this.media = t.media instanceof HTMLVideoElement ? t.media : null, this.clientRect = null, this.timer && this.hls.levels.length && this.detectPlayerSize();
  }
  onManifestParsed(e, t) {
    const s = this.hls;
    this.restrictedLevels = [], this.firstLevel = t.firstLevel, s.config.capLevelToPlayerSize && t.video && this.startCapping();
  }
  onLevelsUpdated(e, t) {
    this.timer && O(this.autoLevelCapping) && this.detectPlayerSize();
  }
  // Only activate capping when playing a video stream; otherwise, multi-bitrate audio-only streams will be restricted
  // to the first level
  onBufferCodecs(e, t) {
    this.hls.config.capLevelToPlayerSize && t.video && this.startCapping();
  }
  onMediaDetaching() {
    this.stopCapping(), this.media = null;
  }
  detectPlayerSize() {
    if (this.media) {
      if (this.mediaHeight <= 0 || this.mediaWidth <= 0) {
        this.clientRect = null;
        return;
      }
      const e = this.hls.levels;
      if (e.length) {
        const t = this.hls, s = this.getMaxLevel(e.length - 1);
        s !== this.autoLevelCapping && t.logger.log(`Setting autoLevelCapping to ${s}: ${e[s].height}p@${e[s].bitrate} for media ${this.mediaWidth}x${this.mediaHeight}`), t.autoLevelCapping = s, t.autoLevelEnabled && t.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = t.autoLevelCapping;
      }
    }
  }
  /*
   * returns level should be the one with the dimensions equal or greater than the media (player) dimensions (so the video will be downscaled)
   */
  getMaxLevel(e) {
    const t = this.hls.levels;
    if (!t.length)
      return -1;
    const s = t.filter((i, r) => this.isLevelAllowed(i) && r <= e);
    return this.clientRect = null, _i.getMaxLevelByMediaSize(s, this.mediaWidth, this.mediaHeight);
  }
  startCapping() {
    this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize());
  }
  stopCapping() {
    this.restrictedLevels = [], this.firstLevel = -1, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (self.clearInterval(this.timer), this.timer = void 0);
  }
  getDimensions() {
    if (this.clientRect)
      return this.clientRect;
    const e = this.media, t = {
      width: 0,
      height: 0
    };
    if (e) {
      const s = e.getBoundingClientRect();
      t.width = s.width, t.height = s.height, !t.width && !t.height && (t.width = s.right - s.left || e.width || 0, t.height = s.bottom - s.top || e.height || 0);
    }
    return this.clientRect = t, t;
  }
  get mediaWidth() {
    return this.getDimensions().width * this.contentScaleFactor;
  }
  get mediaHeight() {
    return this.getDimensions().height * this.contentScaleFactor;
  }
  get contentScaleFactor() {
    let e = 1;
    if (!this.hls.config.ignoreDevicePixelRatio)
      try {
        e = self.devicePixelRatio;
      } catch {
      }
    return e;
  }
  isLevelAllowed(e) {
    return !this.restrictedLevels.some((s) => e.bitrate === s.bitrate && e.width === s.width && e.height === s.height);
  }
  static getMaxLevelByMediaSize(e, t, s) {
    if (!(e != null && e.length))
      return -1;
    const i = (o, l) => l ? o.width !== l.width || o.height !== l.height : !0;
    let r = e.length - 1;
    const a = Math.max(t, s);
    for (let o = 0; o < e.length; o += 1) {
      const l = e[o];
      if ((l.width >= a || l.height >= a) && i(l, e[o + 1])) {
        r = o;
        break;
      }
    }
    return r;
  }
}
class Zc {
  constructor(e) {
    this.hls = void 0, this.isVideoPlaybackQualityAvailable = !1, this.timer = void 0, this.media = null, this.lastTime = void 0, this.lastDroppedFrames = 0, this.lastDecodedFrames = 0, this.streamController = void 0, this.hls = e, this.registerListeners();
  }
  setStreamController(e) {
    this.streamController = e;
  }
  registerListeners() {
    this.hls.on(p.MEDIA_ATTACHING, this.onMediaAttaching, this), this.hls.on(p.MEDIA_DETACHING, this.onMediaDetaching, this);
  }
  unregisterListeners() {
    this.hls.off(p.MEDIA_ATTACHING, this.onMediaAttaching, this), this.hls.off(p.MEDIA_DETACHING, this.onMediaDetaching, this);
  }
  destroy() {
    this.timer && clearInterval(this.timer), this.unregisterListeners(), this.isVideoPlaybackQualityAvailable = !1, this.media = null;
  }
  onMediaAttaching(e, t) {
    const s = this.hls.config;
    if (s.capLevelOnFPSDrop) {
      const i = t.media instanceof self.HTMLVideoElement ? t.media : null;
      this.media = i, i && typeof i.getVideoPlaybackQuality == "function" && (this.isVideoPlaybackQualityAvailable = !0), self.clearInterval(this.timer), this.timer = self.setInterval(this.checkFPSInterval.bind(this), s.fpsDroppedMonitoringPeriod);
    }
  }
  onMediaDetaching() {
    this.media = null;
  }
  checkFPS(e, t, s) {
    const i = performance.now();
    if (t) {
      if (this.lastTime) {
        const r = i - this.lastTime, a = s - this.lastDroppedFrames, o = t - this.lastDecodedFrames, l = 1e3 * a / r, c = this.hls;
        if (c.trigger(p.FPS_DROP, {
          currentDropped: a,
          currentDecoded: o,
          totalDroppedFrames: s
        }), l > 0 && a > c.config.fpsDroppedMonitoringThreshold * o) {
          let h = c.currentLevel;
          c.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + h), h > 0 && (c.autoLevelCapping === -1 || c.autoLevelCapping >= h) && (h = h - 1, c.trigger(p.FPS_DROP_LEVEL_CAPPING, {
            level: h,
            droppedLevel: c.currentLevel
          }), c.autoLevelCapping = h, this.streamController.nextLevelSwitch());
        }
      }
      this.lastTime = i, this.lastDroppedFrames = s, this.lastDecodedFrames = t;
    }
  }
  checkFPSInterval() {
    const e = this.media;
    if (e)
      if (this.isVideoPlaybackQualityAvailable) {
        const t = e.getVideoPlaybackQuality();
        this.checkFPS(e, t.totalVideoFrames, t.droppedVideoFrames);
      } else
        this.checkFPS(e, e.webkitDecodedFrameCount, e.webkitDroppedFrameCount);
  }
}
class ct extends qe {
  constructor(e) {
    super("eme", e.logger), this.hls = void 0, this.config = void 0, this.media = null, this.keyFormatPromise = null, this.keySystemAccessPromises = {}, this._requestLicenseFailureCount = 0, this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, this.setMediaKeysQueue = ct.CDMCleanupPromise ? [ct.CDMCleanupPromise] : [], this.onMediaEncrypted = (t) => {
      const {
        initDataType: s,
        initData: i
      } = t, r = `"${t.type}" event: init data type: "${s}"`;
      if (this.debug(r), i === null)
        return;
      let a, o;
      if (s === "sinf" && this.getLicenseServerUrl(Q.FAIRPLAY)) {
        const d = ce(new Uint8Array(i));
        try {
          const g = li(JSON.parse(d).sinf), f = yn(new Uint8Array(g));
          if (!f)
            throw new Error("'schm' box missing or not cbcs/cenc with schi > tenc");
          a = f.subarray(8, 24), o = Q.FAIRPLAY;
        } catch (g) {
          this.warn(`${r} Failed to parse sinf: ${g}`);
          return;
        }
      } else if (this.getLicenseServerUrl(Q.WIDEVINE)) {
        const d = fo(i);
        let g = Object.keys(this.keySystemAccessPromises);
        g.length || (g = wt(this.config));
        const f = d.filter((m) => {
          const y = m.systemId ? Es(m.systemId) : null;
          return y ? g.indexOf(y) > -1 : !1;
        })[0];
        if (!f) {
          d.length === 0 || d.some((m) => !m.systemId) ? this.warn(`${r} contains incomplete or invalid pssh data`) : this.log(`ignoring ${r} for ${d.map((m) => Es(m.systemId)).join(",")} pssh data in favor of playlist keys`);
          return;
        }
        if (o = Es(f.systemId), f.version === 0 && f.data)
          if (o === Q.WIDEVINE) {
            const m = f.data.length - 22;
            a = f.data.subarray(m, m + 16);
          } else o === Q.PLAYREADY && (a = dn(f.data));
      }
      if (!o || !a)
        return;
      const l = ke.hexDump(a), {
        keyIdToKeySessionPromise: c,
        mediaKeySessions: h
      } = this;
      let u = c[l];
      for (let d = 0; d < h.length; d++) {
        const g = h[d], f = g.decryptdata;
        if (!f.keyId)
          continue;
        const m = ke.hexDump(f.keyId);
        if (l === m || f.uri.replace(/-/g, "").indexOf(l) !== -1) {
          if (u = c[m], f.pssh)
            break;
          delete c[m], f.pssh = new Uint8Array(i), f.keyId = a, u = c[l] = u.then(() => this.generateRequestWithPreferredKeySession(g, s, i, "encrypted-event-key-match"));
          break;
        }
      }
      u || (u = c[l] = this.getKeySystemSelectionPromise([o]).then(({
        keySystem: d,
        mediaKeys: g
      }) => {
        var f;
        this.throwIfDestroyed();
        const m = new vt("ISO-23001-7", l, (f = zi(d)) != null ? f : "");
        return m.pssh = new Uint8Array(i), m.keyId = a, this.attemptSetMediaKeys(d, g).then(() => {
          this.throwIfDestroyed();
          const y = this.createMediaKeySessionContext({
            decryptdata: m,
            keySystem: d,
            mediaKeys: g
          });
          return this.generateRequestWithPreferredKeySession(y, s, i, "encrypted-event-no-match");
        });
      })), u.catch((d) => this.handleError(d));
    }, this.onWaitingForKey = (t) => {
      this.log(`"${t.type}" event`);
    }, this.hls = e, this.config = e.config, this.registerListeners();
  }
  destroy() {
    this.unregisterListeners(), this.onMediaDetached();
    const e = this.config;
    e.requestMediaKeySystemAccessFunc = null, e.licenseXhrSetup = e.licenseResponseCallback = void 0, e.drmSystems = e.drmSystemOptions = {}, this.hls = this.config = this.keyIdToKeySessionPromise = null, this.onMediaEncrypted = this.onWaitingForKey = null;
  }
  registerListeners() {
    this.hls.on(p.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(p.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.on(p.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(p.MANIFEST_LOADED, this.onManifestLoaded, this);
  }
  unregisterListeners() {
    this.hls.off(p.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(p.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.off(p.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(p.MANIFEST_LOADED, this.onManifestLoaded, this);
  }
  getLicenseServerUrl(e) {
    const {
      drmSystems: t,
      widevineLicenseUrl: s
    } = this.config, i = t[e];
    if (i)
      return i.licenseUrl;
    if (e === Q.WIDEVINE && s)
      return s;
  }
  getLicenseServerUrlOrThrow(e) {
    const t = this.getLicenseServerUrl(e);
    if (t === void 0)
      throw new Error(`no license server URL configured for key-system "${e}"`);
    return t;
  }
  getServerCertificateUrl(e) {
    const {
      drmSystems: t
    } = this.config, s = t[e];
    if (s)
      return s.serverCertificateUrl;
    this.log(`No Server Certificate in config.drmSystems["${e}"]`);
  }
  attemptKeySystemAccess(e) {
    const t = this.hls.levels, s = (a, o, l) => !!a && l.indexOf(a) === o, i = t.map((a) => a.audioCodec).filter(s), r = t.map((a) => a.videoCodec).filter(s);
    return i.length + r.length === 0 && r.push("avc1.42e01e"), new Promise((a, o) => {
      const l = (c) => {
        const h = c.shift();
        this.getMediaKeysPromise(h, i, r).then((u) => a({
          keySystem: h,
          mediaKeys: u
        })).catch((u) => {
          c.length ? l(c) : u instanceof Ae ? o(u) : o(new Ae({
            type: $.KEY_SYSTEM_ERROR,
            details: L.KEY_SYSTEM_NO_ACCESS,
            error: u,
            fatal: !0
          }, u.message));
        });
      };
      l(e);
    });
  }
  requestMediaKeySystemAccess(e, t) {
    const {
      requestMediaKeySystemAccessFunc: s
    } = this.config;
    if (typeof s != "function") {
      let i = `Configured requestMediaKeySystemAccess is not a function ${s}`;
      return un === null && self.location.protocol === "http:" && (i = `navigator.requestMediaKeySystemAccess is not available over insecure protocol ${location.protocol}`), Promise.reject(new Error(i));
    }
    return s(e, t);
  }
  getMediaKeysPromise(e, t, s) {
    const i = za(e, t, s, this.config.drmSystemOptions), r = this.keySystemAccessPromises[e];
    let a = r == null ? void 0 : r.keySystemAccess;
    if (!a) {
      this.log(`Requesting encrypted media "${e}" key-system access with config: ${JSON.stringify(i)}`), a = this.requestMediaKeySystemAccess(e, i);
      const o = this.keySystemAccessPromises[e] = {
        keySystemAccess: a
      };
      return a.catch((l) => {
        this.log(`Failed to obtain access to key-system "${e}": ${l}`);
      }), a.then((l) => {
        this.log(`Access for key-system "${l.keySystem}" obtained`);
        const c = this.fetchServerCertificate(e);
        return this.log(`Create media-keys for "${e}"`), o.mediaKeys = l.createMediaKeys().then((h) => (this.log(`Media-keys created for "${e}"`), c.then((u) => u ? this.setMediaKeysServerCertificate(h, e, u) : h))), o.mediaKeys.catch((h) => {
          this.error(`Failed to create media-keys for "${e}"}: ${h}`);
        }), o.mediaKeys;
      });
    }
    return a.then(() => r.mediaKeys);
  }
  createMediaKeySessionContext({
    decryptdata: e,
    keySystem: t,
    mediaKeys: s
  }) {
    this.log(`Creating key-system session "${t}" keyId: ${ke.hexDump(e.keyId || [])}`);
    const i = s.createSession(), r = {
      decryptdata: e,
      keySystem: t,
      mediaKeys: s,
      mediaKeysSession: i,
      keyStatus: "status-pending"
    };
    return this.mediaKeySessions.push(r), r;
  }
  renewKeySession(e) {
    const t = e.decryptdata;
    if (t.pssh) {
      const s = this.createMediaKeySessionContext(e), i = this.getKeyIdString(t), r = "cenc";
      this.keyIdToKeySessionPromise[i] = this.generateRequestWithPreferredKeySession(s, r, t.pssh, "expired");
    } else
      this.warn("Could not renew expired session. Missing pssh initData.");
    this.removeSession(e);
  }
  getKeyIdString(e) {
    if (!e)
      throw new Error("Could not read keyId of undefined decryptdata");
    if (e.keyId === null)
      throw new Error("keyId is null");
    return ke.hexDump(e.keyId);
  }
  updateKeySession(e, t) {
    var s;
    const i = e.mediaKeysSession;
    return this.log(`Updating key-session "${i.sessionId}" for keyID ${ke.hexDump(((s = e.decryptdata) == null ? void 0 : s.keyId) || [])}
      } (data length: ${t && t.byteLength})`), i.update(t);
  }
  selectKeySystemFormat(e) {
    const t = Object.keys(e.levelkeys || {});
    return this.keyFormatPromise || (this.log(`Selecting key-system from fragment (sn: ${e.sn} ${e.type}: ${e.level}) key formats ${t.join(", ")}`), this.keyFormatPromise = this.getKeyFormatPromise(t)), this.keyFormatPromise;
  }
  getKeyFormatPromise(e) {
    return new Promise((t, s) => {
      const i = wt(this.config), r = e.map(ji).filter((a) => !!a && i.indexOf(a) !== -1);
      return this.getKeySystemSelectionPromise(r).then(({
        keySystem: a
      }) => {
        const o = zi(a);
        o ? t(o) : s(new Error(`Unable to find format for key-system "${a}"`));
      }).catch(s);
    });
  }
  loadKey(e) {
    const t = e.keyInfo.decryptdata, s = this.getKeyIdString(t), i = `(keyId: ${s} format: "${t.keyFormat}" method: ${t.method} uri: ${t.uri})`;
    this.log(`Starting session for key ${i}`);
    let r = this.keyIdToKeySessionPromise[s];
    return r || (r = this.keyIdToKeySessionPromise[s] = this.getKeySystemForKeyPromise(t).then(({
      keySystem: a,
      mediaKeys: o
    }) => (this.throwIfDestroyed(), this.log(`Handle encrypted media sn: ${e.frag.sn} ${e.frag.type}: ${e.frag.level} using key ${i}`), this.attemptSetMediaKeys(a, o).then(() => {
      this.throwIfDestroyed();
      const l = this.createMediaKeySessionContext({
        keySystem: a,
        mediaKeys: o,
        decryptdata: t
      });
      return this.generateRequestWithPreferredKeySession(l, "cenc", t.pssh, "playlist-key");
    }))), r.catch((a) => this.handleError(a))), r;
  }
  throwIfDestroyed(e = "Invalid state") {
    if (!this.hls)
      throw new Error("invalid state");
  }
  handleError(e) {
    this.hls && (this.error(e.message), e instanceof Ae ? this.hls.trigger(p.ERROR, e.data) : this.hls.trigger(p.ERROR, {
      type: $.KEY_SYSTEM_ERROR,
      details: L.KEY_SYSTEM_NO_KEYS,
      error: e,
      fatal: !0
    }));
  }
  getKeySystemForKeyPromise(e) {
    const t = this.getKeyIdString(e), s = this.keyIdToKeySessionPromise[t];
    if (!s) {
      const i = ji(e.keyFormat), r = i ? [i] : wt(this.config);
      return this.attemptKeySystemAccess(r);
    }
    return s;
  }
  getKeySystemSelectionPromise(e) {
    if (e.length || (e = wt(this.config)), e.length === 0)
      throw new Ae({
        type: $.KEY_SYSTEM_ERROR,
        details: L.KEY_SYSTEM_NO_CONFIGURED_LICENSE,
        fatal: !0
      }, `Missing key-system license configuration options ${JSON.stringify({
        drmSystems: this.config.drmSystems
      })}`);
    return this.attemptKeySystemAccess(e);
  }
  attemptSetMediaKeys(e, t) {
    const s = this.setMediaKeysQueue.slice();
    this.log(`Setting media-keys for "${e}"`);
    const i = Promise.all(s).then(() => {
      if (!this.media)
        throw new Error("Attempted to set mediaKeys without media element attached");
      return this.media.setMediaKeys(t);
    });
    return this.setMediaKeysQueue.push(i), i.then(() => {
      this.log(`Media-keys set for "${e}"`), s.push(i), this.setMediaKeysQueue = this.setMediaKeysQueue.filter((r) => s.indexOf(r) === -1);
    });
  }
  generateRequestWithPreferredKeySession(e, t, s, i) {
    var r, a;
    const o = (r = this.config.drmSystems) == null || (a = r[e.keySystem]) == null ? void 0 : a.generateRequest;
    if (o)
      try {
        const f = o.call(this.hls, t, s, e);
        if (!f)
          throw new Error("Invalid response from configured generateRequest filter");
        t = f.initDataType, s = e.decryptdata.pssh = f.initData ? new Uint8Array(f.initData) : null;
      } catch (f) {
        var l;
        if (this.warn(f.message), (l = this.hls) != null && l.config.debug)
          throw f;
      }
    if (s === null)
      return this.log(`Skipping key-session request for "${i}" (no initData)`), Promise.resolve(e);
    const c = this.getKeyIdString(e.decryptdata);
    this.log(`Generating key-session request for "${i}": ${c} (init data type: ${t} length: ${s ? s.byteLength : null})`);
    const h = new Ai(), u = e._onmessage = (f) => {
      const m = e.mediaKeysSession;
      if (!m) {
        h.emit("error", new Error("invalid state"));
        return;
      }
      const {
        messageType: y,
        message: E
      } = f;
      this.log(`"${y}" message event for session "${m.sessionId}" message size: ${E.byteLength}`), y === "license-request" || y === "license-renewal" ? this.renewLicense(e, E).catch((x) => {
        this.handleError(x), h.emit("error", x);
      }) : y === "license-release" ? e.keySystem === Q.FAIRPLAY && (this.updateKeySession(e, Vs("acknowledged")), this.removeSession(e)) : this.warn(`unhandled media key message type "${y}"`);
    }, d = e._onkeystatuseschange = (f) => {
      if (!e.mediaKeysSession) {
        h.emit("error", new Error("invalid state"));
        return;
      }
      this.onKeyStatusChange(e);
      const y = e.keyStatus;
      h.emit("keyStatus", y), y === "expired" && (this.warn(`${e.keySystem} expired for key ${c}`), this.renewKeySession(e));
    };
    e.mediaKeysSession.addEventListener("message", u), e.mediaKeysSession.addEventListener("keystatuseschange", d);
    const g = new Promise((f, m) => {
      h.on("error", m), h.on("keyStatus", (y) => {
        y.startsWith("usable") ? f() : y === "output-restricted" ? m(new Ae({
          type: $.KEY_SYSTEM_ERROR,
          details: L.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED,
          fatal: !1
        }, "HDCP level output restricted")) : y === "internal-error" ? m(new Ae({
          type: $.KEY_SYSTEM_ERROR,
          details: L.KEY_SYSTEM_STATUS_INTERNAL_ERROR,
          fatal: !0
        }, `key status changed to "${y}"`)) : y === "expired" ? m(new Error("key expired while generating request")) : this.warn(`unhandled key status change "${y}"`);
      });
    });
    return e.mediaKeysSession.generateRequest(t, s).then(() => {
      var f;
      this.log(`Request generated for key-session "${(f = e.mediaKeysSession) == null ? void 0 : f.sessionId}" keyId: ${c}`);
    }).catch((f) => {
      throw new Ae({
        type: $.KEY_SYSTEM_ERROR,
        details: L.KEY_SYSTEM_NO_SESSION,
        error: f,
        fatal: !1
      }, `Error generating key-session request: ${f}`);
    }).then(() => g).catch((f) => {
      throw h.removeAllListeners(), this.removeSession(e), f;
    }).then(() => (h.removeAllListeners(), e));
  }
  onKeyStatusChange(e) {
    e.mediaKeysSession.keyStatuses.forEach((t, s) => {
      this.log(`key status change "${t}" for keyStatuses keyId: ${ke.hexDump("buffer" in s ? new Uint8Array(s.buffer, s.byteOffset, s.byteLength) : new Uint8Array(s))} session keyId: ${ke.hexDump(new Uint8Array(e.decryptdata.keyId || []))} uri: ${e.decryptdata.uri}`), e.keyStatus = t;
    });
  }
  fetchServerCertificate(e) {
    const t = this.config, s = t.loader, i = new s(t), r = this.getServerCertificateUrl(e);
    return r ? (this.log(`Fetching server certificate for "${e}"`), new Promise((a, o) => {
      const l = {
        responseType: "arraybuffer",
        url: r
      }, c = t.certLoadPolicy.default, h = {
        loadPolicy: c,
        timeout: c.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0
      }, u = {
        onSuccess: (d, g, f, m) => {
          a(d.data);
        },
        onError: (d, g, f, m) => {
          o(new Ae({
            type: $.KEY_SYSTEM_ERROR,
            details: L.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
            fatal: !0,
            networkDetails: f,
            response: he({
              url: l.url,
              data: void 0
            }, d)
          }, `"${e}" certificate request failed (${r}). Status: ${d.code} (${d.text})`));
        },
        onTimeout: (d, g, f) => {
          o(new Ae({
            type: $.KEY_SYSTEM_ERROR,
            details: L.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
            fatal: !0,
            networkDetails: f,
            response: {
              url: l.url,
              data: void 0
            }
          }, `"${e}" certificate request timed out (${r})`));
        },
        onAbort: (d, g, f) => {
          o(new Error("aborted"));
        }
      };
      i.load(l, h, u);
    })) : Promise.resolve();
  }
  setMediaKeysServerCertificate(e, t, s) {
    return new Promise((i, r) => {
      e.setServerCertificate(s).then((a) => {
        this.log(`setServerCertificate ${a ? "success" : "not supported by CDM"} (${s == null ? void 0 : s.byteLength}) on "${t}"`), i(e);
      }).catch((a) => {
        r(new Ae({
          type: $.KEY_SYSTEM_ERROR,
          details: L.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED,
          error: a,
          fatal: !0
        }, a.message));
      });
    });
  }
  renewLicense(e, t) {
    return this.requestLicense(e, new Uint8Array(t)).then((s) => this.updateKeySession(e, new Uint8Array(s)).catch((i) => {
      throw new Ae({
        type: $.KEY_SYSTEM_ERROR,
        details: L.KEY_SYSTEM_SESSION_UPDATE_FAILED,
        error: i,
        fatal: !0
      }, i.message);
    }));
  }
  unpackPlayReadyKeyMessage(e, t) {
    const s = String.fromCharCode.apply(null, new Uint16Array(t.buffer));
    if (!s.includes("PlayReadyKeyMessage"))
      return e.setRequestHeader("Content-Type", "text/xml; charset=utf-8"), t;
    const i = new DOMParser().parseFromString(s, "application/xml"), r = i.querySelectorAll("HttpHeader");
    if (r.length > 0) {
      let h;
      for (let u = 0, d = r.length; u < d; u++) {
        var a, o;
        h = r[u];
        const g = (a = h.querySelector("name")) == null ? void 0 : a.textContent, f = (o = h.querySelector("value")) == null ? void 0 : o.textContent;
        g && f && e.setRequestHeader(g, f);
      }
    }
    const l = i.querySelector("Challenge"), c = l == null ? void 0 : l.textContent;
    if (!c)
      throw new Error("Cannot find <Challenge> in key message");
    return Vs(atob(c));
  }
  setupLicenseXHR(e, t, s, i) {
    const r = this.config.licenseXhrSetup;
    return r ? Promise.resolve().then(() => {
      if (!s.decryptdata)
        throw new Error("Key removed");
      return r.call(this.hls, e, t, s, i);
    }).catch((a) => {
      if (!s.decryptdata)
        throw a;
      return e.open("POST", t, !0), r.call(this.hls, e, t, s, i);
    }).then((a) => (e.readyState || e.open("POST", t, !0), {
      xhr: e,
      licenseChallenge: a || i
    })) : (e.open("POST", t, !0), Promise.resolve({
      xhr: e,
      licenseChallenge: i
    }));
  }
  requestLicense(e, t) {
    const s = this.config.keyLoadPolicy.default;
    return new Promise((i, r) => {
      const a = this.getLicenseServerUrlOrThrow(e.keySystem);
      this.log(`Sending license request to URL: ${a}`);
      const o = new XMLHttpRequest();
      o.responseType = "arraybuffer", o.onreadystatechange = () => {
        if (!this.hls || !e.mediaKeysSession)
          return r(new Error("invalid state"));
        if (o.readyState === 4)
          if (o.status === 200) {
            this._requestLicenseFailureCount = 0;
            let l = o.response;
            this.log(`License received ${l instanceof ArrayBuffer ? l.byteLength : l}`);
            const c = this.config.licenseResponseCallback;
            if (c)
              try {
                l = c.call(this.hls, o, a, e);
              } catch (h) {
                this.error(h);
              }
            i(l);
          } else {
            const l = s.errorRetry, c = l ? l.maxNumRetry : 0;
            if (this._requestLicenseFailureCount++, this._requestLicenseFailureCount > c || o.status >= 400 && o.status < 500)
              r(new Ae({
                type: $.KEY_SYSTEM_ERROR,
                details: L.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                fatal: !0,
                networkDetails: o,
                response: {
                  url: a,
                  data: void 0,
                  code: o.status,
                  text: o.statusText
                }
              }, `License Request XHR failed (${a}). Status: ${o.status} (${o.statusText})`));
            else {
              const h = c - this._requestLicenseFailureCount + 1;
              this.warn(`Retrying license request, ${h} attempts left`), this.requestLicense(e, t).then(i, r);
            }
          }
      }, e.licenseXhr && e.licenseXhr.readyState !== XMLHttpRequest.DONE && e.licenseXhr.abort(), e.licenseXhr = o, this.setupLicenseXHR(o, a, e, t).then(({
        xhr: l,
        licenseChallenge: c
      }) => {
        e.keySystem == Q.PLAYREADY && (c = this.unpackPlayReadyKeyMessage(l, c)), l.send(c);
      });
    });
  }
  onMediaAttached(e, t) {
    if (!this.config.emeEnabled)
      return;
    const s = t.media;
    this.media = s, s.addEventListener("encrypted", this.onMediaEncrypted), s.addEventListener("waitingforkey", this.onWaitingForKey);
  }
  onMediaDetached() {
    const e = this.media, t = this.mediaKeySessions;
    e && (e.removeEventListener("encrypted", this.onMediaEncrypted), e.removeEventListener("waitingforkey", this.onWaitingForKey), this.media = null), this._requestLicenseFailureCount = 0, this.setMediaKeysQueue = [], this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, vt.clearKeyUriToKeyIdMap();
    const s = t.length;
    ct.CDMCleanupPromise = Promise.all(t.map((i) => this.removeSession(i)).concat(e == null ? void 0 : e.setMediaKeys(null).catch((i) => {
      this.log(`Could not clear media keys: ${i}`);
    }))).then(() => {
      s && (this.log("finished closing key sessions and clearing media keys"), t.length = 0);
    }).catch((i) => {
      this.log(`Could not close sessions and clear media keys: ${i}`);
    });
  }
  onManifestLoading() {
    this.keyFormatPromise = null;
  }
  onManifestLoaded(e, {
    sessionKeys: t
  }) {
    if (!(!t || !this.config.emeEnabled) && !this.keyFormatPromise) {
      const s = t.reduce((i, r) => (i.indexOf(r.keyFormat) === -1 && i.push(r.keyFormat), i), []);
      this.log(`Selecting key-system from session-keys ${s.join(", ")}`), this.keyFormatPromise = this.getKeyFormatPromise(s);
    }
  }
  removeSession(e) {
    const {
      mediaKeysSession: t,
      licenseXhr: s
    } = e;
    if (t) {
      this.log(`Remove licenses and keys and close session ${t.sessionId}`), e._onmessage && (t.removeEventListener("message", e._onmessage), e._onmessage = void 0), e._onkeystatuseschange && (t.removeEventListener("keystatuseschange", e._onkeystatuseschange), e._onkeystatuseschange = void 0), s && s.readyState !== XMLHttpRequest.DONE && s.abort(), e.mediaKeysSession = e.decryptdata = e.licenseXhr = void 0;
      const i = this.mediaKeySessions.indexOf(e);
      return i > -1 && this.mediaKeySessions.splice(i, 1), t.remove().catch((r) => {
        this.log(`Could not remove session: ${r}`);
      }).then(() => t.close()).catch((r) => {
        this.log(`Could not close session: ${r}`);
      });
    }
  }
}
ct.CDMCleanupPromise = void 0;
class Ae extends Error {
  constructor(e, t) {
    super(t), this.data = void 0, e.error || (e.error = new Error(t)), this.data = e, e.err = e.error;
  }
}
var ge;
(function(n) {
  n.MANIFEST = "m", n.AUDIO = "a", n.VIDEO = "v", n.MUXED = "av", n.INIT = "i", n.CAPTION = "c", n.TIMED_TEXT = "tt", n.KEY = "k", n.OTHER = "o";
})(ge || (ge = {}));
var Zs;
(function(n) {
  n.DASH = "d", n.HLS = "h", n.SMOOTH = "s", n.OTHER = "o";
})(Zs || (Zs = {}));
var Qe;
(function(n) {
  n.OBJECT = "CMCD-Object", n.REQUEST = "CMCD-Request", n.SESSION = "CMCD-Session", n.STATUS = "CMCD-Status";
})(Qe || (Qe = {}));
const eh = {
  [Qe.OBJECT]: ["br", "d", "ot", "tb"],
  [Qe.REQUEST]: ["bl", "dl", "mtp", "nor", "nrr", "su"],
  [Qe.SESSION]: ["cid", "pr", "sf", "sid", "st", "v"],
  [Qe.STATUS]: ["bs", "rtp"]
};
class ft {
  constructor(e, t) {
    Array.isArray(e) && (e = e.map((s) => s instanceof ft ? s : new ft(s))), this.value = e, this.params = t;
  }
}
const th = "Dict";
function sh(n) {
  return Array.isArray(n) ? JSON.stringify(n) : n instanceof Map ? "Map{}" : n instanceof Set ? "Set{}" : typeof n == "object" ? JSON.stringify(n) : String(n);
}
function ih(n, e, t, s) {
  return new Error(`failed to ${n} "${sh(e)}" as ${t}`, {
    cause: s
  });
}
function Me(n, e, t) {
  return ih("serialize", n, e, t);
}
class la {
  constructor(e) {
    this.description = e;
  }
}
const Vr = "Bare Item", rh = "Boolean";
function nh(n) {
  if (typeof n != "boolean")
    throw Me(n, rh);
  return n ? "?1" : "?0";
}
const ah = "Byte Sequence";
function oh(n) {
  if (ArrayBuffer.isView(n) === !1)
    throw Me(n, ah);
  return `:${Mo(n)}:`;
}
const lh = "Integer";
function ch(n) {
  return n < -999999999999999 || 999999999999999 < n;
}
function ca(n) {
  if (ch(n))
    throw Me(n, lh);
  return n.toString();
}
function hh(n) {
  return `@${ca(n.getTime() / 1e3)}`;
}
const uh = "Decimal";
function dh(n) {
  const e = An(n, 3);
  if (Math.floor(Math.abs(e)).toString().length > 12)
    throw Me(n, uh);
  const t = e.toString();
  return t.includes(".") ? t : `${t}.0`;
}
const fh = "String", gh = /[\x00-\x1f\x7f]+/;
function mh(n) {
  if (gh.test(n))
    throw Me(n, fh);
  return `"${n.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}
function ph(n) {
  return n.description || n.toString().slice(7, -1);
}
const yh = "Token";
function Hr(n) {
  const e = ph(n);
  if (/^([a-zA-Z*])([!#$%&'*+\-.^_`|~\w:/]*)$/.test(e) === !1)
    throw Me(e, yh);
  return e;
}
function ei(n) {
  switch (typeof n) {
    case "number":
      if (!O(n))
        throw Me(n, Vr);
      return Number.isInteger(n) ? ca(n) : dh(n);
    case "string":
      return mh(n);
    case "symbol":
      return Hr(n);
    case "boolean":
      return nh(n);
    case "object":
      if (n instanceof Date)
        return hh(n);
      if (n instanceof Uint8Array)
        return oh(n);
      if (n instanceof la)
        return Hr(n);
    default:
      throw Me(n, Vr);
  }
}
const Eh = "Key";
function ti(n) {
  if (/^[a-z*][a-z0-9\-_.*]*$/.test(n) === !1)
    throw Me(n, Eh);
  return n;
}
function bi(n) {
  return n == null ? "" : Object.entries(n).map(([e, t]) => t === !0 ? `;${ti(e)}` : `;${ti(e)}=${ei(t)}`).join("");
}
function ha(n) {
  return n instanceof ft ? `${ei(n.value)}${bi(n.params)}` : ei(n);
}
function Th(n) {
  return `(${n.value.map(ha).join(" ")})${bi(n.params)}`;
}
function xh(n, e = {
  whitespace: !0
}) {
  if (typeof n != "object")
    throw Me(n, th);
  const t = n instanceof Map ? n.entries() : Object.entries(n), s = e != null && e.whitespace ? " " : "";
  return Array.from(t).map(([i, r]) => {
    r instanceof ft || (r = new ft(r));
    let a = ti(i);
    return r.value === !0 ? a += bi(r.params) : (a += "=", Array.isArray(r.value) ? a += Th(r) : a += ha(r)), a;
  }).join(`,${s}`);
}
function Sh(n, e) {
  return xh(n, e);
}
function vh(n) {
  return n === "ot" || n === "sf" || n === "st";
}
function Ah(n) {
  return typeof n == "number" ? O(n) : n != null && n !== "" && n !== !1;
}
const jt = (n) => Math.round(n), Lh = (n, e) => (e != null && e.baseUrl && (n = No(n, e.baseUrl)), encodeURIComponent(n)), Kt = (n) => jt(n / 100) * 100, Rh = {
  /**
   * Bitrate (kbps) rounded integer
   */
  br: jt,
  /**
   * Duration (milliseconds) rounded integer
   */
  d: jt,
  /**
   * Buffer Length (milliseconds) rounded nearest 100ms
   */
  bl: Kt,
  /**
   * Deadline (milliseconds) rounded nearest 100ms
   */
  dl: Kt,
  /**
   * Measured Throughput (kbps) rounded nearest 100kbps
   */
  mtp: Kt,
  /**
   * Next Object Request URL encoded
   */
  nor: Lh,
  /**
   * Requested maximum throughput (kbps) rounded nearest 100kbps
   */
  rtp: Kt,
  /**
   * Top Bitrate (kbps) rounded integer
   */
  tb: jt
};
function _h(n, e) {
  const t = {};
  if (n == null || typeof n != "object")
    return t;
  const s = Object.keys(n).sort(), i = ae({}, Rh, e == null ? void 0 : e.formatters), r = e == null ? void 0 : e.filter;
  return s.forEach((a) => {
    if (r != null && r(a))
      return;
    let o = n[a];
    const l = i[a];
    l && (o = l(o, e)), !(a === "v" && o === 1) && (a == "pr" && o === 1 || Ah(o) && (vh(a) && typeof o == "string" && (o = new la(o)), t[a] = o));
  }), t;
}
function ua(n, e = {}) {
  return n ? Sh(_h(n, e), ae({
    whitespace: !1
  }, e)) : "";
}
function bh(n, e = {}) {
  const t = {};
  if (!n)
    return t;
  const s = Object.entries(n), i = Object.entries(eh).concat(Object.entries((e == null ? void 0 : e.customHeaderMap) || {})), r = s.reduce((a, o) => {
    var l, c;
    const [h, u] = o, d = ((l = i.find((g) => g[1].includes(h))) === null || l === void 0 ? void 0 : l[0]) || Qe.REQUEST;
    return (c = a[d]) !== null && c !== void 0 || (a[d] = {}), a[d][h] = u, a;
  }, {});
  return Object.entries(r).reduce((a, [o, l]) => (a[o] = ua(l, e), a), t);
}
function Ih(n, e, t) {
  return ae(n, bh(e, t));
}
const Dh = "CMCD";
function Ch(n, e = {}) {
  if (!n)
    return "";
  const t = ua(n, e);
  return `${Dh}=${encodeURIComponent(t)}`;
}
const Wr = /CMCD=[^&#]+/;
function wh(n, e, t) {
  const s = Ch(e, t);
  if (!s)
    return n;
  if (Wr.test(n))
    return n.replace(Wr, s);
  const i = n.includes("?") ? "&" : "?";
  return `${n}${i}${s}`;
}
class kh {
  // eslint-disable-line no-restricted-globals
  constructor(e) {
    this.hls = void 0, this.config = void 0, this.media = void 0, this.sid = void 0, this.cid = void 0, this.useHeaders = !1, this.includeKeys = void 0, this.initialized = !1, this.starved = !1, this.buffering = !0, this.audioBuffer = void 0, this.videoBuffer = void 0, this.onWaiting = () => {
      this.initialized && (this.starved = !0), this.buffering = !0;
    }, this.onPlaying = () => {
      this.initialized || (this.initialized = !0), this.buffering = !1;
    }, this.applyPlaylistData = (i) => {
      try {
        this.apply(i, {
          ot: ge.MANIFEST,
          su: !this.initialized
        });
      } catch (r) {
        this.hls.logger.warn("Could not generate manifest CMCD data.", r);
      }
    }, this.applyFragmentData = (i) => {
      try {
        const {
          frag: r,
          part: a
        } = i, o = this.hls.levels[r.level], l = this.getObjectType(r), c = {
          d: (a || r).duration * 1e3,
          ot: l
        };
        (l === ge.VIDEO || l === ge.AUDIO || l == ge.MUXED) && (c.br = o.bitrate / 1e3, c.tb = this.getTopBandwidth(l) / 1e3, c.bl = this.getBufferLength(l));
        const h = a ? this.getNextPart(a) : this.getNextFrag(r);
        h != null && h.url && h.url !== r.url && (c.nor = h.url), this.apply(i, c);
      } catch (r) {
        this.hls.logger.warn("Could not generate segment CMCD data.", r);
      }
    }, this.hls = e;
    const t = this.config = e.config, {
      cmcd: s
    } = t;
    s != null && (t.pLoader = this.createPlaylistLoader(), t.fLoader = this.createFragmentLoader(), this.sid = s.sessionId || Uo(), this.cid = s.contentId, this.useHeaders = s.useHeaders === !0, this.includeKeys = s.includeKeys, this.registerListeners());
  }
  registerListeners() {
    const e = this.hls;
    e.on(p.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(p.MEDIA_DETACHED, this.onMediaDetached, this), e.on(p.BUFFER_CREATED, this.onBufferCreated, this);
  }
  unregisterListeners() {
    const e = this.hls;
    e.off(p.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(p.MEDIA_DETACHED, this.onMediaDetached, this), e.off(p.BUFFER_CREATED, this.onBufferCreated, this);
  }
  destroy() {
    this.unregisterListeners(), this.onMediaDetached(), this.hls = this.config = this.audioBuffer = this.videoBuffer = null, this.onWaiting = this.onPlaying = this.media = null;
  }
  onMediaAttached(e, t) {
    this.media = t.media, this.media.addEventListener("waiting", this.onWaiting), this.media.addEventListener("playing", this.onPlaying);
  }
  onMediaDetached() {
    this.media && (this.media.removeEventListener("waiting", this.onWaiting), this.media.removeEventListener("playing", this.onPlaying), this.media = null);
  }
  onBufferCreated(e, t) {
    var s, i;
    this.audioBuffer = (s = t.tracks.audio) == null ? void 0 : s.buffer, this.videoBuffer = (i = t.tracks.video) == null ? void 0 : i.buffer;
  }
  /**
   * Create baseline CMCD data
   */
  createData() {
    var e;
    return {
      v: 1,
      sf: Zs.HLS,
      sid: this.sid,
      cid: this.cid,
      pr: (e = this.media) == null ? void 0 : e.playbackRate,
      mtp: this.hls.bandwidthEstimate / 1e3
    };
  }
  /**
   * Apply CMCD data to a request.
   */
  apply(e, t = {}) {
    ae(t, this.createData());
    const s = t.ot === ge.INIT || t.ot === ge.VIDEO || t.ot === ge.MUXED;
    this.starved && s && (t.bs = !0, t.su = !0, this.starved = !1), t.su == null && (t.su = this.buffering);
    const {
      includeKeys: i
    } = this;
    i && (t = Object.keys(t).reduce((a, o) => (i.includes(o) && (a[o] = t[o]), a), {}));
    const r = {
      baseUrl: e.url
    };
    this.useHeaders ? (e.headers || (e.headers = {}), Ih(e.headers, t, r)) : e.url = wh(e.url, t, r);
  }
  getNextFrag(e) {
    var t;
    const s = (t = this.hls.levels[e.level]) == null ? void 0 : t.details;
    if (s) {
      const i = e.sn - s.startSN;
      return s.fragments[i + 1];
    }
  }
  getNextPart(e) {
    var t, s;
    const {
      index: i,
      fragment: r
    } = e, a = (t = this.hls.levels[r.level]) == null || (s = t.details) == null ? void 0 : s.partList;
    if (a) {
      const {
        sn: o
      } = r;
      for (let l = a.length - 1; l >= 0; l--) {
        const c = a[l];
        if (c.index === i && c.fragment.sn === o)
          return a[l + 1];
      }
    }
  }
  /**
   * The CMCD object type.
   */
  getObjectType(e) {
    const {
      type: t
    } = e;
    if (t === "subtitle")
      return ge.TIMED_TEXT;
    if (e.sn === "initSegment")
      return ge.INIT;
    if (t === "audio")
      return ge.AUDIO;
    if (t === "main")
      return this.hls.audioTracks.length ? ge.VIDEO : ge.MUXED;
  }
  /**
   * Get the highest bitrate.
   */
  getTopBandwidth(e) {
    let t = 0, s;
    const i = this.hls;
    if (e === ge.AUDIO)
      s = i.audioTracks;
    else {
      const r = i.maxAutoLevel, a = r > -1 ? r + 1 : i.levels.length;
      s = i.levels.slice(0, a);
    }
    for (const r of s)
      r.bitrate > t && (t = r.bitrate);
    return t > 0 ? t : NaN;
  }
  /**
   * Get the buffer length for a media type in milliseconds
   */
  getBufferLength(e) {
    const t = this.media, s = e === ge.AUDIO ? this.audioBuffer : this.videoBuffer;
    return !s || !t ? NaN : ee.bufferInfo(s, t.currentTime, this.config.maxBufferHole).len * 1e3;
  }
  /**
   * Create a playlist loader
   */
  createPlaylistLoader() {
    const {
      pLoader: e
    } = this.config, t = this.applyPlaylistData, s = e || this.config.loader;
    return class {
      constructor(r) {
        this.loader = void 0, this.loader = new s(r);
      }
      get stats() {
        return this.loader.stats;
      }
      get context() {
        return this.loader.context;
      }
      destroy() {
        this.loader.destroy();
      }
      abort() {
        this.loader.abort();
      }
      load(r, a, o) {
        t(r), this.loader.load(r, a, o);
      }
    };
  }
  /**
   * Create a playlist loader
   */
  createFragmentLoader() {
    const {
      fLoader: e
    } = this.config, t = this.applyFragmentData, s = e || this.config.loader;
    return class {
      constructor(r) {
        this.loader = void 0, this.loader = new s(r);
      }
      get stats() {
        return this.loader.stats;
      }
      get context() {
        return this.loader.context;
      }
      destroy() {
        this.loader.destroy();
      }
      abort() {
        this.loader.abort();
      }
      load(r, a, o) {
        t(r), this.loader.load(r, a, o);
      }
    };
  }
}
const Ph = 3e5;
class Fh extends qe {
  constructor(e) {
    super("content-steering", e.logger), this.hls = void 0, this.loader = null, this.uri = null, this.pathwayId = ".", this._pathwayPriority = null, this.timeToLoad = 300, this.reloadTimer = -1, this.updated = 0, this.started = !1, this.enabled = !0, this.levels = null, this.audioTracks = null, this.subtitleTracks = null, this.penalizedPathways = {}, this.hls = e, this.registerListeners();
  }
  registerListeners() {
    const e = this.hls;
    e.on(p.MANIFEST_LOADING, this.onManifestLoading, this), e.on(p.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(p.MANIFEST_PARSED, this.onManifestParsed, this), e.on(p.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const e = this.hls;
    e && (e.off(p.MANIFEST_LOADING, this.onManifestLoading, this), e.off(p.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(p.MANIFEST_PARSED, this.onManifestParsed, this), e.off(p.ERROR, this.onError, this));
  }
  pathways() {
    return (this.levels || []).reduce((e, t) => (e.indexOf(t.pathwayId) === -1 && e.push(t.pathwayId), e), []);
  }
  get pathwayPriority() {
    return this._pathwayPriority;
  }
  set pathwayPriority(e) {
    this.updatePathwayPriority(e);
  }
  startLoad() {
    if (this.started = !0, this.clearTimeout(), this.enabled && this.uri) {
      if (this.updated) {
        const e = this.timeToLoad * 1e3 - (performance.now() - this.updated);
        if (e > 0) {
          this.scheduleRefresh(this.uri, e);
          return;
        }
      }
      this.loadSteeringManifest(this.uri);
    }
  }
  stopLoad() {
    this.started = !1, this.loader && (this.loader.destroy(), this.loader = null), this.clearTimeout();
  }
  clearTimeout() {
    this.reloadTimer !== -1 && (self.clearTimeout(this.reloadTimer), this.reloadTimer = -1);
  }
  destroy() {
    this.unregisterListeners(), this.stopLoad(), this.hls = null, this.levels = this.audioTracks = this.subtitleTracks = null;
  }
  removeLevel(e) {
    const t = this.levels;
    t && (this.levels = t.filter((s) => s !== e));
  }
  onManifestLoading() {
    this.stopLoad(), this.enabled = !0, this.timeToLoad = 300, this.updated = 0, this.uri = null, this.pathwayId = ".", this.levels = this.audioTracks = this.subtitleTracks = null;
  }
  onManifestLoaded(e, t) {
    const {
      contentSteering: s
    } = t;
    s !== null && (this.pathwayId = s.pathwayId, this.uri = s.uri, this.started && this.startLoad());
  }
  onManifestParsed(e, t) {
    this.audioTracks = t.audioTracks, this.subtitleTracks = t.subtitleTracks;
  }
  onError(e, t) {
    const {
      errorAction: s
    } = t;
    if ((s == null ? void 0 : s.action) === me.SendAlternateToPenaltyBox && s.flags === we.MoveAllAlternatesMatchingHost) {
      const i = this.levels;
      let r = this._pathwayPriority, a = this.pathwayId;
      if (t.context) {
        const {
          groupId: o,
          pathwayId: l,
          type: c
        } = t.context;
        o && i ? a = this.getPathwayForGroupId(o, c, a) : l && (a = l);
      }
      a in this.penalizedPathways || (this.penalizedPathways[a] = performance.now()), !r && i && (r = this.pathways()), r && r.length > 1 && (this.updatePathwayPriority(r), s.resolved = this.pathwayId !== a), s.resolved || this.warn(`Could not resolve ${t.details} ("${t.error.message}") with content-steering for Pathway: ${a} levels: ${i && i.length} priorities: ${JSON.stringify(r)} penalized: ${JSON.stringify(this.penalizedPathways)}`);
    }
  }
  filterParsedLevels(e) {
    this.levels = e;
    let t = this.getLevelsForPathway(this.pathwayId);
    if (t.length === 0) {
      const s = e[0].pathwayId;
      this.log(`No levels found in Pathway ${this.pathwayId}. Setting initial Pathway to "${s}"`), t = this.getLevelsForPathway(s), this.pathwayId = s;
    }
    return t.length !== e.length ? (this.log(`Found ${t.length}/${e.length} levels in Pathway "${this.pathwayId}"`), t) : e;
  }
  getLevelsForPathway(e) {
    return this.levels === null ? [] : this.levels.filter((t) => e === t.pathwayId);
  }
  updatePathwayPriority(e) {
    this._pathwayPriority = e;
    let t;
    const s = this.penalizedPathways, i = performance.now();
    Object.keys(s).forEach((r) => {
      i - s[r] > Ph && delete s[r];
    });
    for (let r = 0; r < e.length; r++) {
      const a = e[r];
      if (a in s)
        continue;
      if (a === this.pathwayId)
        return;
      const o = this.hls.nextLoadLevel, l = this.hls.levels[o];
      if (t = this.getLevelsForPathway(a), t.length > 0) {
        this.log(`Setting Pathway to "${a}"`), this.pathwayId = a, Cn(t), this.hls.trigger(p.LEVELS_UPDATED, {
          levels: t
        });
        const c = this.hls.levels[o];
        l && c && this.levels && (c.attrs["STABLE-VARIANT-ID"] !== l.attrs["STABLE-VARIANT-ID"] && c.bitrate !== l.bitrate && this.log(`Unstable Pathways change from bitrate ${l.bitrate} to ${c.bitrate}`), this.hls.nextLoadLevel = o);
        break;
      }
    }
  }
  getPathwayForGroupId(e, t, s) {
    const i = this.getLevelsForPathway(s).concat(this.levels || []);
    for (let r = 0; r < i.length; r++)
      if (t === j.AUDIO_TRACK && i[r].hasAudioGroup(e) || t === j.SUBTITLE_TRACK && i[r].hasSubtitleGroup(e))
        return i[r].pathwayId;
    return s;
  }
  clonePathways(e) {
    const t = this.levels;
    if (!t)
      return;
    const s = {}, i = {};
    e.forEach((r) => {
      const {
        ID: a,
        "BASE-ID": o,
        "URI-REPLACEMENT": l
      } = r;
      if (t.some((h) => h.pathwayId === a))
        return;
      const c = this.getLevelsForPathway(o).map((h) => {
        const u = new ne(h.attrs);
        u["PATHWAY-ID"] = a;
        const d = u.AUDIO && `${u.AUDIO}_clone_${a}`, g = u.SUBTITLES && `${u.SUBTITLES}_clone_${a}`;
        d && (s[u.AUDIO] = d, u.AUDIO = d), g && (i[u.SUBTITLES] = g, u.SUBTITLES = g);
        const f = da(h.uri, u["STABLE-VARIANT-ID"], "PER-VARIANT-URIS", l), m = new ht({
          attrs: u,
          audioCodec: h.audioCodec,
          bitrate: h.bitrate,
          height: h.height,
          name: h.name,
          url: f,
          videoCodec: h.videoCodec,
          width: h.width
        });
        if (h.audioGroups)
          for (let y = 1; y < h.audioGroups.length; y++)
            m.addGroupId("audio", `${h.audioGroups[y]}_clone_${a}`);
        if (h.subtitleGroups)
          for (let y = 1; y < h.subtitleGroups.length; y++)
            m.addGroupId("text", `${h.subtitleGroups[y]}_clone_${a}`);
        return m;
      });
      t.push(...c), Yr(this.audioTracks, s, l, a), Yr(this.subtitleTracks, i, l, a);
    });
  }
  loadSteeringManifest(e) {
    const t = this.hls.config, s = t.loader;
    this.loader && this.loader.destroy(), this.loader = new s(t);
    let i;
    try {
      i = new self.URL(e);
    } catch {
      this.enabled = !1, this.log(`Failed to parse Steering Manifest URI: ${e}`);
      return;
    }
    if (i.protocol !== "data:") {
      const h = (this.hls.bandwidthEstimate || t.abrEwmaDefaultEstimate) | 0;
      i.searchParams.set("_HLS_pathway", this.pathwayId), i.searchParams.set("_HLS_throughput", "" + h);
    }
    const r = {
      responseType: "json",
      url: i.href
    }, a = t.steeringManifestLoadPolicy.default, o = a.errorRetry || a.timeoutRetry || {}, l = {
      loadPolicy: a,
      timeout: a.maxLoadTimeMs,
      maxRetry: o.maxNumRetry || 0,
      retryDelay: o.retryDelayMs || 0,
      maxRetryDelay: o.maxRetryDelayMs || 0
    }, c = {
      onSuccess: (h, u, d, g) => {
        this.log(`Loaded steering manifest: "${i}"`);
        const f = h.data;
        if ((f == null ? void 0 : f.VERSION) !== 1) {
          this.log(`Steering VERSION ${f.VERSION} not supported!`);
          return;
        }
        this.updated = performance.now(), this.timeToLoad = f.TTL;
        const {
          "RELOAD-URI": m,
          "PATHWAY-CLONES": y,
          "PATHWAY-PRIORITY": E
        } = f;
        if (m)
          try {
            this.uri = new self.URL(m, i).href;
          } catch {
            this.enabled = !1, this.log(`Failed to parse Steering Manifest RELOAD-URI: ${m}`);
            return;
          }
        this.scheduleRefresh(this.uri || d.url), y && this.clonePathways(y);
        const x = {
          steeringManifest: f,
          url: i.toString()
        };
        this.hls.trigger(p.STEERING_MANIFEST_LOADED, x), E && this.updatePathwayPriority(E);
      },
      onError: (h, u, d, g) => {
        if (this.log(`Error loading steering manifest: ${h.code} ${h.text} (${u.url})`), this.stopLoad(), h.code === 410) {
          this.enabled = !1, this.log(`Steering manifest ${u.url} no longer available`);
          return;
        }
        let f = this.timeToLoad * 1e3;
        if (h.code === 429) {
          const m = this.loader;
          if (typeof (m == null ? void 0 : m.getResponseHeader) == "function") {
            const y = m.getResponseHeader("Retry-After");
            y && (f = parseFloat(y) * 1e3);
          }
          this.log(`Steering manifest ${u.url} rate limited`);
          return;
        }
        this.scheduleRefresh(this.uri || u.url, f);
      },
      onTimeout: (h, u, d) => {
        this.log(`Timeout loading steering manifest (${u.url})`), this.scheduleRefresh(this.uri || u.url);
      }
    };
    this.log(`Requesting steering manifest: ${i}`), this.loader.load(r, l, c);
  }
  scheduleRefresh(e, t = this.timeToLoad * 1e3) {
    this.clearTimeout(), this.reloadTimer = self.setTimeout(() => {
      var s;
      const i = (s = this.hls) == null ? void 0 : s.media;
      if (i && !i.ended) {
        this.loadSteeringManifest(e);
        return;
      }
      this.scheduleRefresh(e, this.timeToLoad * 1e3);
    }, t);
  }
}
function Yr(n, e, t, s) {
  n && Object.keys(e).forEach((i) => {
    const r = n.filter((a) => a.groupId === i).map((a) => {
      const o = ae({}, a);
      return o.details = void 0, o.attrs = new ne(o.attrs), o.url = o.attrs.URI = da(a.url, a.attrs["STABLE-RENDITION-ID"], "PER-RENDITION-URIS", t), o.groupId = o.attrs["GROUP-ID"] = e[i], o.attrs["PATHWAY-ID"] = s, o;
    });
    n.push(...r);
  });
}
function da(n, e, t, s) {
  const {
    HOST: i,
    PARAMS: r,
    [t]: a
  } = s;
  let o;
  e && (o = a == null ? void 0 : a[e], o && (n = o));
  const l = new self.URL(n);
  return i && !o && (l.host = i), r && Object.keys(r).sort().forEach((c) => {
    c && l.searchParams.set(c, r[c]);
  }), l.href;
}
const Oh = /^age:\s*[\d.]+\s*$/im;
class fa {
  constructor(e) {
    this.xhrSetup = void 0, this.requestTimeout = void 0, this.retryTimeout = void 0, this.retryDelay = void 0, this.config = null, this.callbacks = null, this.context = null, this.loader = null, this.stats = void 0, this.xhrSetup = e && e.xhrSetup || null, this.stats = new us(), this.retryDelay = 0;
  }
  destroy() {
    this.callbacks = null, this.abortInternal(), this.loader = null, this.config = null, this.context = null, this.xhrSetup = null;
  }
  abortInternal() {
    const e = this.loader;
    self.clearTimeout(this.requestTimeout), self.clearTimeout(this.retryTimeout), e && (e.onreadystatechange = null, e.onprogress = null, e.readyState !== 4 && (this.stats.aborted = !0, e.abort()));
  }
  abort() {
    var e;
    this.abortInternal(), (e = this.callbacks) != null && e.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader);
  }
  load(e, t, s) {
    if (this.stats.loading.start)
      throw new Error("Loader can only be used once.");
    this.stats.loading.start = self.performance.now(), this.context = e, this.config = t, this.callbacks = s, this.loadInternal();
  }
  loadInternal() {
    const {
      config: e,
      context: t
    } = this;
    if (!e || !t)
      return;
    const s = this.loader = new self.XMLHttpRequest(), i = this.stats;
    i.loading.first = 0, i.loaded = 0, i.aborted = !1;
    const r = this.xhrSetup;
    r ? Promise.resolve().then(() => {
      if (!(this.loader !== s || this.stats.aborted))
        return r(s, t.url);
    }).catch((a) => {
      if (!(this.loader !== s || this.stats.aborted))
        return s.open("GET", t.url, !0), r(s, t.url);
    }).then(() => {
      this.loader !== s || this.stats.aborted || this.openAndSendXhr(s, t, e);
    }).catch((a) => {
      this.callbacks.onError({
        code: s.status,
        text: a.message
      }, t, s, i);
    }) : this.openAndSendXhr(s, t, e);
  }
  openAndSendXhr(e, t, s) {
    e.readyState || e.open("GET", t.url, !0);
    const i = t.headers, {
      maxTimeToFirstByteMs: r,
      maxLoadTimeMs: a
    } = s.loadPolicy;
    if (i)
      for (const o in i)
        e.setRequestHeader(o, i[o]);
    t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)), e.onreadystatechange = this.readystatechange.bind(this), e.onprogress = this.loadprogress.bind(this), e.responseType = t.responseType, self.clearTimeout(this.requestTimeout), s.timeout = r && O(r) ? r : a, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), s.timeout), e.send();
  }
  readystatechange() {
    const {
      context: e,
      loader: t,
      stats: s
    } = this;
    if (!e || !t)
      return;
    const i = t.readyState, r = this.config;
    if (!s.aborted && i >= 2 && (s.loading.first === 0 && (s.loading.first = Math.max(self.performance.now(), s.loading.start), r.timeout !== r.loadPolicy.maxLoadTimeMs && (self.clearTimeout(this.requestTimeout), r.timeout = r.loadPolicy.maxLoadTimeMs, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), r.loadPolicy.maxLoadTimeMs - (s.loading.first - s.loading.start)))), i === 4)) {
      self.clearTimeout(this.requestTimeout), t.onreadystatechange = null, t.onprogress = null;
      const a = t.status, o = t.responseType !== "text";
      if (a >= 200 && a < 300 && (o && t.response || t.responseText !== null)) {
        s.loading.end = Math.max(self.performance.now(), s.loading.first);
        const l = o ? t.response : t.responseText, c = t.responseType === "arraybuffer" ? l.byteLength : l.length;
        if (s.loaded = s.total = c, s.bwEstimate = s.total * 8e3 / (s.loading.end - s.loading.first), !this.callbacks)
          return;
        const h = this.callbacks.onProgress;
        if (h && h(s, e, l, t), !this.callbacks)
          return;
        const u = {
          url: t.responseURL,
          data: l,
          code: a
        };
        this.callbacks.onSuccess(u, s, e, t);
      } else {
        const l = r.loadPolicy.errorRetry, c = s.retry, h = {
          url: e.url,
          data: void 0,
          code: a
        };
        os(l, c, !1, h) ? this.retry(l) : (q.error(`${a} while loading ${e.url}`), this.callbacks.onError({
          code: a,
          text: t.statusText
        }, e, t, s));
      }
    }
  }
  loadtimeout() {
    if (!this.config) return;
    const e = this.config.loadPolicy.timeoutRetry, t = this.stats.retry;
    if (os(e, t, !0))
      this.retry(e);
    else {
      var s;
      q.warn(`timeout while loading ${(s = this.context) == null ? void 0 : s.url}`);
      const i = this.callbacks;
      i && (this.abortInternal(), i.onTimeout(this.stats, this.context, this.loader));
    }
  }
  retry(e) {
    const {
      context: t,
      stats: s
    } = this;
    this.retryDelay = di(e, s.retry), s.retry++, q.warn(`${status ? "HTTP Status " + status : "Timeout"} while loading ${t == null ? void 0 : t.url}, retrying ${s.retry}/${e.maxNumRetry} in ${this.retryDelay}ms`), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay);
  }
  loadprogress(e) {
    const t = this.stats;
    t.loaded = e.loaded, e.lengthComputable && (t.total = e.total);
  }
  getCacheAge() {
    let e = null;
    if (this.loader && Oh.test(this.loader.getAllResponseHeaders())) {
      const t = this.loader.getResponseHeader("age");
      e = t ? parseFloat(t) : null;
    }
    return e;
  }
  getResponseHeader(e) {
    return this.loader && new RegExp(`^${e}:\\s*[\\d.]+\\s*$`, "im").test(this.loader.getAllResponseHeaders()) ? this.loader.getResponseHeader(e) : null;
  }
}
function Mh() {
  if (
    // @ts-ignore
    self.fetch && self.AbortController && self.ReadableStream && self.Request
  )
    try {
      return new self.ReadableStream({}), !0;
    } catch {
    }
  return !1;
}
const Nh = /(\d+)-(\d+)\/(\d+)/;
class qr {
  constructor(e) {
    this.fetchSetup = void 0, this.requestTimeout = void 0, this.request = null, this.response = null, this.controller = void 0, this.context = null, this.config = null, this.callbacks = null, this.stats = void 0, this.loader = null, this.fetchSetup = e.fetchSetup || Gh, this.controller = new self.AbortController(), this.stats = new us();
  }
  destroy() {
    this.loader = this.callbacks = this.context = this.config = this.request = null, this.abortInternal(), this.response = null, this.fetchSetup = this.controller = this.stats = null;
  }
  abortInternal() {
    this.controller && !this.stats.loading.end && (this.stats.aborted = !0, this.controller.abort());
  }
  abort() {
    var e;
    this.abortInternal(), (e = this.callbacks) != null && e.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response);
  }
  load(e, t, s) {
    const i = this.stats;
    if (i.loading.start)
      throw new Error("Loader can only be used once.");
    i.loading.start = self.performance.now();
    const r = Uh(e, this.controller.signal), a = s.onProgress, o = e.responseType === "arraybuffer", l = o ? "byteLength" : "length", {
      maxTimeToFirstByteMs: c,
      maxLoadTimeMs: h
    } = t.loadPolicy;
    this.context = e, this.config = t, this.callbacks = s, this.request = this.fetchSetup(e, r), self.clearTimeout(this.requestTimeout), t.timeout = c && O(c) ? c : h, this.requestTimeout = self.setTimeout(() => {
      this.abortInternal(), s.onTimeout(i, e, this.response);
    }, t.timeout), self.fetch(this.request).then((u) => {
      this.response = this.loader = u;
      const d = Math.max(self.performance.now(), i.loading.start);
      if (self.clearTimeout(this.requestTimeout), t.timeout = h, this.requestTimeout = self.setTimeout(() => {
        this.abortInternal(), s.onTimeout(i, e, this.response);
      }, h - (d - i.loading.start)), !u.ok) {
        const {
          status: g,
          statusText: f
        } = u;
        throw new Kh(f || "fetch, bad network response", g, u);
      }
      return i.loading.first = d, i.total = $h(u.headers) || i.total, a && O(t.highWaterMark) ? this.loadProgressively(u, i, e, t.highWaterMark, a) : o ? u.arrayBuffer() : e.responseType === "json" ? u.json() : u.text();
    }).then((u) => {
      const d = this.response;
      if (!d)
        throw new Error("loader destroyed");
      self.clearTimeout(this.requestTimeout), i.loading.end = Math.max(self.performance.now(), i.loading.first);
      const g = u[l];
      g && (i.loaded = i.total = g);
      const f = {
        url: d.url,
        data: u,
        code: d.status
      };
      a && !O(t.highWaterMark) && a(i, e, u, d), s.onSuccess(f, i, e, d);
    }).catch((u) => {
      if (self.clearTimeout(this.requestTimeout), i.aborted)
        return;
      const d = u && u.code || 0, g = u ? u.message : null;
      s.onError({
        code: d,
        text: g
      }, e, u ? u.details : null, i);
    });
  }
  getCacheAge() {
    let e = null;
    if (this.response) {
      const t = this.response.headers.get("age");
      e = t ? parseFloat(t) : null;
    }
    return e;
  }
  getResponseHeader(e) {
    return this.response ? this.response.headers.get(e) : null;
  }
  loadProgressively(e, t, s, i = 0, r) {
    const a = new Fn(), o = e.body.getReader(), l = () => o.read().then((c) => {
      if (c.done)
        return a.dataLength && r(t, s, a.flush(), e), Promise.resolve(new ArrayBuffer(0));
      const h = c.value, u = h.length;
      return t.loaded += u, u < i || a.dataLength ? (a.push(h), a.dataLength >= i && r(t, s, a.flush(), e)) : r(t, s, h, e), l();
    }).catch(() => Promise.reject());
    return l();
  }
}
function Uh(n, e) {
  const t = {
    method: "GET",
    mode: "cors",
    credentials: "same-origin",
    signal: e,
    headers: new self.Headers(ae({}, n.headers))
  };
  return n.rangeEnd && t.headers.set("Range", "bytes=" + n.rangeStart + "-" + String(n.rangeEnd - 1)), t;
}
function Bh(n) {
  const e = Nh.exec(n);
  if (e)
    return parseInt(e[2]) - parseInt(e[1]) + 1;
}
function $h(n) {
  const e = n.get("Content-Range");
  if (e) {
    const s = Bh(e);
    if (O(s))
      return s;
  }
  const t = n.get("Content-Length");
  if (t)
    return parseInt(t);
}
function Gh(n, e) {
  return new self.Request(n.url, e);
}
class Kh extends Error {
  constructor(e, t, s) {
    super(e), this.code = void 0, this.details = void 0, this.code = t, this.details = s;
  }
}
const Vh = /\s/, Hh = {
  newCue(n, e, t, s) {
    const i = [];
    let r, a, o, l, c;
    const h = self.VTTCue || self.TextTrackCue;
    for (let d = 0; d < s.rows.length; d++)
      if (r = s.rows[d], o = !0, l = 0, c = "", !r.isEmpty()) {
        var u;
        for (let m = 0; m < r.chars.length; m++)
          Vh.test(r.chars[m].uchar) && o ? l++ : (c += r.chars[m].uchar, o = !1);
        r.cueStartTime = e, e === t && (t += 1e-4), l >= 16 ? l-- : l++;
        const g = ia(c.trim()), f = Ri(e, t, g);
        n != null && (u = n.cues) != null && u.getCueById(f) || (a = new h(e, t, g), a.id = f, a.line = d + 1, a.align = "left", a.position = 10 + Math.min(80, Math.floor(l * 8 / 32) * 10), i.push(a));
      }
    return n && i.length && (i.sort((d, g) => d.line === "auto" || g.line === "auto" ? 0 : d.line > 8 && g.line > 8 ? g.line - d.line : d.line - g.line), i.forEach((d) => vn(n, d))), i;
  }
}, Wh = {
  maxTimeToFirstByteMs: 8e3,
  maxLoadTimeMs: 2e4,
  timeoutRetry: null,
  errorRetry: null
}, ga = he(he({
  autoStartLoad: !0,
  // used by stream-controller
  startPosition: -1,
  // used by stream-controller
  defaultAudioCodec: void 0,
  // used by stream-controller
  debug: !1,
  // used by logger
  capLevelOnFPSDrop: !1,
  // used by fps-controller
  capLevelToPlayerSize: !1,
  // used by cap-level-controller
  ignoreDevicePixelRatio: !1,
  // used by cap-level-controller
  preferManagedMediaSource: !0,
  initialLiveManifestSize: 1,
  // used by stream-controller
  maxBufferLength: 30,
  // used by stream-controller
  backBufferLength: 1 / 0,
  // used by buffer-controller
  frontBufferFlushThreshold: 1 / 0,
  maxBufferSize: 60 * 1e3 * 1e3,
  // used by stream-controller
  maxBufferHole: 0.1,
  // used by stream-controller
  highBufferWatchdogPeriod: 2,
  // used by stream-controller
  nudgeOffset: 0.1,
  // used by stream-controller
  nudgeMaxRetry: 3,
  // used by stream-controller
  maxFragLookUpTolerance: 0.25,
  // used by stream-controller
  liveSyncDurationCount: 3,
  // used by latency-controller
  liveSyncOnStallIncrease: 1,
  // used by latency-controller
  liveMaxLatencyDurationCount: 1 / 0,
  // used by latency-controller
  liveSyncDuration: void 0,
  // used by latency-controller
  liveMaxLatencyDuration: void 0,
  // used by latency-controller
  maxLiveSyncPlaybackRate: 1,
  // used by latency-controller
  liveDurationInfinity: !1,
  // used by buffer-controller
  /**
   * @deprecated use backBufferLength
   */
  liveBackBufferLength: null,
  // used by buffer-controller
  maxMaxBufferLength: 600,
  // used by stream-controller
  enableWorker: !0,
  // used by transmuxer
  workerPath: null,
  // used by transmuxer
  enableSoftwareAES: !0,
  // used by decrypter
  startLevel: void 0,
  // used by level-controller
  startFragPrefetch: !1,
  // used by stream-controller
  fpsDroppedMonitoringPeriod: 5e3,
  // used by fps-controller
  fpsDroppedMonitoringThreshold: 0.2,
  // used by fps-controller
  appendErrorMaxRetry: 3,
  // used by buffer-controller
  loader: fa,
  // loader: FetchLoader,
  fLoader: void 0,
  // used by fragment-loader
  pLoader: void 0,
  // used by playlist-loader
  xhrSetup: void 0,
  // used by xhr-loader
  licenseXhrSetup: void 0,
  // used by eme-controller
  licenseResponseCallback: void 0,
  // used by eme-controller
  abrController: El,
  bufferController: Rc,
  capLevelController: _i,
  errorController: al,
  fpsController: Zc,
  stretchShortVideoTrack: !1,
  // used by mp4-remuxer
  maxAudioFramesDrift: 1,
  // used by mp4-remuxer
  forceKeyFrameOnDiscontinuity: !0,
  // used by ts-demuxer
  abrEwmaFastLive: 3,
  // used by abr-controller
  abrEwmaSlowLive: 9,
  // used by abr-controller
  abrEwmaFastVoD: 3,
  // used by abr-controller
  abrEwmaSlowVoD: 9,
  // used by abr-controller
  abrEwmaDefaultEstimate: 5e5,
  // 500 kbps  // used by abr-controller
  abrEwmaDefaultEstimateMax: 5e6,
  // 5 mbps
  abrBandWidthFactor: 0.95,
  // used by abr-controller
  abrBandWidthUpFactor: 0.7,
  // used by abr-controller
  abrMaxWithRealBitrate: !1,
  // used by abr-controller
  maxStarvationDelay: 4,
  // used by abr-controller
  maxLoadingDelay: 4,
  // used by abr-controller
  minAutoBitrate: 0,
  // used by hls
  emeEnabled: !1,
  // used by eme-controller
  widevineLicenseUrl: void 0,
  // used by eme-controller
  drmSystems: {},
  // used by eme-controller
  drmSystemOptions: {},
  // used by eme-controller
  requestMediaKeySystemAccessFunc: un,
  // used by eme-controller
  testBandwidth: !0,
  progressive: !1,
  lowLatencyMode: !0,
  cmcd: void 0,
  enableDateRangeMetadataCues: !0,
  enableEmsgMetadataCues: !0,
  enableID3MetadataCues: !0,
  useMediaCapabilities: !0,
  certLoadPolicy: {
    default: Wh
  },
  keyLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 8e3,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 1,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 2e4,
        backoff: "linear"
      },
      errorRetry: {
        maxNumRetry: 8,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 2e4,
        backoff: "linear"
      }
    }
  },
  manifestLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1 / 0,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 2,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 1,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  playlistLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 2,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 2,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  fragLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 12e4,
      timeoutRetry: {
        maxNumRetry: 4,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 6,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  steeringManifestLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 2,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 1,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  // These default settings are deprecated in favor of the above policies
  // and are maintained for backwards compatibility
  manifestLoadingTimeOut: 1e4,
  manifestLoadingMaxRetry: 1,
  manifestLoadingRetryDelay: 1e3,
  manifestLoadingMaxRetryTimeout: 64e3,
  levelLoadingTimeOut: 1e4,
  levelLoadingMaxRetry: 4,
  levelLoadingRetryDelay: 1e3,
  levelLoadingMaxRetryTimeout: 64e3,
  fragLoadingTimeOut: 2e4,
  fragLoadingMaxRetry: 6,
  fragLoadingRetryDelay: 1e3,
  fragLoadingMaxRetryTimeout: 64e3
}, Yh()), {}, {
  subtitleStreamController: Sc,
  subtitleTrackController: Ac,
  timelineController: Qc,
  audioStreamController: Tc,
  audioTrackController: xc,
  emeController: ct,
  cmcdController: kh,
  contentSteeringController: Fh
});
function Yh() {
  return {
    cueHandler: Hh,
    // used by timeline-controller
    enableWebVTT: !0,
    // used by timeline-controller
    enableIMSC1: !0,
    // used by timeline-controller
    enableCEA708Captions: !0,
    // used by timeline-controller
    captionsTextTrack1Label: "English",
    // used by timeline-controller
    captionsTextTrack1LanguageCode: "en",
    // used by timeline-controller
    captionsTextTrack2Label: "Spanish",
    // used by timeline-controller
    captionsTextTrack2LanguageCode: "es",
    // used by timeline-controller
    captionsTextTrack3Label: "Unknown CC",
    // used by timeline-controller
    captionsTextTrack3LanguageCode: "",
    // used by timeline-controller
    captionsTextTrack4Label: "Unknown CC",
    // used by timeline-controller
    captionsTextTrack4LanguageCode: "",
    // used by timeline-controller
    renderTextTracksNatively: !0
  };
}
function qh(n, e, t) {
  if ((e.liveSyncDurationCount || e.liveMaxLatencyDurationCount) && (e.liveSyncDuration || e.liveMaxLatencyDuration))
    throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
  if (e.liveMaxLatencyDurationCount !== void 0 && (e.liveSyncDurationCount === void 0 || e.liveMaxLatencyDurationCount <= e.liveSyncDurationCount))
    throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
  if (e.liveMaxLatencyDuration !== void 0 && (e.liveSyncDuration === void 0 || e.liveMaxLatencyDuration <= e.liveSyncDuration))
    throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
  const s = si(n), i = ["manifest", "level", "frag"], r = ["TimeOut", "MaxRetry", "RetryDelay", "MaxRetryTimeout"];
  return i.forEach((a) => {
    const o = `${a === "level" ? "playlist" : a}LoadPolicy`, l = e[o] === void 0, c = [];
    r.forEach((h) => {
      const u = `${a}Loading${h}`, d = e[u];
      if (d !== void 0 && l) {
        c.push(u);
        const g = s[o].default;
        switch (e[o] = {
          default: g
        }, h) {
          case "TimeOut":
            g.maxLoadTimeMs = d, g.maxTimeToFirstByteMs = d;
            break;
          case "MaxRetry":
            g.errorRetry.maxNumRetry = d, g.timeoutRetry.maxNumRetry = d;
            break;
          case "RetryDelay":
            g.errorRetry.retryDelayMs = d, g.timeoutRetry.retryDelayMs = d;
            break;
          case "MaxRetryTimeout":
            g.errorRetry.maxRetryDelayMs = d, g.timeoutRetry.maxRetryDelayMs = d;
            break;
        }
      }
    }), c.length && t.warn(`hls.js config: "${c.join('", "')}" setting(s) are deprecated, use "${o}": ${JSON.stringify(e[o])}`);
  }), he(he({}, s), e);
}
function si(n) {
  return n && typeof n == "object" ? Array.isArray(n) ? n.map(si) : Object.keys(n).reduce((e, t) => (e[t] = si(n[t]), e), {}) : n;
}
function jh(n, e) {
  const t = n.loader;
  t !== qr && t !== fa ? (e.log("[config]: Custom loader detected, cannot enable progressive streaming"), n.progressive = !1) : Mh() && (n.loader = qr, n.progressive = !0, n.enableSoftwareAES = !0, e.log("[config]: Progressive streaming enabled, using FetchLoader"));
}
class zh extends gi {
  constructor(e, t) {
    super(e, "level-controller"), this._levels = [], this._firstLevel = -1, this._maxAutoLevel = -1, this._startLevel = void 0, this.currentLevel = null, this.currentLevelIndex = -1, this.manualLevelIndex = -1, this.steering = void 0, this.onParsedComplete = void 0, this.steering = t, this._registerListeners();
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e.on(p.MANIFEST_LOADING, this.onManifestLoading, this), e.on(p.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(p.LEVEL_LOADED, this.onLevelLoaded, this), e.on(p.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(p.FRAG_BUFFERED, this.onFragBuffered, this), e.on(p.ERROR, this.onError, this);
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(p.MANIFEST_LOADING, this.onManifestLoading, this), e.off(p.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(p.LEVEL_LOADED, this.onLevelLoaded, this), e.off(p.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(p.FRAG_BUFFERED, this.onFragBuffered, this), e.off(p.ERROR, this.onError, this);
  }
  destroy() {
    this._unregisterListeners(), this.steering = null, this.resetLevels(), super.destroy();
  }
  stopLoad() {
    this._levels.forEach((t) => {
      t.loadError = 0, t.fragmentError = 0;
    }), super.stopLoad();
  }
  resetLevels() {
    this._startLevel = void 0, this.manualLevelIndex = -1, this.currentLevelIndex = -1, this.currentLevel = null, this._levels = [], this._maxAutoLevel = -1;
  }
  onManifestLoading(e, t) {
    this.resetLevels();
  }
  onManifestLoaded(e, t) {
    const s = this.hls.config.preferManagedMediaSource, i = [], r = {}, a = {};
    let o = !1, l = !1, c = !1;
    t.levels.forEach((h) => {
      var u;
      const d = h.attrs;
      let {
        audioCodec: g,
        videoCodec: f
      } = h;
      g && (h.audioCodec = g = rs(g, s) || void 0), ((u = f) == null ? void 0 : u.indexOf("avc1")) === 0 && (f = h.videoCodec = xo(f));
      const {
        width: m,
        height: y,
        unknownCodecs: E
      } = h;
      if (o || (o = !!(m && y)), l || (l = !!f), c || (c = !!g), E != null && E.length || g && !Ss(g, "audio", s) || f && !Ss(f, "video", s))
        return;
      const {
        CODECS: x,
        "FRAME-RATE": T,
        "HDCP-LEVEL": _,
        "PATHWAY-ID": A,
        RESOLUTION: D,
        "VIDEO-RANGE": v
      } = d, C = `${`${A || "."}-`}${h.bitrate}-${D}-${T}-${x}-${v}-${_}`;
      if (r[C])
        if (r[C].uri !== h.url && !h.attrs["PATHWAY-ID"]) {
          const R = a[C] += 1;
          h.attrs["PATHWAY-ID"] = new Array(R + 1).join(".");
          const w = new ht(h);
          r[C] = w, i.push(w);
        } else
          r[C].addGroupId("audio", d.AUDIO), r[C].addGroupId("text", d.SUBTITLES);
      else {
        const R = new ht(h);
        r[C] = R, a[C] = 1, i.push(R);
      }
    }), this.filterAndSortMediaOptions(i, t, o, l, c);
  }
  filterAndSortMediaOptions(e, t, s, i, r) {
    let a = [], o = [], l = e;
    if ((s || i) && r && (l = l.filter(({
      videoCodec: f,
      videoRange: m,
      width: y,
      height: E
    }) => (!!f || !!(y && E)) && jo(m))), l.length === 0) {
      Promise.resolve().then(() => {
        if (this.hls) {
          t.levels.length && this.warn(`One or more CODECS in variant not supported: ${JSON.stringify(t.levels[0].attrs)}`);
          const f = new Error("no level with compatible codecs found in manifest");
          this.hls.trigger(p.ERROR, {
            type: $.MEDIA_ERROR,
            details: L.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
            fatal: !0,
            url: t.url,
            error: f,
            reason: f.message
          });
        }
      });
      return;
    }
    if (t.audioTracks) {
      const {
        preferManagedMediaSource: f
      } = this.hls.config;
      a = t.audioTracks.filter((m) => !m.audioCodec || Ss(m.audioCodec, "audio", f)), jr(a);
    }
    t.subtitles && (o = t.subtitles, jr(o));
    const c = l.slice(0);
    l.sort((f, m) => {
      if (f.attrs["HDCP-LEVEL"] !== m.attrs["HDCP-LEVEL"])
        return (f.attrs["HDCP-LEVEL"] || "") > (m.attrs["HDCP-LEVEL"] || "") ? 1 : -1;
      if (s && f.height !== m.height)
        return f.height - m.height;
      if (f.frameRate !== m.frameRate)
        return f.frameRate - m.frameRate;
      if (f.videoRange !== m.videoRange)
        return ns.indexOf(f.videoRange) - ns.indexOf(m.videoRange);
      if (f.videoCodec !== m.videoCodec) {
        const y = Ji(f.videoCodec), E = Ji(m.videoCodec);
        if (y !== E)
          return E - y;
      }
      if (f.uri === m.uri && f.codecSet !== m.codecSet) {
        const y = is(f.codecSet), E = is(m.codecSet);
        if (y !== E)
          return E - y;
      }
      return f.averageBitrate !== m.averageBitrate ? f.averageBitrate - m.averageBitrate : 0;
    });
    let h = c[0];
    if (this.steering && (l = this.steering.filterParsedLevels(l), l.length !== c.length)) {
      for (let f = 0; f < c.length; f++)
        if (c[f].pathwayId === l[0].pathwayId) {
          h = c[f];
          break;
        }
    }
    this._levels = l;
    for (let f = 0; f < l.length; f++)
      if (l[f] === h) {
        var u;
        this._firstLevel = f;
        const m = h.bitrate, y = this.hls.bandwidthEstimate;
        if (this.log(`manifest loaded, ${l.length} level(s) found, first bitrate: ${m}`), ((u = this.hls.userConfig) == null ? void 0 : u.abrEwmaDefaultEstimate) === void 0) {
          const E = Math.min(m, this.hls.config.abrEwmaDefaultEstimateMax);
          E > y && y === ga.abrEwmaDefaultEstimate && (this.hls.bandwidthEstimate = E);
        }
        break;
      }
    const d = r && !i, g = {
      levels: l,
      audioTracks: a,
      subtitleTracks: o,
      sessionData: t.sessionData,
      sessionKeys: t.sessionKeys,
      firstLevel: this._firstLevel,
      stats: t.stats,
      audio: r,
      video: i,
      altAudio: !d && a.some((f) => !!f.url)
    };
    this.hls.trigger(p.MANIFEST_PARSED, g), (this.hls.config.autoStartLoad || this.hls.forceStartLoad) && this.hls.startLoad(this.hls.config.startPosition);
  }
  get levels() {
    return this._levels.length === 0 ? null : this._levels;
  }
  get level() {
    return this.currentLevelIndex;
  }
  set level(e) {
    const t = this._levels;
    if (t.length === 0)
      return;
    if (e < 0 || e >= t.length) {
      const h = new Error("invalid level idx"), u = e < 0;
      if (this.hls.trigger(p.ERROR, {
        type: $.OTHER_ERROR,
        details: L.LEVEL_SWITCH_ERROR,
        level: e,
        fatal: u,
        error: h,
        reason: h.message
      }), u)
        return;
      e = Math.min(e, t.length - 1);
    }
    const s = this.currentLevelIndex, i = this.currentLevel, r = i ? i.attrs["PATHWAY-ID"] : void 0, a = t[e], o = a.attrs["PATHWAY-ID"];
    if (this.currentLevelIndex = e, this.currentLevel = a, s === e && a.details && i && r === o)
      return;
    this.log(`Switching to level ${e} (${a.height ? a.height + "p " : ""}${a.videoRange ? a.videoRange + " " : ""}${a.codecSet ? a.codecSet + " " : ""}@${a.bitrate})${o ? " with Pathway " + o : ""} from level ${s}${r ? " with Pathway " + r : ""}`);
    const l = {
      level: e,
      attrs: a.attrs,
      details: a.details,
      bitrate: a.bitrate,
      averageBitrate: a.averageBitrate,
      maxBitrate: a.maxBitrate,
      realBitrate: a.realBitrate,
      width: a.width,
      height: a.height,
      codecSet: a.codecSet,
      audioCodec: a.audioCodec,
      videoCodec: a.videoCodec,
      audioGroups: a.audioGroups,
      subtitleGroups: a.subtitleGroups,
      loaded: a.loaded,
      loadError: a.loadError,
      fragmentError: a.fragmentError,
      name: a.name,
      id: a.id,
      uri: a.uri,
      url: a.url,
      urlId: 0,
      audioGroupIds: a.audioGroupIds,
      textGroupIds: a.textGroupIds
    };
    this.hls.trigger(p.LEVEL_SWITCHING, l);
    const c = a.details;
    if (!c || c.live) {
      const h = this.switchParams(a.uri, i == null ? void 0 : i.details, c);
      this.loadPlaylist(h);
    }
  }
  get manualLevel() {
    return this.manualLevelIndex;
  }
  set manualLevel(e) {
    this.manualLevelIndex = e, this._startLevel === void 0 && (this._startLevel = e), e !== -1 && (this.level = e);
  }
  get firstLevel() {
    return this._firstLevel;
  }
  set firstLevel(e) {
    this._firstLevel = e;
  }
  get startLevel() {
    if (this._startLevel === void 0) {
      const e = this.hls.config.startLevel;
      return e !== void 0 ? e : this.hls.firstAutoLevel;
    }
    return this._startLevel;
  }
  set startLevel(e) {
    this._startLevel = e;
  }
  get pathwayPriority() {
    return this.steering ? this.steering.pathwayPriority : null;
  }
  set pathwayPriority(e) {
    if (this.steering) {
      const t = this.steering.pathways(), s = e.filter((i) => t.indexOf(i) !== -1);
      if (e.length < 1) {
        this.warn(`pathwayPriority ${e} should contain at least one pathway from list: ${t}`);
        return;
      }
      this.steering.pathwayPriority = s;
    }
  }
  onError(e, t) {
    t.fatal || !t.context || t.context.type === j.LEVEL && t.context.level === this.level && this.checkRetry(t);
  }
  // reset errors on the successful load of a fragment
  onFragBuffered(e, {
    frag: t
  }) {
    if (t !== void 0 && t.type === N.MAIN) {
      const s = t.elementaryStreams;
      if (!Object.keys(s).some((r) => !!s[r]))
        return;
      const i = this._levels[t.level];
      i != null && i.loadError && (this.log(`Resetting level error count of ${i.loadError} on frag buffered`), i.loadError = 0);
    }
  }
  onLevelLoaded(e, t) {
    var s;
    const {
      level: i,
      details: r
    } = t, a = this._levels[i];
    if (!a) {
      var o;
      this.warn(`Invalid level index ${i}`), (o = t.deliveryDirectives) != null && o.skip && (r.deltaUpdateFailed = !0);
      return;
    }
    if (i === this.currentLevelIndex) {
      a.fragmentError === 0 && (a.loadError = 0);
      let l = a.details;
      l === t.details && l.advanced && (l = void 0), this.playlistLoaded(i, t, l);
    } else (s = t.deliveryDirectives) != null && s.skip && (r.deltaUpdateFailed = !0);
  }
  loadPlaylist(e) {
    super.loadPlaylist();
    const t = this.currentLevelIndex, s = this.currentLevel;
    if (s && this.shouldLoadPlaylist(s)) {
      let i = s.uri;
      if (e)
        try {
          i = e.addDirectives(i);
        } catch (a) {
          this.warn(`Could not construct new URL with HLS Delivery Directives: ${a}`);
        }
      const r = s.attrs["PATHWAY-ID"];
      this.log(`Loading level index ${t}${(e == null ? void 0 : e.msn) !== void 0 ? " at sn " + e.msn + " part " + e.part : ""} with${r ? " Pathway " + r : ""} ${i}`), this.clearTimer(), this.hls.trigger(p.LEVEL_LOADING, {
        url: i,
        level: t,
        pathwayId: s.attrs["PATHWAY-ID"],
        id: 0,
        // Deprecated Level urlId
        deliveryDirectives: e || null
      });
    }
  }
  get nextLoadLevel() {
    return this.manualLevelIndex !== -1 ? this.manualLevelIndex : this.hls.nextAutoLevel;
  }
  set nextLoadLevel(e) {
    this.level = e, this.manualLevelIndex === -1 && (this.hls.nextAutoLevel = e);
  }
  removeLevel(e) {
    var t;
    const s = this._levels.filter((i, r) => r !== e ? !0 : (this.steering && this.steering.removeLevel(i), i === this.currentLevel && (this.currentLevel = null, this.currentLevelIndex = -1, i.details && i.details.fragments.forEach((a) => a.level = -1)), !1));
    Cn(s), this._levels = s, this.currentLevelIndex > -1 && (t = this.currentLevel) != null && t.details && (this.currentLevelIndex = this.currentLevel.details.fragments[0].level), this.hls.trigger(p.LEVELS_UPDATED, {
      levels: s
    });
  }
  onLevelsUpdated(e, {
    levels: t
  }) {
    this._levels = t;
  }
  checkMaxAutoUpdated() {
    const {
      autoLevelCapping: e,
      maxAutoLevel: t,
      maxHdcpLevel: s
    } = this.hls;
    this._maxAutoLevel !== t && (this._maxAutoLevel = t, this.hls.trigger(p.MAX_AUTO_LEVEL_UPDATED, {
      autoLevelCapping: e,
      levels: this.levels,
      maxAutoLevel: t,
      minAutoLevel: this.hls.minAutoLevel,
      maxHdcpLevel: s
    }));
  }
}
function jr(n) {
  const e = {};
  n.forEach((t) => {
    const s = t.groupId || "";
    t.id = e[s] = e[s] || 0, e[s]++;
  });
}
class Xh {
  constructor(e) {
    this.config = void 0, this.keyUriToKeyInfo = {}, this.emeController = null, this.config = e;
  }
  abort(e) {
    for (const s in this.keyUriToKeyInfo) {
      const i = this.keyUriToKeyInfo[s].loader;
      if (i) {
        var t;
        if (e && e !== ((t = i.context) == null ? void 0 : t.frag.type))
          return;
        i.abort();
      }
    }
  }
  detach() {
    for (const e in this.keyUriToKeyInfo) {
      const t = this.keyUriToKeyInfo[e];
      (t.mediaKeySessionContext || t.decryptdata.isCommonEncryption) && delete this.keyUriToKeyInfo[e];
    }
  }
  destroy() {
    this.detach();
    for (const e in this.keyUriToKeyInfo) {
      const t = this.keyUriToKeyInfo[e].loader;
      t && t.destroy();
    }
    this.keyUriToKeyInfo = {};
  }
  createKeyLoadError(e, t = L.KEY_LOAD_ERROR, s, i, r) {
    return new Ue({
      type: $.NETWORK_ERROR,
      details: t,
      fatal: !1,
      frag: e,
      response: r,
      error: s,
      networkDetails: i
    });
  }
  loadClear(e, t) {
    if (this.emeController && this.config.emeEnabled) {
      const {
        sn: s,
        cc: i
      } = e;
      for (let r = 0; r < t.length; r++) {
        const a = t[r];
        if (i <= a.cc && (s === "initSegment" || a.sn === "initSegment" || s < a.sn)) {
          this.emeController.selectKeySystemFormat(a).then((o) => {
            a.setKeyFormat(o);
          });
          break;
        }
      }
    }
  }
  load(e) {
    return !e.decryptdata && e.encrypted && this.emeController ? this.emeController.selectKeySystemFormat(e).then((t) => this.loadInternal(e, t)) : this.loadInternal(e);
  }
  loadInternal(e, t) {
    var s, i;
    t && e.setKeyFormat(t);
    const r = e.decryptdata;
    if (!r) {
      const c = new Error(t ? `Expected frag.decryptdata to be defined after setting format ${t}` : "Missing decryption data on fragment in onKeyLoading");
      return Promise.reject(this.createKeyLoadError(e, L.KEY_LOAD_ERROR, c));
    }
    const a = r.uri;
    if (!a)
      return Promise.reject(this.createKeyLoadError(e, L.KEY_LOAD_ERROR, new Error(`Invalid key URI: "${a}"`)));
    let o = this.keyUriToKeyInfo[a];
    if ((s = o) != null && s.decryptdata.key)
      return r.key = o.decryptdata.key, Promise.resolve({
        frag: e,
        keyInfo: o
      });
    if ((i = o) != null && i.keyLoadPromise) {
      var l;
      switch ((l = o.mediaKeySessionContext) == null ? void 0 : l.keyStatus) {
        case void 0:
        case "status-pending":
        case "usable":
        case "usable-in-future":
          return o.keyLoadPromise.then((c) => (r.key = c.keyInfo.decryptdata.key, {
            frag: e,
            keyInfo: o
          }));
      }
    }
    switch (o = this.keyUriToKeyInfo[a] = {
      decryptdata: r,
      keyLoadPromise: null,
      loader: null,
      mediaKeySessionContext: null
    }, r.method) {
      case "ISO-23001-7":
      case "SAMPLE-AES":
      case "SAMPLE-AES-CENC":
      case "SAMPLE-AES-CTR":
        return r.keyFormat === "identity" ? this.loadKeyHTTP(o, e) : this.loadKeyEME(o, e);
      case "AES-128":
      case "AES-256":
      case "AES-256-CTR":
        return this.loadKeyHTTP(o, e);
      default:
        return Promise.reject(this.createKeyLoadError(e, L.KEY_LOAD_ERROR, new Error(`Key supplied with unsupported METHOD: "${r.method}"`)));
    }
  }
  loadKeyEME(e, t) {
    const s = {
      frag: t,
      keyInfo: e
    };
    if (this.emeController && this.config.emeEnabled) {
      const i = this.emeController.loadKey(s);
      if (i)
        return (e.keyLoadPromise = i.then((r) => (e.mediaKeySessionContext = r, s))).catch((r) => {
          throw e.keyLoadPromise = null, r;
        });
    }
    return Promise.resolve(s);
  }
  loadKeyHTTP(e, t) {
    const s = this.config, i = s.loader, r = new i(s);
    return t.keyLoader = e.loader = r, e.keyLoadPromise = new Promise((a, o) => {
      const l = {
        keyInfo: e,
        frag: t,
        responseType: "arraybuffer",
        url: e.decryptdata.uri
      }, c = s.keyLoadPolicy.default, h = {
        loadPolicy: c,
        timeout: c.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0
      }, u = {
        onSuccess: (d, g, f, m) => {
          const {
            frag: y,
            keyInfo: E,
            url: x
          } = f;
          if (!y.decryptdata || E !== this.keyUriToKeyInfo[x])
            return o(this.createKeyLoadError(y, L.KEY_LOAD_ERROR, new Error("after key load, decryptdata unset or changed"), m));
          E.decryptdata.key = y.decryptdata.key = new Uint8Array(d.data), y.keyLoader = null, E.loader = null, a({
            frag: y,
            keyInfo: E
          });
        },
        onError: (d, g, f, m) => {
          this.resetLoader(g), o(this.createKeyLoadError(t, L.KEY_LOAD_ERROR, new Error(`HTTP Error ${d.code} loading key ${d.text}`), f, he({
            url: l.url,
            data: void 0
          }, d)));
        },
        onTimeout: (d, g, f) => {
          this.resetLoader(g), o(this.createKeyLoadError(t, L.KEY_LOAD_TIMEOUT, new Error("key loading timed out"), f));
        },
        onAbort: (d, g, f) => {
          this.resetLoader(g), o(this.createKeyLoadError(t, L.INTERNAL_ABORTED, new Error("key loading aborted"), f));
        }
      };
      r.load(l, h, u);
    });
  }
  resetLoader(e) {
    const {
      frag: t,
      keyInfo: s,
      url: i
    } = e, r = s.loader;
    t.keyLoader === r && (t.keyLoader = null, s.loader = null), delete this.keyUriToKeyInfo[i], r && r.destroy();
  }
}
function ma() {
  return self.SourceBuffer || self.WebKitSourceBuffer;
}
function pa() {
  if (!Ye())
    return !1;
  const e = ma();
  return !e || e.prototype && typeof e.prototype.appendBuffer == "function" && typeof e.prototype.remove == "function";
}
function Qh() {
  if (!pa())
    return !1;
  const n = Ye();
  return typeof (n == null ? void 0 : n.isTypeSupported) == "function" && (["avc1.42E01E,mp4a.40.2", "av01.0.01M.08", "vp09.00.50.08"].some((e) => n.isTypeSupported(At(e, "video"))) || ["mp4a.40.2", "fLaC"].some((e) => n.isTypeSupported(At(e, "audio"))));
}
function Jh() {
  var n;
  const e = ma();
  return typeof (e == null || (n = e.prototype) == null ? void 0 : n.changeType) == "function";
}
const Zh = 250, zt = 2, eu = 0.1, tu = 0.05;
class su extends qe {
  constructor(e, t, s, i) {
    super("gap-controller", i.logger), this.config = void 0, this.media = null, this.fragmentTracker = void 0, this.hls = void 0, this.nudgeRetry = 0, this.stallReported = !1, this.stalled = null, this.moved = !1, this.seeking = !1, this.ended = 0, this.config = e, this.media = t, this.fragmentTracker = s, this.hls = i;
  }
  destroy() {
    this.media = null, this.hls = this.fragmentTracker = null;
  }
  /**
   * Checks if the playhead is stuck within a gap, and if so, attempts to free it.
   * A gap is an unbuffered range between two buffered ranges (or the start and the first buffered range).
   *
   * @param lastCurrentTime - Previously read playhead position
   */
  poll(e, t, s, i) {
    const {
      config: r,
      media: a,
      stalled: o
    } = this;
    if (a === null)
      return;
    const {
      currentTime: l,
      seeking: c
    } = a, h = this.seeking && !c, u = !this.seeking && c;
    if (this.seeking = c, l !== e) {
      if (this.ended = 0, this.moved = !0, c || (this.nudgeRetry = 0), o !== null) {
        if (this.stallReported) {
          const E = self.performance.now() - o;
          this.warn(`playback not stuck anymore @${l}, after ${Math.round(E)}ms`), this.stallReported = !1;
        }
        this.stalled = null;
      }
      return;
    }
    if (u || h) {
      this.stalled = null;
      return;
    }
    if (a.paused && !c || a.ended || a.playbackRate === 0 || !ee.getBuffered(a).length) {
      this.nudgeRetry = 0;
      return;
    }
    const d = ee.bufferInfo(a, l, 0), g = d.nextStart || 0;
    if (c) {
      const E = d.len > zt, x = !g || t && t.start <= l || g - l > zt && !this.fragmentTracker.getPartialFragment(l);
      if (E || x)
        return;
      this.moved = !1;
    }
    if (!this.moved && this.stalled !== null) {
      if (!(d.len > 0) && !g)
        return;
      const x = Math.max(g, d.start || 0) - l, _ = !!(s != null && s.live) ? s.targetduration * 2 : zt, A = this.fragmentTracker.getPartialFragment(l);
      if (x > 0 && (x <= _ || A)) {
        a.paused || this._trySkipBufferHole(A);
        return;
      }
    }
    const f = self.performance.now();
    if (o === null) {
      this.stalled = f;
      return;
    }
    const m = f - o;
    if (!c && m >= Zh) {
      if (i === I.ENDED && !(s != null && s.live) && Math.abs(l - ((s == null ? void 0 : s.edge) || 0)) < 1) {
        if (m < 1e3 || this.ended)
          return;
        this.ended = l, this.hls.trigger(p.MEDIA_ENDED, {
          stalled: !0
        });
        return;
      }
      if (this._reportStall(d), !this.media)
        return;
    }
    const y = ee.bufferInfo(a, l, r.maxBufferHole);
    this._tryFixBufferStall(y, m);
  }
  /**
   * Detects and attempts to fix known buffer stalling issues.
   * @param bufferInfo - The properties of the current buffer.
   * @param stalledDurationMs - The amount of time Hls.js has been stalling for.
   * @private
   */
  _tryFixBufferStall(e, t) {
    const {
      config: s,
      fragmentTracker: i,
      media: r
    } = this;
    if (r === null)
      return;
    const a = r.currentTime, o = i.getPartialFragment(a);
    o && (this._trySkipBufferHole(o) || !this.media) || (e.len > s.maxBufferHole || e.nextStart && e.nextStart - a < s.maxBufferHole) && t > s.highBufferWatchdogPeriod * 1e3 && (this.warn("Trying to nudge playhead over buffer-hole"), this.stalled = null, this._tryNudgeBuffer());
  }
  /**
   * Triggers a BUFFER_STALLED_ERROR event, but only once per stall period.
   * @param bufferLen - The playhead distance from the end of the current buffer segment.
   * @private
   */
  _reportStall(e) {
    const {
      hls: t,
      media: s,
      stallReported: i
    } = this;
    if (!i && s) {
      this.stallReported = !0;
      const r = new Error(`Playback stalling at @${s.currentTime} due to low buffer (${JSON.stringify(e)})`);
      this.warn(r.message), t.trigger(p.ERROR, {
        type: $.MEDIA_ERROR,
        details: L.BUFFER_STALLED_ERROR,
        fatal: !1,
        error: r,
        buffer: e.len
      });
    }
  }
  /**
   * Attempts to fix buffer stalls by jumping over known gaps caused by partial fragments
   * @param partial - The partial fragment found at the current time (where playback is stalling).
   * @private
   */
  _trySkipBufferHole(e) {
    const {
      config: t,
      hls: s,
      media: i
    } = this;
    if (i === null)
      return 0;
    const r = i.currentTime, a = ee.bufferInfo(i, r, 0), o = r < a.start ? a.start : a.nextStart;
    if (o) {
      const l = a.len <= t.maxBufferHole, c = a.len > 0 && a.len < 1 && i.readyState < 3, h = o - r;
      if (h > 0 && (l || c)) {
        if (h > t.maxBufferHole) {
          const {
            fragmentTracker: d
          } = this;
          let g = !1;
          if (r === 0) {
            const f = d.getAppendedFrag(0, N.MAIN);
            f && o < f.end && (g = !0);
          }
          if (!g) {
            const f = e || d.getAppendedFrag(r, N.MAIN);
            if (f) {
              let m = !1, y = f.end;
              for (; y < o; ) {
                const E = d.getPartialFragment(y);
                if (E)
                  y += E.duration;
                else {
                  m = !0;
                  break;
                }
              }
              if (m)
                return 0;
            }
          }
        }
        const u = Math.max(o + tu, r + eu);
        if (this.warn(`skipping hole, adjusting currentTime from ${r} to ${u}`), this.moved = !0, this.stalled = null, i.currentTime = u, e && !e.gap) {
          const d = new Error(`fragment loaded with buffer holes, seeking from ${r} to ${u}`);
          s.trigger(p.ERROR, {
            type: $.MEDIA_ERROR,
            details: L.BUFFER_SEEK_OVER_HOLE,
            fatal: !1,
            error: d,
            reason: d.message,
            frag: e
          });
        }
        return u;
      }
    }
    return 0;
  }
  /**
   * Attempts to fix buffer stalls by advancing the mediaElement's current time by a small amount.
   * @private
   */
  _tryNudgeBuffer() {
    const {
      config: e,
      hls: t,
      media: s,
      nudgeRetry: i
    } = this;
    if (s === null)
      return;
    const r = s.currentTime;
    if (this.nudgeRetry++, i < e.nudgeMaxRetry) {
      const a = r + (i + 1) * e.nudgeOffset, o = new Error(`Nudging 'currentTime' from ${r} to ${a}`);
      this.warn(o.message), s.currentTime = a, t.trigger(p.ERROR, {
        type: $.MEDIA_ERROR,
        details: L.BUFFER_NUDGE_ON_STALL,
        error: o,
        fatal: !1
      });
    } else {
      const a = new Error(`Playhead still not moving while enough data buffered @${r} after ${e.nudgeMaxRetry} nudges`);
      this.error(a.message), t.trigger(p.ERROR, {
        type: $.MEDIA_ERROR,
        details: L.BUFFER_STALLED_ERROR,
        error: a,
        fatal: !0
      });
    }
  }
}
const iu = 100;
class ru extends yi {
  constructor(e, t, s) {
    super(e, t, s, "stream-controller", N.MAIN), this.audioCodecSwap = !1, this.gapController = null, this.level = -1, this._forceStartLoad = !1, this.altAudio = !1, this.audioOnly = !1, this.fragPlaying = null, this.fragLastKbps = 0, this.couldBacktrack = !1, this.backtrackFragment = null, this.audioCodecSwitch = !1, this.videoBuffer = null, this.onMediaPlaying = () => {
      this.tick();
    }, this.onMediaSeeked = () => {
      const i = this.media, r = i ? i.currentTime : null;
      O(r) && this.log(`Media seeked to ${r.toFixed(3)}`);
      const a = this.getMainFwdBufferInfo();
      if (a === null || a.len === 0) {
        this.warn(`Main forward buffer length on "seeked" event ${a ? a.len : "empty"})`);
        return;
      }
      this.tick();
    }, this.registerListeners();
  }
  registerListeners() {
    super.registerListeners();
    const {
      hls: e
    } = this;
    e.on(p.MANIFEST_PARSED, this.onManifestParsed, this), e.on(p.LEVEL_LOADING, this.onLevelLoading, this), e.on(p.LEVEL_LOADED, this.onLevelLoaded, this), e.on(p.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), e.on(p.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.on(p.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.on(p.BUFFER_CREATED, this.onBufferCreated, this), e.on(p.BUFFER_FLUSHED, this.onBufferFlushed, this), e.on(p.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(p.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  unregisterListeners() {
    super.unregisterListeners();
    const {
      hls: e
    } = this;
    e.off(p.MANIFEST_PARSED, this.onManifestParsed, this), e.off(p.LEVEL_LOADED, this.onLevelLoaded, this), e.off(p.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), e.off(p.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.off(p.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.off(p.BUFFER_CREATED, this.onBufferCreated, this), e.off(p.BUFFER_FLUSHED, this.onBufferFlushed, this), e.off(p.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(p.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  onHandlerDestroying() {
    this.onMediaPlaying = this.onMediaSeeked = null, this.unregisterListeners(), super.onHandlerDestroying();
  }
  startLoad(e) {
    if (this.levels) {
      const {
        lastCurrentTime: t,
        hls: s
      } = this;
      if (this.stopLoad(), this.setInterval(iu), this.level = -1, !this.startFragRequested) {
        let i = s.startLevel;
        i === -1 && (s.config.testBandwidth && this.levels.length > 1 ? (i = 0, this.bitrateTest = !0) : i = s.firstAutoLevel), s.nextLoadLevel = i, this.level = s.loadLevel, this.loadedmetadata = !1;
      }
      t > 0 && e === -1 && (this.log(`Override startPosition with lastCurrentTime @${t.toFixed(3)}`), e = t), this.state = I.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick();
    } else
      this._forceStartLoad = !0, this.state = I.STOPPED;
  }
  stopLoad() {
    this._forceStartLoad = !1, super.stopLoad();
  }
  doTick() {
    switch (this.state) {
      case I.WAITING_LEVEL: {
        const {
          levels: t,
          level: s
        } = this, i = t == null ? void 0 : t[s], r = i == null ? void 0 : i.details;
        if (r && (!r.live || this.levelLastLoaded === i)) {
          if (this.waitForCdnTuneIn(r))
            break;
          this.state = I.IDLE;
          break;
        } else if (this.hls.nextLoadLevel !== this.level) {
          this.state = I.IDLE;
          break;
        }
        break;
      }
      case I.FRAG_LOADING_WAITING_RETRY:
        {
          var e;
          const t = self.performance.now(), s = this.retryDate;
          if (!s || t >= s || (e = this.media) != null && e.seeking) {
            const {
              levels: i,
              level: r
            } = this, a = i == null ? void 0 : i[r];
            this.resetStartWhenNotLoaded(a || null), this.state = I.IDLE;
          }
        }
        break;
    }
    this.state === I.IDLE && this.doTickIdle(), this.onTickEnd();
  }
  onTickEnd() {
    super.onTickEnd(), this.checkBuffer(), this.checkFragmentChanged();
  }
  doTickIdle() {
    if (!this.buffering)
      return;
    const {
      hls: e,
      levelLastLoaded: t,
      levels: s,
      media: i
    } = this;
    if (t === null || !i && (this.startFragRequested || !e.config.startFragPrefetch) || this.altAudio && this.audioOnly)
      return;
    const r = e.nextLoadLevel;
    if (!(s != null && s[r]))
      return;
    const a = s[r], o = this.getMainFwdBufferInfo();
    if (o === null)
      return;
    const l = this.getLevelDetails();
    if (l && this._streamEnded(o, l)) {
      const m = {};
      this.altAudio && (m.type = "video"), this.hls.trigger(p.BUFFER_EOS, m), this.state = I.ENDED;
      return;
    }
    e.loadLevel !== r && e.manualLevel === -1 && this.log(`Adapting to level ${r} from level ${this.level}`), this.level = e.nextLoadLevel = r;
    const c = a.details;
    if (!c || this.state === I.WAITING_LEVEL || c.live && this.levelLastLoaded !== a) {
      this.level = r, this.state = I.WAITING_LEVEL;
      return;
    }
    const h = o.len, u = this.getMaxBufferLength(a.maxBitrate);
    if (h >= u)
      return;
    this.backtrackFragment && this.backtrackFragment.start > o.end && (this.backtrackFragment = null);
    const d = this.backtrackFragment ? this.backtrackFragment.start : o.end;
    let g = this.getNextFragment(d, c);
    if (this.couldBacktrack && !this.fragPrevious && g && g.sn !== "initSegment" && this.fragmentTracker.getState(g) !== le.OK) {
      var f;
      const y = ((f = this.backtrackFragment) != null ? f : g).sn - c.startSN, E = c.fragments[y - 1];
      E && g.cc === E.cc && (g = E, this.fragmentTracker.removeFragment(E));
    } else this.backtrackFragment && o.len && (this.backtrackFragment = null);
    if (g && this.isLoopLoading(g, d)) {
      if (!g.gap) {
        const y = this.audioOnly && !this.altAudio ? J.AUDIO : J.VIDEO, E = (y === J.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
        E && this.afterBufferFlushed(E, y, N.MAIN);
      }
      g = this.getNextFragmentLoopLoading(g, c, o, N.MAIN, u);
    }
    g && (g.initSegment && !g.initSegment.data && !this.bitrateTest && (g = g.initSegment), this.loadFragment(g, a, d));
  }
  loadFragment(e, t, s) {
    const i = this.fragmentTracker.getState(e);
    i === le.NOT_LOADED || i === le.PARTIAL ? e.sn === "initSegment" ? this._loadInitSegment(e, t) : this.bitrateTest ? (this.log(`Fragment ${e.sn} of level ${e.level} is being downloaded to test bitrate and will not be buffered`), this._loadBitrateTestFrag(e, t)) : super.loadFragment(e, t, s) : this.clearTrackerIfNeeded(e);
  }
  getBufferedFrag(e) {
    return this.fragmentTracker.getBufferedFrag(e, N.MAIN);
  }
  followingBufferedFrag(e) {
    return e ? this.getBufferedFrag(e.end + 0.5) : null;
  }
  /*
    on immediate level switch :
     - pause playback if playing
     - cancel any pending load request
     - and trigger a buffer flush
  */
  immediateLevelSwitch() {
    this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
  }
  /**
   * try to switch ASAP without breaking video playback:
   * in order to ensure smooth but quick level switching,
   * we need to find the next flushable buffer range
   * we should take into account new segment fetch time
   */
  nextLevelSwitch() {
    const {
      levels: e,
      media: t
    } = this;
    if (t != null && t.readyState) {
      let s;
      const i = this.getAppendedFrag(t.currentTime);
      i && i.start > 1 && this.flushMainBuffer(0, i.start - 1);
      const r = this.getLevelDetails();
      if (r != null && r.live) {
        const o = this.getMainFwdBufferInfo();
        if (!o || o.len < r.targetduration * 2)
          return;
      }
      if (!t.paused && e) {
        const o = this.hls.nextLoadLevel, l = e[o], c = this.fragLastKbps;
        c && this.fragCurrent ? s = this.fragCurrent.duration * l.maxBitrate / (1e3 * c) + 1 : s = 0;
      } else
        s = 0;
      const a = this.getBufferedFrag(t.currentTime + s);
      if (a) {
        const o = this.followingBufferedFrag(a);
        if (o) {
          this.abortCurrentFrag();
          const l = o.maxStartPTS ? o.maxStartPTS : o.start, c = o.duration, h = Math.max(a.end, l + Math.min(Math.max(c - this.config.maxFragLookUpTolerance, c * (this.couldBacktrack ? 0.5 : 0.125)), c * (this.couldBacktrack ? 0.75 : 0.25)));
          this.flushMainBuffer(h, Number.POSITIVE_INFINITY);
        }
      }
    }
  }
  abortCurrentFrag() {
    const e = this.fragCurrent;
    switch (this.fragCurrent = null, this.backtrackFragment = null, e && (e.abortRequests(), this.fragmentTracker.removeFragment(e)), this.state) {
      case I.KEY_LOADING:
      case I.FRAG_LOADING:
      case I.FRAG_LOADING_WAITING_RETRY:
      case I.PARSING:
      case I.PARSED:
        this.state = I.IDLE;
        break;
    }
    this.nextLoadPosition = this.getLoadPosition();
  }
  flushMainBuffer(e, t) {
    super.flushMainBuffer(e, t, this.altAudio ? "video" : null);
  }
  onMediaAttached(e, t) {
    super.onMediaAttached(e, t);
    const s = t.media;
    s.addEventListener("playing", this.onMediaPlaying), s.addEventListener("seeked", this.onMediaSeeked), this.gapController = new su(this.config, s, this.fragmentTracker, this.hls);
  }
  onMediaDetaching() {
    const {
      media: e
    } = this;
    e && (e.removeEventListener("playing", this.onMediaPlaying), e.removeEventListener("seeked", this.onMediaSeeked)), this.videoBuffer = null, this.fragPlaying = null, this.gapController && (this.gapController.destroy(), this.gapController = null), super.onMediaDetaching();
  }
  onManifestLoading() {
    super.onManifestLoading(), this.log("Trigger BUFFER_RESET"), this.hls.trigger(p.BUFFER_RESET, void 0), this.couldBacktrack = !1, this.fragLastKbps = 0, this.fragPlaying = this.backtrackFragment = null, this.altAudio = this.audioOnly = !1;
  }
  onManifestParsed(e, t) {
    let s = !1, i = !1;
    t.levels.forEach((r) => {
      const a = r.audioCodec;
      a && (s = s || a.indexOf("mp4a.40.2") !== -1, i = i || a.indexOf("mp4a.40.5") !== -1);
    }), this.audioCodecSwitch = s && i && !Jh(), this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = t.levels, this.startFragRequested = !1;
  }
  onLevelLoading(e, t) {
    const {
      levels: s
    } = this;
    if (!s || this.state !== I.IDLE)
      return;
    const i = s[t.level];
    (!i.details || i.details.live && this.levelLastLoaded !== i || this.waitForCdnTuneIn(i.details)) && (this.state = I.WAITING_LEVEL);
  }
  onLevelLoaded(e, t) {
    var s;
    const {
      levels: i
    } = this, r = t.level, a = t.details, o = a.totalduration;
    if (!i) {
      this.warn(`Levels were reset while loading level ${r}`);
      return;
    }
    this.log(`Level ${r} loaded [${a.startSN},${a.endSN}]${a.lastPartSn ? `[part-${a.lastPartSn}-${a.lastPartIndex}]` : ""}, cc [${a.startCC}, ${a.endCC}] duration:${o}`);
    const l = i[r], c = this.fragCurrent;
    c && (this.state === I.FRAG_LOADING || this.state === I.FRAG_LOADING_WAITING_RETRY) && c.level !== t.level && c.loader && this.abortCurrentFrag();
    let h = 0;
    if (a.live || (s = l.details) != null && s.live) {
      var u;
      if (this.checkLiveUpdate(a), a.deltaUpdateFailed)
        return;
      h = this.alignPlaylists(a, l.details, (u = this.levelLastLoaded) == null ? void 0 : u.details);
    }
    if (l.details = a, this.levelLastLoaded = l, this.hls.trigger(p.LEVEL_UPDATED, {
      details: a,
      level: r
    }), this.state === I.WAITING_LEVEL) {
      if (this.waitForCdnTuneIn(a))
        return;
      this.state = I.IDLE;
    }
    this.startFragRequested ? a.live && this.synchronizeToLiveEdge(a) : this.setStartPosition(a, h), this.tick();
  }
  _handleFragmentLoadProgress(e) {
    var t;
    const s = e.frag, {
      part: i,
      payload: r
    } = e, {
      levels: a
    } = this;
    if (!a) {
      this.warn(`Levels were reset while fragment load was in progress. Fragment ${s.sn} of level ${s.level} will not be buffered`);
      return;
    }
    const o = a[s.level], l = o.details;
    if (!l) {
      this.warn(`Dropping fragment ${s.sn} of level ${s.level} after level details were reset`), this.fragmentTracker.removeFragment(s);
      return;
    }
    const c = o.videoCodec, h = l.PTSKnown || !l.live, u = (t = s.initSegment) == null ? void 0 : t.data, d = this._getAudioCodec(o), g = this.transmuxer = this.transmuxer || new Qn(this.hls, N.MAIN, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)), f = i ? i.index : -1, m = f !== -1, y = new mi(s.level, s.sn, s.stats.chunkCount, r.byteLength, f, m), E = this.initPTS[s.cc];
    g.push(r, u, d, c, s, i, l.totalduration, h, y, E);
  }
  onAudioTrackSwitching(e, t) {
    const s = this.altAudio;
    if (!!!t.url) {
      if (this.mediaBuffer !== this.media) {
        this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
        const a = this.fragCurrent;
        a && (this.log("Switching to main audio track, cancel main fragment load"), a.abortRequests(), this.fragmentTracker.removeFragment(a)), this.resetTransmuxer(), this.resetLoadingState();
      } else this.audioOnly && this.resetTransmuxer();
      const r = this.hls;
      s && (r.trigger(p.BUFFER_FLUSHING, {
        startOffset: 0,
        endOffset: Number.POSITIVE_INFINITY,
        type: null
      }), this.fragmentTracker.removeAllFragments()), r.trigger(p.AUDIO_TRACK_SWITCHED, t);
    }
  }
  onAudioTrackSwitched(e, t) {
    const s = t.id, i = !!this.hls.audioTracks[s].url;
    if (i) {
      const r = this.videoBuffer;
      r && this.mediaBuffer !== r && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = r);
    }
    this.altAudio = i, this.tick();
  }
  onBufferCreated(e, t) {
    const s = t.tracks;
    let i, r, a = !1;
    for (const o in s) {
      const l = s[o];
      if (l.id === "main") {
        if (r = o, i = l, o === "video") {
          const c = s[o];
          c && (this.videoBuffer = c.buffer);
        }
      } else
        a = !0;
    }
    a && i ? (this.log(`Alternate track found, use ${r}.buffered to schedule main fragment loading`), this.mediaBuffer = i.buffer) : this.mediaBuffer = this.media;
  }
  onFragBuffered(e, t) {
    const {
      frag: s,
      part: i
    } = t;
    if (s && s.type !== N.MAIN)
      return;
    if (this.fragContextChanged(s)) {
      this.warn(`Fragment ${s.sn}${i ? " p: " + i.index : ""} of level ${s.level} finished buffering, but was aborted. state: ${this.state}`), this.state === I.PARSED && (this.state = I.IDLE);
      return;
    }
    const r = i ? i.stats : s.stats;
    this.fragLastKbps = Math.round(8 * r.total / (r.buffering.end - r.loading.first)), s.sn !== "initSegment" && (this.fragPrevious = s), this.fragBufferedComplete(s, i);
  }
  onError(e, t) {
    var s;
    if (t.fatal) {
      this.state = I.ERROR;
      return;
    }
    switch (t.details) {
      case L.FRAG_GAP:
      case L.FRAG_PARSING_ERROR:
      case L.FRAG_DECRYPT_ERROR:
      case L.FRAG_LOAD_ERROR:
      case L.FRAG_LOAD_TIMEOUT:
      case L.KEY_LOAD_ERROR:
      case L.KEY_LOAD_TIMEOUT:
        this.onFragmentOrKeyLoadError(N.MAIN, t);
        break;
      case L.LEVEL_LOAD_ERROR:
      case L.LEVEL_LOAD_TIMEOUT:
      case L.LEVEL_PARSING_ERROR:
        !t.levelRetry && this.state === I.WAITING_LEVEL && ((s = t.context) == null ? void 0 : s.type) === j.LEVEL && (this.state = I.IDLE);
        break;
      case L.BUFFER_APPEND_ERROR:
      case L.BUFFER_FULL_ERROR:
        if (!t.parent || t.parent !== "main")
          return;
        if (t.details === L.BUFFER_APPEND_ERROR) {
          this.resetLoadingState();
          return;
        }
        this.reduceLengthAndFlushBuffer(t) && this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
        break;
      case L.INTERNAL_EXCEPTION:
        this.recoverWorkerError(t);
        break;
    }
  }
  // Checks the health of the buffer and attempts to resolve playback stalls.
  checkBuffer() {
    const {
      media: e,
      gapController: t
    } = this;
    if (!(!e || !t || !e.readyState)) {
      if (this.loadedmetadata || !ee.getBuffered(e).length) {
        const s = this.state, i = s !== I.IDLE ? this.fragCurrent : null, r = this.getLevelDetails();
        t.poll(this.lastCurrentTime, i, r, s);
      }
      this.lastCurrentTime = e.currentTime;
    }
  }
  onFragLoadEmergencyAborted() {
    this.state = I.IDLE, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.lastCurrentTime), this.tickImmediate();
  }
  onBufferFlushed(e, {
    type: t
  }) {
    if (t !== J.AUDIO || this.audioOnly && !this.altAudio) {
      const s = (t === J.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
      this.afterBufferFlushed(s, t, N.MAIN), this.tick();
    }
  }
  onLevelsUpdated(e, t) {
    this.level > -1 && this.fragCurrent && (this.level = this.fragCurrent.level), this.levels = t.levels;
  }
  swapAudioCodec() {
    this.audioCodecSwap = !this.audioCodecSwap;
  }
  /**
   * Seeks to the set startPosition if not equal to the mediaElement's current time.
   */
  seekToStartPos() {
    const {
      media: e
    } = this;
    if (!e)
      return;
    const t = e.currentTime;
    let s = this.startPosition;
    if (s >= 0 && t < s) {
      if (e.seeking) {
        this.log(`could not seek to ${s}, already seeking at ${t}`);
        return;
      }
      const i = ee.getBuffered(e), a = (i.length ? i.start(0) : 0) - s;
      a > 0 && (a < this.config.maxBufferHole || a < this.config.maxFragLookUpTolerance) && (this.log(`adjusting start position by ${a} to match buffer start`), s += a, this.startPosition = s), this.log(`seek to target start position ${s} from current time ${t}`), e.currentTime = s;
    }
  }
  _getAudioCodec(e) {
    let t = this.config.defaultAudioCodec || e.audioCodec;
    return this.audioCodecSwap && t && (this.log("Swapping audio codec"), t.indexOf("mp4a.40.5") !== -1 ? t = "mp4a.40.2" : t = "mp4a.40.5"), t;
  }
  _loadBitrateTestFrag(e, t) {
    e.bitrateTest = !0, this._doFragLoad(e, t).then((s) => {
      const {
        hls: i
      } = this;
      if (!s || this.fragContextChanged(e))
        return;
      t.fragmentError = 0, this.state = I.IDLE, this.startFragRequested = !1, this.bitrateTest = !1;
      const r = e.stats;
      r.parsing.start = r.parsing.end = r.buffering.start = r.buffering.end = self.performance.now(), i.trigger(p.FRAG_LOADED, s), e.bitrateTest = !1;
    });
  }
  _handleTransmuxComplete(e) {
    var t;
    const s = this.playlistType, {
      hls: i
    } = this, {
      remuxResult: r,
      chunkMeta: a
    } = e, o = this.getCurrentContext(a);
    if (!o) {
      this.resetWhenMissingContext(a);
      return;
    }
    const {
      frag: l,
      part: c,
      level: h
    } = o, {
      video: u,
      text: d,
      id3: g,
      initSegment: f
    } = r, {
      details: m
    } = h, y = this.altAudio ? void 0 : r.audio;
    if (this.fragContextChanged(l)) {
      this.fragmentTracker.removeFragment(l);
      return;
    }
    if (this.state = I.PARSING, f) {
      if (f != null && f.tracks) {
        const T = l.initSegment || l;
        this._bufferInitSegment(h, f.tracks, T, a), i.trigger(p.FRAG_PARSING_INIT_SEGMENT, {
          frag: T,
          id: s,
          tracks: f.tracks
        });
      }
      const E = f.initPTS, x = f.timescale;
      O(E) && (this.initPTS[l.cc] = {
        baseTime: E,
        timescale: x
      }, i.trigger(p.INIT_PTS_FOUND, {
        frag: l,
        id: s,
        initPTS: E,
        timescale: x
      }));
    }
    if (u && m) {
      const E = m.fragments[l.sn - 1 - m.startSN], x = l.sn === m.startSN, T = !E || l.cc > E.cc;
      if (r.independent !== !1) {
        const {
          startPTS: _,
          endPTS: A,
          startDTS: D,
          endDTS: v
        } = u;
        if (c)
          c.elementaryStreams[u.type] = {
            startPTS: _,
            endPTS: A,
            startDTS: D,
            endDTS: v
          };
        else if (u.firstKeyFrame && u.independent && a.id === 1 && !T && (this.couldBacktrack = !0), u.dropped && u.independent) {
          const b = this.getMainFwdBufferInfo(), C = (b ? b.end : this.getLoadPosition()) + this.config.maxBufferHole, R = u.firstKeyFramePTS ? u.firstKeyFramePTS : _;
          if (!x && C < R - this.config.maxBufferHole && !T) {
            this.backtrack(l);
            return;
          } else T && (l.gap = !0);
          l.setElementaryStreamInfo(u.type, l.start, A, l.start, v, !0);
        } else x && _ > zt && (l.gap = !0);
        l.setElementaryStreamInfo(u.type, _, A, D, v), this.backtrackFragment && (this.backtrackFragment = l), this.bufferFragmentData(u, l, c, a, x || T);
      } else if (x || T)
        l.gap = !0;
      else {
        this.backtrack(l);
        return;
      }
    }
    if (y) {
      const {
        startPTS: E,
        endPTS: x,
        startDTS: T,
        endDTS: _
      } = y;
      c && (c.elementaryStreams[J.AUDIO] = {
        startPTS: E,
        endPTS: x,
        startDTS: T,
        endDTS: _
      }), l.setElementaryStreamInfo(J.AUDIO, E, x, T, _), this.bufferFragmentData(y, l, c, a);
    }
    if (m && g != null && (t = g.samples) != null && t.length) {
      const E = {
        id: s,
        frag: l,
        details: m,
        samples: g.samples
      };
      i.trigger(p.FRAG_PARSING_METADATA, E);
    }
    if (m && d) {
      const E = {
        id: s,
        frag: l,
        details: m,
        samples: d.samples
      };
      i.trigger(p.FRAG_PARSING_USERDATA, E);
    }
  }
  _bufferInitSegment(e, t, s, i) {
    if (this.state !== I.PARSING)
      return;
    this.audioOnly = !!t.audio && !t.video, this.altAudio && !this.audioOnly && delete t.audio;
    const {
      audio: r,
      video: a,
      audiovideo: o
    } = t;
    if (r) {
      let c = e.audioCodec;
      const h = navigator.userAgent.toLowerCase();
      if (this.audioCodecSwitch) {
        c && (c.indexOf("mp4a.40.5") !== -1 ? c = "mp4a.40.2" : c = "mp4a.40.5");
        const u = r.metadata;
        u && "channelCount" in u && (u.channelCount || 1) !== 1 && h.indexOf("firefox") === -1 && (c = "mp4a.40.5");
      }
      c && c.indexOf("mp4a.40.5") !== -1 && h.indexOf("android") !== -1 && r.container !== "audio/mpeg" && (c = "mp4a.40.2", this.log(`Android: force audio codec to ${c}`)), e.audioCodec && e.audioCodec !== c && this.log(`Swapping manifest audio codec "${e.audioCodec}" for "${c}"`), r.levelCodec = c, r.id = "main", this.log(`Init audio buffer, container:${r.container}, codecs[selected/level/parsed]=[${c || ""}/${e.audioCodec || ""}/${r.codec}]`), delete t.audiovideo;
    }
    a && (a.levelCodec = e.videoCodec, a.id = "main", this.log(`Init video buffer, container:${a.container}, codecs[level/parsed]=[${e.videoCodec || ""}/${a.codec}]`), delete t.audiovideo), o && (this.log(`Init audiovideo buffer, container:${o.container}, codecs[level/parsed]=[${e.codecs}/${o.codec}]`), delete t.video, delete t.audio);
    const l = Object.keys(t);
    l.length && (this.hls.trigger(p.BUFFER_CODECS, t), l.forEach((c) => {
      const u = t[c].initSegment;
      u != null && u.byteLength && this.hls.trigger(p.BUFFER_APPENDING, {
        type: c,
        data: u,
        frag: s,
        part: null,
        chunkMeta: i,
        parent: s.type
      });
    })), this.tickImmediate();
  }
  getMainFwdBufferInfo() {
    return this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : this.media, N.MAIN);
  }
  get maxBufferLength() {
    const {
      levels: e,
      level: t
    } = this, s = e == null ? void 0 : e[t];
    return s ? this.getMaxBufferLength(s.maxBitrate) : this.config.maxBufferLength;
  }
  backtrack(e) {
    this.couldBacktrack = !0, this.backtrackFragment = e, this.resetTransmuxer(), this.flushBufferGap(e), this.fragmentTracker.removeFragment(e), this.fragPrevious = null, this.nextLoadPosition = e.start, this.state = I.IDLE;
  }
  checkFragmentChanged() {
    const e = this.media;
    let t = null;
    if (e && e.readyState > 1 && e.seeking === !1) {
      const s = e.currentTime;
      if (ee.isBuffered(e, s) ? t = this.getAppendedFrag(s) : ee.isBuffered(e, s + 0.1) && (t = this.getAppendedFrag(s + 0.1)), t) {
        this.backtrackFragment = null;
        const i = this.fragPlaying, r = t.level;
        (!i || t.sn !== i.sn || i.level !== r) && (this.fragPlaying = t, this.hls.trigger(p.FRAG_CHANGED, {
          frag: t
        }), (!i || i.level !== r) && this.hls.trigger(p.LEVEL_SWITCHED, {
          level: r
        }));
      }
    }
  }
  get nextLevel() {
    const e = this.nextBufferedFrag;
    return e ? e.level : -1;
  }
  get currentFrag() {
    var e;
    if (this.fragPlaying)
      return this.fragPlaying;
    const t = ((e = this.media) == null ? void 0 : e.currentTime) || this.lastCurrentTime;
    return O(t) ? this.getAppendedFrag(t) : null;
  }
  get currentProgramDateTime() {
    var e;
    const t = ((e = this.media) == null ? void 0 : e.currentTime) || this.lastCurrentTime;
    if (O(t)) {
      const s = this.getLevelDetails(), i = this.currentFrag || (s ? Lt(null, s.fragments, t) : null);
      if (i) {
        const r = i.programDateTime;
        if (r !== null) {
          const a = r + (t - i.start) * 1e3;
          return new Date(a);
        }
      }
    }
    return null;
  }
  get currentLevel() {
    const e = this.currentFrag;
    return e ? e.level : -1;
  }
  get nextBufferedFrag() {
    const e = this.currentFrag;
    return e ? this.followingBufferedFrag(e) : null;
  }
  get forceStartLoad() {
    return this._forceStartLoad;
  }
}
class He {
  /**
   * Get the video-dev/hls.js package version.
   */
  static get version() {
    return Rt;
  }
  /**
   * Check if the required MediaSource Extensions are available.
   */
  static isMSESupported() {
    return pa();
  }
  /**
   * Check if MediaSource Extensions are available and isTypeSupported checks pass for any baseline codecs.
   */
  static isSupported() {
    return Qh();
  }
  /**
   * Get the MediaSource global used for MSE playback (ManagedMediaSource, MediaSource, or WebKitMediaSource).
   */
  static getMediaSource() {
    return Ye();
  }
  static get Events() {
    return p;
  }
  static get ErrorTypes() {
    return $;
  }
  static get ErrorDetails() {
    return L;
  }
  /**
   * Get the default configuration applied to new instances.
   */
  static get DefaultConfig() {
    return He.defaultConfig ? He.defaultConfig : ga;
  }
  /**
   * Replace the default configuration applied to new instances.
   */
  static set DefaultConfig(e) {
    He.defaultConfig = e;
  }
  /**
   * Creates an instance of an HLS client that can attach to exactly one `HTMLMediaElement`.
   * @param userConfig - Configuration options applied over `Hls.DefaultConfig`
   */
  constructor(e = {}) {
    this.config = void 0, this.userConfig = void 0, this.logger = void 0, this.coreComponents = void 0, this.networkControllers = void 0, this._emitter = new Ai(), this._autoLevelCapping = -1, this._maxHdcpLevel = null, this.abrController = void 0, this.bufferController = void 0, this.capLevelController = void 0, this.latencyController = void 0, this.levelController = void 0, this.streamController = void 0, this.audioTrackController = void 0, this.subtitleTrackController = void 0, this.emeController = void 0, this.cmcdController = void 0, this._media = null, this._url = null, this.triggeringException = void 0;
    const t = this.logger = Na(e.debug || !1, "Hls instance"), s = this.config = qh(He.DefaultConfig, e, t);
    this.userConfig = e, s.progressive && jh(s, t);
    const {
      abrController: i,
      bufferController: r,
      capLevelController: a,
      errorController: o,
      fpsController: l
    } = s, c = new o(this), h = this.abrController = new i(this), u = new xl(this), d = this.bufferController = new r(this, u), g = this.capLevelController = new a(this), f = new l(this), m = new _o(this), y = new Wo(this), E = s.contentSteeringController, x = E ? new E(this) : null, T = this.levelController = new zh(this, x), _ = new Xh(this.config), A = this.streamController = new ru(this, u, _);
    g.setStreamController(A), f.setStreamController(A);
    const D = [m, T, A];
    x && D.splice(1, 0, x), this.networkControllers = D;
    const v = [h, d, g, f, y, u];
    this.audioTrackController = this.createController(s.audioTrackController, D);
    const b = s.audioStreamController;
    b && D.push(new b(this, u, _)), this.subtitleTrackController = this.createController(s.subtitleTrackController, D);
    const C = s.subtitleStreamController;
    C && D.push(new C(this, u, _)), this.createController(s.timelineController, v), _.emeController = this.emeController = this.createController(s.emeController, v), this.cmcdController = this.createController(s.cmcdController, v), this.latencyController = this.createController(Yo, v), this.coreComponents = v, D.push(c);
    const R = c.onErrorOut;
    typeof R == "function" && this.on(p.ERROR, R, c);
  }
  createController(e, t) {
    if (e) {
      const s = new e(this);
      return t && t.push(s), s;
    }
    return null;
  }
  // Delegate the EventEmitter through the public API of Hls.js
  on(e, t, s = this) {
    this._emitter.on(e, t, s);
  }
  once(e, t, s = this) {
    this._emitter.once(e, t, s);
  }
  removeAllListeners(e) {
    this._emitter.removeAllListeners(e);
  }
  off(e, t, s = this, i) {
    this._emitter.off(e, t, s, i);
  }
  listeners(e) {
    return this._emitter.listeners(e);
  }
  emit(e, t, s) {
    return this._emitter.emit(e, t, s);
  }
  trigger(e, t) {
    if (this.config.debug)
      return this.emit(e, e, t);
    try {
      return this.emit(e, e, t);
    } catch (s) {
      if (this.logger.error("An internal error happened while handling event " + e + '. Error message: "' + s.message + '". Here is a stacktrace:', s), !this.triggeringException) {
        this.triggeringException = !0;
        const i = e === p.ERROR;
        this.trigger(p.ERROR, {
          type: $.OTHER_ERROR,
          details: L.INTERNAL_EXCEPTION,
          fatal: i,
          event: e,
          error: s
        }), this.triggeringException = !1;
      }
    }
    return !1;
  }
  listenerCount(e) {
    return this._emitter.listenerCount(e);
  }
  /**
   * Dispose of the instance
   */
  destroy() {
    this.logger.log("destroy"), this.trigger(p.DESTROYING, void 0), this.detachMedia(), this.removeAllListeners(), this._autoLevelCapping = -1, this._url = null, this.networkControllers.forEach((t) => t.destroy()), this.networkControllers.length = 0, this.coreComponents.forEach((t) => t.destroy()), this.coreComponents.length = 0;
    const e = this.config;
    e.xhrSetup = e.fetchSetup = void 0, this.userConfig = null;
  }
  /**
   * Attaches Hls.js to a media element
   */
  attachMedia(e) {
    if (!e) {
      const t = new Error(`attachMedia failed: media argument is ${e}`);
      this.trigger(p.ERROR, {
        type: $.OTHER_ERROR,
        details: L.ATTACH_MEDIA_ERROR,
        fatal: !0,
        error: t
      });
      return;
    }
    this.logger.log("attachMedia"), this._media = e, this.trigger(p.MEDIA_ATTACHING, {
      media: e
    });
  }
  /**
   * Detach Hls.js from the media
   */
  detachMedia() {
    this.logger.log("detachMedia"), this.trigger(p.MEDIA_DETACHING, void 0), this._media = null;
  }
  /**
   * Set the source URL. Can be relative or absolute.
   */
  loadSource(e) {
    this.stopLoad();
    const t = this.media, s = this._url, i = this._url = oi.buildAbsoluteURL(self.location.href, e, {
      alwaysNormalize: !0
    });
    this._autoLevelCapping = -1, this._maxHdcpLevel = null, this.logger.log(`loadSource:${i}`), t && s && (s !== i || this.bufferController.hasSourceTypes()) && (this.detachMedia(), this.attachMedia(t)), this.trigger(p.MANIFEST_LOADING, {
      url: e
    });
  }
  /**
   * Gets the currently loaded URL
   */
  get url() {
    return this._url;
  }
  /**
   * Start loading data from the stream source.
   * Depending on default config, client starts loading automatically when a source is set.
   *
   * @param startPosition - Set the start position to stream from.
   * Defaults to -1 (None: starts from earliest point)
   */
  startLoad(e = -1) {
    this.logger.log(`startLoad(${e})`), this.networkControllers.forEach((t) => {
      t.startLoad(e);
    });
  }
  /**
   * Stop loading of any stream data.
   */
  stopLoad() {
    this.logger.log("stopLoad"), this.networkControllers.forEach((e) => {
      e.stopLoad();
    });
  }
  /**
   * Resumes stream controller segment loading after `pauseBuffering` has been called.
   */
  resumeBuffering() {
    this.networkControllers.forEach((e) => {
      e.resumeBuffering && e.resumeBuffering();
    });
  }
  /**
   * Prevents stream controller from loading new segments until `resumeBuffering` is called.
   * This allows for media buffering to be paused without interupting playlist loading.
   */
  pauseBuffering() {
    this.networkControllers.forEach((e) => {
      e.pauseBuffering && e.pauseBuffering();
    });
  }
  /**
   * Swap through possible audio codecs in the stream (for example to switch from stereo to 5.1)
   */
  swapAudioCodec() {
    this.logger.log("swapAudioCodec"), this.streamController.swapAudioCodec();
  }
  /**
   * When the media-element fails, this allows to detach and then re-attach it
   * as one call (convenience method).
   *
   * Automatic recovery of media-errors by this process is configurable.
   */
  recoverMediaError() {
    this.logger.log("recoverMediaError");
    const e = this._media;
    this.detachMedia(), e && this.attachMedia(e);
  }
  removeLevel(e) {
    this.levelController.removeLevel(e);
  }
  /**
   * @returns an array of levels (variants) sorted by HDCP-LEVEL, RESOLUTION (height), FRAME-RATE, CODECS, VIDEO-RANGE, and BANDWIDTH
   */
  get levels() {
    const e = this.levelController.levels;
    return e || [];
  }
  /**
   * Index of quality level (variant) currently played
   */
  get currentLevel() {
    return this.streamController.currentLevel;
  }
  /**
   * Set quality level index immediately. This will flush the current buffer to replace the quality asap. That means playback will interrupt at least shortly to re-buffer and re-sync eventually. Set to -1 for automatic level selection.
   */
  set currentLevel(e) {
    this.logger.log(`set currentLevel:${e}`), this.levelController.manualLevel = e, this.streamController.immediateLevelSwitch();
  }
  /**
   * Index of next quality level loaded as scheduled by stream controller.
   */
  get nextLevel() {
    return this.streamController.nextLevel;
  }
  /**
   * Set quality level index for next loaded data.
   * This will switch the video quality asap, without interrupting playback.
   * May abort current loading of data, and flush parts of buffer (outside currently played fragment region).
   * @param newLevel - Pass -1 for automatic level selection
   */
  set nextLevel(e) {
    this.logger.log(`set nextLevel:${e}`), this.levelController.manualLevel = e, this.streamController.nextLevelSwitch();
  }
  /**
   * Return the quality level of the currently or last (of none is loaded currently) segment
   */
  get loadLevel() {
    return this.levelController.level;
  }
  /**
   * Set quality level index for next loaded data in a conservative way.
   * This will switch the quality without flushing, but interrupt current loading.
   * Thus the moment when the quality switch will appear in effect will only be after the already existing buffer.
   * @param newLevel - Pass -1 for automatic level selection
   */
  set loadLevel(e) {
    this.logger.log(`set loadLevel:${e}`), this.levelController.manualLevel = e;
  }
  /**
   * get next quality level loaded
   */
  get nextLoadLevel() {
    return this.levelController.nextLoadLevel;
  }
  /**
   * Set quality level of next loaded segment in a fully "non-destructive" way.
   * Same as `loadLevel` but will wait for next switch (until current loading is done).
   */
  set nextLoadLevel(e) {
    this.levelController.nextLoadLevel = e;
  }
  /**
   * Return "first level": like a default level, if not set,
   * falls back to index of first level referenced in manifest
   */
  get firstLevel() {
    return Math.max(this.levelController.firstLevel, this.minAutoLevel);
  }
  /**
   * Sets "first-level", see getter.
   */
  set firstLevel(e) {
    this.logger.log(`set firstLevel:${e}`), this.levelController.firstLevel = e;
  }
  /**
   * Return the desired start level for the first fragment that will be loaded.
   * The default value of -1 indicates automatic start level selection.
   * Setting hls.nextAutoLevel without setting a startLevel will result in
   * the nextAutoLevel value being used for one fragment load.
   */
  get startLevel() {
    const e = this.levelController.startLevel;
    return e === -1 && this.abrController.forcedAutoLevel > -1 ? this.abrController.forcedAutoLevel : e;
  }
  /**
   * set  start level (level of first fragment that will be played back)
   * if not overrided by user, first level appearing in manifest will be used as start level
   * if -1 : automatic start level selection, playback will start from level matching download bandwidth
   * (determined from download of first segment)
   */
  set startLevel(e) {
    this.logger.log(`set startLevel:${e}`), e !== -1 && (e = Math.max(e, this.minAutoLevel)), this.levelController.startLevel = e;
  }
  /**
   * Whether level capping is enabled.
   * Default value is set via `config.capLevelToPlayerSize`.
   */
  get capLevelToPlayerSize() {
    return this.config.capLevelToPlayerSize;
  }
  /**
   * Enables or disables level capping. If disabled after previously enabled, `nextLevelSwitch` will be immediately called.
   */
  set capLevelToPlayerSize(e) {
    const t = !!e;
    t !== this.config.capLevelToPlayerSize && (t ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = t);
  }
  /**
   * Capping/max level value that should be used by automatic level selection algorithm (`ABRController`)
   */
  get autoLevelCapping() {
    return this._autoLevelCapping;
  }
  /**
   * Returns the current bandwidth estimate in bits per second, when available. Otherwise, `NaN` is returned.
   */
  get bandwidthEstimate() {
    const {
      bwEstimator: e
    } = this.abrController;
    return e ? e.getEstimate() : NaN;
  }
  set bandwidthEstimate(e) {
    this.abrController.resetEstimator(e);
  }
  /**
   * get time to first byte estimate
   * @type {number}
   */
  get ttfbEstimate() {
    const {
      bwEstimator: e
    } = this.abrController;
    return e ? e.getEstimateTTFB() : NaN;
  }
  /**
   * Capping/max level value that should be used by automatic level selection algorithm (`ABRController`)
   */
  set autoLevelCapping(e) {
    this._autoLevelCapping !== e && (this.logger.log(`set autoLevelCapping:${e}`), this._autoLevelCapping = e, this.levelController.checkMaxAutoUpdated());
  }
  get maxHdcpLevel() {
    return this._maxHdcpLevel;
  }
  set maxHdcpLevel(e) {
    qo(e) && this._maxHdcpLevel !== e && (this._maxHdcpLevel = e, this.levelController.checkMaxAutoUpdated());
  }
  /**
   * True when automatic level selection enabled
   */
  get autoLevelEnabled() {
    return this.levelController.manualLevel === -1;
  }
  /**
   * Level set manually (if any)
   */
  get manualLevel() {
    return this.levelController.manualLevel;
  }
  /**
   * min level selectable in auto mode according to config.minAutoBitrate
   */
  get minAutoLevel() {
    const {
      levels: e,
      config: {
        minAutoBitrate: t
      }
    } = this;
    if (!e) return 0;
    const s = e.length;
    for (let i = 0; i < s; i++)
      if (e[i].maxBitrate >= t)
        return i;
    return 0;
  }
  /**
   * max level selectable in auto mode according to autoLevelCapping
   */
  get maxAutoLevel() {
    const {
      levels: e,
      autoLevelCapping: t,
      maxHdcpLevel: s
    } = this;
    let i;
    if (t === -1 && e != null && e.length ? i = e.length - 1 : i = t, s)
      for (let r = i; r--; ) {
        const a = e[r].attrs["HDCP-LEVEL"];
        if (a && a <= s)
          return r;
      }
    return i;
  }
  get firstAutoLevel() {
    return this.abrController.firstAutoLevel;
  }
  /**
   * next automatically selected quality level
   */
  get nextAutoLevel() {
    return this.abrController.nextAutoLevel;
  }
  /**
   * this setter is used to force next auto level.
   * this is useful to force a switch down in auto mode:
   * in case of load error on level N, hls.js can set nextAutoLevel to N-1 for example)
   * forced value is valid for one fragment. upon successful frag loading at forced level,
   * this value will be resetted to -1 by ABR controller.
   */
  set nextAutoLevel(e) {
    this.abrController.nextAutoLevel = e;
  }
  /**
   * get the datetime value relative to media.currentTime for the active level Program Date Time if present
   */
  get playingDate() {
    return this.streamController.currentProgramDateTime;
  }
  get mainForwardBufferInfo() {
    return this.streamController.getMainFwdBufferInfo();
  }
  get maxBufferLength() {
    return this.streamController.maxBufferLength;
  }
  /**
   * Find and select the best matching audio track, making a level switch when a Group change is necessary.
   * Updates `hls.config.audioPreference`. Returns the selected track, or null when no matching track is found.
   */
  setAudioOption(e) {
    var t;
    return ((t = this.audioTrackController) == null ? void 0 : t.setAudioOption(e)) || null;
  }
  /**
   * Find and select the best matching subtitle track, making a level switch when a Group change is necessary.
   * Updates `hls.config.subtitlePreference`. Returns the selected track, or null when no matching track is found.
   */
  setSubtitleOption(e) {
    var t;
    return ((t = this.subtitleTrackController) == null ? void 0 : t.setSubtitleOption(e)) || null;
  }
  /**
   * Get the complete list of audio tracks across all media groups
   */
  get allAudioTracks() {
    const e = this.audioTrackController;
    return e ? e.allAudioTracks : [];
  }
  /**
   * Get the list of selectable audio tracks
   */
  get audioTracks() {
    const e = this.audioTrackController;
    return e ? e.audioTracks : [];
  }
  /**
   * index of the selected audio track (index in audio track lists)
   */
  get audioTrack() {
    const e = this.audioTrackController;
    return e ? e.audioTrack : -1;
  }
  /**
   * selects an audio track, based on its index in audio track lists
   */
  set audioTrack(e) {
    const t = this.audioTrackController;
    t && (t.audioTrack = e);
  }
  /**
   * get the complete list of subtitle tracks across all media groups
   */
  get allSubtitleTracks() {
    const e = this.subtitleTrackController;
    return e ? e.allSubtitleTracks : [];
  }
  /**
   * get alternate subtitle tracks list from playlist
   */
  get subtitleTracks() {
    const e = this.subtitleTrackController;
    return e ? e.subtitleTracks : [];
  }
  /**
   * index of the selected subtitle track (index in subtitle track lists)
   */
  get subtitleTrack() {
    const e = this.subtitleTrackController;
    return e ? e.subtitleTrack : -1;
  }
  get media() {
    return this._media;
  }
  /**
   * select an subtitle track, based on its index in subtitle track lists
   */
  set subtitleTrack(e) {
    const t = this.subtitleTrackController;
    t && (t.subtitleTrack = e);
  }
  /**
   * Whether subtitle display is enabled or not
   */
  get subtitleDisplay() {
    const e = this.subtitleTrackController;
    return e ? e.subtitleDisplay : !1;
  }
  /**
   * Enable/disable subtitle display rendering
   */
  set subtitleDisplay(e) {
    const t = this.subtitleTrackController;
    t && (t.subtitleDisplay = e);
  }
  /**
   * get mode for Low-Latency HLS loading
   */
  get lowLatencyMode() {
    return this.config.lowLatencyMode;
  }
  /**
   * Enable/disable Low-Latency HLS part playlist and segment loading, and start live streams at playlist PART-HOLD-BACK rather than HOLD-BACK.
   */
  set lowLatencyMode(e) {
    this.config.lowLatencyMode = e;
  }
  /**
   * Position (in seconds) of live sync point (ie edge of live position minus safety delay defined by ```hls.config.liveSyncDuration```)
   * @returns null prior to loading live Playlist
   */
  get liveSyncPosition() {
    return this.latencyController.liveSyncPosition;
  }
  /**
   * Estimated position (in seconds) of live edge (ie edge of live playlist plus time sync playlist advanced)
   * @returns 0 before first playlist is loaded
   */
  get latency() {
    return this.latencyController.latency;
  }
  /**
   * maximum distance from the edge before the player seeks forward to ```hls.liveSyncPosition```
   * configured using ```liveMaxLatencyDurationCount``` (multiple of target duration) or ```liveMaxLatencyDuration```
   * @returns 0 before first playlist is loaded
   */
  get maxLatency() {
    return this.latencyController.maxLatency;
  }
  /**
   * target distance from the edge as calculated by the latency controller
   */
  get targetLatency() {
    return this.latencyController.targetLatency;
  }
  set targetLatency(e) {
    this.latencyController.targetLatency = e;
  }
  /**
   * the rate at which the edge of the current live playlist is advancing or 1 if there is none
   */
  get drift() {
    return this.latencyController.drift;
  }
  /**
   * set to true when startLoad is called before MANIFEST_PARSED event
   */
  get forceStartLoad() {
    return this.streamController.forceStartLoad;
  }
  /**
   * ContentSteering pathwayPriority getter/setter
   */
  get pathwayPriority() {
    return this.levelController.pathwayPriority;
  }
  set pathwayPriority(e) {
    this.levelController.pathwayPriority = e;
  }
}
He.defaultConfig = void 0;
class nu {
  constructor(e) {
    Dt(this, "audio");
    Dt(this, "hls", null);
    Dt(this, "hlsNative", !1);
    this.audio = (e == null ? void 0 : e.audioTag) ?? new Audio(), this.initializeHls();
  }
  initializeHls() {
    this.audio && (He.isSupported() ? (this.hls = new He(), this.hls.attachMedia(this.audio)) : this.audio.canPlayType("application/vnd.apple.mpegurl") && (this.hlsNative = !0));
  }
  load(e) {
    var t;
    this.hlsNative ? this.audio.src = e : (t = this.hls) == null || t.loadSource(e);
  }
  play() {
    this.audio.play();
  }
  pause() {
    this.audio.pause();
  }
  togglePlayPause() {
    this.isPlaying() ? this.pause() : this.play();
  }
  isPlaying() {
    return !this.audio.paused;
  }
  stop() {
    this.audio.pause();
  }
  getDuration() {
    return this.audio.duration || 0;
  }
  seek(e) {
    return this.audio.currentTime = e;
  }
  getPosition() {
    return this.audio.currentTime;
  }
  getVolume() {
    return this.audio.volume;
  }
  setVolume(e) {
    e >= 0 && e <= 1 ? this.audio.volume = e : console.warn("Volume value must be between 0.0 and 1.0");
  }
  on(e) {
    const t = this;
    return {
      do(s) {
        var i;
        (i = t.hls) == null || i.on(p[e], s);
      }
    };
  }
  destroy() {
    var e;
    (e = this.hls) == null || e.destroy(), this.hls = null, this.audio.pause(), this.audio = null;
  }
}
const ye = new nu(), hu = () => {
  const n = Bs(ye.isPlaying()), e = Bs(ye.getVolume()), t = va();
  return Gi(() => (t.current = window.setTimeout(() => ye.setVolume(e.value), 100), () => clearTimeout(t.current)), [e.value]), Gi(() => {
    const i = ye.audio;
    if (!i) return;
    const r = {
      play: () => {
        n.value = !0;
      },
      pause: () => {
        n.value = !1;
      },
      ended: () => {
        n.value = !1;
      }
    };
    return Object.keys(r).forEach(
      (a) => i.addEventListener(a, r[a])
    ), () => {
      Object.keys(r).forEach(
        (a) => i.removeEventListener(a, r[a])
      );
    };
  }, [ye.audio]), {
    controller: ye,
    playing: n,
    volume: e,
    load: (i) => {
      ye.load(i.url), i.on && ye.on("MEDIA_ENDED").do(i.on.end);
    },
    setVolume: (i) => e.value = i,
    seek: (i) => ye.seek(i),
    stop: () => ye.stop(),
    play: () => ye.play(),
    pause: () => ye.pause(),
    togglePlayPause: () => ye.togglePlayPause(),
    getDuration: () => ye.getDuration(),
    getPosition: () => ye.getPosition()
  };
};
export {
  nu as HlsAudioController,
  hu as useHlsController
};
