import React from "react";
import { useParams } from "react-router-dom";

const ShowtimePage = () => {
  const { id } = useParams();

  // Dữ liệu phim mẫu
  const fakeMovie = {
    id: 1,
    name: "Avengers: Endgame",
    description:
      "Trận chiến cuối cùng giữa các siêu anh hùng và Thanos, mang đến cái kết hoành tráng cho hơn 10 năm hành trình MCU.",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
    duration: "181 phút",
    director: "Anthony & Joe Russo",
    actor: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
    genre: "Hành động, Viễn tưởng",
    releaseDate: "26/04/2019",
    country: "Mỹ",
    language: "Tiếng Anh - Phụ đề Việt",
    trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
  };

  // Giả sử nếu id không khớp
  if (parseInt(id) !== fakeMovie.id) {
    return (
     
          <h2 className="text-2xl font-semibold text-gray-600">
            Không tìm thấy suất chiếu
          </h2>
        </main>

        <footer className="bg-gray-900 text-white p-4 text-center">
          © 2025 MPV Cinema. All rights reserved.
        </footer>
      </div>
    );
  }

  // Nếu có suất chiếu hợp lệ
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header className="bg-gray-900 text-white p-4 flex justify-between">
        <div className="font-bold text-xl">🎬 MPV</div>
        <nav className="flex gap-4">
          <a href="/">Trang chủ</a>
          <a href="/lich-chieu">Lịch chiếu</a>
          <a href="/phim">Phim</a>
          <a href="/tin-tuc">Tin tức</a>
          <a href="/uu-dai">Tin mới và ưu đãi</a>
          <a href="/dieu-khoan">Điều khoản</a>
          <a href="/gioi-thieu">Giới thiệu</a>
        </nav>
      </header>

      <main className="flex-grow p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={fakeMovie.poster}
            alt={fakeMovie.name}
            className="w-full rounded-xl shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{fakeMovie.name}</h1>
          <p className="text-gray-600 mb-4">{fakeMovie.genre}</p>
          <p className="mb-2">
            <strong>Đạo diễn:</strong> {fakeMovie.director}
          </p>
          <p className="mb-2">
            <strong>Diễn viên:</strong> {fakeMovie.actor}
          </p>
          <p className="mb-2">
            <strong>Thời lượng:</strong> {fakeMovie.duration}
          </p>
          <p className="mb-2">
            <strong>Ngày khởi chiếu:</strong> {fakeMovie.releaseDate}
          </p>
          <p className="mb-4">
            <strong>Ngôn ngữ:</strong> {fakeMovie.language}
          </p>
          <p className="text-gray-700 mb-4">{fakeMovie.description}</p>

          <iframe
            width="100%"
            height="300"
            src={fakeMovie.trailer}
            title="Trailer"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </main>

    
    </div>
  );
};  

export default ShowtimePage;
