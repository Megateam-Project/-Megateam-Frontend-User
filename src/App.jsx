import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Aboutus } from "./pages/Aboutus";
import { RoomPage } from "./pages/room/RoomPage";
import "./App.css";
import "./Homepage.css";
import { Header } from "./layouts/Header";
import Homepages from "./pages/Homepages";
import { Footer } from "./layouts/Footer";
import Booking from "./pages/Booking";
import { Profile } from "./pages/Profile";
import { Checkout } from "./pages/Checkout";
import Login from "./pages/Login";
import Signup from "./pages/Signup/Signup";
import Detail from "./pages/Detail";
import { Wishlist } from "./pages/Wishlist";
import { NotFound } from "./pages/404/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container d-flex flex-column">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Homepages />} />
            <Route path="/about-us" element={<Aboutus />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/booking/:roomId" element={<Booking />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/rooms" element={<RoomPage />} />
            <Route path="/detail/:roomId" element={<Detail />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/bookingHistory" element={<Homepages />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
