import heroAboutus from "../assets/heroAboutus.png";
import {
  PhoneFilled,
  MailFilled,
  EnvironmentFilled,
  TwitterCircleFilled,
  InstagramFilled,
  FacebookFilled,
} from "@ant-design/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
export function Aboutus() {
  const [rooms, setRooms] = useState([]);
  const [name, setRoomName] = useState("");
  const [users, setUser] = useState(null);
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const appCookieRaw = Cookies.get("token");
  const appCookie = JSON.parse(appCookieRaw ?? "{}");
  const user_id_cookie = appCookie?.userId;

  useEffect(() => {
    if (user_id_cookie) {
      getUserDetail();
    }
    getRooms();
  }, [user_id_cookie]);

  const getUserDetail = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/users/${user_id_cookie}`);
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const getRooms = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/rooms");
      setRooms(response.data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  const handleRoomChange = (e) => {
    setRoomName(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleCreateFeedback = async (e) => {
    e.preventDefault();
    try {
      const feedbackData = {
        user_id: user_id_cookie,
        room_id: name,
        content,
      };
      const response = await axios.post("http://127.0.0.1:8000/api/feedbacks", feedbackData);
      setRoomName("");
      setContent("");
      message.success("Create Successful");
      navigate("/");
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <div className="row d-flex justify-content-around">
      <div className="col-11">
        <img src={heroAboutus} className="mt-4" alt="" style={{ width: "100%" }} />
      </div>
      <div className="text-center mt-5">
        <h3 className="fw-bold" style={{ color: "#7C6A46" }}>
          FEEDBACK
        </h3>
        <p>Any question or remarks? Just write us a message!</p>
      </div>
      <div className="row border rounded col-11 m-4 p-3">
        <div className="col-5 border rounded p-5 text-white" style={{ backgroundColor: "#7C6A46" }}>
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
          <form onSubmit={handleCreateFeedback}>
            <div className="d-flex">
              <div className="d-flex col-6 flex-column">
                <label htmlFor="name" className="text-start">
                  Name:
                </label>
                <input
                  className="border rounded mt-3 me-3"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  style={{ height: "35px" }}
                  value={users?.name ?? ""}
                  readOnly
                />
              </div>
              <div className="d-flex col-6 flex-column">
                <label htmlFor="email" className="text-start">
                  Email:
                </label>
                <input
                  className="border rounded mt-3"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  style={{ height: "35px" }}
                  value={users?.email ?? ""}
                  readOnly
                />
              </div>
            </div>
            <div className="d-flex mt-4">
              <div className="d-flex col-6 flex-column">
                <label htmlFor="phone" className="text-start">
                  Phone Number:
                </label>
                <input
                  className="border rounded mt-3 me-3"
                  type="number"
                  name="phone"
                  id="phone"
                  style={{ height: "35px" }}
                  placeholder="Phone"
                  value={users?.phone ?? ""}
                  readOnly
                />
              </div>
              <div className="d-flex col-6 flex-column">
                <div className="form-item">
                  <label htmlFor="room_id" className="label">
                    Room Name
                  </label>
                  <div className="wrapper">
                    <select
                      className="border rounded mt-3 me-3"
                      id="room_id"
                      name="room_id"
                      onChange={handleRoomChange}
                      style={{ height: "35px" }}
                      value={name}
                    >
                      <option value="" disabled>
                        Select room
                      </option>
                      {rooms.map((room) => (
                        <option key={room.id} value={room.id}>
                          {room.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column mt-3">
              <label htmlFor="feedback" className="text-start">
                Your Feedback:
              </label>
              <textarea
                className="border rounded mt-3"
                name="feedback"
                id="feedback"
                style={{ height: "100px" }}
                placeholder="Feedback"
                value={content}
                onChange={handleContentChange}
              />
            </div>
            <div className="d-flex justify-content-end m-5">
              <button onClick={handleCreateFeedback} type="submit" style={{ backgroundColor: "#7C6A46", color: "white" }}>
                Send Message
              </button>
            </div>
          </form>
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
