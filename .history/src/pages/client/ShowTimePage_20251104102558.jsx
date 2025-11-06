import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Typography, Tag } from "antd";
import { useState, useEffect } from "react";

const { Title, Text } = Typography;

// ✅ Dữ liệu phim fix cứng
const sampleMovies = [
  {
    id: 1,
    title: "Trái Tim Quê Quặt",
    genres: ["Hồi hộp", "Ly kỳ", "Tâm lý"],
    duration: "120 phút",
    releaseDate: "07/11/2025",
    age: "T18",
    showtimes: [
      {
        id: 1,
        theater: "CGV Vincom",
        date: "10/11/2025",
        time: "19:00",
        room: "Phòng 1",
        seats: Array.from({ length: 30 }, (_, i) => ({
          id: i + 1,
          reserved: [3, 5, 7].includes(i + 1), // vài ghế bị đặt rồi
        })),
      },
      {
        id: 2,
        theater: "Lotte Cinema",
        date: "11/11/2025",
        time: "21:00",
        room: "Phòng 2",
        seats: Array.from({ length: 24 }, (_, i) => ({
          id: i + 1,
          reserved: [2, 4, 10, 15].includes(i + 1),
        })),
      },
    ],
  },
  {
    id: 2,
    title: "Truy Tìm Long Điền Hương",
    genres: ["Hành động", "Hài hước"],
    duration: "120 phút",
    releaseDate: "14/11/2025",
    age: "T16",
    showtimes: [
      {
        id: 3,
        theater: "Galaxy Nguyễn Du",
        date: "15/11/2025",
        time: "18:00",
        room: "Phòng 3",
        seats: Array.from({ length: 25 }, (_, i) => ({
          id: i + 1,
          reserved: [1, 5, 9, 14].includes(i + 1),
        })),
      },
    ],
  },
];

const ShowtimePage = () => {
  const { movieId, showtimeId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [showtime, setShowtime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    const m = sampleMovies.find((mv) => mv.id === Number(movieId));
    if (!m) return;
    const s = m.showtimes?.find((st) => st.id === Number(showtimeId));
    if (s) {
      setMovie(m);
      setShowtime(s);
    }
  }, [movieId, showtimeId]);

  if (!movie || !showtime)
    return (
      <div style={{ textAlign: "center", marginTop: 100 }}>
        <Title level={3}>Không tìm thấy suất chiếu</Title>
        <Button onClick={() => navigate(-1)}>Quay lại</Button>
      </div>
    );

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
      <Card style={{ marginTop: 16, boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
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
                danger={seat.reserved}
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
