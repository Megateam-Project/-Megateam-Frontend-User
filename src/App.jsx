import Login from "./pages/Login";
import Signup from "./pages/Signup/Signup";
import "./App.css";
import "./Homepage.css";
import { Header } from "./layouts/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { RoomPage } from "./pages/room/RoomPage";
import { Aboutus } from "./pages/Aboutus";
import { Footer } from "./layouts/Footer";
import  {Profile } from "./pages/Profile";
import { Booking } from "./pages/Booking";
import { Checkout } from "./pages/Checkout";
// import hero from "./assets/hero.png";
function App() {
  return (
    <BrowserRouter>
      <div className="app-container d-flex flex-column">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rooms" element={<RoomPage />} />
            <Route path="/about-us" element={<Aboutus />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/checkout" element={<Checkout />} />
            {/* <Route path="/login" element={<Login />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
