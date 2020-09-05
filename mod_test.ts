import {
  assert,
  assertEquals,
} from "https://deno.land/std@0.68.0/testing/asserts.ts";

import vendors from "./mod.ts";

Deno.test("vendors is a array", (): void => {
  assert(Array.isArray(vendors));

  vendors.forEach(function (vendor) {
    assertEquals(
      typeof vendor,
      "string",
      "`" + vendor + "` should be a string",
    );
  });
});
