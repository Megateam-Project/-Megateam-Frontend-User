
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";
import { Header } from "./layouts/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Room } from "./pages/Room";
import { Aboutus } from "./pages/Aboutus";
import { Footer } from "./layouts/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/rooms" element={<Room />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
export default App;

