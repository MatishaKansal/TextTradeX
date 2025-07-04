import React from 'react';
import "./UserDetail.css";
import { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import { baseUrl } from "../urls";

const UserDetail = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        age: "",
        state: "",
        city: "",
        mobileNo: ""
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
        console.log(formData)
        if (formData.firstName === "" || formData.lastName === "" || formData.age === "" || formData.state === "" || formData.city === "" || formData.mobileNo === "") {
            setMessage("All fields are mandatory");
            return;
        }

        try {
            const token = localStorage.getItem('token');
            console.log("Token being sent:", token)
            const res = await axios.patch(`${baseUrl}/api/auth/profile`, {
                firstName: formData.firstName,
                lastName: formData.lastName,
                age: formData.age,
                state: formData.state,
                city: formData.city,
                mobileNo: formData.mobileNo
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
            localStorage.setItem("user", JSON.stringify(res.data.user));
            setMessage('');
            setTimeout(() => {
                navigate("/");
            }, 1000);
        }
        catch (error) {
            setMessage(error.response?.data?.message || 'All fields are mandatory');
        }
    };

    return (
        <div className="main">
            <div className='box'>
                <div className="leftside">
                    
                </div>
                <div className="rightside">
                    <span span className="Ltext">Details</span>
                    <form className='form'>
                        <input style={{ paddingLeft: 10, fontSize: '14px', marginTop: 5 }} className='input' type="text" onChange={handleChange} placeholder='First Name' name="firstName" value={formData.firstName} />
                        <input style={{ paddingLeft: 10, fontSize: '14px', marginTop: 5 }} className='input' type="text" onChange={handleChange} placeholder='Last Name' name="lastName" value={formData.lastName} />
                        <input style={{ paddingLeft: 10, fontSize: '14px', marginTop: 5 }} className='input' type="text" onChange={handleChange} placeholder='Age' name="age" value={formData.age} />
                        {/* <input style={{ paddingLeft: 10, fontSize: '14px', marginTop: 5 }} className='input' type="text" onChange={handleChange} placeholder='State' name="state" value={formData.state} /> */}
                              <select style={{ paddingLeft: 9, fontSize: '14px', marginTop: 5 }} className="state" name="state" value={formData.state} onChange={handleChange} required>
                                    <option value="">State</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Ladakh">Ladakh</option>
                                    <option value="Lakshadweep">Lakshadweep</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Puducherry">Puducherry</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West Bengal">West Bengal</option>
                                </select>
                        <input style={{ paddingLeft: 10, fontSize: '14px', marginTop: 5 }} className='input' type="text" onChange={handleChange} placeholder='City' name="city" value={formData.city} />
                        <input style={{ paddingLeft: 10, fontSize: '14px', marginTop: 5 }} className='input' type="tel" onChange={handleChange} placeholder='Mobile Number' name="mobileNo" value={formData.mobileNo} />
                        {
                            (message !== "") ? <span style={{ color: "red", textAlign: "center" }}>{message}</span> : null
                        }
                        <button style={{ marginTop: 10 }} className="signInButton" onClick={handleSubmit}>Register Now</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserDetail;
