import "./App.css";
import "./Homepage.css";
import { Header } from "./layouts/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Homepages  from "./pages/Homepages";
import { Aboutus } from "./pages/Aboutus";
import { Footer } from "./layouts/Footer";
import { Profile } from "./pages/Profile";
import { Booking } from "./pages/Booking";
import { Checkout } from "./pages/Checkout";
import Login from "./pages/Login";
import Signup from "./pages/Signup/Signup";
import Detail from "./pages/detail";
import { Wishlist } from "./pages/Wishlist";
import { RoomPage } from "./pages/room/RoomPage";
import { NotFound } from "./pages/404/NotFound";
function App() {
  return (
    <BrowserRouter>
      <div className="app-container d-flex flex-column">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Homepages />} />
            <Route path="/rooms" element={<RoomPage />} />
            <Route path="/about-us" element={<Aboutus />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/bookingHistory" element={<Homepages />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/notFound" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>

  );
}
export default App;
