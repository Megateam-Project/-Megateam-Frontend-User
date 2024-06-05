import "./App.css";
import "./Homepage.css";
import { Header } from "./layouts/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepages } from "./pages/Homepage";
import { Aboutus } from "./pages/Aboutus";
import { Footer } from "./layouts/Footer";
import { Profile } from "./pages/Profile";
import { Booking } from "./pages/Booking";
import { Checkout } from "./pages/Checkout";
import Login from "./pages/Login";
import Signup from "./pages/Signup/Signup";
import Detail from "./pages/Detail";
import { NotFound } from "./pages/404/NotFound.jsx";
// import hero from "./assets/hero.png";
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
            <Route path="/Login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/wishlist" element={<Homepages />} />
            <Route path="/bookingHistory" element={<Homepages />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/notFound" element={<NotFound />} />
            {/* <Route path="/login" element={<Login />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
