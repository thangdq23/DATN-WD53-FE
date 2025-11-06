import React from "react";
import { useParams } from "react-router-dom";

const ShowtimePage = () => {
  const { id } = useParams();

  // Dữ liệu phim "Trái Tim Què Quặt"
  const fakeMovie = {
    id: 1,
    name: "Trái Tim Què Quặt",
    description:
      "Một bộ phim tình cảm – tâm lý đầy xúc động kể về hành trình chữa lành của những con người mang trong mình những tổn thương cả về thể xác lẫn tinh thần. 'Trái Tim Què Quặt' không chỉ là câu chuyện tình yêu mà còn là lời nhắn gửi về sự đồng cảm và sức mạnh của lòng nhân ái.",
    poster:
      "traitimquequat.jpg", // bạn có thể thay bằng poster thật
    duration: "125 phút",
    director: "Nguyễn Quang Dũng",
    actor: "Ngô Thanh Vân, Liên Bỉnh Phát, Kaity Nguyễn",
    genre: "Tình cảm, Tâm lý, Chính kịch",
    releaseDate: "15/11/2024",
    country: "Việt Nam",
    language: "Tiếng Việt",
  };

  // Nếu id không khớp
  if (parseInt(id) !== fakeMovie.id) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-600">
          Không tìm thấy suất chiếu
        </h2>
      </div>
    );
  }

  // Nếu có suất chiếu hợp lệ
  return (
    <div className="min-h-screen flex flex-col">
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
            title="Trailer Trái Tim Què Quặt"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </main>
    </div>
  );
};

export default ShowtimePage;
