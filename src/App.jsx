import { BrowserRouter , Route, Routes } from "react-router-dom";
import { Header } from "./layouts/Header";
import  HomePages from "./pages/Homepage";
import {Aboutus} from "./pages/Aboutus";
import LoginForm from "./pages/Login";
import Signup from "./pages/Signup/Signup";
import {Profile} from "./pages/Profile";
import { RoomPage } from "./pages/room/RoomPage";
import "./App.css";
import "./Homepage.css";
import { Footer } from "./layouts/Footer";
import  Booking from "./pages/Booking";
import { Checkout } from "./pages/Checkout";
import { NotFound } from "./pages/404/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
    <div className="app-container d-flex flex-column">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={< HomePages />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<LoginForm  />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/booking/:roomId" element={<Booking />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/rooms" element={<RoomPage />} />
          {/* <Route path="/wishlist" element={<HomePages />} />
          <Route path="/bookingHistory" element={<HomePages />} /> */}
          <Route path="/notFound" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;
