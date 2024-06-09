import Ellipse from "../assets/Ellipse.png";
import ControlledCarousel from "./ControlledCarousel";
import { Spinner, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
export function Wishlist() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {userId} = useParams();
  useEffect(() => {
    const appCookieRaw = Cookies.get('token');
    const appCookie = JSON.parse(appCookieRaw ?? "")
    const user_id_cookie = appCookie?.userId;
    const getFavorites = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:8000/api/user/${user_id_cookie}/favorite-rooms`);
        setRooms(res.data);
      } catch (error) {
        console.error("Error fetching rooms data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getFavorites();
  }, [userId]);
  

  if (loading) {
    return (
      <div className="text-center my-4">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center my-4">
        <Alert variant="danger">{error}</Alert>
      </div>
    );
  }
  return (
    <>
      <div className="picture-section">
        <div
          className="row mb-5"
          style={{ height: "200px", backgroundColor: "#7C6A46" }}
        ></div>
        <div
          className="position-relative text-center mb-5"
          style={{ marginTop: "-80px" }}
        >
          <img
            src={Ellipse}
            alt=""
            style={{ width: "200px", height: "200px" }}
          />
        </div>
      </div>
      <div className="d-flex flex-column ps-5">
        <h2 className="mb-4">Your wishlist</h2>
        <h3>Rooms you love</h3>
        <p className="mb-4">Your Wishlist, Your Dreams Within Reach!</p>
      </div>

      <div className="mb-5">
        <ControlledCarousel rooms={rooms.slice(0, 3)} />
      </div>
    </>
  );
}
