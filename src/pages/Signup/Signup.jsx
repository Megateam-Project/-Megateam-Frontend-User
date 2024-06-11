import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import register from "../../assets/nenregister.jpg";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [create_by, setCreateBy] = useState("");
  const [password_confirmation, setPasswordConfirm] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
  };
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };
  const handleCreateByChange = (e) => {
    setCreateBy(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== password_confirmation) {
      alert("Password incorrect!");
      return;
    }
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/signup", {
        name,
        email,
        phone,
        password,
        password_confirmation,
        role,
        create_by,
      });
      alert("Register successful");
      navigate("/login");
    } catch (error) {
      console.error("Register failed", error);
      alert("Register failed");
    }
  };
  return (
    <div className=" d-flex justify-content-center fs-4" style={{backgroundImage: `url(${register})`}}>
      <form className="border rounded p-4 mb-5 " onSubmit={handleSubmit}  style={{backgroundColor:"white", marginTop: "80px"}}>
        <img
          src="src/assets/logo.jpg"
          alt="Google_Logo"
          className="d-block mx-auto"
          style={{ width: "70px", height: "40px", objectFit: "cover" }}
        />
        <div className="container">
          <div className="mb-3 ">
            <label htmlFor="name" className="form-label">
              <b style={{ color: "#7C6A46" }}> Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className=" mt-2 form-control border-0 border-bottom border-black-1 border-dark  "
              name="name"
              id="name"
              value={name}
              required
              onChange={handleNameChange}
              style={{ width: "500px", border: "none" }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <b style={{ color: "#7C6A46" }}>Email</b>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="mt-2 form-control border-0 border-bottom border-black-1 border-dark"
              name="email"
              id="email"
              value={email}
              required
              onChange={handleEmailChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              <b style={{ color: "#7C6A46" }}>Phone</b>
            </label>
            <input
              type="tel"
              placeholder="Enter Phone"
              className=" mt-2 form-control border-0 border-bottom border-black-1 border-dark"
              name="phone"
              id="phone"
              value={phone}
              required
              onChange={handlePhoneChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <b style={{ color: "#7C6A46" }}>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password "
              className=" mt-2 form-control border-0 border-bottom border-black-1 border-dark"
              name="password"
              minLength={8}
              id="password"
              required
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password_confirm" className="form-label">
              <b style={{ color: "#7C6A46" }}>Confirm Password</b>
            </label>
            <input
              type="password"
              placeholder="Confirm Password "
              className=" mt-2 form-control border-0 border-bottom border-black-1 border-dark"
              name="password_confirm"
              minLength={8}
              id="password_confirm"
              required
              value={password_confirmation}
              onChange={handlePasswordConfirmChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="role" className="form-label">
              <b style={{ color: "#7C6A46" }}>Role</b>
            </label>
            <select
              className=" mt-2 form-select border-0 border-bottom border-black-1 border-dark"
              name="role"
              id="role"
              required
              value={role}
              onChange={handleRoleChange}
              style={{ width: "100%" }}
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="create_by" className="form-label">
              <b style={{ color: "#7C6A46" }}>Create By</b>
            </label>
            <select
              className=" mt-2 form-select border-0 border-bottom border-black-1 border-dark"
              name="create_by"
              id="create_by"
              required
              value={create_by}
              onChange={handleCreateByChange}
              style={{ width: "100%" }}
            >
              <option value="">Select Creator</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>

          <p className=" mt-4 text-center">
            Already have an account?{" "}
            <Link to="/Login" className="text-danger">
              Sign in
            </Link>
          </p>
          <div className="d-flex justify-content-center align-items-center">
          <button type="submit" className="mt-3 btn btn-dark w-75 custom-button mb-3" style={{ backgroundColor: '#7C6A46', height: '45px' }}>
            Sign Up
          </button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
