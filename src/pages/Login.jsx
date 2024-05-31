import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/Logo.jpg";
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
      const { token, user } = response.data.result;
      Cookies.set("user", JSON.stringify({ ...user, token }), { expires: 30 });
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
    <div className=" mb-5 d-flex justify-content-center fs-4" style={{marginTop: "100px"}}>
      <form className="" onSubmit={handleLoginFormSubmit}>
        <div className=" d-flex justify-content-center">
          <img src={logo} alt="Google Logo" className="" />
        </div>
        <div className="row g-3 align-items-center mt-2">
          <div className="col-auto">
            <label htmlFor="inputEmail" className="col-form-label" >
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
            </label>
          </div>
          <div className="col-auto">
            <input
              type="email"
              id="inputEmail"
              placeholder="Enter Email"
              className="form-control border-bottom border-dark "
              name="email"
              required
              value={email}
              onChange={handleEmailChange}
              style={{ width: "500px", border: "none" }}
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
          <div className="col-auto">
            <input
              type="password"
              id="inputPassword2"
              placeholder="Enter password"
              className="form-control border-bottom border-dark"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              style={{ width: "500px", border: "none" }}
            />
          </div>
        </div>
        <p className=" mt-3 text-center small">
          Already have an account? 
          <Link to="/register" className="text-danger">
            Sign up
          </Link>
        </p>
        <div className=" d-flex justify-content-center align-items-center">
          <button
            type="submit"
            className="mt-3 btn btn-dark w-100 custom-button" style={{ backgroundColor: '#7C6A46',height: '45px' }}
          >
            Sign in
          </button>
        </div>
        <h5 className="text-center mt-3 "style={{ color: '#7C6A46' }}>OR</h5>
        <div className="d-flex justify-content-center">
          <button type="button" className="mt-3 btn btn-dark w-100 text-black" style={{ backgroundColor: 'white'}}>
            <img
              src="src/assets/logo_1.jpg"
              alt="Google Logo"
              className="google"
              style={{ width: "30px", height: "30px", objectFit: "cover" }}
            />
            Continue with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;