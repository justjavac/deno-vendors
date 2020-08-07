# deno-vendors

[![tag](https://img.shields.io/github/release/justjavac/deno-vendors)](https://github.com/justjavac/deno-vendors/releases)
[![Build Status](https://github.com/justjavac/deno-vendors/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno-vendors/actions)
[![license](https://img.shields.io/github/license/justjavac/deno-vendors)](https://github.com/justjavac/deno-vendors/blob/master/LICENSE)
[![](https://img.shields.io/badge/deno-v1.2-green.svg)](https://github.com/denoland/deno)

List of vendor prefixes known to the web platform.

List of (real<sup>†</sup>) vendor prefixes known to the web platform.
From [Wikipedia](https://en.wikipedia.org/wiki/CSS_hack#Browser_prefixes) and the [CSS 2.1 spec](https://www.w3.org/TR/CSS21/syndata.html#vendor-keyword-history).

† — real, as in, `mso-` and `prince-` are not included because they are
not valid.

> data from [wooorm/vendors](https://github.com/wooorm/vendors)

## Usage

```ts
import vendors from "https://deno.land/x/vendors/mod.ts";

console.log(vendors);
```

Output:

```json
[
  'ah',
  'apple',
  'atsc',
  'epub',
  'hp',
  'khtml',
  'moz',
  'ms',
  'o',
  'rim',
  'ro',
  'tc',
  'wap',
  'webkit',
  'xv'
]
```

### License

[deno-vendors](https://github.com/justjavac/deno-vendors) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
