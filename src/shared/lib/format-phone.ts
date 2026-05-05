/* Formats Vietnamese phone numbers to: 0xxx xxx xxx or +84 xxx xxx xxx */

const VN_MOBILE_RE = /^(\+84|84|0)(3[2-9]|5[6-9]|7[06-9]|8[0-9]|9[0-9])(\d{7})$/;

export function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  const normalized = digits.startsWith("84") ? `0${digits.slice(2)}` : digits;

  const match = VN_MOBILE_RE.exec(`0${normalized.replace(/^0/, "")}`);
  if (!match) return raw;

  const [, , prefix, suffix] = match;
  const mid = suffix?.slice(0, 3) ?? "";
  const end = suffix?.slice(3) ?? "";
  return `0${prefix ?? ""} ${mid} ${end}`.trim();
}

export function toInternational(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  const local = digits.startsWith("84") ? digits.slice(2) : digits.replace(/^0/, "");
  return `+84 ${local.slice(0, 3)} ${local.slice(3, 6)} ${local.slice(6)}`.trim();
}
