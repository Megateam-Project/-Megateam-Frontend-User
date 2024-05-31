import { Link } from "react-router-dom";
// import './Detail/DetailRoom.jsx' ;
export function Room() {
  return (
    <div>
      Room
      <div>
        <h1>Single room </h1>
        <button >
        <Link to="/detail" className="nav-link fs-4">Show detail</Link>
        </button>
      </div>
    </div>
  );
}
