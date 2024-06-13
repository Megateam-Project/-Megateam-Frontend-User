import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "../style/Room.module.css";
import { Link } from "react-router-dom";

function Room() {
  const location = useLocation();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    if (location.state && location.state.rooms) {
      setRooms(location.state.rooms);
    }
  }, [location.state]);
  console.log(rooms);
  // Kiểm tra nếu rooms không phải là mảng, trả về một thông báo hoặc hiển thị rỗng
  if (!Array.isArray(rooms)) {
    return <p>No rooms available</p>;
  }

  return (
    <div>
      {rooms.map((room) => (
        <Link
          key={room.id}
          to={`/detail/${room.id}`}
          className={styles["room-card"]}
        >
          <div key={room.id} className={styles["room-card"]}>
            <img
              src={`http://127.0.0.1:8000/${room.image}`}
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
                  <i style={{ color: room.available ? "#4CAF50" : "#ff6b6b" }}>
                    &#9829;
                  </i>
                </span>
              </div>
              <div className={styles["room-info"]}>
                <div>
                  <i>&#128716;</i> {room.type}
                </div>
              </div>
              <div className={styles["room-footer"]}>
                <span className={styles["room-price"]}>
                  {room.price}/ night
                </span>
                <button
                  style={{
                    marginLeft: "520px",
                    backgroundColor: "rgb(129, 73, 6)",
                    color: "white",
                  }}
                >
                  Choose room
                </button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Room;
