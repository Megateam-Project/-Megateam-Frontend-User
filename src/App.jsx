import { BrowserRouter , Route, Routes } from "react-router-dom";
import { Header } from "./layouts/Header";
import  HomePages from "./pages/Homepage";
import {Aboutus} from "./pages/Aboutus";
import LoginForm from "./pages/Login";
import Signup from "./pages/Signup/Signup";
import {Profile} from "./pages/Profile";
import "./App.css";
import "./Homepage.css";
import { Footer } from "./layouts/Footer";
import { Booking } from "./pages/Booking";
import { Checkout } from "./pages/Checkout";
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
          <Route path="/booking" element={<Booking />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* <Route path="/bookingHistory" element={<HomePages />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;
