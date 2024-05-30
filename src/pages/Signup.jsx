import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirm] = useState("");
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/signup', {
        name,
        email,
        phone,
        password,
        password_confirmation,
      });
      console.log("Register successful");
      navigate("/login");
    } catch (error) {
      console.error("Register failed", error);
      alert("Register failed");
    }
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setPasswordConfirm("");
  };

  return (
    <div className="div_1">
      <img src="src/assets/logo.jpg" alt="Google_Logo" className="googlelogo" style={{ width: '70px', height: '40px', objectFit: 'cover' }} />
      <form className="div_2" onSubmit={handleSubmit}>
        <div className="container mt-3">
          <label htmlFor="name"><b className="text_input">Name</b></label>
          <input
            type="text"
            placeholder="Enter Name"
            className="form-control"
            name="name"
            id="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          /><br />

          <label htmlFor="email"><b>Email</b></label>
          <input
            type="email"
            placeholder="Enter Email"
            className="form-control"
            name="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          /><br />

          <label htmlFor="phone"><b>Phone</b></label>
          <input
            type="tel"
            placeholder="Enter Phone"
            className="form-control"
            name="phone"
            id="phone"
            value={phone}
            required
            onChange={(e) => setPhone(e.target.value)}
          /><br />

          <label htmlFor="password"><b>Password</b></label>
          <input
            type="password"
            placeholder="Enter Password"
            className="form-control"
            name="password"
            minLength={8}
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br />

          <label htmlFor="password_confirm"><b>Confirm Password</b></label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="form-control"
            name="password_confirm"
            minLength={8}
            id="password_confirm"
            required
            value={password_confirmation}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          /><br />

          <p className="link_account mt-2">Already have an account? <a className="nut" href="#" onClick={handleLoginClick}>Signin</a></p>
        </div>
        <button type="submit" className="registerbtn mt-3">Register</button>
      </form>
    </div>
  );
};

export default Signup;
