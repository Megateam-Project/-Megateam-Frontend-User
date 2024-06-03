import React, { useEffect, useState } from "react";
import axios from "axios";
import person from "../assets/person.jpg";
import Ellipse from "../assets/Ellipse.png";
import Group from "../assets/Group.png";
import { Link } from "react-router-dom";

export function Profile() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/profile");
        setUserData(response.data);
      } catch (error) {
        console.error("Failed to fetch profile data", error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div
      className="div_1_profile"
      style={{ marginRight: "px" }}
    >
      <nav className="navbar bg-body-tertiary">
        <div
          className="container-fluid"
          style={{ height: "200px", backgroundColor: "#7C6A46" }}
        >
          <img
            className="image rounded-circle"
            src={Ellipse}
            alt="Your Image"
            style={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
              marginLeft: "750px",
              marginTop: "100px",
            }}
          />
        </div>
      </nav>

      <div
        className="container"
        style={{ marginTop: "200px", marginBottom: "200px" }}
      >
        <div className="row">
          <div className="first_col col-5" style={{ color: "#7C6A46" }}>
            <ul className="list-group ">
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label d-flex justify-content-between align-items-center mb-3">
                  <i className="icon_person fa fa-user fa-3x" aria-hidden="true"></i>
                </label>
                <div className="col-sm-10">
                  <h5>Account</h5>
                  <p className="text-dark">Management your account</p>
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label d-flex justify-content-between align-items-center mb-3">
                  <i
                    className="icon_person fa fa-shield fa-3x"
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
                  <i className="icon_person fa fa-heart fa-3x" aria-hidden="true"></i>
                </label>
                <div className="col-sm-10">
                  <h5>Wishlist</h5>
                  <p className="text-dark">The room you love</p>
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label d-flex justify-content-between align-items-center mb-3">
                  <i className="icon_person fa fa-list fa-3x" aria-hidden="true"></i>
                </label>
                <div className="col-sm-10">
                  <h5>Preference</h5>
                  <p className="text-dark">Set dark mode</p>
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label d-flex justify-content-between align-items-center mb-3">
                  <i className="icon_person fa fa-cog fa-3x" aria-hidden="true"></i>
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
                height:"400px",width:"800px"
              }}
            >
              <a href="#" className="link-underline-primary">
                Edit profile
              </a>
              <hr />
              <div className="col-md-4">
                <img
                  className="image_person rounded-circle"
                  src={Group}
                  alt="Your Image"
                  style={{ width: "150px", height: "150px" }}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="inputName" className="col-sm-2 col-form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="name"
                  value={userData.name}
                  readOnly
                />
                <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Email"
                  value={userData.email}
                  readOnly
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="inputPhone" className="col-sm-2 col-form-label">
                  Phone
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPhone"
                    placeholder="Phone"
                    value={userData.phone}
                    readOnly
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="save mt-3"
                  style={{
                    width: "100px",
                    backgroundColor: "#7C6A46",
                    marginLeft: "400px",
                  }}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
