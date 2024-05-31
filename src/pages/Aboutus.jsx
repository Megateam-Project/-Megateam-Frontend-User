import heroAboutus from "../assets/heroAboutus.png";
import {
  PhoneFilled,
  MailFilled,
  EnvironmentFilled,
  TwitterCircleFilled,
  InstagramFilled,
  FacebookFilled,
} from "@ant-design/icons";
export function Aboutus() {
  return (
    <div className="row d-flex justify-content-around">
      <div className="col-11">
        <img
          src={heroAboutus}
          className="mt-4"
          alt=""
          style={{ width: "100%" }}
        />
      </div>
      <div className="text-center mt-5">
        <h3 className="fw-bold" style={{ color: "#7C6A46" }}>
          FEEDBACK
        </h3>
        <p>Any question or remarks? Just write us a message!</p>
      </div>
      <div className="row border rounded col-11 m-4 p-3">
        <div
          className="col-5 border rounded p-5 text-white"
          style={{ backgroundColor: "#7C6A46" }}
        >
          <h4 className="text-center mb-4">Contact Information</h4>
          <p>Say something to start a live chat!</p>
          <div className="mt-5">
            <div className="d-flex">
              <PhoneFilled className="pe-5 fs-4" />
              (+84) 382870032
            </div>
            <div className="d-flex mt-5">
              <MailFilled className="pe-5 fs-4" />
              admin.hotel@gmail.com
            </div>
            <div className="d-flex mt-5">
              <EnvironmentFilled className="pe-5 fs-4" />
              99 Tô Hiến Thành, Sơn Trà Đà Nẵng
            </div>
            <div className="d-flex mt-5 mb-4">
              <TwitterCircleFilled className="pe-2 fs-4" />
              <InstagramFilled className="pe-2 fs-4" />
              <FacebookFilled className="pe-2 fs-4" />
            </div>
          </div>
        </div>
        <div className="col-7 p-5">
          <div className="d-flex">
            <div className="d-flex col-6 flex-column">
              <label htmlFor="name" className="text-start">Name:</label>
              <input
                className="border rounded mt-3 me-3"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                style={{ height: "35px" }}
              />
            </div>
            <div className="d-flex col-6 flex-column">
              <label htmlFor="email" className="text-start">Email:</label>
              <input
                className="border rounded mt-3 "
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                style={{ height: "35px" }}
              />
            </div>
          </div>
          <div className="d-flex mt-4">
            <div className="d-flex col-6 flex-column">
              <label htmlFor="phone" className="text-start">Phone Number:</label>
              <input
                className="border rounded mt-3 me-3"
                type="number"
                name="phone"
                id="phone"
                style={{ height: "35px" }}
                placeholder="phone"
              />
            </div>
            <div className="d-flex col-6 flex-column">
              <label htmlFor="phone" className="text-start">Room Name:</label>
              <select
                className="form-select form-select mt-3"
                style={{ height: "35px" }}
              >
                <option defaultValue>Choose Room</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="d-flex flex-column mt-3">
            <label htmlFor="feedback" className="text-start">Your Feedback:</label>
            <textarea
              className="border rounded mt-3"
              type="text"
              name="feedback"
              id="feedback"
              style={{ height: "35px" }}
              placeholder="feedback"
            />
          </div>
          <div className="d-flex justify-content-end m-5">
            <button style={{ backgroundColor: "#7C6A46", color:"white" }} >Send Message</button>
          </div>
        </div>
      </div>
      <div className="col-11">
        <h3>VỊ TRÍ TUYỆT VỜI CỦA HOTEL LUXURY ĐÀ NẴNG</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.1213077702782!2d108.2409344745998!3d16.059193639707534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142177ed575157d%3A0xa54585cda5d67ac7!2zOTkgVMO0IEhp4bq_biBUaMOgbmgsIFBoxrDhu5tjIE3hu7ksIFPGoW4gVHLDoCwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1713340764310!5m2!1svi!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
