import { assert } from "./deps.ts";

import { isVendor, vendors } from "../mod.ts";

Deno.test("isVendor()", () => {
  for (const vendor of vendors) {
    assert(isVendor(vendor), `\`isVendor("${vendor}")\` should return true`);
  }

  const falseVendors = ["", "not a vendor", "def not a vendor"];
  for (const falseVendor of falseVendors) {
    assert(
      !isVendor(falseVendor),
      `\`isVendor("${falseVendor}")\` should return false`,
    );
  }
});
