import React, { useState } from 'react';
import './Sell.css';
import { RiArrowDropDownLine } from "react-icons/ri";

const Sell = () => {

    const [data, setData] = useState({
        title: "",
        desc: "",
        price: "",
        board: "",
        classNo: "",
        subject: "",
        author: "",
        medium: "",

    });

    const boardOptions = [
        "CBSE",
        "ICSE",
        "CISCE",
        "IGCSE",
        "NIOS",
        "State Board",
        "IB",
        "Other"
    ].sort();

    const classOptions = [
        "Nursery",
        "KG",
        "1", "2", "3", "4", "5", "6",
        "7", "8", "9", "10", "11", "12"
    ];

    const subjectOptions = [
        "Hindi", "English", "Maths", "Chemistry", "Biology",
        "Physics", "Economics", "History", "Political Science", "Other"
        , "Civics"
    ].sort();

    const [isOtherBoard, setIsOtherBoard] = useState(false);
    const [isOtherSubject, setIsOtherSubject] = useState(false);


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

    return (
        <div className="screen">
            <div className="mainBox">
                <div className='sellHeader'>
                    <span>SELL</span>
                </div>
                <div className='center'>
                    <form className='form'>

                        <div className="container">
                            <span className="label">Title :</span>
                            <input type="text" name="title" onChange={handleChange} value={data.title} maxLength={70} className='input' />
                        </div>

                        <div className="container">
                            <span className="label">Description :</span>
                            <input type="text" name="desc" onChange={handleChange} value={data.desc} maxLength={100} className='input' />
                        </div>

                        <div className="container">
                            <span className="label">Price (in ₹) :</span>
                            <input type="text" name="price" onChange={handleChange} value={data.price} className='input' />
                        </div>

                        <div className="container">
                            <span className="label">Board :</span>
                            <select
                                name="board"
                                value={boardOptions.includes(data.board) ? data.board : "Other"} className='input'
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (value === "Other") {
                                        setIsOtherBoard(true);
                                        setData(prev => ({ ...prev, board: "" }));
                                    } else {
                                        setIsOtherBoard(false);
                                        setData(prev => ({ ...prev, board: value }));
                                    }
                                }}
                            >
                                <option value="">Select Board</option>
                                {boardOptions.map((board, idx) => (
                                    <option key={idx} value={board}>{board}</option>
                                ))}
                            </select>

                            {isOtherBoard && (
                                <input
                                    type="text"
                                    name="board"
                                    placeholder="Enter board"
                                    value={data.board}
                                    onChange={handleChange}
                                    className='input'
                                />
                            )}
                        </div>

                        <div className="container">
                            <span className="label">Class :</span>
                            <select className='input' name="classNo" value={data.classNo} onChange={handleChange}>
                                <option value="">Select Class</option>
                                {classOptions.map((cls, index) => (
                                    <option key={index} value={cls}>{cls}</option>
                                ))}
                            </select>
                        </div>

                        <div className="container">
                            <span className="label">Subject :</span>
                            <select
                                name="subject" className='input'
                                value={subjectOptions.includes(data.subject) ? data.subject : "Other"}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (value === "Other") {
                                        setIsOtherSubject(true);
                                        setData(prev => ({ ...prev, subject: "" }));
                                    } else {
                                        setIsOtherSubject(false);
                                        setData(prev => ({ ...prev, subject: value }));
                                    }
                                }}
                            >
                                <option value="">Select Subject</option>
                                {subjectOptions.map((sub, idx) => (
                                    <option key={idx} value={sub}>{sub}</option>
                                ))}
                            </select>

                            {isOtherSubject && (
                                <input
                                    type="text"
                                    name="subject"
                                    className='input'
                                    placeholder="Enter subject"
                                    value={data.subject}
                                    onChange={handleChange}

                                />
                            )}
                        </div>

                        <div className="container">
                            <span className="label">Author (optional) :</span>
                            <input type="text" className='input' name="author" onChange={handleChange} value={data.author} />
                        </div>

                        <div className="container">
                            <span className="label">Medium :</span>
                            <input type="text" className='input' name="medium" onChange={handleChange} value={data.medium} />
                        </div>

                    </form>
                </div>
                <button className='upload' onClick={handleSubmit}>Upload</button>
            </div>
        </div>
    );
}

export default Sell;
