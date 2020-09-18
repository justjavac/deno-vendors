# deno-vendors

[![tag](https://img.shields.io/github/release/justjavac/deno-vendors)](https://github.com/justjavac/deno-vendors/releases)
[![Build Status](https://github.com/justjavac/deno-vendors/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno-vendors/actions)
[![license](https://img.shields.io/github/license/justjavac/deno-vendors)](https://github.com/justjavac/deno-vendors/blob/master/LICENSE)

List of vendor prefixes known to the web platform.

List of (real<sup>†</sup>) vendor prefixes known to the web platform.
From [Wikipedia](https://en.wikipedia.org/wiki/CSS_hack#Browser_prefixes) and the [CSS 2.1 spec](https://www.w3.org/TR/CSS21/syndata.html#vendor-keyword-history).

† — real, as in, `mso-` and `prince-` are not included because they are
not valid.

> data from [wooorm/vendors](https://github.com/wooorm/vendors)

## Usage

```ts
import { vendors } from "https://deno.land/x/vendors/mod.ts";

console.log(vendors);
```

Output:

```sh
> [
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
]
```

You can also check if something is a correct `Vendor` by using `isVendor()`.

```ts
import { isVendor } from "https://deno.land/x/vendors/mod.ts";

console.log(isVendor("ms"));
console.log(isVendor("blah"));
```

Output:

```sh
> true
> false
```

Instead of running `isVendor()` if you need to assign a variable to a supposed `string` that is a vendor, you can just set the type of the variable to `Vendor`. Thankfully, the TypeScript compiler will make sure that your variable is one of the valid `vendors`.

```ts
import { Vendor } from "https://deno.land/x/vendors/mod.ts";

const myVendor: Vendor = "o";
```

No output because it's valid!

Here is an example of what would happen if our variable isn't a valid `Vendor`:

```ts
import { Vendor } from "https://deno.land/x/vendors/mod.ts";

const myBadVendor1: Vendor = "";
const myBadVendor2: Vendor = 24;
```

Here are the two errors in the output

```sh
> error: TS2322 [ERROR]: Type '""' is not assignable to type '"ah" | "apple" | "atsc" | "epub" | "fx" | "hp" | "khtml" | "moz" | "ms" | "o" | "rim" | "ro" | "tc" | "wap" | "webkit" | "xv"'.
> const myBadVendor1: Vendor = "";
>       ~~~~~~~~~~~~
>
> TS2322 [ERROR]: Type '24' is not assignable to type '"ah" | "apple" | "atsc" | "epub" | "fx" | "hp" | "khtml" | "moz" | "ms" | "o" | "rim" | "ro" | "tc" | "wap" | "webkit" | "xv"'.
> const myBadVendor2: Vendor = 24;
>       ~~~~~~~~~~~~
```

### License

[deno-vendors](https://github.com/justjavac/deno-vendors) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
