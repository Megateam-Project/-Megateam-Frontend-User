import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Row, Col } from "react-bootstrap";
import Homepage from "../assets/Homepage.png";
import { useNavigate } from "react-router-dom";

export function Search() {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/rooms");
  };

  return (
    <div
      className="booking-container"
      style={{ position: "relative", textAlign: "center", color: "black" }}
    >
      <div className="mt-1">
        <img
          src={Homepage}
          alt="Illustration"
          style={{ width: "100%", maxHeight: "600px", objectFit: "cover", borderRadius: "10px" }}
        />
      </div>
      <Form
        className="mt-4"
        style={{
          position: "absolute",
          top: "75%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "75vw",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
        }}
      >
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={2} className="mb-3 mb-md-0">
            <Form.Group controlId="formLocation">
              <Form.Label>
                <i className="bi bi-geo-alt"></i> Location
              </Form.Label>
              <Form.Control as="select" defaultValue="Son Tra - Da Nang">
                <option>Son Tra - Da Nang</option>
                <option>Hai Chau - Da Nang</option>
                <option>Thanh Khe - Da Nang</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs={12} md={2} className="mb-3 mb-md-0">
            <Form.Group controlId="formRoomType">
              <Form.Label>
                <i className="bi bi-house"></i> Room type
              </Form.Label>
              <Form.Control as="select" defaultValue="Standard">
                <option>Single</option>
                <option>Double</option>
                <option>Family</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs={12} md={3} className="mb-3 mb-md-0">
            <Form.Group controlId="formCheckIn">
              <Form.Label>
                <i className="bi bi-calendar"></i> Check in
              </Form.Label>
              <Form.Control type="datetime-local" defaultValue="2023-03-09" />
            </Form.Group>
          </Col>
          <Col xs={12} md={3} className="mb-3 mb-md-0">
            <Form.Group controlId="formCheckOut">
              <Form.Label>
                <i className="bi bi-calendar"></i> Check out
              </Form.Label>
              <Form.Control type="datetime-local" defaultValue="2023-03-13" />
            </Form.Group>
          </Col>
          <Col xs={12} md={2} className="mb-3 mb-md-0 d-flex align-items-end">
            <Button
              variant=""
              className="w-100"
              style={{ backgroundColor: "rgb(129, 73, 6)", color: "white" }}
              onClick={handleSearchClick}
            >
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
