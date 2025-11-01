import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Typography, Tag } from "antd";
import { useState, useEffect } from "react";
import { sampleMovies } from "../../../pages/client/home/HomePage"; // nếu export ở HomePage

const { Title, Text } = Typography;

const ShowtimePage = () => {
  const { id } = useParams(); // id suất chiếu
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [showtime, setShowtime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    for (const m of sampleMovies) {
      const s = m.showtimes?.find((st) => st.id === Number(id));
      if (s) {
        setMovie(m);
        setShowtime(s);
        break;
      }
    }
  }, [id]);

  if (!movie || !showtime)
    return <p style={{ textAlign: "center" }}>Không tìm thấy suất chiếu</p>;

  const toggleSeat = (seatId) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((s) => s !== seatId)
        : [...prev, seatId]
    );
  };

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <Button onClick={() => navigate(-1)}>← Quay lại</Button>
      <Card style={{ marginTop: 16 }}>
        <Title level={3}>{movie.title}</Title>
        <Text strong>Rạp:</Text> {showtime.theater} <br />
        <Text strong>Thời gian:</Text> {showtime.time} - {showtime.date} <br />
        <Text strong>Phòng chiếu:</Text> {showtime.room}
        <br />

        <div style={{ marginTop: 24 }}>
          <Title level={4}>Chọn ghế</Title>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: 10,
              marginTop: 10,
            }}
          >
            {showtime.seats.map((seat) => (
              <Button
                key={seat.id}
                type={
                  seat.reserved
                    ? "dashed"
                    : selectedSeats.includes(seat.id)
                    ? "primary"
                    : "default"
                }
                disabled={seat.reserved}
                onClick={() => toggleSeat(seat.id)}
              >
                {seat.id}
              </Button>
            ))}
          </div>

          <div style={{ marginTop: 20 }}>
            <Tag color="blue">
              Ghế chọn: {selectedSeats.join(", ") || "Chưa chọn"}
            </Tag>
          </div>

          <Button
            type="primary"
            size="large"
            onClick={() =>
              alert(`Đặt vé thành công cho ${selectedSeats.length} ghế!`)
            }
            disabled={selectedSeats.length === 0}
          >
            Đặt vé ngay
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ShowtimePage;
