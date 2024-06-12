// import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
function BookingHistory() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Booking History</h1>
      <div className="row d-flex justify-content-center">
        <div className="col-4">
          <img src="https://s.net.vn/nkMR" alt="" style={{ width: "400px" }} />
        </div>
        <div className="col-8 border">
          <div className="p-3">
            <div className="header d-flex justify-content-between">
              <h2 className="room-name">Room name</h2>
              <FontAwesomeIcon
                icon={faSolidHeart}
                className="favorite-icon"
                style={{ fontSize: "24px", color: "red" }}
                // onClick={() => handleFavoriteToggle(room.id)}
              />
            </div>

            <h3>Room number</h3>
            <h4>Convenient</h4>
            <h4>Price</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BookingHistory;
