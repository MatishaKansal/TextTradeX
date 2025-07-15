import React, { useState } from 'react';
import './Sell.css';
import { RiArrowDropDownLine } from "react-icons/ri";
import axios from 'axios';
import Banner from "../../Components/Banner/Banner"
import Footer from "../../Components/Footer/Footer"
import { useLocation } from 'react-router-dom';


const Sell = () => {
    const [data, setData] = useState({
        title: "",
        description: "",
        price: "",
        board: "",
        Class: "",
        subject: "",
        author: "",
        medium: "",
        images: [],
    });

    const handleChange = (e) => {
        setData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    // Image uploading

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length === 0 || files.length > 4) {
            alert("Please select at least 1 and at most 4 images.");
            e.target.value = null; 
            return;
        }
        setData(prev => ({
            ...prev,
            images: files
        }));
    };

    const toBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        })

    // on pressing upload

    const handleSubmit = async () => {
        const token = localStorage.getItem('token');
        const formData = new FormData();

        // Append all fields except images
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('price', data.price);
        formData.append('board', data.board);
        formData.append('Class', data.Class);
        formData.append('subject', data.subject);
        formData.append('author', data.author);
        formData.append('medium', data.medium);

        // Append images (as files)
        for (let i = 0; i < data.images.length; i++) {
            formData.append('images', data.images[i]);
        }

        try {
            const res = await axios.post("http://localhost:8080/api/books/sell", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert("Data sent successfully!");
        } catch (err) {
            console.error("Error uploading:", err);
        }
    };

    // Getting name instead of register

    const location = useLocation();
    const { firstname } = location.state || {};

    // Price

    const [priceType, setPriceType] = useState("");
    const [customPrice, setCustomPrice] = useState("");

    const handleSelectChange = (e) => {
        const selected = e.target.value;
        setPriceType(selected);

        if (selected !== "Paid") {
        setCustomPrice("");
        setData(prev => ({
            ...prev,
            price: e.target.value,
        }));
        }
    };

    // Board
    const [board, setBoard] = useState("");
    const [customBoard, setCustomBoard] = useState("");

    const handleBoardChange = (e) => {
        const selected = e.target.value;
        setBoard(selected);
        if (selected !== "Others") {
        setCustomBoard("");
        setData(prev => ({
            ...prev,
            board: e.target.value,
        }));
        }
    };

    // Class
    const [classNo, setClassNo] = useState("");

    const handleClassChange = (e) => {
        setClassNo(e.target.value);
        setData(prev => ({
            ...prev,
            Class: e.target.value,
        }));
    };

    // Subject
    const [subject, setSubject] = useState("");
    const [customSubject, setCustomSubject] = useState("");

    const handleSubjectChange = (e) => {
        const selected = e.target.value;
        setSubject(selected);
        if (selected !== "Others") {
        setCustomSubject("");
        setData(prev => ({
            ...prev,
            subject: e.target.value,
        }));
        }
    };    



    return (
        <div>
        <Banner firstname={firstname} />
        <div className="screen">
            <div className="mainBox">
                <div className='sell_header'>
                    <span>TRADE IN</span>
                </div>
                <div className='center'>
                    <form className="sell_form">
                        <div className="container">
                            <span className="label">Book name :</span>
                            <input type="text" name="title" onChange={handleChange} value={data.title} maxLength={70} className='sell_input' />
                        </div>
                        <div className="container">
                            <span className="label">Board :</span>
                            <select
                                name="board"
                                value={board}
                                onChange={handleBoardChange}
                                className="sell_input"
                                style={{ borderWidth: '2px'}}
                            >
                                <option value="" disabled>
                                -- Select Board --
                                </option>
                                <option value="CBSE">CBSE</option>
                                <option value="CISCE">CISCE</option>
                                <option value="IB">IB (International Baccalaureate)</option>
                                <option value="ICSE">ICSE</option>
                                <option value="IGCSE">IGCSE</option>
                                <option value="NIOS">NIOS</option>
                                <option value="State Board">State Board</option>
                                <option value="Others">Others</option>
                            </select>
                            {board === "Others" && (
                            <input
                            type="text"
                            placeholder="Enter Board Name"
                            value={customBoard}
                            onChange={(e) => {
                                setCustomBoard(e.target.value);
                                setData(prev => ({ ...prev, board: e.target.value }));
                            }}
                            className="sell_input"
                            />
                        )}
                        </div>

                        <div className="container">
                            <span className="label">Class :</span>
                            <select
                                value={classNo}
                                onChange={handleClassChange}
                                className="sell_input"
                                style={{ borderWidth: '2px'}}
                            >
                                <option value="" disabled>
                                -- Select Class --
                                </option>
                                <option value="Pre-Nursery">Pre-Nursery</option>
                                <option value="Nursery">Nursery</option>
                                <option value="KG">KG</option>
                                <option value="I">I</option>
                                <option value="II">II</option>
                                <option value="III">III</option>
                                <option value="IV">IV</option>
                                <option value="V">V</option>
                                <option value="VI">VI</option>
                                <option value="VII">VII</option>
                                <option value="VIII">VIII</option>
                                <option value="IX">IX</option>
                                <option value="X">X</option>
                                <option value="XI">XI</option>
                                <option value="XII">XII</option>
                            </select>
                        </div>

                        <div className="container">
                            <span className="label">Subject :</span>
                            <select
                                name="subject"
                                value={subject}
                                onChange={handleSubjectChange}
                                className="sell_input"
                                style={{ borderWidth: '2px'}}
                            >
                                <option value="" disabled>
                                -- Select Subject --
                                </option>
                                <option value="Accounts">Accounts</option>
                                <option value="Biology">Biology</option>
                                <option value="Chemistry">Chemistry</option>
                                <option value="Civics">Civics</option>
                                <option value="Combined Subjects">Combined Subjects</option>
                                <option value="Computer">Computer</option>
                                <option value="Economics">Economics</option>
                                <option value="English">English</option>
                                <option value="EVS">EVS</option>
                                <option value="Hindi">Hindi</option>
                                <option value="History">History</option>
                                <option value="Maths">Maths</option>
                                <option value="Others">Others</option>
                                <option value="Physical Education">Physical Education</option>
                                <option value="Physics">Physics</option>
                                <option value="Political Science">Political Science</option>
                            </select>
                            {subject === "Others" && (
                            <input
                            type="text"
                            placeholder="Enter Subject Name"
                            value={customSubject}
                            onChange={(e) => {
                                setCustomBoard(e.target.value);
                                setData(prev => ({ ...prev, subject: e.target.value }));
                            }}
                            className="sell_input"
                            />
                        )}
                        </div>

                        <div className="container">
                        <span className="label">Price (in ₹):</span>
                        <select
                            name="price"
                            style={{borderWidth: '2px'}}
                            value={priceType}
                            onChange={handleSelectChange}
                            className="sell_input">
                            <option value="" disabled>
                            -- Custom Price --
                            </option>
                            <option value="Paid">Paid</option>
                            <option value="Free">Free</option>
                        </select>

                        {priceType === "Paid" && (
                            <input
                            type="text"
                            placeholder="Enter price"
                            value={customPrice}
                            onChange={(e) => {
                                setCustomPrice(e.target.value);
                                setData(prev => ({ ...prev, price: e.target.value }));
                            }}
                            className="sell_input"
                            />
                        )}
                        </div>


                        <div className="container">
                            <span className="label">Medium :</span>
                            <input type="text" className='sell_input' name="medium" onChange={handleChange} value={data.medium} />
                        </div>

                        <div className="container">
                            <span className="label">Author (optional) :</span>
                            <input type="text" className='sell_input' name="author" onChange={handleChange} value={data.author} />
                        </div>

                        <div className="container">
                            <span className="label" >Description :</span>
                            <textarea type="text" 
                                    name="description"  
                                    wrap="soft" 
                                    rows={5} 
                                    onChange={handleChange} 
                                    value={data.description} 
                                    maxLength={100} 
                                    className='description-box' />
                        </div>

                        <div className="container">
                            <span className="label" >Upload Images (max 4) :</span>
                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                    </div>                    
                    </form>
                </div>
                <div className='sell_bottom'>
                <button className='upload' onClick={handleSubmit}>Upload</button>
                </div> 
            </div>
        </div>
        <Footer />
        </div>
    );
}

export default Sell;

