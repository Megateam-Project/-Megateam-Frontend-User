import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';

const FamousRoom = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRooms = async () => {
      try {
        const res = await axios.get('http://localhost:3000/rooms');
        setRooms(res.data);
      } catch (error) {
        console.error('Error fetching rooms data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getRooms();
  }, []);

  if (loading) {
    return (
      <div className="text-center my-4">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className="famous-room-container">
      <h2 className="text-center my-4">Phòng Nổi Tiếng</h2>
      <p className="text-center my-4">Tất cả các phòng được thiết kế cho sự thoải mái của bạn</p>
      <Row>
        {rooms.map((room, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={room.imgSrc} alt={room.title} />
              <Card.Body>
                <Card.Title>{room.title}</Card.Title>
                <Card.Text>{room.description}</Card.Text>
                <Button variant="primary">Chi Tiết</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FamousRoom;
