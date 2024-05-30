import "./App.css";

import { Header } from "./layouts/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { RoomPage } from "./pages/rooms/RoomPage";
import { Aboutus } from "./pages/Aboutus";
import { Footer } from "./layouts/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container d-flex flex-column">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/rooms" element={<RoomPage />} />
            <Route path="/about-us" element={<Aboutus />} />
            {/* <Route path="/login" element={<Login />} /> */}
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
