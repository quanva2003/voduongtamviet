import React, { useState } from "react";

const ArticlesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Tất cả" },
    { id: "techniques", name: "Kỹ thuật" },
    { id: "philosophy", name: "Triết lý võ đạo" },
    { id: "training", name: "Luyện tập" },
    { id: "competition", name: "Thi đấu" },
    { id: "news", name: "Tin tức" },
  ];

  const articles = [
    {
      id: 1,
      title: "Kỹ thuật cơ bản trong Karate: Từ Kata đến Kumite",
      excerpt:
        "Khám phá những kỹ thuật cơ bản nhất trong karate, từ các động tác kata truyền thống đến kỹ thuật đấu đối kháng kumite...",
      content:
        "Karate là một môn võ thuật có hệ thống kỹ thuật rất phong phú và đa dạng. Từ những động tác cơ bản nhất như đấm, đá, đến những kỹ thuật phức tạp trong kata và kumite, mỗi kỹ thuật đều có ý nghĩa và mục đích riêng...",
      author: "Thầy Nguyễn Văn Minh",
      date: "2024-01-15",
      category: "techniques",
      image:
        "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "5 phút đọc",
      likes: 128,
      shares: 45,
    },
    {
      id: 2,
      title: "Triết lý võ đạo: Tinh thần Karate trong cuộc sống hiện đại",
      excerpt:
        "Karate không chỉ là môn võ thuật mà còn là triết lý sống, giúp con người phát triển nhân cách và đạo đức...",
      content:
        "Trong thời đại hiện đại, khi cuộc sống trở nên bận rộn và căng thẳng, triết lý võ đạo của karate vẫn giữ nguyên giá trị và ý nghĩa sâu sắc...",
      author: "Cô Trần Thị Lan",
      date: "2024-01-12",
      category: "philosophy",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "7 phút đọc",
      likes: 95,
      shares: 32,
    },
    {
      id: 3,
      title: "Lịch trình luyện tập hiệu quả cho người mới bắt đầu",
      excerpt:
        "Hướng dẫn chi tiết về cách xây dựng lịch trình luyện tập karate hiệu quả cho những người mới bắt đầu...",
      content:
        "Việc xây dựng một lịch trình luyện tập hợp lý là rất quan trọng đối với những người mới bắt đầu học karate...",
      author: "Thầy Lê Văn Hùng",
      date: "2024-01-10",
      category: "training",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "6 phút đọc",
      likes: 156,
      shares: 67,
    },
    {
      id: 4,
      title: "Giải đấu Karate Quốc gia 2024: Kết quả và thành tích",
      excerpt:
        "Tổng kết kết quả giải đấu Karate Quốc gia 2024 với những thành tích xuất sắc của các võ sĩ...",
      content:
        "Giải đấu Karate Quốc gia 2024 đã kết thúc với nhiều thành tích ấn tượng. Các võ sĩ đã thể hiện tinh thần thi đấu cao và kỹ thuật điêu luyện...",
      author: "Ban tổ chức",
      date: "2024-01-08",
      category: "competition",
      image:
        "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "4 phút đọc",
      likes: 203,
      shares: 89,
    },
    {
      id: 5,
      title: "Dinh dưỡng cho võ sĩ Karate: Ăn gì để có sức mạnh tối ưu",
      excerpt:
        "Chế độ dinh dưỡng hợp lý là yếu tố quan trọng giúp võ sĩ karate có được sức mạnh và sức bền tối ưu...",
      content:
        "Dinh dưỡng đóng vai trò quan trọng trong việc phát triển thể lực và kỹ năng của võ sĩ karate. Một chế độ ăn uống hợp lý sẽ giúp...",
      author: "Chuyên gia dinh dưỡng",
      date: "2024-01-05",
      category: "training",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "8 phút đọc",
      likes: 142,
      shares: 56,
    },
    {
      id: 6,
      title: "Võ đường Tâm Việt mở lớp học mới cho trẻ em",
      excerpt:
        "Thông báo về việc mở lớp học karate dành riêng cho trẻ em từ 5-12 tuổi tại Võ đường Tâm Việt...",
      content:
        "Võ đường Tâm Việt vui mừng thông báo về việc mở lớp học karate dành riêng cho trẻ em. Lớp học được thiết kế đặc biệt...",
      author: "Võ đường Tâm Việt",
      date: "2024-01-03",
      category: "news",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      readTime: "3 phút đọc",
      likes: 89,
      shares: 23,
    },
  ];

  const filteredArticles =
    selectedCategory === "all"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-[#FD1610] to-[#b0100c] flex items-center justify-center -mt-24 pt-24">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bài viết & Tin tức
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Khám phá thế giới karate qua những bài viết chuyên sâu
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="mb-12" data-aos="fade-up">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-[#FD1610] to-[#d4140e] text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-md hover:shadow-lg"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-[#FD1610] to-[#d4140e] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {
                      categories.find((cat) => cat.id === article.category)
                        ?.name
                    }
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2">
                  {article.title}
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <span>👤 {article.author}</span>
                    <span>
                      📅 {new Date(article.date).toLocaleDateString("vi-VN")}
                    </span>
                  </div>
                  <span>⏱️ {article.readTime}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>❤️ {article.likes}</span>
                    <span>📤 {article.shares}</span>
                  </div>

                  <button className="text-[#FD1610] hover:text-[#d4140e] font-medium transition-colors">
                    Đọc tiếp →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12" data-aos="fade-up">
          <button className="bg-gradient-to-r from-[#FD1610] to-[#d4140e] hover:from-[#d4140e] hover:to-[#b0100c] text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Xem thêm bài viết
          </button>
        </div>

        {/* Newsletter Subscription */}
        <div
          className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200"
          data-aos="fade-up"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#FD1610] to-[#b0100c] bg-clip-text text-transparent">
              Đăng ký nhận tin tức
            </h2>
            <p className="text-gray-600 mb-6">
              Nhận những bài viết mới nhất về karate và võ đạo trực tiếp vào hộp
              thư của bạn
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FD1610] focus:border-transparent transition-all duration-300"
              />
              <button className="bg-gradient-to-r from-[#FD1610] to-[#d4140e] hover:from-[#d4140e] hover:to-[#b0100c] text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Đăng ký
              </button>
            </div>
          </div>
        </div>

        {/* Featured Article */}
        <div className="mt-16" data-aos="fade-up">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Featured article"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="mb-4">
                  <span className="bg-[#FD1610] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Bài viết nổi bật
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-black">
                  Hành trình từ đai trắng đến đai đen: Những bài học quý giá
                </h2>
                <p className="text-gray-600 mb-6">
                  Khám phá hành trình đầy thử thách và ý nghĩa của một võ sĩ
                  karate từ khi bắt đầu với đai trắng cho đến khi đạt được đai
                  đen. Những bài học về sự kiên trì, kỷ luật và tinh thần võ
                  đạo...
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <span>👤 Thầy Nguyễn Văn Minh</span>
                    <span className="ml-4">📅 20/01/2024</span>
                  </div>
                  <button className="text-[#FD1610] hover:text-[#d4140e] font-medium transition-colors">
                    Đọc toàn bộ →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
