import React from "react";
import { useParams } from "react-router-dom";

const ShowtimePage = () => {
  const { id } = useParams();

  // Dữ liệu phim mẫu (fix cứng)
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

  // Nếu không khớp ID phim
  if (parseInt(id) !== fakeMovie.id) {
    return (
      <div className="flex items-center justify-center min-h-[70vh]">
        <h2 className="text-2xl font-semibold text-gray-600">
          Không tìm thấy suất chiếu
        </h2>
      </div>
    );
  }

  // Nếu ID hợp lệ
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
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
    </div>
  );
};

export default ShowtimePage;
