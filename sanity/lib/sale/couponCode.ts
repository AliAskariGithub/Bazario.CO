export const COUPON_CODE = {
  A2SK91A: "A2SK91A",
  N4G498F: "N4G498F",
  A93874D: "A93874D",
  H345JH2: "H345JH2",
} as const;

export type CouponCode = keyof typeof COUPON_CODE;

// Define a list of valid coupon codes that a user can apply
export const COUPON_CODE_2 = {
  coupon: ["A2SK91A", "N4G498F", "A93874D", "H345JH2"], 
} as const;

export type CouponCode2 = keyof typeof COUPON_CODE_2;

