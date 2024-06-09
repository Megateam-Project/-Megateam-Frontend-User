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
<<<<<<< HEAD
import { EditProfile } from "./pages/EditProfile.jsx";

=======
import { NotFound } from "./pages/404/NotFound.jsx";
>>>>>>> 69f36bb077beb8336bd033b4d215fd135fce26fa

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
<<<<<<< HEADgit
          <Route path="/editProfile" element={<EditProfile />} />
          {/* <Route path="/bookingHistory" element={<HomePages />} /> */}
=======
          <Route path="/wishlist" element={<Homepages />} />
          <Route path="/bookingHistory" element={<Homepages />} />
          <Route path="/notFound" element={<NotFound />} />
>>>>>>> 69f36bb077beb8336bd033b4d215fd135fce26fa
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;
