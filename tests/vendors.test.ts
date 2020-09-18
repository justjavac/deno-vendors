import { assert, assertStrictEquals } from "./deps.ts";

import { vendors } from "../mod.ts";

Deno.test("vendors", () => {
  assert(Array.isArray(vendors), `\`vendors\` should be an array`);

  for (const vendor of vendors) {
    assertStrictEquals(
      typeof vendor,
      "string",
      `\`typeof ${vendor}\` should be \`string\``,
    );
  }
});
