import apollo from "../assets/apollo.png";
import area from "../assets/area.png";
import company from "../assets/company.png";
import location from "../assets/location.png";
import roomSuggest from "../assets/roomSuggest.png";
import televison from "../assets/televison.png";
import wifi from "../assets/wifi.png";
import shower from "../assets/shower.png";
import { Button, Col, Row, Card } from "react-bootstrap";

const Detail = () => {
  return (
    <>
      <h2 style={{ marginTop: 80, marginLeft: 80 }}>
        Premium Slavija Garni
      </h2>
      <p style={{  marginLeft: 80 }}> Book a stay for more than VND 1,381.59 to receive a high-quality tour !</p>
      <div
        className="image-room"
        style={{
          margin: "50px 90px 30px 90px"
        }}
      >
        
        <div className="container">
          <div className="row" style={{ padding: "0px" }}>
            <div className="col-4" style={{ padding: "0px" }}>
              <div className="row" style={{ padding: "0px" }}>
                <img style={{ width: "100%" }} src={apollo} alt="Twin room" />
              </div>
              <div className="row" style={{ padding: "0px" }}>
                <img style={{ width: "100%" }} src={apollo} alt="Twin room" />
              </div>
            </div>
            <div className="col-8" style={{ padding: "0px" }}>
              <img
                style={{ width: "100%", height: "auto" }}
                src={apollo}
                alt="Twin room"
              />
            </div>
          </div>
          <div className="row" style={{ padding: "0px" }}>
            <div className="col" style={{ padding: "0px" }}>
              <img style={{ width: "100%" }} src={apollo} alt="Twin room" />
            </div>
            <div className="col" style={{ padding: "0px" }}>
              <img style={{ width: "100%" }} src={apollo} alt="Twin room" />
            </div>
            <div className="col" style={{ padding: "0px" }}>
              <img style={{ width: "100%" }} src={apollo} alt="Twin room" />
            </div>
            <div className="col" style={{ padding: "0px" }}>
              <img style={{ width: "100%" }} src={apollo} alt="Twin room" />
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
                className="p-2 bd-highlight "
                style={{ margin: "10px 0px 0px 100px" }}
              >
                <h4>Mortgage since: </h4>
              </div>
              <div className="p-2 bd-highlight" style={{ marginLeft: 100 }}>
                <h6 style={{ color: "#7C6A46" }}>$807.57/ night</h6>
              </div>
            </div>
          </div>
          <div className="col">
            <Button
              variant="primary"
              style={{
                margin: "40px 50px 70px 150px",
                backgroundColor: "#7C6A46",
              }}
            >
              Book now
            </Button>
          </div>
        </div>
      </div>
      <h3 style={{ marginTop: 50, marginLeft: 80 }}>Convenient</h3>
      <div
        className="d-flex justify-content-evenly "
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
        <p style={{ marginRight: 10 }}>Parking </p>
        <p style={{ marginRight: 10 }}>Air conditioning</p>
      </div>
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
        FEDORS GROUP offers an exclusive FOR SALE elegant large 5-room apartment
        on Vincent Hložník Street in the Condominium Renaissance residential
        complex. Thanks to its unique location, the property has access to a
        large Japanese garden with an area of 35 m<sup>2</sup>, which can be
        accessed directly from the bedroom. The front of the apartment is at the
        height of the third floor, so the terrace is located just above the
        treetops, which gives the apartment a unique atmosphere. Overall, the
        apartment has a direct view of the Danube River and the surrounding
        forests. The apartment offers extraordinary comfort, has a first-class
        interior from the leading architectural office Cakov Makara and
        equipment from renowned world furniture manufacturers. The overall
        atmosphere of the apartment is completed.
      </p>
      <div className="suggest">
        <h3 className="text-center mt-12  " style={{ marginTop: 80 }}>
          You might be interested in
        </h3>
        <div className="room-interested  ">
          <div className="row01">
            <Row gutter={8} style={{ margin: " 50px 130px 30px 130px" }}>
              <Col span={8}>
                <Card
                  title="The Royal Room"
                  bordered={false}
                  style={{
                    width: 300,
                    height: 430,
                  }}
                >
                  <img src={roomSuggest} alt="The Royal Room" />
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "#7C6A46" }}>
                      The Royal Room
                    </h5>
                    <p className="card-text" style={{ color: "#7C6A46" }}>
                      <b> $190,000</b>
                    </p>
                  </div>
                  <div className="card-footer">
                    <div
                      className="d-inline p-2 text-white justify-content-start"
                      style={{ width: 70 }}
                    >
                      <img
                        src={televison}
                        alt=""
                        style={{ marginTop: 20, marginRight: 20 }}
                      />
                      <img
                        src={wifi}
                        alt=""
                        style={{ marginTop: 20, marginRight: 20 }}
                      />
                      <img
                        src={shower}
                        alt=""
                        style={{ marginTop: 20, marginRight: 20 }}
                      />
                    </div>
                    <div
                      className="d-grid justify-content-md-end "
                      style={{ marginRight: "20px", marginBottom: "20px" }}
                    >
                      <button
                        className="btn text-white "
                        style={{
                          backgroundColor: "#7c6a46",
                          borderRadius: "2.5px",
                          fontFamily: "Raleway, sans-serif",
                          fontWeight: "600",
                          fontSize: "13px",
                          whiteSpace: "nowrap",
                          padding: "10px 20px",
                          margin: " 5px ",
                        }}
                      >
                        Book now
                      </button>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="The Royal Room"
                  bordered={false}
                  style={{
                    width: 300,
                    height: 430,
                  }}
                >
                  <img src={roomSuggest} alt="The Royal Room" />
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "#7C6A46" }}>
                      The Royal Room
                    </h5>
                    <p className="card-text" style={{ color: "#7C6A46" }}>
                      <b> $190,000</b>
                    </p>
                  </div>
                  <div className="card-footer">
                    <div
                      className="d-inline p-2 text-white justify-content-start"
                      style={{ width: 70 }}
                    >
                      <img
                        src={televison}
                        alt=""
                        style={{ marginTop: 20, marginRight: 20 }}
                      />
                      <img
                        src={wifi}
                        alt=""
                        style={{ marginTop: 20, marginRight: 20 }}
                      />
                      <img
                        src={shower}
                        alt=""
                        style={{ marginTop: 20, marginRight: 20 }}
                      />
                    </div>
                    <div
                      className="d-grid justify-content-md-end "
                      style={{ marginRight: "20px", marginBottom: "20px" }}
                    >
                      <button
                        className="btn text-white "
                        style={{
                          backgroundColor: "#7c6a46",
                          borderRadius: "2.5px",
                          fontFamily: "Raleway, sans-serif",
                          fontWeight: "600",
                          fontSize: "13px",
                          whiteSpace: "nowrap",
                          padding: "10px 20px",
                          margin: " 5px ",
                        }}
                      >
                        Book now
                      </button>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="The Royal Room"
                  bordered={false}
                  style={{
                    width: 300,
                    height: 430,
                  }}
                >
                  <img src={roomSuggest} alt="The Royal Room" />
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "#7C6A46" }}>
                      The Royal Room
                    </h5>
                    <p className="card-text" style={{ color: "#7C6A46" }}>
                      <b> $190,000</b>
                    </p>
                  </div>
                  <div className="card-footer">
                    <div
                      className="d-inline p-2 text-white justify-content-start"
                      style={{ width: 70 }}
                    >
                      <img
                        src={televison}
                        alt=""
                        style={{ marginTop: 20, marginRight: 20 }}
                      />
                      <img
                        src={wifi}
                        alt=""
                        style={{ marginTop: 20, marginRight: 20 }}
                      />
                      <img
                        src={shower}
                        alt=""
                        style={{ marginTop: 20, marginRight: 20 }}
                      />
                    </div>
                    <div
                      className="d-grid justify-content-md-end "
                      style={{ marginRight: "20px", marginBottom: "20px" }}
                    >
                      <button
                        className="btn text-white "
                        style={{
                          backgroundColor: "#7c6a46",
                          borderRadius: "2.5px",
                          fontFamily: "Raleway, sans-serif",
                          fontWeight: "600",
                          fontSize: "13px",
                          whiteSpace: "nowrap",
                          padding: "10px 20px",
                          margin: " 5px ",
                        }}
                      >
                        Book now
                      </button>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
          <div className="row02">
            {" "}
            <Row gutter={8} style={{ margin: " 10px 130px 50px 130px" }}>
              <Col span={8}>
                <Card
                  title="The Royal Room"
                  bordered={false}
                  style={{
                    width: 300,
                    height: 430,
                  }}
                >
                  <img src={roomSuggest} alt="The Royal Room" />
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "#7C6A46" }}>
                      The Royal Room
                    </h5>
                    <p className="card-text" style={{ color: "#7C6A46" }}>
                      <b> $190,000</b>
                    </p>
                  </div>
                  <div className="card-footer">
                    <div
                      className="d-inline p-2 text-white justify-content-start"
                      style={{ width: 70 }}
                    >
                      <img
                        src={televison}
                        alt=""
                        style={{ marginTop: 20, marginRight: 20 }}
                      />
                      <img
                        src={wifi}
                        alt=""
                        style={{ marginTop: 20, marginRight: 20 }}
                      />
                      <img
                        src={shower}
                        alt=""
                        style={{ marginTop: 20, marginRight: 20 }}
                      />
                    </div>
                    <div
                      className="d-grid justify-content-md-end "
                      style={{ marginRight: "20px", marginBottom: "20px" }}
                    >
                      <button
                        className="btn text-white "
                        style={{
                          backgroundColor: "#7c6a46",
                          borderRadius: "2.5px",
                          fontFamily: "Raleway, sans-serif",
                          fontWeight: "600",
                          fontSize: "13px",
                          whiteSpace: "nowrap",
                          padding: "10px 20px",
                          margin: " 5px ",
                        }}
                      >
                        Book now
                      </button>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="The Royal Room"
                  bordered={false}
                  style={{
                    width: 300,
                    height: 430,
                  }}
                >
                  <img src={roomSuggest} alt="The Royal Room" />
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "#7C6A46" }}>
                      The Royal Room
                    </h5>
                    <p className="card-text" style={{ color: "#7C6A46" }}>
                      <b> $190,000</b>
                    </p>
                  </div>
                  <div className="card-footer">
                    <div
                      className="d-inline p-2 text-white justify-content-start"
                      style={{ width: 70 }}
                    >
                      <img
                        src={televison}
                        alt=""
                        style={{ marginTop: 20, marginRight: 20 }}
                      />
                      <img
                        src={wifi}
                        alt=""
                        style={{ marginTop: 20, marginRight: 20 }}
                      />
                      <img
                        src={shower}
                        alt=""
                        style={{ marginTop: 20, marginRight: 20 }}
                      />
                    </div>
                    <div
                      className="d-grid justify-content-md-end "
                      style={{ marginRight: "20px", marginBottom: "20px" }}
                    >
                      <button
                        className="btn text-white "
                        style={{
                          backgroundColor: "#7c6a46",
                          borderRadius: "2.5px",
                          fontFamily: "Raleway, sans-serif",
                          fontWeight: "600",
                          fontSize: "13px",
                          whiteSpace: "nowrap",
                          padding: "10px 20px",
                          margin: " 5px ",
                        }}
                      >
                        Book now
                      </button>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="The Royal Room"
                  bordered={false}
                  style={{
                    width: 300,
                    height: 430,
                  }}
                >
                  <img src={roomSuggest} alt="The Royal Room" />
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "#7C6A46" }}>
                      The Royal Room
                    </h5>
                    <p className="card-text" style={{ color: "#7C6A46" }}>
                      <b> $190,000</b>
                    </p>
                  </div>
                  <div className="card-footer">
                    <div
                      className="d-inline p-2 text-white justify-content-start"
                      style={{ width: 70 }}
                    >
                      <img
                        src={televison}
                        alt=""
                        style={{ marginTop: 20, marginRight: 20 }}
                      />
                      <img
                        src={wifi}
                        alt=""
                        style={{ marginTop: 20, marginRight: 20 }}
                      />
                      <img
                        src={shower}
                        alt=""
                        style={{ marginTop: 20, marginRight: 20 }}
                      />
                    </div>
                    <div
                      className="d-grid justify-content-md-end "
                      style={{ marginRight: "20px", marginBottom: "20px" }}
                    >
                      <button
                        className="btn text-white "
                        style={{
                          backgroundColor: "#7c6a46",
                          borderRadius: "2.5px",
                          fontFamily: "Raleway, sans-serif",
                          fontWeight: "600",
                          fontSize: "13px",
                          whiteSpace: "nowrap",
                          padding: "10px 20px",
                          margin: " 5px ",
                        }}
                      >
                        Book now
                      </button>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
