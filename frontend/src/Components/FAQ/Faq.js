import React, { useState } from 'react';
import "./Faq.css";
import { FaPlus } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

const Faq = () => {
  const [openStates, setOpenStates] = useState([false, false, false, false, false]);

  const ques = [
    "What is this platform about?",
    "Is it free to use?",
    "How do I sell a book?",
    "How do I contact the seller?",
    "I have books to donate. Can I use this platform?"
  ];

  const ans = [
    "This is a dedicated online marketplace for buying and selling second-hand books. Whether you are a student, parent, or book lover, you can easily find affordable books or list your old ones to sell — all in one place!",
    "✅ Yes! Creating an account, browsing, and listing books is completely free. No hidden charges.",
    "Selling is simple: Sign up → Upload book details (title, author, condition, price, location) → Post it! Buyers near you will contact you directly through our secure chat system.",
    "Once you find a book you like, click on “Contact Seller” to start a direct chat. You can negotiate, ask questions, and finalize the deal without any middleman.",
    "Yes! You can mark your listing as “Free/Donate” while uploading, and people nearby can contact you to collect them."
  ];

  const toggleState = (index) => {
    setOpenStates(prevStates =>
      prevStates.map((state, i) => i === index ? !state : state)
    );
  };

  return (
    <div className="faq">
      <div className="faqHeading">Most Frequently Asked Questions :</div>
      <div className='faqBox'>
        <div className="eachQues">
          {
            ques.map((question, index) => (
              <div key={index} className="quesBox">
                <div className="ques">
                  • {question}
                  <button onClick={() => toggleState(index)} className="toggleBtn">
                    {openStates[index] ? <ImCross /> : <FaPlus />}
                  </button>
                </div>
                {openStates[index] && <div className="ans">⮞ {ans[index]}</div>}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Faq;
