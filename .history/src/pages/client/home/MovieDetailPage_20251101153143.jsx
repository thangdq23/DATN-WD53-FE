import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Gọi API hoặc dữ liệu mock
    const fetchMovie = async () => {
      try {
        const res = await fetch(`http://localhost:3000/movies/${id}`);
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        console.error("Lỗi tải dữ liệu phim:", err);
      }
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <p>Đang tải...</p>;

  return (
    <div className="p-6">
      <div className="flex gap-6">
        <img src={movie.poster} alt={movie.title} className="w-64 rounded-lg" />
        <div>
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <p><b>Thể loại:</b> {movie.genre}</p>
          <p><b>Thời lượng:</b> {movie.duration} phút</p>
          <p><b>Ngày khởi chiếu:</b> {movie.releaseDate}</p>

          <h2 className="text-xl font-semibold mt-4 mb-2">🎬 Suất chiếu:</h2>
          <ul>
            {movie.showtimes?.map((st, i) => (
              <li key={i}>
                {st.date} - {st.time} - Phòng {st.room}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
