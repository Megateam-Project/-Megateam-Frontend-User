import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { message } from "antd";

const isLoggedIn = () => {
  return Cookies.get("token") !== undefined;
};
{/* eslint-disable-next-line */}
function ControlledCarousel({ rooms }) {
  const [index, setIndex] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();
  const rawCookie = Cookies.get("token");
  const userCookies = rawCookie ? JSON.parse(rawCookie) : {};
  useEffect(() => {
    if (userCookies) {
      getFavorites();
    }
  }, []);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const cardsPerSlide = 3;
  const handleBookNow = (roomId) => {
    if (userCookies) {
      const user = userCookies;
      navigate(`/booking/${roomId}`, { state: { user } });
    } else {
      message.error("You must login before booking");
      navigate("/login");
    }
  };

  const user_id_cookie = userCookies?.userId;
  const getFavorites = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:8000/api/user/${user_id_cookie}/favorite-rooms`);
      const favoriteRoomIds = res.data.map((room) => room.id);
      setFavorites(favoriteRoomIds);
    } catch (error) {
      console.error("Error fetching rooms data:", error);
    }
  };

  const handleFavoriteToggle = async (roomId) => {
    if (isLoggedIn()) {
      if (favorites.includes(roomId)) {
        message.warning("This room is already in your favorites");
        return;
      }

      const user = JSON.parse(Cookies.get("token"));
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/favorites",
          {
            user_id: user.userId,
            room_id: roomId,
            create_by: "user",
          }
        );
        if (response.status === 200) {
          setFavorites((prevFavorites) => [...prevFavorites, roomId]);
          message.success("Added to wishlist successfully");
        } else {
          console.error("Failed to add to favorites:", response.data.message);
        }
      } catch (error) {
        console.error("An error occurred while adding to favorites:", error);
      }
    } else {
      message.error("You must login to add to favorites");
      navigate("/login");
    }
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{ height: "550px" }}>
      {/* eslint-disable-next-line */}
      {Array.from({ length: Math.ceil(rooms?.length / cardsPerSlide) }).map((_, slideIndex) => (
        <Carousel.Item key={slideIndex}>
          <Row>
            {/* eslint-disable-next-line */}
            {rooms.slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide).map((room, index) => (
              <Col
                md={4}
                key={index}
                style={{ width: "calc(33.33% - 20px)", marginRight: "-80px" }}
              >
                <Card
                  className="h-100"
                  style={{ width: "80%", marginLeft: "150px", boxShadow: "0 0 0 rgba(0, 0, 0, 0.4)", position: "relative" }}
                >
                  <Card.Img
                    variant="top"
                    className="w-full aspect-[1.49]"
                    src={`http://127.0.0.1:8000/${room.image}`}
                    alt=""
                  />
                  <FontAwesomeIcon
                    icon={faSolidHeart}
                    onClick={() => handleFavoriteToggle(room.id)}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      color: favorites.includes(room.id) ? "red" : "grey",
                      fontSize: "24px",
                      cursor: "pointer",
                    }}
                  />
                  <Card.Body className="d-flex flex-column" style={{ padding: "1rem" }}>
                    <div style={{ flexGrow: 1 }}>
                      <Card.Title className="text-2xl font-semibold">{room.name}</Card.Title>
                      <Card.Title>Room {room.number}</Card.Title>
                      <Card.Text className="mt-4" style={{ color: "rgb(129, 73, 6)" }}>
                        {room.price} VND
                      </Card.Text>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "1rem",
                      }}
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f93e5625a638d27fd47c622d71ef39250b39bdd9a153432b6626df64840fdc6?"
                        style={{ maxWidth: "140px", height: "auto" }}
                        alt=""
                      />
                      <Button
                        onClick={() => handleBookNow(room.id)}
                        style={{ backgroundColor: "rgb(129, 73, 6)", border: "none", padding: "0.5rem 1.5rem", borderRadius: "1rem" }}
                        className="justify-center px-9 rounded-xl bg-stone-100"
                      >
                        Book Now
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;
