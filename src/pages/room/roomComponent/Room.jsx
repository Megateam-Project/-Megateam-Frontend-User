import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../style/Room.module.css";
import { Link } from "react-router-dom";
function Room() {
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/rooms", {});
        setRooms(response.data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchRooms();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {rooms.map((room) => (
        <div key={room.id} className={styles["room-card"]}>
          <img
            src={room.image}
            alt={room.name}
            className={styles["room-card-img"]}
          />
          <div className={styles["room-details"]}>
            <div className={styles["room-header"]}>
              <h2 className={styles["room-header-title"]}>
                {room.name} <br /> Room: {room.number}
              </h2>

              <span
                className={styles.availability}
                style={{
                  color: room.available ? "#4CAF50" : "#ff6b6b",
                }}
              >
                Available: {room.available ? "Yes" : "No"}{" "}
                <i
                  style={{
                    color: room.available ? "#4CAF50" : "#ff6b6b",
                    fontSize: "50px", // Tăng kích thước biểu tượng
                  }}
                >
                  &#9829;
                </i>
              </span>
            </div>
            <div className={styles["room-info"]}>
              <div>
                <i>&#128716;</i> {room.type}
              </div>
              <div>{/* <i>&#128206;</i> {room.size}m<sup>2</sup> */}</div>
            </div>
            <div className={styles["room-footer"]}>
              <span className={styles["room-price"]}>{room.price}/ night</span>
              <Link to={"/detail"}>
                <button
                  style={{
                    marginLeft: "520px",
                    backgroundColor: "rgb(129, 73, 6)",
                    color: "white",
                  }}
                >
                  Choose room
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Room;
