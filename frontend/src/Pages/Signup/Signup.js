import React from 'react';
import "./Signup.css";
import { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import { baseUrl } from "../urls";
import UserDetail from "../UserDetail/UserDetail";


const Signup = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
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

        if (formData.password !== formData.confirmPassword) {
            setMessage("Passwords do not match");
            return;
        }

        try {
            const res = await axios.post(`${baseUrl}/api/auth/register`, {
                email: formData.email,
                password: formData.password,
            });
            console.log("Signup response:", res.data);
            const token = res.data.token;
            if (token) {
            localStorage.setItem("token", token);
            console.log("Stored token:", token);
            } else {
            console.warn("No token received");
            }
            alert("Sign in successfully")
            setMessage("");
            setTimeout(() => {
                navigate("/UserDetail");
            }, 1000);
        }
        catch (error) {
            setMessage('Signup failed.');
        }
    };


    return (
        <div className="main">
            <div className='box'>
                <div className="leftBox">
                    <span style={{ textAlign: 'center', fontWeight: '600', fontSize: '30px', color: 'white', paddingLeft: '5px', paddingRight: '5px' }}>Welcome back !!</span>
                    <span style={{ fontSize: '16px', color: 'white', paddingLeft: '15px', textAlign:'center', paddingRight: '15px' }}>Sign in to the world where knowledge blooms !!</span>
                    <Link to="/Login">
                        <button className="logInButton">
                            Log In
                        </button>
                    </Link>
                </div>
                <div className="rightBox">
                    <span className='text'>Start now !!</span>
                    <span span className = "Ltext">Create Account</span>
                    <form className='form'>
                        <input style = {{paddingLeft : 10, fontSize: '14px', marginTop:5}} className='input' type="email" onChange={handleChange} placeholder='Email Address' name="email" value={formData.email} />
                        <input style = {{paddingLeft : 10, fontSize: '14px', marginTop:5}} className='input' type="password" onChange={handleChange} placeholder='Password' name="password" value={formData.password} />
                        <input style = {{paddingLeft : 10, fontSize: '14px', marginTop:5}} className='input' type="password" onChange={handleChange} placeholder='Confirm Password' name="confirmPassword" value={formData.confirmPassword} />
                        {
                            (message !== "") ? <span style={{ color: "red", textAlign: "center" }}>{message}</span> : null
                        }
                        <button style = {{marginTop:10}}className="signInButton" onClick={handleSubmit}>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;