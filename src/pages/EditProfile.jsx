import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Ensure correct import

export function EditProfile() {
  const [editData, setEditData] = useState({
    name: "",
    email: "",
    phone: "",
    avatar: null,
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

        setEditData({
          ...response.data,
          avatar:response.data.avatar,
        });
      } catch (error) {
        console.error("Failed to fetch profile data", error);
      }
    };

    fetchProfileData();
  }, []);


  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "avatar" && files.length > 0) {
      setEditData((prevData) => ({
        ...prevData,
        avatar: files[0],
      }));
    } else {
      setEditData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }}

  console.log(editData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const tokenData = Cookies.get("token");
      if (!tokenData) throw new Error("Token not found");
  
      const token = JSON.parse(tokenData).token;
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.sub; 
      const { name, phone, email, avatar} = editData;
      const formData = new FormData();
      if (name) formData.append("name", name);
      if (phone) formData.append("phone", phone);
      if (email) formData.append("email", email);
      if (avatar) formData.append("avatar", avatar);
      formData.append("_method", "PUT");
  
      for (let pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }
  
      const response = await axios.put(
        `http://127.0.0.1:8000/api/users/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${token}` 
          },
        }
      );
  
      if (response.status === 200) {
        console.log("Profile updated successfully", response.data);
        navigate("/profile");
      } 
    } catch (error) {
      console.error("Failed to update profile data", error);
    } 
  };
  

  return (
    <div
      className="mt-5 container justify-content-center"
      style={{ width: "30vw" }}
    >
      <form
        onSubmit={handleSubmit}
        className="form bg-white shadow p-4 rounded w-400 mt-5 mb-5"
      >
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
          <b style={{ color: "#7C6A46" }}>Name</b> 
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            name="name"
            placeholder="Name"
            value={editData?.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPhone" className="form-label">
          <b style={{ color: "#7C6A46" }}>Phone</b> 
          </label>
          <input
            type="text"
            className="form-control"
            id="inputPhone"
            name="phone"
            placeholder="Phone"
            value={editData?.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">
          <b style={{ color: "#7C6A46" }}>Email</b> 
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            name="email"
            placeholder="Email"
            value={editData?.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputAvatar" className="form-label">
          <b style={{ color: "#7C6A46" }}>Avatar</b> 
          </label>
          <input
            type="file"
            className="form-control"
            id="inputAvatar"
            name="avatar"
            // value={editData.avatar}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-3"
          style={{ background: "#7C6A46" }}
        >
          Back
        </button>
        <button
          type="submit"
          className="btn btn-primary mt-3 "
          style={{ background: "#7C6A46", marginLeft: "300px"}}
        >
           Save 
        </button>
      </form>
    </div>
  );
}
