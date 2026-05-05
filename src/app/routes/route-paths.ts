export const PATHS = {
  home: "/",
  about: "/about",
  registration: "/registration",
  articles: "/articles",
  articleDetail: (slug: string) => `/articles/${slug}`,
  instructorDetail: (slug: string) => `/instructors/${slug}`,
  beltPromotion: "/belt-promotion/:slug",
  schedule: "/schedule",
  booking: "/booking",
  notFound: "/404",
} as const;
