// import React from "react";
import { Our_Facilities, Facilities } from "../data.js";
import { Search } from "./Search.jsx";
import FamousRoom from "./FamousRoom.jsx";
import Room from "../assets/Room.png";
import FeedbackCard from "./Feedback.jsx";
export function Homepages() {
  return (
    <div className="row slider mt-3">
      <div className="row main_title">
        <div>
          <Search img={Room}/>
        </div> 
      </div>
      <div className="header_title">
        <h3>Our Facilities</h3>
        <p>We offer modern (5-star) hotel facilities for your comfort.</p>
      </div>
      <main>
        <section className="places-category">
          <ul className="places d-flex justify-content-around align-items-end">
            {Our_Facilities.map((facility) => (
              <li key={facility.id}>
                <img src={facility.image.src} alt={facility.image.alt} />
                <h3>{facility.name}</h3>
              </li>
            ))}
          </ul>
          <ul className="places d-flex justify-content-around align-items-end">
            {Facilities.map((facility) => (
              <li key={facility.id}>
                <img src={facility.image.src} alt={facility.image.alt} />
                <h3>{facility.name}</h3>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <div>
        <FamousRoom/>
      </div>
      <dir>
        <FeedbackCard/>
      </dir>
    </div>
  );
}

export default Homepages;
