import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Typography } from "antd";
import { useEffect, useState } from "react";

const { Title, Text } = Typography;

const MovieDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // ⚡ Giả lập API – hoặc có thể fetch từ server
    fetch("/movies.json") // nếu bạn có file JSON mock
      .then((res) => res.json())
      .then((data) => setMovie(data.find((m) => m.id === Number(id))));
  }, [id]);

  if (!movie) return <p style={{ textAlign: "center" }}>Đang tải dữ liệu phim...</p>;

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: 24 }}>
      <Button onClick={() => navigate(-1)}>← Quay lại</Button>
      <Card style={{ marginTop: 16 }}>
        <img
          src={movie.poster}
          alt={movie.title}
          style={{ width: "100%", borderRadius: 8, marginBottom: 20 }}
        />
        <Title level={2}>{movie.title}</Title>
        <Text strong>Thể loại: </Text> {movie.genres.join(", ")} <br />
        <Text strong>Thời lượng: </Text> {movie.duration} <br />
        <Text strong>Ngày khởi chiếu: </Text> {movie.releaseDate} <br />
        <Text strong>Giới hạn độ tuổi: </Text> {movie.age} <br />

        <div style={{ marginTop: 24 }}>
          <Button type="primary" size="large">
            Đặt vé ngay
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default MovieDetailPage;
