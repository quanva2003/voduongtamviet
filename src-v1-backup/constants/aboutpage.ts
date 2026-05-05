import {
  Target,
  GraduationCap,
  Handshake,
  Star,
  Trophy,
  Globe,
  type LucideIcon,
} from "lucide-react";
import mrVietImage from "../assets/coach/mr-viet.jpg";
import msNhiImage from "../assets/coach/ms-nhi.jpg";
import mrQuanImage from "../assets/coach/mr-quan.jpg";

export interface JourneyItem {
  year: string;
  title: string;
  description: string;
}

export interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Instructor {
  name: string;
  title: string;
  rank: string;
  experience: string;
  image: string;
  description: string;
}

export const HERO_SECTION = {
  title: "Về Võ đường Tâm Việt",
  subtitle: "Hành trình phát triển và giá trị cốt lõi",
};

export const MISSION_SECTION = {
  title: "Sứ mệnh của chúng tôi",
  paragraphs: [
    "Võ đường Tâm Việt được thành lập với sứ mệnh truyền bá nghệ thuật karate truyền thống, không chỉ giúp võ sinh phát triển kỹ năng võ thuật mà còn rèn luyện tinh thần võ đạo, xây dựng nhân cách và phát triển toàn diện cả thể chất lẫn tinh thần.",
    "Chúng tôi tin rằng karate là một môn thể thao toàn diện, giúp con người trở nên mạnh mẽ hơn, tự tin hơn và có khả năng vượt qua mọi thử thách trong cuộc sống.",
  ],
};

export const JOURNEY_TITLE = {
  title: "Hành trình phát triển",
  description: "Những cột mốc quan trọng trong lịch sử Võ đường Tâm Việt",
};

export const JOURNEY: JourneyItem[] = [
  {
    year: "2010",
    title: "Thành lập Võ đường Tâm Việt",
    description:
      "Võ đường Tâm Việt được thành lập với sứ mệnh truyền bá nghệ thuật karate truyền thống và phát triển tinh thần võ đạo cho võ sinh Việt Nam.",
  },
  {
    year: "2012",
    title: "Mở rộng quy mô",
    description:
      "Từ một lớp học nhỏ, Võ đường Tâm Việt đã mở rộng thành nhiều cơ sở tại Hà Nội, phục vụ hàng trăm võ sinh mỗi năm.",
  },
  {
    year: "2015",
    title: "Đạt chứng nhận quốc tế",
    description:
      "Võ đường được công nhận bởi Liên đoàn Karate Quốc tế (WKF) và trở thành một trong những trung tâm karate uy tín nhất tại Việt Nam.",
  },
  {
    year: "2018",
    title: "Phát triển chương trình trẻ em",
    description:
      "Ra mắt chương trình karate dành riêng cho trẻ em, giúp các em phát triển thể chất và tinh thần từ nhỏ.",
  },
  {
    year: "2020",
    title: "Thích ứng với thời đại mới",
    description:
      "Áp dụng công nghệ vào giảng dạy, tạo ra các khóa học online và hybrid để phù hợp với xu hướng hiện đại.",
  },
  {
    year: "2024",
    title: "Tiếp tục phát triển",
    description:
      "Võ đường Tâm Việt tiếp tục mở rộng với nhiều cơ sở mới và đội ngũ huấn luyện viên chuyên nghiệp, cam kết mang đến chất lượng đào tạo tốt nhất.",
  },
];

export const VALUES_TITLE = {
  title: "Giá trị cốt lõi",
  description:
    "Những nguyên tắc và giá trị mà Võ đường Tâm Việt luôn hướng tới",
};

export const VALUES: Value[] = [
  {
    icon: Target,
    title: "Tinh thần võ đạo",
    description:
      "Chúng tôi tin rằng karate không chỉ là môn võ thuật mà còn là cách sống, giúp phát triển nhân cách và đạo đức.",
  },
  {
    icon: GraduationCap,
    title: "Chất lượng đào tạo",
    description:
      "Đội ngũ huấn luyện viên giàu kinh nghiệm, được đào tạo chuyên nghiệp và có chứng chỉ quốc tế.",
  },
  {
    icon: Handshake,
    title: "Tôn trọng và kỷ luật",
    description:
      "Môi trường học tập tôn trọng, kỷ luật và thân thiện, giúp võ sinh phát triển toàn diện.",
  },
  {
    icon: Star,
    title: "Phát triển cá nhân",
    description:
      "Khuyến khích mỗi võ sinh phát triển theo khả năng riêng, không chỉ về kỹ thuật mà còn về tinh thần.",
  },
  {
    icon: Trophy,
    title: "Thành tích xuất sắc",
    description:
      "Nhiều võ sinh đã đạt được thành tích cao trong các giải đấu trong nước và quốc tế.",
  },
  {
    icon: Globe,
    title: "Cộng đồng vững mạnh",
    description:
      "Xây dựng một cộng đồng karate đoàn kết, hỗ trợ lẫn nhau trong quá trình học tập và phát triển.",
  },
];

export const INSTRUCTORS_TITLE = {
  title: "Đội ngũ huấn luyện viên",
  description: "Những người thầy tận tâm và giàu kinh nghiệm",
};

export const INSTRUCTORS: Instructor[] = [
  {
    name: "Thầy Nguyễn Văn Việt",
    title: "Chủ nhiệm Võ đường",
    rank: "Đai đen 3 đẳng",
    experience: "> 20 năm kinh nghiệm",
    image: mrVietImage,
    description:
      "Thầy Việt là người sáng lập Võ đường Tâm Việt, có hơn 20 năm kinh nghiệm trong việc giảng dạy karate và đã đào tạo hàng nghìn võ sinh.",
  },
  {
    name: "Cô Võ Thị Yến Nhi",
    title: "Huấn luyện viên",
    rank: "Đai đen 2 đẳng",
    experience: "> 5 năm kinh nghiệm",
    image: msNhiImage,
    description: "Cô Yến Nhi có phương pháp giảng dạy tận tình và hiệu quả.",
  },
  {
    name: "Thầy Văn Anh Quân",
    title: "Huấn luyện viên",
    rank: "Đai đen 1 đẳng",
    experience: "> 5 năm kinh nghiệm",
    image: mrQuanImage,
    description:
      "Thầy Anh Quân đã dẫn dắt nhiều võ sinh đạt thành tích cao trong các giải đấu.",
  },
];

export const CTA_SECTION = {
  title: "Tham gia cùng chúng tôi",
  description:
    "Hãy trở thành một phần của gia đình Võ đường Tâm Việt và bắt đầu hành trình karate của bạn",
  buttonText: "Đăng ký học ngay",
  buttonHref: "/registration",
};
