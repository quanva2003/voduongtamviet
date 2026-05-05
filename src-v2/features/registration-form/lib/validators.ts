export const vnPhoneRegex = /^(0[3-9]\d{8}|84[3-9]\d{8})$/;

export function isVNPhone(val: string): boolean {
  return vnPhoneRegex.test(val.replace(/[\s-]/g, ""));
}
