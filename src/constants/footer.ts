import type { LucideIcon } from "lucide-react";
import { Mail, Phone, MapPin } from "lucide-react";

export interface QuickLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

export interface ContactItem {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  isClickable: boolean;
}

export const FOOTER_INFO = {
  name: "Võ đường Tâm Việt",
  subtitle: "Karate Dojo",
  description:
    "Võ đường Tâm Việt - Nơi rèn luyện tinh thần và thể chất, phát triển kỹ năng karate chuyên nghiệp với đội ngũ huấn luyện viên giàu kinh nghiệm.",
  copyright: "Copyright © 2025 by QuanVA | All Rights Reserved.",
};

export const QUICK_LINKS: QuickLink[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/about" },
  { label: "Đăng ký học võ", href: "/registration" },
  { label: "Bài viết", href: "/articles" },
];

export const CONTACT_INFO: ContactInfo = {
  email: "info@vodangtamviet.com",
  phone: "098 131 63 779",
  address: "Thuận Giao, Dĩ An, Bình Dương, Việt Nam",
};

/**
 * Generates contact items configuration from CONTACT_INFO
 * @returns Array of contact items with icons, labels, values, and links
 */
export const getContactItems = (): ContactItem[] => [
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
    isClickable: true,
  },
  {
    icon: Phone,
    label: "Hotline",
    value: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`,
    isClickable: true,
  },
  {
    icon: MapPin,
    label: "Địa chỉ",
    value: CONTACT_INFO.address,
    href: "https://maps.app.goo.gl/zzbtdrTvffqRagmK8",
    isClickable: true,
  },
];
