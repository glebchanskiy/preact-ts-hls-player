var V = Object.defineProperty;
var F = (e, t, _) => t in e ? V(e, t, { enumerable: !0, configurable: !0, writable: !0, value: _ }) : e[t] = _;
var l = (e, t, _) => F(e, typeof t != "symbol" ? t + "" : t, _);
import { useSignal as p } from "@preact/signals";
import { options as q } from "preact";
import v, { Events as j } from "hls.js";
var c, a, f, y, d = 0, A = [], i = q, H = i.__b, g = i.__r, E = i.diffed, P = i.__c, T = i.unmount, k = i.__;
function D(e, t) {
  i.__h && i.__h(a, e, d || t), d = 0;
  var _ = a.__H || (a.__H = { __: [], __h: [] });
  return e >= _.__.length && _.__.push({}), _.__[e];
}
function w(e, t) {
  var _ = D(c++, 3);
  !i.__s && N(_.__H, t) && (_.__ = e, _.i = t, a.__H.__h.push(_));
}
function z(e) {
  return d = 5, C(function() {
    return { current: e };
  }, []);
}
function C(e, t) {
  var _ = D(c++, 7);
  return N(_.__H, t) && (_.__ = e(), _.__H = t, _.__h = e), _.__;
}
function S() {
  for (var e; e = A.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(h), e.__H.__h.forEach(m), e.__H.__h = [];
  } catch (t) {
    e.__H.__h = [], i.__e(t, e.__v);
  }
}
i.__b = function(e) {
  a = null, H && H(e);
}, i.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), k && k(e, t);
}, i.__r = function(e) {
  g && g(e), c = 0;
  var t = (a = e.__c).__H;
  t && (f === a ? (t.__h = [], a.__h = [], t.__.forEach(function(_) {
    _.__N && (_.__ = _.__N), _.i = _.__N = void 0;
  })) : (t.__h.forEach(h), t.__h.forEach(m), t.__h = [], c = 0)), f = a;
}, i.diffed = function(e) {
  E && E(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (A.push(t) !== 1 && y === i.requestAnimationFrame || ((y = i.requestAnimationFrame) || L)(S)), t.__H.__.forEach(function(_) {
    _.i && (_.__H = _.i), _.i = void 0;
  })), f = a = null;
}, i.__c = function(e, t) {
  t.some(function(_) {
    try {
      _.__h.forEach(h), _.__h = _.__h.filter(function(r) {
        return !r.__ || m(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], i.__e(r, _.__v);
    }
  }), P && P(e, t);
}, i.unmount = function(e) {
  T && T(e);
  var t, _ = e.__c;
  _ && _.__H && (_.__H.__.forEach(function(r) {
    try {
      h(r);
    } catch (o) {
      t = o;
    }
  }), _.__H = void 0, t && i.__e(t, _.__v));
};
var b = typeof requestAnimationFrame == "function";
function L(e) {
  var t, _ = function() {
    clearTimeout(r), b && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(_, 100);
  b && (t = requestAnimationFrame(_));
}
function h(e) {
  var t = a, _ = e.__c;
  typeof _ == "function" && (e.__c = void 0, _()), a = t;
}
function m(e) {
  var t = a;
  e.__c = e.__(), a = t;
}
function N(e, t) {
  return !e || e.length !== t.length || t.some(function(_, r) {
    return _ !== e[r];
  });
}
class M {
  constructor(t) {
    l(this, "audio");
    l(this, "hls", null);
    l(this, "hlsNative", !1);
    this.audio = (t == null ? void 0 : t.audioTag) ?? new Audio(), this.initializeHls();
  }
  initializeHls() {
    this.audio && (v.isSupported() ? (this.hls = new v(), this.hls.attachMedia(this.audio)) : this.audio.canPlayType("application/vnd.apple.mpegurl") && (this.hlsNative = !0));
  }
  load(t) {
    var _;
    this.hlsNative ? this.audio.src = t : (_ = this.hls) == null || _.loadSource(t);
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
  seek(t) {
    return this.audio.currentTime = t;
  }
  getPosition() {
    return this.audio.currentTime;
  }
  getVolume() {
    return this.audio.volume;
  }
  setVolume(t) {
    t >= 0 && t <= 1 ? this.audio.volume = t : console.warn("Volume value must be between 0.0 and 1.0");
  }
  on(t) {
    const _ = this;
    return {
      do(r) {
        var o;
        (o = _.hls) == null || o.on(j[t], r);
      }
    };
  }
  destroy() {
    var t;
    (t = this.hls) == null || t.destroy(), this.hls = null, this.audio.pause(), this.audio = null;
  }
}
const u = new M(), G = () => {
  const e = p(u.isPlaying()), t = p(u.getVolume()), _ = z();
  return w(() => (_.current = window.setTimeout(() => u.setVolume(t.value), 100), () => clearTimeout(_.current)), [t.value]), w(() => {
    const o = u.audio;
    if (!o) return;
    const s = {
      play: () => {
        e.value = !0;
      },
      pause: () => {
        e.value = !1;
      },
      ended: () => {
        e.value = !1;
      }
    };
    return Object.keys(s).forEach(
      (n) => o.addEventListener(n, s[n])
    ), () => {
      Object.keys(s).forEach(
        (n) => o.removeEventListener(n, s[n])
      );
    };
  }, [u.audio]), {
    controller: u,
    playing: e,
    volume: t,
    load: (o) => {
      u.load(o.url), o.on && u.on("MEDIA_ENDED").do(o.on.end);
    },
    setVolume: (o) => t.value = o,
    seek: (o) => u.seek(o),
    stop: () => u.stop(),
    play: () => u.play(),
    pause: () => u.pause(),
    togglePlayPause: () => u.togglePlayPause(),
    getDuration: () => u.getDuration(),
    getPosition: () => u.getPosition()
  };
};
export {
  M as HlsAudioController,
  G as useHlsController
};
