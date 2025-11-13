import facebookIcon from "../assets/social/facebook.svg";
import zaloIcon from "../assets/social/zalo.svg";
import tiktokIcon from "../assets/social/tiktok.svg";

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  alt: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100088212377055",
    icon: facebookIcon,
    alt: "facebook",
  },
  {
    name: "Zalo",
    url: "https://zalo.me/09813163779",
    icon: zaloIcon,
    alt: "zalo",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@tam.viet_karate",
    icon: tiktokIcon,
    alt: "tiktok",
  },
];
