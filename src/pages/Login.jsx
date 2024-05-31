import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
       
      });
      const {token, user} = response.data.result;
      console.log(email, password);
      Cookies.set('user', JSON.stringify({ ...user, token }), { expires: 30 });
      alert("success");
      console.log();
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(`Error: ${error.response.data.message}`);
      } else if (error.request) {
        alert("Error: Unable to connect to the server");
      } else {
        alert("An unknown error occurred");
      }
    }
  };

  return (
    <div className="div_1">
      <img
        src="src/assets/logo.jpg"
        alt="Google Logo"
        className="google_logo "
        style={{ width: "70px", height: "40px", objectFit: "cover" }}
      />
      <form className="div_2" onSubmit={handleLoginFormSubmit}>
        <div className="row g-3 align-items-center mt-2">
          <div className="col-auto">
            <label htmlFor="inputEmail" className="col-form-label">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
            </label>
          </div>
          <div className="in col-auto">
            <input
              type="email"
              id="inputEmail"
              placeholder="Enter Email"
              className="form-control"
              name="email"
              required
              value={email}
              onChange={handleEmailChange}
            />
          </div>
        </div>
        <br />
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="inputPassword2" className="col-form-label">
              <i className="fa fa-lock" aria-hidden="true"></i>
            </label>
          </div>
          <div className="in col-auto">
            <input
              type="password"
              id="inputPassword2"
              placeholder="Enter password"
              className="form-control"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        </div>
        <p className="link-opacity-10-hover mt-2">
          Already have an account?
          <Link to="/register" className="red_register">
            Signup
          </Link>
        </p>
        <button type="submit" className="registerbt mt-3">
          Sign in
        </button>
        <h5 className="or mt-3">OR</h5>
        <button type="button" className="account mt-3">
          <img
            src="src/assets/logo_1.jpg"
            alt="Google Logo"
            className="google"
            style={{ width: "30px", height: "30px", objectFit: "cover" }}
          />
          Continue with Google
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
