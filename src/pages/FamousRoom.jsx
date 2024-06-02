import React, { useState, useEffect } from "react";
import { Card, Button, Spinner, Alert } from "react-bootstrap";
import ControlledCarousel from "./ControlledCarousel";
import axios from "axios";

const FamousRoom = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRooms = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/rooms");
        setRooms(res.data);
      } catch (error) {
        console.error("Error fetching rooms data:", error);
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

  if (error) {
    return (
      <div className="text-center my-4">
        <Alert variant="danger">{error}</Alert>
      </div>
    );
  }

  return (
    <div className="famous-room-container">
      <h2 className="text-center my-4">Famous Rooms</h2>
      <p className="text-center my-4">
        All rooms are designed for your comfort
      </p>
      <ControlledCarousel rooms={rooms.slice(0, 6)} />
    </div>
  );
};

export default FamousRoom;