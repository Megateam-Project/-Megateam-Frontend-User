import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
function ControlledCarousel({ rooms }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const cardsPerSlide = 3;

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{height:"500px"}}>
      {Array.from({ length: Math.ceil(rooms.length / cardsPerSlide) }).map(
        (_, slideIndex) => (
          <Carousel.Item key={slideIndex}>
            <Row >
              {rooms
                .slice(
                  slideIndex * cardsPerSlide,
                  (slideIndex + 1) * cardsPerSlide
                )
                .map((room, index) => (
                  <Col 
                    md={4}
                    key={index}
                    style={{
                      width: "calc(33.33% - 20px)",
                      marginRight: "-80px",
                    }}
                  >
                    <Link to="/detail">
                      <Card
                        className="h-100"
                        style={{
                          width: "80%",
                          marginLeft: "150px",
                          boxShadow: "0 0 0 rgba(0, 0, 0, 0.4)",
                        }}
                      >
                        <Card.Img
                          variant="top"
                          className="w-full aspect-[1.49]"
                          src={room.image}
                          alt=""
                        />
                        <Card.Body
                          className="d-flex flex-column"
                          style={{ padding: "1rem" }}
                        >
                          <div style={{ flexGrow: 1 }}>
                            <Card.Title className="text-2xl font-semibold">
                              {room.name}
                            </Card.Title>
                            <Card.Title>Room  {room.number}</Card.Title>
                            <Card.Text
                              className="mt-4"
                              style={{ color: "rgb(129, 73, 6" }}
                            >
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
                            <Link to="/booking">
                              <Button
                                style={{
                                  display: "inline-block",
                                  backgroundColor: "rgb(129, 73, 6)",
                                  border: "none",
                                  padding: "0.5rem 1.5rem",
                                  borderRadius: "1rem",
                                }}
                                className="justify-center px-9 rounded-xl bg-stone-100"
                              >
                                Book Now
                              </Button>
                            </Link>
                          </div>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                ))}
            </Row>
          </Carousel.Item>
        )
      )}
    </Carousel>
  );
}

export default ControlledCarousel;
