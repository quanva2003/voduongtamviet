import type { Locale } from "@/shared/i18n";

export interface CourseInfoItem {
  id: string;
  title: string;
  value: string;
  description: string;
}

const courseInfoVI: CourseInfoItem[] = [
  {
    id: "tuition",
    title: "Học phí",
    value: "350.000 VNĐ/tháng",
    description:
      "Ưu đãi linh hoạt theo cấp độ — miễn phí hoàn toàn cho võ sinh có hoàn cảnh khó khăn. Cam kết minh bạch, không phụ phí.",
  },
  {
    id: "class-size",
    title: "Sĩ số lớp",
    value: "20–50 võ sinh/lớp",
    description:
      "Số lượng học viên phù hợp giúp giáo viên theo sát từng cá nhân, đảm bảo chất lượng huấn luyện và tiến bộ rõ rệt.",
  },
  {
    id: "age-range",
    title: "Độ tuổi",
    value: "Từ 5 tuổi trở lên",
    description:
      "Có lớp riêng cho trẻ em, thanh thiếu niên và người lớn. Giáo trình điều chỉnh phù hợp với từng độ tuổi và thể trạng.",
  },
  {
    id: "schedule",
    title: "Lịch học",
    value: "3–5 buổi/tuần",
    description: "Các buổi học từ 17:30–19:00 hoặc 19:15–20:45. Linh hoạt chọn cơ sở gần nhà.",
  },
  {
    id: "bring",
    title: "Cần mang theo",
    value: "Trang phục thoải mái",
    description:
      "Mặc quần áo thoải mái cho buổi đầu. Đồng phục võ đường sẽ được hướng dẫn sau khi đăng ký chính thức.",
  },
];

export const courseInfoData: Record<Locale, CourseInfoItem[]> = {
  vi: courseInfoVI,
  en: courseInfoVI.map((item) => ({
    ...item,
    title: `[EN] ${item.title}`,
    value: `[EN] ${item.value}`,
    description: `[EN] ${item.description}`,
  })),
  ja: courseInfoVI.map((item) => ({
    ...item,
    title: `[JA] ${item.title}`,
    value: `[JA] ${item.value}`,
    description: `[JA] ${item.description}`,
  })),
};
