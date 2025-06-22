import React from 'react';
import "./Signup.css";
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { baseUrl } from "../urls";


const Signup = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [message, setMessage] = useState("");

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
            alert("Sign in successfully")
            setMessage(res.data.message || 'Signup successful');
        }
        catch (error) {
            setMessage(error.response?.data?.message || 'Signup failed.');
        }
    };

    return (
        <div className="main">
            <div className='box'>
                <div className="leftBox">
                    <span style={{ fontWeight: "600", fontSize: '34px', color: 'white', paddingLeft: '5px', paddingRight: '5px' }}>Welcome back !!</span>
                    <span style={{ fontSize: '16px', color: 'white', paddingLeft: '5px', textAlign:'center', paddingRight: '5px' }}>Sign in to the world where knowledge blooms !!</span>
                    <Link to="/">
                        <button className="logInButton">
                            Log In
                        </button>
                    </Link>
                </div>
                <div className="rightBox">
                    <span style={{ fontSize: '26px' , marginTop: 10}}>Start now !!</span>
                    <span style={{ fontWeight: "600", fontSize: '36px',marginTop: -20 }}>Create Account</span>
                    <form onSubmit={handleSubmit} className='form'>
                        <input style = {{paddingLeft : 10, fontSize: '14px', marginTop:5}} className='input' type="email" onChange={handleChange} placeholder='Email Address' name="email" value={formData.email} />
                        <input style = {{paddingLeft : 10, fontSize: '14px', marginTop:5}} className='input' type="password" onChange={handleChange} placeholder='Password' name="password" value={formData.password} />
                        <input style = {{paddingLeft : 10, fontSize: '14px', marginTop:5}} className='input' type="password" onChange={handleChange} placeholder='Confirm Password' name="confirmPassword" value={formData.confirmPassword} />
                        <button style = {{marginTop:10}}className="signInButton">Sign Up</button>
                    </form>
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
            </div>
        </div>
    );
};

export default Signup;
