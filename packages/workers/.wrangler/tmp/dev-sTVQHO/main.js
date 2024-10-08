var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
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

// .wrangler/tmp/bundle-4ys2WX/checked-fetch.js
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
  ".wrangler/tmp/bundle-4ys2WX/checked-fetch.js"() {
    "use strict";
    urls = /* @__PURE__ */ new Set();
    __name(checkURL, "checkURL");
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

// C:/Users/Administrator/AppData/Roaming/nvm/v20.14.0/node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "C:/Users/Administrator/AppData/Roaming/nvm/v20.14.0/node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// ../../node_modules/.pnpm/@prisma+client@5.20.0_prisma@5.20.0/node_modules/@prisma/client/runtime/wasm.js
var require_wasm = __commonJS({
  "../../node_modules/.pnpm/@prisma+client@5.20.0_prisma@5.20.0/node_modules/@prisma/client/runtime/wasm.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var Do = Object.create;
    var Ot = Object.defineProperty;
    var Fo = Object.getOwnPropertyDescriptor;
    var No = Object.getOwnPropertyNames;
    var Uo = Object.getPrototypeOf;
    var qo = Object.prototype.hasOwnProperty;
    var ae = /* @__PURE__ */ __name((e, t) => () => (e && (t = e(e = 0)), t), "ae");
    var De = /* @__PURE__ */ __name((e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), "De");
    var kt = /* @__PURE__ */ __name((e, t) => {
      for (var r in t)
        Ot(e, r, { get: t[r], enumerable: true });
    }, "kt");
    var en = /* @__PURE__ */ __name((e, t, r, n) => {
      if (t && typeof t == "object" || typeof t == "function")
        for (let i of No(t))
          !qo.call(e, i) && i !== r && Ot(e, i, { get: () => t[i], enumerable: !(n = Fo(t, i)) || n.enumerable });
      return e;
    }, "en");
    var Fe = /* @__PURE__ */ __name((e, t, r) => (r = e != null ? Do(Uo(e)) : {}, en(t || !e || !e.__esModule ? Ot(r, "default", { value: e, enumerable: true }) : r, e)), "Fe");
    var Bo = /* @__PURE__ */ __name((e) => en(Ot({}, "__esModule", { value: true }), e), "Bo");
    function fr(e, t) {
      if (t = t.toLowerCase(), t === "utf8" || t === "utf-8")
        return new h(Qo.encode(e));
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
      rn(`encoding "${t}"`);
    }
    __name(fr, "fr");
    function Vo(e) {
      let r = Object.getOwnPropertyNames(DataView.prototype).filter((a) => a.startsWith("get") || a.startsWith("set")), n = r.map((a) => a.replace("get", "read").replace("set", "write")), i = /* @__PURE__ */ __name((a, l) => function(y = 0) {
        return B(y, "offset"), Y(y, "offset"), $2(y, "offset", this.length - 1), new DataView(this.buffer)[r[a]](y, l);
      }, "i"), o = /* @__PURE__ */ __name((a, l) => function(y, T = 0) {
        let C = r[a].match(/set(\w+\d+)/)[1].toLowerCase(), O = jo[C];
        return B(T, "offset"), Y(T, "offset"), $2(T, "offset", this.length - 1), $o(y, "value", O[0], O[1]), new DataView(this.buffer)[r[a]](T, y, l), T + parseInt(r[a].match(/\d+/)[0]) / 8;
      }, "o"), s = /* @__PURE__ */ __name((a) => {
        a.forEach((l) => {
          l.includes("Uint") && (e[l.replace("Uint", "UInt")] = e[l]), l.includes("Float64") && (e[l.replace("Float64", "Double")] = e[l]), l.includes("Float32") && (e[l.replace("Float32", "Float")] = e[l]);
        });
      }, "s");
      n.forEach((a, l) => {
        a.startsWith("read") && (e[a] = i(l, false), e[a + "LE"] = i(l, true), e[a + "BE"] = i(l, false)), a.startsWith("write") && (e[a] = o(l, false), e[a + "LE"] = o(l, true), e[a + "BE"] = o(l, false)), s([a, a + "LE", a + "BE"]);
      });
    }
    __name(Vo, "Vo");
    function rn(e) {
      throw new Error(`Buffer polyfill does not implement "${e}"`);
    }
    __name(rn, "rn");
    function Mt(e, t) {
      if (!(e instanceof Uint8Array))
        throw new TypeError(`The "${t}" argument must be an instance of Buffer or Uint8Array`);
    }
    __name(Mt, "Mt");
    function $2(e, t, r = Wo + 1) {
      if (e < 0 || e > r) {
        let n = new RangeError(`The value of "${t}" is out of range. It must be >= 0 && <= ${r}. Received ${e}`);
        throw n.code = "ERR_OUT_OF_RANGE", n;
      }
    }
    __name($2, "$");
    function B(e, t) {
      if (typeof e != "number") {
        let r = new TypeError(`The "${t}" argument must be of type number. Received type ${typeof e}.`);
        throw r.code = "ERR_INVALID_ARG_TYPE", r;
      }
    }
    __name(B, "B");
    function Y(e, t) {
      if (!Number.isInteger(e) || Number.isNaN(e)) {
        let r = new RangeError(`The value of "${t}" is out of range. It must be an integer. Received ${e}`);
        throw r.code = "ERR_OUT_OF_RANGE", r;
      }
    }
    __name(Y, "Y");
    function $o(e, t, r, n) {
      if (e < r || e > n) {
        let i = new RangeError(`The value of "${t}" is out of range. It must be >= ${r} and <= ${n}. Received ${e}`);
        throw i.code = "ERR_OUT_OF_RANGE", i;
      }
    }
    __name($o, "$o");
    function tn(e, t) {
      if (typeof e != "string") {
        let r = new TypeError(`The "${t}" argument must be of type string. Received type ${typeof e}`);
        throw r.code = "ERR_INVALID_ARG_TYPE", r;
      }
    }
    __name(tn, "tn");
    function Ko(e, t = "utf8") {
      return h.from(e, t);
    }
    __name(Ko, "Ko");
    var h;
    var jo;
    var Qo;
    var Jo;
    var Go;
    var Wo;
    var b;
    var gr;
    var c = ae(() => {
      "use strict";
      h = /* @__PURE__ */ __name(class e extends Uint8Array {
        constructor() {
          super(...arguments);
          this._isBuffer = true;
        }
        get offset() {
          return this.byteOffset;
        }
        static alloc(r, n = 0, i = "utf8") {
          return tn(i, "encoding"), e.allocUnsafe(r).fill(n, i);
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
            return fr(r, n).byteLength;
          if (r && r.byteLength)
            return r.byteLength;
          let i = new TypeError('The "string" argument must be of type string or an instance of Buffer or ArrayBuffer.');
          throw i.code = "ERR_INVALID_ARG_TYPE", i;
        }
        static isEncoding(r) {
          return Go.includes(r);
        }
        static compare(r, n) {
          Mt(r, "buff1"), Mt(n, "buff2");
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
            return fr(r, n);
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
          B(r, "offset"), Y(r, "offset"), $2(r, "offset", this.length - 1), B(n, "byteLength"), Y(n, "byteLength");
          let i = new DataView(this.buffer, r, n), o = 0;
          for (let s = 0; s < n; s++)
            o = o * 256 + i.getUint8(s);
          return i.getUint8(0) & 128 && (o -= Math.pow(256, n)), o;
        }
        readIntLE(r, n) {
          B(r, "offset"), Y(r, "offset"), $2(r, "offset", this.length - 1), B(n, "byteLength"), Y(n, "byteLength");
          let i = new DataView(this.buffer, r, n), o = 0;
          for (let s = 0; s < n; s++)
            o += i.getUint8(s) * Math.pow(256, s);
          return i.getUint8(n - 1) & 128 && (o -= Math.pow(256, n)), o;
        }
        readUIntBE(r, n) {
          B(r, "offset"), Y(r, "offset"), $2(r, "offset", this.length - 1), B(n, "byteLength"), Y(n, "byteLength");
          let i = new DataView(this.buffer, r, n), o = 0;
          for (let s = 0; s < n; s++)
            o = o * 256 + i.getUint8(s);
          return o;
        }
        readUintBE(r, n) {
          return this.readUIntBE(r, n);
        }
        readUIntLE(r, n) {
          B(r, "offset"), Y(r, "offset"), $2(r, "offset", this.length - 1), B(n, "byteLength"), Y(n, "byteLength");
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
          B(n, "offset"), Y(n, "offset"), $2(n, "offset", this.length - 1), B(i, "byteLength"), Y(i, "byteLength");
          let o = new DataView(this.buffer, n, i);
          for (let s = i - 1; s >= 0; s--)
            o.setUint8(s, r & 255), r = r / 256;
          return n + i;
        }
        writeUintBE(r, n, i) {
          return this.writeUIntBE(r, n, i);
        }
        writeUIntLE(r, n, i) {
          B(n, "offset"), Y(n, "offset"), $2(n, "offset", this.length - 1), B(i, "byteLength"), Y(i, "byteLength");
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
          return Mt(r, "target"), B(n, "targetStart"), B(i, "targetEnd"), B(o, "sourceStart"), B(s, "sourceEnd"), $2(n, "targetStart"), $2(i, "targetEnd", r.length), $2(o, "sourceStart"), $2(s, "sourceEnd", this.length), e.compare(this.slice(o, s), r.slice(n, i));
        }
        equals(r) {
          return Mt(r, "otherBuffer"), this.length === r.length && this.every((n, i) => n === r[i]);
        }
        copy(r, n = 0, i = 0, o = this.length) {
          $2(n, "targetStart"), $2(i, "sourceStart", this.length), $2(o, "sourceEnd"), n >>>= 0, i >>>= 0, o >>>= 0;
          let s = 0;
          for (; i < o && !(this[i] === void 0 || r[n] === void 0); )
            r[n] = this[i], s++, i++, n++;
          return s;
        }
        write(r, n, i, o = "utf8") {
          let s = typeof n == "string" ? 0 : n ?? 0, a = typeof i == "string" ? this.length - s : i ?? this.length - s;
          return o = typeof n == "string" ? n : typeof i == "string" ? i : o, B(s, "offset"), B(a, "length"), $2(s, "offset", this.length), $2(a, "length", this.length), (o === "ucs2" || o === "ucs-2" || o === "utf16le" || o === "utf-16le") && (a = a - a % 2), fr(r, o).copy(this, s, 0, a);
        }
        fill(r = 0, n = 0, i = this.length, o = "utf-8") {
          let s = typeof n == "string" ? 0 : n, a = typeof i == "string" ? this.length : i;
          if (o = typeof n == "string" ? n : typeof i == "string" ? i : o, r = e.from(typeof r == "number" ? [r] : r ?? [], o), tn(o, "encoding"), $2(s, "offset", this.length), $2(a, "end", this.length), r.length !== 0)
            for (let l = s; l < a; l += r.length)
              super.set(r.slice(0, r.length + l >= this.length ? this.length - l : r.length), l);
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
          let a = e.from(typeof r == "number" ? [r] : r, i), l = typeof n == "string" ? 0 : n;
          return l = typeof n == "number" ? l : null, l = Number.isNaN(l) ? null : l, l ??= o ? this.length : 0, l = l < 0 ? this.length + l : l, a.length === 0 && o === false ? l >= this.length ? this.length : l : a.length === 0 && o === true ? (l >= this.length ? this.length : l) || this.length : s((y, T) => (o ? T <= l : T >= l) && this[T] === a[0] && a.every((O, A) => this[T + A] === O));
        }
        toString(r = "utf8", n = 0, i = this.length) {
          if (n = n < 0 ? 0 : n, r = r.toString().toLowerCase(), i <= 0)
            return "";
          if (r === "utf8" || r === "utf-8")
            return Jo.decode(this.slice(n, i));
          if (r === "base64" || r === "base64url") {
            let o = btoa(this.reduce((s, a) => s + gr(a), ""));
            return r === "base64url" ? o.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : o;
          }
          if (r === "binary" || r === "ascii" || r === "latin1" || r === "latin-1")
            return this.slice(n, i).reduce((o, s) => o + gr(s & (r === "ascii" ? 127 : 255)), "");
          if (r === "ucs2" || r === "ucs-2" || r === "utf16le" || r === "utf-16le") {
            let o = new DataView(this.buffer.slice(n, i));
            return Array.from({ length: o.byteLength / 2 }, (s, a) => a * 2 + 1 < o.byteLength ? gr(o.getUint16(a * 2, true)) : "").join("");
          }
          if (r === "hex")
            return this.slice(n, i).reduce((o, s) => o + s.toString(16).padStart(2, "0"), "");
          rn(`encoding "${r}"`);
        }
        toLocaleString() {
          return this.toString();
        }
        inspect() {
          return `<Buffer ${this.toString("hex").match(/.{1,2}/g).join(" ")}>`;
        }
      }, "e");
      jo = { int8: [-128, 127], int16: [-32768, 32767], int32: [-2147483648, 2147483647], uint8: [0, 255], uint16: [0, 65535], uint32: [0, 4294967295], float32: [-1 / 0, 1 / 0], float64: [-1 / 0, 1 / 0], bigint64: [-0x8000000000000000n, 0x7fffffffffffffffn], biguint64: [0n, 0xffffffffffffffffn] }, Qo = new TextEncoder(), Jo = new TextDecoder(), Go = ["utf8", "utf-8", "hex", "base64", "ascii", "binary", "base64url", "ucs2", "ucs-2", "utf16le", "utf-16le", "latin1", "latin-1"], Wo = 4294967295;
      Vo(h.prototype);
      b = new Proxy(Ko, { construct(e, [t, r]) {
        return h.from(t, r);
      }, get(e, t) {
        return h[t];
      } }), gr = String.fromCodePoint;
    });
    var g;
    var m = ae(() => {
      "use strict";
      g = { nextTick: (e, ...t) => {
        setTimeout(() => {
          e(...t);
        }, 0);
      }, env: {}, version: "", cwd: () => "/", stderr: {}, argv: ["/bin/node"] };
    });
    var x;
    var d = ae(() => {
      "use strict";
      x = globalThis.performance ?? (() => {
        let e = Date.now();
        return { now: () => Date.now() - e };
      })();
    });
    var E;
    var p = ae(() => {
      "use strict";
      E = /* @__PURE__ */ __name(() => {
      }, "E");
      E.prototype = E;
    });
    var w;
    var f = ae(() => {
      "use strict";
      w = /* @__PURE__ */ __name(class {
        constructor(t) {
          this.value = t;
        }
        deref() {
          return this.value;
        }
      }, "w");
    });
    function an(e, t) {
      var r, n, i, o, s, a, l, y, T = e.constructor, C = T.precision;
      if (!e.s || !t.s)
        return t.s || (t = new T(e)), U ? D(t, C) : t;
      if (l = e.d, y = t.d, s = e.e, i = t.e, l = l.slice(), o = s - i, o) {
        for (o < 0 ? (n = l, o = -o, a = y.length) : (n = y, i = s, a = l.length), s = Math.ceil(C / N), a = s > a ? s + 1 : a + 1, o > a && (o = a, n.length = 1), n.reverse(); o--; )
          n.push(0);
        n.reverse();
      }
      for (a = l.length, o = y.length, a - o < 0 && (o = a, n = y, y = l, l = n), r = 0; o; )
        r = (l[--o] = l[o] + y[o] + r) / Q | 0, l[o] %= Q;
      for (r && (l.unshift(r), ++i), a = l.length; l[--a] == 0; )
        l.pop();
      return t.d = l, t.e = i, U ? D(t, C) : t;
    }
    __name(an, "an");
    function ue(e, t, r) {
      if (e !== ~~e || e < t || e > r)
        throw Error(Oe + e);
    }
    __name(ue, "ue");
    function le(e) {
      var t, r, n, i = e.length - 1, o = "", s = e[0];
      if (i > 0) {
        for (o += s, t = 1; t < i; t++)
          n = e[t] + "", r = N - n.length, r && (o += Pe(r)), o += n;
        s = e[t], n = s + "", r = N - n.length, r && (o += Pe(r));
      } else if (s === 0)
        return "0";
      for (; s % 10 === 0; )
        s /= 10;
      return o + s;
    }
    __name(le, "le");
    function ln(e, t) {
      var r, n, i, o, s, a, l = 0, y = 0, T = e.constructor, C = T.precision;
      if (V(e) > 16)
        throw Error(yr + V(e));
      if (!e.s)
        return new T(Z);
      for (t == null ? (U = false, a = C) : a = t, s = new T(0.03125); e.abs().gte(0.1); )
        e = e.times(s), y += 5;
      for (n = Math.log(Se(2, y)) / Math.LN10 * 2 + 5 | 0, a += n, r = i = o = new T(Z), T.precision = a; ; ) {
        if (i = D(i.times(e), a), r = r.times(++l), s = o.plus(ye(i, r, a)), le(s.d).slice(0, a) === le(o.d).slice(0, a)) {
          for (; y--; )
            o = D(o.times(o), a);
          return T.precision = C, t == null ? (U = true, D(o, C)) : o;
        }
        o = s;
      }
    }
    __name(ln, "ln");
    function V(e) {
      for (var t = e.e * N, r = e.d[0]; r >= 10; r /= 10)
        t++;
      return t;
    }
    __name(V, "V");
    function hr(e, t, r) {
      if (t > e.LN10.sd())
        throw U = true, r && (e.precision = r), Error(re + "LN10 precision limit exceeded");
      return D(new e(e.LN10), t);
    }
    __name(hr, "hr");
    function Pe(e) {
      for (var t = ""; e--; )
        t += "0";
      return t;
    }
    __name(Pe, "Pe");
    function rt(e, t) {
      var r, n, i, o, s, a, l, y, T, C = 1, O = 10, A = e, M = A.d, S = A.constructor, I = S.precision;
      if (A.s < 1)
        throw Error(re + (A.s ? "NaN" : "-Infinity"));
      if (A.eq(Z))
        return new S(0);
      if (t == null ? (U = false, y = I) : y = t, A.eq(10))
        return t == null && (U = true), hr(S, y);
      if (y += O, S.precision = y, r = le(M), n = r.charAt(0), o = V(A), Math.abs(o) < 15e14) {
        for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
          A = A.times(e), r = le(A.d), n = r.charAt(0), C++;
        o = V(A), n > 1 ? (A = new S("0." + r), o++) : A = new S(n + "." + r.slice(1));
      } else
        return l = hr(S, y + 2, I).times(o + ""), A = rt(new S(n + "." + r.slice(1)), y - O).plus(l), S.precision = I, t == null ? (U = true, D(A, I)) : A;
      for (a = s = A = ye(A.minus(Z), A.plus(Z), y), T = D(A.times(A), y), i = 3; ; ) {
        if (s = D(s.times(T), y), l = a.plus(ye(s, new S(i), y)), le(l.d).slice(0, y) === le(a.d).slice(0, y))
          return a = a.times(2), o !== 0 && (a = a.plus(hr(S, y + 2, I).times(o + ""))), a = ye(a, new S(C), y), S.precision = I, t == null ? (U = true, D(a, I)) : a;
        a = l, i += 2;
      }
    }
    __name(rt, "rt");
    function nn(e, t) {
      var r, n, i;
      for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; )
        ++n;
      for (i = t.length; t.charCodeAt(i - 1) === 48; )
        --i;
      if (t = t.slice(n, i), t) {
        if (i -= n, r = r - n - 1, e.e = Ue(r / N), e.d = [], n = (r + 1) % N, r < 0 && (n += N), n < i) {
          for (n && e.d.push(+t.slice(0, n)), i -= N; n < i; )
            e.d.push(+t.slice(n, n += N));
          t = t.slice(n), n = N - t.length;
        } else
          n -= i;
        for (; n--; )
          t += "0";
        if (e.d.push(+t), U && (e.e > It || e.e < -It))
          throw Error(yr + r);
      } else
        e.s = 0, e.e = 0, e.d = [0];
      return e;
    }
    __name(nn, "nn");
    function D(e, t, r) {
      var n, i, o, s, a, l, y, T, C = e.d;
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
      if (r !== void 0 && (o = Se(10, s - i - 1), a = y / o % 10 | 0, l = t < 0 || C[T + 1] !== void 0 || y % o, l = r < 4 ? (a || l) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : a > 5 || a == 5 && (r == 4 || l || r == 6 && (n > 0 ? i > 0 ? y / Se(10, s - i) : 0 : C[T - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !C[0])
        return l ? (o = V(e), C.length = 1, t = t - o - 1, C[0] = Se(10, (N - t % N) % N), e.e = Ue(-t / N) || 0) : (C.length = 1, C[0] = e.e = e.s = 0), e;
      if (n == 0 ? (C.length = T, o = 1, T--) : (C.length = T + 1, o = Se(10, N - n), C[T] = i > 0 ? (y / Se(10, s - i) % Se(10, i) | 0) * o : 0), l)
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
      if (U && (e.e > It || e.e < -It))
        throw Error(yr + V(e));
      return e;
    }
    __name(D, "D");
    function un(e, t) {
      var r, n, i, o, s, a, l, y, T, C, O = e.constructor, A = O.precision;
      if (!e.s || !t.s)
        return t.s ? t.s = -t.s : t = new O(e), U ? D(t, A) : t;
      if (l = e.d, C = t.d, n = t.e, y = e.e, l = l.slice(), s = y - n, s) {
        for (T = s < 0, T ? (r = l, s = -s, a = C.length) : (r = C, n = y, a = l.length), i = Math.max(Math.ceil(A / N), a) + 2, s > i && (s = i, r.length = 1), r.reverse(), i = s; i--; )
          r.push(0);
        r.reverse();
      } else {
        for (i = l.length, a = C.length, T = i < a, T && (a = i), i = 0; i < a; i++)
          if (l[i] != C[i]) {
            T = l[i] < C[i];
            break;
          }
        s = 0;
      }
      for (T && (r = l, l = C, C = r, t.s = -t.s), a = l.length, i = C.length - a; i > 0; --i)
        l[a++] = 0;
      for (i = C.length; i > s; ) {
        if (l[--i] < C[i]) {
          for (o = i; o && l[--o] === 0; )
            l[o] = Q - 1;
          --l[o], l[i] += Q;
        }
        l[i] -= C[i];
      }
      for (; l[--a] === 0; )
        l.pop();
      for (; l[0] === 0; l.shift())
        --n;
      return l[0] ? (t.d = l, t.e = n, U ? D(t, A) : t) : new O(0);
    }
    __name(un, "un");
    function ke(e, t, r) {
      var n, i = V(e), o = le(e.d), s = o.length;
      return t ? (r && (n = r - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Pe(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (i < 0 ? "e" : "e+") + i) : i < 0 ? (o = "0." + Pe(-i - 1) + o, r && (n = r - s) > 0 && (o += Pe(n))) : i >= s ? (o += Pe(i + 1 - s), r && (n = r - i - 1) > 0 && (o = o + "." + Pe(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - s) > 0 && (i + 1 === s && (o += "."), o += Pe(n))), e.s < 0 ? "-" + o : o;
    }
    __name(ke, "ke");
    function on(e, t) {
      if (e.length > t)
        return e.length = t, true;
    }
    __name(on, "on");
    function cn(e) {
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
            throw Error(Oe + o);
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
          return nn(s, o.toString());
        } else if (typeof o != "string")
          throw Error(Oe + o);
        if (o.charCodeAt(0) === 45 ? (o = o.slice(1), s.s = -1) : s.s = 1, zo.test(o))
          nn(s, o);
        else
          throw Error(Oe + o);
      }
      __name(i, "i");
      if (i.prototype = R, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = cn, i.config = i.set = Yo, e === void 0 && (e = {}), e)
        for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; )
          e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
      return i.config(e), i;
    }
    __name(cn, "cn");
    function Yo(e) {
      if (!e || typeof e != "object")
        throw Error(re + "Object expected");
      var t, r, n, i = ["precision", 1, Ne, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (t = 0; t < i.length; t += 3)
        if ((n = e[r = i[t]]) !== void 0)
          if (Ue(n) === n && n >= i[t + 1] && n <= i[t + 2])
            this[r] = n;
          else
            throw Error(Oe + r + ": " + n);
      if ((n = e[r = "LN10"]) !== void 0)
        if (n == Math.LN10)
          this[r] = new this(n);
        else
          throw Error(Oe + r + ": " + n);
      return this;
    }
    __name(Yo, "Yo");
    var Ne;
    var Ho;
    var br;
    var U;
    var re;
    var Oe;
    var yr;
    var Ue;
    var Se;
    var zo;
    var Z;
    var Q;
    var N;
    var sn;
    var It;
    var R;
    var ye;
    var br;
    var Lt;
    var mn = ae(() => {
      "use strict";
      c();
      m();
      d();
      p();
      f();
      u();
      Ne = 1e9, Ho = { precision: 20, rounding: 4, toExpNeg: -7, toExpPos: 21, LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286" }, U = true, re = "[DecimalError] ", Oe = re + "Invalid argument: ", yr = re + "Exponent out of range: ", Ue = Math.floor, Se = Math.pow, zo = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Q = 1e7, N = 7, sn = 9007199254740991, It = Ue(sn / N), R = {};
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
        return ye(this, new this.constructor(e));
      };
      R.dividedToIntegerBy = R.idiv = function(e) {
        var t = this, r = t.constructor;
        return D(ye(t, new r(e), 0, 1), r.precision);
      };
      R.equals = R.eq = function(e) {
        return !this.cmp(e);
      };
      R.exponent = function() {
        return V(this);
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
        return r.eq(Z) ? new n(0) : (U = false, t = ye(rt(r, o), rt(e, o), o), U = true, D(t, i));
      };
      R.minus = R.sub = function(e) {
        var t = this;
        return e = new t.constructor(e), t.s == e.s ? un(t, e) : an(t, (e.s = -e.s, e));
      };
      R.modulo = R.mod = function(e) {
        var t, r = this, n = r.constructor, i = n.precision;
        if (e = new n(e), !e.s)
          throw Error(re + "NaN");
        return r.s ? (U = false, t = ye(r, e, 0, 1).times(e), U = true, r.minus(t)) : D(new n(r), i);
      };
      R.naturalExponential = R.exp = function() {
        return ln(this);
      };
      R.naturalLogarithm = R.ln = function() {
        return rt(this);
      };
      R.negated = R.neg = function() {
        var e = new this.constructor(this);
        return e.s = -e.s || 0, e;
      };
      R.plus = R.add = function(e) {
        var t = this;
        return e = new t.constructor(e), t.s == e.s ? an(t, e) : un(t, (e.s = -e.s, e));
      };
      R.precision = R.sd = function(e) {
        var t, r, n, i = this;
        if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
          throw Error(Oe + e);
        if (t = V(i) + 1, n = i.d.length - 1, r = n * N + 1, n = i.d[n], n) {
          for (; n % 10 == 0; n /= 10)
            r--;
          for (n = i.d[0]; n >= 10; n /= 10)
            r++;
        }
        return e && t > r ? t : r;
      };
      R.squareRoot = R.sqrt = function() {
        var e, t, r, n, i, o, s, a = this, l = a.constructor;
        if (a.s < 1) {
          if (!a.s)
            return new l(0);
          throw Error(re + "NaN");
        }
        for (e = V(a), U = false, i = Math.sqrt(+a), i == 0 || i == 1 / 0 ? (t = le(a.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = Ue((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new l(t)) : n = new l(i.toString()), r = l.precision, i = s = r + 3; ; )
          if (o = n, n = o.plus(ye(a, o, s + 2)).times(0.5), le(o.d).slice(0, s) === (t = le(n.d)).slice(0, s)) {
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
        var t, r, n, i, o, s, a, l, y, T = this, C = T.constructor, O = T.d, A = (e = new C(e)).d;
        if (!T.s || !e.s)
          return new C(0);
        for (e.s *= T.s, r = T.e + e.e, l = O.length, y = A.length, l < y && (o = O, O = A, A = o, s = l, l = y, y = s), o = [], s = l + y, n = s; n--; )
          o.push(0);
        for (n = y; --n >= 0; ) {
          for (t = 0, i = l + n; i > n; )
            a = o[i] + A[n] * O[i - n - 1] + t, o[i--] = a % Q | 0, t = a / Q | 0;
          o[i] = (o[i] + t) % Q | 0;
        }
        for (; !o[--s]; )
          o.pop();
        return t ? ++r : o.shift(), e.d = o, e.e = r, U ? D(e, C.precision) : e;
      };
      R.toDecimalPlaces = R.todp = function(e, t) {
        var r = this, n = r.constructor;
        return r = new n(r), e === void 0 ? r : (ue(e, 0, Ne), t === void 0 ? t = n.rounding : ue(t, 0, 8), D(r, e + V(r) + 1, t));
      };
      R.toExponential = function(e, t) {
        var r, n = this, i = n.constructor;
        return e === void 0 ? r = ke(n, true) : (ue(e, 0, Ne), t === void 0 ? t = i.rounding : ue(t, 0, 8), n = D(new i(n), e + 1, t), r = ke(n, true, e + 1)), r;
      };
      R.toFixed = function(e, t) {
        var r, n, i = this, o = i.constructor;
        return e === void 0 ? ke(i) : (ue(e, 0, Ne), t === void 0 ? t = o.rounding : ue(t, 0, 8), n = D(new o(i), e + V(i) + 1, t), r = ke(n.abs(), false, e + V(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
      };
      R.toInteger = R.toint = function() {
        var e = this, t = e.constructor;
        return D(new t(e), V(e) + 1, t.rounding);
      };
      R.toNumber = function() {
        return +this;
      };
      R.toPower = R.pow = function(e) {
        var t, r, n, i, o, s, a = this, l = a.constructor, y = 12, T = +(e = new l(e));
        if (!e.s)
          return new l(Z);
        if (a = new l(a), !a.s) {
          if (e.s < 1)
            throw Error(re + "Infinity");
          return a;
        }
        if (a.eq(Z))
          return a;
        if (n = l.precision, e.eq(Z))
          return D(a, n);
        if (t = e.e, r = e.d.length - 1, s = t >= r, o = a.s, s) {
          if ((r = T < 0 ? -T : T) <= sn) {
            for (i = new l(Z), t = Math.ceil(n / N + 4), U = false; r % 2 && (i = i.times(a), on(i.d, t)), r = Ue(r / 2), r !== 0; )
              a = a.times(a), on(a.d, t);
            return U = true, e.s < 0 ? new l(Z).div(i) : D(i, n);
          }
        } else if (o < 0)
          throw Error(re + "NaN");
        return o = o < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, a.s = 1, U = false, i = e.times(rt(a, n + y)), U = true, i = ln(i), i.s = o, i;
      };
      R.toPrecision = function(e, t) {
        var r, n, i = this, o = i.constructor;
        return e === void 0 ? (r = V(i), n = ke(i, r <= o.toExpNeg || r >= o.toExpPos)) : (ue(e, 1, Ne), t === void 0 ? t = o.rounding : ue(t, 0, 8), i = D(new o(i), e, t), r = V(i), n = ke(i, e <= r || r <= o.toExpNeg, e)), n;
      };
      R.toSignificantDigits = R.tosd = function(e, t) {
        var r = this, n = r.constructor;
        return e === void 0 ? (e = n.precision, t = n.rounding) : (ue(e, 1, Ne), t === void 0 ? t = n.rounding : ue(t, 0, 8)), D(new n(r), e, t);
      };
      R.toString = R.valueOf = R.val = R.toJSON = R[Symbol.for("nodejs.util.inspect.custom")] = function() {
        var e = this, t = V(e), r = e.constructor;
        return ke(e, t <= r.toExpNeg || t >= r.toExpPos);
      };
      ye = function() {
        function e(n, i) {
          var o, s = 0, a = n.length;
          for (n = n.slice(); a--; )
            o = n[a] * i + s, n[a] = o % Q | 0, s = o / Q | 0;
          return s && n.unshift(s), n;
        }
        __name(e, "e");
        function t(n, i, o, s) {
          var a, l;
          if (o != s)
            l = o > s ? 1 : -1;
          else
            for (a = l = 0; a < o; a++)
              if (n[a] != i[a]) {
                l = n[a] > i[a] ? 1 : -1;
                break;
              }
          return l;
        }
        __name(t, "t");
        function r(n, i, o) {
          for (var s = 0; o--; )
            n[o] -= s, s = n[o] < i[o] ? 1 : 0, n[o] = s * Q + n[o] - i[o];
          for (; !n[0] && n.length > 1; )
            n.shift();
        }
        __name(r, "r");
        return function(n, i, o, s) {
          var a, l, y, T, C, O, A, M, S, I, ne, z, _e, k, Ae, pr, ie, At, St = n.constructor, _o = n.s == i.s ? 1 : -1, se = n.d, q = i.d;
          if (!n.s)
            return new St(n);
          if (!i.s)
            throw Error(re + "Division by zero");
          for (l = n.e - i.e, ie = q.length, Ae = se.length, A = new St(_o), M = A.d = [], y = 0; q[y] == (se[y] || 0); )
            ++y;
          if (q[y] > (se[y] || 0) && --l, o == null ? z = o = St.precision : s ? z = o + (V(n) - V(i)) + 1 : z = o, z < 0)
            return new St(0);
          if (z = z / N + 2 | 0, y = 0, ie == 1)
            for (T = 0, q = q[0], z++; (y < Ae || T) && z--; y++)
              _e = T * Q + (se[y] || 0), M[y] = _e / q | 0, T = _e % q | 0;
          else {
            for (T = Q / (q[0] + 1) | 0, T > 1 && (q = e(q, T), se = e(se, T), ie = q.length, Ae = se.length), k = ie, S = se.slice(0, ie), I = S.length; I < ie; )
              S[I++] = 0;
            At = q.slice(), At.unshift(0), pr = q[0], q[1] >= Q / 2 && ++pr;
            do
              T = 0, a = t(q, S, ie, I), a < 0 ? (ne = S[0], ie != I && (ne = ne * Q + (S[1] || 0)), T = ne / pr | 0, T > 1 ? (T >= Q && (T = Q - 1), C = e(q, T), O = C.length, I = S.length, a = t(C, S, O, I), a == 1 && (T--, r(C, ie < O ? At : q, O))) : (T == 0 && (a = T = 1), C = q.slice()), O = C.length, O < I && C.unshift(0), r(S, C, I), a == -1 && (I = S.length, a = t(q, S, ie, I), a < 1 && (T++, r(S, ie < I ? At : q, I))), I = S.length) : a === 0 && (T++, S = [0]), M[y++] = T, a && S[0] ? S[I++] = se[k] || 0 : (S = [se[k]], I = 1);
            while ((k++ < Ae || S[0] !== void 0) && z--);
          }
          return M[0] || M.shift(), A.e = l, D(A, s ? o + V(A) + 1 : o);
        };
      }();
      br = cn(Ho);
      Z = new br(1);
      Lt = br;
    });
    var v;
    var ce;
    var u = ae(() => {
      "use strict";
      mn();
      v = /* @__PURE__ */ __name(class extends Lt {
        static isDecimal(t) {
          return t instanceof Lt;
        }
        static random(t = 20) {
          {
            let n = crypto.getRandomValues(new Uint8Array(t)).reduce((i, o) => i + o, "");
            return new Lt(`0.${n.slice(0, t)}`);
          }
        }
      }, "v"), ce = v;
    });
    function Xo() {
      return false;
    }
    __name(Xo, "Xo");
    var Zo;
    var es;
    var gn;
    var hn = ae(() => {
      "use strict";
      c();
      m();
      d();
      p();
      f();
      u();
      Zo = {}, es = { existsSync: Xo, promises: Zo }, gn = es;
    });
    function ss(...e) {
      return e.join("/");
    }
    __name(ss, "ss");
    function as(...e) {
      return e.join("/");
    }
    __name(as, "as");
    var kn;
    var ls;
    var us;
    var it;
    var Mn = ae(() => {
      "use strict";
      c();
      m();
      d();
      p();
      f();
      u();
      kn = "/", ls = { sep: kn }, us = { resolve: ss, posix: ls, join: as, sep: kn }, it = us;
    });
    var Nt;
    var Ln = ae(() => {
      "use strict";
      c();
      m();
      d();
      p();
      f();
      u();
      Nt = /* @__PURE__ */ __name(class {
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
      }, "Nt");
    });
    var Dn = De((Qc, _n) => {
      "use strict";
      c();
      m();
      d();
      p();
      f();
      u();
      _n.exports = (e, t = 1, r) => {
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
    var Un = De((im, Nn) => {
      "use strict";
      c();
      m();
      d();
      p();
      f();
      u();
      Nn.exports = ({ onlyFirst: e = false } = {}) => {
        let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(t, e ? void 0 : "g");
      };
    });
    var Bn = De((mm, qn) => {
      "use strict";
      c();
      m();
      d();
      p();
      f();
      u();
      var gs = Un();
      qn.exports = (e) => typeof e == "string" ? e.replace(gs(), "") : e;
    });
    var Gn = De((tg, Es) => {
      Es.exports = { name: "@prisma/engines-version", version: "5.20.0-12.06fc58a368dc7be9fbbbe894adf8d445d208c284", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "06fc58a368dc7be9fbbbe894adf8d445d208c284" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.34", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
    });
    var Wn = De(() => {
      "use strict";
      c();
      m();
      d();
      p();
      f();
      u();
    });
    var Jr = De((oR, Ui) => {
      "use strict";
      c();
      m();
      d();
      p();
      f();
      u();
      Ui.exports = function() {
        function e(t, r, n, i, o) {
          return t < r || n < r ? t > n ? n + 1 : t + 1 : i === o ? r : r + 1;
        }
        __name(e, "e");
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
          var a = 0, l, y, T, C, O, A, M, S, I, ne, z, _e, k = [];
          for (l = 0; l < i; l++)
            k.push(l + 1), k.push(t.charCodeAt(s + l));
          for (var Ae = k.length - 1; a < o - 3; )
            for (I = r.charCodeAt(s + (y = a)), ne = r.charCodeAt(s + (T = a + 1)), z = r.charCodeAt(s + (C = a + 2)), _e = r.charCodeAt(s + (O = a + 3)), A = a += 4, l = 0; l < Ae; l += 2)
              M = k[l], S = k[l + 1], y = e(M, y, T, I, S), T = e(y, T, C, ne, S), C = e(T, C, O, z, S), A = e(C, O, A, _e, S), k[l] = A, O = C, C = T, T = y, y = M;
          for (; a < o; )
            for (I = r.charCodeAt(s + (y = a)), A = ++a, l = 0; l < Ae; l += 2)
              M = k[l], k[l] = A = e(M, y, A, I, k[l + 1]), y = M;
          return A;
        };
      }();
    });
    var sl = {};
    kt(sl, { Debug: () => vr, Decimal: () => ce, Extensions: () => wr, MetricsClient: () => Ve, NotFoundError: () => we, PrismaClientInitializationError: () => L, PrismaClientKnownRequestError: () => J, PrismaClientRustPanicError: () => Ee, PrismaClientUnknownRequestError: () => G, PrismaClientValidationError: () => j, Public: () => Er, Sql: () => X, defineDmmfProperty: () => jn, empty: () => Hn, getPrismaClient: () => Mo, getRuntime: () => Ce, join: () => Kn, makeStrictEnum: () => Io, makeTypedQueryFactory: () => Jn, objectEnumValues: () => Bt, raw: () => Fr, skip: () => Vt, sqltag: () => Nr, warnEnvConflicts: () => void 0, warnOnce: () => lt });
    module.exports = Bo(sl);
    c();
    m();
    d();
    p();
    f();
    u();
    var wr = {};
    kt(wr, { defineExtension: () => dn, getExtensionContext: () => pn });
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    function dn(e) {
      return typeof e == "function" ? e : (t) => t.$extends(e);
    }
    __name(dn, "dn");
    c();
    m();
    d();
    p();
    f();
    u();
    function pn(e) {
      return e;
    }
    __name(pn, "pn");
    var Er = {};
    kt(Er, { validator: () => fn });
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    function fn(...e) {
      return (t) => t;
    }
    __name(fn, "fn");
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    var xr;
    var yn;
    var bn;
    var wn;
    var En = true;
    typeof g < "u" && ({ FORCE_COLOR: xr, NODE_DISABLE_COLORS: yn, NO_COLOR: bn, TERM: wn } = g.env || {}, En = g.stdout && g.stdout.isTTY);
    var ts = { enabled: !yn && bn == null && wn !== "dumb" && (xr != null && xr !== "0" || En) };
    function F(e, t) {
      let r = new RegExp(`\\x1b\\[${t}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${t}m`;
      return function(o) {
        return !ts.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
      };
    }
    __name(F, "F");
    var mu = F(0, 0);
    var _t = F(1, 22);
    var Dt = F(2, 22);
    var du = F(3, 23);
    var xn = F(4, 24);
    var pu = F(7, 27);
    var fu = F(8, 28);
    var gu = F(9, 29);
    var hu = F(30, 39);
    var qe = F(31, 39);
    var Pn = F(32, 39);
    var vn = F(33, 39);
    var Tn = F(34, 39);
    var yu = F(35, 39);
    var Cn = F(36, 39);
    var bu = F(37, 39);
    var Rn = F(90, 39);
    var wu = F(90, 39);
    var Eu = F(40, 49);
    var xu = F(41, 49);
    var Pu = F(42, 49);
    var vu = F(43, 49);
    var Tu = F(44, 49);
    var Cu = F(45, 49);
    var Ru = F(46, 49);
    var Au = F(47, 49);
    c();
    m();
    d();
    p();
    f();
    u();
    var rs = 100;
    var An = ["green", "yellow", "blue", "magenta", "cyan", "red"];
    var Ft = [];
    var Sn = Date.now();
    var ns = 0;
    var Pr = typeof g < "u" ? g.env : {};
    globalThis.DEBUG ??= Pr.DEBUG ?? "";
    globalThis.DEBUG_COLORS ??= Pr.DEBUG_COLORS ? Pr.DEBUG_COLORS === "true" : true;
    var nt = { enable(e) {
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
    function is(e) {
      let t = { color: An[ns++ % An.length], enabled: nt.enabled(e), namespace: e, log: nt.log, extend: () => {
      } }, r = /* @__PURE__ */ __name((...n) => {
        let { enabled: i, namespace: o, color: s, log: a } = t;
        if (n.length !== 0 && Ft.push([o, ...n]), Ft.length > rs && Ft.shift(), nt.enabled(o) || i) {
          let l = n.map((T) => typeof T == "string" ? T : os(T)), y = `+${Date.now() - Sn}ms`;
          Sn = Date.now(), a(o, ...l, y);
        }
      }, "r");
      return new Proxy(r, { get: (n, i) => t[i], set: (n, i, o) => t[i] = o });
    }
    __name(is, "is");
    var vr = new Proxy(is, { get: (e, t) => nt[t], set: (e, t, r) => nt[t] = r });
    function os(e, t = 2) {
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
    __name(os, "os");
    function On() {
      Ft.length = 0;
    }
    __name(On, "On");
    var ee = vr;
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    var Tr = ["darwin", "darwin-arm64", "debian-openssl-1.0.x", "debian-openssl-1.1.x", "debian-openssl-3.0.x", "rhel-openssl-1.0.x", "rhel-openssl-1.1.x", "rhel-openssl-3.0.x", "linux-arm64-openssl-1.1.x", "linux-arm64-openssl-1.0.x", "linux-arm64-openssl-3.0.x", "linux-arm-openssl-1.1.x", "linux-arm-openssl-1.0.x", "linux-arm-openssl-3.0.x", "linux-musl", "linux-musl-openssl-3.0.x", "linux-musl-arm64-openssl-1.1.x", "linux-musl-arm64-openssl-3.0.x", "linux-nixos", "linux-static-x64", "linux-static-arm64", "windows", "freebsd11", "freebsd12", "freebsd13", "freebsd14", "freebsd15", "openbsd", "netbsd", "arm"];
    c();
    m();
    d();
    p();
    f();
    u();
    var In = "library";
    function ot(e) {
      let t = cs();
      return t || (e?.config.engineType === "library" ? "library" : e?.config.engineType === "binary" ? "binary" : In);
    }
    __name(ot, "ot");
    function cs() {
      let e = g.env.PRISMA_CLIENT_ENGINE_TYPE;
      return e === "library" ? "library" : e === "binary" ? "binary" : void 0;
    }
    __name(cs, "cs");
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    var Me;
    ((t) => {
      let e;
      ((k) => (k.findUnique = "findUnique", k.findUniqueOrThrow = "findUniqueOrThrow", k.findFirst = "findFirst", k.findFirstOrThrow = "findFirstOrThrow", k.findMany = "findMany", k.create = "create", k.createMany = "createMany", k.createManyAndReturn = "createManyAndReturn", k.update = "update", k.updateMany = "updateMany", k.upsert = "upsert", k.delete = "delete", k.deleteMany = "deleteMany", k.groupBy = "groupBy", k.count = "count", k.aggregate = "aggregate", k.findRaw = "findRaw", k.aggregateRaw = "aggregateRaw"))(e = t.ModelAction ||= {});
    })(Me ||= {});
    var at = {};
    kt(at, { error: () => ps, info: () => ds, log: () => ms, query: () => fs, should: () => Fn, tags: () => st, warn: () => Cr });
    c();
    m();
    d();
    p();
    f();
    u();
    var st = { error: qe("prisma:error"), warn: vn("prisma:warn"), info: Cn("prisma:info"), query: Tn("prisma:query") };
    var Fn = { warn: () => !g.env.PRISMA_DISABLE_WARNINGS };
    function ms(...e) {
      console.log(...e);
    }
    __name(ms, "ms");
    function Cr(e, ...t) {
      Fn.warn() && console.warn(`${st.warn} ${e}`, ...t);
    }
    __name(Cr, "Cr");
    function ds(e, ...t) {
      console.info(`${st.info} ${e}`, ...t);
    }
    __name(ds, "ds");
    function ps(e, ...t) {
      console.error(`${st.error} ${e}`, ...t);
    }
    __name(ps, "ps");
    function fs(e, ...t) {
      console.log(`${st.query} ${e}`, ...t);
    }
    __name(fs, "fs");
    c();
    m();
    d();
    p();
    f();
    u();
    function Ut(e, t) {
      if (!e)
        throw new Error(`${t}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`);
    }
    __name(Ut, "Ut");
    c();
    m();
    d();
    p();
    f();
    u();
    function be(e, t) {
      throw new Error(t);
    }
    __name(be, "be");
    c();
    m();
    d();
    p();
    f();
    u();
    function Rr(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    __name(Rr, "Rr");
    c();
    m();
    d();
    p();
    f();
    u();
    var Ar = /* @__PURE__ */ __name((e, t) => e.reduce((r, n) => (r[t(n)] = n, r), {}), "Ar");
    c();
    m();
    d();
    p();
    f();
    u();
    function Be(e, t) {
      let r = {};
      for (let n of Object.keys(e))
        r[n] = t(e[n], n);
      return r;
    }
    __name(Be, "Be");
    c();
    m();
    d();
    p();
    f();
    u();
    function Sr(e, t) {
      if (e.length === 0)
        return;
      let r = e[0];
      for (let n = 1; n < e.length; n++)
        t(r, e[n]) < 0 && (r = e[n]);
      return r;
    }
    __name(Sr, "Sr");
    c();
    m();
    d();
    p();
    f();
    u();
    function K(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    __name(K, "K");
    c();
    m();
    d();
    p();
    f();
    u();
    var Vn = /* @__PURE__ */ new Set();
    var lt = /* @__PURE__ */ __name((e, t, ...r) => {
      Vn.has(e) || (Vn.add(e), Cr(t, ...r));
    }, "lt");
    c();
    m();
    d();
    p();
    f();
    u();
    var J = /* @__PURE__ */ __name(class extends Error {
      constructor(t, { code: r, clientVersion: n, meta: i, batchRequestIdx: o }) {
        super(t), this.name = "PrismaClientKnownRequestError", this.code = r, this.clientVersion = n, this.meta = i, Object.defineProperty(this, "batchRequestIdx", { value: o, enumerable: false, writable: true });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
      }
    }, "J");
    K(J, "PrismaClientKnownRequestError");
    var we = /* @__PURE__ */ __name(class extends J {
      constructor(t, r) {
        super(t, { code: "P2025", clientVersion: r }), this.name = "NotFoundError";
      }
    }, "we");
    K(we, "NotFoundError");
    c();
    m();
    d();
    p();
    f();
    u();
    var L = /* @__PURE__ */ __name(class e extends Error {
      constructor(t, r, n) {
        super(t), this.name = "PrismaClientInitializationError", this.clientVersion = r, this.errorCode = n, Error.captureStackTrace(e);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
      }
    }, "e");
    K(L, "PrismaClientInitializationError");
    c();
    m();
    d();
    p();
    f();
    u();
    var Ee = /* @__PURE__ */ __name(class extends Error {
      constructor(t, r) {
        super(t), this.name = "PrismaClientRustPanicError", this.clientVersion = r;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
      }
    }, "Ee");
    K(Ee, "PrismaClientRustPanicError");
    c();
    m();
    d();
    p();
    f();
    u();
    var G = /* @__PURE__ */ __name(class extends Error {
      constructor(t, { clientVersion: r, batchRequestIdx: n }) {
        super(t), this.name = "PrismaClientUnknownRequestError", this.clientVersion = r, Object.defineProperty(this, "batchRequestIdx", { value: n, writable: true, enumerable: false });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
      }
    }, "G");
    K(G, "PrismaClientUnknownRequestError");
    c();
    m();
    d();
    p();
    f();
    u();
    var j = /* @__PURE__ */ __name(class extends Error {
      constructor(r, { clientVersion: n }) {
        super(r);
        this.name = "PrismaClientValidationError";
        this.clientVersion = n;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
      }
    }, "j");
    K(j, "PrismaClientValidationError");
    c();
    m();
    d();
    p();
    f();
    u();
    var Ve = /* @__PURE__ */ __name(class {
      constructor(t) {
        this._engine = t;
      }
      prometheus(t) {
        return this._engine.metrics({ format: "prometheus", ...t });
      }
      json(t) {
        return this._engine.metrics({ format: "json", ...t });
      }
    }, "Ve");
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    function ut(e) {
      let t;
      return { get() {
        return t || (t = { value: e() }), t.value;
      } };
    }
    __name(ut, "ut");
    function jn(e, t) {
      let r = ut(() => hs(t));
      Object.defineProperty(e, "dmmf", { get: () => r.get() });
    }
    __name(jn, "jn");
    function hs(e) {
      throw new Error("Prisma.dmmf is not available when running in edge runtimes.");
    }
    __name(hs, "hs");
    c();
    m();
    d();
    p();
    f();
    u();
    var qt = Symbol();
    var kr = /* @__PURE__ */ new WeakMap();
    var xe = /* @__PURE__ */ __name(class {
      constructor(t) {
        t === qt ? kr.set(this, `Prisma.${this._getName()}`) : kr.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
      }
      _getName() {
        return this.constructor.name;
      }
      toString() {
        return kr.get(this);
      }
    }, "xe");
    var ct = /* @__PURE__ */ __name(class extends xe {
      _getNamespace() {
        return "NullTypes";
      }
    }, "ct");
    var mt = /* @__PURE__ */ __name(class extends ct {
    }, "mt");
    Mr(mt, "DbNull");
    var dt = /* @__PURE__ */ __name(class extends ct {
    }, "dt");
    Mr(dt, "JsonNull");
    var pt = /* @__PURE__ */ __name(class extends ct {
    }, "pt");
    Mr(pt, "AnyNull");
    var Bt = { classes: { DbNull: mt, JsonNull: dt, AnyNull: pt }, instances: { DbNull: new mt(qt), JsonNull: new dt(qt), AnyNull: new pt(qt) } };
    function Mr(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    __name(Mr, "Mr");
    c();
    m();
    d();
    p();
    f();
    u();
    var Qn = Symbol();
    var ft = /* @__PURE__ */ __name(class {
      constructor(t) {
        if (t !== Qn)
          throw new Error("Skip instance can not be constructed directly");
      }
      ifUndefined(t) {
        return t === void 0 ? Vt : t;
      }
    }, "ft");
    var Vt = new ft(Qn);
    function me(e) {
      return e instanceof ft;
    }
    __name(me, "me");
    c();
    m();
    d();
    p();
    f();
    u();
    var Ir = /* @__PURE__ */ new WeakMap();
    var gt = /* @__PURE__ */ __name(class {
      constructor(t, r) {
        Ir.set(this, { sql: t, values: r });
      }
      get sql() {
        return Ir.get(this).sql;
      }
      get values() {
        return Ir.get(this).values;
      }
    }, "gt");
    function Jn(e) {
      return (...t) => new gt(e, t);
    }
    __name(Jn, "Jn");
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    function Lr(e) {
      return { ok: true, value: e, map(t) {
        return Lr(t(e));
      }, flatMap(t) {
        return t(e);
      } };
    }
    __name(Lr, "Lr");
    function ht(e) {
      return { ok: false, error: e, map() {
        return ht(e);
      }, flatMap() {
        return ht(e);
      } };
    }
    __name(ht, "ht");
    var _r = /* @__PURE__ */ __name(class {
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
    }, "_r");
    var Dr = /* @__PURE__ */ __name((e) => {
      let t = new _r();
      if (e.transactionContext === void 0 && e.startTransaction === void 0)
        throw new Error("[prisma:driverAdapters] Either `adapter.transactionContext` or `adapter.startTransaction` must be defined.");
      let r = e.transactionContext === void 0 ? oe(t, () => Promise.resolve(Lr(e))) : oe(t, e.transactionContext.bind(e)), n = { adapterName: e.adapterName, errorRegistry: t, queryRaw: oe(t, e.queryRaw.bind(e)), executeRaw: oe(t, e.executeRaw.bind(e)), provider: e.provider, transactionContext: async (...i) => (await r(...i)).map((s) => ys(t, s)) };
      return e.getConnectionInfo && (n.getConnectionInfo = ws(t, e.getConnectionInfo.bind(e))), n;
    }, "Dr");
    var ys = /* @__PURE__ */ __name((e, t) => {
      let r = oe(e, t.startTransaction.bind(t));
      return { adapterName: t.adapterName, provider: t.provider, queryRaw: oe(e, t.queryRaw.bind(t)), executeRaw: oe(e, t.executeRaw.bind(t)), startTransaction: async (...n) => (await r(...n)).map((o) => bs(e, o)) };
    }, "ys");
    var bs = /* @__PURE__ */ __name((e, t) => ({ adapterName: t.adapterName, provider: t.provider, options: t.options, queryRaw: oe(e, t.queryRaw.bind(t)), executeRaw: oe(e, t.executeRaw.bind(t)), commit: oe(e, t.commit.bind(t)), rollback: oe(e, t.rollback.bind(t)) }), "bs");
    function oe(e, t) {
      return async (...r) => {
        try {
          return await t(...r);
        } catch (n) {
          let i = e.registerNewError(n);
          return ht({ kind: "GenericJs", id: i });
        }
      };
    }
    __name(oe, "oe");
    function ws(e, t) {
      return (...r) => {
        try {
          return t(...r);
        } catch (n) {
          let i = e.registerNewError(n);
          return ht({ kind: "GenericJs", id: i });
        }
      };
    }
    __name(ws, "ws");
    var ko = Fe(Gn());
    var zO = Fe(Wn());
    Ln();
    hn();
    Mn();
    c();
    m();
    d();
    p();
    f();
    u();
    var X = /* @__PURE__ */ __name(class e {
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
            let l = 0;
            for (; l < s.values.length; )
              this.values[o++] = s.values[l++], this.strings[o] = s.strings[l];
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
    }, "e");
    function Kn(e, t = ",", r = "", n = "") {
      if (e.length === 0)
        throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
      return new X([r, ...Array(e.length - 1).fill(t), n], e);
    }
    __name(Kn, "Kn");
    function Fr(e) {
      return new X([e], []);
    }
    __name(Fr, "Fr");
    var Hn = Fr("");
    function Nr(e, ...t) {
      return new X(e, t);
    }
    __name(Nr, "Nr");
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    function yt(e) {
      return { getKeys() {
        return Object.keys(e);
      }, getPropertyValue(t) {
        return e[t];
      } };
    }
    __name(yt, "yt");
    c();
    m();
    d();
    p();
    f();
    u();
    function H(e, t) {
      return { getKeys() {
        return [e];
      }, getPropertyValue() {
        return t();
      } };
    }
    __name(H, "H");
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    var de = /* @__PURE__ */ __name(class {
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
    }, "de");
    function Ie(e) {
      let t = new de();
      return { getKeys() {
        return e.getKeys();
      }, getPropertyValue(r) {
        return t.getOrCreate(r, () => e.getPropertyValue(r));
      }, getPropertyDescriptor(r) {
        return e.getPropertyDescriptor?.(r);
      } };
    }
    __name(Ie, "Ie");
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    var $t = { enumerable: true, configurable: true, writable: true };
    function jt(e) {
      let t = new Set(e);
      return { getOwnPropertyDescriptor: () => $t, has: (r, n) => t.has(n), set: (r, n, i) => t.add(n) && Reflect.set(r, n, i), ownKeys: () => [...t] };
    }
    __name(jt, "jt");
    var zn = Symbol.for("nodejs.util.inspect.custom");
    function pe(e, t) {
      let r = xs(t), n = /* @__PURE__ */ new Set(), i = new Proxy(e, { get(o, s) {
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
        let s = Yn(Reflect.ownKeys(o), r), a = Yn(Array.from(r.keys()), r);
        return [.../* @__PURE__ */ new Set([...s, ...a, ...n])];
      }, set(o, s, a) {
        return r.get(s)?.getPropertyDescriptor?.(s)?.writable === false ? false : (n.add(s), Reflect.set(o, s, a));
      }, getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable)
          return a;
        let l = r.get(s);
        return l ? l.getPropertyDescriptor ? { ...$t, ...l?.getPropertyDescriptor(s) } : $t : a;
      }, defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      } });
      return i[zn] = function() {
        let o = { ...this };
        return delete o[zn], o;
      }, i;
    }
    __name(pe, "pe");
    function xs(e) {
      let t = /* @__PURE__ */ new Map();
      for (let r of e) {
        let n = r.getKeys();
        for (let i of n)
          t.set(i, r);
      }
      return t;
    }
    __name(xs, "xs");
    function Yn(e, t) {
      return e.filter((r) => t.get(r)?.has?.(r) ?? true);
    }
    __name(Yn, "Yn");
    c();
    m();
    d();
    p();
    f();
    u();
    function $e(e) {
      return { getKeys() {
        return e;
      }, has() {
        return false;
      }, getPropertyValue() {
      } };
    }
    __name($e, "$e");
    c();
    m();
    d();
    p();
    f();
    u();
    function Qt(e, t) {
      return { batch: e, transaction: t?.kind === "batch" ? { isolationLevel: t.options.isolationLevel } : void 0 };
    }
    __name(Qt, "Qt");
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    var je = /* @__PURE__ */ __name(class {
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
    }, "je");
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    function Xn(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    __name(Xn, "Xn");
    c();
    m();
    d();
    p();
    f();
    u();
    function Qe(e) {
      return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
    }
    __name(Qe, "Qe");
    function Jt(e) {
      return e.toString() !== "Invalid Date";
    }
    __name(Jt, "Jt");
    c();
    m();
    d();
    p();
    f();
    u();
    u();
    function Je(e) {
      return v.isDecimal(e) ? true : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
    }
    __name(Je, "Je");
    c();
    m();
    d();
    p();
    f();
    u();
    var bt = /* @__PURE__ */ __name(class {
      constructor(t, r, n, i, o) {
        this.modelName = t, this.name = r, this.typeName = n, this.isList = i, this.isEnum = o;
      }
      _toGraphQLInputType() {
        let t = this.isList ? "List" : "", r = this.isEnum ? "Enum" : "";
        return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
      }
    }, "bt");
    function Ge(e) {
      return e instanceof bt;
    }
    __name(Ge, "Ge");
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    var Gt = /* @__PURE__ */ __name(class {
      constructor(t) {
        this.value = t;
      }
      write(t) {
        t.write(this.value);
      }
      markAsError() {
        this.value.markAsError();
      }
    }, "Gt");
    c();
    m();
    d();
    p();
    f();
    u();
    var Wt = /* @__PURE__ */ __name((e) => e, "Wt");
    var Kt = { bold: Wt, red: Wt, green: Wt, dim: Wt, enabled: false };
    var Zn = { bold: _t, red: qe, green: Pn, dim: Dt, enabled: true };
    var We = { write(e) {
      e.writeLine(",");
    } };
    c();
    m();
    d();
    p();
    f();
    u();
    var fe = /* @__PURE__ */ __name(class {
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
    }, "fe");
    c();
    m();
    d();
    p();
    f();
    u();
    var ve = /* @__PURE__ */ __name(class {
      constructor() {
        this.hasError = false;
      }
      markAsError() {
        return this.hasError = true, this;
      }
    }, "ve");
    var Ke = /* @__PURE__ */ __name(class extends ve {
      constructor() {
        super(...arguments);
        this.items = [];
      }
      addItem(r) {
        return this.items.push(new Gt(r)), this;
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
        let n = new fe("[]");
        this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
      }
      writeWithItems(r) {
        let { colors: n } = r.context;
        r.writeLine("[").withIndent(() => r.writeJoined(We, this.items).newLine()).write("]"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(n.red("~".repeat(this.getPrintWidth())));
        });
      }
      asObject() {
      }
    }, "Ke");
    c();
    m();
    d();
    p();
    f();
    u();
    var ei = ": ";
    var Ht = /* @__PURE__ */ __name(class {
      constructor(t, r) {
        this.name = t;
        this.value = r;
        this.hasError = false;
      }
      markAsError() {
        this.hasError = true;
      }
      getPrintWidth() {
        return this.name.length + this.value.getPrintWidth() + ei.length;
      }
      write(t) {
        let r = new fe(this.name);
        this.hasError && r.underline().setColor(t.context.colors.red), t.write(r).write(ei).write(this.value);
      }
    }, "Ht");
    c();
    m();
    d();
    p();
    f();
    u();
    var He = /* @__PURE__ */ __name(class e extends ve {
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
          let l;
          if (s.value instanceof e ? l = s.value.getField(a) : s.value instanceof Ke && (l = s.value.getField(Number(a))), !l)
            return;
          s = l;
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
        let n = new fe("{}");
        this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
      }
      writeWithContents(r, n) {
        r.writeLine("{").withIndent(() => {
          r.writeJoined(We, [...n, ...this.suggestions]).newLine();
        }), r.write("}"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
        });
      }
    }, "e");
    c();
    m();
    d();
    p();
    f();
    u();
    var W = /* @__PURE__ */ __name(class extends ve {
      constructor(r) {
        super();
        this.text = r;
      }
      getPrintWidth() {
        return this.text.length;
      }
      write(r) {
        let n = new fe(this.text);
        this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
      }
      asObject() {
      }
    }, "W");
    var Ur = /* @__PURE__ */ __name(class {
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
    }, "Ur");
    function ze(e) {
      return new Ur(ti(e));
    }
    __name(ze, "ze");
    function ti(e) {
      let t = new He();
      for (let [r, n] of Object.entries(e)) {
        let i = new Ht(r, ri(n));
        t.addField(i);
      }
      return t;
    }
    __name(ti, "ti");
    function ri(e) {
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
      if (Je(e))
        return new W(`new Prisma.Decimal("${e.toFixed()}")`);
      if (e instanceof Uint8Array)
        return b.isBuffer(e) ? new W(`Buffer.alloc(${e.byteLength})`) : new W(`new Uint8Array(${e.byteLength})`);
      if (e instanceof Date) {
        let t = Jt(e) ? e.toISOString() : "Invalid Date";
        return new W(`new Date("${t}")`);
      }
      return e instanceof xe ? new W(`Prisma.${e._getName()}`) : Ge(e) ? new W(`prisma.${Xn(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? vs(e) : typeof e == "object" ? ti(e) : new W(Object.prototype.toString.call(e));
    }
    __name(ri, "ri");
    function vs(e) {
      let t = new Ke();
      for (let r of e)
        t.addItem(ri(r));
      return t;
    }
    __name(vs, "vs");
    function zt(e, t) {
      let r = t === "pretty" ? Zn : Kt, n = e.renderAllMessages(r), i = new je(0, { colors: r }).write(e).toString();
      return { message: n, args: i };
    }
    __name(zt, "zt");
    function ni(e) {
      if (e === void 0)
        return "";
      let t = ze(e);
      return new je(0, { colors: Kt }).write(t).toString();
    }
    __name(ni, "ni");
    c();
    m();
    d();
    p();
    f();
    u();
    var Ts = "P2037";
    function Yt({ error: e, user_facing_error: t }, r, n) {
      return t.error_code ? new J(Cs(t, n), { code: t.error_code, clientVersion: r, meta: t.meta, batchRequestIdx: t.batch_request_idx }) : new G(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
    }
    __name(Yt, "Yt");
    function Cs(e, t) {
      let r = e.message;
      return (t === "postgresql" || t === "postgres" || t === "mysql") && e.error_code === Ts && (r += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`), r;
    }
    __name(Cs, "Cs");
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    var qr = /* @__PURE__ */ __name(class {
      getLocation() {
        return null;
      }
    }, "qr");
    function Te(e) {
      return typeof $EnabledCallSite == "function" && e !== "minimal" ? new $EnabledCallSite() : new qr();
    }
    __name(Te, "Te");
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    var ii = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
    function Ye(e = {}) {
      let t = As(e);
      return Object.entries(t).reduce((n, [i, o]) => (ii[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
    }
    __name(Ye, "Ye");
    function As(e = {}) {
      return typeof e._count == "boolean" ? { ...e, _count: { _all: e._count } } : e;
    }
    __name(As, "As");
    function Xt(e = {}) {
      return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
    }
    __name(Xt, "Xt");
    function oi(e, t) {
      let r = Xt(e);
      return t({ action: "aggregate", unpacker: r, argsMapper: Ye })(e);
    }
    __name(oi, "oi");
    c();
    m();
    d();
    p();
    f();
    u();
    function Ss(e = {}) {
      let { select: t, ...r } = e;
      return typeof t == "object" ? Ye({ ...r, _count: t }) : Ye({ ...r, _count: { _all: true } });
    }
    __name(Ss, "Ss");
    function Os(e = {}) {
      return typeof e.select == "object" ? (t) => Xt(e)(t)._count : (t) => Xt(e)(t)._count._all;
    }
    __name(Os, "Os");
    function si(e, t) {
      return t({ action: "count", unpacker: Os(e), argsMapper: Ss })(e);
    }
    __name(si, "si");
    c();
    m();
    d();
    p();
    f();
    u();
    function ks(e = {}) {
      let t = Ye(e);
      if (Array.isArray(t.by))
        for (let r of t.by)
          typeof r == "string" && (t.select[r] = true);
      else
        typeof t.by == "string" && (t.select[t.by] = true);
      return t;
    }
    __name(ks, "ks");
    function Ms(e = {}) {
      return (t) => (typeof e?._count == "boolean" && t.forEach((r) => {
        r._count = r._count._all;
      }), t);
    }
    __name(Ms, "Ms");
    function ai(e, t) {
      return t({ action: "groupBy", unpacker: Ms(e), argsMapper: ks })(e);
    }
    __name(ai, "ai");
    function li(e, t, r) {
      if (t === "aggregate")
        return (n) => oi(n, r);
      if (t === "count")
        return (n) => si(n, r);
      if (t === "groupBy")
        return (n) => ai(n, r);
    }
    __name(li, "li");
    c();
    m();
    d();
    p();
    f();
    u();
    function ui(e, t) {
      let r = t.fields.filter((i) => !i.relationName), n = Ar(r, (i) => i.name);
      return new Proxy({}, { get(i, o) {
        if (o in i || typeof o == "symbol")
          return i[o];
        let s = n[o];
        if (s)
          return new bt(e, o, s.type, s.isList, s.kind === "enum");
      }, ...jt(Object.keys(n)) });
    }
    __name(ui, "ui");
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    var ci = /* @__PURE__ */ __name((e) => Array.isArray(e) ? e : e.split("."), "ci");
    var Br = /* @__PURE__ */ __name((e, t) => ci(t).reduce((r, n) => r && r[n], e), "Br");
    var mi = /* @__PURE__ */ __name((e, t, r) => ci(t).reduceRight((n, i, o, s) => Object.assign({}, Br(e, s.slice(0, o)), { [i]: n }), r), "mi");
    function Is(e, t) {
      return e === void 0 || t === void 0 ? [] : [...t, "select", e];
    }
    __name(Is, "Is");
    function Ls(e, t, r) {
      return t === void 0 ? e ?? {} : mi(t, r, e || true);
    }
    __name(Ls, "Ls");
    function Vr(e, t, r, n, i, o) {
      let a = e._runtimeDataModel.models[t].fields.reduce((l, y) => ({ ...l, [y.name]: y }), {});
      return (l) => {
        let y = Te(e._errorFormat), T = Is(n, i), C = Ls(l, o, T), O = r({ dataPath: T, callsite: y })(C), A = _s(e, t);
        return new Proxy(O, { get(M, S) {
          if (!A.includes(S))
            return M[S];
          let ne = [a[S].type, r, S], z = [T, C];
          return Vr(e, ...ne, ...z);
        }, ...jt([...A, ...Object.getOwnPropertyNames(O)]) });
      };
    }
    __name(Vr, "Vr");
    function _s(e, t) {
      return e._runtimeDataModel.models[t].fields.filter((r) => r.kind === "object").map((r) => r.name);
    }
    __name(_s, "_s");
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    var Ds = Fe(Dn());
    var Fs = { red: qe, gray: Rn, dim: Dt, bold: _t, underline: xn, highlightSource: (e) => e.highlight() };
    var Ns = { red: (e) => e, gray: (e) => e, dim: (e) => e, bold: (e) => e, underline: (e) => e, highlightSource: (e) => e };
    function Us({ message: e, originalMethod: t, isPanic: r, callArguments: n }) {
      return { functionName: `prisma.${t}()`, message: e, isPanic: r ?? false, callArguments: n };
    }
    __name(Us, "Us");
    function qs({ functionName: e, location: t, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
      let a = [""], l = t ? " in" : ":";
      if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)), t && a.push(s.underline(Bs(t))), i) {
        a.push("");
        let y = [i.toString()];
        o && (y.push(o), y.push(s.dim(")"))), a.push(y.join("")), o && a.push("");
      } else
        a.push(""), o && a.push(o), a.push("");
      return a.push(r), a.join(`
`);
    }
    __name(qs, "qs");
    function Bs(e) {
      let t = [e.fileName];
      return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(":");
    }
    __name(Bs, "Bs");
    function Xe(e) {
      let t = e.showColors ? Fs : Ns, r;
      return typeof $getTemplateParameters < "u" ? r = $getTemplateParameters(e, t) : r = Us(e), qs(r, t);
    }
    __name(Xe, "Xe");
    function di(e, t, r, n) {
      return e === Me.ModelAction.findFirstOrThrow || e === Me.ModelAction.findUniqueOrThrow ? Vs(t, r, n) : n;
    }
    __name(di, "di");
    function Vs(e, t, r) {
      return async (n) => {
        if ("rejectOnNotFound" in n.args) {
          let o = Xe({ originalMethod: n.clientMethod, callsite: n.callsite, message: "'rejectOnNotFound' option is not supported" });
          throw new j(o, { clientVersion: t });
        }
        return await r(n).catch((o) => {
          throw o instanceof J && o.code === "P2025" ? new we(`No ${e} found`, t) : o;
        });
      };
    }
    __name(Vs, "Vs");
    c();
    m();
    d();
    p();
    f();
    u();
    function ge(e) {
      return e.replace(/^./, (t) => t.toLowerCase());
    }
    __name(ge, "ge");
    var $s = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
    var js = ["aggregate", "count", "groupBy"];
    function $r(e, t) {
      let r = e._extensions.getAllModelExtensions(t) ?? {}, n = [Qs(e, t), Gs(e, t), yt(r), H("name", () => t), H("$name", () => t), H("$parent", () => e._appliedParent)];
      return pe({}, n);
    }
    __name($r, "$r");
    function Qs(e, t) {
      let r = ge(t), n = Object.keys(Me.ModelAction).concat("count");
      return { getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = i, s = /* @__PURE__ */ __name((l) => e._request(l), "s");
        s = di(o, t, e._clientVersion, s);
        let a = /* @__PURE__ */ __name((l) => (y) => {
          let T = Te(e._errorFormat);
          return e._createPrismaPromise((C) => {
            let O = { args: y, dataPath: [], action: o, model: t, clientMethod: `${r}.${i}`, jsModelName: r, transaction: C, callsite: T };
            return s({ ...O, ...l });
          });
        }, "a");
        return $s.includes(o) ? Vr(e, t, a) : Js(i) ? li(e, i, a) : a({});
      } };
    }
    __name(Qs, "Qs");
    function Js(e) {
      return js.includes(e);
    }
    __name(Js, "Js");
    function Gs(e, t) {
      return Ie(H("fields", () => {
        let r = e._runtimeDataModel.models[t];
        return ui(t, r);
      }));
    }
    __name(Gs, "Gs");
    c();
    m();
    d();
    p();
    f();
    u();
    function pi(e) {
      return e.replace(/^./, (t) => t.toUpperCase());
    }
    __name(pi, "pi");
    var jr = Symbol();
    function wt(e) {
      let t = [Ws(e), H(jr, () => e), H("$parent", () => e._appliedParent)], r = e._extensions.getAllClientExtensions();
      return r && t.push(yt(r)), pe(e, t);
    }
    __name(wt, "wt");
    function Ws(e) {
      let t = Object.keys(e._runtimeDataModel.models), r = t.map(ge), n = [...new Set(t.concat(r))];
      return Ie({ getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = pi(i);
        if (e._runtimeDataModel.models[o] !== void 0)
          return $r(e, o);
        if (e._runtimeDataModel.models[i] !== void 0)
          return $r(e, i);
      }, getPropertyDescriptor(i) {
        if (!r.includes(i))
          return { enumerable: false };
      } });
    }
    __name(Ws, "Ws");
    function fi(e) {
      return e[jr] ? e[jr] : e;
    }
    __name(fi, "fi");
    function gi(e) {
      if (typeof e == "function")
        return e(this);
      if (e.client?.__AccelerateEngine) {
        let r = e.client.__AccelerateEngine;
        this._originalClient._engine = new r(this._originalClient._accelerateEngineConfig);
      }
      let t = Object.create(this._originalClient, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: true }, $use: { value: void 0 }, $on: { value: void 0 } });
      return wt(t);
    }
    __name(gi, "gi");
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    function hi({ result: e, modelName: t, select: r, omit: n, extensions: i }) {
      let o = i.getAllComputedFields(t);
      if (!o)
        return e;
      let s = [], a = [];
      for (let l of Object.values(o)) {
        if (n) {
          if (n[l.name])
            continue;
          let y = l.needs.filter((T) => n[T]);
          y.length > 0 && a.push($e(y));
        } else if (r) {
          if (!r[l.name])
            continue;
          let y = l.needs.filter((T) => !r[T]);
          y.length > 0 && a.push($e(y));
        }
        Ks(e, l.needs) && s.push(Hs(l, pe(e, s)));
      }
      return s.length > 0 || a.length > 0 ? pe(e, [...s, ...a]) : e;
    }
    __name(hi, "hi");
    function Ks(e, t) {
      return t.every((r) => Rr(e, r));
    }
    __name(Ks, "Ks");
    function Hs(e, t) {
      return Ie(H(e.name, () => e.compute(t)));
    }
    __name(Hs, "Hs");
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    function Zt({ visitor: e, result: t, args: r, runtimeDataModel: n, modelName: i }) {
      if (Array.isArray(t)) {
        for (let s = 0; s < t.length; s++)
          t[s] = Zt({ result: t[s], args: r, modelName: i, runtimeDataModel: n, visitor: e });
        return t;
      }
      let o = e(t, i, r) ?? t;
      return r.include && yi({ includeOrSelect: r.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), r.select && yi({ includeOrSelect: r.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), o;
    }
    __name(Zt, "Zt");
    function yi({ includeOrSelect: e, result: t, parentModelName: r, runtimeDataModel: n, visitor: i }) {
      for (let [o, s] of Object.entries(e)) {
        if (!s || t[o] == null || me(s))
          continue;
        let l = n.models[r].fields.find((T) => T.name === o);
        if (!l || l.kind !== "object" || !l.relationName)
          continue;
        let y = typeof s == "object" ? s : {};
        t[o] = Zt({ visitor: i, result: t[o], args: y, modelName: l.type, runtimeDataModel: n });
      }
    }
    __name(yi, "yi");
    function bi({ result: e, modelName: t, args: r, extensions: n, runtimeDataModel: i, globalOmit: o }) {
      return n.isEmpty() || e == null || typeof e != "object" || !i.models[t] ? e : Zt({ result: e, args: r ?? {}, modelName: t, runtimeDataModel: i, visitor: (a, l, y) => {
        let T = ge(l);
        return hi({ result: a, modelName: T, select: y.select, omit: y.select ? void 0 : { ...o?.[T], ...y.omit }, extensions: n });
      } });
    }
    __name(bi, "bi");
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    u();
    function wi(e) {
      if (e instanceof X)
        return zs(e);
      if (Array.isArray(e)) {
        let r = [e[0]];
        for (let n = 1; n < e.length; n++)
          r[n] = Et(e[n]);
        return r;
      }
      let t = {};
      for (let r in e)
        t[r] = Et(e[r]);
      return t;
    }
    __name(wi, "wi");
    function zs(e) {
      return new X(e.strings, e.values);
    }
    __name(zs, "zs");
    function Et(e) {
      if (typeof e != "object" || e == null || e instanceof xe || Ge(e))
        return e;
      if (Je(e))
        return new ce(e.toFixed());
      if (Qe(e))
        return /* @__PURE__ */ new Date(+e);
      if (ArrayBuffer.isView(e))
        return e.slice(0);
      if (Array.isArray(e)) {
        let t = e.length, r;
        for (r = Array(t); t--; )
          r[t] = Et(e[t]);
        return r;
      }
      if (typeof e == "object") {
        let t = {};
        for (let r in e)
          r === "__proto__" ? Object.defineProperty(t, r, { value: Et(e[r]), configurable: true, enumerable: true, writable: true }) : t[r] = Et(e[r]);
        return t;
      }
      be(e, "Unknown value");
    }
    __name(Et, "Et");
    function xi(e, t, r, n = 0) {
      return e._createPrismaPromise((i) => {
        let o = t.customDataProxyFetch;
        return "transaction" in t && i !== void 0 && (t.transaction?.kind === "batch" && t.transaction.lock.then(), t.transaction = i), n === r.length ? e._executeRequest(t) : r[n]({ model: t.model, operation: t.model ? t.action : t.clientMethod, args: wi(t.args ?? {}), __internalParams: t, query: (s, a = t) => {
          let l = a.customDataProxyFetch;
          return a.customDataProxyFetch = Ci(o, l), a.args = s, xi(e, a, r, n + 1);
        } });
      });
    }
    __name(xi, "xi");
    function Pi(e, t) {
      let { jsModelName: r, action: n, clientMethod: i } = t, o = r ? n : i;
      if (e._extensions.isEmpty())
        return e._executeRequest(t);
      let s = e._extensions.getAllQueryCallbacks(r ?? "$none", o);
      return xi(e, t, s);
    }
    __name(Pi, "Pi");
    function vi(e) {
      return (t) => {
        let r = { requests: t }, n = t[0].extensions.getAllBatchQueryCallbacks();
        return n.length ? Ti(r, n, 0, e) : e(r);
      };
    }
    __name(vi, "vi");
    function Ti(e, t, r, n) {
      if (r === t.length)
        return n(e);
      let i = e.customDataProxyFetch, o = e.requests[0].transaction;
      return t[r]({ args: { queries: e.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 } : void 0 }, __internalParams: e, query(s, a = e) {
        let l = a.customDataProxyFetch;
        return a.customDataProxyFetch = Ci(i, l), Ti(a, t, r + 1, n);
      } });
    }
    __name(Ti, "Ti");
    var Ei = /* @__PURE__ */ __name((e) => e, "Ei");
    function Ci(e = Ei, t = Ei) {
      return (r) => e(t(r));
    }
    __name(Ci, "Ci");
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    function Ai(e, t, r) {
      let n = ge(r);
      return !t.result || !(t.result.$allModels || t.result[n]) ? e : Ys({ ...e, ...Ri(t.name, e, t.result.$allModels), ...Ri(t.name, e, t.result[n]) });
    }
    __name(Ai, "Ai");
    function Ys(e) {
      let t = new de(), r = /* @__PURE__ */ __name((n, i) => t.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n])), "r");
      return Be(e, (n) => ({ ...n, needs: r(n.name, /* @__PURE__ */ new Set()) }));
    }
    __name(Ys, "Ys");
    function Ri(e, t, r) {
      return r ? Be(r, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: Xs(t, o, i) })) : {};
    }
    __name(Ri, "Ri");
    function Xs(e, t, r) {
      let n = e?.[t]?.compute;
      return n ? (i) => r({ ...i, [t]: n(i) }) : r;
    }
    __name(Xs, "Xs");
    function Si(e, t) {
      if (!t)
        return e;
      let r = { ...e };
      for (let n of Object.values(t))
        if (e[n.name])
          for (let i of n.needs)
            r[i] = true;
      return r;
    }
    __name(Si, "Si");
    function Oi(e, t) {
      if (!t)
        return e;
      let r = { ...e };
      for (let n of Object.values(t))
        if (!e[n.name])
          for (let i of n.needs)
            delete r[i];
      return r;
    }
    __name(Oi, "Oi");
    var er = /* @__PURE__ */ __name(class {
      constructor(t, r) {
        this.extension = t;
        this.previous = r;
        this.computedFieldsCache = new de();
        this.modelExtensionsCache = new de();
        this.queryCallbacksCache = new de();
        this.clientExtensions = ut(() => this.extension.client ? { ...this.previous?.getAllClientExtensions(), ...this.extension.client } : this.previous?.getAllClientExtensions());
        this.batchCallbacks = ut(() => {
          let t2 = this.previous?.getAllBatchQueryCallbacks() ?? [], r2 = this.extension.query?.$__internalBatch;
          return r2 ? t2.concat(r2) : t2;
        });
      }
      getAllComputedFields(t) {
        return this.computedFieldsCache.getOrCreate(t, () => Ai(this.previous?.getAllComputedFields(t), this.extension, t));
      }
      getAllClientExtensions() {
        return this.clientExtensions.get();
      }
      getAllModelExtensions(t) {
        return this.modelExtensionsCache.getOrCreate(t, () => {
          let r = ge(t);
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
    }, "er");
    var tr = /* @__PURE__ */ __name(class e {
      constructor(t) {
        this.head = t;
      }
      static empty() {
        return new e();
      }
      static single(t) {
        return new e(new er(t));
      }
      isEmpty() {
        return this.head === void 0;
      }
      append(t) {
        return new e(new er(t, this.head));
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
    }, "e");
    c();
    m();
    d();
    p();
    f();
    u();
    var ki = ee("prisma:client");
    var Mi = { Vercel: "vercel", "Netlify CI": "netlify" };
    function Ii({ postinstall: e, ciName: t, clientVersion: r }) {
      if (ki("checkPlatformCaching:postinstall", e), ki("checkPlatformCaching:ciName", t), e === true && t && t in Mi) {
        let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${Mi[t]}-build`;
        throw console.error(n), new L(n, r);
      }
    }
    __name(Ii, "Ii");
    c();
    m();
    d();
    p();
    f();
    u();
    function Li(e, t) {
      return e ? e.datasources ? e.datasources : e.datasourceUrl ? { [t[0]]: { url: e.datasourceUrl } } : {} : {};
    }
    __name(Li, "Li");
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    var Zs = "Cloudflare-Workers";
    var ea = "node";
    function _i() {
      return typeof Netlify == "object" ? "netlify" : typeof EdgeRuntime == "string" ? "edge-light" : globalThis.navigator?.userAgent === Zs ? "workerd" : globalThis.Deno ? "deno" : globalThis.__lagon__ ? "lagon" : globalThis.process?.release?.name === ea ? "node" : globalThis.Bun ? "bun" : globalThis.fastly ? "fastly" : "unknown";
    }
    __name(_i, "_i");
    var ta = { node: "Node.js", workerd: "Cloudflare Workers", deno: "Deno and Deno Deploy", netlify: "Netlify Edge Functions", "edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)" };
    function Ce() {
      let e = _i();
      return { id: e, prettyName: ta[e] || e, isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e) };
    }
    __name(Ce, "Ce");
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    function rr({ inlineDatasources: e, overrideDatasources: t, env: r, clientVersion: n }) {
      let i, o = Object.keys(e)[0], s = e[o]?.url, a = t[o]?.url;
      if (o === void 0 ? i = void 0 : a ? i = a : s?.value ? i = s.value : s?.fromEnvVar && (i = r[s.fromEnvVar]), s?.fromEnvVar !== void 0 && i === void 0)
        throw Ce().id === "workerd" ? new L(`error: Environment variable not found: ${s.fromEnvVar}.

In Cloudflare module Workers, environment variables are available only in the Worker's \`env\` parameter of \`fetch\`.
To solve this, provide the connection string directly: https://pris.ly/d/cloudflare-datasource-url`, n) : new L(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
      if (i === void 0)
        throw new L("error: Missing URL environment variable, value, or override.", n);
      return i;
    }
    __name(rr, "rr");
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    function Di(e) {
      if (e?.kind === "itx")
        return e.options.id;
    }
    __name(Di, "Di");
    c();
    m();
    d();
    p();
    f();
    u();
    var Qr;
    var Fi = { async loadLibrary(e) {
      let { clientVersion: t, adapter: r, engineWasm: n } = e;
      if (r === void 0)
        throw new L(`The \`adapter\` option for \`PrismaClient\` is required in this context (${Ce().prettyName})`, t);
      if (n === void 0)
        throw new L("WASM engine was unexpectedly `undefined`", t);
      Qr === void 0 && (Qr = (async () => {
        let o = n.getRuntime(), s = await n.getQueryEngineWasmModule();
        if (s == null)
          throw new L("The loaded wasm module was unexpectedly `undefined` or `null` once loaded", t);
        let a = { "./query_engine_bg.js": o }, l = new WebAssembly.Instance(s, a);
        return o.__wbg_set_wasm(l.exports), o.QueryEngine;
      })());
      let i = await Qr;
      return { debugPanic() {
        return Promise.reject("{}");
      }, dmmf() {
        return Promise.resolve("{}");
      }, version() {
        return { commit: "unknown", version: "unknown" };
      }, QueryEngine: i };
    } };
    var ra = "P2036";
    var he = ee("prisma:client:libraryEngine");
    function na(e) {
      return e.item_type === "query" && "query" in e;
    }
    __name(na, "na");
    function ia(e) {
      return "level" in e ? e.level === "error" && e.message === "PANIC" : false;
    }
    __name(ia, "ia");
    var rC = [...Tr, "native"];
    var xt = /* @__PURE__ */ __name(class {
      constructor(t, r) {
        this.name = "LibraryEngine";
        this.libraryLoader = r ?? Fi, this.config = t, this.libraryStarted = false, this.logQueries = t.logQueries ?? false, this.logLevel = t.logLevel ?? "error", this.logEmitter = t.logEmitter, this.datamodel = t.inlineSchema, t.enableDebugLogs && (this.logLevel = "debug");
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
        if (oa(s)) {
          let a = this.getExternalAdapterError(s);
          throw a ? a.error : new J(s.message, { code: s.error_code, clientVersion: this.config.clientVersion, meta: s.meta });
        }
        return s;
      }
      async instantiateLibrary() {
        if (he("internalSetup"), this.libraryInstantiationPromise)
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
            r && he("Using driver adapter: %O", r), this.engine = new this.QueryEngineConstructor({ datamodel: this.datamodel, env: g.env, logQueries: this.config.logQueries ?? false, ignoreEnvVarErrors: true, datasourceOverrides: this.datasourceOverrides ?? {}, logLevel: this.logLevel, configDir: this.config.cwd, engineProtocol: "json" }, (n) => {
              t.deref()?.logger(n);
            }, r);
          } catch (t) {
            let r = t, n = this.parseInitError(r.message);
            throw typeof n == "string" ? r : new L(n.message, this.config.clientVersion, n.error_code);
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
          r.level = r?.level.toLowerCase() ?? "unknown", na(r) ? this.logEmitter.emit("query", { timestamp: /* @__PURE__ */ new Date(), query: r.query, params: r.params, duration: Number(r.duration_ms), target: r.module_path }) : (ia(r), this.logEmitter.emit(r.level, { timestamp: /* @__PURE__ */ new Date(), message: r.message, target: r.module_path }));
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
          return he(`library already starting, this.libraryStarted: ${this.libraryStarted}`), this.libraryStartingPromise;
        if (this.libraryStarted)
          return;
        let t = /* @__PURE__ */ __name(async () => {
          he("library starting");
          try {
            let r = { traceparent: this.config.tracingHelper.getTraceParent() };
            await this.engine?.connect(JSON.stringify(r)), this.libraryStarted = true, he("library started");
          } catch (r) {
            let n = this.parseInitError(r.message);
            throw typeof n == "string" ? r : new L(n.message, this.config.clientVersion, n.error_code);
          } finally {
            this.libraryStartingPromise = void 0;
          }
        }, "t");
        return this.libraryStartingPromise = this.config.tracingHelper.runInChildSpan("connect", t), this.libraryStartingPromise;
      }
      async stop() {
        if (await this.libraryStartingPromise, await this.executingQueryPromise, this.libraryStoppingPromise)
          return he("library is already stopping"), this.libraryStoppingPromise;
        if (!this.libraryStarted)
          return;
        let t = /* @__PURE__ */ __name(async () => {
          await new Promise((n) => setTimeout(n, 5)), he("library stopping");
          let r = { traceparent: this.config.tracingHelper.getTraceParent() };
          await this.engine?.disconnect(JSON.stringify(r)), this.libraryStarted = false, this.libraryStoppingPromise = void 0, he("library stopped");
        }, "t");
        return this.libraryStoppingPromise = this.config.tracingHelper.runInChildSpan("disconnect", t), this.libraryStoppingPromise;
      }
      version() {
        return this.versionInfo = this.library?.version(), this.versionInfo?.version ?? "unknown";
      }
      debugPanic(t) {
        return this.library?.debugPanic(t);
      }
      async request(t, { traceparent: r, interactiveTransaction: n }) {
        he(`sending request, this.libraryStarted: ${this.libraryStarted}`);
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
          if (s instanceof L)
            throw s;
          s.code === "GenericFailure" && s.message?.startsWith("PANIC:");
          let a = this.parseRequestError(s.message);
          throw typeof a == "string" ? s : new G(`${a.message}
${a.backtrace}`, { clientVersion: this.config.clientVersion });
        }
      }
      async requestBatch(t, { transaction: r, traceparent: n }) {
        he("requestBatch");
        let i = Qt(t, r);
        await this.start(), this.lastQuery = JSON.stringify(i), this.executingQueryPromise = this.engine.query(this.lastQuery, JSON.stringify({ traceparent: n }), Di(r));
        let o = await this.executingQueryPromise, s = this.parseEngineResponse(o);
        if (s.errors)
          throw s.errors.length === 1 ? this.buildQueryError(s.errors[0]) : new G(JSON.stringify(s.errors), { clientVersion: this.config.clientVersion });
        let { batchResult: a, errors: l } = s;
        if (Array.isArray(a))
          return a.map((y) => y.errors && y.errors.length > 0 ? this.loggerRustPanic ?? this.buildQueryError(y.errors[0]) : { data: y, elapsed: 0 });
        throw l && l.length === 1 ? new Error(l[0].error) : new Error(JSON.stringify(s));
      }
      buildQueryError(t) {
        t.user_facing_error.is_panic;
        let r = this.getExternalAdapterError(t.user_facing_error);
        return r ? r.error : Yt(t, this.config.clientVersion, this.config.activeProvider);
      }
      getExternalAdapterError(t) {
        if (t.error_code === ra && this.config.adapter) {
          let r = t.meta?.id;
          Ut(typeof r == "number", "Malformed external JS error received from the engine");
          let n = this.config.adapter.errorRegistry.consumeError(r);
          return Ut(n, "External error with reported id was not registered"), n;
        }
      }
      async metrics(t) {
        await this.start();
        let r = await this.engine.metrics(JSON.stringify(t));
        return t.format === "prometheus" ? r : this.parseEngineResponse(r);
      }
    }, "xt");
    function oa(e) {
      return typeof e == "object" && e !== null && e.error_code !== void 0;
    }
    __name(oa, "oa");
    c();
    m();
    d();
    p();
    f();
    u();
    var Pt = "Accelerate has not been setup correctly. Make sure your client is using `.$extends(withAccelerate())`. See https://pris.ly/d/accelerate-getting-started";
    var nr = /* @__PURE__ */ __name(class {
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
        throw new L(Pt, this.config.clientVersion);
      }
      metrics(t) {
        throw new L(Pt, this.config.clientVersion);
      }
      request(t, r) {
        throw new L(Pt, this.config.clientVersion);
      }
      requestBatch(t, r) {
        throw new L(Pt, this.config.clientVersion);
      }
      applyPendingMigrations() {
        throw new L(Pt, this.config.clientVersion);
      }
    }, "nr");
    function Ni({ copyEngine: e = true }, t) {
      let r;
      try {
        r = rr({ inlineDatasources: t.inlineDatasources, overrideDatasources: t.overrideDatasources, env: { ...t.env, ...g.env }, clientVersion: t.clientVersion });
      } catch {
      }
      e && r?.startsWith("prisma://") && lt("recommend--no-engine", "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)");
      let n = ot(t.generator), i = !!(r?.startsWith("prisma://") || !e), o = !!t.adapter, s = n === "library", a = n === "binary";
      if (i && o || o && false) {
        let l;
        throw e ? r?.startsWith("prisma://") ? l = ["Prisma Client was configured to use the `adapter` option but the URL was a `prisma://` URL.", "Please either use the `prisma://` URL or remove the `adapter` from the Prisma Client constructor."] : l = ["Prisma Client was configured to use both the `adapter` and Accelerate, please chose one."] : l = ["Prisma Client was configured to use the `adapter` option but `prisma generate` was run with `--no-engine`.", "Please run `prisma generate` without `--no-engine` to be able to use Prisma Client with the adapter."], new j(l.join(`
`), { clientVersion: t.clientVersion });
      }
      if (o)
        return new xt(t);
      if (i)
        return new nr(t);
      {
        let l = [`PrismaClient failed to initialize because it wasn't configured to run in this environment (${Ce().prettyName}).`, "In order to run Prisma Client in an edge runtime, you will need to configure one of the following options:", "- Enable Driver Adapters: https://pris.ly/d/driver-adapters", "- Enable Accelerate: https://pris.ly/d/accelerate"];
        throw new j(l.join(`
`), { clientVersion: t.clientVersion });
      }
      throw new j("Invalid client engine type, please use `library` or `binary`", { clientVersion: t.clientVersion });
    }
    __name(Ni, "Ni");
    c();
    m();
    d();
    p();
    f();
    u();
    function ir({ generator: e }) {
      return e?.previewFeatures ?? [];
    }
    __name(ir, "ir");
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    function Ze(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    __name(Ze, "Ze");
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    var ji = Fe(Jr());
    c();
    m();
    d();
    p();
    f();
    u();
    function Vi(e, t, r) {
      let n = $i(e), i = sa(n), o = la(i);
      o ? or(o, t, r) : t.addErrorMessage(() => "Unknown error");
    }
    __name(Vi, "Vi");
    function $i(e) {
      return e.errors.flatMap((t) => t.kind === "Union" ? $i(t) : [t]);
    }
    __name($i, "$i");
    function sa(e) {
      let t = /* @__PURE__ */ new Map(), r = [];
      for (let n of e) {
        if (n.kind !== "InvalidArgumentType") {
          r.push(n);
          continue;
        }
        let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = t.get(i);
        o ? t.set(i, { ...n, argument: { ...n.argument, typeNames: aa(o.argument.typeNames, n.argument.typeNames) } }) : t.set(i, n);
      }
      return r.push(...t.values()), r;
    }
    __name(sa, "sa");
    function aa(e, t) {
      return [...new Set(e.concat(t))];
    }
    __name(aa, "aa");
    function la(e) {
      return Sr(e, (t, r) => {
        let n = qi(t), i = qi(r);
        return n !== i ? n - i : Bi(t) - Bi(r);
      });
    }
    __name(la, "la");
    function qi(e) {
      let t = 0;
      return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t;
    }
    __name(qi, "qi");
    function Bi(e) {
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
    __name(Bi, "Bi");
    c();
    m();
    d();
    p();
    f();
    u();
    var te = /* @__PURE__ */ __name(class {
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
    }, "te");
    c();
    m();
    d();
    p();
    f();
    u();
    var vt = /* @__PURE__ */ __name(class {
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
          t.writeJoined(We, this.fields).newLine();
        }).write(r("}")).addMarginSymbol(r("+"));
      }
    }, "vt");
    function or(e, t, r) {
      switch (e.kind) {
        case "MutuallyExclusiveFields":
          ua(e, t);
          break;
        case "IncludeOnScalar":
          ca(e, t);
          break;
        case "EmptySelection":
          ma(e, t, r);
          break;
        case "UnknownSelectionField":
          ga(e, t);
          break;
        case "InvalidSelectionValue":
          ha(e, t);
          break;
        case "UnknownArgument":
          ya(e, t);
          break;
        case "UnknownInputField":
          ba(e, t);
          break;
        case "RequiredArgumentMissing":
          wa(e, t);
          break;
        case "InvalidArgumentType":
          Ea(e, t);
          break;
        case "InvalidArgumentValue":
          xa(e, t);
          break;
        case "ValueTooLarge":
          Pa(e, t);
          break;
        case "SomeFieldsMissing":
          va(e, t);
          break;
        case "TooManyFieldsGiven":
          Ta(e, t);
          break;
        case "Union":
          Vi(e, t, r);
          break;
        default:
          throw new Error("not implemented: " + e.kind);
      }
    }
    __name(or, "or");
    function ua(e, t) {
      let r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      r && (r.getField(e.firstField)?.markAsError(), r.getField(e.secondField)?.markAsError()), t.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.green(`\`${e.firstField}\``)} or ${n.green(`\`${e.secondField}\``)}, but ${n.red("not both")} at the same time.`);
    }
    __name(ua, "ua");
    function ca(e, t) {
      let [r, n] = Tt(e.selectionPath), i = e.outputType, o = t.arguments.getDeepSelectionParent(r)?.value;
      if (o && (o.getField(n)?.markAsError(), i))
        for (let s of i.fields)
          s.isRelation && o.addSuggestion(new te(s.name, "true"));
      t.addErrorMessage((s) => {
        let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
        return i ? a += ` on model ${s.bold(i.name)}. ${Ct(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
      });
    }
    __name(ca, "ca");
    function ma(e, t, r) {
      let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (n) {
        let i = n.getField("omit")?.value.asObject();
        if (i) {
          da(e, t, i);
          return;
        }
        if (n.hasField("select")) {
          pa(e, t);
          return;
        }
      }
      if (r?.[Ze(e.outputType.name)]) {
        fa(e, t);
        return;
      }
      t.addErrorMessage(() => `Unknown field at "${e.selectionPath.join(".")} selection"`);
    }
    __name(ma, "ma");
    function da(e, t, r) {
      r.removeAllFields();
      for (let n of e.outputType.fields)
        r.addSuggestion(new te(n.name, "false"));
      t.addErrorMessage((n) => `The ${n.red("omit")} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`);
    }
    __name(da, "da");
    function pa(e, t) {
      let r = e.outputType, n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value, i = n?.isEmpty() ?? false;
      n && (n.removeAllFields(), Gi(n, r)), t.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${Ct(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`);
    }
    __name(pa, "pa");
    function fa(e, t) {
      let r = new vt();
      for (let i of e.outputType.fields)
        i.isRelation || r.addField(i.name, "false");
      let n = new te("omit", r).makeRequired();
      if (e.selectionPath.length === 0)
        t.arguments.addSuggestion(n);
      else {
        let [i, o] = Tt(e.selectionPath), a = t.arguments.getDeepSelectionParent(i)?.value.asObject()?.getField(o);
        if (a) {
          let l = a?.value.asObject() ?? new He();
          l.addSuggestion(n), a.value = l;
        }
      }
      t.addErrorMessage((i) => `The global ${i.red("omit")} configuration excludes every field of the model ${i.bold(e.outputType.name)}. At least one field must be included in the result`);
    }
    __name(fa, "fa");
    function ga(e, t) {
      let r = Wi(e.selectionPath, t);
      if (r.parentKind !== "unknown") {
        r.field.markAsError();
        let n = r.parent;
        switch (r.parentKind) {
          case "select":
            Gi(n, e.outputType);
            break;
          case "include":
            Ca(n, e.outputType);
            break;
          case "omit":
            Ra(n, e.outputType);
            break;
        }
      }
      t.addErrorMessage((n) => {
        let i = [`Unknown field ${n.red(`\`${r.fieldName}\``)}`];
        return r.parentKind !== "unknown" && i.push(`for ${n.bold(r.parentKind)} statement`), i.push(`on model ${n.bold(`\`${e.outputType.name}\``)}.`), i.push(Ct(n)), i.join(" ");
      });
    }
    __name(ga, "ga");
    function ha(e, t) {
      let r = Wi(e.selectionPath, t);
      r.parentKind !== "unknown" && r.field.value.markAsError(), t.addErrorMessage((n) => `Invalid value for selection field \`${n.red(r.fieldName)}\`: ${e.underlyingError}`);
    }
    __name(ha, "ha");
    function ya(e, t) {
      let r = e.argumentPath[0], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && (n.getField(r)?.markAsError(), Aa(n, e.arguments)), t.addErrorMessage((i) => Qi(i, r, e.arguments.map((o) => o.name)));
    }
    __name(ya, "ya");
    function ba(e, t) {
      let [r, n] = Tt(e.argumentPath), i = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (i) {
        i.getDeepField(e.argumentPath)?.markAsError();
        let o = i.getDeepFieldValue(r)?.asObject();
        o && Ki(o, e.inputType);
      }
      t.addErrorMessage((o) => Qi(o, n, e.inputType.fields.map((s) => s.name)));
    }
    __name(ba, "ba");
    function Qi(e, t, r) {
      let n = [`Unknown argument \`${e.red(t)}\`.`], i = Oa(t, r);
      return i && n.push(`Did you mean \`${e.green(i)}\`?`), r.length > 0 && n.push(Ct(e)), n.join(" ");
    }
    __name(Qi, "Qi");
    function wa(e, t) {
      let r;
      t.addErrorMessage((l) => r?.value instanceof W && r.value.text === "null" ? `Argument \`${l.green(o)}\` must not be ${l.red("null")}.` : `Argument \`${l.green(o)}\` is missing.`);
      let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (!n)
        return;
      let [i, o] = Tt(e.argumentPath), s = new vt(), a = n.getDeepFieldValue(i)?.asObject();
      if (a)
        if (r = a.getField(o), r && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
          for (let l of e.inputTypes[0].fields)
            s.addField(l.name, l.typeNames.join(" | "));
          a.addSuggestion(new te(o, s).makeRequired());
        } else {
          let l = e.inputTypes.map(Ji).join(" | ");
          a.addSuggestion(new te(o, l).makeRequired());
        }
    }
    __name(wa, "wa");
    function Ji(e) {
      return e.kind === "list" ? `${Ji(e.elementType)}[]` : e.name;
    }
    __name(Ji, "Ji");
    function Ea(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
        let o = sr("or", e.argument.typeNames.map((s) => i.green(s)));
        return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
      });
    }
    __name(Ea, "Ea");
    function xa(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
        let o = [`Invalid value for argument \`${i.bold(r)}\``];
        if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push("."), e.argument.typeNames.length > 0) {
          let s = sr("or", e.argument.typeNames.map((a) => i.green(a)));
          o.push(` Expected ${s}.`);
        }
        return o.join("");
      });
    }
    __name(xa, "xa");
    function Pa(e, t) {
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
    __name(Pa, "Pa");
    function va(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (n) {
        let i = n.getDeepFieldValue(e.argumentPath)?.asObject();
        i && Ki(i, e.inputType);
      }
      t.addErrorMessage((i) => {
        let o = [`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${sr("or", e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(Ct(i)), o.join(" ");
      });
    }
    __name(va, "va");
    function Ta(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i = [];
      if (n) {
        let o = n.getDeepFieldValue(e.argumentPath)?.asObject();
        o && (o.markAsError(), i = Object.keys(o.getFields()));
      }
      t.addErrorMessage((o) => {
        let s = [`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${sr("and", i.map((a) => o.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
      });
    }
    __name(Ta, "Ta");
    function Gi(e, t) {
      for (let r of t.fields)
        e.hasField(r.name) || e.addSuggestion(new te(r.name, "true"));
    }
    __name(Gi, "Gi");
    function Ca(e, t) {
      for (let r of t.fields)
        r.isRelation && !e.hasField(r.name) && e.addSuggestion(new te(r.name, "true"));
    }
    __name(Ca, "Ca");
    function Ra(e, t) {
      for (let r of t.fields)
        !e.hasField(r.name) && !r.isRelation && e.addSuggestion(new te(r.name, "true"));
    }
    __name(Ra, "Ra");
    function Aa(e, t) {
      for (let r of t)
        e.hasField(r.name) || e.addSuggestion(new te(r.name, r.typeNames.join(" | ")));
    }
    __name(Aa, "Aa");
    function Wi(e, t) {
      let [r, n] = Tt(e), i = t.arguments.getDeepSubSelectionValue(r)?.asObject();
      if (!i)
        return { parentKind: "unknown", fieldName: n };
      let o = i.getFieldValue("select")?.asObject(), s = i.getFieldValue("include")?.asObject(), a = i.getFieldValue("omit")?.asObject(), l = o?.getField(n);
      return o && l ? { parentKind: "select", parent: o, field: l, fieldName: n } : (l = s?.getField(n), s && l ? { parentKind: "include", field: l, parent: s, fieldName: n } : (l = a?.getField(n), a && l ? { parentKind: "omit", field: l, parent: a, fieldName: n } : { parentKind: "unknown", fieldName: n }));
    }
    __name(Wi, "Wi");
    function Ki(e, t) {
      if (t.kind === "object")
        for (let r of t.fields)
          e.hasField(r.name) || e.addSuggestion(new te(r.name, r.typeNames.join(" | ")));
    }
    __name(Ki, "Ki");
    function Tt(e) {
      let t = [...e], r = t.pop();
      if (!r)
        throw new Error("unexpected empty path");
      return [t, r];
    }
    __name(Tt, "Tt");
    function Ct({ green: e, enabled: t }) {
      return "Available options are " + (t ? `listed in ${e("green")}` : "marked with ?") + ".";
    }
    __name(Ct, "Ct");
    function sr(e, t) {
      if (t.length === 1)
        return t[0];
      let r = [...t], n = r.pop();
      return `${r.join(", ")} ${e} ${n}`;
    }
    __name(sr, "sr");
    var Sa = 3;
    function Oa(e, t) {
      let r = 1 / 0, n;
      for (let i of t) {
        let o = (0, ji.default)(e, i);
        o > Sa || o < r && (r = o, n = i);
      }
      return n;
    }
    __name(Oa, "Oa");
    function ar({ args: e, errors: t, errorFormat: r, callsite: n, originalMethod: i, clientVersion: o, globalOmit: s }) {
      let a = ze(e);
      for (let C of t)
        or(C, a, s);
      let { message: l, args: y } = zt(a, r), T = Xe({ message: l, callsite: n, originalMethod: i, showColors: r === "pretty", callArguments: y });
      throw new j(T, { clientVersion: o });
    }
    __name(ar, "ar");
    var ka = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", createManyAndReturn: "createManyAndReturn", update: "updateOne", updateMany: "updateMany", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
    var Hi = "explicitly `undefined` values are not allowed";
    function zi({ modelName: e, action: t, args: r, runtimeDataModel: n, extensions: i, callsite: o, clientMethod: s, errorFormat: a, clientVersion: l, previewFeatures: y, globalOmit: T }) {
      let C = new Gr({ runtimeDataModel: n, modelName: e, action: t, rootArgs: r, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: l, previewFeatures: y, globalOmit: T });
      return { modelName: e, action: ka[t], query: Rt(r, C) };
    }
    __name(zi, "zi");
    function Rt({ select: e, include: t, ...r } = {}, n) {
      let i;
      return n.isPreviewFeatureOn("omitApi") && (i = r.omit, delete r.omit), { arguments: Xi(r, n), selection: Ma(e, t, i, n) };
    }
    __name(Rt, "Rt");
    function Ma(e, t, r, n) {
      return e ? (t ? n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "include", secondField: "select", selectionPath: n.getSelectionPath() }) : r && n.isPreviewFeatureOn("omitApi") && n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "omit", secondField: "select", selectionPath: n.getSelectionPath() }), Da(e, n)) : Ia(n, t, r);
    }
    __name(Ma, "Ma");
    function Ia(e, t, r) {
      let n = {};
      return e.modelOrType && !e.isRawAction() && (n.$composites = true, n.$scalars = true), t && La(n, t, e), e.isPreviewFeatureOn("omitApi") && _a(n, r, e), n;
    }
    __name(Ia, "Ia");
    function La(e, t, r) {
      for (let [n, i] of Object.entries(t)) {
        if (me(i))
          continue;
        let o = r.nestSelection(n);
        if (Wr(i, o), i === false || i === void 0) {
          e[n] = false;
          continue;
        }
        let s = r.findField(n);
        if (s && s.kind !== "object" && r.throwValidationError({ kind: "IncludeOnScalar", selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), s) {
          e[n] = Rt(i === true ? {} : i, o);
          continue;
        }
        if (i === true) {
          e[n] = true;
          continue;
        }
        e[n] = Rt(i, o);
      }
    }
    __name(La, "La");
    function _a(e, t, r) {
      let n = r.getComputedFields(), i = { ...r.getGlobalOmit(), ...t }, o = Oi(i, n);
      for (let [s, a] of Object.entries(o)) {
        if (me(a))
          continue;
        Wr(a, r.nestSelection(s));
        let l = r.findField(s);
        n?.[s] && !l || (e[s] = !a);
      }
    }
    __name(_a, "_a");
    function Da(e, t) {
      let r = {}, n = t.getComputedFields(), i = Si(e, n);
      for (let [o, s] of Object.entries(i)) {
        if (me(s))
          continue;
        let a = t.nestSelection(o);
        Wr(s, a);
        let l = t.findField(o);
        if (!(n?.[o] && !l)) {
          if (s === false || s === void 0 || me(s)) {
            r[o] = false;
            continue;
          }
          if (s === true) {
            l?.kind === "object" ? r[o] = Rt({}, a) : r[o] = true;
            continue;
          }
          r[o] = Rt(s, a);
        }
      }
      return r;
    }
    __name(Da, "Da");
    function Yi(e, t) {
      if (e === null)
        return null;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
        return e;
      if (typeof e == "bigint")
        return { $type: "BigInt", value: String(e) };
      if (Qe(e)) {
        if (Jt(e))
          return { $type: "DateTime", value: e.toISOString() };
        t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
      }
      if (Ge(e))
        return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } };
      if (Array.isArray(e))
        return Fa(e, t);
      if (ArrayBuffer.isView(e))
        return { $type: "Bytes", value: b.from(e).toString("base64") };
      if (Na(e))
        return e.values;
      if (Je(e))
        return { $type: "Decimal", value: e.toFixed() };
      if (e instanceof xe) {
        if (e !== Bt.instances[e._getName()])
          throw new Error("Invalid ObjectEnumValue");
        return { $type: "Enum", value: e._getName() };
      }
      if (Ua(e))
        return e.toJSON();
      if (typeof e == "object")
        return Xi(e, t);
      t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
    }
    __name(Yi, "Yi");
    function Xi(e, t) {
      if (e.$type)
        return { $type: "Raw", value: e };
      let r = {};
      for (let n in e) {
        let i = e[n], o = t.nestArgument(n);
        me(i) || (i !== void 0 ? r[n] = Yi(i, o) : t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidArgumentValue", argumentPath: o.getArgumentPath(), selectionPath: t.getSelectionPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: Hi }));
      }
      return r;
    }
    __name(Xi, "Xi");
    function Fa(e, t) {
      let r = [];
      for (let n = 0; n < e.length; n++) {
        let i = t.nestArgument(String(n)), o = e[n];
        if (o === void 0 || me(o)) {
          let s = o === void 0 ? "undefined" : "Prisma.skip";
          t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values` });
        }
        r.push(Yi(o, i));
      }
      return r;
    }
    __name(Fa, "Fa");
    function Na(e) {
      return typeof e == "object" && e !== null && e.__prismaRawParameters__ === true;
    }
    __name(Na, "Na");
    function Ua(e) {
      return typeof e == "object" && e !== null && typeof e.toJSON == "function";
    }
    __name(Ua, "Ua");
    function Wr(e, t) {
      e === void 0 && t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidSelectionValue", selectionPath: t.getSelectionPath(), underlyingError: Hi });
    }
    __name(Wr, "Wr");
    var Gr = /* @__PURE__ */ __name(class e {
      constructor(t) {
        this.params = t;
        this.params.modelName && (this.modelOrType = this.params.runtimeDataModel.models[this.params.modelName] ?? this.params.runtimeDataModel.types[this.params.modelName]);
      }
      throwValidationError(t) {
        ar({ errors: [t], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion, globalOmit: this.params.globalOmit });
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
        return this.params.modelName && this.shouldApplyGlobalOmit() ? this.params.globalOmit?.[Ze(this.params.modelName)] ?? {} : {};
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
            be(this.params.action, "Unknown action");
        }
      }
      nestArgument(t) {
        return new e({ ...this.params, argumentPath: this.params.argumentPath.concat(t) });
      }
    }, "e");
    c();
    m();
    d();
    p();
    f();
    u();
    var Zi = /* @__PURE__ */ __name((e) => ({ command: e }), "Zi");
    c();
    m();
    d();
    p();
    f();
    u();
    c();
    m();
    d();
    p();
    f();
    u();
    var eo = /* @__PURE__ */ __name((e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`), "eo");
    c();
    m();
    d();
    p();
    f();
    u();
    u();
    function et(e) {
      try {
        return to(e, "fast");
      } catch {
        return to(e, "slow");
      }
    }
    __name(et, "et");
    function to(e, t) {
      return JSON.stringify(e.map((r) => no(r, t)));
    }
    __name(to, "to");
    function no(e, t) {
      return Array.isArray(e) ? e.map((r) => no(r, t)) : typeof e == "bigint" ? { prisma__type: "bigint", prisma__value: e.toString() } : Qe(e) ? { prisma__type: "date", prisma__value: e.toJSON() } : ce.isDecimal(e) ? { prisma__type: "decimal", prisma__value: e.toJSON() } : b.isBuffer(e) ? { prisma__type: "bytes", prisma__value: e.toString("base64") } : qa(e) || ArrayBuffer.isView(e) ? { prisma__type: "bytes", prisma__value: b.from(e).toString("base64") } : typeof e == "object" && t === "slow" ? io(e) : e;
    }
    __name(no, "no");
    function qa(e) {
      return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? true : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : false;
    }
    __name(qa, "qa");
    function io(e) {
      if (typeof e != "object" || e === null)
        return e;
      if (typeof e.toJSON == "function")
        return e.toJSON();
      if (Array.isArray(e))
        return e.map(ro);
      let t = {};
      for (let r of Object.keys(e))
        t[r] = ro(e[r]);
      return t;
    }
    __name(io, "io");
    function ro(e) {
      return typeof e == "bigint" ? e.toString() : io(e);
    }
    __name(ro, "ro");
    c();
    m();
    d();
    p();
    f();
    u();
    var Ba = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"];
    var oo = Ba;
    var Va = /^(\s*alter\s)/i;
    var so = ee("prisma:client");
    function Kr(e, t, r, n) {
      if (!(e !== "postgresql" && e !== "cockroachdb") && r.length > 0 && Va.exec(t))
        throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
    }
    __name(Kr, "Kr");
    var Hr = /* @__PURE__ */ __name(({ clientMethod: e, activeProvider: t }) => (r) => {
      let n = "", i;
      if (r instanceof gt)
        n = r.sql, i = { values: et(r.values), __prismaRawParameters__: true };
      else if (Array.isArray(r)) {
        let [o, ...s] = r;
        n = o, i = { values: et(s || []), __prismaRawParameters__: true };
      } else
        switch (t) {
          case "sqlite":
          case "mysql": {
            n = r.sql, i = { values: et(r.values), __prismaRawParameters__: true };
            break;
          }
          case "cockroachdb":
          case "postgresql":
          case "postgres": {
            n = r.text, i = { values: et(r.values), __prismaRawParameters__: true };
            break;
          }
          case "sqlserver": {
            n = eo(r), i = { values: et(r.values), __prismaRawParameters__: true };
            break;
          }
          default:
            throw new Error(`The ${t} provider does not support ${e}`);
        }
      return i?.values ? so(`prisma.${e}(${n}, ${i.values})`) : so(`prisma.${e}(${n})`), { query: n, parameters: i };
    }, "Hr");
    var ao = { requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    }, middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e;
      return new X(t, r);
    } };
    var lo = { requestArgsToMiddlewareArgs(e) {
      return [e];
    }, middlewareArgsToRequestArgs(e) {
      return e[0];
    } };
    c();
    m();
    d();
    p();
    f();
    u();
    function zr(e) {
      return function(r) {
        let n, i = /* @__PURE__ */ __name((o = e) => {
          try {
            return o === void 0 || o?.kind === "itx" ? n ??= uo(r(o)) : uo(r(o));
          } catch (s) {
            return Promise.reject(s);
          }
        }, "i");
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
    __name(zr, "zr");
    function uo(e) {
      return typeof e.then == "function" ? e : Promise.resolve(e);
    }
    __name(uo, "uo");
    c();
    m();
    d();
    p();
    f();
    u();
    var co = { isEnabled() {
      return false;
    }, getTraceParent() {
      return "00-10-10-00";
    }, async createEngineSpan() {
    }, getActiveContext() {
    }, runInChildSpan(e, t) {
      return t();
    } };
    var Yr = /* @__PURE__ */ __name(class {
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
        return globalThis.PRISMA_INSTRUMENTATION?.helper ?? co;
      }
    }, "Yr");
    function mo(e) {
      return e.includes("tracing") ? new Yr() : co;
    }
    __name(mo, "mo");
    c();
    m();
    d();
    p();
    f();
    u();
    function po(e, t = () => {
    }) {
      let r, n = new Promise((i) => r = i);
      return { then(i) {
        return --e === 0 && r(t()), i?.(n);
      } };
    }
    __name(po, "po");
    c();
    m();
    d();
    p();
    f();
    u();
    function fo(e) {
      return typeof e == "string" ? e : e.reduce((t, r) => {
        let n = typeof r == "string" ? r : r.level;
        return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n;
      }, void 0);
    }
    __name(fo, "fo");
    c();
    m();
    d();
    p();
    f();
    u();
    var lr = /* @__PURE__ */ __name(class {
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
    }, "lr");
    c();
    m();
    d();
    p();
    f();
    u();
    var yo = Fe(Bn());
    c();
    m();
    d();
    p();
    f();
    u();
    function ur(e) {
      return typeof e.batchRequestIdx == "number";
    }
    __name(ur, "ur");
    c();
    m();
    d();
    p();
    f();
    u();
    u();
    function cr(e) {
      return e === null ? e : Array.isArray(e) ? e.map(cr) : typeof e == "object" ? $a(e) ? ja(e) : Be(e, cr) : e;
    }
    __name(cr, "cr");
    function $a(e) {
      return e !== null && typeof e == "object" && typeof e.$type == "string";
    }
    __name($a, "$a");
    function ja({ $type: e, value: t }) {
      switch (e) {
        case "BigInt":
          return BigInt(t);
        case "Bytes":
          return b.from(t, "base64");
        case "DateTime":
          return new Date(t);
        case "Decimal":
          return new ce(t);
        case "Json":
          return JSON.parse(t);
        default:
          be(t, "Unknown tagged value");
      }
    }
    __name(ja, "ja");
    c();
    m();
    d();
    p();
    f();
    u();
    function go(e) {
      if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow")
        return;
      let t = [];
      return e.modelName && t.push(e.modelName), e.query.arguments && t.push(Xr(e.query.arguments)), t.push(Xr(e.query.selection)), t.join("");
    }
    __name(go, "go");
    function Xr(e) {
      return `(${Object.keys(e).sort().map((r) => {
        let n = e[r];
        return typeof n == "object" && n !== null ? `(${r} ${Xr(n)})` : r;
      }).join(" ")})`;
    }
    __name(Xr, "Xr");
    c();
    m();
    d();
    p();
    f();
    u();
    var Qa = { aggregate: false, aggregateRaw: false, createMany: true, createManyAndReturn: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateOne: true, upsertOne: true };
    function Zr(e) {
      return Qa[e];
    }
    __name(Zr, "Zr");
    c();
    m();
    d();
    p();
    f();
    u();
    var mr = /* @__PURE__ */ __name(class {
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
    }, "mr");
    c();
    m();
    d();
    p();
    f();
    u();
    u();
    function Le(e, t) {
      if (t === null)
        return t;
      switch (e) {
        case "bigint":
          return BigInt(t);
        case "bytes":
          return b.from(t, "base64");
        case "decimal":
          return new ce(t);
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
    __name(Le, "Le");
    function ho(e) {
      let t = [], r = Ja(e);
      for (let n = 0; n < e.rows.length; n++) {
        let i = e.rows[n], o = { ...r };
        for (let s = 0; s < i.length; s++)
          o[e.columns[s]] = Le(e.types[s], i[s]);
        t.push(o);
      }
      return t;
    }
    __name(ho, "ho");
    function Ja(e) {
      let t = {};
      for (let r = 0; r < e.columns.length; r++)
        t[e.columns[r]] = null;
      return t;
    }
    __name(Ja, "Ja");
    var Ga = ee("prisma:client:request_handler");
    var dr = /* @__PURE__ */ __name(class {
      constructor(t, r) {
        this.logEmitter = r, this.client = t, this.dataloader = new mr({ batchLoader: vi(async ({ requests: n, customDataProxyFetch: i }) => {
          let { transaction: o, otelParentCtx: s } = n[0], a = n.map((C) => C.protocolQuery), l = this.client._tracingHelper.getTraceParent(s), y = n.some((C) => Zr(C.protocolQuery.action));
          return (await this.client._engine.requestBatch(a, { traceparent: l, transaction: Wa(o), containsWrite: y, customDataProxyFetch: i })).map((C, O) => {
            if (C instanceof Error)
              return C;
            try {
              return this.mapQueryEngineResult(n[O], C);
            } catch (A) {
              return A;
            }
          });
        }), singleLoader: async (n) => {
          let i = n.transaction?.kind === "itx" ? bo(n.transaction) : void 0, o = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: Zr(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
          return this.mapQueryEngineResult(n, o);
        }, batchBy: (n) => n.transaction?.id ? `transaction-${n.transaction.id}` : go(n.protocolQuery), batchOrder(n, i) {
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
        if (Ga(t), Ka(t, i) || t instanceof we)
          throw t;
        if (t instanceof J && Ha(t)) {
          let y = wo(t.meta);
          ar({ args: o, errors: [y], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion, globalOmit: a });
        }
        let l = t.message;
        if (n && (l = Xe({ callsite: n, originalMethod: r, isPanic: t.isPanic, showColors: this.client._errorFormat === "pretty", message: l })), l = this.sanitizeMessage(l), t.code) {
          let y = s ? { modelName: s, ...t.meta } : t.meta;
          throw new J(l, { code: t.code, clientVersion: this.client._clientVersion, meta: y, batchRequestIdx: t.batchRequestIdx });
        } else {
          if (t.isPanic)
            throw new Ee(l, this.client._clientVersion);
          if (t instanceof G)
            throw new G(l, { clientVersion: this.client._clientVersion, batchRequestIdx: t.batchRequestIdx });
          if (t instanceof L)
            throw new L(l, this.client._clientVersion);
          if (t instanceof Ee)
            throw new Ee(l, this.client._clientVersion);
        }
        throw t.clientVersion = this.client._clientVersion, t;
      }
      sanitizeMessage(t) {
        return this.client._errorFormat && this.client._errorFormat !== "pretty" ? (0, yo.default)(t) : t;
      }
      unpack(t, r, n) {
        if (!t || (t.data && (t = t.data), !t))
          return t;
        let i = Object.keys(t)[0], o = Object.values(t)[0], s = r.filter((y) => y !== "select" && y !== "include"), a = Br(o, s), l = i === "queryRaw" ? ho(a) : cr(a);
        return n ? n(l) : l;
      }
      get [Symbol.toStringTag]() {
        return "RequestHandler";
      }
    }, "dr");
    function Wa(e) {
      if (e) {
        if (e.kind === "batch")
          return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
        if (e.kind === "itx")
          return { kind: "itx", options: bo(e) };
        be(e, "Unknown transaction kind");
      }
    }
    __name(Wa, "Wa");
    function bo(e) {
      return { id: e.id, payload: e.payload };
    }
    __name(bo, "bo");
    function Ka(e, t) {
      return ur(e) && t?.kind === "batch" && e.batchRequestIdx !== t.index;
    }
    __name(Ka, "Ka");
    function Ha(e) {
      return e.code === "P2009" || e.code === "P2012";
    }
    __name(Ha, "Ha");
    function wo(e) {
      if (e.kind === "Union")
        return { kind: "Union", errors: e.errors.map(wo) };
      if (Array.isArray(e.selectionPath)) {
        let [, ...t] = e.selectionPath;
        return { ...e, selectionPath: t };
      }
      return e;
    }
    __name(wo, "wo");
    c();
    m();
    d();
    p();
    f();
    u();
    var Eo = "5.20.0";
    var xo = Eo;
    c();
    m();
    d();
    p();
    f();
    u();
    var Ro = Fe(Jr());
    c();
    m();
    d();
    p();
    f();
    u();
    var _ = /* @__PURE__ */ __name(class extends Error {
      constructor(t) {
        super(t + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientConstructorValidationError";
      }
    }, "_");
    K(_, "PrismaClientConstructorValidationError");
    var Po = ["datasources", "datasourceUrl", "errorFormat", "adapter", "log", "transactionOptions", "omit", "__internal"];
    var vo = ["pretty", "colorless", "minimal"];
    var To = ["info", "query", "warn", "error"];
    var Ya = { datasources: (e, { datasourceNames: t }) => {
      if (e) {
        if (typeof e != "object" || Array.isArray(e))
          throw new _(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let i = tt(r, t) || ` Available datasources: ${t.join(", ")}`;
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
      if (!ir(t).includes("driverAdapters"))
        throw new _('"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.');
      if (ot() === "binary")
        throw new _('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.');
    }, datasourceUrl: (e) => {
      if (typeof e < "u" && typeof e != "string")
        throw new _(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    }, errorFormat: (e) => {
      if (e) {
        if (typeof e != "string")
          throw new _(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
        if (!vo.includes(e)) {
          let t = tt(e, vo);
          throw new _(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`);
        }
      }
    }, log: (e) => {
      if (!e)
        return;
      if (!Array.isArray(e))
        throw new _(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
      function t(r) {
        if (typeof r == "string" && !To.includes(r)) {
          let n = tt(r, To);
          throw new _(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`);
        }
      }
      __name(t, "t");
      for (let r of e) {
        t(r);
        let n = { level: t, emit: (i) => {
          let o = ["stdout", "event"];
          if (!o.includes(i)) {
            let s = tt(i, o);
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
        let o = Za(n, t.runtimeDataModel);
        if (!o) {
          r.push({ kind: "UnknownModel", modelKey: n });
          continue;
        }
        for (let [s, a] of Object.entries(i)) {
          let l = o.fields.find((y) => y.name === s);
          if (!l) {
            r.push({ kind: "UnknownField", modelKey: n, fieldName: s });
            continue;
          }
          if (l.relationName) {
            r.push({ kind: "RelationInOmit", modelKey: n, fieldName: s });
            continue;
          }
          typeof a != "boolean" && r.push({ kind: "InvalidFieldValue", modelKey: n, fieldName: s });
        }
      }
      if (r.length > 0)
        throw new _(el(e, r));
    }, __internal: (e) => {
      if (!e)
        return;
      let t = ["debug", "engine", "configOverride"];
      if (typeof e != "object")
        throw new _(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
      for (let [r] of Object.entries(e))
        if (!t.includes(r)) {
          let n = tt(r, t);
          throw new _(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`);
        }
    } };
    function Ao(e, t) {
      for (let [r, n] of Object.entries(e)) {
        if (!Po.includes(r)) {
          let i = tt(r, Po);
          throw new _(`Unknown property ${r} provided to PrismaClient constructor.${i}`);
        }
        Ya[r](n, t);
      }
      if (e.datasourceUrl && e.datasources)
        throw new _('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
    }
    __name(Ao, "Ao");
    function tt(e, t) {
      if (t.length === 0 || typeof e != "string")
        return "";
      let r = Xa(e, t);
      return r ? ` Did you mean "${r}"?` : "";
    }
    __name(tt, "tt");
    function Xa(e, t) {
      if (t.length === 0)
        return null;
      let r = t.map((i) => ({ value: i, distance: (0, Ro.default)(e, i) }));
      r.sort((i, o) => i.distance < o.distance ? -1 : 1);
      let n = r[0];
      return n.distance < 3 ? n.value : null;
    }
    __name(Xa, "Xa");
    function Za(e, t) {
      return Co(t.models, e) ?? Co(t.types, e);
    }
    __name(Za, "Za");
    function Co(e, t) {
      let r = Object.keys(e).find((n) => Ze(n) === t);
      if (r)
        return e[r];
    }
    __name(Co, "Co");
    function el(e, t) {
      let r = ze(e);
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
      let { message: n, args: i } = zt(r, "colorless");
      return `Error validating "omit" option:

${i}

${n}`;
    }
    __name(el, "el");
    c();
    m();
    d();
    p();
    f();
    u();
    function So(e) {
      return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => {
        let n = new Array(e.length), i = null, o = false, s = 0, a = /* @__PURE__ */ __name(() => {
          o || (s++, s === e.length && (o = true, i ? r(i) : t(n)));
        }, "a"), l = /* @__PURE__ */ __name((y) => {
          o || (o = true, r(y));
        }, "l");
        for (let y = 0; y < e.length; y++)
          e[y].then((T) => {
            n[y] = T, a();
          }, (T) => {
            if (!ur(T)) {
              l(T);
              return;
            }
            T.batchRequestIdx === y ? l(T) : (i || (i = T), a());
          });
      });
    }
    __name(So, "So");
    var Re = ee("prisma:client");
    typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
    var tl = { requestArgsToMiddlewareArgs: (e) => e, middlewareArgsToRequestArgs: (e) => e };
    var rl = Symbol.for("prisma.client.transaction.id");
    var nl = { id: 0, nextId() {
      return ++this.id;
    } };
    function Mo(e) {
      class t {
        constructor(n) {
          this._originalClient = this;
          this._middlewares = new lr();
          this._createPrismaPromise = zr();
          this.$extends = gi;
          e = n?.__internal?.configOverride?.(e) ?? e, Ii(e), n && Ao(n, e);
          let i = new Nt().on("error", () => {
          });
          this._extensions = tr.empty(), this._previewFeatures = ir(e), this._clientVersion = e.clientVersion ?? xo, this._activeProvider = e.activeProvider, this._globalOmit = n?.omit, this._tracingHelper = mo(this._previewFeatures);
          let o = { rootEnvPath: e.relativeEnvPaths.rootEnvPath && it.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath), schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && it.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath) }, s;
          if (n?.adapter) {
            s = Dr(n.adapter);
            let l = e.activeProvider === "postgresql" ? "postgres" : e.activeProvider;
            if (s.provider !== l)
              throw new L(`The Driver Adapter \`${s.adapterName}\`, based on \`${s.provider}\`, is not compatible with the provider \`${l}\` specified in the Prisma schema.`, this._clientVersion);
            if (n.datasources || n.datasourceUrl !== void 0)
              throw new L("Custom datasource configuration is not compatible with Prisma Driver Adapters. Please define the database connection string directly in the Driver Adapter configuration.", this._clientVersion);
          }
          let a = e.injectableEdgeEnv?.();
          try {
            let l = n ?? {}, y = l.__internal ?? {}, T = y.debug === true;
            T && ee.enable("prisma:client");
            let C = it.resolve(e.dirname, e.relativePath);
            gn.existsSync(C) || (C = e.dirname), Re("dirname", e.dirname), Re("relativePath", e.relativePath), Re("cwd", C);
            let O = y.engine || {};
            if (l.errorFormat ? this._errorFormat = l.errorFormat : g.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : g.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { cwd: C, dirname: e.dirname, enableDebugLogs: T, allowTriggerPanic: O.allowTriggerPanic, datamodelPath: it.join(e.dirname, e.filename ?? "schema.prisma"), prismaPath: O.binaryPath ?? void 0, engineEndpoint: O.endpoint, generator: e.generator, showColors: this._errorFormat === "pretty", logLevel: l.log && fo(l.log), logQueries: l.log && !!(typeof l.log == "string" ? l.log === "query" : l.log.find((A) => typeof A == "string" ? A === "query" : A.level === "query")), env: a?.parsed ?? {}, flags: [], engineWasm: e.engineWasm, clientVersion: e.clientVersion, engineVersion: e.engineVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, overrideDatasources: Li(l, e.datasourceNames), inlineDatasources: e.inlineDatasources, inlineSchemaHash: e.inlineSchemaHash, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: l.transactionOptions?.maxWait ?? 2e3, timeout: l.transactionOptions?.timeout ?? 5e3, isolationLevel: l.transactionOptions?.isolationLevel }, logEmitter: i, isBundled: e.isBundled, adapter: s }, this._accelerateEngineConfig = { ...this._engineConfig, accelerateUtils: { resolveDatasourceUrl: rr, getBatchRequestPayload: Qt, prismaGraphQLToJSError: Yt, PrismaClientUnknownRequestError: G, PrismaClientInitializationError: L, PrismaClientKnownRequestError: J, debug: ee("prisma:client:accelerateEngine"), engineVersion: ko.version, clientVersion: e.clientVersion } }, Re("clientVersion", e.clientVersion), this._engine = Ni(e, this._engineConfig), this._requestHandler = new dr(this, i), l.log)
              for (let A of l.log) {
                let M = typeof A == "string" ? A : A.emit === "stdout" ? A.level : null;
                M && this.$on(M, (S) => {
                  at.log(`${at.tags[M] ?? ""}`, S.message || S.query);
                });
              }
            this._metrics = new Ve(this._engine);
          } catch (l) {
            throw l.clientVersion = this._clientVersion, l;
          }
          return this._appliedParent = wt(this);
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
            On();
          }
        }
        $executeRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: Hr({ clientMethod: i, activeProvider: a }), callsite: Te(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $executeRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) {
              let [s, a] = Oo(n, i);
              return Kr(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
            }
            throw new j("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
          });
        }
        $executeRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => (Kr(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
        }
        $runCommandRaw(n) {
          if (e.activeProvider !== "mongodb")
            throw new j(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
          return this._createPrismaPromise((i) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: Zi, callsite: Te(this._errorFormat), transaction: i }));
        }
        async $queryRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: Hr({ clientMethod: i, activeProvider: a }), callsite: Te(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $queryRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0)
              return this.$queryRawInternal(o, "$queryRaw", ...Oo(n, i));
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
          let o = nl.nextId(), s = po(n.length), a = n.map((l, y) => {
            if (l?.[Symbol.toStringTag] !== "PrismaPromise")
              throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
            let T = i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel, C = { kind: "batch", id: o, index: y, isolationLevel: T, lock: s };
            return l.requestTransaction?.(C) ?? l;
          });
          return So(a);
        }
        async _transactionWithCallback({ callback: n, options: i }) {
          let o = { traceparent: this._tracingHelper.getTraceParent() }, s = { maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait, timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout, isolationLevel: i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel }, a = await this._engine.transaction("start", o, s), l;
          try {
            let y = { kind: "itx", ...a };
            l = await n(this._createItxClient(y)), await this._engine.transaction("commit", o, a);
          } catch (y) {
            throw await this._engine.transaction("rollback", o, a).catch(() => {
            }), y;
          }
          return l;
        }
        _createItxClient(n) {
          return wt(pe(fi(this), [H("_appliedParent", () => this._appliedParent._createItxClient(n)), H("_createPrismaPromise", () => zr(n)), H(rl, () => n.id), $e(oo)]));
        }
        $transaction(n, i) {
          let o;
          typeof n == "function" ? this._engineConfig.adapter?.adapterName === "@prisma/adapter-d1" ? o = /* @__PURE__ */ __name(() => {
            throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.");
          }, "o") : o = /* @__PURE__ */ __name(() => this._transactionWithCallback({ callback: n, options: i }), "o") : o = /* @__PURE__ */ __name(() => this._transactionWithArray({ promises: n, options: i }), "o");
          let s = { name: "transaction", attributes: { method: "$transaction" } };
          return this._tracingHelper.runInChildSpan(s, o);
        }
        _request(n) {
          n.otelParentCtx = this._tracingHelper.getActiveContext();
          let i = n.middlewareArgsMapper ?? tl, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }, s = { middleware: { name: "middleware", middleware: true, attributes: { method: "$use" }, active: false }, operation: { name: "operation", attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }, a = -1, l = /* @__PURE__ */ __name(async (y) => {
            let T = this._middlewares.get(++a);
            if (T)
              return this._tracingHelper.runInChildSpan(s.middleware, (I) => T(y, (ne) => (I?.end(), l(ne))));
            let { runInTransaction: C, args: O, ...A } = y, M = { ...n, ...A };
            O && (M.args = i.middlewareArgsToRequestArgs(O)), n.transaction !== void 0 && C === false && delete M.transaction;
            let S = await Pi(this, M);
            return M.model ? bi({ result: S, modelName: M.model, args: M.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel, globalOmit: this._globalOmit }) : S;
          }, "l");
          return this._tracingHelper.runInChildSpan(s.operation, () => l(o));
        }
        async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: l, argsMapper: y, transaction: T, unpacker: C, otelParentCtx: O, customDataProxyFetch: A }) {
          try {
            n = y ? y(n) : n;
            let M = { name: "serialize" }, S = this._tracingHelper.runInChildSpan(M, () => zi({ modelName: l, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion, previewFeatures: this._previewFeatures, globalOmit: this._globalOmit }));
            return ee.enabled("prisma:client") && (Re("Prisma Client call:"), Re(`prisma.${i}(${ni(n)})`), Re("Generated request:"), Re(JSON.stringify(S, null, 2) + `
`)), T?.kind === "batch" && await T.lock, this._requestHandler.request({ protocolQuery: S, modelName: l, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: T, unpacker: C, otelParentCtx: O, otelChildCtx: this._tracingHelper.getActiveContext(), globalOmit: this._globalOmit, customDataProxyFetch: A });
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
      __name(t, "t");
      return t;
    }
    __name(Mo, "Mo");
    function Oo(e, t) {
      return il(e) ? [new X(e, t), ao] : [e, lo];
    }
    __name(Oo, "Oo");
    function il(e) {
      return Array.isArray(e) && Array.isArray(e.raw);
    }
    __name(il, "il");
    c();
    m();
    d();
    p();
    f();
    u();
    var ol = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
    function Io(e) {
      return new Proxy(e, { get(t, r) {
        if (r in t)
          return t[r];
        if (!ol.has(r))
          throw new TypeError(`Invalid enum value: ${String(r)}`);
      } });
    }
    __name(Io, "Io");
    c();
    m();
    d();
    p();
    f();
    u();
    u();
  }
});

// ../../node_modules/.pnpm/@prisma+client@5.20.0_prisma@5.20.0/node_modules/.prisma/client/query_engine_bg.js
var require_query_engine_bg = __commonJS({
  "../../node_modules/.pnpm/@prisma+client@5.20.0_prisma@5.20.0/node_modules/.prisma/client/query_engine_bg.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var F = Object.defineProperty;
    var R = Object.getOwnPropertyDescriptor;
    var B = Object.getOwnPropertyNames;
    var U = Object.prototype.hasOwnProperty;
    var D = /* @__PURE__ */ __name((n, t) => {
      for (var e in t)
        F(n, e, { get: t[e], enumerable: true });
    }, "D");
    var N = /* @__PURE__ */ __name((n, t, e, o) => {
      if (t && typeof t == "object" || typeof t == "function")
        for (let _ of B(t))
          !U.call(n, _) && _ !== e && F(n, _, { get: () => t[_], enumerable: !(o = R(t, _)) || o.enumerable });
      return n;
    }, "N");
    var C = /* @__PURE__ */ __name((n) => N(F({}, "__esModule", { value: true }), n), "C");
    var Et = {};
    D(Et, { QueryEngine: () => Z, __wbg_String_88810dfeb4021902: () => Un, __wbg_buffer_344d9b41efe96da7: () => Nn, __wbg_call_53fc3abd42e24ec8: () => gt, __wbg_call_669127b9d730c650: () => Zn, __wbg_crypto_58f13aa23ffcb166: () => Wn, __wbg_done_bc26bf4ada718266: () => rt, __wbg_entries_6d727b73ee02b7ce: () => At, __wbg_getRandomValues_504510b5564925af: () => Pn, __wbg_getTime_ed6ee333b702f8fc: () => an, __wbg_get_2aff440840bb6202: () => ct, __wbg_get_4a9aa5157afeb382: () => nt, __wbg_get_94990005bd6ca07c: () => Bn, __wbg_getwithrefkey_5e6d9547403deab8: () => Mn, __wbg_globalThis_17eff828815f7d84: () => st, __wbg_global_46f939f6541643c5: () => ft, __wbg_has_cdf8b85f6e903c80: () => un, __wbg_instanceof_ArrayBuffer_c7cc317e5c29cc0d: () => Tt, __wbg_instanceof_Promise_cfbcc42300367513: () => ln, __wbg_instanceof_Uint8Array_19e6f142a5e7e1e1: () => ht, __wbg_isArray_38525be7442aa21e: () => bt, __wbg_isSafeInteger_c38b0a16d0c7cef7: () => lt, __wbg_iterator_7ee1a391d310f8e4: () => pn, __wbg_length_a5587d6cd79ab197: () => yt, __wbg_length_cace2e0b3ddc0502: () => wn, __wbg_msCrypto_abcb1295e768d1f2: () => Gn, __wbg_new0_ad75dd38f92424e2: () => fn, __wbg_new_08236689f0afb357: () => On, __wbg_new_1b94180eeb48f2a2: () => Fn, __wbg_new_c728d68b8b34487e: () => In, __wbg_new_d8a000788389a31e: () => Ln, __wbg_new_feb65b865d980ae2: () => en, __wbg_newnoargs_ccdcae30fd002262: () => at, __wbg_newwithbyteoffsetandlength_2dc04d99088b15e3: () => Cn, __wbg_newwithlength_13b5319ab422dcf6: () => Kn, __wbg_next_15da6a3df9290720: () => _t, __wbg_next_1989a20442400aaa: () => et, __wbg_node_523d7bd03ef69fba: () => Qn, __wbg_now_28a6b413aca4a96a: () => xt, __wbg_now_4579335d3581594c: () => gn, __wbg_now_8ed1a4454e40ecd1: () => bn, __wbg_parse_3f0cb48976ca4123: () => sn, __wbg_process_5b786e71d465a513: () => Jn, __wbg_push_fd3233d09cf81821: () => Rn, __wbg_randomFillSync_a0d98aa11c81fe89: () => $n, __wbg_require_2784e593a4674877: () => Hn, __wbg_resolve_a3252b2860f0a09e: () => kt, __wbg_self_3fad056edded10bd: () => it, __wbg_setTimeout_631fe61f31fa2fad: () => rn, __wbg_set_0ac78a2bc07da03c: () => qn, __wbg_set_3355b9f2d3092e3b: () => kn, __wbg_set_40f7786a25a9cc7e: () => dt, __wbg_set_841ac57cff3d672b: () => En, __wbg_set_dcfd613a3420f908: () => pt, __wbg_set_wasm: () => L, __wbg_stringify_4039297315a25b00: () => wt, __wbg_subarray_6ca5cfa7fbb9abbe: () => zn, __wbg_then_1bbc9edafd859b06: () => It, __wbg_then_89e1c559530b85cf: () => Ft, __wbg_valueOf_ff4b62641803432a: () => tt, __wbg_value_0570714ff7d75f35: () => ot, __wbg_versions_c2ab80650590b6a2: () => Vn, __wbg_window_a4f46c98a61d4089: () => ut, __wbindgen_bigint_from_i64: () => hn, __wbindgen_bigint_from_u64: () => An, __wbindgen_bigint_get_as_i64: () => St, __wbindgen_boolean_get: () => yn, __wbindgen_cb_drop: () => qt, __wbindgen_closure_wrapper6831: () => vt, __wbindgen_debug_string: () => jt, __wbindgen_error_new: () => tn, __wbindgen_in: () => Tn, __wbindgen_is_bigint: () => xn, __wbindgen_is_function: () => Xn, __wbindgen_is_object: () => dn, __wbindgen_is_string: () => vn, __wbindgen_is_undefined: () => cn, __wbindgen_jsval_eq: () => Sn, __wbindgen_jsval_loose_eq: () => mt, __wbindgen_memory: () => Dn, __wbindgen_number_get: () => mn, __wbindgen_number_new: () => jn, __wbindgen_object_clone_ref: () => _n, __wbindgen_object_drop_ref: () => Yn, __wbindgen_string_get: () => nn, __wbindgen_string_new: () => on, __wbindgen_throw: () => Ot, debug_panic: () => K, getBuildTimeInfo: () => G });
    module.exports = C(Et);
    var h = /* @__PURE__ */ __name(() => {
    }, "h");
    h.prototype = h;
    var c;
    function L(n) {
      c = n;
    }
    __name(L, "L");
    var w = new Array(128).fill(void 0);
    w.push(void 0, null, true, false);
    function r(n) {
      return w[n];
    }
    __name(r, "r");
    var a = 0;
    var T = null;
    function A() {
      return (T === null || T.byteLength === 0) && (T = new Uint8Array(c.memory.buffer)), T;
    }
    __name(A, "A");
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
    __name(l, "l");
    function y(n) {
      return n == null;
    }
    __name(y, "y");
    var j = null;
    function d() {
      return (j === null || j.byteLength === 0) && (j = new Int32Array(c.memory.buffer)), j;
    }
    __name(d, "d");
    var P = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
    var k = new P("utf-8", { ignoreBOM: true, fatal: true });
    k.decode();
    function x(n, t) {
      return n = n >>> 0, k.decode(A().subarray(n, n + t));
    }
    __name(x, "x");
    var m = w.length;
    function i(n) {
      m === w.length && w.push(w.length + 1);
      const t = m;
      return m = w[t], w[t] = n, t;
    }
    __name(i, "i");
    var O = null;
    function W() {
      return (O === null || O.byteLength === 0) && (O = new Float64Array(c.memory.buffer)), O;
    }
    __name(W, "W");
    function J(n) {
      n < 132 || (w[n] = m, m = n);
    }
    __name(J, "J");
    function b(n) {
      const t = r(n);
      return J(n), t;
    }
    __name(b, "b");
    var q = null;
    function V() {
      return (q === null || q.byteLength === 0) && (q = new BigInt64Array(c.memory.buffer)), q;
    }
    __name(V, "V");
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
    __name(I, "I");
    var v = typeof FinalizationRegistry > "u" ? { register: () => {
    }, unregister: () => {
    } } : new FinalizationRegistry((n) => {
      c.__wbindgen_export_2.get(n.dtor)(n.a, n.b);
    });
    function Q(n, t, e, o) {
      const _ = { a: n, b: t, cnt: 1, dtor: e }, f = /* @__PURE__ */ __name((...u) => {
        _.cnt++;
        const s = _.a;
        _.a = 0;
        try {
          return o(s, _.b, ...u);
        } finally {
          --_.cnt === 0 ? (c.__wbindgen_export_2.get(_.dtor)(s, _.b), v.unregister(_)) : _.a = s;
        }
      }, "f");
      return f.original = _, v.register(f, _, _), f;
    }
    __name(Q, "Q");
    function H(n, t, e) {
      c._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h1d1ce90a2538b281(n, t, i(e));
    }
    __name(H, "H");
    function G() {
      const n = c.getBuildTimeInfo();
      return b(n);
    }
    __name(G, "G");
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
    __name(K, "K");
    function g(n, t) {
      try {
        return n.apply(this, t);
      } catch (e) {
        c.__wbindgen_exn_store(i(e));
      }
    }
    __name(g, "g");
    function X(n, t, e, o) {
      c.wasm_bindgen__convert__closures__invoke2_mut__h46a92896c95d64ae(n, t, i(e), i(o));
    }
    __name(X, "X");
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
    __name(Z, "Z");
    function nn(n, t) {
      const e = r(t), o = typeof e == "string" ? e : void 0;
      var _ = y(o) ? 0 : l(o, c.__wbindgen_malloc, c.__wbindgen_realloc), f = a;
      d()[n / 4 + 1] = f, d()[n / 4 + 0] = _;
    }
    __name(nn, "nn");
    function tn(n, t) {
      const e = new Error(x(n, t));
      return i(e);
    }
    __name(tn, "tn");
    function en(n, t) {
      try {
        var e = { a: n, b: t }, o = /* @__PURE__ */ __name((f, u) => {
          const s = e.a;
          e.a = 0;
          try {
            return X(s, e.b, f, u);
          } finally {
            e.a = s;
          }
        }, "o");
        const _ = new Promise(o);
        return i(_);
      } finally {
        e.a = e.b = 0;
      }
    }
    __name(en, "en");
    function rn(n, t) {
      return setTimeout(r(n), t >>> 0);
    }
    __name(rn, "rn");
    function on(n, t) {
      const e = x(n, t);
      return i(e);
    }
    __name(on, "on");
    function _n(n) {
      const t = r(n);
      return i(t);
    }
    __name(_n, "_n");
    function cn(n) {
      return r(n) === void 0;
    }
    __name(cn, "cn");
    function un() {
      return g(function(n, t) {
        return Reflect.has(r(n), r(t));
      }, arguments);
    }
    __name(un, "un");
    function sn() {
      return g(function(n, t) {
        const e = JSON.parse(x(n, t));
        return i(e);
      }, arguments);
    }
    __name(sn, "sn");
    function fn() {
      return i(/* @__PURE__ */ new Date());
    }
    __name(fn, "fn");
    function an(n) {
      return r(n).getTime();
    }
    __name(an, "an");
    function bn(n) {
      return r(n).now();
    }
    __name(bn, "bn");
    function gn() {
      return Date.now();
    }
    __name(gn, "gn");
    function ln(n) {
      let t;
      try {
        t = r(n) instanceof Promise;
      } catch {
        t = false;
      }
      return t;
    }
    __name(ln, "ln");
    function dn(n) {
      const t = r(n);
      return typeof t == "object" && t !== null;
    }
    __name(dn, "dn");
    function wn(n) {
      return r(n).length;
    }
    __name(wn, "wn");
    function pn() {
      return i(Symbol.iterator);
    }
    __name(pn, "pn");
    function yn(n) {
      const t = r(n);
      return typeof t == "boolean" ? t ? 1 : 0 : 2;
    }
    __name(yn, "yn");
    function xn(n) {
      return typeof r(n) == "bigint";
    }
    __name(xn, "xn");
    function mn(n, t) {
      const e = r(t), o = typeof e == "number" ? e : void 0;
      W()[n / 8 + 1] = y(o) ? 0 : o, d()[n / 4 + 0] = !y(o);
    }
    __name(mn, "mn");
    function hn(n) {
      return i(n);
    }
    __name(hn, "hn");
    function Tn(n, t) {
      return r(n) in r(t);
    }
    __name(Tn, "Tn");
    function An(n) {
      const t = BigInt.asUintN(64, n);
      return i(t);
    }
    __name(An, "An");
    function Sn(n, t) {
      return r(n) === r(t);
    }
    __name(Sn, "Sn");
    function jn(n) {
      return i(n);
    }
    __name(jn, "jn");
    function On() {
      const n = new Array();
      return i(n);
    }
    __name(On, "On");
    function qn(n, t, e) {
      r(n)[t >>> 0] = b(e);
    }
    __name(qn, "qn");
    function Fn() {
      return i(/* @__PURE__ */ new Map());
    }
    __name(Fn, "Fn");
    function In() {
      const n = new Object();
      return i(n);
    }
    __name(In, "In");
    function kn(n, t, e) {
      const o = r(n).set(r(t), r(e));
      return i(o);
    }
    __name(kn, "kn");
    function vn(n) {
      return typeof r(n) == "string";
    }
    __name(vn, "vn");
    function En(n, t, e) {
      r(n)[b(t)] = b(e);
    }
    __name(En, "En");
    function Mn(n, t) {
      const e = r(n)[r(t)];
      return i(e);
    }
    __name(Mn, "Mn");
    function Rn(n, t) {
      return r(n).push(r(t));
    }
    __name(Rn, "Rn");
    function Bn() {
      return g(function(n, t) {
        const e = r(n)[b(t)];
        return i(e);
      }, arguments);
    }
    __name(Bn, "Bn");
    function Un(n, t) {
      const e = String(r(t)), o = l(e, c.__wbindgen_malloc, c.__wbindgen_realloc), _ = a;
      d()[n / 4 + 1] = _, d()[n / 4 + 0] = o;
    }
    __name(Un, "Un");
    function Dn() {
      const n = c.memory;
      return i(n);
    }
    __name(Dn, "Dn");
    function Nn(n) {
      const t = r(n).buffer;
      return i(t);
    }
    __name(Nn, "Nn");
    function Cn(n, t, e) {
      const o = new Uint8Array(r(n), t >>> 0, e >>> 0);
      return i(o);
    }
    __name(Cn, "Cn");
    function Ln(n) {
      const t = new Uint8Array(r(n));
      return i(t);
    }
    __name(Ln, "Ln");
    function $n() {
      return g(function(n, t) {
        r(n).randomFillSync(b(t));
      }, arguments);
    }
    __name($n, "$n");
    function zn(n, t, e) {
      const o = r(n).subarray(t >>> 0, e >>> 0);
      return i(o);
    }
    __name(zn, "zn");
    function Pn() {
      return g(function(n, t) {
        r(n).getRandomValues(r(t));
      }, arguments);
    }
    __name(Pn, "Pn");
    function Wn(n) {
      const t = r(n).crypto;
      return i(t);
    }
    __name(Wn, "Wn");
    function Jn(n) {
      const t = r(n).process;
      return i(t);
    }
    __name(Jn, "Jn");
    function Vn(n) {
      const t = r(n).versions;
      return i(t);
    }
    __name(Vn, "Vn");
    function Qn(n) {
      const t = r(n).node;
      return i(t);
    }
    __name(Qn, "Qn");
    function Hn() {
      return g(function() {
        const n = module.require;
        return i(n);
      }, arguments);
    }
    __name(Hn, "Hn");
    function Gn(n) {
      const t = r(n).msCrypto;
      return i(t);
    }
    __name(Gn, "Gn");
    function Kn(n) {
      const t = new Uint8Array(n >>> 0);
      return i(t);
    }
    __name(Kn, "Kn");
    function Xn(n) {
      return typeof r(n) == "function";
    }
    __name(Xn, "Xn");
    function Yn(n) {
      b(n);
    }
    __name(Yn, "Yn");
    function Zn() {
      return g(function(n, t) {
        const e = r(n).call(r(t));
        return i(e);
      }, arguments);
    }
    __name(Zn, "Zn");
    function nt(n, t) {
      const e = r(n)[t >>> 0];
      return i(e);
    }
    __name(nt, "nt");
    function tt(n) {
      return r(n).valueOf();
    }
    __name(tt, "tt");
    function et() {
      return g(function(n) {
        const t = r(n).next();
        return i(t);
      }, arguments);
    }
    __name(et, "et");
    function rt(n) {
      return r(n).done;
    }
    __name(rt, "rt");
    function ot(n) {
      const t = r(n).value;
      return i(t);
    }
    __name(ot, "ot");
    function _t(n) {
      const t = r(n).next;
      return i(t);
    }
    __name(_t, "_t");
    function ct() {
      return g(function(n, t) {
        const e = Reflect.get(r(n), r(t));
        return i(e);
      }, arguments);
    }
    __name(ct, "ct");
    function it() {
      return g(function() {
        const n = self.self;
        return i(n);
      }, arguments);
    }
    __name(it, "it");
    function ut() {
      return g(function() {
        const n = window.window;
        return i(n);
      }, arguments);
    }
    __name(ut, "ut");
    function st() {
      return g(function() {
        const n = globalThis.globalThis;
        return i(n);
      }, arguments);
    }
    __name(st, "st");
    function ft() {
      return g(function() {
        const n = global.global;
        return i(n);
      }, arguments);
    }
    __name(ft, "ft");
    function at(n, t) {
      const e = new h(x(n, t));
      return i(e);
    }
    __name(at, "at");
    function bt(n) {
      return Array.isArray(r(n));
    }
    __name(bt, "bt");
    function gt() {
      return g(function(n, t, e) {
        const o = r(n).call(r(t), r(e));
        return i(o);
      }, arguments);
    }
    __name(gt, "gt");
    function lt(n) {
      return Number.isSafeInteger(r(n));
    }
    __name(lt, "lt");
    function dt() {
      return g(function(n, t, e) {
        return Reflect.set(r(n), r(t), r(e));
      }, arguments);
    }
    __name(dt, "dt");
    function wt() {
      return g(function(n) {
        const t = JSON.stringify(r(n));
        return i(t);
      }, arguments);
    }
    __name(wt, "wt");
    function pt(n, t, e) {
      r(n).set(r(t), e >>> 0);
    }
    __name(pt, "pt");
    function yt(n) {
      return r(n).length;
    }
    __name(yt, "yt");
    function xt() {
      return g(function() {
        return Date.now();
      }, arguments);
    }
    __name(xt, "xt");
    function mt(n, t) {
      return r(n) == r(t);
    }
    __name(mt, "mt");
    function ht(n) {
      let t;
      try {
        t = r(n) instanceof Uint8Array;
      } catch {
        t = false;
      }
      return t;
    }
    __name(ht, "ht");
    function Tt(n) {
      let t;
      try {
        t = r(n) instanceof ArrayBuffer;
      } catch {
        t = false;
      }
      return t;
    }
    __name(Tt, "Tt");
    function At(n) {
      const t = Object.entries(r(n));
      return i(t);
    }
    __name(At, "At");
    function St(n, t) {
      const e = r(t), o = typeof e == "bigint" ? e : void 0;
      V()[n / 8 + 1] = y(o) ? BigInt(0) : o, d()[n / 4 + 0] = !y(o);
    }
    __name(St, "St");
    function jt(n, t) {
      const e = I(r(t)), o = l(e, c.__wbindgen_malloc, c.__wbindgen_realloc), _ = a;
      d()[n / 4 + 1] = _, d()[n / 4 + 0] = o;
    }
    __name(jt, "jt");
    function Ot(n, t) {
      throw new Error(x(n, t));
    }
    __name(Ot, "Ot");
    function qt(n) {
      const t = b(n).original;
      return t.cnt-- == 1 ? (t.a = 0, true) : false;
    }
    __name(qt, "qt");
    function Ft(n, t) {
      const e = r(n).then(r(t));
      return i(e);
    }
    __name(Ft, "Ft");
    function It(n, t, e) {
      const o = r(n).then(r(t), r(e));
      return i(o);
    }
    __name(It, "It");
    function kt(n) {
      const t = Promise.resolve(r(n));
      return i(t);
    }
    __name(kt, "kt");
    function vt(n, t, e) {
      const o = Q(n, t, 316, H);
      return i(o);
    }
    __name(vt, "vt");
  }
});

// ../../node_modules/.pnpm/@prisma+client@5.20.0_prisma@5.20.0/node_modules/.prisma/client/wasm-worker-loader.mjs
var wasm_worker_loader_exports = {};
__export(wasm_worker_loader_exports, {
  default: () => wasm_worker_loader_default
});
var wasm_worker_loader_default;
var init_wasm_worker_loader = __esm({
  "../../node_modules/.pnpm/@prisma+client@5.20.0_prisma@5.20.0/node_modules/.prisma/client/wasm-worker-loader.mjs"() {
    init_checked_fetch();
    init_modules_watch_stub();
    wasm_worker_loader_default = import("./91647bcb9f319cef2f24392520457a6176c04570-query_engine_bg.wasm");
  }
});

// ../../node_modules/.pnpm/@prisma+client@5.20.0_prisma@5.20.0/node_modules/.prisma/client/wasm.js
var require_wasm2 = __commonJS({
  "../../node_modules/.pnpm/@prisma+client@5.20.0_prisma@5.20.0/node_modules/.prisma/client/wasm.js"(exports) {
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
      raw: raw3,
      skip: skip2,
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
      client: "5.20.0",
      engine: "06fc58a368dc7be9fbbbe894adf8d445d208c284"
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
    Prisma.raw = raw3;
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
      password: "password",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports.Prisma.LinkScalarFieldEnum = {
      id: "id",
      userId: "userId",
      originalUrl: "originalUrl",
      shortUrl: "shortUrl",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports.Prisma.VisitScalarFieldEnum = {
      id: "id",
      linkId: "linkId",
      ipAddress: "ipAddress",
      country: "country",
      createdAt: "createdAt"
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
      User: "User",
      Link: "Link",
      Visit: "Visit"
    };
    var config = {
      "generator": {
        "name": "client",
        "provider": {
          "fromEnvVar": null,
          "value": "prisma-client-js"
        },
        "output": {
          "value": "D:\\dev\\cf-dwz\\node_modules\\.pnpm\\@prisma+client@5.20.0_prisma@5.20.0\\node_modules\\@prisma\\client",
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
        "sourceFilePath": "D:\\dev\\cf-dwz\\packages\\workers\\prisma\\schema.prisma"
      },
      "relativeEnvPaths": {
        "rootEnvPath": null
      },
      "relativePath": "../../../../../../packages/workers/prisma",
      "clientVersion": "5.20.0",
      "engineVersion": "06fc58a368dc7be9fbbbe894adf8d445d208c284",
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
      "inlineSchema": 'generator client {\n  provider        = "prisma-client-js"\n  previewFeatures = ["driverAdapters"]\n}\n\ndatasource db {\n  provider = "sqlite"\n  url      = "file:./dev.db"\n}\n\nmodel User {\n  id        String   @id @default(cuid()) // \u7528\u6237ID\n  email     String   @unique // \u7528\u6237\u90AE\u7BB1\uFF0C\u552F\u4E00\n  password  String // \u7528\u6237\u5BC6\u7801\n  createdAt DateTime @default(now()) // \u521B\u5EFA\u65F6\u95F4\n  updatedAt DateTime @updatedAt // \u66F4\u65B0\u65F6\u95F4\n  links     Link[] // \u7528\u6237\u521B\u5EFA\u7684\u94FE\u63A5\n}\n\nmodel Link {\n  id          String   @id @default(cuid()) // \u77ED\u94FE\u63A5ID\n  userId      String? // \u7528\u6237ID\uFF0C\u5173\u8054\u7528\u6237\n  originalUrl String // \u539F\u59CB\u7F51\u5740\n  shortUrl    String   @unique // \u77ED\u7F51\u5740\uFF0C\u552F\u4E00\n  createdAt   DateTime @default(now()) // \u521B\u5EFA\u65F6\u95F4\n  updatedAt   DateTime @updatedAt // \u66F4\u65B0\u65F6\u95F4\n  user        User?    @relation(fields: [userId], references: [id]) // \u5173\u8054\u7528\u6237 \n  visits      Visit[] // \u8BBF\u95EE\u8BB0\u5F55\n}\n\nmodel Visit {\n  id        String   @id @default(cuid()) // \u8BBF\u95EE\u8BB0\u5F55ID\n  linkId    String // \u77ED\u94FE\u63A5ID\uFF0C\u5173\u8054\u94FE\u63A5\n  ipAddress String // \u8BBF\u95EE\u8005IP\u5730\u5740\n  country   String // \u8BBF\u95EE\u8005\u56FD\u5BB6\n  createdAt DateTime @default(now()) // \u8BBF\u95EE\u65F6\u95F4\n  link      Link     @relation(fields: [linkId], references: [id]) // \u5173\u8054\u94FE\u63A5\n}\n',
      "inlineSchemaHash": "89709e073719f69c3b670dbbdac6db5d3448296adc949762aaee67de0293832d",
      "copyEngine": true
    };
    config.dirname = "/";
    config.runtimeDataModel = JSON.parse('{"models":{"User":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"password","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"links","kind":"object","type":"Link","relationName":"LinkToUser"}],"dbName":null},"Link":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"originalUrl","kind":"scalar","type":"String"},{"name":"shortUrl","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"user","kind":"object","type":"User","relationName":"LinkToUser"},{"name":"visits","kind":"object","type":"Visit","relationName":"LinkToVisit"}],"dbName":null},"Visit":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"linkId","kind":"scalar","type":"String"},{"name":"ipAddress","kind":"scalar","type":"String"},{"name":"country","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"link","kind":"object","type":"Link","relationName":"LinkToVisit"}],"dbName":null}},"enums":{},"types":{}}');
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

// ../../node_modules/.pnpm/@prisma+client@5.20.0_prisma@5.20.0/node_modules/.prisma/client/default.js
var require_default = __commonJS({
  "../../node_modules/.pnpm/@prisma+client@5.20.0_prisma@5.20.0/node_modules/.prisma/client/default.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    module.exports = { ...require_wasm2() };
  }
});

// ../../node_modules/.pnpm/@prisma+client@5.20.0_prisma@5.20.0/node_modules/@prisma/client/default.js
var require_default2 = __commonJS({
  "../../node_modules/.pnpm/@prisma+client@5.20.0_prisma@5.20.0/node_modules/@prisma/client/default.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    module.exports = {
      ...require_default()
    };
  }
});

// ../../node_modules/.pnpm/@prisma+debug@5.20.0/node_modules/@prisma/debug/dist/index.js
var require_dist = __commonJS({
  "../../node_modules/.pnpm/@prisma+debug@5.20.0/node_modules/@prisma/debug/dist/index.js"(exports, module) {
    "use strict";
    init_checked_fetch();
    init_modules_watch_stub();
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name2 in all)
        __defProp2(target, name2, { get: all[name2], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
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
    __name(init2, "init");
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
      const debugCall = /* @__PURE__ */ __name((...args) => {
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
      }, "debugCall");
      return new Proxy(debugCall, {
        get: (_, prop) => instanceProps[prop],
        set: (_, prop, value) => instanceProps[prop] = value
      });
    }
    __name(debugCreate, "debugCreate");
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
    __name(safeStringify, "safeStringify");
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
    __name(getLogs, "getLogs");
    function clearLogs() {
      argsHistory.length = 0;
    }
    __name(clearLogs, "clearLogs");
    var src_default = Debug3;
  }
});

// (disabled):crypto
var require_crypto = __commonJS({
  "(disabled):crypto"() {
    init_checked_fetch();
    init_modules_watch_stub();
  }
});

// ../../node_modules/.pnpm/crypto-js@4.2.0/node_modules/crypto-js/core.js
var require_core = __commonJS({
  "../../node_modules/.pnpm/crypto-js@4.2.0/node_modules/crypto-js/core.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    (function(root, factory) {
      if (typeof exports === "object") {
        module.exports = exports = factory();
      } else if (typeof define === "function" && define.amd) {
        define([], factory);
      } else {
        root.CryptoJS = factory();
      }
    })(exports, function() {
      var CryptoJS = CryptoJS || function(Math2, undefined2) {
        var crypto2;
        if (typeof window !== "undefined" && window.crypto) {
          crypto2 = window.crypto;
        }
        if (typeof self !== "undefined" && self.crypto) {
          crypto2 = self.crypto;
        }
        if (typeof globalThis !== "undefined" && globalThis.crypto) {
          crypto2 = globalThis.crypto;
        }
        if (!crypto2 && typeof window !== "undefined" && window.msCrypto) {
          crypto2 = window.msCrypto;
        }
        if (!crypto2 && typeof global !== "undefined" && global.crypto) {
          crypto2 = global.crypto;
        }
        if (!crypto2 && typeof __require === "function") {
          try {
            crypto2 = require_crypto();
          } catch (err2) {
          }
        }
        var cryptoSecureRandomInt = /* @__PURE__ */ __name(function() {
          if (crypto2) {
            if (typeof crypto2.getRandomValues === "function") {
              try {
                return crypto2.getRandomValues(new Uint32Array(1))[0];
              } catch (err2) {
              }
            }
            if (typeof crypto2.randomBytes === "function") {
              try {
                return crypto2.randomBytes(4).readInt32LE();
              } catch (err2) {
              }
            }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        }, "cryptoSecureRandomInt");
        var create = Object.create || function() {
          function F() {
          }
          __name(F, "F");
          return function(obj) {
            var subtype;
            F.prototype = obj;
            subtype = new F();
            F.prototype = null;
            return subtype;
          };
        }();
        var C = {};
        var C_lib = C.lib = {};
        var Base = C_lib.Base = function() {
          return {
            /**
             * Creates a new object that inherits from this object.
             *
             * @param {Object} overrides Properties to copy into the new object.
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         field: 'value',
             *
             *         method: function () {
             *         }
             *     });
             */
            extend: function(overrides) {
              var subtype = create(this);
              if (overrides) {
                subtype.mixIn(overrides);
              }
              if (!subtype.hasOwnProperty("init") || this.init === subtype.init) {
                subtype.init = function() {
                  subtype.$super.init.apply(this, arguments);
                };
              }
              subtype.init.prototype = subtype;
              subtype.$super = this;
              return subtype;
            },
            /**
             * Extends this object and runs the init method.
             * Arguments to create() will be passed to init().
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var instance = MyType.create();
             */
            create: function() {
              var instance = this.extend();
              instance.init.apply(instance, arguments);
              return instance;
            },
            /**
             * Initializes a newly created object.
             * Override this method to add some logic when your objects are created.
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         init: function () {
             *             // ...
             *         }
             *     });
             */
            init: function() {
            },
            /**
             * Copies properties into this object.
             *
             * @param {Object} properties The properties to mix in.
             *
             * @example
             *
             *     MyType.mixIn({
             *         field: 'value'
             *     });
             */
            mixIn: function(properties) {
              for (var propertyName in properties) {
                if (properties.hasOwnProperty(propertyName)) {
                  this[propertyName] = properties[propertyName];
                }
              }
              if (properties.hasOwnProperty("toString")) {
                this.toString = properties.toString;
              }
            },
            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = instance.clone();
             */
            clone: function() {
              return this.init.prototype.extend(this);
            }
          };
        }();
        var WordArray = C_lib.WordArray = Base.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of 32-bit words.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.create();
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
           */
          init: function(words, sigBytes) {
            words = this.words = words || [];
            if (sigBytes != undefined2) {
              this.sigBytes = sigBytes;
            } else {
              this.sigBytes = words.length * 4;
            }
          },
          /**
           * Converts this word array to a string.
           *
           * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
           *
           * @return {string} The stringified word array.
           *
           * @example
           *
           *     var string = wordArray + '';
           *     var string = wordArray.toString();
           *     var string = wordArray.toString(CryptoJS.enc.Utf8);
           */
          toString: function(encoder) {
            return (encoder || Hex).stringify(this);
          },
          /**
           * Concatenates a word array to this word array.
           *
           * @param {WordArray} wordArray The word array to append.
           *
           * @return {WordArray} This word array.
           *
           * @example
           *
           *     wordArray1.concat(wordArray2);
           */
          concat: function(wordArray) {
            var thisWords = this.words;
            var thatWords = wordArray.words;
            var thisSigBytes = this.sigBytes;
            var thatSigBytes = wordArray.sigBytes;
            this.clamp();
            if (thisSigBytes % 4) {
              for (var i = 0; i < thatSigBytes; i++) {
                var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
              }
            } else {
              for (var j = 0; j < thatSigBytes; j += 4) {
                thisWords[thisSigBytes + j >>> 2] = thatWords[j >>> 2];
              }
            }
            this.sigBytes += thatSigBytes;
            return this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var words = this.words;
            var sigBytes = this.sigBytes;
            words[sigBytes >>> 2] &= 4294967295 << 32 - sigBytes % 4 * 8;
            words.length = Math2.ceil(sigBytes / 4);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {WordArray} The clone.
           *
           * @example
           *
           *     var clone = wordArray.clone();
           */
          clone: function() {
            var clone = Base.clone.call(this);
            clone.words = this.words.slice(0);
            return clone;
          },
          /**
           * Creates a word array filled with random bytes.
           *
           * @param {number} nBytes The number of random bytes to generate.
           *
           * @return {WordArray} The random word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.random(16);
           */
          random: function(nBytes) {
            var words = [];
            for (var i = 0; i < nBytes; i += 4) {
              words.push(cryptoSecureRandomInt());
            }
            return new WordArray.init(words, nBytes);
          }
        });
        var C_enc = C.enc = {};
        var Hex = C_enc.Hex = {
          /**
           * Converts a word array to a hex string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The hex string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
           */
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var hexChars = [];
            for (var i = 0; i < sigBytes; i++) {
              var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              hexChars.push((bite >>> 4).toString(16));
              hexChars.push((bite & 15).toString(16));
            }
            return hexChars.join("");
          },
          /**
           * Converts a hex string to a word array.
           *
           * @param {string} hexStr The hex string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
           */
          parse: function(hexStr) {
            var hexStrLength = hexStr.length;
            var words = [];
            for (var i = 0; i < hexStrLength; i += 2) {
              words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
            }
            return new WordArray.init(words, hexStrLength / 2);
          }
        };
        var Latin1 = C_enc.Latin1 = {
          /**
           * Converts a word array to a Latin1 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Latin1 string.
           *
           * @static
           *
           * @example
           *
           *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
           */
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var latin1Chars = [];
            for (var i = 0; i < sigBytes; i++) {
              var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              latin1Chars.push(String.fromCharCode(bite));
            }
            return latin1Chars.join("");
          },
          /**
           * Converts a Latin1 string to a word array.
           *
           * @param {string} latin1Str The Latin1 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
           */
          parse: function(latin1Str) {
            var latin1StrLength = latin1Str.length;
            var words = [];
            for (var i = 0; i < latin1StrLength; i++) {
              words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
            }
            return new WordArray.init(words, latin1StrLength);
          }
        };
        var Utf8 = C_enc.Utf8 = {
          /**
           * Converts a word array to a UTF-8 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-8 string.
           *
           * @static
           *
           * @example
           *
           *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
           */
          stringify: function(wordArray) {
            try {
              return decodeURIComponent(escape(Latin1.stringify(wordArray)));
            } catch (e) {
              throw new Error("Malformed UTF-8 data");
            }
          },
          /**
           * Converts a UTF-8 string to a word array.
           *
           * @param {string} utf8Str The UTF-8 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
           */
          parse: function(utf8Str) {
            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
          }
        };
        var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new WordArray.init();
            this._nDataBytes = 0;
          },
          /**
           * Adds new data to this block algorithm's buffer.
           *
           * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
           *
           * @example
           *
           *     bufferedBlockAlgorithm._append('data');
           *     bufferedBlockAlgorithm._append(wordArray);
           */
          _append: function(data) {
            if (typeof data == "string") {
              data = Utf8.parse(data);
            }
            this._data.concat(data);
            this._nDataBytes += data.sigBytes;
          },
          /**
           * Processes available data blocks.
           *
           * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
           *
           * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
           *
           * @return {WordArray} The processed data.
           *
           * @example
           *
           *     var processedData = bufferedBlockAlgorithm._process();
           *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
           */
          _process: function(doFlush) {
            var processedWords;
            var data = this._data;
            var dataWords = data.words;
            var dataSigBytes = data.sigBytes;
            var blockSize = this.blockSize;
            var blockSizeBytes = blockSize * 4;
            var nBlocksReady = dataSigBytes / blockSizeBytes;
            if (doFlush) {
              nBlocksReady = Math2.ceil(nBlocksReady);
            } else {
              nBlocksReady = Math2.max((nBlocksReady | 0) - this._minBufferSize, 0);
            }
            var nWordsReady = nBlocksReady * blockSize;
            var nBytesReady = Math2.min(nWordsReady * 4, dataSigBytes);
            if (nWordsReady) {
              for (var offset = 0; offset < nWordsReady; offset += blockSize) {
                this._doProcessBlock(dataWords, offset);
              }
              processedWords = dataWords.splice(0, nWordsReady);
              data.sigBytes -= nBytesReady;
            }
            return new WordArray.init(processedWords, nBytesReady);
          },
          /**
           * Creates a copy of this object.
           *
           * @return {Object} The clone.
           *
           * @example
           *
           *     var clone = bufferedBlockAlgorithm.clone();
           */
          clone: function() {
            var clone = Base.clone.call(this);
            clone._data = this._data.clone();
            return clone;
          },
          _minBufferSize: 0
        });
        var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
          /**
           * Configuration options.
           */
          cfg: Base.extend(),
          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function(cfg) {
            this.cfg = this.cfg.extend(cfg);
            this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            BufferedBlockAlgorithm.reset.call(this);
            this._doReset();
          },
          /**
           * Updates this hasher with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {Hasher} This hasher.
           *
           * @example
           *
           *     hasher.update('message');
           *     hasher.update(wordArray);
           */
          update: function(messageUpdate) {
            this._append(messageUpdate);
            this._process();
            return this;
          },
          /**
           * Finalizes the hash computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The hash.
           *
           * @example
           *
           *     var hash = hasher.finalize();
           *     var hash = hasher.finalize('message');
           *     var hash = hasher.finalize(wordArray);
           */
          finalize: function(messageUpdate) {
            if (messageUpdate) {
              this._append(messageUpdate);
            }
            var hash = this._doFinalize();
            return hash;
          },
          blockSize: 512 / 32,
          /**
           * Creates a shortcut function to a hasher's object interface.
           *
           * @param {Hasher} hasher The hasher to create a helper for.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
           */
          _createHelper: function(hasher) {
            return function(message, cfg) {
              return new hasher.init(cfg).finalize(message);
            };
          },
          /**
           * Creates a shortcut function to the HMAC's object interface.
           *
           * @param {Hasher} hasher The hasher to use in this HMAC helper.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
           */
          _createHmacHelper: function(hasher) {
            return function(message, key) {
              return new C_algo.HMAC.init(hasher, key).finalize(message);
            };
          }
        });
        var C_algo = C.algo = {};
        return C;
      }(Math);
      return CryptoJS;
    });
  }
});

// ../../node_modules/.pnpm/crypto-js@4.2.0/node_modules/crypto-js/md5.js
var require_md5 = __commonJS({
  "../../node_modules/.pnpm/crypto-js@4.2.0/node_modules/crypto-js/md5.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    (function(root, factory) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      (function(Math2) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var T = [];
        (function() {
          for (var i = 0; i < 64; i++) {
            T[i] = Math2.abs(Math2.sin(i + 1)) * 4294967296 | 0;
          }
        })();
        var MD5 = C_algo.MD5 = Hasher.extend({
          _doReset: function() {
            this._hash = new WordArray.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(M, offset) {
            for (var i = 0; i < 16; i++) {
              var offset_i = offset + i;
              var M_offset_i = M[offset_i];
              M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 16711935 | (M_offset_i << 24 | M_offset_i >>> 8) & 4278255360;
            }
            var H = this._hash.words;
            var M_offset_0 = M[offset + 0];
            var M_offset_1 = M[offset + 1];
            var M_offset_2 = M[offset + 2];
            var M_offset_3 = M[offset + 3];
            var M_offset_4 = M[offset + 4];
            var M_offset_5 = M[offset + 5];
            var M_offset_6 = M[offset + 6];
            var M_offset_7 = M[offset + 7];
            var M_offset_8 = M[offset + 8];
            var M_offset_9 = M[offset + 9];
            var M_offset_10 = M[offset + 10];
            var M_offset_11 = M[offset + 11];
            var M_offset_12 = M[offset + 12];
            var M_offset_13 = M[offset + 13];
            var M_offset_14 = M[offset + 14];
            var M_offset_15 = M[offset + 15];
            var a = H[0];
            var b = H[1];
            var c = H[2];
            var d = H[3];
            a = FF(a, b, c, d, M_offset_0, 7, T[0]);
            d = FF(d, a, b, c, M_offset_1, 12, T[1]);
            c = FF(c, d, a, b, M_offset_2, 17, T[2]);
            b = FF(b, c, d, a, M_offset_3, 22, T[3]);
            a = FF(a, b, c, d, M_offset_4, 7, T[4]);
            d = FF(d, a, b, c, M_offset_5, 12, T[5]);
            c = FF(c, d, a, b, M_offset_6, 17, T[6]);
            b = FF(b, c, d, a, M_offset_7, 22, T[7]);
            a = FF(a, b, c, d, M_offset_8, 7, T[8]);
            d = FF(d, a, b, c, M_offset_9, 12, T[9]);
            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
            a = FF(a, b, c, d, M_offset_12, 7, T[12]);
            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
            b = FF(b, c, d, a, M_offset_15, 22, T[15]);
            a = GG(a, b, c, d, M_offset_1, 5, T[16]);
            d = GG(d, a, b, c, M_offset_6, 9, T[17]);
            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
            b = GG(b, c, d, a, M_offset_0, 20, T[19]);
            a = GG(a, b, c, d, M_offset_5, 5, T[20]);
            d = GG(d, a, b, c, M_offset_10, 9, T[21]);
            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
            b = GG(b, c, d, a, M_offset_4, 20, T[23]);
            a = GG(a, b, c, d, M_offset_9, 5, T[24]);
            d = GG(d, a, b, c, M_offset_14, 9, T[25]);
            c = GG(c, d, a, b, M_offset_3, 14, T[26]);
            b = GG(b, c, d, a, M_offset_8, 20, T[27]);
            a = GG(a, b, c, d, M_offset_13, 5, T[28]);
            d = GG(d, a, b, c, M_offset_2, 9, T[29]);
            c = GG(c, d, a, b, M_offset_7, 14, T[30]);
            b = GG(b, c, d, a, M_offset_12, 20, T[31]);
            a = HH(a, b, c, d, M_offset_5, 4, T[32]);
            d = HH(d, a, b, c, M_offset_8, 11, T[33]);
            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
            a = HH(a, b, c, d, M_offset_1, 4, T[36]);
            d = HH(d, a, b, c, M_offset_4, 11, T[37]);
            c = HH(c, d, a, b, M_offset_7, 16, T[38]);
            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
            a = HH(a, b, c, d, M_offset_13, 4, T[40]);
            d = HH(d, a, b, c, M_offset_0, 11, T[41]);
            c = HH(c, d, a, b, M_offset_3, 16, T[42]);
            b = HH(b, c, d, a, M_offset_6, 23, T[43]);
            a = HH(a, b, c, d, M_offset_9, 4, T[44]);
            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
            b = HH(b, c, d, a, M_offset_2, 23, T[47]);
            a = II(a, b, c, d, M_offset_0, 6, T[48]);
            d = II(d, a, b, c, M_offset_7, 10, T[49]);
            c = II(c, d, a, b, M_offset_14, 15, T[50]);
            b = II(b, c, d, a, M_offset_5, 21, T[51]);
            a = II(a, b, c, d, M_offset_12, 6, T[52]);
            d = II(d, a, b, c, M_offset_3, 10, T[53]);
            c = II(c, d, a, b, M_offset_10, 15, T[54]);
            b = II(b, c, d, a, M_offset_1, 21, T[55]);
            a = II(a, b, c, d, M_offset_8, 6, T[56]);
            d = II(d, a, b, c, M_offset_15, 10, T[57]);
            c = II(c, d, a, b, M_offset_6, 15, T[58]);
            b = II(b, c, d, a, M_offset_13, 21, T[59]);
            a = II(a, b, c, d, M_offset_4, 6, T[60]);
            d = II(d, a, b, c, M_offset_11, 10, T[61]);
            c = II(c, d, a, b, M_offset_2, 15, T[62]);
            b = II(b, c, d, a, M_offset_9, 21, T[63]);
            H[0] = H[0] + a | 0;
            H[1] = H[1] + b | 0;
            H[2] = H[2] + c | 0;
            H[3] = H[3] + d | 0;
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            var nBitsTotalH = Math2.floor(nBitsTotal / 4294967296);
            var nBitsTotalL = nBitsTotal;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = (nBitsTotalH << 8 | nBitsTotalH >>> 24) & 16711935 | (nBitsTotalH << 24 | nBitsTotalH >>> 8) & 4278255360;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotalL << 8 | nBitsTotalL >>> 24) & 16711935 | (nBitsTotalL << 24 | nBitsTotalL >>> 8) & 4278255360;
            data.sigBytes = (dataWords.length + 1) * 4;
            this._process();
            var hash = this._hash;
            var H = hash.words;
            for (var i = 0; i < 4; i++) {
              var H_i = H[i];
              H[i] = (H_i << 8 | H_i >>> 24) & 16711935 | (H_i << 24 | H_i >>> 8) & 4278255360;
            }
            return hash;
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        function FF(a, b, c, d, x, s, t) {
          var n = a + (b & c | ~b & d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        __name(FF, "FF");
        function GG(a, b, c, d, x, s, t) {
          var n = a + (b & d | c & ~d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        __name(GG, "GG");
        function HH(a, b, c, d, x, s, t) {
          var n = a + (b ^ c ^ d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        __name(HH, "HH");
        function II(a, b, c, d, x, s, t) {
          var n = a + (c ^ (b | ~d)) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        __name(II, "II");
        C.MD5 = Hasher._createHelper(MD5);
        C.HmacMD5 = Hasher._createHmacHelper(MD5);
      })(Math);
      return CryptoJS.MD5;
    });
  }
});

// .wrangler/tmp/bundle-4ys2WX/middleware-loader.entry.ts
init_checked_fetch();
init_modules_watch_stub();

// .wrangler/tmp/bundle-4ys2WX/middleware-insertion-facade.js
init_checked_fetch();
init_modules_watch_stub();

// main.ts
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/index.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/hono.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/hono-base.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/compose.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/context.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/request.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/utils/body.js
init_checked_fetch();
init_modules_watch_stub();
var parseBody = /* @__PURE__ */ __name(async (request, options = /* @__PURE__ */ Object.create(null)) => {
  const { all = false, dot = false } = options;
  const headers = request instanceof HonoRequest ? request.raw.headers : request.headers;
  const contentType = headers.get("Content-Type");
  if (contentType?.startsWith("multipart/form-data") || contentType?.startsWith("application/x-www-form-urlencoded")) {
    return parseFormData(request, { all, dot });
  }
  return {};
}, "parseBody");
async function parseFormData(request, options) {
  const formData = await request.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
__name(parseFormData, "parseFormData");
function convertFormDataToBodyData(formData, options) {
  const form = /* @__PURE__ */ Object.create(null);
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  if (options.dot) {
    Object.entries(form).forEach(([key, value]) => {
      const shouldParseDotValues = key.includes(".");
      if (shouldParseDotValues) {
        handleParsingNestedValues(form, key, value);
        delete form[key];
      }
    });
  }
  return form;
}
__name(convertFormDataToBodyData, "convertFormDataToBodyData");
var handleParsingAllValues = /* @__PURE__ */ __name((form, key, value) => {
  if (form[key] !== void 0) {
    if (Array.isArray(form[key])) {
      ;
      form[key].push(value);
    } else {
      form[key] = [form[key], value];
    }
  } else {
    form[key] = value;
  }
}, "handleParsingAllValues");
var handleParsingNestedValues = /* @__PURE__ */ __name((form, key, value) => {
  let nestedForm = form;
  const keys = key.split(".");
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) {
      nestedForm[key2] = value;
    } else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        nestedForm[key2] = /* @__PURE__ */ Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
}, "handleParsingNestedValues");

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/utils/url.js
init_checked_fetch();
init_modules_watch_stub();
var splitPath = /* @__PURE__ */ __name((path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
}, "splitPath");
var splitRoutingPath = /* @__PURE__ */ __name((routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
}, "splitRoutingPath");
var extractGroupsFromPath = /* @__PURE__ */ __name((path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match, index) => {
    const mark = `@${index}`;
    groups.push([mark, match]);
    return mark;
  });
  return { groups, path };
}, "extractGroupsFromPath");
var replaceGroupMarks = /* @__PURE__ */ __name((paths, groups) => {
  for (let i = groups.length - 1; i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1; j >= 0; j--) {
      if (paths[j].includes(mark)) {
        paths[j] = paths[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
}, "replaceGroupMarks");
var patternCache = {};
var getPattern = /* @__PURE__ */ __name((label) => {
  if (label === "*") {
    return "*";
  }
  const match = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match) {
    if (!patternCache[label]) {
      if (match[2]) {
        patternCache[label] = [label, match[1], new RegExp("^" + match[2] + "$")];
      } else {
        patternCache[label] = [label, match[1], true];
      }
    }
    return patternCache[label];
  }
  return null;
}, "getPattern");
var tryDecodeURI = /* @__PURE__ */ __name((str) => {
  try {
    return decodeURI(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match) => {
      try {
        return decodeURI(match);
      } catch {
        return match;
      }
    });
  }
}, "tryDecodeURI");
var getPath = /* @__PURE__ */ __name((request) => {
  const url = request.url;
  const start = url.indexOf("/", 8);
  let i = start;
  for (; i < url.length; i++) {
    const charCode = url.charCodeAt(i);
    if (charCode === 37) {
      const queryIndex = url.indexOf("?", i);
      const path = url.slice(start, queryIndex === -1 ? void 0 : queryIndex);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63) {
      break;
    }
  }
  return url.slice(start, i);
}, "getPath");
var getPathNoStrict = /* @__PURE__ */ __name((request) => {
  const result = getPath(request);
  return result.length > 1 && result[result.length - 1] === "/" ? result.slice(0, -1) : result;
}, "getPathNoStrict");
var mergePath = /* @__PURE__ */ __name((...paths) => {
  let p = "";
  let endsWithSlash = false;
  for (let path of paths) {
    if (p[p.length - 1] === "/") {
      p = p.slice(0, -1);
      endsWithSlash = true;
    }
    if (path[0] !== "/") {
      path = `/${path}`;
    }
    if (path === "/" && endsWithSlash) {
      p = `${p}/`;
    } else if (path !== "/") {
      p = `${p}${path}`;
    }
    if (path === "/" && p === "") {
      p = "/";
    }
  }
  return p;
}, "mergePath");
var checkOptionalParameter = /* @__PURE__ */ __name((path) => {
  if (!path.match(/\:.+\?$/)) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v, i, a) => a.indexOf(v) === i);
}, "checkOptionalParameter");
var _decodeURI = /* @__PURE__ */ __name((value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return /%/.test(value) ? decodeURIComponent_(value) : value;
}, "_decodeURI");
var _getQueryParam = /* @__PURE__ */ __name((url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf(`?${key}`, 8);
    if (keyIndex2 === -1) {
      keyIndex2 = url.indexOf(`&${key}`, 8);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return void 0;
    }
  }
  const results = {};
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name2 = url.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded) {
      name2 = _decodeURI(name2);
    }
    keyIndex = nextKeyIndex;
    if (name2 === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name2] && Array.isArray(results[name2]))) {
        results[name2] = [];
      }
      ;
      results[name2].push(value);
    } else {
      results[name2] ??= value;
    }
  }
  return key ? results[key] : results;
}, "_getQueryParam");
var getQueryParam = _getQueryParam;
var getQueryParams = /* @__PURE__ */ __name((url, key) => {
  return _getQueryParam(url, key, true);
}, "getQueryParams");
var decodeURIComponent_ = decodeURIComponent;

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/request.js
var HonoRequest = /* @__PURE__ */ __name(class {
  raw;
  #validatedData;
  #matchResult;
  routeIndex = 0;
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path;
    this.#matchResult = matchResult;
    this.#validatedData = {};
  }
  param(key) {
    return key ? this.getDecodedParam(key) : this.getAllDecodedParams();
  }
  getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex][1][key];
    const param = this.getParamValue(paramKey);
    return param ? /\%/.test(param) ? decodeURIComponent_(param) : param : void 0;
  }
  getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value && typeof value === "string") {
        decoded[key] = /\%/.test(value) ? decodeURIComponent_(value) : value;
      }
    }
    return decoded;
  }
  getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name2) {
    if (name2) {
      return this.raw.headers.get(name2.toLowerCase()) ?? void 0;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    return this.bodyCache.parsedBody ??= await parseBody(this, options);
  }
  cachedBody = (key) => {
    const { bodyCache, raw: raw3 } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) {
      return cachedBody;
    }
    const anyCachedKey = Object.keys(bodyCache)[0];
    if (anyCachedKey) {
      return bodyCache[anyCachedKey].then((body) => {
        if (anyCachedKey === "json") {
          body = JSON.stringify(body);
        }
        return new Response(body)[key]();
      });
    }
    return bodyCache[key] = raw3[key]();
  };
  json() {
    return this.cachedBody("json");
  }
  text() {
    return this.cachedBody("text");
  }
  arrayBuffer() {
    return this.cachedBody("arrayBuffer");
  }
  blob() {
    return this.cachedBody("blob");
  }
  formData() {
    return this.cachedBody("formData");
  }
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
}, "HonoRequest");

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/utils/html.js
init_checked_fetch();
init_modules_watch_stub();
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw2 = /* @__PURE__ */ __name((value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
}, "raw");
var resolveCallback = /* @__PURE__ */ __name(async (str, phase, preserveCallbacks, context, buffer) => {
  if (typeof str === "object" && !(str instanceof String)) {
    if (!(str instanceof Promise)) {
      str = str.toString();
    }
    if (str instanceof Promise) {
      str = await str;
    }
  }
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context }))).then(
    (res) => Promise.all(
      res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context, buffer))
    ).then(() => buffer[0])
  );
  if (preserveCallbacks) {
    return raw2(await resStr, callbacks);
  } else {
    return resStr;
  }
}, "resolveCallback");

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setHeaders = /* @__PURE__ */ __name((headers, map = {}) => {
  Object.entries(map).forEach(([key, value]) => headers.set(key, value));
  return headers;
}, "setHeaders");
var Context = /* @__PURE__ */ __name(class {
  #rawRequest;
  #req;
  env = {};
  #var;
  finalized = false;
  error;
  #status = 200;
  #executionCtx;
  #headers;
  #preparedHeaders;
  #res;
  #isFresh = true;
  #layout;
  #renderer;
  #notFoundHandler;
  #matchResult;
  #path;
  constructor(req, options) {
    this.#rawRequest = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      this.#notFoundHandler = options.notFoundHandler;
      this.#path = options.path;
      this.#matchResult = options.matchResult;
    }
  }
  get req() {
    this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult);
    return this.#req;
  }
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  get res() {
    this.#isFresh = false;
    return this.#res ||= new Response("404 Not Found", { status: 404 });
  }
  set res(_res) {
    this.#isFresh = false;
    if (this.#res && _res) {
      try {
        for (const [k, v] of this.#res.headers.entries()) {
          if (k === "content-type") {
            continue;
          }
          if (k === "set-cookie") {
            const cookies = this.#res.headers.getSetCookie();
            _res.headers.delete("set-cookie");
            for (const cookie of cookies) {
              _res.headers.append("set-cookie", cookie);
            }
          } else {
            _res.headers.set(k, v);
          }
        }
      } catch (e) {
        if (e instanceof TypeError && e.message.includes("immutable")) {
          this.res = new Response(_res.body, {
            headers: _res.headers,
            status: _res.status
          });
          return;
        } else {
          throw e;
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  render = (...args) => {
    this.#renderer ??= (content) => this.html(content);
    return this.#renderer(...args);
  };
  setLayout = (layout) => this.#layout = layout;
  getLayout = () => this.#layout;
  setRenderer = (renderer) => {
    this.#renderer = renderer;
  };
  header = (name2, value, options) => {
    if (value === void 0) {
      if (this.#headers) {
        this.#headers.delete(name2);
      } else if (this.#preparedHeaders) {
        delete this.#preparedHeaders[name2.toLocaleLowerCase()];
      }
      if (this.finalized) {
        this.res.headers.delete(name2);
      }
      return;
    }
    if (options?.append) {
      if (!this.#headers) {
        this.#isFresh = false;
        this.#headers = new Headers(this.#preparedHeaders);
        this.#preparedHeaders = {};
      }
      this.#headers.append(name2, value);
    } else {
      if (this.#headers) {
        this.#headers.set(name2, value);
      } else {
        this.#preparedHeaders ??= {};
        this.#preparedHeaders[name2.toLowerCase()] = value;
      }
    }
    if (this.finalized) {
      if (options?.append) {
        this.res.headers.append(name2, value);
      } else {
        this.res.headers.set(name2, value);
      }
    }
  };
  status = (status) => {
    this.#isFresh = false;
    this.#status = status;
  };
  set = (key, value) => {
    this.#var ??= /* @__PURE__ */ new Map();
    this.#var.set(key, value);
  };
  get = (key) => {
    return this.#var ? this.#var.get(key) : void 0;
  };
  get var() {
    if (!this.#var) {
      return {};
    }
    return Object.fromEntries(this.#var);
  }
  newResponse = (data, arg, headers) => {
    if (this.#isFresh && !headers && !arg && this.#status === 200) {
      return new Response(data, {
        headers: this.#preparedHeaders
      });
    }
    if (arg && typeof arg !== "number") {
      const header = new Headers(arg.headers);
      if (this.#headers) {
        this.#headers.forEach((v, k) => {
          if (k === "set-cookie") {
            header.append(k, v);
          } else {
            header.set(k, v);
          }
        });
      }
      const headers2 = setHeaders(header, this.#preparedHeaders);
      return new Response(data, {
        headers: headers2,
        status: arg.status ?? this.#status
      });
    }
    const status = typeof arg === "number" ? arg : this.#status;
    this.#preparedHeaders ??= {};
    this.#headers ??= new Headers();
    setHeaders(this.#headers, this.#preparedHeaders);
    if (this.#res) {
      this.#res.headers.forEach((v, k) => {
        if (k === "set-cookie") {
          this.#headers?.append(k, v);
        } else {
          this.#headers?.set(k, v);
        }
      });
      setHeaders(this.#headers, this.#preparedHeaders);
    }
    headers ??= {};
    for (const [k, v] of Object.entries(headers)) {
      if (typeof v === "string") {
        this.#headers.set(k, v);
      } else {
        this.#headers.delete(k);
        for (const v2 of v) {
          this.#headers.append(k, v2);
        }
      }
    }
    return new Response(data, {
      status,
      headers: this.#headers
    });
  };
  body = (data, arg, headers) => {
    return typeof arg === "number" ? this.newResponse(data, arg, headers) : this.newResponse(data, arg);
  };
  text = (text, arg, headers) => {
    if (!this.#preparedHeaders) {
      if (this.#isFresh && !headers && !arg) {
        return new Response(text);
      }
      this.#preparedHeaders = {};
    }
    this.#preparedHeaders["content-type"] = TEXT_PLAIN;
    return typeof arg === "number" ? this.newResponse(text, arg, headers) : this.newResponse(text, arg);
  };
  json = (object, arg, headers) => {
    const body = JSON.stringify(object);
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "application/json; charset=UTF-8";
    return typeof arg === "number" ? this.newResponse(body, arg, headers) : this.newResponse(body, arg);
  };
  html = (html, arg, headers) => {
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "text/html; charset=UTF-8";
    if (typeof html === "object") {
      return resolveCallback(html, HtmlEscapedCallbackPhase.Stringify, false, {}).then((html2) => {
        return typeof arg === "number" ? this.newResponse(html2, arg, headers) : this.newResponse(html2, arg);
      });
    }
    return typeof arg === "number" ? this.newResponse(html, arg, headers) : this.newResponse(html, arg);
  };
  redirect = (location, status) => {
    this.#headers ??= new Headers();
    this.#headers.set("Location", location);
    return this.newResponse(null, status ?? 302);
  };
  notFound = () => {
    this.#notFoundHandler ??= () => new Response();
    return this.#notFoundHandler(this);
  };
}, "Context");

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/compose.js
var compose = /* @__PURE__ */ __name((middleware, onError, onNotFound) => {
  return (context, next) => {
    let index = -1;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0][0];
        if (context instanceof Context) {
          context.req.routeIndex = i;
        }
      } else {
        handler = i === middleware.length && next || void 0;
      }
      if (!handler) {
        if (context instanceof Context && context.finalized === false && onNotFound) {
          res = await onNotFound(context);
        }
      } else {
        try {
          res = await handler(context, () => {
            return dispatch(i + 1);
          });
        } catch (err2) {
          if (err2 instanceof Error && context instanceof Context && onError) {
            context.error = err2;
            res = await onError(err2, context);
            isError = true;
          } else {
            throw err2;
          }
        }
      }
      if (res && (context.finalized === false || isError)) {
        context.res = res;
      }
      return context;
    }
    __name(dispatch, "dispatch");
  };
}, "compose");

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/router.js
init_checked_fetch();
init_modules_watch_stub();
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = /* @__PURE__ */ __name(class extends Error {
}, "UnsupportedPathError");

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/hono-base.js
var COMPOSED_HANDLER = Symbol("composedHandler");
var notFoundHandler = /* @__PURE__ */ __name((c) => {
  return c.text("404 Not Found", 404);
}, "notFoundHandler");
var errorHandler = /* @__PURE__ */ __name((err2, c) => {
  if ("getResponse" in err2) {
    return err2.getResponse();
  }
  console.error(err2);
  return c.text("Internal Server Error", 500);
}, "errorHandler");
var Hono = /* @__PURE__ */ __name(class {
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  router;
  getPath;
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.addRoute(method, this.#path, args1);
        }
        args.forEach((handler) => {
          if (typeof handler !== "string") {
            this.addRoute(method, this.#path, handler);
          }
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      for (const p of [path].flat()) {
        this.#path = p;
        for (const m of [method].flat()) {
          handlers.map((handler) => {
            this.addRoute(m.toUpperCase(), this.#path, handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler) => {
        this.addRoute(METHOD_NAME_ALL, this.#path, handler);
      });
      return this;
    };
    const strict = options.strict ?? true;
    delete options.strict;
    Object.assign(this, options);
    this.getPath = strict ? options.getPath ?? getPath : getPathNoStrict;
  }
  clone() {
    const clone = new Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.routes = this.routes;
    return clone;
  }
  notFoundHandler = notFoundHandler;
  errorHandler = errorHandler;
  route(path, app2) {
    const subApp = this.basePath(path);
    app2.routes.map((r) => {
      let handler;
      if (app2.errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = /* @__PURE__ */ __name(async (c, next) => (await compose([], app2.errorHandler)(c, () => r.handler(c, next))).res, "handler");
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.addRoute(r.method, r.path, handler);
    });
    return this;
  }
  basePath(path) {
    const subApp = this.clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  onError = (handler) => {
    this.errorHandler = handler;
    return this;
  };
  notFound = (handler) => {
    this.notFoundHandler = handler;
    return this;
  };
  mount(path, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") {
        optionHandler = options;
      } else {
        optionHandler = options.optionHandler;
        replaceRequest = options.replaceRequest;
      }
    }
    const getOptions = optionHandler ? (c) => {
      const options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext = void 0;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      return [c.env, executionContext];
    };
    replaceRequest ||= (() => {
      const mergedPath = mergePath(this._basePath, path);
      const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        const url = new URL(request.url);
        url.pathname = url.pathname.slice(pathPrefixLength) || "/";
        return new Request(url, request);
      };
    })();
    const handler = /* @__PURE__ */ __name(async (c, next) => {
      const res = await applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
      if (res) {
        return res;
      }
      await next();
    }, "handler");
    this.addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  addRoute(method, path, handler) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = { path, method, handler };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  matchRoute(method, path) {
    return this.router.match(method, path);
  }
  handleError(err2, c) {
    if (err2 instanceof Error) {
      return this.errorHandler(err2, c);
    }
    throw err2;
  }
  dispatch(request, executionCtx, env, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.dispatch(request, executionCtx, env, "GET")))();
    }
    const path = this.getPath(request, { env });
    const matchResult = this.matchRoute(method, path);
    const c = new Context(request, {
      path,
      matchResult,
      env,
      executionCtx,
      notFoundHandler: this.notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.notFoundHandler(c);
        });
      } catch (err2) {
        return this.handleError(err2, c);
      }
      return res instanceof Promise ? res.then(
        (resolved) => resolved || (c.finalized ? c.res : this.notFoundHandler(c))
      ).catch((err2) => this.handleError(err2, c)) : res ?? this.notFoundHandler(c);
    }
    const composed = compose(matchResult[0], this.errorHandler, this.notFoundHandler);
    return (async () => {
      try {
        const context = await composed(c);
        if (!context.finalized) {
          throw new Error(
            "Context is not finalized. Did you forget to return a Response object or `await next()`?"
          );
        }
        return context.res;
      } catch (err2) {
        return this.handleError(err2, c);
      }
    })();
  }
  fetch = (request, ...rest) => {
    return this.dispatch(request, rest[1], rest[0], request.method);
  };
  request = (input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) {
      if (requestInit !== void 0) {
        input = new Request(input, requestInit);
      }
      return this.fetch(input, Env, executionCtx);
    }
    input = input.toString();
    const path = /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`;
    const req = new Request(path, requestInit);
    return this.fetch(req, Env, executionCtx);
  };
  fire = () => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.dispatch(event.request, event, void 0, event.request.method));
    });
  };
}, "Hono");

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/router/reg-exp-router/index.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/router/reg-exp-router/router.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/router/reg-exp-router/node.js
init_checked_fetch();
init_modules_watch_stub();
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = Symbol();
var regExpMetaChars = new Set(".\\+*[^]$()");
function compareKey(a, b) {
  if (a.length === 1) {
    return b.length === 1 ? a < b ? -1 : 1 : -1;
  }
  if (b.length === 1) {
    return 1;
  }
  if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b === ONLY_WILDCARD_REG_EXP_STR || b === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
}
__name(compareKey, "compareKey");
var Node = /* @__PURE__ */ __name(class {
  index;
  varIndex;
  children = /* @__PURE__ */ Object.create(null);
  insert(tokens, index, paramMap, context, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.index !== void 0) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name2 = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name2 && pattern[2]) {
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.children[regexpStr];
      if (!node) {
        if (Object.keys(this.children).some(
          (k) => k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.children[regexpStr] = new Node();
        if (name2 !== "") {
          node.varIndex = context.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name2 !== "") {
        paramMap.push([name2, node.varIndex]);
      }
    } else {
      node = this.children[token];
      if (!node) {
        if (Object.keys(this.children).some(
          (k) => k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.children[token] = new Node();
      }
    }
    node.insert(restTokens, index, paramMap, context, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.children[k];
      return (typeof c.varIndex === "number" ? `(${k})@${c.varIndex}` : regExpMetaChars.has(k) ? `\\${k}` : k) + c.buildRegExpStr();
    });
    if (typeof this.index === "number") {
      strList.unshift(`#${this.index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
}, "Node");

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/router/reg-exp-router/trie.js
init_checked_fetch();
init_modules_watch_stub();
var Trie = /* @__PURE__ */ __name(class {
  context = { varIndex: 0 };
  root = new Node();
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0; ; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1; j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.root.insert(tokens, index, paramAssoc, this.context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (typeof handlerIndex !== "undefined") {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (typeof paramIndex !== "undefined") {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
}, "Trie");

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/router/reg-exp-router/router.js
var emptyParam = [];
var nullMatcher = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
function buildWildcardRegExp(path) {
  return wildcardRegExpCache[path] ??= new RegExp(
    path === "*" ? "" : `^${path.replace(
      /\/\*$|([.\\+*[^\]$()])/g,
      (_, metaChar) => metaChar ? `\\${metaChar}` : "(?:|/.*)"
    )}$`
  );
}
__name(buildWildcardRegExp, "buildWildcardRegExp");
function clearWildcardRegExpCache() {
  wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
}
__name(clearWildcardRegExpCache, "clearWildcardRegExpCache");
function buildMatcherFromPreprocessedRoutes(routes) {
  const trie = new Trie();
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map(
    (route) => [!/\*|\/:/.test(route[0]), ...route]
  ).sort(
    ([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length
  );
  const staticMap = /* @__PURE__ */ Object.create(null);
  for (let i = 0, j = -1, len = routesWithStaticPathFlag.length; i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h]) => [h, /* @__PURE__ */ Object.create(null)]), emptyParam];
    } else {
      j++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie.insert(path, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = handlers.map(([h, paramCount]) => {
      const paramIndexMap = /* @__PURE__ */ Object.create(null);
      paramCount -= 1;
      for (; paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i = 0, len = handlerData.length; i < len; i++) {
    for (let j = 0, len2 = handlerData[i].length; j < len2; j++) {
      const map = handlerData[i][j]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k = 0, len3 = keys.length; k < len3; k++) {
        map[keys[k]] = paramReplacementMap[map[keys[k]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
}
__name(buildMatcherFromPreprocessedRoutes, "buildMatcherFromPreprocessedRoutes");
function findMiddleware(middleware, path) {
  if (!middleware) {
    return void 0;
  }
  for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) {
    if (buildWildcardRegExp(k).test(path)) {
      return [...middleware[k]];
    }
  }
  return void 0;
}
__name(findMiddleware, "findMiddleware");
var RegExpRouter = /* @__PURE__ */ __name(class {
  name = "RegExpRouter";
  middleware;
  routes;
  constructor() {
    this.middleware = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
    this.routes = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
  }
  add(method, path, handler) {
    const { middleware, routes } = this;
    if (!middleware || !routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (!middleware[method]) {
      ;
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = /* @__PURE__ */ Object.create(null);
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p) => {
          handlerMap[method][p] = [...handlerMap[METHOD_NAME_ALL][p]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m) => {
          middleware[m][path] ||= findMiddleware(middleware[m], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
        });
      } else {
        middleware[method][path] ||= findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
      }
      Object.keys(middleware).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(middleware[m]).forEach((p) => {
            re.test(p) && middleware[m][p].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(routes[m]).forEach(
            (p) => re.test(p) && routes[m][p].push([handler, paramCount])
          );
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i = 0, len = paths.length; i < len; i++) {
      const path2 = paths[i];
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          routes[m][path2] ||= [
            ...findMiddleware(middleware[m], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ];
          routes[m][path2].push([handler, paramCount - len + i + 1]);
        }
      });
    }
  }
  match(method, path) {
    clearWildcardRegExpCache();
    const matchers = this.buildAllMatchers();
    this.match = (method2, path2) => {
      const matcher = matchers[method2] || matchers[METHOD_NAME_ALL];
      const staticMatch = matcher[2][path2];
      if (staticMatch) {
        return staticMatch;
      }
      const match = path2.match(matcher[0]);
      if (!match) {
        return [[], emptyParam];
      }
      const index = match.indexOf("", 1);
      return [matcher[1][index], match];
    };
    return this.match(method, path);
  }
  buildAllMatchers() {
    const matchers = /* @__PURE__ */ Object.create(null);
    [...Object.keys(this.routes), ...Object.keys(this.middleware)].forEach((method) => {
      matchers[method] ||= this.buildMatcher(method);
    });
    this.middleware = this.routes = void 0;
    return matchers;
  }
  buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.middleware, this.routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute ||= true;
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(
          ...Object.keys(r[METHOD_NAME_ALL]).map((path) => [path, r[METHOD_NAME_ALL][path]])
        );
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
}, "RegExpRouter");

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/router/smart-router/index.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/router/smart-router/router.js
init_checked_fetch();
init_modules_watch_stub();
var SmartRouter = /* @__PURE__ */ __name(class {
  name = "SmartRouter";
  routers = [];
  routes = [];
  constructor(init2) {
    Object.assign(this, init2);
  }
  add(method, path, handler) {
    if (!this.routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.routes) {
      throw new Error("Fatal error");
    }
    const { routers, routes } = this;
    const len = routers.length;
    let i = 0;
    let res;
    for (; i < len; i++) {
      const router = routers[i];
      try {
        routes.forEach((args) => {
          router.add(...args);
        });
        res = router.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router.match.bind(router);
      this.routers = [router];
      this.routes = void 0;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.routes || this.routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.routers[0];
  }
}, "SmartRouter");

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/router/trie-router/index.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/router/trie-router/router.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/router/trie-router/node.js
init_checked_fetch();
init_modules_watch_stub();
var Node2 = /* @__PURE__ */ __name(class {
  methods;
  children;
  patterns;
  order = 0;
  name;
  params = /* @__PURE__ */ Object.create(null);
  constructor(method, handler, children) {
    this.children = children || /* @__PURE__ */ Object.create(null);
    this.methods = [];
    this.name = "";
    if (method && handler) {
      const m = /* @__PURE__ */ Object.create(null);
      m[method] = { handler, possibleKeys: [], score: 0, name: this.name };
      this.methods = [m];
    }
    this.patterns = [];
  }
  insert(method, path, handler) {
    this.name = `${method} ${path}`;
    this.order = ++this.order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const p = parts[i];
      if (Object.keys(curNode.children).includes(p)) {
        curNode = curNode.children[p];
        const pattern2 = getPattern(p);
        if (pattern2) {
          possibleKeys.push(pattern2[1]);
        }
        continue;
      }
      curNode.children[p] = new Node2();
      const pattern = getPattern(p);
      if (pattern) {
        curNode.patterns.push(pattern);
        possibleKeys.push(pattern[1]);
      }
      curNode = curNode.children[p];
    }
    if (!curNode.methods.length) {
      curNode.methods = [];
    }
    const m = /* @__PURE__ */ Object.create(null);
    const handlerSet = {
      handler,
      possibleKeys: possibleKeys.filter((v, i, a) => a.indexOf(v) === i),
      name: this.name,
      score: this.order
    };
    m[method] = handlerSet;
    curNode.methods.push(m);
    return curNode;
  }
  gHSets(node, method, nodeParams, params) {
    const handlerSets = [];
    for (let i = 0, len = node.methods.length; i < len; i++) {
      const m = node.methods[i];
      const handlerSet = m[method] || m[METHOD_NAME_ALL];
      const processedSet = /* @__PURE__ */ Object.create(null);
      if (handlerSet !== void 0) {
        handlerSet.params = /* @__PURE__ */ Object.create(null);
        handlerSet.possibleKeys.forEach((key) => {
          const processed = processedSet[handlerSet.name];
          handlerSet.params[key] = params[key] && !processed ? params[key] : nodeParams[key] ?? params[key];
          processedSet[handlerSet.name] = true;
        });
        handlerSets.push(handlerSet);
      }
    }
    return handlerSets;
  }
  search(method, path) {
    const handlerSets = [];
    this.params = /* @__PURE__ */ Object.create(null);
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    for (let i = 0, len = parts.length; i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length; j < len2; j++) {
        const node = curNodes[j];
        const nextNode = node.children[part];
        if (nextNode) {
          nextNode.params = node.params;
          if (isLast === true) {
            if (nextNode.children["*"]) {
              handlerSets.push(
                ...this.gHSets(nextNode.children["*"], method, node.params, /* @__PURE__ */ Object.create(null))
              );
            }
            handlerSets.push(...this.gHSets(nextNode, method, node.params, /* @__PURE__ */ Object.create(null)));
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = node.patterns.length; k < len3; k++) {
          const pattern = node.patterns[k];
          const params = { ...node.params };
          if (pattern === "*") {
            const astNode = node.children["*"];
            if (astNode) {
              handlerSets.push(...this.gHSets(astNode, method, node.params, /* @__PURE__ */ Object.create(null)));
              tempNodes.push(astNode);
            }
            continue;
          }
          if (part === "") {
            continue;
          }
          const [key, name2, matcher] = pattern;
          const child = node.children[key];
          const restPathString = parts.slice(i).join("/");
          if (matcher instanceof RegExp && matcher.test(restPathString)) {
            params[name2] = restPathString;
            handlerSets.push(...this.gHSets(child, method, node.params, params));
            continue;
          }
          if (matcher === true || matcher instanceof RegExp && matcher.test(part)) {
            if (typeof key === "string") {
              params[name2] = part;
              if (isLast === true) {
                handlerSets.push(...this.gHSets(child, method, params, node.params));
                if (child.children["*"]) {
                  handlerSets.push(...this.gHSets(child.children["*"], method, params, node.params));
                }
              } else {
                child.params = params;
                tempNodes.push(child);
              }
            }
          }
        }
      }
      curNodes = tempNodes;
    }
    const results = handlerSets.sort((a, b) => {
      return a.score - b.score;
    });
    return [results.map(({ handler, params }) => [handler, params])];
  }
}, "Node");

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = /* @__PURE__ */ __name(class {
  name = "TrieRouter";
  node;
  constructor() {
    this.node = new Node2();
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (const p of results) {
        this.node.insert(method, p, handler);
      }
      return;
    }
    this.node.insert(method, path, handler);
  }
  match(method, path) {
    return this.node.search(method, path);
  }
}, "TrieRouter");

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/hono.js
var Hono2 = /* @__PURE__ */ __name(class extends Hono {
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter(), new TrieRouter()]
    });
  }
}, "Hono");

// src/user.ts
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/middleware/jwt/index.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/middleware/jwt/jwt.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/helper/cookie/index.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/utils/cookie.js
init_checked_fetch();
init_modules_watch_stub();
var algorithm = { name: "HMAC", hash: "SHA-256" };
var getCryptoKey = /* @__PURE__ */ __name(async (secret) => {
  const secretBuf = typeof secret === "string" ? new TextEncoder().encode(secret) : secret;
  return await crypto.subtle.importKey("raw", secretBuf, algorithm, false, ["sign", "verify"]);
}, "getCryptoKey");
var verifySignature = /* @__PURE__ */ __name(async (base64Signature, value, secret) => {
  try {
    const signatureBinStr = atob(base64Signature);
    const signature = new Uint8Array(signatureBinStr.length);
    for (let i = 0, len = signatureBinStr.length; i < len; i++) {
      signature[i] = signatureBinStr.charCodeAt(i);
    }
    return await crypto.subtle.verify(algorithm, secret, signature, new TextEncoder().encode(value));
  } catch {
    return false;
  }
}, "verifySignature");
var validCookieNameRegEx = /^[\w!#$%&'*.^`|~+-]+$/;
var validCookieValueRegEx = /^[ !#-:<-[\]-~]*$/;
var parse = /* @__PURE__ */ __name((cookie, name2) => {
  const pairs = cookie.trim().split(";");
  return pairs.reduce((parsedCookie, pairStr) => {
    pairStr = pairStr.trim();
    const valueStartPos = pairStr.indexOf("=");
    if (valueStartPos === -1) {
      return parsedCookie;
    }
    const cookieName = pairStr.substring(0, valueStartPos).trim();
    if (name2 && name2 !== cookieName || !validCookieNameRegEx.test(cookieName)) {
      return parsedCookie;
    }
    let cookieValue = pairStr.substring(valueStartPos + 1).trim();
    if (cookieValue.startsWith('"') && cookieValue.endsWith('"')) {
      cookieValue = cookieValue.slice(1, -1);
    }
    if (validCookieValueRegEx.test(cookieValue)) {
      parsedCookie[cookieName] = decodeURIComponent_(cookieValue);
    }
    return parsedCookie;
  }, {});
}, "parse");
var parseSigned = /* @__PURE__ */ __name(async (cookie, secret, name2) => {
  const parsedCookie = {};
  const secretKey = await getCryptoKey(secret);
  for (const [key, value] of Object.entries(parse(cookie, name2))) {
    const signatureStartPos = value.lastIndexOf(".");
    if (signatureStartPos < 1) {
      continue;
    }
    const signedValue = value.substring(0, signatureStartPos);
    const signature = value.substring(signatureStartPos + 1);
    if (signature.length !== 44 || !signature.endsWith("=")) {
      continue;
    }
    const isVerified = await verifySignature(signature, signedValue, secretKey);
    parsedCookie[key] = isVerified ? signedValue : false;
  }
  return parsedCookie;
}, "parseSigned");

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/helper/cookie/index.js
var getCookie = /* @__PURE__ */ __name((c, key, prefix) => {
  const cookie = c.req.raw.headers.get("Cookie");
  if (typeof key === "string") {
    if (!cookie) {
      return void 0;
    }
    let finalKey = key;
    if (prefix === "secure") {
      finalKey = "__Secure-" + key;
    } else if (prefix === "host") {
      finalKey = "__Host-" + key;
    }
    const obj2 = parse(cookie, finalKey);
    return obj2[finalKey];
  }
  if (!cookie) {
    return {};
  }
  const obj = parse(cookie);
  return obj;
}, "getCookie");
var getSignedCookie = /* @__PURE__ */ __name(async (c, secret, key, prefix) => {
  const cookie = c.req.raw.headers.get("Cookie");
  if (typeof key === "string") {
    if (!cookie) {
      return void 0;
    }
    let finalKey = key;
    if (prefix === "secure") {
      finalKey = "__Secure-" + key;
    } else if (prefix === "host") {
      finalKey = "__Host-" + key;
    }
    const obj2 = await parseSigned(cookie, secret, finalKey);
    return obj2[finalKey];
  }
  if (!cookie) {
    return {};
  }
  const obj = await parseSigned(cookie, secret);
  return obj;
}, "getSignedCookie");

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/http-exception.js
init_checked_fetch();
init_modules_watch_stub();
var HTTPException = /* @__PURE__ */ __name(class extends Error {
  res;
  status;
  constructor(status = 500, options) {
    super(options?.message, { cause: options?.cause });
    this.res = options?.res;
    this.status = status;
  }
  getResponse() {
    if (this.res) {
      const newResponse = new Response(this.res.body, {
        status: this.status,
        headers: this.res.headers
      });
      return newResponse;
    }
    return new Response(this.message, {
      status: this.status
    });
  }
}, "HTTPException");

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/utils/jwt/index.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/utils/jwt/jwt.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/utils/encode.js
init_checked_fetch();
init_modules_watch_stub();
var decodeBase64Url = /* @__PURE__ */ __name((str) => {
  return decodeBase64(str.replace(/_|-/g, (m) => ({ _: "/", "-": "+" })[m] ?? m));
}, "decodeBase64Url");
var encodeBase64Url = /* @__PURE__ */ __name((buf) => encodeBase64(buf).replace(/\/|\+/g, (m) => ({ "/": "_", "+": "-" })[m] ?? m), "encodeBase64Url");
var encodeBase64 = /* @__PURE__ */ __name((buf) => {
  let binary = "";
  const bytes = new Uint8Array(buf);
  for (let i = 0, len = bytes.length; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}, "encodeBase64");
var decodeBase64 = /* @__PURE__ */ __name((str) => {
  const binary = atob(str);
  const bytes = new Uint8Array(new ArrayBuffer(binary.length));
  const half = binary.length / 2;
  for (let i = 0, j = binary.length - 1; i <= half; i++, j--) {
    bytes[i] = binary.charCodeAt(i);
    bytes[j] = binary.charCodeAt(j);
  }
  return bytes;
}, "decodeBase64");

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/utils/jwt/jwa.js
init_checked_fetch();
init_modules_watch_stub();
var AlgorithmTypes = /* @__PURE__ */ ((AlgorithmTypes2) => {
  AlgorithmTypes2["HS256"] = "HS256";
  AlgorithmTypes2["HS384"] = "HS384";
  AlgorithmTypes2["HS512"] = "HS512";
  AlgorithmTypes2["RS256"] = "RS256";
  AlgorithmTypes2["RS384"] = "RS384";
  AlgorithmTypes2["RS512"] = "RS512";
  AlgorithmTypes2["PS256"] = "PS256";
  AlgorithmTypes2["PS384"] = "PS384";
  AlgorithmTypes2["PS512"] = "PS512";
  AlgorithmTypes2["ES256"] = "ES256";
  AlgorithmTypes2["ES384"] = "ES384";
  AlgorithmTypes2["ES512"] = "ES512";
  AlgorithmTypes2["EdDSA"] = "EdDSA";
  return AlgorithmTypes2;
})(AlgorithmTypes || {});

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/utils/jwt/jws.js
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/helper/adapter/index.js
init_checked_fetch();
init_modules_watch_stub();
var knownUserAgents = {
  deno: "Deno",
  bun: "Bun",
  workerd: "Cloudflare-Workers",
  node: "Node.js"
};
var getRuntimeKey = /* @__PURE__ */ __name(() => {
  const global2 = globalThis;
  const userAgentSupported = typeof navigator !== "undefined" && true;
  if (userAgentSupported) {
    for (const [runtimeKey, userAgent] of Object.entries(knownUserAgents)) {
      if (checkUserAgentEquals(userAgent)) {
        return runtimeKey;
      }
    }
  }
  if (typeof global2?.EdgeRuntime === "string") {
    return "edge-light";
  }
  if (global2?.fastly !== void 0) {
    return "fastly";
  }
  if (global2?.process?.release?.name === "node") {
    return "node";
  }
  return "other";
}, "getRuntimeKey");
var checkUserAgentEquals = /* @__PURE__ */ __name((platform) => {
  const userAgent = "Cloudflare-Workers";
  return userAgent.startsWith(platform);
}, "checkUserAgentEquals");

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/utils/jwt/types.js
init_checked_fetch();
init_modules_watch_stub();
var JwtAlgorithmNotImplemented = /* @__PURE__ */ __name(class extends Error {
  constructor(alg) {
    super(`${alg} is not an implemented algorithm`);
    this.name = "JwtAlgorithmNotImplemented";
  }
}, "JwtAlgorithmNotImplemented");
var JwtTokenInvalid = /* @__PURE__ */ __name(class extends Error {
  constructor(token) {
    super(`invalid JWT token: ${token}`);
    this.name = "JwtTokenInvalid";
  }
}, "JwtTokenInvalid");
var JwtTokenNotBefore = /* @__PURE__ */ __name(class extends Error {
  constructor(token) {
    super(`token (${token}) is being used before it's valid`);
    this.name = "JwtTokenNotBefore";
  }
}, "JwtTokenNotBefore");
var JwtTokenExpired = /* @__PURE__ */ __name(class extends Error {
  constructor(token) {
    super(`token (${token}) expired`);
    this.name = "JwtTokenExpired";
  }
}, "JwtTokenExpired");
var JwtTokenIssuedAt = /* @__PURE__ */ __name(class extends Error {
  constructor(currentTimestamp, iat) {
    super(`Incorrect "iat" claim must be a older than "${currentTimestamp}" (iat: "${iat}")`);
    this.name = "JwtTokenIssuedAt";
  }
}, "JwtTokenIssuedAt");
var JwtHeaderInvalid = /* @__PURE__ */ __name(class extends Error {
  constructor(header) {
    super(`jwt header is invalid: ${JSON.stringify(header)}`);
    this.name = "JwtHeaderInvalid";
  }
}, "JwtHeaderInvalid");
var JwtTokenSignatureMismatched = /* @__PURE__ */ __name(class extends Error {
  constructor(token) {
    super(`token(${token}) signature mismatched`);
    this.name = "JwtTokenSignatureMismatched";
  }
}, "JwtTokenSignatureMismatched");
var CryptoKeyUsage = /* @__PURE__ */ ((CryptoKeyUsage2) => {
  CryptoKeyUsage2["Encrypt"] = "encrypt";
  CryptoKeyUsage2["Decrypt"] = "decrypt";
  CryptoKeyUsage2["Sign"] = "sign";
  CryptoKeyUsage2["Verify"] = "verify";
  CryptoKeyUsage2["DeriveKey"] = "deriveKey";
  CryptoKeyUsage2["DeriveBits"] = "deriveBits";
  CryptoKeyUsage2["WrapKey"] = "wrapKey";
  CryptoKeyUsage2["UnwrapKey"] = "unwrapKey";
  return CryptoKeyUsage2;
})(CryptoKeyUsage || {});

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/utils/jwt/utf8.js
init_checked_fetch();
init_modules_watch_stub();
var utf8Encoder = new TextEncoder();
var utf8Decoder = new TextDecoder();

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/utils/jwt/jws.js
async function signing(privateKey, alg, data) {
  const algorithm2 = getKeyAlgorithm(alg);
  const cryptoKey = await importPrivateKey(privateKey, algorithm2);
  return await crypto.subtle.sign(algorithm2, cryptoKey, data);
}
__name(signing, "signing");
async function verifying(publicKey, alg, signature, data) {
  const algorithm2 = getKeyAlgorithm(alg);
  const cryptoKey = await importPublicKey(publicKey, algorithm2);
  return await crypto.subtle.verify(algorithm2, cryptoKey, signature, data);
}
__name(verifying, "verifying");
function pemToBinary(pem) {
  return decodeBase64(pem.replace(/-+(BEGIN|END).*/g, "").replace(/\s/g, ""));
}
__name(pemToBinary, "pemToBinary");
async function importPrivateKey(key, alg) {
  if (!crypto.subtle || !crypto.subtle.importKey) {
    throw new Error("`crypto.subtle.importKey` is undefined. JWT auth middleware requires it.");
  }
  if (isCryptoKey(key)) {
    if (key.type !== "private") {
      throw new Error(`unexpected non private key: CryptoKey.type is ${key.type}`);
    }
    return key;
  }
  const usages = [CryptoKeyUsage.Sign];
  if (typeof key === "object") {
    return await crypto.subtle.importKey("jwk", key, alg, false, usages);
  }
  if (key.includes("PRIVATE")) {
    return await crypto.subtle.importKey("pkcs8", pemToBinary(key), alg, false, usages);
  }
  return await crypto.subtle.importKey("raw", utf8Encoder.encode(key), alg, false, usages);
}
__name(importPrivateKey, "importPrivateKey");
async function importPublicKey(key, alg) {
  if (!crypto.subtle || !crypto.subtle.importKey) {
    throw new Error("`crypto.subtle.importKey` is undefined. JWT auth middleware requires it.");
  }
  if (isCryptoKey(key)) {
    if (key.type === "public" || key.type === "secret") {
      return key;
    }
    key = await exportPublicJwkFrom(key);
  }
  if (typeof key === "string" && key.includes("PRIVATE")) {
    const privateKey = await crypto.subtle.importKey("pkcs8", pemToBinary(key), alg, true, [
      CryptoKeyUsage.Sign
    ]);
    key = await exportPublicJwkFrom(privateKey);
  }
  const usages = [CryptoKeyUsage.Verify];
  if (typeof key === "object") {
    return await crypto.subtle.importKey("jwk", key, alg, false, usages);
  }
  if (key.includes("PUBLIC")) {
    return await crypto.subtle.importKey("spki", pemToBinary(key), alg, false, usages);
  }
  return await crypto.subtle.importKey("raw", utf8Encoder.encode(key), alg, false, usages);
}
__name(importPublicKey, "importPublicKey");
async function exportPublicJwkFrom(privateKey) {
  if (privateKey.type !== "private") {
    throw new Error(`unexpected key type: ${privateKey.type}`);
  }
  if (!privateKey.extractable) {
    throw new Error("unexpected private key is unextractable");
  }
  const jwk = await crypto.subtle.exportKey("jwk", privateKey);
  const { kty } = jwk;
  const { alg, e, n } = jwk;
  const { crv, x, y } = jwk;
  return { kty, alg, e, n, crv, x, y, key_ops: [CryptoKeyUsage.Verify] };
}
__name(exportPublicJwkFrom, "exportPublicJwkFrom");
function getKeyAlgorithm(name2) {
  switch (name2) {
    case "HS256":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-256"
        }
      };
    case "HS384":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-384"
        }
      };
    case "HS512":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-512"
        }
      };
    case "RS256":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-256"
        }
      };
    case "RS384":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-384"
        }
      };
    case "RS512":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-512"
        }
      };
    case "PS256":
      return {
        name: "RSA-PSS",
        hash: {
          name: "SHA-256"
        },
        saltLength: 32
      };
    case "PS384":
      return {
        name: "RSA-PSS",
        hash: {
          name: "SHA-384"
        },
        saltLength: 48
      };
    case "PS512":
      return {
        name: "RSA-PSS",
        hash: {
          name: "SHA-512"
        },
        saltLength: 64
      };
    case "ES256":
      return {
        name: "ECDSA",
        hash: {
          name: "SHA-256"
        },
        namedCurve: "P-256"
      };
    case "ES384":
      return {
        name: "ECDSA",
        hash: {
          name: "SHA-384"
        },
        namedCurve: "P-384"
      };
    case "ES512":
      return {
        name: "ECDSA",
        hash: {
          name: "SHA-512"
        },
        namedCurve: "P-521"
      };
    case "EdDSA":
      return {
        name: "Ed25519",
        namedCurve: "Ed25519"
      };
    default:
      throw new JwtAlgorithmNotImplemented(name2);
  }
}
__name(getKeyAlgorithm, "getKeyAlgorithm");
function isCryptoKey(key) {
  const runtime = getRuntimeKey();
  if (runtime === "node" && !!crypto.webcrypto) {
    return key instanceof crypto.webcrypto.CryptoKey;
  }
  return key instanceof CryptoKey;
}
__name(isCryptoKey, "isCryptoKey");

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/utils/jwt/jwt.js
var encodeJwtPart = /* @__PURE__ */ __name((part) => encodeBase64Url(utf8Encoder.encode(JSON.stringify(part))).replace(/=/g, ""), "encodeJwtPart");
var encodeSignaturePart = /* @__PURE__ */ __name((buf) => encodeBase64Url(buf).replace(/=/g, ""), "encodeSignaturePart");
var decodeJwtPart = /* @__PURE__ */ __name((part) => JSON.parse(utf8Decoder.decode(decodeBase64Url(part))), "decodeJwtPart");
function isTokenHeader(obj) {
  if (typeof obj === "object" && obj !== null) {
    const objWithAlg = obj;
    return "alg" in objWithAlg && Object.values(AlgorithmTypes).includes(objWithAlg.alg) && (!("typ" in objWithAlg) || objWithAlg.typ === "JWT");
  }
  return false;
}
__name(isTokenHeader, "isTokenHeader");
var sign = /* @__PURE__ */ __name(async (payload, privateKey, alg = "HS256") => {
  const encodedPayload = encodeJwtPart(payload);
  const encodedHeader = encodeJwtPart({ alg, typ: "JWT" });
  const partialToken = `${encodedHeader}.${encodedPayload}`;
  const signaturePart = await signing(privateKey, alg, utf8Encoder.encode(partialToken));
  const signature = encodeSignaturePart(signaturePart);
  return `${partialToken}.${signature}`;
}, "sign");
var verify = /* @__PURE__ */ __name(async (token, publicKey, alg = "HS256") => {
  const tokenParts = token.split(".");
  if (tokenParts.length !== 3) {
    throw new JwtTokenInvalid(token);
  }
  const { header, payload } = decode(token);
  if (!isTokenHeader(header)) {
    throw new JwtHeaderInvalid(header);
  }
  const now = Math.floor(Date.now() / 1e3);
  if (payload.nbf && payload.nbf > now) {
    throw new JwtTokenNotBefore(token);
  }
  if (payload.exp && payload.exp <= now) {
    throw new JwtTokenExpired(token);
  }
  if (payload.iat && now < payload.iat) {
    throw new JwtTokenIssuedAt(now, payload.iat);
  }
  const headerPayload = token.substring(0, token.lastIndexOf("."));
  const verified = await verifying(
    publicKey,
    alg,
    decodeBase64Url(tokenParts[2]),
    utf8Encoder.encode(headerPayload)
  );
  if (!verified) {
    throw new JwtTokenSignatureMismatched(token);
  }
  return payload;
}, "verify");
var decode = /* @__PURE__ */ __name((token) => {
  try {
    const [h, p] = token.split(".");
    const header = decodeJwtPart(h);
    const payload = decodeJwtPart(p);
    return {
      header,
      payload
    };
  } catch {
    throw new JwtTokenInvalid(token);
  }
}, "decode");

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/utils/jwt/index.js
var Jwt = { sign, verify, decode };

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/middleware/jwt/jwt.js
var jwt = /* @__PURE__ */ __name((options) => {
  if (!options || !options.secret) {
    throw new Error('JWT auth middleware requires options for "secret"');
  }
  if (!crypto.subtle || !crypto.subtle.importKey) {
    throw new Error("`crypto.subtle.importKey` is undefined. JWT auth middleware requires it.");
  }
  return /* @__PURE__ */ __name(async function jwt22(ctx, next) {
    const credentials = ctx.req.raw.headers.get("Authorization");
    let token;
    if (credentials) {
      const parts = credentials.split(/\s+/);
      if (parts.length !== 2) {
        const errDescription = "invalid credentials structure";
        throw new HTTPException(401, {
          message: errDescription,
          res: unauthorizedResponse({
            ctx,
            error: "invalid_request",
            errDescription
          })
        });
      } else {
        token = parts[1];
      }
    } else if (options.cookie) {
      if (typeof options.cookie == "string") {
        token = getCookie(ctx, options.cookie);
      } else if (options.cookie.secret) {
        if (options.cookie.prefixOptions) {
          token = await getSignedCookie(
            ctx,
            options.cookie.secret,
            options.cookie.key,
            options.cookie.prefixOptions
          );
        } else {
          token = await getSignedCookie(ctx, options.cookie.secret, options.cookie.key);
        }
      } else {
        if (options.cookie.prefixOptions) {
          token = getCookie(ctx, options.cookie.key, options.cookie.prefixOptions);
        } else {
          token = getCookie(ctx, options.cookie.key);
        }
      }
    }
    if (!token) {
      const errDescription = "no authorization included in request";
      throw new HTTPException(401, {
        message: errDescription,
        res: unauthorizedResponse({
          ctx,
          error: "invalid_request",
          errDescription
        })
      });
    }
    let payload;
    let cause;
    try {
      payload = await Jwt.verify(token, options.secret, options.alg);
    } catch (e) {
      cause = e;
    }
    if (!payload) {
      throw new HTTPException(401, {
        message: "Unauthorized",
        res: unauthorizedResponse({
          ctx,
          error: "invalid_token",
          statusText: "Unauthorized",
          errDescription: "token verification failure"
        }),
        cause
      });
    }
    ctx.set("jwtPayload", payload);
    await next();
  }, "jwt2");
}, "jwt");
function unauthorizedResponse(opts) {
  return new Response("Unauthorized", {
    status: 401,
    statusText: opts.statusText,
    headers: {
      "WWW-Authenticate": `Bearer realm="${opts.ctx.req.url}",error="${opts.error}",error_description="${opts.errDescription}"`
    }
  });
}
__name(unauthorizedResponse, "unauthorizedResponse");
var verify2 = Jwt.verify;
var decode2 = Jwt.decode;
var sign2 = Jwt.sign;

// prisma/prisma.ts
init_checked_fetch();
init_modules_watch_stub();
var import_client = __toESM(require_default2());

// ../../node_modules/.pnpm/@prisma+adapter-d1@5.20.0/node_modules/@prisma/adapter-d1/dist/index.mjs
init_checked_fetch();
init_modules_watch_stub();

// ../../node_modules/.pnpm/@prisma+driver-adapter-utils@5.20.0/node_modules/@prisma/driver-adapter-utils/dist/index.mjs
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
__name(ok, "ok");
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
__name(err, "err");
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

// ../../node_modules/.pnpm/@prisma+adapter-d1@5.20.0/node_modules/@prisma/adapter-d1/dist/index.mjs
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
__name(init, "init");
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
__name(getColumnTypes, "getColumnTypes");
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
__name(inferColumnType, "inferColumnType");
var isoDateRegex = new RegExp(
  /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/
);
var sqliteDateRegex = /^\d{4}-[0-1]\d-[0-3]\d [0-2]\d:[0-5]\d:[0-5]\d$/;
function isISODate(str) {
  return isoDateRegex.test(str) || sqliteDateRegex.test(str);
}
__name(isISODate, "isISODate");
function inferStringType(value) {
  if (isISODate(value)) {
    return ColumnTypeEnum.DateTime;
  }
  return ColumnTypeEnum.Text;
}
__name(inferStringType, "inferStringType");
function inferNumberType(_) {
  return ColumnTypeEnum.Double;
}
__name(inferNumberType, "inferNumberType");
function inferObjectType(value) {
  if (value instanceof Array) {
    return ColumnTypeEnum.Bytes;
  }
  throw new UnexpectedTypeError(value);
}
__name(inferObjectType, "inferObjectType");
var UnexpectedTypeError = /* @__PURE__ */ __name(class extends Error {
  constructor(value) {
    const type = typeof value;
    const repr = type === "object" ? JSON.stringify(value) : String(value);
    super(`unexpected value of type ${type}: ${repr}`);
    this.name = "UnexpectedTypeError";
  }
}, "UnexpectedTypeError");
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
__name(mapRow, "mapRow");
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
__name(cleanArg, "cleanArg");
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
__name(matchSQLiteErrorCode, "matchSQLiteErrorCode");
var debug = (0, import_debug.Debug)("prisma:driver-adapter:d1");
var D1Queryable = /* @__PURE__ */ __name(class {
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
}, "D1Queryable");
var D1Transaction = /* @__PURE__ */ __name(class extends D1Queryable {
  constructor(client, options) {
    super(client);
    this.options = options;
  }
  async commit() {
    debug(`[js::commit]`);
    return ok(void 0);
  }
  async rollback() {
    debug(`[js::rollback]`);
    return ok(void 0);
  }
}, "D1Transaction");
var D1TransactionContext = /* @__PURE__ */ __name(class extends D1Queryable {
  constructor(client) {
    super(client);
    this.client = client;
  }
  async startTransaction() {
    const options = {
      // TODO: D1 does not have a Transaction API.
      usePhantomQuery: true
    };
    const tag = "[js::startTransaction]";
    debug("%s options: %O", tag, options);
    return ok(new D1Transaction(this.client, options));
  }
}, "D1TransactionContext");
var PrismaD1 = /* @__PURE__ */ __name(class extends D1Queryable {
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
  async transactionContext() {
    this.warnOnce(
      "D1 Transaction",
      "Cloudflare D1 does not support transactions yet. When using Prisma's D1 adapter, implicit & explicit transactions will be ignored and run as individual queries, which breaks the guarantees of the ACID properties of transactions. For more details see https://pris.ly/d/d1-transactions"
    );
    return ok(new D1TransactionContext(this.client));
  }
}, "PrismaD1");

// prisma/prisma.ts
var prisma_default = /* @__PURE__ */ __name((c) => {
  const env = c.env;
  const adapter = new PrismaD1(env.DB);
  return new import_client.PrismaClient({ adapter, log: ["query", "info", "warn"] });
}, "default");

// src/user.ts
var import_md5 = __toESM(require_md5());
var user_default = /* @__PURE__ */ __name((app2, path) => {
  app2.post(`${path}/register`, async (c) => {
    try {
      const prisma = prisma_default(c);
      const { email, password } = await c.req.json();
      const res = await prisma.user.create({
        data: {
          email,
          password: (0, import_md5.default)(password).toString()
        }
      });
      return c.json({
        status: 200,
        data: res,
        message: "register success"
      });
    } catch (error) {
      return c.json({
        status: 500,
        message: "register failed",
        error
      });
    }
  });
  app2.post(`${path}/login`, async (c) => {
    try {
      const prisma = prisma_default(c);
      const { email, password } = await c.req.json();
      const user = await prisma.user.findUnique({
        where: {
          email
        }
      });
      if (!user) {
        return c.json({
          status: 500,
          message: "\u627E\u4E0D\u5230\u90AE\u7BB1\u6216\u8005\u5BC6\u7801!"
        });
      } else {
        if (user.password === (0, import_md5.default)(password).toString()) {
          const token = await sign2({
            email,
            id: user.id
          }, "mowang");
          return c.json({
            status: 200,
            data: {
              userInfo: { ...user, password: null },
              token
            },
            message: "login success"
          });
        } else {
          return c.json({
            status: 500,
            message: "password error"
          });
        }
      }
    } catch (error) {
      return c.json({
        status: 500,
        message: "login failed",
        error
      });
    }
  });
}, "default");

// src/link.ts
init_checked_fetch();
init_modules_watch_stub();
var import_md52 = __toESM(require_md5());
var shortLink = /* @__PURE__ */ __name((url) => {
  const key = "mowang";
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const md5Hash = (0, import_md52.default)(key + url).toString();
  let outChars = "";
  for (let i = 0; i < 6; i++) {
    const tempSubstring = md5Hash.substring(i * 8, i * 8 + 8);
    let hexLong = parseInt(tempSubstring, 16) & 1073741823;
    const index = hexLong & 61;
    outChars += chars[index];
    hexLong = hexLong >> 5;
  }
  return outChars;
}, "shortLink");
var link_default = /* @__PURE__ */ __name((app2, path) => {
  app2.get(`${path}/dwz_list`, async (c) => {
    const payload = c.get("jwtPayload");
    const prisma = prisma_default(c);
    const now = /* @__PURE__ */ new Date();
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const endOfToday = new Date(startOfToday);
    endOfToday.setDate(endOfToday.getDate() + 1);
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 7);
    const list = await prisma.link.findMany({
      where: {
        userId: payload.id
      },
      include: {
        visits: {
          where: {
            createdAt: {
              gte: startOfToday
              // 当天访问
            }
          }
        }
      }
    });
    const result = list.map((link) => {
      const todayVisits = link.visits.length;
      const weeklyVisits = link.visits.filter(
        (visit) => visit.createdAt >= startOfWeek && visit.createdAt < endOfWeek
      ).length;
      return {
        id: link.id,
        originalUrl: link.originalUrl,
        shortUrl: link.shortUrl,
        createdAt: link.createdAt,
        todayVisits: todayVisits || 0,
        weeklyVisits: weeklyVisits || 0
      };
    });
    return c.json({
      status: 200,
      data: result
    });
  });
  app2.post(`${path}/dwz_free_create`, async (c) => {
    const prisma = prisma_default(c);
    const { originalUrl } = await c.req.json();
    const short = shortLink(originalUrl);
    const exist = await prisma.link.findUnique({
      where: {
        shortUrl: short
      }
    });
    if (exist) {
      return c.json({
        status: 400,
        message: "\u8BE5\u77ED\u7F51\u5740\u5DF2\u5B58\u5728,\u60A8\u65E0\u6CD5\u91CD\u590D\u521B\u5EFA!\u8BE6\u60C5\u54A8\u8BE2\u4E0B\u7BA1\u7406\u5458"
      });
    } else {
      const params = {
        originalUrl,
        shortUrl: short,
        userId: "000000"
      };
      const link = await prisma.link.create({
        data: params
      });
      if (link) {
        return c.json({
          status: 200,
          message: "\u77ED\u7F51\u5740\u521B\u5EFA\u6210\u529F",
          data: {
            shortUrl: link.shortUrl
          }
        });
      } else {
        return c.json({
          status: 500,
          message: "\u77ED\u7F51\u5740\u521B\u5EFA\u5931\u8D25"
        });
      }
    }
  });
  app2.post(`${path}/dwz_create`, async (c) => {
    const payload = c.get("jwtPayload");
    const prisma = prisma_default(c);
    const { originalUrl } = await c.req.json();
    const short = shortLink(originalUrl);
    const exist = await prisma.link.findUnique({
      where: {
        shortUrl: short
      }
    });
    if (exist) {
      return c.json({
        status: 400,
        message: "\u8BE5\u77ED\u7F51\u5740\u5DF2\u5B58\u5728,\u60A8\u65E0\u6CD5\u91CD\u590D\u521B\u5EFA!\u8BE6\u60C5\u54A8\u8BE2\u4E0B\u7BA1\u7406\u5458"
      });
    } else {
      const params = {
        originalUrl,
        shortUrl: short,
        userId: payload.id
      };
      const link = await prisma.link.create({
        data: params
      });
      if (link) {
        return c.json({
          status: 200,
          message: "\u77ED\u7F51\u5740\u521B\u5EFA\u6210\u529F",
          data: {
            shortUrl: link.shortUrl
          }
        });
      } else {
        return c.json({
          status: 500,
          message: "\u77ED\u7F51\u5740\u521B\u5EFA\u5931\u8D25"
        });
      }
    }
  });
  app2.get(`${path}/dwz/:short`, async (c) => {
    const prisma = prisma_default(c);
    const short = c.req.param("short");
    try {
      const link = await prisma.link.findUnique({
        where: {
          shortUrl: short
        }
      });
      if (!link) {
        return c.json({
          status: 404,
          message: "\u77ED\u7F51\u5740\u4E0D\u5B58\u5728"
        });
      }
      const cfReq = c.req.raw;
      const { cf } = cfReq;
      try {
        await prisma.visit.create({
          data: {
            linkId: link.id,
            ipAddress: "\u672A\u77E5",
            country: cf?.country || "\u672A\u77E5"
          }
        });
      } catch (error) {
        console.error("\u8BB0\u5F55\u8BBF\u95EE\u4FE1\u606F\u5931\u8D25:", error);
      }
      return c.json({
        status: 200,
        originalUrl: link.originalUrl
      });
    } catch (e) {
      console.log(e);
    }
  });
  app2.get(`${path}/dwz_visits/page`, async (c) => {
    const page = 1;
    const limit = 10;
    const prisma = prisma_default(c);
    const totalVisits = await prisma.visit.count();
    const visits = await prisma.visit.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { createdAt: "desc" },
      // 按照访问时间降序排列
      include: {
        link: {
          // 包含 Link 表的数据
          select: {
            id: true,
            originalUrl: true,
            shortUrl: true
          }
        }
      }
    });
    return c.json({
      status: 200,
      data: {
        visits,
        currentPage: page,
        totalPages: Math.ceil(totalVisits / limit)
        // 计算总页数
      }
    });
  });
}, "default");

// src/info.ts
init_checked_fetch();
init_modules_watch_stub();
var info_default = /* @__PURE__ */ __name((app2, path) => {
  app2.get(`${path}/dashboard`, async (c) => {
    const payload = c.get("jwtPayload");
    const prisma = prisma_default(c);
    const my_dwz_count = await prisma.link.count({
      where: {
        userId: payload?.id
      }
    });
    return c.json({
      status: 200,
      data: {
        //我生成的短网址数量
        my_dwz_count
      }
    });
  });
}, "default");

// src/free.ts
init_checked_fetch();
init_modules_watch_stub();
var import_md53 = __toESM(require_md5());
var shortLink2 = /* @__PURE__ */ __name((url) => {
  const key = "mowang";
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const md5Hash = (0, import_md53.default)(key + url).toString();
  let outChars = "";
  for (let i = 0; i < 6; i++) {
    const tempSubstring = md5Hash.substring(i * 8, i * 8 + 8);
    let hexLong = parseInt(tempSubstring, 16) & 1073741823;
    const index = hexLong & 61;
    outChars += chars[index];
    hexLong = hexLong >> 5;
  }
  return outChars;
}, "shortLink");
var free_default = /* @__PURE__ */ __name((app2, path) => {
  app2.post(`${path}/dwz_free_create`, async (c) => {
    const prisma = prisma_default(c);
    const { originalUrl } = await c.req.json();
    const short = shortLink2(originalUrl);
    const exist = await prisma.link.findUnique({
      where: {
        shortUrl: short
      }
    });
    if (exist) {
      return c.json({
        status: 400,
        message: "\u8BE5\u77ED\u7F51\u5740\u5DF2\u5B58\u5728,\u60A8\u65E0\u6CD5\u91CD\u590D\u521B\u5EFA!\u8BE6\u60C5\u54A8\u8BE2\u4E0B\u7BA1\u7406\u5458"
      });
    } else {
      const params = {
        originalUrl,
        shortUrl: short
      };
      const link = await prisma.link.create({
        data: params
      });
      if (link) {
        return c.json({
          status: 200,
          message: "\u77ED\u7F51\u5740\u521B\u5EFA\u6210\u529F",
          data: {
            shortUrl: link.shortUrl
          }
        });
      } else {
        return c.json({
          status: 500,
          message: "\u77ED\u7F51\u5740\u521B\u5EFA\u5931\u8D25"
        });
      }
    }
  });
}, "default");

// ../../node_modules/.pnpm/hono@4.6.3/node_modules/hono/dist/middleware/cors/index.js
init_checked_fetch();
init_modules_watch_stub();
var cors = /* @__PURE__ */ __name((options) => {
  const defaults = {
    origin: "*",
    allowMethods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH"],
    allowHeaders: [],
    exposeHeaders: []
  };
  const opts = {
    ...defaults,
    ...options
  };
  const findAllowOrigin = ((optsOrigin) => {
    if (typeof optsOrigin === "string") {
      return () => optsOrigin;
    } else if (typeof optsOrigin === "function") {
      return optsOrigin;
    } else {
      return (origin) => optsOrigin.includes(origin) ? origin : optsOrigin[0];
    }
  })(opts.origin);
  return /* @__PURE__ */ __name(async function cors2(c, next) {
    function set(key, value) {
      c.res.headers.set(key, value);
    }
    __name(set, "set");
    const allowOrigin = findAllowOrigin(c.req.header("origin") || "", c);
    if (allowOrigin) {
      set("Access-Control-Allow-Origin", allowOrigin);
    }
    if (opts.origin !== "*") {
      const existingVary = c.req.header("Vary");
      if (existingVary) {
        set("Vary", existingVary);
      } else {
        set("Vary", "Origin");
      }
    }
    if (opts.credentials) {
      set("Access-Control-Allow-Credentials", "true");
    }
    if (opts.exposeHeaders?.length) {
      set("Access-Control-Expose-Headers", opts.exposeHeaders.join(","));
    }
    if (c.req.method === "OPTIONS") {
      if (opts.maxAge != null) {
        set("Access-Control-Max-Age", opts.maxAge.toString());
      }
      if (opts.allowMethods?.length) {
        set("Access-Control-Allow-Methods", opts.allowMethods.join(","));
      }
      let headers = opts.allowHeaders;
      if (!headers?.length) {
        const requestHeaders = c.req.header("Access-Control-Request-Headers");
        if (requestHeaders) {
          headers = requestHeaders.split(/\s*,\s*/);
        }
      }
      if (headers?.length) {
        set("Access-Control-Allow-Headers", headers.join(","));
        c.res.headers.append("Vary", "Access-Control-Request-Headers");
      }
      c.res.headers.delete("Content-Length");
      c.res.headers.delete("Content-Type");
      return new Response(null, {
        headers: c.res.headers,
        status: 204,
        statusText: c.res.statusText
      });
    }
    await next();
  }, "cors2");
}, "cors");

// main.ts
var app = new Hono2().basePath("/api");
app.use("*", cors());
app.use("/link/*", jwt({ secret: "mowang" }));
app.use("/info/*", jwt({ secret: "mowang" }));
app.get("/", (c) => c.text("GET /"));
app.post("/", (c) => c.text("POST /"));
app.put("/", (c) => c.text("PUT /"));
app.delete("/", (c) => c.text("DELETE /"));
user_default(app, "/user");
link_default(app, "/link");
info_default(app, "/info");
free_default(app, "/free");
app.notFound((c) => {
  return c.text("Custom 404 Message", 404);
});
app.onError((err2, c) => {
  const cError = c?.error;
  const status = cError?.status;
  return c.json(
    {
      status: status || 500,
      message: err2
    },
    status
  );
});
var main_default = app;

// C:/Users/Administrator/AppData/Roaming/nvm/v20.14.0/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_checked_fetch();
init_modules_watch_stub();
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
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
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// C:/Users/Administrator/AppData/Roaming/nvm/v20.14.0/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
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
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-4ys2WX/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = main_default;

// C:/Users/Administrator/AppData/Roaming/nvm/v20.14.0/node_modules/wrangler/templates/middleware/common.ts
init_checked_fetch();
init_modules_watch_stub();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
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
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-4ys2WX/middleware-loader.entry.ts
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
__name(__Facade_ScheduledController__, "__Facade_ScheduledController__");
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init2) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init2.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
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
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
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
//# sourceMappingURL=main.js.map
