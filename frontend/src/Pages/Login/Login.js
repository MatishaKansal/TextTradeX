import React from 'react';
import "./Login.css";
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Signup from "../Signup/Signup";
import { baseUrl } from "../urls"
// import { postToBackend } from "@/store/fetchdata";

const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${baseUrl}/api/auth/login`, formData);
            alert("Login successfully");

        } catch (error) {
            console.error(error.response?.data || "Login failed");
            alert("Login failed");
        }
    };

    const handleForgotPassword = async () => {
        console.log("Hello");
        try {
            alert("Password change settings");

        } catch (error) {
            console.error(error.response?.data || "Failed to send password reset link");
            alert("Failed to send password reset link");
        }
    };

    return (
        <div className="body">
            <div className='box'>
                 <div className="left">
                  <span className="text">Already have an Account ?</span>
                    <span className = "Ltext">Log In</span>
                    {/* <form onSubmit={handleSubmit} className='form'> */}
                    <form className='form'>
                        <input style = {{paddingLeft : 10, fontSize: '14px', marginTop:5}} className='input' type="email" onChange={handleChange} placeholder='Email Address' name="email" value={formData.email} />
                        <input style = {{paddingLeft : 10, fontSize: '14px', marginTop:5}} className='input' type="password" onChange={handleChange} placeholder='Password' name="password" value={formData.password} />
                        <button className="LogButton" onClick={handleSubmit}>Log In</button>
                    </form>
                    {/* <form onSubmit={handleForgotPassword} className='form'>
                        <button className="Forgot" onSubmit={handleForgotPassword}> Forgot Password</button>
                    </form> */}
                    <div className="break">
                        <hr />
                        <span>OR</span>
                        <hr />
                    </div>
                    <div className="optionBox">
                        <div className="box1">
                            <img src="https://img.icons8.com/color/16/google-logo.png" alt="" />
                            <span>Continue with Google</span>
                        </div>
                        <div className="box1">
                            <img src="https://img.icons8.com/fluency/16/microsoft.png" alt="" />
                            <span>Continue with Microsoft</span>
                        </div>
                    </div> 
                </div>
                 <div className="right">
                    <span style={{ textAlign: 'center', fontWeight: "600", fontSize: '34px', color: 'white', paddingLeft: '5px', paddingRight: '5px' }}>New here ?</span>
                    <span style={{ fontSize: '16px', color: 'white', paddingLeft: '15px', textAlign:'center', paddingRight: '15px' }}>Sign up and discover yourself in a world where knowledge blooms !!</span>
                    <Link to="/Signup">
                        <button className="SignUpButton">
                            Sign Up
                        </button>
                    </Link>
                </div> 

            </div>
        </div>
    );
};


export default Login;
