import { useEffect, useState } from "react";
import qrcode from "../assets/qrcode.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

export function Checkout() {
  const [bill, setBill] = useState(null);

  useEffect(() => {
    getBillByID();
  }, []);

  const getBillByID = async () => {
    const idCookiesBill = Cookies.get("idBills");
    const idBill = JSON.parse(idCookiesBill ?? "");
    try {
      const res = await axios.get(`http://127.0.0.1:8000/api/bills/${idBill}`);
      setBill(res.data);
    } catch (error) {
      console.error("Error fetching bill:", error);
    }
  };

  const handleApiPayment = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/user/payment", {
        total: bill?.total_price,
      });
      console.log(res);
      if (res.data.code === "00") {
        window.location.href = res.data.data;
      }
    } catch (err) {
      console.error("Error processing payment:", err);
    }
  };

  return (
    <div className="row m-5 justify-content-around">
      <div className="col-6 text-center">
        <img src={qrcode} style={{ width: "100%" }} alt="" />
      </div>
      <div className="col-5 border">
        <form onSubmit={handleApiPayment}>
          <h3 className="text-center m-3">Order Information</h3>
          <div className="d-flex flex-column mt-3">
            <h4>Hotel Luxury</h4>
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
              value={bill ? `${btoa(bill.id.toString())}:${bill.id}` : ""}
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
              value={bill ? bill.total_price : ""}
              disabled
            />
          </div>
          <div className="d-flex justify-content-around mt-3 mb-2">
            <button className="text-center me-2" type="button">
              <Link className="text-black" to="/">Back</Link>
            </button>
            <button type="submit" onClick={handleApiPayment} style={{backgroundColor:"#7C6A46", color:"white"}}>Checkout</button>
          </div>
        </form>
      </div>
    </div>
  );
}
