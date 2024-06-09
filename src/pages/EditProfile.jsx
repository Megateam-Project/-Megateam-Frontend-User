import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Ensure correct import

export function EditProfile() {
  const [editData, setEditData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const tokenData = Cookies.get("token");
        if (!tokenData) throw new Error("Token not found");

        const token = JSON.parse(tokenData).token;

        const response = await axios.get("http://127.0.0.1:8000/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setEditData(response.data);
      } catch (error) {
        console.error("Failed to fetch profile data", error);
      }
    };

    fetchProfileData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const tokenData = Cookies.get("token");
      if (!tokenData) throw new Error("Token not found");

      const token = JSON.parse(tokenData).token;
      const decodedToken = jwtDecode(token); // Decode the JWT token
      const userId = decodedToken.sub; // Extract the user ID from the decoded token
      console.log(token);
      console.log(userId);

      const { name, phone, email } = editData;
      const updateData = { name, phone, email };

      const response = await axios.put(
        `http://127.0.0.1:8000/api/users/${userId}`,
        updateData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Profile updated successfully", response.data);
      navigate("/profile");
    } catch (error) {
      console.error("Failed to update profile data", error);
    }
  };

  return (
    <div className="mt-5 container justify-content-center" style={{ width: "30vw" }}>
      <form onSubmit={handleSubmit} className="form bg-white shadow p-4 rounded w-400 mt-5 mb-5">
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            name="name"
            placeholder="Name"
            value={editData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPhone" className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            id="inputPhone"
            name="phone"
            placeholder="Phone"
            value={editData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            name="email"
            placeholder="Email"
            value={editData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{ background: "#7C6A46" }}>
          Save
        </button>
      </form>
    </div>
  );
}
