import React from "react";
import SEO from "../components/SEO";
import { Calendar, MapPin, DollarSign, UserCheck, Clock } from "lucide-react";

const BeltPromotionPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Thông Báo Kỳ Thi Thăng Đai lần III năm 2025- Võ Đường Tâm Việt"
        description="Thông báo về việc tổ chức kỳ thi thăng đai ngày 28/12/2025 tại Trường Tiểu Học Thuận Giao"
        keywords="thi thăng đai, karate, võ đường tâm việt, thi đai"
      />
      <div className="min-h-screen relative overflow-hidden pt-24">
        {/* Background với gradient tím nhạt và hình ảnh mờ */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-purple-50 to-white z-0">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-12 md:py-16">
          {/* Header Section */}
          <div className="text-center mb-12" data-aos="fade-down">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-900 mb-4">
              THÔNG BÁO
            </h1>
            <p className="text-lg md:text-xl text-purple-700 font-semibold">
              Về việc tổ chức kỳ thi thăng đai ngày 28/12/2025
            </p>
          </div>

          {/* Main Content Card */}
          <div className="max-w-4xl mx-auto">
            {/* Thời gian & Địa điểm Section */}
            <div className="mb-8" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-purple-800 text-white rounded-t-2xl px-6 py-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center">
                  THỜI GIAN & ĐỊA ĐIỂM
                </h2>
              </div>
              <div className="bg-white rounded-b-2xl shadow-xl p-6 md:p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-purple-800" />
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Thời gian</p>
                    <p className="text-lg md:text-xl font-semibold text-gray-900">
                      7h30 phút ngày 28/12/2025
                    </p>
                  </div>
                </div>
                <div className="flex w-full flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex flex-row h-full items-start sm:items-center gap-4 ">
                    <div className="flex-shrink-0  w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-purple-800" />
                    </div>
                    <div className="w-full flex flex-col">
                      <p className="text-gray-600 mb-1">Địa điểm</p>
                      <p className="text-lg md:text-xl font-semibold text-gray-900">
                        Trường Tiểu Học Thuận Giao
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/rnDhvpUf7vBvkpLS6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 shadow-md hover:shadow-lg"
                  >
                    <MapPin className="w-5 h-5" />
                    <span>Xem trên Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Embed Section */}
            <div className="mb-8" data-aos="fade-up" data-aos-delay="150">
              <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 overflow-hidden">
                <div
                  className="relative w-full"
                  style={{ paddingBottom: "56.25%" }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.032313250784!2d106.71352607571295!3d10.960931689199278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d7536b4b8b23%3A0x9f782464f71b2d2f!2sThu%E1%BA%ADn%20Giao%20Primary%20School!5e0!3m2!1sen!2s!4v1764860508775!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      border: 0,
                      borderRadius: "0.75rem",
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Địa điểm Trường Tiểu Học Thuận Giao"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Lệ phí Section */}
            <div className="mb-8" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-purple-800 text-white rounded-t-2xl px-6 py-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center">
                  LỆ PHÍ
                </h2>
              </div>
              <div className="bg-white rounded-b-2xl shadow-xl p-6 md:p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-purple-800" />
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Lệ phí thi</p>
                    <p className="text-2xl md:text-3xl font-bold text-red-600">
                      250.000đ/võ sinh
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-purple-800" />
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Đăng ký</p>
                    <p className="text-lg md:text-xl font-semibold text-gray-900">
                      Đăng kí trực tiếp chủ nhiệm câu lạc bộ
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-purple-800" />
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Hạn chót đăng ký</p>
                    <p className="text-lg md:text-xl font-semibold text-red-600">
                      20/12/2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeltPromotionPage;
