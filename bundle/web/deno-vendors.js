// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.

// This is a specialised implementation of a System module loader.

"use strict";

// @ts-nocheck
/* eslint-disable */
let System, __instantiate;
(() => {
  const r = new Map();

  System = {
    register(id, d, f) {
      r.set(id, { d, f, exp: {} });
    },
  };
  async function dI(mid, src) {
    let id = mid.replace(/\.\w+$/i, "");
    if (id.includes("./")) {
      const [o, ...ia] = id.split("/").reverse(),
        [, ...sa] = src.split("/").reverse(),
        oa = [o];
      let s = 0,
        i;
      while ((i = ia.shift())) {
        if (i === "..") s++;
        else if (i === ".") break;
        else oa.push(i);
      }
      if (s < sa.length) oa.push(...sa.slice(s));
      id = oa.reverse().join("/");
    }
    return r.has(id) ? gExpA(id) : import(mid);
  }

  function gC(id, main) {
    return {
      id,
      import: (m) => dI(m, id),
      meta: { url: id, main },
    };
  }

  function gE(exp) {
    return (id, v) => {
      v = typeof id === "string" ? { [id]: v } : id;
      for (const [id, value] of Object.entries(v)) {
        Object.defineProperty(exp, id, {
          value,
          writable: true,
          enumerable: true,
        });
      }
    };
  }

  function rF(main) {
    for (const [id, m] of r.entries()) {
      const { f, exp } = m;
      const { execute: e, setters: s } = f(gE(exp), gC(id, id === main));
      delete m.f;
      m.e = e;
      m.s = s;
    }
  }

  async function gExpA(id) {
    if (!r.has(id)) return;
    const m = r.get(id);
    if (m.s) {
      const { d, e, s } = m;
      delete m.s;
      delete m.e;
      for (let i = 0; i < s.length; i++) s[i](await gExpA(d[i]));
      const r = e();
      if (r) await r;
    }
    return m.exp;
  }

  function gExp(id) {
    if (!r.has(id)) return;
    const m = r.get(id);
    if (m.s) {
      const { d, e, s } = m;
      delete m.s;
      delete m.e;
      for (let i = 0; i < s.length; i++) s[i](gExp(d[i]));
      e();
    }
    return m.exp;
  }
  __instantiate = (m, a) => {
    System = __instantiate = undefined;
    rF(m);
    return a ? gExpA(m) : gExp(m);
  };
})();

System.register("vendors", [], function (exports_1, context_1) {
    "use strict";
    var vendors;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("vendors", vendors = [
                "ah",
                "apple",
                "atsc",
                "epub",
                "fx",
                "hp",
                "khtml",
                "moz",
                "ms",
                "o",
                "rim",
                "ro",
                "tc",
                "wap",
                "webkit",
                "xv",
            ]);
        }
    };
});
System.register("types/vendor", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("is_vendor", ["vendors"], function (exports_3, context_3) {
    "use strict";
    var vendors_ts_1;
    var __moduleName = context_3 && context_3.id;
    function isVendor(vendor) {
        return vendors_ts_1.vendors.includes(vendor);
    }
    exports_3("isVendor", isVendor);
    return {
        setters: [
            function (vendors_ts_1_1) {
                vendors_ts_1 = vendors_ts_1_1;
            }
        ],
        execute: function () {
        }
    };
});
System.register("mod", ["vendors", "is_vendor"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (vendors_ts_2_1) {
                exports_4({
                    "vendors": vendors_ts_2_1["vendors"]
                });
            },
            function (is_vendor_ts_1_1) {
                exports_4({
                    "isVendor": is_vendor_ts_1_1["isVendor"]
                });
            }
        ],
        execute: function () {
        }
    };
});

const __exp = __instantiate("mod", false);
export const Vendor = __exp["Vendor"];
export const vendors = __exp["vendors"];
export const isVendor = __exp["isVendor"];
