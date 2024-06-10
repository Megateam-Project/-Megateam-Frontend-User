import Ellipse from "../assets/Ellipse.png";
import { Spinner, Alert, Row, Col, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";

export function Wishlist() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    const appCookieRaw = Cookies.get("token");
    const appCookie = JSON.parse(appCookieRaw ?? "");
    const user_id_cookie = appCookie?.userId;
    console.log(appCookie);
    const getFavorites = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:8000/api/user/${user_id_cookie}/favorite-rooms`
        );
        setRooms(res.data);
      } catch (error) {
        console.error("Error fetching rooms data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getFavorites();
  }, [userId]);

  if (loading) {
    return (
      <div className="text-center my-4">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }
  const truncateText = (text, length) => {
    if (text.length <= length) {
      return text;
    }
    return text.substring(0, length) + "...";
  };
  const uniqueRooms = rooms.filter((room, index, self) =>
    index === self.findIndex((r) => r.id === room.id)
  );
  if (error) {
    return (
      <div className="text-center my-4">
        <Alert variant="danger">{error}</Alert>
      </div>
    );
  }

  return (
    <>
      <div className="picture-section">
        <div
          className="row mb-5"
          style={{ height: "200px", backgroundColor: "#7C6A46" }}
        ></div>
        <div
          className="position-relative text-center mb-5"
          style={{ marginTop: "-80px" }}
        >
          <img
            src={Ellipse}
            alt=""
            style={{ width: "200px", height: "200px" }}
          />
        </div>
      </div>
      <div className="d-flex flex-column ps-5">
        <h2 className="mb-4">Your wishlist</h2>
        <h3>Rooms you love</h3>
        <p className="mb-4">Your Wishlist, Your Dreams Within Reach!</p>
      </div>

      <div className="container mb-5">
      <Row>
          {uniqueRooms.map((room, index) => (
            <Col key={index} xs={12} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={room.image} alt={room.name} />
                <Card.Body>
                  <Card.Title>{room.name}</Card.Title>
                  <Card.Text>{truncateText(room.description, 100)}</Card.Text>
                  <div className="d-flex justify-content-end">
                    <Button style={{ backgroundColor: "#7C6A46" }}>View Details</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
