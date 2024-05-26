import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit  = async () => {
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/login', {
            email,
            password,
          });
          if (response.data.success) {
            // Lưu token hoặc thông tin đăng nhập vào localStorage hoặc cookie
            localStorage.setItem('authToken', response.data.token);
               // Chuyển hướng đến trang chính
               navigate("/");
          } else {
            // Hiển thị thông báo lỗi
            alert(response.data.message);
          }
      
          setPassword("");
          setEmail("");
        } catch (error) {
            // Xử lý lỗi
            if (error.response) {
              // Lỗi từ phía server
              alert(`Error: ${error.response.data.message}`);
            } else if (error.request) {
              // Lỗi kết nối
              alert('Error: Unable to connect to the server');
            } else {
              // Lỗi khác
              alert('An unknown error occurred');
            }
        }
      };
    

    return (
        <div className="div_1">
          <img src="src/assets/logo.jpg" alt="Google Logo" className="google_logo " style={{ width: '70px', height: '40px', objectFit: 'cover' }} />
          <form className="div_2" onSubmit={handleSubmit}>
            <div className="row g-3 align-items-center mt-2">
              <div className="col-auto">
                <label htmlFor="inputEmail"
                className="col-form-label">
                    <i class="fa fa-envelope-o" 
                    aria-hidden="true"></i></label>
              </div>
              <div className="col-auto">
                <input type="text" 
                id="inputEmail" 
                placeholder="Enter Email" 
                className="form-control" 
                name="email" 
                required
                onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <br />
            <div className="row g-3 align-items-center">
              <div className="col-auto">
                <label htmlFor="inputPassword2" 
                className="col-form-label" >
                    <i class="fa fa-lock" aria-hidden="true">
                        </i></label>
              </div>
              <div className="col-auto">
                <input type="password" 
                id="inputPassword2" 
                placeholder="Enter password" 
                className="form-control" 
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
            <p className="link-opacity-10-hover mt-2
            ">Already have an account?<a href="#" className="red_register"  onClick={handleSubmit}>Regiter</a></p>

            <button type="submit " className="registerbt mt-3 " onClick={handleSubmit} >Sign in</button>
            <h5 className="or mt-3">OR</h5>
            <button type="submit" className="account mt-3 ">
              <img src="src/assets/logo_1.jpg" alt="Google Logo" className="google " style={{ width: '30px', height: '30px', objectFit: 'cover' }} />
              Continue with Google
            </button>
          </form>
        </div>
    );
};

export default Login;