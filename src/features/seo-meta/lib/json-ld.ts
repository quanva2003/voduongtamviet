export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SportsClub",
    name: "Võ Đường Tâm Việt",
    description:
      "Võ đường karate truyền thống tại TP.HCM, đào tạo karate theo phong cách Nhật Bản với hơn 15 năm kinh nghiệm.",
    url: "https://tamviet.vn",
    telephone: "+84981316779",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Thủ Đức",
      addressRegion: "TP. Hồ Chí Minh",
      addressCountry: "VN",
    },
    sport: "Karate",
    foundingDate: "2010",
  };
}

export function articleJsonLd(article: {
  title: string;
  description: string;
  datePublished: string;
  author: string;
  image?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished,
    author: { "@type": "Person", name: article.author },
    image: article.image,
    url: article.url,
  };
}

export function personJsonLd(person: {
  name: string;
  jobTitle: string;
  description: string;
  url?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.jobTitle,
    description: person.description,
    url: person.url,
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
