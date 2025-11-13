export interface QuickLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
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
