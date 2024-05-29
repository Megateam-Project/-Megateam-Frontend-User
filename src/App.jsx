import "./App.css";

import { Header } from "./layouts/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Room } from "./pages/Room";
import { Aboutus } from "./pages/Aboutus";
import { Footer } from "./layouts/Footer";
import  {Profile } from "./pages/Profile";


function App() {
  return (
    <BrowserRouter>
      <div className="app-container d-flex flex-column">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/rooms" element={<Room />} />
            <Route path="/about-us" element={<Aboutus />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
