import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
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
  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
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
        avatar,
        role,
        create_by,
      });
      // console.log(name, email, password);
      alert("Register successful");
      navigate("/login");
    } catch (error) {
      console.error("Register failed", error);
      alert("Register failed");
    }
  };
  return (
    <div className="div_1 mt-5">
      <img
        src="src/assets/logo.jpg"
        alt="Google_Logo"
        className="googlelogo"
        style={{ width: "70px", height: "40px", objectFit: "cover" }}
      />
      <form className="div_2" onSubmit={handleSubmit}>
        <div className="container mt-3">
          <label htmlFor="name">
            <b className="text_input">Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            className="form-control"
            name="name"
            id="name"
            value={name}
            required
            onChange={handleNameChange}
          />
          <br />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            className="form-control"
            name="email"
            id="email"
            value={email}
            required
            onChange={handleEmailChange}
          />
          <br />

          <label htmlFor="phone">
            <b>Phone</b>
          </label>
          <input
            type="tel"
            placeholder="Enter Phone"
            className="form-control"
            name="phone"
            id="phone"
            value={phone}
            required
            onChange={handlePhoneChange}
          />
          <br />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            className="form-control"
            name="password"
            minLength={8}
            id="password"
            required
            value={password}
            onChange={handlePasswordChange}
          />
          <br />

          <label htmlFor="password_confirm">
            <b>Confirm Password</b>
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="form-control"
            name="password_confirm"
            minLength={8}
            id="password_confirm"
            required
            value={password_confirmation}
            onChange={handlePasswordConfirmChange}
          />
          <br />
          <label htmlFor="avatar">
            <b>Avatar</b>
          </label>
          <input
            type="file"
            placeholder="Upload Avatar"
            className="form-control"
            name="avatar"
            id="avatar"
            required
            value={avatar}
            onChange={handleAvatarChange}
          />
          <br />
          <label htmlFor="role">
            <b>Role</b>
          </label>
          <select
            className="form-control"
            name="role"
            id="role"
            required
            value={role}
            onChange={handleRoleChange}
            style={{ width: '500px' }}
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
          <br />

          <label htmlFor="create_by">
            <b>Create By</b>
          </label>
          <select
            className="form-control"
            name="create_by"
            id="create_by"
            required
            value={create_by}
            onChange={handleCreateByChange}
            style={{ width: '500px' }}
          >
            <option value="">Select Creator</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
          <br />

          <p className="link_account mt-2">
            Already have an account?{" "}
            <Link to="/Login" className="nut">
              Signin
            </Link>
          </p>
          <button type="submit" className="registerbtn mt-3">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
