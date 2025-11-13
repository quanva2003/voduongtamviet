export interface NavigationItem {
  name: string;
  href: string;
  icon?: boolean;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { name: "TRANG CHỦ", href: "/" },
  { name: "GIỚI THIỆU", href: "/about" },
  { name: "ĐĂNG KÝ HỌC VÕ", href: "/registration", icon: true },
  // { name: "BÀI VIẾT", href: "/articles" },
];
