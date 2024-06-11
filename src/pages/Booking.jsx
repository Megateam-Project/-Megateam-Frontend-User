import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import image_9 from "../assets/image_9.png";
import Cookies from "js-cookie";
import { message } from "antd";
import moment from "moment";
const Booking = () => {
  const { roomId } = useParams();
  const [room, setRoom] = useState(null);
  const [error, setError] = useState(null);
  const [payments, setPayments] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [user, setUser] = useState("");
  const appCookieRaw = Cookies.get("token");
  const appCookie = JSON.parse(appCookieRaw ?? "");
  const user_id_cookie = appCookie?.userId;
  useEffect(() => {
    fetchRoomData();
    getPaymentMethods();
    getUserDetail();
  }, [roomId]);
  const fetchRoomData = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:8000/api/rooms/${roomId}`);
      setRoom(res.data);
    } catch (err) {
      console.error("Error fetching room data:", err);
      setError(err.message);
    }
  };
  const getUserDetail = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/users/${user_id_cookie}`
      );
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };
  const getPaymentMethods = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/payments");
      setPayments(res.data);
    } catch (err) {
      console.error("Error fetching payment methods:", err);
      setError(err.message);
    }
  };
  const navigate = useNavigate();
  const handleCreateBooking = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/bookings", {
        user_id: user.id,
        room_id: roomId,
        payment_id: paymentMethod,
        check_in_date: checkInDate,
        check_out_date: checkOutDate,
        create_by: "User",
      });
      message.success("Booking created successfully!");
      navigate("/checkout");
    } catch (err) {
      console.error("Error creating booking:", err);
      setError("Error creating booking: " + err.message);
    }
  };

  return (
    <>
      <form onSubmit={handleCreateBooking}>
        <h1 className="text-center mt-3">Booking Information</h1>
        <div className="row m-5 justify-content-around">
          <div className="col-8 d-flex flex-column">
            <div className="border border-warning p-3">
              <h3 className="text-center">Additional Booking Services</h3>
              <hr />
              <div className="ps-3">
                <p>Airport pickup with a 7-seater car</p>
              </div>
              <div>
                <div
                  className="d-flex gap-3 align-items-center mt-4 ps-3"
                  style={{ maxWidth: "522px" }}
                >
                  <div className="d-flex justify-content-center align-items-start flex-grow-1 p-3 rounded border border-black px-5">
                    <select className="form-select">
                      <option defaultValue>0 Car</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <div className="fw-semibold">550,000 VND/Car</div>
                  </div>
                  <div>
                    <select className="form-select">
                      <option defaultValue>Further details</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-warning mt-3 p-3">
              <h3 className="text-center">Booking Guest Details</h3>
              <hr />
              <div className="d-flex flex-column">
                <div className="d-flex flex-column">
                  <label className="mb-3 fw-semibold" htmlFor="name">
                    Name:
                  </label>
                  <input
                    className="border rounded p-1 ps-2"
                    id="name"
                    type="text"
                    value={user?.name}
                    readOnly
                  />
                </div>
                <div className="d-flex flex-column mt-3">
                  <label className="mb-3 fw-semibold" htmlFor="email">
                    Email:
                  </label>
                  <input
                    className="border rounded p-1 ps-2"
                    id="email"
                    type="text"
                    value={user?.email}
                    readOnly
                  />
                </div>
              </div>
            </div>

            <div className="border border-warning mt-3 p-3">
              <h3 className="text-center">Payment method</h3>
              <hr />
              <div className="d-flex">
                <img
                  style={{ width: "100px" }}
                  className="border rounded me-3"
                  src={image_9}
                  alt=""
                />
                <select
                  className="form-select"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option defaultValue>Choose Payment Method</option>
                  {payments.map((payment) => (
                    <option key={payment.id} value={payment.id}>
                      {payment.payment_method}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="col-3 border border-warning p-3">
            <h3 className="text-center">Your booking request</h3>
            <hr />
            <div className="d-flex flex-column">
              <h4 className="text-center">Hotel Luxury</h4>
              <div className="d-flex flex-column mt-3">
                <label className="mb-3 fw-semibold" htmlFor="check_in_date">
                  Check in date:
                </label>
                <input
                  className="border rounded p-1 ps-2"
                  id="check_in_date"
                  type="datetime-local"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  min={moment().format("YYYY-MM-DDTHH:mm")}
                />
              </div>
              <div className="d-flex flex-column mt-3">
                <label className="mb-3 fw-semibold" htmlFor="check_out_date">
                  Check out date:
                </label>
                <input
                  className="border rounded p-1 ps-2"
                  id="check_out_date"
                  type="datetime-local"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  min={checkInDate || moment().format("YYYY-MM-DDTHH:mm")}
                />
              </div>
            </div>

            <hr className="m-4" />

            <h4 className="text-center">Room Information</h4>
            {room && (
              <div className="d-flex flex-column">
                <div className="d-flex flex-column mt-3">
                  <label className="mb-3 fw-semibold" htmlFor="room_name">
                    Room name:
                  </label>
                  <input
                    className="border rounded p-1 ps-2"
                    id="room_name"
                    type="text"
                    value={room.name}
                    readOnly
                  />
                </div>
                <div className="d-flex flex-column mt-3">
                  <label className="mb-3 fw-semibold" htmlFor="room_number">
                    Room number:
                  </label>
                  <input
                    className="border rounded p-1 ps-2"
                    id="room_number"
                    type="text"
                    value={room.number}
                    readOnly
                  />
                </div>
                <div className="d-flex flex-column mt-3">
                  <label className="mb-3 fw-semibold" htmlFor="room_price">
                    Room price:
                  </label>
                  <input
                    className="border rounded p-1 ps-2"
                    id="room_price"
                    type="text"
                    value={room.price}
                    readOnly
                  />
                </div>
              </div>
            )}
            <div className="d-flex justify-content-center mt-4">
              <button className="text-center me-2" type="button">
                <Link to="/rooms">Back</Link>
              </button>
              <button
                className="text-center"
                style={{ backgroundColor: "#7C6A46" }}
                type="submit"
              >
                <span className="text-white">Check out</span>
              </button>
            </div>
          </div>
        </div>
        {error && <p className="text-danger text-center">{error}</p>}
      </form>
    </>
  );
};

export default Booking;
