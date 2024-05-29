import qrcode from "../assets/qrcode.png";
export function Checkout() {
  return (
    <div className="row m-5 justify-content-around">
      <div className="col-6 border text-center">
        <img src={qrcode} style={{ width: "70%" }} alt="" />
      </div>
      <div className="col-5 border ">
        <h3 className="text-center m-3">Order Infomation</h3>
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
            placeholder="Booking"
          />
        </div>
      </div>
    </div>
  );
}
