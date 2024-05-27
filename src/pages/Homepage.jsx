import {Our_Facilities,Facilities} from "../data.js";
export function Homepage(){
    return (
    <div className="row slider">
      <header className="header_title ">
        <h3>Our Facilities</h3>
        <p>We offer modern (5-star) hotel facilities for your comfort.</p>
      </header>
      <main>
        <section className="places-category">
          <ul className="places d-flex justify-content-around align-items-end">
            {Our_Facilities.map((facility) => (
              <li key={facility.id}>
                <img src={facility.image.src} alt={facility.image.alt} />
                <h3>{facility.name}</h3>
                <p>{facility.title}</p>
              </li>
            ))}
          </ul>
          <ul className="places d-flex justify-content-around align-items-end">
            {Facilities.map((facility) => (
              <li key={facility.id}>
                <img src={facility.image.src} alt={facility.image.alt} />
                <h3>{facility.name}</h3>
                <p>{facility.title}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
    )
}
