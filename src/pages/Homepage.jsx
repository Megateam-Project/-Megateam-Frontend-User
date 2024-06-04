// import React from "react";
import { Our_Facilities, Facilities } from "../data.js";
import { Search } from "./Search.jsx";
import FamousRoom from "./FamousRoom.jsx";
import Room from "../assets/Room.png";
import FeedbackCard from "./Feedback.jsx";
function Homepages() {
  return (
    <div className="row slider mt-3">
      <div className="d-flex justify-content-around">
        <div className="col-11">
          <Search img={Room}/>
        </div> 
      </div>
      <div className="header_title">
        <h3 style={{color:"rgb(129, 73, 6)"}}>Our Facilities</h3>
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

