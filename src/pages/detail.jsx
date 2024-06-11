import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import apollo from "../assets/apollo.png";
import area from "../assets/area.png";
import company from "../assets/company.png";
import location from "../assets/location.png";
import roomSuggest from "../assets/roomSuggest.png";
import televison from "../assets/televison.png";
import N_wifi from "../assets/N_wifi.png";
import shower from "../assets/shower.png";
import { Col, Row, Card } from "react-bootstrap";

const Detail = () => {
  const { roomId } = useParams();
  const [roomData, setRoomData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/rooms/${roomId}`
        );
        setRoomData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [roomId]);

  if (!roomData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 style={{ marginTop: 80, marginLeft: 80 }}>{roomData.name}</h2>
      <p style={{ marginLeft: 80 }}>
        Book a stay for more than
        <b> ${roomData.price} </b>
        to receive a high-quality tour!
      </p>
      <div
        className="image-room"
        style={{
          margin: "50px 90px 30px 90px",
        }}
      >
        <div className="container">
          <div className="row" style={{ padding: "0px" }}>
            <div className="col-4" style={{ padding: "0px" }}>
              <div className="row" style={{ padding: "0px" }}>
                <img
                  style={{ width: "100%" }}
                  src={`http://127.0.0.1:8000/${roomData.image}`}
                  alt={roomData.name}
                />
              </div>
              <div className="row" style={{ padding: "0px" }}>
                <img
                  style={{ width: "100%" }}
                  src={`http://127.0.0.1:8000/${roomData.image}`}
                  alt={roomData.name}
                />
              </div>
            </div>
            <div className="col-8" style={{ padding: "0px" }}>
              <img
                style={{ width: "100%", height: "auto" }}
                src={`http://127.0.0.1:8000/${roomData.image}`}
                alt={roomData.name}
              />
            </div>
          </div>
          <div className="row" style={{ padding: "0px" }}>
            <div className="col" style={{ padding: "0px" }}>
              <img
                style={{ width: "100%" }}
                src={`http://127.0.0.1:8000/${roomData.image}`}
                alt={roomData.name}
              />
            </div>
            <div className="col" style={{ padding: "0px" }}>
              <img
                style={{ width: "100%" }}
                src={`http://127.0.0.1:8000/${roomData.image}`}
                alt={roomData.name}
              />
            </div>
            <div className="col" style={{ padding: "0px" }}>
              <img
                style={{ width: "100%" }}
                src={`http://127.0.0.1:8000/${roomData.image}`}
                alt={roomData.name}
              />
            </div>
            <div className="col" style={{ padding: "0px" }}>
              <img
                style={{ width: "100%" }}
                src={`http://127.0.0.1:8000/${roomData.image}`}
                alt={roomData.name}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{
          width: "70%",
          marginTop: 50,
        }}
      >
        <div className="row">
          <div className="col" style={{ marginRight: "50px" }}>
            <img
              src={company}
              alt="Company"
              style={{
                width: 50,
                height: 50,
                marginRight: 20,
              }}
            />{" "}
            A Flat
          </div>
          <div className="col" style={{ marginRight: "50px" }}>
            <img
              src={area}
              alt="Area"
              style={{
                width: 50,
                height: 50,
                marginRight: 20,
              }}
            />{" "}
            224m<sup>2</sup>
          </div>
          <div className="col">
            <img
              src={location}
              alt="Location"
              style={{
                width: 50,
                height: 50,
                marginRight: 20,
              }}
            />{" "}
            Son Tra - Da Nang
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{
          width: "800px",
          height: "120px",
          margin: " 50px 0px 30px 270px",
          background: " #F3F3FA",
        }}
      >
        <div className="row ">
          <div className="col">
            <div className="d-flex flex-column bd-highlight mb-3">
              <div
                className="p-2 bd-highlight"
                style={{ margin: "10px 0px 0px 100px" }}
              >
                <h4>Mortgage since: </h4>
              </div>
              <div className="p-2 bd-highlight" style={{ marginLeft: 100 }}>
                <h6 style={{ color: "#7C6A46" }}>${roomData.price}/ night</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <button
              className="btn text-white"
              style={{
                margin: "40px 50px 70px 150px",
                backgroundColor: "#7C6A46",
                borderRadius: "2.5px",
                fontFamily: "Raleway, sans-serif",
                fontWeight: "600",
                fontSize: "13px",
                whiteSpace: "nowrap",
                padding: "10px 20px",
              }}
            >
              Book now
            </button>
          </div>
          
        </div>
      </div>
      <div className="row" style={{ marginLeft: 80 }}>
        <h3 style={{ marginTop: 40, marginLeft: 80 }}>Description</h3>
        <p
          className=" text-left mt-3"
          style={{
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "justify",
          }}
        >
          {roomData.description}
        </p>
      </div>
      <div className="row">
            <h3 style={{ marginTop: 50, marginLeft: 80 }}>Convenient</h3>
            <div
              className="d-flex justify-content-evenly"
              style={{
                width: "80%",
                marginLeft: 70,
                marginTop: 30,
              }}
            >
              <p style={{ marginRight: 10 }}>Wifi</p>
              <p style={{ marginRight: 10 }}>Television</p>
              <p style={{ marginRight: 10 }}>Mini bar</p>
              <p style={{ marginRight: 10 }}>Dryer</p>
              <p style={{ marginRight: 10 }}>Air conditioning</p>
              <p style={{ marginRight: 10 }}>Parking</p>
              <p style={{ marginRight: 10 }}>Air conditioning</p>
            </div>
          </div>
      <div
        className="container"
        style={{ marginLeft: 80, marginTop: 40, marginBottom: 40 }}
      >
        <h4 style={{ margin: "0px 0px 10px 10px" }}>
          {" "}
          Details of the apartment
        </h4>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={televison}
                    alt="Television"
                    style={{ width: 50, height: 50, marginRight: 20 }}
                  />
                  <span> Television </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={N_wifi}
                    alt="Wi-Fi"
                    style={{ width: 50, height: 50, marginRight: 20 }}
                  />
                  <span>Wi-Fi</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={shower}
                    alt="Shower"
                    style={{ width: 50, height: 50, marginRight: 20 }}
                  />
                  <span>Shower</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <div
        className="container"
        style={{
          marginTop: 100,
          backgroundColor: " #F3F3FA",
          height: 270,
          width: "85%",
          marginLeft: 80,
        }}
      >
        <h5 style={{ paddingTop: 30, marginLeft: 50 }}>
          Suggest accommodation
        </h5>
        <div className="row">
          <div className="col">
            <div className="d-flex flex-column bd-highlight mb-3">
              <div className="p-2 bd-highlight">
                <img src={roomSuggest} alt="Room Suggestion" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex flex-column bd-highlight mb-3">
              <div className="p-2 bd-highlight">
                <img src={roomSuggest} alt="Room Suggestion" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex flex-column bd-highlight mb-3">
              <div className="p-2 bd-highlight">
                <img src={roomSuggest} alt="Room Suggestion" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex flex-column bd-highlight mb-3">
              <div className="p-2 bd-highlight">
                <img src={roomSuggest} alt="Room Suggestion" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
