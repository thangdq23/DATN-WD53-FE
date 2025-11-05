import React from "react";
import { useParams } from "react-router-dom";
import posterTraiTim from "../../assets/images/poster/trai-tim-que-quat.jpg";

const ShowtimePage = () => {
  const { id } = useParams();

  const fakeMovie = {
    id: 1,
    name: "Trái Tim Què Quặt",
    description:
      "Một bộ phim tình cảm – tâm lý đầy xúc động kể về hành trình chữa lành của những con người mang trong mình những tổn thương cả về thể xác lẫn tinh thần. 'Trái Tim Què Quặt' không chỉ là câu chuyện tình yêu mà còn là lời nhắn gửi về sự đồng cảm và sức mạnh của lòng nhân ái.",
    poster: posterTraiTim,
    duration: "125 phút",
    director: "Nguyễn Quang Dũng",
    actor: "Ngô Thanh Vân, Liên Bỉnh Phát, Kaity Nguyễn",
    genre: "Tình cảm, Tâm lý, Chính kịch",
    releaseDate: "15/11/2024",
    country: "Việt Nam",
    language: "Tiếng Việt",
    trailer: "https://www.youtube.com/embed/HpogSWdHCMs",
  };

  if (parseInt(id) !== fakeMovie.id) {
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
          backgroundImage: `url(${fakeMovie.poster})`,
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
              src={fakeMovie.poster}
              alt={fakeMovie.name}
              className="w-80 md:w-[400px] rounded-2xl shadow-2xl border border-gray-700 hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Thông tin phim */}
          <div>
            <h1 className="text-4xl font-bold mb-3 text-red-500">
              {fakeMovie.name}
            </h1>
            <p className="text-gray-300 mb-4 italic">{fakeMovie.genre}</p>

            <div className="space-y-2 text-gray-200 text-sm md:text-base">
              <p>
                🎬 <strong>Đạo diễn:</strong> {fakeMovie.director}
              </p>
              <p>
                ⭐ <strong>Diễn viên:</strong> {fakeMovie.actor}
              </p>
              <p>
                ⏱ <strong>Thời lượng:</strong> {fakeMovie.duration}
              </p>
              <p>
                📅 <strong>Khởi chiếu:</strong> {fakeMovie.releaseDate}
              </p>
              <p>
                🌏 <strong>Quốc gia:</strong> {fakeMovie.country}
              </p>
              <p>
                💬 <strong>Ngôn ngữ:</strong> {fakeMovie.language}
              </p>
            </div>

            <p className="text-gray-300 mt-5 leading-relaxed text-justify">
              {fakeMovie.description}
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
                src={fakeMovie.trailer}
                title={`Trailer ${fakeMovie.name}`}
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
