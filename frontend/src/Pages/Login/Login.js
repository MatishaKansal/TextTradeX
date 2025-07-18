import React from 'react';
import "./Login.css";
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';
import Signup from "../Signup/Signup";
import { baseUrl } from "../urls"
// import { postToBackend } from "@/store/fetchdata";

const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [message, setMessage] = useState("");
    
    const navigate = useNavigate();

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
            console.log("Full response:", response)
            const token = response.data.token;
            if (token) {
                localStorage.setItem("token", token);
                console.log("token stored in localStorage:", token)
                alert("Login successful")
                navigate("/");

            } else {
                alert("Login failed: Token not received")
            }
            localStorage.setItem("user", JSON.stringify(response.data.user));
            setMessage('');
            setTimeout(() => {
                navigate("/");
            }, 1000);            

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
                    <form className='form' onSubmit={handleSubmit}>
                        <input style = {{paddingLeft : 10, fontSize: '14px', marginTop:5}} className='input' type="email" onChange={handleChange} placeholder='Email Address' name="email" value={formData.email} />
                        <input style = {{paddingLeft : 10, fontSize: '14px', marginTop:5}} className='input' type="password" onChange={handleChange} placeholder='Password' name="password" value={formData.password} />
                        <button className="LogButton" type="submit">Log In</button>
                    </form>
                    {/* <form onSubmit={handleForgotPassword} className='form'>
                        <button className="Forgot" onSubmit={handleForgotPassword}> Forgot Password</button>
                    </form> */}
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


