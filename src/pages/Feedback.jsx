import { useState, useEffect } from "react";
import { Card, Spinner, Alert, Row, Col } from "react-bootstrap";
import axios from "axios";

function FeedbackRooms() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [room , setRooms] = useState({});
  const [users, setUsers] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const feedbacksResponse = await axios.get(
          "http://127.0.0.1:8000/api/feedbacks"
        );
        setFeedbacks(feedbacksResponse.data);

        const roomsResponse = await axios.get(
          "http://127.0.0.1:8000/api/rooms"
        );
        const roomsData = {};
        roomsResponse.data.forEach((room) => {
          roomsData[room.id] = room.name;
        });
        setRooms(roomsData);

        const usersResponse = await axios.get(
          "http://127.0.0.1:8000/api/users"
        );
        const usersData = {};
        usersResponse.data.forEach((user) => {
          usersData[user.id] = user.avatar;
          usersData[user.id] = user.name;
        });
        setUsers(usersData);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h3
        className="d-flex justify-content-center mt-5"
        style={{ color: "rgb(129, 73, 6)" }}
      >
        Feedback Rooms
      </h3>
      {feedbacks.length > 0 ? (
        <Row className="d-flex flex-wrap justify-content-center">
          {feedbacks.slice(0, 3).map((feedback, index) => (
            <Col
              key={index}
              md={4}
              className="mb-3 mt-5 d-flex justify-content-center "
              style={{ width: "430px" }}
            >
              <Card className="h-100"  style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                <Card.Body className="d-flex flex-column">
                  <div style={{ flexGrow: 1 }}>
                    <Card.Title className="text-2xl font-semibold d-flex justify-content-center">
                      {room[feedback.room_id]}
                    </Card.Title>
                    <Card.Text>{feedback.content}</Card.Text>
                    <Card.Subtitle className="mb-2 text-opacity-100 d-flex align-items-center">
                      <img
                        src={feedback.user.avatar}
                        alt=""
                        className="mr-2 mt-4"
                        style={{
                          width: "45px",
                          height: "45px",
                          borderRadius: "50%",
                        }}
                      />
                      <div className="mt-4" style={{ marginLeft: "15px" }}>
                        {users[feedback.user_id]}
                      </div>
                    </Card.Subtitle>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <div className="text-center">
          {error ? (
            <Alert variant="danger">{error}</Alert>
          ) : (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </div>
      )}
    </div>
  );
}

export default FeedbackRooms;

