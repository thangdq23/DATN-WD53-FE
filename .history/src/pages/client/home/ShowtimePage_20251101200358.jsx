import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ShowtimePage = () => {
  const { id } = useParams(); // id của suất chiếu
  const [showtime, setShowtime] = useState(null);

  useEffect(() => {
    // 🧠 Giả lập gọi API lấy chi tiết suất chiếu
    // Trong thực tế bạn sẽ dùng axios.get(`/api/showtimes/${id}`)
    const fakeData = {
      id,
      movieTitle: "Avengers: Endgame",
      theater: "CGV Vincom Nguyễn Chí Thanh",
      date: "2025-11-02",
      time: "19:30",
      seats: ["A1", "A2", "A3", "B1"],
      price: 120000,
    };

    setTimeout(() => setShowtime(fakeData), 500);
  }, [id]);

  if (!showtime) return <p className="text-center mt-10">Đang tải thông tin suất chiếu...</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">
        Chi tiết suất chiếu #{showtime.id}
      </h1>

      <div className="bg-white shadow-md rounded-xl p-5">
        <p><strong>Phim:</strong> {showtime.movieTitle}</p>
        <p><strong>Rạp:</strong> {showtime.theater}</p>
        <p><strong>Ngày chiếu:</strong> {showtime.date}</p>
        <p><strong>Giờ chiếu:</strong> {showtime.time}</p>
        <p><strong>Giá vé:</strong> {showtime.price.toLocaleString()}₫</p>

        <div className="mt-4">
          <h2 className="font-semibold mb-2">Ghế đã đặt:</h2>
          <div className="flex gap-2 flex-wrap">
            {showtime.seats.map((seat) => (
              <span
                key={seat}
                className="px-3 py-1 bg-gray-200 rounded-md border border-gray-400"
              >
                {seat}
              </span>
            ))}
          </div>
        </div>

        <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
          Đặt vé ngay
        </button>
      </div>
    </div>
  );
};

export default ShowtimePage;
