import React, { useState } from 'react';
import './Sell.css';
import { RiArrowDropDownLine } from "react-icons/ri";
import axios from 'axios';
import Banner from "../../Components/Banner/Banner"
import Footer from "../../Components/Footer/Footer"
import { useLocation } from 'react-router-dom';


const Sell = () => {

    const [data, setData] = useState({
        book_name: "",
        desc: "",
        price: "",
        board: "",
        classNo: "",
        subject: "",
        author: "",
        medium: "",

    });

    const handleChange = (e) => {
        setData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        console.log(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("", data);

        } catch (error) {
            console.error(error.response?.data || "Upload failed");
        }
    };

    // Image uploading

    const [images, setImages] = useState([]);   

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);

        // Limit to 4 files
        if (files.length > 4) {
        alert("You can only upload up to 4 images.");
        return;
        }

        setImages(files);
    };

    const handleUpload = async () => {
        try {
        const res = await axios.post('http://localhost:5000/upload', {
            image: images
        });
        alert('Image uploaded successfully!');
        } catch (err) {
        console.error(err);
        alert('Upload failed!');
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
        }
    };

    // Class
    const [classNo, setClass] = useState("");

    const handleClassChange = (e) => {
        setClass(e.target.value);
    };

    // Subject
    const [subject, setSubject] = useState("");
    const [customSubject, setCustomSubject] = useState("");

    const handleSubjectChange = (e) => {
        const selected = e.target.value;
        setSubject(selected);
        if (selected !== "Others") {
        setCustomSubject("");
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
                            <input type="text" name="book_name" onChange={handleChange} value={data.title} maxLength={70} className='sell_input' />
                        </div>
                        <div className="container">
                            <span className="label">Board :</span>
                            <select
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
                            onChange={(e) => setCustomBoard(e.target.value)}
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
                            {board === "Others" && (
                            <input
                            type="text"
                            placeholder="Enter Subject Name"
                            value={customSubject}
                            onChange={(e) => setCustomSubject(e.target.value)}
                            className="sell_input"
                            />
                        )}
                        </div>

                        <div className="container">
                        <span className="label">Price (in ₹):</span>
                        <select
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
                            onChange={(e) => setCustomPrice(e.target.value)}
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
                                    name="desc"  
                                    wrap="soft" 
                                    rows={5} 
                                    onChange={handleChange} 
                                    value={data.desc} 
                                    maxLength={100} 
                                    className='description-box' />
                        </div>

                        <div className="container">
                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={handleImageChange}
                            />

                            {images.length > 0 && (
                                <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                                {images.map((file, index) => (
                                    <img
                                    key={index}
                                    src={URL.createObjectURL(file)}
                                    alt={`preview-${index}`}
                                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                                    />
                                ))}
                        </div>
                      )}
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

