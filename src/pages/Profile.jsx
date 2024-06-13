import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

export function Profile() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    avatar: null,
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const user = JSON.parse(Cookies.get("token") || "{}");
        const token = user.token;
        const response = await axios.get("http://127.0.0.1:8000/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserData({
          name: response.data.name,
          email: response.data.email,
          phone: response.data.phone,
          avatar: response.data.avatar,
        });

        console.log(response.data.avatar);
      } catch (error) {
        console.error("Failed to fetch profile data", error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div
      className="div_1_profile"
      style={{ marginRight: "px", width: "1700px" }}
    >
      <div className="picture-section">
        <div
          className="row mb-5"
          style={{ height: "200px", backgroundColor: "#7C6A46" }}
        ></div>
        <div
          className="position-relative text-center mb-5"
          style={{ marginTop: "-100px" }}
        >
          <img
            className="image_person rounded-circle"
            src={"http://127.0.0.1:8000/" + userData.avatar}
            alt=""
            style={{ width: "200px", height: "200px" }}
          />
        </div>
      </div>

      <div
        className="container"
        style={{ marginTop: "100px", marginBottom: "200px" }}
      >
        <div className="row">
          <div className="first_col col-5" style={{ color: "#7C6A46" }}>
            <ul className="list-group ">
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label d-flex justify-content-between align-items-center mb-3">
                  <i
                    className="icon_person fa fa-user fa-2x"
                    aria-hidden="true"
                  ></i>
                </label>
                <div className="col-sm-10">
                  <h5>Account</h5>
                  <p className="text-dark">Manage your account</p>
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label d-flex justify-content-between align-items-center mb-3">
                  <i
                    className="icon_person fa fa-shield fa-2x"
                    aria-hidden="true"
                  ></i>
                </label>
                <div className="col-sm-10">
                  <h5>Security</h5>
                  <p className="text-dark">Enable two factor authentication</p>
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label d-flex justify-content-between align-items-center mb-3">
                  <Link to="/wishlist">
                    <i
                      style={{ color: "#7C6A46" }}
                      className="icon_person fa fa-heart fa-2x"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </label>
                <div className="col-sm-10">
                  <h5>Wishlist</h5>
                  <p className="text-dark">The room you love</p>
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label d-flex justify-content-between align-items-center mb-3">
                  <Link to="/bookingHistory">
                    <i
                      style={{ color: "#7C6A46" }}
                      className="fa fa-bed fa-2x"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </label>
                <div className="col-sm-10">
                  <h5>Bookings</h5>
                  <p className="text-dark">Manage all your bookings</p>
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label d-flex justify-content-between align-items-center mb-3">
                  <i
                    className="icon_person fa fa-list fa-2x"
                    aria-hidden="true"
                  ></i>
                </label>
                <div className="col-sm-10">
                  <h5>Preference</h5>
                  <p className="text-dark">Set dark mode</p>
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label d-flex justify-content-between align-items-center mb-3">
                  <i
                    className="icon_person fa fa-cog fa-2x"
                    aria-hidden="true"
                  ></i>
                </label>
                <div className="col-sm-10">
                  <h5>Settings</h5>
                  <p className="text-dark">
                    Set notifications and refund destination account
                  </p>
                </div>
              </div>
            </ul>
          </div>
          <div className="row col-6">
            <form
              className="form_profile row g-3 needs-validation"
              noValidate
              style={{
                border: "1px solid rgb(77, 64, 64)",
                borderRadius: "5px",
                height: "350px",
                width: "800px",
              }}
            >
              <Link to="/editprofile" className="link-underline-primary">
                Edit profile{" "}
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
              </Link>
              <hr />
              <div className="col-md-4">
                <img
                  className="image_person rounded-circle"
                  src={"http://127.0.0.1:8000/" + userData.avatar}
                  alt="Your Image"
                  style={{ width: "150px", height: "150px" }}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="inputName" className="col-sm-2 col-form-label">
                  <b style={{ color: "#7C6A46" }}>Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="name"
                  value={userData.name || ""}
                  readOnly
                />
                <label
                  htmlFor="inputEmail"
                  className=" mt-2 col-sm-2 col-form-label"
                >
                  <b style={{ color: "#7C6A46" }}>Email</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Email"
                  value={userData.email || ""}
                  readOnly
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="inputPhone" className="col-sm-2 col-form-label">
                  <b style={{ color: "#7C6A46" }}>Phone</b>
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPhone"
                    placeholder="Phone"
                    value={userData.phone || ""}
                    readOnly
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
