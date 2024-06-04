//import React from "react";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "js-cookie";
export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const userToken = Cookies.get("token");

    if (userToken) {
      try {
        const userObject = JSON.parse(userToken);
        const { token } = userObject;
        setIsLoggedIn(true);
        setToken(token);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    } else {
      alert("No user cookie found.");
    }
  }, []);

  const logOutUser = () => {
    Cookies.remove("token");
    setIsLoggedIn(false);
    setToken(null);
    navigate("/");
  };

  return (
    <div
      className="navbar shadow -lg mb-2 p-3 row d-flex justify-content-around"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="col-1 d-flex justify-content-around">
        <img src={logo} alt="Logo" width="55" />
      </div>
      <div className="col-7 d-flex justify-content-between align-items-end">
        <Link to="/" className="nav-link fs-5">
          Home
        </Link>
        <Link to="/about-us" className="nav-link fs-5">
          About us
        </Link>
        {!isLoggedIn ? (
          <>
            <Link to="/login" className="nav-link fs-5">
              <button
                className="btn"
                style={{ backgroundColor: "#7C6A46", color: "white" }}
              >
                Login
              </button>
            </Link>
            <Link to="/register" className="nav-link fs-5">
              <button
                className="btn"
                style={{ backgroundColor: "#7C6A46", color: "white" }}
              >
                Register
              </button>
            </Link>
          </>
        ) : (
          <>
            <button className="btn" style={{ backgroundColor: "#7C6A46" }}>
              <Link to="/wishlist" className="" style={{ color: "white" }}>
                Wishlist
              </Link>
            </button>
            <button className="btn" style={{ backgroundColor: "#7C6A46" }}>
              <Link
                to="/bookingHistory"
                className=""
                style={{ color: "white" }}
              >
                Booking History
              </Link>
            </button>
            <button className="btn" style={{ backgroundColor: "#7C6A46" }}>
              <Link to="/profile" className="" style={{ color: "white" }}>
                Profile
              </Link>
            </button>
            <button
              onClick={logOutUser}
              className="btn"
              style={{ backgroundColor: "#7C6A46", color: "white" }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}
