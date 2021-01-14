import type { Vendor } from "./types/vendor.ts";
import { vendors } from "./vendors.ts";

/**
 * Returns whether a given `vendor` string is an official vendor.
 *
 * @param vendor the given vendor string
 * @returns boolean for if the `vendor` argument is in the `vendors` list
 */
export function isVendor(vendor: string): vendor is Vendor {
  return vendors.includes(vendor as Vendor);
}
