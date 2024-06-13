import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function BookingHistory() {
  const [bookings, setBookings] = useState([]);
  const appCookieRaw = Cookies.get("token");
  const appCookie = JSON.parse(appCookieRaw ?? "{}");
  const user_id_cookie = appCookie?.userId;

  useEffect(() => {
    getBookingByUserID();
  }, []);

  const getBookingByUserID = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:8000/api/booking/${user_id_cookie}/bookingHistory`);
      setBookings(res.data);  // Update here to set the correct data
    } catch (error) {
      console.error("Error fetching booking data:", error);
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-center mb-5">Booking History</h1>
      <div className="row d-flex justify-content-center">
        {bookings.map((booking) => (
          <div key={booking.id} className="col-12 mb-4 d-flex">
            <div className="col-4">
              <img
                src={`http://127.0.0.1:8000/${booking.room.image}`}  
                className="border rounded"
                alt={booking.room.name}
                style={{ width: "400px" }}
              />
            </div>
            <div className="col-8">
              <div className="p-3">
                <div className="header d-flex justify-content-between">
                  <h2 className="room-name">{booking.room.name}</h2>
                  <FontAwesomeIcon
                    icon={faSolidHeart}
                    className="favorite-icon"
                    style={{ fontSize: "24px", color: "red" }}
                    // onClick={() => handleFavoriteToggle(booking.id)} 
                  />
                </div>
                <h3>Room number: {booking.room.number}</h3>
                <h4>Convenient: {booking.room.convenient}</h4>
                <h4>Price: {booking.room.price}</h4> 
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookingHistory;
