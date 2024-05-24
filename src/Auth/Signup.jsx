import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [password, setPassword] = useState("");
    const [PasswordConfirm, setPasswordConfirm] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log({ email, username, tel, password });
        setEmail("");
        setTel("");
        setUsername("");
        setPassword("");
        setPasswordConfirm("");
    };
    const gotoLoginPage = () => navigate("/");

    return (
        <div className="div_1">
        <img src="src/assets/logo.jpg" alt="Google Logo" className="google_logo " style={{ width: '80px', height: '40px', objectFit: 'cover' }} />
        <form className="div_2" onSubmit={handleSubmit} >
            <div className="container mt-5">
                <label htmlFor="email"><b className ="text_input ">Name</b></label>
                <input type="text" 
                placeholder="Enter Name" 
                className="form-control" 
                name="name" 
                id="name" 
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)} /><br/>

                <label htmlFor="email"><b  >Email</b></label>
                <input type="text" 
                placeholder="Enter Email" 
                className="form-control"
                name="email" 
                id="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)} /><br/>

                <label htmlFor="psw"><b  > Phone</b></label>
                <input type="tel"
                placeholder="Enter Phone" 
                className="form-control" 
                name="tel" 
                id="tel"
                value={tel}
                required
                onChange={(e) => setTel(e.target.value)} /><br/>

                <label htmlFor="psw"><b  >Password</b></label>
                <input type="password"
                placeholder="Enter Password" 
                className="form-control" 
                name="password"
                minLength={8}
                id="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)} /><br/>

                <label htmlFor="psw-repeat"><b>Password_confirm</b ></label>
                <input type="password"
                placeholder="Confirm Password" 
                className="form-control" 
                name="password_confirm" 
                minLength={8}
                id="password_confirm" 
                required 
                value={PasswordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}/><br/>
                <p className="link_account mt-2"> Already have an account?  <a className="nut" href="#" onClick={gotoLoginPage}>Signin</a></p>
            
            </div>
            <button type="submit" className="registerbtn mt-3" onClick={gotoLoginPage} >Register</button>
            
        

        </form>
    </div>
    );
};

export default Signup;