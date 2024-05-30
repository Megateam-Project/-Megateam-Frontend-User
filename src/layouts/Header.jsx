//import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
export function Header() {
    return (
      <div className=" navbar mt-2 row d-flex justify-content-around">
        <div className="col-1 d-flex justify-content-around">
          <img src={logo} alt="Logo" width="55" />
        </div>
        <div className="col-7 d-flex justify-content-around align-items-end">
          <Link to="/" className="nav-link fs-4">Home</Link>
          <Link to="/rooms" className="nav-link fs-4">Rooms</Link>
          <Link to="/about-us" className="nav-link fs-4 ">About us</Link>
          <Link to="/login" className="nav-link fs-4 btn btn-primary">Login</Link>
          <Link to="/register" className="nav-link fs-4 btn btn-secondary">Register</Link>
        </div>
      </div>
    );
  }
  
