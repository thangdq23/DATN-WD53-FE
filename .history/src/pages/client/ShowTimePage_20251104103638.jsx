import React from "react";
import { useNavigate } from "react-router-dom";

// import ảnh (thay đường dẫn đúng thư mục bạn có)
import posterTraiTim from "@/assets/movies/trai-tim-que-quat.jpg";
import posterTruyTim from "@/assets/movies/truy-tim-long-dien-huong.jpg";
import posterBayTien from "@/assets/movies/bay-tien.jpg";
import posterPhongTro from "@/assets/movies/phong-tro-ma-bau.jpg";
import posterQuanKy from "@/assets/movies/quan-ky-nam.jpg";
import posterHoangTu from "@/assets/movies/hoang-tu-quy.jpg";
import posterBaDung from "@/assets/movies/ba-dung-buon-con.jpg";
import posterCoHau from "@/assets/movies/co-hau-gai.jpg";

const ShowTimePage = () => {
  const navigate = useNavigate();

  const movies = [
    {
      id: 1,
      title: "Trái Tim Quê Quặt",
      genres: ["Hồi hộp", "Ly kỳ", "Tâm lý"],
      poster: posterTraiTim,
      duration: "120 phút",
      releaseDate: "07/11/2025",
      age: "T18",
    },
    {
      id: 2,
      title: "Truy Tìm Long Điền Hương",
      genres: ["Hành động", "Hài hước"],
      poster: posterTruyTim,
      duration: "120 phút",
      releaseDate: "14/11/2025",
      age: "T16",
    },
    {
      id: 3,
      title: "Bẫy Tiền",
      genres: ["Giật gân", "Tâm lý"],
      poster: posterBayTien,
      duration: "120 phút",
      releaseDate: "21/11/2025",
      age: "T16",
    },
    {
      id: 4,
      title: "Phòng Trọ Ma Bấu",
      genres: ["Kinh dị", "Hài hước"],
      poster: posterPhongTro,
      duration: "120 phút",
      releaseDate: "28/11/2025",
      age: "T18",
    },
    {
      id: 5,
      title: "Quân Kỳ Nam",
      genres: ["Lãng mạn", "Tâm lý"],
      poster: posterQuanKy,
      duration: "120 phút",
      releaseDate: "28/11/2025",
      age: "T16",
    },
    {
      id: 6,
      title: "Hoàng Tử Quỷ",
      genres: ["Kinh dị"],
      poster: posterHoangTu,
      duration: "120 phút",
      releaseDate: "05/12/2025",
      age: "T16",
    },
    {
      id: 7,
      title: "Bà Đừng Buồn Con",
      genres: ["Tâm lý"],
      poster: posterBaDung,
      duration: "120 phút",
      releaseDate: "12/12/2025",
      age: "T15",
    },
    {
      id: 8,
      title: "Cô Hầu Gái",
      genres: ["Kinh dị", "Giật gân"],
      poster: posterCoHau,
      duration: "120 phút",
      releaseDate: "26/12/2025",
      age: "T16",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🎥 Danh Sách Phim</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition"
            onClick={() => navigate(`/showtime/${movie.id}`)}
          >
            <div className="relative">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-72 object-cover"
              />
              <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {movie.age}
              </span>
            </div>
            <div className="p-3">
              <h2 className="text-lg font-bold line-clamp-1">{movie.title}</h2>
              <p className="text-gray-500 text-sm mb-1 line-clamp-1">
                {movie.genres.join(", ")}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Khởi chiếu:</strong> {movie.releaseDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowTimePage;
