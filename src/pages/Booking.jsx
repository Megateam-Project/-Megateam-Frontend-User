import image_9 from "../assets/image_9.png";
import React, { useState, useEffect } from "react";
import axios from "axios";

export const Booking = () => {
  const [room, setRoom] = useState([]);
  const [error, setError] = useState(null);
  const [randomRoomId, setRandomRoomId] = useState(null);

  useEffect(() => {
    const getRoomFromBooking = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/rooms");
        const roomData = res.data.map((r) => ({
          id: r.room_id,
          name: r.name,
          number: r.number, 
          price: r.price, 
        }));
        setRoom(roomData);
        console.log(roomData);
      } catch (err) {
        console.error("Error fetching room data:", err);
        setError(err.message);
      }
    };
    getRoomFromBooking();
  }, []);

  useEffect(() => {
    if (room.length > 0 && randomRoomId === null) {
      const randomIndex = Math.floor(Math.random() * room.length);
      const randomId = room[randomIndex].id;
      setRandomRoomId(randomId);
    }
  }, [room,randomRoomId]);

  const randomRoom = room.find((r) => r.id === randomRoomId);

  return (
    <>
      <form action="">
        <h1 className="text-center mt-3">Booking Information</h1>
        <div className="row m-5 justify-content-around">
          <div className="col-8 d-flex flex-column">
            <div className="border border-warning p-3">
              <h3 className="text-center">Additional Booking Services</h3>{" "}
              <hr />
              <div className="ps-3">
                <p className="">Airport pickup with a 7-seater car</p>
              </div>
              <div>
                <div
                  className="d-flex gap-3 align-items-center mt-4 ps-3"
                  style={{ maxWidth: "522px" }}
                >
                  <div className="d-flex justify-content-center align-items-start flex-grow-1 p-3 rounded border border-black px-5">
                    <select className="form-select form-select">
                      <option defaultValue>0 Car</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="d-flex gap-2 align-items-center">
                    <div className="fw-semibold">550,000 VND/Car</div>
                  </div>
                  <div className="">
                    <select className="form-select form-select">
                      <option defaultValue> Further details</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-warning mt-3 p-3">
              <h3 className="text-center">Booking Guest Details</h3> <hr />
              <div className="d-flex flex-column">
                <div className="d-flex flex-column">
                  <label className="mb-3 fw-semibold" htmlFor="name">
                    Name:{" "}
                  </label>
                  <input
                    className="border rounded p-1 ps-2"
                    id="name"
                    type="text"
                    placeholder="name"
                  />
                </div>
                <div className="d-flex flex-column mt-3">
                  <label className="mb-3 fw-semibold" htmlFor="email">
                    Email:{" "}
                  </label>
                  <input
                    className="border rounded p-1 ps-2"
                    id="email"
                    type="text"
                    placeholder="email"
                  />
                </div>
                <div className="d-flex flex-column mt-3">
                  <label className="mb-3 fw-semibold" htmlFor="check_in_date">
                    Check in date:{" "}
                  </label>
                  <input
                    className="border rounded p-1 ps-2"
                    id="check_in_date"
                    type="text"
                    placeholder="check_in_date"
                  />
                </div>
                <div className="d-flex flex-column mt-3">
                  <label className="mb-3 fw-semibold" htmlFor="further">
                    Further Inquiry:{" "}
                  </label>
                  <input
                    className="border rounded p-1 ps-2"
                    id="further"
                    type="text"
                    placeholder="further"
                  />
                </div>
              </div>
            </div>
            <div className="border border-warning mt-3 p-3">
              <h3 className="text-center">Payment method</h3> <hr />
              <div className="d-flex">
                <img
                  style={{ width: "100px" }}
                  className=" border rounded me-3"
                  src={image_9}
                  alt=""
                />
                <select className="form-select form-select">
                  <option defaultValue> Choose Payment Method</option>
                  <option value="1">Cash</option>
                  <option value="2">Momo</option>
                  <option value="3">Paypal</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-3 border border-warning p-3 ">
            <h3 className="text-center">Your booking request</h3> <hr />
            <div className="d-flex flex-column">
              <h4 className="text-center">Hotel Luxury</h4>
              <div className="d-flex flex-column mt-3">
                <label className="mb-3 fw-semibold" htmlFor="check_in_date">
                  Check in date:{" "}
                </label>
                <input
                  className="border rounded p-1 ps-2"
                  id="check_in_date"
                  type="text"
                  placeholder="check_in_date"
                />
              </div>
              <div className="d-flex flex-column mt-3">
                <label className="mb-3 fw-semibold" htmlFor="check_out_date">
                  Check out date:{" "}
                </label>
                <input
                  className="border rounded p-1 ps-2"
                  id="check_out_date"
                  type="text"
                  placeholder="check_out_date"
                />
              </div>
              <hr className="m-4" />
              {randomRoom && (
                <div>
                  <h4 className="text-center">Room Information</h4>
                  <div className="d-flex flex-column mt-3">
                    <label className="mb-3 fw-semibold" htmlFor="room_name">
                      Room name:{" "}
                    </label>
                    <input
                      className="border rounded p-1 ps-2"
                      id="room_name"
                      type="text"
                      placeholder="room_name"
                      value={randomRoom.name}
                    />
                  </div>
                  <div className="d-flex flex-column mt-3">
                    <label className="mb-3 fw-semibold" htmlFor="room_number">
                      Room number:{" "}
                    </label>
                    <input
                      className="border rounded p-1 ps-2"
                      id="room_number"
                      type="text"
                      placeholder="room_number"
                      value={randomRoom.number}
                    />
                  </div>
                  <div className="d-flex flex-column mt-3">
                    <label className="mb-3 fw-semibold" htmlFor="room_price">
                      Room price:{" "}
                    </label>
                    <input
                      className="border rounded p-1 ps-2"
                      id="room_price"
                      type="text"
                      placeholder="room_price"
                      value={randomRoom.price}
                    />
                  </div>
                </div>
              )}
              <div className="d-flex justify-content-center mt-4">
                <button className="text-center me-2" type="submit">
                  {/* <Link className="" to="/rooms">
                    Back
                  </Link> */}
                </button>
                <button
                  className="text-center "
                  style={{ backgroundColor: "#7C6A46" }}
                  type="submit"
                >
                  {/* <Link className="text-white" to="/checkout">
                    Check out
                  </Link> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Booking;
