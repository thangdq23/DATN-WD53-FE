import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Typography, Button, Row, Col } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import posterTraiTim from "../../../assets/images/poster/trai-tim-que-quat.jpg";

const { Title, Text } = Typography;

// Dữ liệu tạm — trong thực tế có thể lấy từ HomePage hoặc API
const showtimes = [
  {
    id: 1,
    title: "Trái Tim Quê Quặt",
    time: "19:30 - 21:30",
    date: "07/11/2025",
    cinema: "CGV Vincom Center",
    room: "Phòng 3",
    poster: posterTraiTim,
  },
];

const ShowtimeDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const showtime = showtimes.find((s) => s.id === Number(id));

  if (!showtime)
    return (
      <div style={{ padding: 40, textAlign: "center" }}>
        <Title level={3}>Không tìm thấy suất chiếu</Title>
        <Button onClick={() => navigate("/")}>Quay lại trang chủ</Button>
      </div>
    );

  return (
    <div style={{ padding: "40px 20px", maxWidth: 1000, margin: "0 auto" }}>
      <Button
        type="link"
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate(-1)}
        style={{ marginBottom: 20 }}
      >
        Quay lại
      </Button>

      <Card>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={10}>
            <img
              src={showtime.poster}
              alt={showtime.title}
              style={{ width: "100%", borderRadius: 8 }}
            />
          </Col>
          <Col xs={24} md={14}>
            <Title level={3}>{showtime.title}</Title>
            <Text strong>Thời gian: </Text> {showtime.time}
            <br />
            <Text strong>Ngày chiếu: </Text> {showtime.date}
            <br />
            <Text strong>Rạp: </Text> {showtime.cinema}
            <br />
            <Text strong>Phòng chiếu: </Text> {showtime.room}
            <br />
            <br />
            <Button type="primary" size="large">
              Đặt vé ngay
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ShowtimeDetailPage;
