import type { Vendor } from "../mod.ts";

// This code should be fine

<Vendor> "web";
<Vendor> "o";

// Uncomment the following code to check if the `Vendor` is type-checking properly
// because Deno doesn't have asserts for the typescript compiler at the moment.

// <Vendor>"123";
// <Vendor>1;
