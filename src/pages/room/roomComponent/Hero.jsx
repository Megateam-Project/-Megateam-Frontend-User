//import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import hero from "../../../assets/hero.png";
export function Hero() {

  return (
    <div
      className="booking-container"
      style={{ position: "relative", textAlign: "center", color: "black" }}
    >
      <div className="mt-1">
        <img
          src={hero}
          alt="Ảnh minh họa"
          style={{ Width: "500px", height: "600px" }}
        />
      </div>
    </div>
    // </div>
  );
}
