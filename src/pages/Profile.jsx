import React from "react";
import person from "../assets/person.jpg";
import Ellipse from "../assets/Ellipse.png";
import Group from "../assets/Group.png";



import { Link } from "react-router-dom";

export function Profile() {
  return (
    <div className="div_1_profile">
      <nav className="navbar bg-body-tertiary">
        <div
          className="container-fluid"
          style={{ height: "200px", backgroundColor: "#7C6A46" }}
        >
          <img
            className="image rounded-circle mr-4"
            src={Ellipse}
            alt="Your Image"
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
        </div>
      </nav>

      <div className="container ">
        <div className="row">
          <div className="first_col col-5">
            <ul className="list-group ">
              <div className="mb-3 row">
                <label
                  className="col-sm-2 col-form-label d-flex justify-content-between align-items-center mb-3"
                >
                  <i className="icon_person fa fa-user" aria-hidden="true"></i>
                </label>
                <div className="col-sm-10">
                  <h5>Account</h5>
                  <p className="p_text">Management your account </p>
                </div>
              </div>                                                                        
              <div className="mb-3 row">
                <label
                  className="col-sm-2 col-form-label d-flex justify-content-between align-items-center mb-3"
                >
                  <i class="icon_person fa fa-shield" aria-hidden="true"></i>
                </label>
                <div className="col-sm-10">
                  <h5>Security</h5>
                  <p className="p_text">Enable two factor authentication</p>
                </div>
              </div>
              {/* <div className="mb-3 row">
                <label
                  className="col-sm-2 col-form-label d-flex justify-content-between align-items-center mb-3"
                >
                  <i className="icon_person fa fa-user" aria-hidden="true"></i>
                </label>
                <div className="col-sm-10">
                  <h5>Bookings</h5>
                  <p className="p_text">manage all your bookings</p>
                </div>
              </div> */}
              <div className="mb-3 row">
                <label
                  className="col-sm-2 col-form-label d-flex justify-content-between align-items-center mb-3"
                >
                  <i class="icon_person fa fa-heart" aria-hidden="true"></i>
                </label>
                <div className="col-sm-10">
                  <h5>Wishlist</h5>
                  <p className="p_text">The room you love</p>
                </div>
              </div>
              <div className="mb-3 row">
                <label
                  className="col-sm-2 col-form-label d-flex justify-content-between align-items-center mb-3"
                >
                  <i class="icon_person fa fa-list" aria-hidden="true"></i>
                </label>
                <div className="col-sm-10">
                  <h5>Preference</h5>
                  <p className="p_text">Set dark mode</p>
                </div>
              </div>
              <div className="mb-3 row">
                <label
                  className="col-sm-2 col-form-label d-flex justify-content-between align-items-center mb-3"
                >
                  <i class="icon_person fa fa-cog" aria-hidden="true"></i>
                </label>
                <div className="col-sm-10">
                  <h5>Settings</h5>
                  <p className="p_text">
                    Set notifications and refund destination account
                  </p>
                </div>
              </div>
            </ul>
          </div>
          <div className=" row col-6">
            <form className=" form_profile row g-3 needs-validation" novalidate>
              <a href="#" class="link-underline-primary">
                Edit profile
              </a>
              <hr />
              {/* hình ảnh  */}
              <div className="col-md-4">
                <img
                  className="image_person rounded-circle mr-4"
                  src={Group}
                  alt="Your Image"
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="inputName" className="col-sm-2 col-form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputname"
                  placeholder="name"
                />
                <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Email"
                />
              </div>
              <div className="col-md-4">
                <label
                  htmlFor="inputEmail"
                  className="col-sm-2 col-form-label"
                >
                  Phone
                </label>
                <div className="col-sm-10">
                  <input
                    type="phone"
                    className="form-control"
                    id="inputPhone"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div>
                <button type="submit" className="save mt-3 ">
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
