import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link, useLocation } from "react-router-dom";

export function EditProfile() {
  const location = useLocation();
  const { userData } = location.state || {};

  const [editData, setEditData] = useState({
    name: userData?.name || "",
    email: userData?.email || "",
    phone: userData?.phone || "",
  });

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
      const user = JSON.parse(Cookies.get("user") || "{}");
      const token = user.token;

      await axios.post("http://127.0.0.1:8000/api/profile/update", editData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Optionally redirect or give feedback to the user
    } catch (error) {
      console.error("Failed to update profile", error);
    }
  };

  return (
    <div className="container justify-content-center" style={{ width: "30vw" }}>
      <form onSubmit={handleSubmit} className="form bg-white shadow p-4 rounded w-400 mt-5 mb-5">
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            name="name"
            placeholder="name"
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
            type="text"
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
