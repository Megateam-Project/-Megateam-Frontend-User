import { useEffect, useState } from "react";
import qrcode from "../assets/qrcode.png";
import Cookies from "js-cookie";
import axios from "axios";
export function Checkout() {
  const [amount, setAmount] = useState("");
  const [payCode, setPayCode] = useState("");
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    
    const urlParams = new URLSearchParams(window.location.search);
    const vnpAmount = urlParams.get("vnp_Amount");
    const vnpBankTranNo = urlParams.get("vnp_BankTranNo");
    setAmount(vnpAmount);
    setPayCode(vnpBankTranNo);
    const idCookiesBooking = Cookies.get("idBooking");
    const idBooking = JSON.parse(idCookiesBooking ?? "");
    getBookingById(idBooking);
  }, []);
  const getBookingById = async (idBooking) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/bookings/${idBooking}`);
      setBooking(response.data.Booking);
      console.log(response.data.Booking);
    } catch (error) {
      console.error("Error fetching booking data:", error);
    }
  };
  return (
    <div className="row m-5 justify-content-around">
      <div className="col-6 text-center">
        <h2 className="mt-2">Thank you for using our service</h2>
        <img src={qrcode} className="mt-5" style={{ width: "100%" }} alt="" />
      </div>
      <div className="col-5">
        <form>
          <h3 className="text-center m-3">Order Information</h3>
          <div className="d-flex flex-column mt-3">
            <h4>Hotel Luxury</h4>
          </div>
          <div className="d-flex flex-column mt-3">
            <label className="mb-3 fw-semibold" htmlFor="user_name">
              User Name
            </label>
            <input
              className="border rounded p-1 ps-2"
              id="id_booking"
              type="text"
              placeholder="Booking"
              value={booking?.user?.name}
              disabled
            />
          </div>
          <div className="d-flex flex-column mt-3">
            <label className="mb-3 fw-semibold" htmlFor="phone">
              Phone Number:
            </label>
            <input
              className="border rounded p-1 ps-2"
              id="id_booking"
              type="text"
              placeholder="Booking"
              value={booking?.user?.phone}
              disabled
            />
          </div>
          <div className="d-flex flex-column mt-3">
            <label className="mb-3 fw-semibold" htmlFor="check_in_date">
              Check in date 
            </label>
            <input
              className="border rounded p-1 ps-2"
              id="id_booking"
              type="text"
              placeholder="Booking"
              value={booking?.check_in_date}
              disabled
            />
          </div>
          <div className="d-flex flex-column mt-3">
            <label className="mb-3 fw-semibold" htmlFor="check_out_date">
              Check out date
            </label>
            <input
              className="border rounded p-1 ps-2"
              id="id_booking"
              type="text"
              placeholder="Booking"
              value={booking?.check_out_date}
              disabled
            />
          </div>
          <div className="d-flex flex-column mt-3">
            <label className="mb-3 fw-semibold" htmlFor="id_booking">
              Booking code:
            </label>
            <input
              className="border rounded p-1 ps-2"
              id="id_booking"
              type="text"
              placeholder="Booking"
              value={payCode}
              disabled
            />
          </div>
          <hr className="m-4" />
          <div className="d-flex flex-column mt-3">
            <label className="mb-3 fw-semibold" htmlFor="total">
              Total Amount
            </label>
            <input
              className="border rounded p-1 ps-2"
              id="total"
              type="text"
              placeholder="Total Amount"
              value={amount}
              disabled
            />
          </div>
          {/* <div className="d-flex justify-content-around mt-3 mb-2">
            <button className="text-center me-2" type="button">
              <Link className="text-black" to="/">
                Back
              </Link>
            </button>
            <button
              type="submit"
              style={{ backgroundColor: "#7C6A46", color: "white" }}
            >
              Checkout
            </button>
          </div> */}
        </form>
      </div>
    </div>
  );
}
