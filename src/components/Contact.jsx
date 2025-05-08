import React, { useState } from 'react';
import './Contact.css';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);

    // Simulate sending animation and auto reset
    setTimeout(() => {
      setIsSent(false);
    }, 2000);
  };

  return (
    <div className="contact-container">
      {isSent ? (
        <div className="sent-confirmation">
          <FaCheckCircle className="sent-icon" />
          <p>Message Sent!</p>
        </div>
      ) : (
        <>
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">
              Send <FaPaperPlane style={{ marginLeft: '8px' }} />
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Contact;
