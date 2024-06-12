
import "bootstrap/dist/css/bootstrap.min.css";
export function Footer() {
  return (
    <div className="footer row text-white" style={{ backgroundColor: "#7C6A46" }}>
      <div className="col-3 mb-3 text-justify">
        <h2 className="font-script mb-2" style={{ fontSize: "30px" }}>
          Paradise view
        </h2>
        <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "14px" }}>
          The service at the Hotel Monteleone was exceptional. There was
          absolutely no issue that was not addressed timely and with
          satisfactory results. We were particularly impressed with how the
          hotel staff anticipated our needs (periodically coming by the Board
          Room to check with us)
        </p>
      </div>
      <div className="col-2 mb-3">
        <h5
          className="mb-3"
          style={{ fontFamily: "Raleway, sans-serif", fontWeight: "700" }}
        >
          Quick links
        </h5>
        {["Room booking", "Rooms", "Contact", "Explore"].map((link, index) => (
          <p
            key={index}
            className="mb-2"
            style={{
              fontFamily: "Raleway, sans-serif",
              fontSize: "14px",
            }}
          >
            {link}
          </p>
        ))}
      </div>
      <div className="col-2 mb-3">
        <h5
          className="mb-3"
          style={{ fontFamily: "Raleway, sans-serif", fontWeight: "700" }}
        >
          Company
        </h5>
        {["Privacy policy", "Refund policy", "F.A.Q", "About"].map(
          (item, index) => (
            <p
              key={index}
              className="mb-2"
              style={{
                fontFamily: "Raleway, sans-serif",
                fontSize: "14px",
              }}
            >
              {item}
            </p>
          )
        )}
      </div>
      <div className="col-2 mb-3">
        <h5
          className="mb-3"
          style={{ fontFamily: "Raleway, sans-serif", fontWeight: "700" }}
        >
          Social media
        </h5>
        {["Facebook", "Twitter", "Instagram", "Linkedin"].map(
          (platform, index) => (
            <p
              key={index}
              className="mb-2"
              style={{
                fontFamily: "Raleway, sans-serif",
                fontSize: "14px",
              }}
            >
              {platform}
            </p>
          )
        )}
      </div>
      <div className="col-3 mb-3">
        <h5
          className="mb-3"
          style={{ fontFamily: "Raleway, sans-serif", fontWeight: "700" }}
        >
          Newsletter
        </h5>
        <p style={{ fontFamily: "Raleway, sans-serif", fontSize: "14px" }}>
          Kindly subscribe to our newsletter to get latest deals on our rooms
          and vacation discount.
        </p>
        <div className="d-flex bg-white rounded p-2 align-items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="form-control border-0 me-2"
            style={{
              color: "rgba(0, 0, 0, 0.5)",
              fontFamily: "Raleway, sans-serif",
              fontWeight: "500",
              fontSize: "14px",
            }}
          />
          <button
            className="btn text-white"
            style={{
              backgroundColor: "#7c6a46",
              borderRadius: "2.5px",
              fontFamily: "Raleway, sans-serif",
              fontWeight: "600",
              fontSize: "14px",
              whiteSpace: "nowrap",
              padding: "10px 20px",
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
      <hr className="mt-2" />
      <div
        className="mt-5 text-center"
        style={{
          fontFamily: "Raleway, sans-serif",
        }}
      >
        Paradise view 2023
      </div>
    </div>
  );
}
