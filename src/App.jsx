
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Sign_in/Login";
import Signup from "./Auth/Signup"; 
import "./Auth/Signup.css";
import "./Sign_in/Login.css";



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Signup />} />
          
            </Routes>
        </BrowserRouter>
    );
}

export default App;