import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Row, Col } from "react-bootstrap";
import Home from "../assets/Home.png";

export function Search(props) {
  return (
    <div className="booking-container" style={{ position: "relative", textAlign: "center", color: "black" }}>
      <div className="row" style={{ display: "flex", position: "relative", backgroundColor:"#f1f1f4", height:"auto" }}>
        <div className="col-6" style={{ flex: "0 0 50%", maxWidth: "50%", padding: "10px" }}>
          <div className="p-lg-5  text-dark rounded" style={{ maxWidth: "100%", width: "80vw", textAlign: "left" }}>
            <h4>Paradise View</h4>
            <h2>Hotel for every moment rich inemotion</h2>
            <p>Every moment feels like the first time in paradise view</p>
          </div>
        </div>
        <div className="col-6" style={{ flex: "0 0 50%", maxWidth: "60%", padding: "10px" }}>
          <img src={Home} alt="Ảnh minh họa" style={{ Width: "500px", height: "600px" }} />
        </div>
        <Form className="mt-4" style={{ position: "absolute", top: "80%", left: "50%", transform: "translate(-50%, -50%)", width: "84.2vw", backgroundColor: "rgba(255, 255, 255, 0.8)", padding: "20px" }}>
          <Row className="align-items-center justify-content-center">
            <Col xs={6} md={2} className="mb-3 mb-md-0">
              <Form.Group controlId="formLocation">
                <Form.Label>
                  <i className="bi bi-geo-alt"></i> Location
                </Form.Label>
                <Form.Control as="select" defaultValue="Son Tra - Da Nang">
                  <option>Son Tra - Da Nang</option>
                  <option>Location 2</option>
                  <option>Location 3</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={6} md={2} className="mb-3 mb-md-0">
              <Form.Group controlId="formRoomType">
                <Form.Label>
                  <i className="bi bi-house"></i> Room type
                </Form.Label>
                <Form.Control as="select" defaultValue="Standard">
                  <option>Standard</option>
                  <option>Deluxe</option>
                  <option>Suite</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={6} md={1} className="mb-3 mb-md-0">
              <Form.Group controlId="formPerson">
                <Form.Label>
                  <i className="bi bi-person"></i> Person
                </Form.Label>
                <Form.Control as="select" defaultValue="01">
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={6} md={2} className="mb-3 mb-md-0">
              <Form.Group controlId="formCheckIn">
                <Form.Label>
                  <i className="bi bi-calendar"></i> Check in
                </Form.Label>
                <Form.Control type="datetime-local" defaultValue="2023-03-09" />
              </Form.Group>
            </Col>
            <Col xs={6} md={2} className="mb-3 mb-md-0">
              <Form.Group controlId="formCheckOut">
                <Form.Label>
                  <i className="bi bi-calendar"></i> Check out
                </Form.Label>
                <Form.Control type="datetime-local" defaultValue="2023-03-13" />
              </Form.Group>
            </Col>
            <Col xs={6} md={1}>
              <Button variant="" className="w-100 mt-4 " style={{backgroundColor:"rgb(129, 73, 6)",color:"white"}}>
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}
