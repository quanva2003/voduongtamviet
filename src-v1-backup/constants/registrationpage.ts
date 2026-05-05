import {
  DollarSign,
  Users,
  Target,
  Mail,
  Phone,
  Clock,
  type LucideIcon,
} from "lucide-react";

export interface Location {
  id: string;
  name: string;
  address: string;
  instructor: string;
  schedule: string;
  mapUrl: string;
}

export interface FormField {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
}

export interface CourseInfo {
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
}

export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
}

export const HERO_SECTION = {
  title: "Đăng ký học Karate",
  subtitle: "Bắt đầu hành trình võ đạo của bạn ngay hôm nay",
};

export const FORM_TITLE = "Đăng ký học võ";

export const FORM_FIELDS: FormField[] = [
  {
    name: "name",
    label: "Họ và tên",
    type: "text",
    placeholder: "Nhập họ và tên của bạn",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Nhập email của bạn",
    required: true,
  },
  {
    name: "phone",
    label: "Số điện thoại",
    type: "tel",
    placeholder: "Nhập số điện thoại của bạn",
    required: true,
  },
  {
    name: "age",
    label: "Tuổi",
    type: "number",
    placeholder: "Nhập tuổi của bạn",
    required: true,
  },
  {
    name: "experience",
    label: "Kinh nghiệm võ thuật",
    type: "select",
    options: [
      { value: "", label: "Chọn mức độ kinh nghiệm" },
      { value: "beginner", label: "Người mới bắt đầu" },
      { value: "basic", label: "Có kinh nghiệm cơ bản" },
      { value: "intermediate", label: "Trung cấp" },
      { value: "advanced", label: "Nâng cao" },
    ],
  },
  {
    name: "location",
    label: "Cơ sở muốn học",
    type: "select",
    required: true,
  },
  {
    name: "message",
    label: "Lời nhắn (tùy chọn)",
    type: "textarea",
    placeholder: "Nhập lời nhắn của bạn...",
  },
];

export const LOCATIONS_TITLE = "Địa điểm học";

export const LOCATIONS: Location[] = [
  {
    id: "thuan-giao-1",
    name: "Trường Tiểu học Thuận Giao 1",
    address: "Đường N9, Thuận Giao, Thuận An, Bình Dương, Việt Nam",
    instructor: "Thầy Nguyễn Văn Việt",
    schedule: "Thứ 2,4,6: 17:30-19:00",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.03231325138!2d106.7135207118743!3d10.960931689154233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d7536b4b8b23%3A0x9f782464f71b2d2f!2zVHLGsOG7nW5nIFRp4buDdSBo4buNYyBUaHXhuq1uIEdpYW8!5e0!3m2!1svi!2s!4v1763057273795!5m2!1svi!2s",
  },
  {
    id: "thuan-giao-2",
    name: "Trường Tiểu học Thuận Giao 2",
    address: "Hòa Lân 1, Thuận Giao, Thuận An, Bình Dương, Việt Nam",
    instructor: "Thầy Nguyễn Văn Việt",
    schedule: "Thứ 3,5: 17:30-19:00",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.027932287039!2d106.69805262340267!3d10.961262561264173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d7feb03fb21f%3A0x61ab08514d7e3485!2zVHLGsOG7nW5nIHRp4buDdSBo4buNYyBUaHXhuq1uIEdpYW8gMg!5e0!3m2!1svi!2s!4v1763057424462!5m2!1svi!2s",
  },
  {
    id: "thuan-giao-3",
    name: "Trường Tiểu học Thuận Giao 3",
    address:
      "KP/2 Đ. Thủ Khoa Huân, khu phố bình thuận 2, Thuận An, Bình Dương, Việt Nam",
    instructor: "Cô Võ Thị Yến Nhi",
    schedule: "Thứ 3,5,7: 17:30-19:00",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.0012359291695!2d106.70677271187428!3d10.963278589152099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d0b2d277658b%3A0x38ff9df4b635ef32!2zVHLGsOG7nW5nIHRp4buDdSBo4buNYyBUaHXhuq1uIEdpYW8gMw!5e0!3m2!1svi!2s!4v1763057487759!5m2!1svi!2s",
  },
  {
    id: "thcs-thuan-giao",
    name: "Trường Trung học cơ sở Thuận Giao",
    address: "XP4C+P64, Thuận Giao, Thuận An, Bình Dương, Việt Nam",
    instructor: "Thầy Văn Anh Quân",
    schedule: "Thứ 3,5,7: 17:30-19:00",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.087586113485!2d106.71571012340253!3d10.956756361279348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d7567c6e4af3%3A0xddf171f0db099c9c!2zVHLGsOG7nW5nIFRIQ1MgVGh14bqtbiBHaWFv!5e0!3m2!1svi!2s!4v1763057558061!5m2!1svi!2s",
  },
  {
    id: "thanh-nha",
    name: "Trường Tiểu học Thuận Giao 3",
    address: "Khu dân cư Thuận giao, Thuận An, Bình Dương, Việt Nam",
    instructor: "Cô Võ Thị Yến Nhi",
    schedule: "Thứ 3,5,7: 19:15-20:45",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.99094820437!2d106.71109901187432!3d10.964055389151254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d0ad3c69ebab%3A0xba1383d9d612ed16!2zVHLGsOG7nW5nIE3huqdtIE5vbiBUaGFuaCBOaMOj!5e0!3m2!1svi!2s!4v1763057620575!5m2!1svi!2s",
  },
  {
    id: "an-thanh",
    name: "Trường Tiểu học An Thạnh",
    address: "Đường An Thạnh 51, An Thạnh, Thuận An, Bình Dương, Việt Nam",
    instructor: "Cô Võ Thị Yến Nhi",
    schedule: "Thứ 2,4,6: 17:30-19:00",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9467.260843347889!2d106.69048570614274!3d10.95317077768727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d7e2cf1e4b6d%3A0xc222104b9da0c91d!2zVHLGsOG7nW5nIFRp4buDdSBI4buNYyBBbiBUaOG6oW5o!5e0!3m2!1svi!2s!4v1763057782029!5m2!1svi!2s",
  },
];

export const CONTACT_INFO_TITLE = "Thông tin liên hệ";

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "info@vodangtamviet.com",
  },
  {
    icon: Phone,
    label: "Hotline",
    value: "098 131 63 779",
  },
  {
    icon: Clock,
    label: "Giờ làm việc",
    value: "8:00 - 20:00 (Thứ 2 - Chủ nhật)",
  },
];

export const COURSE_INFO_TITLE = "Thông tin khóa học";

export const COURSE_INFO: CourseInfo[] = [
  {
    icon: DollarSign,
    title: "Học phí",
    value: "350.000 VNĐ/tháng",
    description:
      "Ưu đãi linh hoạt theo cấp độ — miễn phí hoàn toàn cho võ sinh có hoàn cảnh khó khăn. Cam kết minh bạch, không phụ phí.",
  },
  {
    icon: Users,
    title: "Sĩ số lớp",
    value: "20–50 võ sinh/lớp",
    description:
      "Số lượng học viên phù hợp giúp giáo viên theo sát từng cá nhân, đảm bảo chất lượng huấn luyện và tiến bộ rõ rệt.",
  },
  {
    icon: Target,
    title: "Độ tuổi",
    value: "Từ 5 tuổi trở lên",
    description:
      "Có lớp riêng cho trẻ em, thanh thiếu niên và người lớn. Giáo trình điều chỉnh phù hợp với từng độ tuổi và thể trạng.",
  },
];

export const SUBMIT_BUTTON_TEXT = "Đăng ký học ngay";

export const SUCCESS_MESSAGE =
  "Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.";
