import type { SEOProps } from "../components/SEO";

const siteUrl = "https://voduongtamviet.vercel.app";
const defaultImage = `${siteUrl}/logo.svg`;

export const SEO_DATA: Record<string, SEOProps> = {
  home: {
    title: "Võ Đường Tâm Việt - Karate Dojo | Học Karate Chuyên Nghiệp",
    description:
      "Võ đường Tâm Việt - Nơi rèn luyện tinh thần và thể chất, phát triển kỹ năng karate chuyên nghiệp với đội ngũ huấn luyện viên giàu kinh nghiệm. Đăng ký học karate ngay hôm nay!",
    image: defaultImage,
    canonical: `${siteUrl}/`,
    keywords:
      "karate, võ thuật, học karate, võ đường, tâm việt, karate dojo, võ thuật bình dương, học võ",
    ogType: "website",
  },
  about: {
    title: "Giới Thiệu - Võ Đường Tâm Việt | Lịch Sử & Giá Trị Cốt Lõi",
    description:
      "Tìm hiểu về lịch sử hình thành, sứ mệnh và giá trị cốt lõi của Võ Đường Tâm Việt. Đội ngũ huấn luyện viên giàu kinh nghiệm, cam kết đào tạo karate chuyên nghiệp.",
    image: defaultImage,
    canonical: `${siteUrl}/about`,
    keywords:
      "giới thiệu võ đường tâm việt, lịch sử karate, huấn luyện viên karate, giá trị võ thuật",
    ogType: "website",
  },
  registration: {
    title: "Đăng Ký Học Võ - Võ Đường Tâm Việt | Form Đăng Ký Online",
    description:
      "Đăng ký học karate tại Võ Đường Tâm Việt ngay hôm nay. Điền form đăng ký online, chúng tôi sẽ liên hệ với bạn sớm nhất. Bắt đầu hành trình rèn luyện karate của bạn!",
    image: defaultImage,
    canonical: `${siteUrl}/registration`,
    keywords:
      "đăng ký học karate, đăng ký học võ, form đăng ký online, học karate bình dương",
    ogType: "website",
  },
  articles: {
    title: "Bài Viết - Võ Đường Tâm Việt | Tin Tức & Kiến Thức Karate",
    description:
      "Cập nhật tin tức, bài viết và kiến thức về karate, võ thuật từ Võ Đường Tâm Việt. Học hỏi kỹ thuật, lịch sử và văn hóa karate.",
    image: defaultImage,
    canonical: `${siteUrl}/articles`,
    keywords:
      "bài viết karate, tin tức võ thuật, kiến thức karate, kỹ thuật karate",
    ogType: "website",
  },
};
