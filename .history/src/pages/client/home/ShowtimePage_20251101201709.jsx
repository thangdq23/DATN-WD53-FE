import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Typography, Tag, Row, Col, Divider } from "antd";

const { Title, Text } = Typography;

const ShowtimeDetailPage = () => {
  const { id } = useParams(); // Lấy ID phim từ URL
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // ⚡ Giả lập lấy dữ liệu phim từ local hoặc API
    import("../home/HomePage")
      .then((module) => {
        const movies = module.sampleMovies || [];
        const found = movies.find((m) => m.id === Number(id));
        setMovie(found || null);
      })
      .catch(() => setMovie(null));
  }, [id]);

  if (!movie)
    return (
      <p style={{ textAlign: "center", padding: 40 }}>Đang tải dữ liệu suất chiếu...</p>
    );

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: 24 }}>
      <Button onClick={() => navigate(-1)}>← Quay lại</Button>

      <Card style={{ marginTop: 16 }}>
        <Row gutter={[24, 16]}>
          <Col xs={24} md={8}>
            <img
              src={movie.poster}
              alt={movie.title}
              style={{
                width: "100%",
                borderRadius: 8,
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              }}
            />
          </Col>

          <Col xs={24} md={16}>
            <Title level={2}>{movie.title}</Title>
            <Tag color="red">{movie.age}</Tag>
            <div style={{ marginTop: 8 }}>
              <Text strong>Thể loại: </Text> {movie.genres.join(", ")} <br />
              <Text strong>Thời lượng: </Text> {movie.duration} <br />
              <Text strong>Khởi chiếu: </Text> {movie.releaseDate}
            </div>
            <Divider />
            <Title level={4}>Chọn suất chiếu</Title>
            <div>
              {["10:30", "13:00", "15:30", "18:00", "20:30"].map((time) => (
                <Button
                  key={time}
                  type="default"
                  style={{ margin: "4px" }}
                  onClick={() => alert(`Chọn suất ${time}`)}
                >
                  {time}
                </Button>
              ))}
            </div>

            <Divider />
            <Button type="primary" size="large">
              Tiếp tục đặt ghế
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ShowtimeDetailPage;
