import {
  Target,
  GraduationCap,
  Handshake,
  Star,
  Trophy,
  Globe,
  type LucideIcon,
} from "lucide-react";

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
    "Võ đường Tâm Việt được thành lập với sứ mệnh truyền bá nghệ thuật karate truyền thống, không chỉ giúp học viên phát triển kỹ năng võ thuật mà còn rèn luyện tinh thần võ đạo, xây dựng nhân cách và phát triển toàn diện cả thể chất lẫn tinh thần.",
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
      "Võ đường Tâm Việt được thành lập với sứ mệnh truyền bá nghệ thuật karate truyền thống và phát triển tinh thần võ đạo cho học viên Việt Nam.",
  },
  {
    year: "2012",
    title: "Mở rộng quy mô",
    description:
      "Từ một lớp học nhỏ, Võ đường Tâm Việt đã mở rộng thành nhiều cơ sở tại Hà Nội, phục vụ hàng trăm học viên mỗi năm.",
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
      "Môi trường học tập tôn trọng, kỷ luật và thân thiện, giúp học viên phát triển toàn diện.",
  },
  {
    icon: Star,
    title: "Phát triển cá nhân",
    description:
      "Khuyến khích mỗi học viên phát triển theo khả năng riêng, không chỉ về kỹ thuật mà còn về tinh thần.",
  },
  {
    icon: Trophy,
    title: "Thành tích xuất sắc",
    description:
      "Nhiều học viên đã đạt được thành tích cao trong các giải đấu trong nước và quốc tế.",
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
    image:
      "https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/480504748_604088995874841_8536188797157471300_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KfSXf4hq6IIQ7kNvwHn8uHb&_nc_oc=AdmXz5hPfgBqhDE6w5M8wQ8gSusJsS1DORPmTRqpdXhkEptC6A6jc-cGAutSS5ueJfXpmZf8gXHIiQnlwvQeDZca&_nc_zt=23&_nc_ht=scontent.fsgn8-3.fna&_nc_gid=Cu7O0ui_ktXwXjiFkkGTtQ&oh=00_AfheEN7P_zE0onEaT6PHJY1EY3aR71YtyQL16Ot4Ts3GEw&oe=691BDA41",
    description:
      "Thầy Việt là người sáng lập Võ đường Tâm Việt, có hơn 20 năm kinh nghiệm trong việc giảng dạy karate và đã đào tạo hàng nghìn học viên.",
  },
  {
    name: "Cô Võ Thị Yến Nhi",
    title: "Huấn luyện viên",
    rank: "Đai đen 2 đẳng",
    experience: "> 5 năm kinh nghiệm",
    image:
      "https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/483958384_1835389317303777_1767438882633725512_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tPNV19Sz1qoQ7kNvwHgnhXg&_nc_oc=Adny3I6ip93K_7TVez2xqEGmPDQ90UIPaaJKa_5xwHfnGhVqSvN_wNagEVa1tyK6G9Mtdz1KLXlQSc0dmXlvXvmK&_nc_zt=23&_nc_ht=scontent.fsgn8-3.fna&_nc_gid=I9PV9aX1uT4Hr5p9s33q_g&oh=00_AfjbMWHoRgOJEUvgvf2pIughZSdyDCyFs3Rh7iZfiGroJw&oe=691C06A8",
    description: "Cô Yến Nhi có phương pháp giảng dạy tận tình và hiệu quả.",
  },
  {
    name: "Thầy Văn Anh Quân",
    title: "Huấn luyện viên",
    rank: "Đai đen 1 đẳng",
    experience: "> 5 năm kinh nghiệm",
    image:
      "https://api.dansolutions.vn/uploads/z7159599048036_6fc11701d3c0b4fafd5c552fd5630972_a8114634da.jpg",
    description:
      "Thầy Anh Quân đã dẫn dắt nhiều học viên đạt thành tích cao trong các giải đấu.",
  },
];

export const CTA_SECTION = {
  title: "Tham gia cùng chúng tôi",
  description:
    "Hãy trở thành một phần của gia đình Võ đường Tâm Việt và bắt đầu hành trình karate của bạn",
  buttonText: "Đăng ký học ngay",
  buttonHref: "/registration",
};
