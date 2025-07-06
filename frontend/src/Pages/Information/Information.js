import React from 'react';
import "./Information.css";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import { useLocation } from 'react-router-dom';
import bookimg from './book.png'
import studentimg from './student.png'


const Home = () => {
    return(
        <div>
            <Banner />
            <div className="basic_text">
            <span style= {{display: "inline-block"}}>
            <b>TextTradeX</b> is a platform designed to explore the world where knowledge blooms. It facilitates
            the <b>buying and selling of educational books </b> 
             exclusively for school students. It aims to create an accessible, structured, and affordable space where 
            academic resources can be exchanged efficiently among peers.
            <br></br>
            <img
                    src= {bookimg}
                    alt="book"
                    className='infoImg'
                    style = {{float: "right"}} />
            <br></br>
            <h3>1. Wide Range of Academic Resources :</h3>
            The platform caters to students from Classes 1 to 12, offering a wide range of materials including 
            textbooks, reference guides, practice papers, and supplementary learning aids. It supports various 
            educational boards such as CBSE, ICSE, State Boards and many more, making it a versatile solution for learners 
            across India.
            <br></br>
            <br></br>
            <h3>2. Promoting Sustainability and Affordability : </h3>
            TextTradeX <b>promotes sustainable and cost-effective learning </b> by encouraging the reuse of books. 
            This <b>not only reduces the financial burden on families but also supports environmentally conscious 
            practices </b>by extending the life cycle of printed materials.
            <br></br>
            <br></br>
            <h3>3. Book Listing Process : </h3>
            Listing a book is straightforward: users can upload images, enter important details such as subject, 
            class, board and price, and make the book available to other students in just a few clicks. 
            The platform's clean interface ensures a smooth experience for both buyers and sellers.
            <br></br>
            <br></br>
            <h3>4. Real-Time Chat and Communication : </h3>
            One of TextTradeX’s standout features is its <b>integrated chat system, </b>
            which enables real-time communication between users. This direct messaging system allows students and parents 
            to ask questions, negotiate prices, and coordinate the exchange of books in a secure and convenient way.
            <br></br>
                <img
                    src= {studentimg}
                    alt="book"
                    className='infoImg' 
                    style ={{float: "left"}} />
            <br></br>
            <br></br>
            Overall, TextTradeX provides a <b>student-friendly and trustworthy environment </b> that bridges the gap 
            between those who wish to sell their academic books and those seeking quality educational resources. 
            It empowers the student community by making education more affordable, collaborative, and connected.
              
            </span>



            </div>
            <Footer />
        </div>
    )
}

export default Home;
