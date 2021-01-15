const vendors2 = [
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
];
const vendors1 = vendors2;
export { vendors1 as vendors };
function isVendor2(vendor) {
  return vendors2.includes(vendor);
}
const isVendor1 = isVendor2;
export { isVendor1 as isVendor };
