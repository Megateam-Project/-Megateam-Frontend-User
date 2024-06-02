import React, { useState, useEffect } from 'react';
import { Card, Spinner, Alert, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const FeedbackCard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getFeedbackData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/feedbacks');
        setFeedbacks(response.data);
      } catch (error) {
        console.error('Error fetching feedback data:', error);
        setError(error.message);
      }
    };

    getFeedbackData();
  }, []);

  return (
    <div>
      <h3 className='d-flex justify-content-center mt-5'>Feedback Rooms</h3>
      {feedbacks.length > 0 ? (
        <Row>
          {feedbacks.slice(0, 3).map((feedback, index) => (
            <Col key={index} md={4} className="mb-3 mt-5 ">
              <Card className="h-80">
                <Card.Body className="d-flex flex-column">
                  <div style={{ flexGrow: 1 }}>
                    <Card.Title className="text-2xl font-semibold">
                      Room {feedback.room_id}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      User {feedback.user_id}
                    </Card.Subtitle>
                    <Card.Text>{feedback.content}</Card.Text>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "1rem",
                    }}
                  >
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
};

export default FeedbackCard;