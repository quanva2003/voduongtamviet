import type { Locale } from "@/shared/i18n";

import type { Location } from "./types";

const locationsVI: Location[] = [
  {
    id: "thuan-giao-1",
    name: "Trường Tiểu học Thuận Giao 1",
    address: "Đường N9, Thuận Giao, Thuận An, Bình Dương",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.03231325138!2d106.7135207118743!3d10.960931689154233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d7536b4b8b23%3A0x9f782464f71b2d2f!2zVHLGsOG7nW5nIFRp4buDdSBo4buNYyBUaHXhuq1uIEdpYW8!5e0!3m2!1svi!2s!4v1763057273795!5m2!1svi!2s",
    coverImage: "/images/locations/thuan-giao-1",
    phone: "098 131 63 779",
    hours: "Thứ 2,4,6: 17:30–19:00",
  },
  {
    id: "thuan-giao-2",
    name: "Trường Tiểu học Thuận Giao 2",
    address: "Hòa Lân 1, Thuận Giao, Thuận An, Bình Dương",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.027932287039!2d106.69805262340267!3d10.961262561264173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d7feb03fb21f%3A0x61ab08514d7e3485!2zVHLGsOG7nW5nIHRp4buDdSBo4buNYyBUaHXhuq1uIEdpYW8gMg!5e0!3m2!1svi!2s!4v1763057424462!5m2!1svi!2s",
    coverImage: "/images/locations/thuan-giao-2",
    phone: "098 131 63 779",
    hours: "Thứ 3,5: 17:30–19:00",
  },
  {
    id: "thuan-giao-3",
    name: "Trường Tiểu học Thuận Giao 3",
    address: "KP/2 Đ. Thủ Khoa Huân, Bình Thuận 2, Thuận An, Bình Dương",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.0012359291695!2d106.70677271187428!3d10.963278589152099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d0b2d277658b%3A0x38ff9df4b635ef32!2zVHLGsOG7nW5nIHRp4buDdSBo4buNYyBUaHXhuq1uIEdpYW8gMw!5e0!3m2!1svi!2s!4v1763057487759!5m2!1svi!2s",
    coverImage: "/images/locations/thuan-giao-3",
    phone: "098 131 63 779",
    hours: "Thứ 3,5,7: 17:30–19:00",
  },
  {
    id: "thcs-thuan-giao",
    name: "Trường THCS Thuận Giao",
    address: "XP4C+P64, Thuận Giao, Thuận An, Bình Dương",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.087586113485!2d106.71571012340253!3d10.956756361279348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d7567c6e4af3%3A0xddf171f0db099c9c!2zVHLGsOG7nW5nIFRIQ1MgVGh14bqtbiBHaWFv!5e0!3m2!1svi!2s!4v1763057558061!5m2!1svi!2s",
    coverImage: "/images/locations/thcs-thuan-giao",
    phone: "098 131 63 779",
    hours: "Thứ 3,5,7: 17:30–19:00",
  },
  {
    id: "thanh-nha",
    name: "Khu dân cư Thuận Giao",
    address: "Khu dân cư Thuận Giao, Thuận An, Bình Dương",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.99094820437!2d106.71109901187432!3d10.964055389151254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d0ad3c69ebab%3A0xba1383d9d612ed16!2zVHLGsOG7nW5nIE3huqdtIE5vbiBUaGFuaCBOaMOj!5e0!3m2!1svi!2s!4v1763057620575!5m2!1svi!2s",
    coverImage: "/images/locations/thanh-nha",
    phone: "098 131 63 779",
    hours: "Thứ 3,5,7: 19:15–20:45",
  },
  {
    id: "an-thanh",
    name: "Trường Tiểu học An Thạnh",
    address: "Đường An Thạnh 51, An Thạnh, Thuận An, Bình Dương",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9467.260843347889!2d106.69048570614274!3d10.95317077768727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d7e2cf1e4b6d%3A0xc222104b9da0c91d!2zVHLGsOG7nW5nIFRp4buDdSBI4buNYyBBbiBUaOG6oW5o!5e0!3m2!1svi!2s!4v1763057782029!5m2!1svi!2s",
    coverImage: "/images/locations/an-thanh",
    phone: "098 131 63 779",
    hours: "Thứ 2,4,6: 17:30–19:00",
  },
];

export const locations: Record<Locale, Location[]> = {
  vi: locationsVI,
  en: locationsVI.map((l) => ({ ...l, name: `[EN] ${l.name}`, address: `[EN] ${l.address}` })),
  ja: locationsVI.map((l) => ({ ...l, name: `[JA] ${l.name}`, address: `[JA] ${l.address}` })),
};
