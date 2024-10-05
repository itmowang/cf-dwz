var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// .wrangler/tmp/bundle-4UKG5N/checked-fetch.js
function checkURL(request, init2) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init2) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
var urls;
var init_checked_fetch = __esm({
  ".wrangler/tmp/bundle-4UKG5N/checked-fetch.js"() {
    "use strict";
    urls = /* @__PURE__ */ new Set();
    globalThis.fetch = new Proxy(globalThis.fetch, {
      apply(target, thisArg, argArray) {
        const [request, init2] = argArray;
        checkURL(request, init2);
        return Reflect.apply(target, thisArg, argArray);
      }
    });
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_checked_fetch();
    init_modules_watch_stub();
  }
});

// ../../node_modules/.pnpm/wrangler@3.72.3/node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "../../node_modules/.pnpm/wrangler@3.72.3/node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// ../../node_modules/.pnpm/@prisma+client@5.19.0_prisma@5.19.0/node_modules/@prisma/client/runtime/wasm.js
var require_wasm = __commonJS({
  "../../node_modules/.pnpm/@prisma+client@5.19.0_prisma@5.19.0/node_modules/@prisma/client/runtime/wasm.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var Ao = Object.create;
    var At = Object.defineProperty;
    var So = Object.getOwnPropertyDescriptor;
    var Oo = Object.getOwnPropertyNames;
    var ko = Object.getPrototypeOf;
    var Mo = Object.prototype.hasOwnProperty;
    var se = (e, t) => () => (e && (t = e(e = 0)), t);
    var _e = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
    var St = (e, t) => {
      for (var r in t)
        At(e, r, { get: t[r], enumerable: true });
    };
    var Hr = (e, t, r, n) => {
      if (t && typeof t == "object" || typeof t == "function")
        for (let i of Oo(t))
          !Mo.call(e, i) && i !== r && At(e, i, { get: () => t[i], enumerable: !(n = So(t, i)) || n.enumerable });
      return e;
    };
    var De = (e, t, r) => (r = e != null ? Ao(ko(e)) : {}, Hr(t || !e || !e.__esModule ? At(r, "default", { value: e, enumerable: true }) : r, e));
    var Lo = (e) => Hr(At({}, "__esModule", { value: true }), e);
    function mr(e, t) {
      if (t = t.toLowerCase(), t === "utf8" || t === "utf-8")
        return new h(Fo.encode(e));
      if (t === "base64" || t === "base64url")
        return e = e.replace(/-/g, "+").replace(/_/g, "/"), e = e.replace(/[^A-Za-z0-9+/]/g, ""), new h([...atob(e)].map((r) => r.charCodeAt(0)));
      if (t === "binary" || t === "ascii" || t === "latin1" || t === "latin-1")
        return new h([...e].map((r) => r.charCodeAt(0)));
      if (t === "ucs2" || t === "ucs-2" || t === "utf16le" || t === "utf-16le") {
        let r = new h(e.length * 2), n = new DataView(r.buffer);
        for (let i = 0; i < e.length; i++)
          n.setUint16(i * 2, e.charCodeAt(i), true);
        return r;
      }
      if (t === "hex") {
        let r = new h(e.length / 2);
        for (let n = 0, i = 0; i < e.length; i += 2, n++)
          r[n] = parseInt(e.slice(i, i + 2), 16);
        return r;
      }
      Yr(`encoding "${t}"`);
    }
    function Io(e) {
      let r = Object.getOwnPropertyNames(DataView.prototype).filter((a) => a.startsWith("get") || a.startsWith("set")), n = r.map((a) => a.replace("get", "read").replace("set", "write")), i = (a, u) => function(y = 0) {
        return q(y, "offset"), Y(y, "offset"), V(y, "offset", this.length - 1), new DataView(this.buffer)[r[a]](y, u);
      }, o = (a, u) => function(y, T = 0) {
        let C = r[a].match(/set(\w+\d+)/)[1].toLowerCase(), O = Do[C];
        return q(T, "offset"), Y(T, "offset"), V(T, "offset", this.length - 1), _o(y, "value", O[0], O[1]), new DataView(this.buffer)[r[a]](T, y, u), T + parseInt(r[a].match(/\d+/)[0]) / 8;
      }, s = (a) => {
        a.forEach((u) => {
          u.includes("Uint") && (e[u.replace("Uint", "UInt")] = e[u]), u.includes("Float64") && (e[u.replace("Float64", "Double")] = e[u]), u.includes("Float32") && (e[u.replace("Float32", "Float")] = e[u]);
        });
      };
      n.forEach((a, u) => {
        a.startsWith("read") && (e[a] = i(u, false), e[a + "LE"] = i(u, true), e[a + "BE"] = i(u, false)), a.startsWith("write") && (e[a] = o(u, false), e[a + "LE"] = o(u, true), e[a + "BE"] = o(u, false)), s([a, a + "LE", a + "BE"]);
      });
    }
    function Yr(e) {
      throw new Error(`Buffer polyfill does not implement "${e}"`);
    }
    function Ot(e, t) {
      if (!(e instanceof Uint8Array))
        throw new TypeError(`The "${t}" argument must be an instance of Buffer or Uint8Array`);
    }
    function V(e, t, r = Bo + 1) {
      if (e < 0 || e > r) {
        let n = new RangeError(`The value of "${t}" is out of range. It must be >= 0 && <= ${r}. Received ${e}`);
        throw n.code = "ERR_OUT_OF_RANGE", n;
      }
    }
    function q(e, t) {
      if (typeof e != "number") {
        let r = new TypeError(`The "${t}" argument must be of type number. Received type ${typeof e}.`);
        throw r.code = "ERR_INVALID_ARG_TYPE", r;
      }
    }
    function Y(e, t) {
      if (!Number.isInteger(e) || Number.isNaN(e)) {
        let r = new RangeError(`The value of "${t}" is out of range. It must be an integer. Received ${e}`);
        throw r.code = "ERR_OUT_OF_RANGE", r;
      }
    }
    function _o(e, t, r, n) {
      if (e < r || e > n) {
        let i = new RangeError(`The value of "${t}" is out of range. It must be >= ${r} and <= ${n}. Received ${e}`);
        throw i.code = "ERR_OUT_OF_RANGE", i;
      }
    }
    function zr(e, t) {
      if (typeof e != "string") {
        let r = new TypeError(`The "${t}" argument must be of type string. Received type ${typeof e}`);
        throw r.code = "ERR_INVALID_ARG_TYPE", r;
      }
    }
    function qo(e, t = "utf8") {
      return h.from(e, t);
    }
    var h;
    var Do;
    var Fo;
    var No;
    var Uo;
    var Bo;
    var b;
    var pr;
    var c = se(() => {
      "use strict";
      h = class e extends Uint8Array {
        constructor() {
          super(...arguments);
          this._isBuffer = true;
        }
        get offset() {
          return this.byteOffset;
        }
        static alloc(r, n = 0, i = "utf8") {
          return zr(i, "encoding"), e.allocUnsafe(r).fill(n, i);
        }
        static allocUnsafe(r) {
          return e.from(r);
        }
        static allocUnsafeSlow(r) {
          return e.from(r);
        }
        static isBuffer(r) {
          return r && !!r._isBuffer;
        }
        static byteLength(r, n = "utf8") {
          if (typeof r == "string")
            return mr(r, n).byteLength;
          if (r && r.byteLength)
            return r.byteLength;
          let i = new TypeError('The "string" argument must be of type string or an instance of Buffer or ArrayBuffer.');
          throw i.code = "ERR_INVALID_ARG_TYPE", i;
        }
        static isEncoding(r) {
          return Uo.includes(r);
        }
        static compare(r, n) {
          Ot(r, "buff1"), Ot(n, "buff2");
          for (let i = 0; i < r.length; i++) {
            if (r[i] < n[i])
              return -1;
            if (r[i] > n[i])
              return 1;
          }
          return r.length === n.length ? 0 : r.length > n.length ? 1 : -1;
        }
        static from(r, n = "utf8") {
          if (r && typeof r == "object" && r.type === "Buffer")
            return new e(r.data);
          if (typeof r == "number")
            return new e(new Uint8Array(r));
          if (typeof r == "string")
            return mr(r, n);
          if (ArrayBuffer.isView(r)) {
            let { byteOffset: i, byteLength: o, buffer: s } = r;
            return "map" in r && typeof r.map == "function" ? new e(r.map((a) => a % 256), i, o) : new e(s, i, o);
          }
          if (r && typeof r == "object" && ("length" in r || "byteLength" in r || "buffer" in r))
            return new e(r);
          throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
        }
        static concat(r, n) {
          if (r.length === 0)
            return e.alloc(0);
          let i = [].concat(...r.map((s) => [...s])), o = e.alloc(n !== void 0 ? n : i.length);
          return o.set(n !== void 0 ? i.slice(0, n) : i), o;
        }
        slice(r = 0, n = this.length) {
          return this.subarray(r, n);
        }
        subarray(r = 0, n = this.length) {
          return Object.setPrototypeOf(super.subarray(r, n), e.prototype);
        }
        reverse() {
          return super.reverse(), this;
        }
        readIntBE(r, n) {
          q(r, "offset"), Y(r, "offset"), V(r, "offset", this.length - 1), q(n, "byteLength"), Y(n, "byteLength");
          let i = new DataView(this.buffer, r, n), o = 0;
          for (let s = 0; s < n; s++)
            o = o * 256 + i.getUint8(s);
          return i.getUint8(0) & 128 && (o -= Math.pow(256, n)), o;
        }
        readIntLE(r, n) {
          q(r, "offset"), Y(r, "offset"), V(r, "offset", this.length - 1), q(n, "byteLength"), Y(n, "byteLength");
          let i = new DataView(this.buffer, r, n), o = 0;
          for (let s = 0; s < n; s++)
            o += i.getUint8(s) * Math.pow(256, s);
          return i.getUint8(n - 1) & 128 && (o -= Math.pow(256, n)), o;
        }
        readUIntBE(r, n) {
          q(r, "offset"), Y(r, "offset"), V(r, "offset", this.length - 1), q(n, "byteLength"), Y(n, "byteLength");
          let i = new DataView(this.buffer, r, n), o = 0;
          for (let s = 0; s < n; s++)
            o = o * 256 + i.getUint8(s);
          return o;
        }
        readUintBE(r, n) {
          return this.readUIntBE(r, n);
        }
        readUIntLE(r, n) {
          q(r, "offset"), Y(r, "offset"), V(r, "offset", this.length - 1), q(n, "byteLength"), Y(n, "byteLength");
          let i = new DataView(this.buffer, r, n), o = 0;
          for (let s = 0; s < n; s++)
            o += i.getUint8(s) * Math.pow(256, s);
          return o;
        }
        readUintLE(r, n) {
          return this.readUIntLE(r, n);
        }
        writeIntBE(r, n, i) {
          return r = r < 0 ? r + Math.pow(256, i) : r, this.writeUIntBE(r, n, i);
        }
        writeIntLE(r, n, i) {
          return r = r < 0 ? r + Math.pow(256, i) : r, this.writeUIntLE(r, n, i);
        }
        writeUIntBE(r, n, i) {
          q(n, "offset"), Y(n, "offset"), V(n, "offset", this.length - 1), q(i, "byteLength"), Y(i, "byteLength");
          let o = new DataView(this.buffer, n, i);
          for (let s = i - 1; s >= 0; s--)
            o.setUint8(s, r & 255), r = r / 256;
          return n + i;
        }
        writeUintBE(r, n, i) {
          return this.writeUIntBE(r, n, i);
        }
        writeUIntLE(r, n, i) {
          q(n, "offset"), Y(n, "offset"), V(n, "offset", this.length - 1), q(i, "byteLength"), Y(i, "byteLength");
          let o = new DataView(this.buffer, n, i);
          for (let s = 0; s < i; s++)
            o.setUint8(s, r & 255), r = r / 256;
          return n + i;
        }
        writeUintLE(r, n, i) {
          return this.writeUIntLE(r, n, i);
        }
        toJSON() {
          return { type: "Buffer", data: Array.from(this) };
        }
        swap16() {
          let r = new DataView(this.buffer, this.byteOffset, this.byteLength);
          for (let n = 0; n < this.length; n += 2)
            r.setUint16(n, r.getUint16(n, true), false);
          return this;
        }
        swap32() {
          let r = new DataView(this.buffer, this.byteOffset, this.byteLength);
          for (let n = 0; n < this.length; n += 4)
            r.setUint32(n, r.getUint32(n, true), false);
          return this;
        }
        swap64() {
          let r = new DataView(this.buffer, this.byteOffset, this.byteLength);
          for (let n = 0; n < this.length; n += 8)
            r.setBigUint64(n, r.getBigUint64(n, true), false);
          return this;
        }
        compare(r, n = 0, i = r.length, o = 0, s = this.length) {
          return Ot(r, "target"), q(n, "targetStart"), q(i, "targetEnd"), q(o, "sourceStart"), q(s, "sourceEnd"), V(n, "targetStart"), V(i, "targetEnd", r.length), V(o, "sourceStart"), V(s, "sourceEnd", this.length), e.compare(this.slice(o, s), r.slice(n, i));
        }
        equals(r) {
          return Ot(r, "otherBuffer"), this.length === r.length && this.every((n, i) => n === r[i]);
        }
        copy(r, n = 0, i = 0, o = this.length) {
          V(n, "targetStart"), V(i, "sourceStart", this.length), V(o, "sourceEnd"), n >>>= 0, i >>>= 0, o >>>= 0;
          let s = 0;
          for (; i < o && !(this[i] === void 0 || r[n] === void 0); )
            r[n] = this[i], s++, i++, n++;
          return s;
        }
        write(r, n, i, o = "utf8") {
          let s = typeof n == "string" ? 0 : n ?? 0, a = typeof i == "string" ? this.length - s : i ?? this.length - s;
          return o = typeof n == "string" ? n : typeof i == "string" ? i : o, q(s, "offset"), q(a, "length"), V(s, "offset", this.length), V(a, "length", this.length), (o === "ucs2" || o === "ucs-2" || o === "utf16le" || o === "utf-16le") && (a = a - a % 2), mr(r, o).copy(this, s, 0, a);
        }
        fill(r = 0, n = 0, i = this.length, o = "utf-8") {
          let s = typeof n == "string" ? 0 : n, a = typeof i == "string" ? this.length : i;
          if (o = typeof n == "string" ? n : typeof i == "string" ? i : o, r = e.from(typeof r == "number" ? [r] : r ?? [], o), zr(o, "encoding"), V(s, "offset", this.length), V(a, "end", this.length), r.length !== 0)
            for (let u = s; u < a; u += r.length)
              super.set(r.slice(0, r.length + u >= this.length ? this.length - u : r.length), u);
          return this;
        }
        includes(r, n = null, i = "utf-8") {
          return this.indexOf(r, n, i) !== -1;
        }
        lastIndexOf(r, n = null, i = "utf-8") {
          return this.indexOf(r, n, i, true);
        }
        indexOf(r, n = null, i = "utf-8", o = false) {
          let s = o ? this.findLastIndex.bind(this) : this.findIndex.bind(this);
          i = typeof n == "string" ? n : i;
          let a = e.from(typeof r == "number" ? [r] : r, i), u = typeof n == "string" ? 0 : n;
          return u = typeof n == "number" ? u : null, u = Number.isNaN(u) ? null : u, u ??= o ? this.length : 0, u = u < 0 ? this.length + u : u, a.length === 0 && o === false ? u >= this.length ? this.length : u : a.length === 0 && o === true ? (u >= this.length ? this.length : u) || this.length : s((y, T) => (o ? T <= u : T >= u) && this[T] === a[0] && a.every((O, A) => this[T + A] === O));
        }
        toString(r = "utf8", n = 0, i = this.length) {
          if (n = n < 0 ? 0 : n, r = r.toString().toLowerCase(), i <= 0)
            return "";
          if (r === "utf8" || r === "utf-8")
            return No.decode(this.slice(n, i));
          if (r === "base64" || r === "base64url") {
            let o = btoa(this.reduce((s, a) => s + pr(a), ""));
            return r === "base64url" ? o.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : o;
          }
          if (r === "binary" || r === "ascii" || r === "latin1" || r === "latin-1")
            return this.slice(n, i).reduce((o, s) => o + pr(s & (r === "ascii" ? 127 : 255)), "");
          if (r === "ucs2" || r === "ucs-2" || r === "utf16le" || r === "utf-16le") {
            let o = new DataView(this.buffer.slice(n, i));
            return Array.from({ length: o.byteLength / 2 }, (s, a) => a * 2 + 1 < o.byteLength ? pr(o.getUint16(a * 2, true)) : "").join("");
          }
          if (r === "hex")
            return this.slice(n, i).reduce((o, s) => o + s.toString(16).padStart(2, "0"), "");
          Yr(`encoding "${r}"`);
        }
        toLocaleString() {
          return this.toString();
        }
        inspect() {
          return `<Buffer ${this.toString("hex").match(/.{1,2}/g).join(" ")}>`;
        }
      };
      Do = { int8: [-128, 127], int16: [-32768, 32767], int32: [-2147483648, 2147483647], uint8: [0, 255], uint16: [0, 65535], uint32: [0, 4294967295], float32: [-1 / 0, 1 / 0], float64: [-1 / 0, 1 / 0], bigint64: [-0x8000000000000000n, 0x7fffffffffffffffn], biguint64: [0n, 0xffffffffffffffffn] }, Fo = new TextEncoder(), No = new TextDecoder(), Uo = ["utf8", "utf-8", "hex", "base64", "ascii", "binary", "base64url", "ucs2", "ucs-2", "utf16le", "utf-16le", "latin1", "latin-1"], Bo = 4294967295;
      Io(h.prototype);
      b = new Proxy(qo, { construct(e, [t, r]) {
        return h.from(t, r);
      }, get(e, t) {
        return h[t];
      } }), pr = String.fromCodePoint;
    });
    var g;
    var m = se(() => {
      "use strict";
      g = { nextTick: (e, ...t) => {
        setTimeout(() => {
          e(...t);
        }, 0);
      }, env: {}, version: "", cwd: () => "/", stderr: {}, argv: ["/bin/node"] };
    });
    var x;
    var p = se(() => {
      "use strict";
      x = globalThis.performance ?? (() => {
        let e = Date.now();
        return { now: () => Date.now() - e };
      })();
    });
    var E;
    var d = se(() => {
      "use strict";
      E = () => {
      };
      E.prototype = E;
    });
    var w;
    var f = se(() => {
      "use strict";
      w = class {
        constructor(t) {
          this.value = t;
        }
        deref() {
          return this.value;
        }
      };
    });
    function tn(e, t) {
      var r, n, i, o, s, a, u, y, T = e.constructor, C = T.precision;
      if (!e.s || !t.s)
        return t.s || (t = new T(e)), U ? D(t, C) : t;
      if (u = e.d, y = t.d, s = e.e, i = t.e, u = u.slice(), o = s - i, o) {
        for (o < 0 ? (n = u, o = -o, a = y.length) : (n = y, i = s, a = u.length), s = Math.ceil(C / N), a = s > a ? s + 1 : a + 1, o > a && (o = a, n.length = 1), n.reverse(); o--; )
          n.push(0);
        n.reverse();
      }
      for (a = u.length, o = y.length, a - o < 0 && (o = a, n = y, y = u, u = n), r = 0; o; )
        r = (u[--o] = u[o] + y[o] + r) / Q | 0, u[o] %= Q;
      for (r && (u.unshift(r), ++i), a = u.length; u[--a] == 0; )
        u.pop();
      return t.d = u, t.e = i, U ? D(t, C) : t;
    }
    function le(e, t, r) {
      if (e !== ~~e || e < t || e > r)
        throw Error(Ae + e);
    }
    function ae(e) {
      var t, r, n, i = e.length - 1, o = "", s = e[0];
      if (i > 0) {
        for (o += s, t = 1; t < i; t++)
          n = e[t] + "", r = N - n.length, r && (o += Ee(r)), o += n;
        s = e[t], n = s + "", r = N - n.length, r && (o += Ee(r));
      } else if (s === 0)
        return "0";
      for (; s % 10 === 0; )
        s /= 10;
      return o + s;
    }
    function rn(e, t) {
      var r, n, i, o, s, a, u = 0, y = 0, T = e.constructor, C = T.precision;
      if ($2(e) > 16)
        throw Error(fr + $2(e));
      if (!e.s)
        return new T(Z);
      for (t == null ? (U = false, a = C) : a = t, s = new T(0.03125); e.abs().gte(0.1); )
        e = e.times(s), y += 5;
      for (n = Math.log(Re(2, y)) / Math.LN10 * 2 + 5 | 0, a += n, r = i = o = new T(Z), T.precision = a; ; ) {
        if (i = D(i.times(e), a), r = r.times(++u), s = o.plus(ge(i, r, a)), ae(s.d).slice(0, a) === ae(o.d).slice(0, a)) {
          for (; y--; )
            o = D(o.times(o), a);
          return T.precision = C, t == null ? (U = true, D(o, C)) : o;
        }
        o = s;
      }
    }
    function $2(e) {
      for (var t = e.e * N, r = e.d[0]; r >= 10; r /= 10)
        t++;
      return t;
    }
    function dr(e, t, r) {
      if (t > e.LN10.sd())
        throw U = true, r && (e.precision = r), Error(re + "LN10 precision limit exceeded");
      return D(new e(e.LN10), t);
    }
    function Ee(e) {
      for (var t = ""; e--; )
        t += "0";
      return t;
    }
    function tt(e, t) {
      var r, n, i, o, s, a, u, y, T, C = 1, O = 10, A = e, M = A.d, S = A.constructor, L = S.precision;
      if (A.s < 1)
        throw Error(re + (A.s ? "NaN" : "-Infinity"));
      if (A.eq(Z))
        return new S(0);
      if (t == null ? (U = false, y = L) : y = t, A.eq(10))
        return t == null && (U = true), dr(S, y);
      if (y += O, S.precision = y, r = ae(M), n = r.charAt(0), o = $2(A), Math.abs(o) < 15e14) {
        for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
          A = A.times(e), r = ae(A.d), n = r.charAt(0), C++;
        o = $2(A), n > 1 ? (A = new S("0." + r), o++) : A = new S(n + "." + r.slice(1));
      } else
        return u = dr(S, y + 2, L).times(o + ""), A = tt(new S(n + "." + r.slice(1)), y - O).plus(u), S.precision = L, t == null ? (U = true, D(A, L)) : A;
      for (a = s = A = ge(A.minus(Z), A.plus(Z), y), T = D(A.times(A), y), i = 3; ; ) {
        if (s = D(s.times(T), y), u = a.plus(ge(s, new S(i), y)), ae(u.d).slice(0, y) === ae(a.d).slice(0, y))
          return a = a.times(2), o !== 0 && (a = a.plus(dr(S, y + 2, L).times(o + ""))), a = ge(a, new S(C), y), S.precision = L, t == null ? (U = true, D(a, L)) : a;
        a = u, i += 2;
      }
    }
    function Xr(e, t) {
      var r, n, i;
      for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; )
        ++n;
      for (i = t.length; t.charCodeAt(i - 1) === 48; )
        --i;
      if (t = t.slice(n, i), t) {
        if (i -= n, r = r - n - 1, e.e = Ne(r / N), e.d = [], n = (r + 1) % N, r < 0 && (n += N), n < i) {
          for (n && e.d.push(+t.slice(0, n)), i -= N; n < i; )
            e.d.push(+t.slice(n, n += N));
          t = t.slice(n), n = N - t.length;
        } else
          n -= i;
        for (; n--; )
          t += "0";
        if (e.d.push(+t), U && (e.e > kt || e.e < -kt))
          throw Error(fr + r);
      } else
        e.s = 0, e.e = 0, e.d = [0];
      return e;
    }
    function D(e, t, r) {
      var n, i, o, s, a, u, y, T, C = e.d;
      for (s = 1, o = C[0]; o >= 10; o /= 10)
        s++;
      if (n = t - s, n < 0)
        n += N, i = t, y = C[T = 0];
      else {
        if (T = Math.ceil((n + 1) / N), o = C.length, T >= o)
          return e;
        for (y = o = C[T], s = 1; o >= 10; o /= 10)
          s++;
        n %= N, i = n - N + s;
      }
      if (r !== void 0 && (o = Re(10, s - i - 1), a = y / o % 10 | 0, u = t < 0 || C[T + 1] !== void 0 || y % o, u = r < 4 ? (a || u) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : a > 5 || a == 5 && (r == 4 || u || r == 6 && (n > 0 ? i > 0 ? y / Re(10, s - i) : 0 : C[T - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !C[0])
        return u ? (o = $2(e), C.length = 1, t = t - o - 1, C[0] = Re(10, (N - t % N) % N), e.e = Ne(-t / N) || 0) : (C.length = 1, C[0] = e.e = e.s = 0), e;
      if (n == 0 ? (C.length = T, o = 1, T--) : (C.length = T + 1, o = Re(10, N - n), C[T] = i > 0 ? (y / Re(10, s - i) % Re(10, i) | 0) * o : 0), u)
        for (; ; )
          if (T == 0) {
            (C[0] += o) == Q && (C[0] = 1, ++e.e);
            break;
          } else {
            if (C[T] += o, C[T] != Q)
              break;
            C[T--] = 0, o = 1;
          }
      for (n = C.length; C[--n] === 0; )
        C.pop();
      if (U && (e.e > kt || e.e < -kt))
        throw Error(fr + $2(e));
      return e;
    }
    function nn(e, t) {
      var r, n, i, o, s, a, u, y, T, C, O = e.constructor, A = O.precision;
      if (!e.s || !t.s)
        return t.s ? t.s = -t.s : t = new O(e), U ? D(t, A) : t;
      if (u = e.d, C = t.d, n = t.e, y = e.e, u = u.slice(), s = y - n, s) {
        for (T = s < 0, T ? (r = u, s = -s, a = C.length) : (r = C, n = y, a = u.length), i = Math.max(Math.ceil(A / N), a) + 2, s > i && (s = i, r.length = 1), r.reverse(), i = s; i--; )
          r.push(0);
        r.reverse();
      } else {
        for (i = u.length, a = C.length, T = i < a, T && (a = i), i = 0; i < a; i++)
          if (u[i] != C[i]) {
            T = u[i] < C[i];
            break;
          }
        s = 0;
      }
      for (T && (r = u, u = C, C = r, t.s = -t.s), a = u.length, i = C.length - a; i > 0; --i)
        u[a++] = 0;
      for (i = C.length; i > s; ) {
        if (u[--i] < C[i]) {
          for (o = i; o && u[--o] === 0; )
            u[o] = Q - 1;
          --u[o], u[i] += Q;
        }
        u[i] -= C[i];
      }
      for (; u[--a] === 0; )
        u.pop();
      for (; u[0] === 0; u.shift())
        --n;
      return u[0] ? (t.d = u, t.e = n, U ? D(t, A) : t) : new O(0);
    }
    function Se(e, t, r) {
      var n, i = $2(e), o = ae(e.d), s = o.length;
      return t ? (r && (n = r - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Ee(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (i < 0 ? "e" : "e+") + i) : i < 0 ? (o = "0." + Ee(-i - 1) + o, r && (n = r - s) > 0 && (o += Ee(n))) : i >= s ? (o += Ee(i + 1 - s), r && (n = r - i - 1) > 0 && (o = o + "." + Ee(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - s) > 0 && (i + 1 === s && (o += "."), o += Ee(n))), e.s < 0 ? "-" + o : o;
    }
    function Zr(e, t) {
      if (e.length > t)
        return e.length = t, true;
    }
    function on(e) {
      var t, r, n;
      function i(o) {
        var s = this;
        if (!(s instanceof i))
          return new i(o);
        if (s.constructor = i, o instanceof i) {
          s.s = o.s, s.e = o.e, s.d = (o = o.d) ? o.slice() : o;
          return;
        }
        if (typeof o == "number") {
          if (o * 0 !== 0)
            throw Error(Ae + o);
          if (o > 0)
            s.s = 1;
          else if (o < 0)
            o = -o, s.s = -1;
          else {
            s.s = 0, s.e = 0, s.d = [0];
            return;
          }
          if (o === ~~o && o < 1e7) {
            s.e = 0, s.d = [o];
            return;
          }
          return Xr(s, o.toString());
        } else if (typeof o != "string")
          throw Error(Ae + o);
        if (o.charCodeAt(0) === 45 ? (o = o.slice(1), s.s = -1) : s.s = 1, Vo.test(o))
          Xr(s, o);
        else
          throw Error(Ae + o);
      }
      if (i.prototype = R, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = on, i.config = i.set = jo, e === void 0 && (e = {}), e)
        for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; )
          e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
      return i.config(e), i;
    }
    function jo(e) {
      if (!e || typeof e != "object")
        throw Error(re + "Object expected");
      var t, r, n, i = ["precision", 1, Fe, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (t = 0; t < i.length; t += 3)
        if ((n = e[r = i[t]]) !== void 0)
          if (Ne(n) === n && n >= i[t + 1] && n <= i[t + 2])
            this[r] = n;
          else
            throw Error(Ae + r + ": " + n);
      if ((n = e[r = "LN10"]) !== void 0)
        if (n == Math.LN10)
          this[r] = new this(n);
        else
          throw Error(Ae + r + ": " + n);
      return this;
    }
    var Fe;
    var $o;
    var gr;
    var U;
    var re;
    var Ae;
    var fr;
    var Ne;
    var Re;
    var Vo;
    var Z;
    var Q;
    var N;
    var en;
    var kt;
    var R;
    var ge;
    var gr;
    var Mt;
    var sn = se(() => {
      "use strict";
      c();
      m();
      p();
      d();
      f();
      l();
      Fe = 1e9, $o = { precision: 20, rounding: 4, toExpNeg: -7, toExpPos: 21, LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286" }, U = true, re = "[DecimalError] ", Ae = re + "Invalid argument: ", fr = re + "Exponent out of range: ", Ne = Math.floor, Re = Math.pow, Vo = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Q = 1e7, N = 7, en = 9007199254740991, kt = Ne(en / N), R = {};
      R.absoluteValue = R.abs = function() {
        var e = new this.constructor(this);
        return e.s && (e.s = 1), e;
      };
      R.comparedTo = R.cmp = function(e) {
        var t, r, n, i, o = this;
        if (e = new o.constructor(e), o.s !== e.s)
          return o.s || -e.s;
        if (o.e !== e.e)
          return o.e > e.e ^ o.s < 0 ? 1 : -1;
        for (n = o.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
          if (o.d[t] !== e.d[t])
            return o.d[t] > e.d[t] ^ o.s < 0 ? 1 : -1;
        return n === i ? 0 : n > i ^ o.s < 0 ? 1 : -1;
      };
      R.decimalPlaces = R.dp = function() {
        var e = this, t = e.d.length - 1, r = (t - e.e) * N;
        if (t = e.d[t], t)
          for (; t % 10 == 0; t /= 10)
            r--;
        return r < 0 ? 0 : r;
      };
      R.dividedBy = R.div = function(e) {
        return ge(this, new this.constructor(e));
      };
      R.dividedToIntegerBy = R.idiv = function(e) {
        var t = this, r = t.constructor;
        return D(ge(t, new r(e), 0, 1), r.precision);
      };
      R.equals = R.eq = function(e) {
        return !this.cmp(e);
      };
      R.exponent = function() {
        return $2(this);
      };
      R.greaterThan = R.gt = function(e) {
        return this.cmp(e) > 0;
      };
      R.greaterThanOrEqualTo = R.gte = function(e) {
        return this.cmp(e) >= 0;
      };
      R.isInteger = R.isint = function() {
        return this.e > this.d.length - 2;
      };
      R.isNegative = R.isneg = function() {
        return this.s < 0;
      };
      R.isPositive = R.ispos = function() {
        return this.s > 0;
      };
      R.isZero = function() {
        return this.s === 0;
      };
      R.lessThan = R.lt = function(e) {
        return this.cmp(e) < 0;
      };
      R.lessThanOrEqualTo = R.lte = function(e) {
        return this.cmp(e) < 1;
      };
      R.logarithm = R.log = function(e) {
        var t, r = this, n = r.constructor, i = n.precision, o = i + 5;
        if (e === void 0)
          e = new n(10);
        else if (e = new n(e), e.s < 1 || e.eq(Z))
          throw Error(re + "NaN");
        if (r.s < 1)
          throw Error(re + (r.s ? "NaN" : "-Infinity"));
        return r.eq(Z) ? new n(0) : (U = false, t = ge(tt(r, o), tt(e, o), o), U = true, D(t, i));
      };
      R.minus = R.sub = function(e) {
        var t = this;
        return e = new t.constructor(e), t.s == e.s ? nn(t, e) : tn(t, (e.s = -e.s, e));
      };
      R.modulo = R.mod = function(e) {
        var t, r = this, n = r.constructor, i = n.precision;
        if (e = new n(e), !e.s)
          throw Error(re + "NaN");
        return r.s ? (U = false, t = ge(r, e, 0, 1).times(e), U = true, r.minus(t)) : D(new n(r), i);
      };
      R.naturalExponential = R.exp = function() {
        return rn(this);
      };
      R.naturalLogarithm = R.ln = function() {
        return tt(this);
      };
      R.negated = R.neg = function() {
        var e = new this.constructor(this);
        return e.s = -e.s || 0, e;
      };
      R.plus = R.add = function(e) {
        var t = this;
        return e = new t.constructor(e), t.s == e.s ? tn(t, e) : nn(t, (e.s = -e.s, e));
      };
      R.precision = R.sd = function(e) {
        var t, r, n, i = this;
        if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
          throw Error(Ae + e);
        if (t = $2(i) + 1, n = i.d.length - 1, r = n * N + 1, n = i.d[n], n) {
          for (; n % 10 == 0; n /= 10)
            r--;
          for (n = i.d[0]; n >= 10; n /= 10)
            r++;
        }
        return e && t > r ? t : r;
      };
      R.squareRoot = R.sqrt = function() {
        var e, t, r, n, i, o, s, a = this, u = a.constructor;
        if (a.s < 1) {
          if (!a.s)
            return new u(0);
          throw Error(re + "NaN");
        }
        for (e = $2(a), U = false, i = Math.sqrt(+a), i == 0 || i == 1 / 0 ? (t = ae(a.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = Ne((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new u(t)) : n = new u(i.toString()), r = u.precision, i = s = r + 3; ; )
          if (o = n, n = o.plus(ge(a, o, s + 2)).times(0.5), ae(o.d).slice(0, s) === (t = ae(n.d)).slice(0, s)) {
            if (t = t.slice(s - 3, s + 1), i == s && t == "4999") {
              if (D(o, r + 1, 0), o.times(o).eq(a)) {
                n = o;
                break;
              }
            } else if (t != "9999")
              break;
            s += 4;
          }
        return U = true, D(n, r);
      };
      R.times = R.mul = function(e) {
        var t, r, n, i, o, s, a, u, y, T = this, C = T.constructor, O = T.d, A = (e = new C(e)).d;
        if (!T.s || !e.s)
          return new C(0);
        for (e.s *= T.s, r = T.e + e.e, u = O.length, y = A.length, u < y && (o = O, O = A, A = o, s = u, u = y, y = s), o = [], s = u + y, n = s; n--; )
          o.push(0);
        for (n = y; --n >= 0; ) {
          for (t = 0, i = u + n; i > n; )
            a = o[i] + A[n] * O[i - n - 1] + t, o[i--] = a % Q | 0, t = a / Q | 0;
          o[i] = (o[i] + t) % Q | 0;
        }
        for (; !o[--s]; )
          o.pop();
        return t ? ++r : o.shift(), e.d = o, e.e = r, U ? D(e, C.precision) : e;
      };
      R.toDecimalPlaces = R.todp = function(e, t) {
        var r = this, n = r.constructor;
        return r = new n(r), e === void 0 ? r : (le(e, 0, Fe), t === void 0 ? t = n.rounding : le(t, 0, 8), D(r, e + $2(r) + 1, t));
      };
      R.toExponential = function(e, t) {
        var r, n = this, i = n.constructor;
        return e === void 0 ? r = Se(n, true) : (le(e, 0, Fe), t === void 0 ? t = i.rounding : le(t, 0, 8), n = D(new i(n), e + 1, t), r = Se(n, true, e + 1)), r;
      };
      R.toFixed = function(e, t) {
        var r, n, i = this, o = i.constructor;
        return e === void 0 ? Se(i) : (le(e, 0, Fe), t === void 0 ? t = o.rounding : le(t, 0, 8), n = D(new o(i), e + $2(i) + 1, t), r = Se(n.abs(), false, e + $2(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
      };
      R.toInteger = R.toint = function() {
        var e = this, t = e.constructor;
        return D(new t(e), $2(e) + 1, t.rounding);
      };
      R.toNumber = function() {
        return +this;
      };
      R.toPower = R.pow = function(e) {
        var t, r, n, i, o, s, a = this, u = a.constructor, y = 12, T = +(e = new u(e));
        if (!e.s)
          return new u(Z);
        if (a = new u(a), !a.s) {
          if (e.s < 1)
            throw Error(re + "Infinity");
          return a;
        }
        if (a.eq(Z))
          return a;
        if (n = u.precision, e.eq(Z))
          return D(a, n);
        if (t = e.e, r = e.d.length - 1, s = t >= r, o = a.s, s) {
          if ((r = T < 0 ? -T : T) <= en) {
            for (i = new u(Z), t = Math.ceil(n / N + 4), U = false; r % 2 && (i = i.times(a), Zr(i.d, t)), r = Ne(r / 2), r !== 0; )
              a = a.times(a), Zr(a.d, t);
            return U = true, e.s < 0 ? new u(Z).div(i) : D(i, n);
          }
        } else if (o < 0)
          throw Error(re + "NaN");
        return o = o < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, a.s = 1, U = false, i = e.times(tt(a, n + y)), U = true, i = rn(i), i.s = o, i;
      };
      R.toPrecision = function(e, t) {
        var r, n, i = this, o = i.constructor;
        return e === void 0 ? (r = $2(i), n = Se(i, r <= o.toExpNeg || r >= o.toExpPos)) : (le(e, 1, Fe), t === void 0 ? t = o.rounding : le(t, 0, 8), i = D(new o(i), e, t), r = $2(i), n = Se(i, e <= r || r <= o.toExpNeg, e)), n;
      };
      R.toSignificantDigits = R.tosd = function(e, t) {
        var r = this, n = r.constructor;
        return e === void 0 ? (e = n.precision, t = n.rounding) : (le(e, 1, Fe), t === void 0 ? t = n.rounding : le(t, 0, 8)), D(new n(r), e, t);
      };
      R.toString = R.valueOf = R.val = R.toJSON = R[Symbol.for("nodejs.util.inspect.custom")] = function() {
        var e = this, t = $2(e), r = e.constructor;
        return Se(e, t <= r.toExpNeg || t >= r.toExpPos);
      };
      ge = function() {
        function e(n, i) {
          var o, s = 0, a = n.length;
          for (n = n.slice(); a--; )
            o = n[a] * i + s, n[a] = o % Q | 0, s = o / Q | 0;
          return s && n.unshift(s), n;
        }
        function t(n, i, o, s) {
          var a, u;
          if (o != s)
            u = o > s ? 1 : -1;
          else
            for (a = u = 0; a < o; a++)
              if (n[a] != i[a]) {
                u = n[a] > i[a] ? 1 : -1;
                break;
              }
          return u;
        }
        function r(n, i, o) {
          for (var s = 0; o--; )
            n[o] -= s, s = n[o] < i[o] ? 1 : 0, n[o] = s * Q + n[o] - i[o];
          for (; !n[0] && n.length > 1; )
            n.shift();
        }
        return function(n, i, o, s) {
          var a, u, y, T, C, O, A, M, S, L, ne, z, Ie, k, Ce, cr, ie, Ct, Rt = n.constructor, Ro = n.s == i.s ? 1 : -1, oe = n.d, B = i.d;
          if (!n.s)
            return new Rt(n);
          if (!i.s)
            throw Error(re + "Division by zero");
          for (u = n.e - i.e, ie = B.length, Ce = oe.length, A = new Rt(Ro), M = A.d = [], y = 0; B[y] == (oe[y] || 0); )
            ++y;
          if (B[y] > (oe[y] || 0) && --u, o == null ? z = o = Rt.precision : s ? z = o + ($2(n) - $2(i)) + 1 : z = o, z < 0)
            return new Rt(0);
          if (z = z / N + 2 | 0, y = 0, ie == 1)
            for (T = 0, B = B[0], z++; (y < Ce || T) && z--; y++)
              Ie = T * Q + (oe[y] || 0), M[y] = Ie / B | 0, T = Ie % B | 0;
          else {
            for (T = Q / (B[0] + 1) | 0, T > 1 && (B = e(B, T), oe = e(oe, T), ie = B.length, Ce = oe.length), k = ie, S = oe.slice(0, ie), L = S.length; L < ie; )
              S[L++] = 0;
            Ct = B.slice(), Ct.unshift(0), cr = B[0], B[1] >= Q / 2 && ++cr;
            do
              T = 0, a = t(B, S, ie, L), a < 0 ? (ne = S[0], ie != L && (ne = ne * Q + (S[1] || 0)), T = ne / cr | 0, T > 1 ? (T >= Q && (T = Q - 1), C = e(B, T), O = C.length, L = S.length, a = t(C, S, O, L), a == 1 && (T--, r(C, ie < O ? Ct : B, O))) : (T == 0 && (a = T = 1), C = B.slice()), O = C.length, O < L && C.unshift(0), r(S, C, L), a == -1 && (L = S.length, a = t(B, S, ie, L), a < 1 && (T++, r(S, ie < L ? Ct : B, L))), L = S.length) : a === 0 && (T++, S = [0]), M[y++] = T, a && S[0] ? S[L++] = oe[k] || 0 : (S = [oe[k]], L = 1);
            while ((k++ < Ce || S[0] !== void 0) && z--);
          }
          return M[0] || M.shift(), A.e = u, D(A, s ? o + $2(A) + 1 : o);
        };
      }();
      gr = on($o);
      Z = new gr(1);
      Mt = gr;
    });
    var v;
    var ue;
    var l = se(() => {
      "use strict";
      sn();
      v = class extends Mt {
        static isDecimal(t) {
          return t instanceof Mt;
        }
        static random(t = 20) {
          {
            let n = crypto.getRandomValues(new Uint8Array(t)).reduce((i, o) => i + o, "");
            return new Mt(`0.${n.slice(0, t)}`);
          }
        }
      }, ue = v;
    });
    function Qo() {
      return false;
    }
    var Jo;
    var Go;
    var cn;
    var mn = se(() => {
      "use strict";
      c();
      m();
      p();
      d();
      f();
      l();
      Jo = {}, Go = { existsSync: Qo, promises: Jo }, cn = Go;
    });
    function Xo(...e) {
      return e.join("/");
    }
    function Zo(...e) {
      return e.join("/");
    }
    var Cn;
    var es;
    var ts;
    var nt;
    var Rn = se(() => {
      "use strict";
      c();
      m();
      p();
      d();
      f();
      l();
      Cn = "/", es = { sep: Cn }, ts = { resolve: Xo, posix: es, join: Zo, sep: Cn }, nt = ts;
    });
    var Dt;
    var Sn = se(() => {
      "use strict";
      c();
      m();
      p();
      d();
      f();
      l();
      Dt = class {
        constructor() {
          this.events = {};
        }
        on(t, r) {
          return this.events[t] || (this.events[t] = []), this.events[t].push(r), this;
        }
        emit(t, ...r) {
          return this.events[t] ? (this.events[t].forEach((n) => {
            n(...r);
          }), true) : false;
        }
      };
    });
    var kn = _e((_c, On) => {
      "use strict";
      c();
      m();
      p();
      d();
      f();
      l();
      On.exports = (e, t = 1, r) => {
        if (r = { indent: " ", includeEmptyLines: false, ...r }, typeof e != "string")
          throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
        if (typeof t != "number")
          throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
        if (typeof r.indent != "string")
          throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);
        if (t === 0)
          return e;
        let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return e.replace(n, r.indent.repeat(t));
      };
    });
    var In = _e((Kc, Ln) => {
      "use strict";
      c();
      m();
      p();
      d();
      f();
      l();
      Ln.exports = ({ onlyFirst: e = false } = {}) => {
        let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(t, e ? void 0 : "g");
      };
    });
    var Dn = _e((tm, _n) => {
      "use strict";
      c();
      m();
      p();
      d();
      f();
      l();
      var as = In();
      _n.exports = (e) => typeof e == "string" ? e.replace(as(), "") : e;
    });
    var qn = _e((Uf, ms) => {
      ms.exports = { name: "@prisma/engines-version", version: "5.19.0-31.5fe21811a6ba0b952a3bc71400666511fe3b902f", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "5fe21811a6ba0b952a3bc71400666511fe3b902f" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.34", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
    });
    var $n = _e(() => {
      "use strict";
      c();
      m();
      p();
      d();
      f();
      l();
    });
    var $r = _e((IC, Li) => {
      "use strict";
      c();
      m();
      p();
      d();
      f();
      l();
      Li.exports = function() {
        function e(t, r, n, i, o) {
          return t < r || n < r ? t > n ? n + 1 : t + 1 : i === o ? r : r + 1;
        }
        return function(t, r) {
          if (t === r)
            return 0;
          if (t.length > r.length) {
            var n = t;
            t = r, r = n;
          }
          for (var i = t.length, o = r.length; i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1); )
            i--, o--;
          for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s); )
            s++;
          if (i -= s, o -= s, i === 0 || o < 3)
            return o;
          var a = 0, u, y, T, C, O, A, M, S, L, ne, z, Ie, k = [];
          for (u = 0; u < i; u++)
            k.push(u + 1), k.push(t.charCodeAt(s + u));
          for (var Ce = k.length - 1; a < o - 3; )
            for (L = r.charCodeAt(s + (y = a)), ne = r.charCodeAt(s + (T = a + 1)), z = r.charCodeAt(s + (C = a + 2)), Ie = r.charCodeAt(s + (O = a + 3)), A = a += 4, u = 0; u < Ce; u += 2)
              M = k[u], S = k[u + 1], y = e(M, y, T, L, S), T = e(y, T, C, ne, S), C = e(T, C, O, z, S), A = e(C, O, A, Ie, S), k[u] = A, O = C, C = T, T = y, y = M;
          for (; a < o; )
            for (L = r.charCodeAt(s + (y = a)), A = ++a, u = 0; u < Ce; u += 2)
              M = k[u], k[u] = A = e(M, y, A, L, k[u + 1]), y = M;
          return A;
        };
      }();
    });
    var za = {};
    St(za, { Debug: () => Er, Decimal: () => ue, Extensions: () => hr, MetricsClient: () => qe, NotFoundError: () => ye, PrismaClientInitializationError: () => I, PrismaClientKnownRequestError: () => J, PrismaClientRustPanicError: () => be, PrismaClientUnknownRequestError: () => G, PrismaClientValidationError: () => j, Public: () => yr, Sql: () => X, defineDmmfProperty: () => Un, empty: () => jn, getPrismaClient: () => vo, getRuntime: () => ve, join: () => Vn, makeStrictEnum: () => To, makeTypedQueryFactory: () => Bn, objectEnumValues: () => Ut, raw: () => Lr, sqltag: () => Ir, warnEnvConflicts: () => void 0, warnOnce: () => at });
    module.exports = Lo(za);
    c();
    m();
    p();
    d();
    f();
    l();
    var hr = {};
    St(hr, { defineExtension: () => an, getExtensionContext: () => ln });
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    function an(e) {
      return typeof e == "function" ? e : (t) => t.$extends(e);
    }
    c();
    m();
    p();
    d();
    f();
    l();
    function ln(e) {
      return e;
    }
    var yr = {};
    St(yr, { validator: () => un });
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    function un(...e) {
      return (t) => t;
    }
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    var br;
    var pn;
    var dn;
    var fn;
    var gn = true;
    typeof g < "u" && ({ FORCE_COLOR: br, NODE_DISABLE_COLORS: pn, NO_COLOR: dn, TERM: fn } = g.env || {}, gn = g.stdout && g.stdout.isTTY);
    var Wo = { enabled: !pn && dn == null && fn !== "dumb" && (br != null && br !== "0" || gn) };
    function F(e, t) {
      let r = new RegExp(`\\x1b\\[${t}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${t}m`;
      return function(o) {
        return !Wo.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
      };
    }
    var tu = F(0, 0);
    var Lt = F(1, 22);
    var It = F(2, 22);
    var ru = F(3, 23);
    var hn = F(4, 24);
    var nu = F(7, 27);
    var iu = F(8, 28);
    var ou = F(9, 29);
    var su = F(30, 39);
    var Ue = F(31, 39);
    var yn = F(32, 39);
    var bn = F(33, 39);
    var wn = F(34, 39);
    var au = F(35, 39);
    var En = F(36, 39);
    var lu = F(37, 39);
    var xn = F(90, 39);
    var uu = F(90, 39);
    var cu = F(40, 49);
    var mu = F(41, 49);
    var pu = F(42, 49);
    var du = F(43, 49);
    var fu = F(44, 49);
    var gu = F(45, 49);
    var hu = F(46, 49);
    var yu = F(47, 49);
    c();
    m();
    p();
    d();
    f();
    l();
    var Ko = 100;
    var Pn = ["green", "yellow", "blue", "magenta", "cyan", "red"];
    var _t = [];
    var vn = Date.now();
    var Ho = 0;
    var wr = typeof g < "u" ? g.env : {};
    globalThis.DEBUG ??= wr.DEBUG ?? "";
    globalThis.DEBUG_COLORS ??= wr.DEBUG_COLORS ? wr.DEBUG_COLORS === "true" : true;
    var rt = { enable(e) {
      typeof e == "string" && (globalThis.DEBUG = e);
    }, disable() {
      let e = globalThis.DEBUG;
      return globalThis.DEBUG = "", e;
    }, enabled(e) {
      let t = globalThis.DEBUG.split(",").map((i) => i.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), r = t.some((i) => i === "" || i[0] === "-" ? false : e.match(RegExp(i.split("*").join(".*") + "$"))), n = t.some((i) => i === "" || i[0] !== "-" ? false : e.match(RegExp(i.slice(1).split("*").join(".*") + "$")));
      return r && !n;
    }, log: (...e) => {
      let [t, r, ...n] = e;
      (console.warn ?? console.log)(`${t} ${r}`, ...n);
    }, formatters: {} };
    function zo(e) {
      let t = { color: Pn[Ho++ % Pn.length], enabled: rt.enabled(e), namespace: e, log: rt.log, extend: () => {
      } }, r = (...n) => {
        let { enabled: i, namespace: o, color: s, log: a } = t;
        if (n.length !== 0 && _t.push([o, ...n]), _t.length > Ko && _t.shift(), rt.enabled(o) || i) {
          let u = n.map((T) => typeof T == "string" ? T : Yo(T)), y = `+${Date.now() - vn}ms`;
          vn = Date.now(), a(o, ...u, y);
        }
      };
      return new Proxy(r, { get: (n, i) => t[i], set: (n, i, o) => t[i] = o });
    }
    var Er = new Proxy(zo, { get: (e, t) => rt[t], set: (e, t, r) => rt[t] = r });
    function Yo(e, t = 2) {
      let r = /* @__PURE__ */ new Set();
      return JSON.stringify(e, (n, i) => {
        if (typeof i == "object" && i !== null) {
          if (r.has(i))
            return "[Circular *]";
          r.add(i);
        } else if (typeof i == "bigint")
          return i.toString();
        return i;
      }, t);
    }
    function Tn() {
      _t.length = 0;
    }
    var ee = Er;
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    var xr = ["darwin", "darwin-arm64", "debian-openssl-1.0.x", "debian-openssl-1.1.x", "debian-openssl-3.0.x", "rhel-openssl-1.0.x", "rhel-openssl-1.1.x", "rhel-openssl-3.0.x", "linux-arm64-openssl-1.1.x", "linux-arm64-openssl-1.0.x", "linux-arm64-openssl-3.0.x", "linux-arm-openssl-1.1.x", "linux-arm-openssl-1.0.x", "linux-arm-openssl-3.0.x", "linux-musl", "linux-musl-openssl-3.0.x", "linux-musl-arm64-openssl-1.1.x", "linux-musl-arm64-openssl-3.0.x", "linux-nixos", "linux-static-x64", "linux-static-arm64", "windows", "freebsd11", "freebsd12", "freebsd13", "freebsd14", "freebsd15", "openbsd", "netbsd", "arm"];
    c();
    m();
    p();
    d();
    f();
    l();
    var An = "library";
    function it(e) {
      let t = rs();
      return t || (e?.config.engineType === "library" ? "library" : e?.config.engineType === "binary" ? "binary" : An);
    }
    function rs() {
      let e = g.env.PRISMA_CLIENT_ENGINE_TYPE;
      return e === "library" ? "library" : e === "binary" ? "binary" : void 0;
    }
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    var Oe;
    ((t) => {
      let e;
      ((k) => (k.findUnique = "findUnique", k.findUniqueOrThrow = "findUniqueOrThrow", k.findFirst = "findFirst", k.findFirstOrThrow = "findFirstOrThrow", k.findMany = "findMany", k.create = "create", k.createMany = "createMany", k.createManyAndReturn = "createManyAndReturn", k.update = "update", k.updateMany = "updateMany", k.upsert = "upsert", k.delete = "delete", k.deleteMany = "deleteMany", k.groupBy = "groupBy", k.count = "count", k.aggregate = "aggregate", k.findRaw = "findRaw", k.aggregateRaw = "aggregateRaw"))(e = t.ModelAction ||= {});
    })(Oe ||= {});
    var st = {};
    St(st, { error: () => os, info: () => is, log: () => ns, query: () => ss, should: () => Mn, tags: () => ot, warn: () => Pr });
    c();
    m();
    p();
    d();
    f();
    l();
    var ot = { error: Ue("prisma:error"), warn: bn("prisma:warn"), info: En("prisma:info"), query: wn("prisma:query") };
    var Mn = { warn: () => !g.env.PRISMA_DISABLE_WARNINGS };
    function ns(...e) {
      console.log(...e);
    }
    function Pr(e, ...t) {
      Mn.warn() && console.warn(`${ot.warn} ${e}`, ...t);
    }
    function is(e, ...t) {
      console.info(`${ot.info} ${e}`, ...t);
    }
    function os(e, ...t) {
      console.error(`${ot.error} ${e}`, ...t);
    }
    function ss(e, ...t) {
      console.log(`${ot.query} ${e}`, ...t);
    }
    c();
    m();
    p();
    d();
    f();
    l();
    function Ft(e, t) {
      if (!e)
        throw new Error(`${t}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`);
    }
    c();
    m();
    p();
    d();
    f();
    l();
    function he(e, t) {
      throw new Error(t);
    }
    c();
    m();
    p();
    d();
    f();
    l();
    function vr(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    c();
    m();
    p();
    d();
    f();
    l();
    var Tr = (e, t) => e.reduce((r, n) => (r[t(n)] = n, r), {});
    c();
    m();
    p();
    d();
    f();
    l();
    function Be(e, t) {
      let r = {};
      for (let n of Object.keys(e))
        r[n] = t(e[n], n);
      return r;
    }
    c();
    m();
    p();
    d();
    f();
    l();
    function Cr(e, t) {
      if (e.length === 0)
        return;
      let r = e[0];
      for (let n = 1; n < e.length; n++)
        t(r, e[n]) < 0 && (r = e[n]);
      return r;
    }
    c();
    m();
    p();
    d();
    f();
    l();
    function K(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    c();
    m();
    p();
    d();
    f();
    l();
    var Fn = /* @__PURE__ */ new Set();
    var at = (e, t, ...r) => {
      Fn.has(e) || (Fn.add(e), Pr(t, ...r));
    };
    c();
    m();
    p();
    d();
    f();
    l();
    var J = class extends Error {
      constructor(t, { code: r, clientVersion: n, meta: i, batchRequestIdx: o }) {
        super(t), this.name = "PrismaClientKnownRequestError", this.code = r, this.clientVersion = n, this.meta = i, Object.defineProperty(this, "batchRequestIdx", { value: o, enumerable: false, writable: true });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
      }
    };
    K(J, "PrismaClientKnownRequestError");
    var ye = class extends J {
      constructor(t, r) {
        super(t, { code: "P2025", clientVersion: r }), this.name = "NotFoundError";
      }
    };
    K(ye, "NotFoundError");
    c();
    m();
    p();
    d();
    f();
    l();
    var I = class e extends Error {
      constructor(t, r, n) {
        super(t), this.name = "PrismaClientInitializationError", this.clientVersion = r, this.errorCode = n, Error.captureStackTrace(e);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
      }
    };
    K(I, "PrismaClientInitializationError");
    c();
    m();
    p();
    d();
    f();
    l();
    var be = class extends Error {
      constructor(t, r) {
        super(t), this.name = "PrismaClientRustPanicError", this.clientVersion = r;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
      }
    };
    K(be, "PrismaClientRustPanicError");
    c();
    m();
    p();
    d();
    f();
    l();
    var G = class extends Error {
      constructor(t, { clientVersion: r, batchRequestIdx: n }) {
        super(t), this.name = "PrismaClientUnknownRequestError", this.clientVersion = r, Object.defineProperty(this, "batchRequestIdx", { value: n, writable: true, enumerable: false });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
      }
    };
    K(G, "PrismaClientUnknownRequestError");
    c();
    m();
    p();
    d();
    f();
    l();
    var j = class extends Error {
      constructor(r, { clientVersion: n }) {
        super(r);
        this.name = "PrismaClientValidationError";
        this.clientVersion = n;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
      }
    };
    K(j, "PrismaClientValidationError");
    c();
    m();
    p();
    d();
    f();
    l();
    var qe = class {
      constructor(t) {
        this._engine = t;
      }
      prometheus(t) {
        return this._engine.metrics({ format: "prometheus", ...t });
      }
      json(t) {
        return this._engine.metrics({ format: "json", ...t });
      }
    };
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    function lt(e) {
      let t;
      return { get() {
        return t || (t = { value: e() }), t.value;
      } };
    }
    function Un(e, t) {
      let r = lt(() => ls(t));
      Object.defineProperty(e, "dmmf", { get: () => r.get() });
    }
    function ls(e) {
      throw new Error("Prisma.dmmf is not available when running in edge runtimes.");
    }
    c();
    m();
    p();
    d();
    f();
    l();
    var Nt = Symbol();
    var Ar = /* @__PURE__ */ new WeakMap();
    var we = class {
      constructor(t) {
        t === Nt ? Ar.set(this, `Prisma.${this._getName()}`) : Ar.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
      }
      _getName() {
        return this.constructor.name;
      }
      toString() {
        return Ar.get(this);
      }
    };
    var ut = class extends we {
      _getNamespace() {
        return "NullTypes";
      }
    };
    var ct = class extends ut {
    };
    Sr(ct, "DbNull");
    var mt = class extends ut {
    };
    Sr(mt, "JsonNull");
    var pt = class extends ut {
    };
    Sr(pt, "AnyNull");
    var Ut = { classes: { DbNull: ct, JsonNull: mt, AnyNull: pt }, instances: { DbNull: new ct(Nt), JsonNull: new mt(Nt), AnyNull: new pt(Nt) } };
    function Sr(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    c();
    m();
    p();
    d();
    f();
    l();
    var Or = /* @__PURE__ */ new WeakMap();
    var dt = class {
      constructor(t, r) {
        Or.set(this, { sql: t, values: r });
      }
      get sql() {
        return Or.get(this).sql;
      }
      get values() {
        return Or.get(this).values;
      }
    };
    function Bn(e) {
      return (...t) => new dt(e, t);
    }
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    function ft(e) {
      return { ok: false, error: e, map() {
        return ft(e);
      }, flatMap() {
        return ft(e);
      } };
    }
    var kr = class {
      constructor() {
        this.registeredErrors = [];
      }
      consumeError(t) {
        return this.registeredErrors[t];
      }
      registerNewError(t) {
        let r = 0;
        for (; this.registeredErrors[r] !== void 0; )
          r++;
        return this.registeredErrors[r] = { error: t }, r;
      }
    };
    var Mr = (e) => {
      let t = new kr(), r = ke(t, e.startTransaction.bind(e)), n = { adapterName: e.adapterName, errorRegistry: t, queryRaw: ke(t, e.queryRaw.bind(e)), executeRaw: ke(t, e.executeRaw.bind(e)), provider: e.provider, startTransaction: async (...i) => (await r(...i)).map((s) => us(t, s)) };
      return e.getConnectionInfo && (n.getConnectionInfo = cs(t, e.getConnectionInfo.bind(e))), n;
    };
    var us = (e, t) => ({ adapterName: t.adapterName, provider: t.provider, options: t.options, queryRaw: ke(e, t.queryRaw.bind(t)), executeRaw: ke(e, t.executeRaw.bind(t)), commit: ke(e, t.commit.bind(t)), rollback: ke(e, t.rollback.bind(t)) });
    function ke(e, t) {
      return async (...r) => {
        try {
          return await t(...r);
        } catch (n) {
          let i = e.registerNewError(n);
          return ft({ kind: "GenericJs", id: i });
        }
      };
    }
    function cs(e, t) {
      return (...r) => {
        try {
          return t(...r);
        } catch (n) {
          let i = e.registerNewError(n);
          return ft({ kind: "GenericJs", id: i });
        }
      };
    }
    var Po = De(qn());
    var PO = De($n());
    Sn();
    mn();
    Rn();
    c();
    m();
    p();
    d();
    f();
    l();
    var X = class e {
      constructor(t, r) {
        if (t.length - 1 !== r.length)
          throw t.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${t.length} strings to have ${t.length - 1} values`);
        let n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
        this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = t[0];
        let i = 0, o = 0;
        for (; i < r.length; ) {
          let s = r[i++], a = t[i];
          if (s instanceof e) {
            this.strings[o] += s.strings[0];
            let u = 0;
            for (; u < s.values.length; )
              this.values[o++] = s.values[u++], this.strings[o] = s.strings[u];
            this.strings[o] += a;
          } else
            this.values[o++] = s, this.strings[o] = a;
        }
      }
      get sql() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; )
          n += `?${this.strings[r++]}`;
        return n;
      }
      get statement() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; )
          n += `:${r}${this.strings[r++]}`;
        return n;
      }
      get text() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; )
          n += `$${r}${this.strings[r++]}`;
        return n;
      }
      inspect() {
        return { sql: this.sql, statement: this.statement, text: this.text, values: this.values };
      }
    };
    function Vn(e, t = ",", r = "", n = "") {
      if (e.length === 0)
        throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
      return new X([r, ...Array(e.length - 1).fill(t), n], e);
    }
    function Lr(e) {
      return new X([e], []);
    }
    var jn = Lr("");
    function Ir(e, ...t) {
      return new X(e, t);
    }
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    function gt(e) {
      return { getKeys() {
        return Object.keys(e);
      }, getPropertyValue(t) {
        return e[t];
      } };
    }
    c();
    m();
    p();
    d();
    f();
    l();
    function H(e, t) {
      return { getKeys() {
        return [e];
      }, getPropertyValue() {
        return t();
      } };
    }
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    var ce = class {
      constructor() {
        this._map = /* @__PURE__ */ new Map();
      }
      get(t) {
        return this._map.get(t)?.value;
      }
      set(t, r) {
        this._map.set(t, { value: r });
      }
      getOrCreate(t, r) {
        let n = this._map.get(t);
        if (n)
          return n.value;
        let i = r();
        return this.set(t, i), i;
      }
    };
    function Me(e) {
      let t = new ce();
      return { getKeys() {
        return e.getKeys();
      }, getPropertyValue(r) {
        return t.getOrCreate(r, () => e.getPropertyValue(r));
      }, getPropertyDescriptor(r) {
        return e.getPropertyDescriptor?.(r);
      } };
    }
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    var Bt = { enumerable: true, configurable: true, writable: true };
    function qt(e) {
      let t = new Set(e);
      return { getOwnPropertyDescriptor: () => Bt, has: (r, n) => t.has(n), set: (r, n, i) => t.add(n) && Reflect.set(r, n, i), ownKeys: () => [...t] };
    }
    var Qn = Symbol.for("nodejs.util.inspect.custom");
    function me(e, t) {
      let r = ps(t), n = /* @__PURE__ */ new Set(), i = new Proxy(e, { get(o, s) {
        if (n.has(s))
          return o[s];
        let a = r.get(s);
        return a ? a.getPropertyValue(s) : o[s];
      }, has(o, s) {
        if (n.has(s))
          return true;
        let a = r.get(s);
        return a ? a.has?.(s) ?? true : Reflect.has(o, s);
      }, ownKeys(o) {
        let s = Jn(Reflect.ownKeys(o), r), a = Jn(Array.from(r.keys()), r);
        return [.../* @__PURE__ */ new Set([...s, ...a, ...n])];
      }, set(o, s, a) {
        return r.get(s)?.getPropertyDescriptor?.(s)?.writable === false ? false : (n.add(s), Reflect.set(o, s, a));
      }, getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable)
          return a;
        let u = r.get(s);
        return u ? u.getPropertyDescriptor ? { ...Bt, ...u?.getPropertyDescriptor(s) } : Bt : a;
      }, defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      } });
      return i[Qn] = function() {
        let o = { ...this };
        return delete o[Qn], o;
      }, i;
    }
    function ps(e) {
      let t = /* @__PURE__ */ new Map();
      for (let r of e) {
        let n = r.getKeys();
        for (let i of n)
          t.set(i, r);
      }
      return t;
    }
    function Jn(e, t) {
      return e.filter((r) => t.get(r)?.has?.(r) ?? true);
    }
    c();
    m();
    p();
    d();
    f();
    l();
    function $e(e) {
      return { getKeys() {
        return e;
      }, has() {
        return false;
      }, getPropertyValue() {
      } };
    }
    c();
    m();
    p();
    d();
    f();
    l();
    function $t(e, t) {
      return { batch: e, transaction: t?.kind === "batch" ? { isolationLevel: t.options.isolationLevel } : void 0 };
    }
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    var Ve = class {
      constructor(t = 0, r) {
        this.context = r;
        this.lines = [];
        this.currentLine = "";
        this.currentIndent = 0;
        this.currentIndent = t;
      }
      write(t) {
        return typeof t == "string" ? this.currentLine += t : t.write(this), this;
      }
      writeJoined(t, r, n = (i, o) => o.write(i)) {
        let i = r.length - 1;
        for (let o = 0; o < r.length; o++)
          n(r[o], this), o !== i && this.write(t);
        return this;
      }
      writeLine(t) {
        return this.write(t).newLine();
      }
      newLine() {
        this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
        let t = this.afterNextNewLineCallback;
        return this.afterNextNewLineCallback = void 0, t?.(), this;
      }
      withIndent(t) {
        return this.indent(), t(this), this.unindent(), this;
      }
      afterNextNewline(t) {
        return this.afterNextNewLineCallback = t, this;
      }
      indent() {
        return this.currentIndent++, this;
      }
      unindent() {
        return this.currentIndent > 0 && this.currentIndent--, this;
      }
      addMarginSymbol(t) {
        return this.marginSymbol = t, this;
      }
      toString() {
        return this.lines.concat(this.indentedCurrentLine()).join(`
`);
      }
      getCurrentLineLength() {
        return this.currentLine.length;
      }
      indentedCurrentLine() {
        let t = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
        return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
      }
    };
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    function Gn(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    c();
    m();
    p();
    d();
    f();
    l();
    function je(e) {
      return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
    }
    function Vt(e) {
      return e.toString() !== "Invalid Date";
    }
    c();
    m();
    p();
    d();
    f();
    l();
    l();
    function Qe(e) {
      return v.isDecimal(e) ? true : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
    }
    c();
    m();
    p();
    d();
    f();
    l();
    var ht = class {
      constructor(t, r, n, i, o) {
        this.modelName = t, this.name = r, this.typeName = n, this.isList = i, this.isEnum = o;
      }
      _toGraphQLInputType() {
        let t = this.isList ? "List" : "", r = this.isEnum ? "Enum" : "";
        return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
      }
    };
    function Je(e) {
      return e instanceof ht;
    }
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    var jt = class {
      constructor(t) {
        this.value = t;
      }
      write(t) {
        t.write(this.value);
      }
      markAsError() {
        this.value.markAsError();
      }
    };
    c();
    m();
    p();
    d();
    f();
    l();
    var Qt = (e) => e;
    var Jt = { bold: Qt, red: Qt, green: Qt, dim: Qt, enabled: false };
    var Wn = { bold: Lt, red: Ue, green: yn, dim: It, enabled: true };
    var Ge = { write(e) {
      e.writeLine(",");
    } };
    c();
    m();
    p();
    d();
    f();
    l();
    var pe = class {
      constructor(t) {
        this.contents = t;
        this.isUnderlined = false;
        this.color = (t2) => t2;
      }
      underline() {
        return this.isUnderlined = true, this;
      }
      setColor(t) {
        return this.color = t, this;
      }
      write(t) {
        let r = t.getCurrentLineLength();
        t.write(this.color(this.contents)), this.isUnderlined && t.afterNextNewline(() => {
          t.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length)));
        });
      }
    };
    c();
    m();
    p();
    d();
    f();
    l();
    var xe = class {
      constructor() {
        this.hasError = false;
      }
      markAsError() {
        return this.hasError = true, this;
      }
    };
    var We = class extends xe {
      constructor() {
        super(...arguments);
        this.items = [];
      }
      addItem(r) {
        return this.items.push(new jt(r)), this;
      }
      getField(r) {
        return this.items[r];
      }
      getPrintWidth() {
        return this.items.length === 0 ? 2 : Math.max(...this.items.map((n) => n.value.getPrintWidth())) + 2;
      }
      write(r) {
        if (this.items.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithItems(r);
      }
      writeEmpty(r) {
        let n = new pe("[]");
        this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
      }
      writeWithItems(r) {
        let { colors: n } = r.context;
        r.writeLine("[").withIndent(() => r.writeJoined(Ge, this.items).newLine()).write("]"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(n.red("~".repeat(this.getPrintWidth())));
        });
      }
      asObject() {
      }
    };
    c();
    m();
    p();
    d();
    f();
    l();
    var Kn = ": ";
    var Gt = class {
      constructor(t, r) {
        this.name = t;
        this.value = r;
        this.hasError = false;
      }
      markAsError() {
        this.hasError = true;
      }
      getPrintWidth() {
        return this.name.length + this.value.getPrintWidth() + Kn.length;
      }
      write(t) {
        let r = new pe(this.name);
        this.hasError && r.underline().setColor(t.context.colors.red), t.write(r).write(Kn).write(this.value);
      }
    };
    c();
    m();
    p();
    d();
    f();
    l();
    var Ke = class e extends xe {
      constructor() {
        super(...arguments);
        this.fields = {};
        this.suggestions = [];
      }
      addField(r) {
        this.fields[r.name] = r;
      }
      addSuggestion(r) {
        this.suggestions.push(r);
      }
      getField(r) {
        return this.fields[r];
      }
      getDeepField(r) {
        let [n, ...i] = r, o = this.getField(n);
        if (!o)
          return;
        let s = o;
        for (let a of i) {
          let u;
          if (s.value instanceof e ? u = s.value.getField(a) : s.value instanceof We && (u = s.value.getField(Number(a))), !u)
            return;
          s = u;
        }
        return s;
      }
      getDeepFieldValue(r) {
        return r.length === 0 ? this : this.getDeepField(r)?.value;
      }
      hasField(r) {
        return !!this.getField(r);
      }
      removeAllFields() {
        this.fields = {};
      }
      removeField(r) {
        delete this.fields[r];
      }
      getFields() {
        return this.fields;
      }
      isEmpty() {
        return Object.keys(this.fields).length === 0;
      }
      getFieldValue(r) {
        return this.getField(r)?.value;
      }
      getDeepSubSelectionValue(r) {
        let n = this;
        for (let i of r) {
          if (!(n instanceof e))
            return;
          let o = n.getSubSelectionValue(i);
          if (!o)
            return;
          n = o;
        }
        return n;
      }
      getDeepSelectionParent(r) {
        let n = this.getSelectionParent();
        if (!n)
          return;
        let i = n;
        for (let o of r) {
          let s = i.value.getFieldValue(o);
          if (!s || !(s instanceof e))
            return;
          let a = s.getSelectionParent();
          if (!a)
            return;
          i = a;
        }
        return i;
      }
      getSelectionParent() {
        let r = this.getField("select")?.value.asObject();
        if (r)
          return { kind: "select", value: r };
        let n = this.getField("include")?.value.asObject();
        if (n)
          return { kind: "include", value: n };
      }
      getSubSelectionValue(r) {
        return this.getSelectionParent()?.value.fields[r].value;
      }
      getPrintWidth() {
        let r = Object.values(this.fields);
        return r.length == 0 ? 2 : Math.max(...r.map((i) => i.getPrintWidth())) + 2;
      }
      write(r) {
        let n = Object.values(this.fields);
        if (n.length === 0 && this.suggestions.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithContents(r, n);
      }
      asObject() {
        return this;
      }
      writeEmpty(r) {
        let n = new pe("{}");
        this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
      }
      writeWithContents(r, n) {
        r.writeLine("{").withIndent(() => {
          r.writeJoined(Ge, [...n, ...this.suggestions]).newLine();
        }), r.write("}"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
        });
      }
    };
    c();
    m();
    p();
    d();
    f();
    l();
    var W = class extends xe {
      constructor(r) {
        super();
        this.text = r;
      }
      getPrintWidth() {
        return this.text.length;
      }
      write(r) {
        let n = new pe(this.text);
        this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
      }
      asObject() {
      }
    };
    var _r = class {
      constructor(t) {
        this.errorMessages = [];
        this.arguments = t;
      }
      write(t) {
        t.write(this.arguments);
      }
      addErrorMessage(t) {
        this.errorMessages.push(t);
      }
      renderAllMessages(t) {
        return this.errorMessages.map((r) => r(t)).join(`
`);
      }
    };
    function He(e) {
      return new _r(Hn(e));
    }
    function Hn(e) {
      let t = new Ke();
      for (let [r, n] of Object.entries(e)) {
        let i = new Gt(r, zn(n));
        t.addField(i);
      }
      return t;
    }
    function zn(e) {
      if (typeof e == "string")
        return new W(JSON.stringify(e));
      if (typeof e == "number" || typeof e == "boolean")
        return new W(String(e));
      if (typeof e == "bigint")
        return new W(`${e}n`);
      if (e === null)
        return new W("null");
      if (e === void 0)
        return new W("undefined");
      if (Qe(e))
        return new W(`new Prisma.Decimal("${e.toFixed()}")`);
      if (e instanceof Uint8Array)
        return b.isBuffer(e) ? new W(`Buffer.alloc(${e.byteLength})`) : new W(`new Uint8Array(${e.byteLength})`);
      if (e instanceof Date) {
        let t = Vt(e) ? e.toISOString() : "Invalid Date";
        return new W(`new Date("${t}")`);
      }
      return e instanceof we ? new W(`Prisma.${e._getName()}`) : Je(e) ? new W(`prisma.${Gn(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? fs(e) : typeof e == "object" ? Hn(e) : new W(Object.prototype.toString.call(e));
    }
    function fs(e) {
      let t = new We();
      for (let r of e)
        t.addItem(zn(r));
      return t;
    }
    function Wt(e, t) {
      let r = t === "pretty" ? Wn : Jt, n = e.renderAllMessages(r), i = new Ve(0, { colors: r }).write(e).toString();
      return { message: n, args: i };
    }
    function Yn(e) {
      if (e === void 0)
        return "";
      let t = He(e);
      return new Ve(0, { colors: Jt }).write(t).toString();
    }
    c();
    m();
    p();
    d();
    f();
    l();
    var gs = "P2037";
    function Kt({ error: e, user_facing_error: t }, r, n) {
      return t.error_code ? new J(hs(t, n), { code: t.error_code, clientVersion: r, meta: t.meta, batchRequestIdx: t.batch_request_idx }) : new G(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
    }
    function hs(e, t) {
      let r = e.message;
      return (t === "postgresql" || t === "postgres" || t === "mysql") && e.error_code === gs && (r += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`), r;
    }
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    var Dr = class {
      getLocation() {
        return null;
      }
    };
    function Pe(e) {
      return typeof $EnabledCallSite == "function" && e !== "minimal" ? new $EnabledCallSite() : new Dr();
    }
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    var Xn = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
    function ze(e = {}) {
      let t = bs(e);
      return Object.entries(t).reduce((n, [i, o]) => (Xn[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
    }
    function bs(e = {}) {
      return typeof e._count == "boolean" ? { ...e, _count: { _all: e._count } } : e;
    }
    function Ht(e = {}) {
      return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
    }
    function Zn(e, t) {
      let r = Ht(e);
      return t({ action: "aggregate", unpacker: r, argsMapper: ze })(e);
    }
    c();
    m();
    p();
    d();
    f();
    l();
    function ws(e = {}) {
      let { select: t, ...r } = e;
      return typeof t == "object" ? ze({ ...r, _count: t }) : ze({ ...r, _count: { _all: true } });
    }
    function Es(e = {}) {
      return typeof e.select == "object" ? (t) => Ht(e)(t)._count : (t) => Ht(e)(t)._count._all;
    }
    function ei(e, t) {
      return t({ action: "count", unpacker: Es(e), argsMapper: ws })(e);
    }
    c();
    m();
    p();
    d();
    f();
    l();
    function xs(e = {}) {
      let t = ze(e);
      if (Array.isArray(t.by))
        for (let r of t.by)
          typeof r == "string" && (t.select[r] = true);
      else
        typeof t.by == "string" && (t.select[t.by] = true);
      return t;
    }
    function Ps(e = {}) {
      return (t) => (typeof e?._count == "boolean" && t.forEach((r) => {
        r._count = r._count._all;
      }), t);
    }
    function ti(e, t) {
      return t({ action: "groupBy", unpacker: Ps(e), argsMapper: xs })(e);
    }
    function ri(e, t, r) {
      if (t === "aggregate")
        return (n) => Zn(n, r);
      if (t === "count")
        return (n) => ei(n, r);
      if (t === "groupBy")
        return (n) => ti(n, r);
    }
    c();
    m();
    p();
    d();
    f();
    l();
    function ni(e, t) {
      let r = t.fields.filter((i) => !i.relationName), n = Tr(r, (i) => i.name);
      return new Proxy({}, { get(i, o) {
        if (o in i || typeof o == "symbol")
          return i[o];
        let s = n[o];
        if (s)
          return new ht(e, o, s.type, s.isList, s.kind === "enum");
      }, ...qt(Object.keys(n)) });
    }
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    var ii = (e) => Array.isArray(e) ? e : e.split(".");
    var Fr = (e, t) => ii(t).reduce((r, n) => r && r[n], e);
    var oi = (e, t, r) => ii(t).reduceRight((n, i, o, s) => Object.assign({}, Fr(e, s.slice(0, o)), { [i]: n }), r);
    function vs(e, t) {
      return e === void 0 || t === void 0 ? [] : [...t, "select", e];
    }
    function Ts(e, t, r) {
      return t === void 0 ? e ?? {} : oi(t, r, e || true);
    }
    function Nr(e, t, r, n, i, o) {
      let a = e._runtimeDataModel.models[t].fields.reduce((u, y) => ({ ...u, [y.name]: y }), {});
      return (u) => {
        let y = Pe(e._errorFormat), T = vs(n, i), C = Ts(u, o, T), O = r({ dataPath: T, callsite: y })(C), A = Cs(e, t);
        return new Proxy(O, { get(M, S) {
          if (!A.includes(S))
            return M[S];
          let ne = [a[S].type, r, S], z = [T, C];
          return Nr(e, ...ne, ...z);
        }, ...qt([...A, ...Object.getOwnPropertyNames(O)]) });
      };
    }
    function Cs(e, t) {
      return e._runtimeDataModel.models[t].fields.filter((r) => r.kind === "object").map((r) => r.name);
    }
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    var Rs = De(kn());
    var As = { red: Ue, gray: xn, dim: It, bold: Lt, underline: hn, highlightSource: (e) => e.highlight() };
    var Ss = { red: (e) => e, gray: (e) => e, dim: (e) => e, bold: (e) => e, underline: (e) => e, highlightSource: (e) => e };
    function Os({ message: e, originalMethod: t, isPanic: r, callArguments: n }) {
      return { functionName: `prisma.${t}()`, message: e, isPanic: r ?? false, callArguments: n };
    }
    function ks({ functionName: e, location: t, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
      let a = [""], u = t ? " in" : ":";
      if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${u}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${u}`)), t && a.push(s.underline(Ms(t))), i) {
        a.push("");
        let y = [i.toString()];
        o && (y.push(o), y.push(s.dim(")"))), a.push(y.join("")), o && a.push("");
      } else
        a.push(""), o && a.push(o), a.push("");
      return a.push(r), a.join(`
`);
    }
    function Ms(e) {
      let t = [e.fileName];
      return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(":");
    }
    function Ye(e) {
      let t = e.showColors ? As : Ss, r;
      return typeof $getTemplateParameters < "u" ? r = $getTemplateParameters(e, t) : r = Os(e), ks(r, t);
    }
    function si(e, t, r, n) {
      return e === Oe.ModelAction.findFirstOrThrow || e === Oe.ModelAction.findUniqueOrThrow ? Ls(t, r, n) : n;
    }
    function Ls(e, t, r) {
      return async (n) => {
        if ("rejectOnNotFound" in n.args) {
          let o = Ye({ originalMethod: n.clientMethod, callsite: n.callsite, message: "'rejectOnNotFound' option is not supported" });
          throw new j(o, { clientVersion: t });
        }
        return await r(n).catch((o) => {
          throw o instanceof J && o.code === "P2025" ? new ye(`No ${e} found`, t) : o;
        });
      };
    }
    c();
    m();
    p();
    d();
    f();
    l();
    function de(e) {
      return e.replace(/^./, (t) => t.toLowerCase());
    }
    var Is = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
    var _s = ["aggregate", "count", "groupBy"];
    function Ur(e, t) {
      let r = e._extensions.getAllModelExtensions(t) ?? {}, n = [Ds(e, t), Ns(e, t), gt(r), H("name", () => t), H("$name", () => t), H("$parent", () => e._appliedParent)];
      return me({}, n);
    }
    function Ds(e, t) {
      let r = de(t), n = Object.keys(Oe.ModelAction).concat("count");
      return { getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = i, s = (u) => e._request(u);
        s = si(o, t, e._clientVersion, s);
        let a = (u) => (y) => {
          let T = Pe(e._errorFormat);
          return e._createPrismaPromise((C) => {
            let O = { args: y, dataPath: [], action: o, model: t, clientMethod: `${r}.${i}`, jsModelName: r, transaction: C, callsite: T };
            return s({ ...O, ...u });
          });
        };
        return Is.includes(o) ? Nr(e, t, a) : Fs(i) ? ri(e, i, a) : a({});
      } };
    }
    function Fs(e) {
      return _s.includes(e);
    }
    function Ns(e, t) {
      return Me(H("fields", () => {
        let r = e._runtimeDataModel.models[t];
        return ni(t, r);
      }));
    }
    c();
    m();
    p();
    d();
    f();
    l();
    function ai(e) {
      return e.replace(/^./, (t) => t.toUpperCase());
    }
    var Br = Symbol();
    function yt(e) {
      let t = [Us(e), H(Br, () => e), H("$parent", () => e._appliedParent)], r = e._extensions.getAllClientExtensions();
      return r && t.push(gt(r)), me(e, t);
    }
    function Us(e) {
      let t = Object.keys(e._runtimeDataModel.models), r = t.map(de), n = [...new Set(t.concat(r))];
      return Me({ getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = ai(i);
        if (e._runtimeDataModel.models[o] !== void 0)
          return Ur(e, o);
        if (e._runtimeDataModel.models[i] !== void 0)
          return Ur(e, i);
      }, getPropertyDescriptor(i) {
        if (!r.includes(i))
          return { enumerable: false };
      } });
    }
    function li(e) {
      return e[Br] ? e[Br] : e;
    }
    function ui(e) {
      if (typeof e == "function")
        return e(this);
      if (e.client?.__AccelerateEngine) {
        let r = e.client.__AccelerateEngine;
        this._originalClient._engine = new r(this._originalClient._accelerateEngineConfig);
      }
      let t = Object.create(this._originalClient, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: true }, $use: { value: void 0 }, $on: { value: void 0 } });
      return yt(t);
    }
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    function ci({ result: e, modelName: t, select: r, omit: n, extensions: i }) {
      let o = i.getAllComputedFields(t);
      if (!o)
        return e;
      let s = [], a = [];
      for (let u of Object.values(o)) {
        if (n) {
          if (n[u.name])
            continue;
          let y = u.needs.filter((T) => n[T]);
          y.length > 0 && a.push($e(y));
        } else if (r) {
          if (!r[u.name])
            continue;
          let y = u.needs.filter((T) => !r[T]);
          y.length > 0 && a.push($e(y));
        }
        Bs(e, u.needs) && s.push(qs(u, me(e, s)));
      }
      return s.length > 0 || a.length > 0 ? me(e, [...s, ...a]) : e;
    }
    function Bs(e, t) {
      return t.every((r) => vr(e, r));
    }
    function qs(e, t) {
      return Me(H(e.name, () => e.compute(t)));
    }
    c();
    m();
    p();
    d();
    f();
    l();
    function zt({ visitor: e, result: t, args: r, runtimeDataModel: n, modelName: i }) {
      if (Array.isArray(t)) {
        for (let s = 0; s < t.length; s++)
          t[s] = zt({ result: t[s], args: r, modelName: i, runtimeDataModel: n, visitor: e });
        return t;
      }
      let o = e(t, i, r) ?? t;
      return r.include && mi({ includeOrSelect: r.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), r.select && mi({ includeOrSelect: r.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), o;
    }
    function mi({ includeOrSelect: e, result: t, parentModelName: r, runtimeDataModel: n, visitor: i }) {
      for (let [o, s] of Object.entries(e)) {
        if (!s || t[o] == null)
          continue;
        let u = n.models[r].fields.find((T) => T.name === o);
        if (!u || u.kind !== "object" || !u.relationName)
          continue;
        let y = typeof s == "object" ? s : {};
        t[o] = zt({ visitor: i, result: t[o], args: y, modelName: u.type, runtimeDataModel: n });
      }
    }
    function pi({ result: e, modelName: t, args: r, extensions: n, runtimeDataModel: i, globalOmit: o }) {
      return n.isEmpty() || e == null || typeof e != "object" || !i.models[t] ? e : zt({ result: e, args: r ?? {}, modelName: t, runtimeDataModel: i, visitor: (a, u, y) => {
        let T = de(u);
        return ci({ result: a, modelName: T, select: y.select, omit: y.select ? void 0 : { ...o?.[T], ...y.omit }, extensions: n });
      } });
    }
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    l();
    function di(e) {
      if (e instanceof X)
        return $s(e);
      if (Array.isArray(e)) {
        let r = [e[0]];
        for (let n = 1; n < e.length; n++)
          r[n] = bt(e[n]);
        return r;
      }
      let t = {};
      for (let r in e)
        t[r] = bt(e[r]);
      return t;
    }
    function $s(e) {
      return new X(e.strings, e.values);
    }
    function bt(e) {
      if (typeof e != "object" || e == null || e instanceof we || Je(e))
        return e;
      if (Qe(e))
        return new ue(e.toFixed());
      if (je(e))
        return /* @__PURE__ */ new Date(+e);
      if (ArrayBuffer.isView(e))
        return e.slice(0);
      if (Array.isArray(e)) {
        let t = e.length, r;
        for (r = Array(t); t--; )
          r[t] = bt(e[t]);
        return r;
      }
      if (typeof e == "object") {
        let t = {};
        for (let r in e)
          r === "__proto__" ? Object.defineProperty(t, r, { value: bt(e[r]), configurable: true, enumerable: true, writable: true }) : t[r] = bt(e[r]);
        return t;
      }
      he(e, "Unknown value");
    }
    function gi(e, t, r, n = 0) {
      return e._createPrismaPromise((i) => {
        let o = t.customDataProxyFetch;
        return "transaction" in t && i !== void 0 && (t.transaction?.kind === "batch" && t.transaction.lock.then(), t.transaction = i), n === r.length ? e._executeRequest(t) : r[n]({ model: t.model, operation: t.model ? t.action : t.clientMethod, args: di(t.args ?? {}), __internalParams: t, query: (s, a = t) => {
          let u = a.customDataProxyFetch;
          return a.customDataProxyFetch = wi(o, u), a.args = s, gi(e, a, r, n + 1);
        } });
      });
    }
    function hi(e, t) {
      let { jsModelName: r, action: n, clientMethod: i } = t, o = r ? n : i;
      if (e._extensions.isEmpty())
        return e._executeRequest(t);
      let s = e._extensions.getAllQueryCallbacks(r ?? "$none", o);
      return gi(e, t, s);
    }
    function yi(e) {
      return (t) => {
        let r = { requests: t }, n = t[0].extensions.getAllBatchQueryCallbacks();
        return n.length ? bi(r, n, 0, e) : e(r);
      };
    }
    function bi(e, t, r, n) {
      if (r === t.length)
        return n(e);
      let i = e.customDataProxyFetch, o = e.requests[0].transaction;
      return t[r]({ args: { queries: e.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 } : void 0 }, __internalParams: e, query(s, a = e) {
        let u = a.customDataProxyFetch;
        return a.customDataProxyFetch = wi(i, u), bi(a, t, r + 1, n);
      } });
    }
    var fi = (e) => e;
    function wi(e = fi, t = fi) {
      return (r) => e(t(r));
    }
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    function xi(e, t, r) {
      let n = de(r);
      return !t.result || !(t.result.$allModels || t.result[n]) ? e : Vs({ ...e, ...Ei(t.name, e, t.result.$allModels), ...Ei(t.name, e, t.result[n]) });
    }
    function Vs(e) {
      let t = new ce(), r = (n, i) => t.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n]));
      return Be(e, (n) => ({ ...n, needs: r(n.name, /* @__PURE__ */ new Set()) }));
    }
    function Ei(e, t, r) {
      return r ? Be(r, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: js(t, o, i) })) : {};
    }
    function js(e, t, r) {
      let n = e?.[t]?.compute;
      return n ? (i) => r({ ...i, [t]: n(i) }) : r;
    }
    function Pi(e, t) {
      if (!t)
        return e;
      let r = { ...e };
      for (let n of Object.values(t))
        if (e[n.name])
          for (let i of n.needs)
            r[i] = true;
      return r;
    }
    function vi(e, t) {
      if (!t)
        return e;
      let r = { ...e };
      for (let n of Object.values(t))
        if (!e[n.name])
          for (let i of n.needs)
            delete r[i];
      return r;
    }
    var Yt = class {
      constructor(t, r) {
        this.extension = t;
        this.previous = r;
        this.computedFieldsCache = new ce();
        this.modelExtensionsCache = new ce();
        this.queryCallbacksCache = new ce();
        this.clientExtensions = lt(() => this.extension.client ? { ...this.previous?.getAllClientExtensions(), ...this.extension.client } : this.previous?.getAllClientExtensions());
        this.batchCallbacks = lt(() => {
          let t2 = this.previous?.getAllBatchQueryCallbacks() ?? [], r2 = this.extension.query?.$__internalBatch;
          return r2 ? t2.concat(r2) : t2;
        });
      }
      getAllComputedFields(t) {
        return this.computedFieldsCache.getOrCreate(t, () => xi(this.previous?.getAllComputedFields(t), this.extension, t));
      }
      getAllClientExtensions() {
        return this.clientExtensions.get();
      }
      getAllModelExtensions(t) {
        return this.modelExtensionsCache.getOrCreate(t, () => {
          let r = de(t);
          return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? this.previous?.getAllModelExtensions(t) : { ...this.previous?.getAllModelExtensions(t), ...this.extension.model.$allModels, ...this.extension.model[r] };
        });
      }
      getAllQueryCallbacks(t, r) {
        return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
          let n = this.previous?.getAllQueryCallbacks(t, r) ?? [], i = [], o = this.extension.query;
          return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations) ? n : (o[t] !== void 0 && (o[t][r] !== void 0 && i.push(o[t][r]), o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)), t !== "$none" && o.$allModels !== void 0 && (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[r] !== void 0 && i.push(o[r]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i));
        });
      }
      getAllBatchQueryCallbacks() {
        return this.batchCallbacks.get();
      }
    };
    var Xt = class e {
      constructor(t) {
        this.head = t;
      }
      static empty() {
        return new e();
      }
      static single(t) {
        return new e(new Yt(t));
      }
      isEmpty() {
        return this.head === void 0;
      }
      append(t) {
        return new e(new Yt(t, this.head));
      }
      getAllComputedFields(t) {
        return this.head?.getAllComputedFields(t);
      }
      getAllClientExtensions() {
        return this.head?.getAllClientExtensions();
      }
      getAllModelExtensions(t) {
        return this.head?.getAllModelExtensions(t);
      }
      getAllQueryCallbacks(t, r) {
        return this.head?.getAllQueryCallbacks(t, r) ?? [];
      }
      getAllBatchQueryCallbacks() {
        return this.head?.getAllBatchQueryCallbacks() ?? [];
      }
    };
    c();
    m();
    p();
    d();
    f();
    l();
    var Ti = ee("prisma:client");
    var Ci = { Vercel: "vercel", "Netlify CI": "netlify" };
    function Ri({ postinstall: e, ciName: t, clientVersion: r }) {
      if (Ti("checkPlatformCaching:postinstall", e), Ti("checkPlatformCaching:ciName", t), e === true && t && t in Ci) {
        let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${Ci[t]}-build`;
        throw console.error(n), new I(n, r);
      }
    }
    c();
    m();
    p();
    d();
    f();
    l();
    function Ai(e, t) {
      return e ? e.datasources ? e.datasources : e.datasourceUrl ? { [t[0]]: { url: e.datasourceUrl } } : {} : {};
    }
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    var Qs = "Cloudflare-Workers";
    var Js = "node";
    function Si() {
      return typeof Netlify == "object" ? "netlify" : typeof EdgeRuntime == "string" ? "edge-light" : globalThis.navigator?.userAgent === Qs ? "workerd" : globalThis.Deno ? "deno" : globalThis.__lagon__ ? "lagon" : globalThis.process?.release?.name === Js ? "node" : globalThis.Bun ? "bun" : globalThis.fastly ? "fastly" : "unknown";
    }
    var Gs = { node: "Node.js", workerd: "Cloudflare Workers", deno: "Deno and Deno Deploy", netlify: "Netlify Edge Functions", "edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)" };
    function ve() {
      let e = Si();
      return { id: e, prettyName: Gs[e] || e, isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e) };
    }
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    function Zt({ inlineDatasources: e, overrideDatasources: t, env: r, clientVersion: n }) {
      let i, o = Object.keys(e)[0], s = e[o]?.url, a = t[o]?.url;
      if (o === void 0 ? i = void 0 : a ? i = a : s?.value ? i = s.value : s?.fromEnvVar && (i = r[s.fromEnvVar]), s?.fromEnvVar !== void 0 && i === void 0)
        throw ve().id === "workerd" ? new I(`error: Environment variable not found: ${s.fromEnvVar}.

In Cloudflare module Workers, environment variables are available only in the Worker's \`env\` parameter of \`fetch\`.
To solve this, provide the connection string directly: https://pris.ly/d/cloudflare-datasource-url`, n) : new I(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
      if (i === void 0)
        throw new I("error: Missing URL environment variable, value, or override.", n);
      return i;
    }
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    function Oi(e) {
      if (e?.kind === "itx")
        return e.options.id;
    }
    c();
    m();
    p();
    d();
    f();
    l();
    var qr;
    var ki = { async loadLibrary(e) {
      let { clientVersion: t, adapter: r, engineWasm: n } = e;
      if (r === void 0)
        throw new I(`The \`adapter\` option for \`PrismaClient\` is required in this context (${ve().prettyName})`, t);
      if (n === void 0)
        throw new I("WASM engine was unexpectedly `undefined`", t);
      qr === void 0 && (qr = (async () => {
        let o = n.getRuntime(), s = await n.getQueryEngineWasmModule();
        if (s == null)
          throw new I("The loaded wasm module was unexpectedly `undefined` or `null` once loaded", t);
        let a = { "./query_engine_bg.js": o }, u = new WebAssembly.Instance(s, a);
        return o.__wbg_set_wasm(u.exports), o.QueryEngine;
      })());
      let i = await qr;
      return { debugPanic() {
        return Promise.reject("{}");
      }, dmmf() {
        return Promise.resolve("{}");
      }, version() {
        return { commit: "unknown", version: "unknown" };
      }, QueryEngine: i };
    } };
    var Ws = "P2036";
    var fe = ee("prisma:client:libraryEngine");
    function Ks(e) {
      return e.item_type === "query" && "query" in e;
    }
    function Hs(e) {
      return "level" in e ? e.level === "error" && e.message === "PANIC" : false;
    }
    var kT = [...xr, "native"];
    var wt = class {
      constructor(t, r) {
        this.name = "LibraryEngine";
        this.libraryLoader = r ?? ki, this.config = t, this.libraryStarted = false, this.logQueries = t.logQueries ?? false, this.logLevel = t.logLevel ?? "error", this.logEmitter = t.logEmitter, this.datamodel = t.inlineSchema, t.enableDebugLogs && (this.logLevel = "debug");
        let n = Object.keys(t.overrideDatasources)[0], i = t.overrideDatasources[n]?.url;
        n !== void 0 && i !== void 0 && (this.datasourceOverrides = { [n]: i }), this.libraryInstantiationPromise = this.instantiateLibrary();
      }
      async applyPendingMigrations() {
        throw new Error("Cannot call this method from this type of engine instance");
      }
      async transaction(t, r, n) {
        await this.start();
        let i = JSON.stringify(r), o;
        if (t === "start") {
          let a = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel });
          o = await this.engine?.startTransaction(a, i);
        } else
          t === "commit" ? o = await this.engine?.commitTransaction(n.id, i) : t === "rollback" && (o = await this.engine?.rollbackTransaction(n.id, i));
        let s = this.parseEngineResponse(o);
        if (zs(s)) {
          let a = this.getExternalAdapterError(s);
          throw a ? a.error : new J(s.message, { code: s.error_code, clientVersion: this.config.clientVersion, meta: s.meta });
        }
        return s;
      }
      async instantiateLibrary() {
        if (fe("internalSetup"), this.libraryInstantiationPromise)
          return this.libraryInstantiationPromise;
        this.binaryTarget = await this.getCurrentBinaryTarget(), await this.loadEngine(), this.version();
      }
      async getCurrentBinaryTarget() {
      }
      parseEngineResponse(t) {
        if (!t)
          throw new G("Response from the Engine was empty", { clientVersion: this.config.clientVersion });
        try {
          return JSON.parse(t);
        } catch {
          throw new G("Unable to JSON.parse response from engine", { clientVersion: this.config.clientVersion });
        }
      }
      async loadEngine() {
        if (!this.engine) {
          this.QueryEngineConstructor || (this.library = await this.libraryLoader.loadLibrary(this.config), this.QueryEngineConstructor = this.library.QueryEngine);
          try {
            let t = new w(this), { adapter: r } = this.config;
            r && fe("Using driver adapter: %O", r), this.engine = new this.QueryEngineConstructor({ datamodel: this.datamodel, env: g.env, logQueries: this.config.logQueries ?? false, ignoreEnvVarErrors: true, datasourceOverrides: this.datasourceOverrides ?? {}, logLevel: this.logLevel, configDir: this.config.cwd, engineProtocol: "json" }, (n) => {
              t.deref()?.logger(n);
            }, r);
          } catch (t) {
            let r = t, n = this.parseInitError(r.message);
            throw typeof n == "string" ? r : new I(n.message, this.config.clientVersion, n.error_code);
          }
        }
      }
      logger(t) {
        let r = this.parseEngineResponse(t);
        if (r) {
          if ("span" in r) {
            this.config.tracingHelper.createEngineSpan(r);
            return;
          }
          r.level = r?.level.toLowerCase() ?? "unknown", Ks(r) ? this.logEmitter.emit("query", { timestamp: /* @__PURE__ */ new Date(), query: r.query, params: r.params, duration: Number(r.duration_ms), target: r.module_path }) : (Hs(r), this.logEmitter.emit(r.level, { timestamp: /* @__PURE__ */ new Date(), message: r.message, target: r.module_path }));
        }
      }
      parseInitError(t) {
        try {
          return JSON.parse(t);
        } catch {
        }
        return t;
      }
      parseRequestError(t) {
        try {
          return JSON.parse(t);
        } catch {
        }
        return t;
      }
      onBeforeExit() {
        throw new Error('"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.');
      }
      async start() {
        if (await this.libraryInstantiationPromise, await this.libraryStoppingPromise, this.libraryStartingPromise)
          return fe(`library already starting, this.libraryStarted: ${this.libraryStarted}`), this.libraryStartingPromise;
        if (this.libraryStarted)
          return;
        let t = async () => {
          fe("library starting");
          try {
            let r = { traceparent: this.config.tracingHelper.getTraceParent() };
            await this.engine?.connect(JSON.stringify(r)), this.libraryStarted = true, fe("library started");
          } catch (r) {
            let n = this.parseInitError(r.message);
            throw typeof n == "string" ? r : new I(n.message, this.config.clientVersion, n.error_code);
          } finally {
            this.libraryStartingPromise = void 0;
          }
        };
        return this.libraryStartingPromise = this.config.tracingHelper.runInChildSpan("connect", t), this.libraryStartingPromise;
      }
      async stop() {
        if (await this.libraryStartingPromise, await this.executingQueryPromise, this.libraryStoppingPromise)
          return fe("library is already stopping"), this.libraryStoppingPromise;
        if (!this.libraryStarted)
          return;
        let t = async () => {
          await new Promise((n) => setTimeout(n, 5)), fe("library stopping");
          let r = { traceparent: this.config.tracingHelper.getTraceParent() };
          await this.engine?.disconnect(JSON.stringify(r)), this.libraryStarted = false, this.libraryStoppingPromise = void 0, fe("library stopped");
        };
        return this.libraryStoppingPromise = this.config.tracingHelper.runInChildSpan("disconnect", t), this.libraryStoppingPromise;
      }
      version() {
        return this.versionInfo = this.library?.version(), this.versionInfo?.version ?? "unknown";
      }
      debugPanic(t) {
        return this.library?.debugPanic(t);
      }
      async request(t, { traceparent: r, interactiveTransaction: n }) {
        fe(`sending request, this.libraryStarted: ${this.libraryStarted}`);
        let i = JSON.stringify({ traceparent: r }), o = JSON.stringify(t);
        try {
          await this.start(), this.executingQueryPromise = this.engine?.query(o, i, n?.id), this.lastQuery = o;
          let s = this.parseEngineResponse(await this.executingQueryPromise);
          if (s.errors)
            throw s.errors.length === 1 ? this.buildQueryError(s.errors[0]) : new G(JSON.stringify(s.errors), { clientVersion: this.config.clientVersion });
          if (this.loggerRustPanic)
            throw this.loggerRustPanic;
          return { data: s, elapsed: 0 };
        } catch (s) {
          if (s instanceof I)
            throw s;
          s.code === "GenericFailure" && s.message?.startsWith("PANIC:");
          let a = this.parseRequestError(s.message);
          throw typeof a == "string" ? s : new G(`${a.message}
${a.backtrace}`, { clientVersion: this.config.clientVersion });
        }
      }
      async requestBatch(t, { transaction: r, traceparent: n }) {
        fe("requestBatch");
        let i = $t(t, r);
        await this.start(), this.lastQuery = JSON.stringify(i), this.executingQueryPromise = this.engine.query(this.lastQuery, JSON.stringify({ traceparent: n }), Oi(r));
        let o = await this.executingQueryPromise, s = this.parseEngineResponse(o);
        if (s.errors)
          throw s.errors.length === 1 ? this.buildQueryError(s.errors[0]) : new G(JSON.stringify(s.errors), { clientVersion: this.config.clientVersion });
        let { batchResult: a, errors: u } = s;
        if (Array.isArray(a))
          return a.map((y) => y.errors && y.errors.length > 0 ? this.loggerRustPanic ?? this.buildQueryError(y.errors[0]) : { data: y, elapsed: 0 });
        throw u && u.length === 1 ? new Error(u[0].error) : new Error(JSON.stringify(s));
      }
      buildQueryError(t) {
        t.user_facing_error.is_panic;
        let r = this.getExternalAdapterError(t.user_facing_error);
        return r ? r.error : Kt(t, this.config.clientVersion, this.config.activeProvider);
      }
      getExternalAdapterError(t) {
        if (t.error_code === Ws && this.config.adapter) {
          let r = t.meta?.id;
          Ft(typeof r == "number", "Malformed external JS error received from the engine");
          let n = this.config.adapter.errorRegistry.consumeError(r);
          return Ft(n, "External error with reported id was not registered"), n;
        }
      }
      async metrics(t) {
        await this.start();
        let r = await this.engine.metrics(JSON.stringify(t));
        return t.format === "prometheus" ? r : this.parseEngineResponse(r);
      }
    };
    function zs(e) {
      return typeof e == "object" && e !== null && e.error_code !== void 0;
    }
    c();
    m();
    p();
    d();
    f();
    l();
    var Et = "Accelerate has not been setup correctly. Make sure your client is using `.$extends(withAccelerate())`. See https://pris.ly/d/accelerate-getting-started";
    var er = class {
      constructor(t) {
        this.config = t;
        this.name = "AccelerateEngine";
        this.resolveDatasourceUrl = this.config.accelerateUtils?.resolveDatasourceUrl;
        this.getBatchRequestPayload = this.config.accelerateUtils?.getBatchRequestPayload;
        this.prismaGraphQLToJSError = this.config.accelerateUtils?.prismaGraphQLToJSError;
        this.PrismaClientUnknownRequestError = this.config.accelerateUtils?.PrismaClientUnknownRequestError;
        this.PrismaClientInitializationError = this.config.accelerateUtils?.PrismaClientInitializationError;
        this.PrismaClientKnownRequestError = this.config.accelerateUtils?.PrismaClientKnownRequestError;
        this.debug = this.config.accelerateUtils?.debug;
        this.engineVersion = this.config.accelerateUtils?.engineVersion;
        this.clientVersion = this.config.accelerateUtils?.clientVersion;
      }
      onBeforeExit(t) {
      }
      async start() {
      }
      async stop() {
      }
      version(t) {
        return "unknown";
      }
      transaction(t, r, n) {
        throw new I(Et, this.config.clientVersion);
      }
      metrics(t) {
        throw new I(Et, this.config.clientVersion);
      }
      request(t, r) {
        throw new I(Et, this.config.clientVersion);
      }
      requestBatch(t, r) {
        throw new I(Et, this.config.clientVersion);
      }
      applyPendingMigrations() {
        throw new I(Et, this.config.clientVersion);
      }
    };
    function Mi({ copyEngine: e = true }, t) {
      let r;
      try {
        r = Zt({ inlineDatasources: t.inlineDatasources, overrideDatasources: t.overrideDatasources, env: { ...t.env, ...g.env }, clientVersion: t.clientVersion });
      } catch {
      }
      e && r?.startsWith("prisma://") && at("recommend--no-engine", "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)");
      let n = it(t.generator), i = !!(r?.startsWith("prisma://") || !e), o = !!t.adapter, s = n === "library", a = n === "binary";
      if (i && o || o && false) {
        let u;
        throw e ? r?.startsWith("prisma://") ? u = ["Prisma Client was configured to use the `adapter` option but the URL was a `prisma://` URL.", "Please either use the `prisma://` URL or remove the `adapter` from the Prisma Client constructor."] : u = ["Prisma Client was configured to use both the `adapter` and Accelerate, please chose one."] : u = ["Prisma Client was configured to use the `adapter` option but `prisma generate` was run with `--no-engine`.", "Please run `prisma generate` without `--no-engine` to be able to use Prisma Client with the adapter."], new j(u.join(`
`), { clientVersion: t.clientVersion });
      }
      if (o)
        return new wt(t);
      if (i)
        return new er(t);
      {
        let u = [`PrismaClient failed to initialize because it wasn't configured to run in this environment (${ve().prettyName}).`, "In order to run Prisma Client in an edge runtime, you will need to configure one of the following options:", "- Enable Driver Adapters: https://pris.ly/d/driver-adapters", "- Enable Accelerate: https://pris.ly/d/accelerate"];
        throw new j(u.join(`
`), { clientVersion: t.clientVersion });
      }
      throw new j("Invalid client engine type, please use `library` or `binary`", { clientVersion: t.clientVersion });
    }
    c();
    m();
    p();
    d();
    f();
    l();
    function tr({ generator: e }) {
      return e?.previewFeatures ?? [];
    }
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    function Xe(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    var Ni = De($r());
    c();
    m();
    p();
    d();
    f();
    l();
    function Di(e, t, r) {
      let n = Fi(e), i = Ys(n), o = Zs(i);
      o ? rr(o, t, r) : t.addErrorMessage(() => "Unknown error");
    }
    function Fi(e) {
      return e.errors.flatMap((t) => t.kind === "Union" ? Fi(t) : [t]);
    }
    function Ys(e) {
      let t = /* @__PURE__ */ new Map(), r = [];
      for (let n of e) {
        if (n.kind !== "InvalidArgumentType") {
          r.push(n);
          continue;
        }
        let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = t.get(i);
        o ? t.set(i, { ...n, argument: { ...n.argument, typeNames: Xs(o.argument.typeNames, n.argument.typeNames) } }) : t.set(i, n);
      }
      return r.push(...t.values()), r;
    }
    function Xs(e, t) {
      return [...new Set(e.concat(t))];
    }
    function Zs(e) {
      return Cr(e, (t, r) => {
        let n = Ii(t), i = Ii(r);
        return n !== i ? n - i : _i(t) - _i(r);
      });
    }
    function Ii(e) {
      let t = 0;
      return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t;
    }
    function _i(e) {
      switch (e.kind) {
        case "InvalidArgumentValue":
        case "ValueTooLarge":
          return 20;
        case "InvalidArgumentType":
          return 10;
        case "RequiredArgumentMissing":
          return -10;
        default:
          return 0;
      }
    }
    c();
    m();
    p();
    d();
    f();
    l();
    var te = class {
      constructor(t, r) {
        this.name = t;
        this.value = r;
        this.isRequired = false;
      }
      makeRequired() {
        return this.isRequired = true, this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.addMarginSymbol(r(this.isRequired ? "+" : "?")), t.write(r(this.name)), this.isRequired || t.write(r("?")), t.write(r(": ")), typeof this.value == "string" ? t.write(r(this.value)) : t.write(this.value);
      }
    };
    c();
    m();
    p();
    d();
    f();
    l();
    var xt = class {
      constructor() {
        this.fields = [];
      }
      addField(t, r) {
        return this.fields.push({ write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));
        } }), this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.writeLine(r("{")).withIndent(() => {
          t.writeJoined(Ge, this.fields).newLine();
        }).write(r("}")).addMarginSymbol(r("+"));
      }
    };
    function rr(e, t, r) {
      switch (e.kind) {
        case "MutuallyExclusiveFields":
          ea(e, t);
          break;
        case "IncludeOnScalar":
          ta(e, t);
          break;
        case "EmptySelection":
          ra(e, t, r);
          break;
        case "UnknownSelectionField":
          sa(e, t);
          break;
        case "UnknownArgument":
          aa(e, t);
          break;
        case "UnknownInputField":
          la(e, t);
          break;
        case "RequiredArgumentMissing":
          ua(e, t);
          break;
        case "InvalidArgumentType":
          ca(e, t);
          break;
        case "InvalidArgumentValue":
          ma(e, t);
          break;
        case "ValueTooLarge":
          pa(e, t);
          break;
        case "SomeFieldsMissing":
          da(e, t);
          break;
        case "TooManyFieldsGiven":
          fa(e, t);
          break;
        case "Union":
          Di(e, t, r);
          break;
        default:
          throw new Error("not implemented: " + e.kind);
      }
    }
    function ea(e, t) {
      let r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      r && (r.getField(e.firstField)?.markAsError(), r.getField(e.secondField)?.markAsError()), t.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.green(`\`${e.firstField}\``)} or ${n.green(`\`${e.secondField}\``)}, but ${n.red("not both")} at the same time.`);
    }
    function ta(e, t) {
      let [r, n] = Pt(e.selectionPath), i = e.outputType, o = t.arguments.getDeepSelectionParent(r)?.value;
      if (o && (o.getField(n)?.markAsError(), i))
        for (let s of i.fields)
          s.isRelation && o.addSuggestion(new te(s.name, "true"));
      t.addErrorMessage((s) => {
        let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
        return i ? a += ` on model ${s.bold(i.name)}. ${vt(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
      });
    }
    function ra(e, t, r) {
      let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (n) {
        let i = n.getField("omit")?.value.asObject();
        if (i) {
          na(e, t, i);
          return;
        }
        if (n.hasField("select")) {
          ia(e, t);
          return;
        }
      }
      if (r?.[Xe(e.outputType.name)]) {
        oa(e, t);
        return;
      }
      t.addErrorMessage(() => `Unknown field at "${e.selectionPath.join(".")} selection"`);
    }
    function na(e, t, r) {
      r.removeAllFields();
      for (let n of e.outputType.fields)
        r.addSuggestion(new te(n.name, "false"));
      t.addErrorMessage((n) => `The ${n.red("omit")} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`);
    }
    function ia(e, t) {
      let r = e.outputType, n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value, i = n?.isEmpty() ?? false;
      n && (n.removeAllFields(), qi(n, r)), t.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${vt(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`);
    }
    function oa(e, t) {
      let r = new xt();
      for (let i of e.outputType.fields)
        i.isRelation || r.addField(i.name, "false");
      let n = new te("omit", r).makeRequired();
      if (e.selectionPath.length === 0)
        t.arguments.addSuggestion(n);
      else {
        let [i, o] = Pt(e.selectionPath), a = t.arguments.getDeepSelectionParent(i)?.value.asObject()?.getField(o);
        if (a) {
          let u = a?.value.asObject() ?? new Ke();
          u.addSuggestion(n), a.value = u;
        }
      }
      t.addErrorMessage((i) => `The global ${i.red("omit")} configuration excludes every field of the model ${i.bold(e.outputType.name)}. At least one field must be included in the result`);
    }
    function sa(e, t) {
      let [r, n] = Pt(e.selectionPath), i = t.arguments.getDeepSubSelectionValue(r)?.asObject(), o;
      if (i) {
        let s = i.getFieldValue("select")?.asObject(), a = i.getFieldValue("include")?.asObject(), u = i.getFieldValue("omit")?.asObject();
        s?.hasField(n) ? (o = "select", s.getField(n)?.markAsError(), qi(s, e.outputType)) : a?.hasField(n) ? (o = "include", a.getField(n)?.markAsError(), ga(a, e.outputType)) : u?.hasField(n) && (o = "omit", u.getField(n)?.markAsError(), ha(u, e.outputType));
      }
      t.addErrorMessage((s) => {
        let a = [`Unknown field ${s.red(`\`${n}\``)}`];
        return o && a.push(`for ${s.bold(o)} statement`), a.push(`on model ${s.bold(`\`${e.outputType.name}\``)}.`), a.push(vt(s)), a.join(" ");
      });
    }
    function aa(e, t) {
      let r = e.argumentPath[0], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && (n.getField(r)?.markAsError(), ya(n, e.arguments)), t.addErrorMessage((i) => Ui(i, r, e.arguments.map((o) => o.name)));
    }
    function la(e, t) {
      let [r, n] = Pt(e.argumentPath), i = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (i) {
        i.getDeepField(e.argumentPath)?.markAsError();
        let o = i.getDeepFieldValue(r)?.asObject();
        o && $i(o, e.inputType);
      }
      t.addErrorMessage((o) => Ui(o, n, e.inputType.fields.map((s) => s.name)));
    }
    function Ui(e, t, r) {
      let n = [`Unknown argument \`${e.red(t)}\`.`], i = wa(t, r);
      return i && n.push(`Did you mean \`${e.green(i)}\`?`), r.length > 0 && n.push(vt(e)), n.join(" ");
    }
    function ua(e, t) {
      let r;
      t.addErrorMessage((u) => r?.value instanceof W && r.value.text === "null" ? `Argument \`${u.green(o)}\` must not be ${u.red("null")}.` : `Argument \`${u.green(o)}\` is missing.`);
      let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (!n)
        return;
      let [i, o] = Pt(e.argumentPath), s = new xt(), a = n.getDeepFieldValue(i)?.asObject();
      if (a)
        if (r = a.getField(o), r && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
          for (let u of e.inputTypes[0].fields)
            s.addField(u.name, u.typeNames.join(" | "));
          a.addSuggestion(new te(o, s).makeRequired());
        } else {
          let u = e.inputTypes.map(Bi).join(" | ");
          a.addSuggestion(new te(o, u).makeRequired());
        }
    }
    function Bi(e) {
      return e.kind === "list" ? `${Bi(e.elementType)}[]` : e.name;
    }
    function ca(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
        let o = nr("or", e.argument.typeNames.map((s) => i.green(s)));
        return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
      });
    }
    function ma(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
        let o = [`Invalid value for argument \`${i.bold(r)}\``];
        if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push("."), e.argument.typeNames.length > 0) {
          let s = nr("or", e.argument.typeNames.map((a) => i.green(a)));
          o.push(` Expected ${s}.`);
        }
        return o.join("");
      });
    }
    function pa(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i;
      if (n) {
        let s = n.getDeepField(e.argumentPath)?.value;
        s?.markAsError(), s instanceof W && (i = s.text);
      }
      t.addErrorMessage((o) => {
        let s = ["Unable to fit value"];
        return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``), s.join(" ");
      });
    }
    function da(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (n) {
        let i = n.getDeepFieldValue(e.argumentPath)?.asObject();
        i && $i(i, e.inputType);
      }
      t.addErrorMessage((i) => {
        let o = [`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${nr("or", e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(vt(i)), o.join(" ");
      });
    }
    function fa(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i = [];
      if (n) {
        let o = n.getDeepFieldValue(e.argumentPath)?.asObject();
        o && (o.markAsError(), i = Object.keys(o.getFields()));
      }
      t.addErrorMessage((o) => {
        let s = [`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${nr("and", i.map((a) => o.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
      });
    }
    function qi(e, t) {
      for (let r of t.fields)
        e.hasField(r.name) || e.addSuggestion(new te(r.name, "true"));
    }
    function ga(e, t) {
      for (let r of t.fields)
        r.isRelation && !e.hasField(r.name) && e.addSuggestion(new te(r.name, "true"));
    }
    function ha(e, t) {
      for (let r of t.fields)
        !e.hasField(r.name) && !r.isRelation && e.addSuggestion(new te(r.name, "true"));
    }
    function ya(e, t) {
      for (let r of t)
        e.hasField(r.name) || e.addSuggestion(new te(r.name, r.typeNames.join(" | ")));
    }
    function $i(e, t) {
      if (t.kind === "object")
        for (let r of t.fields)
          e.hasField(r.name) || e.addSuggestion(new te(r.name, r.typeNames.join(" | ")));
    }
    function Pt(e) {
      let t = [...e], r = t.pop();
      if (!r)
        throw new Error("unexpected empty path");
      return [t, r];
    }
    function vt({ green: e, enabled: t }) {
      return "Available options are " + (t ? `listed in ${e("green")}` : "marked with ?") + ".";
    }
    function nr(e, t) {
      if (t.length === 1)
        return t[0];
      let r = [...t], n = r.pop();
      return `${r.join(", ")} ${e} ${n}`;
    }
    var ba = 3;
    function wa(e, t) {
      let r = 1 / 0, n;
      for (let i of t) {
        let o = (0, Ni.default)(e, i);
        o > ba || o < r && (r = o, n = i);
      }
      return n;
    }
    function ir({ args: e, errors: t, errorFormat: r, callsite: n, originalMethod: i, clientVersion: o, globalOmit: s }) {
      let a = He(e);
      for (let C of t)
        rr(C, a, s);
      let { message: u, args: y } = Wt(a, r), T = Ye({ message: u, callsite: n, originalMethod: i, showColors: r === "pretty", callArguments: y });
      throw new j(T, { clientVersion: o });
    }
    var Ea = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", createManyAndReturn: "createManyAndReturn", update: "updateOne", updateMany: "updateMany", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
    function Vi({ modelName: e, action: t, args: r, runtimeDataModel: n, extensions: i, callsite: o, clientMethod: s, errorFormat: a, clientVersion: u, previewFeatures: y, globalOmit: T }) {
      let C = new Vr({ runtimeDataModel: n, modelName: e, action: t, rootArgs: r, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: u, previewFeatures: y, globalOmit: T });
      return { modelName: e, action: Ea[t], query: Tt(r, C) };
    }
    function Tt({ select: e, include: t, ...r } = {}, n) {
      let i;
      return n.isPreviewFeatureOn("omitApi") && (i = r.omit, delete r.omit), { arguments: Qi(r, n), selection: xa(e, t, i, n) };
    }
    function xa(e, t, r, n) {
      return e ? (t ? n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "include", secondField: "select", selectionPath: n.getSelectionPath() }) : r && n.isPreviewFeatureOn("omitApi") && n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "omit", secondField: "select", selectionPath: n.getSelectionPath() }), Ca(e, n)) : Pa(n, t, r);
    }
    function Pa(e, t, r) {
      let n = {};
      return e.modelOrType && !e.isRawAction() && (n.$composites = true, n.$scalars = true), t && va(n, t, e), e.isPreviewFeatureOn("omitApi") && Ta(n, r, e), n;
    }
    function va(e, t, r) {
      for (let [n, i] of Object.entries(t)) {
        if (i === false) {
          e[n] = false;
          continue;
        }
        let o = r.findField(n);
        if (o && o.kind !== "object" && r.throwValidationError({ kind: "IncludeOnScalar", selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), o) {
          e[n] = Tt(i === true ? {} : i, r.nestSelection(n));
          continue;
        }
        if (i === true) {
          e[n] = true;
          continue;
        }
        e[n] = Tt(i, r.nestSelection(n));
      }
    }
    function Ta(e, t, r) {
      let n = r.getComputedFields(), i = { ...r.getGlobalOmit(), ...t }, o = vi(i, n);
      for (let [s, a] of Object.entries(o)) {
        let u = r.findField(s);
        n?.[s] && !u || (e[s] = !a);
      }
    }
    function Ca(e, t) {
      let r = {}, n = t.getComputedFields(), i = Pi(e, n);
      for (let [o, s] of Object.entries(i)) {
        let a = t.findField(o);
        if (!(n?.[o] && !a)) {
          if (s === false) {
            r[o] = false;
            continue;
          }
          if (s === true) {
            a?.kind === "object" ? r[o] = Tt({}, t.nestSelection(o)) : r[o] = true;
            continue;
          }
          r[o] = Tt(s, t.nestSelection(o));
        }
      }
      return r;
    }
    function ji(e, t) {
      if (e === null)
        return null;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
        return e;
      if (typeof e == "bigint")
        return { $type: "BigInt", value: String(e) };
      if (je(e)) {
        if (Vt(e))
          return { $type: "DateTime", value: e.toISOString() };
        t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
      }
      if (Je(e))
        return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } };
      if (Array.isArray(e))
        return Ra(e, t);
      if (ArrayBuffer.isView(e))
        return { $type: "Bytes", value: b.from(e).toString("base64") };
      if (Aa(e))
        return e.values;
      if (Qe(e))
        return { $type: "Decimal", value: e.toFixed() };
      if (e instanceof we) {
        if (e !== Ut.instances[e._getName()])
          throw new Error("Invalid ObjectEnumValue");
        return { $type: "Enum", value: e._getName() };
      }
      if (Sa(e))
        return e.toJSON();
      if (typeof e == "object")
        return Qi(e, t);
      t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
    }
    function Qi(e, t) {
      if (e.$type)
        return { $type: "Raw", value: e };
      let r = {};
      for (let n in e) {
        let i = e[n];
        i !== void 0 && (r[n] = ji(i, t.nestArgument(n)));
      }
      return r;
    }
    function Ra(e, t) {
      let r = [];
      for (let n = 0; n < e.length; n++) {
        let i = t.nestArgument(String(n)), o = e[n];
        o === void 0 && t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: "Can not use `undefined` value within array. Use `null` or filter out `undefined` values" }), r.push(ji(o, i));
      }
      return r;
    }
    function Aa(e) {
      return typeof e == "object" && e !== null && e.__prismaRawParameters__ === true;
    }
    function Sa(e) {
      return typeof e == "object" && e !== null && typeof e.toJSON == "function";
    }
    var Vr = class e {
      constructor(t) {
        this.params = t;
        this.params.modelName && (this.modelOrType = this.params.runtimeDataModel.models[this.params.modelName] ?? this.params.runtimeDataModel.types[this.params.modelName]);
      }
      throwValidationError(t) {
        ir({ errors: [t], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion, globalOmit: this.params.globalOmit });
      }
      getSelectionPath() {
        return this.params.selectionPath;
      }
      getArgumentPath() {
        return this.params.argumentPath;
      }
      getArgumentName() {
        return this.params.argumentPath[this.params.argumentPath.length - 1];
      }
      getOutputTypeDescription() {
        if (!(!this.params.modelName || !this.modelOrType))
          return { name: this.params.modelName, fields: this.modelOrType.fields.map((t) => ({ name: t.name, typeName: "boolean", isRelation: t.kind === "object" })) };
      }
      isRawAction() {
        return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
      }
      isPreviewFeatureOn(t) {
        return this.params.previewFeatures.includes(t);
      }
      getComputedFields() {
        if (this.params.modelName)
          return this.params.extensions.getAllComputedFields(this.params.modelName);
      }
      findField(t) {
        return this.modelOrType?.fields.find((r) => r.name === t);
      }
      nestSelection(t) {
        let r = this.findField(t), n = r?.kind === "object" ? r.type : void 0;
        return new e({ ...this.params, modelName: n, selectionPath: this.params.selectionPath.concat(t) });
      }
      getGlobalOmit() {
        return this.params.modelName && this.shouldApplyGlobalOmit() ? this.params.globalOmit?.[Xe(this.params.modelName)] ?? {} : {};
      }
      shouldApplyGlobalOmit() {
        switch (this.params.action) {
          case "findFirst":
          case "findFirstOrThrow":
          case "findUniqueOrThrow":
          case "findMany":
          case "upsert":
          case "findUnique":
          case "createManyAndReturn":
          case "create":
          case "update":
          case "delete":
            return true;
          case "executeRaw":
          case "aggregateRaw":
          case "runCommandRaw":
          case "findRaw":
          case "createMany":
          case "deleteMany":
          case "groupBy":
          case "updateMany":
          case "count":
          case "aggregate":
          case "queryRaw":
            return false;
          default:
            he(this.params.action, "Unknown action");
        }
      }
      nestArgument(t) {
        return new e({ ...this.params, argumentPath: this.params.argumentPath.concat(t) });
      }
    };
    c();
    m();
    p();
    d();
    f();
    l();
    var Ji = (e) => ({ command: e });
    c();
    m();
    p();
    d();
    f();
    l();
    c();
    m();
    p();
    d();
    f();
    l();
    var Gi = (e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`);
    c();
    m();
    p();
    d();
    f();
    l();
    l();
    function Ze(e) {
      try {
        return Wi(e, "fast");
      } catch {
        return Wi(e, "slow");
      }
    }
    function Wi(e, t) {
      return JSON.stringify(e.map((r) => Hi(r, t)));
    }
    function Hi(e, t) {
      return Array.isArray(e) ? e.map((r) => Hi(r, t)) : typeof e == "bigint" ? { prisma__type: "bigint", prisma__value: e.toString() } : je(e) ? { prisma__type: "date", prisma__value: e.toJSON() } : ue.isDecimal(e) ? { prisma__type: "decimal", prisma__value: e.toJSON() } : b.isBuffer(e) ? { prisma__type: "bytes", prisma__value: e.toString("base64") } : Oa(e) || ArrayBuffer.isView(e) ? { prisma__type: "bytes", prisma__value: b.from(e).toString("base64") } : typeof e == "object" && t === "slow" ? zi(e) : e;
    }
    function Oa(e) {
      return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? true : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : false;
    }
    function zi(e) {
      if (typeof e != "object" || e === null)
        return e;
      if (typeof e.toJSON == "function")
        return e.toJSON();
      if (Array.isArray(e))
        return e.map(Ki);
      let t = {};
      for (let r of Object.keys(e))
        t[r] = Ki(e[r]);
      return t;
    }
    function Ki(e) {
      return typeof e == "bigint" ? e.toString() : zi(e);
    }
    c();
    m();
    p();
    d();
    f();
    l();
    var ka = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"];
    var Yi = ka;
    var Ma = /^(\s*alter\s)/i;
    var Xi = ee("prisma:client");
    function jr(e, t, r, n) {
      if (!(e !== "postgresql" && e !== "cockroachdb") && r.length > 0 && Ma.exec(t))
        throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
    }
    var Qr = ({ clientMethod: e, activeProvider: t }) => (r) => {
      let n = "", i;
      if (r instanceof dt)
        n = r.sql, i = { values: Ze(r.values), __prismaRawParameters__: true };
      else if (Array.isArray(r)) {
        let [o, ...s] = r;
        n = o, i = { values: Ze(s || []), __prismaRawParameters__: true };
      } else
        switch (t) {
          case "sqlite":
          case "mysql": {
            n = r.sql, i = { values: Ze(r.values), __prismaRawParameters__: true };
            break;
          }
          case "cockroachdb":
          case "postgresql":
          case "postgres": {
            n = r.text, i = { values: Ze(r.values), __prismaRawParameters__: true };
            break;
          }
          case "sqlserver": {
            n = Gi(r), i = { values: Ze(r.values), __prismaRawParameters__: true };
            break;
          }
          default:
            throw new Error(`The ${t} provider does not support ${e}`);
        }
      return i?.values ? Xi(`prisma.${e}(${n}, ${i.values})`) : Xi(`prisma.${e}(${n})`), { query: n, parameters: i };
    };
    var Zi = { requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    }, middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e;
      return new X(t, r);
    } };
    var eo = { requestArgsToMiddlewareArgs(e) {
      return [e];
    }, middlewareArgsToRequestArgs(e) {
      return e[0];
    } };
    c();
    m();
    p();
    d();
    f();
    l();
    function Jr(e) {
      return function(r) {
        let n, i = (o = e) => {
          try {
            return o === void 0 || o?.kind === "itx" ? n ??= to(r(o)) : to(r(o));
          } catch (s) {
            return Promise.reject(s);
          }
        };
        return { then(o, s) {
          return i().then(o, s);
        }, catch(o) {
          return i().catch(o);
        }, finally(o) {
          return i().finally(o);
        }, requestTransaction(o) {
          let s = i(o);
          return s.requestTransaction ? s.requestTransaction(o) : s;
        }, [Symbol.toStringTag]: "PrismaPromise" };
      };
    }
    function to(e) {
      return typeof e.then == "function" ? e : Promise.resolve(e);
    }
    c();
    m();
    p();
    d();
    f();
    l();
    var ro = { isEnabled() {
      return false;
    }, getTraceParent() {
      return "00-10-10-00";
    }, async createEngineSpan() {
    }, getActiveContext() {
    }, runInChildSpan(e, t) {
      return t();
    } };
    var Gr = class {
      isEnabled() {
        return this.getGlobalTracingHelper().isEnabled();
      }
      getTraceParent(t) {
        return this.getGlobalTracingHelper().getTraceParent(t);
      }
      createEngineSpan(t) {
        return this.getGlobalTracingHelper().createEngineSpan(t);
      }
      getActiveContext() {
        return this.getGlobalTracingHelper().getActiveContext();
      }
      runInChildSpan(t, r) {
        return this.getGlobalTracingHelper().runInChildSpan(t, r);
      }
      getGlobalTracingHelper() {
        return globalThis.PRISMA_INSTRUMENTATION?.helper ?? ro;
      }
    };
    function no(e) {
      return e.includes("tracing") ? new Gr() : ro;
    }
    c();
    m();
    p();
    d();
    f();
    l();
    function io(e, t = () => {
    }) {
      let r, n = new Promise((i) => r = i);
      return { then(i) {
        return --e === 0 && r(t()), i?.(n);
      } };
    }
    c();
    m();
    p();
    d();
    f();
    l();
    function oo(e) {
      return typeof e == "string" ? e : e.reduce((t, r) => {
        let n = typeof r == "string" ? r : r.level;
        return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n;
      }, void 0);
    }
    c();
    m();
    p();
    d();
    f();
    l();
    var or = class {
      constructor() {
        this._middlewares = [];
      }
      use(t) {
        this._middlewares.push(t);
      }
      get(t) {
        return this._middlewares[t];
      }
      has(t) {
        return !!this._middlewares[t];
      }
      length() {
        return this._middlewares.length;
      }
    };
    c();
    m();
    p();
    d();
    f();
    l();
    var lo = De(Dn());
    c();
    m();
    p();
    d();
    f();
    l();
    function sr(e) {
      return typeof e.batchRequestIdx == "number";
    }
    c();
    m();
    p();
    d();
    f();
    l();
    l();
    function ar(e) {
      return e === null ? e : Array.isArray(e) ? e.map(ar) : typeof e == "object" ? La(e) ? Ia(e) : Be(e, ar) : e;
    }
    function La(e) {
      return e !== null && typeof e == "object" && typeof e.$type == "string";
    }
    function Ia({ $type: e, value: t }) {
      switch (e) {
        case "BigInt":
          return BigInt(t);
        case "Bytes":
          return b.from(t, "base64");
        case "DateTime":
          return new Date(t);
        case "Decimal":
          return new ue(t);
        case "Json":
          return JSON.parse(t);
        default:
          he(t, "Unknown tagged value");
      }
    }
    c();
    m();
    p();
    d();
    f();
    l();
    function so(e) {
      if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow")
        return;
      let t = [];
      return e.modelName && t.push(e.modelName), e.query.arguments && t.push(Wr(e.query.arguments)), t.push(Wr(e.query.selection)), t.join("");
    }
    function Wr(e) {
      return `(${Object.keys(e).sort().map((r) => {
        let n = e[r];
        return typeof n == "object" && n !== null ? `(${r} ${Wr(n)})` : r;
      }).join(" ")})`;
    }
    c();
    m();
    p();
    d();
    f();
    l();
    var _a = { aggregate: false, aggregateRaw: false, createMany: true, createManyAndReturn: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateOne: true, upsertOne: true };
    function Kr(e) {
      return _a[e];
    }
    c();
    m();
    p();
    d();
    f();
    l();
    var lr = class {
      constructor(t) {
        this.options = t;
        this.tickActive = false;
        this.batches = {};
      }
      request(t) {
        let r = this.options.batchBy(t);
        return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = true, g.nextTick(() => {
          this.dispatchBatches(), this.tickActive = false;
        }))), new Promise((n, i) => {
          this.batches[r].push({ request: t, resolve: n, reject: i });
        })) : this.options.singleLoader(t);
      }
      dispatchBatches() {
        for (let t in this.batches) {
          let r = this.batches[t];
          delete this.batches[t], r.length === 1 ? this.options.singleLoader(r[0].request).then((n) => {
            n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
          }).catch((n) => {
            r[0].reject(n);
          }) : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(r.map((n) => n.request)).then((n) => {
            if (n instanceof Error)
              for (let i = 0; i < r.length; i++)
                r[i].reject(n);
            else
              for (let i = 0; i < r.length; i++) {
                let o = n[i];
                o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
              }
          }).catch((n) => {
            for (let i = 0; i < r.length; i++)
              r[i].reject(n);
          }));
        }
      }
      get [Symbol.toStringTag]() {
        return "DataLoader";
      }
    };
    c();
    m();
    p();
    d();
    f();
    l();
    l();
    function Le(e, t) {
      if (t === null)
        return t;
      switch (e) {
        case "bigint":
          return BigInt(t);
        case "bytes":
          return b.from(t, "base64");
        case "decimal":
          return new ue(t);
        case "datetime":
        case "date":
          return new Date(t);
        case "time":
          return /* @__PURE__ */ new Date(`1970-01-01T${t}Z`);
        case "bigint-array":
          return t.map((r) => Le("bigint", r));
        case "bytes-array":
          return t.map((r) => Le("bytes", r));
        case "decimal-array":
          return t.map((r) => Le("decimal", r));
        case "datetime-array":
          return t.map((r) => Le("datetime", r));
        case "date-array":
          return t.map((r) => Le("date", r));
        case "time-array":
          return t.map((r) => Le("time", r));
        default:
          return t;
      }
    }
    function ao(e) {
      let t = [], r = Da(e);
      for (let n = 0; n < e.rows.length; n++) {
        let i = e.rows[n], o = { ...r };
        for (let s = 0; s < i.length; s++)
          o[e.columns[s]] = Le(e.types[s], i[s]);
        t.push(o);
      }
      return t;
    }
    function Da(e) {
      let t = {};
      for (let r = 0; r < e.columns.length; r++)
        t[e.columns[r]] = null;
      return t;
    }
    var Fa = ee("prisma:client:request_handler");
    var ur = class {
      constructor(t, r) {
        this.logEmitter = r, this.client = t, this.dataloader = new lr({ batchLoader: yi(async ({ requests: n, customDataProxyFetch: i }) => {
          let { transaction: o, otelParentCtx: s } = n[0], a = n.map((C) => C.protocolQuery), u = this.client._tracingHelper.getTraceParent(s), y = n.some((C) => Kr(C.protocolQuery.action));
          return (await this.client._engine.requestBatch(a, { traceparent: u, transaction: Na(o), containsWrite: y, customDataProxyFetch: i })).map((C, O) => {
            if (C instanceof Error)
              return C;
            try {
              return this.mapQueryEngineResult(n[O], C);
            } catch (A) {
              return A;
            }
          });
        }), singleLoader: async (n) => {
          let i = n.transaction?.kind === "itx" ? uo(n.transaction) : void 0, o = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: Kr(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
          return this.mapQueryEngineResult(n, o);
        }, batchBy: (n) => n.transaction?.id ? `transaction-${n.transaction.id}` : so(n.protocolQuery), batchOrder(n, i) {
          return n.transaction?.kind === "batch" && i.transaction?.kind === "batch" ? n.transaction.index - i.transaction.index : 0;
        } });
      }
      async request(t) {
        try {
          return await this.dataloader.request(t);
        } catch (r) {
          let { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a } = t;
          this.handleAndLogRequestError({ error: r, clientMethod: n, callsite: i, transaction: o, args: s, modelName: a, globalOmit: t.globalOmit });
        }
      }
      mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
        let i = n?.data, o = n?.elapsed, s = this.unpack(i, t, r);
        return g.env.PRISMA_CLIENT_GET_TIME ? { data: s, elapsed: o } : s;
      }
      handleAndLogRequestError(t) {
        try {
          this.handleRequestError(t);
        } catch (r) {
          throw this.logEmitter && this.logEmitter.emit("error", { message: r.message, target: t.clientMethod, timestamp: /* @__PURE__ */ new Date() }), r;
        }
      }
      handleRequestError({ error: t, clientMethod: r, callsite: n, transaction: i, args: o, modelName: s, globalOmit: a }) {
        if (Fa(t), Ua(t, i) || t instanceof ye)
          throw t;
        if (t instanceof J && Ba(t)) {
          let y = co(t.meta);
          ir({ args: o, errors: [y], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion, globalOmit: a });
        }
        let u = t.message;
        if (n && (u = Ye({ callsite: n, originalMethod: r, isPanic: t.isPanic, showColors: this.client._errorFormat === "pretty", message: u })), u = this.sanitizeMessage(u), t.code) {
          let y = s ? { modelName: s, ...t.meta } : t.meta;
          throw new J(u, { code: t.code, clientVersion: this.client._clientVersion, meta: y, batchRequestIdx: t.batchRequestIdx });
        } else {
          if (t.isPanic)
            throw new be(u, this.client._clientVersion);
          if (t instanceof G)
            throw new G(u, { clientVersion: this.client._clientVersion, batchRequestIdx: t.batchRequestIdx });
          if (t instanceof I)
            throw new I(u, this.client._clientVersion);
          if (t instanceof be)
            throw new be(u, this.client._clientVersion);
        }
        throw t.clientVersion = this.client._clientVersion, t;
      }
      sanitizeMessage(t) {
        return this.client._errorFormat && this.client._errorFormat !== "pretty" ? (0, lo.default)(t) : t;
      }
      unpack(t, r, n) {
        if (!t || (t.data && (t = t.data), !t))
          return t;
        let i = Object.keys(t)[0], o = Object.values(t)[0], s = r.filter((y) => y !== "select" && y !== "include"), a = Fr(o, s), u = i === "queryRaw" ? ao(a) : ar(a);
        return n ? n(u) : u;
      }
      get [Symbol.toStringTag]() {
        return "RequestHandler";
      }
    };
    function Na(e) {
      if (e) {
        if (e.kind === "batch")
          return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
        if (e.kind === "itx")
          return { kind: "itx", options: uo(e) };
        he(e, "Unknown transaction kind");
      }
    }
    function uo(e) {
      return { id: e.id, payload: e.payload };
    }
    function Ua(e, t) {
      return sr(e) && t?.kind === "batch" && e.batchRequestIdx !== t.index;
    }
    function Ba(e) {
      return e.code === "P2009" || e.code === "P2012";
    }
    function co(e) {
      if (e.kind === "Union")
        return { kind: "Union", errors: e.errors.map(co) };
      if (Array.isArray(e.selectionPath)) {
        let [, ...t] = e.selectionPath;
        return { ...e, selectionPath: t };
      }
      return e;
    }
    c();
    m();
    p();
    d();
    f();
    l();
    var mo = "5.19.0";
    var po = mo;
    c();
    m();
    p();
    d();
    f();
    l();
    var bo = De($r());
    c();
    m();
    p();
    d();
    f();
    l();
    var _ = class extends Error {
      constructor(t) {
        super(t + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientConstructorValidationError";
      }
    };
    K(_, "PrismaClientConstructorValidationError");
    var fo = ["datasources", "datasourceUrl", "errorFormat", "adapter", "log", "transactionOptions", "omit", "__internal"];
    var go = ["pretty", "colorless", "minimal"];
    var ho = ["info", "query", "warn", "error"];
    var $a = { datasources: (e, { datasourceNames: t }) => {
      if (e) {
        if (typeof e != "object" || Array.isArray(e))
          throw new _(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let i = et(r, t) || ` Available datasources: ${t.join(", ")}`;
            throw new _(`Unknown datasource ${r} provided to PrismaClient constructor.${i}`);
          }
          if (typeof n != "object" || Array.isArray(n))
            throw new _(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == "object")
            for (let [i, o] of Object.entries(n)) {
              if (i !== "url")
                throw new _(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
              if (typeof o != "string")
                throw new _(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            }
        }
      }
    }, adapter: (e, t) => {
      if (e === null)
        return;
      if (e === void 0)
        throw new _('"adapter" property must not be undefined, use null to conditionally disable driver adapters.');
      if (!tr(t).includes("driverAdapters"))
        throw new _('"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.');
      if (it() === "binary")
        throw new _('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.');
    }, datasourceUrl: (e) => {
      if (typeof e < "u" && typeof e != "string")
        throw new _(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    }, errorFormat: (e) => {
      if (e) {
        if (typeof e != "string")
          throw new _(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
        if (!go.includes(e)) {
          let t = et(e, go);
          throw new _(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`);
        }
      }
    }, log: (e) => {
      if (!e)
        return;
      if (!Array.isArray(e))
        throw new _(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
      function t(r) {
        if (typeof r == "string" && !ho.includes(r)) {
          let n = et(r, ho);
          throw new _(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`);
        }
      }
      for (let r of e) {
        t(r);
        let n = { level: t, emit: (i) => {
          let o = ["stdout", "event"];
          if (!o.includes(i)) {
            let s = et(i, o);
            throw new _(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
          }
        } };
        if (r && typeof r == "object")
          for (let [i, o] of Object.entries(r))
            if (n[i])
              n[i](o);
            else
              throw new _(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
      }
    }, transactionOptions: (e) => {
      if (!e)
        return;
      let t = e.maxWait;
      if (t != null && t <= 0)
        throw new _(`Invalid value ${t} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);
      let r = e.timeout;
      if (r != null && r <= 0)
        throw new _(`Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`);
    }, omit: (e, t) => {
      if (typeof e != "object")
        throw new _('"omit" option is expected to be an object.');
      if (e === null)
        throw new _('"omit" option can not be `null`');
      let r = [];
      for (let [n, i] of Object.entries(e)) {
        let o = ja(n, t.runtimeDataModel);
        if (!o) {
          r.push({ kind: "UnknownModel", modelKey: n });
          continue;
        }
        for (let [s, a] of Object.entries(i)) {
          let u = o.fields.find((y) => y.name === s);
          if (!u) {
            r.push({ kind: "UnknownField", modelKey: n, fieldName: s });
            continue;
          }
          if (u.relationName) {
            r.push({ kind: "RelationInOmit", modelKey: n, fieldName: s });
            continue;
          }
          typeof a != "boolean" && r.push({ kind: "InvalidFieldValue", modelKey: n, fieldName: s });
        }
      }
      if (r.length > 0)
        throw new _(Qa(e, r));
    }, __internal: (e) => {
      if (!e)
        return;
      let t = ["debug", "engine", "configOverride"];
      if (typeof e != "object")
        throw new _(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
      for (let [r] of Object.entries(e))
        if (!t.includes(r)) {
          let n = et(r, t);
          throw new _(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`);
        }
    } };
    function wo(e, t) {
      for (let [r, n] of Object.entries(e)) {
        if (!fo.includes(r)) {
          let i = et(r, fo);
          throw new _(`Unknown property ${r} provided to PrismaClient constructor.${i}`);
        }
        $a[r](n, t);
      }
      if (e.datasourceUrl && e.datasources)
        throw new _('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
    }
    function et(e, t) {
      if (t.length === 0 || typeof e != "string")
        return "";
      let r = Va(e, t);
      return r ? ` Did you mean "${r}"?` : "";
    }
    function Va(e, t) {
      if (t.length === 0)
        return null;
      let r = t.map((i) => ({ value: i, distance: (0, bo.default)(e, i) }));
      r.sort((i, o) => i.distance < o.distance ? -1 : 1);
      let n = r[0];
      return n.distance < 3 ? n.value : null;
    }
    function ja(e, t) {
      return yo(t.models, e) ?? yo(t.types, e);
    }
    function yo(e, t) {
      let r = Object.keys(e).find((n) => Xe(n) === t);
      if (r)
        return e[r];
    }
    function Qa(e, t) {
      let r = He(e);
      for (let o of t)
        switch (o.kind) {
          case "UnknownModel":
            r.arguments.getField(o.modelKey)?.markAsError(), r.addErrorMessage(() => `Unknown model name: ${o.modelKey}.`);
            break;
          case "UnknownField":
            r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => `Model "${o.modelKey}" does not have a field named "${o.fieldName}".`);
            break;
          case "RelationInOmit":
            r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => 'Relations are already excluded by default and can not be specified in "omit".');
            break;
          case "InvalidFieldValue":
            r.arguments.getDeepFieldValue([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => "Omit field option value must be a boolean.");
            break;
        }
      let { message: n, args: i } = Wt(r, "colorless");
      return `Error validating "omit" option:

${i}

${n}`;
    }
    c();
    m();
    p();
    d();
    f();
    l();
    function Eo(e) {
      return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => {
        let n = new Array(e.length), i = null, o = false, s = 0, a = () => {
          o || (s++, s === e.length && (o = true, i ? r(i) : t(n)));
        }, u = (y) => {
          o || (o = true, r(y));
        };
        for (let y = 0; y < e.length; y++)
          e[y].then((T) => {
            n[y] = T, a();
          }, (T) => {
            if (!sr(T)) {
              u(T);
              return;
            }
            T.batchRequestIdx === y ? u(T) : (i || (i = T), a());
          });
      });
    }
    var Te = ee("prisma:client");
    typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
    var Ja = { requestArgsToMiddlewareArgs: (e) => e, middlewareArgsToRequestArgs: (e) => e };
    var Ga = Symbol.for("prisma.client.transaction.id");
    var Wa = { id: 0, nextId() {
      return ++this.id;
    } };
    function vo(e) {
      class t {
        constructor(n) {
          this._originalClient = this;
          this._middlewares = new or();
          this._createPrismaPromise = Jr();
          this.$extends = ui;
          e = n?.__internal?.configOverride?.(e) ?? e, Ri(e), n && wo(n, e);
          let i = new Dt().on("error", () => {
          });
          this._extensions = Xt.empty(), this._previewFeatures = tr(e), this._clientVersion = e.clientVersion ?? po, this._activeProvider = e.activeProvider, this._globalOmit = n?.omit, this._tracingHelper = no(this._previewFeatures);
          let o = { rootEnvPath: e.relativeEnvPaths.rootEnvPath && nt.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath), schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && nt.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath) }, s;
          if (n?.adapter) {
            s = Mr(n.adapter);
            let u = e.activeProvider === "postgresql" ? "postgres" : e.activeProvider;
            if (s.provider !== u)
              throw new I(`The Driver Adapter \`${s.adapterName}\`, based on \`${s.provider}\`, is not compatible with the provider \`${u}\` specified in the Prisma schema.`, this._clientVersion);
            if (n.datasources || n.datasourceUrl !== void 0)
              throw new I("Custom datasource configuration is not compatible with Prisma Driver Adapters. Please define the database connection string directly in the Driver Adapter configuration.", this._clientVersion);
          }
          let a = e.injectableEdgeEnv?.();
          try {
            let u = n ?? {}, y = u.__internal ?? {}, T = y.debug === true;
            T && ee.enable("prisma:client");
            let C = nt.resolve(e.dirname, e.relativePath);
            cn.existsSync(C) || (C = e.dirname), Te("dirname", e.dirname), Te("relativePath", e.relativePath), Te("cwd", C);
            let O = y.engine || {};
            if (u.errorFormat ? this._errorFormat = u.errorFormat : g.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : g.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { cwd: C, dirname: e.dirname, enableDebugLogs: T, allowTriggerPanic: O.allowTriggerPanic, datamodelPath: nt.join(e.dirname, e.filename ?? "schema.prisma"), prismaPath: O.binaryPath ?? void 0, engineEndpoint: O.endpoint, generator: e.generator, showColors: this._errorFormat === "pretty", logLevel: u.log && oo(u.log), logQueries: u.log && !!(typeof u.log == "string" ? u.log === "query" : u.log.find((A) => typeof A == "string" ? A === "query" : A.level === "query")), env: a?.parsed ?? {}, flags: [], engineWasm: e.engineWasm, clientVersion: e.clientVersion, engineVersion: e.engineVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, overrideDatasources: Ai(u, e.datasourceNames), inlineDatasources: e.inlineDatasources, inlineSchemaHash: e.inlineSchemaHash, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: u.transactionOptions?.maxWait ?? 2e3, timeout: u.transactionOptions?.timeout ?? 5e3, isolationLevel: u.transactionOptions?.isolationLevel }, logEmitter: i, isBundled: e.isBundled, adapter: s }, this._accelerateEngineConfig = { ...this._engineConfig, accelerateUtils: { resolveDatasourceUrl: Zt, getBatchRequestPayload: $t, prismaGraphQLToJSError: Kt, PrismaClientUnknownRequestError: G, PrismaClientInitializationError: I, PrismaClientKnownRequestError: J, debug: ee("prisma:client:accelerateEngine"), engineVersion: Po.version, clientVersion: e.clientVersion } }, Te("clientVersion", e.clientVersion), this._engine = Mi(e, this._engineConfig), this._requestHandler = new ur(this, i), u.log)
              for (let A of u.log) {
                let M = typeof A == "string" ? A : A.emit === "stdout" ? A.level : null;
                M && this.$on(M, (S) => {
                  st.log(`${st.tags[M] ?? ""}`, S.message || S.query);
                });
              }
            this._metrics = new qe(this._engine);
          } catch (u) {
            throw u.clientVersion = this._clientVersion, u;
          }
          return this._appliedParent = yt(this);
        }
        get [Symbol.toStringTag]() {
          return "PrismaClient";
        }
        $use(n) {
          this._middlewares.use(n);
        }
        $on(n, i) {
          n === "beforeExit" ? this._engine.onBeforeExit(i) : n && this._engineConfig.logEmitter.on(n, i);
        }
        $connect() {
          try {
            return this._engine.start();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          }
        }
        async $disconnect() {
          try {
            await this._engine.stop();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          } finally {
            Tn();
          }
        }
        $executeRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: Qr({ clientMethod: i, activeProvider: a }), callsite: Pe(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $executeRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) {
              let [s, a] = xo(n, i);
              return jr(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
            }
            throw new j("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
          });
        }
        $executeRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => (jr(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
        }
        $runCommandRaw(n) {
          if (e.activeProvider !== "mongodb")
            throw new j(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
          return this._createPrismaPromise((i) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: Ji, callsite: Pe(this._errorFormat), transaction: i }));
        }
        async $queryRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: Qr({ clientMethod: i, activeProvider: a }), callsite: Pe(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $queryRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0)
              return this.$queryRawInternal(o, "$queryRaw", ...xo(n, i));
            throw new j("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
          });
        }
        $queryRawTyped(n) {
          return this._createPrismaPromise((i) => {
            if (!this._hasPreviewFlag("typedSql"))
              throw new j("`typedSql` preview feature must be enabled in order to access $queryRawTyped API", { clientVersion: this._clientVersion });
            return this.$queryRawInternal(i, "$queryRawTyped", n);
          });
        }
        $queryRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
        }
        _transactionWithArray({ promises: n, options: i }) {
          let o = Wa.nextId(), s = io(n.length), a = n.map((u, y) => {
            if (u?.[Symbol.toStringTag] !== "PrismaPromise")
              throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
            let T = i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel, C = { kind: "batch", id: o, index: y, isolationLevel: T, lock: s };
            return u.requestTransaction?.(C) ?? u;
          });
          return Eo(a);
        }
        async _transactionWithCallback({ callback: n, options: i }) {
          let o = { traceparent: this._tracingHelper.getTraceParent() }, s = { maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait, timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout, isolationLevel: i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel }, a = await this._engine.transaction("start", o, s), u;
          try {
            let y = { kind: "itx", ...a };
            u = await n(this._createItxClient(y)), await this._engine.transaction("commit", o, a);
          } catch (y) {
            throw await this._engine.transaction("rollback", o, a).catch(() => {
            }), y;
          }
          return u;
        }
        _createItxClient(n) {
          return yt(me(li(this), [H("_appliedParent", () => this._appliedParent._createItxClient(n)), H("_createPrismaPromise", () => Jr(n)), H(Ga, () => n.id), $e(Yi)]));
        }
        $transaction(n, i) {
          let o;
          typeof n == "function" ? this._engineConfig.adapter?.adapterName === "@prisma/adapter-d1" ? o = () => {
            throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.");
          } : o = () => this._transactionWithCallback({ callback: n, options: i }) : o = () => this._transactionWithArray({ promises: n, options: i });
          let s = { name: "transaction", attributes: { method: "$transaction" } };
          return this._tracingHelper.runInChildSpan(s, o);
        }
        _request(n) {
          n.otelParentCtx = this._tracingHelper.getActiveContext();
          let i = n.middlewareArgsMapper ?? Ja, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }, s = { middleware: { name: "middleware", middleware: true, attributes: { method: "$use" }, active: false }, operation: { name: "operation", attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }, a = -1, u = async (y) => {
            let T = this._middlewares.get(++a);
            if (T)
              return this._tracingHelper.runInChildSpan(s.middleware, (L) => T(y, (ne) => (L?.end(), u(ne))));
            let { runInTransaction: C, args: O, ...A } = y, M = { ...n, ...A };
            O && (M.args = i.middlewareArgsToRequestArgs(O)), n.transaction !== void 0 && C === false && delete M.transaction;
            let S = await hi(this, M);
            return M.model ? pi({ result: S, modelName: M.model, args: M.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel, globalOmit: this._globalOmit }) : S;
          };
          return this._tracingHelper.runInChildSpan(s.operation, () => u(o));
        }
        async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: u, argsMapper: y, transaction: T, unpacker: C, otelParentCtx: O, customDataProxyFetch: A }) {
          try {
            n = y ? y(n) : n;
            let M = { name: "serialize" }, S = this._tracingHelper.runInChildSpan(M, () => Vi({ modelName: u, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion, previewFeatures: this._previewFeatures, globalOmit: this._globalOmit }));
            return ee.enabled("prisma:client") && (Te("Prisma Client call:"), Te(`prisma.${i}(${Yn(n)})`), Te("Generated request:"), Te(JSON.stringify(S, null, 2) + `
`)), T?.kind === "batch" && await T.lock, this._requestHandler.request({ protocolQuery: S, modelName: u, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: T, unpacker: C, otelParentCtx: O, otelChildCtx: this._tracingHelper.getActiveContext(), globalOmit: this._globalOmit, customDataProxyFetch: A });
          } catch (M) {
            throw M.clientVersion = this._clientVersion, M;
          }
        }
        get $metrics() {
          if (!this._hasPreviewFlag("metrics"))
            throw new j("`metrics` preview feature must be enabled in order to access metrics API", { clientVersion: this._clientVersion });
          return this._metrics;
        }
        _hasPreviewFlag(n) {
          return !!this._engineConfig.previewFeatures?.includes(n);
        }
        $applyPendingMigrations() {
          return this._engine.applyPendingMigrations();
        }
      }
      return t;
    }
    function xo(e, t) {
      return Ka(e) ? [new X(e, t), Zi] : [e, eo];
    }
    function Ka(e) {
      return Array.isArray(e) && Array.isArray(e.raw);
    }
    c();
    m();
    p();
    d();
    f();
    l();
    var Ha = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
    function To(e) {
      return new Proxy(e, { get(t, r) {
        if (r in t)
          return t[r];
        if (!Ha.has(r))
          throw new TypeError(`Invalid enum value: ${String(r)}`);
      } });
    }
    c();
    m();
    p();
    d();
    f();
    l();
    l();
  }
});

// ../../node_modules/.pnpm/@prisma+client@5.19.0_prisma@5.19.0/node_modules/.prisma/client/query_engine_bg.js
var require_query_engine_bg = __commonJS({
  "../../node_modules/.pnpm/@prisma+client@5.19.0_prisma@5.19.0/node_modules/.prisma/client/query_engine_bg.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var F = Object.defineProperty;
    var R = Object.getOwnPropertyDescriptor;
    var B = Object.getOwnPropertyNames;
    var U = Object.prototype.hasOwnProperty;
    var D = (n, t) => {
      for (var e in t)
        F(n, e, { get: t[e], enumerable: true });
    };
    var N = (n, t, e, o) => {
      if (t && typeof t == "object" || typeof t == "function")
        for (let _ of B(t))
          !U.call(n, _) && _ !== e && F(n, _, { get: () => t[_], enumerable: !(o = R(t, _)) || o.enumerable });
      return n;
    };
    var C = (n) => N(F({}, "__esModule", { value: true }), n);
    var Et = {};
    D(Et, { QueryEngine: () => Z, __wbg_String_88810dfeb4021902: () => Dn, __wbg_buffer_344d9b41efe96da7: () => Cn, __wbg_call_53fc3abd42e24ec8: () => gt, __wbg_call_669127b9d730c650: () => Zn, __wbg_crypto_58f13aa23ffcb166: () => Jn, __wbg_done_bc26bf4ada718266: () => rt, __wbg_entries_6d727b73ee02b7ce: () => At, __wbg_getRandomValues_504510b5564925af: () => Wn, __wbg_getTime_ed6ee333b702f8fc: () => an, __wbg_get_2aff440840bb6202: () => ct, __wbg_get_4a9aa5157afeb382: () => nt, __wbg_get_94990005bd6ca07c: () => Un, __wbg_getwithrefkey_5e6d9547403deab8: () => Rn, __wbg_globalThis_17eff828815f7d84: () => st, __wbg_global_46f939f6541643c5: () => ft, __wbg_has_cdf8b85f6e903c80: () => un, __wbg_instanceof_ArrayBuffer_c7cc317e5c29cc0d: () => Tt, __wbg_instanceof_Promise_cfbcc42300367513: () => dn, __wbg_instanceof_Uint8Array_19e6f142a5e7e1e1: () => ht, __wbg_isArray_38525be7442aa21e: () => bt, __wbg_isSafeInteger_c38b0a16d0c7cef7: () => lt, __wbg_iterator_7ee1a391d310f8e4: () => yn, __wbg_length_a5587d6cd79ab197: () => yt, __wbg_length_cace2e0b3ddc0502: () => pn, __wbg_msCrypto_abcb1295e768d1f2: () => Kn, __wbg_new0_ad75dd38f92424e2: () => fn, __wbg_new_08236689f0afb357: () => qn, __wbg_new_1b94180eeb48f2a2: () => In, __wbg_new_c728d68b8b34487e: () => kn, __wbg_new_d8a000788389a31e: () => $n, __wbg_new_feb65b865d980ae2: () => en, __wbg_newnoargs_ccdcae30fd002262: () => at, __wbg_newwithbyteoffsetandlength_2dc04d99088b15e3: () => Ln, __wbg_newwithlength_13b5319ab422dcf6: () => Xn, __wbg_next_15da6a3df9290720: () => _t, __wbg_next_1989a20442400aaa: () => et, __wbg_node_523d7bd03ef69fba: () => Hn, __wbg_now_28a6b413aca4a96a: () => xt, __wbg_now_4579335d3581594c: () => gn, __wbg_now_8ed1a4454e40ecd1: () => bn, __wbg_parse_3f0cb48976ca4123: () => sn, __wbg_process_5b786e71d465a513: () => Vn, __wbg_push_fd3233d09cf81821: () => Bn, __wbg_randomFillSync_a0d98aa11c81fe89: () => zn, __wbg_require_2784e593a4674877: () => Gn, __wbg_resolve_a3252b2860f0a09e: () => kt, __wbg_self_3fad056edded10bd: () => it, __wbg_setTimeout_631fe61f31fa2fad: () => rn, __wbg_set_0ac78a2bc07da03c: () => Fn, __wbg_set_3355b9f2d3092e3b: () => vn, __wbg_set_40f7786a25a9cc7e: () => dt, __wbg_set_841ac57cff3d672b: () => Mn, __wbg_set_dcfd613a3420f908: () => pt, __wbg_set_wasm: () => L, __wbg_stringify_4039297315a25b00: () => wt, __wbg_subarray_6ca5cfa7fbb9abbe: () => Pn, __wbg_then_1bbc9edafd859b06: () => It, __wbg_then_89e1c559530b85cf: () => Ft, __wbg_valueOf_ff4b62641803432a: () => tt, __wbg_value_0570714ff7d75f35: () => ot, __wbg_versions_c2ab80650590b6a2: () => Qn, __wbg_window_a4f46c98a61d4089: () => ut, __wbindgen_bigint_from_i64: () => Tn, __wbindgen_bigint_from_u64: () => Sn, __wbindgen_bigint_get_as_i64: () => St, __wbindgen_boolean_get: () => xn, __wbindgen_cb_drop: () => qt, __wbindgen_closure_wrapper6816: () => vt, __wbindgen_debug_string: () => jt, __wbindgen_error_new: () => tn, __wbindgen_in: () => An, __wbindgen_is_bigint: () => mn, __wbindgen_is_function: () => Yn, __wbindgen_is_object: () => ln, __wbindgen_is_string: () => En, __wbindgen_is_undefined: () => cn, __wbindgen_jsval_eq: () => jn, __wbindgen_jsval_loose_eq: () => mt, __wbindgen_memory: () => Nn, __wbindgen_number_get: () => hn, __wbindgen_number_new: () => On, __wbindgen_object_clone_ref: () => _n, __wbindgen_object_drop_ref: () => wn, __wbindgen_string_get: () => nn, __wbindgen_string_new: () => on, __wbindgen_throw: () => Ot, debug_panic: () => K, getBuildTimeInfo: () => G });
    module.exports = C(Et);
    var h = () => {
    };
    h.prototype = h;
    var c;
    function L(n) {
      c = n;
    }
    var w = new Array(128).fill(void 0);
    w.push(void 0, null, true, false);
    function r(n) {
      return w[n];
    }
    var a = 0;
    var T = null;
    function A() {
      return (T === null || T.byteLength === 0) && (T = new Uint8Array(c.memory.buffer)), T;
    }
    var $2 = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
    var S = new $2("utf-8");
    var z = typeof S.encodeInto == "function" ? function(n, t) {
      return S.encodeInto(n, t);
    } : function(n, t) {
      const e = S.encode(n);
      return t.set(e), { read: n.length, written: e.length };
    };
    function l(n, t, e) {
      if (e === void 0) {
        const s = S.encode(n), p = t(s.length, 1) >>> 0;
        return A().subarray(p, p + s.length).set(s), a = s.length, p;
      }
      let o = n.length, _ = t(o, 1) >>> 0;
      const f = A();
      let u = 0;
      for (; u < o; u++) {
        const s = n.charCodeAt(u);
        if (s > 127)
          break;
        f[_ + u] = s;
      }
      if (u !== o) {
        u !== 0 && (n = n.slice(u)), _ = e(_, o, o = u + n.length * 3, 1) >>> 0;
        const s = A().subarray(_ + u, _ + o), p = z(n, s);
        u += p.written, _ = e(_, o, u, 1) >>> 0;
      }
      return a = u, _;
    }
    function y(n) {
      return n == null;
    }
    var j = null;
    function d() {
      return (j === null || j.byteLength === 0) && (j = new Int32Array(c.memory.buffer)), j;
    }
    var P = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
    var k = new P("utf-8", { ignoreBOM: true, fatal: true });
    k.decode();
    function x(n, t) {
      return n = n >>> 0, k.decode(A().subarray(n, n + t));
    }
    var m = w.length;
    function i(n) {
      m === w.length && w.push(w.length + 1);
      const t = m;
      return m = w[t], w[t] = n, t;
    }
    function W(n) {
      n < 132 || (w[n] = m, m = n);
    }
    function b(n) {
      const t = r(n);
      return W(n), t;
    }
    var O = null;
    function J() {
      return (O === null || O.byteLength === 0) && (O = new Float64Array(c.memory.buffer)), O;
    }
    var q = null;
    function V() {
      return (q === null || q.byteLength === 0) && (q = new BigInt64Array(c.memory.buffer)), q;
    }
    function I(n) {
      const t = typeof n;
      if (t == "number" || t == "boolean" || n == null)
        return `${n}`;
      if (t == "string")
        return `"${n}"`;
      if (t == "symbol") {
        const _ = n.description;
        return _ == null ? "Symbol" : `Symbol(${_})`;
      }
      if (t == "function") {
        const _ = n.name;
        return typeof _ == "string" && _.length > 0 ? `Function(${_})` : "Function";
      }
      if (Array.isArray(n)) {
        const _ = n.length;
        let f = "[";
        _ > 0 && (f += I(n[0]));
        for (let u = 1; u < _; u++)
          f += ", " + I(n[u]);
        return f += "]", f;
      }
      const e = /\[object ([^\]]+)\]/.exec(toString.call(n));
      let o;
      if (e.length > 1)
        o = e[1];
      else
        return toString.call(n);
      if (o == "Object")
        try {
          return "Object(" + JSON.stringify(n) + ")";
        } catch {
          return "Object";
        }
      return n instanceof Error ? `${n.name}: ${n.message}
${n.stack}` : o;
    }
    var v = typeof FinalizationRegistry > "u" ? { register: () => {
    }, unregister: () => {
    } } : new FinalizationRegistry((n) => {
      c.__wbindgen_export_2.get(n.dtor)(n.a, n.b);
    });
    function Q(n, t, e, o) {
      const _ = { a: n, b: t, cnt: 1, dtor: e }, f = (...u) => {
        _.cnt++;
        const s = _.a;
        _.a = 0;
        try {
          return o(s, _.b, ...u);
        } finally {
          --_.cnt === 0 ? (c.__wbindgen_export_2.get(_.dtor)(s, _.b), v.unregister(_)) : _.a = s;
        }
      };
      return f.original = _, v.register(f, _, _), f;
    }
    function H(n, t, e) {
      c._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h1d1ce90a2538b281(n, t, i(e));
    }
    function G() {
      const n = c.getBuildTimeInfo();
      return b(n);
    }
    function K(n) {
      try {
        const f = c.__wbindgen_add_to_stack_pointer(-16);
        var t = y(n) ? 0 : l(n, c.__wbindgen_malloc, c.__wbindgen_realloc), e = a;
        c.debug_panic(f, t, e);
        var o = d()[f / 4 + 0], _ = d()[f / 4 + 1];
        if (_)
          throw b(o);
      } finally {
        c.__wbindgen_add_to_stack_pointer(16);
      }
    }
    function g(n, t) {
      try {
        return n.apply(this, t);
      } catch (e) {
        c.__wbindgen_exn_store(i(e));
      }
    }
    function X(n, t, e, o) {
      c.wasm_bindgen__convert__closures__invoke2_mut__h46a92896c95d64ae(n, t, i(e), i(o));
    }
    var Y = typeof FinalizationRegistry > "u" ? { register: () => {
    }, unregister: () => {
    } } : new FinalizationRegistry((n) => c.__wbg_queryengine_free(n >>> 0));
    var Z = class {
      __destroy_into_raw() {
        const t = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Y.unregister(this), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        c.__wbg_queryengine_free(t);
      }
      constructor(t, e, o) {
        try {
          const s = c.__wbindgen_add_to_stack_pointer(-16);
          c.queryengine_new(s, i(t), i(e), i(o));
          var _ = d()[s / 4 + 0], f = d()[s / 4 + 1], u = d()[s / 4 + 2];
          if (u)
            throw b(f);
          return this.__wbg_ptr = _ >>> 0, this;
        } finally {
          c.__wbindgen_add_to_stack_pointer(16);
        }
      }
      connect(t) {
        const e = l(t, c.__wbindgen_malloc, c.__wbindgen_realloc), o = a, _ = c.queryengine_connect(this.__wbg_ptr, e, o);
        return b(_);
      }
      disconnect(t) {
        const e = l(t, c.__wbindgen_malloc, c.__wbindgen_realloc), o = a, _ = c.queryengine_disconnect(this.__wbg_ptr, e, o);
        return b(_);
      }
      query(t, e, o) {
        const _ = l(t, c.__wbindgen_malloc, c.__wbindgen_realloc), f = a, u = l(e, c.__wbindgen_malloc, c.__wbindgen_realloc), s = a;
        var p = y(o) ? 0 : l(o, c.__wbindgen_malloc, c.__wbindgen_realloc), E = a;
        const M = c.queryengine_query(this.__wbg_ptr, _, f, u, s, p, E);
        return b(M);
      }
      startTransaction(t, e) {
        const o = l(t, c.__wbindgen_malloc, c.__wbindgen_realloc), _ = a, f = l(e, c.__wbindgen_malloc, c.__wbindgen_realloc), u = a, s = c.queryengine_startTransaction(this.__wbg_ptr, o, _, f, u);
        return b(s);
      }
      commitTransaction(t, e) {
        const o = l(t, c.__wbindgen_malloc, c.__wbindgen_realloc), _ = a, f = l(e, c.__wbindgen_malloc, c.__wbindgen_realloc), u = a, s = c.queryengine_commitTransaction(this.__wbg_ptr, o, _, f, u);
        return b(s);
      }
      rollbackTransaction(t, e) {
        const o = l(t, c.__wbindgen_malloc, c.__wbindgen_realloc), _ = a, f = l(e, c.__wbindgen_malloc, c.__wbindgen_realloc), u = a, s = c.queryengine_rollbackTransaction(this.__wbg_ptr, o, _, f, u);
        return b(s);
      }
      metrics(t) {
        const e = l(t, c.__wbindgen_malloc, c.__wbindgen_realloc), o = a, _ = c.queryengine_metrics(this.__wbg_ptr, e, o);
        return b(_);
      }
    };
    function nn(n, t) {
      const e = r(t), o = typeof e == "string" ? e : void 0;
      var _ = y(o) ? 0 : l(o, c.__wbindgen_malloc, c.__wbindgen_realloc), f = a;
      d()[n / 4 + 1] = f, d()[n / 4 + 0] = _;
    }
    function tn(n, t) {
      const e = new Error(x(n, t));
      return i(e);
    }
    function en(n, t) {
      try {
        var e = { a: n, b: t }, o = (f, u) => {
          const s = e.a;
          e.a = 0;
          try {
            return X(s, e.b, f, u);
          } finally {
            e.a = s;
          }
        };
        const _ = new Promise(o);
        return i(_);
      } finally {
        e.a = e.b = 0;
      }
    }
    function rn(n, t) {
      return setTimeout(r(n), t >>> 0);
    }
    function on(n, t) {
      const e = x(n, t);
      return i(e);
    }
    function _n(n) {
      const t = r(n);
      return i(t);
    }
    function cn(n) {
      return r(n) === void 0;
    }
    function un() {
      return g(function(n, t) {
        return Reflect.has(r(n), r(t));
      }, arguments);
    }
    function sn() {
      return g(function(n, t) {
        const e = JSON.parse(x(n, t));
        return i(e);
      }, arguments);
    }
    function fn() {
      return i(/* @__PURE__ */ new Date());
    }
    function an(n) {
      return r(n).getTime();
    }
    function bn(n) {
      return r(n).now();
    }
    function gn() {
      return Date.now();
    }
    function ln(n) {
      const t = r(n);
      return typeof t == "object" && t !== null;
    }
    function dn(n) {
      let t;
      try {
        t = r(n) instanceof Promise;
      } catch {
        t = false;
      }
      return t;
    }
    function wn(n) {
      b(n);
    }
    function pn(n) {
      return r(n).length;
    }
    function yn() {
      return i(Symbol.iterator);
    }
    function xn(n) {
      const t = r(n);
      return typeof t == "boolean" ? t ? 1 : 0 : 2;
    }
    function mn(n) {
      return typeof r(n) == "bigint";
    }
    function hn(n, t) {
      const e = r(t), o = typeof e == "number" ? e : void 0;
      J()[n / 8 + 1] = y(o) ? 0 : o, d()[n / 4 + 0] = !y(o);
    }
    function Tn(n) {
      return i(n);
    }
    function An(n, t) {
      return r(n) in r(t);
    }
    function Sn(n) {
      const t = BigInt.asUintN(64, n);
      return i(t);
    }
    function jn(n, t) {
      return r(n) === r(t);
    }
    function On(n) {
      return i(n);
    }
    function qn() {
      const n = new Array();
      return i(n);
    }
    function Fn(n, t, e) {
      r(n)[t >>> 0] = b(e);
    }
    function In() {
      return i(/* @__PURE__ */ new Map());
    }
    function kn() {
      const n = new Object();
      return i(n);
    }
    function vn(n, t, e) {
      const o = r(n).set(r(t), r(e));
      return i(o);
    }
    function En(n) {
      return typeof r(n) == "string";
    }
    function Mn(n, t, e) {
      r(n)[b(t)] = b(e);
    }
    function Rn(n, t) {
      const e = r(n)[r(t)];
      return i(e);
    }
    function Bn(n, t) {
      return r(n).push(r(t));
    }
    function Un() {
      return g(function(n, t) {
        const e = r(n)[b(t)];
        return i(e);
      }, arguments);
    }
    function Dn(n, t) {
      const e = String(r(t)), o = l(e, c.__wbindgen_malloc, c.__wbindgen_realloc), _ = a;
      d()[n / 4 + 1] = _, d()[n / 4 + 0] = o;
    }
    function Nn() {
      const n = c.memory;
      return i(n);
    }
    function Cn(n) {
      const t = r(n).buffer;
      return i(t);
    }
    function Ln(n, t, e) {
      const o = new Uint8Array(r(n), t >>> 0, e >>> 0);
      return i(o);
    }
    function $n(n) {
      const t = new Uint8Array(r(n));
      return i(t);
    }
    function zn() {
      return g(function(n, t) {
        r(n).randomFillSync(b(t));
      }, arguments);
    }
    function Pn(n, t, e) {
      const o = r(n).subarray(t >>> 0, e >>> 0);
      return i(o);
    }
    function Wn() {
      return g(function(n, t) {
        r(n).getRandomValues(r(t));
      }, arguments);
    }
    function Jn(n) {
      const t = r(n).crypto;
      return i(t);
    }
    function Vn(n) {
      const t = r(n).process;
      return i(t);
    }
    function Qn(n) {
      const t = r(n).versions;
      return i(t);
    }
    function Hn(n) {
      const t = r(n).node;
      return i(t);
    }
    function Gn() {
      return g(function() {
        const n = module.require;
        return i(n);
      }, arguments);
    }
    function Kn(n) {
      const t = r(n).msCrypto;
      return i(t);
    }
    function Xn(n) {
      const t = new Uint8Array(n >>> 0);
      return i(t);
    }
    function Yn(n) {
      return typeof r(n) == "function";
    }
    function Zn() {
      return g(function(n, t) {
        const e = r(n).call(r(t));
        return i(e);
      }, arguments);
    }
    function nt(n, t) {
      const e = r(n)[t >>> 0];
      return i(e);
    }
    function tt(n) {
      return r(n).valueOf();
    }
    function et() {
      return g(function(n) {
        const t = r(n).next();
        return i(t);
      }, arguments);
    }
    function rt(n) {
      return r(n).done;
    }
    function ot(n) {
      const t = r(n).value;
      return i(t);
    }
    function _t(n) {
      const t = r(n).next;
      return i(t);
    }
    function ct() {
      return g(function(n, t) {
        const e = Reflect.get(r(n), r(t));
        return i(e);
      }, arguments);
    }
    function it() {
      return g(function() {
        const n = self.self;
        return i(n);
      }, arguments);
    }
    function ut() {
      return g(function() {
        const n = window.window;
        return i(n);
      }, arguments);
    }
    function st() {
      return g(function() {
        const n = globalThis.globalThis;
        return i(n);
      }, arguments);
    }
    function ft() {
      return g(function() {
        const n = global.global;
        return i(n);
      }, arguments);
    }
    function at(n, t) {
      const e = new h(x(n, t));
      return i(e);
    }
    function bt(n) {
      return Array.isArray(r(n));
    }
    function gt() {
      return g(function(n, t, e) {
        const o = r(n).call(r(t), r(e));
        return i(o);
      }, arguments);
    }
    function lt(n) {
      return Number.isSafeInteger(r(n));
    }
    function dt() {
      return g(function(n, t, e) {
        return Reflect.set(r(n), r(t), r(e));
      }, arguments);
    }
    function wt() {
      return g(function(n) {
        const t = JSON.stringify(r(n));
        return i(t);
      }, arguments);
    }
    function pt(n, t, e) {
      r(n).set(r(t), e >>> 0);
    }
    function yt(n) {
      return r(n).length;
    }
    function xt() {
      return g(function() {
        return Date.now();
      }, arguments);
    }
    function mt(n, t) {
      return r(n) == r(t);
    }
    function ht(n) {
      let t;
      try {
        t = r(n) instanceof Uint8Array;
      } catch {
        t = false;
      }
      return t;
    }
    function Tt(n) {
      let t;
      try {
        t = r(n) instanceof ArrayBuffer;
      } catch {
        t = false;
      }
      return t;
    }
    function At(n) {
      const t = Object.entries(r(n));
      return i(t);
    }
    function St(n, t) {
      const e = r(t), o = typeof e == "bigint" ? e : void 0;
      V()[n / 8 + 1] = y(o) ? BigInt(0) : o, d()[n / 4 + 0] = !y(o);
    }
    function jt(n, t) {
      const e = I(r(t)), o = l(e, c.__wbindgen_malloc, c.__wbindgen_realloc), _ = a;
      d()[n / 4 + 1] = _, d()[n / 4 + 0] = o;
    }
    function Ot(n, t) {
      throw new Error(x(n, t));
    }
    function qt(n) {
      const t = b(n).original;
      return t.cnt-- == 1 ? (t.a = 0, true) : false;
    }
    function Ft(n, t) {
      const e = r(n).then(r(t));
      return i(e);
    }
    function It(n, t, e) {
      const o = r(n).then(r(t), r(e));
      return i(o);
    }
    function kt(n) {
      const t = Promise.resolve(r(n));
      return i(t);
    }
    function vt(n, t, e) {
      const o = Q(n, t, 315, H);
      return i(o);
    }
  }
});

// ../../node_modules/.pnpm/@prisma+client@5.19.0_prisma@5.19.0/node_modules/.prisma/client/wasm-worker-loader.mjs
var wasm_worker_loader_exports = {};
__export(wasm_worker_loader_exports, {
  default: () => wasm_worker_loader_default
});
var wasm_worker_loader_default;
var init_wasm_worker_loader = __esm({
  "../../node_modules/.pnpm/@prisma+client@5.19.0_prisma@5.19.0/node_modules/.prisma/client/wasm-worker-loader.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    wasm_worker_loader_default = import("./2cf75519f51dc8b1fbd22a355ca4dbd7b87e8c07-query_engine_bg.wasm");
  }
});

// ../../node_modules/.pnpm/@prisma+client@5.19.0_prisma@5.19.0/node_modules/.prisma/client/wasm.js
var require_wasm2 = __commonJS({
  "../../node_modules/.pnpm/@prisma+client@5.19.0_prisma@5.19.0/node_modules/.prisma/client/wasm.js"(exports) {
    init_checked_fetch();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var {
      PrismaClientKnownRequestError: PrismaClientKnownRequestError2,
      PrismaClientUnknownRequestError: PrismaClientUnknownRequestError2,
      PrismaClientRustPanicError: PrismaClientRustPanicError2,
      PrismaClientInitializationError: PrismaClientInitializationError2,
      PrismaClientValidationError: PrismaClientValidationError2,
      NotFoundError: NotFoundError2,
      getPrismaClient: getPrismaClient2,
      sqltag: sqltag2,
      empty: empty2,
      join: join2,
      raw: raw2,
      Decimal: Decimal2,
      Debug: Debug3,
      objectEnumValues: objectEnumValues2,
      makeStrictEnum: makeStrictEnum2,
      Extensions: Extensions2,
      warnOnce: warnOnce2,
      defineDmmfProperty: defineDmmfProperty2,
      Public: Public2,
      getRuntime: getRuntime2
    } = require_wasm();
    var Prisma = {};
    exports.Prisma = Prisma;
    exports.$Enums = {};
    Prisma.prismaVersion = {
      client: "5.19.0",
      engine: "5fe21811a6ba0b952a3bc71400666511fe3b902f"
    };
    Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError2;
    Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError2;
    Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError2;
    Prisma.PrismaClientInitializationError = PrismaClientInitializationError2;
    Prisma.PrismaClientValidationError = PrismaClientValidationError2;
    Prisma.NotFoundError = NotFoundError2;
    Prisma.Decimal = Decimal2;
    Prisma.sql = sqltag2;
    Prisma.empty = empty2;
    Prisma.join = join2;
    Prisma.raw = raw2;
    Prisma.validator = Public2.validator;
    Prisma.getExtensionContext = Extensions2.getExtensionContext;
    Prisma.defineExtension = Extensions2.defineExtension;
    Prisma.DbNull = objectEnumValues2.instances.DbNull;
    Prisma.JsonNull = objectEnumValues2.instances.JsonNull;
    Prisma.AnyNull = objectEnumValues2.instances.AnyNull;
    Prisma.NullTypes = {
      DbNull: objectEnumValues2.classes.DbNull,
      JsonNull: objectEnumValues2.classes.JsonNull,
      AnyNull: objectEnumValues2.classes.AnyNull
    };
    exports.Prisma.TransactionIsolationLevel = makeStrictEnum2({
      Serializable: "Serializable"
    });
    exports.Prisma.UserScalarFieldEnum = {
      id: "id",
      email: "email",
      name: "name"
    };
    exports.Prisma.SortOrder = {
      asc: "asc",
      desc: "desc"
    };
    exports.Prisma.NullsOrder = {
      first: "first",
      last: "last"
    };
    exports.Prisma.ModelName = {
      User: "User"
    };
    var config = {
      "generator": {
        "name": "client",
        "provider": {
          "fromEnvVar": null,
          "value": "prisma-client-js"
        },
        "output": {
          "value": "D:\\www\\cloudflare_system\\node_modules\\.pnpm\\@prisma+client@5.19.0_prisma@5.19.0\\node_modules\\@prisma\\client",
          "fromEnvVar": null
        },
        "config": {
          "engineType": "library"
        },
        "binaryTargets": [
          {
            "fromEnvVar": null,
            "value": "windows",
            "native": true
          }
        ],
        "previewFeatures": [
          "driverAdapters"
        ],
        "sourceFilePath": "D:\\www\\cloudflare_system\\packages\\workers\\prisma\\schema.prisma"
      },
      "relativeEnvPaths": {
        "rootEnvPath": null
      },
      "relativePath": "../../../../../../packages/workers/prisma",
      "clientVersion": "5.19.0",
      "engineVersion": "5fe21811a6ba0b952a3bc71400666511fe3b902f",
      "datasourceNames": [
        "db"
      ],
      "activeProvider": "sqlite",
      "inlineDatasources": {
        "db": {
          "url": {
            "fromEnvVar": null,
            "value": "file:./dev.db"
          }
        }
      },
      "inlineSchema": 'generator client {\n  provider        = "prisma-client-js"\n  previewFeatures = ["driverAdapters"]\n}\n\ndatasource db {\n  provider = "sqlite"\n  url      = "file:./dev.db"\n}\n\nmodel User {\n  id    Int     @id @default(autoincrement())\n  email String  @unique\n  name  String?\n}\n',
      "inlineSchemaHash": "09d2fe2da2a224ac979d7d6c0a16848463f11ffe1df335b4db19572843c81d7d",
      "copyEngine": true
    };
    config.dirname = "/";
    config.runtimeDataModel = JSON.parse('{"models":{"User":{"fields":[{"name":"id","kind":"scalar","type":"Int"},{"name":"email","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"}],"dbName":null}},"enums":{},"types":{}}');
    defineDmmfProperty2(exports.Prisma, config.runtimeDataModel);
    config.engineWasm = {
      getRuntime: () => require_query_engine_bg(),
      getQueryEngineWasmModule: async () => {
        const loader = (await Promise.resolve().then(() => (init_wasm_worker_loader(), wasm_worker_loader_exports))).default;
        const engine = (await loader).default;
        return engine;
      }
    };
    config.injectableEdgeEnv = () => ({
      parsed: {}
    });
    if (typeof globalThis !== "undefined" && globalThis["DEBUG"] || typeof process !== "undefined" && process.env && process.env.DEBUG || void 0) {
      Debug3.enable(typeof globalThis !== "undefined" && globalThis["DEBUG"] || typeof process !== "undefined" && process.env && process.env.DEBUG || void 0);
    }
    var PrismaClient2 = getPrismaClient2(config);
    exports.PrismaClient = PrismaClient2;
    Object.assign(exports, Prisma);
  }
});

// ../../node_modules/.pnpm/@prisma+client@5.19.0_prisma@5.19.0/node_modules/.prisma/client/default.js
var require_default = __commonJS({
  "../../node_modules/.pnpm/@prisma+client@5.19.0_prisma@5.19.0/node_modules/.prisma/client/default.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    module.exports = { ...require_wasm2() };
  }
});

// ../../node_modules/.pnpm/@prisma+client@5.19.0_prisma@5.19.0/node_modules/@prisma/client/default.js
var require_default2 = __commonJS({
  "../../node_modules/.pnpm/@prisma+client@5.19.0_prisma@5.19.0/node_modules/@prisma/client/default.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    module.exports = {
      ...require_default()
    };
  }
});

// ../../node_modules/.pnpm/@prisma+debug@5.19.0/node_modules/@prisma/debug/dist/index.js
var require_dist = __commonJS({
  "../../node_modules/.pnpm/@prisma+debug@5.19.0/node_modules/@prisma/debug/dist/index.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name2 in all)
        __defProp2(target, name2, { get: all[name2], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      Debug: () => Debug3,
      clearLogs: () => clearLogs,
      default: () => src_default,
      getLogs: () => getLogs
    });
    module.exports = __toCommonJS(src_exports);
    var colors_exports = {};
    __export2(colors_exports, {
      $: () => $2,
      bgBlack: () => bgBlack2,
      bgBlue: () => bgBlue2,
      bgCyan: () => bgCyan2,
      bgGreen: () => bgGreen2,
      bgMagenta: () => bgMagenta2,
      bgRed: () => bgRed2,
      bgWhite: () => bgWhite2,
      bgYellow: () => bgYellow2,
      black: () => black2,
      blue: () => blue2,
      bold: () => bold2,
      cyan: () => cyan2,
      dim: () => dim2,
      gray: () => gray2,
      green: () => green2,
      grey: () => grey2,
      hidden: () => hidden2,
      inverse: () => inverse2,
      italic: () => italic2,
      magenta: () => magenta2,
      red: () => red2,
      reset: () => reset2,
      strikethrough: () => strikethrough2,
      underline: () => underline2,
      white: () => white2,
      yellow: () => yellow2
    });
    var FORCE_COLOR2;
    var NODE_DISABLE_COLORS2;
    var NO_COLOR2;
    var TERM2;
    var isTTY2 = true;
    if (typeof process !== "undefined") {
      ({ FORCE_COLOR: FORCE_COLOR2, NODE_DISABLE_COLORS: NODE_DISABLE_COLORS2, NO_COLOR: NO_COLOR2, TERM: TERM2 } = process.env || {});
      isTTY2 = process.stdout && process.stdout.isTTY;
    }
    var $2 = {
      enabled: !NODE_DISABLE_COLORS2 && NO_COLOR2 == null && TERM2 !== "dumb" && (FORCE_COLOR2 != null && FORCE_COLOR2 !== "0" || isTTY2)
    };
    function init2(x, y) {
      let rgx = new RegExp(`\\x1b\\[${y}m`, "g");
      let open = `\x1B[${x}m`, close = `\x1B[${y}m`;
      return function(txt) {
        if (!$2.enabled || txt == null)
          return txt;
        return open + (!!~("" + txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
      };
    }
    var reset2 = init2(0, 0);
    var bold2 = init2(1, 22);
    var dim2 = init2(2, 22);
    var italic2 = init2(3, 23);
    var underline2 = init2(4, 24);
    var inverse2 = init2(7, 27);
    var hidden2 = init2(8, 28);
    var strikethrough2 = init2(9, 29);
    var black2 = init2(30, 39);
    var red2 = init2(31, 39);
    var green2 = init2(32, 39);
    var yellow2 = init2(33, 39);
    var blue2 = init2(34, 39);
    var magenta2 = init2(35, 39);
    var cyan2 = init2(36, 39);
    var white2 = init2(37, 39);
    var gray2 = init2(90, 39);
    var grey2 = init2(90, 39);
    var bgBlack2 = init2(40, 49);
    var bgRed2 = init2(41, 49);
    var bgGreen2 = init2(42, 49);
    var bgYellow2 = init2(43, 49);
    var bgBlue2 = init2(44, 49);
    var bgMagenta2 = init2(45, 49);
    var bgCyan2 = init2(46, 49);
    var bgWhite2 = init2(47, 49);
    var MAX_ARGS_HISTORY = 100;
    var COLORS = ["green", "yellow", "blue", "magenta", "cyan", "red"];
    var argsHistory = [];
    var lastTimestamp = Date.now();
    var lastColor = 0;
    var processEnv = typeof process !== "undefined" ? process.env : {};
    globalThis.DEBUG ??= processEnv.DEBUG ?? "";
    globalThis.DEBUG_COLORS ??= processEnv.DEBUG_COLORS ? processEnv.DEBUG_COLORS === "true" : true;
    var topProps = {
      enable(namespace) {
        if (typeof namespace === "string") {
          globalThis.DEBUG = namespace;
        }
      },
      disable() {
        const prev = globalThis.DEBUG;
        globalThis.DEBUG = "";
        return prev;
      },
      // this is the core logic to check if logging should happen or not
      enabled(namespace) {
        const listenedNamespaces = globalThis.DEBUG.split(",").map((s) => {
          return s.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
        });
        const isListened = listenedNamespaces.some((listenedNamespace) => {
          if (listenedNamespace === "" || listenedNamespace[0] === "-")
            return false;
          return namespace.match(RegExp(listenedNamespace.split("*").join(".*") + "$"));
        });
        const isExcluded = listenedNamespaces.some((listenedNamespace) => {
          if (listenedNamespace === "" || listenedNamespace[0] !== "-")
            return false;
          return namespace.match(RegExp(listenedNamespace.slice(1).split("*").join(".*") + "$"));
        });
        return isListened && !isExcluded;
      },
      log: (...args) => {
        const [namespace, format, ...rest] = args;
        const logWithFormatting = console.warn ?? console.log;
        logWithFormatting(`${namespace} ${format}`, ...rest);
      },
      formatters: {}
      // not implemented
    };
    function debugCreate(namespace) {
      const instanceProps = {
        color: COLORS[lastColor++ % COLORS.length],
        enabled: topProps.enabled(namespace),
        namespace,
        log: topProps.log,
        extend: () => {
        }
        // not implemented
      };
      const debugCall = (...args) => {
        const { enabled, namespace: namespace2, color, log } = instanceProps;
        if (args.length !== 0) {
          argsHistory.push([namespace2, ...args]);
        }
        if (argsHistory.length > MAX_ARGS_HISTORY) {
          argsHistory.shift();
        }
        if (topProps.enabled(namespace2) || enabled) {
          const stringArgs = args.map((arg) => {
            if (typeof arg === "string") {
              return arg;
            }
            return safeStringify(arg);
          });
          const ms = `+${Date.now() - lastTimestamp}ms`;
          lastTimestamp = Date.now();
          if (globalThis.DEBUG_COLORS) {
            log(colors_exports[color](bold2(namespace2)), ...stringArgs, colors_exports[color](ms));
          } else {
            log(namespace2, ...stringArgs, ms);
          }
        }
      };
      return new Proxy(debugCall, {
        get: (_, prop) => instanceProps[prop],
        set: (_, prop, value) => instanceProps[prop] = value
      });
    }
    var Debug3 = new Proxy(debugCreate, {
      get: (_, prop) => topProps[prop],
      set: (_, prop, value) => topProps[prop] = value
    });
    function safeStringify(value, indent = 2) {
      const cache = /* @__PURE__ */ new Set();
      return JSON.stringify(
        value,
        (key, value2) => {
          if (typeof value2 === "object" && value2 !== null) {
            if (cache.has(value2)) {
              return `[Circular *]`;
            }
            cache.add(value2);
          } else if (typeof value2 === "bigint") {
            return value2.toString();
          }
          return value2;
        },
        indent
      );
    }
    function getLogs(numChars = 7500) {
      const logs = argsHistory.map(([namespace, ...args]) => {
        return `${namespace} ${args.map((arg) => {
          if (typeof arg === "string") {
            return arg;
          } else {
            return JSON.stringify(arg);
          }
        }).join(" ")}`;
      }).join("\n");
      if (logs.length < numChars) {
        return logs;
      }
      return logs.slice(-numChars);
    }
    function clearLogs() {
      argsHistory.length = 0;
    }
    var src_default = Debug3;
  }
});

// .wrangler/tmp/bundle-4UKG5N/middleware-loader.entry.ts
init_checked_fetch();
init_modules_watch_stub();

// .wrangler/tmp/bundle-4UKG5N/middleware-insertion-facade.js
init_checked_fetch();
init_modules_watch_stub();

// index.ts
init_checked_fetch();
init_modules_watch_stub();
var import_client = __toESM(require_default2());

// ../../node_modules/.pnpm/@prisma+adapter-d1@5.19.0/node_modules/@prisma/adapter-d1/dist/index.mjs
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/@prisma+driver-adapter-utils@5.19.0/node_modules/@prisma/driver-adapter-utils/dist/index.mjs
init_checked_fetch();
init_modules_watch_stub();
var import_debug = __toESM(require_dist(), 1);
function ok(value) {
  return {
    ok: true,
    value,
    map(fn) {
      return ok(fn(value));
    },
    flatMap(fn) {
      return fn(value);
    }
  };
}
function err(error) {
  return {
    ok: false,
    error,
    map() {
      return err(error);
    },
    flatMap() {
      return err(error);
    }
  };
}
var ColumnTypeEnum = {
  // Scalars
  Int32: 0,
  Int64: 1,
  Float: 2,
  Double: 3,
  Numeric: 4,
  Boolean: 5,
  Character: 6,
  Text: 7,
  Date: 8,
  Time: 9,
  DateTime: 10,
  Json: 11,
  Enum: 12,
  Bytes: 13,
  Set: 14,
  Uuid: 15,
  // Arrays
  Int32Array: 64,
  Int64Array: 65,
  FloatArray: 66,
  DoubleArray: 67,
  NumericArray: 68,
  BooleanArray: 69,
  CharacterArray: 70,
  TextArray: 71,
  DateArray: 72,
  TimeArray: 73,
  DateTimeArray: 74,
  JsonArray: 75,
  EnumArray: 76,
  BytesArray: 77,
  UuidArray: 78,
  // Custom
  UnknownNumber: 128
};

// ../../node_modules/.pnpm/@prisma+adapter-d1@5.19.0/node_modules/@prisma/adapter-d1/dist/index.mjs
var FORCE_COLOR;
var NODE_DISABLE_COLORS;
var NO_COLOR;
var TERM;
var isTTY = true;
if (typeof process !== "undefined") {
  ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});
  isTTY = process.stdout && process.stdout.isTTY;
}
var $ = {
  enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY)
};
function init(x, y) {
  let rgx = new RegExp(`\\x1b\\[${y}m`, "g");
  let open = `\x1B[${x}m`, close = `\x1B[${y}m`;
  return function(txt) {
    if (!$.enabled || txt == null)
      return txt;
    return open + (!!~("" + txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
  };
}
var reset = init(0, 0);
var bold = init(1, 22);
var dim = init(2, 22);
var italic = init(3, 23);
var underline = init(4, 24);
var inverse = init(7, 27);
var hidden = init(8, 28);
var strikethrough = init(9, 29);
var black = init(30, 39);
var red = init(31, 39);
var green = init(32, 39);
var yellow = init(33, 39);
var blue = init(34, 39);
var magenta = init(35, 39);
var cyan = init(36, 39);
var white = init(37, 39);
var gray = init(90, 39);
var grey = init(90, 39);
var bgBlack = init(40, 49);
var bgRed = init(41, 49);
var bgGreen = init(42, 49);
var bgYellow = init(43, 49);
var bgBlue = init(44, 49);
var bgMagenta = init(45, 49);
var bgCyan = init(46, 49);
var bgWhite = init(47, 49);
var name = "@prisma/adapter-d1";
function getColumnTypes(columnNames, rows) {
  const columnTypes = [];
  columnLoop:
    for (let columnIndex = 0; columnIndex < columnNames.length; columnIndex++) {
      for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        const candidateValue = rows[rowIndex][columnIndex];
        if (candidateValue !== null) {
          columnTypes[columnIndex] = inferColumnType(candidateValue);
          continue columnLoop;
        }
      }
      columnTypes[columnIndex] = ColumnTypeEnum.Int32;
    }
  return columnTypes;
}
function inferColumnType(value) {
  switch (typeof value) {
    case "string":
      return inferStringType(value);
    case "number":
      return inferNumberType(value);
    case "object":
      return inferObjectType(value);
    default:
      throw new UnexpectedTypeError(value);
  }
}
var isoDateRegex = new RegExp(
  /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/
);
var sqliteDateRegex = /^\d{4}-[0-1]\d-[0-3]\d [0-2]\d:[0-5]\d:[0-5]\d$/;
function isISODate(str) {
  return isoDateRegex.test(str) || sqliteDateRegex.test(str);
}
function inferStringType(value) {
  if (isISODate(value)) {
    return ColumnTypeEnum.DateTime;
  }
  return ColumnTypeEnum.Text;
}
function inferNumberType(_) {
  return ColumnTypeEnum.Double;
}
function inferObjectType(value) {
  if (value instanceof Array) {
    return ColumnTypeEnum.Bytes;
  }
  throw new UnexpectedTypeError(value);
}
var UnexpectedTypeError = class extends Error {
  constructor(value) {
    const type = typeof value;
    const repr = type === "object" ? JSON.stringify(value) : String(value);
    super(`unexpected value of type ${type}: ${repr}`);
    this.name = "UnexpectedTypeError";
  }
};
function mapRow(result, columnTypes) {
  for (let i = 0; i < result.length; i++) {
    const value = result[i];
    if (value instanceof ArrayBuffer) {
      result[i] = Array.from(new Uint8Array(value));
      continue;
    }
    if (typeof value === "number" && (columnTypes[i] === ColumnTypeEnum.Int32 || columnTypes[i] === ColumnTypeEnum.Int64) && !Number.isInteger(value)) {
      result[i] = Math.trunc(value);
      continue;
    }
    if (typeof value === "bigint") {
      result[i] = value.toString();
      continue;
    }
    if (columnTypes[i] === ColumnTypeEnum.Boolean) {
      result[i] = JSON.parse(value);
    }
  }
  return result;
}
function cleanArg(arg, argType) {
  if (arg !== null) {
    if (argType === "Int64") {
      const asInt56 = Number.parseInt(arg);
      if (!Number.isSafeInteger(asInt56)) {
        throw new Error(`Invalid Int64-encoded value received: ${arg}`);
      }
      return asInt56;
    }
    if (argType === "Int32") {
      return Number.parseInt(arg);
    }
    if (argType === "Float" || argType === "Double") {
      return Number.parseFloat(arg);
    }
    if (arg === true) {
      return 1;
    }
    if (arg === false) {
      return 0;
    }
    if (arg instanceof Uint8Array) {
      return Array.from(arg);
    }
  }
  return arg;
}
function matchSQLiteErrorCode(message) {
  let extendedCode = 1;
  if (!message)
    return extendedCode;
  if (message.startsWith("D1_ERROR: UNIQUE constraint failed:")) {
    extendedCode = 2067;
  } else if (message.startsWith("D1_ERROR: FOREIGN KEY constraint failed")) {
    extendedCode = 787;
  } else if (message.startsWith("D1_ERROR: NOT NULL constraint failed")) {
    extendedCode = 1299;
  } else if (message.startsWith("D1_ERROR: CHECK constraint failed")) {
    extendedCode = 1811;
  } else if (message.startsWith("D1_ERROR: PRIMARY KEY constraint failed")) {
    extendedCode = 1555;
  }
  return extendedCode;
}
var debug = (0, import_debug.Debug)("prisma:driver-adapter:d1");
var D1Queryable = class {
  constructor(client) {
    this.client = client;
    this.provider = "sqlite";
    this.adapterName = name;
  }
  /**
   * Execute a query given as SQL, interpolating the given parameters.
   */
  async queryRaw(query) {
    const tag = "[js::query_raw]";
    debug(`${tag} %O`, query);
    const ioResult = await this.performIO(query);
    return ioResult.map((data) => {
      const convertedData = this.convertData(data);
      return convertedData;
    });
  }
  convertData(ioResult) {
    const columnNames = ioResult[0];
    const results = ioResult[1];
    if (results.length === 0) {
      return {
        columnNames: [],
        columnTypes: [],
        rows: []
      };
    }
    const columnTypes = Object.values(getColumnTypes(columnNames, results));
    const rows = results.map((value) => mapRow(value, columnTypes));
    return {
      columnNames,
      // * Note: without Object.values the array looks like
      // * columnTypes: [ id: 128 ],
      // * and errors with:
      // * ✘ [ERROR] A hanging Promise was canceled. This happens when the worker runtime is waiting for a Promise from JavaScript to resolve, but has detected that the Promise cannot possibly ever resolve because all code and events related to the Promise's I/O context have already finished.
      columnTypes,
      rows
    };
  }
  /**
   * Execute a query given as SQL, interpolating the given parameters and
   * returning the number of affected rows.
   * Note: Queryable expects a u64, but napi.rs only supports u32.
   */
  async executeRaw(query) {
    const tag = "[js::execute_raw]";
    debug(`${tag} %O`, query);
    const res = await this.performIO(query, true);
    return res.map((result) => result.meta.changes ?? 0);
  }
  async performIO(query, executeRaw = false) {
    try {
      query.args = query.args.map((arg, i) => cleanArg(arg, query.argTypes[i]));
      const stmt = this.client.prepare(query.sql).bind(...query.args);
      if (executeRaw) {
        return ok(await stmt.run());
      } else {
        const [columnNames, ...rows] = await stmt.raw({ columnNames: true });
        return ok([columnNames, rows]);
      }
    } catch (e) {
      console.error("Error in performIO: %O", e);
      const { message } = e;
      return err({
        kind: "Sqlite",
        extendedCode: matchSQLiteErrorCode(message),
        message
      });
    }
  }
};
var D1Transaction = class extends D1Queryable {
  constructor(client, options) {
    super(client);
    this.options = options;
  }
  // eslint-disable-next-line @typescript-eslint/require-await
  async commit() {
    debug(`[js::commit]`);
    return ok(void 0);
  }
  // eslint-disable-next-line @typescript-eslint/require-await
  async rollback() {
    debug(`[js::rollback]`);
    return ok(void 0);
  }
};
var PrismaD1 = class extends D1Queryable {
  constructor(client) {
    super(client);
    this.tags = {
      error: red("prisma:error"),
      warn: yellow("prisma:warn"),
      info: cyan("prisma:info"),
      query: blue("prisma:query")
    };
    this.alreadyWarned = /* @__PURE__ */ new Set();
    this.warnOnce = (key, message, ...args) => {
      if (!this.alreadyWarned.has(key)) {
        this.alreadyWarned.add(key);
        console.info(`${this.tags.warn} ${message}`, ...args);
      }
    };
  }
  getConnectionInfo() {
    return ok({
      maxBindValues: 98
    });
  }
  // eslint-disable-next-line @typescript-eslint/require-await
  async startTransaction() {
    const options = {
      // TODO: D1 does not have a Transaction API.
      usePhantomQuery: true
    };
    const tag = "[js::startTransaction]";
    debug(`${tag} options: %O`, options);
    this.warnOnce(
      "D1 Transaction",
      "Cloudflare D1 does not support transactions yet. When using Prisma's D1 adapter, implicit & explicit transactions will be ignored and run as individual queries, which breaks the guarantees of the ACID properties of transactions. For more details see https://pris.ly/d/d1-transactions"
    );
    return ok(new D1Transaction(this.client, options));
  }
};

// index.ts
var workers_default = {
  async fetch(request, env, ctx) {
    const adapter = new PrismaD1(env.DB);
    const prisma = new import_client.PrismaClient({ adapter });
    const users = await prisma.user.findMany();
    const result = JSON.stringify(users);
    return new Response(result);
  }
};

// ../../node_modules/.pnpm/wrangler@3.72.3/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_checked_fetch();
init_modules_watch_stub();
var drainBody = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
};
var middleware_ensure_req_body_drained_default = drainBody;

// ../../node_modules/.pnpm/wrangler@3.72.3/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_checked_fetch();
init_modules_watch_stub();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-4UKG5N/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = workers_default;

// ../../node_modules/.pnpm/wrangler@3.72.3/node_modules/wrangler/templates/middleware/common.ts
init_checked_fetch();
init_modules_watch_stub();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}

// .wrangler/tmp/bundle-4UKG5N/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  };
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = function(type, init2) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init2.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init2) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init2.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map
