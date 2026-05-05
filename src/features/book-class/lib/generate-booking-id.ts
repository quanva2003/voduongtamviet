const CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function randomChar(): string {
  return CHARS[Math.floor(Math.random() * CHARS.length)] ?? "A";
}

export function generateBookingId(): string {
  const year = new Date().getFullYear();
  const suffix = Array.from({ length: 4 }, randomChar).join("");
  return `VDTV-${year}-${suffix}`;
}
