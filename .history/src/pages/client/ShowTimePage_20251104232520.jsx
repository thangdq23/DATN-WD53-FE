import React from "react";
import { useParams } from "react-router-dom";

// Import ảnh poster
import posterTraiTim from "../../assets/images/poster/trai-tim-que-quat.jpg";
import posterTruyTim from "../../assets/images/poster/truy-tim-long-dien-huong.jpg";
import posterBayTien from "../../assets/images/poster/bay-tien.jpg";
import posterPhongTro from "../../assets/images/poster/phong-tro-ma-bau.png";
import posterQuanKy from "../../assets/images/poster/quan-ky-nam.jpg";
import posterHoangTu from "../../assets/images/poster/hoang-tu-quy.png";
import posterBaDung from "../../assets/images/poster/ba-dung-buon-con.png";
import posterCoHau from "../../assets/images/poster/co-hau-gai.jpg";

const ShowtimePage = () => {
  const { id } = useParams();

  // Dữ liệu phim mẫu
  const fakeMovie = [
    {
      id: 1,
      name: "Trái Tim Què Quặt",
      description:
        "Một bộ phim tình cảm – tâm lý đầy xúc động kể về hành trình chữa lành của những con người mang trong mình những tổn thương cả về thể xác lẫn tinh thần. 'Trái Tim Què Quặt' không chỉ là câu chuyện tình yêu mà còn là lời nhắn gửi về sự đồng cảm và sức mạnh của lòng nhân ái.",
      poster: posterTraiTim,
      duration: "120 phút",
      director: "Nguyễn Quang Dũng",
      actor: "Ngô Thanh Vân, Liên Bỉnh Phát, Kaity Nguyễn",
      genre: "Tình cảm, Tâm lý, Chính kịch",
      releaseDate: "07/11/2025",
      country: "Việt Nam",
      language: "Tiếng Việt",
      trailer: "https://www.youtube.com/embed/HpogSWdHCMs",
    },
    {
      id: 2,
      name: "Truy Tìm Long Điền Hương",
      description:
        "Một đặc vụ tài năng lên đường truy tìm bí mật ẩn giấu sau vụ mất tích kỳ lạ của Long Điền Hương — người nắm giữ chìa khóa dẫn tới một âm mưu quốc tế.",
      poster: posterTruyTim,
      duration: "120 phút",
      director: "Victor Vũ",
      actor: "Huỳnh Đông, Midu, Johnny Trí Nguyễn",
      genre: "Hành động, Hài hước",
      releaseDate: "14/11/2025",
      country: "Việt Nam",
      language: "Tiếng Việt",
      trailer: "https://www.youtube.com/embed/-q1FYNMQBeU",
      age: "T16",
    },
    {
      id: 3,
      name: "Bẫy Tiền",
      description:
        "Một tay đầu tư trẻ tuổi bị cuốn vào trò chơi nguy hiểm giữa lòng tài chính ngầm, nơi không chỉ tiền bạc mà cả mạng sống đều bị đánh cược.",
      poster: posterBayTien,
      duration: "120 phút",
      director: "Charlie Nguyễn",
      actor: "Kiều Minh Tuấn, Jun Vũ, Hứa Vĩ Văn",
      genre: "Giật gân, Tâm lý",
      releaseDate: "21/11/2025",
      country: "Việt Nam",
      language: "Tiếng Việt",
      trailer: "https://www.youtube.com/embed/7ZXuDXSkMGg",
      age: "T16",
    },
    {
      id: 4,
      name: "Phòng Trọ Ma Bấu",
      description:
        "Một nhóm bạn thuê trọ giá rẻ và phát hiện ra nơi đây ẩn chứa linh hồn oan khuất không thể siêu thoát. Tiếng cười xen lẫn tiếng thét trong câu chuyện kinh dị – hài hước này.",
      poster: posterPhongTro,
      duration: "120 phút",
      director: "Lê Bảo Trung",
      actor: "Hứa Minh Đạt, Nam Thư, Duy Khánh",
      genre: "Kinh dị, Hài hước",
      releaseDate: "28/11/2025",
      country: "Việt Nam",
      language: "Tiếng Việt",
      trailer: "https://www.youtube.com/embed/jgZM5IhnzDA",
      age: "T18",
    },
    {
      id: 5,
      name: "Quân Kỳ Nam",
      description:
        "Câu chuyện tình lãng mạn giữa cô họa sĩ trẻ và chàng quân nhân, gợi nhớ về những năm tháng tuổi trẻ đầy nhiệt huyết và hi sinh.",
      poster: posterQuanKy,
      duration: "120 phút",
      director: "Ngô Thanh Vân",
      actor: "Song Luân, Bảo Anh, Bình Minh",
      genre: "Lãng mạn, Tâm lý",
      releaseDate: "28/11/2025",
      country: "Việt Nam",
      language: "Tiếng Việt",
      trailer: "https://www.youtube.com/embed/D_DvouZ61p8",
      age: "T16",
    },
    {
      id: 6,
      name: "Hoàng Tử Quỷ",
      description:
        "Một cậu bé bị nguyền rủa từ nhỏ và mang trong mình dòng máu quỷ vương. Khi lớn lên, cậu phải chọn giữa bóng tối và ánh sáng.",
      poster: posterHoangTu,
      duration: "120 phút",
      director: "Jordan Peele",
      actor: "Trần Nghĩa, Khả Ngân, Trấn Thành",
      genre: "Kinh dị, Giả tưởng",
      releaseDate: "05/12/2025",
      country: "Mỹ",
      language: "Tiếng Anh - Phụ đề Việt",
      trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      age: "T16",
    },
    {
      id: 7,
      name: "Bà Đừng Buồn Con",
      description:
        "Một bộ phim đầy cảm xúc kể về tình mẫu tử, những hy sinh thầm lặng và hành trình chuộc lại lỗi lầm trong quá khứ.",
      poster: posterBaDung,
      duration: "120 phút",
      director: "Phan Gia Nhật Linh",
      actor: "Như Quỳnh, Trấn Thành, Lan Ngọc",
      genre: "Chính kịch, Tâm lý",
      releaseDate: "12/12/2025",
      country: "Việt Nam",
      language: "Tiếng Việt",
      trailer: "https://www.youtube.com/embed/l-gQLqv9f4o",
      age: "T15",
    },
    {
      id: 8,
      name: "Cô Hầu Gái",
      description:
        "Lấy bối cảnh thời Pháp thuộc, bộ phim xoay quanh một cô hầu gái vô tình phát hiện bí mật rùng rợn trong ngôi biệt thự cổ.",
      poster: posterCoHau,
      duration: "120 phút",
      director: "Derek Nguyễn",
      actor: "Nhung Kate, Jean-Michel Richaud, Kim Xuân",
      genre: "Kinh dị, Giật gân",
      releaseDate: "26/12/2025",
      country: "Việt Nam",
      language: "Tiếng Việt - Phụ đề Anh",
      trailer: "https://www.youtube.com/embed/oHg5SJYRHA0",
      age: "T16",
    },
  ];

  // ✅ Lấy phim theo id
  const movie = fakeMovie.find((m) => m.id === parseInt(id));

  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-semibold text-gray-600">
          Không tìm thấy suất chiếu
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* Background mờ từ poster */}
      <div
        className="absolute inset-0 opacity-20 blur-2xl"
        style={{
          backgroundImage: `url(${movie.poster})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto py-12 px-6 md:px-10">
        {/* Nội dung chính */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Poster */}
          <div className="w-full flex justify-center">
            <img
              src={movie.poster}
              alt={movie.name}
              className="w-80 md:w-[400px] rounded-2xl shadow-2xl border border-gray-700 hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Thông tin phim */}
          <div>
            <h1 className="text-4xl font-bold mb-3 text-red-500">
              {movie.name}
            </h1>
            <p className="text-gray-300 mb-4 italic">{movie.genre}</p>

            <div className="space-y-2 text-gray-200 text-sm md:text-base">
              <p>🎬 <strong>Đạo diễn:</strong> {movie.director}</p>
              <p>⭐ <strong>Diễn viên:</strong> {movie.actor}</p>
              <p>⏱ <strong>Thời lượng:</strong> {movie.duration}</p>
              <p>📅 <strong>Khởi chiếu:</strong> {movie.releaseDate}</p>
              <p>🌏 <strong>Quốc gia:</strong> {movie.country}</p>
              <p>💬 <strong>Ngôn ngữ:</strong> {movie.language}</p>
            </div>

            <p className="text-gray-300 mt-5 leading-relaxed text-justify">
              {movie.description}
            </p>

            {/* Nút đặt vé */}
            <div className="mt-6">
              <button className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold text-white shadow-md transition duration-300">
                🎟️ Đặt vé ngay
              </button>
            </div>
          </div>
        </div>

        {/* Trailer */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4 text-center text-red-400">
            🎞 Trailer
          </h2>
          <div className="flex justify-center">
            <div className="w-full md:w-3/4 lg:w-2/3 aspect-video rounded-2xl overflow-hidden shadow-xl border border-gray-700">
              <iframe
                width="100%"
                height="100%"
                src={movie.trailer}
                title={`Trailer ${movie.name}`}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowtimePage;
