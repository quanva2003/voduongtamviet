import { Activity, Shield, Brain, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Slide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface KarateInfo {
  title: string;
  content: string;
}

export const HERO_SLIDES: Slide[] = [
  {
    title: "Làm Chủ Karate",
    subtitle: "Sức Mạnh & Truyền Thống",
    description:
      "Khám phá sức mạnh bên trong bạn cùng huấn luyện viên đẳng cấp. Rèn luyện thể chất, tinh thần và ý chí qua từng buổi tập.",
    image:
      "https://shureidokarate.com/wp-content/uploads/2018/02/karate-take-down.jpg",
  },
  {
    title: "Giải Phóng Tiềm Năng",
    subtitle: "Sức Mạnh • Kỷ Luật • Danh Dự",
    description:
      "Mỗi động tác là một bước tiến. Tham gia cộng đồng chiến binh tận tâm và bắt đầu hành trình làm chủ bản thân.",
    image:
      "https://shureidokarate.com/wp-content/uploads/2018/02/karate-roundhouse-kick.jpg",
  },
  {
    title: "Con Đường Karate-Do",
    subtitle: "Tinh Thần & Vĩ Đại",
    description:
      "Karate không chỉ là võ thuật, mà là triết lý sống giúp bạn xây dựng tự tin, kỷ luật và nghị lực vượt qua thử thách.",
    image:
      "https://shureidokarate.com/wp-content/uploads/2018/02/karate-punch-below.jpg",
  },
];

export const BENEFITS: Benefit[] = [
  {
    icon: Activity,
    title: "Tăng cường sức khỏe",
    description: "Cải thiện thể lực, sức bền và sự linh hoạt của cơ thể",
  },
  {
    icon: Shield,
    title: "Kỹ năng tự vệ",
    description:
      "Học cách bảo vệ bản thân và người thân trong tình huống nguy hiểm",
  },
  {
    icon: Brain,
    title: "Rèn luyện tinh thần",
    description: "Phát triển tính kỷ luật, kiên trì và sự tập trung",
  },
  {
    icon: Users,
    title: "Giao lưu cộng đồng",
    description: "Kết bạn và học hỏi từ những người cùng đam mê võ thuật",
  },
];

export const KARATE_INFO: KarateInfo[] = [
  {
    title: "Karate là gì?",
    content:
      "Karate là môn võ thuật truyền thống của Nhật Bản, tập trung vào việc sử dụng tay và chân để tấn công và phòng thủ. Từ 'karate' có nghĩa là 'tay trống', thể hiện triết lý sử dụng cơ thể như một vũ khí tự nhiên.",
  },
  {
    title: "Lịch sử Karate",
    content:
      "Karate có nguồn gốc từ đảo Okinawa, Nhật Bản, được phát triển từ các kỹ thuật võ thuật Trung Quốc. Môn võ này được truyền bá ra thế giới vào đầu thế kỷ 20 và trở thành một trong những môn võ phổ biến nhất.",
  },
  {
    title: "Các đai trong Karate",
    content:
      "Hệ thống đai trong karate bao gồm: Trắng (người mới), Vàng, Cam, Xanh lá, Xanh dương, Nâu, và Đen. Mỗi đai đại diện cho một cấp độ kỹ năng và hiểu biết khác nhau về môn võ.",
  },
];

export const CTA_SECTION = {
  title: "Sẵn Sàng Bắt Đầu Hành Trình Karate?",
  description:
    "Tham gia cùng chúng tôi và khám phá sức mạnh tiềm ẩn trong bạn. Biến đổi cuộc sống của bạn thông qua con đường karate.",
  buttonText: "Bắt Đầu Luyện Tập Ngay",
  buttonHref: "/registration",
};
